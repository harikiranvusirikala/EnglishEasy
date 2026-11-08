import type { Lesson } from "../../types";

/** Week 9, Day 3 (CURRICULUM §3): common irregular past verbs — went, ate, saw, bought, came, gave, took. */
export const day: Lesson = {
  id: "irregular-past-verbs",
  kind: "lesson",
  title: { en: "Went, Ate, Saw", te: "మారిపోయే verbs" },
  subtitle: "went / ate / saw / bought",
  summary: {
    en: "Learn the common action words that change in the past: went, ate, saw, bought, came, gave, took.",
    te: "గతంలో మారిపోయే సాధారణ పని పదాలు నేర్చుకుందాం: went, ate, saw, bought, came, gave, took.",
  },
  seo: {
    title: "Irregular Past Verbs in English for Telugu Speakers: Went, Ate, Saw",
    description:
      "Say I saw an old friend and She bought a saree in English. Simple lessons for Telugu speakers on irregular past verbs, with Telugu explanations.",
  },
  pattern: [
    { text: "She", role: "who" },
    { text: "bought", role: "action" },
    { text: "a saree", role: "what" },
  ],
  core: [
    { en: "I saw an old friend.", te: "నేను ఒక పాత స్నేహితుడిని చూశాను.", extra: ["see"] },
    { en: "She bought a saree.", te: "ఆమె ఒక చీర కొన్నది.", extra: ["buyed"] },
    { en: "We ate dosa for breakfast.", te: "మేము టిఫిన్‌కి దోసె తిన్నాం.", extra: ["eated"] },
    { en: "He came home late.", te: "అతను ఆలస్యంగా ఇంటికి వచ్చాడు.", extra: ["comed"] },
    { en: "I went to Vijayawada.", te: "నేను విజయవాడ వెళ్ళాను.", extra: ["goed"] },
    { en: "They gave me a gift.", te: "వాళ్ళు నాకు ఒక బహుమతి ఇచ్చారు.", extra: ["gived"] },
    { en: "I took the bus.", te: "నేను బస్‌లో వెళ్ళాను.", extra: ["taked"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Tell someone where you went and what you ate yesterday: I went … I ate …",
    te: "నిన్న ఎక్కడికి వెళ్ళారో, ఏం తిన్నారో ఎవరికైనా చెప్పండి: I went … I ate …",
  },
  words: [
    { en: "saw", te: "చూశాను (see గతం)" },
    { en: "bought", te: "కొన్నాను (buy గతం)" },
    { en: "took", te: "తీసుకున్నాను, ఎక్కాను (take గతం)" },
    { en: "gave", te: "ఇచ్చాను (give గతం)" },
    { en: "gift", te: "బహుమతి" },
  ],
  grammar: ["past-simple"],
  topics: ["shopping", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Some words change", te: "కొన్ని పదాలు మారిపోతాయి" },
      body: {
        en: "Some common action words don't add -ed. They change: go becomes went, eat becomes ate, see becomes saw, buy becomes bought. Learn them by heart; you use them every day.",
        te: "కొన్ని సాధారణ పని పదాలకు -ed చేరదు, అవి మారిపోతాయి: go → went, eat → ate, see → saw, buy → bought. వీటిని గుర్తుపెట్టుకోండి; రోజూ వాడతాం.",
      },
      bridge: {
        te: ["ఆమె", "ఒక చీర", "కొన్నది"],
        en: [
          { text: "She", role: "who" },
          { text: "bought", role: "action" },
          { text: "a saree", role: "what" },
        ],
      },
      examples: [
        { en: "I went to Vijayawada.", te: "నేను విజయవాడ వెళ్ళాను." },
        { en: "I saw an old friend.", te: "నేను ఒక పాత స్నేహితుడిని చూశాను." },
        { en: "She bought a saree.", te: "ఆమె ఒక చీర కొన్నది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Words to learn by heart", te: "గుర్తుపెట్టుకోవాల్సిన పదాలు" },
      items: [
        {
          form: "go → went, come → came",
          useFor: { en: "Going and coming.", te: "వెళ్ళడం, రావడం." },
          example: { en: "He came home late.", te: "అతను ఆలస్యంగా ఇంటికి వచ్చాడు." },
        },
        {
          form: "eat → ate, see → saw",
          useFor: { en: "Eating and seeing.", te: "తినడం, చూడటం." },
          example: { en: "We ate dosa for breakfast.", te: "మేము టిఫిన్‌కి దోసె తిన్నాం." },
        },
        {
          form: "buy → bought, give → gave, take → took",
          useFor: { en: "Buying, giving and taking.", te: "కొనడం, ఇవ్వడం, తీసుకోవడం." },
          example: { en: "They gave me a gift.", te: "వాళ్ళు నాకు ఒక బహుమతి ఇచ్చారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I goed to Vijayawada.",
      right: "I went to Vijayawada.",
      why: {
        en: "Go changes to went. Never goed.",
        te: "go → went. goed అనకూడదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "She buyed a saree.",
      right: "She bought a saree.",
      why: {
        en: "Buy changes to bought.",
        te: "buy గతం bought.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["We eated dosa.", "We ate dosa.", "We eat dosa yesterday."],
      answer: 1,
      why: {
        en: "Eat changes to ate.",
        te: "eat గతం ate.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I ___ the bus.",
      te: "నేను బస్‌లో వెళ్ళాను.",
      options: ["took", "taked", "take"],
      answer: 0,
      why: {
        en: "Take changes to took.",
        te: "take గతం took.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "What is the past of see?", te: "see కి గతం ఏమిటి?" },
      options: ["seed", "saw", "seeing"],
      answer: 1,
      why: {
        en: "See changes to saw.",
        te: "see గతం saw.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "He comed home late.",
      wrongIndex: 1,
      fix: "He came home late.",
      why: {
        en: "Come changes to came.",
        te: "come గతం came.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell a friend you saw an old friend at the market.",
        te: "మార్కెట్‌లో ఒక పాత స్నేహితుడిని చూశానని మీ స్నేహితులకు చెప్పండి.",
      },
      expected: ["I saw an old friend.", "I saw my old friend."],
      options: ["I seed an old friend.", "I saw an old friend.", "I see an old friend yesterday."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say that your sister bought a saree.",
        te: "మీ చెల్లెలు ఒక చీర కొన్నదని చెప్పండి.",
      },
      expected: ["My sister bought a saree.", "She bought a saree."],
      options: ["My sister buyed a saree.", "My sister bought a saree.", "My sister buy a saree."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A shopping trip", te: "షాపింగ్‌కి వెళ్ళడం" },
    scene: {
      en: "Your friend Anitha asks about your shopping trip yesterday.",
      te: "నిన్న మీరు షాపింగ్‌కి వెళ్ళిన దాని గురించి మీ స్నేహితురాలు అనిత అడుగుతోంది.",
    },
    partner: { en: "Anitha (a friend)", te: "అనిత (స్నేహితురాలు)" },
    skills: [{ id: "past", label: { en: "went / bought / saw", te: "went / bought / saw వాడకం" } }],
    turns: [
      {
        partner: "Where did you go yesterday?",
        te: "నిన్న ఎక్కడికి వెళ్ళారు?",
        hint: { en: "Say: I went to the saree shop.", te: "ఇలా చెప్పండి: I went to the saree shop." },
        replies: [
          { say: "I went to the saree shop.", good: true, skill: "past" },
          { say: "I goed to the saree shop.", good: false, skill: "past" },
        ],
      },
      {
        partner: "Did you buy anything?",
        te: "ఏమైనా కొన్నారా?",
        hint: { en: "Say: Yes, I bought two sarees.", te: "ఇలా చెప్పండి: Yes, I bought two sarees." },
        replies: [
          { say: "Yes, I bought two sarees.", good: true, skill: "past" },
          { say: "Yes, I buyed two sarees.", good: false, skill: "past" },
        ],
      },
      {
        partner: "Who did you see there?",
        te: "అక్కడ ఎవరిని చూశారు?",
        hint: { en: "Say: I saw our old teacher!", te: "ఇలా చెప్పండి: I saw our old teacher!" },
        replies: [
          { say: "I saw our old teacher!", good: true, skill: "past" },
          { say: "I seed our old teacher!", good: false, skill: "past" },
        ],
      },
      {
        partner: "How did you come back?",
        te: "ఎలా తిరిగి వచ్చారు?",
        hint: { en: "Say: I took an auto.", te: "ఇలా చెప్పండి: I took an auto." },
        replies: [
          { say: "I took an auto.", good: true, skill: "past" },
          { say: "I taked an auto.", good: false, skill: "past" },
        ],
      },
    ],
  },
};
