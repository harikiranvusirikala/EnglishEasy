import { NextResponse } from "next/server";
import { getDatabase } from "@/server/db";
import { addFeedback } from "@/server/feedback-repo";
import { MAX_FEEDBACK_BYTES, parseFeedback } from "@/server/feedback-schema";
import { readJsonBody } from "@/server/report-schema";

// Anonymous feedback: a message from Settings or a lesson's rating (BUILD_PLAN "feedback in the app"). The phone keeps
// the limits (one message a day, one rating per lesson); the size and shape are checked here.
const noStore = { "Cache-Control": "no-store" };

export async function POST(request: Request) {
  const body = await readJsonBody(request, MAX_FEEDBACK_BYTES);
  if ("status" in body) return NextResponse.json({ error: "Not accepted" }, { status: body.status, headers: noStore });
  const input = parseFeedback(body.value);
  if (!input) return NextResponse.json({ error: "Not valid feedback" }, { status: 400, headers: noStore });
  const { db } = await getDatabase();
  await addFeedback(db, input);
  return NextResponse.json({ ok: true }, { headers: noStore });
}
