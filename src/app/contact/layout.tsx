import type { Metadata, ResolvingMetadata } from "next";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { pageMetadata } from "@/lib/seo";

// The page is a client component, so its metadata lives in this server layout.
export function generateMetadata(
  _props: object,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { title, description } = dictionaries.ro.seo.contact;
  return pageMetadata(parent, title, description);
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
