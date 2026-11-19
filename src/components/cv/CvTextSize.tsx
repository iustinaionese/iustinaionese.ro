"use client";

import { useEffect, useId, useSyncExternalStore } from "react";
import { clsx } from "@/lib/clsx";
import type { CvContent } from "@/lib/cv";
import styles from "./cv.module.css";

/**
 * Text size switch for the on-screen CV: three steps, the smallest being the
 * PDF's own size. The choice lives on <html data-cv-text> and the scaling is
 * CSS (cv.module.css, screen only), so print and the PDFs never change.
 * An inline script applies the saved choice while the HTML is parsed, before
 * the paper is painted (Next guide "Preventing flash before hydration").
 */

const STORAGE_KEY = "ia-cv-text";
const EVENT = "ia-cv-text-change";
const SIZES = ["s", "m", "l"] as const;
type Size = (typeof SIZES)[number];
const DEFAULT_SIZE: Size = "m";

/** The "A" on each button grows with the size it picks. */
const GLYPH: Record<Size, string> = {
  s: "text-[13px]",
  m: "text-[16px]",
  l: "text-[19px]",
};

const PRE_PAINT = `(function(){var s;try{s=localStorage.getItem(${JSON.stringify(STORAGE_KEY)})}catch(e){}document.documentElement.dataset.cvText=${JSON.stringify(SIZES)}.indexOf(s)<0?${JSON.stringify(DEFAULT_SIZE)}:s})()`;

function isSize(value: unknown): value is Size {
  return typeof value === "string" && (SIZES as readonly string[]).includes(value);
}

/** The size currently applied to the page. */
function readApplied(): Size {
  const value = document.documentElement.dataset.cvText;
  return isSize(value) ? value : DEFAULT_SIZE;
}

function readSaved(): Size {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (isSize(value)) return value;
  } catch {
    /* ignore */
  }
  return DEFAULT_SIZE;
}

function apply(size: Size) {
  document.documentElement.dataset.cvText = size;
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

export function CvTextSize({
  labels,
  className,
}: {
  labels: CvContent["page"]["textSize"];
  className?: string;
}) {
  const labelId = useId();
  // Hydrates with the default (as rendered on the server), then follows the
  // size the inline script applied.
  const size = useSyncExternalStore(subscribe, readApplied, () => DEFAULT_SIZE);

  // Client-side navigations don't run the inline script: apply the saved size.
  useEffect(() => {
    if (!document.documentElement.dataset.cvText) apply(readSaved());
  }, []);

  function choose(next: Size) {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    apply(next);
  }

  return (
    <>
      <InlineScript html={PRE_PAINT} />
      <div className={clsx(styles.sizeBar, "items-center gap-3", className)}>
        <span id={labelId} className="eyebrow">
          {labels.label}
        </span>
        <div
          role="group"
          aria-labelledby={labelId}
          className="inline-flex h-12 items-center gap-0.5 rounded-full border border-border bg-bg-elev/50 p-1"
        >
          {SIZES.map((s) => (
            <button
              key={s}
              type="button"
              data-size={s}
              aria-pressed={size === s}
              aria-label={labels[s]}
              title={labels[s]}
              onClick={() => choose(s)}
              className={clsx(
                styles.sizeBtn,
                "inline-flex h-10 w-10 items-center justify-center rounded-full font-display leading-none transition-colors duration-300",
                GLYPH[s],
              )}
            >
              A
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

/** Runs on the server-rendered HTML, inert when React renders it on the client. */
function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
