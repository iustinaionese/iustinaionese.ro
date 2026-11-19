"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/** True only after client mount (false during SSR) — no setState-in-effect. */
export function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

/** Reactive media-query match. Returns false during SSR. */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (cb) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", cb);
      return () => mql.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
