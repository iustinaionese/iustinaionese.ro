"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  dictionaries,
  DEFAULT_LANG,
  type Dictionary,
  type Lang,
} from "./dictionaries";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "ia-lang";
const EVENT = "ia-lang-change";

/** localStorage-backed snapshot, with browser-language fallback. */
function readLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ro" || stored === "en") return stored;
  } catch {
    /* ignore */
  }
  const nav = window.navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("en") ? "en" : "ro";
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // useSyncExternalStore renders the server snapshot (RO) during hydration,
  // then swaps to the real client preference — no hydration mismatch, no
  // setState in an effect. The toggle is instant (re-reads the store).
  const lang = useSyncExternalStore(subscribe, readLang, () => DEFAULT_LANG);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.cookie = `${STORAGE_KEY}=${next};path=/;max-age=31536000;samesite=lax`;
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(EVENT));
  }, []);

  const toggle = useCallback(
    () => setLang(lang === "ro" ? "en" : "ro"),
    [lang, setLang],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggle, t: dictionaries[lang] }),
    [lang, setLang, toggle],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
