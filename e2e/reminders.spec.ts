import { expect, test } from "@playwright/test";

test.skip(({ isMobile }) => !isMobile, "reminders are checked on the phone project");

// No real push service or database in e2e: the page gets a stubbed service worker registration with a fake
// PushManager, and /api/reminders is stubbed. The test looks at what the phone sends.

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    const w = window as unknown as { __push: { subscribed: number; unsubscribed: number } };
    w.__push = { subscribed: 0, unsubscribed: 0 };
    let current: object | null = null;
    const subscription = () => ({
      endpoint: "https://push.example/e2e",
      toJSON: () => ({ endpoint: "https://push.example/e2e", keys: { p256dh: "key", auth: "auth" } }),
      unsubscribe: async () => {
        w.__push.unsubscribed += 1;
        current = null;
        return true;
      },
    });
    const pushManager = {
      getSubscription: async () => current,
      subscribe: async () => {
        w.__push.subscribed += 1;
        current = subscription();
        return current;
      },
    };
    Object.defineProperty(navigator, "serviceWorker", { configurable: true, value: { ready: Promise.resolve({ pushManager }), addEventListener() {}, register: () => Promise.reject(new Error("blocked")) } });
    Object.defineProperty(navigator, "standalone", { configurable: true, value: true }); // the phone project's UA is an iPhone: pretend the app is installed
    Object.defineProperty(Notification, "permission", { configurable: true, get: () => "granted" });
    Notification.requestPermission = async () => "granted";
    localStorage.setItem("englisheasy.settings.v1", JSON.stringify({ onboarded: true, learnIn: "en" }));
  });
});

test("choosing a time subscribes and sends the hour and time zone; Off removes it", async ({ page }) => {
  const sent: { method: string; body: Record<string, unknown> }[] = [];
  await page.route("**/api/reminders", (route) => {
    sent.push({ method: route.request().method(), body: JSON.parse(route.request().postData() ?? "{}") });
    return route.fulfill({ json: { ok: true } });
  });

  await page.goto("/learn/settings");
  const group = page.getByRole("group", { name: "Daily reminder" });
  await expect(group.getByRole("button", { name: /^Off/ })).toHaveAttribute("aria-pressed", "true");
  await group.getByRole("button", { name: /^Evening 6:00/ }).click();
  await expect(group.getByRole("button", { name: /^Evening 6:00/ })).toHaveAttribute("aria-pressed", "true");

  const timeZone = await page.evaluate(() => Intl.DateTimeFormat().resolvedOptions().timeZone);
  expect(sent[0].method).toBe("PUT");
  expect(sent[0].body).toMatchObject({ hour: 18, timeZone, learnIn: "en", subscription: { endpoint: "https://push.example/e2e" } });
  expect(await page.evaluate(() => (window as unknown as { __push: { subscribed: number } }).__push.subscribed)).toBe(1);

  await group.getByRole("button", { name: /^Off/ }).click();
  await expect(group.getByRole("button", { name: /^Off/ })).toHaveAttribute("aria-pressed", "true");
  await expect.poll(() => sent.at(-1)?.method).toBe("DELETE");
  expect(sent.at(-1)?.body).toEqual({ endpoint: "https://push.example/e2e" });
  // The phone unsubscribes only after the DELETE has been answered, so wait for it.
  await expect.poll(() => page.evaluate(() => (window as unknown as { __push: { unsubscribed: number } }).__push.unsubscribed)).toBe(1);
});

test("on an iPhone outside the installed app, Settings says to install first", async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, "standalone", { configurable: true, value: false }));
  await page.goto("/learn/settings");
  await expect(page.getByText("Install the app first to get reminders")).toBeVisible();
  await expect(page.getByRole("button", { name: /^Evening 6:00/ })).toHaveCount(0);
});
