import { Link } from "react-router-dom";
import { FiLogIn, FiUserPlus, FiArrowRight, FiGrid } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import BlueprintBuilding from "../components/BlueprintBuilding";
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

export default function Home() {
  const { user } = useAuth();
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 text-center">
      <BlueprintBuilding className="pointer-events-none absolute -right-15 top-0 h-180 w-125 opacity-30 md:right-10" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <p className="animate-fade-up font-mono-label mb-4 text-xs uppercase tracking-[0.3em] text-(--color-red)">
          Architectural Portfolio
        </p>
        <h1
          className="animate-fade-up max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl"
          style={{ animationDelay: "0.1s" }}
        >
          Designed for today.<span className="text-(--color-red)">Built for tomorrow.</span>
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-(--color-muted)"
          style={{ animationDelay: "0.2s" }}
        >
          From concept to completion, we create spaces that inspire, endure and redefine the way people experience the built environment.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-5 sm:flex-row sm:justify-center sm:items-stretch">
          {featured.map((building, i) => (
            <div
              key={building.name}
              className="corner-frame animate-fade-up group relative h-72 w-full max-w-xs overflow-hidden sm:w-72"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
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
        </div>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.5s" }}
        >
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
        </div>
      </div>
    </main>
  );
}
