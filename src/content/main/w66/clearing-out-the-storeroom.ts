import type { Lesson } from "../../types";

/** Week 66, Day 5 (CURRICULUM §5): phrasal verbs together — clear out, give away, take out, set up. */
export const day: Lesson = {
  id: "clearing-out-the-storeroom",
  kind: "lesson",
  title: { en: "Clearing Out the Storeroom", te: "స్టోర్‌రూమ్ ఖాళీ చేయడం" },
  subtitle: "clear out, give away, take out, set up",
  summary: {
    en: "Learn to plan a big clean-up with a friend: Let's clear out the storeroom before Ugadi. We can give away the old clothes.",
    te: "స్నేహితులతో కలిసి పెద్ద శుభ్రత ప్లాన్ చేయడం నేర్చుకుందాం: Let's clear out the storeroom before Ugadi. We can give away the old clothes.",
  },
  seo: {
    title: "Clear Out and Give Away in English for Telugu Speakers",
    description:
      "Say Let's clear out the storeroom before Ugadi and We can give away the old clothes. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "Let's", role: "who" },
    { text: "clear out", role: "action" },
    { text: "the storeroom", role: "what" },
    { text: "before Ugadi", role: "when" },
  ],
  core: [
    { en: "Let's clear out the storeroom before Ugadi.", te: "ఉగాది కంటే ముందు స్టోర్‌రూమ్ ఖాళీ చేద్దాం.", extra: ["Let"] },
    { en: "We can give away the old clothes.", te: "పాత బట్టలు ఎవరికైనా ఇచ్చేయొచ్చు.", extra: ["giving"] },
    { en: "Please take out the empty boxes first.", te: "ముందు ఖాళీ డబ్బాలు బయటికి తీయండి.", extra: ["box"] },
    { en: "Shall we set up the new shelf here?", te: "కొత్త షెల్ఫ్ ఇక్కడ పెడదామా?", extra: ["setting"] },
    { en: "The old fan doesn't work. Let's throw it away.", te: "పాత ఫ్యాన్ పనిచేయట్లేదు. దాన్ని పారేద్దాం.", extra: ["don't"] },
    { en: "My neighbour's son will help us take out the heavy things.", te: "బరువైన సామాన్లు బయటికి తీయడానికి పక్కింటివారి అబ్బాయి సాయం చేస్తారు.", extra: ["thing"] },
    { en: "We must return the ladder to Gopal today.", te: "ఈ రోజే నిచ్చెన గోపాల్ గారికి తిరిగి ఇచ్చేయాలి.", extra: ["back"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Choose one shelf or drawer at home. Clear it out, and put one thing aside to give away.",
    te: "ఇంట్లో ఒక షెల్ఫ్ లేదా సొరుగు ఎంచుకోండి. దాన్ని ఖాళీ చేసి, ఎవరికైనా ఇవ్వడానికి ఒక వస్తువు పక్కన పెట్టండి.",
  },
  words: [
    { en: "clear out", te: "ఖాళీ చేయడం" },
    { en: "give away", te: "ఎవరికైనా ఇచ్చేయడం" },
    { en: "take out", te: "బయటికి తీయడం" },
    { en: "set up", te: "అమర్చడం, బిగించడం" },
    { en: "storeroom", te: "స్టోర్‌రూమ్, సామాన్ల గది" },
  ],
  grammar: ["phrasal-verbs", "prepositions", "articles"],
  topics: ["home", "festivals", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Clearing out together", te: "కలిసి ఖాళీ చేయడం" },
      body: {
        en: "Clear out means empty a room and remove what you don't need. Give away means give it free to someone who needs it.",
        te: "clear out అంటే గదిని ఖాళీ చేసి, అక్కర్లేనివి తీసేయడం. give away అంటే అవసరమైనవాళ్ళకి ఉచితంగా ఇచ్చేయడం.",
      },
      bridge: {
        te: ["ఉగాది కంటే ముందు", "స్టోర్‌రూమ్", "ఖాళీ చేద్దాం"],
        en: [
          { text: "Let's", role: "who" },
          { text: "clear out", role: "action" },
          { text: "the storeroom", role: "what" },
          { text: "before Ugadi", role: "when" },
        ],
      },
      examples: [
        { en: "Let's clear out the storeroom before Ugadi.", te: "ఉగాది కంటే ముందు స్టోర్‌రూమ్ ఖాళీ చేద్దాం." },
        { en: "We can give away the old clothes.", te: "పాత బట్టలు ఎవరికైనా ఇచ్చేయొచ్చు." },
        { en: "My neighbour's son will help us take out the heavy things.", te: "బరువైన సామాన్లు బయటికి తీయడానికి పక్కింటివారి అబ్బాయి సాయం చేస్తారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Out, away or up?", te: "out, away, up: ఏది ఎప్పుడు" },
      items: [
        {
          form: "clear out",
          useFor: { en: "Empty a room or a cupboard.", te: "గదిని, అలమారాని ఖాళీ చేయడానికి." },
          example: { en: "Let's clear out the storeroom before Ugadi.", te: "ఉగాది కంటే ముందు స్టోర్‌రూమ్ ఖాళీ చేద్దాం." },
        },
        {
          form: "give away",
          useFor: { en: "Give things free to people who need them.", te: "అవసరమైనవాళ్ళకి ఉచితంగా ఇవ్వడానికి." },
          example: { en: "We can give away the old clothes.", te: "పాత బట్టలు ఎవరికైనా ఇచ్చేయొచ్చు." },
        },
        {
          form: "take out",
          useFor: { en: "Carry something out of a room or a box.", te: "గది నుంచి, డబ్బా నుంచి బయటికి తీయడానికి." },
          example: { en: "Please take out the empty boxes first.", te: "ముందు ఖాళీ డబ్బాలు బయటికి తీయండి." },
        },
        {
          form: "set up",
          useFor: { en: "Put something new in place, ready to use.", te: "కొత్త వస్తువుని వాడటానికి సిద్ధంగా అమర్చడానికి." },
          example: { en: "Shall we set up the new shelf here?", te: "కొత్త షెల్ఫ్ ఇక్కడ పెడదామా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Please return back the ladder today.",
      right: "Please return the ladder today.",
      why: {
        en: "Return already means give back, so back is one word too many.",
        te: "return అంటేనే తిరిగి ఇవ్వడం; back అదనంగా అక్కర్లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "The fan is very old. Let's throw away.",
      right: "The fan is very old. Let's throw it away.",
      why: {
        en: "Throw away needs the thing: say it or the fan. Telugu can drop it, but English can't.",
        te: "throw away కి వస్తువు కావాలి: it లేదా the fan. తెలుగులో వదిలేయొచ్చు, ఇంగ్లీష్‌లో కుదరదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "You and your friend have a pile of old clothes. Ask her where to put them.",
        te: "మీ దగ్గర, మీ స్నేహితురాలి దగ్గర పాత బట్టల కుప్ప ఉంది. వాటిని ఎక్కడ పెడదామని ఆవిడని అడగండి.",
      },
      options: ["Where shall we put the old clothes?", "Where we shall put the old clothes?", "Where shall we put the old cloths?"],
      answer: 0,
      why: {
        en: "In a question, shall comes before we. Clothes are what we wear; cloths are pieces of cloth.",
        te: "ప్రశ్నలో shall, we కంటే ముందు వస్తుంది. వేసుకునేవి clothes; cloths అంటే గుడ్డ ముక్కలు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Ramana ___ away his old books to the school every year.",
      te: "రమణ గారు ప్రతి సంవత్సరం తన పాత పుస్తకాలు బడికి ఇచ్చేస్తారు.",
      options: ["gives", "give", "giving"],
      answer: 0,
      why: {
        en: "One person doing something every year takes s on the verb, like he or she goes.",
        te: "ఒక్కరు ప్రతి సంవత్సరం చేసే పని: verb కి s వస్తుంది, he goes లాగా.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Sunrise Colony Welfare Association",
      lines: [
        "Dear residents,",
        "Many of us clear out our homes before Ugadi.",
        "Please don't throw away old clothes, books or steel vessels.",
        "We will give them away to people who need them.",
        "Volunteers will collect them this Sunday, from 9 am to 12 noon.",
        "Please keep them in a bag outside your gate.",
        "Give only clean clothes, please.",
        "Old fans and mixers can go to the colony office.",
        "Thank you. Secretary, Sunrise Colony",
      ],
      questions: [
        {
          prompt: { en: "When will the volunteers come?", te: "వాలంటీర్లు ఎప్పుడు వస్తారు?" },
          options: ["This Sunday morning", "On Ugadi day", "Every evening"],
          answer: 0,
          why: {
            en: "The fifth line gives the day and the time, from nine till noon.",
            te: "ఐదో లైన్‌లో రోజు, టైమ్ ఉన్నాయి: తొమ్మిది నుంచి మధ్యాహ్నం పన్నెండు దాకా.",
          },
        },
        {
          prompt: { en: "Where should you keep the things?", te: "సామాన్లు ఎక్కడ పెట్టాలి?" },
          options: ["In a bag outside your gate", "At the colony office", "In the dustbin"],
          answer: 0,
          why: {
            en: "The sixth line asks residents to leave a bag at their own gate.",
            te: "ఆరో లైన్‌లో, సంచిలో పెట్టి మీ గేటు బయట ఉంచమని ఉంది.",
          },
        },
        {
          prompt: { en: "What can go to the colony office?", te: "కాలనీ ఆఫీస్‌కి ఏం తీసుకెళ్ళొచ్చు?" },
          options: ["Old fans and mixers", "Old clothes", "Old books"],
          answer: 0,
          why: {
            en: "The eighth line says machines go to the office, not to the volunteers.",
            te: "ఎనిమిదో లైన్‌లో, మెషిన్లు వాలంటీర్లకి కాదు, ఆఫీస్‌కి వెళ్తాయని ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Let's clear out storeroom on Sunday.",
      wrongIndex: 3,
      fix: "Let's clear out the storeroom on Sunday.",
      why: {
        en: "Your own one storeroom takes the; Telugu has no word like the.",
        te: "మీ ఇంట్లో ఉన్న ఒక్క స్టోర్‌రూమ్ కాబట్టి the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your friend borrowed your ladder last week. Ask politely for it today.",
        te: "పోయిన వారం మీ స్నేహితులు మీ నిచ్చెన తీసుకెళ్ళారు. ఈ రోజు ఇవ్వమని మర్యాదగా అడగండి.",
      },
      expected: [
        "Could you return the ladder today, please?",
        "Could you bring the ladder back today?",
        "Can you give the ladder back today, please?",
      ],
      options: ["Could you return the ladder today, please?", "Could you return back the ladder today, please?", "Give my ladder back. Today."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You have many old clothes in good condition. Tell your friend your plan.",
        te: "మీ దగ్గర బాగున్న పాత బట్టలు చాలా ఉన్నాయి. మీ ప్లాన్ ఏంటో స్నేహితులకి చెప్పండి.",
      },
      expected: ["Let's give away the old clothes.", "We can give away the old clothes.", "Let's give the old clothes away."],
      options: ["Let's give away the old clothes.", "Let's giving away the old clothes.", "Let's throw away the good clothes."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Festival cleaning", te: "పండగ శుభ్రత" },
    scene: {
      en: "Ugadi is next week. Your friend Kamala has come to help you clean the house.",
      te: "వచ్చే వారం ఉగాది. ఇల్లు శుభ్రం చేయడానికి మీ స్నేహితురాలు కమల గారు సాయానికి వచ్చారు.",
    },
    partner: { en: "Kamala (your friend)", te: "కమల (మీ స్నేహితురాలు)" },
    skills: [
      { id: "plan", label: { en: "Planning the work", te: "పని ప్లాన్ చేయడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hi! I'm here to help. Where shall we start?",
        te: "హాయ్! సాయం చేయడానికి వచ్చాను. ఎక్కడ నుంచి మొదలుపెడదాం?",
        hint: { en: "Thank her for coming, and suggest the storeroom first.", te: "వచ్చినందుకు థాంక్స్ చెప్పి, ముందు స్టోర్‌రూమ్ అని సూచించండి." },
        replies: [
          { say: "Thank you for coming! Let's clear out the storeroom first.", good: true, skill: "plan" },
          { say: "Thank you for coming! Let's clear out storeroom first.", good: false, skill: "plan", fixIt: "article" },
        ],
      },
      {
        partner: "There are so many old clothes here. What shall we do with them?",
        te: "ఇక్కడ చాలా పాత బట్టలు ఉన్నాయి. వీటిని ఏం చేద్దాం?",
        hint: { en: "Say you can give them free to people who need them.", te: "అవసరమైనవాళ్ళకి ఉచితంగా ఇచ్చేయొచ్చని చెప్పండి." },
        replies: [
          { say: "We can give them away to people who need them.", good: true, skill: "plan" },
          { say: "We can give away them to people who need them.", good: false, skill: "plan" },
        ],
      },
      {
        partner: "Good idea. And this broken chair?",
        te: "మంచి ఆలోచన. మరి ఈ విరిగిన కుర్చీ?",
        hint: { en: "Ask her to help you carry it outside.", te: "దాన్ని బయటికి తీసుకెళ్ళడానికి సాయం చేయమని ఆవిడని అడగండి." },
        replies: [
          { say: "Could you help me take it out, please?", good: true, skill: "plan" },
          {
            say: "You take it out. It's too heavy for me.",
            good: false,
            skill: "polite",
            react: { en: "Too heavy for you, but not for me? Let's lift it together.", te: "మీకు బరువు, నాకు కాదా? ఇద్దరం కలిసి ఎత్తుదాం." },
          },
        ],
      },
      {
        partner: "Done! The room looks so big now.",
        te: "అయిపోయింది! ఇప్పుడు గది చాలా పెద్దగా కనిపిస్తోంది.",
        hint: { en: "Agree happily, and offer her some tea.", te: "సంతోషంగా ఒప్పుకుని, ఆవిడకి టీ ఇవ్వనా అని అడగండి." },
        replies: [
          { say: "It looks wonderful! Would you like some tea?", good: true, skill: "polite" },
          { say: "It looks wonderful! You want tea?", good: false, skill: "polite", fixIt: "question" },
        ],
      },
    ],
  },
};
