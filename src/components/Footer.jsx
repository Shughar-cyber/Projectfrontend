import { Link } from "react-router-dom";
import { FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-(--color-grid-line-strong) bg-(--color-blueprint)/90">
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, var(--color-blue), var(--color-red), transparent)",
        }}
      />

      <div className="px-6 py-14 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <p className="flex items-center gap-2 text-xl font-semibold text-white">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-(--color-red)" />
              SHUGHAR <span className="text-(--color-muted)">ENTERPRISES</span>
            </p>
            <p className="font-mono-label mt-2 text-[10px] uppercase tracking-[0.25em] text-(--color-muted)">
              Arch. Portfolio
            </p>
            <p className="mt-4 text-sm leading-relaxed text-(--color-muted)">
              An architectural portfolio, drafted and built in phases —
              from concept sketch to finished structure.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono-label text-[10px] uppercase tracking-[0.25em] text-(--color-red)">
              Navigate
            </span>
            <nav className="flex flex-col gap-2 text-sm uppercase tracking-widest text-(--color-muted)">
              <Link to="/" className="link-underline w-fit">Home</Link>
              <Link to="/about" className="link-underline w-fit">About</Link>
              <Link to="/contact" className="link-underline w-fit">Contact</Link>
            </nav>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-mono-label text-[10px] uppercase tracking-[0.25em] text-(--color-red)">
              Connect
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/2349032902687"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center border border-(--color-grid-line-strong) text-(--color-muted) transition-all hover:border-(--color-blue) hover:text-(--color-blue) hover:shadow-[0_0_14px_var(--color-blue-glow)]"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center border border-(--color-grid-line-strong) text-(--color-muted) transition-all hover:border-(--color-blue) hover:text-(--color-blue) hover:shadow-[0_0_14px_var(--color-blue-glow)]"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:hello@shughar.dev"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center border border-(--color-grid-line-strong) text-(--color-muted) transition-all hover:border-(--color-red) hover:text-(--color-red) hover:shadow-[0_0_14px_var(--color-red-glow)]"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>
        <div className="font-mono-label mx-auto mt-12 flex max-w-6xl flex-col items-center gap-3 border-t border-(--color-grid-line-strong) pt-6 text-center text-[10px] uppercase tracking-[0.2em] text-(--color-muted) md:flex-row md:justify-between md:text-left">
          <p>© {year} Shughar Enterprises. All rights reserved.</p>
          <p className="text-(--color-muted)/70">
            Discover → Design → Develop → Deliver.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-(--color-muted) transition-colors hover:text-(--color-blue)"
            aria-label="Back to top"
          >
            Back to top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
