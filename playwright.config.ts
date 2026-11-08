import { defineConfig, devices } from "@playwright/test";

const PORT = 3100; // separate from `npm run dev` on 3000
const isCI = !!process.env.CI;
const channel = isCI ? undefined : "chrome"; // the installed Chrome; Playwright's own download is blocked locally

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  reporter: isCI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "retain-on-failure",
    serviceWorkers: "block", // specs stub files with page.route, which a service worker would bypass; e2e/offline.spec.ts allows it
    reducedMotion: "reduce", // screenshots show each screen as it settles, not halfway through a fade (the app skips motion then)
  },
  projects: [
    { name: "phone", use: { ...devices["iPhone 13"], defaultBrowserType: "chromium", channel } },
    { name: "desktop", use: { ...devices["Desktop Chrome"], channel } },
  ],
  webServer: {
    // Test against a production build, as the Next.js testing guide recommends.
    command: `npm run build && npm run start -- --port ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: false,
    env: {
      ENABLE_DEV_PAGES: "1", // /dev/ui is a 404 without it
      NEXT_PUBLIC_VAPID_PUBLIC_KEY: "BPFofdnxejiCSnWqFoceeKAoMpB5uMKEk6A1v6RQ_-ATrN7X_vg4PZdaO5xhjJ-lvmJqV6eQtdqWMY0vM7NKGqE", // a throwaway public key; the e2e subscribe is stubbed
    },
    timeout: 180_000,
  },
});
