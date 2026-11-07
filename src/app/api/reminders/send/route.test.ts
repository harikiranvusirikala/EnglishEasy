import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@/server/db", () => ({ getDatabase: vi.fn(() => Promise.reject(new Error("no database in this test"))) }));

import { POST } from "./route";

const call = (headers: Record<string, string> = {}) => POST(new Request("http://x/api/reminders/send", { method: "POST", headers }));

describe("POST /api/reminders/send", () => {
  afterEach(() => vi.unstubAllEnvs());

  it("is 401 when REMINDER_SECRET is not set, even with a header", async () => {
    vi.stubEnv("REMINDER_SECRET", "");
    expect((await call({ authorization: "Bearer " })).status).toBe(401);
  });
  it("is 401 without the secret or with a wrong one", async () => {
    vi.stubEnv("REMINDER_SECRET", "s3cret");
    expect((await call()).status).toBe(401);
    expect((await call({ authorization: "Bearer wrong!" })).status).toBe(401);
  });
  it("with the secret it gets past the check (500 here: no VAPID keys)", async () => {
    vi.stubEnv("REMINDER_SECRET", "s3cret");
    vi.stubEnv("NEXT_PUBLIC_VAPID_PUBLIC_KEY", "");
    expect((await call({ authorization: "Bearer s3cret" })).status).toBe(500);
  });
});
