/**
 * Primary CTA — the exact Figma pill: #6B56FF fill, radius 100px, and an
 * outside gradient border (2px L/R, 1px T/B) that is white at the ends and
 * fades into the background colour in the middle. Reused across the page.
 */
export default function CtaButton({
  href,
  children = "Zakaži strateški poziv",
  className = "",
}: {
  href: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap px-8 py-[15px] font-display text-base font-semibold text-white shadow-[0_14px_40px_-8px_rgba(107,86,255,0.6)] transition hover:brightness-110 sm:px-10 sm:text-lg ${className}`}
      style={{ background: "#6B56FF", borderRadius: "100px" }}
    >
      {/* Outside gradient border (Figma): white at the ends -> #6B56FF middle */}
      <span
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          inset: "-1px -2px",
          borderRadius: "100px",
          padding: "1px 2px",
          background:
            "linear-gradient(to right, #FFFFFF 0%, #6B56FF 50%, #FFFFFF 100%)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {children}
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </a>
  );
}
