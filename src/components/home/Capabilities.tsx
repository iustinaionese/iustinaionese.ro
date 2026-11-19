"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CapabilityIcons } from "@/components/ui/icons";
import { CAPABILITY_KEYS } from "@/lib/site";
import { clsx } from "@/lib/clsx";

type CapKey = (typeof CAPABILITY_KEYS)[number];

const LAYOUT: { key: CapKey; span: string }[] = [
  { key: "funnels", span: "lg:col-span-2 lg:row-span-2" },
  { key: "platforms", span: "sm:col-span-2 lg:col-span-2" },
  { key: "mobile", span: "" },
  { key: "payments", span: "" },
  { key: "automation", span: "" },
  { key: "ai", span: "" },
  { key: "integrations", span: "" },
  { key: "analytics", span: "" },
];

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <Section id="capabilities" className="relative">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>{t.capabilities.eyebrow}</Eyebrow>
          <AnimatedHeading
            splitKey={t.capabilities.heading}
            className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.4rem)] font-medium leading-[1.04] tracking-tight text-fg"
          >
            {t.capabilities.heading}
          </AnimatedHeading>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">
              {t.capabilities.sub}
            </p>
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.07}
          className="mt-14 grid auto-rows-[minmax(11rem,auto)] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {LAYOUT.map(({ key, span }) => {
            const Icon = CapabilityIcons[key];
            const item = t.capabilities.items[key];
            const featured = key === "funnels";
            return (
              <RevealItem
                key={key}
                className={clsx(
                  "group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-border-strong bg-bg-elev-2/70 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent/45 hover:bg-bg-elev-2 sm:items-start sm:text-left",
                  span,
                )}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-bg text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="mt-8">
                  <h3
                    className={clsx(
                      "font-display text-fg",
                      featured ? "text-2xl sm:text-[1.7rem]" : "text-xl",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={clsx(
                      "mt-2 leading-relaxed text-fg-muted",
                      featured ? "text-base max-w-md" : "text-sm",
                    )}
                  >
                    {item.desc}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
