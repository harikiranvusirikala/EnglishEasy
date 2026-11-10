import type { Lesson } from "../../types";

/** Week 6, Day 2 (CURRICULUM §3): would like, Would you like …? — polite asking and offering. */
export const day: Lesson = {
  id: "i-would-like",
  kind: "lesson",
  title: { en: "I Would Like", te: "నాకు … కావాలి (మర్యాదగా)" },
  subtitle: "would like",
  summary: {
    en: "Learn to ask for things politely with I would like, and to offer with Would you like …?",
    te: "I would like తో మర్యాదగా అడగడం, Would you like …? తో ఇవ్వజూపడం నేర్చుకుందాం.",
  },
  seo: {
    title: "I Would Like and Would You Like in English for Telugu Speakers",
    description:
      "Say I would like some tea and Would you like some water? in English. Simple lessons for Telugu speakers on polite asking and offering.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "would like", role: "action" },
    { text: "some tea", role: "what" },
  ],
  core: [
    { en: "I would like some tea.", te: "నాకు కొంచెం టీ కావాలి.", extra: ["will"] },
    { en: "Would you like some water?", te: "మీకు కొంచెం నీళ్ళు కావాలా?", extra: ["Do"] },
    { en: "I'd like two dosas, please.", te: "నాకు రెండు దోసెలు కావాలండీ.", extra: ["want"] },
    { en: "Would you like some snacks?", te: "మీకు ఏమైనా స్నాక్స్ కావాలా?", extra: ["Will"] },
    { en: "Yes, please.", te: "అవును, ఇవ్వండి.", extra: ["thanks"] },
    { en: "No, thank you.", te: "వద్దు, థాంక్యూ.", extra: ["thanks"] },
    { en: "What would you like to drink?", te: "మీరు ఏం తాగుతారు?", extra: ["do"] },
  ],
  key: [0, 1, 2, 6],
  tryToday: {
    en: "Offer someone something today: Would you like some tea?",
    te: "ఈ రోజు ఎవరికైనా ఏదైనా ఇవ్వజూపండి: Would you like some tea?",
  },
  words: [
    { en: "would like", te: "కావాలి (మర్యాదగా)" },
    { en: "water", te: "నీళ్ళు" },
    { en: "snacks", te: "చిరుతిళ్ళు, స్నాక్స్" },
    { en: "drink", te: "తాగడం" },
    { en: "juice", te: "జ్యూస్, రసం" },
  ],
  grammar: ["would-like", "politeness-softening"],
  topics: ["food"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Would like is a polite want", te: "would like = మర్యాదగా 'కావాలి'" },
      body: {
        en: "I want is fine, but it can sound strong. I would like is softer and polite. Offer something with Would you like …? and answer Yes, please or No, thank you.",
        te: "I want తప్పు కాదు, కానీ కొంచెం గట్టిగా వినిపిస్తుంది. I would like మృదువుగా, మర్యాదగా ఉంటుంది. ఏదైనా ఇవ్వజూపడానికి Would you like …?; జవాబు Yes, please లేదా No, thank you.",
      },
      bridge: {
        te: ["నాకు", "కొంచెం టీ", "కావాలి"],
        en: [
          { text: "I", role: "who" },
          { text: "would like", role: "action" },
          { text: "some tea", role: "what" },
        ],
      },
      examples: [
        { en: "I would like some tea.", te: "నాకు కొంచెం టీ కావాలి." },
        { en: "Would you like some water?", te: "మీకు కొంచెం నీళ్ళు కావాలా?" },
        { en: "No, thank you.", te: "వద్దు, థాంక్యూ." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking, offering, answering", te: "అడగడం, ఇవ్వజూపడం, జవాబు" },
      items: [
        {
          form: "I would like / I'd like",
          useFor: { en: "To ask for something politely.", te: "మర్యాదగా ఏదైనా అడగడానికి." },
          example: { en: "I'd like two dosas, please.", te: "నాకు రెండు దోసెలు కావాలి." },
        },
        {
          form: "Would you like …?",
          useFor: { en: "To offer something.", te: "ఏదైనా ఇవ్వజూపడానికి." },
          example: { en: "Would you like some snacks?", te: "మీకు ఏమైనా స్నాక్స్ కావాలా?" },
        },
        {
          form: "Yes, please / No, thank you",
          useFor: { en: "To answer an offer.", te: "ఇవ్వజూపినప్పుడు జవాబుగా." },
          example: { en: "Yes, please.", te: "అవును, ఇవ్వండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Will you like some water?",
      right: "Would you like some water?",
      why: {
        en: "An offer always uses would, not will: Would you like some water?",
        te: "ఇవ్వజూపేటప్పుడు will కాదు, would అనాలి: Would you like some water?",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Would you like to tea?",
      right: "Would you like some tea?",
      why: {
        en: "Like + a thing: some tea. Like to + an action: to drink.",
        te: "like తర్వాత వస్తువు అయితే some tea; పని అయితే to drink.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Offer a guest some water politely.", te: "అతిథికి మర్యాదగా నీళ్ళు ఇవ్వజూపండి." },
      options: ["Will you like some water?", "Would you like some water?", "Do you like some water?"],
      answer: 1,
      why: {
        en: "Telugu says కావాలా?, but an English offer starts with Would you like: Would you like some water?",
        te: "తెలుగులో 'కావాలా?' అంటాం; ఇంగ్లీష్‌లో ఇవ్వజూపడానికి Would you like: Would you like some water?",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I ___ like some tea, please.",
      te: "నాకు కొంచెం టీ కావాలి.",
      options: ["would", "will", "am"],
      answer: 0,
      why: {
        en: "To ask politely, use would, not will or am: I would like some tea.",
        te: "మర్యాదగా అడగడానికి would వాడాలి, will లేదా am కాదు: I would like some tea.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your host asks: Would you like some coffee? You don't want it.",
        te: "ఇంటివారు అడుగుతున్నారు: Would you like some coffee? మీకు వద్దు.",
      },
      options: ["No, thank you.", "No, I don't.", "No, I don't want."],
      answer: 0,
      why: {
        en: "Refuse an offer kindly by adding thank you: No, thank you.",
        te: "ఇచ్చేది వద్దనేటప్పుడు thank you కలిపి మర్యాదగా చెప్పాలి: No, thank you.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Will you like some snacks?",
      wrongIndex: 0,
      fix: "Would you like some snacks?",
      why: {
        en: "An offer uses would, never will: Would you like some snacks?",
        te: "ఇవ్వజూపడానికి will కాదు, would: Would you like some snacks?",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "At a hotel, ask for two dosas politely.",
        te: "హోటల్‌లో మర్యాదగా రెండు దోసెలు అడగండి.",
      },
      expected: ["I'd like two dosas, please.", "I would like two dosas, please.", "Two dosas, please."],
      options: ["I liking two dosas, please.", "I'd like two dosas, please.", "I will like two dosas, please."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A guest comes home. Offer some tea.",
        te: "ఇంటికి అతిథి వచ్చారు. కొంచెం టీ ఇవ్వజూపండి.",
      },
      expected: ["Would you like some tea?", "Would you like tea?"],
      options: ["Will you like some tea?", "Would you like some tea?", "Would you like to tea?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Offering snacks to a guest", te: "అతిథికి స్నాక్స్ ఇవ్వడం" },
    scene: {
      en: "Narayana visits your home. Offer him something to drink and eat.",
      te: "నారాయణ గారు మీ ఇంటికి వచ్చారు. ఆయనకు తాగడానికి, తినడానికి ఏదైనా ఇవ్వజూపండి.",
    },
    partner: { en: "Narayana (a guest)", te: "నారాయణ గారు (అతిథి)" },
    voice: "b",
    skills: [{ id: "offer", label: { en: "Would you like …?", te: "Would you like …? వాడకం" } }],
    turns: [
      {
        partner: "Hello! Sorry, I am a little late.",
        te: "నమస్తే! sorry అండీ, కొంచెం ఆలస్యం అయింది.",
        hint: { en: "Tell him it is fine, and offer some water.", te: "పర్వాలేదని చెప్పి, నీళ్ళు ఇవ్వజూపండి." },
        replies: [
          { say: "No problem. Would you like some water?", good: true, skill: "offer" },
          { say: "No problem. Will you like some water?", good: false, skill: "offer" },
          {
            say: "Yes, you are very late.",
            good: false,
            react: { en: "Sorry, sorry. The bus was late.", te: "sorry అండీ. బస్సు ఆలస్యంగా వచ్చింది." },
          },
        ],
      },
      {
        partner: "Yes, please. It is very hot.",
        te: "అవును, ఇవ్వండి. చాలా వేడిగా ఉంది.",
        hint: { en: "Ask if he wants tea or juice.", te: "టీ కావాలా, జ్యూస్ కావాలా అని అడగండి." },
        replies: [
          { say: "Would you like tea or juice?", good: true, skill: "offer" },
          { say: "You would like tea or juice?", good: false, skill: "offer", fixIt: "question" },
        ],
      },
      {
        partner: "I would like some juice, please.",
        te: "నాకు కొంచెం జ్యూస్ కావాలి.",
        hint: { en: "Offer him something to eat too.", te: "తినడానికి కూడా ఏదైనా ఇవ్వజూపండి." },
        replies: [
          { say: "Would you like some snacks?", good: true, skill: "offer" },
          { say: "Would you like to snacks?", good: false, skill: "offer" },
        ],
      },
      {
        partner: "No, thank you. Just juice.",
        te: "వద్దు, థాంక్యూ. జ్యూస్ చాలు.",
        hint: { en: "Say okay, and that you will bring it soon.", te: "సరే అని, వెంటనే తెస్తానని చెప్పండి." },
        replies: [
          { say: "Okay, one minute.", good: true },
          { say: "Okay, one minutes.", good: false, fixIt: "plural" },
        ],
      },
    ],
  },
};
