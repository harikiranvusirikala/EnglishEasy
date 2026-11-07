import { MongoClient, type Db } from "mongodb";

export interface Database {
  client: MongoClient; // needed for transactions
  db: Db;
}

// One client per server instance, reused across requests, hot reloads and serverless invocations.
const cache = globalThis as unknown as { englishEasyMongo?: MongoClient };

function requireEnv(name: "MONGODB_URI" | "MONGODB_DB"): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not set (see .env.example)`);
  return value;
}

/**
 * The app's database, from MONGODB_URI and MONGODB_DB, without connecting: the driver connects on
 * first use. Better Auth gets this at import time, so the build never touches the database. Its
 * queries never connect again after a failed connection, so getUser() and the auth route call
 * getDatabase() first.
 */
export function lazyDatabase(): Database {
  const client = (cache.englishEasyMongo ??= new MongoClient(requireEnv("MONGODB_URI")));
  return { client, db: client.db(requireEnv("MONGODB_DB")) };
}

/** The app's database, connected. A failed connection is retried by the next call (the driver keeps a failed attempt's closed topology). */
export async function getDatabase(): Promise<Database> {
  const database = lazyDatabase();
  await database.client.connect(); // returns at once when already connected
  return database;
}

/** Closes the shared client. For scripts, which must exit when done. */
export async function closeDatabase(): Promise<void> {
  const client = cache.englishEasyMongo;
  cache.englishEasyMongo = undefined;
  await client?.close();
}
