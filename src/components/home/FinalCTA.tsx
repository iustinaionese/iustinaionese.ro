"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { CALENDLY_URL } from "@/lib/site";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppCTA, GhostCTA } from "@/components/ui/Buttons";

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <Section id="contact" className="relative overflow-hidden">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-bg-elev/40 px-6 py-20 text-center sm:px-12 sm:py-28">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[30vmax] w-[30vmax] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_60%)] opacity-50 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <div className="relative mx-auto max-w-3xl">
            <Eyebrow className="justify-center before:hidden">
              {t.finalCta.eyebrow}
            </Eyebrow>
            <AnimatedHeading
              splitKey={t.finalCta.heading}
              className="mt-6 font-display text-[clamp(2.1rem,5.5vw,4rem)] font-medium leading-[1.03] tracking-tight text-fg"
            >
              {t.finalCta.heading}
            </AnimatedHeading>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
                {t.finalCta.sub}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <WhatsAppCTA label={t.finalCta.primary} />
                <GhostCTA
                  href={CALENDLY_URL}
                  label={t.finalCta.secondary}
                  external
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
