import { FiCompass } from "react-icons/fi";
import BuildingCard from "../components/BuildingCard";
import Reveal from "../components/Reveal";
import BlueprintBuilding from "../components/BlueprintBuilding";

import projectOne from "../assets/explore/project-1.jpg";
import projectTwo from "../assets/explore/project-2.jpg";
import projectThree from "../assets/explore/project-3.jpg";
import projectFour from "../assets/explore/project-4.jpg";
import projectFive from "../assets/explore/project-5.jpg";

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
    <main className="relative min-h-screen px-6 pb-20 pt-28 md:px-12">
      <BlueprintBuilding className="pointer-events-none absolute -right-35 top-10 h-140 w-100 opacity-15" />

      <div className="relative z-10">
        <p className="font-mono-label mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-(--color-red)">
          <FiCompass /> Explore
        </p>
        <h1 className="animate-fade-up max-w-2xl text-3xl font-semibold text-white md:text-4xl">
          A closer look at selected work
        </h1>
        <p className="animate-fade-up mt-3 max-w-xl text-(--color-muted)" style={{ animationDelay: "0.1s" }}>
          Five projects spanning heritage, cultural, institutional, corporate, and
          landmark design each drafted, detailed, and built out in phases.
        </p>

        <div className="mt-12 flex flex-col gap-8 pb-12">
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