import type { SectionKind } from "@/content/types";
import { strings, type Bi } from "@/lib/strings";

/** The name of each lesson section, shown in the player, the lesson overview and the complete screen. */
export const SECTION_NAME: Record<SectionKind, Bi> = {
  warmup: strings.sectionWarmup,
  learn: strings.sectionLearn,
  practice: strings.sectionPractice,
  speak: strings.sectionSpeak,
  roleplay: strings.sectionRoleplay,
  wrapup: strings.sectionWrapup,
};
