"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialCard, VideoTestimonialCard } from "@/components/ui/TestimonialCards";
import { TESTIMONIAL_VIDEOS } from "@/lib/site";

// Video testimonials in display order.
const VIDEO_ORDER = ["romina", "mariana", "lavinia", "claudia"] as const;

export function Testimonials() {
  const { t } = useLanguage();
  const { items, note, playLabel } = t.testimonials;

  return (
    <Section id="testimonials" className="relative">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>{t.testimonials.eyebrow}</Eyebrow>
          <AnimatedHeading
            splitKey={t.testimonials.heading}
            className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.4rem)] font-medium leading-[1.04] tracking-tight text-fg"
          >
            {t.testimonials.heading}
          </AnimatedHeading>
        </div>

        {/* 1 column on mobile, 2×2 from sm, one row of 4 from xl */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 xl:max-w-none xl:grid-cols-4">
          {VIDEO_ORDER.map((key, i) => {
            const video = TESTIMONIAL_VIDEOS[key];
            if (!video) return null;
            return (
              <Reveal key={key} delay={i * 0.08}>
                <VideoTestimonialCard
                  src={video.src}
                  poster={video.poster}
                  name={items[key].name}
                  role={items[key].role}
                  note={note}
                  playLabel={playLabel}
                />
              </Reveal>
            );
          })}
        </div>

        {/* Written testimonial */}
        <div className="mx-auto mt-4 max-w-3xl">
          <Reveal>
            <TestimonialCard
              quote={items.mihaela.quote}
              name={items.mihaela.name}
              role={items.mihaela.role}
              note={note}
              featured
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
