"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GhostCTA } from "@/components/ui/Buttons";

export function AboutPreview() {
  const { t } = useLanguage();

  return (
    <Section id="about" className="relative">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-bg-elev">
              <Image
                src="/iustin.jpg"
                alt="Iustin-Flavius Aionese"
                fill
                sizes="(max-width: 1024px) 90vw, 384px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/90 to-transparent" />
              <span className="absolute bottom-5 left-5 font-mono-accent text-xs uppercase tracking-[0.18em] text-fg-muted">
                Iustin-Flavius Aionese
              </span>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Eyebrow>{t.aboutPreview.eyebrow}</Eyebrow>
            <AnimatedHeading
              splitKey={t.aboutPreview.heading}
              className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.2rem)] font-medium leading-[1.05] tracking-tight text-fg"
            >
              {t.aboutPreview.heading}
            </AnimatedHeading>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-fg-muted">
                {t.aboutPreview.body}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-fg-muted">
                {t.aboutPreview.body2}
              </p>
              <div className="mt-8">
                <GhostCTA href="/about" label={t.aboutPreview.cta} size="md" />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
