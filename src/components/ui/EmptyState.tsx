import type { ReactNode } from "react";
import { Illustration, type IllustrationName } from "@/components/illustrations/Illustration";

/** A friendly "nothing here yet" (or a page that says one thing): an illustration, a heading, a sentence and an action. */
export function EmptyState({
  illustration,
  title,
  children,
  action,
  as: Heading = "h2",
  className = "",
}: {
  illustration: IllustrationName;
  title: ReactNode;
  children?: ReactNode;
  action?: ReactNode;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-3 px-2 py-6 text-center ${className}`}>
      <Illustration name={illustration} className="w-44 animate-fade-in motion-reduce:animate-none" />
      <Heading className="font-display text-2xl font-semibold text-ink">{title}</Heading>
      {children && <div className="max-w-sm text-base text-ink-2">{children}</div>}
      {action && <div className="mt-2 flex w-full max-w-sm flex-col gap-2">{action}</div>}
    </div>
  );
}
