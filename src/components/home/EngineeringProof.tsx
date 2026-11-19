"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { VISIBLE_METRICS } from "@/lib/site";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { clsx } from "@/lib/clsx";

/** Metrics shown as wide cards (2 columns on sm and lg). */
const WIDE = new Set<string>(["lines", "jobs"]);
const LG_COLS = 3;
const LG_SPAN: Record<number, string> = {
  2: "lg:col-span-2",
  3: "lg:col-span-3",
};

/**
 * lg column span per card. The last card stretches to fill its row, so hiding
 * a project's metric (ProjectMeta.hidden) never leaves a hole in the grid.
 */
function lgSpans(keys: string[]): number[] {
  let col = 0;
  return keys.map((key, i) => {
    let span = WIDE.has(key) ? 2 : 1;
    if (col + span > LG_COLS) col = 0;
    if (i === keys.length - 1) span = LG_COLS - col;
    col = (col + span) % LG_COLS;
    return span;
  });
}

const LG_SPANS = lgSpans(VISIBLE_METRICS.map((m) => m.key));

interface MetricCopy {
  prefix?: string;
  unit?: string;
  headline?: string;
  label: string;
}

export function EngineeringProof() {
  const { t } = useLanguage();

  return (
    <Section id="proof" className="relative">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>{t.proof.eyebrow}</Eyebrow>
          <AnimatedHeading
            splitKey={t.proof.heading}
            className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.4rem)] font-medium leading-[1.04] tracking-tight text-fg"
          >
            {t.proof.heading}
          </AnimatedHeading>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">
              {t.proof.sub}
            </p>
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.07}
          className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {VISIBLE_METRICS.map((m, i) => {
            const copy = t.proof.metrics[
              m.key as keyof typeof t.proof.metrics
            ] as MetricCopy;
            return (
              <RevealItem
                key={m.key}
                className={clsx(
                  "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border-strong bg-bg-elev-2/70 p-6 transition-colors duration-300 hover:border-accent/45 hover:bg-bg-elev-2",
                  WIDE.has(m.key) && "sm:col-span-2",
                  LG_SPAN[LG_SPANS[i]],
                )}
              >
                <div className="font-display text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-none tracking-tight text-gradient">
                  {m.value !== null ? (
                    <CountUp
                      value={m.value}
                      prefix={copy.prefix ?? ""}
                      suffix={copy.unit ?? ""}
                    />
                  ) : (
                    copy.headline
                  )}
                </div>
                <div className="mt-6">
                  <p className="text-sm leading-relaxed text-fg-muted">
                    {copy.label}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-mono-accent text-xs text-fg-faint">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {m.project}
                  </span>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
