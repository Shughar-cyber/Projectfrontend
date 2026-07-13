import PropTypes from "prop-types";

export default function BlueprintBuilding({ className = "" }) {
  const floors = Array.from({ length: 8 });

  return (
    <svg
      viewBox="0 0 600 700"
      className={`blueprint-svg pointer-events-none select-none ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <rect x="180" y="120" width="240" height="480" stroke="var(--color-blue)" strokeOpacity="0.25" strokeWidth="1.5" />
      <rect x="220" y="60" width="160" height="60" stroke="var(--color-blue)" strokeOpacity="0.25" strokeWidth="1.5" />
      <line x1="220" y1="60" x2="380" y2="60" stroke="var(--color-red)" strokeOpacity="0.5" strokeWidth="1.5" />
      <line x1="300" y1="20" x2="300" y2="60" stroke="var(--color-blue)" strokeOpacity="0.3" strokeWidth="1.5" />

      {floors.map((_, row) =>
        Array.from({ length: 5 }).map((__, col) => (
          <rect
            key={`${row}-${col}`}
            x={200 + col * 42}
            y={150 + row * 55}
            width="26"
            height="34"
            stroke="var(--color-blue)"
            strokeOpacity="0.14"
            strokeWidth="1"
          />
        ))
      )}

      <line x1="80" y1="600" x2="520" y2="600" stroke="var(--color-blue)" strokeOpacity="0.25" strokeWidth="1.5" />
      <line x1="180" y1="630" x2="420" y2="630" stroke="var(--color-red)" strokeOpacity="0.6" strokeWidth="1" />
      <line x1="180" y1="623" x2="180" y2="637" stroke="var(--color-red)" strokeOpacity="0.6" strokeWidth="1" />
      <line x1="420" y1="623" x2="420" y2="637" stroke="var(--color-red)" strokeOpacity="0.6" strokeWidth="1" />
      <text
        x="300"
        y="655"
        textAnchor="middle"
        fill="var(--color-red)"
        fillOpacity="0.6"
        fontSize="12"
        fontFamily="IBM Plex Mono, monospace"
      >
        24.00 M
      </text>

      <g transform="translate(90, 90)">
        <circle cx="0" cy="0" r="18" stroke="var(--color-blue)" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="0" y1="-14" x2="0" y2="14" stroke="var(--color-blue)" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="-14" y1="0" x2="14" y2="0" stroke="var(--color-blue)" strokeOpacity="0.2" strokeWidth="1" />
        <text x="0" y="-22" textAnchor="middle" fill="var(--color-blue)" fillOpacity="0.25" fontSize="10" fontFamily="IBM Plex Mono, monospace">
          N
        </text>
      </g>
    </svg>
  );
}

BlueprintBuilding.propTypes = {
  className: PropTypes.string,
};
