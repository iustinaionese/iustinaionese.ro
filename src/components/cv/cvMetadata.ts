import type { Metadata, ResolvingMetadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CV, CV_PATH, type CvLang } from "@/lib/cv";

/**
 * Metadata for /cv and /en/cv: the usual page tags, plus a profile-type share
 * card in the page's own language and hreflang links between the two
 * versions (alternates are merged shallowly, so canonical is restated).
 */
export async function cvMetadata(
  lang: CvLang,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const c = CV[lang];
  const base = await pageMetadata(parent, c.page.title, c.page.description);
  return {
    ...base,
    alternates: {
      canonical: "./",
      languages: {
        "ro-RO": CV_PATH.ro,
        "en-US": CV_PATH.en,
        "x-default": CV_PATH.ro,
      },
    },
    openGraph: {
      ...base.openGraph,
      type: "profile",
      firstName: "Iustin-Flavius",
      lastName: "Aionese",
      locale: lang === "ro" ? "ro_RO" : "en_US",
    },
  };
}
