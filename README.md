# iustinaionese.ro

The code of my portfolio site and CV: [www.iustinaionese.ro](https://www.iustinaionese.ro).

- **Stack:** Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.
- **Bilingual:** Romanian and English, switched on the client. The CV has its own pages
  (`/cv` and `/en/cv`) and is printed to PDF by `scripts/cv-pdf.mjs` with Puppeteer.
- **Content as data:** projects, case studies, the CV and the translations live in typed
  modules in `src/lib`, and the pages render from them.
- **Motion:** a 3D hero built with Three.js (React Three Fiber), GSAP text animations and
  Lenis smooth scrolling, all of which respect the visitor's reduced-motion setting.

## Run it locally

```bash
npm install
npm run dev
```

To rebuild the CV PDFs, build and start the site, then point the script at it:

```bash
npm run build
npx next start -p 3100
npm run cv:pdf -- http://localhost:3100
```

## Rights

The code is shared for reference. The content (texts, images, videos, the CV and the client
materials shown in the case studies) belongs to me and to the respective clients, all
rights reserved.
