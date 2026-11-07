import type { MetadataRoute } from "next";
import { releasedDayRefs } from "@/content/course";
import { writtenDayIds } from "@/content/load";
import { sitemapFor } from "@/server/site";

/** sitemap.xml: the landing page, privacy and the overview of each released, written lesson (src/server/site.ts). */
export default function sitemap(): MetadataRoute.Sitemap {
  const written = new Set(writtenDayIds());
  const ids = releasedDayRefs()
    .filter(({ lane, ref }) => lane === "main" && ref.kind === "lesson" && written.has(ref.id))
    .map(({ ref }) => ref.id);
  return sitemapFor(process.env, ids);
}
