"use client";

import { useState, type ReactNode } from "react";
import { Meaning } from "@/components/ui/ContentText";
import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { EmptyState } from "@/components/ui/EmptyState";
import { Illustration, type IllustrationName } from "@/components/illustrations/Illustration";
import { PageHeader } from "@/components/ui/PageHeader";
import { Skeleton } from "@/components/ui/Skeleton";
import { badge } from "@/components/ui/badge";
import { button, focusRing, inlineListenButton } from "@/components/ui/button";
import { card, cardFlush } from "@/components/ui/card";
import { Icon, type IconName } from "@/components/ui/icons";
import { PracticeRunner } from "@/components/player/PracticeRunner";
import { ListenInline } from "@/components/player/Narrate";
import type { PlayableDay } from "@/content/types";
import {
  finishedDays,
  mistakeDayIds,
  mistakeItems,
  rolePlayItems,
  sentenceGroups,
  speakingItems,
  type PracticeItem,
} from "@/learning/practice";
import type { Progress } from "@/learning/progress";
import { useProgress } from "@/lib/progress-store";
import { fill, strings, type Bi as BiLabel } from "@/lib/strings";
import { useDays } from "@/lib/use-days";

/** The newest finished lessons first, and only so many speaking drills at once. */
const SPEAKING_LIMIT = 10;

function Page({ title, hint, back, children }: { title: BiLabel; hint?: BiLabel; back?: boolean; children: ReactNode }) {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-5 px-4 pt-6 pb-6 md:px-6 md:pt-8">
      {back && (
        <Link href="/learn/practice" className={`${button("ghost")} -ml-2 self-start px-3`}>
          <Icon name="arrowLeft" className="size-5" />
          <Bi label={strings.practiceBack} />
        </Link>
      )}
      <PageHeader title={<Bi label={title} className="items-start" />}>{hint && <BiText text={hint} />}</PageHeader>
      {children}
    </main>
  );
}

const Loading = () => (
  <div aria-busy="true" className="flex flex-col gap-3">
    <Skeleton className="h-24 w-full" />
    <Skeleton className="h-24 w-full" />
  </div>
);

const Empty = ({ text, illustration = "empty" }: { text: BiLabel; illustration?: IllustrationName }) => (
  <div className={card}>
    <EmptyState illustration={illustration} title={<BiText text={text} />} />
  </div>
);

/** A card with an illustration, a sentence and the big Start button (Practice again, Speaking only). */
function StartCard({ illustration, text, onStart }: { illustration: IllustrationName; text: BiLabel; onStart: () => void }) {
  return (
    <div className={`${card} flex flex-col items-center gap-4 text-center`}>
      <Illustration name={illustration} className="w-44" />
      <p className="text-lg text-ink">
        <BiText text={text} />
      </p>
      <button type="button" onClick={onStart} className={`${button("primary", "lg")} w-full`}>
        <Icon name="play" />
        <Bi label={strings.practiceStart} />
      </button>
    </div>
  );
}

function Failed() {
  return (
    <p className="rounded-2xl border border-almost-line bg-almost-soft p-4 text-base text-almost">
      <BiText text={strings.practiceLoadFailed} />
    </p>
  );
}

const HUB_TONE = {
  accent: "bg-accent-soft text-accent-ink",
  brand: "bg-brand-soft text-brand",
  who: "bg-who-bg text-who-ink",
  what: "bg-what-bg text-what-ink",
};

