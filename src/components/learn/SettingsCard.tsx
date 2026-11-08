import type { ReactNode } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Icon, type IconName } from "@/components/ui/icons";
import type { Bi as BiLabel } from "@/lib/strings";

/** One Settings section: a tinted icon beside the title, an optional hint, and the controls. */
export function SettingsCard({ icon, title, hint, id, aside, children }: { icon: IconName; title: BiLabel; hint?: BiLabel; id?: string; aside?: ReactNode; children?: ReactNode }) {
  return (
    <section aria-labelledby={id} aria-label={id ? undefined : title.en} className="flex flex-col gap-4 rounded-[1.25rem] border border-line bg-surface p-5 shadow-card">
      <div className="flex items-start gap-3">
        <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
          <Icon name={icon} />
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-1 pt-1">
          <h2 id={id} className="font-display text-xl leading-snug font-semibold text-ink">
            <Bi label={title} className="items-start" />
          </h2>
          {hint && (
            <p className="text-base text-ink-2">
              <BiText text={hint} />
            </p>
          )}
        </div>
        {aside}
      </div>
      {children}
    </section>
  );
}
