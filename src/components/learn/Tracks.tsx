"use client";

import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { button, focusRing } from "@/components/ui/button";
import { Nudge } from "@/components/ui/Nudge";
import { card, cardText, cardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import type { Track } from "@/content/course";
import { chooseTracks, type Progress } from "@/learning/progress";
import { locateDay } from "@/learning/home";
import { trackOffer, trackOfferKey, trackSuggestion, type Course } from "@/learning/recommend";
import { ContentText } from "@/components/ui/ContentText";
import { updateProgress } from "@/lib/progress-store";
import { getSettings, updateSettings, useSettings } from "@/lib/settings-store";
import { fill, strings } from "@/lib/strings";

/** One big tap-only toggle (a check box and its text), for the goal question and Settings → My tracks. */
export function GoalToggle({ on, onToggle, title, sub, fixed }: { on: boolean; onToggle?: () => void; title: React.ReactNode; sub?: React.ReactNode; fixed?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      disabled={fixed}
      onClick={onToggle}
      className={`flex min-h-13 w-full items-center gap-3 rounded-2xl border p-3 text-left transition-colors disabled:cursor-default ${focusRing} ${
        on ? "border-brand bg-brand-soft" : "border-line-strong bg-surface hover:bg-sunken"
      }`}
    >
      <span aria-hidden="true" className={`flex size-7 shrink-0 items-center justify-center rounded-md border ${on ? "border-brand bg-brand-fill text-on-brand" : "border-line-strong bg-surface"}`}>
        {on && <Icon name="check" className="size-5" />}
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className={cardTitle}>{title}</span>
        {sub && <span className={cardText}>{sub}</span>}
      </span>
    </button>
  );
}

const toggle = (list: string[], id: string) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

/**
 * The tracks as goals (CURRICULUM §8): Daily life (always on), each track's goal line, and under Abroad, when it is
 * chosen, "My trip is soon". Used by the first visit and Settings.
 */
export function GoalList({ tracks, selected, tripSoon, onToggle, onTripSoon }: { tracks: Track[]; selected: string[]; tripSoon: boolean; onToggle: (id: string) => void; onTripSoon: () => void }) {
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <GoalToggle on fixed title={<Bi label={strings.goalDaily} className="items-start" />} sub={<Bi label={strings.goalAlways} className="items-start" />} />
      </li>
      {tracks.map((t) => (
        <li key={t.id} className="flex flex-col gap-2">
          <GoalToggle on={selected.includes(t.id)} onToggle={() => onToggle(t.id)} title={<ContentText text={t.goal} />} />
          {t.soonWeek !== undefined && selected.includes(t.id) && (
            <div className="pl-8">
              <GoalToggle on={tripSoon} onToggle={onTripSoon} title={<Bi label={strings.goalTripSoon} className="items-start" />} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

/**
 * Home: "New for you" (CURRICULUM §8), once, when a track the learner chose reaches its week and has lessons. Start opens
 * its first lesson; "Not now" hides the card for good (the track stays in Journey and Settings).
 */
export function TrackOfferCard({ course, progress }: { course: Course; progress: Progress }) {
  const settings = useSettings();
  const track = settings ? trackOffer(course, progress, settings.dismissed) : null;
  const first = track?.weeks.flatMap((w) => (w.released ? w.days : []))[0];
  if (!track || !first) return null;
  return (
    <Nudge
      label={strings.trackNew.en}
      icon="sparkle"
      tone="accent"
      title={track.title.en}
      actions={
        <>
          <Link href={`/learn/play?l=${encodeURIComponent(first.id)}`} className={`${button("accent", "lg")} w-full`}>
            {fill(strings.trackStart, { title: track.title.en }).en}
          </Link>
          <button type="button" onClick={() => updateSettings({ dismissed: [...new Set([...getSettings().dismissed, trackOfferKey(track.id)])] })} className={`${button("ghost")} w-full`}>
            <Bi label={strings.trackNotNow} />
          </button>
        </>
      }
    >
      <ContentText text={track.forWho} />
      <span className="text-sm font-semibold text-accent-ink">{fill(strings.trackLength, { n: track.weeks.length }).en}</span>
    </Nudge>
  );
}

/** Home: after the main lesson, the next lesson of a chosen track (only tracks the learner chose, only released lessons). */
export function TrackSuggestionCard({ course, progress, written }: { course: Course; progress: Progress; written: string[] }) {
  const next = trackSuggestion(course, progress);
  const place = next ? locateDay(course, next.dayId) : null;
  const track = next ? course.tracks.find((t) => t.id === next.trackId) : null;
  if (!next || !place || !track || !written.includes(next.dayId)) return null;
  return (
    <Nudge
      label={strings.tracksNext.en}
      icon="route"
      tone="accent"
      title={place.ref.title.en}
      actions={
        <Link href={`/learn/play?l=${encodeURIComponent(next.dayId)}`} className={`${button("secondary", "lg")} w-full`}>
          <Bi label={strings.tracksOpen} />
        </Link>
      }
    >
      <span className="font-semibold text-accent-ink">
        {strings.tracksNext.en}
      </span>
      {track.title.en}
    </Nudge>
  );
}

/** Settings → My tracks: the first visit's goals, changeable any time. */
export function MyTracks({ course, progress }: { course: Course; progress: Progress }) {
  const now = () => new Date().toISOString();
  return (
    <section className={`${card} flex flex-col gap-3`}>
      <h2 className={cardTitle}>
        <Bi label={strings.myTracks} className="items-start" />
      </h2>
      <p className={cardText}>
        <BiText text={strings.tracksSettingsHint} />
      </p>
      <GoalList
        tracks={course.tracks}
        selected={progress.tracks}
        tripSoon={progress.tripSoon === true}
        onToggle={(id) => updateProgress((p) => chooseTracks(p, toggle(p.tracks, id), now()))}
        onTripSoon={() => updateProgress((p) => chooseTracks(p, p.tracks, now(), !p.tripSoon))}
      />
    </section>
  );
}
