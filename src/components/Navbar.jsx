import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiHome, FiGrid, FiInfo, FiMail, FiLogIn, FiUserPlus, FiLogOut, FiMenu, FiX, FiCompass,} from "react-icons/fi";

const navLinkClass = ({ isActive }) =>
  `link-underline flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors ${
    isActive
      ? "active bg-[var(--color-blue)]/10 text-white"
      : "text-[var(--color-muted)] hover:text-white"
  }`;

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home", icon: FiHome, show: true },
    { to: "/explore", label: "Explore", icon: FiCompass, show: !!user },
    { to: "/dashboard", label: "Dashboard", icon: FiGrid, show: !!user },
    { to: "/about", label: "About", icon: FiInfo, show: true },
    { to: "/contact", label: "Contact", icon: FiMail, show: true },
  ];

  const initials = (user?.name || "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header
      className={`corner-frame fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-(--color-grid-line-strong) bg-(--color-blueprint)/95 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-md"
          : "border-b border-transparent bg-(--color-blueprint)/60 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12">

        <Link to="/" className="group flex flex-col leading-tight">
          <span className="flex items-center gap-2 text-lg font-semibold tracking-wide text-white">
            <span
              className="pulse-dot h-1.5 w-1.5 rounded-full bg-(--color-red) transition-transform duration-300 group-hover:scale-150"
            />
            SHUGHAR
            <span className="text-(--color-muted) transition-colors duration-300 group-hover:text-(--color-blue)">
              ENTERPRISES
            </span>
          </span>
          <span className="font-mono-label text-[10px] uppercase tracking-[0.25em] text-(--color-muted)">
            Arch. Portfolio
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links
            .filter((l) => l.show)
            .map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} className={navLinkClass}>
                <Icon className="text-base" />
                <span className="uppercase tracking-widest">{label}</span>
              </NavLink>
            ))}

          <span className="mx-3 h-5 w-px bg-(--color-grid-line-strong)" />

          {user ? (
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 font-mono-label text-xs text-(--color-muted)">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-(--color-blue) text-[10px] font-semibold text-(--color-blue)">
                  {initials || "?"}
                </span>
                {user?.name?.split(" ")[0] || "Account"}
              </span>
              <button onClick={logout} className="btn btn-outline-red">
                <FiLogOut />
                Log out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="btn btn-ghost">
                <FiLogIn />
                Log in
              </Link>
              <Link to="/signup" className="btn btn-solid">
                <FiUserPlus />
                Sign up
              </Link>
            </div>
          )}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-8 w-8 items-center justify-center text-2xl text-white md:hidden"
          aria-label="Toggle menu"
        >
          <FiMenu className={`absolute transition-all duration-300 ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`} />
          <FiX className={`absolute transition-all duration-300 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`} />
        </button>
      </div>

      <div
        className="h-px w-full opacity-70"
        style={{
          background: "linear-gradient(90deg, transparent, var(--color-red), var(--color-blue), transparent)",
        }}
      />

      {open && (
        <nav className="animate-slide-down flex flex-col gap-1 border-t border-(--color-grid-line-strong) bg-(--color-blueprint) px-6 py-4 md:hidden">
          {links
            .filter((l) => l.show)
            .map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded px-2 py-3 text-sm uppercase tracking-widest ${
                    isActive ? "bg-(--color-blue)/10 text-white" : "text-(--color-muted)"
                  }`
                }
              >
                <Icon />
                {label}
              </NavLink>
            ))}

          <div className="mt-2 flex flex-col gap-2 border-t border-(--color-grid-line-strong) pt-4">
            {user ? (
              <>
                <span className="flex items-center gap-2 px-2 font-mono-label text-xs text-(--color-muted)">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-(--color-blue) text-[10px] font-semibold text-(--color-blue)">
                    {initials || "?"}
                  </span>
                  {user?.name}
                </span>
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="btn btn-outline-red w-full"
                >
                  <FiLogOut />
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)} className="btn btn-ghost w-full">
                  <FiLogIn />
                  Log in
                </Link>
                <Link to="/signup" onClick={() => setOpen(false)} className="btn btn-solid w-full">
                  <FiUserPlus />
                  Sign up
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}