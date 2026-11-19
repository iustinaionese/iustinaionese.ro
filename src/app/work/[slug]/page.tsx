import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { VISIBLE_PROJECTS } from "@/lib/site";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { pageMetadata } from "@/lib/seo";
import { CaseStudyView } from "@/components/work/CaseStudyView";

export function generateStaticParams() {
  return VISIBLE_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const project = VISIBLE_PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  const copy = dictionaries.ro.projects[slug as keyof typeof dictionaries.ro.projects];
  // Share the project's own screenshot instead of the generic site image.
  const image = project.images?.[0];
  return pageMetadata(
    parent,
    `${project.name} — ${copy.category}`,
    copy.desc,
    image ? [image] : undefined,
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = VISIBLE_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();
  return <CaseStudyView slug={slug} />;
}
