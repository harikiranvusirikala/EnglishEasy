import { expect, test } from "@playwright/test";
import { SETTINGS_KEY } from "../src/learning/settings";

test.skip(({ isMobile }) => !isMobile, "offline is checked on the phone project");
test.use({ serviceWorkers: "allow" });

const SETTINGS = JSON.stringify({ learnIn: "en", onboarded: true });

test("the manifest is valid", async ({ request }) => {
  const response = await request.get("/manifest.webmanifest");
  expect(response.ok()).toBe(true);
  const manifest = await response.json();
  expect(manifest).toMatchObject({ name: "EnglishEasy", start_url: "/learn", display: "standalone" });
  expect(manifest.icons.map((i: { sizes: string; purpose: string }) => `${i.sizes} ${i.purpose}`)).toEqual(expect.arrayContaining(["192x192 any", "512x512 any", "512x512 maskable"]));
  for (const icon of manifest.icons) expect((await request.get(icon.src)).ok()).toBe(true);
});

/** Visits Home once and waits until the worker controls the page and has kept the lesson files. */
async function visitOnce(page: import("@playwright/test").Page) {
  await page.addInitScript(([key, value]) => !localStorage.getItem(key) && localStorage.setItem(key, value), [SETTINGS_KEY, SETTINGS]);
  await page.goto("/learn");
  await expect(page.getByRole("link", { name: /Start Day 1/ })).toBeVisible();
  await page.evaluate(() => navigator.serviceWorker.ready.then(() => undefined));
  await expect.poll(() => page.evaluate(() => !!navigator.serviceWorker.controller)).toBe(true);
  await expect
    .poll(() => page.evaluate(async () => !!(await (await caches.open("ee-content-1")).match("/content/sentence-basics.json"))))
    .toBe(true);
}

test("after one visit, Day 1 opens and plays with no internet", async ({ page, context }) => {
  await visitOnce(page);
  await context.setOffline(true);
  await page.goto("/learn/play?l=sentence-basics");
  await expect(page.getByRole("button", { name: /^Start/ })).toBeVisible();
  await page.getByRole("button", { name: /^Start/ }).click();
  await expect(page.getByRole("button", { name: /^Continue/ })).toBeVisible();
  await page.goto("/learn/journey"); // another page of the shell
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("a changed lesson file shows on the visit after next", async ({ page, context }) => {
  await visitOnce(page);
  const url = "/content/sentence-basics.json";
  const original = await page.evaluate(async (u) => (await fetch(u)).json(), url);
  const serve = { ...original, title: { en: "Changed on the server", te: "మారింది" } };
  await context.route("**" + url, (route) => route.fulfill({ json: serve })); // the context also sees the worker's own requests
  // Stale-while-revalidate: this visit still gets the kept copy, and the latest is fetched behind it.
  const first = await page.evaluate(async (u) => (await fetch(u)).json(), url);
  expect(first.title).toEqual(original.title);
  await expect.poll(() => page.evaluate(async (u) => (await (await caches.open("ee-content-1")).match(u))!.json().then((d) => d.title.en), url)).toBe("Changed on the server");
  const second = await page.evaluate(async (u) => (await fetch(u)).json(), url);
  expect(second.title.en).toBe("Changed on the server");
  await context.setOffline(true);
  await context.unroute("**" + url);
  const offline = await page.evaluate(async (u) => (await fetch(u)).json(), url);
  expect(offline.title.en).toBe("Changed on the server"); // still answered from the cache
});
