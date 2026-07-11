import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiLogIn, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import KenBurnsBackground from "../components/KenBurnsBackground";
import SuccessModal from "../components/SuccessModal";
import bgImage from "../assets/login-bg.jpg";

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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <KenBurnsBackground image={bgImage} />

      <form
        onSubmit={handleSubmit}
        className="corner-frame animate-fade-up relative z-10 w-full max-w-sm space-y-5 border border-(--color-grid-line-strong) bg-(--color-blueprint)/70 p-8 backdrop-blur-sm"
      >
        <p className="font-mono-label text-[10px] uppercase tracking-[0.3em] text-(--color-red)">
         Access
        </p>
        <h1 className="flex items-center gap-2 text-2xl font-semibold text-white">
          <FiLogIn className="text-(--color-red)" />
          Log in
        </h1>

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
            <FiLock /> Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
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
          <div className="mt-2 text-right">
            <Link to="/forgot-password" className="link-underline text-xs text-(--color-muted)">
              Forgot password?
            </Link>
          </div>
        </div>

        <button type="submit" disabled={submitting} className="btn btn-solid w-full disabled:opacity-50">
          <FiLogIn />
          {submitting ? "Logging in…" : "Log in"}
        </button>

        <p className="text-center text-sm text-(--color-muted)">
          Don't have an account?{" "}
          <Link to="/signup" className="link-underline text-white">
            Sign up
          </Link>
        </p>
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