import { expect, test } from "@playwright/test";

test.skip(({ isMobile }) => !isMobile, "reporting is checked on the phone project");

// MongoDB is not available in e2e: the two endpoints are stubbed, and the test looks at what the phone sends.

test("report a problem from the player: reasons, thank you, and not offered twice", async ({ page }) => {
  const sent: string[] = [];
  await page.route("**/api/report", (route) => {
    sent.push(route.request().postData() ?? "");
    return route.fulfill({ json: { ok: true } });
  });

  await page.goto("/learn/play?l=sentence-basics");
  await page.getByRole("button", { name: /^Start/ }).click();
  await expect(page.getByRole("button", { name: "Report a problem" })).toBeVisible();
  await page.getByRole("button", { name: "Report a problem" }).click();
  const dialog = page.getByRole("dialog");
  for (const name of [/^Telugu is wrong/, /^English is wrong/, /^Audio problem/, /^Something else/]) await expect(dialog.getByRole("button", { name })).toBeVisible();
  await dialog.getByRole("button", { name: /^English is wrong/ }).click();

  await expect(page.getByRole("status")).toContainText("Thank you");
  await expect(page.getByRole("button", { name: "Report a problem" })).toHaveCount(0);
  await expect.poll(() => sent.length).toBe(1);
  expect(JSON.parse(sent[0])).toMatchObject({ dayId: "sentence-basics", reason: "english" });

  // The next activity can be reported.
  await page.getByRole("button", { name: /^Continue/ }).click();
  await expect(page.getByRole("button", { name: "Report a problem" })).toBeVisible();
});

test("a report made offline is sent when the phone is back online", async ({ page, context }) => {
  const sent: string[] = [];
  await page.route("**/api/report", (route) => {
    sent.push(route.request().postData() ?? "");
    return route.fulfill({ json: { ok: true } });
  });
  await page.goto("/learn/play?l=sentence-basics");
  await page.getByRole("button", { name: /^Start/ }).click();
  await context.setOffline(true);
  await page.getByRole("button", { name: "Report a problem" }).click();
  await page.getByRole("dialog").getByRole("button", { name: /^Audio problem/ }).click();
  await expect(page.getByRole("status")).toContainText("Thank you");
  expect(sent).toHaveLength(0);
  await context.setOffline(false);
  await expect.poll(() => sent.length).toBe(1);
});

test("a forced error shows the friendly screen and sends one error", async ({ page }) => {
  const sent: string[] = [];
  await page.route("**/api/client-error", (route) => {
    sent.push(route.request().postData() ?? "");
    return route.fulfill({ json: { ok: true } });
  });
  await page.goto("/dev/error");
  await expect(page.getByRole("heading", { name: /^Something went wrong/ })).toBeVisible();
  await expect.poll(() => sent.length).toBe(1);
  expect(JSON.parse(sent[0])).toMatchObject({ path: "/dev/error" });
  await page.waitForTimeout(300);
  expect(sent).toHaveLength(1);
});
