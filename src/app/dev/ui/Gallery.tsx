"use client";

import { useState, type ReactNode } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Dialog } from "@/components/ui/Dialog";
import { EmptyState } from "@/components/ui/EmptyState";
import { Logo, LogoMark } from "@/components/ui/Logo";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { Skeleton } from "@/components/ui/Skeleton";
import { StepList } from "@/components/ui/StepList";
import { Switch } from "@/components/ui/Switch";
import { Toast } from "@/components/ui/Toast";
import { badge } from "@/components/ui/badge";
import { button, iconButton, outlineIconButton, softIconButton } from "@/components/ui/button";
import { accentCard, brandCard, card, cardLink, cardText, cardTitle, well } from "@/components/ui/card";
import { ICON_NAMES, Icon } from "@/components/ui/icons";
import { ILLUSTRATION_NAMES, Illustration } from "@/components/illustrations/Illustration";
import { Narrate } from "@/components/player/Narrate";
import { ThemeMenu } from "@/components/ThemeMenu";
import { strings } from "@/lib/strings";
import type { LearnIn } from "@/learning/settings";

const MODES: LearnIn[] = ["te", "en"];

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={`${card} flex flex-col gap-4`}>
      <h2 className="text-sm font-semibold tracking-wide text-ink-3 uppercase">{title}</h2>
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
          <span className="text-sm text-ink-3">{mode === "te" ? "Telugu mode" : "English mode"}</span>
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
    <main className="mx-auto flex max-w-xl flex-col gap-5 p-4 pb-24">
      <PageHeader title={<Bi label={strings.galleryTitle} className="items-start" />} actions={<ThemeMenu />} />

      <Block title="Logo">
        <div className="flex flex-wrap items-center gap-6">
          <Logo size="lg" />
          <Logo />
          <LogoMark className="size-14" />
        </div>
      </Block>

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
              <button type="button" className={button("soft")}>
                <Icon name="hint" />
                <Bi mode={mode} label={strings.hint} />
              </button>
              <button type="button" className={button("ghost")}>
                <Bi mode={mode} label={strings.galleryGhost} />
              </button>
              <button type="button" className={button("accent")}>
                <Icon name="star" />
                <Bi mode={mode} label={strings.galleryAccent} />
              </button>
              <button type="button" className={button("danger")}>
                <Bi mode={mode} label={strings.galleryDanger} />
              </button>
              <button type="button" disabled className={button("primary")}>
                <Bi mode={mode} label={strings.galleryDisabled} />
              </button>
              <button type="button" className={`${button("primary", "lg")} w-full`}>
                <Bi mode={mode} label={strings.galleryLarge} />
              </button>
            </div>
          )}
        </BothModes>
        <div className="flex flex-wrap gap-2">
          <span className={iconButton}>
            <Icon name="close" />
          </span>
          <span className={outlineIconButton}>
            <Icon name="moon" />
          </span>
          <span className={softIconButton}>
            <Icon name="speaker" />
          </span>
        </div>
      </Block>

      <Block title="Listen and Slow">
        <Narrate text="I went to the market yesterday." />
        <div className={`${well} flex items-center justify-between gap-3`}>
          <span className="text-lg font-medium">I eat rice.</span>
          <Narrate text="I eat rice." variant="compact" />
        </div>
      </Block>

      <Block title="Cards">
        <div className={brandCard}>
          <span className={badge("onBrand")}>Week 1 · Day 3</span>
          <p className="font-display mt-3 text-2xl font-semibold">Every Day</p>
          <p lang="te" className="text-white/85">
            రోజూ చేసే పనులు
          </p>
          <ProgressBar label={strings.galleryProgress.en} value={9} max={15} tone="onBrand" className="mt-4" />
        </div>
        <div className={card}>
          <p className={cardTitle}>
            <Bi label={strings.galleryCard} className="items-start" />
          </p>
          <p className={cardText}>
            <BiText text={strings.learnSoon} />
          </p>
        </div>
        <a href="#cards" className={cardLink}>
          <p className={cardTitle}>Interactive card</p>
          <p className={cardText}>The whole card is a link.</p>
        </a>
        <div className={accentCard}>
          <p className="font-display text-lg font-semibold">Try it today 💬</p>
          <p className="text-ink-2">Tell someone what you did yesterday — in English.</p>
        </div>
      </Block>

      <Block title="Badges">
        <div className="flex flex-wrap gap-2">
          <span className={badge("brand")}>4</span>
          <span className={badge("accent")}>Today</span>
          <span className={badge("good")}>✓ Done</span>
          <span className={badge("neutral")}>Soon</span>
        </div>
      </Block>

      <Block title="Progress">
        <ProgressBar label={strings.galleryProgress.en} value={0} max={12} />
        <ProgressBar label={strings.galleryProgress.en} value={5} max={12} />
        <ProgressBar label={strings.galleryProgress.en} value={12} max={12} />
        <div className="flex items-center gap-4">
          <ProgressRing label={strings.galleryProgress.en} value={0} max={10}>
            <span className="font-display text-lg font-bold">0%</span>
          </ProgressRing>
          <ProgressRing label={strings.galleryProgress.en} value={6} max={10}>
            <span className="font-display text-lg font-bold">60%</span>
          </ProgressRing>
          <ProgressRing label={strings.galleryProgress.en} value={10} max={10} tone="good">
            <Icon name="check" className="size-7 text-good" strokeWidth={2.6} />
          </ProgressRing>
        </div>
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

      <Block title="Icons">
        <div className="flex flex-wrap gap-1">
          {ICON_NAMES.map((name) => (
            <span key={name} title={name} className={iconButton}>
              <Icon name={name} />
            </span>
          ))}
        </div>
      </Block>

      <Block title="Illustrations">
        <div className="grid grid-cols-2 gap-3">
          {ILLUSTRATION_NAMES.map((name) => (
            <figure key={name} className="flex flex-col items-center gap-1">
              <Illustration name={name} className="w-full" />
              <figcaption className="text-sm text-ink-3">{name}</figcaption>
            </figure>
          ))}
        </div>
      </Block>

      <Block title="Empty state">
        <EmptyState
          illustration="empty"
          title={<Bi label={strings.galleryEmptyTitle} />}
          action={
            <button type="button" className={`${button("primary")} w-full`}>
              <Bi label={strings.continue} />
            </button>
          }
        >
          <BiText text={strings.galleryEmptyText} />
        </EmptyState>
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
