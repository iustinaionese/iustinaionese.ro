"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { TESTIMONIAL_VIDEOS, VISIBLE_PROJECTS } from "@/lib/site";
import { caseStudies } from "@/lib/caseStudies";
import { Container, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppCTA } from "@/components/ui/Buttons";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { TestimonialCard, VideoTestimonialCard } from "@/components/ui/TestimonialCards";
import { ArrowRight, ArrowUpRight, Check } from "@/components/ui/icons";

const DIMS = [
  { key: "ui", ro: "UI / UX", en: "UI / UX" },
  { key: "backend", ro: "Backend", en: "Backend" },
  { key: "ai", ro: "AI", en: "AI" },
  { key: "integrations", ro: "Integrări", en: "Integrations" },
  { key: "realtime", ro: "Real-time", en: "Real-time" },
] as const;

function Block({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <section className="border-t border-border pt-8">
        <h2 className="eyebrow mb-5">{label}</h2>
        {children}
      </section>
    </Reveal>
  );
}

export function CaseStudyView({ slug }: { slug: string }) {
  const { t, lang } = useLanguage();
  const reduced = useReducedMotion();
  const project = VISIBLE_PROJECTS.find((p) => p.slug === slug);
  const cs = caseStudies[slug]?.[lang];
  if (!project || !cs) return null;
  const copy = t.projects[slug as keyof typeof t.projects];
  const L = t.caseStudy;
  // This client's own testimonial (video, or written for Mihaela), if any.
  const testimonial = project.testimonial
    ? t.testimonials.items[project.testimonial]
    : undefined;
  const testimonialVideo = project.testimonial
    ? TESTIMONIAL_VIDEOS[project.testimonial]
    : undefined;

  return (
    <div className="pt-36 pb-28">
      <Container>
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 font-mono-accent text-xs uppercase tracking-[0.16em] text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          {t.work.heading}
        </Link>

        {/* hero */}
        <div className="mt-8 max-w-4xl">
          <Eyebrow>{copy.category}</Eyebrow>
          <h1 className="mt-4 font-display text-[clamp(2.6rem,8vw,5.5rem)] font-medium leading-[0.98] tracking-tight text-fg">
            {project.name}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-fg-muted">
            {cs.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-bg-elev/40 px-3 py-1.5 font-mono-accent text-xs text-fg-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <WhatsAppCTA size="md" />
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-border-strong px-5 font-medium text-fg transition-colors hover:border-accent/60"
              >
                {L.viewLive}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>

        {/* media — demo video(s) (if any) + screenshots */}
        {project.videos?.length || project.video || project.images?.length ? (
          <Reveal className="mt-12 space-y-4">
            {project.videos?.length ? (
              // Vertical videos (Reels, phone-format walkthroughs) stay phone-sized: side by side from sm up,
              // instead of full width and ~1,800 px tall.
              <div
                className={
                  project.videos.every((v) => v.height > v.width)
                    ? "grid gap-10 sm:grid-cols-2"
                    : "space-y-10"
                }
              >
                {project.videos.map((v, i, all) => {
                  // A lone video gets no "Part 1" — only its title, if any.
                  const part = all.length > 1 ? `${L.part} ${i + 1}` : "";
                  const title = cs.videoTitles?.[i];
                  const caption = [part, title].filter(Boolean).join(" · ");
                  return (
                    <figure
                      key={v.src}
                      className={
                        v.height > v.width ? "mx-auto w-full max-w-[400px] space-y-3" : "space-y-3"
                      }
                    >
                      {caption ? (
                        <figcaption className="font-mono-accent text-xs uppercase tracking-[0.16em] text-fg-muted">
                          {caption}
                        </figcaption>
                      ) : null}
                      <div
                        className="relative overflow-hidden rounded-2xl border border-border bg-bg-elev"
                        style={{ aspectRatio: `${v.width} / ${v.height}` }}
                      >
                        <VideoPlayer
                          src={v.src}
                          poster={v.poster}
                          title={part ? `${project.name} — ${part}` : `${project.name} — demo`}
                          playLabel={part ? `${L.playDemo} — ${part}` : L.playDemo}
                          fit="contain"
                        />
                      </div>
                    </figure>
                  );
                })}
              </div>
            ) : project.video ? (
              <div
                className={
                  project.portrait
                    ? "relative mx-auto aspect-[9/19] w-full max-w-[340px] overflow-hidden rounded-2xl border border-border bg-bg-elev"
                    : "relative aspect-[2/1] overflow-hidden rounded-2xl border border-border bg-bg-elev"
                }
              >
                <VideoPlayer
                  src={project.video}
                  poster={project.images?.[0] ?? ""}
                  title={`${project.name} — demo`}
                  playLabel={L.playDemo}
                  fit="contain"
                />
              </div>
            ) : !project.portrait && project.images?.[0] ? (
              <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-border bg-bg-elev">
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  fill
                  sizes="(max-width: 1024px) 92vw, 1024px"
                  className="object-contain"
                  priority
                />
              </div>
            ) : null}

            {project.portrait && project.images?.length ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {project.images.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-[9/19] overflow-hidden rounded-2xl border border-border bg-bg-elev"
                  >
                    <Image
                      src={src}
                      alt={`${project.name} — ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 45vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </Reveal>
        ) : null}

        {/* overview + problem + complexity radar */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-7">
            <Block label={L.overview}>
              <p className="text-lg leading-relaxed text-fg-muted">
                {cs.overview}
              </p>
            </Block>
            <Block label={L.problem} delay={0.05}>
              <p className="text-lg leading-relaxed text-fg-muted">
                {cs.problem}
              </p>
            </Block>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-bg-elev/40 p-7 lg:sticky lg:top-28">
              <span className="eyebrow">{L.complexity}</span>
              <div className="mt-6 space-y-4">
                {DIMS.map((dim, i) => {
                  const value = project.complexity[dim.key];
                  return (
                    <div key={dim.key}>
                      <div className="mb-1.5 flex items-center justify-between font-mono-accent text-xs">
                        <span className="text-fg-muted">{dim[lang]}</span>
                        <span className="text-fg">{value}/10</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-bg">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent-deep to-accent"
                          initial={reduced ? false : { width: 0 }}
                          whileInView={{ width: `${value * 10}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: i * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* breakdown */}
        <div className="mt-14 max-w-4xl space-y-12">
          <Block label={L.architecture}>
            <ul className="space-y-2.5">
              {cs.architecture.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 leading-relaxed text-fg-muted"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Block>

          <Block label={L.features}>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {cs.features.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-fg-muted"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Block>

          <Block label={L.integrations}>
            <div className="flex flex-wrap gap-2">
              {cs.integrations.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-bg-elev/40 px-3 py-1.5 text-sm text-fg-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </Block>

          <Block label={L.engineering}>
            <div className="grid gap-3">
              {cs.engineering.map((e) => (
                <div
                  key={e.h}
                  className="rounded-2xl border border-border-strong bg-bg-elev-2/60 p-6"
                >
                  <h3 className="font-display text-xl text-accent-strong">
                    {e.h}
                  </h3>
                  <p className="mt-2 leading-relaxed text-fg-muted">{e.p}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block label={L.stack}>
            <div className="grid gap-4 sm:grid-cols-2">
              {cs.stack.map((group) => (
                <div key={group.label}>
                  <div className="font-mono-accent text-xs uppercase tracking-[0.16em] text-fg-faint">
                    {group.label}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {group.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-md border border-border bg-bg px-2 py-1 font-mono-accent text-xs text-fg-muted"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Block>

          {testimonial ? (
            <Block label={L.testimonial}>
              {testimonialVideo ? (
                <div className="max-w-sm">
                  <VideoTestimonialCard
                    src={testimonialVideo.src}
                    poster={testimonialVideo.poster}
                    name={testimonial.name}
                    role={testimonial.role}
                    playLabel={t.testimonials.playLabel}
                  />
                </div>
              ) : "quote" in testimonial && typeof testimonial.quote === "string" ? (
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                />
              ) : null}
            </Block>
          ) : null}

          <Block label={L.outcome}>
            <p className="font-display text-2xl leading-snug text-fg">
              {cs.outcome}
            </p>
            <div className="mt-8">
              <WhatsAppCTA />
            </div>
          </Block>
        </div>
      </Container>
    </div>
  );
}
