import { Bi } from "./Bi";
import { Icon } from "./icons";
import type { Bi as BiLabel } from "@/lib/strings";
import { strings } from "@/lib/strings";

export type StepState = "done" | "current" | "todo";

const MARK: Record<StepState, { sr: BiLabel; style: string }> = {
  done: { sr: strings.stepDone, style: "bg-good text-surface" },
  current: { sr: strings.stepCurrent, style: "bg-brand-soft text-brand ring-2 ring-brand" },
  todo: { sr: strings.stepTodo, style: "bg-surface text-ink-3 ring-2 ring-inset ring-line-strong" },
};

/** A list of steps (lesson sections) joined by a line: ✓ done, ● current, ○ not started. The state is also spoken, never colour alone. */
export function StepList({ steps }: { steps: { id: string; label: BiLabel; state: StepState }[] }) {
  return (
    <ol className="flex flex-col">
      {steps.map((step, i) => {
        const mark = MARK[step.state];
        const last = i === steps.length - 1;
        return (
          <li key={step.id} aria-current={step.state === "current" ? "step" : undefined} className="relative flex min-h-13 items-center gap-3">
            {!last && (
              <span
                aria-hidden="true"
                className={`absolute top-[calc(50%+1.1rem)] left-[1.05rem] h-[calc(100%-2.2rem)] w-0.5 rounded-full ${step.state === "done" ? "bg-good/50" : "bg-line"}`}
              />
            )}
            <span aria-hidden="true" className={`relative flex size-[2.1rem] shrink-0 items-center justify-center rounded-full ${mark.style}`}>
              {step.state === "done" && <Icon name="check" className="size-5" strokeWidth={2.6} />}
              {step.state === "current" && <span className="size-2.5 rounded-full bg-brand" />}
            </span>
            <span className={`text-left ${step.state === "todo" ? "text-ink-2" : "text-ink"}`}>
              <Bi label={step.label} className="items-start" />
              <span className="sr-only"> — {mark.sr.en}</span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}
