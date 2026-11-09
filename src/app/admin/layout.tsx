import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { focusRing } from "@/components/ui/button";
import { requireSiteAdmin } from "@/server/permissions";

// The owner's pages (BUILD_PLAN "site stats at /admin"). Owner-only and English-only, so their labels live here, not in
// strings.ts. Anyone else gets "page not found" from this layout, so not even the header shows.

export const metadata: Metadata = { title: "Admin · EnglishEasy", robots: { index: false, follow: false } };

const TABS = [
  { href: "/admin", label: "Site stats" },
  { href: "/admin/feedback", label: "Feedback" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await requireSiteAdmin();
  return (
    <>
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
          <Link href="/learn" aria-label="EnglishEasy" className={`rounded-xl ${focusRing}`}>
            <Logo size="sm" />
          </Link>
          <nav aria-label="Admin" className="flex gap-1">
            {TABS.map((tab) => (
              <Link key={tab.href} href={tab.href} className={`rounded-xl px-3 py-2 text-base font-semibold text-ink-2 hover:bg-sunken hover:text-ink ${focusRing}`}>
                {tab.label}
              </Link>
            ))}
          </nav>
          <p className="ml-auto text-sm text-ink-3">{user.email}</p>
        </div>
      </header>
      {children}
    </>
  );
}
