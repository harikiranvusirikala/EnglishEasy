"use client";

import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { TeluguVoiceHelp } from "@/components/player/TeluguVoiceHelp";
import { button } from "@/components/ui/button";
import { card, cardText, cardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { updateSettings, useSettings } from "@/lib/settings-store";
import { isAndroid, speak, useVoices } from "@/lib/speak";
import { strings } from "@/lib/strings";
import { englishVoices, pickEnglishVoice, pickTeluguVoice } from "@/learning/voice-pick";

/** Settings → Voice: pick the English voice (with a sample), and see whether the Telugu voice is there. */
export function VoiceSettings() {
  const settings = useSettings();
  const voices = useVoices();
  if (!settings || !voices) return null;

  const list = englishVoices(voices);
  const current = pickEnglishVoice(voices, settings.voiceURI);
  const telugu = pickTeluguVoice(voices, settings.teluguVoiceURI);
  const sample = (voiceURI: string) => {
    updateSettings({ voiceURI });
    speak(strings.voiceSampleText.en); // reads with the voice just saved
  };

  return (
    <>
      <section className={`${card} flex flex-col gap-3`} aria-labelledby="voice-english">
        <h2 id="voice-english" className={cardTitle}>
          <Bi label={strings.voiceEnglish} className="items-start" />
        </h2>
        <p className={cardText}>
          <BiText text={strings.voiceEnglishHint} />
        </p>
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
                    className={`flex min-h-13 w-full items-center justify-between gap-3 rounded-xl border px-4 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-teal-700 dark:focus-visible:ring-teal-300 ${
                      selected
                        ? "border-teal-700 bg-teal-50 ring-2 ring-teal-700 dark:border-teal-400 dark:bg-teal-950 dark:ring-teal-400"
                        : "border-stone-300 bg-white hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:hover:bg-stone-800"
                    }`}
                  >
                    <span className="flex flex-col">
                      <span className="text-base font-semibold">{voice.name}</span>
                      <span className="text-sm text-stone-600 dark:text-stone-400">{voice.lang}</span>
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-teal-800 dark:text-teal-300">
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
      </section>

      <section className={`${card} flex flex-col gap-3`} aria-labelledby="voice-telugu">
        <div className="flex items-center justify-between gap-3">
          <h2 id="voice-telugu" className={cardTitle}>
            <Bi label={strings.voiceTelugu} className="items-start" />
          </h2>
          <span
            data-testid="telugu-voice-status"
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold ${
              telugu ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100" : "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-100"
            }`}
          >
            <Icon name={telugu ? "check" : "retry"} className="size-5" />
            <Bi label={telugu ? strings.voiceTeluguFound : strings.voiceTeluguMissing} />
          </span>
        </div>
        {telugu ? (
          <p className={cardText}>{telugu.name}</p>
        ) : (
          <p className={cardText}>
            <BiText text={strings.voiceTeluguMissingHint} />
          </p>
        )}
        {!telugu && isAndroid() && <TeluguVoiceHelp />}
      </section>
    </>
  );
}
