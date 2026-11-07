// Google Tag Manager, on the landing page only. Pure, so the ID check is unit-tested.

/** process.env, or a test's own. Reads GTM_ID: the owner's container, e.g. GTM-KZDLK4PQ, set in Vercel's Production only and read when the site is built. */
export type TagManagerEnv = Record<string, string | undefined>;

/** GTM_ID if it is a container ID ("GTM-", then capital letters and digits), otherwise nothing, so a typo can't put other text into the page's script. */
export function gtmId(env: TagManagerEnv): string | undefined {
  const id = env.GTM_ID?.trim();
  return id && /^GTM-[A-Z0-9]+$/.test(id) ? id : undefined;
}
