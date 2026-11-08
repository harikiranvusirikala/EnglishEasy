import { Bi } from "@/components/ui/Bi";
import { strings } from "@/lib/strings";
import type { Chip } from "@/content/types";

// The colour-coded sentence pattern (VISION §4.2): the same colour always means the same part of the sentence,
// and every chip carries its label too, so colour is never the only signal. Colours are design tokens (Day and Night).

const ROLE: Record<Chip["role"], { label: (typeof strings)["roleWho"]; box: string }> = {
  who: { label: strings.roleWho, box: "border-who-line bg-who-bg text-who-ink" },
  action: { label: strings.roleAction, box: "border-action-line bg-action-bg text-action-ink" },
  what: { label: strings.roleWhat, box: "border-what-line bg-what-bg text-what-ink" },
  when: { label: strings.roleWhen, box: "border-when-line bg-when-bg text-when-ink" },
};

export function PatternChips({ chips, animate = false, size = "md" }: { chips: Chip[]; animate?: boolean; size?: "md" | "lg" }) {
  return (
    <ul className="flex flex-wrap items-start gap-2">
      {chips.map((chip, i) => (
        <li
          key={i}
          style={animate ? { animationDelay: `${i * 150}ms` } : undefined}
          className={`flex flex-col items-center gap-1 ${animate ? "animate-[chip-in_220ms_ease-out_backwards] motion-reduce:animate-none" : ""}`}
        >
          <span className={`rounded-xl border-2 font-semibold ${size === "lg" ? "px-4 py-2.5 text-2xl" : "px-3 py-2 text-lg"} ${ROLE[chip.role].box}`}>{chip.text}</span>
          <span className="text-sm text-ink-2">
            <Bi label={ROLE[chip.role].label} />
          </span>
        </li>
      ))}
    </ul>
  );
}
