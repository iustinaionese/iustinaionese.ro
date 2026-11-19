import type { MetadataRoute } from "next";

/** PWA web manifest (served at /manifest.webmanifest). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Iustin Aionese — Product Engineer",
    short_name: "Iustin Aionese",
    description: "Sisteme digitale complete, construite cap-coadă.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0a0b",
    theme_color: "#0c0a0b",
    lang: "ro",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
