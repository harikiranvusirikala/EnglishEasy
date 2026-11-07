import { useSyncExternalStore } from "react";
import type { LearnIn } from "@/learning/settings";

// "Report a problem" on the phone (BUILD_PLAN A7): one report per activity per device, remembered locally and queued
// while offline. Nothing here throws; with storage blocked, the memory lasts until the page reloads.

export type ReportReason = "telugu" | "english" | "audio" | "other";
export interface Report {
  activityId: string;
  dayId: string;
  reason: ReportReason;
  learnIn: LearnIn;
  at: string;
}
export interface ReportState {
  /** Activity ids already reported from this phone. */
  reported: string[];
  /** Reports not yet delivered. */
  queue: Report[];
}

export const REPORTS_KEY = "englisheasy.reports.v1";
const URL = "/api/report";
const EMPTY: ReportState = { reported: [], queue: [] };

/** Reads saved state; anything unreadable is empty. */
export function parseReportState(raw: string | null): ReportState {
  if (!raw) return EMPTY;
  try {
    const value = JSON.parse(raw) as Partial<ReportState>;
    const reported = Array.isArray(value.reported) ? value.reported.filter((x): x is string => typeof x === "string") : [];
    const queue = Array.isArray(value.queue)
      ? value.queue.filter((r): r is Report => !!r && typeof r.activityId === "string" && typeof r.dayId === "string" && typeof r.reason === "string" && typeof r.learnIn === "string" && typeof r.at === "string")
      : [];
    return { reported, queue };
  } catch {
    return EMPTY;
  }
}

/** Adds a report unless this activity was reported already. */
export function addToState(state: ReportState, report: Report): ReportState {
  if (state.reported.includes(report.activityId)) return state;
  return { reported: [...state.reported, report.activityId], queue: [...state.queue, report] };
}

const listeners = new Set<() => void>();
let memory: ReportState | null = null; // used when storage is blocked
let cachedRaw: string | null | undefined;
let cached: ReportState = EMPTY;

function read(): ReportState {
  try {
    const raw = localStorage.getItem(REPORTS_KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cached = parseReportState(raw);
    }
    return cached;
  } catch {
    return memory ?? EMPTY;
  }
}

function write(next: ReportState) {
  try {
    localStorage.setItem(REPORTS_KEY, JSON.stringify(next));
  } catch {
    memory = next;
  }
  listeners.forEach((l) => l());
}

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === REPORTS_KEY || event.key === null) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
};

/** Whether this phone already reported the activity (false until hydrated). */
export function useReported(activityId: string | null): boolean {
  return useSyncExternalStore(
    subscribe,
    () => (activityId !== null && read().reported.includes(activityId)),
    () => false,
  );
}

let flushing = false;

/** Sends queued reports. A report the server refuses (4xx) is dropped; a network or server failure keeps it for later. */
export async function flushReports(fetcher: typeof fetch = (...args) => fetch(...args)): Promise<void> {
  if (flushing) return;
  flushing = true;
  try {
    for (const report of read().queue) {
      let status: number;
      try {
        status = (await fetcher(URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(report) })).status;
      } catch {
        return;
      }
      if (status >= 500) return;
      const current = read();
      write({ ...current, queue: current.queue.filter((r) => r !== report && !(r.activityId === report.activityId && r.at === report.at)) });
    }
  } finally {
    flushing = false;
  }
}

/** Remembers the report (one per activity) and tries to send it now. Returns false when it was reported before. */
export function submitReport(report: Report): boolean {
  const before = read();
  const next = addToState(before, report);
  if (next === before) return false;
  write(next);
  void flushReports();
  return true;
}
