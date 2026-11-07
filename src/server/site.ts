import type { MetadataRoute } from "next";

// What search engines may read, and where the site lives. Pure, so the rules are unit-tested;
// src/app/robots.ts, sitemap.ts and layout.tsx pass process.env.

/** process.env, or a test's own. Read: VERCEL_ENV ("production", "preview" or "development"; unset on a local build), VERCEL_PROJECT_PRODUCTION_URL (the production domain) and VERCEL_URL (this deployment's domain), the last two without a scheme. */
export type SiteEnv = Record<string, string | undefined>;

/** The site's address without a trailing slash: production's domain in production, the deployment's on a preview, else localhost. */
export function siteUrl(env: SiteEnv): string {
  const host = env.VERCEL_ENV === "production" ? env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL : env.VERCEL_URL;
  return host ? `https://${host.replace(/^https?:\/\//, "").replace(/\/+$/, "")}` : "http://localhost:3000";
}

/** Only production is for search engines: previews and local builds ask them to stay away. */
export const isLiveSite = (env: SiteEnv) => env.VERCEL_ENV === "production";

/** Pages that are the app, not for search engines. */
const PRIVATE_PATHS = ["/learn", "/dev/", "/api/"];

export function robotsFor(env: SiteEnv): MetadataRoute.Robots {
  if (!isLiveSite(env)) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/", disallow: PRIVATE_PATHS }, sitemap: `${siteUrl(env)}/sitemap.xml` };
}

/** The landing page, the privacy page and the overview of each released lesson (`lessonIds`); nothing outside production. */
export function sitemapFor(env: SiteEnv, lessonIds: string[]): MetadataRoute.Sitemap {
  if (!isLiveSite(env)) return [];
  const site = siteUrl(env);
  return [
    { url: `${site}/`, priority: 1 },
    { url: `${site}/privacy`, priority: 0.2 },
    ...lessonIds.map((id) => ({ url: `${site}/lessons/${encodeURIComponent(id)}`, priority: 0.7 })),
  ];
}
