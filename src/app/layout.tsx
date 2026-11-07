import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SETTINGS_SCRIPT } from "@/lib/settings-script";
import { DESCRIPTION, SITE_NAME } from "@/components/landing/content";
import { siteUrl } from "@/server/site";

export const metadata: Metadata = {
  // Makes link-preview images and canonical links full addresses (src/server/site.ts).
  metadataBase: new URL(siteUrl(process.env)),
  title: SITE_NAME,
  description: DESCRIPTION,
  openGraph: { siteName: SITE_NAME, type: "website" },
  twitter: { card: "summary_large_image" },
  appleWebApp: { title: SITE_NAME },
};

export const viewport: Viewport = {
  viewportFit: "cover", // lets the tab bar use the safe-area insets on notched phones
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the settings script changes <html>'s class, style and data-learn-in before React starts.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: SETTINGS_SCRIPT }} />
      </head>
      <body className="min-h-dvh bg-stone-50 font-sans text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100">
        {children}
      </body>
    </html>
  );
}
