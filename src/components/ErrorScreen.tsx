"use client";

import { useEffect } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { EmptyState } from "@/components/ui/EmptyState";
import { button } from "@/components/ui/button";
import { reportError } from "@/lib/report-error";
import { strings } from "@/lib/strings";

/** The friendly "Something went wrong" screen. Progress lives in localStorage, so reloading loses nothing. */
export function ErrorScreen({ error }: { error: unknown }) {
  useEffect(() => {
    console.error(error);
    reportError(error);
  }, [error]);
  return (
    <main className="mx-auto flex min-h-[80dvh] max-w-xl flex-col items-center justify-center p-6">
      <EmptyState
        as="h1"
        illustration="offline"
        title={<Bi label={strings.errorTitle} />}
        action={
          <button type="button" onClick={() => window.location.reload()} className={`${button("primary", "lg")} w-full`}>
            <Bi label={strings.continue} />
          </button>
        }
      >
        <BiText text={strings.errorBody} />
      </EmptyState>
    </main>
  );
}
