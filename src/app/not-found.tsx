import type { Metadata } from "next";
import { NotFoundView } from "@/components/layout/NotFoundView";

export const metadata: Metadata = {
  title: "404",
  // Next injects its own "noindex" on 404s; drop the root's "index, follow"
  // and canonical so they don't contradict it.
  robots: null,
  alternates: null,
};

export default function NotFound() {
  return <NotFoundView />;
}
