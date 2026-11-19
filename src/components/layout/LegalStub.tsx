"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { COMPANY, CONTACT_EMAIL } from "@/lib/site";
import { Container } from "@/components/ui/Section";

export function LegalStub({ type }: { type: "privacy" | "terms" }) {
  const { t } = useLanguage();
  const L = t.legal;
  const doc = L[type];

  return (
    <div className="pt-36 pb-28">
      <Container className="max-w-3xl">
        <h1 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-medium leading-tight tracking-tight text-fg">
          {doc.title}
        </h1>
        <p className="mt-3 font-mono-accent text-xs uppercase tracking-[0.16em] text-fg-faint">
          {L.updated}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-fg-muted">{doc.intro}</p>

        {/* data controller / legal entity */}
        <div className="mt-8 rounded-2xl border border-border bg-bg-elev/40 p-6">
          <span className="eyebrow">{L.operatorTitle}</span>
          <p className="mt-3 font-display text-xl text-fg">{COMPANY.name}</p>
          <dl className="mt-3 grid grid-cols-1 gap-1.5 font-mono-accent text-sm text-fg-muted sm:grid-cols-2">
            <div>
              <span className="text-fg-faint">{L.fields.cui}: </span>
              {COMPANY.cui}
            </div>
            <div>
              <span className="text-fg-faint">{L.fields.reg}: </span>
              {COMPANY.regCom}
            </div>
            <div>
              <span className="text-fg-faint">{L.fields.founded}: </span>
              {COMPANY.founded}
            </div>
            <div>
              <span className="text-fg-faint">{L.fields.office}: </span>
              {`${COMPANY.address}, ${COMPANY.city}, jud. ${COMPANY.county}`}
            </div>
            <div className="sm:col-span-2">
              <span className="text-fg-faint">{L.fields.email}: </span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-accent hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </dl>
        </div>

        {/* sections */}
        <div className="mt-10 space-y-8">
          {doc.sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-display text-xl text-fg">{s.h}</h2>
              <div className="mt-2 space-y-3 leading-relaxed text-fg-muted">
                {s.p.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
