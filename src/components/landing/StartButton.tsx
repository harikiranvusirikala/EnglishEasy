"use client";

import Link from "next/link";
import { button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { course } from "@/content/course";
import { isFirstVisit, locateDay } from "@/learning/home";
import { recommendedDay } from "@/learning/recommend";
import { useProgress } from "@/lib/progress-store";
import { fill, strings } from "@/lib/strings";

/**
 * "Start Day 1 — free", or "Continue Day N" once the phone's saved progress is known (after hydration). Each copy on
 * the page has its own words, so tests and screen readers can tell them apart: the header's small one says
 * "Start learning" / "Continue", the closing call to action "Start learning for free" / "Continue where you left off".
 */
export function StartButton({ size = "lg", tone = "primary" }: { size?: "md" | "lg"; tone?: "primary" | "onBrand" }) {
  const progress = useProgress();
  const target = progress && !isFirstVisit(progress) ? recommendedDay(course, progress) : null;
  const place = target ? locateDay(course, target.dayId) : null;
  const cta = tone === "onBrand";
  const style = button(cta ? "onBrand" : "primary", size);
  const arrow = size === "lg" && <Icon name="arrowRight" className="size-5" />;
  if (!target || !place) {
    return (
      <Link href="/learn" className={style}>
        {(cta ? strings.landingCtaStart : size === "md" ? strings.landingStartShort : strings.landingStart).en}
        {arrow}
      </Link>
    );
  }
  return (
    <Link href={`/learn/play?l=${encodeURIComponent(target.dayId)}`} className={style}>
      {(cta ? strings.landingCtaContinue : size === "md" ? strings.landingContinueShort : fill(strings.landingContinue, { n: place.number })).en}
      {arrow}
    </Link>
  );
}
