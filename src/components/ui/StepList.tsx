import { Bi } from "./Bi";
import type { Bi as BiLabel } from "@/lib/strings";
import { strings } from "@/lib/strings";

export type StepState = "done" | "current" | "todo";

const MARK: Record<StepState, { glyph: string; sr: BiLabel; style: string }> = {
  done: { glyph: "✓", sr: strings.stepDone, style: "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200" },
  current: { glyph: "●", sr: strings.stepCurrent, style: "bg-teal-700 text-white dark:bg-teal-400 dark:text-stone-950" },
  todo: { glyph: "○", sr: strings.stepTodo, style: "bg-stone-200 text-stone-600 dark:bg-stone-800 dark:text-stone-400" },
};

/** A list of steps (lesson sections): ✓ done, ● current, ○ not started. The state is also spoken, never colour alone. */
export function StepList({ steps }: { steps: { id: string; label: BiLabel; state: StepState }[] }) {
  return (
    <ol className="flex flex-col gap-2">
      {steps.map((step) => {
        const mark = MARK[step.state];
        return (
          <li key={step.id} aria-current={step.state === "current" ? "step" : undefined} className="flex min-h-13 items-center gap-3">
            <span aria-hidden="true" className={`flex size-9 shrink-0 items-center justify-center rounded-full text-base font-bold ${mark.style}`}>
              {mark.glyph}
            </span>
            <span className="text-left">
              <Bi label={step.label} className="items-start" />
              <span className="sr-only"> — {mark.sr.en}</span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}
