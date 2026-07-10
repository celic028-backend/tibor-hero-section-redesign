const BENEFITS = [
  "Analizu tvoje trenutne situacije - gdje točno zapinješ s klijentima i zaradom, i što te drži na mjestu",
  "Uvid u sistem kojim naši editori dolaze do klijenata koji plaćaju €1.000-2.000+ mjesečno",
  "Konkretan sljedeći korak - točno što trebaš promijeniti da se pomakneš naprijed, bez obzira ulaziš li u program ili ne",
];

export default function Benefits() {
  return (
    <section className="relative w-full border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-16">
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-bold leading-[1.15] tracking-tight text-text sm:text-4xl">
          Što ćeš dobiti na{" "}
          <span className="accent-underline">Strateškom Pozivu</span>?
        </h2>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-3">
          {BENEFITS.map((text, i) => (
            <div
              key={i}
              className="flex flex-col rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 ring-1 ring-inset ring-accent/25">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-accent-light"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <p className="mt-5 text-[0.975rem] leading-relaxed text-muted">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
