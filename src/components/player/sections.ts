import type { IllustrationName } from "@/components/illustrations/Illustration";
import type { IconName } from "@/components/ui/icons";
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

/** Each section's icon (the section chip, the overview's checklist). */
export const SECTION_ICON: Record<SectionKind, IconName> = {
  warmup: "sparkle",
  learn: "book",
  practice: "tiles",
  speak: "mic",
  roleplay: "chat",
  wrapup: "star",
};

/** Each section's illustration (its intro screen). */
export const SECTION_ILLUSTRATION: Record<SectionKind, IllustrationName> = {
  warmup: "welcome",
  learn: "learn",
  practice: "practice",
  speak: "speak",
  roleplay: "roleplay",
  wrapup: "complete",
};

/** One line on each section's intro screen: what happens in it. */
export const SECTION_ABOUT: Record<SectionKind, Bi> = {
  warmup: strings.aboutWarmup,
  learn: strings.aboutLearn,
  practice: strings.aboutPractice,
  speak: strings.aboutSpeak,
  roleplay: strings.aboutRoleplay,
  wrapup: strings.aboutWrapup,
};
