import { createRequire } from "node:module";
import { describe, expect, it } from "vitest";

// public/sw-routes.js is a plain script (the service worker loads it); tests load it with require.
const routes = createRequire(import.meta.url)("../../public/sw-routes.js") as {
  SHELL: string[];
  strategyFor: (request: { url: string; method: string; mode?: string }, origin: string) => string;
  pageKey: (href: string, origin: string) => string;
  assetsIn: (text: string) => string[];
};

const ORIGIN = "https://englisheasy.test";
const decide = (path: string, extra: { method?: string; mode?: string } = {}) =>
  routes.strategyFor({ url: `${ORIGIN}${path}`, method: "GET", mode: "no-cors", ...extra }, ORIGIN);

describe("service worker routing", () => {
  it("answers lesson files from the cache and refreshes them in the background", () => {
    expect(decide("/content/sentence-basics.json")).toBe("stale-while-revalidate");
    expect(decide("/audio/manifest.json")).toBe("stale-while-revalidate");
  });

  it("keeps hashed files, icons and recorded clips cache-first", () => {
    expect(decide("/_next/static/chunks/abc123.js")).toBe("cache-first");
    expect(decide("/icons/icon-192.png")).toBe("cache-first");
    expect(decide("/audio/1a2b3c4d.mp3")).toBe("cache-first");
  });

  it("loads pages from the network first", () => {
    expect(decide("/learn/play?l=sentence-basics", { mode: "navigate" })).toBe("network-first");
    expect(decide("/lessons/sentence-basics", { mode: "navigate" })).toBe("network-first");
  });

  it("leaves everything else to the browser", () => {
    expect(decide("/learn/play?l=x&_rsc=1abc")).toBe("ignore"); // page data, not a navigation
    expect(decide("/api/progress")).toBe("ignore");
    expect(decide("/sw.js")).toBe("ignore");
    expect(decide("/dev/ui", { mode: "navigate" })).toBe("ignore");
    expect(decide("/content/sentence-basics.json", { method: "POST" })).toBe("ignore");
    expect(routes.strategyFor({ url: "https://other.test/content/a.json", method: "GET" }, ORIGIN)).toBe("ignore");
  });

  it("keeps a page under its path, whatever its query", () => {
    expect(routes.pageKey(`${ORIGIN}/learn/play?l=a`, ORIGIN)).toBe(`${ORIGIN}/learn/play`);
    expect(routes.pageKey("/learn", ORIGIN)).toBe(`${ORIGIN}/learn`);
  });

  it("lists the app shell and finds the files a page uses", () => {
    expect(routes.SHELL).toEqual(expect.arrayContaining(["/learn", "/learn/play", "/learn/journey", "/learn/practice", "/learn/settings", "/offline"]));
    const html = '<script src="/_next/static/chunks/a.js"></script><link href="/_next/static/css/b.css"/> "\\/_next\\/static\\/x"';
    expect(routes.assetsIn(html)).toEqual(["/_next/static/chunks/a.js", "/_next/static/css/b.css"]);
    expect(routes.assetsIn("url(/_next/static/media/f.woff2)")).toEqual(["/_next/static/media/f.woff2"]);
  });
});
