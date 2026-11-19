// Prints /cv and /en/cv to public/cv/*.pdf with the local Chrome or Edge, so
// the PDFs are exactly the web pages' print layout (A4, @page cv in globals.css).
//
// Usage: build and serve the site, then run against it:
//   npm run build && npx next start -p 3100
//   npm run cv:pdf -- http://localhost:3100
// Set CHROME_PATH if Chrome/Edge is installed somewhere else.
import { existsSync, mkdirSync, statSync } from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");

const executablePath = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].find((p) => p && existsSync(p));
if (!executablePath) throw new Error("No Chrome or Edge found; set CHROME_PATH.");

// The PDF title shown by viewers comes from document.title.
const jobs = [
  { route: "/cv", file: "Iustin-Flavius-Aionese-CV-RO.pdf", title: "Iustin-Flavius Aionese · CV" },
  { route: "/en/cv", file: "Iustin-Flavius-Aionese-CV-EN.pdf", title: "Iustin-Flavius Aionese · CV" },
];

const outDir = path.join(process.cwd(), "public", "cv");
mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({ executablePath, headless: true });
try {
  for (const job of jobs) {
    const page = await browser.newPage();
    await page.goto(base + job.route, { waitUntil: "networkidle0" });
    await page.evaluate(async (title) => {
      document.title = title;
      await document.fonts.ready;
    }, job.title);
    const out = path.join(outDir, job.file);
    await page.pdf({
      path: out,
      preferCSSPageSize: true,
      printBackground: true,
      displayHeaderFooter: false,
      tagged: true,
      outline: true,
    });
    console.log(`${job.file}: ${Math.round(statSync(out).size / 1024)} KB`);
    await page.close();
  }
} finally {
  await browser.close();
}
