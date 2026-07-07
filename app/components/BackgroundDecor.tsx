/**
 * Decorative background layer for the hero. Replicates the Cardinal Mason
 * reference: large concentric rings (solid + dashed) over a faint grain
 * texture, a technical plus/dash grid along the bottom, and a dark vignette.
 * Purely decorative — hidden from assistive tech.
 */
export default function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large concentric rings — centered above the headline, sweeping outward */}
      <svg
        className="absolute left-1/2 top-[-30%] h-[160%] w-[170%] max-w-none -translate-x-1/2 blur-[0.6px] lg:w-[130%]"
        viewBox="0 0 1200 1200"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {[560, 458, 360, 264, 172].map((r, i) => (
          <circle
            key={r}
            cx="600"
            cy="480"
            r={r}
            stroke="#423d86"
            strokeWidth={i === 0 ? 2 : 1.4}
            strokeDasharray={i % 2 === 1 ? "3 14" : undefined}
            opacity={0.95 - i * 0.12}
          />
        ))}
      </svg>

      {/* Faint grain over everything — gives the rings their textured look */}
      <div
        className="absolute inset-0 opacity-[0.16] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Radial vignette — keep the center dark */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 26%, rgba(108,92,231,0.12) 0%, rgba(5,5,13,0) 42%), radial-gradient(120% 120% at 50% 45%, rgba(5,5,13,0) 45%, rgba(5,5,13,0.72) 100%)",
        }}
      />

      {/* Technical plus/dash grid, fading up from the bottom */}
      <svg
        className="absolute bottom-0 left-0 h-[55%] w-[80%] opacity-70"
        viewBox="0 0 900 500"
        fill="none"
        preserveAspectRatio="xMinYMax slice"
      >
        <defs>
          <pattern id="plusgrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M24 17.5v13M17.5 24h13" stroke="#403a80" strokeWidth="1.3" />
          </pattern>
          <radialGradient id="gridfade" cx="0%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#fff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="gridmask">
            <rect width="900" height="500" fill="url(#gridfade)" />
          </mask>
        </defs>
        <rect width="900" height="500" fill="url(#plusgrid)" mask="url(#gridmask)" />
      </svg>
    </div>
  );
}
