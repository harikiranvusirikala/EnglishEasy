"use client";

import { Bi } from "./Bi";
import type { Bi as BiLabel } from "@/lib/strings";

/** A row of choices, one picked (Learn in, Theme, Text size). Buttons with `aria-pressed`; `name` is the group's accessible name. */
export function SegmentedControl<T extends string>({
  name,
  value,
  options,
  onChange,
}: {
  name: string;
  value: T;
  options: { value: T; label: BiLabel }[];
  onChange: (value: T) => void;
}) {
  return (
    <div role="group" aria-label={name} className="grid auto-cols-fr grid-flow-col gap-2">
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option.value)}
            className={`min-h-13 rounded-xl border px-2 text-base outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-teal-700 dark:focus-visible:ring-teal-300 ${
              selected
                ? "border-teal-700 bg-teal-700 text-white dark:border-teal-400 dark:bg-teal-400 dark:text-stone-950"
                : "border-stone-300 bg-white text-stone-900 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800"
            }`}
          >
            <Bi label={option.label} />
          </button>
        );
      })}
    </div>
  );
}
