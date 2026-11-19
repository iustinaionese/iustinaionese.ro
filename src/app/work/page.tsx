"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { VISIBLE_PROJECTS } from "@/lib/site";
import { Container, Eyebrow } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";

const TIER_LABEL: Record<number, { ro: string; en: string }> = {
  1: { ro: "Platforme & produse", en: "Platforms & products" },
  2: { ro: "Sisteme de achiziție clienți", en: "Client-acquisition systems" },
  3: { ro: "Sisteme de prezentare", en: "Business presence systems" },
};

export default function WorkPage() {
  const { t, lang } = useLanguage();
  const tiers = [1, 2, 3] as const;

  return (
    <div className="pt-36 pb-28">
      <Container>
        <Eyebrow>{t.work.eyebrow}</Eyebrow>
        <AnimatedHeading
          as="h1"
          splitKey={`${lang}-work`}
          className="mt-5 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-tight text-fg"
        >
          {t.work.heading}
        </AnimatedHeading>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            {t.work.sub}
          </p>
        </Reveal>

        {tiers.map((tier) => {
          const projects = VISIBLE_PROJECTS.filter((p) => p.tier === tier);
          if (!projects.length) return null;
          return (
            <div key={tier} className="mt-16">
              <div className="mb-6 flex items-center gap-4">
                <h2 className="font-mono-accent text-xs uppercase tracking-[0.16em] text-accent">
                  {TIER_LABEL[tier][lang]}
                </h2>
                <span className="h-px flex-1 bg-border" />
              </div>
              <RevealGroup
                stagger={0.08}
                className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
              >
                {projects.map((project) => (
                  <RevealItem key={project.slug} className="flex">
                    <ProjectCard project={project} className="w-full" />
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
