/**
 * Per-project case-study content (bilingual). Sourced from the project brief.
 * Keyed by the same slugs as PROJECTS in site.ts. Each project has `ro` + `en`
 * of the same `CaseStudyContent` shape (compiler-checked).
 */

export interface CSStack {
  label: string;
  items: string[];
}

export interface CSEng {
  h: string;
  p: string;
}

export interface CaseStudyContent {
  summary: string;
  overview: string;
  problem: string;
  architecture: string[];
  features: string[];
  integrations: string[];
  engineering: CSEng[];
  stack: CSStack[];
  outcome: string;
  /** Titles for ProjectMeta.videos, in the same order (optional). */
  videoTitles?: string[];
}

type Bilingual = { ro: CaseStudyContent; en: CaseStudyContent };

export const caseStudies: Record<string, Bilingual> = {
  redacto: {
    ro: {
      summary:
        "Platformă SaaS de marketing pe social media, cu AI — în producție, cu clienți reali.",
      overview:
        "Redacto e o platformă SaaS completă pentru marketing pe social media, construită în jurul AI: planifici și publici conținut, primești insight-uri, analizezi competiția și conversezi cu un asistent ancorat în datele contului. ~108.000 de linii de cod, ~90 de tabele în bază, mod multi-tenant pentru agenții, bilingv.",
      problem:
        "Echipele de marketing și agențiile jonglează zeci de unelte separate pentru planificare, publicare, analiză și raportare. Redacto le unește într-o singură platformă, cu AI care scoate insight-uri acționabile din date.",
      architecture: [
        "Frontend SPA cu dashboard-uri și editor de conținut",
        "Backend cu ~90 de tabele și logică multi-tenant (agenție → clienți)",
        "~90 de joburi async / pipeline-uri în fundal pentru sincronizare, publicare programată și analiză",
        "Motor de insight-uri AI + chatbot ancorat în baza de cunoștințe a contului",
        "Row-Level Security în Postgres pentru izolarea datelor între tenanți",
      ],
      features: [
        "Planificare și publicare programată",
        "Insight-uri AI și recomandări",
        "Competitor intelligence",
        "Chatbot AI ancorat în date",
        "Generare de conținut și imagini",
        "Mod multi-tenant pentru agenții",
        "Bilingv RO/EN",
      ],
      integrations: [
        "Meta (Facebook/Instagram) — OAuth oficial + App Review",
        "TikTok — OAuth oficial + App Review",
        "YouTube — OAuth oficial + App Review",
        "13 integrări externe în total",
      ],
      engineering: [
        {
          h: "3 integrări OAuth oficiale",
          p: "Meta, TikTok și YouTube, fiecare trecută prin procesul de App Review al platformei — cu refresh automat de token, ca sesiunile să nu pice.",
        },
        {
          h: "Multi-tenant cu RLS",
          p: "Izolarea datelor între agenție și clienții ei se face la nivel de bază de date, prin Postgres Row-Level Security, nu doar în aplicație.",
        },
        {
          h: "~90 de joburi async",
          p: "Sincronizarea conturilor, publicarea programată și analiza rulează în pipeline-uri de fundal, ca interfața să rămână rapidă.",
        },
      ],
      stack: [
        { label: "Frontend", items: ["React", "TypeScript", "Tailwind"] },
        { label: "Backend", items: ["Postgres (RLS)", "joburi async"] },
        { label: "AI", items: ["insight-uri LLM", "chatbot"] },
        { label: "Integrări", items: ["Meta", "TikTok", "YouTube", "+10"] },
      ],
      outcome:
        "Dovada că un singur inginer poate livra o platformă SaaS la scară de agenție — în producție, cu clienți reali.",
      videoTitles: ["Reel de prezentare (82 s)", "Turul complet al aplicației (9:10)"],
    },
    en: {
      summary:
        "AI-powered social-media marketing SaaS — in production, with real clients.",
      overview:
        "Redacto is a complete SaaS platform for social-media marketing, built around AI: schedule and publish content, get insights, analyse competitors and chat with an assistant grounded in your account data. ~108,000 lines of code, ~90 database tables, multi-tenant agency mode, bilingual.",
      problem:
        "Marketing teams and agencies juggle dozens of separate tools for planning, publishing, analysis and reporting. Redacto unifies them into one platform, with AI that turns data into actionable insights.",
      architecture: [
        "SPA frontend with dashboards and a content editor",
        "Backend with ~90 tables and multi-tenant logic (agency → clients)",
        "~90 async jobs / background pipelines for sync, scheduled publishing and analytics",
        "AI insights engine + chatbot grounded in the account knowledge base",
        "Postgres Row-Level Security to isolate data between tenants",
      ],
      features: [
        "Scheduling and scheduled publishing",
        "AI insights and recommendations",
        "Competitor intelligence",
        "AI chatbot grounded in data",
        "Content and image generation",
        "Multi-tenant agency mode",
        "Bilingual RO/EN",
      ],
      integrations: [
        "Meta (Facebook/Instagram) — official OAuth + App Review",
        "TikTok — official OAuth + App Review",
        "YouTube — official OAuth + App Review",
        "13 external integrations in total",
      ],
      engineering: [
        {
          h: "3 official OAuth integrations",
          p: "Meta, TikTok and YouTube, each through the platform's App Review — with automatic token refresh so sessions never break.",
        },
        {
          h: "Multi-tenant with RLS",
          p: "Data isolation between an agency and its clients happens at the database level via Postgres Row-Level Security, not just in the app.",
        },
        {
          h: "~90 async jobs",
          p: "Account sync, scheduled publishing and analytics run in background pipelines so the UI stays fast.",
        },
      ],
      stack: [
        { label: "Frontend", items: ["React", "TypeScript", "Tailwind"] },
        { label: "Backend", items: ["Postgres (RLS)", "async jobs"] },
        { label: "AI", items: ["LLM insights", "chatbot"] },
        { label: "Integrations", items: ["Meta", "TikTok", "YouTube", "+10"] },
      ],
      outcome:
        "Proof that a single engineer can ship an agency-scale SaaS platform — in production, with real clients.",
      videoTitles: ["Promo Reel (82 s)", "Full app walkthrough (9:10)"],
    },
  },

  tradelottery: {
    ro: {
      summary: "Platformă fintech de competiții de trading, în timp real.",
      overview:
        "TradeLottery e o platformă de competiții de trading: participanții concurează pe un clasament live, cu prețuri și P&L actualizate în timp real. Plăți cu Stripe, securitate pe roluri, criptarea IBAN-urilor.",
      problem:
        "Competițiile de trading au nevoie de date de piață fiabile, un clasament corect în timp real și plăți sigure — fără să poată fi păcălite din client. Platforma le rezolvă pe toate, server-side.",
      architecture: [
        "4 surse de date financiare cu retry/fallback automat",
        "Leaderboard și prețuri live prin WebSocket",
        "Motor de P&L calculat server-side (nu se poate falsifica din client)",
        "Securitate pe roluri + criptarea IBAN-urilor",
        "Automatizări programate pentru runde și decontări",
      ],
      features: [
        "Clasament live în timp real",
        "Prețuri live",
        "Plăți și premii prin Stripe",
        "Roluri și permisiuni",
        "Automatizări programate",
      ],
      integrations: [
        "Stripe (plăți)",
        "4 surse de date financiare (cu fallback)",
        "Conexiuni WebSocket real-time",
      ],
      engineering: [
        {
          h: "P&L server-side",
          p: "Profitul/pierderea fiecărui participant se calculează pe server, din surse de piață verificate — clientul nu poate influența rezultatul.",
        },
        {
          h: "4 surse cu retry/fallback",
          p: "Dacă o sursă de date pică, sistemul comută automat pe următoarea, ca prețurile și clasamentul să nu se oprească niciodată.",
        },
        {
          h: "Real-time pe WebSocket",
          p: "Clasamentul și prețurile se propagă instant către toți participanții, fără refresh.",
        },
        {
          h: "Securitate, stress-testat",
          p: "Acces pe roluri și criptarea datelor sensibile (IBAN). Stress-testat cu 100 de utilizatori simulați.",
        },
      ],
      stack: [
        { label: "Frontend", items: ["React", "TypeScript", "WebSocket"] },
        {
          label: "Backend",
          items: ["motor P&L server-side", "automatizări programate"],
        },
        { label: "Plăți", items: ["Stripe"] },
        { label: "Date", items: ["4 surse financiare + fallback"] },
      ],
      outcome:
        "Un sistem fintech real-time, rezistent la căderi de surse și la tentative de fraudă — stress-testat cu 100 de utilizatori simulați.",
    },
    en: {
      summary: "Real-time fintech trading-competition platform.",
      overview:
        "TradeLottery is a trading-competition platform: participants compete on a live leaderboard, with prices and P&L updated in real time. Stripe payments, role-based security, encrypted IBANs.",
      problem:
        "Trading competitions need reliable market data, a fair real-time leaderboard and secure payments — none of it spoofable from the client. The platform solves all of it server-side.",
      architecture: [
        "4 financial data sources with automatic retry/fallback",
        "Live leaderboard and prices over WebSocket",
        "Server-side P&L engine (can't be faked from the client)",
        "Role-based security + IBAN encryption",
        "Scheduled automation for rounds and settlements",
      ],
      features: [
        "Live real-time leaderboard",
        "Live prices",
        "Payments and payouts via Stripe",
        "Roles and permissions",
        "Scheduled automation",
      ],
      integrations: [
        "Stripe (payments)",
        "4 financial data sources (with fallback)",
        "Real-time WebSocket connections",
      ],
      engineering: [
        {
          h: "Server-side P&L",
          p: "Each participant's profit/loss is computed on the server from verified market sources — the client can't influence the result.",
        },
        {
          h: "4 sources with retry/fallback",
          p: "If one data source goes down, the system switches to the next automatically, so prices and the leaderboard never stop.",
        },
        {
          h: "Real-time over WebSocket",
          p: "The leaderboard and prices propagate instantly to all participants, no refresh.",
        },
        {
          h: "Security, stress-tested",
          p: "Role-based access and encryption of sensitive data (IBAN). Stress-tested with 100 simulated users.",
        },
      ],
      stack: [
        { label: "Frontend", items: ["React", "TypeScript", "WebSocket"] },
        {
          label: "Backend",
          items: ["server-side P&L engine", "scheduled automation"],
        },
        { label: "Payments", items: ["Stripe"] },
        { label: "Data", items: ["4 financial sources + fallback"] },
      ],
      outcome:
        "A real-time fintech system resilient to source outages and to tampering — stress-tested with 100 simulated users.",
    },
  },

  duoi: {
    ro: {
      summary:
        "Aplicație mobilă completă pentru cupluri — live în App Store & Google Play.",
      overview:
        "DUOI adună într-o singură aplicație toate uneltele de care are nevoie un cuplu: calendar comun, galerie privată, jurnale, momente importante, sincronizare în timp real și imagini AI. Construită solo în 6 luni, lansată pe ambele platforme.",
      problem:
        "Cuplurile își împrăștie viața comună prin zeci de aplicații separate. DUOI le pune pe toate într-un singur loc, privat și sincronizat în timp real.",
      architecture: [
        "Aplicație mobilă nativă pentru iOS și Android",
        "Sincronizare în timp real între cei doi parteneri",
        "Galerie privată și jurnale partajate",
        "Generare de imagini AI pentru cuplu",
        "Bilingv RO/EN",
      ],
      features: [
        "Calendar comun",
        "Galerie privată",
        "Jurnale partajate",
        "Mood tracking",
        "Momente importante",
        "„Love Sync” în timp real",
        "Playlist-uri colaborative",
        "Imagini AI de cuplu",
      ],
      integrations: [
        "App Store (publicat)",
        "Google Play (publicat)",
        "Servicii AI pentru generare de imagini",
      ],
      engineering: [
        {
          h: "0 → producție, solo, în 6 luni",
          p: "De la idee la două magazine de aplicații, construită de o singură persoană în șase luni.",
        },
        {
          h: "Sincronizare în timp real",
          p: "Tot ce face un partener apare instant la celălalt — „Love Sync”, galerie, calendar.",
        },
        {
          h: "Imagini AI integrate",
          p: "Generare de imagini de cuplu direct în aplicație.",
        },
      ],
      stack: [
        { label: "Mobile", items: ["iOS", "Android"] },
        { label: "Real-time", items: ["sincronizare live"] },
        { label: "AI", items: ["generare imagini"] },
        { label: "Limbi", items: ["RO", "EN"] },
      ],
      outcome:
        "Dovada de livrare 0→producție, solo, pe mobil. O firmă de consultanță ar fi cerut peste 100.000 € pentru așa ceva.",
    },
    en: {
      summary:
        "Complete mobile app for couples — live in the App Store & Google Play.",
      overview:
        "DUOI brings every tool a couple needs into one app: shared calendar, private gallery, journals, milestones, real-time sync and AI images. Built solo in 6 months and shipped to both stores.",
      problem:
        "Couples scatter their shared life across dozens of separate apps. DUOI puts it all in one private, real-time-synced place.",
      architecture: [
        "Native mobile app for iOS and Android",
        "Real-time sync between the two partners",
        "Private gallery and shared journals",
        "AI couple-image generation",
        "Bilingual RO/EN",
      ],
      features: [
        "Shared calendar",
        "Private gallery",
        "Shared journals",
        "Mood tracking",
        "Milestones",
        "Real-time “Love Sync”",
        "Collaborative playlists",
        "AI couple images",
      ],
      integrations: [
        "App Store (published)",
        "Google Play (published)",
        "AI image-generation services",
      ],
      engineering: [
        {
          h: "0 → production, solo, in 6 months",
          p: "From idea to two app stores, built by a single person in six months.",
        },
        {
          h: "Real-time sync",
          p: "Everything one partner does shows instantly for the other — “Love Sync”, gallery, calendar.",
        },
        {
          h: "Built-in AI images",
          p: "Couple-image generation right inside the app.",
        },
      ],
      stack: [
        { label: "Mobile", items: ["iOS", "Android"] },
        { label: "Real-time", items: ["live sync"] },
        { label: "AI", items: ["image generation"] },
        { label: "Languages", items: ["RO", "EN"] },
      ],
      outcome:
        "Proof of 0→production solo delivery on mobile. A consulting firm would have charged over €100,000 for this.",
    },
  },

  "time-tracker": {
    ro: {
      summary:
        "Aplicație desktop nativă pentru Windows care urmărește automat timpul petrecut pe calculator și pe telefon: productiv, neutru sau neproductiv, pe aplicații, site-uri și proiecte. Totul rulează local, fără cloud.",
      overview:
        "Time Tracker e un sistem de 4 procese native .NET 8 care pornesc odată cu Windows și rulează în fundal: un watcher captează la nivel de sistem de operare aplicația și fereastra din prim-plan, un daemon clasifică activitatea și o salvează într-o bază SQLite locală, iar un supervisor din tray le ține în viață. O extensie de browser adaugă site-urile și profilurile, iar un dashboard local adună totul, inclusiv datele de pe telefon. ~20.000 de linii de cod, 7 proiecte .NET, peste 200 de teste automate.",
      problem:
        "Când lucrezi pe mai multe proiecte deodată, e greu de știut cât timp a mers efectiv pe fiecare și cât s-a pierdut pe aplicații neproductive, iar cronometrele pornite manual se uită. O aplicație web nu poate vedea ce faci pe calculator: pentru măsurare automată pe aplicații, ferestre și site-uri e nevoie de software care rulează în Windows, la nivel de sistem de operare.",
      architecture: [
        "Watcher nativ: hook-uri Win32 (SetWinEventHook) pe fereastra din prim-plan, identitatea procesului și detecția inactivității, cu verificare de siguranță la fiecare secundă",
        "Daemon ASP.NET Core accesibil doar local (127.0.0.1): motor de reguli, atribuire pe proiecte, API de rapoarte și dashboard-ul",
        "Bază de date SQLite locală, cu verificare de integritate la pornire și backup zilnic",
        "Supervisor în tray care pornește și supraveghează procesele, cu repornire automată și backoff exponențial",
        "Pornire odată cu Windows, printr-un task programat cu drepturi de administrator, fără prompt UAC",
        "Extensie de browser MV3 (Chrome și Edge) pentru site-uri, tab-uri cu sunet, canale YouTube și profiluri",
        "Dashboard React (Vite + TypeScript) servit local, fără cloud",
      ],
      features: [
        "Total pe dispozitive: calculator + telefon într-un singur loc",
        "Productiv / neutru / neproductiv, după reguli alese de tine",
        "Vederi pe zi, săptămână și lună",
        "Heatmap pe ore și timeline-ul zilei",
        "Timp pe proiecte, atribuit automat",
        "Ședințe Zoom, Teams și Meet: timp în apel vs. în alte ferestre",
        "Totaluri pe aplicații, site-uri și profiluri de browser",
        "Import telefon: capturi Screen Time + un prompt pentru orice AI",
        "Analytics pe până la 26 de săptămâni, desktop vs. telefon",
        "Focus Score și orele lucrate de Claude Code în fundal",
        "Mod Focus din tray, care închide tab-urile neproductive",
        "Reclasificare retroactivă: o regulă nouă se aplică pe tot istoricul",
      ],
      integrations: [
        "Windows (Win32 API)",
        "Task Scheduler",
        "Chrome + Edge (extensie MV3)",
        "Claude Code (hooks)",
        "Zoom · Teams · Google Meet",
        "iPhone Screen Time (import prin AI)",
      ],
      engineering: [
        {
          h: "Captură la nivel de Windows",
          p: "Hook-uri Win32 pe schimbarea ferestrei din prim-plan, identitatea procesului luată din executabil și detecția inactivității (AFK), inclusiv după sleep. Rulează cu drepturi de administrator, ca să vadă și ferestrele aplicațiilor pornite ca administrator.",
        },
        {
          h: "Procese care se repară singure",
          p: "Un supervisor pornește și verifică permanent celelalte procese și le repornește cu backoff exponențial, fără să oprească un proces care încă lucrează. Totul pornește odată cu Windows, iar dacă supervisorul cade, procesele lui se închid curat odată cu el.",
        },
        {
          h: "Date care nu se pierd",
          p: "Cozi de retry în fiecare componentă, un singur punct de scriere protejat la salturile de ceas, verificare de integritate la pornire și backup zilnic al bazei. Dacă un proces cade, evenimentele așteaptă și se scriu când revine.",
        },
        {
          h: "100% local, fără cloud",
          p: "Daemonul ascultă doar pe 127.0.0.1, iar extensia are voie să vorbească doar cu el. Datele stau într-o bază SQLite pe calculator, iar în pauză nu se înregistrează nimic: nici titluri, nici adrese.",
        },
      ],
      stack: [
        {
          label: "Desktop",
          items: [".NET 8 / C#", "Win32 API", "WinForms (tray)", "Task Scheduler"],
        },
        {
          label: "Backend local",
          items: ["ASP.NET Core", "SQLite (WAL)", "TOML", "xUnit"],
        },
        { label: "Interfață", items: ["React", "TypeScript", "Vite"] },
        { label: "Browser", items: ["Extensie MV3", "Chrome", "Edge"] },
      ],
      outcome:
        "Dovada că pot construi și software desktop pentru Windows, nu doar aplicații web: procese native care pornesc odată cu sistemul, rulează permanent în fundal, se repornesc singure și își păstrează datele intacte. O folosesc ca să știu exact unde se duce timpul meu.",
      videoTitles: ["Total și Desktop", "Telefon și Analytics", "3 funcții-cheie"],
    },
    en: {
      summary:
        "A native Windows desktop app that automatically tracks time spent on the computer and the phone: productive, neutral or unproductive, by app, website and project. Everything runs locally, no cloud.",
      overview:
        "Time Tracker is a system of 4 native .NET 8 processes that start with Windows and run in the background: a watcher captures the foreground app and window at the operating-system level, a daemon classifies the activity and stores it in a local SQLite database, and a tray supervisor keeps them alive. A browser extension adds websites and profiles, and a local dashboard brings it all together, including phone data. ~20,000 lines of code, 7 .NET projects, 200+ automated tests.",
      problem:
        "When you work on several projects at once, it's hard to know how much time actually went into each one and how much was lost to unproductive apps — and manually started timers get forgotten. A web app can't see what you do on your computer: automatic tracking by app, window and website needs software that runs inside Windows, at the operating-system level.",
      architecture: [
        "Native watcher: Win32 hooks (SetWinEventHook) on the foreground window, process identity and idle detection, with a safety check every second",
        "ASP.NET Core daemon reachable only locally (127.0.0.1): rules engine, project attribution, report API and the dashboard",
        "Local SQLite database, with an integrity check on startup and a daily backup",
        "Tray supervisor that starts and watches the processes, with automatic restarts and exponential backoff",
        "Starts with Windows through a scheduled task with administrator rights, with no UAC prompt",
        "MV3 browser extension (Chrome and Edge) for websites, audible tabs, YouTube channels and profiles",
        "React dashboard (Vite + TypeScript) served locally, no cloud",
      ],
      features: [
        "Device totals: computer + phone in one place",
        "Productive / neutral / unproductive, with rules you choose",
        "Day, week and month views",
        "Hourly heatmap and the day's timeline",
        "Time per project, attributed automatically",
        "Zoom, Teams and Meet calls: time in the call vs. other windows",
        "Totals by app, website and browser profile",
        "Phone import: Screen Time screenshots + a prompt for any AI",
        "Analytics over up to 26 weeks, desktop vs. phone",
        "Focus Score and the hours Claude Code worked in the background",
        "Focus mode from the tray that closes unproductive tabs",
        "Retroactive reclassification: a new rule applies to the whole history",
      ],
      integrations: [
        "Windows (Win32 API)",
        "Task Scheduler",
        "Chrome + Edge (MV3 extension)",
        "Claude Code (hooks)",
        "Zoom · Teams · Google Meet",
        "iPhone Screen Time (AI-assisted import)",
      ],
      engineering: [
        {
          h: "OS-level capture",
          p: "Win32 hooks on foreground-window changes, process identity taken from the executable and idle (AFK) detection, including after sleep. It runs with administrator rights so it can also see the windows of apps started as administrator.",
        },
        {
          h: "Self-healing processes",
          p: "A supervisor starts and constantly checks the other processes and restarts them with exponential backoff, without stopping a process that is still working. Everything starts with Windows, and if the supervisor goes down, its processes shut down cleanly with it.",
        },
        {
          h: "Data that doesn't get lost",
          p: "Retry queues in every component, a single write path protected against clock jumps, an integrity check on startup and a daily database backup. If a process goes down, events wait and get written when it comes back.",
        },
        {
          h: "100% local, no cloud",
          p: "The daemon listens only on 127.0.0.1 and the extension may only talk to it. Data lives in a SQLite database on the computer, and while paused nothing is recorded — no titles, no URLs.",
        },
      ],
      stack: [
        {
          label: "Desktop",
          items: [".NET 8 / C#", "Win32 API", "WinForms (tray)", "Task Scheduler"],
        },
        {
          label: "Local backend",
          items: ["ASP.NET Core", "SQLite (WAL)", "TOML", "xUnit"],
        },
        { label: "Interface", items: ["React", "TypeScript", "Vite"] },
        { label: "Browser", items: ["MV3 extension", "Chrome", "Edge"] },
      ],
      outcome:
        "Proof that I can build Windows desktop software, not just web apps: native processes that start with the system, run permanently in the background, restart themselves and keep their data intact. I use it to know exactly where my time goes.",
      videoTitles: ["Total & Desktop", "Phone & Analytics", "3 key features"],
    },
  },

  "faceless-youtube": {
    ro: {
      summary:
        "Automatizare care caută singură, în fiecare zi, canale YouTube faceless mici și în creștere rapidă, verifică dacă sunt cu adevărat faceless și trimite dimineața un raport pe email. Rulează în cloud prin Claude Code Routines, chiar și cu calculatorul închis.",
      overview:
        "În fiecare dimineață, o rutină Claude Code rulează în cloud: caută prin YouTube Data API clipurile cu cele mai multe vizualizări din ultimele 30 de zile, pe 6 nișe rotite zilnic plus un slot de descoperire, apoi trece fiecare canal găsit printr-o pâlnie de filtre. Rezultatul ajunge pe email, ca un brief cu trei benzi de calificare. Separat, un pas local verifică vizual, cu Claude, dacă un canal e cu adevărat faceless. Peste 4.300 de linii de Python, cu rulări în 78 de zile între iunie și octombrie 2026.",
      problem:
        "Canalele YouTube faceless (fără prezentator, doar voce și imagini) pot crește foarte repede, iar formatul lor poate fi preluat de alți creatori. Doar că găsirea celor mici, noi și în creștere e o muncă manuală de ore: căutări, verificat abonați, vechime, vizualizări și dacă apare sau nu o față. Automatizarea face asta zilnic și livrează doar canalele care merită analizate.",
      architecture: [
        "Rutină Claude Code în cloud, zilnică: rulează căutarea și salvează rezultatele în GitHub, fără să fie nevoie de calculatorul pornit",
        "Căutare prin YouTube Data API v3: 12 nișe, 6 pe zi prin rotație, plus un slot de descoperire pe tipare de titlu",
        "Pâlnie de filtre pentru fiecare canal: abonați, format long-form, durată, limbă, ultimul clip, vizualizări pe 30 de zile, frecvență, vechime",
        "Trei benzi de calificare (strict, marja 1, marja 2), cu deduplicare: un canal apare o singură dată în brief",
        "Brief zilnic pe email, plus un CSV unificat și o listă de urmărire cu scor",
        "Verificare faceless pe calculatorul local: montaje din 18 cadre per clip, clasificate vizual de Claude (faceless / nu / incert)",
        "Rotație automată între mai multe chei API când se epuizează cota, cu reîncercări la erori",
      ],
      features: [
        "Rulează singură, în fiecare dimineață",
        "Merge și cu calculatorul închis",
        "Fără API plătit: cota gratuită YouTube + abonamentul Claude",
        "Separă Shorts de clipurile long-form",
        "Calificare pe 3 benzi, de la strict la larg",
        "Verificare vizuală faceless cu Claude",
        "Raport pe email, cu cel mai bun clip al fiecărui canal",
        "Listă de urmărire cu scor pentru canalele promițătoare",
      ],
      integrations: [
        "Claude Code Routines",
        "YouTube Data API v3",
        "Claude (vision)",
        "GitHub",
        "Email (Resend)",
        "Google Sheets (opțional)",
      ],
      engineering: [
        {
          h: "Shorts vs. long-form",
          p: "API-ul YouTube amestecă Shorts cu clipurile lungi. Un canal trece doar dacă are cel puțin 10 clipuri de minimum 10 minute, iar vizualizările pe 30 de zile se calculează doar din clipurile lungi, ca cifrele să nu fie umflate de Shorts.",
        },
        {
          h: "Cloud + local, fiecare unde merge",
          p: "Căutarea rulează în cloud prin Claude Code Routines. Verificarea vizuală rulează pe calculatorul local, pentru că în cloud descărcarea cadrelor e blocată frecvent; un pas local îmbină apoi rezultatele zilnice în GitHub.",
        },
        {
          h: "Fără API plătit",
          p: "Folosește cota zilnică gratuită a YouTube, cu rotație automată între chei când una se epuizează, iar verificarea vizuală e făcută de Claude prin abonament, fără o cheie API separată.",
        },
        {
          h: "O pâlnie care se poate măsura",
          p: "Fiecare brief arată și de ce au fost respinse canalele. Pe 11 octombrie 2026, de exemplu: 2.697 de canale analizate, 509 cu destule clipuri lungi, 36 care trec vizualizările și frecvența, 15 calificate strict.",
        },
      ],
      stack: [
        { label: "Automatizare", items: ["Claude Code Routines", "Python", "PowerShell"] },
        { label: "Date", items: ["YouTube Data API v3", "JSON", "CSV"] },
        { label: "AI", items: ["Claude (vision)"] },
        { label: "Livrare", items: ["Email (Resend)", "GitHub", "Google Sheets"] },
      ],
      outcome:
        "Ce făceam manual în ore vine acum singur pe email, în fiecare dimineață: în aproximativ 3,5 luni, 344 de canale găsite în cele trei benzi, dintre care 158 calificate strict, și 145 confirmate faceless de verificarea vizuală. Același tip de rutină se poate construi pentru orice cercetare de piață repetitivă.",
    },
    en: {
      summary:
        "An automation that searches every day, on its own, for small, fast-growing faceless YouTube channels, checks whether they are truly faceless and sends an email report every morning. It runs in the cloud on Claude Code Routines, even with the computer switched off.",
      overview:
        "Every morning a Claude Code routine runs in the cloud: it searches the YouTube Data API for the most-viewed videos of the last 30 days across 6 niches rotated daily plus a discovery slot, then puts every channel it finds through a filter funnel. The result arrives by email as a brief with three qualification bands. Separately, a local step uses Claude to visually check whether a channel is really faceless. Over 4,300 lines of Python, with runs on 78 days between June and October 2026.",
      problem:
        "Faceless YouTube channels (no presenter, just voice and visuals) can grow very fast, and their format can be adopted by other creators. But finding the small, new and growing ones is hours of manual work: searching, checking subscribers, channel age, views and whether a face ever appears. The automation does it daily and delivers only the channels worth a closer look.",
      architecture: [
        "Daily Claude Code routine in the cloud: runs the search and saves the results to GitHub, no computer needed",
        "YouTube Data API v3 search: 12 niches, 6 per day in rotation, plus a discovery slot based on title patterns",
        "A filter funnel for every channel: subscribers, long-form format, duration, language, latest upload, 30-day views, frequency, age",
        "Three qualification bands (strict, margin 1, margin 2), deduplicated: a channel shows up in the brief only once",
        "Daily email brief, plus a unified CSV and a scored watchlist",
        "Faceless check on the local computer: 18-frame montages per video, classified visually by Claude (faceless / not / unsure)",
        "Automatic rotation across several API keys when the quota runs out, with retries on errors",
      ],
      features: [
        "Runs on its own every morning",
        "Works even with the computer off",
        "No paid API: free YouTube quota + the Claude subscription",
        "Separates Shorts from long-form videos",
        "3 qualification bands, from strict to broad",
        "Visual faceless check with Claude",
        "Email report with each channel's best video",
        "Scored watchlist for promising channels",
      ],
      integrations: [
        "Claude Code Routines",
        "YouTube Data API v3",
        "Claude (vision)",
        "GitHub",
        "Email (Resend)",
        "Google Sheets (optional)",
      ],
      engineering: [
        {
          h: "Shorts vs. long-form",
          p: "The YouTube API mixes Shorts with long videos. A channel only passes with at least 10 videos of 10+ minutes, and 30-day views are counted from long videos only, so the numbers aren't inflated by Shorts.",
        },
        {
          h: "Cloud + local, each where it works",
          p: "The search runs in the cloud on Claude Code Routines. The visual check runs on the local computer, because frame downloads are often blocked from the cloud; a local step then merges the daily results into GitHub.",
        },
        {
          h: "No paid API",
          p: "It uses YouTube's free daily quota, rotating automatically across keys when one runs out, and the visual check is done by Claude through the subscription, with no separate API key.",
        },
        {
          h: "A funnel you can measure",
          p: "Every brief also shows why channels were rejected. On 11 October 2026, for example: 2,697 channels analysed, 509 with enough long videos, 36 passing views and frequency, 15 strictly qualified.",
        },
      ],
      stack: [
        { label: "Automation", items: ["Claude Code Routines", "Python", "PowerShell"] },
        { label: "Data", items: ["YouTube Data API v3", "JSON", "CSV"] },
        { label: "AI", items: ["Claude (vision)"] },
        { label: "Delivery", items: ["Email (Resend)", "GitHub", "Google Sheets"] },
      ],
      outcome:
        "What used to take me hours by hand now lands in my inbox every morning: in about 3.5 months, 344 channels found across the three bands, 158 of them strictly qualified, and 145 confirmed faceless by the visual check. The same kind of routine can be built for any repetitive market research.",
    },
  },

  "auto-ai-video-editor": {
    ro: {
      summary:
        "Un pipeline de montaj video condus de Claude Code: primește filmarea brută și livrează video-ul montat, cu tăieturi pe cuvânt, zoom, subtitrări, B-roll, efecte în cadru, muzică și verificare automată. Merge pentru Reels filmate cu telefonul, pentru prezentări de aplicații înregistrate pe ecran și pentru video-uri lungi.",
      overview:
        "Un skill Claude Code care conduce 56 de scripturi Python (~16.500 de linii) peste FFmpeg și mai multe modele AI. Filmarea brută e transcrisă cuvânt cu cuvânt, analizată vizual cu Gemini și curățată de pauze, „ăă”, bâlbâieli și reluări, cu fiecare tăietură verificată pe sunet. Apoi primește zoom-uri, subtitrări în stilul brandului, grafice animate și B-roll, efecte în cadru (text în spatele persoanei, fundal înlocuit), muzică și efecte sonore; la prezentările de ecran, o cameră virtuală urmărește ce explic. Două puncte de aprobare, planul de montaj și apoi previzualizarea, lasă controlul la mine, iar fiecare problemă întâlnită pe drum a devenit o regulă: 134 de lecții documentate în skill.",
      problem:
        "Montajul unui Reel de un minut durează ore: tăieturi pe fiecare pauză și „ăă”, subtitrări, B-roll, muzică, mixaj. Pentru volumul de conținut de care are nevoie un business mic, un editor plătit e scump și lent, iar uneltele automate taie doar după volumul sunetului, fără să înțeleagă ce se spune. Pipeline-ul face munca grea, iar eu doar aprob.",
      architecture: [
        "Skill Claude Code: Claude citește transcrierea și analiza vizuală, decide tăieturile și planul, apoi rulează scripturile pas cu pas",
        "Transcriere cuvânt cu cuvânt cu ElevenLabs Scribe v2 (Whisper local ca rezervă) și analiză vizuală cu Gemini",
        "Tăieturi exacte pe cadru: pauzele se iau din sunet (VAD), nu din transcriere, și se verifică să nu fie tăiat niciun cuvânt",
        "Motor de efecte în cadru: silueta persoanei (RVM), mâinile și fața (MediaPipe), 22 de tipuri de efecte",
        "Mod screen demo: fața și ecranul pe vertical, o cameră virtuală care încadrează ce spun (Gemini), evidențiere și bara de capitole",
        "Sunet: vocea originală, curățată cu Auphonic doar când e zgomot, muzică de fundal cu ducking, mixaj la −14 LUFS",
        "Verificare automată: sincronul, subtitrările peste față, artefactele din clipurile AI și o verificare vizuală cu Gemini",
      ],
      features: [
        "Tăieturi pe cuvânt: pauze, „ăă”, bâlbâieli, reluări",
        "Subtitrări cuvânt cu cuvânt, cu cuvinte-cheie evidențiate",
        "Zoom la fiecare idee nouă",
        "B-roll: stock, grafice animate, clipuri AI",
        "Efecte în cadru: text în spatele persoanei, fundal înlocuit",
        "Screen demo vertical, cu camera care urmărește explicația",
        "Muzică și efecte sonore, mixate automat",
        "Copertă și verificare automată înainte de livrare",
      ],
      integrations: [
        "Claude Code",
        "Gemini (vision, imagini, muzică Lyria)",
        "ElevenLabs (Scribe v2, efecte sonore)",
        "Auphonic",
        "fal.ai (MiniMax)",
        "Pexels",
        "HyperFrames / Remotion",
        "MediaPipe",
        "FFmpeg",
      ],
      engineering: [
        {
          h: "Tăieturi care nu taie cuvinte",
          p: "Pauzele vin din sunet (VAD), nu din capetele cuvintelor din transcriere, iar fiecare tăietură e verificată pe audio înainte de randare. „Ăă”-urile trase, pe care transcrierea le ratează, sunt prinse combinând două surse (Scribe și Auphonic): 12 din 12 în testul pe o filmare reală.",
        },
        {
          h: "O cameră care înțelege ce spun",
          p: "La o prezentare de ecran, Gemini numește, frază cu frază, zona despre care vorbesc, cu titlul ei, iar camera virtuală o încadrează lin. Elementul despre care vorbesc rămâne luminat, iar restul se întunecă. Decizia se ia cu toată secvența cunoscută, ca lumina să nu clipească.",
        },
        {
          h: "Text în spatele persoanei",
          p: "Un model de segmentare (RVM) separă persoana de fundal cadru cu cadru, așa că un text poate sta în spatele capului sau fundalul poate fi înlocuit. Mâinile și fața sunt urmărite cu MediaPipe, iar contrastul fiecărui text e verificat automat pe fundalul pe care cade.",
        },
        {
          h: "De două ori mai rapid, aceeași imagine",
          p: "Cadrele se compun în uint8, fișierele intermediare se comprimă rapid, iar efectele se randează doar unde apar. Un reel de test se randează acum în 9 minute în loc de 17, iar o prezentare de 9 minute în 59 de minute în loc de 83, cu imaginea identică la nivelul zgomotului de compresie și sunetul identic bit cu bit.",
        },
      ],
      stack: [
        { label: "Orchestrare", items: ["Claude Code (skill)", "Python"] },
        { label: "Video", items: ["FFmpeg", "x264", "libass", "OpenCV"] },
        { label: "AI", items: ["Gemini", "ElevenLabs Scribe", "MediaPipe", "RVM", "MiniMax", "Lyria"] },
        { label: "Grafică", items: ["HyperFrames", "Remotion", "Pillow"] },
        { label: "Sunet", items: ["Auphonic", "DeepFilterNet", "loudnorm"] },
      ],
      outcome:
        "Montajul care îmi lua ore pornește acum dintr-o singură cerere către Claude, cu două aprobări pe drum: un Reel de 82 de secunde filmat pe plajă a devenit 49 de secunde montate, iar o înregistrare de ecran de 13 minute, o prezentare verticală de 9:10. Un Reel costă cam 0,30–0,40 $ în API-uri, iar pașii plătiți se generează doar după aprobare. Video-urile de mai sus arată exact ce se taie și ce se adaugă.",
      videoTitles: ["Reel: înainte și după", "Screen demo: înainte și după"],
    },
    en: {
      summary:
        "A video-editing pipeline driven by Claude Code: it takes the raw footage and delivers the finished video, with word-level cuts, zooms, captions, B-roll, in-frame effects, music and automatic QA. It works for Reels shot on a phone, for app walkthroughs recorded on screen and for long videos.",
      overview:
        "A Claude Code skill that drives 56 Python scripts (~16,500 lines) on top of FFmpeg and several AI models. The raw footage is transcribed word by word, analysed visually with Gemini and cleaned of pauses, “uhms”, stumbles and retakes, with every cut checked against the audio. It then gets zooms, on-brand captions, motion graphics and B-roll, in-frame effects (text behind the person, a replaced background), music and sound effects; on screen recordings, a virtual camera follows what I explain. Two approval checkpoints, the edit plan and then the preview, keep me in control, and every problem met along the way became a rule: 134 lessons documented in the skill.",
      problem:
        "Editing a one-minute Reel takes hours: cuts at every pause and “uhm”, captions, B-roll, music, mixing. For the amount of content a small business needs, a paid editor is expensive and slow, and automatic tools cut on loudness alone, without understanding what is being said. The pipeline does the heavy lifting, and I only approve.",
      architecture: [
        "Claude Code skill: Claude reads the transcript and the visual analysis, decides the cuts and the plan, then runs the scripts step by step",
        "Word-level transcription with ElevenLabs Scribe v2 (local Whisper as a fallback) and visual analysis with Gemini",
        "Frame-exact cuts: pauses come from the audio (VAD), not from the transcript, with a check that no word gets clipped",
        "In-frame effects engine: the person's matte (RVM), hands and face (MediaPipe), 22 effect types",
        "Screen-demo mode: face and screen stacked vertically, a virtual camera that frames what I talk about (Gemini), highlight and a chapter bar",
        "Audio: the original voice, cleaned with Auphonic only when it is noisy, music with ducking, mixed to −14 LUFS",
        "Automatic QA: sync, captions over the face, artefacts in AI clips, then a visual check with Gemini",
      ],
      features: [
        "Word-level cuts: pauses, “uhms”, stumbles, retakes",
        "Word-by-word captions with highlighted keywords",
        "A zoom at every new idea",
        "B-roll: stock, motion graphics, AI clips",
        "In-frame effects: text behind the person, a replaced background",
        "Vertical screen demos with a camera that follows the explanation",
        "Music and sound effects, mixed automatically",
        "Cover image and automatic QA before delivery",
      ],
      integrations: [
        "Claude Code",
        "Gemini (vision, images, Lyria music)",
        "ElevenLabs (Scribe v2, sound effects)",
        "Auphonic",
        "fal.ai (MiniMax)",
        "Pexels",
        "HyperFrames / Remotion",
        "MediaPipe",
        "FFmpeg",
      ],
      engineering: [
        {
          h: "Cuts that never clip a word",
          p: "Pauses come from the audio (VAD), not from the transcript's word ends, and every cut is checked against the audio before rendering. Drawn-out “uhms” that transcripts miss are caught by combining two sources (Scribe and Auphonic): 12 out of 12 in the test on real footage.",
        },
        {
          h: "A camera that understands what I say",
          p: "On a screen recording, Gemini names, sentence by sentence, the area I am talking about, with its title, and the virtual camera frames it smoothly. The element I talk about stays lit while the rest dims. The decision is made with the whole sequence known, so the light never flickers.",
        },
        {
          h: "Text behind the person",
          p: "A segmentation model (RVM) separates the person from the background frame by frame, so text can sit behind the head or the background can be replaced. Hands and face are tracked with MediaPipe, and every text's contrast is checked automatically against the background it lands on.",
        },
        {
          h: "Twice as fast, same picture",
          p: "Frames are composited in uint8, intermediate files are encoded fast, and effects are rendered only where they appear. A test Reel now renders in 9 minutes instead of 17, and a 9-minute walkthrough in 59 minutes instead of 83, with the picture identical down to compression noise and the sound bit-identical.",
        },
      ],
      stack: [
        { label: "Orchestration", items: ["Claude Code (skill)", "Python"] },
        { label: "Video", items: ["FFmpeg", "x264", "libass", "OpenCV"] },
        { label: "AI", items: ["Gemini", "ElevenLabs Scribe", "MediaPipe", "RVM", "MiniMax", "Lyria"] },
        { label: "Graphics", items: ["HyperFrames", "Remotion", "Pillow"] },
        { label: "Audio", items: ["Auphonic", "DeepFilterNet", "loudnorm"] },
      ],
      outcome:
        "The editing that used to take me hours now starts from a single request to Claude, with two approvals along the way: an 82-second Reel shot on a beach became a 49-second edit, and a 13-minute screen recording a 9:10 vertical walkthrough. A Reel costs about $0.30–0.40 in APIs, and paid steps are generated only after approval. The videos above show exactly what gets cut and what gets added.",
      videoTitles: ["Reel: before and after", "Screen demo: before and after"],
    },
  },

  "doula-lavie": {
    ro: {
      summary:
        "Sistem complet de achiziție clienți — aisbergul: doar 13 pagini vizibile din 32.",
      overview:
        "Doula LaVie e un sistem de funnel complet: 32 de pagini (doar 13 vizibile — restul e mașinăria de sub apă), 4 servicii backend, 22 de integrări, CRM GoHighLevel, Facebook CAPI server-side și un chatbot AI. Bilingv.",
      problem:
        "Un funnel care convertește nu e „un site” — e un flow de pagini, tracking, CRM, plăți și automatizări care trebuie să vorbească între ele. Doula LaVie e exact acel flow, construit cap-coadă.",
      architecture: [
        "32 de pagini (13 vizibile + 19 de mecanism: upsell, downsell, thank-you, tracking)",
        "4 servicii backend",
        "CRM GoHighLevel cu 16 câmpuri UTM pentru atribuire",
        "Facebook CAPI server-side (tracking rezistent la blocarea cookie-urilor)",
        "Chatbot AI pe Gemini, ancorat într-o bază de 3 cărți",
        "Secvențe de email automate, upsell → downsell",
      ],
      features: [
        "Funnel complet cu upsell/downsell",
        "Chatbot AI (Gemini)",
        "Secvențe email automate",
        "Atribuire UTM completă",
        "Bilingv",
      ],
      integrations: [
        "GoHighLevel (CRM, 16 câmpuri UTM)",
        "Facebook CAPI (server-side)",
        "Google Gemini (chatbot)",
        "22 de integrări în total",
      ],
      engineering: [
        {
          h: "Facebook CAPI server-side",
          p: "Evenimentele de conversie se trimit de pe server către Facebook, cu hash SHA-256 pe datele utilizatorului — tracking care funcționează chiar și când browserul blochează cookie-urile.",
        },
        {
          h: "Chatbot AI ancorat și protejat",
          p: "Asistent pe Gemini, ancorat într-o bază de 3 cărți, cu rate-limiting dublu (sesiune + IP) și Row-Level Security, ca să nu poată fi abuzat.",
        },
        {
          h: "Aisbergul: 32 vs 13",
          p: "Doar 13 pagini se văd; celelalte 19 (upsell, downsell, tracking, thank-you) sunt mecanismul care transformă vizitatorul în client.",
        },
      ],
      stack: [
        { label: "Funnel", items: ["32 pagini", "bilingv"] },
        { label: "CRM", items: ["GoHighLevel", "16 UTM"] },
        { label: "Tracking", items: ["Facebook CAPI server-side"] },
        { label: "AI", items: ["Google Gemini", "RLS"] },
      ],
      outcome:
        "Cel mai bun exemplu de „aisberg”: ce vede clientul e mic față de mașinăria din spate care chiar aduce vânzări. Live: doulalavie.com.",
    },
    en: {
      summary:
        "Complete client-acquisition system — the iceberg: only 13 of 32 pages are visible.",
      overview:
        "Doula LaVie is a complete funnel system: 32 pages (only 13 visible — the rest is the machinery under the water), 4 backend services, 22 integrations, GoHighLevel CRM, server-side Facebook CAPI and an AI chatbot. Bilingual.",
      problem:
        "A funnel that converts isn't “a website” — it's a flow of pages, tracking, CRM, payments and automation that all have to talk to each other. Doula LaVie is exactly that flow, built end to end.",
      architecture: [
        "32 pages (13 visible + 19 mechanism: upsell, downsell, thank-you, tracking)",
        "4 backend services",
        "GoHighLevel CRM with 16 UTM fields for attribution",
        "Server-side Facebook CAPI (tracking resilient to cookie blocking)",
        "AI chatbot on Gemini, grounded in a 3-book knowledge base",
        "Automated email sequences, upsell → downsell",
      ],
      features: [
        "Complete funnel with upsell/downsell",
        "AI chatbot (Gemini)",
        "Automated email sequences",
        "Full UTM attribution",
        "Bilingual",
      ],
      integrations: [
        "GoHighLevel (CRM, 16 UTM fields)",
        "Facebook CAPI (server-side)",
        "Google Gemini (chatbot)",
        "22 integrations in total",
      ],
      engineering: [
        {
          h: "Server-side Facebook CAPI",
          p: "Conversion events are sent from the server to Facebook, with SHA-256-hashed user data — tracking that works even when the browser blocks cookies.",
        },
        {
          h: "Grounded, protected AI chatbot",
          p: "A Gemini assistant grounded in a 3-book knowledge base, with dual rate-limiting (session + IP) and Row-Level Security so it can't be abused.",
        },
        {
          h: "The iceberg: 32 vs 13",
          p: "Only 13 pages are visible; the other 19 (upsell, downsell, tracking, thank-you) are the machinery that turns a visitor into a client.",
        },
      ],
      stack: [
        { label: "Funnel", items: ["32 pages", "bilingual"] },
        { label: "CRM", items: ["GoHighLevel", "16 UTM"] },
        { label: "Tracking", items: ["server-side Facebook CAPI"] },
        { label: "AI", items: ["Google Gemini", "RLS"] },
      ],
      outcome:
        "The best “iceberg” example: what the client sees is small next to the machinery behind it that actually drives sales. Live: doulalavie.com.",
    },
  },

  heartopening: {
    ro: {
      summary:
        "Sistem complet de achiziție clienți — funnel, plăți și facturare conformă.",
      overview:
        "Sistem de achiziție pentru un business de coaching: un funnel (LP magnet + tripwire) cu tracking complet, CRM, secvențe de email, plăți Stripe și facturare automată conformă cu e-Factura. SSR pe TanStack Start (React 19).",
      problem:
        "Un business de coaching are nevoie să atragă lead-uri, să vândă un produs de intrare și să factureze conform legal — automat, fără muncă manuală la fiecare comandă. Sistemul face tot flow-ul.",
      architecture: [
        "Funnel: landing magnet + pagină tripwire (long-form sales)",
        "GA4 + Meta Pixel + Microsoft Clarity, cu GDPR Consent Mode v2",
        "Atribuire UTM completă → GoHighLevel",
        "Secvență de 5 emailuri automate",
        "Stripe checkout (3D Secure, Revolut, Klarna)",
        "Membership de curs passwordless + facturare automată Oblio cu e-Factura",
      ],
      features: [
        "Funnel magnet → tripwire",
        "Tracking + consimțământ GDPR",
        "5 emailuri automate",
        "Plăți 3DS (Revolut, Klarna)",
        "Acces curs fără parolă",
        "Facturare e-Factura",
      ],
      integrations: [
        "GA4, Meta Pixel, Clarity",
        "GoHighLevel (CRM)",
        "Stripe (3DS, Revolut, Klarna)",
        "Oblio (facturare + e-Factura)",
      ],
      engineering: [
        {
          h: "Consimțământ înainte de tracking",
          p: "GDPR Consent Mode v2 — niciun tag de analytics sau marketing nu se declanșează înainte de acordul vizitatorului.",
        },
        {
          h: "Plăți + facturare conformă",
          p: "Stripe cu 3D Secure (și Revolut, Klarna), cu facturare automată Oblio și e-Factura — conformitate fiscală RO din prima.",
        },
        {
          h: "Membership passwordless",
          p: "Accesul la curs se face fără parolă, imediat după plată.",
        },
      ],
      stack: [
        {
          label: "Frontend",
          items: ["TanStack Start", "React 19", "SSR"],
        },
        { label: "Plăți", items: ["Stripe 3DS", "Revolut", "Klarna"] },
        { label: "Facturare", items: ["Oblio", "e-Factura"] },
        {
          label: "CRM / Tracking",
          items: ["GoHighLevel", "GA4", "Meta Pixel", "Clarity"],
        },
      ],
      outcome:
        "Un funnel care nu doar vinde, ci și facturează conform legal, automat. Live: heartopening.ro.",
    },
    en: {
      summary:
        "Complete client-acquisition system — funnel, payments and compliant invoicing.",
      overview:
        "A client-acquisition system for a coaching business: a funnel (LP magnet + tripwire) with full tracking, CRM, email sequences, Stripe payments and automated e-Factura-compliant invoicing. SSR on TanStack Start (React 19).",
      problem:
        "A coaching business needs to attract leads, sell an entry product and invoice legally — automatically, without manual work on every order. The system runs the whole flow.",
      architecture: [
        "Funnel: landing magnet + tripwire page (long-form sales)",
        "GA4 + Meta Pixel + Microsoft Clarity, with GDPR Consent Mode v2",
        "Full UTM attribution → GoHighLevel",
        "5-email automated sequence",
        "Stripe checkout (3D Secure, Revolut, Klarna)",
        "Passwordless course membership + automated Oblio invoicing with e-Factura",
      ],
      features: [
        "Magnet → tripwire funnel",
        "Tracking + GDPR consent",
        "5 automated emails",
        "3DS payments (Revolut, Klarna)",
        "Passwordless course access",
        "e-Factura invoicing",
      ],
      integrations: [
        "GA4, Meta Pixel, Clarity",
        "GoHighLevel (CRM)",
        "Stripe (3DS, Revolut, Klarna)",
        "Oblio (invoicing + e-Factura)",
      ],
      engineering: [
        {
          h: "Consent before tracking",
          p: "GDPR Consent Mode v2 — no analytics or marketing tag fires before the visitor's consent.",
        },
        {
          h: "Compliant payments + invoicing",
          p: "Stripe with 3D Secure (plus Revolut, Klarna), with automated Oblio invoicing and e-Factura — Romanian tax compliance from day one.",
        },
        {
          h: "Passwordless membership",
          p: "Course access happens without a password, right after payment.",
        },
      ],
      stack: [
        { label: "Frontend", items: ["TanStack Start", "React 19", "SSR"] },
        { label: "Payments", items: ["Stripe 3DS", "Revolut", "Klarna"] },
        { label: "Invoicing", items: ["Oblio", "e-Factura"] },
        {
          label: "CRM / Tracking",
          items: ["GoHighLevel", "GA4", "Meta Pixel", "Clarity"],
        },
      ],
      outcome:
        "A funnel that doesn't just sell, but also invoices legally, automatically. Live: heartopening.ro.",
    },
  },

  "mariana-pascal": {
    ro: {
      summary: "Sistem de funnel bilingv — LP magnet + tripwire.",
      overview:
        "Sistem de achiziție bilingv pentru un business de educație lingvistică: o landing magnet și o pagină tripwire, cu tracking, CRM și secvențe automate.",
      problem:
        "Pentru a transforma interesul în clienți, un business educațional are nevoie de un drum clar: magnet gratuit → ofertă de intrare → urmărire automată. Sistemul livrează acest drum, în două limbi.",
      architecture: [
        "Funnel: LP magnet + pagină tripwire",
        "Tracking și atribuire UTM",
        "CRM și secvențe automate",
        "Bilingv",
      ],
      features: [
        "LP magnet + tripwire",
        "Tracking complet",
        "CRM + automatizări",
        "Bilingv",
      ],
      integrations: [
        "GoHighLevel (CRM)",
        "GA4 / Meta Pixel (tracking)",
        "Automatizări email",
      ],
      engineering: [
        {
          h: "Funnel bilingv",
          p: "Același mecanism de conversie, în două limbi, cu tracking consistent între ele.",
        },
        {
          h: "Tripwire",
          p: "Pagină de ofertă low-ticket care transformă lead-ul în primul client plătitor.",
        },
      ],
      stack: [
        { label: "Funnel", items: ["LP magnet", "tripwire", "bilingv"] },
        { label: "CRM", items: ["GoHighLevel"] },
        { label: "Tracking", items: ["GA4", "Meta Pixel"] },
      ],
      outcome:
        "Un sistem care duce vizitatorul de la magnet la primul client. Live: deblocheazati-fluenta.marianapascal.com.",
    },
    en: {
      summary: "Bilingual funnel system — LP magnet + tripwire.",
      overview:
        "A bilingual acquisition system for a language-education business: a landing magnet and a tripwire page, with tracking, CRM and automated sequences.",
      problem:
        "To turn interest into clients, an education business needs a clear path: free magnet → entry offer → automated follow-up. The system delivers that path, in two languages.",
      architecture: [
        "Funnel: LP magnet + tripwire page",
        "Tracking and UTM attribution",
        "CRM and automated sequences",
        "Bilingual",
      ],
      features: [
        "LP magnet + tripwire",
        "Full tracking",
        "CRM + automation",
        "Bilingual",
      ],
      integrations: [
        "GoHighLevel (CRM)",
        "GA4 / Meta Pixel (tracking)",
        "Email automation",
      ],
      engineering: [
        {
          h: "Bilingual funnel",
          p: "The same conversion mechanism in two languages, with consistent tracking across both.",
        },
        {
          h: "Tripwire",
          p: "A low-ticket offer page that turns a lead into the first paying client.",
        },
      ],
      stack: [
        { label: "Funnel", items: ["LP magnet", "tripwire", "bilingual"] },
        { label: "CRM", items: ["GoHighLevel"] },
        { label: "Tracking", items: ["GA4", "Meta Pixel"] },
      ],
      outcome:
        "A system that takes a visitor from magnet to first client. Live: deblocheazati-fluenta.marianapascal.com.",
    },
  },

  "mihaela-cheptea": {
    ro: {
      summary:
        "Sistem de prezentare bilingv, cu SEO avansat și performanță.",
      overview:
        "Site de prezentare bilingv cu accent pe SEO și performanță: 11 pagini, ~1.460 de stringuri traduse, componente custom (carusel, galerie, player audio), prerender pentru Google, WebP și structured data.",
      problem:
        "Un brand personal are nevoie de o prezență care arată impecabil, se încarcă instant și e găsită în Google — în două limbi. Sistemul livrează exact asta.",
      architecture: [
        "11 pagini, bilingv (~1.460 de stringuri traduse)",
        "Prerender / HTML static pentru indexare Google",
        "Componente custom: carusel, galerie, player audio",
        "Imagini WebP + structured data pentru SEO",
      ],
      features: [
        "11 pagini bilingve",
        "Carusel / galerie / audio custom",
        "SEO avansat (prerender, structured data)",
        "Performanță (WebP)",
      ],
      integrations: ["MailerLite (email)", "Calendly (programări)"],
      engineering: [
        {
          h: "Prerender pentru Google",
          p: "HTML static pre-randat, ca motoarele de căutare să indexeze tot conținutul fără să depindă de JavaScript.",
        },
        {
          h: "Bilingv la scară",
          p: "~1.460 de stringuri traduse, gestionate consistent în 11 pagini.",
        },
        {
          h: "Performanță",
          p: "Imagini WebP și structured data pentru viteză și vizibilitate în căutări.",
        },
      ],
      stack: [
        { label: "Frontend", items: ["React", "prerender", "WebP"] },
        {
          label: "SEO",
          items: ["structured data", "11 pagini bilingve"],
        },
        { label: "Integrări", items: ["MailerLite", "Calendly"] },
      ],
      outcome:
        "Un site bilingv rapid, construit să fie găsit pe Google, care o reprezintă după doi ani în care îl tot amânase. Live: mihaelacheptea.ro.",
    },
    en: {
      summary: "Bilingual presence system, with advanced SEO and performance.",
      overview:
        "A bilingual presence site focused on SEO and performance: 11 pages, ~1,460 translated strings, custom components (carousel, gallery, audio player), prerender for Google, WebP and structured data.",
      problem:
        "A personal brand needs a presence that looks impeccable, loads instantly and is found on Google — in two languages. The system delivers exactly that.",
      architecture: [
        "11 pages, bilingual (~1,460 translated strings)",
        "Prerender / static HTML for Google indexing",
        "Custom components: carousel, gallery, audio player",
        "WebP images + structured data for SEO",
      ],
      features: [
        "11 bilingual pages",
        "Custom carousel / gallery / audio",
        "Advanced SEO (prerender, structured data)",
        "Performance (WebP)",
      ],
      integrations: ["MailerLite (email)", "Calendly (bookings)"],
      engineering: [
        {
          h: "Prerender for Google",
          p: "Pre-rendered static HTML so search engines index all content without depending on JavaScript.",
        },
        {
          h: "Bilingual at scale",
          p: "~1,460 translated strings, managed consistently across 11 pages.",
        },
        {
          h: "Performance",
          p: "WebP images and structured data for speed and search visibility.",
        },
      ],
      stack: [
        { label: "Frontend", items: ["React", "prerender", "WebP"] },
        { label: "SEO", items: ["structured data", "11 bilingual pages"] },
        { label: "Integrations", items: ["MailerLite", "Calendly"] },
      ],
      outcome:
        "A fast bilingual site built to be found on Google, that finally represents her after two years of putting it off. Live: mihaelacheptea.ro.",
    },
  },
};
