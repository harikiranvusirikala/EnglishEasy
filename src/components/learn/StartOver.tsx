"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Dialog } from "@/components/ui/Dialog";
import { button } from "@/components/ui/button";
import { cardText, well } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import type { AccountState } from "@/learning/account";
import { resetProgress } from "@/learning/progress";
import { trackOfferKey, type Course } from "@/learning/recommend";
import { useAccount } from "@/lib/account";
import { updateProgress } from "@/lib/progress-store";
import { getSettings, updateSettings } from "@/lib/settings-store";
import { fill, strings } from "@/lib/strings";
import { pushNow } from "@/lib/sync";
import { SettingsCard } from "./SettingsCard";

/**
 * Settings → Start over (owner request, 2026-11-10): clears everything learned, then Home at Day 1. What Settings can
 * change (goals, Learn in, theme, text size, audio, reminders) stays. Signed in, the account is reset too (now, or when
 * back online) and other phones follow when they sync; signed out, only this phone. A tap to confirm, never typing.
 */
export function StartOver({ course }: { course: Course }) {
  const account = useAccount();
  return <StartOverView account={account} course={course} />;
}

/** The card and its dialog for a given account state (pure view, so both cases are testable). */
export function StartOverView({ account, course }: { account: AccountState; course: Course }) {
  const router = useRouter();
  const [asking, setAsking] = useState(false);
  const signedIn = account.kind === "signedIn";
  const confirm = () => {
    updateProgress((p) => resetProgress(p, new Date().toISOString(), signedIn));
    // Back at Week 1, each goal's "New for you" card comes again at its week.
    const offers = new Set(course.tracks.map((t) => trackOfferKey(t.id)));
    updateSettings({ dismissed: getSettings().dismissed.filter((id) => !offers.has(id)) });
    if (signedIn) void pushNow(); // offline: the sync sends it when back online
    router.push("/learn");
  };
  return (
    <SettingsCard icon="retry" title={strings.startOver} hint={strings.startOverHint}>
      <button type="button" onClick={() => setAsking(true)} disabled={account.kind === "loading"} className={button("dangerOutline")}>
        <Icon name="retry" />
        <Bi label={strings.resetProgress} />
      </button>
      <Dialog open={asking} onClose={() => setAsking(false)} title={strings.resetAsk.en}>
        <div className="flex flex-col gap-4">
          <p className={cardText}>
            <BiText text={signedIn ? fill(strings.resetBodyAccount, { email: account.email }) : strings.resetBodyPhone} />
          </p>
          <dl className={`${well} flex flex-col gap-1 text-base text-ink`}>
            <dt className="text-sm font-bold text-ink-3">
              <Bi label={strings.resetCleared} className="items-start" />
            </dt>
            <dd>
              <BiText text={strings.resetClearedList} />
            </dd>
            <dt className="pt-2 text-sm font-bold text-ink-3">
              <Bi label={strings.resetKept} className="items-start" />
            </dt>
            <dd>
              <BiText text={strings.resetKeptList} />
            </dd>
          </dl>
          <p className="text-base font-semibold text-danger">
            <BiText text={strings.resetCannotUndo} />
          </p>
          <button type="button" onClick={confirm} className={button("danger")}>
            <Bi label={strings.resetProgress} />
          </button>
          <button type="button" onClick={() => setAsking(false)} className={button("secondary")}>
            <Bi label={strings.cancel} />
          </button>
        </div>
      </Dialog>
    </SettingsCard>
  );
}
