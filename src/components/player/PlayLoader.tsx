"use client";

import { Suspense, use, useSyncExternalStore } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Skeleton } from "@/components/ui/Skeleton";
import { button } from "@/components/ui/button";
import { loadLesson } from "@/lib/lesson-data";
import { strings } from "@/lib/strings";
import { Player } from "./Player";

function PlayerSkeleton() {
  return (
    <div className="mx-auto flex h-dvh max-w-xl flex-col gap-4 p-4" aria-busy="true">
      <Skeleton className="h-13 w-full" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-13 w-full" />
      <Skeleton className="h-13 w-full" />
    </div>
  );
}

function Loaded({ id }: { id: string }) {
  return <Player day={use(loadLesson(id))} />;
}

const subscribeNever = () => () => {};

function Loader() {
  // The lesson is fetched in the browser only (a relative URL cannot be fetched while rendering on the server).
  const inBrowser = useSyncExternalStore(subscribeNever, () => true, () => false);
  const id = useSearchParams().get("l");
  if (!inBrowser) return <PlayerSkeleton />;
  if (!id) {
    return (
      <main className="mx-auto flex max-w-xl flex-col items-center gap-4 p-6 pt-24 text-center">
        <p className="text-xl">
          <BiText text={strings.lessonNotFound} />
        </p>
        <Link href="/learn" className={button("primary")}>
          <Bi label={strings.tabHome} />
        </Link>
      </main>
    );
  }
  return <Loaded key={id} id={id} />;
}

/** `?l=<lessonId>`: fetches the lesson, then plays it. `useSearchParams` needs the Suspense boundary. */
export function PlayLoader() {
  return (
    <Suspense fallback={<PlayerSkeleton />}>
      <Loader />
    </Suspense>
  );
}
