"use client";

/** Throws while rendering, to see the friendly error screen. */
export function ThrowOnRender(): never {
  throw new Error("Forced test error");
}
