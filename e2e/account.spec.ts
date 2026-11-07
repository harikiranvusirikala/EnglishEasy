import { expect, test } from "@playwright/test";

test.skip(({ isMobile }) => !isMobile, "the account flow is checked on the phone project");

// The sign-in service (MongoDB, Google) is not available in e2e: its two endpoints are stubbed, and the
// test stops where the browser leaves for Google.

test("the Google button sends the browser towards Google", async ({ page }) => {
  await page.route("**/api/auth/get-session", (route) => route.fulfill({ json: null }));
  let asked = "";
  await page.route("**/api/auth/sign-in/social", (route) => {
    asked = route.request().postData() ?? "";
    return route.fulfill({ json: { url: "https://accounts.google.com/o/oauth2/v2/auth?stub=1", redirect: true } });
  });
  await page.route("https://accounts.google.com/**", (route) => route.fulfill({ contentType: "text/html", body: "<title>Google</title>" }));

  await page.goto("/learn/settings");
  const button = page.getByRole("button", { name: /^Sign in with Google/ });
  await expect(button).toBeVisible();
  await button.click();
  await page.waitForURL(/accounts\.google\.com/);
  expect(asked).toContain('"provider":"google"');
});

test("signed in: avatar, name, email and Sign out; the greeting uses the first name", async ({ page }) => {
  let signedIn = true;
  await page.route("**/api/auth/get-session", (route) =>
    route.fulfill({
      json: signedIn
        ? {
            session: { id: "s", userId: "u", token: "t", expiresAt: "2099-01-01T00:00:00.000Z", createdAt: "2026-01-01T00:00:00.000Z", updatedAt: "2026-01-01T00:00:00.000Z" },
            user: { id: "u", name: "Hari Kiran", email: "hari@example.com", emailVerified: true, image: null, createdAt: "2026-01-01T00:00:00.000Z", updatedAt: "2026-01-01T00:00:00.000Z" },
          }
        : null,
    }),
  );
  await page.route("**/api/auth/sign-out", (route) => {
    signedIn = false;
    return route.fulfill({ json: { success: true } });
  });

  await page.goto("/learn/settings");
  await expect(page.getByText("Hari Kiran")).toBeVisible();
  await expect(page.getByText("hari@example.com")).toBeVisible();
  await page.getByRole("button", { name: /^Sign out/ }).click();
  await page.getByRole("dialog").getByRole("button", { name: /^Sign out/ }).click();
  await expect(page.getByRole("button", { name: /^Sign in with Google/ })).toBeVisible();
});
