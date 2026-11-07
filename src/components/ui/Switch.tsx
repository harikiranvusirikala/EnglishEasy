"use client";

import { useId } from "react";
import { Bi } from "./Bi";
import { BiText } from "./BiText";
import type { Bi as BiLabel } from "@/lib/strings";

/** An on/off row: the whole row is the button. `hint` is explanation text (follows Learn in). */
export function Switch({ checked, onChange, label, hint }: { checked: boolean; onChange: (checked: boolean) => void; label: BiLabel; hint?: BiLabel }) {
  const hintId = useId();
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-describedby={hint ? hintId : undefined}
      onClick={() => onChange(!checked)}
      className="flex min-h-13 w-full items-center justify-between gap-4 rounded-xl py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-teal-700 dark:focus-visible:ring-teal-300"
    >
      <span className="flex flex-col gap-0.5">
        <Bi label={label} className="items-start" />
        {hint && (
          <span id={hintId} className="text-sm text-stone-600 dark:text-stone-400">
            <BiText text={hint} />
          </span>
        )}
      </span>
      <span
        aria-hidden="true"
        className={`flex h-8 w-14 shrink-0 items-center rounded-full p-1 transition-colors duration-150 motion-reduce:transition-none ${
          checked ? "bg-teal-700 dark:bg-teal-400" : "bg-stone-300 dark:bg-stone-700"
        }`}
      >
        <span
          className={`flex size-6 items-center justify-center rounded-full bg-white text-xs font-bold text-teal-800 transition-transform duration-150 motion-reduce:transition-none dark:bg-stone-950 dark:text-teal-300 ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        >
          {checked ? "✓" : ""}
        </span>
      </span>
    </button>
  );
}
