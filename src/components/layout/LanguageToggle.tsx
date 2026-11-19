"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LANGS } from "@/lib/i18n/dictionaries";
import { clsx } from "@/lib/clsx";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.langToggle.label}
      className={clsx(
        "relative inline-flex items-center rounded-full border border-border bg-bg-elev/50 p-0.5 font-mono-accent text-xs",
        className,
      )}
    >
      {LANGS.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={clsx(
              "relative z-10 cursor-pointer rounded-full px-3 py-1.5 uppercase tracking-wider transition-colors duration-300",
              active ? "text-[#1a0c05]" : "text-fg-muted hover:text-fg",
            )}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {l}
          </button>
        );
      })}
    </div>
  );
}
