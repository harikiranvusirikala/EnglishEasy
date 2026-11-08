"use client";

import { useId, useLayoutEffect, useRef, type ReactNode } from "react";
import { Icon } from "./icons";
import { iconButton } from "./button";
import { strings } from "@/lib/strings";

// The browser's own modal <dialog>: it makes the page behind inert, takes the focus and gives it back to the
// button that opened it. Escape, a tap outside or Close end it; React keeps whether it is open.
// On phones it is a bottom sheet (it slides up and sits on the screen's foot); from 640 px a centred card.
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
      className="m-auto max-h-[90dvh] w-[calc(100vw-1.5rem)] max-w-md overflow-y-auto overscroll-contain rounded-[1.5rem] border border-line bg-surface p-0 text-ink shadow-raised backdrop:bg-scrim backdrop:backdrop-blur-[2px] open:animate-dialog-in motion-reduce:open:animate-none max-sm:mb-0 max-sm:w-full max-sm:max-w-none max-sm:rounded-b-none max-sm:border-x-0 max-sm:border-b-0 max-sm:pb-[env(safe-area-inset-bottom)] max-sm:open:animate-sheet-in"
    >
      {open && (
        <div className="p-5 sm:p-6">
          <div aria-hidden="true" className="mx-auto -mt-2 mb-3 h-1.5 w-12 rounded-full bg-line-strong sm:hidden" />
          <div className="mb-4 flex items-start justify-between gap-4">
            <h2 id={titleId} className="font-display pt-1 text-2xl font-semibold leading-snug">
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
