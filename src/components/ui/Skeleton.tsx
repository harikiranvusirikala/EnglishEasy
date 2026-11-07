/** A grey block with the final shape of what is loading, so nothing jumps when the real thing arrives. */
export function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded-xl bg-stone-200 motion-reduce:animate-none dark:bg-stone-800 ${className}`} />;
}
