import { mergeProgress, sameProgress } from "@/learning/merge";
import { parseProgress, type Progress } from "@/learning/progress";
import { getProgress, subscribeProgress, updateProgress } from "./progress-store";

// Progress sync for signed-in learners (BUILD_PLAN A7). On sign-in and on app open: GET, merge, save locally, PUT if the
// server lacks something. After changes: PUT, debounced 3 s. Offline or failing: retry on `online` and when the app is
// shown again. Signed out or offline, nothing here throws or changes progress.

export const PUSH_DELAY_MS = 3000;
const URL = "/api/progress";

export type SyncStatus = "ok" | "signed-out" | "failed";

export interface SyncDeps {
  fetch: typeof fetch;
  get: () => Progress;
  update: (change: (p: Progress) => Progress) => void;
}

const browserDeps = (): SyncDeps => ({ fetch: (...args) => fetch(...args), get: getProgress, update: updateProgress });

/** Sends the phone's progress to the account. `sent` is what the server now holds. */
export async function push(deps: SyncDeps): Promise<{ status: SyncStatus; sent?: Progress }> {
  const sent = deps.get();
  try {
    const res = await deps.fetch(URL, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(sent) });
    if (res.status === 401) return { status: "signed-out" };
    return res.ok ? { status: "ok", sent } : { status: "failed" };
  } catch {
    return { status: "failed" };
  }
}

/** Fetches the account's progress, merges it into the phone's (saved locally), and sends the result back if the account lacked anything. */
export async function pull(deps: SyncDeps): Promise<{ status: SyncStatus; synced?: Progress }> {
  let remote: Progress | null;
  try {
    const res = await deps.fetch(URL, { cache: "no-store" });
    if (res.status === 401) return { status: "signed-out" };
    if (!res.ok) return { status: "failed" };
    const body = (await res.json()) as { progress: unknown };
    remote = body.progress ? parseProgress(JSON.stringify(body.progress)) : null;
  } catch {
    return { status: "failed" };
  }
  if (!remote) return finish(deps, null);
  const theirs = remote;
  deps.update((local) => {
    const merged = mergeProgress(local, theirs);
    return sameProgress(merged, local) ? local : merged;
  });
  return finish(deps, theirs);
}

async function finish(deps: SyncDeps, remote: Progress | null): Promise<{ status: SyncStatus; synced?: Progress }> {
  const local = deps.get();
  if (remote && sameProgress(local, remote)) return { status: "ok", synced: local };
  const result = await push(deps);
  return { status: result.status, synced: result.sent };
}

/** Keeps the account and the phone in step until the returned function is called. Browser only. */
export function startProgressSync(deps: SyncDeps = browserDeps()): () => void {
  let stopped = false;
  let lastSent: string | null = null; // the progress the server is known to hold
  let timer: ReturnType<typeof setTimeout> | undefined;
  let chain: Promise<void> = Promise.resolve();
  const queue = (job: () => Promise<void>) => {
    chain = chain.then(job).catch(() => {});
  };

  const record = (status: SyncStatus, synced?: Progress) => {
    if (status === "ok" && synced) lastSent = JSON.stringify(synced);
    if (status === "signed-out") stopped = true;
  };
  const syncNow = () => queue(async () => {
    if (stopped) return;
    const { status, synced } = await pull(deps);
    record(status, synced);
  });
  const pushNow = () => queue(async () => {
    if (stopped || JSON.stringify(deps.get()) === lastSent) return;
    const { status, sent } = await push(deps);
    record(status, sent);
  });

  const changed = () => {
    if (stopped || JSON.stringify(deps.get()) === lastSent) return;
    clearTimeout(timer);
    timer = setTimeout(pushNow, PUSH_DELAY_MS);
  };
  const online = () => syncNow();
  const shown = () => {
    if (document.visibilityState === "visible") syncNow();
  };

  syncNow();
  const unsubscribe = subscribeProgress(changed);
  window.addEventListener("online", online);
  document.addEventListener("visibilitychange", shown);
  return () => {
    stopped = true;
    clearTimeout(timer);
    unsubscribe();
    window.removeEventListener("online", online);
    document.removeEventListener("visibilitychange", shown);
  };
}
