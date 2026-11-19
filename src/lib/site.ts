/**
 * Site-wide constants: contact links, navigation, and language-independent
 * project / metric / capability metadata. All user-facing copy lives in the
 * i18n dictionaries (src/lib/i18n/dictionaries.ts).
 */

/** Canonical production origin (no trailing slash). Used by metadata, sitemap, robots. */
export const SITE_URL = "https://www.iustinaionese.ro";

export const WHATSAPP_NUMBER = "40751084902";

/** Pre-filled friendly opener (RO) — encoded at use site. */
export const WHATSAPP_MESSAGE_RO =
  "Salut Iustin! Am o afacere și vreau să discutăm despre un sistem digital.";
export const WHATSAPP_MESSAGE_EN =
  "Hi Iustin! I have a business and I'd like to talk about a digital system.";

export function whatsappLink(lang: "ro" | "en" = "ro") {
  const msg = lang === "ro" ? WHATSAPP_MESSAGE_RO : WHATSAPP_MESSAGE_EN;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export const CALENDLY_URL = "https://calendly.com/iustinflavius002/30min";
export const CONTACT_EMAIL = "contact@iustinaionese.ro";

/** Legal entity behind the studio (used in the legal pages + footer). */
export const COMPANY = {
  name: "DUOI SRL",
  cui: "53041613",
  regCom: "J2025094049009",
  founded: "02.12.2025",
  address: "Aleea Zmeurei, Nr. 20",
  city: "Constanța",
  county: "Constanța",
};

export const NAV_ITEMS = [
  { key: "work", href: "/work" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

/** Positioning bar chips — keys resolved via dictionary. */
export const POSITIONING_KEYS = [
  "acquisition",
  "platforms",
  "mobile",
  "payments",
  "automation",
  "ai",
  "integrations",
] as const;

/** Capabilities (bento). Icon is a lightweight key drawn inline. */
export const CAPABILITY_KEYS = [
  "funnels",
  "platforms",
  "mobile",
  "payments",
  "automation",
  "ai",
  "integrations",
  "analytics",
] as const;

/** Engineering proof metrics — each tied to the project that earned it. */
export const METRICS = [
  { key: "lines", value: 108000, suffix: "", project: "Redacto" },
  { key: "realtime", value: null, project: "TradeLottery" },
  { key: "mobile", value: 6, suffix: "", project: "DUOI" },
  { key: "integrations", value: 22, suffix: "", project: "Doula LaVie" },
  { key: "oauth", value: 3, suffix: "", project: "Redacto" },
  { key: "payments", value: null, project: "heartopening.ro" },
  { key: "jobs", value: 90, suffix: "", project: "Redacto" },
] as const;

/** Client testimonials; names, roles and quotes live in the dictionaries. */
export type TestimonialKey = "romina" | "mariana" | "lavinia" | "claudia" | "mihaela";

/** Self-hosted video testimonials (files in /public). Mihaela's is written. */
export const TESTIMONIAL_VIDEOS: Partial<
  Record<TestimonialKey, { src: string; poster: string }>
> = {
  romina: { src: "/romina-testimonial.mp4", poster: "/romina-testimonial-poster.jpg" },
  mariana: { src: "/mariana-testimonial.mp4", poster: "/mariana-testimonial-poster.jpg" },
  lavinia: { src: "/lavinia-testimonial.mp4", poster: "/lavinia-testimonial-poster.jpg" },
  claudia: { src: "/claudia-testimonial.mp4", poster: "/claudia-testimonial-poster.jpg" },
};

export type ProjectTier = 1 | 2 | 3;

export interface ProjectMeta {
  slug: string;
  name: string;
  tier: ProjectTier;
  /** category + description keys resolved via dictionary (project.<slug>.*) */
  tags: string[];
  live?: string;
  /** Screenshots under /public/projects (first = card hero). */
  images?: string[];
  /** Portrait / mobile-app shots — shown "contained" instead of cover-cropped. */
  portrait?: boolean;
  /** Demo screen recording under /public/projects (shown on the case study). */
  video?: string;
  /**
   * Several demo recordings (Part 1, Part 2…), each with its own poster and
   * native size (sets the frame's aspect ratio). Titles come from the case
   * study (`videoTitles`). Takes precedence over `video`.
   */
  videos?: { src: string; poster: string; width: number; height: number }[];
  /**
   * Hidden from the public site (cards, case-study route, sitemap, featured,
   * metrics, about copy) while all its data stays here. Remove to show it again.
   */
  hidden?: boolean;
  /** This client's testimonial, shown on the case-study page. */
  testimonial?: TestimonialKey;
  /** complexity radar 1–10: UI · Backend · AI · Integrations · Realtime */
  complexity: {
    ui: number;
    backend: number;
    ai: number;
    integrations: number;
    realtime: number;
  };
  featured?: boolean;
}

export const PROJECTS: ProjectMeta[] = [
  {
    slug: "redacto",
    name: "Redacto",
    images: ["/projects/redacto.jpg"],
    videos: [
      {
        src: "/projects/redacto-demo-1.mp4",
        poster: "/projects/redacto-1.jpg",
        width: 1080,
        height: 1920,
      },
      {
        src: "/projects/redacto-demo-2.mp4",
        poster: "/projects/redacto-2.jpg",
        width: 1080,
        height: 1920,
      },
    ],
    tier: 1,
    tags: ["AI SaaS", "OAuth ×3", "108k LOC", "Multi-tenant"],
    live: "https://redacto.ro",
    complexity: { ui: 9, backend: 10, ai: 10, integrations: 10, realtime: 7 },
    featured: true,
  },
  {
    slug: "auto-ai-video-editor",
    name: "Auto AI Video Editor",
    images: ["/projects/auto-ai-video-editor.jpg"],
    videos: [
      {
        src: "/projects/auto-ai-video-editor-demo-1.mp4",
        poster: "/projects/auto-ai-video-editor-1.jpg",
        width: 1920,
        height: 1080,
      },
      {
        src: "/projects/auto-ai-video-editor-demo-2.mp4",
        poster: "/projects/auto-ai-video-editor-2.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    tier: 1,
    tags: ["Claude Code skill", "Python + FFmpeg", "Gemini Vision", "~16k LOC"],
    complexity: { ui: 7, backend: 9, ai: 9, integrations: 9, realtime: 2 },
    featured: true,
  },
  {
    slug: "duoi",
    name: "DUOI",
    images: [
      "/projects/duoi-1.jpg",
      "/projects/duoi-2.jpg",
      "/projects/duoi-3.jpg",
      "/projects/duoi-4.jpg",
    ],
    portrait: true,
    video: "/projects/duoi-demo.mp4",
    tier: 1,
    tags: ["iOS + Android", "Real-time sync", "AI", "Solo 6 luni"],
    complexity: { ui: 9, backend: 8, ai: 7, integrations: 6, realtime: 9 },
    featured: true,
    // Hidden from the public site for now. Delete this line to bring
    // DUOI back everywhere — then un-feature one project so the home grid stays 2×2.
    hidden: true,
  },
  {
    slug: "time-tracker",
    name: "Time Tracker",
    images: ["/projects/time-tracker.jpg"],
    videos: [
      {
        src: "/projects/time-tracker-demo-1.mp4",
        poster: "/projects/time-tracker-1.jpg",
        width: 1920,
        height: 842,
      },
      {
        src: "/projects/time-tracker-demo-2.mp4",
        poster: "/projects/time-tracker-2.jpg",
        width: 1920,
        height: 842,
      },
      {
        src: "/projects/time-tracker-demo-3.mp4",
        poster: "/projects/time-tracker-3.jpg",
        width: 1920,
        height: 842,
      },
    ],
    tier: 1,
    tags: ["Windows desktop", ".NET 8 / C#", "Win32 API", "~20k LOC"],
    complexity: { ui: 8, backend: 9, ai: 2, integrations: 7, realtime: 8 },
    featured: true,
  },
  {
    slug: "tradelottery",
    name: "TradeLottery",
    images: ["/projects/tradelottery.jpg"],
    video: "/projects/tradelottery-demo.mp4",
    tier: 1,
    tags: ["Fintech", "WebSocket", "Stripe", "Real-time"],
    complexity: { ui: 8, backend: 9, ai: 3, integrations: 8, realtime: 10 },
    featured: true,
  },
  {
    slug: "faceless-youtube",
    name: "Faceless YouTube Automation",
    images: ["/projects/faceless-youtube.jpg"],
    videos: [
      {
        src: "/projects/faceless-youtube-demo.mp4",
        poster: "/projects/faceless-youtube-1.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    tier: 1,
    tags: ["Claude Code Routines", "YouTube Data API", "Claude Vision", "Python"],
    complexity: { ui: 3, backend: 8, ai: 8, integrations: 7, realtime: 2 },
  },
  {
    slug: "doula-lavie",
    name: "Doula LaVie",
    images: ["/projects/doula-lavie.jpg"],
    video: "/projects/doula-lavie-demo.mp4",
    tier: 2,
    tags: ["Funnel complet", "22 integrări", "CAPI", "AI chatbot"],
    live: "https://doulalavie.com",
    testimonial: "lavinia",
    complexity: { ui: 8, backend: 8, ai: 7, integrations: 10, realtime: 5 },
  },
  {
    slug: "heartopening",
    name: "heartopening.ro",
    images: ["/projects/heartopening.jpg"],
    video: "/projects/heartopening-demo.mp4",
    tier: 2,
    tags: ["Funnel", "Stripe 3DS", "e-Factura", "SSR"],
    live: "https://heartopening.ro",
    testimonial: "romina",
    complexity: { ui: 8, backend: 8, ai: 2, integrations: 9, realtime: 3 },
  },
  {
    slug: "mariana-pascal",
    name: "Mariana Pascal",
    images: ["/projects/mariana-pascal.jpg"],
    video: "/projects/mariana-pascal-demo.mp4",
    tier: 2,
    tags: ["Funnel bilingv", "Tripwire", "CRM", "Tracking"],
    live: "https://deblocheazati-fluenta.marianapascal.com",
    testimonial: "mariana",
    complexity: { ui: 7, backend: 7, ai: 2, integrations: 8, realtime: 2 },
  },
  {
    slug: "mihaela-cheptea",
    name: "Mihaela Cheptea",
    images: ["/projects/mihaela-cheptea.jpg"],
    video: "/projects/mihaela-cheptea-demo.mp4",
    tier: 3,
    tags: ["Bilingv", "SEO avansat", "Prerender", "Performanță"],
    live: "https://mihaelacheptea.ro",
    testimonial: "mihaela",
    complexity: { ui: 8, backend: 5, ai: 1, integrations: 5, realtime: 2 },
  },
];

/** Projects shown on the public site. Render from this — PROJECTS also holds hidden ones. */
export const VISIBLE_PROJECTS = PROJECTS.filter((p) => !p.hidden);

export const FEATURED_PROJECTS = VISIBLE_PROJECTS.filter((p) => p.featured);

/** Engineering-proof metrics of visible projects (METRICS.project = project name). */
export const VISIBLE_METRICS = METRICS.filter((m) =>
  VISIBLE_PROJECTS.some((p) => p.name === m.project),
);
