import { expect, test, type Page } from "@playwright/test";
import { SETTINGS_KEY } from "../src/learning/settings";
import type { PlayableDay } from "../src/content/types";
import { clearSpoken, installSpeechStub, spoken } from "./speech-stub";

test.skip(({ isMobile }) => !isMobile, "voice is checked on the phone project");

const EXAMPLE = "I eat rice.";

const start = (page: Page) => page.getByRole("button", { name: /^Start/ }).click();
const exampleRow = (page: Page) => page.getByRole("listitem").filter({ hasText: EXAMPLE }).first();

test("🔊 speaks an example with the Indian-English voice; a simple sentence has no Slow button", async ({ page }) => {
  await installSpeechStub(page);
  await page.goto("/learn/play?l=sentence-basics");
  await start(page);
  await clearSpoken(page);

  await exampleRow(page).getByRole("button", { name: "Listen", exact: true }).click();
  await expect(exampleRow(page).getByRole("button", { name: "Listen slowly" })).toHaveCount(0); // "I eat rice." is simple
  expect(await spoken(page)).toEqual([{ text: EXAMPLE, lang: "en-IN", rate: 0.9, pitch: 1, voiceURI: "in" }]);
});

test("the explanation is not read aloud (owner's choice): nothing plays when the card opens", async ({ page }) => {
  await installSpeechStub(page);
  await page.goto("/learn/play?l=sentence-basics");
  await start(page);
  await page.getByRole("heading", { name: /^ఎవరు/ }).waitFor();
  await page.waitForTimeout(400);
  expect(await spoken(page)).toEqual([]);
});

test("a medium-length role-play line plays by itself and has Slow, at the slow rate", async ({ page }) => {
  await installSpeechStub(page);
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ learnIn: "en", dismissed: ["mic-permission-help"] })), [SETTINGS_KEY]);
  await page.route("**/content/sentence-basics.json", async (route) => {
    const day = (await (await route.fetch()).json()) as PlayableDay;
    day.sections = day.sections.filter((x) => x.kind === "roleplay" || x.kind === "wrapup");
    await route.fulfill({ json: day });
  });
  await page.goto("/learn/play?l=sentence-basics");
  await start(page);
  const line = "What do you drink in the morning?";
  await expect.poll(async () => (await spoken(page)).map((u) => u.text)).toContain(line);
  await clearSpoken(page);
  await page.getByRole("button", { name: "Listen slowly" }).first().click();
  expect(await spoken(page)).toEqual([{ text: line, lang: "en-IN", rate: 0.65, pitch: 1, voiceURI: "in" }]);
});

for (const autoPlay of [true, false]) {
  test(`Don't say / Say: the right sentence ${autoPlay ? "plays by itself" : "waits for 🔊 when Auto-play is off"}`, async ({ page }) => {
    await installSpeechStub(page);
    await page.addInitScript(([key, value]) => localStorage.setItem(key, value), [SETTINGS_KEY, JSON.stringify({ autoPlay })] as const);
    await page.goto("/learn/play?l=sentence-basics");
    await start(page);
    for (let i = 0; i < 2; i++) await page.getByRole("button", { name: /^Continue/ }).click(); // the two explain cards
    await page.waitForTimeout(400);
    const heard = (await spoken(page)).map((u) => u.text);
    if (autoPlay) expect(heard).toHaveLength(1);
    else {
      expect(heard).toEqual([]);
      await page.getByRole("button", { name: "Listen", exact: true }).first().click();
      expect(await spoken(page)).toHaveLength(1);
    }
  });
}
