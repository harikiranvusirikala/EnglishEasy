"use client";

import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { Skeleton } from "@/components/ui/Skeleton";
import { Switch } from "@/components/ui/Switch";
import { button } from "@/components/ui/button";
import { well } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { PageHeader } from "@/components/ui/PageHeader";
import { SettingsCard } from "@/components/learn/SettingsCard";
import { Account } from "@/components/learn/Account";
import { ReminderSettings } from "@/components/learn/Reminder";
import { MyTracks } from "@/components/learn/Tracks";
import { SUPPORT_URL } from "@/components/support";
import { course } from "@/content/course";
import { useProgress } from "@/lib/progress-store";
import { updateSettings, useSettings } from "@/lib/settings-store";
import { strings } from "@/lib/strings";
import type { LearnIn, TextSize, ThemeChoice } from "@/learning/settings";

export default function SettingsPage() {
  const settings = useSettings();
  const progress = useProgress();
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-5 px-4 pt-6 pb-6 md:px-6 md:pt-8">
      <PageHeader
        title={<Bi label={strings.settingsTitle} className="items-start" />}
      >
        <BiText text={strings.settingsIntro} />
      </PageHeader>

      {!settings ? (
        <div aria-hidden="true" className="flex flex-col gap-4">
          <Skeleton className="h-40" />
          <Skeleton className="h-32" />
          <Skeleton className="h-44" />
          <Skeleton className="h-36" />
        </div>
      ) : (
        <>
          <SettingsCard
            icon="globe"
            title={strings.learnIn}
            hint={strings.learnInHint}
          >
            <SegmentedControl<LearnIn>
              name={strings.learnIn.en}
              value={settings.learnIn}
              onChange={(learnIn) => updateSettings({ learnIn })}
              options={[
                { value: "te", label: strings.learnInTelugu },
                { value: "en", label: strings.learnInEnglish },
              ]}
            />
          </SettingsCard>

          <SettingsCard icon="sun" title={strings.theme}>
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
          </SettingsCard>

          <SettingsCard icon="textSize" title={strings.textSize}>
            <SegmentedControl<TextSize>
              name={strings.textSize.en}
              value={settings.textSize}
              onChange={(textSize) => updateSettings({ textSize })}
              options={[
                { value: "A-", label: strings.textSizeAMinus },
                { value: "A", label: strings.textSizeA },
                { value: "A+", label: strings.textSizeAPlus },
                { value: "A++", label: strings.textSizeAPlusPlus },
              ]}
            />
            <p className={`${well} text-lg text-ink`}>
              <BiText text={strings.textSizeSample} />
            </p>
          </SettingsCard>

          <SettingsCard icon="speaker" title={strings.audioTitle}>
            <div className="flex flex-col divide-y divide-line">
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
            </div>
          </SettingsCard>
        </>
      )}

      <ReminderSettings />
      {progress && <MyTracks course={course} progress={progress} />}
      <Account />

      <SettingsCard
        icon="coffee"
        title={strings.supportCoffee}
        hint={strings.supportHint}
      >
        <a
          href={SUPPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${strings.supportCoffee.en} ${strings.opensNewTab.en}`}
          className={button("secondary")}
        >
          <Icon name="coffee" />
          <Bi label={strings.supportCoffee} />
          <Icon name="external" className="size-5 text-ink-3" />
        </a>
      </SettingsCard>
    </main>
  );
}
