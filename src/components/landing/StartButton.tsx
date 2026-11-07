"use client";

import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { button } from "@/components/ui/button";
import { course } from "@/content/course";
import { isFirstVisit, locateDay } from "@/learning/home";
import { recommendedDay } from "@/learning/recommend";
import { useProgress } from "@/lib/progress-store";
import { fill, strings } from "@/lib/strings";

/** "Start Day 1 — free", or "Continue Day N" once the phone's saved progress is known (after hydration). */
export function StartButton() {
  const progress = useProgress();
  const target = progress && !isFirstVisit(progress) ? recommendedDay(course, progress) : null;
  const place = target ? locateDay(course, target.dayId) : null;
  if (!target || !place) {
    return (
      <Link href="/learn" className={button("primary", "lg")}>
        <Bi label={strings.landingStart} />
      </Link>
    );
  }
  return (
    <Link href={`/learn/play?l=${encodeURIComponent(target.dayId)}`} className={button("primary", "lg")}>
      <Bi label={fill(strings.landingContinue, { n: place.number })} />
    </Link>
  );
}
