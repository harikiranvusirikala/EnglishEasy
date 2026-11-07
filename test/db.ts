import { MongoClient, type Db } from "mongodb";

const PREFIX = "englisheasy_test_";

/** englisheasy_test_<base-36 time>_<label>; the time lets stale databases be found later. */
export const testDatabaseName = (label: string) => `${PREFIX}${Date.now().toString(36)}_${label}`;

/** Removes a database by dropping its collections: MongoDB deletes a database once it has none (the app's user can't drop databases). */
export async function emptyDatabase(db: Db): Promise<void> {
  for (const { name } of await db.listCollections({}, { nameOnly: true }).toArray()) await db.dropCollection(name);
}

/** Removes test databases older than an hour, left behind by runs that crashed. */
export async function dropStaleTestDatabases(client: MongoClient): Promise<void> {
  try {
    const { databases } = await client.db().admin().listDatabases({ nameOnly: true });
    for (const { name } of databases) {
      if (!name.startsWith(PREFIX)) continue;
      const created = parseInt(name.slice(PREFIX.length).split("_")[0], 36);
      if (!(Date.now() - created < 3_600_000)) await emptyDatabase(client.db(name));
    }
  } catch (error) {
    console.warn("Could not clean up old test databases:", (error as Error).message);
  }
}

function uri(): string {
  const value = process.env.MONGODB_URI;
  if (!value) throw new Error("MONGODB_URI is not set (see .env.example)");
  return value;
}

/** A throwaway database for one test file. Call drop() in afterAll. */
export async function createTestDatabase(): Promise<{ client: MongoClient; db: Db; drop(): Promise<void> }> {
  const client = await new MongoClient(uri()).connect();
  const db = client.db(testDatabaseName(Math.random().toString(36).slice(2, 6)));
  return {
    client,
    db,
    async drop() {
      await emptyDatabase(db);
      await client.close();
    },
  };
}

export async function withAdminClient<T>(run: (client: MongoClient) => Promise<T>): Promise<T> {
  const client = await new MongoClient(uri()).connect();
  try {
    return await run(client);
  } finally {
    await client.close();
  }
}
