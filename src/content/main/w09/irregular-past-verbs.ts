import type { Lesson } from "../../types";

/** Week 9, Day 3 (CURRICULUM §3): common irregular past verbs — went, ate, saw, bought, came, gave, took. */
export const day: Lesson = {
  id: "irregular-past-verbs",
  kind: "lesson",
  title: { en: "Went, Ate, Saw", te: "మారిపోయే verbs" },
  subtitle: "went / ate / saw / bought",
  summary: {
    en: "Learn the common action words that change in the past: went, ate, saw, bought, came, gave, took.",
    te: "గతంలో రూపం మారిపోయే, రోజూ వాడే verbs నేర్చుకుందాం: went, ate, saw, bought, came, gave, took.",
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
    { en: "She bought a saree.", te: "ఆవిడ ఒక చీర కొన్నారు.", extra: ["buyed"] },
    { en: "We ate dosa for breakfast.", te: "మేము టిఫిన్‌కి దోసె తిన్నాం.", extra: ["eated"] },
    { en: "He came home late.", te: "ఆయన ఇంటికి ఆలస్యంగా వచ్చారు.", extra: ["comed"] },
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
        te: "కొన్ని మామూలు verbs కి -ed చేరదు, అవి మారిపోతాయి: go → went, eat → ate, see → saw, buy → bought. వీటిని గుర్తుపెట్టుకోండి; రోజూ వాడతాం.",
      },
      bridge: {
        te: ["ఆవిడ", "ఒక చీర", "కొన్నారు"],
        en: [
          { text: "She", role: "who" },
          { text: "bought", role: "action" },
          { text: "a saree", role: "what" },
        ],
      },
      examples: [
        { en: "I went to Vijayawada.", te: "నేను విజయవాడ వెళ్ళాను." },
        { en: "I saw an old friend.", te: "నేను ఒక పాత స్నేహితుడిని చూశాను." },
        { en: "She bought a saree.", te: "ఆవిడ ఒక చీర కొన్నారు." },
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
          example: { en: "He came home late.", te: "ఆయన ఇంటికి ఆలస్యంగా వచ్చారు." },
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
        en: "Go takes no -ed; its past is went, never goed: I went to Vijayawada.",
        te: "go కి -ed రాదు, దాని గతం went: I went to Vijayawada.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "She buyed a saree.",
      right: "She bought a saree.",
      why: {
        en: "Buy takes no -ed; its past is bought: She bought a saree.",
        te: "buy కి -ed రాదు, దాని గతం bought: She bought a saree.",
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
        en: "Eat takes no -ed; its past is ate: We ate dosa.",
        te: "eat కి -ed రాదు, దాని గతం ate: We ate dosa.",
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
        en: "The past of take is took, not taked: I took the bus.",
        te: "take కి గతం took, taked కాదు: I took the bus.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "What is the past of see?", te: "see కి గతం ఏంటి?" },
      options: ["seed", "saw", "seeing"],
      answer: 1,
      why: {
        en: "The past of see is saw, not seed: I saw an old friend.",
        te: "see కి గతం saw, seed కాదు: I saw an old friend.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "He comed home late.",
      wrongIndex: 1,
      fix: "He came home late.",
      why: {
        en: "The past of come is came, not comed: He came home late.",
        te: "come కి గతం came, comed కాదు: He came home late.",
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
        en: "Say that your friend Salma bought a saree.",
        te: "మీ స్నేహితురాలు సల్మా ఒక చీర కొన్నారని చెప్పండి.",
      },
      expected: ["Salma bought a saree.", "She bought a saree."],
      options: ["Salma buyed a saree.", "Salma bought a saree.", "Salma buy a saree."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A shopping trip", te: "షాపింగ్‌కి వెళ్ళడం" },
    scene: {
      en: "Your friend Anitha asks about your shopping trip yesterday.",
      te: "నిన్న మీరు షాపింగ్‌కి వెళ్ళిన దాని గురించి మీ స్నేహితురాలు అనిత అడుగుతున్నారు.",
    },
    partner: { en: "Anitha (a friend)", te: "అనిత (స్నేహితురాలు)" },
    skills: [{ id: "past", label: { en: "went / bought / saw", te: "went / bought / saw వాడకం" } }],
    turns: [
      {
        partner: "Where did you go yesterday?",
        te: "నిన్న ఎక్కడికి వెళ్ళారు?",
        hint: { en: "Say which shop you went to.", te: "ఏ షాప్‌కి వెళ్ళారో చెప్పండి." },
        replies: [
          { say: "I went to the saree shop.", good: true, skill: "past" },
          { say: "I goed to the saree shop.", good: false, skill: "past" },
        ],
      },
      {
        partner: "Did you buy anything?",
        te: "ఏమైనా కొన్నారా?",
        hint: { en: "Say yes, and how many you bought.", te: "అవును అని, ఎన్ని కొన్నారో చెప్పండి." },
        replies: [
          { say: "Yes, I bought two sarees.", good: true, skill: "past" },
          { say: "Yes, I buyed two sarees.", good: false, skill: "past" },
          {
            say: "Why do you want to know?",
            good: false,
            react: { en: "Oh, sorry! I was just asking.", te: "అయ్యో, sorry! ఊరికే అడిగాను, అంతే." },
          },
        ],
      },
      {
        partner: "Who did you see there?",
        te: "అక్కడ ఎవరిని చూశారు?",
        hint: { en: "Tell her you saw a teacher you both knew.", te: "మీ ఇద్దరికీ తెలిసిన పాత టీచర్‌ని చూశారని చెప్పండి." },
        replies: [
          { say: "I saw our old teacher!", good: true, skill: "past" },
          { say: "I seed our old teacher!", good: false, skill: "past" },
        ],
      },
      {
        partner: "How did you come back?",
        te: "ఎలా తిరిగి వచ్చారు?",
        hint: { en: "Say how you came back home.", te: "ఇంటికి ఎలా వచ్చారో చెప్పండి." },
        replies: [
          { say: "I took an auto.", good: true, skill: "past" },
          { say: "I took auto.", good: false, skill: "past", fixIt: "article" },
        ],
      },
    ],
  },
};
