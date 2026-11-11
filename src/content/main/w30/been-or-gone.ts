import type { Lesson } from "../../types";

/** Week 30, Day 3 (CURRICULUM §4): been (went and came back) vs gone (went and is still there); has gone out, out of town. */
export const day: Lesson = {
  id: "been-or-gone",
  kind: "lesson",
  title: { en: "Been or Gone?", te: "been ఆ, gone ఆ?" },
  subtitle: "been vs gone",
  summary: {
    en: "Learn the difference: Venkat has gone to Chennai, so he is there now. I have been to Chennai, and I am back.",
    te: "తేడా నేర్చుకుందాం: Venkat has gone to Chennai అంటే ఆయన ఇప్పుడు అక్కడే ఉన్నారు. I have been to Chennai అంటే వెళ్ళొచ్చాను.",
  },
  seo: {
    title: "Been or Gone? in English for Telugu Speakers",
    description:
      "Learn when to say He has gone to Chennai and when to say I have been to Chennai. Simple lessons for Telugu speakers on been and gone.",
  },
  pattern: [
    { text: "Venkat", role: "who" },
    { text: "has gone", role: "action" },
    { text: "to Chennai", role: "what" },
  ],
  core: [
    { en: "Venkat has gone to Chennai.", te: "వెంకట్ గారు చెన్నై వెళ్ళారు.", extra: ["have"] },
    { en: "I have been to Chennai.", te: "నేను చెన్నై వెళ్ళొచ్చాను.", extra: ["gone"] },
    { en: "Sorry, he has gone out.", te: "Sorry అండీ, ఆయన బయటికి వెళ్ళారు.", extra: ["went"] },
    { en: "She has gone to the temple.", te: "ఆవిడ గుడికి వెళ్ళారు.", extra: ["is"] },
    { en: "When will he come back?", te: "ఆయన మళ్ళీ ఎప్పుడు వస్తారు?", extra: ["comes"] },
    { en: "My cousin has gone abroad.", te: "మా కజిన్ విదేశాలకి వెళ్ళారు.", extra: ["to"] },
    { en: "Have you been to the new park?", te: "మీరు కొత్త పార్క్‌కి వెళ్ళొచ్చారా?", extra: ["gone"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of someone who is away today, and say: He has gone to … or She has gone to …",
    te: "ఈ రోజు ఊళ్ళో లేని ఒకరిని గుర్తు చేసుకుని చెప్పండి: He has gone to … లేదా She has gone to …",
  },
  words: [
    { en: "gone", te: "వెళ్ళారు, ఇంకా రాలేదు (go మూడో రూపం)" },
    { en: "abroad", te: "విదేశాలకి, విదేశంలో" },
    { en: "away", te: "ఊళ్ళో లేరు, దూరంగా" },
    { en: "out of town", te: "ఊరికి వెళ్ళారు, ఊళ్ళో లేరు" },
    { en: "hometown", te: "సొంత ఊరు" },
  ],
  grammar: ["present-perfect"],
  topics: ["neighbours", "travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Been or gone?", te: "been ఆ, gone ఆ?" },
      body: {
        en: "Gone: the person went and is still there. Venkat has gone to Chennai, so he is not here now. Been: the person went and came back. I have been to Chennai, and now I am home.",
        te: "gone అంటే వెళ్ళారు, ఇంకా అక్కడే ఉన్నారు: Venkat has gone to Chennai. been అంటే వెళ్ళొచ్చారు: I have been to Chennai.",
      },
      bridge: {
        te: ["వెంకట్ గారు", "చెన్నై", "వెళ్ళారు"],
        en: [
          { text: "Venkat", role: "who" },
          { text: "has gone", role: "action" },
          { text: "to Chennai", role: "what" },
        ],
      },
      examples: [
        { en: "Venkat has gone to Chennai.", te: "వెంకట్ గారు చెన్నై వెళ్ళారు." },
        { en: "I have been to Chennai.", te: "నేను చెన్నై వెళ్ళొచ్చాను." },
        { en: "My cousin has gone abroad.", te: "మా కజిన్ విదేశాలకి వెళ్ళారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which one?", te: "ఏది ఎప్పుడు?" },
      items: [
        {
          form: "has gone",
          useFor: { en: "Went, and is still there.", te: "వెళ్ళారు, ఇంకా తిరిగి రాలేదు." },
          example: { en: "Venkat has gone to Chennai.", te: "వెంకట్ గారు చెన్నై వెళ్ళారు." },
        },
        {
          form: "have been",
          useFor: { en: "Went, and came back.", te: "వెళ్ళొచ్చారు." },
          example: { en: "I have been to Chennai.", te: "నేను చెన్నై వెళ్ళొచ్చాను." },
        },
        {
          form: "has gone out",
          useFor: { en: "Out for a short time.", te: "కాసేపు బయటికి వెళ్ళారు." },
          example: { en: "Sorry, he has gone out.", te: "Sorry అండీ, ఆయన బయటికి వెళ్ళారు." },
        },
        {
          form: "is away, out of town",
          useFor: { en: "Not in town for some days.", te: "కొన్ని రోజులు ఊళ్ళో లేరు." },
          example: { en: "Venkat is out of town this week.", te: "వెంకట్ గారు ఈ వారం ఊళ్ళో లేరు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "She have gone to the temple.",
      right: "She has gone to the temple.",
      why: {
        en: "With he or she, have changes to has, the way go changes to goes.",
        te: "he, she తో have కాదు, has వస్తుంది; go కాస్తా goes అయినట్టే.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "He has gone out of station.",
      right: "He has gone out of town.",
      why: {
        en: "Out of station is heard only in India; everyone understands out of town.",
        te: "out of station అని మన దగ్గరే అంటారు; అందరికీ అర్థమయ్యేది out of town.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "A visitor asks for Venkat. He is in Chennai now. What do you say?",
        te: "ఎవరో వెంకట్ గారి కోసం వచ్చారు. ఆయన ఇప్పుడు చెన్నైలో ఉన్నారు. ఏమంటారు?",
      },
      options: ["He has gone to Chennai.", "He has been to Chennai.", "He has go to Chennai."],
      answer: 0,
      why: {
        en: "Gone means he went and has not come back.",
        te: "gone అంటే వెళ్ళారు, ఇంకా తిరిగి రాలేదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I have ___ to Chennai. I came back on Monday.",
      te: "నేను చెన్నై వెళ్ళొచ్చాను. సోమవారం తిరిగి వచ్చాను.",
      options: ["been", "gone", "went"],
      answer: 0,
      why: {
        en: "You came back, so use been, which means went and returned.",
        te: "మీరు తిరిగి వచ్చారు, అందుకే been; అంటే వెళ్ళొచ్చారు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "preposition",
      prompt: { en: "Your cousin now lives in another country. Say it.", te: "మీ కజిన్ ఇప్పుడు వేరే దేశంలో ఉంటున్నారు. ఆ మాట చెప్పండి." },
      options: ["My cousin has gone abroad.", "My cousin has gone to abroad.", "My cousin has went abroad."],
      answer: 0,
      why: {
        en: "Abroad already means to another country, so never put to before it.",
        te: "abroad లోనే 'విదేశాలకి' అనే అర్థం ఉంది; దాని ముందు to రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Sorry, he have gone out.",
      wrongIndex: 2,
      fix: "Sorry, he has gone out.",
      why: {
        en: "With he or she, use has, never have.",
        te: "he, she తో has వస్తుంది, have రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Someone asks for Venkat. He is in Hyderabad now. Tell them.",
        te: "ఎవరో వెంకట్ గారి కోసం అడిగారు. ఆయన ఇప్పుడు హైదరాబాద్‌లో ఉన్నారు. చెప్పండి.",
      },
      expected: ["He has gone to Hyderabad.", "Sorry, he has gone to Hyderabad.", "He's gone to Hyderabad."],
      options: ["He has gone to Hyderabad.", "He have gone to Hyderabad.", "He is went to Hyderabad."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A friend asks if you have been to the new park. You went yesterday. Answer.",
        te: "కొత్త పార్క్‌కి వెళ్ళొచ్చారా అని మీ స్నేహితులు అడిగారు. మీరు నిన్న వెళ్ళారు. జవాబు చెప్పండి.",
      },
      expected: ["Yes, I have. I went yesterday.", "Yes, I have been there.", "Yes, I went yesterday."],
      options: ["Yes, I have. I went yesterday.", "Yes, I have. I have gone yesterday.", "Yes, I am. I went yesterday."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Where is Venkat?", te: "వెంకట్ గారు ఎక్కడ?" },
    scene: {
      en: "You go to give back Venkat's umbrella. His sister Sarala opens the door.",
      te: "వెంకట్ గారి గొడుగు తిరిగి ఇవ్వడానికి వెళ్ళారు. వాళ్ళ అక్క సరళ గారు తలుపు తీశారు.",
    },
    partner: { en: "Sarala (your neighbour's sister)", te: "సరళ (వెంకట్ గారి అక్క)" },
    skills: [{ id: "gone", label: { en: "Been or gone", te: "been, gone తేడా" } }],
    turns: [
      {
        partner: "Oh, hello! Please come in.",
        te: "ఓ, నమస్కారం! లోపలికి రండి.",
        hint: { en: "Greet her, and ask if Venkat is at home.", te: "ఆవిడని పలకరించి, వెంకట్ గారు ఇంట్లో ఉన్నారా అని అడగండి." },
        replies: [
          { say: "Hello! Is Venkat at home?", good: true },
          { say: "Hello! Venkat is there?", good: false, fixIt: "question" },
        ],
      },
      {
        partner: "No, he has gone to Hyderabad.",
        te: "లేదండీ, ఆయన హైదరాబాద్ వెళ్ళారు.",
        hint: { en: "Ask about the day of his return.", te: "ఆయన ఏ రోజు తిరిగి వస్తారో అడగండి." },
        replies: [
          { say: "When will he come back?", good: true, skill: "gone" },
          { say: "When he will come back?", good: false, skill: "gone", fixIt: "question" },
          {
            say: "Hyderabad again? He never stays home!",
            good: false,
            skill: "gone",
            react: { en: "Ha, yes! He loves to travel.", te: "హ, నిజమే! ఆయనకి ప్రయాణాలంటే చాలా ఇష్టం." },
          },
        ],
      },
      {
        partner: "On Sunday. Can I help you?",
        te: "ఆదివారం. నేనేమైనా సహాయం చేయాలా?",
        hint: { en: "Ask her to give him his umbrella, and say you borrowed it.", te: "ఈ గొడుగు ఆయనకి ఇవ్వమని అడిగి, మీరు అడిగి తీసుకున్నారని చెప్పండి." },
        replies: [
          { say: "Please give him this umbrella. I borrowed it.", good: true },
          { say: "Please give him this umbrella. I borrow it.", good: false },
        ],
      },
      {
        partner: "Okay, I'll give it to him. Thank you!",
        te: "సరే, ఆయనకి ఇస్తాను. థాంక్యూ!",
        hint: { en: "Thank her, and say goodbye.", te: "ఆవిడకి థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Thank you. Bye!", good: true },
          { say: "Okay. Tell him to call me, quick.", good: false },
        ],
      },
    ],
  },
};
