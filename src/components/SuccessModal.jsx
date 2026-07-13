import { useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function SuccessModal({ title, message, onContinue, autoContinueMs = 1500 }) {
  useEffect(() => {
    const timer = setTimeout(onContinue, autoContinueMs);
    return () => clearTimeout(timer);
  }, [onContinue, autoContinueMs]);

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
      <div className="corner-frame animate-fade-up relative w-full max-w-sm space-y-4 border border-(--color-grid-line-strong) bg-(--color-blueprint-light) p-8 text-center">
        <FiCheckCircle className="mx-auto text-4xl text-(--color-blue)" style={{ filter: "drop-shadow(0 0 8px var(--color-blue-glow))" }} />
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-sm text-(--color-muted)">{message}</p>

        <button onClick={onContinue} className="btn btn-solid w-full">
          Continue
        </button>
      </div>
    </div>
  );
}
