import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Elegant neo-serif display (variable) for headlines.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: dictionaries.ro.meta.title,
    template: "%s · Iustin Aionese",
  },
  description: dictionaries.ro.meta.description,
  applicationName: "Iustin Aionese",
  authors: [{ name: "Iustin Aionese", url: SITE_URL }],
  creator: "Iustin Aionese",
  publisher: "DUOI SRL",
  keywords: [
    "Iustin Aionese",
    "product engineer",
    "inginer software",
    "dezvoltare web",
    "platforme SaaS",
    "funnel marketing",
    "automatizări",
    "integrare plăți",
    "aplicații web",
    "Next.js",
  ],
  // "./" resolves against each route's own path, so every page is its own canonical.
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    alternateLocale: "en_US",
    url: "./",
    title: dictionaries.ro.meta.title,
    description: dictionaries.ro.meta.description,
    siteName: "Iustin Aionese",
  },
  twitter: {
    card: "summary_large_image",
    title: dictionaries.ro.meta.title,
    description: dictionaries.ro.meta.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ro"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <body className="grain min-h-dvh bg-bg text-fg">
        <StructuredData />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
