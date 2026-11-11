import type { Lesson } from "../../types";

/** Week 14, Day 3 (CURRICULUM §4): prepositions of movement — walk along, cross / go across, go past. */
export const day: Lesson = {
  id: "along-across-past",
  kind: "lesson",
  title: { en: "Along, Across, Past", te: "వెంబడి, అవతలకు, దాటి" },
  subtitle: "along / across / past",
  summary: {
    en: "Learn to say how to move on the way: Walk along this road. Cross the bridge and go past the bank.",
    te: "దారిలో ఎలా వెళ్ళాలో చెప్పడం నేర్చుకుందాం: Walk along this road. Cross the bridge and go past the bank.",
  },
  seo: {
    title: "Along, Across and Past in English for Telugu Speakers",
    description:
      "Say Walk along this road, Cross the bridge and Go past the bank. Simple lessons for Telugu speakers on giving directions.",
  },
  pattern: [
    { text: "Go", role: "action" },
    { text: "past the bank", role: "what" },
  ],
  core: [
    { en: "Walk along this road.", te: "ఈ రోడ్డు వెంబడి నడవండి.", extra: ["across"] },
    { en: "Cross the road at the signal.", te: "సిగ్నల్ దగ్గర రోడ్డు దాటండి.", extra: ["across"] },
    { en: "Go past the bank.", te: "బ్యాంక్ దాటి వెళ్ళండి.", extra: ["pass"] },
    { en: "Cross the bridge and turn right.", te: "బ్రిడ్జ్ దాటి కుడివైపు తిరగండి.", extra: ["crossing"] },
    { en: "Walk across the park to the gate.", te: "పార్క్ మధ్యలోంచి అవతలి గేటు దాకా నడవండి.", extra: ["along"] },
    { en: "My friend's house is just past the temple.", te: "నా ఫ్రెండ్ ఇల్లు గుడి దాటగానే ఉంటుంది.", extra: ["pass"] },
    { en: "Walk along the canal for five minutes.", te: "కాలువ వెంబడి ఐదు నిమిషాలు నడవండి.", extra: ["minute"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "On your next walk, say what you do: I walk along …, I go past …",
    te: "ఈసారి నడకకి వెళ్ళినప్పుడు మీరు ఏం చేస్తున్నారో ఇంగ్లీష్‌లో చెప్పుకోండి: I walk along …, I go past …",
  },
  words: [
    { en: "along", te: "వెంబడి" },
    { en: "across", te: "అవతలి వైపుకి" },
    { en: "past", te: "దాటి" },
    { en: "cross", te: "దాటడం" },
    { en: "bridge", te: "వంతెన, బ్రిడ్జ్" },
  ],
  grammar: ["prepositions", "imperatives"],
  topics: ["directions"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Moving on the way", te: "దారిలో కదలడం" },
      body: {
        en: "Along means on the same road, all the way. Across means from one side to the other side. Past means you go by a place and keep going.",
        te: "along అంటే అదే రోడ్డు వెంబడి. across అంటే ఈ వైపు నుంచి అవతలి వైపుకి. past అంటే ఒక చోటుని దాటి ముందుకు.",
      },
      bridge: {
        te: ["బ్యాంక్", "దాటి వెళ్ళండి"],
        en: [
          { text: "Go", role: "action" },
          { text: "past the bank", role: "what" },
        ],
      },
      examples: [
        { en: "Walk along this road.", te: "ఈ రోడ్డు వెంబడి నడవండి." },
        { en: "Cross the road at the signal.", te: "సిగ్నల్ దగ్గర రోడ్డు దాటండి." },
        { en: "Go past the bank.", te: "బ్యాంక్ దాటి వెళ్ళండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "along, across or past?", te: "along, across, past: ఏది ఎప్పుడు" },
      items: [
        {
          form: "along",
          useFor: { en: "Stay on the same road or canal.", te: "అదే రోడ్డు లేదా కాలువ వెంబడి వెళ్ళడానికి." },
          example: { en: "Walk along the canal for five minutes.", te: "కాలువ వెంబడి ఐదు నిమిషాలు నడవండి." },
        },
        {
          form: "cross / across",
          useFor: { en: "Go to the other side.", te: "అవతలి వైపుకి వెళ్ళడానికి." },
          example: { en: "Cross the bridge and turn right.", te: "బ్రిడ్జ్ దాటి కుడివైపు తిరగండి." },
        },
        {
          form: "past",
          useFor: { en: "Go by a place and keep going.", te: "ఒక చోటుని దాటి ముందుకు వెళ్ళడానికి." },
          example: { en: "My friend's house is just past the temple.", te: "నా ఫ్రెండ్ ఇల్లు గుడి దాటగానే ఉంటుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Cross across the road.",
      right: "Cross the road.",
      why: {
        en: "Cross already means go to the other side, so do not add across: Cross the road.",
        te: "cross అంటేనే అవతలి వైపుకి దాటడం; మళ్ళీ across అక్కర్లేదు: Cross the road.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Go past bank and cross bridge.",
      right: "Go past the bank and cross the bridge.",
      why: {
        en: "Telugu has no the, but English needs it for a place you both know: Go past the bank and cross the bridge.",
        te: "తెలుగులో the ఉండదు; ఇద్దరికీ తెలిసిన చోటుకి ఇంగ్లీష్‌లో the కావాలి: Go past the bank and cross the bridge.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Tell a visitor to go by the bank and keep going.", te: "బ్యాంక్‌ని దాటి ముందుకు వెళ్ళమని చెప్పండి." },
      options: ["Go past the bank.", "Go pass the bank.", "Go after the bank."],
      answer: 0,
      why: {
        en: "Past, with t, means going by a place; after means following someone.",
        te: "ఒక చోటుని దాటి వెళ్ళడం past (t తో); after అంటే వెనకాల వెళ్ళడం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Walk ___ this road for two minutes.",
      te: "ఈ రోడ్డు వెంబడి రెండు నిమిషాలు నడవండి.",
      options: ["along", "across", "past"],
      answer: 0,
      why: {
        en: "Along keeps you on the same road; across takes you to the other side.",
        te: "along అంటే అదే రోడ్డు వెంబడి; across అంటే అవతలి వైపుకి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "The shop is on the other side of the road. What do you tell your friend?",
        te: "షాపు రోడ్డుకి అవతలి వైపు ఉంది. మీ ఫ్రెండ్‌కి ఏం చెప్తారు?",
      },
      options: ["Cross the road.", "Cross across the road.", "Go along the road."],
      answer: 0,
      why: {
        en: "Cross takes you to the other side; it needs no across after it.",
        te: "cross అంటే అవతలి వైపుకి వెళ్ళడం; దాని తర్వాత across అక్కర్లేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Go past the bridge and turning left.",
      wrongIndex: 5,
      fix: "Go past the bridge and turn left.",
      why: {
        en: "Directions use the plain verb, so turn takes no -ing.",
        te: "దారి చెప్పేటప్పుడు verb మామూలుగానే ఉంటుంది; -ing అక్కర్లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Tell a visitor to cross the bridge and turn right.",
        te: "బ్రిడ్జ్ దాటి కుడివైపు తిరగమని చెప్పండి.",
      },
      expected: ["Cross the bridge and turn right.", "Cross the bridge, then turn right."],
      options: ["Cross the bridge and turn right.", "Cross bridge and turn right.", "Cross across the bridge and turn right."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Tell someone the clinic is just past the temple.",
        te: "క్లినిక్ గుడి దాటగానే ఉందని చెప్పండి.",
      },
      expected: ["The clinic is just past the temple.", "It's just past the temple."],
      options: ["The clinic is just past the temple.", "The clinic just past the temple.", "The clinic is just pass the temple."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "To a friend's house", te: "ఫ్రెండ్ ఇంటికి దారి" },
    scene: {
      en: "You are visiting your friend Imran in Warangal for the first time. You call him from the bus stop.",
      te: "మీరు వరంగల్‌లో మీ ఫ్రెండ్ ఇమ్రాన్ ఇంటికి మొదటిసారి వెళ్తున్నారు. బస్ స్టాప్ నుంచి ఆయనకి ఫోన్ చేశారు.",
    },
    partner: { en: "Imran (your friend)", te: "ఇమ్రాన్ (మీ ఫ్రెండ్)" },
    voice: "b",
    skills: [
      { id: "follow", label: { en: "Following directions", te: "దారి అర్థం చేసుకోవడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Are you at the bus stop?",
        te: "హలో! మీరు బస్ స్టాప్ దగ్గర ఉన్నారా?",
        hint: { en: "Say yes, and ask him the way to his house.", te: "అవునని, ఆయన ఇంటికి దారి అడగండి." },
        replies: [
          { say: "Yes. How do I get to your house?", good: true, skill: "follow" },
          { say: "Yes. Your house which way?", good: false, skill: "follow", fixIt: "question" },
        ],
      },
      {
        partner: "Walk along the main road, past the temple.",
        te: "మెయిన్ రోడ్ వెంబడి నడిచి, గుడి దాటి రండి.",
        hint: { en: "Ask if you have to go to the other side of the road.", te: "రోడ్డు అవతలి వైపుకి వెళ్ళాలా అని అడగండి." },
        replies: [
          { say: "Okay. Do I cross the road?", good: true, skill: "follow" },
          { say: "Okay. I cross the road?", good: false, skill: "follow", fixIt: "question" },
        ],
      },
      {
        partner: "No. Cross the bridge after the temple.",
        te: "లేదు. గుడి దాటాక బ్రిడ్జ్ దాటండి.",
        hint: { en: "Tell him that bridge is familiar to you.", te: "ఆ బ్రిడ్జ్ మీకు తెలుసని చెప్పండి." },
        replies: [
          { say: "Oh, I know that bridge.", good: true, skill: "follow" },
          { say: "Oh, I am knowing that bridge.", good: false, skill: "follow", fixIt: "state-ing" },
        ],
      },
      {
        partner: "My house is the first one, blue gate.",
        te: "మా ఇల్లు మొదటిదే, నీలం గేటు.",
        hint: { en: "Say when you will get there.", te: "ఎప్పటికి చేరుకుంటారో చెప్పండి." },
        replies: [
          { say: "Great. I'll be there in ten minutes.", good: true, skill: "polite" },
          {
            say: "Why didn't you come to pick me up?",
            good: false,
            skill: "polite",
            react: { en: "Sorry! My bike is at the repair shop.", te: "సారీ! నా బైక్ రిపేర్ షాపులో ఉంది." },
          },
        ],
      },
    ],
  },
};
