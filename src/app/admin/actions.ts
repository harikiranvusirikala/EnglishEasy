"use server";

import { refresh } from "next/cache";
import { getDatabase } from "@/server/db";
import { markFeedbackDone } from "@/server/feedback-repo";
import { requireSiteAdmin } from "@/server/permissions";
import { markReportsDone } from "@/server/reports-repo";

// The Done buttons on /admin/feedback. Each checks the owner again: a Server Action can be called directly.

export async function feedbackDone(form: FormData) {
  await requireSiteAdmin();
  const id = form.get("id");
  if (typeof id !== "string") return;
  const { db } = await getDatabase();
  await markFeedbackDone(db, id);
  refresh();
}

export async function reportsDone(form: FormData) {
  await requireSiteAdmin();
  const activityId = form.get("activityId");
  if (typeof activityId !== "string" || activityId.length > 200) return;
  const { db } = await getDatabase();
  await markReportsDone(db, activityId);
  refresh();
}
