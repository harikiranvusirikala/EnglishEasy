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
      {name && <p className="px-1 text-sm font-semibold text-ink-2">{name}</p>}
      <div
        className={`max-w-[90%] rounded-2xl border px-4 py-3 text-xl ${
          left
            ? "rounded-tl-sm border-line bg-surface text-ink"
            : "rounded-tr-sm border-brand bg-brand-fill text-on-brand"
        } ${active ? "ring-2 ring-teal-600 dark:ring-teal-300" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