/** Practice hub (VISION §10.8): four rows with an icon, a hint and the count. */
export function PracticeHub() {
  const progress = useProgress();
  const finished = progress ? Object.keys(progress.completed).length : 0;
  const rows: { href: string; label: BiLabel; hint: BiLabel; count: number; icon: IconName; tone: keyof typeof HUB_TONE }[] = progress
    ? [
        { href: "/learn/practice/again", label: strings.homePracticeAgain, hint: strings.practiceAgainHint, count: Object.keys(progress.mistakes).length, icon: "retry", tone: "accent" },
        { href: "/learn/practice/roleplays", label: strings.homeRolePlays, hint: strings.practiceRolePlaysHint, count: finished, icon: "chat", tone: "brand" },
        { href: "/learn/practice/sentences", label: strings.homeMySentences, hint: strings.practiceSentencesHint, count: finished, icon: "book", tone: "who" },
        { href: "/learn/practice/speaking", label: strings.practiceSpeaking, hint: strings.practiceSpeakingHint, count: finished, icon: "mic", tone: "what" },
      ]
    : [];
  return (
    <Page title={strings.practiceTitle} hint={strings.practiceIntro}>
      {progress ? (
        <ul className={`${cardFlush} divide-y divide-line`}>
          {rows.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className={`flex min-h-20 items-center gap-4 px-4 py-4 transition-colors hover:bg-sunken ${focusRing} focus-visible:ring-inset`}>
                <span aria-hidden="true" className={`flex size-13 shrink-0 items-center justify-center rounded-2xl ${HUB_TONE[r.tone]}`}>
                  <Icon name={r.icon} className="size-7" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="flex items-center gap-2 text-lg font-semibold text-ink">
                    <Bi label={r.label} className="items-start" />
                    {r.count > 0 && <span className={badge(r.tone === "accent" ? "accent" : "brand")}>{r.count}</span>}
                  </span>
                  <span className="text-base text-ink-2">
                    <BiText text={r.hint} />
                  </span>
                </span>
                <Icon name="chevron" className="size-5 text-ink-3" />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </Page>
  );
}

/** Practice again: the mistakes, replayed with the player's own components. The list is fixed when the page opens. */
export function PracticeAgain() {
  const progress = useProgress();
  return (
    <Page title={strings.homePracticeAgain} back>
      {progress ? <AgainLoaded initial={progress} /> : <Loading />}
    </Page>
  );
}

function AgainLoaded({ initial }: { initial: Progress }) {
  // A snapshot taken when the page opens: mistakes cleared while playing do not shorten the running list.
  const [opened] = useState(initial);
  const [ids] = useState(() => mistakeDayIds(opened));
  const loaded = useDays(ids);
  if (!loaded) return <Loading />;
  return <AgainList list={mistakeItems(loaded.days, opened)} failed={loaded.failed} />;
}

function AgainList({ list, failed }: { list: PracticeItem[]; failed: boolean }) {
  const [running, setRunning] = useState(false);
  const progress = useProgress();
  const left = progress ? list.filter((i) => i.activity.id in progress.mistakes).length : list.length;
  return (
    <>
      {failed && <Failed />}
      {list.length === 0 ? (
        <Empty text={strings.practiceEmptyAgain} illustration="complete" />
      ) : (
        <StartCard illustration="practice" text={fill(strings.practiceLeft, { n: left })} onStart={() => setRunning(true)} />
      )}
      {running && <PracticeRunner items={list} mode="mistakes" onExit={() => setRunning(false)} />}
    </>
  );
}

/** Finished days, loaded once (a snapshot taken when the page opens). */
function Finished({ children }: { children: (days: PlayableDay[], failed: boolean) => ReactNode }) {
  const progress = useProgress();
  if (!progress) return <Loading />;
  return <FinishedLoaded initial={progress}>{children}</FinishedLoaded>;
}

function FinishedLoaded({ initial, children }: { initial: Progress; children: (days: PlayableDay[], failed: boolean) => ReactNode }) {
  const [opened] = useState(initial);
  const [ids] = useState(() => Object.keys(opened.completed));
  const loaded = useDays(ids);
  if (!loaded) return <Loading />;
  return <>{children(finishedDays(loaded.days, opened), loaded.failed)}</>;
}

/** Role plays from finished days. */
export function PracticeRolePlays() {
  const [open, setOpen] = useState<PracticeItem | null>(null);
  return (
    <Page title={strings.homeRolePlays} back>
      <Finished>
        {(days, failed) => {
          const items = rolePlayItems(days);
          const title = (dayId: string) => days.find((d) => d.id === dayId)!.title;
          return (
            <>
              {failed && <Failed />}
              {items.length === 0 ? (
                <Empty text={strings.practiceEmptyLessons} />
              ) : (
                <ul className={`${cardFlush} divide-y divide-line`}>
                  {items.map((item) => (
                    <li key={item.activity.id}>
                      <button type="button" onClick={() => setOpen(item)} className={`flex min-h-20 w-full items-center gap-4 px-4 py-4 text-left transition-colors hover:bg-sunken ${focusRing} focus-visible:ring-inset`}>
                        <span aria-hidden="true" className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                          <Icon name="chat" className="size-7" />
                        </span>
                        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                          <span className="text-lg font-semibold text-ink">{item.activity.type === "roleplay" ? item.activity.title.en : null}</span>
                          <span className="text-base text-ink-2">
                            {(fill(strings.practiceFromDay, { title: title(item.dayId) })).en}
                          </span>
                        </span>
                        <Icon name="play" className="size-6 text-brand" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {open && <PracticeRunner key={open.activity.id} items={[open]} mode="plain" onExit={() => setOpen(null)} />}
            </>
          );
        }}
      </Finished>
    </Page>
  );
}

/** My Sentences: the key sentences of finished lessons, each with 🔊 🐢 and 🎤. */
export function PracticeSentences() {
  const [saying, setSaying] = useState<PracticeItem | null>(null);
  return (
    <Page title={strings.homeMySentences} back>
      <Finished>
        {(days, failed) => {
          const groups = sentenceGroups(days);
          return (
            <>
              {failed && <Failed />}
              {groups.length === 0 ? (
                <Empty text={strings.practiceEmptyLessons} />
              ) : (
                groups.map((g) => (
                  <section key={g.dayId} aria-label={g.title.en} className="flex flex-col gap-3">
                    <h2 className="font-display text-xl font-semibold text-ink">
                      {g.title.en}
                    </h2>
                    <ul className={`${cardFlush} divide-y divide-line`}>
                      {g.sentences.map((s, i) => (
                        // The Listen first, then the sentence; "Say it" at the row's end (owner, 2026-11-09).
                        <li key={i} className="flex items-start gap-3 px-4 py-3.5 text-xl">
                          <ListenInline read={[s.en]} place="start" />
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-ink">{s.en}</p>
                            <Meaning>{s.te}</Meaning>
                          </div>
                          <button
                            type="button"
                            aria-label={`${strings.practiceSayIt.en}: ${s.en}`}
                            title={strings.practiceSayIt.en}
                            onClick={() => setSaying({ dayId: g.dayId, activity: { id: `${g.dayId}.my-${i}`, type: "repeat", say: s.en, te: s.te } })}
                            className={`${inlineListenButton} shrink-0 self-center`}
                          >
                            <Icon name="mic" className="size-[1.15em]" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))
              )}
              {saying && <PracticeRunner key={saying.activity.id} items={[saying]} mode="plain" onExit={() => setSaying(null)} />}
            </>
          );
        }}
      </Finished>
    </Page>
  );
}

/** Speaking only: listen-and-repeat drills from the newest finished lessons. */
export function PracticeSpeaking() {
  const [running, setRunning] = useState(false);
  return (
    <Page title={strings.practiceSpeaking} back>
      <Finished>
        {(days, failed) => {
          const items = speakingItems([...days].reverse()).slice(0, SPEAKING_LIMIT);
          return (
            <>
              {failed && <Failed />}
              {items.length === 0 ? (
                <Empty text={strings.practiceEmptyLessons} />
              ) : (
                <StartCard illustration="speak" text={strings.practiceSpeakingHint} onStart={() => setRunning(true)} />
              )}
              {running && <PracticeRunner items={items} mode="plain" onExit={() => setRunning(false)} />}
            </>
          );
        }}
      </Finished>
    </Page>
  );
}
