"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Container, Eyebrow } from "@/components/ui/Section";
import { WhatsAppCTA, GhostCTA } from "@/components/ui/Buttons";

export function NotFoundView() {
  const { t } = useLanguage();
  const L = t.notFound;

  return (
    <div className="flex min-h-[80svh] items-center pt-36 pb-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{L.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-tight text-fg">
            {L.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted">{L.body}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <GhostCTA href="/work" label={t.cta.seeWork} />
            <WhatsAppCTA />
            <GhostCTA href="/" label={L.home} />
          </div>
        </div>
      </Container>
    </div>
  );
}
