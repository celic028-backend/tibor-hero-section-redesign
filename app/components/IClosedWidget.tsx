"use client";

import { useEffect, useState } from "react";

/**
 * Placeholder replica of the iClosed floating booking widget (bottom-right).
 * In our theme. Not a real booking integration — swap for the actual iClosed
 * embed script when the account is ready. Opens on load, closes to a launcher
 * bubble, and reopens on the `open-iclosed` window event (fired by the CTAs).
 */
const DOW = ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"];

export default function IClosedWidget() {
  const [open, setOpen] = useState(false);
  const [days, setDays] = useState<{ dow: string; d: number }[]>([]);
  const [selected, setSelected] = useState(0);
  const [seconds, setSeconds] = useState(177); // 02:57

  useEffect(() => {
    // Compute the next 5 days client-side (in a callback, not the effect body)
    // and reveal the widget — either after a short delay or on the CTA event.
    const show = () => {
      setDays(
        Array.from({ length: 5 }).map((_, i) => {
          const dt = new Date();
          dt.setDate(dt.getDate() + i);
          return { dow: DOW[dt.getDay()], d: dt.getDate() };
        }),
      );
      setOpen(true);
    };
    const t = setTimeout(show, 1200);
    window.addEventListener("open-iclosed", show);
    return () => {
      clearTimeout(t);
      window.removeEventListener("open-iclosed", show);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [open]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Otvori zakazivanje poziva"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_14px_40px_-8px_rgba(108,92,231,0.7)] transition hover:brightness-110"
      >
        <CalendarIcon className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[min(92vw,360px)] overflow-hidden rounded-2xl border border-white/12 bg-card shadow-[0_30px_80px_-16px_rgba(0,0,0,0.85)] backdrop-blur-md">
      {/* Header */}
      <div className="flex items-start gap-3 px-4 pt-4">
        <div className="relative shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 font-display text-sm font-semibold text-accent-light ring-1 ring-inset ring-accent/30">
            KI
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-accent-light" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-semibold text-text">
            Korak Ispred
          </p>
          <p className="text-xs text-faint">Strateški poziv</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Zatvori"
          className="-mr-1 -mt-1 flex h-7 w-7 items-center justify-center rounded-lg text-muted transition-colors hover:bg-white/5 hover:text-text"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* Message */}
      <div className="px-4 pt-3">
        <p className="font-display text-sm font-semibold text-text">
          Spreman za sljedeći korak?
        </p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
          Zakaži besplatan strateški poziv — analiziramo gdje zapinješ i
          pokažemo ti konkretan put do prvih klijenata.
        </p>
      </div>

      {/* Urgency */}
      <div className="mx-4 mt-4 flex items-center justify-between rounded-xl border-t-2 border-accent bg-white/[0.04] px-3.5 py-2.5">
        <span className="text-xs text-muted">Dnevno se bukira preko 10 poziva.</span>
        <span className="font-display text-sm font-semibold text-accent-light">
          {mm}:{ss}
        </span>
      </div>

      {/* Date picker */}
      <div className="mt-4 grid grid-cols-5 gap-2 px-4">
        {days.map((day, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelected(i)}
            className={`rounded-xl border px-1 py-2 text-center transition-colors ${
              selected === i
                ? "border-accent bg-accent/15 text-text"
                : "border-white/10 text-muted hover:border-white/25"
            }`}
          >
            <span className="block text-[10px] font-medium uppercase tracking-wide">
              {day.dow}
            </span>
            <span className="block font-display text-sm font-semibold">
              {day.d}
            </span>
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className="px-4 pt-4">
        <button
          type="button"
          className="flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 font-display text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(108,92,231,0.6)] transition hover:brightness-110"
        >
          Zakaži poziv
        </button>
      </div>

      {/* Footer */}
      <div className="mt-3.5 border-t border-white/6 py-2.5 text-center">
        <span className="text-[11px] text-faint">Powered by iClosed</span>
      </div>
    </div>
  );
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
    </svg>
  );
}
