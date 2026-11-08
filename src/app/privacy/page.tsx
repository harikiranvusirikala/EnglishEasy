import type { Metadata } from "next";
import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { button } from "@/components/ui/button";
import { card, cardText, cardTitle } from "@/components/ui/card";
import { strings, type Bi as BiLabel } from "@/lib/strings";

export const metadata: Metadata = {
  title: `${strings.privacyTitle.en} | ${strings.appName.en}`,
  description: strings.privacyIntro.en,
  alternates: { canonical: "/privacy" },
};

const SECTIONS: { title: BiLabel; text: BiLabel }[] = [
  { title: strings.privacyPhoneTitle, text: strings.privacyPhone },
  { title: strings.privacyAccountTitle, text: strings.privacyAccount },
  { title: strings.privacyReportsTitle, text: strings.privacyReports },
  { title: strings.privacySpeechTitle, text: strings.privacySpeech },
  { title: strings.privacyNoAiTitle, text: strings.privacyNoAi },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto flex max-w-xl flex-col gap-5 p-4 pb-16">
      <nav>
        <Link href="/" className={button("ghost")}>
          <Bi label={strings.privacyBack} />
        </Link>
      </nav>
      <h1 className="text-3xl font-bold text-ink">
        <Bi label={strings.privacyTitle} className="items-start" />
      </h1>
      <p className="text-lg">
        <BiText text={strings.privacyIntro} />
      </p>
      {SECTIONS.map((section, i) => (
        <section key={i} className={`${card} flex flex-col gap-2`}>
          <h2 className={cardTitle}>
            <BiText text={section.title} />
          </h2>
          <p className={cardText}>
            <BiText text={section.text} />
          </p>
        </section>
      ))}
    </main>
  );
}
