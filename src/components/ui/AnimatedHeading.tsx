"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useReducedMotion } from "motion/react";
import { clsx } from "@/lib/clsx";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

// Runs synchronously on the client; falls back to useEffect on the server.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

interface AnimatedHeadingProps {
  /** plain-text heading content (escaped) */
  children?: string;
  /** trusted HTML content (used instead of children, e.g. for colored spans) */
  html?: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  /** changes to this value re-run the split (e.g. on language toggle) */
  splitKey?: string | number;
  stagger?: number;
  start?: string;
  /**
   * Above-the-fold headings: visible in the server HTML and revealed with a
   * CSS keyframe on first paint (no SplitText, no waiting for hydration), so
   * they can be the page's LCP element.
   */
  eager?: boolean;
}

/**
 * Kinetic headline: GSAP SplitText masked word reveal on scroll into view.
 *
 * The content is rendered via `dangerouslySetInnerHTML` so React treats the
 * element's interior as opaque. SplitText restructures that DOM freely, and on
 * unmount/navigation React removes the element wholesale instead of trying to
 * remove SplitText's injected nodes (which caused a `removeChild` crash and
 * the intermittent "page couldn't load"). Content is trusted static copy.
 *
 * Falls back to plain text when prefers-reduced-motion is set. The pre-split
 * hidden state is a CSS class scoped to `prefers-reduced-motion:
 * no-preference` (not an inline style): the server can't know the user's
 * setting and hydration doesn't patch attributes, so an inline opacity:0 left
 * every heading invisible for reduced-motion users.
 */
export function AnimatedHeading({
  children,
  html,
  className,
  as = "h2",
  splitKey,
  stagger = 0.035,
  start = "top 85%",
  eager = false,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();
  const __html = html ?? escapeHtml(children ?? "");

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced || eager) return;

    let split: SplitText | undefined;
    const ctx = gsap.context(() => {
      split = SplitText.create(el, {
        type: "lines,words",
        mask: "lines",
        autoSplit: true,
        linesClass: "reveal-line",
      });
      gsap.set(el, { opacity: 1 });
      gsap.from(split.words, {
        yPercent: 115,
        opacity: 0,
        duration: 0.95,
        ease: "power3.out",
        stagger,
        scrollTrigger: { trigger: el, start, once: true },
      });
    }, el);

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, [reduced, eager, splitKey, stagger, start, __html]);

  // Cast the dynamic tag to a single member to avoid union-ref typing pain.
  const Tag = as as "h2";
  return (
    <Tag
      key={splitKey}
      ref={ref}
      className={clsx(className, eager ? "heading-rise" : "split-pending")}
      dangerouslySetInnerHTML={{ __html }}
    />
  );
}
