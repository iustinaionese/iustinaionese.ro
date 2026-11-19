"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Check, XMark } from "@/components/ui/icons";

const TIER_ORDER = [
  "presence",
  "automation",
  "acquisition",
  "platforms",
] as const;

export function Pricing() {
  const { t } = useLanguage();
  // wrap the price in a no-wrap span so SplitText keeps "1.500 €" on one line
  const headingHtml = t.pricing.heading.replace(
    /([\d.,]+\s*€)/,
    '<span class="whitespace-nowrap">$1</span>',
  );

  return (
    <Section id="pricing" className="relative">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>{t.pricing.eyebrow}</Eyebrow>
          <AnimatedHeading
            splitKey={t.pricing.heading}
            html={headingHtml}
            className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.4rem)] font-medium leading-[1.04] tracking-tight text-fg"
          />
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">
              {t.pricing.sub}
            </p>
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.07}
          className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TIER_ORDER.map((key) => {
            const tier = t.pricing.tiers[key];
            return (
              <RevealItem
                key={key}
                className="group flex flex-col rounded-2xl border border-border bg-bg-elev/40 p-6 transition-colors duration-300 hover:border-accent/45"
              >
                <h3 className="font-display text-xl leading-tight text-fg">
                  {tier.title}
                </h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-mono-accent text-xs uppercase tracking-wider text-fg-faint">
                    {t.pricing.from}
                  </span>
                  <span className="font-display text-3xl font-semibold text-gradient">
                    {tier.price}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-muted">
                  {tier.desc}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* anchor */}
        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-accent/25 bg-accent/[0.06] px-7 py-6 text-center font-display text-xl leading-snug text-fg sm:text-2xl">
            {t.pricing.anchor}
          </p>
        </Reveal>

        {/* who for / who not */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-bg-elev/40 p-7">
              <h3 className="font-display text-xl text-fg">
                {t.pricing.forTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {t.pricing.forList.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-fg-muted">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-whatsapp" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-bg-elev/20 p-7">
              <h3 className="font-display text-xl text-fg-muted">
                {t.pricing.notTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {t.pricing.notList.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-fg-faint">
                    <XMark className="mt-1 h-4 w-4 shrink-0 text-fg-faint" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
