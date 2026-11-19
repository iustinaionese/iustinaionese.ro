"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow } from "@/components/ui/Section";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// Revert the pinned ScrollTrigger synchronously before React unmounts, so the
// GSAP-injected pin-spacer is removed and React's removeChild doesn't crash
// the page on navigation away from the homepage.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ValueStory() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const section = useRef<HTMLElement>(null);
  const past = useRef<HTMLDivElement>(null);
  const today = useRef<HTMLDivElement>(null);

  // Pinned scrub: the €45k number scales up and dissolves into "today I build
  // apps like that myself." Re-runs when the language (amount text) changes.
  useIsoLayoutEffect(() => {
    const sectionEl = section.current;
    const pastEl = past.current;
    const todayEl = today.current;
    if (!sectionEl || !pastEl || !todayEl) return;

    if (reduced) {
      gsap.set(pastEl, { autoAlpha: 0 });
      gsap.set(todayEl, { autoAlpha: 1 });
      return;
    }

    gsap.set(pastEl, { autoAlpha: 1, scale: 1, filter: "blur(0px)" });
    gsap.set(todayEl, { autoAlpha: 0 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: "+=130%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });
      tl.to(
        pastEl,
        { scale: 1.25, autoAlpha: 0, filter: "blur(14px)", ease: "power2.in" },
        0,
      ).fromTo(
        todayEl,
        { autoAlpha: 0, scale: 0.9, y: 30 },
        { autoAlpha: 1, scale: 1, y: 0, ease: "power2.out" },
        0.45,
      );
    }, sectionEl);

    return () => ctx.revert();
  }, [reduced, t.valueStory.amount]);

  return (
    <section
      ref={section}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40vmax] w-[40vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--glow-soft),transparent_65%)] blur-3xl" />

      <div className="relative mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
        <Eyebrow className="justify-center before:hidden">
          {t.valueStory.eyebrow}
        </Eyebrow>

        <div className="relative mt-10 grid place-items-center">
          <div ref={past} className="col-start-1 row-start-1">
            <p className="mx-auto max-w-2xl font-display text-2xl leading-snug text-fg-muted sm:text-3xl">
              {t.valueStory.lead}
            </p>
            <p className="mt-2 font-display text-[clamp(4rem,16vw,11rem)] font-semibold leading-none tracking-tight text-gradient">
              {t.valueStory.amount}
            </p>
            <p className="mt-2 font-display text-2xl leading-snug text-fg-muted sm:text-3xl">
              {t.valueStory.leadEnd}
            </p>
          </div>

          <div ref={today} className="col-start-1 row-start-1 max-w-3xl px-2">
            <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-tight text-fg">
              {t.valueStory.today}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
              {t.valueStory.sub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
