/**
 * Bilingual content (RO primary, EN toggle). `en` is typed as `typeof ro`,
 * so the compiler enforces full key parity between the two languages.
 */

const ro = {
  meta: {
    title: "Iustin Aionese — Sisteme digitale complete, construite cap-coadă",
    description:
      "Funnel-uri, platforme web, plăți, automatizări, AI. Un singur inginer senior care îți înțelege afacerea și construiește sistemul care o crește — fără costurile unei agenții.",
  },

  /** Per-page <title> / description (the server renders RO). */
  seo: {
    work: {
      title: "Proiecte",
      description:
        "Sisteme construite cap-coadă: SaaS cu AI, platformă fintech, aplicație desktop pentru Windows, automatizări cu Claude Code, funnel-uri și site-uri pentru clienți.",
    },
    about: {
      title: "Despre",
      description:
        "Inginer de produs independent, cu latură de business: înțeleg ce are nevoie afacerea ta și construiesc sistemul care o servește, cap-coadă.",
    },
    contact: {
      title: "Contact",
      description:
        "Scrie-mi pe WhatsApp sau pe email, ori programează un apel gratuit de 30 de minute. Primul răspuns vine de obicei în aceeași zi.",
    },
  },

  notFound: {
    eyebrow: "Eroare 404",
    heading: "Pagina asta nu există.",
    body: "Poate a fost mutată sau ștearsă. Vezi proiectele mele sau scrie-mi direct.",
    home: "Înapoi acasă",
  },

  nav: {
    work: "Sisteme",
    about: "Despre",
    contact: "Contact",
    menu: "Meniu",
    close: "Închide",
  },

  cta: {
    letsTalk: "Hai să vorbim",
    seeWork: "Vezi sistemele",
    bookCall: "Programează un apel gratuit de 30 min",
    whatsapp: "WhatsApp",
    readStory: "Citește povestea",
  },

  langToggle: {
    label: "Limbă",
    ro: "RO",
    en: "EN",
  },

  hero: {
    eyebrow: "Inginer de produs, independent",
    headlineA: "Sistemul digital complet",
    headlineB: "pe care rulează afacerea ta",
    headlineAccent: "construit cap-coadă",
    sub: "Funnel-uri, platforme web, plăți, automatizări, AI. Un singur inginer senior care îți înțelege afacerea și construiește sistemul care o crește — fără costurile unei agenții.",
    scroll: "Derulează",
    funnelTopLead: "De la",
    funnelTop: "Doar vizitatori",
    funnelBottomLead: "La",
    funnelBottom: "Clienți plătitori",
  },

  valueStory: {
    eyebrow: "Povestea",
    lead: "Acum câțiva ani, o agenție mi-a cerut",
    amount: "45.000 €",
    leadEnd: "— doar pentru un MVP.",
    today: "Azi construiesc singur aplicații ca acelea.",
    sub: "Nu ai nevoie de 45.000 € ca să ai una. Livrez sisteme la nivel de agenție, accesibil și direct — vorbești cu omul care gândește arhitectura și o și construiește, nu cu un lanț de intermediari.",
  },

  positioning: {
    acquisition: "Sisteme de achiziție clienți",
    platforms: "Platforme web & SaaS",
    mobile: "Aplicații mobile",
    payments: "Plăți & checkout",
    automation: "Automatizări de marketing",
    ai: "Funcții AI",
    integrations: "Integrări",
  },

  capabilities: {
    eyebrow: "Ce construiesc",
    heading: "Tot flow-ul, de la click la client plătitor",
    sub: "Construiesc infrastructura digitală pe care o afacere se bazează ca să transforme un vizitator într-un client plătitor.",
    items: {
      funnels: {
        title: "Sisteme de achiziție clienți",
        desc: "Landing & sales pages, tracking, CRM, secvențe email/SMS, plăți, facturare — tot drumul de la click pe reclamă la client plătitor.",
      },
      platforms: {
        title: "Platforme web & SaaS",
        desc: "Aplicații custom cu dashboard-uri, date în timp real, logică multi-tenant și AI.",
      },
      mobile: {
        title: "Aplicații mobile",
        desc: "Aplicații iOS & Android, cu sincronizare real-time și funcții AI.",
      },
      payments: {
        title: "Plăți & checkout",
        desc: "Stripe, 3D Secure/SCA, facturare automată și e-Factura (conformitate RO).",
      },
      automation: {
        title: "Automatizări de marketing",
        desc: "Workflow-uri GoHighLevel, email & SMS automate, platforme de cursuri/membership pe domeniul tău.",
      },
      ai: {
        title: "Funcții AI & chatboți",
        desc: "Insight-uri AI, asistenți conversaționali ancorați într-o bază de cunoștințe, generare de conținut și imagini.",
      },
      integrations: {
        title: "Integrări",
        desc: "Conectez CRM, plăți, analytics, API-uri sociale și facturare ca totul să „vorbească”.",
      },
      analytics: {
        title: "Analytics, tracking & GDPR",
        desc: "GA4, Meta Pixel/CAPI, consent mode, atribuire UTM — făcute corect.",
      },
    },
  },

  work: {
    eyebrow: "Sisteme în producție",
    heading: "Lucrări reprezentative",
    sub: "De la automatizări și site-uri de prezentare, până la SaaS complet — un spectru care arată că pot livra totul de la A la Z.",
    viewAll: "Vezi toate sistemele",
    viewCase: "Vezi proiectul",
    live: "Live",
  },

  caseStudy: {
    overview: "Prezentare generală",
    problem: "Problema de business",
    architecture: "Arhitectură",
    features: "Funcționalități principale",
    integrations: "Integrări",
    engineering: "Sub capotă",
    stack: "Tech stack",
    complexity: "Complexitate",
    outcome: "Rezultat",
    viewLive: "Vezi live",
    playDemo: "Pornește demo",
    part: "Partea",
    testimonial: "Ce spune clientul",
  },

  projects: {
    redacto: {
      category: "AI SaaS · Marketing pe social media",
      desc: "Platformă SaaS de marketing pe social media, cu AI — ~108k linii, 90 de tabele, 13 integrări, 3 OAuth oficiale. În producție, cu clienți reali.",
    },
    tradelottery: {
      category: "Fintech · Real-time",
      desc: "Platformă de competiții de trading: plăți Stripe, leaderboard și prețuri live pe WebSocket, motor P&L server-side, securitate pe roluri.",
    },
    duoi: {
      category: "Aplicație mobilă · Live în store-uri",
      desc: "Aplicație completă pentru cupluri, construită solo în 6 luni și lansată în App Store & Google Play. Sincronizare real-time, imagini AI.",
    },
    "time-tracker": {
      category: "Aplicație desktop · Windows",
      desc: "Aplicație nativă pentru Windows (.NET 8): 4 procese care pornesc odată cu sistemul și rulează în fundal, captură la nivel de sistem de operare, extensie de browser și dashboard local. Fără cloud.",
    },
    "faceless-youtube": {
      category: "Automatizare AI · Claude Code Routines",
      desc: "Găsește zilnic, singură, canale YouTube faceless mici și în creștere: YouTube Data API, o pâlnie de filtre pe 3 benzi, verificare vizuală cu Claude și un raport pe email în fiecare dimineață.",
    },
    "auto-ai-video-editor": {
      category: "Automatizare AI · Montaj video",
      desc: "Montează singur video-urile: tăieturi pe cuvânt, zoom, subtitrări, B-roll, efecte în cadru, muzică și verificare automată. Reels, prezentări de ecran și video-uri lungi, condus de Claude Code.",
    },
    "doula-lavie": {
      category: "Sistem de achiziție · Funnel complet",
      desc: "32 de pagini (doar 13 vizibile — aisbergul), 4 servicii backend, 22 de integrări, CRM GoHighLevel, Facebook CAPI server-side, chatbot AI.",
    },
    heartopening: {
      category: "Sistem de achiziție clienți",
      desc: "Funnel + GA4/Meta Pixel + Consent Mode v2 + GoHighLevel + secvență de 5 emailuri + Stripe (3DS, Revolut, Klarna) + facturare Oblio cu e-Factura.",
    },
    "mariana-pascal": {
      category: "Sistem de funnel · Bilingv",
      desc: "Funnel cu LP magnet + tripwire, tracking complet, CRM și secvențe automate, bilingv.",
    },
    "mihaela-cheptea": {
      category: "Sistem de prezentare · SEO avansat",
      desc: "11 pagini, ~1.460 de stringuri traduse, carusel/galerie/audio custom, prerender pentru Google, WebP, structured data.",
    },
  },

  proof: {
    eyebrow: "Dovadă de inginerie",
    heading: "Cifre reale, fiecare legată de proiectul care a câștigat-o",
    sub: "Fiecare cifră aparține proiectului concret din care provine.",
    metrics: {
      lines: {
        prefix: "~",
        unit: "",
        label: "linii de cod scrise pentru o singură platformă",
      },
      realtime: {
        headline: "Timp real",
        label: "clasament și prețuri care se actualizează instant, fără refresh",
      },
      mobile: {
        unit: " luni",
        label: "de la idee la lansare în App Store și Google Play, de unul singur",
      },
      integrations: {
        unit: "",
        label: "unelte externe conectate să lucreze ca un singur sistem",
      },
      oauth: {
        unit: "",
        label: "conturi oficiale conectate: Meta, TikTok și YouTube",
      },
      payments: {
        headline: "Plăți + facturi",
        label: "plăți online securizate și facturare automată",
      },
      jobs: {
        prefix: "~",
        unit: "",
        label: "procese automate care rulează singure în fundal",
      },
    },
  },

  testimonials: {
    eyebrow: "Ce spun clienții",
    heading: "Nu despre cod. Despre cum e să lucrezi cu mine.",
    note: "Mesaje reale de la clienți reali (WhatsApp).",
    playLabel: "Pornește testimonialul video",
    items: {
      mihaela: {
        quote:
          "O colaborare excelentă. M-a surprins cât de eficient și de repede am construit împreună, în timp record, un rezultat care mă reprezintă — mai ales după ce îmi amânasem site-ul doi ani. Comunicarea a fost mereu ușoară și promptă, a venit cu sugestii și am testat variante până la cea mai bună. Iustin lucrează profesionist și eficient, îl recomand cu toată încrederea.",
        name: "Mihaela Cheptea",
        role: "Antreprenor · mihaelacheptea.ro",
      },
      lavinia: {
        quote:
          "Îl recomand din toată inima — răbdare, profesionalism, entuziasm. A văzut potențialul în mine și în munca mea și a avut energia să mă ducă mai departe, după ani de încercări. Aici prezint Doula LaVie, sistemul pe care mi l-a construit.",
        name: "Lavinia",
        role: "Fondatoare · Doula LaVie",
      },
      mariana: {
        name: "Mariana Pascal",
        role: "FLUENT4",
      },
      romina: {
        name: "Romina",
        role: "heartopening.ro",
      },
      claudia: {
        name: "Claudia Buneci",
        role: "Health coach",
      },
    },
  },

  process: {
    eyebrow: "Cum lucrăm",
    heading: "Direct cu mine, de la prima discuție la lansare",
    sub: "Un singur om responsabil — fără juniori de gestionat, fără intermediari. Comunicare directă, pe tot parcursul.",
    steps: {
      discovery: {
        title: "Apel de discovery",
        desc: "Înțeleg afacerea ta și ce vrei să obții. Gratuit, fără obligații.",
      },
      proposal: {
        title: "Propunere & scope fix",
        desc: "Stabilim împreună exact ce construim și prețul, agreate din start.",
      },
      design: {
        title: "Design",
        desc: "Arhitectura și interfața, gândite în jurul rezultatului tău de business.",
      },
      build: {
        title: "Construcție",
        desc: "Construiesc sistemul, cu update-uri reale și disponibilitate pe parcurs.",
      },
      launch: {
        title: "Lansare",
        desc: "Punem totul în producție — funnel, platformă, plăți, automatizări.",
      },
      support: {
        title: "Suport",
        desc: "Rămân disponibil după lansare. Dacă scope-ul se schimbă, agreem înainte.",
      },
    },
  },

  pricing: {
    eyebrow: "Investiție",
    heading: "Proiectele pornesc de la 1.500 €",
    sub: "Prețul exact vine într-o propunere, după un apel de discovery gratuit. Mereu.",
    from: "de la",
    tiers: {
      automation: {
        title: "Automatizări & integrări",
        price: "2.000 €",
        desc: "Workflow-uri GoHighLevel, email/SMS, setup cursuri/membership, integrări.",
      },
      presence: {
        title: "Sisteme de prezentare",
        price: "1.500 €",
        desc: "Site bilingv + SEO avansat + performanță.",
      },
      acquisition: {
        title: "Sisteme de achiziție / funnel",
        price: "~5.000 €",
        desc: "Funnel + tracking + CRM + plăți + secvențe email + facturare.",
      },
      platforms: {
        title: "Platforme, SaaS & mobile",
        price: "~15.000 €",
        desc: "Real-time, dashboard-uri, multi-tenant, AI, aplicații mobile.",
      },
    },
    anchor:
      "Agențiile cer peste 45.000 € doar pentru un MVP. Diferența nu e în calitate, ci în structură: fără vânzători și project manageri, plătești doar munca ce contează.",
    forTitle: "Pentru cine este",
    forList: [
      "Afaceri mici și medii care vor un sistem real, nu doar un site",
      "Antreprenori și branduri personale (coaches, terapeuți, traineri, creatori)",
      "Startup-uri la început care au nevoie de produs fără buget de agenție",
    ],
    notTitle: "Pentru cine NU este",
    notList: [
      "Cauți „cel mai ieftin site, cât mai repede”",
      "Vrei doar o pagină, fără să te intereseze rezultatul de business",
      "Nu ești dispus să discuți deschis ce vrea de fapt afacerea ta",
    ],
  },

  aboutPreview: {
    eyebrow: "Despre Iustin",
    heading: "Omul din spatele sistemului",
    body: "Am avut mereu o latură tehnică — din liceu — dar n-am vrut să fiu doar cineva care scrie cod. Ani la rând am construit și partea de business și comunicare, iar acum le combin: înțeleg ce are nevoie afacerea ta și pot construi sistemul care livrează, cap-coadă.",
    body2:
      "Ce aud cel mai des de la clienți nu e despre cod. E cât de ușor e să lucrezi cu mine: comunicare promptă, disponibilitate reală, soluții la timp și ghidare pe tot parcursul.",
    cta: "Citește povestea completă",
  },

  about: {
    leadIn:
      "Acum câțiva ani am avut o idee de aplicație și am cerut unei firme mari de software din România un deviz. Mi-au cerut ",
    amount: "45.000 €",
    leadOut:
      " — doar pentru un MVP, o versiune semi-funcțională. Nu aveam banii. Ideea a murit acolo.",
    today: "Azi construiesc singur aplicații ca acelea.",
    body: [
      "Am avut mereu o latură tehnică — încă din liceu — dar n-am vrut să fiu doar cineva care scrie cod. Ani la rând am construit și partea de business și comunicare, iar acum le combin: înțeleg de ce are nevoie afacerea ta și pot construi sistemul care livrează, cap-coadă.",
      "Am livrat sisteme reale în producție: Redacto, un SaaS de marketing pe social media cu AI; TradeLottery, o platformă fintech real-time; și sisteme complete de achiziție clienți pentru afaceri mici și antreprenori — funnel-uri, CRM (GoHighLevel), email & SMS automate, platforme de cursuri, plăți online și facturare conformă.",
      "Ce aud cel mai des de la clienți nu e despre cod. E cât de ușor e să lucrezi cu mine: comunicare promptă, disponibilitate reală, soluții oferite la timp și ghidare pe tot parcursul. Vreau un singur lucru de la fiecare proiect — să fie un succes, iar clientul să fie cu adevărat mulțumit.",
    ],
    /** Inserted after body[0] only while the DUOI project is visible (see ProjectMeta.hidden). */
    duoi: "Prima dovadă a fost DUOI — o aplicație mobilă completă pentru cupluri, cu toate uneltele într-un singur loc: calendar comun, galerie privată, momente importante, sincronizare real-time, imagini AI. Am construit-o solo în 6 luni și am lansat-o în App Store și Google Play. O firmă de consultanță ar fi cerut peste 100.000 €.",
  },

  legal: {
    updated: "Ultima actualizare: iunie 2026",
    operatorTitle: "Operatorul de date",
    fields: {
      cui: "CUI",
      reg: "Nr. Reg. Com.",
      founded: "Înființată",
      office: "Sediu social",
      email: "Email",
    },
    privacy: {
      title: "Politică de confidențialitate",
      intro:
        "Această politică explică ce date personale prelucrăm prin acest site și care sunt drepturile tale, conform Regulamentului (UE) 2016/679 (GDPR).",
      sections: [
        {
          h: "Ce date prelucrăm",
          p: [
            "Acesta este un site de prezentare. Nu colectăm date personale prin formulare. Dacă ne contactezi prin WhatsApp, email sau Calendly, prelucrăm doar datele pe care ni le transmiți tu (nume, date de contact, conținutul mesajului).",
            "Site-ul reține doar limba aleasă (RO/EN), într-un cookie funcțional și în memoria locală a browserului (localStorage). Nu folosim cookie-uri de marketing sau de analiză, așa că nu e nevoie de un banner de consimțământ.",
          ],
        },
        {
          h: "Scopuri și temei legal",
          p: [
            "Prelucrăm datele pentru a răspunde solicitărilor tale și pentru demersuri precontractuale (art. 6(1)(b) GDPR) și pe baza interesului legitim de a ține legătura cu potențialii clienți (art. 6(1)(f) GDPR).",
          ],
        },
        {
          h: "Furnizori și terți",
          p: [
            "Site-ul este găzduit de Vercel Inc., care poate prelucra date tehnice (ex. adrese IP, loguri de acces) pentru funcționare și securitate. Când folosești butoanele de WhatsApp sau Calendly, ești redirecționat către serviciile respective, guvernate de propriile politici de confidențialitate.",
            "Unii dintre acești furnizori (ex. Vercel) pot stoca sau prelucra date pe servere din afara Spațiului Economic European. Astfel de transferuri sunt acoperite de garanții adecvate, precum Clauzele Contractuale Standard ale Comisiei Europene.",
          ],
        },
        {
          h: "Durata stocării",
          p: [
            "Păstrăm datele de contact doar atât cât este necesar pentru a răspunde și pentru o eventuală colaborare, apoi le ștergem sau le anonimizăm.",
          ],
        },
        {
          h: "Drepturile tale",
          p: [
            "Ai dreptul de acces, rectificare, ștergere, restricționare, opoziție și portabilitate a datelor. Le poți exercita la adresa de email de mai sus.",
            "Ai, de asemenea, dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).",
          ],
        },
        {
          h: "Modificări",
          p: [
            "Putem actualiza această politică. Versiunea curentă este cea publicată pe această pagină.",
          ],
        },
      ],
    },
    terms: {
      title: "Termeni și condiții",
      intro: "Acești termeni reglementează utilizarea acestui site.",
      sections: [
        {
          h: "Despre acest site",
          p: [
            "Acest site prezintă activitatea și serviciile DUOI SRL. Are caracter informativ și nu constituie o ofertă contractuală.",
          ],
        },
        {
          h: "Servicii și prețuri",
          p: [
            "Descrierile serviciilor și prețurile afișate („pornind de la…”) sunt orientative. Orice colaborare este guvernată de o ofertă și un contract individual, agreate separat.",
          ],
        },
        {
          h: "Proprietate intelectuală",
          p: [
            "Conținutul, textele, design-ul și codul acestui site aparțin DUOI SRL și nu pot fi reproduse fără acord scris.",
          ],
        },
        {
          h: "Limitarea răspunderii",
          p: [
            "Site-ul este oferit „ca atare”. Nu răspundem pentru indisponibilități temporare sau pentru conținutul site-urilor externe către care facem trimitere.",
          ],
        },
        {
          h: "Legea aplicabilă",
          p: [
            "Acești termeni sunt guvernați de legea română. Eventualele litigii se soluționează de instanțele competente din România.",
          ],
        },
      ],
    },
  },

  finalCta: {
    eyebrow: "Pasul următor",
    heading: "Hai să construim sistemul pe care va rula afacerea ta.",
    sub: "Spune-mi despre afacerea ta și ce vrei să construiești — primul răspuns vine de obicei în aceeași zi.",
    primary: "Hai să vorbim",
    secondary: "Programează un apel gratuit",
  },

  footer: {
    tagline: "Sisteme digitale complete, construite cap-coadă.",
    legalName: "Iustin-Flavius Aionese",
    rights: "Toate drepturile rezervate.",
    privacy: "Politică de confidențialitate",
    terms: "Termeni",
    builtNote: "Acest site este, el însuși, un studiu de caz.",
  },

  diagram: {
    eyebrow: "USP-ul",
    heading: "Un singur flow, gândit și construit de aceeași persoană",
    sub: "Înțeleg business & marketing ȘI pot construi sistemul care le servește. De aici, tot flow-ul:",
    nodes: {
      funnel: { title: "Funnel", desc: "captează clientul" },
      platform: { title: "Platformă", desc: "îl servește" },
      payments: { title: "Plăți", desc: "încasează" },
      automation: { title: "Automatizare", desc: "rulează totul" },
    },
  },
};

