"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { ProjectMeta } from "@/lib/site";
import { clsx } from "@/lib/clsx";
import { ArrowUpRight } from "@/components/ui/icons";

export function ProjectCard({
  project,
  className,
}: {
  project: ProjectMeta;
  className?: string;
}) {
  const { t } = useLanguage();
  const copy = t.projects[project.slug as keyof typeof t.projects];

  return (
    <Link
      href={`/work/${project.slug}`}
      scroll={false}
      className={clsx(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-elev/40 transition-all duration-400 hover:border-accent/45 hover:bg-bg-elev/70",
        className,
      )}
    >
      {/* preview */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-[radial-gradient(120%_120%_at_20%_0%,#26202a,#0e0c10_70%)]">
        {project.portrait && project.images?.length ? (
          <div className="absolute inset-0 flex items-stretch justify-center gap-2 p-3">
            {project.images.slice(0, 3).map((src) => (
              <div key={src} className="relative flex-1">
                <Image
                  src={src}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 30vw, 12vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : project.images?.[0] ? (
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center font-display text-5xl text-white/[0.06] transition-transform duration-700 group-hover:scale-110 sm:text-6xl">
            {project.name}
          </span>
        )}
        <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-700 group-hover:left-[120%]" />
        {project.live && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-bg/70 px-2.5 py-1 font-mono-accent text-[0.65rem] uppercase tracking-wider text-fg backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-whatsapp" />
            {t.work.live}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono-accent text-xs uppercase tracking-[0.14em] text-fg-muted">
          {copy.category}
        </span>
        <h3 className="mt-2 flex items-center gap-2 font-display text-2xl text-fg">
          {project.name}
          <ArrowUpRight className="h-5 w-5 text-fg-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
          {copy.desc}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-bg px-2.5 py-1 font-mono-accent text-[0.68rem] text-fg-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
