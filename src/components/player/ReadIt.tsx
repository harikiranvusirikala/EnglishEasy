"use client";

import { BiText } from "@/components/ui/BiText";
import { ContentText } from "@/components/ui/ContentText";
import type { Activity } from "@/content/types";
import { strings } from "@/lib/strings";
import { Instruction } from "./parts";
import { Question } from "./Question";

type ReadItActivity = Extract<Activity, { type: "readIt" }>;

const PROMPT = { message: strings.readItMessage, label: strings.readItLabel, sign: strings.readItSign } as const;

/** A label line "Dose: 1 tablet" shows its field name in bold. */
function Field({ line }: { line: string }) {
  const at = line.indexOf(": ");
  if (at < 0) return <span className="font-semibold">{line}</span>;
  return (
    <>
      <span className="font-bold">{line.slice(0, at + 1)}</span> {line.slice(at + 2)}
    </>
  );
}

/**
 * The thing to read, drawn as a card (no photos: sharp, offline, any text size). A message is a phone message from a
 * sender; a label is a printed strip (a medicine, a bill); a sign is a board on a post. Real signs keep their colours
 * at night.
 */
function ReadCard({ activity }: { activity: ReadItActivity }) {
  if (activity.kind === "message")
    return (
      <figure className="flex flex-col gap-2 rounded-[1.25rem] bg-sunken p-4" aria-label={activity.heading}>
        <figcaption className="text-sm font-bold tracking-wide text-ink-3">{activity.heading}</figcaption>
        <div className="max-w-[90%] rounded-2xl rounded-tl-md border border-line bg-surface px-4 py-3 text-lg leading-snug text-ink">
          {activity.lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
      </figure>
    );
  if (activity.kind === "label")
    return (
      <figure className="overflow-hidden rounded-[1.25rem] border-2 border-line-strong bg-surface">
        <figcaption className="bg-sky-100 px-4 py-2.5 text-lg font-extrabold text-sky-900 dark:bg-sky-950 dark:text-sky-100">{activity.heading}</figcaption>
        <ul className="flex flex-col gap-1.5 px-4 py-3 text-lg text-ink">
          {activity.lines.map((l) => (
            <li key={l}>
              <Field line={l} />
            </li>
          ))}
        </ul>
      </figure>
    );
  return (
    <figure className="flex flex-col items-center" aria-label={activity.heading}>
      <div className="w-[85%] rounded-xl bg-[#14532d] p-2 dark:bg-[#14532d]">
        <div className="flex flex-col items-center gap-1 rounded-lg border-2 border-white px-3 py-4 text-center text-white">
          <p className="text-xl font-extrabold tracking-wide">{activity.heading}</p>
          {activity.lines.map((l) => (
            <p key={l} className="text-lg font-semibold">
              {l}
            </p>
          ))}
        </div>
      </div>
      <span aria-hidden="true" className="h-7 w-2 bg-ink-3" />
    </figure>
  );
}

/** Read it (CURRICULUM §1a): a card to read, then one question with the usual answer bar. */
export function ReadIt({ activity, onAnswer, onNext }: { activity: ReadItActivity; onAnswer: (correct: boolean) => void; onNext: () => void }) {
  return (
    <Question
      options={activity.options}
      answer={activity.answer}
      answerText={activity.options[activity.answer]}
      why={activity.why}
      say={activity.say}
      onAnswer={onAnswer}
      onNext={onNext}
    >
      <Instruction>
        <BiText text={PROMPT[activity.kind]} />
      </Instruction>
      <ReadCard activity={activity} />
      <p className="font-display text-xl leading-snug font-semibold text-ink">
        <ContentText text={activity.prompt} />
      </p>
    </Question>
  );
}
