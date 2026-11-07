import { expect, test, type Page } from "@playwright/test";
import { SETTINGS_KEY } from "../src/learning/settings";

test.skip(({ isMobile }) => !isMobile, "the player is checked on the phone project");

const SHOTS = "test-results/screenshots";

const next = (page: Page, name: RegExp = /^Continue/) => page.getByRole("button", { name }).click();

async function toPractice(page: Page) {
  await page.goto("/learn/play?l=sentence-basics");
  await next(page, /^Start/);
  for (let i = 0; i < 4; i++) await next(page); // 2 explain cards, 2 don't-say cards
  await next(page, /^Start/);
}

test("Day 1: Learn cards, first practice questions and the section summary", async ({ page }) => {
  await page.goto("/learn/play?l=sentence-basics");
  await next(page, /^Start/);
  await expect(page.getByRole("heading", { name: /^ఎవరు/ })).toBeVisible(); // Telugu mode by default
  await expect(page.getByText("Who", { exact: true }).first()).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/player-explain.png` });
  for (let i = 0; i < 4; i++) await next(page);
  await next(page, /^Start/);

  await page.getByRole("button", { name: "I eat rice." }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await expect(page.getByText("Correct!")).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/player-feedback.png` });
  await next(page);

  await page.getByRole("button", { name: "speak", exact: true }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await next(page);
  await page.getByRole("button", { name: "They play cricket." }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await next(page);

  // The activities Step 6 builds are skipped for now; the summary counts only what was answered.
  for (let i = 0; i < 5; i++) await next(page, /^Skip/);
  await expect(page.getByText(/3 \/ 3/)).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/player-summary.png` });
});

test("wrong twice shows the answer, in English mode too", async ({ page }) => {
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ learnIn: "en" })), [SETTINGS_KEY]);
  await toPractice(page);
  await expect(page.locator('[lang="te"]')).toHaveCount(0);
  await page.getByRole("button", { name: "Eat I rice." }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await expect(page.getByText("Almost")).toBeVisible();
  await next(page, /^Try again/);
  await page.getByRole("button", { name: "Eat I rice." }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await expect(page.getByText(/The answer is/)).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/player-feedback-wrong.png` });
});

test("night mode, and leaving asks first", async ({ page }) => {
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ theme: "dark" })), [SETTINGS_KEY]);
  await page.goto("/learn/play?l=sentence-basics");
  await next(page, /^Start/);
  await page.screenshot({ path: `${SHOTS}/player-explain-night.png` });
  await page.getByRole("button", { name: "Close" }).click();
  await expect(page.getByRole("heading", { name: "Leave this lesson?" })).toBeVisible();
  await page.getByRole("button", { name: /^Leave/ }).click();
  await expect(page).toHaveURL(/\/learn$/);
});

test("the review page shows the whole day with answers marked", async ({ page }) => {
  await page.goto("/dev/lesson/sentence-basics");
  await expect(page.getByRole("heading", { name: "Who Does What" }).first()).toBeVisible();
  await expect(page.locator("[data-answer]").first()).toBeVisible();
});
