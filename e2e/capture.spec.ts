import { expect, test, type Page } from "@playwright/test";
import type { Activity, PlayableDay } from "../src/content/types";
import { PROGRESS_KEY } from "../src/learning/progress";
import { SETTINGS_KEY } from "../src/learning/settings";
import { installSpeechStub } from "./speech-stub";

// Clean pictures of the main screens, by day, for the landing page, the README and GitHub's social preview
// (copied from test-results/screenshots/capture-*.png into docs/screenshots/, then `npm run images`).

test.skip(({ isMobile }) => !isMobile, "the pictures are phone screens");

const SHOTS = "test-results/screenshots";
const MIC_HELP_ID = "mic-permission-help";

async function settings(page: Page, value: object) {
  await page.addInitScript(([key, v]) => localStorage.setItem(key, v), [SETTINGS_KEY, JSON.stringify({ theme: "light", onboarded: true, dismissed: [MIC_HELP_ID, "install-card"], ...value })] as const);
}

/** Day 1 cut down to the activities `keep` picks, in one section of `kind` (so the picture is one step away). */
async function only(page: Page, kind: string, keep: (a: Activity) => boolean, adjust: (a: Activity) => Activity = (a) => a) {
  await page.route("**/content/sentence-basics.json", async (route) => {
    const day = (await (await route.fetch()).json()) as PlayableDay;
    day.sections = day.sections
      .filter((s) => s.kind === kind || s.kind === "wrapup")
      .map((s) => (s.kind === kind ? { ...s, activities: s.activities.filter(keep).slice(0, 1).map(adjust) } : s));
    await route.fulfill({ json: day });
  });
  await page.goto("/learn/play?l=sentence-basics");
  await page.getByRole("button", { name: /^Start/ }).click();
}

const shot = (page: Page, name: string) => page.screenshot({ path: `${SHOTS}/capture-${name}.png` });

test("Home with a lesson under way (Telugu mode)", async ({ page }) => {
  await settings(page, { learnIn: "te" });
  const progress = {
    version: 1,
    activities: { "sentence-basics.e1": { correct: true, attempts: 1, at: "2026-11-08T08:00:00.000Z" } },
    completed: {},
    mistakes: {},
    practiceDays: ["2026-11-07", "2026-11-08"],
    position: { dayId: "sentence-basics", activityId: "sentence-basics.e2", at: "2026-11-08T08:00:00.000Z" },
    tracks: [],
    tracksAsked: false,
    updatedAt: "2026-11-08T08:00:00.000Z",
  };
  await page.addInitScript(([key, v]) => localStorage.setItem(key, v), [PROGRESS_KEY, JSON.stringify(progress)] as const);
  await page.goto("/learn");
  await expect(page.getByRole("link", { name: /^Continue Lesson|^Start/ })).toBeVisible();
  await shot(page, "home");
});

test("the Telugu explanation and the pattern", async ({ page }) => {
  await settings(page, { learnIn: "te" });
  await page.goto("/learn/play?l=sentence-basics");
  await page.getByRole("button", { name: /^Start/ }).click();
  await expect(page.getByText("Who", { exact: true }).first()).toBeVisible();
  await shot(page, "explain");
});

test("a question answered right", async ({ page }) => {
  await settings(page, { learnIn: "en" });
  // The right answer in the middle for the picture (the generator shuffles options), so the answer bar never covers it.
  const middle = (a: Activity): Activity => {
    if (a.type !== "choose") return a;
    const right = a.options[a.answer];
    const others = a.options.filter((_, i) => i !== a.answer);
    return { ...a, options: [others[0], right, ...others.slice(1)], answer: 1 };
  };
  await only(page, "practice", (a) => a.type === "choose", middle);
  await page.getByRole("button", { name: "I eat rice." }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await expect(page.getByText("Correct!")).toBeVisible();
  await shot(page, "question");
});

test("word tiles", async ({ page }) => {
  await settings(page, { learnIn: "en" });
  await only(page, "practice", (a) => a.type === "translate");
  const bank = page.getByRole("group", { name: "Words" });
  await bank.getByRole("button").first().waitFor();
  await bank.getByRole("button", { name: "I", exact: true }).click();
  await shot(page, "tiles");
});

test("speaking", async ({ page }) => {
  await installSpeechStub(page);
  await settings(page, { learnIn: "en" });
  await only(page, "speak", (a) => a.type === "repeat");
  await expect(page.getByRole("button", { name: "Speak" })).toBeVisible();
  await shot(page, "speak");
});

test("a role play", async ({ page }) => {
  await installSpeechStub(page);
  await settings(page, { learnIn: "en" });
  await only(page, "roleplay", () => true);
  await expect(page.getByText("What do you drink in the morning?")).toBeVisible();
  // The role play's new moment: speak first, the replies one tap away.
  await expect(page.getByText("Your turn. Say your reply.")).toBeVisible();
  await shot(page, "roleplay");
});

test("lesson complete", async ({ page, request }) => {
  await settings(page, { learnIn: "en" });
  // Every activity of Day 1 done (as if just played), so the player opens on the real complete screen with real counts.
  const day = (await (await request.get("/content/sentence-basics.json")).json()) as PlayableDay;
  const at = "2026-11-08T08:00:00.000Z";
  const activities = Object.fromEntries(day.sections.flatMap((x) => x.activities).map((a) => [a.id, { correct: true, attempts: 1, at }]));
  const progress = { version: 1, activities, completed: {}, mistakes: {}, practiceDays: ["2026-11-08"], tracks: [], tracksAsked: false, updatedAt: at };
  await page.addInitScript(([key, v]) => localStorage.setItem(key, v), [PROGRESS_KEY, JSON.stringify(progress)] as const);
  await page.goto("/learn/play?l=sentence-basics");
  await expect(page.getByRole("heading", { name: "Day 1 Complete!" })).toBeVisible();
  await shot(page, "complete");
});

test("the journey", async ({ page }) => {
  await settings(page, { learnIn: "en" });
  await page.goto("/learn/journey");
  await expect(page.getByRole("button", { name: /English Foundations.*Week 1/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Who Does What/ })).toBeVisible(); // a day not started shows no percent
  await shot(page, "journey");
});
