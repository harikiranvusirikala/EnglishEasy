import { describe, expect, it, vi } from "vitest";
import type { Db } from "mongodb";
import { ensureIndexes, INDEXES } from "./indexes";

describe("indexes", () => {
  it("makes progress.userId unique, reports by day and time, clientErrors by time", () => {
    expect(INDEXES).toContainEqual({ collection: "progress", key: { userId: 1 }, unique: true });
    expect(INDEXES).toContainEqual({ collection: "reports", key: { dayId: 1, at: -1 } });
    expect(INDEXES).toContainEqual({ collection: "clientErrors", key: { at: -1 } });
  });

  it("makes pushSubscriptions.endpoint unique and indexes the hour", () => {
    expect(INDEXES).toContainEqual({ collection: "pushSubscriptions", key: { endpoint: 1 }, unique: true });
    expect(INDEXES).toContainEqual({ collection: "pushSubscriptions", key: { hour: 1 } });
  });

  it("covers Better Auth's collections, with TTL on sessions and verifications", () => {
    const ttl = INDEXES.filter((i) => i.expireAfterSeconds === 0).map((i) => i.collection);
    expect(ttl.sort()).toEqual(["sessions", "verifications"]);
    expect(INDEXES).toContainEqual({ collection: "users", key: { email: 1 }, unique: true });
    expect(INDEXES).toContainEqual({ collection: "sessions", key: { token: 1 }, unique: true });
  });

  it("passes each spec to createIndex", async () => {
    const createIndex = vi.fn().mockResolvedValue("ok");
    const db = { collection: vi.fn(() => ({ createIndex })) } as unknown as Db;
    await ensureIndexes(db);
    expect(createIndex).toHaveBeenCalledTimes(INDEXES.length);
    expect(createIndex).toHaveBeenCalledWith({ userId: 1 }, { unique: true });
    expect(createIndex).toHaveBeenCalledWith({ expiresAt: 1 }, { expireAfterSeconds: 0 });
  });
});
