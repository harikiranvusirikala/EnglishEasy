import { strings } from "@/lib/strings";

export default function Learn() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center gap-3 p-6">
      <h1 className="text-2xl font-bold">{strings.learnTitle.en}</h1>
      <p lang="te" className="text-xl">{strings.learnTitle.te}</p>
      <p className="text-stone-600 dark:text-stone-400">{strings.learnSoon.en}</p>
      <p lang="te" className="text-stone-600 dark:text-stone-400">{strings.learnSoon.te}</p>
    </main>
  );
}
