"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Skeleton } from "@/components/ui/Skeleton";
import { button, iconButton } from "@/components/ui/button";
import { card, cardLink, cardText, cardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { PracticeRunner } from "@/components/player/PracticeRunner";
import { Narrate } from "@/components/player/Narrate";
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

function Page({ title, back, children }: { title: BiLabel; back?: boolean; children: ReactNode }) {
  return (
    <main className="flex flex-col gap-4 p-4 pt-6">
      {back && (
        <Link href="/learn/practice" className="inline-flex min-h-13 items-center gap-1 self-start text-base font-semibold text-teal-800 outline-none focus-visible:ring-2 focus-visible:ring-teal-700 dark:text-teal-300 dark:focus-visible:ring-teal-300">
          <Icon name="chevron" className="size-5 rotate-180" />
          <Bi label={strings.practiceBack} />
        </Link>
      )}
      <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
        <Bi label={title} className="items-start" />
      </h1>
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

const Empty = ({ text }: { text: BiLabel }) => (
  <p className={`${card} ${cardText}`}>
    <BiText text={text} />
  </p>
);

function Failed() {
  return (
    <p className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-base text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100">
      <BiText text={strings.practiceLoadFailed} />
    </p>
  );
}

/** Practice hub (VISION §10.8). */
export function PracticeHub() {
  const progress = useProgress();
  const finished = progress ? Object.keys(progress.completed).length : 0;
  const rows = progress
    ? [
        { href: "/learn/practice/again", label: strings.homePracticeAgain, hint: strings.practiceAgainHint, count: Object.keys(progress.mistakes).length },
        { href: "/learn/practice/roleplays", label: strings.homeRolePlays, hint: strings.practiceRolePlaysHint, count: finished },
        { href: "/learn/practice/sentences", label: strings.homeMySentences, hint: strings.practiceSentencesHint, count: finished },
        { href: "/learn/practice/speaking", label: strings.practiceSpeaking, hint: strings.practiceSpeakingHint, count: finished },
      ]
    : [];
  return (
    <Page title={strings.practiceTitle}>
      {progress ? (
        <ul className="flex flex-col gap-3">
          {rows.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className={`${cardLink} flex items-center justify-between gap-3`}>
                <span className="flex flex-col gap-1">
                  <span className={cardTitle}>
                    <Bi label={r.label} className="items-start" />
                  </span>
                  <span className={cardText}>
                    <BiText text={r.hint} />
                  </span>
                </span>
                {r.count > 0 && <span className="text-lg font-semibold text-teal-800 tabular-nums dark:text-teal-300">({r.count})</span>}
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
        <Empty text={strings.practiceEmptyAgain} />
      ) : (
        <div className={`${card} flex flex-col gap-3`}>
          <p className={cardText}>
            <BiText text={fill(strings.practiceLeft, { n: left })} />
          </p>
          <button type="button" onClick={() => setRunning(true)} className={`${button("primary", "lg")} w-full`}>
            <Bi label={strings.practiceStart} />
          </button>
        </div>
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
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item.activity.id}>
                      <button type="button" onClick={() => setOpen(item)} className={`${cardLink} w-full text-left`}>
                        <span className={cardTitle}>
                          {item.activity.type === "roleplay" ? <BiText text={item.activity.title} /> : null}
                        </span>
                        <span className={`block ${cardText}`}>
                          <BiText text={fill(strings.practiceFromDay, { title: title(item.dayId) })} />
                        </span>
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
                  <section key={g.dayId} aria-label={g.title.en} className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                      <BiText text={g.title} />
                    </h2>
                    <ul className="flex flex-col gap-2">
                      {g.sentences.map((s, i) => (
                        <li key={i} className={`${card} flex items-center justify-between gap-2`}>
                          <div>
                            <p className="text-xl font-semibold">{s.en}</p>
                            <p lang="te" className="text-base text-stone-600 dark:text-stone-400">
                              {s.te}
                            </p>
                          </div>
                          <div className="flex shrink-0 items-center gap-1">
                            <Narrate text={s.en} />
                            <button
                              type="button"
                              aria-label={`${strings.practiceSayIt.en}: ${s.en}`}
                              onClick={() => setSaying({ dayId: g.dayId, activity: { id: `${g.dayId}.my-${i}`, type: "repeat", say: s.en, te: s.te } })}
                              className={iconButton}
                            >
                              <Icon name="mic" />
                            </button>
                          </div>
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
                <div className={`${card} flex flex-col gap-3`}>
                  <p className={cardText}>
                    <BiText text={strings.practiceSpeakingHint} />
                  </p>
                  <button type="button" onClick={() => setRunning(true)} className={`${button("primary", "lg")} w-full`}>
                    <Bi label={strings.practiceStart} />
                  </button>
                </div>
              )}
              {running && <PracticeRunner items={items} mode="plain" onExit={() => setRunning(false)} />}
            </>
          );
        }}
      </Finished>
    </Page>
  );
}
