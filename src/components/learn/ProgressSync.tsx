"use client";

import { useEffect } from "react";
import { useAccount } from "@/lib/account";
import { startProgressSync } from "@/lib/sync";

/** Behind every learning screen: while signed in, keeps this phone's progress and the account's in step. Shows nothing. */
export function ProgressSync() {
  const signedIn = useAccount().kind === "signedIn";
  useEffect(() => (signedIn ? startProgressSync() : undefined), [signedIn]);
  return null;
}
