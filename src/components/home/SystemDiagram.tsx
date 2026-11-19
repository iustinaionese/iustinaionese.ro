"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CapabilityIcons } from "@/components/ui/icons";

const NODES = [
  { key: "funnel", icon: "funnels" },
  { key: "platform", icon: "platforms" },
  { key: "payments", icon: "payments" },
  { key: "automation", icon: "automation" },
] as const;

const flow = {
  duration: 2.2,
  repeat: Infinity,
  ease: "easeInOut" as const,
  repeatDelay: 0.4,
};

function Connector() {
  const reduced = useReducedMotion();
  return (
    <>
      {/* vertical — stacked (mobile/tablet) */}
      <div className="relative mx-auto h-8 w-px self-center overflow-visible lg:hidden">
        <div className="absolute inset-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-border via-accent/40 to-border" />
        {!reduced && (
          <motion.div
            className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_2px_var(--glow)]"
            initial={{ top: "0%", opacity: 0 }}
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={flow}
          />
        )}
      </div>
      {/* horizontal — row (desktop) */}
      <div className="relative mx-2 hidden h-px flex-1 self-center overflow-visible lg:block">
        <div className="absolute inset-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-border via-accent/40 to-border" />
        {!reduced && (
          <motion.div
            className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_2px_var(--glow)]"
            initial={{ left: "0%", opacity: 0 }}
            animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={flow}
          />
        )}
      </div>
    </>
  );
}

export function SystemDiagram() {
  const { t } = useLanguage();

  return (
    <Section id="usp" className="relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center before:hidden">
            {t.diagram.eyebrow}
          </Eyebrow>
          <AnimatedHeading
            splitKey={t.diagram.heading}
            className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.2rem)] font-medium leading-[1.05] tracking-tight text-fg"
          >
            {t.diagram.heading}
          </AnimatedHeading>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">
              {t.diagram.sub}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-stretch gap-4 lg:mt-20 lg:flex-row lg:items-stretch">
          {NODES.map((node, i) => {
            const Icon = CapabilityIcons[node.icon];
            const data = t.diagram.nodes[node.key];
            return (
              <div key={node.key} className="contents">
                <Reveal
                  delay={i * 0.12}
                  className="group relative flex-1 rounded-2xl border border-border bg-bg-elev/40 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent/40"
                >
                  <div className="flex justify-center lg:justify-start">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-bg text-accent transition-colors group-hover:border-accent/50">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-center font-display text-2xl text-fg lg:text-left">
                    {data.title}
                  </h3>
                  <p className="mt-1 text-center font-mono-accent text-sm text-fg-muted lg:text-left">
                    {data.desc}
                  </p>
                </Reveal>
                {i < NODES.length - 1 && <Connector />}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
