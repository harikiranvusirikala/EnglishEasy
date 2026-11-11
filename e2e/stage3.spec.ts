import { expect, test, type Page } from "@playwright/test";
import type { Activity } from "../src/content/types";
import { SETTINGS_KEY } from "../src/learning/settings";
import { accentDialogue, samplePassage, sampleStory } from "../test/fixtures/stage3";
import { installSpeechStub } from "./speech-stub";

test.skip(({ isMobile }) => !isMobile, "the player is checked on the phone project");

// Stage 3's new screens (owner, 2026-11-11) in the real player, before any Stage 3 day exists: a released day's file is
// swapped for one practice section holding the sample activity. Screenshots for the owner's review.
const SHOTS = "test-results/screenshots";

async function play(page: Page, activity: Activity, learnIn: "te" | "en", { holdVoice = false } = {}) {
  await installSpeechStub(page);
  if (holdVoice) {
    // The stub ends every line at once; for the "playing" picture the voice keeps talking.
    await page.addInitScript(() => {
      const s = window.speechSynthesis as unknown as { speak: (u: { text: string }) => void };
      s.speak = (u) => void ((window as unknown as { __spoken: unknown[] }).__spoken.push({ text: u.text }));
    });
  }
  await page.addInitScript(([key, value]) => localStorage.setItem(key, value), [SETTINGS_KEY, JSON.stringify({ learnIn, onboarded: true, autoPlay: true })] as const);
  await page.route("**/content/w40-review.json", (route) =>
    route.fulfill({ json: { id: "w40-review", kind: "review", title: { en: "Stage 2 Review", te: "పునశ్చరణ" }, sections: [{ kind: "practice", activities: [activity] }] } }),
  );
  await page.goto("/learn/play?l=w40-review");
  await page.getByRole("button", { name: /^Start/ }).click();
}

const answer = async (page: Page, option: string) => {
  await page.getByRole("button", { name: option }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await page.getByRole("button", { name: /^Continue/ }).click();
};

test("story: heard first with the teller, question 1 by ear, then paragraphs", async ({ page }) => {
  await play(page, sampleStory, "te", { holdVoice: true });
  await expect(page.getByText("Part 1 of 6")).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/stage3-story-1-listen.png` });
  await page.getByRole("button", { name: /^Continue/ }).click();
  await expect(page.getByText("ఈ కథ దేని గురించి?")).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/stage3-story-2-by-ear.png` });
  await answer(page, "A lost purse on a bus");
  await expect(page.getByText("Told by Sarala")).toBeVisible();
  await page.getByRole("button", { name: "Telugu meaning" }).nth(1).click();
  await page.screenshot({ path: `${SHOTS}/stage3-story-3-read.png` });
});

test("passage: the letter first, then questions with the letter folded above", async ({ page }) => {
  await play(page, samplePassage, "en");
  await expect(page.getByText("Dear Customer,")).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/stage3-passage-1-read.png` });
  await page.getByRole("button", { name: /^Questions/ }).click();
  await answer(page, "On 15 March");
  await page.getByRole("button", { name: "Your FD receipt and Aadhaar card" }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await expect(page.getByText("Correct!")).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/stage3-passage-2-question.png` });
});

test("accents: American and British lines in their own voices, each labelled", async ({ page }) => {
  await play(page, accentDialogue, "en");
  await page.getByRole("button", { name: /^Continue/ }).click();
  await answer(page, "The apartment office");
  await expect(page.getByText("British")).toBeVisible();
  const langs = await page.evaluate(() => (window as unknown as { __spoken: { text: string; lang: string }[] }).__spoken.map((s) => s.lang));
  expect(langs).toContain("en-US"); // no recording in e2e: the phone's American voice reads John
  await page.screenshot({ path: `${SHOTS}/stage3-accents.png` });
});

test("English explanations card (gallery: no Stage 3 lesson is released yet)", async ({ page }) => {
  await page.addInitScript(([key, value]) => localStorage.setItem(key, value), [SETTINGS_KEY, JSON.stringify({ learnIn: "te", onboarded: true })] as const);
  await page.goto("/dev/ui");
  const card = page.getByRole("region", { name: "Try explanations in English?" });
  await card.scrollIntoViewIfNeeded();
  await card.screenshot({ path: `${SHOTS}/stage3-english-card.png` });
  await card.getByRole("button", { name: /^Try English/ }).click();
  await expect(page.getByText(/Explanations are now in English/)).toBeVisible();
});
