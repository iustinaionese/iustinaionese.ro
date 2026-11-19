"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { NAV_ITEMS, whatsappLink } from "@/lib/site";
import { Logo } from "./Logo";
import { WhatsApp, ArrowRight } from "@/components/ui/icons";

export function Footer() {
  const { lang, t } = useLanguage();
  const year = 2026;

  return (
    <footer className="relative border-t border-border bg-bg">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 font-display text-xl leading-snug text-fg-muted">
              {t.footer.tagline}
            </p>
            <a
              href={whatsappLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 font-mono-accent text-sm text-fg transition-colors hover:text-accent"
            >
              <WhatsApp className="h-4 w-4 text-whatsapp" />
              +40 751 084 902
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <nav className="flex flex-col gap-3">
              <span className="eyebrow mb-1">{t.nav.menu}</span>
              <Link href="/" className="text-base text-fg-muted hover:text-fg">
                Home
              </Link>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-base text-fg-muted hover:text-fg"
                >
                  {t.nav[item.key]}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              <span className="eyebrow mb-1">Legal</span>
              <Link
                href="/privacy"
                className="text-base text-fg-muted hover:text-fg"
              >
                {t.footer.privacy}
              </Link>
              <Link
                href="/terms"
                className="text-base text-fg-muted hover:text-fg"
              >
                {t.footer.terms}
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono-accent text-xs text-fg-faint">
            © {year} {t.footer.legalName}. {t.footer.rights}
          </p>
          <p className="font-mono-accent text-xs text-fg-faint">
            {t.footer.builtNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
