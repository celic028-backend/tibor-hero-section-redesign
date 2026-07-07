/**
 * Decorative background layer for the hero.
 * Recreates the Cardinal Mason vibe: concentric arcs, a faint dotted grid,
 * scattered "+" marks and floating 3D-ish icons.
 * Purely decorative — hidden from assistive tech.
 */
export default function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Concentric rings, centered near the headline */}
      <svg
        className="absolute left-1/2 top-[-6%] h-[130%] w-[130%] -translate-x-1/2 opacity-[0.55]"
        viewBox="0 0 1000 1000"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
      >
        {[500, 400, 300, 210, 130].map((r, i) => (
          <circle
            key={r}
            cx="500"
            cy="360"
            r={r}
            stroke="#2a2755"
            strokeWidth="1"
            strokeDasharray={i % 2 === 0 ? "0" : "6 10"}
            opacity={0.9 - i * 0.12}
          />
        ))}
      </svg>

      {/* Radial vignette to deepen the center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 30%, rgba(108,92,231,0.10) 0%, rgba(5,5,13,0) 45%), radial-gradient(100% 100% at 50% 50%, rgba(5,5,13,0) 40%, rgba(5,5,13,0.9) 100%)",
        }}
      />

      {/* Faint dotted grid + plus marks, bottom-left */}
      <svg
        className="absolute bottom-0 left-0 h-[46%] w-[42%] opacity-40"
        viewBox="0 0 400 400"
        fill="none"
      >
        <defs>
          <pattern id="dots" width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M17 12v10M12 17h10" stroke="#2f2c5c" strokeWidth="1.2" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#dots)" />
      </svg>

      {/* Floating decorative icons */}
      <FloatingIcon className="left-[14%] top-[26%]" delay="0s" rot="-8deg">
        <ScrollIcon />
      </FloatingIcon>
      <FloatingIcon className="right-[15%] top-[24%]" delay="1.4s" rot="10deg">
        <TypewriterIcon />
      </FloatingIcon>
      <FloatingIcon className="left-[16%] top-[52%]" delay="0.8s" rot="6deg">
        <EnvelopeIcon />
      </FloatingIcon>
      <FloatingIcon className="right-[16%] top-[54%]" delay="2s" rot="-6deg">
        <PlaneIcon />
      </FloatingIcon>
    </div>
  );
}

function FloatingIcon({
  children,
  className = "",
  delay = "0s",
  rot = "0deg",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  rot?: string;
}) {
  return (
    <div
      className={`floaty absolute hidden h-16 w-16 items-center justify-center drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)] lg:flex ${className}`}
      style={{ animationDelay: delay, ["--rot" as string]: rot }}
    >
      {children}
    </div>
  );
}

/* ---- Simple stylized 3D-ish icons (SVG) ---- */

function ScrollIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full">
      <rect x="14" y="12" width="34" height="40" rx="5" fill="#dcd9f5" />
      <rect x="20" y="20" width="22" height="3.5" rx="1.75" fill="#8b7ff0" />
      <rect x="20" y="28" width="22" height="3.5" rx="1.75" fill="#b9b3e6" />
      <rect x="20" y="36" width="14" height="3.5" rx="1.75" fill="#b9b3e6" />
      <path d="M14 52c0 3 34 3 34 0V46H14z" fill="#6c5ce7" />
    </svg>
  );
}

function TypewriterIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full">
      <rect x="10" y="30" width="44" height="20" rx="4" fill="#6c5ce7" />
      <rect x="16" y="16" width="32" height="18" rx="3" fill="#dcd9f5" />
      <rect x="24" y="10" width="16" height="10" rx="2" fill="#b9b3e6" />
      <circle cx="18" cy="44" r="2" fill="#dcd9f5" />
      <circle cx="26" cy="44" r="2" fill="#dcd9f5" />
      <circle cx="34" cy="44" r="2" fill="#dcd9f5" />
      <circle cx="42" cy="44" r="2" fill="#dcd9f5" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full">
      <rect x="10" y="20" width="44" height="30" rx="5" fill="#dcd9f5" />
      <path d="M10 24l22 16 22-16" fill="none" stroke="#6c5ce7" strokeWidth="3" />
      <path d="M30 8l10 6-10 6-10-6z" fill="#8b7ff0" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full">
      <path d="M8 30 56 12 44 54 33 40z" fill="#dcd9f5" />
      <path d="M33 40 56 12 44 54z" fill="#8b7ff0" />
      <path d="M8 30 56 12 33 40z" fill="#6c5ce7" />
    </svg>
  );
}
