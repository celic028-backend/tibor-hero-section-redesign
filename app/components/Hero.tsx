import BackgroundDecor from "./BackgroundDecor";

export default function Hero() {
  return (
    /* Full-bleed dark hero — the dark surface fills the whole page */
    <section className="relative min-h-screen w-full overflow-hidden bg-bg">
      <BackgroundDecor />

      <div className="relative z-10 mx-auto flex max-w-[1180px] flex-col items-center px-6 pb-20 pt-16 text-center sm:px-10 sm:pt-20 lg:px-16">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-[3.7rem]">
            Postani top 0.9% video editora uz vještine pronalaženja klijenata i{" "}
            <span className="accent-underline">prodaje</span>
            <span className="text-accent">.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Korak Ispred je program koji ti pokazuje kako izgraditi uspješnu
            karijeru kao video editor, pronaći klijente koji cijene tvoj rad i
            zarađivati preko 4-5k€/mj.
          </p>

          {/* CTA */}
          <div className="mt-9 flex w-full flex-col items-center sm:w-auto">
            <a
              href="#zakazi"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-base font-semibold text-text shadow-[0_14px_40px_-8px_rgba(108,92,231,0.65)] transition-colors hover:bg-accent-hover sm:w-auto"
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
                <path d="M9 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          {/* Media / video card */}
          <div className="relative mt-14 w-full max-w-3xl sm:mt-16">
            {/* Curved arrows pointing toward the video */}
            <Arrow className="-left-4 top-6 hidden -scale-x-100 lg:block" />
            <Arrow className="-right-4 top-6 hidden lg:block" />

            <div className="grain relative aspect-video w-full overflow-hidden rounded-[var(--radius-card)] border border-accent/60 bg-card shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
              {/* Placeholder promo poster (recreated — no original asset) */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 120% at 30% 20%, #1c1a3a 0%, #0d0d1c 55%, #08081a 100%)",
                }}
              />
              <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(120deg, rgba(108,92,231,0.25), transparent 60%)" }} />

              {/* Play button */}
              <button
                type="button"
                aria-label="Reprodukuj video"
                className="group absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition-transform hover:scale-105"
              >
                <span className="absolute inset-0 rounded-full ring-1 ring-white/20" />
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 text-white" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
    </section>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={`pointer-events-none absolute h-16 w-16 text-white/70 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 10c22 4 40 20 46 44" />
      <path d="M60 40l0 16-16-2" />
    </svg>
  );
}
