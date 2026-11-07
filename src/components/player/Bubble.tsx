import type { ReactNode } from "react";

/**
 * A chat bubble: the partner on the left (with a name), the learner on the right. `active` rings the line being read
 * aloud. Telugu text inside should carry `lang="te"` itself.
 */
export function Bubble({
  side,
  name,
  active = false,
  children,
}: {
  side: "left" | "right";
  name?: ReactNode;
  active?: boolean;
  children: ReactNode;
}) {
  const left = side === "left";
  return (
    <div className={`flex flex-col gap-1 ${left ? "items-start" : "items-end"} animate-[panel-in_180ms_ease-out] motion-reduce:animate-none`}>
      {name && <p className="px-1 text-sm font-semibold text-stone-600 dark:text-stone-400">{name}</p>}
      <div
        className={`max-w-[90%] rounded-2xl border px-4 py-3 text-xl ${
          left
            ? "rounded-tl-sm border-stone-200 bg-white text-stone-900 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100"
            : "rounded-tr-sm border-teal-700 bg-teal-700 text-white dark:border-teal-400 dark:bg-teal-400 dark:text-stone-950"
        } ${active ? "ring-2 ring-teal-600 dark:ring-teal-300" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
