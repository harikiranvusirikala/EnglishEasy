"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

// Drop-down menus (the theme switch in the header, the account menu). The WAI-ARIA menu button, as in
// the owner's Family Tree app: the first (or checked) item takes focus when it opens, arrows, Home and
// End move, Escape closes and returns to the button, Tab closes, and a tap anywhere else closes it
// (pointerdown, so touch closes it too). A page Next.js keeps for Back comes back with its menus closed.

const ITEMS = '[role="menuitem"]:not([disabled]), [role="menuitemradio"]:not([disabled])';

export const menuItem =
  "flex min-h-12 w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-base text-ink outline-none hover:bg-sunken focus-visible:bg-brand-soft focus-visible:text-brand-ink aria-checked:font-semibold aria-checked:text-brand disabled:opacity-55";

export function MenuLabel({ children }: { children: ReactNode }) {
  return <div className="px-3 pt-2 pb-1 text-sm font-semibold text-ink-3">{children}</div>;
}

export function MenuSeparator() {
  return <div role="separator" className="my-1.5 h-px bg-line" />;
}

export function Menu(props: {
  /** The menu's name, for screen readers. */
  label: string;
  /** What the button shows; give it `buttonLabel` when that isn't text. */
  button: ReactNode;
  buttonLabel?: string;
  buttonClassName: string;
  buttonTitle?: string;
  disabled?: boolean;
  align?: "start" | "end";
  menuClassName?: string;
  /** The items; `close` returns focus to the button. */
  children: (close: () => void) => ReactNode;
}) {
  const { label, button, buttonLabel, buttonClassName, buttonTitle, disabled, align = "end", menuClassName = "w-64", children } = props;
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const id = useId();

  useLayoutEffect(() => () => setOpen(false), []); // its page hidden (React's Activity)

  // Found by id rather than a ref: `close` is handed to the items while they render.
  const close = () => {
    setOpen(false);
    document.getElementById(`${id}-button`)?.focus();
  };

  // Kept on the screen: a menu whose button is not at the screen's edge could open past it, so shift it back in.
  useLayoutEffect(() => {
    const el = panel.current;
    if (!open || !el) return;
    const margin = 12;
    const { left, right } = el.getBoundingClientRect();
    const shift = left < margin ? margin - left : right > window.innerWidth - margin ? window.innerWidth - margin - right : 0;
    el.style.translate = shift ? `${shift}px 0` : "";
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const items = [...(panel.current?.querySelectorAll<HTMLElement>(ITEMS) ?? [])];
    (items.find((item) => item.getAttribute("aria-checked") === "true") ?? items[0])?.focus();
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }
    if (event.key === "Tab") {
      setOpen(false);
      return;
    }
    const items = [...(panel.current?.querySelectorAll<HTMLElement>(ITEMS) ?? [])];
    const at = items.indexOf(document.activeElement as HTMLElement);
    const to = { ArrowDown: at + 1, ArrowUp: at - 1, Home: 0, End: items.length - 1 }[event.key];
    if (to === undefined || !items.length) return;
    event.preventDefault();
    items[(to + items.length) % items.length].focus();
  }

  return (
    <div ref={root} className="relative min-w-0">
      <button
        id={`${id}-button`}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        aria-label={buttonLabel}
        title={buttonTitle}
        disabled={disabled}
        onClick={() => setOpen(!open)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" && !open) {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className={buttonClassName}
      >
        {button}
      </button>
      {open && (
        <div
          ref={panel}
          id={id}
          role="menu"
          aria-label={label}
          onKeyDown={onKeyDown}
          className={`absolute top-full z-50 mt-2 max-w-[calc(100vw-1.5rem)] animate-menu-in rounded-2xl border border-line bg-surface p-1.5 text-ink shadow-raised motion-reduce:animate-none ${align === "end" ? "right-0 origin-top-right" : "left-0 origin-top-left"} ${menuClassName}`}
        >
          {children(close)}
        </div>
      )}
    </div>
  );
}
