import { expect, test, type Page } from "@playwright/test";
import { SETTINGS_KEY } from "../src/learning/settings";
import type { PlayableDay } from "../src/content/types";

test.skip(({ isMobile }) => !isMobile, "saving progress is checked on the phone project");

const SHOTS = "test-results/screenshots";
const next = (page: Page, name: RegExp = /^Continue/) => page.getByRole("button", { name }).click();

/** Day 1 cut down to its Learn cards, so finishing it takes a few taps. */
async function learnOnly(page: Page) {
  await page.route("**/content/sentence-basics.json", async (route) => {
    const day = (await (await route.fetch()).json()) as PlayableDay;
    day.sections = day.sections.filter((s) => s.kind === "learn" || s.kind === "wrapup");
    await route.fulfill({ json: day });
  });
}

test("half of Day 1, reload, Continue resumes at the same activity", async ({ page }) => {
  await page.addInitScript(([key]) => !localStorage.getItem(key) && localStorage.setItem(key, JSON.stringify({ learnIn: "en" })), [SETTINGS_KEY]);
  await page.goto("/lessons/sentence-basics");
  await expect(page.getByRole("link", { name: /^Start/ })).toBeVisible();
  await page.getByRole("link", { name: /^Start/ }).click();
  await next(page, /^Start/);
  for (let i = 0; i < 4; i++) await next(page); // the Learn cards
  await next(page, /^Start/);
  await page.getByRole("button", { name: "I eat rice." }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await next(page);
  await expect(page.getByRole("button", { name: "speak", exact: true })).toBeVisible(); // the second question

  await page.reload(); // "close the browser and come back"
  await expect(page.getByRole("button", { name: "speak", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "I eat rice." })).toHaveCount(0);
  await page.screenshot({ path: `${SHOTS}/resume.png` });

  await page.goto("/lessons/sentence-basics");
  await expect(page.getByRole("link", { name: /^Continue/ })).toBeVisible();
  await expect(page.getByText(/% done/)).not.toContainText("0% done");
  await expect(page.getByText("Next: Practice")).toBeVisible(); // the part Continue goes to
  await page.getByRole("region", { name: "Your progress" }).screenshot({ path: `${SHOTS}/overview-under-way.png` });
  await page.screenshot({ path: `${SHOTS}/overview-under-way-page.png` });
  await page.getByRole("link", { name: /^Continue/ }).click();
  await expect(page.getByRole("button", { name: "speak", exact: true })).toBeVisible();
});

for (const theme of ["light", "dark"] as const) {
  test(`finish a lesson: complete screen, 100% on the overview, replay keeps it (${theme})`, async ({ page }) => {
    const suffix = theme === "dark" ? "-night" : "";
    await page.addInitScript(([key, t]) => !localStorage.getItem(key) && localStorage.setItem(key, JSON.stringify({ learnIn: "en", theme: t })), [SETTINGS_KEY, theme]);
    await page.addInitScript(() => {
      (window as unknown as { __shared: unknown[] }).__shared = [];
      Object.defineProperty(navigator, "share", { value: (data: unknown) => Promise.resolve((window as unknown as { __shared: unknown[] }).__shared.push(data)), configurable: true });
    });
    await learnOnly(page);

    await page.goto("/lessons/sentence-basics");
    await expect(page.getByText("0% done")).toBeVisible();
    await page.screenshot({ path: `${SHOTS}/overview-start${suffix}.png` });
    await page.getByRole("link", { name: /^Start/ }).click();
    await next(page, /^Start/);
    for (let i = 0; i < 4; i++) await next(page);

    await expect(page.getByRole("heading", { name: "Day 1 Complete!" })).toBeVisible();
    await expect(page.getByText("Your sentences today")).toBeVisible();
    await expect(page.getByText("Try it today")).toBeVisible();
    await page.screenshot({ path: `${SHOTS}/lesson-complete${suffix}.png` });

    // How was this lesson? One tap, sent anonymously.
    const rated = page.waitForRequest((r) => r.url().endsWith("/api/feedback") && r.method() === "POST");
    await page.route("**/api/feedback", (route) => route.fulfill({ json: { ok: true } }));
    await page.getByRole("button", { name: "Just right" }).click();
    expect((await rated).postDataJSON()).toMatchObject({ kind: "lesson", dayId: "sentence-basics", level: "right", learnIn: "en" });
    await expect(page.getByText("Thanks! This helps us make the lessons better.")).toBeVisible();

    await page.getByRole("button", { name: /^Share this lesson/ }).click();
    const shared = await page.evaluate(() => (window as unknown as { __shared: { url: string; text: string }[] }).__shared);
    expect(shared[0].url).toMatch(/\/lessons\/sentence-basics$/);
    expect(shared[0].text).toContain("Free");

    await page.goto("/lessons/sentence-basics");
    await expect(page.getByText("100% done")).toBeVisible();
    await expect(page.getByText("Every part done")).toBeVisible();
    await expect(page.getByRole("button", { name: "Share this lesson" })).toBeVisible(); // a square beside Review
    await expect(page.getByRole("link", { name: /^Review/ })).toBeVisible();
    await page.screenshot({ path: `${SHOTS}/overview${suffix}.png`, fullPage: true });

    await page.getByRole("link", { name: /^Review/ }).click();
    await expect(page.getByRole("heading", { name: "Learn" })).toBeVisible(); // a replay starts at the beginning
    await page.goto("/lessons/sentence-basics");
    await expect(page.getByText("100% done")).toBeVisible();
  });
}

test("the lesson page holds the Learn content in both languages for search engines", async ({ request }) => {
  const html = await (await request.get("/lessons/sentence-basics")).text();
  expect(html).toContain("Who Does What");
  expect(html).toContain("వాక్య నిర్మాణం");
  expect(html).toMatch(/<title>[^<]+<\/title>/);
  expect(html).toContain('name="description"');
  expect(html).toMatch(/<link rel="canonical" href="[^"]*\/lessons\/sentence-basics"/); // one address per lesson
  expect(html).toContain('"@type":"BreadcrumbList"'); // EnglishEasy › Day 1: Who Does What
  expect(html).toContain('"name":"Day 1: Who Does What"');
  expect((await request.get("/lessons/not-a-lesson")).status()).toBe(404); // no such lesson
});
