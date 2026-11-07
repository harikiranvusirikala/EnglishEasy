import { expect, test } from "@playwright/test";

test("home and learn pages load, Telugu renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /EnglishEasy/ })).toBeVisible();
  const telugu = page.locator('[lang="te"]', { hasText: "త్వరలో వస్తుంది" });
  await expect(telugu).toBeVisible();
  expect(await telugu.evaluate((el) => getComputedStyle(el).fontFamily)).toContain("Noto Sans Telugu");

  await page.getByRole("link", { name: "Open the lessons" }).click();
  await expect(page).toHaveURL(/\/learn$/);
  await expect(page.getByRole("heading", { name: /How would you like to learn/ })).toBeVisible(); // first visit
  await expect(page.locator('[lang="te"]', { hasText: "తెలుగులో వివరణలు" }).first()).toBeVisible();
});
