import { useSyncExternalStore } from "react";

// Browser side of the installable app: registering the service worker (production only), asking it to keep
// lesson files, and the install prompt. Everything here runs after hydration; `useInstallState` is null before.

type InstallPrompt = Event & { prompt: () => Promise<void> };

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

let deferred: InstallPrompt | null = null;
let installedNow = false;
let listening = false;

/** Starts listening for the browser's install offer; the shell calls it once, early. */
export function listenForInstall() {
  if (listening || typeof window === "undefined") return;
  listening = true;
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault(); // keep it for the Install button
    deferred = event as InstallPrompt;
    notify();
  });
  window.addEventListener("appinstalled", () => {
    deferred = null;
    installedNow = true;
    notify();
  });
}

/** Shows the browser's install dialog. */
export async function promptInstall() {
  const offer = deferred;
  if (!offer) return;
  deferred = null; // an offer can be used once
  notify();
  await offer.prompt();
}

const isStandalone = () => installedNow || (typeof matchMedia === "function" && matchMedia("(display-mode: standalone)").matches) || (navigator as Navigator & { standalone?: boolean }).standalone === true;
const isIos = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

export type InstallState = { standalone: boolean; ios: boolean; canPrompt: boolean };

let cachedKey = "";
let cachedState: InstallState = { standalone: false, ios: false, canPrompt: false };

function readInstall(): InstallState {
  const next = { standalone: isStandalone(), ios: isIos(), canPrompt: deferred !== null };
  const key = `${next.standalone}${next.ios}${next.canPrompt}`;
  if (key !== cachedKey) {
    cachedKey = key;
    cachedState = next;
  }
  return cachedState;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => void listeners.delete(listener);
}

/** What the phone can do about installing, or null on the server and before hydration. */
export function useInstallState(): InstallState | null {
  return useSyncExternalStore(subscribe, readInstall, () => null);
}

/** Registers `/sw.js` in production. `onUpdate` gets a function that activates a waiting new version and reloads. */
export async function registerServiceWorker(onUpdate: (apply: () => void) => void): Promise<ServiceWorkerRegistration | null> {
  if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return null;
  try {
    const registration = await navigator.serviceWorker.register("/sw.js");
    const offer = (worker: ServiceWorker) =>
      onUpdate(() => {
        navigator.serviceWorker.addEventListener("controllerchange", () => location.reload(), { once: true });
        worker.postMessage({ type: "SKIP_WAITING" });
      });
    // A new version only counts as an update when an older one is already running the page.
    if (registration.waiting && navigator.serviceWorker.controller) offer(registration.waiting);
    registration.addEventListener("updatefound", () => {
      const worker = registration.installing;
      worker?.addEventListener("statechange", () => {
        if (worker.state === "installed" && navigator.serviceWorker.controller) offer(worker);
      });
    });
    return registration;
  } catch {
    return null; // no service worker: the app still works online
  }
}

/** Asks the running worker to keep these files for offline use. */
export async function keepFiles(urls: string[]) {
  if (urls.length === 0 || !("serviceWorker" in navigator) || process.env.NODE_ENV !== "production") return;
  try {
    const registration = await navigator.serviceWorker.ready;
    registration.active?.postMessage({ type: "CACHE_URLS", urls });
  } catch {
    // Offline keeping is a bonus; ignore.
  }
}
