import type { Metadata } from "next";
import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { button } from "@/components/ui/button";
import { strings } from "@/lib/strings";

export const metadata: Metadata = { title: strings.offlineTitle.en, robots: { index: false } };

/** Shown by the service worker when a page is needed that is not on the phone and there is no internet. */
export default function OfflinePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
        <Bi label={strings.offlineTitle} className="items-center" />
      </h1>
      <p className="text-base text-stone-600 dark:text-stone-400">
        <BiText text={strings.offlineText} />
      </p>
      <Link href="/learn" className={button("primary", "lg")}>
        <Bi label={strings.offlineOpenLessons} />
      </Link>
    </main>
  );
}
