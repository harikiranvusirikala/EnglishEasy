import { expect, test, type Page } from "@playwright/test";
import { SETTINGS_KEY } from "../src/learning/settings";
import { installSpeechStub } from "./speech-stub";

test.skip(({ isMobile }) => !isMobile, "speaking is checked on the phone project");

const SHOTS = "test-results/screenshots";
const MIC_HELP_ID = "mic-permission-help";

const next = (page: Page, name: RegExp = /^Continue/) => page.getByRole("button", { name }).click();
const check = async (page: Page) => {
  await page.getByRole("button", { name: /^Check/ }).click();
  await next(page);
};
const transcript = (page: Page, text: string | string[]) => page.evaluate((t) => void ((window as unknown as { __nextTranscript: unknown }).__nextTranscript = t), text);

async function settings(page: Page, extra: object = {}) {
  await installSpeechStub(page);
  await page.addInitScript(([key, value]) => localStorage.setItem(key, JSON.stringify(value)), [SETTINGS_KEY, { dismissed: [MIC_HELP_ID], ...extra }] as const);
}

/** Day 1 up to the Repeat activity: Learn, Practice, then the listening question. */
async function toRepeat(page: Page) {
  await page.goto("/learn/play?l=sentence-basics");
  await next(page, /^Start/);
  for (let i = 0; i < 6; i++) await next(page); // 5 Learn cards and the Sound of the week
  await next(page, /^Start/);
  for (const name of ["I eat rice.", "speak", "They play cricket."]) {
    await page.getByRole("button", { name, exact: true }).click();
    await check(page);
  }
  const te = page.getByRole("group", { name: "Telugu" });
  const en = page.getByRole("group", { name: "English" });
  for (const [t, e] of [
    ["నేను అన్నం తింటాను.", "I eat rice."],
    ["నేను టీ తాగుతాను.", "I drink tea."],
    ["మేము తెలుగు మాట్లాడతాం.", "We speak Telugu."],
    ["వాళ్లు క్రికెట్ ఆడతారు.", "They play cricket."],
  ]) {
    await te.getByRole("button", { name: t }).click();
    await en.getByRole("button", { name: e }).click();
  }
  await next(page);
  for (const words of [["I", "eat", "rice."], ["I", "drink", "tea."], ["I", "read", "the", "newspaper."]]) {
    for (const w of words) await page.getByRole("group", { name: "Words" }).getByRole("button", { name: w, exact: true }).click();
    await check(page);
  }
  await page.getByRole("button", { name: "are", exact: true }).click();
  await check(page);
  await next(page); // section summary
  await next(page, /^Start/);
  await page.getByRole("button", { name: /^vest/ }).click(); // which word did you hear (one try)
  await check(page);
}

test("a good answer is Great!, then the next activity", async ({ page }) => {
  await settings(page, { learnIn: "en" });
  await toRepeat(page);
  await transcript(page, "I drink tea");
  await page.getByRole("button", { name: "Speak" }).click();
  await expect(page.getByText("Great!")).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/player-speak.png` });
  await next(page);
  await expect(page.getByText(/What do you drink/).first()).toBeVisible();
});

test("poor, then good; night mode", async ({ page }) => {
  await settings(page, { theme: "dark" });
  await toRepeat(page);
  await transcript(page, "banana");
  await page.getByRole("button", { name: "Speak" }).click();
  await expect(page.getByText("Try again", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: /^Continue/ })).toHaveCount(0);
  await page.screenshot({ path: `${SHOTS}/player-speak-night.png` });
  await transcript(page, ["I drink T", "I drink tea"]);
  await page.getByRole("button", { name: "Speak again" }).click();
  await expect(page.getByText("Great!")).toBeVisible();
});

test("two poor tries offer Choose instead, which arranges the words", async ({ page }) => {
  await settings(page);
  await toRepeat(page);
  await transcript(page, "banana");
  await page.getByRole("button", { name: "Speak" }).click();
  await page.getByRole("button", { name: "Speak again" }).click();
  await expect(page.getByText(/You can say/)).toBeVisible();
  await page.getByRole("button", { name: /^Choose instead/ }).click();
  for (const w of ["I", "drink", "tea."]) await page.getByRole("group", { name: "Words" }).getByRole("button", { name: w, exact: true }).click();
  await page.getByRole("button", { name: /^Check/ }).click();
  await expect(page.getByText("Correct!")).toBeVisible();
});

test("a refused microphone goes straight to choosing", async ({ page }) => {
  await settings(page, { learnIn: "en" });
  await toRepeat(page);
  await page.evaluate(() => void ((window as unknown as { __recognitionError: string }).__recognitionError = "not-allowed"));
  await page.getByRole("button", { name: "Speak" }).click();
  await expect(page.getByText(/microphone is not allowed/)).toBeVisible();
  await expect(page.getByRole("group", { name: "Words" })).toBeVisible();
  await expect(page.getByRole("button", { name: /^Speak/ })).toHaveCount(0);
});

test("the first time, the microphone card explains the permission", async ({ page }) => {
  await installSpeechStub(page);
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ learnIn: "en" })), [SETTINGS_KEY]);
  await toRepeat(page);
  await transcript(page, "I drink tea");
  await page.getByRole("button", { name: "Speak" }).click();
  await expect(page.getByRole("heading", { name: "Use the microphone" })).toBeVisible();
  await page.getByRole("button", { name: /^Got it/ }).click();
  await expect(page.getByText("Great!")).toBeVisible();
});

test("a situation is answered by voice", async ({ page }) => {
  await settings(page);
  await toRepeat(page);
  await transcript(page, "I drink tea");
  await page.getByRole("button", { name: "Speak" }).click();
  await next(page);
  await transcript(page, "I drink coffee please");
  await page.getByRole("button", { name: "Speak" }).click();
  await expect(page.getByText("Great!")).toBeVisible();
});

test("'I can't speak now' turns speaking into choosing", async ({ page }) => {
  await settings(page, { noSpeaking: true });
  await toRepeat(page);
  await expect(page.getByRole("group", { name: "Words" })).toBeVisible();
  await expect(page.getByRole("button", { name: /^Speak/ })).toHaveCount(0);
});
