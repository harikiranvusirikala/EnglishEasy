import type { Metadata } from "next";
import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { EmptyState } from "@/components/ui/EmptyState";
import { Logo } from "@/components/ui/Logo";
import { button, focusRing } from "@/components/ui/button";
import { strings } from "@/lib/strings";

export const metadata: Metadata = { title: strings.notFoundTitle.en, robots: { index: false } };

/** Any address that isn't a page: the logo, a friendly sentence and the way back. */
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col p-6">
      <Link href="/" aria-label={strings.appName.en} className={`self-start rounded-xl ${focusRing}`}>
        <Logo size="sm" />
      </Link>
      <div className="flex flex-1 items-center justify-center">
        <EmptyState
          as="h1"
          illustration="notFound"
          title={<Bi label={strings.notFoundTitle} />}
          action={
            <>
              <Link href="/learn" className={`${button("primary", "lg")} w-full`}>
                <Bi label={strings.goToLessons} />
              </Link>
              <Link href="/" className={`${button("ghost")} w-full`}>
                <Bi label={strings.goToStart} />
              </Link>
            </>
          }
        >
          <BiText text={strings.notFoundBody} />
        </EmptyState>
      </div>
    </main>
  );
}
