import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { button, focusRing } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { ThemeMenu } from "@/components/ThemeMenu";
import { strings } from "@/lib/strings";

/**
 * The header of the public pages other than the landing page: logo, theme, and a way into the app. A lesson's page
 * (`journeyDay`) leads to Journey, opened at that lesson; privacy leads to My lessons (Home).
 */
export function PublicHeader({ journeyDay }: { journeyDay?: string }) {
  const to = journeyDay
    ? { href: `/learn/journey?day=${encodeURIComponent(journeyDay)}`, label: strings.tabJourney.en, icon: "map" as const }
    : { href: "/learn", label: strings.myLessons.en, icon: "home" as const };
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-page/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center gap-4 px-5">
        <Link href="/" aria-label={strings.appName.en} className={`shrink-0 rounded-xl ${focusRing}`}>
          <Logo size="sm" />
        </Link>
        <div className="ml-auto flex shrink-0 items-center gap-3">
          <ThemeMenu />
          {/* On phones the link is only its icon, so the logo, the theme and it fit side by side; the words from tablets up. */}
          <span className="sm:hidden">
            <Link href={to.href} aria-label={to.label} title={to.label} className={button("primary", "icon")}>
              <Icon name={to.icon} className="size-6" />
            </Link>
          </span>
          <span className="hidden sm:block">
            <Link href={to.href} className={button("primary", "md")}>
              <Icon name={to.icon} className="size-5" />
              {to.label}
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
}
