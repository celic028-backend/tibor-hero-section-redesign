"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#uspjesi", label: "Uspjesi" },
  { href: "#sto-dobivas", label: "Što dobivaš?" },
  { href: "#ovdje-ucis", label: "Ovdje učiš" },
  { href: "#faq", label: "Faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10, 10, 22, 0.72)" : "transparent",
        borderBottomColor: scrolled ? "rgba(255, 255, 255, 0.1)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5 sm:px-10 lg:px-14">
        {/* Logo mark */}
        <a href="#" aria-label="Korak Ispred — početna" className="shrink-0">
          <LogoMark className="h-11 w-auto text-text" />
        </a>

        {/* Center links — no frame, just the four options */}
        <ul className="hidden items-center gap-9 md:flex lg:gap-11">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display text-lg text-text/90 transition-colors hover:text-text"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#zakazi"
          className="group hidden items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-base font-semibold text-text shadow-[0_14px_40px_-8px_rgba(108,92,231,0.65)] transition-colors hover:bg-accent-hover md:inline-flex"
        >
          Zakaži strateški poziv
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-text transition-colors hover:bg-white/[0.06] md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="mx-6 rounded-2xl border border-white/12 p-3 backdrop-blur-md sm:mx-10 md:hidden"
          style={{ backgroundColor: "rgba(10, 10, 22, 0.96)" }}
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-display text-base text-text/90 transition-colors hover:bg-white/5 hover:text-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#zakazi"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-base font-semibold text-text shadow-[0_14px_40px_-8px_rgba(108,92,231,0.65)] transition-colors hover:bg-accent-hover"
          >
            Zakaži strateški poziv
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      )}
    </header>
  );
}

/**
 * "Korak Ispred" mark — a stepped letterform (rounded top + descending steps).
 * Recreated as SVG from the supplied logo image. Uses currentColor so the
 * parent controls its color. Swap for the original asset in /public if needed.
 */
function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 46 50"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Rounded top bar (the "hood") */}
      <path d="M6 18V13a7 7 0 0 1 7-7h20a7 7 0 0 1 7 7v5H6Z" />
      {/* Left spine */}
      <rect x="6" y="17" width="11" height="30" />
      {/* Middle step */}
      <rect x="6" y="23" width="26" height="9" rx="2.5" />
      {/* Bottom step */}
      <rect x="6" y="37" width="20" height="10" rx="2.5" />
    </svg>
  );
}
