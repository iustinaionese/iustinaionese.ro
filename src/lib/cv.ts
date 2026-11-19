/**
 * CV content, Romanian + English, rendered by /cv and /en/cv and printed to the
 * PDFs in public/cv (scripts/cv-pdf.mjs).
 */

export type CvLang = "ro" | "en";

/** A bullet is plain text, or a lead (bold, optionally linked) followed by text. */
export type CvBullet = string | { lead: string; href?: string; text: string };

export interface CvRole {
  title: string;
  org: string;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM", or null while ongoing */
  end: string | null;
  bullets: CvBullet[];
}

export interface CvContent {
  headline: string;
  location: string;
  availability: string;
  summary: string;
  skills: { label: string; items: string }[];
  experience: CvRole[];
  products: CvBullet[];
  education: { degree: string; school: string; start: string; end: string }[];
  certifications: { name: string; year?: string }[];
  languages: string;
  labels: {
    summary: string;
    skills: string;
    experience: string;
    products: string;
    education: string;
    certifications: string;
    languages: string;
    present: string;
    months: string[];
  };
  page: {
    title: string;
    description: string;
    intro: string;
    download: string;
    otherLanguage: string;
    updated: string;
    /** On-screen text size switch (s = the PDF's own size). */
    textSize: { label: string; s: string; m: string; l: string };
  };
}

export const CV_NAME = "Iustin-Flavius Aionese";
export const CV_EMAIL = "aionese.flavius@yahoo.com";
export const CV_PHONE = "+40 751 084 902";
export const CV_PHONE_HREF = "tel:+40751084902";
export const CV_SITE = "iustinaionese.ro";
export const CV_LINKEDIN = "linkedin.com/in/iustinaionese";
export const CV_UPDATED = "2026-11";

/** Published PDFs (public/cv), regenerated with `npm run cv:pdf`. */
export const CV_PDF: Record<CvLang, string> = {
  ro: "/cv/Iustin-Flavius-Aionese-CV-RO.pdf",
  en: "/cv/Iustin-Flavius-Aionese-CV-EN.pdf",
};

export const CV_PATH: Record<CvLang, string> = { ro: "/cv", en: "/en/cv" };

const work = (slug: string) => `https://www.iustinaionese.ro/work/${slug}`;

