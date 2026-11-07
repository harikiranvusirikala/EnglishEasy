// Prints the latest problem reports (by day, then reason) and client errors (by message): `npm run reports`.
import { closeDatabase, getDatabase } from "../src/server/db";
import { groupBy, latestClientErrors, latestReports } from "../src/server/reports-repo";

try {
  const { db } = await getDatabase();
  const reports = await latestReports(db);
  const errors = await latestClientErrors(db);

  console.log(`Problem reports in ${db.databaseName} (latest ${reports.length})\n`);
  if (reports.length === 0) console.log("  none\n");
  for (const day of groupBy(reports, (r) => r.dayId)) {
    console.log(day.key);
    for (const reason of groupBy(day.items, (r) => r.reason)) {
      console.log(`  ${reason.key} (${reason.items.length})`);
      for (const r of reason.items) console.log(`    ${r.activityId}  ${r.at.toISOString()}  ${r.learnIn}`);
    }
  }

  console.log(`\nClient errors (latest ${errors.length})\n`);
  if (errors.length === 0) console.log("  none");
  for (const group of groupBy(errors, (e) => e.message)) {
    const first = group.items[0];
    console.log(`${group.items.length} x ${group.key}`);
    console.log(`  latest ${first.at.toISOString()}  ${first.path}  v${first.appVersion}  ${first.userAgent}`);
    if (first.stack) console.log(first.stack.split("\n").slice(0, 4).map((l) => `    ${l}`).join("\n"));
  }
} catch (error) {
  console.error("Could not read the reports:", (error as Error).message);
  process.exitCode = 1;
} finally {
  await closeDatabase();
}
