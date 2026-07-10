"use client";

import FigmaBorderSpan from "./FigmaBorderSpan";

/**
 * Primary CTA — the exact Figma pill: #6B56FF fill, radius 100px, and an
 * outside gradient border (2px L/R, 1px T/B) that is white at the ends and
 * fades into the background colour in the middle. Reused across the page.
 * With `opensBooking`, clicking opens the floating iClosed widget instead of
 * navigating.
 */
export default function CtaButton({
  href,
  children = "Zakaži strateški poziv",
  className = "",
  opensBooking = false,
}: {
  href: string;
  children?: React.ReactNode;
  className?: string;
  opensBooking?: boolean;
}) {
  return (
    <a
      href={href}
      onClick={
        opensBooking
          ? (e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("open-iclosed"));
            }
          : undefined
      }
      className={`group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap px-8 py-[15px] font-display text-base font-semibold text-white shadow-[0_14px_40px_-8px_rgba(107,86,255,0.6)] transition hover:brightness-110 sm:px-10 sm:text-lg ${className}`}
      style={{ background: "#6B56FF", borderRadius: "100px" }}
    >
      <FigmaBorderSpan />
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
