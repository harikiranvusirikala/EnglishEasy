import { expect, test, type Page } from "@playwright/test";
import { PROGRESS_KEY } from "../src/learning/progress";
import { SETTINGS_KEY } from "../src/learning/settings";

const SHOTS = "test-results/screenshots";

/**
 * Screenshots one screen at a time (`<name>-01.png`, …): a full-page shot of the long phone page is taller than Chrome
 * can capture and repeats parts of it, and full-page shots leave the frosted sticky header blank. Each screen waits for
 * its lazy pictures.
 */
async function screens(page: Page, name: string) {
  const { height, step } = await page.evaluate(() => ({ height: document.documentElement.scrollHeight, step: window.innerHeight }));
  for (let y = 0, n = 1; y < height; y += step, n++) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForFunction(() =>
      [...document.images].every((img) => {
        const r = img.getBoundingClientRect();
        return r.bottom < 0 || r.top > window.innerHeight || (img.complete && img.naturalWidth > 0);
      }),
    );
    await page.screenshot({ path: `${SHOTS}/${name}-${String(n).padStart(2, "0")}.png` });
  }
  await page.evaluate(() => window.scrollTo(0, 0));
}

test("the landing page tells what it is and starts Day 1", async ({ page, isMobile }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Speak English with confidence");
  await expect(page.locator('h1 [lang="te"]')).toBeVisible();
  await expect(page).toHaveTitle(/EnglishEasy/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.{40,}/);
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
  await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);

  // The sections: how it works, the spotlights, the journey with Week 1 links, made for parents, privacy, the FAQ and the footer.
  await expect(page.getByRole("heading", { name: "Learn in four small steps" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Every idea explained in Telugu" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "From your first sentence to natural English" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Day 1: / })).toHaveAttribute("href", "/lessons/sentence-basics");
  await expect(page.getByRole("heading", { name: "Easy on the eyes, easy on the mind" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Your learning stays yours" })).toBeVisible();
  await page.getByRole("heading", { name: "Do I have to type?" }).click();
  await expect(page.getByText("There is no keyboard anywhere in the app.")).toBeVisible();
  await expect(page.getByRole("contentinfo").getByRole("link", { name: /^Privacy/ })).toHaveAttribute("href", "/privacy");
  await expect(page.getByRole("contentinfo").getByRole("link", { name: /^Source code/ })).toHaveAttribute("href", "https://github.com/harikiranvusirikala/EnglishEasy");
  const coffee = page.getByRole("link", { name: /Buy me a coffee/ });
  await expect(coffee).toHaveAttribute("target", "_blank");
  await expect(coffee).toHaveAttribute("rel", /noopener/);

  // The course's structured data is in the page.
  const data = JSON.parse((await page.locator('script[type="application/ld+json"]').first().textContent())!);
  expect(data["@graph"].map((node: { "@type": string }) => node["@type"])).toEqual(["WebSite", "Course", "WebApplication", "FAQPage"]);

  // No horizontal scrolling, and no text cut off at the screen's edge (a section that clips its overflow hides it from the first check).
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= Math.min(window.innerWidth, screen.width))).toBe(true);
  const outside = await page.evaluate(() =>
    [...document.querySelectorAll("main :is(h1, h2, h3, p, a, li)")]
      .filter((el) => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && (r.left < -1 || r.right > Math.min(window.innerWidth, screen.width) + 1);
      })
      .map((el) => el.textContent?.trim().slice(0, 40)),
  );
  expect(outside).toEqual([]);

  await screens(page, isMobile ? "landing-phone" : "landing-desktop");

  await page.getByRole("link", { name: /Start Day 1/ }).click();
  await expect(page).toHaveURL(/\/learn$/);
});

test("the landing page offers Continue after Day 1 is finished", async ({ page }) => {
  const done = { version: 1, activities: {}, completed: { "sentence-basics": { at: "2026-11-01T10:00:00.000Z", correct: 10, total: 10 } }, mistakes: {}, practiceDays: [], tracks: [], tracksAsked: false, updatedAt: "2026-11-01T10:00:00.000Z" };
  await page.addInitScript(([key, value]) => localStorage.setItem(key, value), [PROGRESS_KEY, JSON.stringify(done)]);
  await page.goto("/");
  await expect(page.getByRole("link", { name: /Continue Day 2/ })).toHaveAttribute("href", "/learn/play?l=i-am-you-are");
});

test("the landing page in night colours", async ({ page, isMobile }) => {
  test.skip(!isMobile, "one night screenshot, on the phone");
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ learnIn: "en", theme: "dark" })), [SETTINGS_KEY]);
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/dark/);
  await screens(page, "landing-night");
});

test("the privacy page and the search engine files", async ({ page, request }) => {
  await page.goto("/privacy");
  await expect(page.getByRole("heading", { level: 1, name: /Privacy/ })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: /గొంతులు/ })).toBeVisible();

  // A local production build is not the live site: search engines are asked to stay away.
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Disallow: /");
  expect(robots).not.toContain("Sitemap:");
});

test("Tag Manager is not loaded without GTM_ID, and never under /learn", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('script[src*="googletagmanager"]')).toHaveCount(0);
  await page.goto("/learn");
  await expect(page.locator('script[src*="googletagmanager"], iframe[src*="googletagmanager"]')).toHaveCount(0);
});
