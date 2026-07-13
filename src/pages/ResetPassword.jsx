import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiLock, FiMail, FiKey, FiEye, FiEyeOff } from "react-icons/fi";
import KenBurnsBackground from "../components/KenBurnsBackground";
import SuccessModal from "../components/SuccessModal";
import bgImage from "../Assets/login-bg.jpg";

export default function ResetPassword() {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    email: location.state?.email || "",
    code: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.newPassword !== form.confirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    if (form.newPassword.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }

    setSubmitting(true);
    try {
      await resetPassword({
        email: form.email,
        code: form.code,
        newPassword: form.newPassword,
      });
      setShowSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid or expired code. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <KenBurnsBackground image={bgImage} />

      <form
        onSubmit={handleSubmit}
        className="corner-frame animate-fade-up relative z-10 w-full max-w-sm space-y-5 border border-(--color-grid-line-strong) bg-(--color-blueprint)/70 p-8 backdrop-blur-sm"
      >
        <p className="font-mono-label text-[10px] uppercase tracking-[0.3em] text-(--color-red)">
          Recovery
        </p>
        <h1 className="flex items-center gap-2 text-2xl font-semibold text-white">
          <FiLock className="text-(--color-red)" />
          Reset password
        </h1>
        <p className="text-sm text-(--color-muted)">
          Enter the 6-digit code we sent you, along with a new password.
        </p>

        {error && <p className="text-sm text-(--color-red)">{error}</p>}

        <div>
          <label className="mb-1 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
            <FiMail /> Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border-b border-(--color-grid-line-strong) bg-transparent py-2 text-white outline-none transition-colors focus:border-(--color-red)"
          />
        </div>

        <div>
          <label className="mb-1 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
            <FiKey /> Reset code
          </label>
          <input
            name="code"
            value={form.code}
            onChange={handleChange}
            required
            maxLength={6}
            inputMode="numeric"
            placeholder="6-digit code"
            className="w-full border-b border-(--color-grid-line-strong) bg-transparent py-2 tracking-[0.3em] text-white outline-none transition-colors focus:border-(--color-red)"
          />
        </div>

        <div>
          <label className="mb-1 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
            <FiLock /> New password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              required
              minLength={8}
              className="w-full border-b border-(--color-grid-line-strong) bg-transparent py-2 pr-8 text-white outline-none transition-colors focus:border-(--color-red)"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-(--color-muted) transition-colors hover:text-(--color-blue)"
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={-1}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        <div>
          <label className="mb-1 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
            <FiLock /> Confirm new password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            minLength={8}
            className="w-full border-b border-(--color-grid-line-strong) bg-transparent py-2 text-white outline-none transition-colors focus:border-(--color-red)"
          />
        </div>

        <button type="submit" disabled={submitting} className="btn btn-solid w-full disabled:opacity-50">
          <FiLock />
          {submitting ? "Resetting…" : "Reset password"}
        </button>

        <p className="text-center text-sm text-(--color-muted)">
          Didn't get a code?{" "}
          <Link to="/forgot-password" className="link-underline text-white">
            Request again
          </Link>
        </p>
      </form>

      {showSuccess && (
        <SuccessModal
          title="Password reset"
          message="You can now log in with your new password."
          onContinue={() => navigate("/login")}
        />
      )}
    </main>
  );
}
