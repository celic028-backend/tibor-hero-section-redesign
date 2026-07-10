/**
 * Page-wide decorative background — the hero's dark "orbit + mesh + grain"
 * treatment extended across the ENTIRE page and looping down it, so every
 * section shares one continuous backdrop. Purely decorative (aria-hidden).
 * Sits behind all content; the mesh + grain tile seamlessly down the page and
 * concentric-ring clusters recur at intervals.
 */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const RINGS = [
  { top: "-6%", left: "50%", opacity: 0.55, scale: 1 },
  { top: "22%", left: "83%", opacity: 0.42, scale: 0.9 },
  { top: "48%", left: "14%", opacity: 0.42, scale: 0.95 },
  { top: "74%", left: "82%", opacity: 0.4, scale: 0.9 },
];

export default function PageBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Concentric-ring clusters recurring down the whole page */}
      {RINGS.map((r, i) => (
        <svg
          key={i}
          className="absolute h-[820px] w-[820px] max-w-none blur-[0.6px]"
          style={{
            top: r.top,
            left: r.left,
            transform: `translateX(-50%) scale(${r.scale})`,
            opacity: r.opacity,
          }}
          viewBox="0 0 1200 1200"
          fill="none"
        >
          {[560, 458, 360, 264, 172].map((rad, j) => (
            <circle
              key={rad}
              cx="600"
              cy="600"
              r={rad}
              stroke="#423d86"
              strokeWidth={j === 0 ? 1.6 : 1.1}
              strokeDasharray={j % 2 === 1 ? "3 14" : undefined}
              opacity={0.9 - j * 0.12}
            />
          ))}
        </svg>
      ))}

      {/* Fine grain over everything */}
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
        style={{ backgroundImage: GRAIN, backgroundRepeat: "repeat" }}
      />

      {/* Soft top glow + keep the deep dark base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 40% at 50% 0%, rgba(108,92,231,0.10), rgba(5,5,13,0) 55%)",
        }}
      />
    </div>
  );
}
