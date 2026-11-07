import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { REMINDER_KEY, disableReminder, enableReminder, refreshReminder } from "./reminders";

const KEY = "BPFofdnxejiCSnWqFoceeKAoMpB5uMKEk6A1v6RQ_-ATrN7X_vg4PZdaO5xhjJ-lvmJqV6eQtdqWMY0vM7NKGqE";

function setup(permission: NotificationPermission = "granted", existing = false) {
  const subscription = {
    endpoint: "https://push.example/1",
    toJSON: () => ({ endpoint: "https://push.example/1", keys: { p256dh: "k", auth: "a" } }),
    unsubscribe: vi.fn(async () => true),
  };
  const pushManager = {
    getSubscription: vi.fn(async () => (existing ? subscription : null)),
    subscribe: vi.fn(async () => subscription),
  };
  const requestPermission = vi.fn(async () => permission);
  vi.stubGlobal("Notification", { permission, requestPermission });
  vi.stubGlobal("PushManager", class {});
  Object.defineProperty(navigator, "serviceWorker", { configurable: true, value: { ready: Promise.resolve({ pushManager }) } });
  const fetchMock = vi.fn(async () => new Response("{}", { status: 200 }));
  vi.stubGlobal("fetch", fetchMock);
  return { pushManager, subscription, requestPermission, fetchMock };
}

beforeEach(() => {
  vi.stubEnv("NEXT_PUBLIC_VAPID_PUBLIC_KEY", KEY);
});
afterEach(async () => {
  await disableReminder(); // forgets the in-memory "last sent" body between tests
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe("enableReminder", () => {
  it("asks permission, subscribes, sends the hour and the time zone, and remembers the choice", async () => {
    const { pushManager, fetchMock } = setup();
    expect(await enableReminder(18, "te", "2026-11-07")).toBe("on");
    expect(pushManager.subscribe).toHaveBeenCalledWith(expect.objectContaining({ userVisibleOnly: true }));
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("/api/reminders");
    expect(init.method).toBe("PUT");
    expect(JSON.parse(init.body as string)).toMatchObject({
      hour: 18,
      learnIn: "te",
      lastPracticeDay: "2026-11-07",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      subscription: { endpoint: "https://push.example/1" },
    });
    expect(JSON.parse(localStorage.getItem(REMINDER_KEY)!)).toEqual({ hour: 18 });
  });

  it("reuses an existing subscription", async () => {
    const { pushManager } = setup("granted", true);
    expect(await enableReminder(8, "en", null)).toBe("on");
    expect(pushManager.subscribe).not.toHaveBeenCalled();
  });

  it("reports a blocked permission and saves nothing", async () => {
    const { fetchMock } = setup("denied");
    expect(await enableReminder(8, "en", null)).toBe("denied");
    expect(fetchMock).not.toHaveBeenCalled();
    expect(localStorage.getItem(REMINDER_KEY)).toBeNull();
  });

  it("fails without keeping the choice when the server says no", async () => {
    const { fetchMock } = setup();
    fetchMock.mockResolvedValueOnce(new Response("{}", { status: 500 }));
    expect(await enableReminder(8, "en", null)).toBe("failed");
    expect(localStorage.getItem(REMINDER_KEY)).toBeNull();
  });
});

describe("disableReminder", () => {
  it("removes the server copy and unsubscribes the phone", async () => {
    const { subscription, fetchMock } = setup("granted", true);
    await enableReminder(8, "en", null);
    await disableReminder();
    const [, init] = fetchMock.mock.calls.at(-1) as unknown as [string, RequestInit];
    expect(init.method).toBe("DELETE");
    expect(JSON.parse(init.body as string)).toEqual({ endpoint: "https://push.example/1" });
    expect(subscription.unsubscribe).toHaveBeenCalled();
    expect(localStorage.getItem(REMINDER_KEY)).toBeNull();
  });
});

describe("refreshReminder", () => {
  it("sends changed details once", async () => {
    const { fetchMock } = setup("granted", true);
    await refreshReminder(8, "en", "2026-11-07");
    await refreshReminder(8, "en", "2026-11-07");
    await refreshReminder(8, "te", "2026-11-07");
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("turns reminders off on this phone when the permission was taken away", async () => {
    setup("granted", true);
    await enableReminder(8, "en", null);
    vi.stubGlobal("Notification", { permission: "denied", requestPermission: vi.fn() });
    await refreshReminder(8, "en", null);
    expect(localStorage.getItem(REMINDER_KEY)).toBeNull();
  });
});
