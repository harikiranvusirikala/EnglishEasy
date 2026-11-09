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
  await expect(page.locator('[lang="te"]')).toHaveText(["తెలుగు"]); // only the Learn in choice, by its own name

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
  await expect(page.locator('[lang="te"]')).toHaveText(["తెలుగు"]); // only the Learn in choice, by its own name
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
  await expect(page.getByRole("status")).toHaveText("Saved.");
  await page.screenshot({ path: `${SHOTS}/ui-day.png`, fullPage: true });

  await page.evaluate((key) => localStorage.setItem(key, JSON.stringify({ theme: "dark" })), SETTINGS_KEY);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.screenshot({ path: `${SHOTS}/ui-night.png`, fullPage: true });
});

test("Send feedback: a face and a topic, sent anonymously, then thanks until tomorrow", async ({ page }) => {
  await page.addInitScript(([key]) => localStorage.setItem(key, JSON.stringify({ learnIn: "en" })), [SETTINGS_KEY]);
  const sent: unknown[] = [];
  await page.route("**/api/feedback", async (route) => {
    sent.push(route.request().postDataJSON());
    await route.fulfill({ json: { ok: true } });
  });
  await page.goto("/learn/settings");
  const card = page.getByRole("region", { name: "Send feedback" });
  await card.scrollIntoViewIfNeeded();
  await expect(card.getByRole("button", { name: /^Send/ })).toBeDisabled();
  await card.getByRole("button", { name: /Good/ }).first().click();
  await card.getByRole("button", { name: "More lessons" }).click();
  await card.screenshot({ path: `${SHOTS}/feedback-card.png` });
  await card.getByRole("button", { name: /^Send/ }).click();
  await expect(card.getByText("Thank you! We read every message.")).toBeVisible();
  await expect.poll(() => sent.length).toBe(1);
  expect(sent[0]).toMatchObject({ kind: "app", rating: "good", topics: ["more-lessons"], learnIn: "en" });
  expect(sent[0]).not.toHaveProperty("userId");
  await page.reload();
  await expect(page.getByText("You can send another message tomorrow.")).toBeVisible();
});
