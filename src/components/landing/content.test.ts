import { describe, expect, test } from "vitest";
import { DESCRIPTION, FAQ, SITE_NAME, SOURCE_URL, TITLE, structuredData } from "./content";

describe("landing content", () => {
  test("the description fits a search result", () => {
    expect(DESCRIPTION.length).toBeLessThanOrEqual(160);
    expect(TITLE.length).toBeLessThanOrEqual(70);
  });
});

describe("structuredData", () => {
  const site = "https://englisheasy.example";
  const lessons = [{ id: "sentence-basics", title: "Sentence basics", description: "Who does what." }];
  const graph = structuredData(site, lessons)["@graph"];
  const ofType = (type: string) => graph.find((node) => node["@type"] === type)!;

  test("the site and the course at the site's own address, free, with each lesson", () => {
    expect(ofType("WebSite")).toMatchObject({ url: `${site}/`, name: SITE_NAME });
    expect(ofType("Course")).toMatchObject({
      isAccessibleForFree: true,
      hasPart: [{ "@type": "LearningResource", name: "Sentence basics", url: `${site}/lessons/sentence-basics` }],
    });
  });

  test("the app: free and open source (MIT), linked to its code", () => {
    expect(ofType("WebApplication")).toMatchObject({
      isAccessibleForFree: true,
      offers: { price: "0" },
      license: "https://opensource.org/license/mit",
      sameAs: [SOURCE_URL],
    });
  });

  test("every question, with its answer word for word", () => {
    expect(ofType("FAQPage")).toMatchObject({
      mainEntity: FAQ.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
    });
    expect(FAQ.length).toBeGreaterThanOrEqual(6);
  });
});
