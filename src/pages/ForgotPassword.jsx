import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiMail, FiSend } from "react-icons/fi";
import KenBurnsBackground from "../components/KenBurnsBackground";
import bgImage from "../assets/login-bg.jpg";

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
          <FiMail className="text-(--color-red)" />
          Forgot password
        </h1>
        <p className="text-sm text-(--color-muted)">
          Enter your account email and we'll send a 6-digit reset code.
        </p>

        {error && <p className="text-sm text-(--color-red)">{error}</p>}
        {sent && (
          <p className="text-sm text-(--color-blue)">
            If that email exists, a code is on its way. Redirecting…
          </p>
        )}

        <div>
          <label className="mb-1 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
            <FiMail /> Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={sent}
            className="w-full border-b border-(--color-grid-line-strong) bg-transparent py-2 text-white outline-none transition-colors focus:border-(--color-red) disabled:opacity-50"
          />
        </div>

        <button type="submit" disabled={submitting || sent} className="btn btn-solid w-full disabled:opacity-50">
          <FiSend />
          {submitting ? "Sending…" : "Send reset code"}
        </button>

        <p className="text-center text-sm text-(--color-muted)">
          Remembered it?{" "}
          <Link to="/login" className="link-underline text-white">
            Log in
          </Link>
        </p>
      </form>
    </main>
  );
}