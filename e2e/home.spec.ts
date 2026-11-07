import { expect, test } from "@playwright/test";
import { SETTINGS_KEY } from "../src/learning/settings";

test.skip(({ isMobile }) => !isMobile, "Home and Journey are checked on the phone project");

const SHOTS = "test-results/screenshots";

test("fresh visitor: language choice, Home, Day 1, back Home shows progress", async ({ page }) => {
  await page.goto("/learn");
  await expect(page.getByRole("heading", { name: /How would you like to learn/ })).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/onboarding.png` });
  await page.getByRole("button", { name: /Explanations in English/ }).click();
  await expect(page.locator("html")).toHaveAttribute("data-learn-in", "en");

  await expect(page.getByRole("link", { name: /Start Day 1/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Good (morning|afternoon|evening)/ })).toBeVisible();
  await expect(page.getByRole("region", { name: "This week" })).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/home.png`, fullPage: true });

  await page.getByRole("link", { name: /Start Day 1/ }).click();
  await page.getByRole("button", { name: /^Start/ }).click();
  await page.getByRole("button", { name: /^Continue/ }).click();
  await page.getByRole("button", { name: /^Continue/ }).click();
  await page.goto("/learn");
  await expect(page.getByRole("link", { name: /Continue Lesson/ })).toBeVisible();
  await expect(page.getByText(/\d+ of \d+ done/)).not.toContainText("0 of");
});

test("Home at night", async ({ page }) => {
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ learnIn: "te", theme: "dark", onboarded: true })), [SETTINGS_KEY]);
  await page.goto("/learn");
  await expect(page.getByRole("link", { name: /Start Day 1/ })).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/home-night.png`, fullPage: true });
});

test("Journey: Stage 1 open, Week 1 playable, later stages are cards", async ({ page }) => {
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ learnIn: "en", onboarded: true })), [SETTINGS_KEY]);
  await page.goto("/learn");
  await page.getByRole("link", { name: "Journey" }).click();
  await expect(page).toHaveURL(/\/learn\/journey$/);
  await expect(page.getByText(/Stage 1 · Foundations/)).toBeVisible();
  await expect(page.locator("details", { hasText: "Stage 1" })).toHaveJSProperty("open", true);
  const week1 = page.getByRole("button", { name: /Week 1 English Foundations/ });
  await expect(week1).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: /Who Does What/ })).toBeVisible();
  await expect(page.getByText("coming soon").first()).toBeVisible();
  await expect(page.getByRole("region", { name: /Stage 2/ })).toBeVisible(); // a card
  await expect(page.getByRole("region", { name: /Stage 5/ })).toBeVisible();
  await page.screenshot({ path: `${SHOTS}/journey.png`, fullPage: true });
});
