import { expect, test } from "@playwright/test";
import { SETTINGS_KEY } from "../src/learning/settings";

// The production look's app shell (BUILD_PLAN "a production look", part 1): the header from 768 px,
// the theme menu, the bottom tab bar on phones, and the pages that say one thing.

const SHOTS = "test-results/screenshots";

async function settle(page: import("@playwright/test").Page, theme: "light" | "dark") {
  await page.addInitScript(
    ([key, value]) => localStorage.setItem(key, value),
    [SETTINGS_KEY, JSON.stringify({ theme, onboarded: true })] as const,
  );
}

test("computers get the header with the logo, tabs, theme menu; the theme menu switches Night by keyboard", async ({ page, isMobile }) => {
  test.skip(isMobile, "the header is for tablets and computers");
  await settle(page, "light");
  await page.goto("/learn");
  const nav = page.getByRole("navigation", { name: "Main menu" });
  await expect(nav).toBeVisible();
  await expect(nav.getByRole("link", { name: /^Home/ })).toHaveAttribute("aria-current", "page");
  await expect(page.getByRole("link", { name: "EnglishEasy" })).toBeVisible();
  await expect(page.getByRole("link", { name: /^Start Day 1/ })).toBeVisible(); // the lesson has loaded
  await page.screenshot({ path: `${SHOTS}/look-desktop-home.png` });

  const theme = page.getByRole("button", { name: "Theme" });
  await theme.focus();
  await page.keyboard.press("ArrowDown");
  const menu = page.getByRole("menu", { name: "Theme" });
  await expect(menu).toBeVisible();
  await page.getByRole("menuitemradio", { name: /^Night/ }).click();
  await expect(menu).toBeHidden();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.waitForTimeout(400); // colours ease over 150–200 ms
  await page.screenshot({ path: `${SHOTS}/look-desktop-home-night.png` });
});

test("phones keep the bottom tab bar and no header", async ({ page, isMobile }) => {
  test.skip(!isMobile, "the tab bar is for phones");
  await settle(page, "light");
  await page.goto("/learn/practice");
  await expect(page.getByRole("button", { name: "Theme" })).toBeHidden();
  const tabs = page.getByRole("navigation", { name: "Main menu" });
  await expect(tabs.getByRole("link", { name: /^Practice/ })).toHaveAttribute("aria-current", "page");
  const box = await tabs.getByRole("link", { name: /^Home/ }).boundingBox();
  expect(box?.height ?? 0).toBeGreaterThanOrEqual(52);
});

test("an unknown address shows the friendly 404 page in both themes", async ({ page, isMobile }) => {
  for (const theme of ["light", "dark"] as const) {
    await settle(page, theme);
    const response = await page.goto("/no-such-page");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1, name: /This page isn't here/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /^Go to my lessons/ })).toBeVisible();
    if (isMobile) await page.screenshot({ path: `${SHOTS}/look-404-${theme === "light" ? "day" : "night"}.png` });
  }
});

test("the component gallery in both themes (the direction's preview)", async ({ page, isMobile }) => {
  test.skip(!isMobile, "the gallery is a phone column");
  for (const theme of ["light", "dark"] as const) {
    await settle(page, theme);
    await page.goto("/dev/ui");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await page.screenshot({ path: `${SHOTS}/look-gallery-${theme === "light" ? "day" : "night"}.png`, fullPage: true, scale: "css" });
  }
});
