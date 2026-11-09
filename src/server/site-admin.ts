/**
 * The site's owners, who may open the site stats and feedback at /admin (owner request, 2026-11-09): the
 * comma-separated `SITE_ADMIN_EMAILS`. Without it, nobody. Read on the server only; the browser only ever learns
 * yes (the page) or no ("page not found").
 */

/** One way to write an address: lower case; for Gmail, dots and +tags dropped (they reach the same inbox). */
export function normalizeEmail(email: string): string {
  const lower = email.trim().toLowerCase();
  const at = lower.lastIndexOf("@");
  if (at < 1) return lower;
  let [name, domain] = [lower.slice(0, at), lower.slice(at + 1)];
  if (domain === "googlemail.com") domain = "gmail.com";
  if (domain === "gmail.com") name = name.split("+")[0].replaceAll(".", "");
  return `${name}@${domain}`;
}

export function isSiteAdmin(email: string, env: Record<string, string | undefined> = process.env): boolean {
  const admins = (env.SITE_ADMIN_EMAILS ?? "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean)
    .map(normalizeEmail);
  return !!email.trim() && admins.includes(normalizeEmail(email));
}
