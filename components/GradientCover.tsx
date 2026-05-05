type Variant =
  | "grid"
  | "panels"
  | "ribbon"
  | "nodes"
  | "chart"
  | "map";

const palettes = {
  violet: {
    base: "linear-gradient(135deg, #1a0d3d 0%, #05060A 60%)",
    accent: "#8B5CF6",
    accent2: "#4A8CFF",
  },
  blue: {
    base: "linear-gradient(135deg, #0a1d3d 0%, #05060A 60%)",
    accent: "#4A8CFF",
    accent2: "#22D3EE",
  },
  cyan: {
    base: "linear-gradient(135deg, #0a2a3d 0%, #05060A 60%)",
    accent: "#22D3EE",
    accent2: "#8B5CF6",
  },
  magenta: {
    base: "linear-gradient(135deg, #2a0d2d 0%, #05060A 60%)",
    accent: "#E879F9",
    accent2: "#8B5CF6",
  },
} as const;

type Palette = keyof typeof palettes;

export default function GradientCover({
  variant,
  palette = "violet",
  label,
}: {
  variant: Variant;
  palette?: Palette;
  label?: string;
}) {
  const p = palettes[palette];

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: p.base }}
      aria-hidden
    >
      {/* Soft accent glow */}
      <div
        className="pointer-events-none absolute -top-1/4 left-1/2 h-[120%] w-[120%] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: `radial-gradient(circle, ${p.accent}55 0%, transparent 60%)` }}
      />
      <div
        className="pointer-events-none absolute -bottom-1/3 -right-1/4 h-[100%] w-[100%] rounded-full opacity-35 blur-3xl"
        style={{ background: `radial-gradient(circle, ${p.accent2}55 0%, transparent 60%)` }}
      />

      {/* Variant-specific motif */}
      {variant === "grid" && <GridMotif accent={p.accent} />}
      {variant === "panels" && <PanelsMotif accent={p.accent} accent2={p.accent2} />}
      {variant === "ribbon" && <RibbonMotif accent={p.accent} accent2={p.accent2} />}
      {variant === "nodes" && <NodesMotif accent={p.accent} />}
      {variant === "chart" && <ChartMotif accent={p.accent} accent2={p.accent2} />}
      {variant === "map" && <MapMotif accent={p.accent} />}

      {/* Top-left grain shimmer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {label && (
        <div className="absolute inset-x-6 bottom-6 z-10">
          <div className="font-mono text-[10px] uppercase tracking-widest text-bright/60">
            {label}
          </div>
        </div>
      )}
    </div>
  );
}

function GridMotif({ accent }: { accent: string }) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke={accent} strokeOpacity="0.18" strokeWidth="1" />
        </pattern>
        <radialGradient id="gFade" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="gMask"><rect width="400" height="500" fill="url(#gFade)" /></mask>
      </defs>
      <rect width="400" height="500" fill="url(#g)" mask="url(#gMask)" />
      <circle cx="200" cy="220" r="60" fill="none" stroke={accent} strokeOpacity="0.6" strokeWidth="1.2" />
      <circle cx="200" cy="220" r="100" fill="none" stroke={accent} strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="200" cy="220" r="140" fill="none" stroke={accent} strokeOpacity="0.18" strokeWidth="1" />
    </svg>
  );
}

function PanelsMotif({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
    >
      <g transform="translate(60 110) skewY(-8)">
        <rect x="0" y="0" width="280" height="60" rx="8" fill={accent} fillOpacity="0.12" stroke={accent} strokeOpacity="0.4" />
        <rect x="0" y="80" width="280" height="60" rx="8" fill={accent2} fillOpacity="0.12" stroke={accent2} strokeOpacity="0.4" />
        <rect x="0" y="160" width="280" height="60" rx="8" fill={accent} fillOpacity="0.18" stroke={accent} strokeOpacity="0.55" />
        <rect x="0" y="240" width="280" height="60" rx="8" fill={accent2} fillOpacity="0.1" stroke={accent2} strokeOpacity="0.35" />
      </g>
    </svg>
  );
}

function RibbonMotif({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="r1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor={accent2} />
        </linearGradient>
      </defs>
      <path
        d="M -20 320 Q 100 200, 200 280 T 420 240"
        fill="none"
        stroke="url(#r1)"
        strokeWidth="2.5"
        strokeOpacity="0.85"
      />
      <path
        d="M -20 360 Q 120 260, 220 340 T 420 300"
        fill="none"
        stroke="url(#r1)"
        strokeWidth="1.8"
        strokeOpacity="0.55"
      />
      <path
        d="M -20 400 Q 140 320, 240 400 T 420 360"
        fill="none"
        stroke="url(#r1)"
        strokeWidth="1.2"
        strokeOpacity="0.35"
      />
    </svg>
  );
}

function NodesMotif({ accent }: { accent: string }) {
  const nodes = [
    [120, 180], [220, 150], [310, 200], [180, 260], [270, 290], [110, 320], [320, 340], [200, 380],
  ];
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
    >
      {nodes.map(([x1, y1], i) =>
        nodes
          .slice(i + 1)
          .filter(([x2, y2]) => Math.hypot(x1 - x2, y1 - y2) < 130)
          .map(([x2, y2], j) => (
            <line
              key={`${i}-${j}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={accent}
              strokeOpacity="0.25"
              strokeWidth="1"
            />
          )),
      )}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="8" fill={accent} fillOpacity="0.15" />
          <circle cx={x} cy={y} r="3" fill={accent} />
        </g>
      ))}
    </svg>
  );
}

function ChartMotif({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="c1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor={accent2} />
        </linearGradient>
        <linearGradient id="c2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* axis */}
      <line x1="40" y1="400" x2="380" y2="400" stroke={accent} strokeOpacity="0.25" />
      <line x1="40" y1="160" x2="40" y2="400" stroke={accent} strokeOpacity="0.25" />
      {/* gridlines */}
      {[200, 250, 300, 350].map((y) => (
        <line key={y} x1="40" y1={y} x2="380" y2={y} stroke={accent} strokeOpacity="0.08" strokeDasharray="2 4" />
      ))}
      {/* area fill */}
      <path
        d="M 40 380 L 100 360 L 160 320 L 220 290 L 280 230 L 340 200 L 380 170 L 380 400 L 40 400 Z"
        fill="url(#c2)"
      />
      {/* line */}
      <path
        d="M 40 380 L 100 360 L 160 320 L 220 290 L 280 230 L 340 200 L 380 170"
        fill="none"
        stroke="url(#c1)"
        strokeWidth="2.5"
      />
      {/* markers */}
      {[
        [40, 380], [100, 360], [160, 320], [220, 290], [280, 230], [340, 200], [380, 170],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={accent} />
      ))}
    </svg>
  );
}

function MapMotif({ accent }: { accent: string }) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Stylized abstract coastline */}
      <path
        d="M 30 220 Q 90 180, 140 210 T 240 220 Q 300 200, 360 240 T 380 320"
        fill="none"
        stroke={accent}
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      <path
        d="M 30 280 Q 100 250, 170 270 T 290 290 Q 340 280, 380 320"
        fill="none"
        stroke={accent}
        strokeOpacity="0.18"
        strokeWidth="1"
      />
      {/* Pin nodes */}
      {[
        [120, 230, 1.0],
        [200, 250, 0.8],
        [280, 220, 0.7],
        [170, 320, 0.6],
        [310, 300, 0.5],
      ].map(([x, y, op], i) => (
        <g key={i}>
          <circle cx={x as number} cy={y as number} r="14" fill={accent} fillOpacity={(op as number) * 0.15} />
          <circle cx={x as number} cy={y as number} r="6" fill={accent} fillOpacity={op as number} />
        </g>
      ))}
    </svg>
  );
}
