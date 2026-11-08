import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { focusRing } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { SUPPORT_URL } from "@/components/support";
import { strings } from "@/lib/strings";
import { LICENSE_URL, SOURCE_URL } from "./content";
import { LANDING_SECTIONS } from "./LandingHeader";

const LINK = `inline-flex min-h-12 items-center gap-2 rounded-lg text-base text-ink-2 transition-colors hover:text-ink ${focusRing}`;

/** The footer: the logo and one line (free, open source), the page's parts, and the project's links (Privacy, Source code, MIT license, Buy me a coffee). */
export function LandingFooter() {
  return (
    <footer aria-label={strings.landingFooter.en} className="border-t border-line bg-surface/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 sm:grid-cols-[2fr_1fr_1fr]">
        <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
          <Logo />
          <p className="max-w-xs text-base text-ink-2">{strings.landingFooterLine.en}</p>
        </div>
        <nav aria-label={strings.landingFooterPage.en} className="flex flex-col gap-1">
          <p className="mb-1 text-sm font-bold tracking-wider text-ink uppercase">{strings.landingFooterPage.en}</p>
          {/* "/#…": the footer is on lesson pages and privacy too, where the sections are on the landing page. */}
          {LANDING_SECTIONS.map((s) => (
            <a key={s.id} href={`/#${s.id}`} className={LINK}>
              {s.label.en}
            </a>
          ))}
        </nav>
        <nav aria-label={strings.landingFooterAbout.en} className="flex flex-col gap-1">
          <p className="mb-1 text-sm font-bold tracking-wider text-ink uppercase">{strings.landingFooterAbout.en}</p>
          <Link href="/privacy" className={LINK}>
            {strings.landingPrivacy.en}
          </Link>
          <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" aria-label={`${strings.landingSourceCode.en} ${strings.opensNewTab.en}`} className={LINK}>
            <Icon name="github" className="size-5" />
            {strings.landingSourceCode.en}
          </a>
          <a href={LICENSE_URL} target="_blank" rel="noopener noreferrer" aria-label={`${strings.landingLicense.en} ${strings.opensNewTab.en}`} className={LINK}>
            <Icon name="code" className="size-5" />
            {strings.landingLicense.en}
          </a>
          <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer" aria-label={`${strings.supportCoffee.en} ${strings.opensNewTab.en}`} className={LINK}>
            <Icon name="coffee" className="size-5" />
            {strings.supportCoffee.en}
          </a>
        </nav>
      </div>
    </footer>
  );
}
