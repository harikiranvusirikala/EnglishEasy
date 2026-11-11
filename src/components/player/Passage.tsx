"use client";

import { useRef, useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { ContentText } from "@/components/ui/ContentText";
import { button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import type { Activity } from "@/content/types";
import { passageText } from "@/learning/spoken";
import { strings } from "@/lib/strings";
import { ListenInline } from "./Narrate";
import { BottomBar, Instruction, MainButton } from "./parts";
import { Question } from "./Question";

type PassageActivity = Extract<Activity, { type: "passage" }>;

/** A line that ends with ":" ("Please bring:") is a small heading inside the text. */
const Line = ({ text }: { text: string }) => <p className={text.endsWith(":") ? "font-bold" : undefined}>{text}</p>;

/**
 * The passage drawn like the real thing (no photos: sharp, offline, any text size): a letter on paper with a letterhead,
 * a notice on a board, a news item with a headline, a recipe card. Colours are tokens, so Night follows by itself.
 */
export function PassageCard({ activity }: { activity: PassageActivity }) {
  const { kind, heading, lines } = activity;
  if (kind === "news")
    return (
      <figure className="flex flex-col gap-2 rounded-[1.25rem] border-2 border-line-strong bg-surface px-4 py-4" aria-label={heading}>
        <figcaption className="border-b-2 border-ink pb-2 font-serif text-2xl leading-snug font-bold text-ink">{heading}</figcaption>
        <div className="flex flex-col gap-1.5 font-serif text-lg leading-relaxed text-ink">
          {lines.map((l, i) => (
            <Line key={i} text={l} />
          ))}
        </div>
      </figure>
    );
  if (kind === "notice")
    return (
      <figure className="flex flex-col gap-2 rounded-[1.25rem] border-2 border-accent bg-accent-soft px-4 py-4 text-center" aria-label={heading}>
        <figcaption className="text-xl font-extrabold tracking-wide text-accent-ink uppercase">{heading}</figcaption>
        <div className="flex flex-col gap-1.5 text-lg leading-snug text-ink">
          {lines.map((l, i) => (
            <Line key={i} text={l} />
          ))}
        </div>
      </figure>
    );
  return (
    <figure className="overflow-hidden rounded-[1.25rem] border-2 border-line-strong bg-surface" aria-label={heading}>
      <figcaption className={`flex items-center gap-2 px-4 py-2.5 text-lg font-extrabold ${kind === "recipe" ? "bg-good-soft text-good" : "bg-brand-soft text-brand-ink"}`}>
        <Icon name={kind === "recipe" ? "coffee" : "book"} className="size-5" />
        {heading}
      </figcaption>
      <div className="flex flex-col gap-1.5 px-4 py-3 text-lg leading-snug text-ink">
        {lines.map((l, i) => (
          <Line key={i} text={l} />
        ))}
      </div>
    </figure>
  );
}

/**
 * Read a short passage (VISION §5; owner, 2026-11-11): the text first, with one Listen for all of it (and Slow); then
 * 2–3 questions, the passage folded to a strip above them that opens again with a tap. It counts as one item: right
 * when every question was right the first time.
 */
export function Passage({ activity, onAnswer, onNext }: { activity: PassageActivity; onAnswer: (correct: boolean) => void; onNext: () => void }) {
  const [asking, setAsking] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const firstTime = useRef(true);
  const checked = useRef<Set<number>>(new Set());
  const text = passageText(activity.lines);

  if (asking === null)
    return (
      <>
        <div className="flex flex-col gap-4">
          <Instruction>
            <BiText text={strings.passageRead} />
            <ListenInline read={[text]} slow />
          </Instruction>
          <PassageCard activity={activity} />
        </div>
        <BottomBar>
          <MainButton label={strings.questions} onClick={() => setAsking(0)} />
        </BottomBar>
      </>
    );

  const question = activity.questions[asking];
  return (
    <>
      <div className="flex flex-col gap-4">
        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className={`${button("secondary")} w-full justify-between`}>
          <span className="truncate">{activity.heading}</span>
          <span className="flex shrink-0 items-center gap-1 text-brand">
            <Bi label={open ? strings.passageHide : strings.passageShow} />
          </span>
        </button>
        {open && <PassageCard activity={activity} />}
        <p className="text-base font-semibold text-brand">
          {asking + 1} / {activity.questions.length}
        </p>
      </div>
      <Question
        key={asking}
        options={question.options}
        answer={question.answer}
        answerText={question.options[question.answer]}
        why={question.why}
        onAnswer={(correct) => {
          if (!checked.current.has(asking) && !correct) firstTime.current = false;
          checked.current.add(asking);
        }}
        onNext={() => {
          if (asking + 1 < activity.questions.length) {
            setOpen(false);
            setAsking(asking + 1);
          } else {
            onAnswer(firstTime.current);
            onNext();
          }
        }}
      >
        <p className="font-display text-xl leading-snug font-semibold text-ink">
          <ContentText text={question.prompt} />
        </p>
      </Question>
    </>
  );
}
