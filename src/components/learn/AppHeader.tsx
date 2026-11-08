"use client";

/* eslint-disable @next/next/no-img-element -- the Google photo is a small remote avatar; next/image would need a remote pattern and Vercel's image quota */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bi } from "@/components/ui/Bi";
import { Icon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { focusRing } from "@/components/ui/button";
import { ThemeMenu } from "@/components/ThemeMenu";
import { useAccount } from "@/lib/account";
import { strings } from "@/lib/strings";
import { NO_SHELL, TABS, isActive } from "./TabBar";

function Avatar() {
  const account = useAccount();
  if (account.kind !== "signedIn") return null;
  const initials = account.name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
  return (
    <Link href="/learn/settings" aria-label={`${strings.account.en}: ${account.name}`} className={`rounded-full ${focusRing}`}>
      {account.image ? (
        <img src={account.image} alt="" referrerPolicy="no-referrer" className="size-11 rounded-full object-cover ring-2 ring-line" />
      ) : (
        <span className="flex size-11 items-center justify-center rounded-full bg-brand-soft font-semibold text-brand-ink ring-2 ring-line">{initials}</span>
      )}
    </Link>
  );
}

/** The learning screens' header from 768 px: the logo, the four tabs, the theme menu and the account. Phones use the bottom tab bar. */
export function AppHeader() {
  const pathname = usePathname();
  if (NO_SHELL.some((path) => pathname.startsWith(path))) return null;
  return (
    <header className="sticky top-0 z-20 hidden border-b border-line bg-page/85 backdrop-blur-md md:block">
      <div className="mx-auto flex h-18 max-w-6xl items-center gap-6 px-6">
        <Link href="/learn" aria-label={strings.appName.en} className={`rounded-xl ${focusRing}`}>
          <Logo />
        </Link>
        <nav aria-label={strings.tabBar.en} className="flex-1">
          <ul className="flex items-center gap-1">
            {TABS.map((tab) => {
              const active = isActive(pathname, tab);
              return (
                <li key={tab.href}>
                  <Link
                    href={tab.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-12 items-center gap-2 rounded-full px-4 text-base transition-colors duration-150 ${focusRing} ${
                      active ? "bg-brand-soft font-semibold text-brand-ink" : "text-ink-2 hover:bg-sunken hover:text-ink"
                    }`}
                  >
                    <Icon name={tab.icon} className="size-5" strokeWidth={active ? 2.2 : 1.8} />
                    <Bi label={tab.label} className="items-start" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeMenu />
          <Avatar />
        </div>
      </div>
    </header>
  );
}
