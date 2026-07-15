import { Link } from "react-router-dom";
import { FiLogIn, FiUserPlus, FiArrowRight, FiGrid, FiLayers, FiPenTool, FiMap, FiMessageSquare, FiHome, FiLayout, FiBox, FiTool, FiClipboard, FiFileText, FiMessageCircle, FiGlobe } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import BlueprintBuilding from "../components/BlueprintBuilding";
import Reveal from "../components/Reveal";
import buildingOne from "../Assets/building-1.jpg";
import buildingTwo from "../Assets/building-2.jpg";

const featured = [
  {
    image: buildingOne,
    name: "Contemporary Open-Living Residence",
    description:
      "Designed with transparency and connectivity in mind, this contemporary structure reimagines urban living through open spaces, cascading terraces, and striking external circulation.",
  },
  {
    image: buildingTwo, 
    name: "Modern Residential Apartments",
    description:
      "A refined expression of contemporary residential design, this development features clean geometric forms, cantilevered balconies, and a minimalist façade that enhances both aesthetics and functionality.",
  },
];

const services = [
  {
    icon: <FiHome />,
    title: "Architectural Design",
    description: "Creating innovative and functional building designs tailored to your vision and lifestyle.",
  },
  {
    icon: <FiLayout />,
    title: "Interior Design",
    description: "Designing beautiful, practical interiors that enhance comfort, productivity, and style.",
  },
  {
    icon: <FiBox />,
    title: "3D Visualization",
    description: "Producing realistic renderings and walkthroughs that bring your ideas to life before construction.",
  },
  {
    icon: <FiTool />,
    title: "Renovation & Remodeling",
    description: "Transforming existing spaces with modern, efficient, and visually appealing design solutions.",
  },
  {
    icon: <FiClipboard />,
    title: "Project Management",
    description: "Coordinating every phase of your project to ensure quality execution, budget control, and timely delivery.",
  },
  {
    icon: <FiMap />,
    title: "Site Planning",
    description: "Developing efficient layouts that maximize land use while meeting environmental and regulatory requirements.",
  },
  {
    icon: <FiFileText />,
    title: "Construction Documentation",
    description: "Preparing detailed architectural drawings and technical documentation for accurate construction.",
  },
  {
    icon: <FiMessageCircle />,
    title: "Design Consultation",
    description: "Providing expert guidance on planning, design strategies, materials, and project feasibility.",
  },
  {
    icon: <FiGlobe />,
    title: "Sustainable Architecture",
    description: "Integrating eco-friendly practices and energy-efficient solutions for a greener, sustainable future.",
  },
];

const testimonials = [
  {
    quote: "Their creativity and attention to detail brought our dream home to life. The entire process was smooth and professional.",
    client: "Sarah A.",
    role: "Homeowner",
  },
  {
    quote: "Excellent communication, innovative designs, and timely delivery. We couldn't be happier with the final result.",
    client: "Michael O.",
    role: "Property Developer",
  },
  {
    quote: "The 3D visualizations made it easy to understand the design before construction even began. Highly recommended.",
    client: "David E.",
    role: "Real Estate Investor",
  },
  {
    quote: "From concept to completion, every detail was handled with professionalism and care. Outstanding work.",
    client: "Grace T.",
    role: "Business Owner",
  },
  {
    quote: "An absolute pleasure to work with. They listened to our needs and delivered a functional, stunning space.",
    client: "Robert K.",
    role: "Restaurant Owner",
  },
  {
    quote: "Their commitment to sustainable design and aesthetic elegance completely transformed our commercial property.",
    client: "Elena V.",
    role: "CEO, Vertex Corp",
  },
];

