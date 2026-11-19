"use client";

import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { SmoothScroll } from "./SmoothScroll";

/** Root client providers: language context + cinematic smooth scroll. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SmoothScroll>{children}</SmoothScroll>
    </LanguageProvider>
  );
}
