import { useState } from "react";
import { FiX, FiLock, FiCheck } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import PropTypes from "prop-types";

export default function ChangePasswordModal({ onClose }) {
  const { changePassword } = useAuth();
  const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.newPassword !== form.confirmPassword) {
      setError("New passwords don't match.");
      return;
    }
    if (form.newPassword.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }

    setSubmitting(true);
    try {
      await changePassword({
        currentPassword: form.currentPassword,
        newPassword: form.newPassword,
      });
      setSuccess(true);
      setTimeout(onClose, 1200);
    } catch (err) {
      setError(err.response?.data?.message || "Couldn't update password. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="corner-frame animate-fade-up relative w-full max-w-sm space-y-5 border border-(--color-grid-line-strong) bg-(--color-blueprint-light) p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-(--color-muted) transition-colors hover:text-white"
          aria-label="Close"
        >
          <FiX size={18} />
        </button>

        <p className="font-mono-label text-[10px] uppercase tracking-[0.3em] text-(--color-red)">
          Change Password
        </p>
        <h2 className="text-xl font-semibold text-white">Update your password</h2>

        {error && <p className="text-sm text-(--color-red)">{error}</p>}
        {success && (
          <p className="flex items-center gap-2 text-sm text-(--color-blue)">
            <FiCheck /> Password updated.
          </p>
        )}

        <div>
          <label className="mb-1 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
            <FiLock /> Current password
          </label>
          <input
            type="password"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            required
            className="w-full border-b border-(--color-grid-line-strong) bg-transparent py-2 text-white outline-none transition-colors focus:border-(--color-blue)"
          />
        </div>

        <div>
          <label className="mb-1 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
            <FiLock /> New password
          </label>
          <input
            type="password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            required
            minLength={8}
            className="w-full border-b border-(--color-grid-line-strong) bg-transparent py-2 text-white outline-none transition-colors focus:border-(--color-blue)"
          />
        </div>

        <div>
          <label className="mb-1 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
            <FiLock /> Confirm new password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            minLength={8}
            className="w-full border-b border-(--color-grid-line-strong) bg-transparent py-2 text-white outline-none transition-colors focus:border-(--color-blue)"
          />
        </div>

        <button type="submit" disabled={submitting} className="btn btn-solid w-full disabled:opacity-50">
          <FiLock />
          {submitting ? "Updating…" : "Update password"}
        </button>
      </form>
    </div>
  );
}

ChangePasswordModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
