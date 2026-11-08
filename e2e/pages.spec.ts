import { expect, test } from "@playwright/test";

test("home and learn pages load, Telugu renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Speak English with confidence");
  const telugu = page.locator('h1 [lang="te"]');
  await expect(telugu).toBeVisible();
  expect(await telugu.evaluate((el) => getComputedStyle(el).fontFamily)).toContain("Noto Sans Telugu");

  await page.getByRole("link", { name: /Start Day 1/ }).click();
  await expect(page).toHaveURL(/\/learn$/);
  await expect(page.getByRole("heading", { name: /How would you like to learn/ })).toBeVisible(); // first visit
  await expect(page.getByRole("button", { name: /^Explanations in Telugu/ })).toBeVisible(); // simple words are English
  await expect(page.locator('[lang="te"]', { hasText: "అంటే" }).first()).toBeVisible(); // its sample explanation is Telugu
});
