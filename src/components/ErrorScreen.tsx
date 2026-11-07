"use client";

import { useEffect } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { button } from "@/components/ui/button";
import { strings } from "@/lib/strings";

/** The friendly "Something went wrong" screen. Progress lives in localStorage, so reloading loses nothing. */
export function ErrorScreen({ error }: { error: unknown }) {
  useEffect(() => {
    console.error(error); // Step 20 also sends it to the server
  }, [error]);
  return (
    <main className="mx-auto flex min-h-[70dvh] max-w-xl flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-bold">
        <Bi label={strings.errorTitle} />
      </h1>
      <p className="text-lg text-stone-600 dark:text-stone-400">
        <BiText text={strings.errorBody} />
      </p>
      <button type="button" onClick={() => window.location.reload()} className={button("primary", "lg")}>
        <Bi label={strings.continue} />
      </button>
    </main>
  );
}