export default function Home() {
  const { user } = useAuth();
  return (
    <main className="page-shell relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-32 text-center md:px-12">
      <BlueprintBuilding className="animate-float pointer-events-none absolute -right-15 top-0 h-180 w-125 opacity-30 md:right-10" />

      <div className="relative z-10 flex max-w-5xl flex-col items-center">
        <Reveal delay={0.05} className="mb-4">
          <p className="font-mono-label text-xs uppercase tracking-[0.3em] text-(--color-red)">
            Architectural Portfolio
          </p>
        </Reveal>
        <Reveal delay={0.1} className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Designed for today.<span className="text-shimmer">Built for tomorrow.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2} className="mt-6 max-w-xl">
          <p className="text-(--color-muted)">
            From concept to completion, we create spaces that inspire, endure and redefine the way people experience the built environment.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex w-full flex-col items-center gap-5 sm:flex-row sm:justify-center sm:items-stretch">
          {featured.map((building, i) => (
            <div
              key={building.name}
              className="corner-frame card-glow group relative h-72 w-full max-w-xs overflow-hidden sm:w-72"
            >
              <img
                src={building.image}
                alt={building.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--color-blueprint) via-(--color-blueprint)/40 to-transparent" />
              <div className="absolute inset-0 border border-(--color-blue)/0 transition-colors duration-500 group-hover:border-(--color-blue)/60" />

              <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                <h3 className="font-mono-label text-xs uppercase tracking-widest text-white">
                  {building.name}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-(--color-muted) opacity-0 transition-all duration-500 ease-out group-hover:max-h-32 group-hover:opacity-100">
                  {building.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>

        <div id="services" className="mt-32 w-full scroll-mt-24">
          <Reveal delay={0.05} className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Our <span className="text-(--color-red)">Services</span>
            </h2>
            <p className="mt-3 text-sm text-(--color-muted)">
              Everything we offer, right at your fingertips
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 flex justify-center">
            <div className="w-full max-w-sm overflow-hidden rounded-4xl border-4 border-[#2a2a2e] shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.05)]" style={{ background: "#1c1c1e" }}>
              <div className="flex items-center justify-between bg-[#1c1c1e] px-6 pt-3 pb-1">
                <span className="text-[11px] font-semibold text-white">9:41</span>
                <div className="flex items-center gap-1">
             
                  <svg width="17" height="12" viewBox="0 0 17 12" className="fill-white">
                    <rect x="0" y="6" width="3" height="6" rx="1"/>
                    <rect x="4.5" y="4" width="3" height="8" rx="1"/>
                    <rect x="9" y="2" width="3" height="10" rx="1"/>
                    <rect x="13.5" y="0" width="3" height="12" rx="1"/>
                  </svg>

                  <svg width="16" height="12" viewBox="0 0 16 12" className="fill-white">
                    <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0-3.5a5.5 5.5 0 0 1 4.243 1.757l-1.415 1.414A3.5 3.5 0 0 0 8 8a3.5 3.5 0 0 0-2.828 1.171L3.757 7.757A5.5 5.5 0 0 1 8 6zm0-4a9.5 9.5 0 0 1 7.071 3.101L13.657 6.51A7.5 7.5 0 0 0 8 4a7.5 7.5 0 0 0-5.657 2.51L.929 5.1A9.5 9.5 0 0 1 8 2z"/>
                  </svg>

                  <div className="flex items-center gap-0.5">
                    <div className="h-3 w-6 rounded-sm border border-white/60 p-0.5">
                      <div className="h-full w-3/4 rounded-[1px] bg-white" />
                    </div>
                    <div className="h-1.5 w-0.5 rounded-r-sm bg-white/60" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-[#1c1c1e] px-5 py-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-[#0a84ff] text-sm">
                  <svg width="8" height="14" viewBox="0 0 8 14" className="fill-[#0a84ff]">
                    <path d="M7 1L1 7l6 6"/>
                  </svg>
                  Back
                </div>
                <span className="text-base font-semibold text-white">Our Services</span>
                <svg width="18" height="18" viewBox="0 0 24 24" className="fill-none stroke-[#0a84ff] stroke-2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
              <div className="flex flex-col bg-[#1c1c1e] divide-y divide-white/5 max-h-105 overflow-y-auto">
                {services.map((service, i) => (
                  <div
                    key={service.title}
                    className="group flex items-center gap-4 px-5 py-4 transition-all duration-200 active:bg-white/5 hover:bg-white/5"
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] text-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: [
                          "linear-gradient(135deg,#ff3860,#a8001e)",
                          "linear-gradient(135deg,#0a84ff,#005fc9)",
                          "linear-gradient(135deg,#30d158,#1a7a35)",
                          "linear-gradient(135deg,#ff9f0a,#b86800)",
                          "linear-gradient(135deg,#bf5af2,#7a00cc)",
                          "linear-gradient(135deg,#2dd4ff,#0094b3)",
                          "linear-gradient(135deg,#ff453a,#b02a20)",
                          "linear-gradient(135deg,#ffd60a,#9a7c00)",
                          "linear-gradient(135deg,#32d74b,#1a7526)",
                        ][i % 9],
                      }}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm">{service.title}</p>
                      <p className="mt-0.5 text-xs text-[#8e8e93] leading-relaxed line-clamp-2">{service.description}</p>
                    </div>
                    <svg width="7" height="12" viewBox="0 0 7 12" className="shrink-0 fill-none stroke-[#3a3a3c] stroke-2 transition-colors duration-200 group-hover:stroke-[#0a84ff]">
                      <path d="M1 1l5 5-5 5"/>
                    </svg>
                  </div>
                ))}
              </div>
              <div className="flex justify-center bg-[#1c1c1e] pb-3 pt-2">
                <div className="h-1 w-32 rounded-full bg-white/30" />
              </div>
            </div>
          </Reveal>
        </div>

        <div id="testimonials" className="mt-32 w-full scroll-mt-24">
          <Reveal delay={0.05} className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Client <span className="text-(--color-red)">Testimonials</span>
            </h2>
            <p className="mt-3 text-sm text-(--color-muted)">
              What our clients are saying about us
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 flex justify-center">
            <div className="w-full max-w-xl overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">

              <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#128c7e] text-sm font-bold text-white">
                  SE
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">Shughar Enterprises</span>
                  <span className="text-xs text-green-200">Client Reviews</span>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-200">Online</span>
                </div>
              </div>

              <div
                className="flex flex-col gap-3 p-4"
                style={{
                  background: "#0b141a",
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }}>
                <div className="flex justify-center">
                  <span className="rounded-full bg-[#182229] px-3 py-1 text-[10px] text-[#8696a0]">
                    Today
                  </span>
                </div>

                {testimonials.map((review, i) => {
                  const isRight = i % 2 === 0;
                  const time = ["9:14 AM", "9:17 AM", "9:21 AM", "9:25 AM", "9:30 AM", "9:34 AM"][i] || "9:00 AM";
                  return (
                    <div
                      key={review.client}
                      className={`flex items-end gap-2 ${ isRight ? "flex-row-reverse" : "flex-row" }`}
                    >
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${ isRight ? "bg-[#00a884]" : "bg-[#53bdeb]" }`}>
                        {review.client.charAt(0)}
                      </div>
                      <div
                        className={`relative max-w-[80%] rounded-lg px-3 pt-1 pb-2 shadow-md ${
                          isRight
                            ? "rounded-tr-none bg-[#005c4b] text-white"
                            : "rounded-tl-none bg-[#202c33] text-white"
                        }`}
                      >
                        <p className={`mb-1 text-[11px] font-semibold ${ isRight ? "text-[#00a884]" : "text-[#53bdeb]" }`}>
                          {review.client} · <span className="font-normal opacity-70">{review.role}</span>
                        </p>
                        <div className="mb-1 text-xs">⭐⭐⭐⭐⭐</div>
                        <p className="text-sm leading-relaxed text-[#e9edef]">{review.quote}</p>
                        <div className="mt-1 flex items-center justify-end gap-1">
                          <span className="text-[10px] text-[#8696a0]">{time}</span>
                          {isRight && (
                            <svg viewBox="0 0 16 11" width="16" height="11" className="fill-[#53bdeb]">
                              <path d="M11.071.653a.457.457 0 0 0-.342.17L4.965 8.373 1.994 5.563a.5.5 0 0 0-.707.707L4.6 9.574a.5.5 0 0 0 .73-.022l6.076-7.9a.5.5 0 0 0-.335-.999Z"/>
                              <path d="M15.071.653a.457.457 0 0 0-.342.17L8.965 8.373a.5.5 0 0 0 .73.685l6.076-7.9a.5.5 0 0 0-.7-.505Z"/>
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 bg-[#202c33] px-4 py-3">
                <div className="flex-1 rounded-full bg-[#2a3942] px-4 py-2 text-xs text-[#8696a0]">
                  Message...
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00a884] text-white">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"/>
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-24 flex flex-wrap items-center justify-center gap-4">
          {user ? (
            <Link to="/dashboard" className="btn btn-solid">
              <FiGrid />
              Go to dashboard
            </Link>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">
                <FiLogIn />
                Log in
              </Link>
              <Link to="/signup" className="btn btn-solid">
                <FiUserPlus />
                Sign up
              </Link>
            </>
          )}
          <Link to="/about" className="link-underline text-sm text-(--color-muted)">
            More about the project
            <FiArrowRight />
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
