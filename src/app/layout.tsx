import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SETTINGS_SCRIPT } from "@/lib/settings-script";
import { strings } from "@/lib/strings";

export const metadata: Metadata = {
  title: strings.appName.en,
  description: "Learn to speak English, step by step, in Telugu and English.",
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
