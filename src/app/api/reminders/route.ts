import { NextResponse } from "next/server";
import { getDatabase } from "@/server/db";
import { deleteSubscription, saveSubscription } from "@/server/reminders-repo";
import { MAX_REMINDER_BYTES, parseReminder, parseUnsubscribe } from "@/server/reminders-schema";
import { readJsonBody } from "@/server/report-schema";

// Anonymous daily-reminder subscriptions (BUILD_PLAN A7). PUT adds or updates, DELETE removes.
const noStore = { "Cache-Control": "no-store" };
const refuse = (status: 400 | 413, error = "Not accepted") => NextResponse.json({ error }, { status, headers: noStore });

export async function PUT(request: Request) {
  const body = await readJsonBody(request, MAX_REMINDER_BYTES);
  if ("status" in body) return refuse(body.status);
  const reminder = parseReminder(body.value);
  if (!reminder) return refuse(400, "Not a valid reminder");
  const { db } = await getDatabase();
  await saveSubscription(db, reminder);
  return NextResponse.json({ ok: true }, { headers: noStore });
}

export async function DELETE(request: Request) {
  const body = await readJsonBody(request, MAX_REMINDER_BYTES);
  if ("status" in body) return refuse(body.status);
  const endpoint = parseUnsubscribe(body.value);
  if (!endpoint) return refuse(400, "Not a valid reminder");
  const { db } = await getDatabase();
  await deleteSubscription(db, endpoint);
  return NextResponse.json({ ok: true }, { headers: noStore });
}
