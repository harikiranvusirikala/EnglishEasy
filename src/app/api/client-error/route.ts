import { NextResponse } from "next/server";
import { getDatabase } from "@/server/db";
import { MAX_CLIENT_ERROR_BYTES, parseClientError, readJsonBody } from "@/server/report-schema";
import { addClientError } from "@/server/reports-repo";

// An error from a learner's phone (BUILD_PLAN A7). The phone sends at most 5 a day.
const noStore = { "Cache-Control": "no-store" };

export async function POST(request: Request) {
  const body = await readJsonBody(request, MAX_CLIENT_ERROR_BYTES);
  if ("status" in body) return NextResponse.json({ error: "Not accepted" }, { status: body.status, headers: noStore });
  const error = parseClientError(body.value);
  if (!error) return NextResponse.json({ error: "Not a valid error" }, { status: 400, headers: noStore });
  const { db } = await getDatabase();
  await addClientError(db, error);
  return NextResponse.json({ ok: true }, { headers: noStore });
}
