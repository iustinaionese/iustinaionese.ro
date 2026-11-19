import type { Metadata, ResolvingMetadata } from "next";
import { cvMetadata } from "@/components/cv/cvMetadata";
import { CvPage } from "@/components/cv/CvPage";

export function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return cvMetadata("en", parent);
}

export default function CvEnPage() {
  return <CvPage lang="en" />;
}
