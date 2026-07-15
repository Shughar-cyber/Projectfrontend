import { FiMail, FiLinkedin, FiSend, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import BlueprintBuilding from "../components/BlueprintBuilding";

const contactMethods = [
  {
    icon: <FiMail />,
    label: "Email Us",
    value: "shugharenterprises@gmail.com",
    href: "mailto:shugharenterprises@gmail.com",
    color: "text-(--color-red)",
    border: "hover:border-(--color-red)",
    glow: "hover:shadow-[0_0_20px_var(--color-red-glow)]",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+234 903 290 2687",
    href: "https://wa.me/2349032902687",
    color: "text-green-400",
    border: "hover:border-green-400",
    glow: "hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]",
  },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    value: "Shughar Enterprises",
    href: "https://www.linkedin.com/in/shughar-enterprises-cyber",
    color: "text-(--color-blue)",
    border: "hover:border-(--color-blue)",
    glow: "hover:shadow-[0_0_20px_var(--color-blue-glow)]",
  },
];

export default function Contact() {
  return (
    <main className="page-shell relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-24">
      <BlueprintBuilding className="pointer-events-none absolute -left-20 top-0 h-180 w-125 opacity-10 md:opacity-15" />

      <div className="relative z-10 w-full max-w-2xl">
        <div className="animate-fade-up mb-10 overflow-hidden rounded-4xl border border-(--color-grid-line-strong) bg-[rgba(5,7,13,0.72)] p-8 shadow-[0_22px_80px_rgba(0,0,0,0.25)] backdrop-blur-md md:p-10">
          <p className="font-mono-label mb-3 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-(--color-red)">
            <FiMail /> Contact
          </p>
          <h1 className="text-center text-4xl font-semibold text-white md:text-5xl">
            Let's <span className="text-shimmer">work together.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center leading-relaxed text-(--color-muted)">
            Have a project in mind, or want to know more about the work? We'd love to hear from you. Reach out through any channel below.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {contactMethods.map((method, i) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className={`animate-fade-up corner-frame card-glow group flex items-center gap-5 rounded-[1.4rem] border border-(--color-grid-line-strong) bg-[rgba(10,13,20,0.72)] p-6 backdrop-blur-md transition-all duration-300 ${method.border} ${method.glow} hover:-translate-y-1 hover:bg-[rgba(13,17,26,0.84)]`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-(--color-grid-line-strong) text-2xl transition-all duration-300 group-hover:scale-110 group-hover:border-current ${method.color}`}>
                {method.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-(--color-muted)">
                  {method.label}
                </span>
                <span className="mt-0.5 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-current">
                  {method.value}
                </span>
              </div>
              <FiSend className={`ml-auto opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 ${method.color}`} />
            </a>
          ))}
        </div>
        <div
          className="animate-fade-up my-10 h-px w-full opacity-60"
          style={{
            animationDelay: "0.4s",
            background: "linear-gradient(90deg, transparent, var(--color-red), var(--color-blue), transparent)",
          }}
        />
        <div className="animate-fade-up mt-2 rounded-3xl border border-(--color-grid-line-strong) bg-white/5 p-6 text-center" style={{ animationDelay: "0.5s" }}>
          <p className="font-mono-label text-xs uppercase tracking-[0.3em] text-(--color-muted)">
            Prefer a direct email?
          </p>
          <a
            href="mailto:shugharenterprises@gmail.com"
            className="btn btn-solid mt-4 inline-flex"
          >
            <FiSend />
            Send us an email
          </a>
        </div>

      </div>
    </main>
  );
}
