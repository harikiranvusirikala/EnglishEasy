import { NextResponse } from "next/server";
import { getDatabase } from "@/server/db";
import { MAX_REPORT_BYTES, parseReport, readJsonBody } from "@/server/report-schema";
import { addReport } from "@/server/reports-repo";

// An anonymous "report a problem" about one activity (BUILD_PLAN A7). One per activity per device is kept by the phone.
const noStore = { "Cache-Control": "no-store" };

export async function POST(request: Request) {
  const body = await readJsonBody(request, MAX_REPORT_BYTES);
  if ("status" in body) return NextResponse.json({ error: "Not accepted" }, { status: body.status, headers: noStore });
  const report = parseReport(body.value);
  if (!report) return NextResponse.json({ error: "Not a valid report" }, { status: 400, headers: noStore });
  const { db } = await getDatabase();
  await addReport(db, report);
  return NextResponse.json({ ok: true }, { headers: noStore });
}
