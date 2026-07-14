import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiLogIn, FiMail, FiLock, FiEye, FiEyeOff, FiShield, FiArrowRight } from "react-icons/fi";
import KenBurnsBackground from "../components/KenBurnsBackground";
import SuccessModal from "../components/SuccessModal";
import bgImage from "../Assets/login-bg.jpg";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(form);
      setShowSuccess(true);
    } catch (err) {
      if (err.response?.data?.requiresVerification) {
        navigate("/verify-email", { state: { email: err.response.data.email } });
        return;
      }
      setError(err.response?.data?.message || "Invalid email or password.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-32 md:px-12">
      <KenBurnsBackground image={bgImage} />

      <form
        onSubmit={handleSubmit}
        className="corner-frame animate-fade-up relative z-10 w-full max-w-md rounded-[1.75rem] border border-(--color-grid-line-strong) bg-[rgba(5,7,13,0.82)] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-md"
      >
        <div className="mb-6 flex items-center gap-3 rounded-full border border-(--color-grid-line-strong) bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-(--color-muted)">
          <FiShield className="text-(--color-red)" />
          Secure access
        </div>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-red)/10 text-(--color-red)">
            <FiLogIn className="text-xl" />
          </div>
          <div>
            <p className="font-mono-label text-[10px] uppercase tracking-[0.3em] text-(--color-red)">Access</p>
            <h1 className="text-2xl font-semibold text-white">Log in</h1>
          </div>
        </div>

        {error && <p className="mb-4 rounded-2xl border border-(--color-red)/30 bg-(--color-red)/10 px-4 py-3 text-sm text-(--color-red)">{error}</p>}

        <div className="space-y-4">
          <div className="rounded-2xl border border-(--color-grid-line-strong) bg-white/5 p-4">
            <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
              <FiMail /> Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent py-2 text-white outline-none placeholder:text-(--color-muted)"
              placeholder="you@example.com"
            />
          </div>

          <div className="rounded-2xl border border-(--color-grid-line-strong) bg-white/5 p-4">
            <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
              <FiLock /> Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full bg-transparent py-2 pr-8 text-white outline-none placeholder:text-(--color-muted)"
                placeholder="Enter your password"
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
            <div className="mt-3 text-right">
              <Link to="/forgot-password" className="link-underline text-xs text-(--color-muted)">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>

        <button type="submit" disabled={submitting} className="btn btn-solid mt-2 w-full disabled:opacity-50">
          <FiLogIn />
          {submitting ? "Logging in…" : "Log in"}
        </button>

        <p className="mt-4 text-center text-sm text-(--color-muted)">
          Don't have an account?{" "}
          <Link to="/signup" className="link-underline text-white">
            Sign up
          </Link>
        </p>

        <div className="mt-5 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.25em] text-(--color-muted)">
          <span>Protected experience</span>
          <FiArrowRight className="text-(--color-red)" />
        </div>
      </form>

      {showSuccess && (
        <SuccessModal
          title="Login successful"
          message="You're all set — taking you to Explore."
          onContinue={() => navigate("/explore")}
        />
      )}
    </main>
  );
}
