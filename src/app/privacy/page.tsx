import type { Metadata } from "next";
import { BiText } from "@/components/ui/BiText";
import { Icon, type IconName } from "@/components/ui/icons";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { PublicHeader } from "@/components/landing/PublicHeader";
import { strings, type Bi as BiLabel } from "@/lib/strings";

export const metadata: Metadata = {
  title: `${strings.privacyTitle.en} | ${strings.appName.en}`,
  description: strings.privacyIntro.en,
  alternates: { canonical: "/privacy" },
};

const SECTIONS: { icon: IconName; title: BiLabel; text: BiLabel }[] = [
  { icon: "phone", title: strings.privacyPhoneTitle, text: strings.privacyPhone },
  { icon: "user", title: strings.privacyAccountTitle, text: strings.privacyAccount },
  { icon: "flag", title: strings.privacyReportsTitle, text: strings.privacyReports },
  { icon: "mic", title: strings.privacySpeechTitle, text: strings.privacySpeech },
  { icon: "shield", title: strings.privacyNoAiTitle, text: strings.privacyNoAi },
];

/** Privacy, in plain words: what is kept on the phone, in an account, in reports, and what the phone's speech does. */
export default function PrivacyPage() {
  return (
    <>
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-5 pt-10 pb-16">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold tracking-wider text-brand uppercase">{strings.landingPrivacyEyebrow.en}</p>
          <h1 className="font-display text-[2.5rem] leading-tight font-bold text-ink">{strings.privacyTitle.en}</h1>
          <p className="text-xl text-ink-2">
            <BiText text={strings.privacyIntro} />
          </p>
        </div>
        {SECTIONS.map((section) => (
          <section key={section.title.en} className="flex items-start gap-4 rounded-[1.25rem] border border-line bg-surface p-5 shadow-card">
            <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
              <Icon name={section.icon} />
            </span>
            <div className="flex min-w-0 flex-col gap-1.5">
              <h2 className="font-display text-xl font-semibold text-ink">
                <BiText text={section.title} />
              </h2>
              <p className="text-base leading-relaxed text-ink-2">
                <BiText text={section.text} />
              </p>
            </div>
          </section>
        ))}
      </main>
      <LandingFooter />
    </>
  );
}
