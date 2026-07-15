import { createContext, useContext, useEffect, useRef, useState } from "react";
import { api } from "../Api/api";

const AuthContext = createContext(null);

const INACTIVITY_LIMIT_MS = 10 * 60 * 1000;

const normalizeUser = (userData) => {
  if (!userData) return null;

  const persistedUserId = window.localStorage.getItem("shughar-user-id");
  const incomingUserId = userData.userId || userData.id || userData._id || userData.uuid;
  const resolvedUserId = incomingUserId || persistedUserId || `USR-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

  if (!persistedUserId) {
    window.localStorage.setItem("shughar-user-id", resolvedUserId);
  }

  return {
    ...userData,
    phone: userData.phone || userData.mobile || userData.phoneNumber || "",
    userId: resolvedUserId,
  };
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data } = await api.get("/auth/me");
        setUser(normalizeUser(data.user));
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const signup = async ({ name, email, password, username, phone }) => {
    const { data } = await api.post("/auth/signup", { name, email, password, username, phone });
    return data;
  };

  const login = async ({ email, password }) => {
    const { data } = await api.post("/auth/login", { email, password });
    const normalizedUser = normalizeUser(data.user);
    setUser(normalizedUser);
    return normalizedUser;
  };

  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
  };

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!user) return;

    const resetTimer = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        logout();
      }, INACTIVITY_LIMIT_MS);
    };

    const activityEvents = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"];
    activityEvents.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      activityEvents.forEach((event) => window.removeEventListener(event, resetTimer));
    };

  }, [user]);

  const updateProfile = async ({ name, email, username, phone }) => {
    const { data } = await api.patch("/users/profile", { name, email, username, phone });
    const normalizedUser = normalizeUser(data.user);
    setUser(normalizedUser);
    return normalizedUser;
  };

  const changePassword = async ({ currentPassword, newPassword }) => {
    const { data } = await api.post("/auth/change-password", {
      currentPassword,
      newPassword,
    });
    return data;
  };

  const forgotPassword = async (email) => {
    const { data } = await api.post("/auth/forgot-password", { email });
    return data;
  };

  const resetPassword = async ({ email, code, newPassword }) => {
    const { data } = await api.post("/auth/reset-password", { email, code, newPassword });
    return data;
  };

  const verifyEmail = async ({ email, code }) => {
    const { data } = await api.post("/auth/verify-email", { email, code });
    const normalizedUser = normalizeUser(data.user);
    setUser(normalizedUser);
    return normalizedUser;
  };

  const resendVerification = async (email) => {
    const { data } = await api.post("/auth/resend-verification", { email });
    return data;
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, signup, login, logout, updateProfile, changePassword, forgotPassword, resetPassword, verifyEmail, resendVerification, }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}