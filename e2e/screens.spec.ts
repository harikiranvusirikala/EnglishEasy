import { expect, test, type Page } from "@playwright/test";
import type { Activity, PlayableDay } from "../src/content/types";
import { PROGRESS_KEY } from "../src/learning/progress";
import { SETTINGS_KEY } from "../src/learning/settings";
import { installSpeechStub } from "./speech-stub";

// Every lesson screen in its current look, for design reviews (test-results/screenshots/screen-*.png). Each also checks
// the screen's main parts are there.

test.skip(({ isMobile }) => !isMobile, "the pictures are phone screens");

const SHOTS = "test-results/screenshots";
const at = "2026-11-08T08:00:00.000Z";

async function settings(page: Page, value: object) {
  await page.addInitScript(([key, v]) => localStorage.setItem(key, v), [SETTINGS_KEY, JSON.stringify({ theme: "light", onboarded: true, dismissed: ["mic-permission-help", "install-card"], ...value })] as const);
}

/** Day 1 finished, for the screens that need a finished lesson (My Sentences). */
async function day1Done(page: Page) {
  const progress = { version: 1, activities: {}, completed: { "sentence-basics": { at, correct: 15, total: 17 } }, mistakes: {}, practiceDays: ["2026-11-08"], tracks: [], tracksAsked: false, updatedAt: at };
  await page.addInitScript(([key, v]) => localStorage.setItem(key, v), [PROGRESS_KEY, JSON.stringify(progress)] as const);
}

/** Day 1 cut down to the activities `keep` picks, in one section of `kind`. */
async function only(page: Page, kind: string, keep: (a: Activity) => boolean, count = 1) {
  await page.route("**/content/sentence-basics.json", async (route) => {
    const day = (await (await route.fetch()).json()) as PlayableDay;
    day.sections = day.sections
      .filter((s) => s.kind === kind || s.kind === "wrapup")
      .map((s) => (s.kind === kind ? { ...s, activities: s.activities.filter(keep).slice(0, count) } : s));
    await route.fulfill({ json: day });
  });
  await page.goto("/learn/play?l=sentence-basics");
  await page.getByRole("button", { name: /^Start/ }).click();
}

const shot = (page: Page, name: string) => page.screenshot({ path: `${SHOTS}/screen-${name}.png` });

test("role play in Telugu mode, the meaning shown", async ({ page }) => {
  await installSpeechStub(page);
  await settings(page, { learnIn: "te" });
  await only(page, "roleplay", () => true);
  await page.getByRole("button", { name: "Telugu meaning" }).click();
  await expect(page.getByRole("button", { name: "Telugu meaning" })).toHaveAttribute("aria-pressed", "true");
  await shot(page, "roleplay-te");
});

test("role play after a not-good reply", async ({ page }) => {
  await installSpeechStub(page);
  await settings(page, { learnIn: "en" });
  await only(page, "roleplay", () => true);
  await page.getByRole("group", { name: "Speak your reply, or tap one." }).getByRole("button").filter({ hasNotText: /^I drink tea\.$/ }).first().click();
  await expect(page.getByText("Better reply:")).toBeVisible();
  await shot(page, "roleplay-better");
});

test("Learn: examples", async ({ page }) => {
  await settings(page, { learnIn: "te" });
  await only(page, "learn", (a) => a.type === "explain");
  const examples = page.getByRole("listitem").filter({ has: page.getByRole("button", { name: "Listen" }) });
  await examples.last().scrollIntoViewIfNeeded();
  await shot(page, "examples");
});

test("Learn: Don't say / Say", async ({ page }) => {
  await settings(page, { learnIn: "te" });
  await only(page, "learn", (a) => a.type === "dontSay");
  await expect(page.getByRole("button", { name: "Listen" })).toBeVisible();
  await shot(page, "dontsay");
});

test("a section summary", async ({ page }) => {
  await settings(page, { learnIn: "en" });
  await only(page, "practice", (a) => a.type === "choose");
  await page.getByRole("button", { name: "I eat rice." }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await page.getByRole("button", { name: /^Continue/ }).click();
  await expect(page.getByRole("heading", { name: "Practice complete" })).toBeVisible();
  await shot(page, "summary");
});

test("a Conversation Day dialogue", async ({ page }) => {
  await installSpeechStub(page);
  await settings(page, { learnIn: "te" });
  await page.goto("/learn/play?l=w2-conversation");
  await page.getByRole("button", { name: /^Start/ }).click();
  await expect(page.getByText(/^1 \/ \d$/)).toBeVisible({ timeout: 30_000 }); // every line heard, the first question
  await page.getByRole("button", { name: "Listen" }).first().scrollIntoViewIfNeeded();
  await shot(page, "dialogue");
});

test("My Sentences", async ({ page }) => {
  await settings(page, { learnIn: "te" });
  await day1Done(page);
  await page.goto("/learn/practice/sentences");
  await expect(page.getByRole("button", { name: /^Say it/ }).first()).toBeVisible();
  await shot(page, "my-sentences");
});

test("the lesson page's key sentences", async ({ page }) => {
  await settings(page, { learnIn: "te" });
  await page.goto("/lessons/sentence-basics");
  const listen = page.getByRole("button", { name: "Listen" }).first();
  await listen.scrollIntoViewIfNeeded();
  await shot(page, "lesson-page");
});
