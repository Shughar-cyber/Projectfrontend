import { FiMapPin, FiLayers, FiCalendar } from "react-icons/fi";

function BuildingGlyph({ variant }) {
  const common = {
    viewBox: "0 0 200 220",
    className: "blueprint-svg h-40 w-full",
    fill: "none",
  };

  if (variant === "tower") {
    return (
      <svg {...common}>
        <rect x="80" y="30" width="40" height="160" stroke="var(--color-blue)" strokeOpacity="0.5" strokeWidth="1.5" />
        <line x1="100" y1="10" x2="100" y2="30" stroke="var(--color-blue)" strokeOpacity="0.4" strokeWidth="1.5" />
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1="80" y1={40 + i * 14} x2="120" y2={40 + i * 14} stroke="var(--color-blue)" strokeOpacity="0.2" strokeWidth="1" />
        ))}
        <line x1="60" y1="190" x2="140" y2="190" stroke="var(--color-red)" strokeOpacity="0.6" strokeWidth="1.5" />
      </svg>
    );
  }

  if (variant === "stepped") {
    return (
      <svg {...common}>
        <rect x="60" y="120" width="80" height="70" stroke="var(--color-blue)" strokeOpacity="0.5" strokeWidth="1.5" />
        <rect x="72" y="80" width="56" height="40" stroke="var(--color-blue)" strokeOpacity="0.5" strokeWidth="1.5" />
        <rect x="84" y="50" width="32" height="30" stroke="var(--color-blue)" strokeOpacity="0.5" strokeWidth="1.5" />
        {Array.from({ length: 4 }).map((_, i) => (
          <line key={i} x1="60" y1={135 + i * 13} x2="140" y2={135 + i * 13} stroke="var(--color-blue)" strokeOpacity="0.18" strokeWidth="1" />
        ))}
        <line x1="45" y1="190" x2="155" y2="190" stroke="var(--color-red)" strokeOpacity="0.6" strokeWidth="1.5" />
      </svg>
    );
  }

  if (variant === "twin") {
    return (
      <svg {...common}>
        <rect x="50" y="60" width="34" height="130" stroke="var(--color-blue)" strokeOpacity="0.5" strokeWidth="1.5" />
        <rect x="116" y="40" width="34" height="150" stroke="var(--color-blue)" strokeOpacity="0.5" strokeWidth="1.5" />
        <line x1="84" y1="110" x2="116" y2="110" stroke="var(--color-blue)" strokeOpacity="0.4" strokeWidth="1.5" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`a${i}`} x1="50" y1={72 + i * 14} x2="84" y2={72 + i * 14} stroke="var(--color-blue)" strokeOpacity="0.16" strokeWidth="1" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`b${i}`} x1="116" y1={52 + i * 14} x2="150" y2={52 + i * 14} stroke="var(--color-blue)" strokeOpacity="0.16" strokeWidth="1" />
        ))}
        <line x1="35" y1="190" x2="165" y2="190" stroke="var(--color-red)" strokeOpacity="0.6" strokeWidth="1.5" />
      </svg>
    );
  }

  if (variant === "curved") {
    return (
      <svg {...common}>
        <path
          d="M 50 190 L 50 110 Q 100 50 150 110 L 150 190 Z"
          stroke="var(--color-blue)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={i} x1="60" y1={125 + i * 12} x2="140" y2={125 + i * 12} stroke="var(--color-blue)" strokeOpacity="0.16" strokeWidth="1" />
        ))}
        <line x1="35" y1="190" x2="165" y2="190" stroke="var(--color-red)" strokeOpacity="0.6" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="40" y="90" width="120" height="100" stroke="var(--color-blue)" strokeOpacity="0.5" strokeWidth="1.5" />
      {Array.from({ length: 5 }).map((_, col) => (
        <line key={col} x1={56 + col * 22} y1="90" x2={56 + col * 22} y2="190" stroke="var(--color-blue)" strokeOpacity="0.18" strokeWidth="1" />
      ))}
      <line x1="40" y1="130" x2="160" y2="130" stroke="var(--color-blue)" strokeOpacity="0.18" strokeWidth="1" />
      <line x1="40" y1="160" x2="160" y2="160" stroke="var(--color-blue)" strokeOpacity="0.18" strokeWidth="1" />
      <line x1="25" y1="190" x2="175" y2="190" stroke="var(--color-red)" strokeOpacity="0.6" strokeWidth="1.5" />
    </svg>
  );
}

export default function BuildingCard({ variant, image, name, category, location, floors, year, description }) {
  const hasStats = location || floors || year;

  return (
    <div className="corner-frame group relative flex flex-col overflow-hidden border border-(--color-grid-line-strong) bg-(--color-blueprint-light)/60 transition-all duration-300 hover:border-(--color-blue)/40 hover:shadow-lg hover:shadow-(--color-blue)/5 sm:flex-row">

      <div className="relative h-56 w-full shrink-0 overflow-hidden sm:h-auto sm:w-72">
        {image ? (
          <>
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-(--color-blueprint-light) via-(--color-blueprint-light)/20 to-transparent sm:bg-linear-to-r sm:from-transparent sm:via-transparent sm:to-(--color-blueprint-light)/60" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-(--color-blueprint-lighter)/30">
            <BuildingGlyph variant={variant} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-center gap-2 p-6">
        {category && (
          <p className="font-mono-label text-[10px] uppercase tracking-[0.3em] text-(--color-red)">
            {category}
          </p>
        )}
        <h3 className="text-xl font-semibold leading-snug text-white">{name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-(--color-muted)">{description}</p>

        {hasStats && (
          <div className="font-mono-label mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-(--color-grid-line-strong) pt-4 text-[11px] uppercase tracking-widest text-(--color-muted)">
            {location && (
              <span className="flex items-center gap-1.5">
                <FiMapPin className="text-(--color-blue)" /> {location}
              </span>
            )}
            {floors && (
              <span className="flex items-center gap-1.5">
                <FiLayers className="text-(--color-blue)" /> {floors} Floors
              </span>
            )}
            {year && (
              <span className="flex items-center gap-1.5">
                <FiCalendar className="text-(--color-blue)" /> {year}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
