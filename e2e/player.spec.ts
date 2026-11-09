import { expect, test, type Page } from "@playwright/test";
import { SETTINGS_KEY } from "../src/learning/settings";

test.skip(({ isMobile }) => !isMobile, "the player is checked on the phone project");

const SHOTS = "test-results/screenshots";

const next = (page: Page, name: RegExp = /^Continue/) => page.getByRole("button", { name }).click();

async function toPractice(page: Page) {
  await page.goto("/learn/play?l=sentence-basics");
  await next(page, /^Start/);
  for (let i = 0; i < 5; i++) await next(page); // 2 explain cards, 2 don't-say cards, the Sound of the week
  await next(page, /^Start/);
}

const PAIRS = [
  ["నేను అన్నం తింటాను.", "I eat rice."],
  ["నేను టీ తాగుతాను.", "I drink tea."],
  ["మేము తెలుగు మాట్లాడతాం.", "We speak Telugu."],
  ["వాళ్లు క్రికెట్ ఆడతారు.", "They play cricket."],
];

async function matchAll(page: Page, shot = false) {
  const te = page.getByRole("group", { name: "Telugu" });
  const en = page.getByRole("group", { name: "English" });
  for (const [i, [t, e]] of PAIRS.entries()) {
    await te.getByRole("button", { name: t }).click();
    if (i === 1) {
      await en.getByRole("button", { name: "They play cricket." }).click(); // a wrong pair, then the right one
      await te.getByRole("button", { name: t }).click();
    }
    await en.getByRole("button", { name: e }).click();
    if (shot && i === 1) await page.screenshot({ path: `${SHOTS}/player-match.png` });
  }
  await next(page);
}

async function buildSentence(page: Page, words: string[], shot?: string) {
  const bank = page.getByRole("group", { name: "Words" });
  for (const [i, w] of words.entries()) {
    await bank.getByRole("button", { name: w, exact: true }).click();
    if (shot && i === 1) {
      await page.getByRole("button", { name: /^Hint/ }).click();
      await page.screenshot({ path: `${SHOTS}/${shot}.png` });
    }
  }
  await page.getByRole("button", { name: /^Check/ }).click();
  await expect(page.getByText("Correct!")).toBeVisible();
  await next(page);
}

test("Day 1: Learn cards, first practice questions and the section summary", async ({ page }) => {
  await page.goto("/learn/play?l=sentence-basics");
  await next(page, /^Start/);
  await expect(page.getByRole("heading", { name: /^ఎవరు/ })).toBeVisible(); // Telugu mode by default
  await expect(page.getByText("Who", { exact: true }).first()).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/player-explain.png` });
  for (let i = 0; i < 5; i++) await next(page);
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

  await matchAll(page, true);
  await buildSentence(page, ["I", "eat", "rice."], "player-arrange");
  await buildSentence(page, ["I", "drink", "tea."]);
  await buildSentence(page, ["I", "read", "the", "newspaper."]); // build what you hear
  await page.getByRole("button", { name: "are", exact: true }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await expect(page.getByText("We speak Telugu.")).toBeVisible();
  await next(page);
  await expect(page.getByText(/7 \/ 8/)).toBeVisible(); // the match had one wrong pair
  await page.screenshot({ path: `${SHOTS}/player-summary.png` });
});

test("wrong twice shows the answer, in English mode too", async ({ page }) => {
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ learnIn: "en" })), [SETTINGS_KEY]);
  await toPractice(page);
  await expect(page.locator('[lang="te"]')).toHaveCount(0);
  await page.getByRole("button", { name: "I rice eat." }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await expect(page.getByText("Almost")).toBeVisible();
  await next(page, /^Try again/);
  await page.getByRole("button", { name: "I rice eat." }).click();
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

test("night mode: arrange and match", async ({ page }) => {
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ theme: "dark" })), [SETTINGS_KEY]);
  await toPractice(page);
  for (const name of ["I eat rice.", "speak", "They play cricket."]) {
    await page.getByRole("button", { name, exact: true }).click();
    await page.getByRole("button", { name: /^Check/ }).click();
    await next(page);
  }
  const te = page.getByRole("group", { name: "Telugu" });
  const en = page.getByRole("group", { name: "English" });
  await te.getByRole("button", { name: PAIRS[0][0] }).click();
  await en.getByRole("button", { name: PAIRS[1][1] }).click(); // wrong pair
  await te.getByRole("button", { name: PAIRS[1][0] }).click();
  await en.getByRole("button", { name: PAIRS[1][1] }).click();
  await page.screenshot({ path: `${SHOTS}/player-match-night.png` });
  for (const [t, e] of [PAIRS[0], PAIRS[2], PAIRS[3]]) {
    await te.getByRole("button", { name: t }).click();
    await en.getByRole("button", { name: e }).click();
  }
  await next(page);
  const bank = page.getByRole("group", { name: "Words" });
  await bank.getByRole("button", { name: "eat", exact: true }).click();
  await page.getByRole("button", { name: /^Hint/ }).click();
  await page.screenshot({ path: `${SHOTS}/player-arrange-night.png` });
});

test("the review page shows the whole day with answers marked", async ({ page }) => {
  await page.goto("/dev/lesson/sentence-basics");
  await expect(page.getByRole("heading", { name: "Who Does What" }).first()).toBeVisible();
  await expect(page.locator("[data-answer]").first()).toBeVisible();
});
