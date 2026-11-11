import type { Activity } from "@/content/types";

/** Stage 3 samples (owner, 2026-11-11): a story, a passage and a conversation with accent voices, for tests and the review screenshots. */

export const sampleStory: Extract<Activity, { type: "story" }> = {
  id: "x-story",
  type: "story",
  title: { en: "The Purse on the Bus", te: "బస్సులో పర్సు" },
  teller: { en: "Sarala", te: "సరళ" },
  voice: "a",
  parts: [
    { en: "Last Monday, I was going to the hospital by bus. The bus was very crowded.", te: "పోయిన సోమవారం నేను బస్సులో ఆసుపత్రికి వెళ్తున్నాను. బస్సు చాలా రద్దీగా ఉంది." },
    { en: "While I was looking outside, a young man sat next to me.", te: "నేను కిటికీ బయటకు చూస్తుండగా, ఒక యువకుడు నా పక్కన కూర్చున్నారు." },
    { en: "At the hospital stop, I opened my bag. My purse was not there!", te: "ఆసుపత్రి స్టాప్‌లో నా బ్యాగ్ తెరిచాను. పర్సు అందులో లేదు!" },
    { en: "I was very worried. My Aadhaar card and two thousand rupees were in it.", te: "నాకు చాలా భయం వేసింది. అందులో నా ఆధార్ కార్డు, రెండు వేల రూపాయలు ఉన్నాయి." },
    { en: "Then the conductor called me. The young man was holding my purse!", te: "అప్పుడు కండక్టర్ నన్ను పిలిచారు. ఆ యువకుడి చేతిలో నా పర్సు ఉంది!" },
    { en: "It fell on the seat, and he found it. I thanked him again and again.", te: "అది సీటు మీద పడిపోయింది, ఆయన చూశారు. నేను ఆయనకు మళ్ళీ మళ్ళీ థాంక్స్ చెప్పాను." },
  ],
  questions: [
    { prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" }, options: ["A lost purse on a bus", "A visit to the doctor", "A new bus pass"], answer: 0 },
    { prompt: { en: "Where was Sarala going?", te: "సరళ గారు ఎక్కడికి వెళ్తున్నారు?" }, options: ["To the hospital", "To the market", "To the bank"], answer: 0 },
    { prompt: { en: "What was in the purse?", te: "పర్సులో ఏమున్నాయి?" }, options: ["Her Aadhaar card and money", "Her bus ticket", "Her phone"], answer: 0 },
    { prompt: { en: "Who had the purse?", te: "పర్సు ఎవరి దగ్గర ఉంది?" }, options: ["The young man", "The conductor", "The driver"], answer: 0 },
  ],
};

export const samplePassage: Extract<Activity, { type: "passage" }> = {
  id: "x-passage",
  type: "passage",
  kind: "letter",
  heading: "State Bank of India",
  lines: [
    "Dear Customer,",
    "Your fixed deposit of two lakh rupees will mature on 15 March.",
    "Please visit your branch before that date with:",
    "your FD receipt, and",
    "your Aadhaar card.",
    "If you do nothing, it will be renewed for one more year.",
    "For help, call your branch between 10 am and 4 pm.",
    "Branch Manager, Gandhi Nagar",
  ],
  questions: [
    { prompt: { en: "When does the fixed deposit mature?", te: "fixed deposit ఎప్పుడు mature అవుతుంది?" }, options: ["On 15 March", "On 10 March", "Next year"], answer: 0 },
    {
      prompt: { en: "What should you take to the branch?", te: "బ్రాంచ్‌కి ఏం తీసుకెళ్ళాలి?" },
      options: ["Your FD receipt and Aadhaar card", "Your passbook and a photo", "Nothing at all"],
      answer: 0,
      why: { en: "The letter lists two things after the word with.", te: "with తర్వాత లెటర్‌లో రెండు వస్తువులు ఉన్నాయి." },
    },
    {
      prompt: { en: "What happens if you do nothing?", te: "మీరు ఏమీ చేయకపోతే ఏమవుతుంది?" },
      options: ["It is renewed for a year", "The bank closes it", "You lose the money"],
      answer: 0,
      why: { en: "The sixth line says the deposit continues for one more year.", te: "ఆరో లైన్‌లో, ఇంకో సంవత్సరం కొనసాగుతుందని ఉంది." },
    },
  ],
};

export const accentDialogue: Extract<Activity, { type: "dialogue" }> = {
  id: "x-accents",
  type: "dialogue",
  title: { en: "A Call From Ohio", te: "ఒహాయో నుంచి కాల్" },
  lines: [
    { speaker: { en: "John", te: "జాన్" }, voice: "us-m", en: "Hi, is this Sita? This is John, from the apartment office.", te: "హాయ్, సీత గారేనా? నేను జాన్, అపార్ట్‌మెంట్ ఆఫీస్ నుంచి." },
    { speaker: { en: "Sita", te: "సీత" }, voice: "a", en: "Yes, speaking. How can I help you?", te: "అవునండి, మాట్లాడుతున్నాను. చెప్పండి." },
    { speaker: { en: "John", te: "జాన్" }, voice: "us-m", en: "Your cousin's apartment is on the second floor. Take the elevator.", te: "మీ కజిన్ అపార్ట్‌మెంట్ రెండో ఫ్లోర్‌లో ఉంది. elevator ఎక్కండి." },
    { speaker: { en: "Sita", te: "సీత" }, voice: "a", en: "Sorry, the elevator? You mean the lift?", te: "క్షమించండి, elevator అంటే lift ఆ?" },
    { speaker: { en: "Mary", te: "మేరీ" }, voice: "gb-f", en: "Hello! In London we say lift too. And flat, not apartment.", te: "హలో! లండన్‌లో మేము కూడా lift అంటాం. apartment కాదు, flat అంటాం." },
  ],
  questions: [
    { prompt: { en: "Where is John calling from?", te: "జాన్ ఎక్కడి నుంచి ఫోన్ చేస్తున్నారు?" }, options: ["The apartment office", "A hospital", "A bank"], answer: 0 },
    { prompt: { en: "What does Sita call an elevator?", te: "elevator ని సీత గారు ఏమంటారు?" }, options: ["A lift", "A flat", "A floor"], answer: 0 },
  ],
};
