"use client";

import { useState } from "react";
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
              className={`flex min-h-13 w-full items-center gap-3 rounded-2xl border p-3 text-left transition-colors ${focusRing} ${
                on ? "border-brand bg-brand-soft" : "border-line-strong bg-surface hover:bg-sunken"
              }`}
            >
              <span
                aria-hidden="true"
                className={`flex size-7 shrink-0 items-center justify-center rounded-md border ${
                  on ? "border-brand bg-brand-fill text-on-brand" : "border-line-strong bg-surface"
                }`}
              >
                {on && <Icon name="check" className="size-5" />}
              </span>
              <span className="flex flex-col">
                <span className={cardTitle}>
                  {t.title.en}
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
    <Nudge
      label={strings.tracksCardTitle.en}
      icon="sparkle"
      tone="accent"
      title={strings.tracksCardTitle.en}
      actions={
        <>
          <button type="button" disabled={selected.length === 0} onClick={() => save(selected)} className={`${button("primary", "lg")} w-full`}>
            <Bi label={strings.tracksSave} />
          </button>
          <button type="button" onClick={() => save([])} className={`${button("secondary")} w-full`}>
            <Bi label={strings.tracksNone} />
          </button>
        </>
      }
    >
      <BiText text={strings.tracksCardHint} />
      <TrackToggles tracks={offerableTracks(course)} selected={selected} onToggle={(id) => setSelected((s) => toggle(s, id))} />
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

