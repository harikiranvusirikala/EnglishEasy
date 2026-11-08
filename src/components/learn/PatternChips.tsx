import { Bi } from "@/components/ui/Bi";
import { strings } from "@/lib/strings";
import type { Chip } from "@/content/types";

// The colour-coded sentence pattern (VISION §4.2): the same colour always means the same part of the sentence,
// and every chip carries its label too, so colour is never the only signal.

const ROLE: Record<Chip["role"], { label: (typeof strings)["roleWho"]; box: string }> = {
  who: { label: strings.roleWho, box: "border-sky-300 bg-sky-100 text-sky-950 dark:border-sky-700 dark:bg-sky-950 dark:text-sky-100" },
  action: {
    label: strings.roleAction,
    box: "border-good-line bg-good-soft text-good",
  },
  what: {
    label: strings.roleWhat,
    box: "border-violet-300 bg-violet-100 text-violet-950 dark:border-violet-700 dark:bg-violet-950 dark:text-violet-100",
  },
  when: { label: strings.roleWhen, box: "border-almost-line bg-almost-soft text-almost" },
};

export function PatternChips({ chips, animate = false }: { chips: Chip[]; animate?: boolean }) {
  return (
    <ul className="flex flex-wrap items-start gap-2">
      {chips.map((chip, i) => (
        <li
          key={i}
          style={animate ? { animationDelay: `${i * 150}ms` } : undefined}
          className={`flex flex-col items-center gap-1 ${animate ? "animate-[chip-in_200ms_ease-out_backwards] motion-reduce:animate-none" : ""}`}
        >
          <span className={`rounded-lg border px-3 py-2 text-lg font-semibold ${ROLE[chip.role].box}`}>{chip.text}</span>
          <span className="text-sm text-ink-2">
            <Bi label={ROLE[chip.role].label} />
          </span>
        </li>
      ))}
    </ul>
  );
}
