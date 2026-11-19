"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Container, Eyebrow } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppCTA, GhostCTA } from "@/components/ui/Buttons";
import { Testimonials } from "@/components/home/Testimonials";
import { CALENDLY_URL, VISIBLE_PROJECTS } from "@/lib/site";

const SHOW_DUOI = VISIBLE_PROJECTS.some((p) => p.slug === "duoi");

export default function AboutPage() {
  const { t, lang } = useLanguage();
  const [intro, ...rest] = t.about.body;
  const body = SHOW_DUOI ? [intro, t.about.duoi, ...rest] : t.about.body;

  return (
    <div className="pt-36">
      <Container className="pb-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-bg-elev">
              <Image
                src="/iustin-2.jpg"
                alt="Iustin-Flavius Aionese"
                fill
                sizes="(max-width: 1024px) 90vw, 384px"
                className="object-cover"
                priority
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
              as="h1"
              splitKey={`${lang}-about`}
              className="mt-5 font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-medium leading-[1.04] tracking-tight text-fg"
            >
              {t.aboutPreview.heading}
            </AnimatedHeading>

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-fg-muted">
                <p>
                  {t.about.leadIn}
                  <span className="font-medium text-accent-strong">
                    {t.about.amount}
                  </span>
                  {t.about.leadOut}
                </p>
                <p className="font-display text-2xl leading-snug text-fg">
                  {t.about.today}
                </p>
                {body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center gap-3">
                <WhatsAppCTA className="w-72 max-w-full" />
                <GhostCTA
                  href={CALENDLY_URL}
                  label={t.cta.bookCall}
                  external
                  className="w-72 max-w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      <div className="theme-light">
        <Testimonials />
      </div>
    </div>
  );
}
