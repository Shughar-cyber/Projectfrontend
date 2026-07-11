import { createContext, useContext, useEffect, useRef, useState } from "react";
import { api } from "../Api/api";

const AuthContext = createContext(null);

const INACTIVITY_LIMIT_MS = 5 * 60 * 1000;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data } = await api.get("/auth/me");
        setUser(data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const signup = async ({ name, email, password }) => {
    const { data } = await api.post("/auth/signup", { name, email, password });
    return data;
  };

  const login = async ({ email, password }) => {
    const { data } = await api.post("/auth/login", { email, password });
    setUser(data.user);
    return data.user;
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

  const updateProfile = async ({ name, email }) => {
    const { data } = await api.patch("/users/profile", { name, email });
    setUser(data.user);
    return data.user;
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
    setUser(data.user);
    return data.user;
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