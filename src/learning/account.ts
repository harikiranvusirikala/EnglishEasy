import type { Bi } from "@/lib/strings";
import type { Progress } from "./progress";

/** What Settings → Account shows. `loading` until the session is known (never guess signed-out). */
export type AccountState =
  | { kind: "loading" }
  | { kind: "signedOut" }
  | { kind: "signedIn"; name: string; email: string; image: string | null };

/** The slice of Better Auth's `useSession()` this app reads. */
export interface SessionLike {
  data: { user: { name?: string | null; email?: string | null; image?: string | null } } | null;
  isPending: boolean;
}

export function accountState(session: SessionLike | null): AccountState {
  if (!session || session.isPending) return { kind: "loading" };
  const user = session.data?.user;
  if (!user) return { kind: "signedOut" };
  const email = user.email ?? "";
  return { kind: "signedIn", name: user.name?.trim() || email, email, image: user.image?.startsWith("https://") ? user.image : null };
}

/** The first word of the Google name ("Hari Kiran" → "Hari"); null when there is none. */
export function firstName(state: AccountState): string | null {
  if (state.kind !== "signedIn") return null;
  return state.name.split(/\s+/)[0] || null;
}

/** Greeting with the name: "Good morning, Hari" in both languages. */
export function greetWithName(greeting: Bi, name: string | null): Bi {
  return name ? { en: `${greeting.en}, ${name}`, te: `${greeting.te}, ${name}` } : greeting;
}

/** The `?error=` Better Auth adds when it sends the learner back after a failed sign-in. */
export type SignInErrorKind = "cancelled" | "emailNotVerified" | "other";
export function signInErrorKind(code: string | null | undefined): SignInErrorKind | null {
  if (!code) return null;
  if (code === "access_denied") return "cancelled";
  if (code === "email_not_verified") return "emailNotVerified";
  return "other";
}

export const SAVE_CARD_ID = "save-progress-card";

/** "Save your progress with Google": for a signed-out learner who has done something, until they dismiss it. */
export function saveCardVisible(account: AccountState, progress: Progress, dismissed: string[]): boolean {
  if (account.kind !== "signedOut" || dismissed.includes(SAVE_CARD_ID)) return false;
  return Object.keys(progress.completed).length > 0 || Object.keys(progress.activities).length > 0;
}
