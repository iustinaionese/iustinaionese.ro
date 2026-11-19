"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const STEP_ORDER = [
  "discovery",
  "proposal",
  "design",
  "build",
  "launch",
  "support",
] as const;

export function Process() {
  const { t } = useLanguage();

  return (
    <Section id="process" className="relative border-y border-border bg-bg-elev/20">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>{t.process.eyebrow}</Eyebrow>
          <AnimatedHeading
            splitKey={t.process.heading}
            className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.4rem)] font-medium leading-[1.04] tracking-tight text-fg"
          >
            {t.process.heading}
          </AnimatedHeading>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">
              {t.process.sub}
            </p>
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.08}
          className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {STEP_ORDER.map((key, i) => {
            const step = t.process.steps[key];
            return (
              <RevealItem
                key={key}
                className="group relative flex flex-col rounded-2xl border border-border-strong bg-bg-elev-2/70 p-7 transition-colors duration-300 hover:border-accent/45 hover:bg-bg-elev-2"
              >
                <span className="text-center font-mono-accent text-sm text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-center font-display text-2xl text-fg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {step.desc}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
