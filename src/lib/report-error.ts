import { dateKey } from "@/learning/progress";

// Errors from learners' phones reach the owner (BUILD_PLAN A7): the error screens and window.onerror /
// unhandledrejection post to /api/client-error. At most 5 per device per day; never blocks or throws.

export const ERROR_LIMIT_PER_DAY = 5;
export const ERRORS_KEY = "englisheasy.errors.v1";
const URL = "/api/client-error";
const APP_VERSION = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "dev";

interface Counter {
  day: string;
  count: number;
}

/** Counts one more error for `today` unless the limit is reached. `next` is the raw value to store. */
export function countError(raw: string | null, today: string, limit = ERROR_LIMIT_PER_DAY): { allowed: boolean; next: string } {
  let counter: Counter = { day: today, count: 0 };
  try {
    const value = JSON.parse(raw ?? "null") as Partial<Counter> | null;
    if (value && value.day === today && Number.isInteger(value.count) && (value.count as number) >= 0) counter = { day: today, count: value.count as number };
  } catch {
    // unreadable: start the day afresh
  }
  if (counter.count >= limit) return { allowed: false, next: JSON.stringify(counter) };
  return { allowed: true, next: JSON.stringify({ day: today, count: counter.count + 1 }) };
}

export interface ErrorPayload {
  message: string;
  stack: string;
  path: string;
  userAgent: string;
  appVersion: string;
}

/** What to send for anything thrown (an Error, a string, a rejected value). */
export function describeError(error: unknown, path: string, userAgent: string): ErrorPayload {
  const isError = error instanceof Error;
  const message = (isError ? error.message : typeof error === "string" ? error : safeString(error)) || "Unknown error";
  return {
    message: message.slice(0, 1000),
    stack: isError && error.stack ? error.stack.slice(0, 2048) : "",
    path: path.slice(0, 300),
    userAgent: userAgent.slice(0, 300),
    appVersion: APP_VERSION,
  };
}

function safeString(value: unknown): string {
  try {
    return typeof value === "object" && value !== null ? JSON.stringify(value) : String(value);
  } catch {
    return "";
  }
}

let lastMessage: string | null = null; // the same error twice in a row (boundary and window) is sent once

/** Sends one error to the server. Safe to call from anywhere in the browser; it never throws. */
export function reportError(error: unknown): void {
  try {
    const payload = describeError(error, location.pathname, navigator.userAgent);
    if (payload.message === lastMessage) return;
    const today = dateKey(new Date());
    let raw: string | null = null;
    try {
      raw = localStorage.getItem(ERRORS_KEY);
    } catch {
      // storage blocked: still limited by lastMessage
    }
    const { allowed, next } = countError(raw, today);
    if (!allowed) return;
    lastMessage = payload.message;
    try {
      localStorage.setItem(ERRORS_KEY, next);
    } catch {
      // ignore
    }
    void fetch(URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), keepalive: true }).catch(() => {});
  } catch {
    // reporting must never break the screen
  }
}

/** Listens for uncaught errors and unhandled rejections until the returned function is called. */
export function startErrorReporting(): () => void {
  const onError = (event: ErrorEvent) => reportError(event.error ?? event.message);
  const onRejection = (event: PromiseRejectionEvent) => reportError(event.reason);
  window.addEventListener("error", onError);
  window.addEventListener("unhandledrejection", onRejection);
  return () => {
    window.removeEventListener("error", onError);
    window.removeEventListener("unhandledrejection", onRejection);
  };
}
