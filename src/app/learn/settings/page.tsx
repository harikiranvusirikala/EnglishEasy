"use client";

import type { ReactNode } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { Skeleton } from "@/components/ui/Skeleton";
import { Switch } from "@/components/ui/Switch";
import { button } from "@/components/ui/button";
import { card, cardText, cardTitle } from "@/components/ui/card";
import { Account } from "@/components/learn/Account";
import { ReminderSettings } from "@/components/learn/Reminder";
import { MyTracks } from "@/components/learn/Tracks";
import { VoiceSettings } from "@/components/learn/VoiceSettings";
import { SUPPORT_URL } from "@/components/support";
import { course } from "@/content/course";
import { useProgress } from "@/lib/progress-store";
import { updateSettings, useSettings } from "@/lib/settings-store";
import { strings, type Bi as BiLabel } from "@/lib/strings";
import type { LearnIn, TextSize, ThemeChoice } from "@/learning/settings";

function Section({ title, hint, children }: { title: BiLabel; hint?: BiLabel; children: ReactNode }) {
  return (
    <section className={`${card} flex flex-col gap-3`}>
      <h2 className={cardTitle}>
        <Bi label={title} className="items-start" />
      </h2>
      {hint && (
        <p className={cardText}>
          <BiText text={hint} />
        </p>
      )}
      {children}
    </section>
  );
}

export default function SettingsPage() {
  const settings = useSettings();
  const progress = useProgress();
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">
        <Bi label={strings.settingsTitle} className="items-start" />
      </h1>

      {!settings ? (
        <div aria-hidden="true" className="flex flex-col gap-4">
          <Skeleton className="h-40" />
          <Skeleton className="h-32" />
          <Skeleton className="h-44" />
          <Skeleton className="h-36" />
        </div>
      ) : (
        <>
          <Section title={strings.learnIn} hint={strings.learnInHint}>
            <SegmentedControl<LearnIn>
              name={strings.learnIn.en}
              value={settings.learnIn}
              onChange={(learnIn) => updateSettings({ learnIn })}
              options={[
                { value: "te", label: strings.learnInTelugu },
                { value: "en", label: strings.learnInEnglish },
              ]}
            />
          </Section>

          <Section title={strings.theme}>
            <SegmentedControl<ThemeChoice>
              name={strings.theme.en}
              value={settings.theme}
              onChange={(theme) => updateSettings({ theme })}
              options={[
                { value: "light", label: strings.themeDay },
                { value: "dark", label: strings.themeNight },
                { value: "system", label: strings.themeSystem },
              ]}
            />
          </Section>

          <Section title={strings.textSize}>
            <SegmentedControl<TextSize>
              name={strings.textSize.en}
              value={settings.textSize}
              onChange={(textSize) => updateSettings({ textSize })}
              options={[
                { value: "A", label: strings.textSizeA },
                { value: "A+", label: strings.textSizeAPlus },
                { value: "A++", label: strings.textSizeAPlusPlus },
              ]}
            />
            <p className="rounded-xl bg-stone-100 p-3 text-lg dark:bg-stone-800">
              <BiText text={strings.textSizeSample} />
            </p>
          </Section>

          <section className={`${card} flex flex-col divide-y divide-stone-200 dark:divide-stone-800`}>
            <Switch
              checked={settings.autoPlay}
              onChange={(autoPlay) => updateSettings({ autoPlay })}
              label={strings.autoPlay}
              hint={strings.autoPlayHint}
            />
            <Switch
              checked={settings.noSpeaking}
              onChange={(noSpeaking) => updateSettings({ noSpeaking })}
              label={strings.noSpeaking}
              hint={strings.noSpeakingHint}
            />
          </section>

          <VoiceSettings />
        </>
      )}

      <ReminderSettings />
      {progress && <MyTracks course={course} progress={progress} />}
      <Account />

      <section className={`${card} flex flex-col gap-3`}>
        <p className={cardText}>
          <BiText text={strings.supportHint} />
        </p>
        <a
          href={SUPPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${strings.supportCoffee.en} ${strings.opensNewTab.en}`}
          className={button("secondary")}
        >
          <Bi label={strings.supportCoffee} />
        </a>
      </section>
    </main>
  );
}
