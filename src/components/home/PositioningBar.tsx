"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { POSITIONING_KEYS } from "@/lib/site";

export function PositioningBar() {
  const { t } = useLanguage();
  const items = POSITIONING_KEYS.map((k) => t.positioning[k]);
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border bg-bg-elev/30 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex w-max animate-marquee items-center">
        {loop.map((label, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap px-8 font-mono-accent text-sm uppercase tracking-[0.16em] text-fg-muted"
          >
            {label}
            <span className="h-1 w-1 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
