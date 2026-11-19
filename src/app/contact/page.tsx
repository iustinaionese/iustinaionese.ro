"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { CALENDLY_URL, CONTACT_EMAIL, whatsappLink } from "@/lib/site";
import { Container, Eyebrow } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsApp, ArrowUpRight } from "@/components/ui/icons";

const COPY = {
  ro: {
    eyebrow: "Contact",
    title: "Hai să vorbim despre afacerea ta",
    sub: "Spune-mi despre afacerea ta și ce vrei să construiești — primul răspuns vine de obicei în aceeași zi.",
    whatsapp: "Cel mai rapid. Scrie-mi direct pe WhatsApp.",
    calendly: "Programează un apel gratuit de 30 de minute.",
    email: "Sau scrie-mi un email.",
  },
  en: {
    eyebrow: "Contact",
    title: "Let's talk about your business",
    sub: "Tell me about your business and what you want to build — first reply usually same day.",
    whatsapp: "Fastest. Message me directly on WhatsApp.",
    calendly: "Book a free 30-minute call.",
    email: "Or send me an email.",
  },
};

export default function ContactPage() {
  const { lang } = useLanguage();
  const c = COPY[lang];

  const cards = [
    {
      label: "WhatsApp",
      value: "+40 751 084 902",
      desc: c.whatsapp,
      href: whatsappLink(lang),
      accent: true,
    },
    {
      label: "Calendly",
      value: lang === "ro" ? "Apel 30 min" : "30-min call",
      desc: c.calendly,
      href: CALENDLY_URL,
    },
    {
      label: "Email",
      value: CONTACT_EMAIL,
      desc: c.email,
      href: `mailto:${CONTACT_EMAIL}`,
    },
  ];

  return (
    <div className="pt-36 pb-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <AnimatedHeading
              as="h1"
              splitKey={`${lang}-contact`}
              className="mt-5 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-tight text-fg"
            >
              {c.title}
            </AnimatedHeading>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-fg-muted">
                {c.sub}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl border border-border bg-bg-elev">
              <Image
                src="/iustin.jpg"
                alt="Iustin-Flavius Aionese"
                fill
                sizes="(max-width: 1024px) 80vw, 320px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/90 to-transparent" />
              <span className="absolute bottom-5 left-5 font-mono-accent text-xs uppercase tracking-[0.18em] text-fg-muted">
                Iustin-Flavius Aionese
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 0.08}>
              <a
                href={card.href}
                target={card.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-bg-elev/40 p-7 transition-colors duration-300 hover:border-accent/50"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-mono-accent text-xs uppercase tracking-[0.16em] text-fg-muted">
                    {card.label === "WhatsApp" && (
                      <WhatsApp className="h-4 w-4 text-whatsapp" />
                    )}
                    {card.label}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-fg-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <span className="mt-6 font-display text-2xl text-fg">
                  {card.value}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {card.desc}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
