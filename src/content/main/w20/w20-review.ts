import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 20, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick first / then / after that steps round. */

const pick = (id: string, sentence: string, te: string, options: string[], answer: number, why: Bi, fixIt?: FixIt): Activity => ({
  id,
  type: "fillBlank",
  sentence,
  te,
  options,
  answer,
  why,
  ...(fixIt ? { fixIt } : {}),
});

export const day: ReviewDay = {
  id: "w20-review",
  kind: "review",
  title: { en: "Step by Step", te: "ఒక్కో దశగా" },
  extras: [
    pick("q1", "___, open WhatsApp. Then tap the chat.", "ముందు WhatsApp ఓపెన్ చేయండి. తర్వాత chat నొక్కండి.", ["First", "Then", "After"], 0, {
      en: "The first step starts with first; then and after that come later.",
      te: "మొదటి దశ First తో మొదలవుతుంది; then, after that తర్వాత వస్తాయి.",
    }),
    pick("q2", "First, open the chat. ___ tap the camera icon.", "ముందు chat ఓపెన్ చేయండి. తర్వాత camera icon నొక్కండి.", ["Then", "First", "Before"], 0, {
      en: "The second step starts with then, which means next.",
      te: "రెండో దశ then తో మొదలవుతుంది; then అంటే తర్వాత.",
    }),
    pick("q3", "After ___, press the send button.", "ఆ తర్వాత send button నొక్కండి.", ["that", "then", "the"], 0, {
      en: "After that is one fixed phrase, and it means next.",
      te: "after that అనేది ఒకే మాట; దాని అర్థం ఆ తర్వాత.",
    }),
    pick("q4", "First, scan the QR code. ___, enter the amount.", "ముందు QR code స్కాన్ చేయండి. తర్వాత amount ఎంటర్ చేయండి.", ["Then", "First", "Before"], 0, {
      en: "Entering the amount comes after scanning, so the step starts with then.",
      te: "స్కాన్ చేశాకే amount ఎంటర్ చేస్తాం, అందుకే ఈ దశ then తో.",
    }),
    {
      id: "q5",
      type: "choose",
      prompt: { en: "You pay by UPI. Which step comes last?", te: "మీరు UPI తో కడుతున్నారు. చివరి దశ ఏది?" },
      options: ["Type your PIN.", "Scan the QR code.", "Enter the amount."],
      answer: 0,
      why: {
        en: "You scan first, then enter the amount; the PIN comes at the end.",
        te: "ముందు స్కాన్, తర్వాత amount; PIN చివర్లో వస్తుంది.",
      },
    },
    pick(
      "q6",
      "My phone ___ very slow.",
      "నా phone చాలా slow గా ఉంది.",
      ["is", "are", "has"],
      0,
      {
        en: "My phone is one thing, and English needs is where Telugu has none.",
        te: "phone ఒక్కటే; తెలుగులో 'ఉంది' వదిలేసినా ఇంగ్లీష్‌లో is కావాలి.",
      },
      "be",
    ),
  ],
};
