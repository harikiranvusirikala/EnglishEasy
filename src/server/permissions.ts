import "server-only";
import { cache } from "react";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getAuth } from "./auth";
import { getDatabase } from "./db";
import { isSiteAdmin } from "./site-admin";

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  /** Google's photo address; null without one. */
  image: string | null;
}

/**
 * The signed-in user, or null. Read from the database on every request. Server Components can't write
 * cookies, so this never extends the session; the client's useSession() does that through /api/auth/get-session.
 * Route handlers answer 401 on null.
 */
export const getUser = cache(async (): Promise<SessionUser | null> => {
  await getDatabase(); // connects again after a failed connection, which Better Auth's queries never do
  const session = await getAuth().api.getSession({ headers: await headers(), query: { disableRefresh: true } });
  if (!session) return null;
  const { id, name, email, image } = session.user;
  return { id, name, email, image: image ?? null };
});

/** The owner, for /admin and its Server Actions; anyone else (signed out included) gets "page not found". */
export async function requireSiteAdmin(): Promise<SessionUser> {
  const user = await getUser();
  if (!user || !isSiteAdmin(user.email)) notFound();
  return user;
}
