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

/** A day (Day 1 by default) cut down to the activities `keep` picks, in one section of `kind`. */
async function only(page: Page, kind: string, keep: (a: Activity) => boolean, count = 1, dayId = "sentence-basics") {
  await page.route(`**/content/${dayId}.json`, async (route) => {
    const day = (await (await route.fetch()).json()) as PlayableDay;
    day.sections = day.sections
      .filter((s) => s.kind === kind || s.kind === "wrapup")
      .map((s) => (s.kind === kind ? { ...s, activities: s.activities.filter(keep).slice(0, count) } : s));
    await route.fulfill({ json: day });
  });
  await page.goto(`/learn/play?l=${dayId}`);
  await page.getByRole("button", { name: /^Start/ }).click();
}

/** Answer the question on screen: try each option until Continue appears. */
async function answer(page: Page, options: string[]) {
  for (const option of options) {
    await page.getByRole("button", { name: option, exact: true }).click();
    await page.getByRole("button", { name: /^Check/ }).click();
    const tryAgain = page.getByRole("button", { name: /^Try again/ });
    if (await tryAgain.isVisible()) await tryAgain.click();
    else break;
  }
  await page.getByRole("button", { name: /^Continue/ }).click();
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
  await page.getByRole("button", { name: /^Show replies/ }).click();
  await page.getByRole("button", { name: "I tea drink.", exact: true }).click();
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

test("a Conversation Day dialogue: listen first, question 1 by ear, then the words", async ({ page }) => {
  await installSpeechStub(page);
  await settings(page, { learnIn: "te" });
  await page.goto("/learn/play?l=w2-conversation");
  await page.getByRole("button", { name: /^Start/ }).click();
  await expect(page.getByText(/^Line \d+ of \d+$/)).toBeVisible();
  await shot(page, "dialogue-listen");
  await page.getByRole("button", { name: /^Continue/ }).click();
  await expect(page.getByText(/no words yet/)).toBeVisible();
  await shot(page, "dialogue-ear");
  await answer(page, ["At a wedding", "At a bus stand", "At a hospital"]);
  await expect(page.getByText(/^2 \/ \d$/)).toBeVisible();
  await page.getByRole("button", { name: "Listen" }).first().scrollIntoViewIfNeeded();
  await shot(page, "dialogue");
});

test("role play: replies hidden, speak first", async ({ page }) => {
  await installSpeechStub(page);
  await settings(page, { learnIn: "en" });
  await only(page, "roleplay", () => true);
  await page.getByRole("button", { name: /^Hint/ }).click();
  await expect(page.getByText("Your turn. Say your reply.")).toBeVisible();
  await shot(page, "roleplay-hidden");
});

test("role play: the partner reacts to a manners slip", async ({ page }) => {
  await installSpeechStub(page);
  await settings(page, { learnIn: "en" });
  await only(page, "roleplay", () => true);
  await page.getByRole("button", { name: /^Show replies/ }).click();
  await page.getByRole("button", { name: "Why do you ask?", exact: true }).click();
  await expect(page.getByText("Oh, just asking! I like tea.")).toBeVisible();
  await shot(page, "roleplay-react");
});

test("Sound of the week: the card, and which word did you hear", async ({ page }) => {
  await installSpeechStub(page);
  await settings(page, { learnIn: "te" });
  await only(page, "learn", (a) => a.type === "sound");
  await expect(page.getByText("v and w")).toBeVisible();
  await shot(page, "sound-card");
});

test("which word did you hear", async ({ page }) => {
  await installSpeechStub(page);
  await settings(page, { learnIn: "te" });
  await only(page, "speak", (a) => a.type === "soundPair");
  await page.getByRole("button", { name: /^vest/ }).click();
  await shot(page, "sound-pair");
});

test("build what you hear", async ({ page }) => {
  await installSpeechStub(page);
  await settings(page, { learnIn: "te" });
  await only(page, "practice", (a) => a.type === "arrange" && a.listen === true);
  await expect(page.getByText("విని, వాక్యాన్ని పేర్చండి.")).toBeVisible();
  await shot(page, "dictate");
});

test("say it in steps", async ({ page }) => {
  await installSpeechStub(page);
  await settings(page, { learnIn: "te" });
  await only(page, "speak", (a) => a.type === "repeat" && Array.isArray(a.steps), 1, "how-much-are-they");
  await expect(page.getByText("this pumpkin?")).toBeVisible();
  await shot(page, "repeat-steps");
});

test("daily review: the Home card and the review page", async ({ page }) => {
  await settings(page, { learnIn: "en" });
  const review = Object.fromEntries([0, 1, 2].map((k) => [`sentence-basics.k${k}`, { box: 0, due: "2000-01-01", at }]));
  const progress = { version: 1, activities: {}, completed: { "sentence-basics": { at, correct: 15, total: 17 } }, mistakes: {}, practiceDays: ["2026-11-08"], tracks: [], tracksAsked: false, review, updatedAt: at };
  await page.addInitScript(([key, v]) => localStorage.setItem(key, v), [PROGRESS_KEY, JSON.stringify(progress)] as const);
  await page.goto("/learn");
  await expect(page.getByText("3 due")).toBeVisible();
  await page.getByRole("link", { name: /Daily review/ }).scrollIntoViewIfNeeded();
  await shot(page, "home-review");
  await page.getByRole("link", { name: /Daily review/ }).click();
  await expect(page.getByText(/3 sentences to review today/)).toBeVisible();
  await page.getByRole("button", { name: /^Start/ }).click();
  await expect(page.getByText("Listen. What does it mean?")).toBeVisible();
  await shot(page, "review-run");
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
