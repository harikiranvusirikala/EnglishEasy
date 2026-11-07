// Creates the collections' indexes in MONGODB_DB: `npm run db:setup`. Safe to run repeatedly.
import { closeDatabase, getDatabase } from "../src/server/db";
import { ensureIndexes } from "../src/server/indexes";

try {
  const { db } = await getDatabase();
  await ensureIndexes(db);
  console.log(`Indexes are in place in ${db.databaseName}.`);
} catch (error) {
  console.error("Could not create the indexes:", (error as Error).message);
  process.exitCode = 1;
} finally {
  await closeDatabase();
}
