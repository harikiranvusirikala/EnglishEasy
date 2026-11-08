import type { ReactNode } from "react";

/** A short message that slides in and goes. A status, so screen readers say it; placed by its parent (`className`). */
export function Toast({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`pointer-events-none flex justify-center ${className}`}>
      <div
        role="status"
        className="pointer-events-auto flex min-h-13 animate-toast-in items-center gap-3 rounded-2xl bg-ink px-5 text-base font-medium text-page shadow-raised motion-reduce:animate-none"
      >
        {children}
      </div>
    </div>
  );
}
