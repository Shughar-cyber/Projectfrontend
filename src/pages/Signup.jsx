import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiUserPlus, FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiShield, FiArrowRight, FiPhone } from "react-icons/fi";
import KenBurnsBackground from "../components/KenBurnsBackground";
import bgImage from "../Assets/signup-bg.jpg";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", name: "", email: "", password: "", phone: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.username || form.username.length < 3) {
      setError("Please provide a username (at least 3 characters).");
      return;
    }
    const phoneClean = form.phone.replace(/[^0-9+]/g, "");
    const phoneValid = /^\+?[0-9]{7,15}$/.test(phoneClean);
    if (!phoneValid) {
      setError("Please provide a valid phone number (digits, optional +).");
      return;
    }

    setSubmitting(true);
    try {
      await signup(form);
      navigate("/verify-email", { state: { email: form.email } });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Try again.");
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
          Join the Shughar community
        </div>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-blue)/10 text-(--color-blue)">
            <FiUserPlus className="text-xl" />
          </div>
          <div>
            <p className="font-mono-label text-[10px] uppercase tracking-[0.3em] text-(--color-red)">Registration</p>
            <h1 className="text-2xl font-semibold text-white">Create an account</h1>
          </div>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-(--color-muted)">
          Build your profile, verify your email, and step into a more polished experience.
        </p>

        {error && <p className="mb-4 rounded-2xl border border-(--color-red)/30 bg-(--color-red)/10 px-4 py-3 text-sm text-(--color-red)">{error}</p>}

        <div className="space-y-4">
          <div className="rounded-2xl border border-(--color-grid-line-strong) bg-white/5 p-4">
            <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
              <FiUser /> Username
            </label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              minLength={3}
              className="w-full bg-transparent py-2 text-white outline-none placeholder:text-(--color-muted)"
              placeholder="Choose a username"
            />
          </div>

          <div className="rounded-2xl border border-(--color-grid-line-strong) bg-white/5 p-4">
            <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
              <FiUser /> Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent py-2 text-white outline-none placeholder:text-(--color-muted)"
              placeholder="Your full name"
            />
          </div>

          <div className="rounded-2xl border border-(--color-grid-line-strong) bg-white/5 p-4">
            <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
              <FiPhone /> Phone
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full bg-transparent py-2 text-white outline-none placeholder:text-(--color-muted)"
              placeholder="e.g. +2348012345678"
            />
          </div>

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
                minLength={8}
                className="w-full bg-transparent py-2 pr-8 text-white outline-none placeholder:text-(--color-muted)"
                placeholder="Minimum 8 characters"
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
        </div>

        <button type="submit" disabled={submitting} className="btn btn-solid mt-2 w-full disabled:opacity-50">
          <FiUserPlus />
          {submitting ? "Creating account…" : "Sign up"}
        </button>

        <p className="mt-4 text-center text-sm text-(--color-muted)">
          Already have an account?{" "}
          <Link to="/login" className="link-underline text-white">
            Log in
          </Link>
        </p>

        <div className="mt-5 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.25em] text-(--color-muted)">
          <span>Verify your email</span>
          <FiArrowRight className="text-(--color-blue)" />
        </div>
      </form>
    </main>
  );
}
