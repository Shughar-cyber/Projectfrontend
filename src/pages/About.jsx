import { useState } from "react";
import { FiInfo, FiAward, FiTarget, FiEye, FiHeart, FiShield, FiZap, FiChevronDown, FiCheckCircle, FiCompass, FiLayers, FiPenTool,} from "react-icons/fi";
import BlueprintBuilding from "../components/BlueprintBuilding";
import Reveal from "../components/Reveal";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "150+", label: "Happy Clients" },
  { value: "15+", label: "Awards Won" },
];

const values = [
  {
    icon: <FiHeart />,
    title: "Passion for Design",
    description:
      "Every project is driven by a deep passion for great architecture. We believe beautiful spaces transform the way people live and work.",
  },
  {
    icon: <FiShield />,
    title: "Integrity & Trust",
    description:
      "We build long-lasting relationships grounded in transparency, honest communication, and a commitment to delivering what we promise.",
  },
  {
    icon: <FiZap />,
    title: "Innovation First",
    description:
      "We embrace cutting-edge technology, modern methodologies, and creative thinking to solve design challenges in unique and effective ways.",
  },
  {
    icon: <FiTarget />,
    title: "Client-Centric Approach",
    description:
      "Your vision is our blueprint. We listen carefully, collaborate closely, and tailor every solution to meet your specific goals and lifestyle.",
  },
];

const highlights = [
  {
    icon: <FiCompass />,
    title: "Context-first thinking",
    description: "We shape each solution around the site, climate, flow, and the people who will use it.",
  },
  {
    icon: <FiLayers />,
    title: "Built for longevity",
    description: "Every detail is layered thoughtfully so the result feels timeless rather than temporary.",
  },
  {
    icon: <FiPenTool />,
    title: "Crafted with care",
    description: "From sketch to execution, we keep the experience personal, refined, and deeply intentional.",
  },
];

const certifications = [
  "Registered Architectural Practice — Nigeria",
  "Member, Nigerian Institute of Architects (NIA)",
  "ISO 9001:2015 Quality Management Certified",
  "LEED Accredited Professional (Sustainable Design)",
  "Certified Project Management Professional (PMP)",
];

