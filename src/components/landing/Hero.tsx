import { strings } from "@/lib/strings";
import { PhoneFrame } from "./PhoneFrame";
import { StartButton } from "./StartButton";
import home from "./images/home.webp";
import question from "./images/question.webp";

/** The top of the landing page: a soft glow, the promise in English and Telugu, Start, and two real app screens. */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Soft teal and marigold light behind the top of the page. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 size-[34rem] rounded-full bg-[radial-gradient(closest-side,rgb(20_184_166/0.22),transparent)] dark:bg-[radial-gradient(closest-side,rgb(45_212_191/0.14),transparent)]" />
        <div className="absolute -top-24 right-[-10rem] size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgb(251_191_36/0.22),transparent)] dark:bg-[radial-gradient(closest-side,rgb(251_191_36/0.10),transparent)]" />
      </div>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 pt-12 pb-16 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pt-20 lg:pb-24">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 text-sm font-semibold text-ink-2 shadow-card">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            {strings.landingEyebrow.en}
          </p>
          <h1 id="hero-title" className="flex flex-col gap-3">
            {/* Two set lines; on phones the size follows the screen's width so "with confidence" fits on one line. */}
            <span className="font-display text-[min(2.75rem,10.5vw)] leading-[1.05] font-bold tracking-tight text-ink sm:text-6xl">
              <span className="block">Speak English</span> <span className="block text-brand">with confidence</span>
            </span>
            <span lang="te" className="font-display text-2xl leading-snug font-semibold text-ink-2 sm:text-[2rem]">
              {strings.landingHeadline.te}
            </span>
          </h1>
          <p className="max-w-xl text-lg text-ink-2 sm:text-xl">{strings.landingSub.en}</p>
          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row lg:items-start">
            <StartButton />
            <a href="#how" className="inline-flex min-h-14 items-center justify-center rounded-2xl px-6 text-lg font-semibold text-brand transition-colors hover:bg-brand-soft">
              {strings.landingSeeHow.en}
            </a>
          </div>
          <p className="text-base text-ink-3">{strings.landingNoSignup.en}</p>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-end justify-center lg:max-w-none">
          {/* Sized from the screen, not fixed: two fixed phones were wider than a phone and pushed the text off it. */}
          <PhoneFrame src={home} alt={strings.landingShotHome.en} priority className="w-[52%] max-w-64 -rotate-3" />
          <PhoneFrame src={question} alt={strings.landingShotQuestion.en} className="-ml-[10%] mb-[-2rem] w-[52%] max-w-64 rotate-3" />
        </div>
      </div>
    </section>
  );
}
