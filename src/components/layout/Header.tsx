"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { NAV_ITEMS } from "@/lib/site";
import { clsx } from "@/lib/clsx";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { WhatsAppCTA } from "@/components/ui/Buttons";

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const lenis = useLenis();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Re-clicking the nav item (or logo) for the page you're already on scrolls
  // to top instead of doing nothing.
  const handleNav = (href: string) => (e: React.MouseEvent) => {
    setOpen(false);
    if (href === pathname) {
      e.preventDefault();
      if (lenis) lenis.scrollTo(0, reduced ? { immediate: true } : { duration: 1 });
      else window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: freeze the page (Lenis intercepts the wheel
  // itself, so it has to be stopped too) and close on Escape or when the
  // viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open, lenis]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={clsx(
          "transition-all duration-500",
          scrolled
            ? "border-b border-border bg-bg/85"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo onClick={handleNav("/")} />

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={handleNav(item.href)}
                className="group relative font-mono-accent text-[0.78rem] uppercase tracking-[0.14em] text-fg-muted transition-colors hover:text-fg"
              >
                {t.nav[item.key]}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:block">
              <LanguageToggle />
            </span>
            <span className="hidden lg:block">
              <WhatsAppCTA size="md" />
            </span>
            <span className="lg:hidden">
              <WhatsAppCTA iconOnly />
            </span>
            <button
              type="button"
              aria-label={open ? t.nav.close : t.nav.menu}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-bg-elev/60 md:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={clsx(
                    "absolute left-0 block h-0.5 w-full bg-fg transition-all duration-300",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={clsx(
                    "absolute left-0 top-1.5 block h-0.5 w-full bg-fg transition-all duration-300",
                    open ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={clsx(
                    "absolute left-0 block h-0.5 w-full bg-fg transition-all duration-300",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          // Dimmed backdrop under the panel: a tap outside closes the menu
          // instead of reaching (and clicking) the page behind it.
          <motion.div
            key="menu-backdrop"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 -z-10 bg-black/60 md:hidden"
          />
        )}
        {open && (
          <motion.div
            key="menu-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-3 mt-2 rounded-2xl border border-border-strong bg-bg-elev p-5 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={handleNav(item.href)}
                  className="rounded-xl px-3 py-3 font-display text-2xl text-fg transition-colors hover:bg-bg-elev-2"
                >
                  {t.nav[item.key]}
                </Link>
              ))}
            </nav>
            <div className="mt-5 flex items-center justify-between gap-3">
              <LanguageToggle />
              <WhatsAppCTA size="md" className="flex-1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
