"use client";

import { useId, useLayoutEffect, useRef, type ReactNode } from "react";
import { Icon } from "./icons";
import { iconButton } from "./button";
import { strings } from "@/lib/strings";

// The browser's own modal <dialog>: it makes the page behind inert, takes the focus and gives it back to the
// button that opened it. Escape, a tap outside or Close end it; React keeps whether it is open.
// Next.js hides a page someone leaves instead of unmounting it, so an open modal would make the next page
// inert: hiding closes it (the layout effect's cleanup).

export function Dialog({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useLayoutEffect(() => {
    const element = dialog.current;
    if (!open || !element) return;
    if (!element.open) element.showModal();
    return () => element.close();
  }, [open]);

  return (
    <dialog
      ref={dialog}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault(); // Escape: React closes it, so `open` stays the truth
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose(); // the backdrop around the box
      }}
      className="m-auto max-h-[90dvh] w-[calc(100vw-1.5rem)] max-w-md overflow-y-auto overscroll-contain rounded-2xl border border-stone-200 bg-white p-0 text-stone-900 shadow-2xl backdrop:bg-stone-950/50 open:animate-[dialog-in_180ms_ease-out] motion-reduce:open:animate-none dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100"
    >
      {open && (
        <div className="p-5">
          <div className="mb-4 flex items-start justify-between gap-4">
            <h2 id={titleId} className="text-xl font-bold">
              {title}
            </h2>
            <button type="button" onClick={onClose} aria-label={strings.close.en} className={`${iconButton} -mt-2 -mr-2`}>
              <Icon name="close" />
            </button>
          </div>
          {children}
        </div>
      )}
    </dialog>
  );
}
