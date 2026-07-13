import { useState } from "react";
import { FiX, FiUser, FiMail, FiSave } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import PropTypes from "prop-types";

export default function EditProfileModal({ onClose }) {
  const { user, updateProfile } = useAuth();
  const [form, setForm] = useState({ name: user?.name || "", email: user?.email || "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await updateProfile(form);
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Couldn't save changes. Try again.");
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
          Edit Profile
        </p>
        <h2 className="text-xl font-semibold text-white">Update your details</h2>

        {error && <p className="text-sm text-(--color-red)">{error}</p>}

        <div>
          <label className="mb-1 flex items-center gap-2 text-xs uppercase tracking-widest text-(--color-muted)">
            <FiUser /> Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border-b border-(--color-grid-line-strong) bg-transparent py-2 text-white outline-none transition-colors focus:border-(--color-blue)"
          />
        </div>

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
            className="w-full border-b border-(--color-grid-line-strong) bg-transparent py-2 text-white outline-none transition-colors focus:border-(--color-blue)"
          />
        </div>

        <button type="submit" disabled={submitting} className="btn btn-solid w-full disabled:opacity-50">
          <FiSave />
          {submitting ? "Saving…" : "Save changes"}
        </button>
      </form>
    </div>
  );
}

EditProfileModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
