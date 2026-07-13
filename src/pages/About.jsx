import { FiInfo } from "react-icons/fi";
import BlueprintBuilding from "../components/BlueprintBuilding";

export default function About() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <BlueprintBuilding className="pointer-events-none absolute -right-20 top-10 h-auto w-[150%] max-w-50 opacity-10 md:-right-12.5 md:opacity-20" />

      <div className="animate-fade-up relative z-10 max-w-xl">
        <p className="font-mono-label mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-(--color-red)">
          <FiInfo /> About
        </p>
        <h1 className="text-3xl font-semibold text-white md:text-4xl">
          Designing timeless spaces that inspire, connect, and endure.
        </h1>
        <p className="mt-5 text-(--color-muted)">
          We design thoughtful, functional, and sustainable spaces that blend creativity with innovation. 
          Our portfolio showcases residential, commercial, and public projects that reflect our commitment to quality, timeless design, and attention to detail. 
          From concept development and planning to 3D visualization and project delivery, we create environments that inspire, serve their purpose, and stand the test of time.

        </p>
        <p className="mt-4 text-(--color-muted)">
          Discover → Design → Develop → Deliver.
        </p>
      </div>
    </main>
  );
}
