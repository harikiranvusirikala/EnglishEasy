import { useMemo, useSyncExternalStore } from "react";
import { dateKey } from "@/learning/progress";

// The local date and hour, read only after hydration (never while rendering on the server): `null` until then.
// The snapshot is a string, so React sees the same value until the hour changes.

const subscribeNever = () => () => {};
const snapshot = () => {
  const now = new Date();
  return `${dateKey(now)}|${now.getHours()}`;
};

export type Clock = { today: string; hour: number };

export function useClock(): Clock | null {
  const raw = useSyncExternalStore(subscribeNever, snapshot, () => null);
  return useMemo(() => {
    if (raw === null) return null;
    const [today, hour] = raw.split("|");
    return { today, hour: Number(hour) };
  }, [raw]);
}
