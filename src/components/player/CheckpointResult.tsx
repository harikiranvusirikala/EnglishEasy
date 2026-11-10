"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { ContentText } from "@/components/ui/ContentText";
import { Dialog } from "@/components/ui/Dialog";
import { button } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { Illustration } from "@/components/illustrations/Illustration";
import type { Checkpoint } from "@/content/course";
import { checkpointWeeks, practiceAgainFor } from "@/learning/checkpoint";
import type { Course } from "@/learning/recommend";
import { useAccount } from "@/lib/account";
import { drawCertificate, sharePicture } from "@/lib/certificate";
import { useProgress } from "@/lib/progress-store";
import { fill, strings } from "@/lib/strings";

/**
 * The end of a checkpoint week (CURRICULUM §2b): "Checkpoint N complete", what the learner can now do, the lessons of
 * the block that still hold a mistake, and the certificate (a picture drawn on the phone, shared through the phone's
 * share sheet; the name is the sign-in name, or none).
 */
export function CheckpointResult({ checkpoint, course }: { checkpoint: Checkpoint; course: Course }) {
  const progress = useProgress();
  const [open, setOpen] = useState(false);
  const { from, to } = checkpointWeeks(checkpoint);
  const again = progress ? practiceAgainFor(course, checkpoint, progress) : [];
  return (
    <div className="flex flex-col gap-5" data-testid="checkpoint">
      <header className="flex flex-col items-center gap-1 text-center">
        <Illustration name="complete" className="w-48 animate-pop-in motion-reduce:animate-none" />
        <h1 className="font-display mt-2 text-[2rem] leading-tight font-bold text-ink">
          <Bi label={fill(strings.checkpointComplete, { n: checkpoint.n })} />
        </h1>
        <p className="text-lg text-ink-2">
          {checkpoint.title.en} · {fill(strings.checkpointWeeks, { from, to }).en}
        </p>
      </header>
      <section className={`${card} flex flex-col gap-3`}>
        <h2 className="text-base font-semibold text-ink-3">
          <Bi label={strings.nowYouCan} className="items-start" />
        </h2>
        <ul className="flex flex-col gap-3">
          {checkpoint.items.map((item) => (
            <li key={item.en} className="flex items-start gap-3 text-lg text-ink">
              <span aria-hidden="true" className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-good text-good-soft">
                <Icon name="check" className="size-4" strokeWidth={3} />
              </span>
              <ContentText text={item} />
            </li>
          ))}
        </ul>
      </section>
      {again.length > 0 && (
        <section className="flex flex-col gap-2 rounded-[1.25rem] bg-sunken p-4">
          <h2 className="text-base font-semibold text-ink-3">
            <Bi label={strings.practiceTheseAgain} className="items-start" />
          </h2>
          {again.map((a) => (
            <p key={a.dayId} className="flex items-center gap-2 text-lg text-ink">
              <Icon name="retry" className="size-5 shrink-0 text-almost" />
              {a.title.en} <span className="text-base text-ink-3">({fill(strings.practiceAgainWeek, { n: a.week }).en})</span>
            </p>
          ))}
          <Link href="/learn/practice/again" className={`${button("ghost", "link")} self-start`}>
            <Bi label={strings.homePracticeAgain} />
          </Link>
        </section>
      )}
      <button type="button" onClick={() => setOpen(true)} className={`${button("accent", "lg")} w-full`}>
        <Icon name="trophy" />
        <Bi label={strings.getCertificate} />
      </button>
      {open && <CertificateDialog checkpoint={checkpoint} onClose={() => setOpen(false)} />}
    </div>
  );
}

function CertificateDialog({ checkpoint, onClose }: { checkpoint: Checkpoint; onClose: () => void }) {
  const account = useAccount();
  const [picture, setPicture] = useState<{ blob: Blob; url: string } | null>(null);
  const name = account.kind === "signedIn" ? account.name : null;

  useEffect(() => {
    let url: string | null = null;
    let live = true;
    void drawCertificate({
      name,
      checkpoint: checkpoint.n,
      title: checkpoint.title.en,
      line: checkpoint.certificate,
      date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }),
      host: window.location.host,
    }).then((blob) => {
      if (!blob || !live) return;
      url = URL.createObjectURL(blob);
      setPicture({ blob, url });
    });
    return () => {
      live = false;
      if (url) URL.revokeObjectURL(url);
    };
  }, [name, checkpoint]);

  const fileName = `englisheasy-checkpoint-${checkpoint.n}.png`;
  const save = () => {
    if (!picture) return;
    const a = document.createElement("a");
    a.href = picture.url;
    a.download = fileName;
    a.click();
  };
  const share = async () => {
    if (!picture) return;
    const shared = await sharePicture(picture.blob, fileName, `${fill(strings.certificateShareText, { n: checkpoint.n }).en} https://${window.location.host}`);
    if (!shared) save();
  };

  return (
    <Dialog open onClose={onClose} title={strings.certificateTitle.en}>
      <div className="flex flex-col gap-3">
        {picture ? (
          // eslint-disable-next-line @next/next/no-img-element -- a picture drawn on the phone (a blob URL), not a site image
          <img src={picture.url} alt={`${strings.certificateTitle.en}: ${checkpoint.certificate}`} className="w-full rounded-xl border border-line" />
        ) : (
          <div className="aspect-[4/5] w-full animate-pulse rounded-xl bg-sunken" />
        )}
        <button type="button" disabled={!picture} onClick={() => void share()} className={`${button("primary", "lg")} w-full`}>
          <Icon name="share" />
          <Bi label={strings.certificateShare} />
        </button>
        <div className="flex gap-2">
          <button type="button" disabled={!picture} onClick={save} className={`${button("secondary")} flex-1`}>
            <Bi label={strings.certificateSave} />
          </button>
          <button type="button" onClick={onClose} className={`${button("ghost")} flex-1`}>
            <Bi label={strings.certificateDone} />
          </button>
        </div>
      </div>
    </Dialog>
  );
}
