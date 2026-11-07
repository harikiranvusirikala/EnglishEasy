import type { MetadataRoute } from "next";
import { DESCRIPTION, SITE_NAME } from "@/components/landing/content";

/** The web app manifest (Add to Home screen). The icons come from `npm run images` (Step 16). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/learn",
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: DESCRIPTION,
    start_url: "/learn",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    lang: "en",
    categories: ["education"],
    background_color: "#fafaf9", // stone-50
    theme_color: "#0f766e", // teal-700, the icon's tile
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
