import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    // The service worker files must always be re-checked, so a new version reaches phones. A clip's name changes
    // with its text, so a clip never changes: phones keep it for a year without asking again.
    return [
      { source: "/:file(sw.js|sw-routes.js)", headers: [{ key: "Cache-Control", value: "no-cache, max-age=0" }] },
      { source: "/audio/:dir/:file([^/]+\\.mp3)", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
