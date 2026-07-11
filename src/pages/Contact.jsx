import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-6 pt-24">
      <div className="corner-frame animate-fade-up w-full max-w-md border border-(--color-grid-line-strong) bg-(--color-blueprint)/70 p-8 text-center backdrop-blur-sm">
        <p className="font-mono-label mb-3 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-(--color-red)">
          <FiMail /> Contact
        </p>
        <h1 className="text-2xl font-semibold text-white">Get in touch</h1>
        <p className="mt-3 text-sm text-(--color-muted)">
          Your dream project starts with a conversation. Get in touch and let's build something remarkable.

        </p>

        <a
          href="mailto:shughar.arch@gmail.com"
          className="btn btn-solid mt-6 w-full"
        >
          <FiSend />
          shughar.arch@gmail.com
        </a>

        <div className="mt-6 flex items-center justify-center gap-5 text-lg text-(--color-muted)">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        </div>
      </div>
    </main>
  );
}