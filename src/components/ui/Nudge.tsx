import type { ReactNode } from "react";
import { iconButton } from "./button";
import { Icon, type IconName } from "./icons";

/**
 * A one-time suggestion card on Home and the lesson complete screen (install the app, a daily reminder, save
 * progress, extra tracks), kept compact for phones: a small tinted icon beside the title, an optional × "Not now"
 * (`onDismiss` + `dismissLabel`, its name for screen readers), then the sentence at full width and the actions.
 * `label` names the region.
 */
export function Nudge({
  label,
  icon,
  tone = "brand",
  title,
  children,
  actions,
  onDismiss,
  dismissLabel,
}: {
  label: string;
  icon: IconName;
  tone?: "brand" | "accent";
  title: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  onDismiss?: () => void;
  dismissLabel?: string;
}) {
  return (
    <section aria-label={label} className="flex flex-col gap-3 rounded-[1.25rem] border border-line bg-surface p-4 shadow-card sm:p-5">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${tone === "accent" ? "bg-accent-soft text-accent-ink" : "bg-brand-soft text-brand"}`}
        >
          <Icon name={icon} className="size-5" />
        </span>
        <h2 className="font-display min-w-0 flex-1 text-lg leading-snug font-semibold text-ink">{title}</h2>
        {onDismiss && (
          <button type="button" onClick={onDismiss} aria-label={dismissLabel} title={dismissLabel} className={`${iconButton} -my-2 -mr-2`}>
            <Icon name="close" className="size-5" />
          </button>
        )}
      </div>
      {children && <div className="flex flex-col gap-3 text-base text-ink-2">{children}</div>}
      {actions && <div className="flex flex-col gap-2">{actions}</div>}
    </section>
  );
}
