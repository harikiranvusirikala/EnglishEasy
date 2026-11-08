"use client";

import { useEffect, useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { focusRing } from "@/components/ui/button";
import { Nudge } from "@/components/ui/Nudge";
import { card, cardText, cardTitle } from "@/components/ui/card";
import { REMINDER_TIMES, type ReminderMode, type ReminderTimeId } from "@/learning/reminder-due";
import { useProgress } from "@/lib/progress-store";
import { disableReminder, enableReminder, refreshReminder, useReminderHour, useReminderMode } from "@/lib/reminders";
import { updateSettings, useSettings } from "@/lib/settings-store";
import { strings, type Bi as BiLabel } from "@/lib/strings";
import { IosInstallSteps } from "./InstallCard";

export const REMINDER_CARD_ID = "reminder-card";

const TIME_LABEL: Record<ReminderTimeId, BiLabel> = {
  morning: strings.reminderMorning,
  afternoon: strings.reminderAfternoon,
  evening: strings.reminderEvening,
  night: strings.reminderNight,
};

const choice = (selected: boolean) =>
  `min-h-13 rounded-2xl border px-2 text-base font-medium transition-colors duration-150 ${focusRing} ${
    selected ? "border-brand bg-brand-fill text-on-brand shadow-card" : "border-line-strong bg-surface text-ink hover:border-brand/50 hover:bg-sunken"
  }`;

/** The last day practised on this phone ("YYYY-MM-DD"), if any. */
function usePracticed(): string | null {
  const progress = useProgress();
  return progress?.practiceDays.at(-1) ?? null;
}

/** The time buttons, with the permission flow and its messages. `withOff` adds Off (Settings); the Home card has none. */
function ReminderChoices({ withOff, onChosen }: { withOff: boolean; onChosen?: () => void }) {
  const hour = useReminderHour();
  const settings = useSettings();
  const practised = usePracticed();
  const [busy, setBusy] = useState(false);
  const [problem, setProblem] = useState<"denied" | "failed" | null>(null);

  async function pick(next: number | null) {
    if (busy || !settings) return;
    setProblem(null);
    if (next === null) return void (await disableReminder());
    setBusy(true);
    const result = await enableReminder(next, settings.learnIn, practised);
    setBusy(false);
    if (result === "on") onChosen?.();
    else setProblem(result);
  }

  return (
    <>
      <div role="group" aria-label={strings.reminderTitle.en} className="grid grid-cols-2 gap-2">
        {withOff && (
          <button type="button" aria-pressed={hour === null} disabled={busy} onClick={() => void pick(null)} className={choice(hour === null)}>
            <Bi label={strings.reminderOff} />
          </button>
        )}
        {REMINDER_TIMES.map((t) => (
          <button key={t.id} type="button" aria-pressed={hour === t.hour} disabled={busy} onClick={() => void pick(t.hour)} className={choice(hour === t.hour)}>
            <Bi label={TIME_LABEL[t.id]} />
          </button>
        ))}
      </div>
      {problem && (
        <p role="alert" className="text-base text-danger">
          <BiText text={problem === "denied" ? strings.reminderDenied : strings.reminderFailed} />
        </p>
      )}
    </>
  );
}

function Unavailable({ mode }: { mode: Exclude<ReminderMode, "ready" | "denied"> }) {
  return mode === "install" ? (
    <>
      <p className={`${cardText} font-semibold`}>
        <BiText text={strings.reminderInstallFirst} />
      </p>
      <IosInstallSteps />
    </>
  ) : (
    <p className={cardText}>
      <BiText text={strings.reminderUnsupported} />
    </p>
  );
}

/** Settings → Daily reminder: Off / Morning 8:00 / Afternoon 1:00 / Evening 6:00 / Night 8:00. */
export function ReminderSettings() {
  const mode = useReminderMode();
  if (!mode) return null;
  return (
    <section aria-label={strings.reminderTitle.en} className={`${card} flex flex-col gap-3`}>
      <h2 className={cardTitle}>
        <Bi label={strings.reminderTitle} className="items-start" />
      </h2>
      {mode === "install" || mode === "unsupported" ? (
        <Unavailable mode={mode} />
      ) : (
        <>
          <p className={cardText}>
            <BiText text={strings.reminderHint} />
          </p>
          <ReminderChoices withOff />
        </>
      )}
    </section>
  );
}

/** One-time "Want a reminder every day?" after the first finished lesson (Home and the lesson complete screen). */
export function ReminderCard({ finishedLessons }: { finishedLessons: number }) {
  const mode = useReminderMode();
  const hour = useReminderHour();
  const settings = useSettings();
  if (!mode || hour === undefined || !settings) return null;
  if (mode !== "ready" || hour !== null || finishedLessons < 1 || settings.dismissed.includes(REMINDER_CARD_ID)) return null;
  const dismiss = () => updateSettings({ dismissed: [...new Set([...settings.dismissed, REMINDER_CARD_ID])] });
  return (
    <Nudge
      label={strings.reminderCardTitle.en}
      icon="bell"
      tone="accent"
      title={<Bi label={strings.reminderCardTitle} className="items-start" />}
      onDismiss={dismiss}
      dismissLabel={strings.reminderNotNow.en}
    >
      <BiText text={strings.reminderCardText} />
      <ReminderChoices withOff={false} onChosen={dismiss} />
    </Nudge>
  );
}

/** Behind every learning screen: while reminders are on, keeps the server's copy current (language, time zone, last day practised). Shows nothing. */
export function ReminderShell() {
  const hour = useReminderHour();
  const settings = useSettings();
  const practised = usePracticed();
  const learnIn = settings?.learnIn;
  useEffect(() => {
    if (typeof hour === "number" && learnIn) void refreshReminder(hour, learnIn, practised);
  }, [hour, learnIn, practised]);
  return null;
}
