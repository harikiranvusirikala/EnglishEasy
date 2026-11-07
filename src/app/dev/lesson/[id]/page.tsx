import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { LessonReview } from "./LessonReview";
import type { PlayableDay } from "@/content/types";

// The whole expanded day on one page, Telugu and English side by side, answers marked: for reviewing new content
// quickly. A 404 unless `next dev` or ENABLE_DEV_PAGES=1, like /dev/ui.
export default async function DevLessonPage({ params }: { params: Promise<{ id: string }> }) {
  if (process.env.NODE_ENV !== "development" && process.env.ENABLE_DEV_PAGES !== "1") notFound();
  const { id } = await params;
  if (!/^[a-z0-9-]+$/.test(id)) notFound();
  let day: PlayableDay;
  try {
    day = JSON.parse(await readFile(path.join(process.cwd(), "public", "content", `${id}.json`), "utf8"));
  } catch {
    notFound();
  }
  return <LessonReview day={day} />;
}
