"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { whatsappLink } from "@/lib/site";
import { clsx } from "@/lib/clsx";
import { ArrowRight, WhatsApp } from "./icons";

/** Cursor-following magnetic wrapper (premium hover feel). */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function onMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

const sizes = {
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
  // Compact on mobile (so two fit on one row), full size from sm up.
  hero: "h-12 px-4 text-sm sm:h-14 sm:px-8 sm:text-base",
};

export function WhatsAppCTA({
  label,
  size = "lg",
  className,
  iconOnly = false,
}: {
  label?: string;
  size?: keyof typeof sizes;
  className?: string;
  /** Compact round icon-only button (mobile header). */
  iconOnly?: boolean;
}) {
  const { lang, t } = useLanguage();
  const text = label ?? t.cta.letsTalk;
  return (
    <Magnetic>
      <a
        href={whatsappLink(lang)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={iconOnly ? text : undefined}
        className={clsx(
          "group relative inline-flex items-center justify-center whitespace-nowrap rounded-full bg-accent font-medium text-[#1a0c05]",
          "shadow-[0_18px_50px_-18px_var(--glow)] transition-[transform,box-shadow,background] duration-300",
          "hover:bg-accent-strong hover:shadow-[0_24px_60px_-16px_var(--glow)] active:scale-[0.98]",
          iconOnly ? "h-10 w-10" : `gap-2.5 ${sizes[size]}`,
          className,
        )}
      >
        <WhatsApp className={iconOnly ? "h-5 w-5" : "h-[1.15em] w-[1.15em]"} />
        {!iconOnly && text}
        {!iconOnly && (
          <ArrowRight className="hidden h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:block" />
        )}
      </a>
    </Magnetic>
  );
}

export function GhostCTA({
  href,
  label,
  external,
  size = "lg",
  className,
}: {
  href: string;
  label: string;
  external?: boolean;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const cls = clsx(
    "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border-strong bg-bg-elev/40 font-medium text-fg",
    "backdrop-blur-sm transition-colors duration-300 hover:border-accent/60 hover:bg-bg-elev",
    sizes[size],
    className,
  );
  const inner = (
    <>
      {label}
      <ArrowRight className="hidden h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:block" />
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
