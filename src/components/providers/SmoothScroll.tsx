"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, type LenisRef } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@/lib/hooks";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Cinematic smooth scroll (Lenis) synced with GSAP ScrollTrigger.
 * Lenis raf is driven by the GSAP ticker so scroll-driven animations stay
 * perfectly in step. Respects prefers-reduced-motion: the wheel scrolls
 * natively (smoothWheel off) — Lenis would otherwise swallow the wheel event
 * and only move the page from its raf.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  // Land at the top of every new page. Lenis owns the scroll position, so
  // Next's scroll-to-top doesn't apply on its own. Reset synchronously *before*
  // the new page paints (layout effect): sync Lenis's internal target to 0
  // AND reset the native scroll (so it doesn't depend on a later Lenis frame).
  useIsoLayoutEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    lenisRef.current?.lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [pathname]);

  // Always drive Lenis's raf (also with reduced motion): programmatic
  // scrollTo calls only advance on raf.
  useEffect(() => {
    function raf(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const lenis = lenisRef.current?.lenis;
    lenis?.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(raf);
      lenis?.off("scroll", ScrollTrigger.update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        lerp: 0.1,
        smoothWheel: !reduced,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      {children}
    </ReactLenis>
  );
}
