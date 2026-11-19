import type { MetadataRoute } from "next";
import { SITE_URL, VISIBLE_PROJECTS } from "@/lib/site";

/**
 * XML sitemap (served at /sitemap.xml). Static pages + one entry per visible
 * project case study. The base URL is centralised in `SITE_URL` (src/lib/site.ts).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/work", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/cv", priority: 0.6, changeFrequency: "monthly" },
    { path: "/en/cv", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const projectEntries: MetadataRoute.Sitemap = VISIBLE_PROJECTS.map((p) => ({
    url: `${SITE_URL}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...projectEntries];
}
