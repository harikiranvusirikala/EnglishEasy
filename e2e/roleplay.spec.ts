import { expect, test, type Page } from "@playwright/test";
import { SETTINGS_KEY } from "../src/learning/settings";
import type { PlayableDay } from "../src/content/types";
import { installSpeechStub, spoken } from "./speech-stub";

test.skip(({ isMobile }) => !isMobile, "role play is checked on the phone project");

const SHOTS = "test-results/screenshots";
const MIC_HELP_ID = "mic-permission-help";

const next = (page: Page, name: RegExp = /^Continue/) => page.getByRole("button", { name }).click();
const transcript = (page: Page, text: string) => page.evaluate((t) => void ((window as unknown as { __nextTranscript: unknown }).__nextTranscript = t), text);

async function setup(page: Page, extra: object = {}) {
  await installSpeechStub(page);
  await page.addInitScript(([key, value]) => localStorage.setItem(key, JSON.stringify(value)), [SETTINGS_KEY, { dismissed: [MIC_HELP_ID], learnIn: "en", ...extra }] as const);
}

/** Day 1 cut down to its role play (the earlier sections are covered by other specs). */
async function roleplayOnly(page: Page) {
  await page.route("**/content/sentence-basics.json", async (route) => {
    const day = (await (await route.fetch()).json()) as PlayableDay;
    day.sections = day.sections.filter((s) => s.kind === "roleplay" || s.kind === "wrapup");
    await route.fulfill({ json: day });
  });
  await page.goto("/learn/play?l=sentence-basics");
  await next(page, /^Start/);
}

test("opening a role play reads its scene by itself, then the partner's first line", async ({ page }) => {
  await setup(page);
  await roleplayOnly(page);
  await expect.poll(async () => (await spoken(page)).map((s) => s.text).join(" | "), { timeout: 10_000 }).toContain("What do you drink in the morning?");
  const texts = (await spoken(page)).map((s) => s.text).join(" | ");
  expect(texts).toContain("Salma, a friend, asks about your morning");
  expect(texts.indexOf("Salma, a friend")).toBeLessThan(texts.indexOf("What do you drink in the morning?"));
});

test("Day 1's role play by tapping, with a correction and the summary", async ({ page }) => {
  await setup(page);
  await roleplayOnly(page);
  await expect(page.getByText("What do you drink in the morning?")).toBeVisible();
  await expect.poll(async () => (await spoken(page)).map((s) => s.text)).toContain("What do you drink in the morning?");
  await page.screenshot({ path: `${SHOTS}/roleplay.png` });

  await expect(page.getByRole("button", { name: /^Telugu meaning/ })).toHaveCount(0); // offered in Telugu mode only
  await page.getByRole("button", { name: /^Hint/ }).click();
  await expect(page.getByText(/Who first, then the action/)).toBeVisible();

  await expect(page.getByRole("button", { name: "I tea drink.", exact: true })).toHaveCount(0); // replies hidden: speak first
  await next(page, /^Show replies/);
  await page.getByRole("button", { name: "I tea drink.", exact: true }).click();
  await expect(page.getByText("Almost")).toBeVisible();
  await expect(page.getByText("A better reply:")).toBeVisible();
  await next(page);
  await expect(page.getByText("And what do you eat?")).toBeVisible();
  await next(page, /^Show replies/);
  await page.getByRole("button", { name: "I eat rice.", exact: true }).click();
  await expect(page.getByRole("button", { name: /^Continue/ })).toHaveCount(0); // a good reply goes straight on
  await expect(page.getByText("Nice. And what do you read?")).toBeVisible();
  await next(page, /^Show replies/);
  await page.getByRole("button", { name: "I read the newspaper.", exact: true }).click();

  await expect(page.getByRole("heading", { name: "Role play complete" })).toBeVisible();
  await expect(page.getByTestId("score-conversation")).toContainText("7 / 10");
  await expect.poll(() => page.locator("main").evaluate((m) => m.scrollTop)).toBe(0); // the summary starts at its top
  await page.screenshot({ path: `${SHOTS}/roleplay-summary.png` });
  await next(page);
  await expect(page.getByRole("button", { name: /^(Finish|Continue to Day 2)/ })).toBeVisible();
});

test("Day 1's role play by voice; night mode", async ({ page }) => {
  await setup(page, { theme: "dark" });
  await roleplayOnly(page);
  await transcript(page, "banana");
  await page.getByRole("button", { name: "Speak" }).click();
  await expect(page.getByText("Try again", { exact: true })).toBeVisible();
  await transcript(page, "I drink tea");
  await page.getByRole("button", { name: "Speak again" }).click();
  await expect(page.getByText("And what do you eat?")).toBeVisible(); // the partner answers by itself
  await page.screenshot({ path: `${SHOTS}/roleplay-night.png` });
  await transcript(page, "I eat idli");
  await page.getByRole("button", { name: "Speak" }).click();
  await expect(page.getByText("Nice. And what do you read?")).toBeVisible(); // the next line, before the next transcript is set
  await transcript(page, "I read the newspaper");
  await page.getByRole("button", { name: "Speak" }).click();
  await expect(page.getByTestId("score-speaking")).toContainText("10 / 10");
  await expect(page.getByTestId("score-conversation")).toContainText("10 / 10");
  await page.screenshot({ path: `${SHOTS}/roleplay-summary-night.png` });
});

test("a fixture dialogue plays both voices with no words, asks question 1 by ear, then shows the words", async ({ page }) => {
  await setup(page);
  const day: PlayableDay = {
    id: "fixture-dialogue",
    kind: "conversation",
    title: { en: "Fixture", te: "ఉదాహరణ" },
    sections: [
      {
        kind: "practice",
        activities: [
          {
            id: "fixture-dialogue.d1",
            type: "dialogue",
            title: { en: "At the shop", te: "దుకాణంలో" },
            lines: [
              { speaker: { en: "Asha", te: "ఆశ" }, voice: "a", en: "Hello, Ravi.", te: "హలో రవి." },
              { speaker: { en: "Ravi", te: "రవి" }, voice: "b", en: "Hello, Asha.", te: "హలో ఆశ." },
            ],
            questions: [{ prompt: { en: "Who says hello first?", te: "ముందు ఎవరు హలో అంటారు?" }, options: ["Asha", "Ravi"], answer: 0 }],
          },
        ],
      },
      { kind: "wrapup", activities: [] },
    ],
  };
  await page.route("**/content/fixture-dialogue.json", (route) => route.fulfill({ json: day }));
  await page.goto("/learn/play?l=fixture-dialogue");
  await next(page, /^Start/);

  await expect(page.getByText(/^Line \d of 2$/)).toBeVisible();
  await expect(page.getByText("Hello, Asha.", { exact: true })).toHaveCount(0); // heard, not read
  await expect.poll(async () => (await spoken(page)).filter((s) => s.text.startsWith("Hello")).length).toBe(2);
  const [first, second] = (await spoken(page)).filter((s) => s.text.startsWith("Hello"));
  expect(first.text).toBe("Hello, Ravi.");
  expect(second.text).toBe("Hello, Asha.");
  expect(second.voiceURI).not.toBe(first.voiceURI);

  await next(page);
  await expect(page.getByText("Who says hello first?")).toBeVisible();
  await page.getByRole("button", { name: "Asha", exact: true }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await expect(page.getByText("Correct!")).toBeVisible();
  await next(page);
  await expect(page.getByText("Hello, Asha.", { exact: true })).toBeVisible(); // now the words
});
