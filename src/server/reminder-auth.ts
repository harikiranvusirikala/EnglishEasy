import { timingSafeEqual } from "node:crypto";

/** True when the request carries `Authorization: Bearer <REMINDER_SECRET>`. Nothing is allowed while the secret is not set. */
export function reminderAuthorized(request: Request, secret: string | undefined = process.env.REMINDER_SECRET): boolean {
  if (!secret) return false;
  const given = Buffer.from(request.headers.get("authorization") ?? "");
  const wanted = Buffer.from(`Bearer ${secret}`);
  return given.length === wanted.length && timingSafeEqual(given, wanted);
}
