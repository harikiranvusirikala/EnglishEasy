"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bi } from "@/components/ui/Bi";
import { Icon, type IconName } from "@/components/ui/icons";
import { strings, type Bi as BiLabel } from "@/lib/strings";

export const TABS: { href: string; label: BiLabel; icon: IconName; exact?: boolean }[] = [
  { href: "/learn", label: strings.tabHome, icon: "home", exact: true },
  { href: "/learn/journey", label: strings.tabJourney, icon: "map" },
  { href: "/learn/practice", label: strings.tabPractice, icon: "practice" },
  { href: "/learn/settings", label: strings.tabSettings, icon: "gear" },
];

/** Screens that bring their own full-height layout and bottom button (the lesson player). */
export const NO_SHELL = ["/learn/play"];

export const isActive = (pathname: string, tab: (typeof TABS)[number]) => (tab.exact ? pathname === tab.href : pathname.startsWith(tab.href));

/** The phones' bottom tab bar (below 768 px; tablets and computers get the top header instead). */
export function TabBar() {
  const pathname = usePathname();
  if (NO_SHELL.some((path) => pathname.startsWith(path))) return null;
  return (
    <nav
      aria-label={strings.tabBar.en}
      className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <ul className="mx-auto flex max-w-xl px-1 pt-1">
        {TABS.map((tab) => {
          const active = isActive(pathname, tab);
          return (
            <li key={tab.href} className="flex-1">
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={`group flex min-h-16 flex-col items-center justify-center gap-0.5 rounded-2xl px-1 pb-1 text-sm outline-none transition-colors duration-150 focus-visible:ring-[3px] focus-visible:ring-inset focus-visible:ring-brand/60 ${
                  active ? "text-brand" : "text-ink-2 hover:text-ink"
                }`}
              >
                <span
                  className={`flex h-8 w-14 items-center justify-center rounded-full transition-colors duration-200 motion-reduce:transition-none ${
                    active ? "bg-brand-soft" : "group-hover:bg-sunken"
                  }`}
                >
                  <Icon name={tab.icon} className="size-6" strokeWidth={active ? 2.2 : 1.8} />
                </span>
                <Bi label={tab.label} className={active ? "font-semibold" : ""} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
