"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

/** Animates an integer from 0 → value when it scrolls into view. */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduced = useReducedMotion();
  const { lang } = useLanguage();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, value, duration]);

  // Formatting happens in render, so it re-localises automatically on toggle.
  const shown = reduced ? value : n;
  const formatted = new Intl.NumberFormat(
    lang === "ro" ? "ro-RO" : "en-US",
  ).format(shown);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
