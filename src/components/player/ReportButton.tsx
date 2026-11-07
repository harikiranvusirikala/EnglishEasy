"use client";

import { useEffect, useRef, useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { Dialog } from "@/components/ui/Dialog";
import { Toast } from "@/components/ui/Toast";
import { button, iconButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import type { Bi as ContentBi } from "@/content/types";
import { useLearnIn } from "@/lib/settings-store";
import { submitReport, useReported, type ReportReason } from "@/lib/reports";
import { strings } from "@/lib/strings";

const REASONS: { reason: ReportReason; label: ContentBi }[] = [
  { reason: "telugu", label: strings.reportReasonTelugu },
  { reason: "english", label: strings.reportReasonEnglish },
  { reason: "audio", label: strings.reportReasonAudio },
  { reason: "other", label: strings.reportReasonOther },
];

/**
 * ⚑ in the player's top bar: four tap-only reasons, then "Thank you". One report per activity per device, so the
 * flag is not offered again for an activity already reported. Off an activity (intro, summary) it is an empty slot,
 * so the bar does not shift.
 */
export function ReportButton({ dayId, activityId }: { dayId: string; activityId: string | null }) {
  const learnIn = useLearnIn();
  const reported = useReported(activityId);
  const [open, setOpen] = useState(false);
  const [thanks, setThanks] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const send = (reason: ReportReason) => {
    if (!activityId) return;
    submitReport({ activityId, dayId, reason, learnIn, at: new Date().toISOString() });
    setOpen(false);
    setThanks(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setThanks(false), 3000);
  };

  return (
    <>
      {activityId && !reported ? (
        <button type="button" aria-label={strings.reportProblem.en} onClick={() => setOpen(true)} className={iconButton}>
          <Icon name="flag" />
        </button>
      ) : (
        <span aria-hidden className="size-13 shrink-0" />
      )}
      <Dialog open={open} onClose={() => setOpen(false)} title={strings.reportProblem.en}>
        <div className="flex flex-col gap-2">
          {REASONS.map(({ reason, label }) => (
            <button key={reason} type="button" onClick={() => send(reason)} className={button("secondary")}>
              <Bi label={label} />
            </button>
          ))}
        </div>
      </Dialog>
      {thanks && (
        <Toast className="fixed inset-x-0 bottom-24 z-20 px-4">
          <Bi label={strings.reportThanks} />
        </Toast>
      )}
    </>
  );
}
