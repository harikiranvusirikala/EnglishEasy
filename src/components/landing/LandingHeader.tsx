import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { Logo } from "@/components/ui/Logo";
import { focusRing } from "@/components/ui/button";
import { ThemeMenu } from "@/components/ThemeMenu";
import { strings } from "@/lib/strings";
import { StartButton } from "./StartButton";

export const LANDING_SECTIONS = [
  { id: "how", label: strings.landingNavHow },
  { id: "features", label: strings.landingNavFeatures },
  { id: "journey", label: strings.landingNavJourney },
  { id: "faq", label: strings.landingNavFaq },
];

/** The landing page's header: it stays at the top with the logo, the page's parts, the theme and Start. */
export function LandingHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-page/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center gap-4 px-5">
        <Link href="/" aria-label={strings.appName.en} className={`rounded-xl ${focusRing}`}>
          <Logo size="sm" />
        </Link>
        <nav aria-label={strings.landingNav.en} className="ml-4 hidden flex-1 lg:block">
          <ul className="flex items-center gap-1">
            {LANDING_SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={`flex min-h-12 items-center rounded-full px-4 text-base text-ink-2 transition-colors hover:bg-sunken hover:text-ink ${focusRing}`}>
                  <Bi label={s.label} mode="en" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <ThemeMenu />
          <div className="hidden sm:block">
            <StartButton size="md" />
          </div>
        </div>
      </div>
    </header>
  );
}
