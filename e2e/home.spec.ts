import { expect, test } from "@playwright/test";
import { PROGRESS_KEY } from "../src/learning/progress";
import { SETTINGS_KEY } from "../src/learning/settings";

test.skip(({ isMobile }) => !isMobile, "Home and Journey are checked on the phone project");

const SHOTS = "test-results/screenshots";

test("fresh visitor: language choice, Home, Day 1, back Home shows progress", async ({ page }) => {
  await page.goto("/learn");
  await expect(page.getByRole("heading", { name: /How would you like to learn/ })).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/onboarding.png` });
  await page.getByRole("button", { name: /Explanations in English/ }).click();
  await expect(page.locator("html")).toHaveAttribute("data-learn-in", "en");
  await expect(page.getByRole("heading", { name: "What do you want English for?" })).toBeVisible(); // step 2: goals
  await page.getByRole("button", { name: /Talking with my family/ }).click();
  await page.screenshot({ path: `${SHOTS}/onboarding-goals.png` });
  await page.getByRole("button", { name: /Start learning/ }).click();

  await expect(page.getByRole("link", { name: /Start Day 1/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Good (morning|afternoon|evening)/ })).toBeVisible();
  await expect(page.getByRole("region", { name: "This week" })).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/home.png`, fullPage: true });

  await page.getByRole("link", { name: /Start Day 1/ }).click();
  await page.getByRole("button", { name: /^Start/ }).click();
  await page.getByRole("button", { name: /^Continue/ }).click();
  await page.getByRole("button", { name: /^Continue/ }).click();
  await page.goto("/learn");
  await expect(page.getByRole("link", { name: /Continue Lesson/ })).toBeVisible();
  await expect(page.getByText(/\d+ of \d+ done · /)).not.toContainText("0 of"); // the today card's count (the week card has its own "of 7 done")
});

test("Home at night", async ({ page }) => {
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ learnIn: "te", theme: "dark", onboarded: true })), [SETTINGS_KEY]);
  await page.goto("/learn");
  await expect(page.getByRole("link", { name: /Start Day 1/ })).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/home-night.png`, fullPage: true });
});

test("Journey: Stage 1 open with all twelve weeks, Stage 2 folded with its weeks, unreleased stages are cards", async ({ page }) => {
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ learnIn: "en", onboarded: true })), [SETTINGS_KEY]);
  await page.goto("/learn");
  await page.getByRole("link", { name: "Journey" }).click();
  await expect(page).toHaveURL(/\/learn\/journey$/);
  await expect(page.getByText(/Stage 1 · Foundations/)).toBeVisible();
  await expect(page.locator("details", { hasText: "Stage 1" })).toHaveJSProperty("open", true);
  const week1 = page.getByRole("button", { name: /English Foundations.*Week 1/ });
  await expect(week1).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: /Who Does What/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Putting It Together.*Week 12/ })).toBeVisible(); // all of Stage 1 is released
  const stage2 = page.locator("details", { hasText: "Stage 2" });
  await expect(stage2).toHaveJSProperty("open", false); // released, but the learner is in Stage 1
  await stage2.locator("summary").click();
  await expect(page.getByRole("button", { name: /Getting Around Town.*Week 14/ })).toBeVisible();
  await expect(page.locator("details", { hasText: "Stage 3" })).toHaveJSProperty("open", false); // released weeks, folded
  await expect(page.getByRole("region", { name: /Stage 4/ })).toBeVisible(); // nothing released yet: a card
  await expect(page.getByRole("region", { name: /Stage 5/ })).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/journey.png`, fullPage: true });
});

test("Journey: the next lesson has its own Start button; a lesson page's Journey link opens Journey at that lesson", async ({ page }) => {
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ learnIn: "en", onboarded: true })), [SETTINGS_KEY]);
  await page.goto("/learn/journey");
  await expect(page.getByRole("link", { name: /Who Does What.*Day 1.*Next/ })).toBeVisible();
  await expect(page.getByRole("link", { name: "Start Day 1" })).toHaveAttribute("href", "/learn/play?l=sentence-basics");

  await page.goto("/lessons/sentence-basics");
  const journey = page.getByRole("banner").getByRole("link", { name: "Journey" });
  await expect(journey).toHaveAttribute("href", "/learn/journey?day=sentence-basics");
  await journey.click();
  await expect(page).toHaveURL(/\/learn\/journey\?day=sentence-basics$/);
  await expect(page.getByRole("button", { name: /English Foundations.*Week 1/ })).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: /Who Does What/ })).toBeVisible();
});

for (const look of [{ theme: "light", textSize: "A" }, { theme: "dark", textSize: "A++" }]) {
  test(`Journey with Day 1 done and Day 2 under way (${look.theme}, ${look.textSize})`, async ({ page }) => {
    const at = "2026-11-08T08:00:00.000Z";
    const progress = {
      version: 1,
      activities: {},
      completed: { "sentence-basics": { at, correct: 20, total: 20 } },
      mistakes: {},
      practiceDays: ["2026-11-08"],
      position: { dayId: "i-am-you-are", activityId: "i-am-you-are.e2", at },
      tracks: [],
      tracksAsked: false,
      updatedAt: at,
    };
    await page.addInitScript(
      ([sk, sv, pk, pv]) => {
        localStorage.setItem(sk, sv);
        localStorage.setItem(pk, pv);
      },
      [SETTINGS_KEY, JSON.stringify({ learnIn: "en", onboarded: true, ...look }), PROGRESS_KEY, JSON.stringify(progress)] as const,
    );
    await page.goto("/learn/journey");
    await expect(page.getByRole("link", { name: /Who Does What.*Day 1.*Done/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /I Am, You Are.*Day 2.*In progress/ })).toBeVisible();
    await expect(page.getByRole("link", { name: "Continue Lesson" })).toHaveAttribute("href", "/learn/play?l=i-am-you-are");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= screen.width)).toBe(true);
    await page.screenshot({ path: `${SHOTS}/journey-progress-${look.theme}.png` });
  });
}
