"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ContentText } from "@/components/ui/ContentText";
import { Bi } from "@/components/ui/Bi";
import { Icon } from "@/components/ui/icons";
import { narrate, useVoices } from "@/lib/speak";
import { listenButton } from "@/components/ui/button";
import { needsSlow } from "@/learning/complexity";
import { strings, type Bi as BiLabel } from "@/lib/strings";
import { BottomBar, FeedbackPanel, MainButton, OptionButton, Text, toneOf, type OptionState } from "./parts";
import { Narrate } from "./Narrate";
import { useQuestion } from "./useQuestion";

/** A big round play button for questions that are heard rather than read (Listen and choose); Slow beside it when the sentence is medium or high complexity. */
export function ListenHero({ say }: { say: string }) {
  const voices = useVoices();
  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <Narrate text={say} auto variant="hidden" />
      <div className="flex items-center gap-4">
        <button
          type="button"
          disabled={voices === null}
          onClick={() => narrate(say)}
          aria-label={strings.listen.en}
          className="flex size-28 items-center justify-center rounded-full bg-brand-fill text-on-brand shadow-[0_14px_30px_-12px_var(--brand)] ring-8 ring-brand-soft transition-transform duration-150 active:scale-95 disabled:opacity-55 motion-reduce:active:scale-100"
        >
          <Icon name="speaker" className="size-12" />
        </button>
        {needsSlow(say) && (
          <button type="button" disabled={voices === null} onClick={() => narrate(say, { slow: true })} aria-label={strings.listenSlow.en} title={strings.listenSlow.en} className={listenButton("lg")}>
            <Icon name="turtle" className="size-7" />
          </button>
        )}
      </div>
      <p className="text-base text-ink-2">{strings.tapToListen.en}</p>
    </div>
  );
}

/**
 * The shared body of a one-right-answer question: lettered answer cards, the Check → Continue button and the feedback
 * in the tinted bottom bar. `answerText` is the answer shown after two wrong tries; `why` is the reason (follows Learn in).
 * `children` may be a function of the selected option, for a live preview (the blank filled in).
 */
export function Question({
  options,
  answer,
  answerText,
  why,
  say,
  hero = false,
  onAnswer,
  onNext,
  children,
}: {
  options: string[];
  answer: number;
  answerText: string;
  why?: BiLabel;
  say?: string;
  /** Play `say` from a big central button instead of the small pair. */
  hero?: boolean;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
  children?: ReactNode | ((selected: number | null, judged: boolean) => ReactNode);
}) {
  const { selected, setSelected, result, check, retry } = useQuestion(answer, onAnswer);
  const judged = result === "correct" || result === "failed";
  const kind = result === "correct" ? "correct" : result === "almost" ? "almost" : result === "failed" ? "answer" : null;
  const tone = toneOf(kind);
  const group = useRef<HTMLDivElement>(null);
  useRevealAbove(group, result);

  const stateOf = (i: number): OptionState => {
    if (judged && i === answer) return "right";
    if (result && selected === i && i !== answer) return "wrong";
    return selected === i ? "selected" : "idle";
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        {typeof children === "function" ? children(selected, judged) : children}
        {say && (hero ? <ListenHero say={say} /> : <Narrate text={say} auto slow />)}
        <div ref={group} role="group" className="flex flex-col gap-3">
          {options.map((option, i) => (
            <OptionButton key={i} index={i} text={option} state={stateOf(i)} disabled={result !== null} onClick={() => setSelected(i)} />
          ))}
        </div>
      </div>
      <BottomBar tone={tone}>
        {kind && (
          <FeedbackPanel kind={kind} action={<Narrate text={say ?? answerText} auto variant="compact" />}>
            {result === "failed" && (
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg">
                <span>{strings.answerIs.en}:</span>
                <Text className="font-semibold">{answerText}</Text>
              </p>
            )}
            {why && (
              <p className="text-base text-ink-2">
                <ContentText text={why} />
              </p>
            )}
          </FeedbackPanel>
        )}
        {result === null && <MainButton label={strings.check} onClick={check} disabled={selected === null} />}
        {result === "almost" && <MainButton label={strings.tryAgain} onClick={retry} tone="almost" icon="retry" />}
        {judged && <MainButton label={strings.continue} onClick={onNext} tone={tone} />}
      </BottomBar>
    </>
  );
}

/**
 * After Check the feedback fills the bottom bar. If that covers the answers (`ref`), scroll just enough to show them
 * above it; when they are already in view nothing moves.
 */
export function useRevealAbove(ref: React.RefObject<HTMLElement | null>, result: unknown) {
  useEffect(() => {
    if (!result) return;
    const frame = requestAnimationFrame(() => {
      const el = ref.current;
      const bar = document.querySelector("[data-bottom-bar]");
      if (!el || !bar) return;
      const hidden = el.getBoundingClientRect().bottom - (bar.getBoundingClientRect().top - 12);
      if (hidden > 0) el.closest("main")?.scrollBy({ top: hidden, behavior: "smooth" }); // the step's own scroller, never the page
    });
    return () => cancelAnimationFrame(frame);
  }, [ref, result]);
}

/** "Hint" and what it reveals, used by the building activities. */
export function HintLine({ hinted, onHint, children }: { hinted: boolean; onHint: () => void; children: ReactNode }) {
  return hinted ? (
    <p className="flex items-center gap-2 rounded-2xl bg-accent-soft px-4 py-3 text-base text-accent-ink">
      <Icon name="hint" className="size-5" />
      <span>{children}</span>
    </p>
  ) : (
    <button type="button" onClick={onHint} className="inline-flex min-h-12 items-center gap-2 self-start rounded-full bg-accent-soft px-4 text-base font-semibold text-accent-ink transition-colors hover:brightness-95">
      <Icon name="hint" className="size-5" />
      <Bi label={strings.hint} />
    </button>
  );
}