const faqs = [
  {
    question: "What types of projects does Shughar Enterprises handle?",
    answer:
      "We handle a wide range of projects including residential homes, commercial buildings, interior design, renovation and remodeling, site planning, and large-scale developments. No project is too big or too small for our team.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A standard residential design typically takes 4–12 weeks from concept to final documentation. We provide a detailed project schedule at the start of every engagement.",
  },
  {
    question: "Do you offer 3D visualizations before construction begins?",
    answer:
      "Yes! We provide high-quality 3D renderings and virtual walkthroughs as part of our design process, so you can fully visualize and approve the design before a single brick is laid.",
  },
  {
    question: "How do I get started with Shughar Enterprises?",
    answer:
      "Simply reach out to us via our Contact page or send us an email. We'll schedule a free initial consultation to understand your needs, discuss your vision, and outline the best path forward.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and depends on the scope, size, and complexity of the work. We provide a clear, itemized proposal after the initial consultation so you always know exactly what you're paying for.",
  },
  {
    question: "Do you manage the construction process as well?",
    answer:
      "Yes. Through our Project Management service, we coordinate and supervise the entire construction process — from contractor selection and scheduling to quality control and final delivery — ensuring your project stays on time and on budget.",
  },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="corner-frame rounded-2xl border border-(--color-grid-line-strong) bg-(--color-blueprint)/70 backdrop-blur-sm transition-all duration-300">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="pr-4 font-semibold text-white">{question}</span>
        <FiChevronDown
          className={`shrink-0 text-xl text-(--color-red) transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-6 text-sm leading-relaxed text-(--color-muted)">{answer}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="page-shell relative overflow-hidden px-6 pt-28 pb-32 md:px-12">
      <BlueprintBuilding className="animate-float pointer-events-none absolute -right-20 top-10 h-auto w-[150%] max-w-50 opacity-10 md:-right-12.5 md:opacity-20" />

      <div className="mx-auto max-w-6xl">
        <section className="mb-24 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal delay={0.05} className="max-w-3xl">
            <p className="mb-3 flex items-center gap-2 font-mono-label text-xs uppercase tracking-[0.3em] text-(--color-red)">
              <FiInfo /> About Us
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              Designing timeless spaces that <span className="text-shimmer">inspire, connect,</span> and endure.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-(--color-muted)">
              Founded over a decade ago, Shughar Enterprises began with a single, unwavering belief: that great architecture has the power to improve lives. From our first small residential project to large-scale commercial developments, we have always approached every design challenge with the same level of dedication, creativity, and care.
            </p>
            <p className="mt-4 text-base leading-relaxed text-(--color-muted)">
              Today, we are a full-service architectural and design firm offering everything from concept sketches and 3D visualizations to complete project management and construction documentation. Our work spans residential, commercial, and public sectors across Nigeria and beyond.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Full-Service Studio",
                "Sustainable Design",
                "Collaborative Delivery",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-(--color-grid-line-strong) bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.25em] text-(--color-muted)"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="corner-frame rounded-[2rem] border border-white/10 bg-[rgba(5,7,13,0.84)] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div className="mb-6 flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-(--color-red)">
                <FiAward /> Design Philosophy
              </div>
              <blockquote className="text-xl leading-relaxed text-white">
                “Architecture should feel effortless, enduring, and deeply human.”
              </blockquote>
              <div className="mt-8 space-y-3">
                {highlights.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="mt-0.5 text-lg text-(--color-red)">{item.icon}</div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-(--color-muted)">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <Reveal delay={0.08} className="mb-24 grid gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="corner-frame card-glow rounded-2xl bg-(--color-blueprint)/70 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-(--color-blueprint)/90"
            >
              <div className="mb-3 h-1.5 w-12 rounded-full bg-linear-to-r from-(--color-red) to-(--color-blue)" />
              <p className="text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
              <p className="mt-2 font-mono-label text-[10px] uppercase tracking-widest text-(--color-muted)">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>

        <section id="about-mission" className="mb-24">
          <Reveal delay={0.05} className="mb-8 max-w-2xl">
            <p className="mb-3 font-mono-label text-xs uppercase tracking-[0.3em] text-(--color-red)">Our Purpose</p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Built to create lasting impact through thoughtful design.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal delay={0.1}>
              <div className="corner-frame rounded-[1.5rem] border-l-2 border-l-(--color-red) bg-(--color-blueprint)/70 p-8 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3 text-xl text-(--color-red)">
                  <FiTarget />
                  <h3 className="font-semibold text-white">Our Mission</h3>
                </div>
                <p className="text-sm leading-relaxed text-(--color-muted)">
                  To design and deliver innovative, functional, and sustainable architectural solutions that exceed client expectations, enrich communities, and create lasting value — all while maintaining the highest standards of professionalism and integrity.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="corner-frame rounded-[1.5rem] border-l-2 border-l-(--color-blue) bg-(--color-blueprint)/70 p-8 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3 text-xl text-(--color-blue)">
                  <FiEye />
                  <h3 className="font-semibold text-white">Our Vision</h3>
                </div>
                <p className="text-sm leading-relaxed text-(--color-muted)">
                  To be the most trusted and innovative architectural firm in Africa — recognized for transforming ideas into iconic structures, shaping skylines, and redefining the standard of design excellence across the continent and beyond.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about-values" className="mb-24">
          <Reveal delay={0.05} className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 font-mono-label text-xs uppercase tracking-[0.3em] text-(--color-red)">What guides us</p>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Our <span className="text-(--color-red)">Core Values</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-(--color-muted)">
              Our principles shape every conversation, drawing, and decision from the first sketch to the final handover.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((val, i) => (
              <Reveal key={val.title} delay={0.08 + i * 0.07}>
                <div className="corner-frame card-glow group rounded-[1.5rem] bg-(--color-blueprint)/70 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-(--color-blueprint)/90">
                  <div className="mb-4 text-2xl text-(--color-red) transition-transform duration-300 group-hover:scale-110">
                    {val.icon}
                  </div>
                  <h3 className="mb-2 font-semibold text-white">{val.title}</h3>
                  <p className="text-sm leading-relaxed text-(--color-muted)">{val.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="about-certifications" className="mb-24">
          <Reveal delay={0.05}>
            <div className="corner-frame rounded-[2rem] bg-(--color-blueprint)/70 p-8 backdrop-blur-sm md:p-12">
              <div className="mb-6 flex items-center gap-3">
                <FiAward className="text-2xl text-(--color-red)" />
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                  Certifications <span className="text-(--color-red)">&</span> Awards
                </h2>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 text-sm text-(--color-muted)">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-base text-(--color-red)" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section id="about-faq">
          <Reveal delay={0.05} className="mb-8">
            <p className="mb-2 font-mono-label text-xs uppercase tracking-[0.3em] text-(--color-red)">Questions answered</p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Frequently Asked <span className="text-(--color-red)">Questions</span>
            </h2>
          </Reveal>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
