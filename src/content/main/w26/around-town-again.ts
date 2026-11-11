import type { Lesson } from "../../types";

/** Week 26, Day 1 (CURRICULUM §4): Checkpoint review of the market, directions, buses and shops (Weeks 13–15 and 22). */
export const day: Lesson = {
  id: "around-town-again",
  kind: "lesson",
  title: { en: "Around Town Again", te: "మళ్ళీ ఊర్లో" },
  subtitle: "market, directions, buses",
  summary: {
    en: "Use what you learned in town: ask prices, compare two things, ask the way and find the right bus.",
    te: "ఊర్లో నేర్చుకున్నదంతా మళ్ళీ వాడండి: ధరలు అడగడం, రెండిటిని పోల్చడం, దారి అడగడం, సరైన బస్ పట్టుకోవడం.",
  },
  seo: {
    title: "Shopping and Getting Around Town in English for Telugu Speakers",
    description:
      "Ask Which bus goes to the market? and How much is a kilo of guavas? A review lesson for Telugu speakers on shopping and getting around town.",
  },
  pattern: [
    { text: "Which bus", role: "who" },
    { text: "goes", role: "action" },
    { text: "to the market?", role: "what" },
  ],
  core: [
    { en: "Which bus goes to the market?", te: "మార్కెట్‌కి ఏ బస్ వెళ్తుంది?", extra: ["go"] },
    { en: "How much is a kilo of guavas?", te: "కిలో జామపండ్లు ఎంత?", extra: ["are"] },
    { en: "This one is cheaper than that one.", te: "దాని కంటే ఇది చవక.", extra: ["more"] },
    { en: "Excuse me, where is the bus stop?", te: "ఎక్స్‌క్యూజ్ మీ, బస్ స్టాప్ ఎక్కడ ఉంది?", extra: ["are"] },
    { en: "It's opposite the temple, next to the fruit stall.", te: "అది గుడికి ఎదురుగా, పండ్ల బండి పక్కన ఉంది.", extra: ["of"] },
    { en: "Take a share auto from the main road.", te: "మెయిన్ రోడ్ దగ్గర షేర్ ఆటో ఎక్కండి.", extra: ["in"] },
    { en: "Bus number 10 stops in front of the market.", te: "10 నంబర్ బస్ మార్కెట్ ముందే ఆగుతుంది.", extra: ["stop"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Today, ask a shopkeeper or a neighbour which bus goes to the market.",
    te: "ఈ రోజు ఒక షాపు వారినో, పొరుగువారినో మార్కెట్‌కి ఏ బస్ వెళ్తుందో ఇంగ్లీష్‌లో అడగండి.",
  },
  words: [
    { en: "visitor", te: "ఊరికి వచ్చినవారు, అతిథి" },
    { en: "guava", te: "జామపండు" },
    { en: "papaya", te: "బొప్పాయి" },
    { en: "share auto", te: "షేర్ ఆటో" },
    { en: "seller", te: "అమ్మేవారు" },
  ],
  grammar: ["question-words", "comparatives-superlatives", "prepositions", "present-simple"],
  topics: ["market", "directions", "transport"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Three questions for town", te: "ఊర్లో మూడు ప్రశ్నలు" },
      body: {
        en: "In town, three questions do most of the work. The price: How much is a kilo of guavas? The way: Where is the bus stop? The bus: Which bus goes to the market? One bus, so goes, with s.",
        te: "ఊర్లో ఈ మూడు ప్రశ్నలతో చాలా పనులు అవుతాయి. ధర: How much is a kilo of guavas? దారి: Where is the bus stop? బస్: Which bus goes to the market? ఒక్క బస్ కాబట్టి goes, s తో.",
      },
      bridge: {
        te: ["మార్కెట్‌కి", "ఏ బస్", "వెళ్తుంది?"],
        en: [
          { text: "Which bus", role: "who" },
          { text: "goes", role: "action" },
          { text: "to the market?", role: "what" },
        ],
      },
      examples: [
        { en: "Which bus goes to the market?", te: "మార్కెట్‌కి ఏ బస్ వెళ్తుంది?" },
        { en: "How much is a kilo of guavas?", te: "కిలో జామపండ్లు ఎంత?" },
        { en: "Excuse me, where is the bus stop?", te: "ఎక్స్‌క్యూజ్ మీ, బస్ స్టాప్ ఎక్కడ ఉంది?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which question when?", te: "ఏ ప్రశ్న ఎప్పుడు?" },
      items: [
        {
          form: "How much is …?",
          useFor: { en: "Asking a price.", te: "ధర అడగడానికి." },
          example: { en: "How much are these papayas?", te: "ఈ బొప్పాయిలు ఎంత?" },
        },
        {
          form: "… cheaper than …",
          useFor: { en: "Comparing two things.", te: "రెండిటిని పోల్చడానికి." },
          example: { en: "This one is cheaper than that one.", te: "దాని కంటే ఇది చవక." },
        },
        {
          form: "Where is …?",
          useFor: { en: "Asking the way.", te: "దారి అడగడానికి." },
          example: { en: "Excuse me, where is the share auto stand?", te: "ఎక్స్‌క్యూజ్ మీ, షేర్ ఆటోలు ఎక్కడ ఆగుతాయి?" },
        },
        {
          form: "Which bus goes to …?",
          useFor: { en: "Finding the right bus.", te: "సరైన బస్ కనుక్కోవడానికి." },
          example: { en: "Which bus goes to the railway station?", te: "రైల్వే స్టేషన్‌కి ఏ బస్ వెళ్తుంది?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "Which bus go to the market?",
      right: "Which bus goes to the market?",
      why: {
        en: "One bus is like he or she, so the verb takes s: goes, not go.",
        te: "ఒక్క బస్ అంటే he, she లాంటిదే, అందుకే verb కి s: go కాదు, goes.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "This is more cheaper than that.",
      right: "This is cheaper than that.",
      why: {
        en: "A short word like cheap just adds -er, so more is not needed.",
        te: "cheap లాంటి చిన్న పదానికి -er చేరిస్తే చాలు; more అక్కర్లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Choose the right question for the bus.", te: "బస్ గురించి సరైన ప్రశ్న ఎంచుకోండి." },
      options: ["Which bus goes to the market?", "Which bus go to the market?", "Market which bus goes?"],
      answer: 0,
      why: {
        en: "The question word comes first, and one bus takes a verb with s.",
        te: "ప్రశ్న పదం ముందు వస్తుంది; ఒక్క బస్ కాబట్టి verb కి s.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "This papaya is ___ than that one.",
      te: "దాని కంటే ఈ బొప్పాయి చవక.",
      options: ["cheaper", "more cheaper", "cheap"],
      answer: 0,
      why: {
        en: "Than needs the -er word, and cheap takes -er without more.",
        te: "than ముందు -er పదం రావాలి; cheap కి more లేకుండా -er చాలు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "A visitor asks you the way to the bus stop. It is across the road, on the left. What do you say?",
        te: "ఊరికి కొత్తగా వచ్చినవారు బస్ స్టాప్‌కి దారి అడిగారు. అది రోడ్డు అవతల, ఎడమ వైపు ఉంది. మీరు ఏమంటారు?",
      },
      options: ["Cross the road. It's on your left.", "Cross the road. It's in your left.", "Road cross and left side it is."],
      answer: 0,
      why: {
        en: "Give the step first, then the side; a side takes on, never in.",
        te: "ముందు ఏం చేయాలో, తర్వాత ఏ వైపో చెప్పండి; వైపుకి on వాడాలి, in కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "The bus stop is opposite to the temple.",
      wrongIndex: 5,
      fix: "The bus stop is opposite the temple.",
      why: {
        en: "Opposite needs no to after it; Telugu adds కి here, but English doesn't.",
        te: "opposite తర్వాత to అక్కర్లేదు; 'గుడికి ఎదురుగా' లో కి ఉన్నా, ఇంగ్లీష్‌లో to రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "At the fruit stall, ask the price of a kilo of guavas.",
        te: "పండ్ల బండి దగ్గర కిలో జామపండ్లు ఎంతో అడగండి.",
      },
      expected: ["How much is a kilo of guavas?", "How much are the guavas?", "How much for a kilo of guavas?"],
      options: ["How much is a kilo of guavas?", "How much a kilo guavas?", "How many is a kilo of guavas?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You are at the bus stop. Ask which bus goes to the market.",
        te: "మీరు బస్ స్టాప్‌లో ఉన్నారు. మార్కెట్‌కి ఏ బస్ వెళ్తుందో అడగండి.",
      },
      expected: ["Excuse me, which bus goes to the market?", "Which bus goes to the market?"],
      options: ["Excuse me, which bus goes to the market?", "Excuse me, which bus to market goes?", "Excuse me, which bus going to market?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Helping a visitor", te: "కొత్తవారికి సహాయం" },
    scene: {
      en: "Joseph is a visitor from Chennai. Help him buy fruit and find his bus.",
      te: "జోసెఫ్ చెన్నై నుంచి వచ్చారు. పండ్లు కొనడానికి, బస్ పట్టుకోడానికి ఆయనకి సహాయం చేయండి.",
    },
    partner: { en: "Joseph (a visitor)", te: "జోసెఫ్ (ఊరికి కొత్తగా వచ్చినవారు)" },
    voice: "b",
    skills: [
      { id: "way", label: { en: "Giving directions", te: "దారి చెప్పడం" } },
      { id: "compare", label: { en: "Comparing", te: "పోల్చడం" } },
    ],
    turns: [
      {
        partner: "Excuse me, I'm new here. Where can I buy fruit?",
        te: "ఎక్స్‌క్యూజ్ మీ, నేను ఇక్కడికి కొత్త. పండ్లు ఎక్కడ దొరుకుతాయి?",
        hint: { en: "Tell him where the fruit stall is. Use opposite and the temple.", te: "పండ్ల బండి ఎక్కడ ఉందో చెప్పండి. opposite, temple వాడండి." },
        replies: [
          { say: "There's a fruit stall opposite the temple.", good: true, skill: "way" },
          { say: "There's a fruit stall opposite to the temple.", good: false, skill: "way", fixIt: "preposition" },
          {
            say: "I don't know. Go and find it.",
            good: false,
            skill: "way",
            react: { en: "Oh. Okay, I'll ask someone else.", te: "ఓ. సరే, ఇంకెవరినైనా అడుగుతాను." },
          },
        ],
      },
      {
        partner: "Thanks! Which is cheaper, the guavas or the papaya?",
        te: "థాంక్స్! ఏది చవక, జామపండ్లా, బొప్పాయా?",
        hint: { en: "Compare the two: the papaya costs less.", te: "రెండిటినీ పోల్చండి: బొప్పాయి ధర తక్కువ." },
        replies: [
          { say: "The papaya is cheaper than the guavas.", good: true, skill: "compare" },
          { say: "The papaya is more cheaper than the guavas.", good: false, skill: "compare" },
        ],
      },
      {
        partner: "Good, I'll take one. Which bus goes to the station?",
        te: "సరే, ఒకటి తీసుకుంటాను. స్టేషన్‌కి ఏ బస్ వెళ్తుంది?",
        hint: { en: "Give him the bus number: 5.", te: "బస్ నంబర్ చెప్పండి: 5." },
        replies: [
          { say: "Bus number 5 goes to the station.", good: true, skill: "way" },
          { say: "Bus number 5 go to the station.", good: false, skill: "way", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "Thank you so much. You're very kind!",
        te: "చాలా థాంక్స్. మీరు చాలా మంచివారు!",
        hint: { en: "Answer his thanks, and wish him a nice day.", te: "ఆయన థాంక్స్‌కి జవాబు చెప్పి, మంచి రోజు కావాలని చెప్పండి." },
        replies: [
          { say: "You're welcome. Have a nice day!", good: true },
          { say: "Mention not. Have a nice day!", good: false, fixIt: "indian-english" },
        ],
      },
    ],
  },
};
