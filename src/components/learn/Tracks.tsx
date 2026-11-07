"use client";

import { useState } from "react";
import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { button } from "@/components/ui/button";
import { card, cardText, cardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import type { Track } from "@/content/course";
import { chooseTracks, type Progress } from "@/learning/progress";
import { locateDay } from "@/learning/home";
import { offerableTracks, shouldOfferTracks, trackSuggestion, type Course } from "@/learning/recommend";
import { updateProgress } from "@/lib/progress-store";
import { strings } from "@/lib/strings";

const save = (tracks: string[]) => updateProgress((p) => chooseTracks(p, tracks, new Date().toISOString()));

/** Tap-only multiple choice (VISION §11.4): one big toggle per track that has released lessons. */
function TrackToggles({ tracks, selected, onToggle }: { tracks: Track[]; selected: string[]; onToggle: (id: string) => void }) {
  return (
    <ul className="flex flex-col gap-2">
      {tracks.map((t) => {
        const on = selected.includes(t.id);
        return (
          <li key={t.id}>
            <button
              type="button"
              aria-pressed={on}
              onClick={() => onToggle(t.id)}
              className={`flex min-h-13 w-full items-center gap-3 rounded-xl border p-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-teal-700 dark:focus-visible:ring-teal-300 ${
                on
                  ? "border-teal-700 bg-teal-50 dark:border-teal-400 dark:bg-teal-950"
                  : "border-stone-300 bg-white hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:hover:bg-stone-800"
              }`}
            >
              <span
                aria-hidden="true"
                className={`flex size-7 shrink-0 items-center justify-center rounded-md border ${
                  on ? "border-teal-700 bg-teal-700 text-white dark:border-teal-400 dark:bg-teal-400 dark:text-stone-950" : "border-stone-400 dark:border-stone-600"
                }`}
              >
                {on && <Icon name="check" className="size-5" />}
              </span>
              <span className="flex flex-col">
                <span className={cardTitle}>
                  <BiText text={t.title} />
                </span>
                <span className={cardText}>
                  <BiText text={t.forWho} />
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

const toggle = (list: string[], id: string) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

/** Home: the one-time "Want extra lessons for your life?" card at the offer week. Hidden while no track has a released week. */
export function TracksCard({ course, progress }: { course: Course; progress: Progress }) {
  const [selected, setSelected] = useState<string[]>([]);
  if (!shouldOfferTracks(course, progress)) return null;
  return (
    <section aria-label={strings.tracksCardTitle.en} className={`${card} flex flex-col gap-3`}>
      <h2 className={cardTitle}>
        <BiText text={strings.tracksCardTitle} />
      </h2>
      <p className={cardText}>
        <BiText text={strings.tracksCardHint} />
      </p>
      <TrackToggles tracks={offerableTracks(course)} selected={selected} onToggle={(id) => setSelected((s) => toggle(s, id))} />
      <button type="button" disabled={selected.length === 0} onClick={() => save(selected)} className={`${button("primary", "lg")} w-full`}>
        <Bi label={strings.tracksSave} />
      </button>
      <button type="button" onClick={() => save([])} className={`${button("secondary")} w-full`}>
        <Bi label={strings.tracksNone} />
      </button>
    </section>
  );
}

/** Home: after the main lesson, the next lesson of a chosen track (only tracks the learner chose, only released lessons). */
export function TrackSuggestionCard({ course, progress, written }: { course: Course; progress: Progress; written: string[] }) {
  const next = trackSuggestion(course, progress);
  const place = next ? locateDay(course, next.dayId) : null;
  const track = next ? course.tracks.find((t) => t.id === next.trackId) : null;
  if (!next || !place || !track || !written.includes(next.dayId)) return null;
  return (
    <section aria-label={strings.tracksNext.en} className={`${card} flex flex-col gap-3`}>
      <p className="text-base font-semibold text-teal-800 dark:text-teal-300">
        <BiText text={strings.tracksNext} />
      </p>
      <div>
        <p className={cardText}>
          <BiText text={track.title} />
        </p>
        <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">
          <BiText text={place.ref.title} />
        </h2>
      </div>
      <Link href={`/learn/play?l=${encodeURIComponent(next.dayId)}`} className={`${button("secondary", "lg")} w-full`}>
        <Bi label={strings.tracksOpen} />
      </Link>
    </section>
  );
}

/** Settings → My tracks: the same choices any time. Hidden while no track has a released week. */
export function MyTracks({ course, progress }: { course: Course; progress: Progress }) {
  const offered = offerableTracks(course);
  if (offered.length === 0) return null;
  return (
    <section className={`${card} flex flex-col gap-3`}>
      <h2 className={cardTitle}>
        <Bi label={strings.myTracks} className="items-start" />
      </h2>
      <p className={cardText}>
        <BiText text={strings.tracksSettingsHint} />
      </p>
      <TrackToggles tracks={offered} selected={progress.tracks} onToggle={(id) => save(toggle(progress.tracks, id))} />
    </section>
  );
}

