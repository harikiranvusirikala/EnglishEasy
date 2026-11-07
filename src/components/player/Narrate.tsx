import { iconButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { strings } from "@/lib/strings";

/**
 * 🔊 (normal) and 🐢 (slow) for a text. Disabled until the voice arrives (Step 7); `data-say` already names the text.
 * `text` is what will be read aloud.
 */
export function Narrate({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center" data-say={text}>
      <button type="button" disabled aria-label={strings.listen.en} className={iconButton}>
        <Icon name="speaker" />
      </button>
      <button type="button" disabled aria-label={strings.listenSlow.en} className={iconButton}>
        <Icon name="turtle" />
      </button>
    </span>
  );
}
