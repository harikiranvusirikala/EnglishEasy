import type { Db } from "mongodb";

/**
 * Every collection's indexes (BUILD_PLAN A7). Better Auth's Mongo adapter creates none for its own
 * collections (users, sessions, accounts, verifications), so they are here too. If Better Auth is ever
 * given `indexes` options, use the same keys, or MongoDB refuses the duplicate under another name.
 */
export interface IndexSpec {
  collection: string;
  key: Record<string, 1 | -1>;
  unique?: boolean;
  /** Seconds after the date in `key`; a TTL index removes expired documents. */
  expireAfterSeconds?: number;
}

export const INDEXES: IndexSpec[] = [
  { collection: "users", key: { email: 1 }, unique: true },
  { collection: "sessions", key: { token: 1 }, unique: true },
  { collection: "sessions", key: { userId: 1 } },
  { collection: "sessions", key: { expiresAt: 1 }, expireAfterSeconds: 0 },
  { collection: "accounts", key: { userId: 1 } },
  { collection: "accounts", key: { providerId: 1, accountId: 1 } },
  { collection: "verifications", key: { identifier: 1 } },
  { collection: "verifications", key: { expiresAt: 1 }, expireAfterSeconds: 0 },
  { collection: "progress", key: { userId: 1 }, unique: true },
  { collection: "reports", key: { dayId: 1, at: -1 } },
  { collection: "clientErrors", key: { at: -1 } },
];

/** Creates the indexes in `db`. Safe to run repeatedly. */
export async function ensureIndexes(db: Db, specs: IndexSpec[] = INDEXES): Promise<void> {
  for (const { collection, key, unique, expireAfterSeconds } of specs) {
    await db.collection(collection).createIndex(key, {
      ...(unique && { unique }),
      ...(expireAfterSeconds !== undefined && { expireAfterSeconds }),
    });
  }
}
