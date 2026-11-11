import type { Lesson } from "../../types";

/** Week 14, Day 4 (CURRICULUM §4): landmarks — opposite, behind, between, in front of, at the corner; guiding someone to your house. */
export const day: Lesson = {
  id: "opposite-the-bus-stand",
  kind: "lesson",
  title: { en: "Opposite the Bus Stand", te: "ఎదురుగా, మూలన" },
  subtitle: "opposite / behind / at the corner",
  summary: {
    en: "Learn to guide someone with landmarks: It's opposite the bus stand, next to the medical shop.",
    te: "గుర్తులతో దారి చెప్పడం నేర్చుకుందాం: It's opposite the bus stand, next to the medical shop.",
  },
  seo: {
    title: "Landmarks and Directions in English for Telugu Speakers",
    description:
      "Say It's opposite the bus stand, at the corner, behind the temple. Simple lessons for Telugu speakers on guiding someone to your house.",
  },
  pattern: [
    { text: "It", role: "who" },
    { text: "is", role: "action" },
    { text: "opposite the bus stand", role: "what" },
  ],
  core: [
    { en: "It's opposite the bus stand.", te: "బస్ స్టాండ్‌కి ఎదురుగా ఉంది.", extra: ["to"] },
    { en: "My house is behind the temple.", te: "మా ఇల్లు గుడి వెనకాల ఉంది.", extra: ["backside"] },
    { en: "The shop is at the corner.", te: "షాపు మూలన ఉంది.", extra: ["in"] },
    { en: "It's between the bank and the school.", te: "బ్యాంక్‌కీ స్కూల్‌కీ మధ్యలో ఉంది.", extra: ["middle"] },
    { en: "It's next to the medical shop.", te: "మెడికల్ షాపు పక్కనే ఉంది.", extra: ["side"] },
    { en: "Look for the blue gate in front of the park.", te: "పార్క్ ముందు ఉన్న నీలం గేటు కోసం చూడండి.", extra: ["at"] },
    { en: "The big tree is a good landmark.", te: "ఆ పెద్ద చెట్టు మంచి గుర్తు.", extra: ["one"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say where your home is with one landmark: It's opposite …, next to …",
    te: "మీ ఇల్లు ఎక్కడో ఒక గుర్తుతో ఇంగ్లీష్‌లో చెప్పండి: It's opposite …, next to …",
  },
  words: [
    { en: "opposite", te: "ఎదురుగా" },
    { en: "corner", te: "మూల" },
    { en: "between", te: "మధ్యలో" },
    { en: "in front of", te: "ముందు" },
    { en: "landmark", te: "గుర్తు (దారి చెప్పేటప్పుడు)" },
  ],
  grammar: ["prepositions", "articles"],
  topics: ["directions", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Using landmarks", te: "గుర్తులతో చెప్పడం" },
      body: {
        en: "People find a place by things everyone knows: a bus stand, a temple, a big tree. Telugu says the landmark first; English says opposite or behind first.",
        te: "అందరికీ తెలిసిన గుర్తులతో చోటు సులువుగా దొరుకుతుంది: బస్ స్టాండ్, గుడి, పెద్ద చెట్టు. తెలుగులో గుర్తు ముందు; ఇంగ్లీష్‌లో opposite, behind ముందు వస్తాయి.",
      },
      bridge: {
        te: ["బస్ స్టాండ్‌కి", "ఎదురుగా", "ఉంది"],
        en: [
          { text: "It", role: "who" },
          { text: "is", role: "action" },
          { text: "opposite the bus stand", role: "what" },
        ],
      },
      examples: [
        { en: "It's opposite the bus stand.", te: "బస్ స్టాండ్‌కి ఎదురుగా ఉంది." },
        { en: "My house is behind the temple.", te: "మా ఇల్లు గుడి వెనకాల ఉంది." },
        { en: "The shop is at the corner.", te: "షాపు మూలన ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Landmark words", te: "గుర్తు చెప్పే మాటలు" },
      items: [
        {
          form: "opposite",
          useFor: { en: "Facing it, across the road.", te: "రోడ్డుకి అవతల, ఎదురుగా." },
          example: { en: "It's opposite the bus stand.", te: "బస్ స్టాండ్‌కి ఎదురుగా ఉంది." },
        },
        {
          form: "at the corner",
          useFor: { en: "Where two roads meet.", te: "రెండు రోడ్లు కలిసే చోట." },
          example: { en: "The shop is at the corner.", te: "షాపు మూలన ఉంది." },
        },
        {
          form: "between",
          useFor: { en: "With one place on each side.", te: "రెండు చోట్ల మధ్యలో." },
          example: { en: "It's between the bank and the school.", te: "బ్యాంక్‌కీ స్కూల్‌కీ మధ్యలో ఉంది." },
        },
        {
          form: "in front of",
          useFor: { en: "Just before it, on the same side.", te: "అదే వైపు, దాని ముందు." },
          example: { en: "Look for the blue gate in front of the park.", te: "పార్క్ ముందు ఉన్న నీలం గేటు కోసం చూడండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "It's opposite to the bus stand.",
      right: "It's opposite the bus stand.",
      why: {
        en: "Telugu says బస్ స్టాండ్‌కి, but opposite needs no to after it: It's opposite the bus stand.",
        te: "తెలుగులో 'బస్ స్టాండ్‌కి' అంటాం, కానీ opposite తర్వాత to అక్కర్లేదు: It's opposite the bus stand.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "My house is backside of the temple.",
      right: "My house is behind the temple.",
      why: {
        en: "In English, backside also means the part of the body you sit on, so say behind: My house is behind the temple.",
        te: "ఇంగ్లీష్‌లో backside అంటే కూర్చునే భాగం అని కూడా అర్థం; behind అనండి: My house is behind the temple.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: { en: "Tell the delivery person where the shop is.", te: "షాపు ఎక్కడో డెలివరీ చేసేవారికి చెప్పండి." },
      options: ["It's at the corner.", "It's at corner.", "It's in the corner side."],
      answer: 0,
      why: {
        en: "Where two roads meet is at the corner, and corner needs the.",
        te: "రెండు రోడ్లు కలిసే చోటు at the corner; corner ముందు the తప్పనిసరి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "The ATM is ___ the bank and the school.",
      te: "ATM బ్యాంక్‌కీ స్కూల్‌కీ మధ్యలో ఉంది.",
      options: ["between", "middle", "among"],
      answer: 0,
      why: {
        en: "Between joins two places with and; Telugu మధ్యలో comes after them.",
        te: "రెండు చోట్ల మధ్య అంటే between, and తో; తెలుగులో 'మధ్యలో' చివర వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Usha",
      lines: [
        "From the bus stand, walk along Main Road.",
        "Go past the temple.",
        "My house is opposite the post office.",
        "Green gate, next to a big neem tree.",
      ],
      prompt: { en: "Usha sent you this message. What is opposite her house?", te: "ఉష గారు ఈ మెసేజ్ పంపారు. ఆవిడ ఇంటికి ఎదురుగా ఏం ఉంది?" },
      options: ["The post office", "The temple", "The bus stand"],
      answer: 0,
      why: {
        en: "Opposite means facing it, on the other side of the road.",
        te: "opposite అంటే రోడ్డుకి అవతలి వైపు, ఎదురుగా.",
      },
      say: "Her house is opposite the post office.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My friend live behind the temple.",
      wrongIndex: 2,
      fix: "My friend lives behind the temple.",
      why: {
        en: "One person, like he or she, takes s on the verb.",
        te: "ఒక్క మనిషి (he, she లాగా) అయితే verb కి s చేర్చాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Tell a visitor your home is opposite the bus stand.",
        te: "మీ ఇల్లు బస్ స్టాండ్‌కి ఎదురుగా ఉందని చెప్పండి.",
      },
      expected: ["My house is opposite the bus stand.", "It's opposite the bus stand.", "My home is opposite the bus stand."],
      options: ["My house is opposite the bus stand.", "My house is opposite to the bus stand.", "My house opposite the bus stand."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Tell the delivery person the shop is at the corner, next to the bank.",
        te: "షాపు మూలన, బ్యాంక్ పక్కన ఉందని డెలివరీ చేసేవారికి చెప్పండి.",
      },
      expected: ["It's at the corner, next to the bank.", "The shop is at the corner, next to the bank."],
      options: ["It's at the corner, next to the bank.", "It's in corner, next to bank.", "It's at the corner, bank side."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Guiding the delivery person", te: "డెలివరీ చేసేవారికి దారి" },
    scene: {
      en: "You ordered groceries. Ramesh, the delivery person, calls. He can't find your house.",
      te: "మీరు సరుకులు ఆర్డర్ చేశారు. డెలివరీ చేసే రమేష్ ఫోన్ చేశారు. ఆయనకి మీ ఇల్లు దొరకట్లేదు.",
    },
    partner: { en: "Ramesh (delivery person)", te: "రమేష్ (డెలివరీ చేసేవారు)" },
    voice: "b",
    skills: [
      { id: "guide", label: { en: "Giving landmarks", te: "గుర్తులతో దారి చెప్పడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello, I have your order. Where is your house?",
        te: "హలో, మీ ఆర్డర్ తెచ్చాను. మీ ఇల్లు ఎక్కడ?",
        hint: { en: "Say hello, and give the big landmark first.", te: "హలో చెప్పి, ముందు పెద్ద గుర్తు చెప్పండి." },
        replies: [
          { say: "Hello! It's opposite the bus stand.", good: true, skill: "guide" },
          { say: "Myself Kiran. Opposite to bus stand.", good: false, skill: "guide", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Okay, I'm at the bus stand now.",
        te: "సరే, నేను ఇప్పుడు బస్ స్టాండ్ దగ్గర ఉన్నాను.",
        hint: { en: "Tell him to go to the other side and find the medical shop.", te: "రోడ్డు అవతలి వైపుకి వెళ్ళి మెడికల్ షాపు చూడమని చెప్పండి." },
        replies: [
          { say: "Please cross the road. There's a medical shop.", good: true, skill: "guide" },
          { say: "Please cross across the road.", good: false, skill: "guide", fixIt: "preposition" },
        ],
      },
      {
        partner: "Yes, I can see it.",
        te: "అవును, కనిపిస్తోంది.",
        hint: { en: "Tell him where your house is, using the shop.", te: "ఆ షాపు గుర్తుతో మీ ఇల్లు ఎక్కడో చెప్పండి." },
        replies: [
          { say: "My house is behind it. Blue gate.", good: true, skill: "guide" },
          { say: "My house is backside of it.", good: false, skill: "guide", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Found it! I'm at your gate.",
        te: "దొరికింది! మీ గేటు దగ్గర ఉన్నాను.",
        hint: { en: "Say you are coming, and thank him.", te: "వస్తున్నానని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Coming! Thank you for calling.", good: true, skill: "polite" },
          {
            say: "You're late. Next time come fast.",
            good: false,
            skill: "polite",
            react: { en: "Sorry, the traffic was very bad today.", te: "సారీ అండీ, ఈ రోజు ట్రాఫిక్ చాలా ఎక్కువగా ఉంది." },
          },
        ],
      },
    ],
  },
};
