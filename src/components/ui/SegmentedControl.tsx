"use client";

import { Bi } from "./Bi";
import { focusRing } from "./button";
import type { Bi as BiLabel } from "@/lib/strings";

/**
 * A row of choices, one picked (Learn in, Theme, Text size): a sunken track with the chosen option raised.
 * Buttons with `aria-pressed`; `name` is the group's accessible name.
 */
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
    <div role="group" aria-label={name} className="grid auto-cols-fr grid-flow-col gap-1 rounded-2xl bg-sunken p-1 ring-1 ring-inset ring-line">
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option.value)}
            className={`min-h-12 rounded-xl px-2 py-1.5 text-base transition-[background-color,color,box-shadow] duration-150 motion-reduce:transition-none ${focusRing} ${
              selected ? "bg-surface text-brand shadow-card ring-1 ring-line" : "text-ink-2 hover:text-ink"
            }`}
          >
            <Bi label={option.label} />
          </button>
        );
      })}
    </div>
  );
}
