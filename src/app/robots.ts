import type { MetadataRoute } from "next";
import { robotsFor } from "@/server/site";

/** robots.txt: on the live site, everything but the app; elsewhere nothing (src/server/site.ts). */
export default function robots(): MetadataRoute.Robots {
  return robotsFor(process.env);
}
