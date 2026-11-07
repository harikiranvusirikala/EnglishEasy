import type { Metadata } from "next";
import "./globals.css";
import { strings } from "@/lib/strings";

export const metadata: Metadata = {
  title: strings.appName.en,
  description: "Learn to speak English, step by step, in Telugu and English.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-stone-50 font-sans text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100">
        {children}
      </body>
    </html>
  );
}
