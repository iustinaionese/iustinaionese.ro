import type { Metadata, ResolvingMetadata } from "next";

/**
 * Per-page metadata: its own title/description plus matching Open Graph and
 * Twitter tags. A child `openGraph` replaces the parent's whole object, so the
 * share image is carried over from the parent unless `images` is given.
 * Canonical and og:url come from the root layout ("./" = the page's own URL).
 */
export async function pageMetadata(
  parent: ResolvingMetadata,
  title: string,
  description: string,
  images?: string[],
): Promise<Metadata> {
  const shareTitle = `${title} · Iustin Aionese`;
  return {
    // A plain string title would drop the root template for child segments
    // (e.g. /work/[slug]), so set it absolute and pass the template on.
    title: { absolute: shareTitle, template: "%s · Iustin Aionese" },
    description,
    openGraph: {
      type: "website",
      locale: "ro_RO",
      siteName: "Iustin Aionese",
      url: "./",
      title: shareTitle,
      description,
      images: images ?? (await parent).openGraph?.images,
    },
    // No images here: Next copies them from openGraph.
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
    },
  };
}
