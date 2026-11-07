import type { Db } from "mongodb";
import type { ClientErrorInput, ReportInput } from "./report-schema";

// `reports` and `clientErrors` (BUILD_PLAN A7): anonymous, nothing personal.

interface ReportDoc extends Omit<ReportInput, "at"> {
  at: Date;
}
interface ClientErrorDoc extends ClientErrorInput {
  at: Date;
}

const reports = (db: Db) => db.collection<ReportDoc>("reports");
const clientErrors = (db: Db) => db.collection<ClientErrorDoc>("clientErrors");

export async function addReport(db: Db, report: ReportInput): Promise<void> {
  await reports(db).insertOne({ ...report, at: new Date(report.at) });
}

export async function addClientError(db: Db, error: ClientErrorInput, now: Date = new Date()): Promise<void> {
  await clientErrors(db).insertOne({ ...error, at: now });
}

export async function latestReports(db: Db, limit = 200): Promise<ReportDoc[]> {
  return reports(db).find({}, { projection: { _id: 0 } }).sort({ at: -1 }).limit(limit).toArray();
}

export async function latestClientErrors(db: Db, limit = 100): Promise<ClientErrorDoc[]> {
  return clientErrors(db).find({}, { projection: { _id: 0 } }).sort({ at: -1 }).limit(limit).toArray();
}

export interface Group<T> {
  key: string;
  items: T[];
}

/** Groups in first-seen order (the input is newest first, so the newest groups come first). */
export function groupBy<T>(items: T[], keyOf: (item: T) => string): Group<T>[] {
  const groups = new Map<string, T[]>();
  for (const item of items) {
    const key = keyOf(item);
    groups.set(key, [...(groups.get(key) ?? []), item]);
  }
  return [...groups].map(([key, list]) => ({ key, items: list }));
}
