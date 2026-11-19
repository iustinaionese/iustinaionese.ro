"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { FEATURED_PROJECTS } from "@/lib/site";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { GhostCTA } from "@/components/ui/Buttons";
import { ProjectCard } from "@/components/work/ProjectCard";

export function FeaturedWork() {
  const { t } = useLanguage();

  return (
    <Section id="work" className="relative">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>{t.work.eyebrow}</Eyebrow>
            <AnimatedHeading
              splitKey={t.work.heading}
              className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.4rem)] font-medium leading-[1.04] tracking-tight text-fg"
            >
              {t.work.heading}
            </AnimatedHeading>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-fg-muted">
                {t.work.sub}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <GhostCTA href="/work" label={t.work.viewAll} size="md" />
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.1}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {FEATURED_PROJECTS.map((project) => (
            <RevealItem key={project.slug} className="flex">
              <ProjectCard project={project} className="w-full" />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
