import { NextResponse } from "next/server";
import { sendNotification, setVapidDetails } from "web-push";
import { getDatabase } from "@/server/db";
import { reminderAuthorized } from "@/server/reminder-auth";
import { allSubscriptions, deleteSubscription, markSent } from "@/server/reminders-repo";
import { sendDueReminders } from "@/server/reminders-send";

// Called every hour by .github/workflows/reminders.yml with REMINDER_SECRET (BUILD_PLAN A7).
export const dynamic = "force-dynamic";
const noStore = { "Cache-Control": "no-store" };

export async function POST(request: Request) {
  if (!reminderAuthorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: noStore });
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  const subject = process.env.VAPID_SUBJECT;
  if (!publicKey || !privateKey || !subject) return NextResponse.json({ error: "VAPID keys are not set" }, { status: 500, headers: noStore });
  setVapidDetails(subject, publicKey, privateKey);

  const { db } = await getDatabase();
  const result = await sendDueReminders(
    { all: () => allSubscriptions(db), markSent: (endpoint, day) => markSent(db, endpoint, day), remove: (endpoint) => deleteSubscription(db, endpoint) },
    async (sub, payload) => {
      await sendNotification({ endpoint: sub.endpoint, keys: sub.keys }, JSON.stringify(payload), { TTL: 6 * 60 * 60, urgency: "normal" });
    },
  );
  return NextResponse.json(result, { headers: noStore });
}
