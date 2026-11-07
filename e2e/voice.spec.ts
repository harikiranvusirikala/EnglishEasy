import { expect, test, type Page } from "@playwright/test";
import { SETTINGS_KEY } from "../src/learning/settings";
import { ANDROID_VOICES, clearSpoken, installSpeechStub, IPHONE_VOICES, spoken } from "./speech-stub";

test.skip(({ isMobile }) => !isMobile, "voice is checked on the phone project");

const SHOTS = "test-results/screenshots";
const EXAMPLE = "I eat rice.";
const BODY_TE = /^తెలుగులో$/; // the first Telugu run; "verb" after it is a separate English run

const start = (page: Page) => page.getByRole("button", { name: /^Start/ }).click();
const exampleRow = (page: Page) => page.getByRole("listitem").filter({ hasText: EXAMPLE }).first();

test("🔊 and 🐢 speak the sentence with the Indian-English voice, at the normal and slow rate", async ({ page }) => {
  await installSpeechStub(page);
  await page.goto("/learn/play?l=sentence-basics");
  await start(page);
  await clearSpoken(page);

  await exampleRow(page).getByRole("button", { name: "Listen", exact: true }).click();
  await exampleRow(page).getByRole("button", { name: "Listen slowly" }).click();
  expect(await spoken(page)).toEqual([
    { text: EXAMPLE, lang: "en-IN", rate: 0.9, pitch: 1, voiceURI: "in" },
    { text: EXAMPLE, lang: "en-IN", rate: 0.65, pitch: 1, voiceURI: "in" },
  ]);
});

test("a Telugu-mode explanation plays by itself as Telugu and English utterances", async ({ page }) => {
  await installSpeechStub(page);
  await page.goto("/learn/play?l=sentence-basics");
  await start(page); // the tap that lets sound play
  await expect.poll(async () => (await spoken(page)).length).toBeGreaterThan(1);
  const heard = await spoken(page);
  expect(heard[0]).toMatchObject({ lang: "te-IN", voiceURI: "te" });
  expect(heard[0].text).toMatch(BODY_TE);
  expect(heard[1]).toMatchObject({ text: "verb", lang: "en-IN", voiceURI: "in" });
  expect(heard.filter((u) => u.lang === "te-IN").length).toBeGreaterThan(1);
  expect(heard.filter((u) => u.lang === "en-IN" && u.voiceURI === "in").map((u) => u.text)).toContain("verb");
  expect(heard.filter((u) => u.lang === "en-IN").map((u) => u.text.trim())).toContain("I eat rice.");
});

test("an English-mode explanation is spoken in English only", async ({ page }) => {
  await installSpeechStub(page);
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ learnIn: "en" })), [SETTINGS_KEY]);
  await page.goto("/learn/play?l=sentence-basics");
  await start(page);
  await expect.poll(async () => (await spoken(page)).length).toBeGreaterThan(0);
  const heard = await spoken(page);
  expect(heard.every((u) => u.lang === "en-IN")).toBe(true);
  expect(heard[0].text).toMatch(/^In Telugu, the action word/);
});

test("with no Telugu voice only the English parts are spoken", async ({ page }) => {
  await installSpeechStub(page, IPHONE_VOICES);
  await page.goto("/learn/play?l=sentence-basics");
  await start(page);
  await expect.poll(async () => (await spoken(page)).length).toBeGreaterThan(0);
  const heard = await spoken(page);
  expect(heard.every((u) => u.lang === "en-IN" && u.voiceURI === "veena")).toBe(true);
  expect(heard.map((u) => u.text.trim())).toEqual(expect.arrayContaining(["verb", "I eat rice."]));
  expect(heard.some((u) => /[ఀ-౿]/.test(u.text))).toBe(false);
});

test("Auto-play off stops automatic speech, but 🔊 still speaks", async ({ page }) => {
  await installSpeechStub(page);
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ autoPlay: false })), [SETTINGS_KEY]);
  await page.goto("/learn/play?l=sentence-basics");
  await start(page);
  await page.getByRole("heading", { name: /^ఎవరు/ }).waitFor();
  await page.waitForTimeout(300);
  expect(await spoken(page)).toEqual([]);
  await exampleRow(page).getByRole("button", { name: "Listen", exact: true }).click();
  expect((await spoken(page)).map((u) => u.text)).toEqual([EXAMPLE]);
});

test("Settings → Voice: pick a voice and hear the sample; Telugu voice status", async ({ page }) => {
  await installSpeechStub(page);
  await page.goto("/learn/settings");
  await expect(page.getByRole("button", { name: "Google English (India) (en-IN)" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByTestId("telugu-voice-status")).toContainText("Found");
  await page.screenshot({ path: `${SHOTS}/settings-voice.png`, fullPage: true });

  await clearSpoken(page);
  await page.getByRole("button", { name: "English United States (en-US)" }).click();
  await expect(page.getByRole("button", { name: "English United States (en-US)" })).toHaveAttribute("aria-pressed", "true");
  expect(await spoken(page)).toMatchObject([{ voiceURI: "us", lang: "en-US", rate: 0.9 }]);
  await page.reload();
  await expect(page.getByRole("button", { name: "English United States (en-US)" })).toHaveAttribute("aria-pressed", "true");
});

test("Settings → Voice says when the Telugu voice is missing (iPhone-like), with no install help", async ({ page }) => {
  await installSpeechStub(page, IPHONE_VOICES);
  await page.goto("/learn/settings");
  await expect(page.getByTestId("telugu-voice-status")).toContainText("Missing");
  await expect(page.getByRole("button", { name: "Veena (en-IN)" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByText("Get the Telugu voice")).toHaveCount(0); // the install help is for Android only
});

test.describe("Android without a Telugu voice", () => {
  test.use({ userAgent: "Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 Chrome/120 Mobile Safari/537.36" });

  test("Settings shows the install help card, and 🔊 on Telugu text opens it once", async ({ page }) => {
    await installSpeechStub(page, ANDROID_VOICES.filter((v) => v.lang !== "te-IN"));
    await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ autoPlay: false })), [SETTINGS_KEY]);
    await page.goto("/learn/settings");
    await expect(page.getByText("Get the Telugu voice")).toBeVisible();

    await page.goto("/learn/play?l=sentence-basics");
    await start(page);
    await page.getByRole("button", { name: "Listen", exact: true }).first().click(); // the explanation, Telugu mode
    const dialog = page.getByRole("dialog", { name: "Get the Telugu voice" });
    await expect(dialog).toBeVisible();
    await dialog.getByRole("button", { name: /^Got it/ }).click();
    await expect(dialog).toBeHidden();
    await page.getByRole("button", { name: "Listen", exact: true }).first().click();
    await expect(dialog).toBeHidden(); // shown once
  });
});
