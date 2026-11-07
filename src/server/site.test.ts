import { describe, expect, test } from "vitest";
import { isLiveSite, robotsFor, siteUrl, sitemapFor } from "./site";
import { gtmId } from "./tag-manager";

const production = { VERCEL_ENV: "production", VERCEL_PROJECT_PRODUCTION_URL: "englisheasy.vercel.app", VERCEL_URL: "englisheasy-abc.vercel.app" };
const preview = { VERCEL_ENV: "preview", VERCEL_URL: "englisheasy-abc.vercel.app" };

describe("siteUrl", () => {
  test("production's domain, the preview's own, else localhost", () => {
    expect(siteUrl(production)).toBe("https://englisheasy.vercel.app");
    expect(siteUrl(preview)).toBe("https://englisheasy-abc.vercel.app");
    expect(siteUrl({})).toBe("http://localhost:3000");
  });
});

describe("robots and sitemap", () => {
  test("production lets search engines in, except the app, and names the sitemap", () => {
    expect(isLiveSite(production)).toBe(true);
    expect(robotsFor(production)).toEqual({
      rules: { userAgent: "*", allow: "/", disallow: ["/learn", "/dev/", "/api/"] },
      sitemap: "https://englisheasy.vercel.app/sitemap.xml",
    });
  });

  test("previews and local builds keep everyone out and list nothing", () => {
    for (const env of [preview, {}]) {
      expect(robotsFor(env)).toEqual({ rules: { userAgent: "*", disallow: "/" } });
      expect(sitemapFor(env, ["a"])).toEqual([]);
    }
  });

  test("the sitemap holds the landing page, privacy and each lesson overview", () => {
    expect(sitemapFor(production, ["sentence-basics"]).map((entry) => entry.url)).toEqual([
      "https://englisheasy.vercel.app/",
      "https://englisheasy.vercel.app/privacy",
      "https://englisheasy.vercel.app/lessons/sentence-basics",
    ]);
  });
});

describe("gtmId", () => {
  test("accepts a container ID and nothing else", () => {
    expect(gtmId({ GTM_ID: " GTM-ABC123 " })).toBe("GTM-ABC123");
    expect(gtmId({ GTM_ID: "GTM-abc" })).toBeUndefined();
    expect(gtmId({ GTM_ID: "');alert(1)//" })).toBeUndefined();
    expect(gtmId({})).toBeUndefined();
  });
});
