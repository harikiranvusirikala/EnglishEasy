import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { button, focusRing } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { ThemeMenu } from "@/components/ThemeMenu";
import { strings } from "@/lib/strings";

/** The header of the public pages other than the landing page (a lesson's page, privacy): logo, My lessons, theme. */
export function PublicHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-page/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center gap-4 px-5">
        <Link href="/" aria-label={strings.appName.en} className={`rounded-xl ${focusRing}`}>
          <Logo size="sm" />
        </Link>
        <div className="ml-auto flex items-center gap-3">
          <ThemeMenu />
          <Link href="/learn" className={button("primary", "md")}>
            <Icon name="home" className="size-5" />
            {strings.myLessons.en}
          </Link>
        </div>
      </div>
    </header>
  );
}
