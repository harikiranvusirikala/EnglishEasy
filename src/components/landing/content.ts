// The landing page's words that search engines read twice: its title and description (the page's
// metadata and the link previews), and its questions and answers (the page, and its structured data).
// A plain module: the page, a server component, and the tests import it.

export const SITE_NAME = "EnglishEasy";
export const TITLE = "EnglishEasy: Learn Spoken English through Telugu, Free";
/** Up to 160 characters: search results cut longer ones. */
export const DESCRIPTION =
  "Learn spoken English through Telugu, free. Short daily lessons you hear, tap and speak, with no typing. Made for adults and elders: no ads, no sign-up.";

/** Google Search Console's check that the owner runs the live site. Empty until the owner adds the code (the content="..." of the verification tag). */
/** The code (open source, MIT license). */
export const SOURCE_URL = "https://github.com/harikiranvusirikala/EnglishEasy";
export const LICENSE_URL = `${SOURCE_URL}/blob/master/LICENSE`;

export const GOOGLE_SITE_VERIFICATION = "iS4OF4-2DT8drLIM-FZU8JA8b-ALGsTFZEbWyQEoj8Y";

export interface Question {
  question: string;
  answer: string;
}

/** Shown on the page and given to search engines as they are, so they always match. */
export const FAQ: Question[] = [
  {
    question: "Is EnglishEasy free?",
    answer:
      "Yes, completely. Every lesson is free, with no ads and no subscription, and you can start Day 1 right now without an account. EnglishEasy is also open source: its code is on GitHub under the MIT license.",
  },
  {
    question: "Do I need to know any English?",
    answer:
      "No. Every explanation is available in Telugu, and you can switch between Telugu and English at any time. The practice sentences are always English, and you can hear each one; longer ones can also be played slowly.",
  },
  {
    question: "Do I have to type?",
    answer: "Never. You tap answers, arrange word tiles, or speak. There is no keyboard anywhere in the app.",
  },
  {
    question: "What if I can't speak out loud right now?",
    answer: "Every speaking activity has a “Choose instead” button, so you can keep going and come back to speaking later.",
  },
  {
    question: "Does it work without internet?",
    answer: "Once a lesson has been opened, the app can keep it on your phone so you can practice offline. Your progress is saved on your phone.",
  },
  {
    question: "Do I need an account?",
    answer: "No. You can learn as a guest and your progress stays on your phone. If you like, you can sign in with Google later to keep your progress safe and in sync on other devices.",
  },
  {
    question: "Does it use AI to talk to me?",
    answer:
      "No. Every lesson and every recording is made ahead of time, so nothing is made up while you learn. Speech recognition is the one already built into your phone, so there is nothing to pay for and no surprises.",
  },
  {
    question: "How will I remember what I learn?",
    answer:
      "Every finished lesson's key sentences come back in a short daily review, after one day, three days, a week, three weeks and two months, just before you would forget them. Mistakes wait for you in Practice again until you get them right.",
  },
  {
    question: "Is it only for young people?",
    answer: "No. The text is large, the buttons are big, and the lessons go slowly. EnglishEasy is made for adults and elders who want to speak English in everyday life.",
  },
];

/** What the course does, for search engines (schema.org's teaches). */
const TEACHES = [
  "Everyday English sentences",
  "Simple present, past, future and continuous tenses",
  "Speaking and listening practice",
  "Role plays for everyday situations",
  "Pronunciation of the English sounds Telugu speakers find hard",
  "Daily spaced review of key sentences",
];

export interface LessonSummary {
  id: string;
  title: string;
  description: string;
}

/** Structured data for search engines (JSON-LD, schema.org): the site, the course with its released lessons, and the questions and answers. `site` is the site's address without a trailing slash. */
export function structuredData(site: string, lessons: LessonSummary[]) {
  const home = `${site}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${home}#website`, url: home, name: SITE_NAME, description: DESCRIPTION, inLanguage: ["en", "te"] },
      {
        "@type": "Course",
        "@id": `${home}#course`,
        name: "English for Telugu speakers",
        description: DESCRIPTION,
        url: home,
        inLanguage: ["en", "te"],
        isAccessibleForFree: true,
        teaches: TEACHES,
        provider: { "@type": "Organization", name: SITE_NAME, url: home },
        offers: { "@type": "Offer", category: "Free", price: "0", priceCurrency: "USD" },
        hasPart: lessons.map(({ id, title, description }) => ({
          "@type": "LearningResource",
          name: title,
          description,
          url: `${site}/lessons/${encodeURIComponent(id)}`,
        })),
      },
      {
        "@type": "WebApplication",
        "@id": `${home}#app`,
        name: SITE_NAME,
        url: home,
        description: DESCRIPTION,
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any (web browser; installable on Android and iPhone)",
        inLanguage: ["en", "te"],
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
        license: "https://opensource.org/license/mit",
        sameAs: [SOURCE_URL],
      },
      {
        "@type": "FAQPage",
        "@id": `${home}#faq`,
        mainEntity: FAQ.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
    ],
  };
}
