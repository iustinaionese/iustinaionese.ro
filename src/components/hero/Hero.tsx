"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion, useInView } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useMounted, useMediaQuery } from "@/lib/hooks";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { WhatsAppCTA, GhostCTA } from "@/components/ui/Buttons";
import { ArrowDown } from "@/components/ui/icons";

const HeroScene = dynamic(
  () => import("./HeroScene").then((m) => m.HeroScene),
  { ssr: false },
);

export function Hero() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const mounted = useMounted();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const sectionRef = useRef<HTMLElement>(null);
  // Pause the 3D render loop once the hero is scrolled out of view.
  const inView = useInView(sectionRef, { amount: 0.1 });

  // Keep the accent's last word + the full stop together ("cap-coadă." must
  // never break at its hyphen).
  const accent = t.hero.headlineAccent;
  const cut = accent.lastIndexOf(" ");
  const accentLead = cut === -1 ? "" : accent.slice(0, cut + 1);
  const accentLast = accent.slice(cut + 1);
  const headline =
    `${t.hero.headlineA} <span class="text-fg-muted">${t.hero.headlineB}</span> ` +
    `<span class="text-accent-strong">${accentLead}</span>` +
    `<span class="whitespace-nowrap"><span class="text-accent-strong">${accentLast}</span>.</span>`;

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* ambient layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--glow-soft),transparent_60%)] blur-2xl" />

      {/* static fallback orb (always present, behind canvas) */}
      <div className="pointer-events-none absolute right-[-10%] top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#3a2a2e,#120f14_70%)] opacity-70 blur-sm md:block lg:right-[2%]" />

      {/* 3D centerpiece + funnel flow labels (visitors -> paying client) */}
      {mounted && !reduced && (
        <>
          {/* On mobile the funnel sits behind the text, so it's dimmed there. */}
          <div className="absolute inset-0 z-[1] max-md:opacity-40">
            <HeroScene isMobile={isMobile} active={inView} />
          </div>
          <div className="pointer-events-none absolute left-[71%] top-[13%] z-[2] hidden -translate-x-1/2 flex-col items-center text-center lg:flex">
            <span className="font-mono-accent text-[0.62rem] uppercase tracking-[0.28em] text-fg-faint">
              {t.hero.funnelTopLead}
            </span>
            <span className="font-mono-accent text-xs uppercase tracking-[0.2em] text-fg/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.7)]">
              {t.hero.funnelTop}
            </span>
            <div className="mt-2 h-10 w-px bg-gradient-to-b from-gold/80 to-transparent" />
          </div>
          <div className="pointer-events-none absolute bottom-[13%] right-[8%] z-[2] hidden items-center gap-3 lg:flex">
            <span className="h-px w-8 bg-gradient-to-l from-accent to-transparent" />
            <div className="text-center">
              <div className="font-mono-accent text-[0.62rem] uppercase tracking-[0.28em] text-fg-faint">
                {t.hero.funnelBottomLead}
              </div>
              <div className="font-mono-accent text-[0.72rem] uppercase tracking-[0.18em] text-accent">
                {t.hero.funnelBottom}
              </div>
            </div>
          </div>
        </>
      )}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-elev/50 px-4 py-2 backdrop-blur-sm before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent before:content-['']"
          >
            {t.hero.eyebrow}
          </motion.div>

          <AnimatedHeading
            as="h1"
            eager
            splitKey={t.hero.headlineA}
            className="font-display text-[clamp(2.6rem,7vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.02em] text-fg"
            html={headline}
          />

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-row items-center gap-3"
          >
            <WhatsAppCTA size="hero" />
            <GhostCTA href="/work" label={t.cta.seeWork} size="hero" />
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-fg-faint">
          <span className="eyebrow">{t.hero.scroll}</span>
          <motion.span
            animate={reduced ? undefined : { y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
