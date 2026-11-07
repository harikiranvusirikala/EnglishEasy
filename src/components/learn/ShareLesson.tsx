"use client";

import { useEffect, useRef, useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { Toast } from "@/components/ui/Toast";
import { button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import type { Bi as ContentBi } from "@/content/types";
import { useLearnIn } from "@/lib/settings-store";
import { fill, strings } from "@/lib/strings";

/** Share this lesson (or, with `label`, `line` and `path`, a week): the phone's share sheet (`navigator.share`), or a copied link with a short message. */
export function ShareLesson({ id, title, label = strings.shareLesson, line = strings.shareLine, path }: { id: string; title: ContentBi; label?: ContentBi; line?: ContentBi; path?: string }) {
  const learnIn = useLearnIn();
  const [message, setMessage] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const show = (text: string) => {
    setMessage(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(null), 3000);
  };

  const share = async () => {
    const url = `${location.origin}${path ?? `/lessons/${encodeURIComponent(id)}`}`;
    const text = fill(line, { title })[learnIn];
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title: title[learnIn], text, url });
      } catch {
        // The learner closed the share sheet: nothing to do.
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      show(strings.linkCopied[learnIn]);
    } catch {
      show(url); // copying is blocked: show the link instead
    }
  };

  return (
    <>
      <button type="button" onClick={share} className={`${button("secondary")} w-full`}>
        <Icon name="share" />
        <Bi label={label} />
      </button>
      {message && <Toast className="fixed inset-x-0 bottom-24 z-20 px-4">{message}</Toast>}
    </>
  );
}
