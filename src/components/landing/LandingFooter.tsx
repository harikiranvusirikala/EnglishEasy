import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { SUPPORT_URL } from "@/components/support";
import { strings } from "@/lib/strings";

const LINK = "inline-flex min-h-13 items-center rounded-xl px-3 text-base font-semibold text-brand outline-none hover:bg-stone-200/70 focus-visible:ring-2 focus-visible:ring-brand dark:hover:bg-stone-800";

export function LandingFooter() {
  return (
    <footer aria-label={strings.landingFooter.en} className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-5 py-8 sm:flex-row sm:items-center">
        <p className="text-base text-ink-2">{strings.appName.en}</p>
        <nav className="flex flex-wrap gap-2">
          <Link href="/privacy" className={LINK}>
            <Bi label={strings.landingPrivacy} />
          </Link>
          <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer" aria-label={`${strings.supportCoffee.en} ${strings.opensNewTab.en}`} className={LINK}>
            <Bi label={strings.supportCoffee} />
          </a>
        </nav>
      </div>
    </footer>
  );
}
