import Link from "next/link";
import { strings } from "@/lib/strings";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-start justify-center gap-4 p-6">
      <h1 className="text-3xl font-bold">{strings.appName.en} — {strings.comingSoon.en}</h1>
      <p lang="te" className="text-xl text-stone-600 dark:text-stone-400">{strings.comingSoon.te}</p>
      <Link
        href="/learn"
        className="inline-flex min-h-13 items-center rounded-xl bg-teal-700 px-6 font-semibold text-white dark:bg-teal-400 dark:text-stone-950"
      >
        {strings.openLearn.en}
      </Link>
    </main>
  );
}
