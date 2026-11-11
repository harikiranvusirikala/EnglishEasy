import type { Lesson } from "../../types";

/** Week 14, Day 1 (CURRICULUM §4): Excuse me, where is …? — stopping someone politely and asking the way. */
export const day: Lesson = {
  id: "excuse-me-where-is",
  kind: "lesson",
  title: { en: "Excuse Me, Where Is …?", te: "… ఎక్కడ ఉంది?" },
  subtitle: "Excuse me, where is …?",
  summary: {
    en: "Learn to stop someone politely and ask the way: Excuse me, where is the post office? Is it far from here?",
    te: "ఎవరినైనా మర్యాదగా ఆపి దారి అడగడం నేర్చుకుందాం: Excuse me, where is the post office? Is it far from here?",
  },
  seo: {
    title: "Asking the Way in English for Telugu Speakers",
    description:
      "Say Excuse me, where is the post office? and Is it far from here? Simple lessons for Telugu speakers on asking the way politely.",
  },
  pattern: [
    { text: "Excuse me, where", role: "what" },
    { text: "is", role: "action" },
    { text: "the post office?", role: "who" },
  ],
  core: [
    { en: "Excuse me, where is the post office?", te: "ఏమండీ, పోస్ట్ ఆఫీస్ ఎక్కడ ఉంది?", extra: ["are"] },
    { en: "Can you tell me the way to the station?", te: "స్టేషన్‌కి దారి చెప్తారా?", extra: ["say"] },
    { en: "Is it far from here?", te: "ఇక్కడి నుంచి దూరమా?", extra: ["much"] },
    { en: "Is there a bank nearby?", te: "దగ్గర్లో ఏదైనా బ్యాంక్ ఉందా?", extra: ["are"] },
    { en: "It's about ten minutes on foot.", te: "నడిచి వెళ్తే సుమారు పది నిమిషాలు.", extra: ["by"] },
    { en: "Sorry, I am new here.", te: "Sorry అండీ, నేను ఇక్కడికి కొత్త.", extra: ["is"] },
    { en: "Which way is the temple?", te: "గుడికి ఏ వైపు వెళ్ళాలి?", extra: ["what"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask a shopkeeper today the way to one place. Start with Excuse me.",
    te: "ఈ రోజు షాపులో ఉన్నవారిని ఏదైనా ఒక చోటికి దారి అడగండి. Excuse me తో మొదలుపెట్టండి.",
  },
  words: [
    { en: "excuse me", te: "ఏమండీ (ఎవరినైనా ఆపి అడిగేటప్పుడు)" },
    { en: "post office", te: "పోస్ట్ ఆఫీస్" },
    { en: "way", te: "దారి" },
    { en: "nearby", te: "దగ్గర్లో" },
    { en: "on foot", te: "నడిచి" },
  ],
  grammar: ["question-words", "there-is-are", "politeness-softening"],
  topics: ["directions"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking the way politely", te: "మర్యాదగా దారి అడగడం" },
      body: {
        en: "First stop the person with Excuse me. Then ask Where is …? or Can you tell me the way to …? At the end, say Thank you.",
        te: "ముందు Excuse me అని ఆపండి. తర్వాత Where is …? లేదా Can you tell me the way to …? అని అడగండి. చివర్లో Thank you అనండి.",
      },
      bridge: {
        te: ["ఏమండీ,", "పోస్ట్ ఆఫీస్", "ఎక్కడ ఉంది?"],
        en: [
          { text: "Excuse me, where", role: "what" },
          { text: "is", role: "action" },
          { text: "the post office?", role: "who" },
        ],
      },
      examples: [
        { en: "Excuse me, where is the post office?", te: "ఏమండీ, పోస్ట్ ఆఫీస్ ఎక్కడ ఉంది?" },
        { en: "Can you tell me the way to the station?", te: "స్టేషన్‌కి దారి చెప్తారా?" },
        { en: "Is it far from here?", te: "ఇక్కడి నుంచి దూరమా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which question when", te: "ఏ ప్రశ్న ఎప్పుడు" },
      items: [
        {
          form: "Where is …?",
          useFor: { en: "You know the name of the place.", te: "చోటు పేరు తెలిసినప్పుడు." },
          example: { en: "Excuse me, where is the post office?", te: "ఏమండీ, పోస్ట్ ఆఫీస్ ఎక్కడ ఉంది?" },
        },
        {
          form: "Is there a … nearby?",
          useFor: { en: "Any one will do: any bank, any shop.", te: "ఏదో ఒకటి చాలు అనుకున్నప్పుడు: ఏదైనా బ్యాంక్, ఏదైనా షాపు." },
          example: { en: "Is there a bank nearby?", te: "దగ్గర్లో ఏదైనా బ్యాంక్ ఉందా?" },
        },
        {
          form: "Is it far?",
          useFor: { en: "To know the distance.", te: "ఎంత దూరమో తెలుసుకోవడానికి." },
          example: { en: "Is it far from here?", te: "ఇక్కడి నుంచి దూరమా?" },
        },
        {
          form: "on foot",
          useFor: { en: "Walking, not by bus or auto.", te: "బస్సు, ఆటో కాకుండా నడిచి." },
          example: { en: "It's about ten minutes on foot.", te: "నడిచి వెళ్తే సుమారు పది నిమిషాలు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "Where the post office?",
      right: "Where is the post office?",
      why: {
        en: "Telugu puts ఉంది at the end, but English needs is right after where: Where is the post office?",
        te: "తెలుగులో 'ఉంది' చివర వస్తుంది; ఇంగ్లీష్‌లో is ని where తర్వాతే చెప్పాలి: Where is the post office?",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Kindly tell me the way to the station.",
      right: "Can you tell me the way to the station?",
      why: {
        en: "Kindly sounds like an office letter; when you speak, ask with Can you: Can you tell me the way to the station?",
        te: "Kindly ఆఫీసు ఉత్తరాల్లో వాడే మాట; మాట్లాడేటప్పుడు Can you తో అడగండి: Can you tell me the way to the station?",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "You want to stop a stranger and ask. Choose the best way.", te: "తెలియని వారిని ఆపి అడగాలి. సరైన మాట ఎంచుకోండి." },
      options: ["Excuse me, where is the bank?", "Hey, where is bank?", "Excuse me, where the bank is?"],
      answer: 0,
      why: {
        en: "Excuse me stops someone politely, and is comes before the place.",
        te: "Excuse me మర్యాదగా ఆపుతుంది; is చోటు పేరుకి ముందు వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Is it far ___ here?",
      te: "ఇక్కడి నుంచి దూరమా?",
      options: ["from", "to", "of"],
      answer: 0,
      why: {
        en: "Distance is counted from a place; Telugu నుంచి is from.",
        te: "దూరం ఒక చోటు నుంచి లెక్కిస్తాం; 'నుంచి' ఇంగ్లీష్‌లో from.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Someone says: It's ten minutes on foot. What does it mean?",
        te: "ఎవరో It's ten minutes on foot అన్నారు. అర్థం ఏంటి?",
      },
      options: ["Walking, it takes ten minutes.", "By bus, it takes ten minutes.", "It is ten kilometres away."],
      answer: 0,
      why: {
        en: "On foot means walking, without a bus or an auto.",
        te: "on foot అంటే నడిచి; బస్సు, ఆటో లేకుండా.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Is it much far from here?",
      wrongIndex: 2,
      fix: "Is it far from here?",
      why: {
        en: "Far needs no much; Telugu ఎంత దూరం makes us add it.",
        te: "far కి much అక్కర్లేదు; 'ఎంత దూరం' వల్ల ఈ తప్పు వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Stop a stranger politely and ask where the post office is.",
        te: "తెలియని వారిని మర్యాదగా ఆపి, పోస్ట్ ఆఫీస్ ఎక్కడో అడగండి.",
      },
      expected: ["Excuse me, where is the post office?", "Excuse me, where's the post office?"],
      options: ["Excuse me, where is the post office?", "Excuse me, where post office?", "Excuse me, where the post office is?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "You need a bank. Ask if there is one nearby.",
        te: "మీకు బ్యాంక్ కావాలి. దగ్గర్లో ఏదైనా ఉందా అని అడగండి.",
      },
      expected: ["Is there a bank nearby?", "Is there a bank near here?", "Excuse me, is there a bank nearby?"],
      options: ["Is there a bank nearby?", "Is there bank nearby?", "Bank is there nearby?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Asking for the post office", te: "పోస్ట్ ఆఫీస్ ఎక్కడ?" },
    scene: {
      en: "You are in a new part of Guntur and need the post office. Narayana runs a tea stall.",
      te: "మీరు గుంటూరులో కొత్త ప్రాంతంలో ఉన్నారు, పోస్ట్ ఆఫీస్‌కి వెళ్ళాలి. నారాయణ గారు టీ కొట్టు నడుపుతున్నారు.",
    },
    partner: { en: "Narayana (tea stall owner)", te: "నారాయణ (టీ కొట్టు యజమాని)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "Asking the way", te: "దారి అడగడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Yes? Tea for you?",
        te: "చెప్పండి? టీ కావాలా?",
        hint: { en: "Say no politely, then ask the way to the post office.", te: "మర్యాదగా వద్దని చెప్పి, పోస్ట్ ఆఫీస్‌కి దారి అడగండి." },
        replies: [
          { say: "No, thank you. Where is the post office?", good: true, skill: "ask" },
          { say: "No. Where post office?", good: false, skill: "ask", fixIt: "be" },
          {
            say: "No tea. Just tell me the post office.",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay. No need to shout.", te: "సరే, సరే. గట్టిగా అరవక్కర్లేదండీ." },
          },
        ],
      },
      {
        partner: "The post office? It's on Main Road.",
        te: "పోస్ట్ ఆఫీసా? మెయిన్ రోడ్ మీద ఉంది.",
        hint: { en: "Ask if it is a long way from here.", te: "ఇక్కడి నుంచి దూరమా అని అడగండి." },
        replies: [
          { say: "Is it far from here?", good: true, skill: "ask" },
          { say: "Is it much far from here?", good: false, skill: "ask" },
        ],
      },
      {
        partner: "No, only ten minutes on foot.",
        te: "లేదండీ, నడిచి పది నిమిషాలే.",
        hint: { en: "Ask him politely how to get there.", te: "అక్కడికి ఎలా వెళ్ళాలో మర్యాదగా అడగండి." },
        replies: [
          { say: "Can you tell me the way, please?", good: true, skill: "polite" },
          { say: "Kindly tell me the way.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Go straight. It's next to the bank.",
        te: "నేరుగా వెళ్ళండి. బ్యాంక్ పక్కనే ఉంది.",
        hint: { en: "Thank him for his help.", te: "ఆయన సహాయానికి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you so much for your help.", good: true, skill: "polite" },
          { say: "Thank you. I am knowing the way now.", good: false, skill: "polite", fixIt: "state-ing" },
        ],
      },
    ],
  },
};
