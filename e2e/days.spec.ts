import { expect, test } from "@playwright/test";
import { course } from "../src/content/course";
import { loadDay } from "../src/content/load";
import { SETTINGS_KEY } from "../src/learning/settings";

test.skip(({ isMobile }) => !isMobile, "the player is checked on the phone project");

const DAYS = [
  { id: "i-am-you-are", title: "I Am, You Are", first: "I am Kiran." },
  { id: "present-simple-every-day", title: "Every Day", first: "I walk every morning." },
  { id: "present-continuous-right-now", title: "Right Now", first: "I am cooking." },
  { id: "past-simple-yesterday", title: "Yesterday", first: "I went to the market." },
  { id: "future-will-tomorrow", title: "Tomorrow", first: "I will call you tomorrow." },
  { id: "what-and-where", title: "What, Where & Who", first: "What is this?" },
  { id: "when-and-what-time", title: "When & What Time", first: "When is the function?" },
  { id: "sorry-can-you-repeat", title: "Sorry? Say It Again", first: "Sorry? Please say it again." },
  { id: "how-questions", title: "How Questions", first: "How are you?" },
  { id: "why-and-because", title: "Why & Because", first: "Why are you late?" },
];

for (const learnIn of ["en", "te"] as const) {
  for (const { id } of DAYS) {
    test(`${id} opens in the player (${learnIn})`, async ({ page }) => {
      await page.addInitScript(([key, l]) => !localStorage.getItem(key) && localStorage.setItem(key, JSON.stringify({ learnIn: l })), [SETTINGS_KEY, learnIn]);
      await page.goto(`/learn/play?l=${id}`);
      await expect(page.getByRole("heading", { name: /^(Learn|Warm-up)/ })).toBeVisible();
      await page.getByRole("button", { name: /^Start/ }).click();
      await expect(page.getByRole("button", { name: /^(Continue|Check)/ }).first()).toBeVisible();
      await page.goto(`/lessons/${id}`);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect(page.getByRole("link", { name: /^(Start|Continue)/ })).toBeVisible();
    });
  }
}

test("Week 2's Conversation Day opens on its dialogue, and its review day opens", async ({ page }) => {
  await page.addInitScript(([key]) => !localStorage.getItem(key) && localStorage.setItem(key, JSON.stringify({ learnIn: "en" })), [SETTINGS_KEY]);
  await page.goto("/learn/play?l=w2-conversation");
  await page.getByRole("button", { name: /^Start/ }).click();
  await expect(page.getByText("Two guests at a wedding")).toBeVisible();
  await page.goto("/lessons/w2-conversation");
  await expect(page.getByRole("heading", { level: 1, name: "Meeting Someone at a Wedding" })).toBeVisible();
  await page.goto("/learn/play?l=w2-review");
  await page.getByRole("button", { name: /^Start/ }).click();
  await expect(page.getByRole("button", { name: /^(Continue|Check)/ }).first()).toBeVisible();
});

test("a warm-up question ends with a text-sized Listen inside the question", async ({ page }) => {
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ learnIn: "te", onboarded: true })), [SETTINGS_KEY]);
  await page.goto("/learn/play?l=i-am-you-are");
  await page.getByRole("button", { name: /^Start/ }).click();
  const question = page.getByRole("heading", { level: 2, name: /అంటే ఏంటి/ });
  await expect(question.getByRole("button", { name: "Listen" })).toBeVisible(); // inside the question, not on its own row
  await page.screenshot({ path: "test-results/screenshots/question-listen-inline.png" });
});

// Weeks 3 on: every released day opens in the player and on its lesson page (English mode; Weeks 1–2 above cover Telugu mode too).
for (const week of course.stages.flatMap((s) => s.weeks).filter((w) => w.released && w.n >= 3)) {
  test(`Week ${week.n}: every day opens in the player and on its lesson page`, async ({ page }) => {
    test.setTimeout(90_000);
    await page.addInitScript(([key]) => !localStorage.getItem(key) && localStorage.setItem(key, JSON.stringify({ learnIn: "en" })), [SETTINGS_KEY]);
    for (const ref of week.days) {
      await page.goto(`/learn/play?l=${ref.id}`);
      await page.getByRole("button", { name: /^Start/ }).click();
      if (ref.kind === "conversation") {
        const day = await loadDay(ref.id);
        const title = day.kind === "conversation" && day.dialogue.type === "dialogue" ? day.dialogue.title.en : "";
        await expect(page.getByText(title)).toBeVisible();
      } else {
        await expect(page.getByRole("button", { name: /^(Continue|Check|Questions)/ }).first()).toBeVisible(); // a passage opens on its text, then Questions
      }
      await page.goto(`/lessons/${ref.id}`);
      await expect(page.getByRole("heading", { level: 1, name: ref.title.en })).toBeVisible();
    }
  });
}
