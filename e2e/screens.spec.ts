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
  await clearOfBar(page); // the replies scroll up above the Speak bar
  await page.getByRole("button", { name: "Why do you ask?", exact: true }).click();
  await expect(page.getByText("Oh, just asking! I like tea.")).toBeVisible();
  await clearOfBar(page); // and so does the partner's reaction, above the taller "Almost" bar
  await shot(page, "roleplay-react");
});

/** The end of the step's content is above the fixed bottom bar (nothing hidden behind it). */
async function clearOfBar(page: Page) {
  await expect(async () => {
    const box = await page.locator("[data-scroll-end]").boundingBox();
    const bar = await page.locator("[data-bottom-bar]").boundingBox();
    expect(box && bar && box.y + box.height <= bar.y).toBe(true);
  }).toPass({ timeout: 3000 });
}

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

/** Day 1 with its sections replaced by `activities` in one section (for screens whose content isn't written yet). */
async function inject(page: Page, activities: Activity[], kind = "practice") {
  await page.route("**/content/sentence-basics.json", async (route) => {
    const day = (await (await route.fetch()).json()) as PlayableDay;
    day.sections = [{ kind: kind as PlayableDay["sections"][number]["kind"], activities }, { kind: "wrapup", activities: [] }];
    await route.fulfill({ json: day });
  });
  await page.goto("/learn/play?l=sentence-basics");
  await page.getByRole("button", { name: /^Start/ }).click();
}

test("first visit: what do you want English for?", async ({ page }) => {
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ theme: "light", learnIn: "en" })), [SETTINGS_KEY] as const);
  await page.goto("/learn");
  await page.getByRole("button", { name: /Explanations in English/ }).click();
  await page.getByRole("button", { name: /Talking with my family/ }).click();
  await page.getByRole("button", { name: /Visiting family abroad/ }).click();
  await page.getByRole("button", { name: /My trip is soon/ }).click();
  await shot(page, "goals");
});

test("Home: New for you (gallery sample, since no track has lessons yet)", async ({ page }) => {
  await settings(page, { learnIn: "en" });
  await page.goto("/dev/ui");
  const offer = page.getByRole("region", { name: "New for you" });
  await offer.scrollIntoViewIfNeeded();
  await offer.screenshot({ path: `${SHOTS}/screen-track-offer.png` });
});

test("a checkpoint week ends with the result and the certificate", async ({ page }) => {
  await settings(page, { learnIn: "en" });
  await page.route("**/content/w12-review.json", async (route) => {
    const day = (await (await route.fetch()).json()) as PlayableDay;
    day.sections = day.sections.filter((s) => s.kind === "wrapup");
    await route.fulfill({ json: day });
  });
  await page.goto("/learn/play?l=w12-review");
  await expect(page.getByRole("heading", { name: "Checkpoint 1 complete" })).toBeVisible();
  await shot(page, "checkpoint");
  await page.getByRole("button", { name: /Get your certificate/ }).scrollIntoViewIfNeeded();
  await shot(page, "checkpoint-list");
  await page.getByRole("button", { name: /Get your certificate/ }).click();
  await expect(page.getByRole("img", { name: /Your certificate/ })).toBeVisible();
  await shot(page, "certificate");
});

const readIt = (kind: "message" | "label" | "sign", heading: string, lines: string[], prompt: string, options: string[]): Activity => ({
  id: `sentence-basics.read-${kind}`,
  type: "readIt",
  kind,
  heading,
  lines,
  prompt: { en: prompt, te: prompt },
  options,
  answer: 0,
});

test("Read it: a message, a label and a sign", async ({ page }) => {
  await settings(page, { learnIn: "en" });
  await inject(page, [
    readIt("message", "VM-BANK", ["Your OTP is 4821. Do not share it with anyone. Bank staff never ask for it."], "Someone calls and asks for this number. What do you do?", ["I say no and cut the call.", "I tell them the number.", "I send it on WhatsApp."]),
    readIt("label", "PARACETAMOL 500 mg", ["Dose: 1 tablet, 3 times a day", "Take: after food", "EXP: 03/2027", "Keep away from children"], "When do you take it?", ["After eating", "Before eating", "Only at night"]),
    readIt("sign", "OUT PATIENTS (OP)", ["Ground floor →"], "Where do you go to see a doctor?", ["Ground floor", "First floor", "Outside"]),
  ]);
  await expect(page.getByText("Read the message.")).toBeVisible();
  await shot(page, "read-message");
  for (const next of ["label", "sign"]) {
    await page.getByRole("button", { name: /^(I say no|After eating)/ }).click();
    await page.getByRole("button", { name: /^Check/ }).click();
    await page.getByRole("button", { name: /^Continue/ }).click();
    await expect(page.getByText(`Read the ${next}.`)).toBeVisible();
    await shot(page, `read-${next}`);
  }
});

test("a checkpoint's speaking mission", async ({ page }) => {
  await installSpeechStub(page);
  await settings(page, { learnIn: "en" });
  await inject(page, [{ id: "sentence-basics.m1", type: "mission", title: { en: "All about me", te: "నా గురించి" }, prompts: ["My name is …", "I live in …", "Every day I …", "I like …", "Tomorrow I will …"], seconds: 30 }], "speak");
  await shot(page, "mission");
  await page.getByRole("button", { name: "Start", exact: true }).click();
  await expect(page.getByText(/of 0:30$/)).toBeVisible();
  await page.waitForTimeout(2200);
  await shot(page, "mission-running");
});
