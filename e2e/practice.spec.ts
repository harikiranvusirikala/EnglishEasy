import { expect, test, type Page } from "@playwright/test";
import { PROGRESS_KEY } from "../src/learning/progress";
import { SETTINGS_KEY } from "../src/learning/settings";

test.skip(({ isMobile }) => !isMobile, "Practice is checked on the phone project");

const SHOTS = "test-results/screenshots";
const NOW = "2026-11-07T10:00:00.000Z";

/** Day 1 finished, with one mistake (its first practice question). */
async function finishedWithMistake(page: Page, theme: "light" | "dark" = "light") {
  await page.addInitScript(
    ([settingsKey, progressKey, now, t]) => {
      if (localStorage.getItem(progressKey)) return;
      localStorage.setItem(settingsKey, JSON.stringify({ learnIn: "en", onboarded: true, theme: t }));
      localStorage.setItem(
        progressKey,
        JSON.stringify({
          version: 1,
          activities: {},
          completed: { "sentence-basics": { at: now, correct: 10, total: 11 } },
          mistakes: { "sentence-basics.p1": now },
          practiceDays: [],
          tracks: [],
          tracksAsked: false,
          updatedAt: now,
        }),
      );
    },
    [SETTINGS_KEY, PROGRESS_KEY, NOW, theme],
  );
}

test("a mistake appears in Practice again and disappears after a correct answer", async ({ page }) => {
  await finishedWithMistake(page);
  await page.goto("/learn/practice");
  await expect(page.getByRole("heading", { name: "Practice" })).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/practice.png`, fullPage: true });

  await page.getByRole("link", { name: /Practice again/ }).click();
  await expect(page.getByText("1 left")).toBeVisible();
  await page.getByRole("button", { name: "Start" }).click();
  await page.getByRole("button", { name: "I eat rice." }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await page.getByRole("button", { name: /^Continue/ }).click();
  await expect(page.getByText("Practice complete")).toBeVisible();
  await page.getByRole("button", { name: "Done" }).click();
  await expect(page.getByText("0 left")).toBeVisible();

  await page.reload();
  await expect(page.getByText("Nothing to practice again. Well done!")).toBeVisible();
});

test("My Sentences lists Day 1's key sentences", async ({ page }) => {
  await finishedWithMistake(page);
  await page.goto("/learn/practice/sentences");
  for (const sentence of ["I eat rice.", "We speak Telugu.", "They play cricket.", "I read the newspaper."]) {
    await expect(page.getByText(sentence, { exact: true })).toBeVisible();
  }
  await page.getByRole("button", { name: "Say it: I eat rice." }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("button", { name: "Close" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("Role plays and Speaking only open from finished lessons; tracks stay hidden at launch", async ({ page }) => {
  await finishedWithMistake(page);
  await page.goto("/learn/practice/roleplays");
  await expect(page.getByRole("button", { name: /Who Does What|Sentence/ }).first()).toBeVisible();
  await page.goto("/learn/practice/speaking");
  await expect(page.getByRole("button", { name: "Start" })).toBeVisible();
  await page.goto("/learn");
  await expect(page.getByText("Want extra lessons for your life?")).toHaveCount(0);
  await page.goto("/learn/settings");
  await expect(page.getByRole("heading", { name: "My tracks" })).toHaveCount(0);
});
