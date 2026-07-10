import CtaButton from "./CtaButton";

export default function Booking() {
  return (
    <section
      id="zakazi"
      className="relative w-full border-t border-white/5 bg-bg py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1180px] px-6 text-center sm:px-10 lg:px-16">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-text sm:text-4xl">
          Zakaži svoj <span className="accent-underline">strateški poziv</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Odaberi termin koji ti odgovara — bez obaveze.
        </p>

        {/* iClosed booking — placeholder (widget se ubacuje kasnije) */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[var(--radius-card)] border-[3px] border-accent bg-card p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),0_0_55px_-6px_rgba(108,92,231,0.5)]">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15 ring-1 ring-inset ring-accent/25">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-accent-light"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
                <path d="M3 9h18M8 2.5v4M16 2.5v4" />
              </svg>
            </span>
            <p className="mt-6 font-display text-lg font-semibold text-text">
              iClosed kalendar za zakazivanje
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              Placeholder — ovdje se ubacuje iClosed booking widget kad bude
              spreman.
            </p>
            <div className="mt-8">
              <CtaButton href="#zakazi">Rezerviši termin</CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
