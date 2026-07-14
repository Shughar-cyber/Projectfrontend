import { FiCompass } from "react-icons/fi";
import BuildingCard from "../components/BuildingCard";
import Reveal from "../components/Reveal";
import BlueprintBuilding from "../components/BlueprintBuilding";

import projectOne from "../Assets/explore/project-1.jpg";
import projectTwo from "../Assets/explore/project-2.jpg";
import projectThree from "../Assets/explore/project-3.jpg";
import projectFour from "../Assets/explore/project-4.jpg";
import projectFive from "../Assets/explore/project-5.jpg";

const projects = [
  {
    variant: "tower",
    image: projectOne,
    name: "Heritage Ascent",
    description: "A bold architectural statement where historic craftsmanship seamlessly integrates with contemporary design. By preserving the character of the original façade while introducing a sleek glass tower above, the project celebrates the harmony between cultural heritage and modern urban development, creating a timeless symbol of architectural evolution",
  },
  {
    variant: "stepped",
    image: projectTwo,
    name: "Gothic Cathedral Landmark",
    description: "A breathtaking example of Gothic-inspired architecture, this cathedral embodies timeless beauty through its soaring spires, intricate detailing, and commanding presence. Designed to inspire awe and reflection, it stands as a masterpiece where heritage, craftsmanship, and architectural grandeur converge.",
  },
  {
    variant: "box",
    image: projectThree,
    name: "Old Quadrangle Hall",
    description: "A timeless celebration of classical architecture, this landmark showcases intricate stone craftsmanship, grand archways, and finely detailed façades. Blending historic character with enduring elegance, the design reflects a legacy of architectural excellence that continues to inspire generations.",
  },
  {
    variant: "twin",
    image: projectFour,
    name: "Twin Spire Towers",
    description: "An iconic expression of engineering excellence, this twin-tower development blends timeless elegance with cutting-edge structural design. Its soaring silhouette and seamless connectivity create a powerful architectural statement, symbolizing innovation, strength, and the ambition of modern urban development.",
  },
  {
    variant: "curved",
    image: projectFive,
    name: "The Sail Spire",
    description: "A striking fusion of innovation and elegance, this sculptural tower redefines the modern skyline through its fluid, twisting form. Designed to symbolize growth and progress, the structure combines bold architectural expression with functional excellence, creating an iconic landmark that inspires from every perspective.",
  },
];

export default function Explore() {
  return (
    <main className="page-shell relative min-h-screen px-6 pb-20 pt-28 md:px-12">
      <BlueprintBuilding className="pointer-events-none absolute -right-35 top-10 h-140 w-100 opacity-15" />

      <div className="relative z-10">
        <div className="animate-fade-up overflow-hidden rounded-[2rem] border border-(--color-grid-line-strong) bg-[rgba(5,7,13,0.72)] p-6 shadow-[0_22px_80px_rgba(0,0,0,0.25)] backdrop-blur-md md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--color-grid-line-strong) bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-(--color-muted)">
                <FiCompass className="text-(--color-red)" />
                Selected portfolio
              </div>
              <h1 className="text-3xl font-semibold text-white md:text-4xl">
                A closer look at selected work
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-(--color-muted)">
                Five projects spanning heritage, cultural, institutional, corporate, and landmark design, each drafted, detailed, and refined in phases.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-(--color-grid-line-strong) bg-white/5 p-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-(--color-red)">Focus</p>
                <p className="mt-1 text-sm text-white">Concept, detailing, and delivery</p>
              </div>
              <div className="rounded-2xl border border-(--color-grid-line-strong) bg-white/5 p-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-(--color-red)">Range</p>
                <p className="mt-1 text-sm text-white">Heritage to landmark-scale works</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-8 pb-12">
          {projects.map((project, i) => (
            <Reveal
              key={project.name}
              delay={i * 0.1}
              className="w-full"
            >
              <BuildingCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
