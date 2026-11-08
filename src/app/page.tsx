import type { Metadata } from "next";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { DESCRIPTION, GOOGLE_SITE_VERIFICATION, TITLE, structuredData, type LessonSummary } from "@/components/landing/content";
import { Faq } from "@/components/landing/Faq";
import { Hero } from "@/components/landing/Hero";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { FinalCta, HowItWorks, Journey, Privacy, Spotlights, WhyItWorks } from "@/components/landing/Sections";
import { releasedDayRefs } from "@/content/course";
import { isWritten, loadDay } from "@/content/load";
import { gtmId } from "@/server/tag-manager";
import { siteUrl } from "@/server/site";

// The landing page: static, for search engines and for people arriving from a shared link.

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  ...(GOOGLE_SITE_VERIFICATION ? { verification: { google: GOOGLE_SITE_VERIFICATION } } : {}),
};

/** The released, written lessons of the main path, for the course's structured data. */
async function lessonSummaries(): Promise<LessonSummary[]> {
  const ids = releasedDayRefs()
    .filter(({ lane, ref }) => lane === "main" && ref.kind === "lesson" && isWritten(ref.id))
    .map(({ ref }) => ref.id);
  const days = await Promise.all(ids.map(loadDay));
  return days.flatMap((day) => (day.kind === "lesson" ? [{ id: day.id, title: day.seo.title, description: day.seo.description }] : []));
}

export default async function LandingPage() {
  const data = structuredData(siteUrl(process.env), await lessonSummaries());
  return (
    <>
      {/* Google asks for its snippets first in <body>; they load only on this page (GTM_ID is read when the site is built). */}
      <GoogleTagManager id={gtmId(process.env)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
      <LandingHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Spotlights />
        <Journey />
        <WhyItWorks />
        <Privacy />
        <Faq />
        <FinalCta />
      </main>
      <LandingFooter />
    </>
  );
}
