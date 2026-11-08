import type { Metadata } from "next";
import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { EmptyState } from "@/components/ui/EmptyState";
import { button } from "@/components/ui/button";
import { strings } from "@/lib/strings";

export const metadata: Metadata = { title: strings.offlineTitle.en, robots: { index: false } };

/** Shown by the service worker when a page is needed that is not on the phone and there is no internet. */
export default function OfflinePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center p-6">
      <EmptyState
        as="h1"
        illustration="offline"
        title={<Bi label={strings.offlineTitle} />}
        action={
          <Link href="/learn" className={`${button("primary", "lg")} w-full`}>
            <Bi label={strings.offlineOpenLessons} />
          </Link>
        }
      >
        <BiText text={strings.offlineText} />
      </EmptyState>
    </main>
  );
}
