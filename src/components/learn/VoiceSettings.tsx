"use client";

import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { button, focusRing } from "@/components/ui/button";
import { SettingsCard } from "./SettingsCard";
import { cardText } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { updateSettings, useSettings } from "@/lib/settings-store";
import { speak, useVoices } from "@/lib/speak";
import { strings } from "@/lib/strings";
import { englishVoices, pickEnglishVoice } from "@/learning/voice-pick";

/** Settings → Voice: pick the English voice, with a sample. (Nothing is read aloud in Telugu since 2026-11-08, so there is no Telugu voice card.) */
export function VoiceSettings() {
  const settings = useSettings();
  const voices = useVoices();
  if (!settings || !voices) return null;

  const list = englishVoices(voices);
  const current = pickEnglishVoice(voices, settings.voiceURI);
  const sample = (voiceURI: string) => {
    updateSettings({ voiceURI });
    speak(strings.voiceSampleText.en); // reads with the voice just saved
  };

  return (
    <>
      <SettingsCard icon="headphones" title={strings.voiceEnglish} hint={strings.voiceEnglishHint} id="voice-english">
        {list.length === 0 ? (
          <p className={cardText}>
            <BiText text={strings.voiceNoEnglish} />
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {list.map((voice) => {
              const selected = voice.voiceURI === current?.voiceURI;
              return (
                <li key={voice.voiceURI}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    aria-label={`${voice.name} (${voice.lang})`}
                    onClick={() => sample(voice.voiceURI)}
                    className={`flex min-h-13 w-full items-center justify-between gap-3 rounded-2xl border px-4 py-2 text-left transition-colors ${focusRing} ${
                      selected
                        ? "border-brand bg-brand-soft ring-2 ring-brand"
                        : "border-line-strong bg-surface hover:bg-sunken"
                    }`}
                  >
                    <span className="flex flex-col">
                      <span className="text-base font-semibold">{voice.name}</span>
                      <span className="text-sm text-ink-2">{voice.lang}</span>
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-brand">
                      {selected && <Icon name="check" className="size-5" />}
                      <Bi label={strings.voiceSample} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        {current && (
          <button type="button" onClick={() => speak(strings.voiceSampleText.en)} className={button("secondary")}>
            <Icon name="speaker" />
            <Bi label={strings.voiceSample} />
          </button>
        )}
      </SettingsCard>

    </>
  );
}
