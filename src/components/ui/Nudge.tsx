import type { ReactNode } from "react";
import { Icon, type IconName } from "./icons";

/**
 * A one-time suggestion card on Home and the lesson complete screen (install the app, a daily reminder, save
 * progress, extra tracks): a tinted icon, a title, a sentence, and its actions. `label` names the region.
 */
export function Nudge({
  label,
  icon,
  tone = "brand",
  title,
  children,
  actions,
}: {
  label: string;
  icon: IconName;
  tone?: "brand" | "accent";
  title: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section aria-label={label} className="flex flex-col gap-4 rounded-[1.25rem] border border-line bg-surface p-5 shadow-card">
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${tone === "accent" ? "bg-accent-soft text-accent-ink" : "bg-brand-soft text-brand"}`}
        >
          <Icon name={icon} className="size-6" />
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <h2 className="font-display text-xl leading-snug font-semibold text-ink">{title}</h2>
          {children && <div className="flex flex-col gap-3 text-base text-ink-2">{children}</div>}
        </div>
      </div>
      {actions && <div className="flex flex-col gap-2">{actions}</div>}
    </section>
  );
}