const en: typeof ro = {
  meta: {
    title: "Iustin Aionese — Complete digital systems, built end to end",
    description:
      "Funnels, web platforms, payments, automations, AI. One senior engineer who understands your business and builds the system that grows it — without the agency overhead.",
  },

  seo: {
    work: {
      title: "Projects",
      description:
        "Systems built end to end: an AI SaaS, a fintech platform, a Windows desktop app, Claude Code automations, funnels and client websites.",
    },
    about: {
      title: "About",
      description:
        "Independent product engineer with a business side: I understand what your business needs and build the system that serves it, end to end.",
    },
    contact: {
      title: "Contact",
      description:
        "Message me on WhatsApp or by email, or book a free 30-minute call. The first reply usually comes the same day.",
    },
  },

  notFound: {
    eyebrow: "Error 404",
    heading: "This page doesn't exist.",
    body: "It may have been moved or deleted. See my projects or message me directly.",
    home: "Back home",
  },

  nav: {
    work: "Work",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
  },

  cta: {
    letsTalk: "Let's talk",
    seeWork: "See the work",
    bookCall: "Book a free 30-min call",
    whatsapp: "WhatsApp",
    readStory: "Read the story",
  },

  langToggle: {
    label: "Language",
    ro: "RO",
    en: "EN",
  },

  hero: {
    eyebrow: "Independent product engineer",
    headlineA: "The complete digital system",
    headlineB: "your business runs on",
    headlineAccent: "built end to end",
    sub: "Funnels, web platforms, payments, automations, AI. One senior engineer who understands your business and builds the system that grows it — without the agency overhead.",
    scroll: "Scroll",
    funnelTopLead: "From",
    funnelTop: "Just visitors",
    funnelBottomLead: "To",
    funnelBottom: "Paying clients",
  },

  valueStory: {
    eyebrow: "The story",
    lead: "A few years ago, an agency quoted me",
    amount: "€45,000",
    leadEnd: "— just for an MVP.",
    today: "Today I build apps like that myself.",
    sub: "You don't need €45,000 to get one. I deliver agency-level systems accessibly and directly — you work with the person who designs the architecture and builds it, not a chain of middlemen.",
  },

  positioning: {
    acquisition: "Client-acquisition systems",
    platforms: "Web platforms & SaaS",
    mobile: "Mobile apps",
    payments: "Payments & checkout",
    automation: "Marketing automation",
    ai: "AI features",
    integrations: "Integrations",
  },

  capabilities: {
    eyebrow: "What I build",
    heading: "The whole flow, from click to paying client",
    sub: "I build the digital infrastructure a business runs on to turn a visitor into a paying client.",
    items: {
      funnels: {
        title: "Client-acquisition systems",
        desc: "Landing & sales pages, tracking, CRM, email/SMS sequences, payments, invoicing — the full path from ad click to paying client.",
      },
      platforms: {
        title: "Web platforms & SaaS",
        desc: "Custom apps with dashboards, real-time data, multi-tenant logic and AI.",
      },
      mobile: {
        title: "Mobile apps",
        desc: "iOS & Android apps with real-time sync and AI features.",
      },
      payments: {
        title: "Payments & checkout",
        desc: "Stripe, 3D Secure/SCA, automated invoicing and e-Factura (RO compliance).",
      },
      automation: {
        title: "Marketing automation",
        desc: "GoHighLevel workflows, automated email & SMS, course/membership platforms on your domain.",
      },
      ai: {
        title: "AI features & chatbots",
        desc: "AI insights, conversational assistants grounded in a knowledge base, content and image generation.",
      },
      integrations: {
        title: "Integrations",
        desc: "Connecting CRM, payments, analytics, social APIs and invoicing so everything talks.",
      },
      analytics: {
        title: "Analytics, tracking & GDPR",
        desc: "GA4, Meta Pixel/CAPI, consent mode, UTM attribution — done right.",
      },
    },
  },

  work: {
    eyebrow: "Systems in production",
    heading: "Representative work",
    sub: "From automations and presence sites up to full SaaS — a spectrum that proves I can deliver everything from A to Z.",
    viewAll: "See all the work",
    viewCase: "View project",
    live: "Live",
  },

  caseStudy: {
    overview: "System overview",
    problem: "The business problem",
    architecture: "Architecture",
    features: "Core features",
    integrations: "Integrations",
    engineering: "Under the hood",
    stack: "Tech stack",
    complexity: "Complexity",
    outcome: "Outcome",
    viewLive: "View live",
    playDemo: "Play demo",
    part: "Part",
    testimonial: "What the client says",
  },

  projects: {
    redacto: {
      category: "AI SaaS · Social-media marketing",
      desc: "AI-powered social-media marketing SaaS — ~108k lines, 90 tables, 13 integrations, 3 official OAuth. In production, with real clients.",
    },
    tradelottery: {
      category: "Fintech · Real-time",
      desc: "Trading-competition platform: Stripe payments, live WebSocket leaderboard & prices, server-side P&L engine, role-based security.",
    },
    duoi: {
      category: "Mobile app · Live in stores",
      desc: "A complete app for couples, built solo in 6 months and shipped to the App Store & Google Play. Real-time sync, AI images.",
    },
    "time-tracker": {
      category: "Desktop app · Windows",
      desc: "Native Windows app (.NET 8): 4 processes that start with the system and run in the background, OS-level capture, a browser extension and a local dashboard. No cloud.",
    },
    "faceless-youtube": {
      category: "AI automation · Claude Code Routines",
      desc: "Finds small, fast-growing faceless YouTube channels on its own every day: YouTube Data API, a 3-band filter funnel, visual checks with Claude and an email brief every morning.",
    },
    "auto-ai-video-editor": {
      category: "AI automation · Video editing",
      desc: "Edits videos on its own: word-level cuts, zooms, captions, B-roll, in-frame effects, music and automatic QA. Reels, screen demos and long videos, driven by Claude Code.",
    },
    "doula-lavie": {
      category: "Acquisition system · Complete funnel",
      desc: "32 pages (only 13 visible — the iceberg), 4 backend services, 22 integrations, GoHighLevel CRM, server-side Facebook CAPI, AI chatbot.",
    },
    heartopening: {
      category: "Client-acquisition system",
      desc: "Funnel + GA4/Meta Pixel + Consent Mode v2 + GoHighLevel + 5-email sequence + Stripe (3DS, Revolut, Klarna) + Oblio invoicing with e-Factura.",
    },
    "mariana-pascal": {
      category: "Funnel system · Bilingual",
      desc: "Funnel with LP magnet + tripwire, full tracking, CRM and automated sequences, bilingual.",
    },
    "mihaela-cheptea": {
      category: "Presence system · Advanced SEO",
      desc: "11 pages, ~1,460 translated strings, custom carousel/gallery/audio, prerender for Google, WebP, structured data.",
    },
  },

  proof: {
    eyebrow: "Engineering proof",
    heading: "Real numbers, each tied to the project that earned it",
    sub: "Every number belongs to the specific project it came from.",
    metrics: {
      lines: {
        prefix: "~",
        unit: "",
        label: "lines of code written for a single platform",
      },
      realtime: {
        headline: "Real time",
        label: "a leaderboard and prices that update instantly, no refresh",
      },
      mobile: {
        unit: " months",
        label: "from idea to launch on the App Store & Google Play, solo",
      },
      integrations: {
        unit: "",
        label: "external tools connected to work as one system",
      },
      oauth: {
        unit: "",
        label: "official accounts connected: Meta, TikTok and YouTube",
      },
      payments: {
        headline: "Payments + invoices",
        label: "secure online payments and automated invoicing",
      },
      jobs: {
        prefix: "~",
        unit: "",
        label: "automated processes running on their own in the background",
      },
    },
  },

  testimonials: {
    eyebrow: "What clients say",
    heading: "Not about code. About what it's like to work with me.",
    note: "Real messages from real clients (WhatsApp).",
    playLabel: "Play video testimonial",
    items: {
      mihaela: {
        quote:
          "An excellent collaboration. I was surprised how efficiently and how fast we built it together, in record time — a result that represents me, especially after postponing my site for two years. Communication was always easy and prompt, he came with suggestions and we tested variants until the best one. Iustin works professionally and efficiently — I recommend him with full confidence.",
        name: "Mihaela Cheptea",
        role: "Entrepreneur · mihaelacheptea.ro",
      },
      lavinia: {
        quote:
          "I recommend him wholeheartedly — patience, professionalism, enthusiasm. He saw the potential in me and my work and had the energy to move me forward, after years of trying. Here I'm presenting Doula LaVie, the system he built for me.",
        name: "Lavinia",
        role: "Founder · Doula LaVie",
      },
      mariana: {
        name: "Mariana Pascal",
        role: "FLUENT4",
      },
      romina: {
        name: "Romina",
        role: "heartopening.ro",
      },
      claudia: {
        name: "Claudia Buneci",
        role: "Health coach",
      },
    },
  },

  process: {
    eyebrow: "How we work",
    heading: "Directly with me, from first call to launch",
    sub: "One accountable person — no juniors to manage, no middlemen. Direct communication, throughout.",
    steps: {
      discovery: {
        title: "Discovery call",
        desc: "I understand your business and what you want to achieve. Free, no obligation.",
      },
      proposal: {
        title: "Proposal & fixed scope",
        desc: "We agree exactly what we're building and the price, up front.",
      },
      design: {
        title: "Design",
        desc: "Architecture and interface, designed around your business outcome.",
      },
      build: {
        title: "Build",
        desc: "I build the system, with real updates and availability throughout.",
      },
      launch: {
        title: "Launch",
        desc: "We ship everything to production — funnel, platform, payments, automation.",
      },
      support: {
        title: "Support",
        desc: "I stay available after launch. If scope changes, we agree before any work.",
      },
    },
  },

  pricing: {
    eyebrow: "Investment",
    heading: "Projects start from €1,500",
    sub: "The exact price comes in a proposal, after a free discovery call. Always.",
    from: "from",
    tiers: {
      automation: {
        title: "Automations & integrations",
        price: "€2,000",
        desc: "GoHighLevel workflows, email/SMS, course/membership setup, integrations.",
      },
      presence: {
        title: "Business presence systems",
        price: "€1,500",
        desc: "Bilingual site + advanced SEO + performance.",
      },
      acquisition: {
        title: "Client-acquisition / funnels",
        price: "~€5,000",
        desc: "Funnel + tracking + CRM + payments + email sequences + invoicing.",
      },
      platforms: {
        title: "Platforms, SaaS & mobile",
        price: "~€15,000",
        desc: "Real-time, dashboards, multi-tenant, AI, mobile apps.",
      },
    },
    anchor:
      "Agencies quote over €45,000 just for an MVP. The difference isn't quality, it's structure: no salespeople or project managers, you pay only for the work that matters.",
    forTitle: "Who this is for",
    forList: [
      "Small and medium businesses that want a real system, not just a site",
      "Entrepreneurs and personal brands (coaches, therapists, trainers, creators)",
      "Early-stage startups that need a product without an agency budget",
    ],
    notTitle: "Who this is NOT for",
    notList: [
      "You want the “cheapest site, as fast as possible”",
      "You just want a page and don't care about the business outcome",
      "You're not willing to talk openly about what your business actually needs",
    ],
  },

  aboutPreview: {
    eyebrow: "About Iustin",
    heading: "The person behind the system",
    body: "I've always had a technical side — since high school — but I never wanted to be only someone who writes code. For years I built the business and communication side too, and now I combine the two: I understand what your business needs, and I can build the system that delivers it, end to end.",
    body2:
      "What I hear most from clients isn't about code. It's how easy it is to work with me: prompt communication, real availability, solutions on time, and guidance through the whole process.",
    cta: "Read the full story",
  },

  about: {
    leadIn:
      "A few years ago I had an app idea and asked a large Romanian software company for a quote. They asked for ",
    amount: "€45,000",
    leadOut:
      " — just for an MVP, a semi-functional version. I didn't have the money. The idea died there.",
    today: "Today I build apps like that myself.",
    body: [
      "I've always had a technical side — since high school — but I never wanted to be only someone who writes code. For years I built the business and communication side too, and now I combine the two: I understand what your business needs, and I can build the system that delivers it, end to end.",
      "I've delivered real systems in production: Redacto, an AI-powered social-media marketing SaaS; TradeLottery, a real-time fintech platform; and complete client-acquisition systems for small businesses and entrepreneurs — funnels, CRM (GoHighLevel), automated email & SMS, course platforms, online payments and compliant invoicing.",
      "What I hear most from clients isn't about code. It's how easy it is to work with me: prompt communication, real availability, solutions on time, and guidance through the whole process. I want one thing from every project — for it to be a success, and for the client to be genuinely happy.",
    ],
    duoi: "My first proof was DUOI — a complete mobile app for couples, with every tool in one place: shared calendar, private gallery, milestones, real-time sync, AI images. I built it solo in 6 months and shipped it to both the App Store and Google Play. A consulting firm would have charged over €100,000.",
  },

  legal: {
    updated: "Last updated: June 2026",
    operatorTitle: "Data controller",
    fields: {
      cui: "VAT/Reg. ID",
      reg: "Trade Register No.",
      founded: "Founded",
      office: "Registered office",
      email: "Email",
    },
    privacy: {
      title: "Privacy Policy",
      intro:
        "This policy explains what personal data we process through this site and what your rights are, under Regulation (EU) 2016/679 (GDPR).",
      sections: [
        {
          h: "What data we process",
          p: [
            "This is a presentation site. We do not collect personal data through forms. If you contact us via WhatsApp, email or Calendly, we only process the data you send us (name, contact details, message content).",
            "The site only remembers your chosen language (RO/EN), in a functional cookie and in your browser's local storage. We don't use marketing or analytics cookies, so no consent banner is needed.",
          ],
        },
        {
          h: "Purposes and legal basis",
          p: [
            "We process data to respond to your requests and for pre-contractual steps (Art. 6(1)(b) GDPR) and on the basis of our legitimate interest in communicating with potential clients (Art. 6(1)(f) GDPR).",
          ],
        },
        {
          h: "Providers and third parties",
          p: [
            "The site is hosted by Vercel Inc., which may process technical data (e.g. IP addresses, access logs) for operation and security. When you use the WhatsApp or Calendly buttons, you are redirected to those services, governed by their own privacy policies.",
            "Some of these providers (e.g. Vercel) may store or process data on servers outside the European Economic Area. Such transfers are covered by appropriate safeguards, such as the European Commission's Standard Contractual Clauses.",
          ],
        },
        {
          h: "Retention",
          p: [
            "We keep contact data only as long as needed to respond and for a possible collaboration, then delete or anonymise it.",
          ],
        },
        {
          h: "Your rights",
          p: [
            "You have the right of access, rectification, erasure, restriction, objection and data portability. You can exercise them at the email address above.",
            "You also have the right to lodge a complaint with the Romanian Data Protection Authority (ANSPDCP).",
          ],
        },
        {
          h: "Changes",
          p: [
            "We may update this policy. The current version is the one published on this page.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms & Conditions",
      intro: "These terms govern the use of this site.",
      sections: [
        {
          h: "About this site",
          p: [
            "This site presents the work and services of DUOI SRL. It is informational and does not constitute a contractual offer.",
          ],
        },
        {
          h: "Services and pricing",
          p: [
            "Service descriptions and the prices shown (“starting from…”) are indicative. Any collaboration is governed by a separate proposal and individual contract.",
          ],
        },
        {
          h: "Intellectual property",
          p: [
            "The content, text, design and code of this site belong to DUOI SRL and may not be reproduced without written consent.",
          ],
        },
        {
          h: "Limitation of liability",
          p: [
            "The site is provided “as is”. We are not liable for temporary unavailability or for the content of external sites we link to.",
          ],
        },
        {
          h: "Governing law",
          p: [
            "These terms are governed by Romanian law. Any disputes are settled by the competent courts in Romania.",
          ],
        },
      ],
    },
  },

  finalCta: {
    eyebrow: "Next step",
    heading: "Let's build the system your business will run on.",
    sub: "Tell me about your business and what you want to build — first reply usually same day.",
    primary: "Let's talk",
    secondary: "Book a free call",
  },

  footer: {
    tagline: "Complete digital systems, built end to end.",
    legalName: "Iustin-Flavius Aionese",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms",
    builtNote: "This site is, itself, a case study.",
  },

  diagram: {
    eyebrow: "The USP",
    heading: "One flow, designed and built by the same person",
    sub: "I understand business & marketing AND can engineer the system that serves it. From there, the whole flow:",
    nodes: {
      funnel: { title: "Funnel", desc: "captures the client" },
      platform: { title: "Platform", desc: "serves them" },
      payments: { title: "Payments", desc: "collects" },
      automation: { title: "Automation", desc: "runs it all" },
    },
  },
};

export const dictionaries = { ro, en };

export type Lang = keyof typeof dictionaries;
export type Dictionary = typeof ro;

export const DEFAULT_LANG: Lang = "ro";
export const LANGS: Lang[] = ["ro", "en"];
