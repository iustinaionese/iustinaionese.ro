import { SITE_URL } from "@/lib/site";
import { CV, CV_NAME, CV_PATH, CV_PDF, CV_UPDATED, type CvLang } from "@/lib/cv";
import { Container, Eyebrow } from "@/components/ui/Section";
import { GhostCTA } from "@/components/ui/Buttons";
import { ArrowDown } from "@/components/ui/icons";
import { CvDocument } from "./CvDocument";
import { CvTextSize } from "./CvTextSize";

/**
 * /cv and /en/cv: a short bar (download, other language) over the CV paper.
 * When printed, only the paper remains (globals.css → "CV printing").
 */
export function CvPage({ lang }: { lang: CvLang }) {
  const c = CV[lang];
  const other: CvLang = lang === "ro" ? "en" : "ro";

  // Google ProfilePage about the site's existing Person node.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}${CV_PATH[lang]}#profile`,
    url: `${SITE_URL}${CV_PATH[lang]}`,
    name: `${CV_NAME} · CV`,
    inLanguage: lang === "ro" ? "ro-RO" : "en-US",
    dateModified: `${CV_UPDATED}-01`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: { "@id": `${SITE_URL}/#person` },
  };

  return (
    <div className="pb-24 pt-28 sm:pt-36 print:p-0">
      <script
        type="application/ld+json"
        // JSON-LD per the Next guide: escape "<" so the data cannot close the tag.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Container className="print:hidden">
        <div className="mx-auto flex max-w-[210mm] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>CV</Eyebrow>
            <p className="mt-4 max-w-md text-fg-muted">
              {c.page.intro} {c.page.updated}.
            </p>
            <CvTextSize labels={c.page.textSize} className="mt-6" />
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={CV_PDF[lang]}
              download
              className="group inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 text-sm font-medium text-[#1a0c05] shadow-[0_18px_50px_-18px_var(--glow)] transition-colors duration-300 hover:bg-accent-strong"
            >
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              {c.page.download}
            </a>
            <GhostCTA href={CV_PATH[other]} label={c.page.otherLanguage} size="md" />
          </div>
        </div>
      </Container>

      <div className="mt-10 px-3 sm:px-8 print:m-0 print:p-0">
        <CvDocument lang={lang} />
      </div>
    </div>
  );
}
