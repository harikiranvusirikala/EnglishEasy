import { Bi } from "@/components/ui/Bi";
import { badge } from "@/components/ui/badge";
import { accentOf, type AudioVoice } from "@/learning/audio-manifest";
import { strings } from "@/lib/strings";

/**
 * The accent a line is spoken in (owner, 2026-11-11): "American" or "British" for the accent voices. In a lesson that
 * has accent voices (`withAccents`), the usual voices are labelled "Indian" so the difference is named; elsewhere they
 * show nothing.
 */
export function AccentLabel({ voice, withAccents = false }: { voice: AudioVoice | undefined; withAccents?: boolean }) {
  const accent = accentOf(voice);
  if (!accent && !withAccents) return null;
  const label = accent === "us" ? strings.accentAmerican : accent === "gb" ? strings.accentBritish : strings.accentIndian;
  return (
    <span className={`${badge(accent === "us" ? "brand" : accent === "gb" ? "accent" : "neutral")} font-sans`}>
      <Bi label={label} />
    </span>
  );
}
