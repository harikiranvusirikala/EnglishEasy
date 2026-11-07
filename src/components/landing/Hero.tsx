import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { strings } from "@/lib/strings";
import { StartButton } from "./StartButton";

const OPTION = "flex min-h-13 items-center rounded-xl border border-stone-300 bg-white px-4 text-base font-semibold text-stone-900 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100";

/** A drawing of the lesson player (not interactive): a practice question with three answers. */
function PhoneMock() {
  return (
    <div
      role="img"
      aria-label={strings.landingMockLabel.en}
      className="mx-auto w-64 shrink-0 rounded-[2.5rem] border-8 border-stone-800 bg-stone-50 p-4 shadow-xl dark:border-stone-600 dark:bg-stone-950"
    >
      <div aria-hidden="true" className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-stone-600 dark:text-stone-400">✕</span>
          <span className="h-2 flex-1 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800">
            <span className="block h-full w-1/3 rounded-full bg-teal-700 dark:bg-teal-400" />
          </span>
          <span className="text-xs font-semibold text-stone-600 dark:text-stone-400">4 / 12</span>
        </div>
        <p className="text-sm font-semibold text-teal-800 dark:text-teal-300">{strings.landingMockSection.en}</p>
        <p className="text-lg font-bold text-stone-900 dark:text-stone-100">{strings.landingMockPrompt.en}</p>
        <div className="flex flex-col gap-2">
          <span className={OPTION}>{strings.landingMockGo.en}</span>
          <span className="flex min-h-13 items-center rounded-xl border border-emerald-600 bg-emerald-50 px-4 text-base font-semibold text-emerald-900 dark:border-emerald-400 dark:bg-emerald-950 dark:text-emerald-200">
            ✓ {strings.landingMockWent.en}
          </span>
          <span className={OPTION}>{strings.landingMockWill.en}</span>
        </div>
        <span className="flex min-h-13 items-center justify-center rounded-xl bg-teal-700 font-semibold text-white dark:bg-teal-400 dark:text-stone-950">{strings.landingMockCheck.en}</span>
      </div>
    </div>
  );
}

/** The top of the landing page: the headline in English and Telugu, the start button and a picture of a lesson. */
export function Hero() {
  return (
    <header className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-5 pt-10 pb-8 md:flex-row md:justify-between md:pt-16">
      <div className="flex flex-col items-start gap-5">
        <p className="text-lg font-bold text-teal-800 dark:text-teal-300">{strings.appName.en}</p>
        <h1 className="flex flex-col gap-2">
          <span className="text-4xl font-bold text-stone-900 sm:text-5xl dark:text-stone-100">{strings.landingHeadline.en}</span>
          <span lang="te" className="text-2xl font-semibold text-stone-700 sm:text-3xl dark:text-stone-300">
            {strings.landingHeadline.te}
          </span>
        </h1>
        <p className="max-w-prose text-xl text-stone-700 dark:text-stone-300">
          <BiText text={strings.landingSub} />
        </p>
        <StartButton />
        <p className="text-base text-stone-600 dark:text-stone-400">
          <Bi label={strings.landingTagline} className="items-start" />
        </p>
      </div>
      <PhoneMock />
    </header>
  );
}
