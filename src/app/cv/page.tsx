import type { Metadata, ResolvingMetadata } from "next";
import { cvMetadata } from "@/components/cv/cvMetadata";
import { CvPage } from "@/components/cv/CvPage";

export function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return cvMetadata("ro", parent);
}

export default function CvRoPage() {
  return <CvPage lang="ro" />;
}
