"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bi } from "@/components/ui/Bi";
import { Icon, type IconName } from "@/components/ui/icons";
import { strings, type Bi as BiLabel } from "@/lib/strings";

const TABS: { href: string; label: BiLabel; icon: IconName; exact?: boolean }[] = [
  { href: "/learn", label: strings.tabHome, icon: "home", exact: true },
  { href: "/learn/journey", label: strings.tabJourney, icon: "map" },
  { href: "/learn/practice", label: strings.tabPractice, icon: "practice" },
  { href: "/learn/settings", label: strings.tabSettings, icon: "gear" },
];

/** Screens that bring their own full-height layout and bottom button (the lesson player, Step 5). */
const NO_TAB_BAR = ["/learn/play"];

export function TabBar() {
  const pathname = usePathname();
  if (NO_TAB_BAR.some((path) => pathname.startsWith(path))) return null;
  return (
    <nav
      aria-label={strings.tabBar.en}
      className="fixed inset-x-0 bottom-0 z-10 border-t border-stone-200 bg-white pb-[env(safe-area-inset-bottom)] dark:border-stone-800 dark:bg-stone-900"
    >
      <ul className="mx-auto flex max-w-xl">
        {TABS.map((tab) => {
          const active = tab.exact ? pathname === tab.href : pathname.startsWith(tab.href);
          return (
            <li key={tab.href} className="flex-1">
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-16 flex-col items-center justify-center gap-0.5 px-1 text-sm outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-700 dark:focus-visible:ring-teal-300 ${
                  active ? "text-teal-800 dark:text-teal-300" : "text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
                }`}
              >
                <Icon name={tab.icon} />
                <Bi label={tab.label} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
