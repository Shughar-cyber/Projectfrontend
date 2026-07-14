import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiMail, FiKey, FiCheckCircle, FiShield, FiArrowRight } from "react-icons/fi";
import KenBurnsBackground from "../components/KenBurnsBackground";
import SuccessModal from "../components/SuccessModal";
import bgImage from "../Assets/signup-bg.jpg";

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
    <main className="page-shell relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-32 md:px-12">
      <KenBurnsBackground image={bgImage} />

      <form
        onSubmit={handleSubmit}
        className="corner-frame animate-fade-up relative z-10 w-full max-w-md rounded-[1.75rem] border border-(--color-grid-line-strong) bg-[rgba(5,7,13,0.82)] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-md"
      >
        <div className="mb-6 flex items-center gap-3 rounded-full border border-(--color-grid-line-strong) bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-(--color-muted)">
          <FiShield className="text-(--color-red)" />
          One more step
        </div>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-red)/10 text-(--color-red)">
            <FiCheckCircle className="text-xl" />
          </div>
          <div>
            <p className="font-mono-label text-[10px] uppercase tracking-[0.3em] text-(--color-red)">Verification</p>
            <h1 className="text-2xl font-semibold text-white">Verify your email</h1>
          </div>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-(--color-muted)">
          We sent a 6-digit code to your email. Enter it below to activate your account.
        </p>

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
              className="w-full bg-transparent py-2 tracking-[0.3em] text-white outline-none placeholder:text-(--color-muted)"
            />
          </div>
        </div>

        <button type="submit" disabled={submitting} className="btn btn-solid mt-2 w-full disabled:opacity-50">
          <FiCheckCircle />
          {submitting ? "Verifying…" : "Verify email"}
        </button>

        <div className="mt-4 text-center text-sm text-(--color-muted)">
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

        <div className="mt-5 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.25em] text-(--color-muted)">
          <span>Secure activation</span>
          <FiArrowRight className="text-(--color-red)" />
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
