import { expect, test, type Page } from "@playwright/test";
import { SETTINGS_KEY } from "../src/learning/settings";

test.skip(({ isMobile }) => !isMobile, "the elder walkthrough runs on the phone project");

const SHOTS = "test-results/screenshots";
const SCREENS = ["/learn", "/learn/journey", "/learn/practice", "/learn/settings", "/learn/play?l=sentence-basics"];

/** Buttons and links that are visible but under 52 px high (or with no name), and anything wider than the screen. */
async function problems(page: Page) {
  return page.evaluate(() => {
    const out: string[] = [];
    for (const el of document.querySelectorAll<HTMLElement>("button, a[href], [role=button]")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0 || getComputedStyle(el).visibility === "hidden") continue;
      if (el.closest("[inert], [hidden]")) continue;
      const name = (el.getAttribute("aria-label") ?? el.textContent ?? "").trim();
      if (!name) out.push(`no name: ${el.outerHTML.slice(0, 80)}`);
      if (r.height < 51.5 && !el.closest("details > summary, [data-small-ok]")) out.push(`${Math.round(r.height)}px: ${name.slice(0, 40)}`);
    }
    if (document.documentElement.scrollWidth > window.innerWidth + 1) out.push("horizontal overflow");
    return out;
  });
}

for (const theme of ["light", "dark"] as const) {
  for (const learnIn of ["en", "te"] as const) {
    test(`elder walkthrough: A++, ${theme}, ${learnIn}`, async ({ page }) => {
      await page.addInitScript(
        ([key, s]) => localStorage.setItem(key, s),
        [SETTINGS_KEY, JSON.stringify({ learnIn, theme, textSize: "A++", onboarded: true })],
      );
      for (const url of SCREENS) {
        await page.goto(url);
        await expect(page.locator("main, [role=main]").first()).toBeVisible();
        await page.waitForTimeout(300);
        expect(await problems(page), url).toEqual([]);
        expect(await page.locator("h1").count(), `${url} has a heading`).toBeGreaterThan(0);
        if (learnIn === "te") await expect(page.locator('[lang="te"]').first()).toBeAttached();
      }
      await page.goto("/learn");
      await page.screenshot({ path: `${SHOTS}/polish-home-${theme}-${learnIn}.png`, fullPage: true });
    });
  }
}

test("feedback is announced and focus rings show", async ({ page }) => {
  await page.addInitScript(([k, s]) => localStorage.setItem(k, s), [SETTINGS_KEY, JSON.stringify({ learnIn: "en", onboarded: true })]);
  await page.goto("/learn");
  await expect(page.locator("[aria-live]").first()).toBeAttached();
  await page.keyboard.press("Tab");
  const outline = await page.evaluate(() => {
    const s = getComputedStyle(document.activeElement as Element);
    return s.boxShadow + s.outlineStyle;
  });
  expect(outline).not.toMatch(/^none ?none$/);
});

test("no layout shift on Home", async ({ page }) => {
  await page.addInitScript(() => {
    (window as unknown as { __cls: number }).__cls = 0;
    new PerformanceObserver((list) => {
      for (const e of list.getEntries() as (PerformanceEntry & { value: number; hadRecentInput: boolean })[]) {
        if (!e.hadRecentInput) (window as unknown as { __cls: number }).__cls += e.value;
      }
    }).observe({ type: "layout-shift", buffered: true });
    localStorage.setItem("englisheasy.settings.v1", JSON.stringify({ learnIn: "en", onboarded: true }));
  });
  await page.goto("/learn");
  await expect(page.getByRole("link", { name: /Start Day 1/ })).toBeVisible();
  await page.waitForTimeout(500);
  expect(await page.evaluate(() => (window as unknown as { __cls: number }).__cls)).toBeLessThan(0.1);
});
