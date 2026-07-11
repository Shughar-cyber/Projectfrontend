import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiMail, FiKey, FiCheckCircle } from "react-icons/fi";
import KenBurnsBackground from "../components/KenBurnsBackground";
import SuccessModal from "../components/SuccessModal";
import bgImage from "../assets/signup-bg.jpg";

export default function VerifyEmail() {
  const { verifyEmail, resendVerification } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    email: location.state?.email || "",
    code: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [resending, setResending] = useState(false);
  const [resendMessage, setResendMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await verifyEmail(form);
      setShowSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid or expired code. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleResend = async () => {
    setResendMessage("");
    setResending(true);
    try {
      await resendVerification(form.email);
      setResendMessage("A new code has been sent.");
    } catch {
      setResendMessage("Couldn't resend — try again shortly.");
    } finally {
      setResending(false);
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
          Verification
        </p>
        <h1 className="flex items-center gap-2 text-2xl font-semibold text-white">
          <FiCheckCircle className="text-(--color-red)" />
          Verify your email
        </h1>
        <p className="text-sm text-(--color-muted)">
          We sent a 6-digit code to your email. Enter it below to activate your account.
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
            <FiKey /> Verification code
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

        <button type="submit" disabled={submitting} className="btn btn-solid w-full disabled:opacity-50">
          <FiCheckCircle />
          {submitting ? "Verifying…" : "Verify email"}
        </button>

        <div className="text-center text-sm text-(--color-muted)">
          Didn't get a code?{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={resending}
            className="link-underline text-white disabled:opacity-50"
          >
            {resending ? "Sending…" : "Resend code"}
          </button>
          {resendMessage && <p className="mt-2 text-xs text-(--color-muted)">{resendMessage}</p>}
        </div>
      </form>

      {showSuccess && (
        <SuccessModal
          title="Email verified"
          message="Your account is fully activated."
          onContinue={() => navigate("/explore")}
        />
      )}
    </main>
  );
}