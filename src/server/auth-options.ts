import type { BetterAuthOptions } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { oAuthProxy } from "better-auth/plugins/oauth-proxy";
import { authUrls, type AuthUrlEnv } from "./auth-urls";
import type { Database } from "./db";

export interface AuthEnv extends AuthUrlEnv {
  BETTER_AUTH_SECRET?: string;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  /** Shared by production and previews (never BETTER_AUTH_SECRET, which differs between them). */
  OAUTH_PROXY_SECRET?: string;
}

const DAY = 24 * 60 * 60;

/** Better Auth's settings: Google sign-in, users and sessions in MongoDB (BUILD_PLAN A7). */
export function authOptions(database: Database, env: AuthEnv) {
  const { baseURL, trustedOrigins, productionURL } = authUrls(env);
  return {
    appName: "EnglishEasy",
    baseURL,
    trustedOrigins,
    secret: env.BETTER_AUTH_SECRET,
    // Collections users, sessions, accounts and verifications. Better Auth's Mongo adapter creates
    // no indexes: `npm run db:setup` does.
    database: mongodbAdapter(database.db, { client: database.client, usePlural: true }),
    socialProviders: {
      google: {
        clientId: env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: env.GOOGLE_CLIENT_SECRET ?? "",
        prompt: "select_account", // a shared phone can switch accounts
      },
    },
    user: {
      validateUserInfo: ({ user, source }) =>
        source.method === "oauth" && user.emailVerified !== true
          ? { error: "email_not_verified", errorDescription: "Google hasn't verified this account's email address." }
          : undefined,
    },
    // 30 days, extended while in use. Only /api/auth/get-session extends it.
    session: { expiresIn: 30 * DAY },
    // Google's tokens are kept encrypted, so a copy of the database doesn't hold them in plain text.
    account: { encryptOAuthTokens: true },
    // Failures before the sign-in's own errorCallbackURL is known (e.g. an expired sign-in).
    onAPIError: { errorURL: "/learn/settings" },
    // Previews sign in through production; only when OAUTH_PROXY_SECRET is set.
    plugins:
      productionURL && env.OAUTH_PROXY_SECRET ? [oAuthProxy({ productionURL, secret: env.OAUTH_PROXY_SECRET })] : [],
    telemetry: { enabled: false },
  } satisfies BetterAuthOptions;
}