const en: CvContent = {
  headline: "AI Solutions & Implementation Engineer",
  location: "Constanța, Romania (EU)",
  availability: "Remote, hybrid or relocation · Employment or B2B",
  summary:
    "I help companies turn manual workflows into automations and AI-powered platforms, from the first discovery call to launch. Since August 2025 I have delivered platforms, funnels and automations for 12 clients and built 5 products of my own using AI-assisted development. Before that, my career covered the business side: B2B and high-ticket sales, leading a 14-person sales team, managing a fintech education program, depositary banking operations and IT.",
  skills: [
    {
      label: "AI & automation",
      items:
        "LLM integrations (Claude, Gemini), RAG, AI pipelines and agentic workflows (Claude Code), AI chatbots, workflow and CRM automation (GoHighLevel, Zapier)",
    },
    {
      label: "Platforms",
      items:
        "TypeScript, React, Next.js, Supabase (Postgres, Row-Level Security), Python, .NET/C#, REST APIs, webhooks, OAuth, WebSockets, Stripe, Vercel, Cloudflare, Google Cloud",
    },
    {
      label: "Marketing & data",
      items:
        "GA4, Meta Pixel and Conversions API, Consent Mode v2, e-invoicing (Oblio, e-Factura)",
    },
    {
      label: "Client-facing",
      items:
        "discovery and requirements, solution design, demos and training, stakeholder management, negotiation, project management",
    },
  ],
  experience: [
    {
      title: "AI Solutions & Automation Engineer",
      org: "Freelance, remote",
      start: "2025-08",
      end: null,
      bullets: [
        "Delivered platforms, client-acquisition funnels and automations for 12 clients, from scoping to launch and handover.",
        {
          lead: "Doula LaVie",
          href: work("doula-lavie"),
          text: "complete acquisition system with 32 pages, 4 backend services, 22 integrations, GoHighLevel CRM, server-side Meta Conversions API and an AI chatbot.",
        },
        {
          lead: "heartopening.ro",
          href: work("heartopening"),
          text: "funnel with GA4, Meta Pixel and Consent Mode v2, GoHighLevel, a 5-email sequence, Stripe payments (3DS, Revolut, Klarna) and automatic e-Factura invoicing.",
        },
        {
          lead: "TradeLottery",
          href: work("tradelottery"),
          text: "real-time trading-competition platform with a WebSocket leaderboard, server-side P&L engine, Stripe payments and role-based security; stress-tested with 100 simulated users.",
        },
        {
          lead: "Mariana Pascal (FLUENT4)",
          href: work("mariana-pascal"),
          text: "bilingual funnel (lead magnet and tripwire) with tracking, CRM and automated email sequences, plus webinar and booking pages.",
        },
        {
          lead: "Claudia Buneci",
          text: "full migration to GoHighLevel: contacts, courses, automations, payments and pixel.",
        },
        {
          lead: "Mihaela Cheptea",
          href: work("mihaela-cheptea"),
          text: "bilingual presentation site with 11 pages, about 1,460 translated strings, prerendering for SEO and structured data.",
        },
      ],
    },
    {
      title: "Project Manager",
      org: "Vestinda SRL (fintech), B2B contract",
      start: "2024-08",
      end: "2025-07",
      bullets: [
        "Built and launched a premium financial-education program from concept to market, working with 4+ recognised financial experts.",
        "Ran lead generation and conversion for the program: social media, calls, meetings and weekly reporting.",
      ],
    },
    {
      title: "Sales Team Lead",
      org: "Kiwi Marketing & Education SRL (Edukiwi), B2B contract",
      start: "2023-07",
      end: "2024-08",
      bullets: [
        "Led a team of 14 sales representatives that collected over €800,000 in 13 months.",
        "New sales strategies grew revenue by 20%, and training and coaching raised team conversion by 8%.",
      ],
    },
    {
      title: "High-Ticket Sales Representative",
      org: "Kiwi Marketing & Education SRL (Edukiwi), B2B contract",
      start: "2022-06",
      end: "2023-06",
      bullets: [
        "As a closer, sold over €250,000 in high-ticket education programs from June 2022 to July 2024, including my time as team lead, handling the full cycle up to final negotiation.",
      ],
    },
    {
      title: "Programmer Analyst",
      org: "Colegiul Național „Sfântul Sava”, Bucharest",
      start: "2020-10",
      end: "2022-06",
      bullets: [
        "Ran the school's IT infrastructure and 1,000+ user accounts at 99%+ uptime, including national-exam support.",
      ],
    },
    {
      title: "Trainer & Facilitator",
      org: "Asociația Școala de Valori, B2B contract",
      start: "2020-05",
      end: "2020-11",
      bullets: [
        "Co-delivered trainings with the LEGO® SERIOUS PLAY® method for pupils, students and unemployed people.",
      ],
    },
    {
      title: "IT Course Sales Representative",
      org: "Software Development Academy, B2B contract",
      start: "2019-11",
      end: "2020-03",
      bullets: [
        "Presented and sold IT courses at 25 live events in 9 cities: 700+ attendees and 104 enrolments.",
      ],
    },
    {
      title: "B2B Sales Representative",
      org: "Connect Business Group SRL (Telekom Romania partner), Bucharest",
      start: "2018-11",
      end: "2019-10",
      bullets: [
        "Added 50 new business clients in a year; signed B2B contracts totalling €15,000+ in monthly recurring revenue.",
      ],
    },
    {
      title: "Depositary Services Administrator",
      org: "BRD – Groupe Société Générale, Bucharest",
      start: "2017-07",
      end: "2018-10",
      bullets: [
        "Processed fund operations (subscriptions, redemptions, capital calls), KYC/AML due diligence and risk assessments, working with fund managers, custodians and auditors.",
      ],
    },
    {
      title: "Account Manager",
      org: "Lead Capital Markets, Bucharest",
      start: "2016-10",
      end: "2017-07",
      bullets: [
        "Onboarded and supported retail clients trading forex and CFDs, with training materials and long-term follow-up.",
      ],
    },
    {
      title: "Analyst (Software Testing)",
      org: "IBM Romania, Bucharest",
      start: "2014-12",
      end: "2015-06",
      bullets: [
        "Cut testing time by 15% with automated scripts; found 25+ low- and medium-severity bugs.",
      ],
    },
  ],
  products: [
    {
      lead: "Redacto",
      href: work("redacto"),
      text: "AI social-media marketing SaaS for agencies and content creators, in beta and production-ready: analytics for 4 networks, competitor tracking, AI-written posts in the author's own voice and publishing, all in one place. redacto.ro",
    },
    {
      lead: "Auto AI Video Editor",
      href: work("auto-ai-video-editor"),
      text: "turns raw footage into a finished, captioned video from a single request to Claude Code, replacing hours of manual editing; a Reel costs about $0.30–0.40 in AI services.",
    },
    {
      lead: "Faceless YouTube Automation",
      href: work("faceless-youtube"),
      text: "market research on autopilot: every morning it emails a shortlist of small, fast-growing faceless YouTube channels, replacing hours of manual searching.",
    },
    {
      lead: "Time Tracker",
      href: work("time-tracker"),
      text: "Windows app that automatically shows where your time goes, on the computer and the phone, by app, website and project: no manual timers, and the data never leaves your computer.",
    },
    {
      lead: "DUOI",
      text: "couples app that brings a shared life into one private place: calendar, gallery, journals and milestones, synced in real time. Built solo in 6 months, live on the App Store and Google Play.",
    },
  ],
  education: [
    {
      degree: "B.Eng. Electronics and Telecommunications",
      school: "Politehnica University of Bucharest",
      start: "2010",
      end: "2014",
    },
  ],
  certifications: [
    { name: "English C1, British Council EnglishScore (593/599)", year: "2025" },
    { name: "Application of the MITRE ATT&CK Framework, Cybrary (9 hours)", year: "2025" },
    { name: "Leadership course, Ministry of Youth and Sports" },
  ],
  languages: "Romanian (native) · English (C1, certified) · German (A2)",
  labels: {
    summary: "Summary",
    skills: "Core skills",
    experience: "Experience",
    products: "Own products",
    education: "Education",
    certifications: "Certifications & courses",
    languages: "Languages",
    present: "Present",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  page: {
    title: "CV · AI Solutions & Implementation Engineer",
    description:
      "CV of Iustin-Flavius Aionese, AI Solutions & Implementation Engineer: automations and AI-powered platforms for companies, from discovery to launch.",
    intro: "The same CV as the PDF, always up to date.",
    download: "Download PDF",
    otherLanguage: "Română",
    updated: "Updated November 2026",
    textSize: {
      label: "Text size",
      s: "Small text (as in the PDF)",
      m: "Medium text",
      l: "Large text",
    },
  },
};

const ro: CvContent = {
  headline: "AI Solutions & Implementation Engineer",
  location: "Constanța, România (UE)",
  availability: "Remote, hibrid sau relocare · Angajare sau B2B",
  summary:
    "Ajut firmele să transforme procesele manuale în automatizări și platforme cu AI, de la prima discuție de analiză până la lansare. Din august 2025 am livrat platforme, funnel-uri și automatizări pentru 12 clienți și am construit 5 produse proprii, folosind dezvoltarea asistată de AI. Înainte de asta, cariera mea a acoperit partea de business: vânzări B2B și high-ticket, conducerea unei echipe de vânzări de 14 oameni, managementul unui program educațional pentru o firmă fintech, operațiuni bancare de depozitare și IT.",
  skills: [
    {
      label: "AI și automatizări",
      items:
        "integrări LLM (Claude, Gemini), RAG, pipeline-uri AI și fluxuri agentice (Claude Code), chatboți AI, automatizarea proceselor și a CRM-ului (GoHighLevel, Zapier)",
    },
    {
      label: "Platforme",
      items:
        "TypeScript, React, Next.js, Supabase (Postgres, Row-Level Security), Python, .NET/C#, API-uri REST, webhook-uri, OAuth, WebSockets, Stripe, Vercel, Cloudflare, Google Cloud",
    },
    {
      label: "Marketing și date",
      items:
        "GA4, Meta Pixel și Conversions API, Consent Mode v2, facturare electronică (Oblio, e-Factura)",
    },
    {
      label: "Lucrul cu clienții",
      items:
        "analiza nevoilor și a cerințelor, proiectarea soluției, demo-uri și training, lucrul cu factorii de decizie, negociere, management de proiect",
    },
  ],
  experience: [
    {
      title: "AI Solutions & Automation Engineer",
      org: "Liber profesionist, remote",
      start: "2025-08",
      end: null,
      bullets: [
        "Am livrat platforme, funnel-uri de achiziție clienți și automatizări pentru 12 clienți, de la definirea cerințelor până la lansare și predare.",
        {
          lead: "Doula LaVie",
          href: work("doula-lavie"),
          text: "sistem complet de achiziție clienți cu 32 de pagini, 4 servicii backend, 22 de integrări, CRM GoHighLevel, Meta Conversions API pe server și un chatbot AI.",
        },
        {
          lead: "heartopening.ro",
          href: work("heartopening"),
          text: "funnel cu GA4, Meta Pixel și Consent Mode v2, GoHighLevel, o secvență de 5 emailuri, plăți Stripe (3DS, Revolut, Klarna) și facturare automată prin e-Factura.",
        },
        {
          lead: "TradeLottery",
          href: work("tradelottery"),
          text: "platformă de competiții de trading în timp real, cu clasament prin WebSocket, profit și pierdere calculate pe server, plăți Stripe și securitate pe roluri; testată la încărcare cu 100 de utilizatori simulați.",
        },
        {
          lead: "Mariana Pascal (FLUENT4)",
          href: work("mariana-pascal"),
          text: "funnel bilingv (lead magnet și tripwire) cu tracking, CRM și secvențe automate de email, plus pagini de webinar și de programare.",
        },
        {
          lead: "Claudia Buneci",
          text: "migrare completă în GoHighLevel: contacte, cursuri, automatizări, plăți și pixel.",
        },
        {
          lead: "Mihaela Cheptea",
          href: work("mihaela-cheptea"),
          text: "site de prezentare bilingv cu 11 pagini, circa 1.460 de texte traduse, prerandare pentru SEO și date structurate.",
        },
      ],
    },
    {
      title: "Manager de proiect",
      org: "Vestinda SRL (fintech), contract B2B",
      start: "2024-08",
      end: "2025-07",
      bullets: [
        "Am construit și lansat un program premium de educație financiară, de la concept până la piață, lucrând cu peste 4 experți financiari recunoscuți.",
        "Am condus atragerea și conversia clienților pentru program: social media, apeluri, întâlniri și raportare săptămânală.",
      ],
    },
    {
      title: "Team Leader vânzări",
      org: "Kiwi Marketing & Education SRL (Edukiwi), contract B2B",
      start: "2023-07",
      end: "2024-08",
      bullets: [
        "Am coordonat o echipă de 14 reprezentanți de vânzări care a încasat peste 800.000 € în 13 luni.",
        "Noile strategii de vânzare au crescut veniturile cu 20%, iar training-ul și coaching-ul au urcat conversia echipei cu 8%.",
      ],
    },
    {
      title: "Reprezentant vânzări high-ticket",
      org: "Kiwi Marketing & Education SRL (Edukiwi), contract B2B",
      start: "2022-06",
      end: "2023-06",
      bullets: [
        "În rolul de closer, am vândut programe educaționale high-ticket de peste 250.000 € între iunie 2022 și iulie 2024, inclusiv în perioada de team leader, gestionând tot ciclul de vânzare până la negocierea finală.",
      ],
    },
    {
      title: "Analist programator",
      org: "Colegiul Național „Sfântul Sava”, București",
      start: "2020-10",
      end: "2022-06",
      bullets: [
        "Am administrat infrastructura IT a colegiului și peste 1.000 de conturi de utilizator, cu disponibilitate de peste 99%, inclusiv suportul pentru examenele naționale.",
      ],
    },
    {
      title: "Trainer și facilitator",
      org: "Asociația Școala de Valori, contract B2B",
      start: "2020-05",
      end: "2020-11",
      bullets: [
        "Am susținut training-uri cu metoda LEGO® SERIOUS PLAY® pentru elevi, studenți și șomeri.",
      ],
    },
    {
      title: "Reprezentant vânzări cursuri IT",
      org: "Software Development Academy, contract B2B",
      start: "2019-11",
      end: "2020-03",
      bullets: [
        "Am prezentat și vândut cursuri IT la 25 de evenimente live în 9 orașe: peste 700 de participanți și 104 înscrieri.",
      ],
    },
    {
      title: "Reprezentant vânzări B2B",
      org: "Connect Business Group SRL (partener Telekom Romania), București",
      start: "2018-11",
      end: "2019-10",
      bullets: [
        "Am adus 50 de clienți business noi într-un an și am semnat contracte B2B care însumează peste 15.000 € venit recurent lunar.",
      ],
    },
    {
      title: "Administrator Produse și Servicii Depozitare",
      org: "BRD – Groupe Société Générale, București",
      start: "2017-07",
      end: "2018-10",
      bullets: [
        "Am procesat operațiuni pentru fonduri de investiții (subscrieri, răscumpărări, apeluri de capital), analize due diligence și KYC/AML și evaluări de risc, lucrând cu administratori de fonduri, custozi și auditori.",
      ],
    },
    {
      title: "Account Manager",
      org: "Lead Capital Markets, București",
      start: "2016-10",
      end: "2017-07",
      bullets: [
        "Am inițiat și susținut clienți retail pe piețele forex și CFD, cu materiale de instruire și urmărire pe termen lung.",
      ],
    },
    {
      title: "Analist (testare software)",
      org: "IBM România, București",
      start: "2014-12",
      end: "2015-06",
      bullets: [
        "Am redus cu 15% timpul de testare prin scripturi automatizate și am găsit peste 25 de bug-uri de severitate mică și medie.",
      ],
    },
  ],
  products: [
    {
      lead: "Redacto",
      href: work("redacto"),
      text: "SaaS de marketing pe social media cu AI, pentru agenții și creatori de conținut, în beta și gata de producție: analiză pe 4 rețele, monitorizarea competitorilor, postări scrise de AI în vocea autorului și publicare, totul într-un singur loc. redacto.ro",
    },
    {
      lead: "Auto AI Video Editor",
      href: work("auto-ai-video-editor"),
      text: "transformă filmarea brută într-un video gata de publicat, cu subtitrări, dintr-o singură cerere către Claude Code, în locul orelor de montaj manual; un Reel costă circa 0,30–0,40 $ în servicii AI.",
    },
    {
      lead: "Faceless YouTube Automation",
      href: work("faceless-youtube"),
      text: "cercetare de piață pe pilot automat: în fiecare dimineață trimite pe email o listă scurtă de canale YouTube faceless mici și în creștere rapidă, în locul orelor de căutare manuală.",
    },
    {
      lead: "Time Tracker",
      href: work("time-tracker"),
      text: "aplicație Windows care arată automat unde se duce timpul, pe calculator și pe telefon, pe aplicații, site-uri și proiecte: fără cronometre pornite manual, iar datele nu părăsesc calculatorul.",
    },
    {
      lead: "DUOI",
      text: "aplicație pentru cupluri care adună viața comună într-un singur loc privat: calendar, galerie, jurnale și momente importante, sincronizate în timp real. Construită singur în 6 luni, live în App Store și Google Play.",
    },
  ],
  education: [
    {
      degree: "Licență în Electronică și Telecomunicații",
      school: "Universitatea Politehnica din București",
      start: "2010",
      end: "2014",
    },
  ],
  certifications: [
    { name: "Engleză C1, British Council EnglishScore (593/599)", year: "2025" },
    { name: "Application of the MITRE ATT&CK Framework, Cybrary (9 ore)", year: "2025" },
    { name: "Curs de leadership, Ministerul Tineretului și Sportului" },
  ],
  languages: "Română (nativ) · Engleză (C1, certificat) · Germană (A2)",
  labels: {
    summary: "Profil",
    skills: "Competențe",
    experience: "Experiență",
    products: "Produse proprii",
    education: "Educație",
    certifications: "Certificări și cursuri",
    languages: "Limbi",
    present: "prezent",
    months: ["ian.", "feb.", "mar.", "apr.", "mai", "iun.", "iul.", "aug.", "sept.", "oct.", "nov.", "dec."],
  },
  page: {
    title: "CV · AI Solutions & Implementation Engineer",
    description:
      "CV-ul lui Iustin-Flavius Aionese, AI Solutions & Implementation Engineer: automatizări și platforme cu AI pentru firme, de la analiză la lansare.",
    intro: "Același CV ca în PDF, mereu actualizat.",
    download: "Descarcă PDF",
    otherLanguage: "English",
    updated: "Actualizat în noiembrie 2026",
    textSize: {
      label: "Mărime text",
      s: "Text mic (ca în PDF)",
      m: "Text mediu",
      l: "Text mare",
    },
  },
};

export const CV: Record<CvLang, CvContent> = { ro, en };

/** "2025-08" → "Aug 2025" / "aug. 2025"; null → "Present" / "prezent". */
export function cvMonth(value: string | null, lang: CvLang): string {
  const c = CV[lang];
  if (!value) return c.labels.present;
  const [year, month] = value.split("-");
  return `${c.labels.months[Number(month) - 1]} ${year}`;
}
