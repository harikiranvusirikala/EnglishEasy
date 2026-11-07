import { NextResponse } from "next/server";
import { getDatabase } from "@/server/db";
import { getUser } from "@/server/permissions";
import { loadProgress, saveProgress } from "@/server/progress-repo";
import { MAX_PROGRESS_BYTES, parseProgressBody } from "@/server/progress-schema";

// The signed-in learner's saved progress. The client merges; the server stores (BUILD_PLAN A7).
const noStore = { "Cache-Control": "no-store" };

export async function GET() {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Sign in first" }, { status: 401, headers: noStore });
  const { db } = await getDatabase();
  return NextResponse.json({ progress: await loadProgress(db, user.id) }, { headers: noStore });
}

export async function PUT(request: Request) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Sign in first" }, { status: 401, headers: noStore });
  const declared = Number(request.headers.get("content-length") ?? 0);
  if (declared > MAX_PROGRESS_BYTES) return NextResponse.json({ error: "Too large" }, { status: 413, headers: noStore });
  const text = await request.text();
  if (text.length > MAX_PROGRESS_BYTES) return NextResponse.json({ error: "Too large" }, { status: 413, headers: noStore });
  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Not JSON" }, { status: 400, headers: noStore });
  }
  const progress = parseProgressBody(body);
  if (!progress) return NextResponse.json({ error: "Not valid progress" }, { status: 400, headers: noStore });
  const { db } = await getDatabase();
  await saveProgress(db, user.id, progress);
  return NextResponse.json({ ok: true }, { headers: noStore });
}
