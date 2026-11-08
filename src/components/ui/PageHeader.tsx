import type { ReactNode } from "react";

/** A screen's heading: the title in the display font, an optional sentence, and actions on the right. */
export function PageHeader({ title, children, actions, className = "" }: { title: ReactNode; children?: ReactNode; actions?: ReactNode; className?: string }) {
  return (
    <header className={`flex items-end justify-between gap-4 ${className}`}>
      <div className="flex min-w-0 flex-col gap-1">
        <h1 className="font-display text-[1.85rem] leading-tight font-bold text-ink">{title}</h1>
        {children && <div className="text-base text-ink-2">{children}</div>}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </header>
  );
}
