import type { ReactNode } from "react";

/**
 * A chat bubble: the partner on the left (with a round avatar and their name), the learner on the right. `active`
 * rings the line being read aloud. Telugu text inside should carry `lang="te"` itself.
 */
export function Bubble({
  side,
  name,
  initial,
  active = false,
  children,
}: {
  side: "left" | "right";
  name?: ReactNode;
  /** The avatar's letter (the partner's initial). */
  initial?: string;
  active?: boolean;
  children: ReactNode;
}) {
  const left = side === "left";
  return (
    <div className={`flex animate-panel-in items-end gap-2 motion-reduce:animate-none ${left ? "justify-start" : "justify-end"}`}>
      {left && initial && (
        <span aria-hidden="true" className="font-display mb-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-lg font-bold text-accent-ink ring-2 ring-surface">
          {initial}
        </span>
      )}
      <div className={`flex max-w-[85%] flex-col gap-1 ${left ? "items-start" : "items-end"}`}>
        {name && <p className="px-1 text-sm font-semibold text-ink-2">{name}</p>}
        <div
          className={`rounded-3xl px-4 py-3 text-xl leading-snug shadow-card ${
            left ? "rounded-bl-md border border-line bg-surface text-ink" : "rounded-br-md bg-brand-fill text-on-brand"
          } ${active ? "ring-[3px] ring-accent" : ""}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
