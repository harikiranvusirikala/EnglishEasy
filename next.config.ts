import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    // The service worker files must always be re-checked, so a new version reaches phones.
    return [{ source: "/:file(sw.js|sw-routes.js)", headers: [{ key: "Cache-Control", value: "no-cache, max-age=0" }] }];
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
