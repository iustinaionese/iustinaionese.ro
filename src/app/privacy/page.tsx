import type { Metadata, ResolvingMetadata } from "next";
import { LegalStub } from "@/components/layout/LegalStub";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { pageMetadata } from "@/lib/seo";

export function generateMetadata(
  _props: object,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { title, intro } = dictionaries.ro.legal.privacy;
  return pageMetadata(parent, title, intro);
}

export default function PrivacyPage() {
  return <LegalStub type="privacy" />;
}
