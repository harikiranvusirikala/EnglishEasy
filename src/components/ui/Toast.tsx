import type { ReactNode } from "react";

/** A short message that slides in and goes. A status, so screen readers say it; placed by its parent (`className`). */
export function Toast({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`pointer-events-none flex justify-center ${className}`}>
      <div
        role="status"
        className="pointer-events-auto flex min-h-13 animate-[toast-in_180ms_ease-out] items-center gap-3 rounded-xl bg-stone-900 px-5 text-base text-white shadow-lg motion-reduce:animate-none dark:bg-stone-100 dark:text-stone-900"
      >
        {children}
      </div>
    </div>
  );
}
