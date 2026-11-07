/** A progress bar. `label` is its accessible name (a string from strings.ts); the screen shows its own text beside it. */
export function ProgressBar({ label, value, max, className = "" }: { label: string; value: number; max: number; className?: string }) {
  const percent = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className={`h-3 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800 ${className}`}
    >
      <div
        className="h-full rounded-full bg-teal-700 transition-[width] duration-200 motion-reduce:transition-none dark:bg-teal-400"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
