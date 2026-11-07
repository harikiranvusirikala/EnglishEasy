import "server-only";
import { betterAuth } from "better-auth";
import { authOptions, type AuthEnv } from "./auth-options";
import { lazyDatabase } from "./db";

const cache = globalThis as unknown as { englishEasyAuth?: ReturnType<typeof createAuth> };

function createAuth() {
  return betterAuth(authOptions(lazyDatabase(), process.env as AuthEnv));
}

/**
 * Better Auth: Google sign-in, with users and sessions in MongoDB. Routes: app/api/auth/[...all].
 * Created on first use, not on import, so `next build` works without the environment variables.
 */
export function getAuth() {
  return (cache.englishEasyAuth ??= createAuth());
}
