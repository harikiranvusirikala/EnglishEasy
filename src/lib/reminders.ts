import { useSyncExternalStore } from "react";
import { useInstallState } from "@/lib/pwa";
import { reminderMode, type ReminderMode } from "@/learning/reminder-due";
import type { LearnIn } from "@/learning/settings";

// Daily reminders on the phone (BUILD_PLAN A7, Step 21): permission, the push subscription through the service
// worker, and telling the server. Everything here runs after hydration. The chosen hour is also kept locally.

export const REMINDER_KEY = "englisheasy.reminder.v1";
const URL = "/api/reminders";
const READY_WAIT = 8000; // no service worker (e.g. `npm run dev`): give up instead of waiting for ever

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());
let blocked: number | null | undefined; // when storage is blocked, the choice lasts until the page reloads

function read(): number | null {
  try {
    const n = Number(JSON.parse(localStorage.getItem(REMINDER_KEY) ?? "null")?.hour);
    return Number.isInteger(n) ? n : null;
  } catch {
    return blocked ?? null;
  }
}

function write(hour: number | null) {
  try {
    if (hour === null) localStorage.removeItem(REMINDER_KEY);
    else localStorage.setItem(REMINDER_KEY, JSON.stringify({ hour }));
  } catch {
    blocked = hour;
  }
  notify();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const changed = (event: StorageEvent) => {
    if (event.key === REMINDER_KEY || event.key === null) listener();
  };
  window.addEventListener("storage", changed);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", changed);
  };
}

/** The chosen reminder hour (8, 13, 18 or 20), `null` for Off, or `undefined` before hydration. */
export function useReminderHour(): number | null | undefined {
  return useSyncExternalStore(subscribe, read, () => undefined);
}

const hasPush = () => "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;

/** What Settings should offer on this phone, or null before hydration. */
export function useReminderMode(): ReminderMode | null {
  const install = useInstallState();
  const permission = useSyncExternalStore(
    subscribe,
    () => (typeof Notification === "undefined" ? "default" : Notification.permission),
    () => null,
  );
  if (!install || permission === null) return null;
  return reminderMode({ ios: install.ios, standalone: install.standalone, hasPush: hasPush(), permission });
}

function keyBytes(base64Url: string): Uint8Array<ArrayBuffer> {
  const padded = (base64Url + "=".repeat((4 - (base64Url.length % 4)) % 4)).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(padded);
  const bytes = new Uint8Array(new ArrayBuffer(raw.length));
  for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
  return bytes;
}

async function registration(): Promise<ServiceWorkerRegistration | null> {
  const wait = new Promise<null>((resolve) => setTimeout(() => resolve(null), READY_WAIT));
  return Promise.race([navigator.serviceWorker.ready, wait]);
}

let lastPushed = "";

/** Tells the server about this subscription; unchanged details are not sent twice. Returns false when the server did not accept. */
async function putSubscription(subscription: PushSubscription, hour: number, learnIn: LearnIn, lastPracticeDay: string | null): Promise<boolean> {
  const body = JSON.stringify({
    subscription: subscription.toJSON(),
    hour,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    learnIn,
    lastPracticeDay,
  });
  if (body === lastPushed) return true;
  try {
    const response = await fetch(URL, { method: "PUT", headers: { "Content-Type": "application/json" }, body });
    if (!response.ok) return false;
    lastPushed = body;
    return true;
  } catch {
    return false;
  }
}

export type EnableResult = "on" | "denied" | "failed";

/** Asks for permission, subscribes through the service worker and saves the time on the server. */
export async function enableReminder(hour: number, learnIn: LearnIn, lastPracticeDay: string | null): Promise<EnableResult> {
  try {
    if (!hasPush()) return "failed";
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return permission === "denied" ? "denied" : "failed";
    const worker = await registration();
    const key = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
    if (!worker || !key) return "failed";
    const subscription =
      (await worker.pushManager.getSubscription()) ?? (await worker.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: keyBytes(key) }));
    if (!(await putSubscription(subscription, hour, learnIn, lastPracticeDay))) return "failed";
    write(hour);
    return "on";
  } catch {
    return "failed";
  }
}

/** Turns reminders off: the server forgets this phone, then the phone unsubscribes. */
export async function disableReminder(): Promise<void> {
  write(null);
  lastPushed = "";
  try {
    const worker = await registration();
    const subscription = await worker?.pushManager.getSubscription();
    if (!subscription) return;
    await fetch(URL, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ endpoint: subscription.endpoint }) }).catch(() => {});
    await subscription.unsubscribe();
  } catch {
    // Already off on this phone; a leftover server copy is deleted when its push service reports it gone.
  }
}

/** Keeps the server's copy current (language, time zone, last practised day) while reminders are on. A permission taken away turns them off. */
export async function refreshReminder(hour: number, learnIn: LearnIn, lastPracticeDay: string | null): Promise<void> {
  try {
    if (!hasPush()) return;
    if (Notification.permission !== "granted") return write(null);
    const worker = await registration();
    const subscription = await worker?.pushManager.getSubscription();
    if (!subscription) return write(null);
    await putSubscription(subscription, hour, learnIn, lastPracticeDay);
  } catch {
    // Retried on the next change or app open.
  }
}
