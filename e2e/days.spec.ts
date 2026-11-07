import { expect, test } from "@playwright/test";
import { SETTINGS_KEY } from "../src/learning/settings";

test.skip(({ isMobile }) => !isMobile, "the player is checked on the phone project");

const DAYS = [
  { id: "i-am-you-are", title: "I Am, You Are", first: "I am Lakshmi." },
  { id: "present-simple-every-day", title: "Every Day", first: "I walk every morning." },
  { id: "present-continuous-right-now", title: "Right Now", first: "I am cooking." },
  { id: "past-simple-yesterday", title: "Yesterday", first: "I went to the market." },
];

for (const learnIn of ["en", "te"] as const) {
  for (const { id, title } of DAYS) {
    test(`${id} opens in the player (${learnIn})`, async ({ page }) => {
      await page.addInitScript(([key, l]) => !localStorage.getItem(key) && localStorage.setItem(key, JSON.stringify({ learnIn: l })), [SETTINGS_KEY, learnIn]);
      await page.goto(`/learn/play?l=${id}`);
      await expect(page.getByRole("heading", { name: "Learn" })).toBeVisible();
      await page.getByRole("button", { name: /^Start/ }).click();
      await expect(page.getByRole("button", { name: /^Continue/ })).toBeVisible();
      await page.goto(`/lessons/${id}`);
      await expect(page.getByRole("heading", { name: new RegExp(title) }).first()).toBeVisible();
      await expect(page.getByRole("link", { name: /^Start/ })).toBeVisible();
    });
  }
}
