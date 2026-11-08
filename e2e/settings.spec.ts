import { expect, test } from "@playwright/test";
import { SETTINGS_KEY } from "../src/learning/settings";

test.skip(({ isMobile }) => !isMobile, "the settings flow is checked on the phone project");

const SHOTS = "test-results/screenshots";

test("Night, A++ and English mode apply before first paint, survive a reload, and drop the Telugu", async ({ page, context }) => {
  await page.goto("/learn/settings");
  // Defaults: Day, Telugu mode (Telugu labels shown).
  await expect(page.getByRole("heading", { name: "Settings" })).toBeVisible();
  await expect(page.locator('[lang="te"]:visible').first()).toBeVisible(); // the header (computers) is hidden on phones
  await expect(page.locator("html")).not.toHaveClass(/dark/);
  await page.screenshot({ path: `${SHOTS}/settings-phone.png`, fullPage: true });

  await page.getByRole("button", { name: /^Night/ }).click();
  await page.getByRole("button", { name: /^A\+\+/ }).click();
  await page.getByRole("button", { name: /^English/ }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await expect(page.locator("html")).toHaveCSS("font-size", "22px");
  await expect(page.locator('[lang="te"]')).toHaveCount(0);

  // Reload with every script file blocked: only the inline script in <head> can have run.
  await context.route("**/_next/static/**/*.js", (route) => route.abort());
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await expect(page.locator("html")).toHaveCSS("font-size", "22px");
  await expect(page.locator("html")).toHaveAttribute("data-learn-in", "en");
  await expect(page.locator("[data-bi-te]").first()).toBeHidden(); // CSS hides the Telugu before hydration
  await context.unroute("**/_next/static/**/*.js");

  // Reload normally: choices kept, labels English only.
  await page.reload();
  await expect(page.getByRole("button", { name: "Night" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("button", { name: "A++" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("button", { name: "English", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("html")).toHaveClass(/dark/);
  await expect(page.locator('[lang="te"]')).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Settings", exact: true })).toHaveAttribute("aria-current", "page");
  await expect(page.getByRole("link", { name: "Buy me a coffee (opens in a new tab)" })).toHaveAttribute("rel", "noopener noreferrer");

  const saved = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!), SETTINGS_KEY);
  expect(saved).toMatchObject({ theme: "dark", textSize: "A++", learnIn: "en" });
});

test("component gallery in Day and Night", async ({ page }) => {
  await page.goto("/dev/ui");
  await expect(page.getByRole("heading", { name: "Component gallery" })).toBeVisible();
  await page.getByRole("button", { name: "Open a dialog" }).click();
  await expect(page.getByRole("dialog", { name: "A dialog" })).toBeVisible();
  await page.getByRole("button", { name: "Close" }).click();
  await expect(page.getByRole("dialog")).toBeHidden();
  await page.getByRole("button", { name: "Show a message" }).click();
  await expect(page.getByRole("status")).toHaveText("సేవ్ అయింది.");
  await page.screenshot({ path: `${SHOTS}/ui-day.png`, fullPage: true });

  await page.evaluate((key) => localStorage.setItem(key, JSON.stringify({ theme: "dark" })), SETTINGS_KEY);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.screenshot({ path: `${SHOTS}/ui-night.png`, fullPage: true });
});
