/**
 * Page-wide decorative background — replicates the Cardinal Mason reference
 * (minus the floating emoji icons) and loops it down the ENTIRE page:
 *   - large grainy concentric-ring clusters recurring vertically
 *   - a faint "+/dash" blueprint grid concentrated in the bottom corners,
 *     repeating down the page (NOT tiled across everything)
 *   - fine grain + a soft top glow over the deep dark base
 * Purely decorative (aria-hidden), sits behind all content.
 */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const PLUS =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath d='M23 16v14M16 23h14' stroke='%233c3773' stroke-width='1.1'/%3E%3C/svg%3E\")";

const RINGS = [
  { top: "-6%", left: "50%", opacity: 0.55, scale: 1 },
  { top: "22%", left: "83%", opacity: 0.42, scale: 0.9 },
  { top: "48%", left: "14%", opacity: 0.42, scale: 0.95 },
  { top: "74%", left: "82%", opacity: 0.4, scale: 0.9 },
];

const CORNERS: { top: string; side: "left" | "right" }[] = [
  { top: "16%", side: "left" },
  { top: "16%", side: "right" },
  { top: "50%", side: "left" },
  { top: "50%", side: "right" },
  { top: "84%", side: "left" },
  { top: "84%", side: "right" },
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

      {/* "+/dash" blueprint grid — concentrated in bottom corners, recurring */}
      {CORNERS.map((c, i) => {
        const anchor = c.side === "left" ? "0% 100%" : "100% 100%";
        const mask = `radial-gradient(120% 120% at ${anchor}, #000 0%, rgba(0,0,0,0.3) 42%, transparent 68%)`;
        return (
          <div
            key={i}
            className="absolute h-[280px] w-[36%] opacity-70"
            style={{
              top: c.top,
              left: c.side === "left" ? 0 : undefined,
              right: c.side === "right" ? 0 : undefined,
              backgroundImage: PLUS,
              backgroundRepeat: "repeat",
              WebkitMaskImage: mask,
              maskImage: mask,
            }}
          />
        );
      })}

      {/* Fine grain over everything */}
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
        style={{ backgroundImage: GRAIN, backgroundRepeat: "repeat" }}
      />

      {/* Soft top glow over the deep dark base */}
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
