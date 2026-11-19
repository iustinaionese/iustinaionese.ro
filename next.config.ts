import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The CV PDFs (public/cv) should not compete with /cv in search results.
  // ":file+" needs at least one segment, so the /cv page itself stays indexed.
  async headers() {
    return [
      {
        source: "/cv/:file+",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
