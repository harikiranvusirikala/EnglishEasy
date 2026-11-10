"use client";

import { useEffect, useRef, useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { ContentText } from "@/components/ui/ContentText";
import { button, focusRing, pillButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import type { Activity } from "@/content/types";
import { listen, stopListening, useListenSupport } from "@/lib/listen";
import { useSettings } from "@/lib/settings-store";
import { fill, strings } from "@/lib/strings";
import { MicButton } from "./MicButton";
import { BottomBar, FeedbackPanel, MainButton } from "./parts";

type MissionActivity = Extract<Activity, { type: "mission" }>;

const clock = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

/**
 * A checkpoint's speaking mission (CURRICULUM §2b): talk for `seconds`, with prompts to lean on. It counts time only,
 * never judges the words; the microphone is opened (where the phone can listen) so it feels like speaking to someone.
 * "Not now" always goes on: speaking never blocks progress.
 */
export function Mission({ activity, onNext }: { activity: MissionActivity; onNext: () => void }) {
  const settings = useSettings();
  const support = useListenSupport();
  const canListen = support === true && settings?.noSpeaking !== true;
  const [phase, setPhase] = useState<"ready" | "running" | "done">("ready");
  const [elapsed, setElapsed] = useState(0);
  const timer = useRef<number | undefined>(undefined);
  const startedAt = useRef(0);

  const stop = () => {
    window.clearInterval(timer.current);
    stopListening();
    setPhase("done");
  };

  useEffect(
    () => () => {
      window.clearInterval(timer.current);
      stopListening();
    },
    [],
  );

  const start = () => {
    startedAt.current = Date.now();
    setElapsed(0);
    setPhase("running");
    timer.current = window.setInterval(() => {
      const s = Math.min(activity.seconds, Math.floor((Date.now() - startedAt.current) / 1000));
      setElapsed(s);
      if (s >= activity.seconds) stop(); // time is up: done by itself
    }, 250);
    if (canListen) void listen({ continuous: true, timeoutMs: (activity.seconds + 2) * 1000 }); // only the open microphone matters
  };

  const progress = Math.min(1, elapsed / activity.seconds);
  const R = 44;
  const C = 2 * Math.PI * R;

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="font-display text-[1.7rem] leading-snug font-bold text-ink">
          <ContentText text={activity.title} />
        </h1>
        <p className="text-lg text-ink-2">
          <BiText text={fill(strings.missionHint, { n: activity.seconds })} />
        </p>
        <ul className="grid grid-cols-2 gap-2">
          {activity.prompts.map((p) => (
            <li key={p} className="rounded-2xl border border-line bg-surface px-3 py-2.5 text-lg font-semibold text-ink">
              {p}
            </li>
          ))}
        </ul>
      </div>
      <BottomBar tone={phase === "done" ? "good" : "neutral"}>
        {phase === "done" && (
          <>
            <FeedbackPanel kind="correct" label={strings.great}>
              <p className="text-lg">
                <BiText text={fill(strings.missionDone, { n: elapsed })} />
              </p>
            </FeedbackPanel>
            <MainButton label={strings.continue} onClick={onNext} tone="good" />
          </>
        )}
        {phase === "running" && (
          // The microphone with a ring that fills with the time; a tap stops early.
          <div className="flex items-center justify-center gap-5">
            <button type="button" onClick={stop} aria-label={strings.missionTapStop.en} className={`relative flex size-24 shrink-0 items-center justify-center rounded-full ${focusRing}`}>
              <svg aria-hidden="true" viewBox="0 0 96 96" className="absolute inset-0 -rotate-90">
                <circle cx="48" cy="48" r={R} fill="none" className="stroke-sunken" strokeWidth="7" />
                <circle cx="48" cy="48" r={R} fill="none" className="stroke-brand transition-[stroke-dashoffset] duration-300 motion-reduce:transition-none" strokeWidth="7" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - progress)} />
              </svg>
              <span className="flex size-16 items-center justify-center rounded-full bg-accent text-on-accent">
                <Icon name="mic" className="size-8" />
              </span>
            </button>
            <div className="flex flex-col gap-0.5">
              <p className="text-xl font-bold text-ink tabular-nums">{fill(strings.missionTime, { s: clock(elapsed), total: clock(activity.seconds) }).en}</p>
              <p className="text-base text-ink-2">
                <BiText text={strings.missionTapStop} />
              </p>
            </div>
          </div>
        )}
        {phase === "ready" && (
          // One row, like Listen & Speak: "Not now" beside the microphone (speaking never blocks progress).
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <button type="button" onClick={onNext} className={pillButton}>
              <Bi label={strings.missionNotNow} />
            </button>
            {canListen ? (
              <MicButton listening={false} onStart={start} label={strings.missionStart} size="md" />
            ) : (
              <button type="button" onClick={start} className={button("primary", "lg")}>
                <Bi label={strings.missionStart} />
              </button>
            )}
          </div>
        )}
      </BottomBar>
    </>
  );
}
