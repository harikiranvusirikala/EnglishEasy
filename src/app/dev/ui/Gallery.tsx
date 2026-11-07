"use client";

import { useState, type ReactNode } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Dialog } from "@/components/ui/Dialog";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { Skeleton } from "@/components/ui/Skeleton";
import { StepList } from "@/components/ui/StepList";
import { Switch } from "@/components/ui/Switch";
import { Toast } from "@/components/ui/Toast";
import { button, iconButton } from "@/components/ui/button";
import { card, cardText, cardTitle } from "@/components/ui/card";
import { ICON_NAMES, Icon } from "@/components/ui/icons";
import { strings } from "@/lib/strings";
import type { LearnIn } from "@/learning/settings";

const MODES: LearnIn[] = ["te", "en"];

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={`${card} flex flex-col gap-3`}>
      <h2 className="text-sm font-semibold tracking-wide text-stone-600 uppercase dark:text-stone-400">{title}</h2>
      {children}
    </section>
  );
}

/** Each demo is shown once per Learn in mode, so both can be checked side by side. */
function BothModes({ children }: { children: (mode: LearnIn) => ReactNode }) {
  return (
    <div className="grid gap-4">
      {MODES.map((mode) => (
        <div key={mode} className="flex flex-col gap-2">
          <span className="text-xs text-stone-600 dark:text-stone-400">{mode === "te" ? "Telugu mode" : "English mode"}</span>
          {children(mode)}
        </div>
      ))}
    </div>
  );
}

export function Gallery() {
  const [dialog, setDialog] = useState(false);
  const [toast, setToast] = useState(false);
  const [on, setOn] = useState(true);
  const [pick, setPick] = useState("b");

  return (
    <main className="mx-auto flex max-w-xl flex-col gap-4 p-4 pb-24">
      <h1 className="text-2xl font-bold">
        <Bi label={strings.galleryTitle} className="items-start" />
      </h1>

      <Block title="Buttons">
        <BothModes>
          {(mode) => (
            <div className="flex flex-wrap gap-2">
              <button type="button" className={button("primary")}>
                <Bi mode={mode} label={strings.galleryPrimary} />
              </button>
              <button type="button" className={button("secondary")}>
                <Bi mode={mode} label={strings.gallerySecondary} />
              </button>
              <button type="button" className={button("ghost")}>
                <Bi mode={mode} label={strings.galleryGhost} />
              </button>
              <button type="button" className={button("danger")}>
                <Bi mode={mode} label={strings.galleryDanger} />
              </button>
              <button type="button" disabled className={button("primary")}>
                <Bi mode={mode} label={strings.galleryDisabled} />
              </button>
              <button type="button" className={button("primary", "lg")}>
                <Bi mode={mode} label={strings.galleryLarge} />
              </button>
            </div>
          )}
        </BothModes>
      </Block>

      <Block title="Icons">
        <div className="flex flex-wrap gap-2">
          {ICON_NAMES.map((name) => (
            <span key={name} title={name} className={iconButton}>
              <Icon name={name} />
            </span>
          ))}
        </div>
      </Block>

      <Block title="Bi and BiText">
        <BothModes>
          {(mode) => (
            <div className="flex flex-col gap-2">
              <Bi mode={mode} label={strings.continue} className="items-start" />
              <p className="text-lg">
                <BiText mode={mode} text={strings.textSizeSample} />
              </p>
            </div>
          )}
        </BothModes>
      </Block>

      <Block title="Card">
        <div className={card}>
          <p className={cardTitle}>
            <Bi label={strings.galleryCard} className="items-start" />
          </p>
          <p className={cardText}>
            <BiText text={strings.learnSoon} />
          </p>
        </div>
      </Block>

      <Block title="Progress bar">
        <ProgressBar label={strings.galleryProgress.en} value={0} max={12} />
        <ProgressBar label={strings.galleryProgress.en} value={5} max={12} />
        <ProgressBar label={strings.galleryProgress.en} value={12} max={12} />
      </Block>

      <Block title="Step list (done, current, not started)">
        <StepList
          steps={[
            { id: "1", label: strings.galleryStep1, state: "done" },
            { id: "2", label: strings.galleryStep2, state: "current" },
            { id: "3", label: strings.galleryStep3, state: "todo" },
          ]}
        />
      </Block>

      <Block title="Switch (off, on)">
        <Switch checked={on} onChange={setOn} label={strings.autoPlay} hint={strings.autoPlayHint} />
        <Switch checked={!on} onChange={(v) => setOn(!v)} label={strings.noSpeaking} />
      </Block>

      <Block title="Segmented control">
        <SegmentedControl
          name="Pick"
          value={pick}
          onChange={setPick}
          options={[
            { value: "a", label: strings.textSizeA },
            { value: "b", label: strings.textSizeAPlus },
            { value: "c", label: strings.textSizeAPlusPlus },
          ]}
        />
      </Block>

      <Block title="Skeleton">
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-24" />
      </Block>

      <Block title="Dialog and toast">
        <div className="flex flex-wrap gap-2">
          <button type="button" className={button("secondary")} onClick={() => setDialog(true)}>
            <Bi label={strings.galleryDialogOpen} />
          </button>
          <button type="button" className={button("secondary")} onClick={() => setToast(true)}>
            <Bi label={strings.galleryToastShow} />
          </button>
        </div>
        {toast && (
          <Toast>
            <BiText text={strings.galleryToast} />
          </Toast>
        )}
      </Block>

      <Dialog open={dialog} onClose={() => setDialog(false)} title={strings.galleryDialogTitle.en}>
        <p className="mb-4 text-lg">
          <BiText text={strings.galleryDialogBody} />
        </p>
        <button type="button" className={`${button("primary")} w-full`} onClick={() => setDialog(false)}>
          <Bi label={strings.continue} />
        </button>
      </Dialog>
    </main>
  );
}
