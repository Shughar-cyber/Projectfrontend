import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { api } from "../Api/api";
import EditProfileModal from "../components/EditProfile";
import ChangePasswordModal from "../components/ChangePassword";
import { Link } from "react-router-dom";
import { FiGrid, FiMail, FiEdit2, FiLock, FiLogOut, FiCalendar, FiShield, FiCompass, FiArrowRight, FiZap } from "react-icons/fi";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [message, setMessage] = useState("");
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  useEffect(() => {
    api
      .get("/users/dashboard")
      .then(({ data }) => setMessage(data.message))
      .catch(() => setMessage(""));
  }, []);

  const initials = (user?.name || "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })
    : null;

  return (
    <main className="page-shell flex min-h-screen items-center justify-center px-6 pb-20 pt-28 md:px-12">
      <div className="w-full max-w-2xl">
        <p className="font-mono-label mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-(--color-red)">
          <FiGrid /> Protected
        </p>

        <div className="corner-frame animate-fade-up overflow-hidden rounded-[1.9rem] border border-(--color-grid-line-strong) bg-[rgba(5,7,13,0.82)] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-(--color-blue) bg-(--color-blue)/10 text-xl font-semibold text-(--color-blue)">
                {initials || "?"}
              </div>
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-(--color-grid-line-strong) bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-(--color-muted)">
                  <FiZap className="text-(--color-red)" />
                  Account overview
                </div>
                <h1 className="text-2xl font-semibold text-white">
                  {message || user?.name || "Welcome back"}
                </h1>
                <p className="mt-1 flex items-center gap-1 text-sm text-(--color-muted)">
                  <FiMail /> {user?.email}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-(--color-grid-line-strong) bg-gradient-to-br from-(--color-blue)/10 to-(--color-red)/10 px-4 py-3 text-sm text-(--color-muted)">
              <p className="font-mono-label text-[10px] uppercase tracking-[0.25em] text-(--color-red)">Status</p>
              <p className="mt-1 text-base font-semibold text-white">Active account</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-(--color-grid-line-strong) pt-6 text-xs uppercase tracking-widest text-(--color-muted) sm:grid-cols-2">
            <span className="flex items-center gap-2 rounded-2xl border border-(--color-grid-line-strong) bg-white/5 px-3 py-3">
              <FiShield className="text-(--color-blue)" />
              Status: <span className="text-white">Active</span>
            </span>
            {memberSince && (
              <span className="flex items-center gap-2 rounded-2xl border border-(--color-grid-line-strong) bg-white/5 px-3 py-3">
                <FiCalendar className="text-(--color-blue)" />
                Member since: <span className="text-white">{memberSince}</span>
              </span>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => setShowEditProfile(true)} className="btn btn-ghost">
              <FiEdit2 />
              Edit profile
            </button>
            <button onClick={() => setShowChangePassword(true)} className="btn btn-ghost">
              <FiLock />
              Change password
            </button>
            <button onClick={logout} className="btn btn-outline-red">
              <FiLogOut />
              Log out
            </button>
          </div>
        </div>

        <Link
          to="/explore"
          className="corner-frame animate-fade-up mt-6 flex items-center justify-between rounded-[1.6rem] border border-(--color-grid-line-strong) bg-[rgba(10,13,20,0.72)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--color-blue) hover:bg-[rgba(13,17,26,0.84)]"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="flex items-center gap-3 text-white">
            <FiCompass className="text-(--color-blue)" />
            Explore featured architectural projects
          </span>
          <FiArrowRight className="text-(--color-muted)" />
        </Link>
      </div>

      {showEditProfile && <EditProfileModal onClose={() => setShowEditProfile(false)} />}
      {showChangePassword && <ChangePasswordModal onClose={() => setShowChangePassword(false)} />}
    </main>
  );
}
