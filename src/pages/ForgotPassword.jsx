import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiMail, FiSend, FiShield, FiArrowRight } from "react-icons/fi";
import KenBurnsBackground from "../components/KenBurnsBackground";
import bgImage from "../Assets/login-bg.jpg";

export default function ForgotPassword() {
  const { forgotPassword } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await forgotPassword(email);
      setSent(true);
      setTimeout(() => navigate("/reset-password", { state: { email } }), 1800);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="page-shell relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-32 md:px-12">
      <KenBurnsBackground image={bgImage} />

      <form
        onSubmit={handleSubmit}
        className="corner-frame animate-fade-up relative z-10 w-full max-w-md rounded-[1.75rem] border border-(--color-grid-line-strong) bg-[rgba(5,7,13,0.82)] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-md"
      >
        <div className="mb-6 flex items-center gap-3 rounded-full border border-(--color-grid-line-strong) bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-(--color-muted)">
          <FiShield className="text-(--color-red)" />
          Account recovery
        </div>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-blue)/10 text-(--color-blue)">
            <FiMail className="text-xl" />
          </div>
          <div>
            <p className="font-mono-label text-[10px] uppercase tracking-[0.3em] text-(--color-red)">Recovery</p>
            <h1 className="text-2xl font-semibold text-white">Forgot password</h1>
          </div>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-(--color-muted)">
          Enter your account email and we'll send a 6-digit reset code.
        </p>

        {error && <p className="mb-4 rounded-2xl border border-(--color-red)/30 bg-(--color-red)/10 px-4 py-3 text-sm text-(--color-red)">{error}</p>}
        {sent && (
          <p className="mb-4 rounded-2xl border border-(--color-blue)/30 bg-(--color-blue)/10 px-4 py-3 text-sm text-(--color-blue)">
            If that email exists, a code is on its way. Redirecting…
          </p>
        )}

        <div className="rounded-2xl border border-(--color-grid-line-strong) bg-white/5 p-4">
          <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
            <FiMail /> Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={sent}
            className="w-full bg-transparent py-2 text-white outline-none placeholder:text-(--color-muted) disabled:opacity-50"
            placeholder="you@example.com"
          />
        </div>

        <button type="submit" disabled={submitting || sent} className="btn btn-solid mt-2 w-full disabled:opacity-50">
          <FiSend />
          {submitting ? "Sending…" : "Send reset code"}
        </button>

        <p className="mt-4 text-center text-sm text-(--color-muted)">
          Remembered it?{" "}
          <Link to="/login" className="link-underline text-white">
            Log in
          </Link>
        </p>

        <div className="mt-5 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.25em] text-(--color-muted)">
          <span>Secure recovery</span>
          <FiArrowRight className="text-(--color-red)" />
        </div>
      </form>
    </main>
  );
}
