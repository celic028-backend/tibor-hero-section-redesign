export default function Results() {
  return (
    <section className="relative w-full border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-16">
        <h2 className="text-center font-display text-3xl font-bold leading-[1.15] tracking-tight text-text sm:text-4xl">
          Rezultati <span className="accent-underline">Studenata</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-muted sm:text-lg">
          Uskoro — pravi rezultati i iskustva naših polaznika.
        </p>

        {/* Placeholder kartice (prava iskustva se dodaju kasnije) */}
        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-white/[0.06]" />
                <div className="space-y-2">
                  <div className="h-3 w-24 rounded bg-white/[0.06]" />
                  <div className="h-2.5 w-16 rounded bg-white/[0.04]" />
                </div>
              </div>
              <div className="mt-5 space-y-2.5">
                <div className="h-2.5 w-full rounded bg-white/[0.05]" />
                <div className="h-2.5 w-11/12 rounded bg-white/[0.05]" />
                <div className="h-2.5 w-4/5 rounded bg-white/[0.05]" />
              </div>
              <span className="mt-6 inline-block rounded-full bg-accent/10 px-3 py-1 font-display text-xs font-medium text-accent-light ring-1 ring-inset ring-accent/20">
                Uskoro
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
