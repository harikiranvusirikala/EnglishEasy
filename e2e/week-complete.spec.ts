import { expect, test } from "@playwright/test";
import { SETTINGS_KEY } from "../src/learning/settings";
import type { PlayableDay } from "../src/content/types";

test.skip(({ isMobile }) => !isMobile, "the player is checked on the phone project");

const SHOTS = "test-results/screenshots";

for (const theme of ["light", "dark"] as const) {
  test(`finishing Day 7 shows Week complete (${theme})`, async ({ page }) => {
    const suffix = theme === "dark" ? "-night" : "";
    await page.addInitScript(([key, t]) => !localStorage.getItem(key) && localStorage.setItem(key, JSON.stringify({ learnIn: "en", theme: t })), [SETTINGS_KEY, theme]);
    await page.addInitScript(() => {
      (window as unknown as { __shared: unknown[] }).__shared = [];
      Object.defineProperty(navigator, "share", { value: (data: unknown) => Promise.resolve((window as unknown as { __shared: unknown[] }).__shared.push(data)), configurable: true });
    });
    // Day 7 cut down to its end (the review itself is covered by unit tests and the dev page), so it finishes at once.
    await page.route("**/content/w1-review.json", async (route) => {
      const day = (await (await route.fetch()).json()) as PlayableDay;
      day.sections = day.sections.filter((s) => s.kind === "wrapup");
      await route.fulfill({ json: day });
    });

    await page.goto("/learn/play?l=w1-review");
    await expect(page.getByRole("heading", { name: "Week 1 Complete!" })).toBeVisible();
    await expect(page.getByText("7 / 7 days")).toBeVisible();
    await expect(page.getByText("Tomorrow", { exact: true })).toBeVisible();
    await page.screenshot({ path: `${SHOTS}/week-complete${suffix}.png` });

    await page.getByRole("button", { name: /^Share with family/ }).click();
    const shared = await page.evaluate(() => (window as unknown as { __shared: { url: string; text: string }[] }).__shared);
    expect(shared[0].text).toContain("Free");
    expect(shared[0].url).toMatch(/\/$/);
  });
}
