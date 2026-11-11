import type { Lesson } from "../../types";

/** Week 40, Day 5 (CURRICULUM §4): Stories From My Week — past simple, past continuous and present perfect together, for the 1-minute speaking mission. */
export const day: Lesson = {
  id: "stories-from-my-week",
  kind: "lesson",
  title: { en: "Stories From My Week", te: "ఈ వారం కబుర్లు" },
  subtitle: "three pasts in one story",
  summary: {
    en: "Tell the stories of your week for one minute: what happened, what you were doing at the time, and the news that is still new.",
    te: "మీ వారం కబుర్లు ఒక్క నిమిషం చెప్పడం నేర్చుకుందాం: ఏం జరిగిందో, అప్పుడు మీరు ఏం చేస్తున్నారో, ఇంకా కొత్తగా ఏం జరిగిందో.",
  },
  seo: {
    title: "Telling Stories in English for Telugu Speakers",
    description:
      "Say I was waiting for the bus when it started raining. A lesson for Telugu speakers on telling the stories of the week for one minute.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "was waiting", role: "action" },
    { text: "for the bus", role: "what" },
    { text: "when it started raining", role: "when" },
  ],
  core: [
    { en: "Guess what happened on Tuesday!", te: "మంగళవారం ఏం జరిగిందో తెలుసా!", extra: ["happen"] },
    { en: "I was waiting for the bus when it started raining.", te: "నేను బస్ కోసం ఎదురుచూస్తుండగా వర్షం మొదలైంది.", extra: ["am"] },
    { en: "By chance, I met an old classmate.", te: "అనుకోకుండా ఒక పాత క్లాస్‌మేట్ కలిశారు.", extra: ["with"] },
    { en: "Luckily, I had my umbrella with me.", te: "అదృష్టం కొద్దీ నా దగ్గర గొడుగు ఉంది.", extra: ["have"] },
    { en: "We had coffee and talked for an hour.", te: "మేము కాఫీ తాగి, గంటసేపు మాట్లాడుకున్నాం.", extra: ["talk"] },
    { en: "A new medical shop has opened near our colony.", te: "మా కాలనీ దగ్గర కొత్త మెడికల్ షాపు తెరిచారు.", extra: ["is"] },
    { en: "In the end, I got home very late.", te: "చివరికి చాలా లేట్‌గా ఇంటికి చేరాను.", extra: ["to"] },
  ],
  key: [1, 2, 3, 5],
  tryToday: {
    en: "Tonight, tell one story from your week aloud for one minute. Start with Guess what!",
    te: "ఈ రాత్రి మీ వారంలో జరిగిన ఒక విషయాన్ని ఒక్క నిమిషం గట్టిగా చెప్పండి. Guess what! తో మొదలుపెట్టండి.",
  },
  words: [
    { en: "guess what", te: "ఏం జరిగిందో తెలుసా" },
    { en: "by chance", te: "అనుకోకుండా" },
    { en: "luckily", te: "అదృష్టం కొద్దీ" },
    { en: "in the end", te: "చివరికి, ఆఖరికి" },
    { en: "anyway", te: "సరే, ఏదేమైనా (మళ్ళీ విషయానికి వస్తూ)" },
  ],
  grammar: ["past-simple", "past-continuous", "present-perfect", "connectors"],
  topics: ["time", "people", "weather"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Three pasts in one story", te: "ఒక కబురులో మూడు past లు" },
      body: {
        en: "A good story mixes three forms. What happened: I met an old classmate. What was going on: I was waiting for the bus. News that is still new: A new shop has opened. Start with Guess what! and people will listen.",
        te: "మంచి కబురులో మూడు రూపాలు కలుస్తాయి. జరిగింది: I met an old classmate. అప్పుడు జరుగుతున్నది: I was waiting for the bus. ఇంకా కొత్తగా ఉన్న వార్త: A new shop has opened. Guess what! తో మొదలుపెడితే అందరూ ఆసక్తిగా వింటారు.",
      },
      bridge: {
        te: ["నేను", "బస్ కోసం", "ఎదురుచూస్తుండగా", "వర్షం మొదలైంది"],
        en: [
          { text: "I", role: "who" },
          { text: "was waiting", role: "action" },
          { text: "for the bus", role: "what" },
          { text: "when it started raining", role: "when" },
        ],
      },
      examples: [
        { en: "I was waiting for the bus when it started raining.", te: "నేను బస్ కోసం ఎదురుచూస్తుండగా వర్షం మొదలైంది." },
        { en: "By chance, I met an old classmate.", te: "అనుకోకుండా ఒక పాత క్లాస్‌మేట్ కలిశారు." },
        { en: "A new medical shop has opened near our colony.", te: "మా కాలనీ దగ్గర కొత్త మెడికల్ షాపు తెరిచారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which form for which part?", te: "కబురులో ఏ భాగానికి ఏ రూపం?" },
      items: [
        {
          form: "I met, we had",
          useFor: { en: "The main things that happened.", te: "జరిగిన ముఖ్యమైన విషయాలు." },
          example: { en: "We had coffee and talked for an hour.", te: "మేము కాఫీ తాగి, గంటసేపు మాట్లాడుకున్నాం." },
        },
        {
          form: "I was …-ing when …",
          useFor: { en: "What was going on when something happened.", te: "ఏదైనా జరిగినప్పుడు అప్పటికి జరుగుతూ ఉన్న పని." },
          example: { en: "I was ironing clothes when the lights went off.", te: "నేను బట్టలు ఇస్త్రీ చేస్తుండగా లైట్లు పోయాయి." },
        },
        {
          form: "… has opened, has bought",
          useFor: { en: "News that is still new now.", te: "ఇప్పటికీ కొత్తగా ఉన్న వార్త." },
          example: { en: "My cousin has bought a new scooter.", te: "మా కజిన్ కొత్త స్కూటర్ కొన్నారు." },
        },
        {
          form: "Guess what! / Anyway, …",
          useFor: { en: "Starting a story, and coming back to it.", te: "కబురు మొదలుపెట్టడానికి, మళ్ళీ అసలు విషయానికి రావడానికి." },
          example: { en: "Anyway, the bus came after half an hour.", te: "సరే, అరగంట తర్వాత బస్ వచ్చింది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "I waiting for the bus when it started raining.",
      right: "I was waiting for the bus when it started raining.",
      why: {
        en: "Telugu ఎదురుచూస్తుండగా has no extra verb, but English needs was before the -ing word.",
        te: "తెలుగులో 'ఎదురుచూస్తుండగా' లో వేరే verb లేదు; ఇంగ్లీష్‌లో -ing పదం ముందు was తప్పనిసరి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "By chance, I met with an old classmate.",
      right: "By chance, I met an old classmate.",
      why: {
        en: "Meeting a person needs no with; Telugu తో makes us add it.",
        te: "ఒకరిని కలవడానికి meet చాలు; 'క్లాస్‌మేట్‌తో' లోని 'తో' వల్ల with చేర్చకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Start telling your friend a surprising story.", te: "ఆశ్చర్యం కలిగించే ఒక విషయం స్నేహితులకి చెప్పడం మొదలుపెట్టండి." },
      options: ["Guess what happened on Tuesday!", "Guess what is happened on Tuesday!", "Guess what happened in Tuesday!"],
      answer: 0,
      why: {
        en: "Happened needs no is before it, and days always take on.",
        te: "happened ముందు is అక్కర్లేదు; రోజులకి ఎప్పుడూ on.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "She ___ sleeping when the doorbell rang.",
      te: "ఆవిడ నిద్రపోతుండగా డోర్‌బెల్ మోగింది.",
      options: ["was", "were", "is"],
      answer: 0,
      why: {
        en: "One person in the past takes was before the -ing verb.",
        te: "గతంలో ఒక్కరి గురించి అయితే -ing verb ముందు was.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Tell your friend some news: a new medical shop is open near your colony now.",
        te: "స్నేహితులకి ఒక వార్త చెప్పండి: మీ కాలనీ దగ్గర కొత్త మెడికల్ షాపు ఇప్పుడు తెరిచి ఉంది.",
      },
      options: ["A new medical shop has opened near our colony.", "A new medical shop is opened near our colony.", "A new medical shop has open near our colony."],
      answer: 0,
      why: {
        en: "News that is still new takes has with the third form, opened.",
        te: "ఇప్పటికీ కొత్తగా ఉన్న వార్తకి has తో మూడో రూపం opened వాడాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My friend have bought a new scooter.",
      wrongIndex: 2,
      fix: "My friend has bought a new scooter.",
      why: {
        en: "One friend is like he or she, so use has, not have.",
        te: "ఒక్క friend అంటే he, she లాంటిదే, అందుకే have కాదు, has.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend is telling you a story. Ask what happened next.",
        te: "స్నేహితులు ఒక విషయం చెప్తున్నారు. తర్వాత ఏం జరిగిందని అడగండి.",
      },
      expected: ["What happened next?", "Then what happened?", "And then what happened?"],
      options: ["What happened next?", "What did happen next?", "What happen next?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say you met an old classmate by chance on Tuesday.",
        te: "మంగళవారం అనుకోకుండా ఒక పాత క్లాస్‌మేట్ కలిశారని చెప్పండి.",
      },
      expected: ["On Tuesday I met an old classmate by chance.", "I met an old classmate by chance on Tuesday."],
      options: ["On Tuesday I met an old classmate by chance.", "On Tuesday I meet an old classmate by chance.", "On Tuesday I met old classmate by chance."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Your week in one minute", te: "ఒక్క నిమిషంలో మీ వారం" },
    scene: {
      en: "Your friend Ramana calls on Sunday evening. Tell him the stories of your week.",
      te: "ఆదివారం సాయంత్రం మీ స్నేహితుడు రమణ ఫోన్ చేశారు. మీ వారం కబుర్లు ఆయనకి చెప్పండి.",
    },
    partner: { en: "Ramana (a friend)", te: "రమణ (స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "story", label: { en: "Telling a story", te: "కబురు చెప్పడం" } },
      { id: "news", label: { en: "Giving news", te: "వార్త చెప్పడం" } },
    ],
    turns: [
      {
        partner: "Hello! It's Ramana. How was your week?",
        te: "హలో! నేను రమణ. మీ వారం ఎలా గడిచింది?",
        hint: { en: "Say it was interesting, and start a story about Tuesday.", te: "బాగా గడిచిందని చెప్పి, మంగళవారం జరిగిన విషయం మొదలుపెట్టండి." },
        replies: [
          { say: "Very interesting! Guess what happened on Tuesday!", good: true, skill: "story" },
          {
            say: "Why are you asking? Nothing to tell.",
            good: false,
            skill: "story",
            react: { en: "Oh! Sorry, I was just asking.", te: "ఓ! సారీ, ఊరికే అడిగాను." },
          },
        ],
      },
      {
        partner: "Tell me! What happened?",
        te: "చెప్పండి! ఏం జరిగింది?",
        hint: { en: "Say what you were doing when the rain started.", te: "వర్షం మొదలైనప్పుడు మీరు ఏం చేస్తున్నారో చెప్పండి." },
        replies: [
          { say: "I was waiting for the bus when it started raining.", good: true, skill: "story" },
          { say: "I am waiting for the bus when it started raining.", good: false, skill: "story" },
        ],
      },
      {
        partner: "Oh no! Did you get wet?",
        te: "అయ్యో! తడిసిపోయారా?",
        hint: { en: "Say no and why, then who you met by chance.", te: "లేదని, ఎందుకో చెప్పి, అనుకోకుండా ఎవరు కలిశారో చెప్పండి." },
        replies: [
          { say: "No, luckily I had an umbrella. Then I met Usha!", good: true, skill: "story" },
          { say: "No, I had an umbrella. Then I met with Usha!", good: false, skill: "story", fixIt: "preposition" },
        ],
      },
      {
        partner: "Usha from school? Wonderful! What else is new?",
        te: "మీతో స్కూల్‌లో చదివిన ఉషా గారా? చాలా బాగుంది! ఇంకా కొత్త విశేషాలు ఏంటి?",
        hint: { en: "Give one piece of news, then say goodbye warmly.", te: "ఒక కొత్త వార్త చెప్పి, ఆప్యాయంగా బై చెప్పండి." },
        replies: [
          { say: "A new medical shop has opened here. Bye for now!", good: true, skill: "news" },
          { say: "A new medical shop is opened here. Bye for now!", good: false, skill: "news" },
        ],
      },
    ],
  },
};
