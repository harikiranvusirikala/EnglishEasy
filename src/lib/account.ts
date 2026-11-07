"use client";

import { accountState, type AccountState } from "@/learning/account";
import { authClient } from "./auth-client";

/**
 * Who is signed in. `loading` on the server and until the session arrives, so screens wait instead of
 * guessing. Offline or failing requests read as signed out.
 */
export function useAccount(): AccountState {
  const session = authClient.useSession();
  return accountState({ data: session.data, isPending: session.isPending });
}
