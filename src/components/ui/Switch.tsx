"use client";

import { useId } from "react";
import { Bi } from "./Bi";
import { BiText } from "./BiText";
import { focusRing } from "./button";
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
      className={`flex min-h-13 w-full items-center justify-between gap-4 rounded-xl py-2 text-left ${focusRing}`}
    >
      <span className="flex flex-col gap-0.5">
        <Bi label={label} className="items-start text-ink" />
        {hint && (
          <span id={hintId} className="text-sm text-ink-2">
            <BiText text={hint} />
          </span>
        )}
      </span>
      <span
        aria-hidden="true"
        className={`flex h-8 w-14 shrink-0 items-center rounded-full p-1 transition-colors duration-200 motion-reduce:transition-none ${
          checked ? "bg-brand-fill" : "bg-line-strong"
        }`}
      >
        <span
          className={`flex size-6 items-center justify-center rounded-full bg-white text-xs font-bold text-brand shadow-sm transition-transform duration-200 motion-reduce:transition-none dark:text-[#0b4f49] ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        >
          {checked ? "✓" : ""}
        </span>
      </span>
    </button>
  );
}
