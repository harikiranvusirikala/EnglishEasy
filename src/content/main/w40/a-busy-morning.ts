import type { Lesson } from "../../types";

/** Week 40, Day 1 (CURRICULUM §4): Checkpoint review of shopping, buses and the bank — a busy morning told in order. */
export const day: Lesson = {
  id: "a-busy-morning",
  kind: "lesson",
  title: { en: "A Busy Morning", te: "హడావిడి ఉదయం" },
  subtitle: "first, then, after that",
  summary: {
    en: "Tell a busy morning in order: I took the bus to the bank, then bought vegetables.",
    te: "హడావిడిగా గడిచిన ఉదయాన్ని వరుసగా చెప్పడం నేర్చుకుందాం: I took the bus to the bank, then bought vegetables.",
  },
  seo: {
    title: "Telling Your Morning in English for Telugu Speakers",
    description:
      "Say I took the bus to the bank, then bought vegetables. A review lesson for Telugu speakers on shopping, buses and the bank.",
  },
  pattern: [
    { text: "First", role: "when" },
    { text: "I", role: "who" },
    { text: "took", role: "action" },
    { text: "the bus to the bank", role: "what" },
  ],
  core: [
    { en: "I took the bus to the bank.", te: "నేను బస్‌లో బ్యాంక్‌కి వెళ్ళాను.", extra: ["take"] },
    { en: "Then I bought vegetables at the market.", te: "తర్వాత మార్కెట్‌లో కూరగాయలు కొన్నాను.", extra: ["buy"] },
    { en: "The bank was very crowded today.", te: "ఈ రోజు బ్యాంక్ చాలా రద్దీగా ఉండింది.", extra: ["were"] },
    { en: "I withdrew two thousand rupees.", te: "రెండు వేల రూపాయలు తీసుకున్నాను.", extra: ["thousands"] },
    { en: "After that, I took an auto home.", te: "ఆ తర్వాత ఆటోలో ఇంటికి వచ్చాను.", extra: ["to"] },
    { en: "On the way back, I stopped at the medical shop.", te: "తిరిగి వస్తుంటే దారిలో మెడికల్ షాపు దగ్గర ఆగాను.", extra: ["on"] },
    { en: "Finally, I reached home at eleven.", te: "చివరికి పదకొండు గంటలకి ఇంటికి చేరాను.", extra: ["reach"] },
  ],
  key: [0, 1, 3, 4],
  tryToday: {
    en: "Tonight, tell your morning aloud in four steps: First, Then, After that, Finally.",
    te: "ఈ రాత్రి మీ ఉదయం ఎలా గడిచిందో నాలుగు అడుగుల్లో గట్టిగా చెప్పండి: First, Then, After that, Finally.",
  },
  words: [
    { en: "in a hurry", te: "హడావిడిగా, తొందరలో" },
    { en: "crowded", te: "రద్దీగా, జనంతో నిండి" },
    { en: "on the way back", te: "తిరిగి వస్తుంటే దారిలో" },
    { en: "spent", te: "ఖర్చు పెట్టాను (spend గతం)" },
    { en: "finally", te: "చివరికి" },
  ],
  grammar: ["past-simple", "connectors", "prepositions", "big-numbers"],
  topics: ["bank", "market", "transport", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Your morning, step by step", te: "మీ ఉదయం, ఒక్కొక్కటిగా" },
      body: {
        en: "Tell what you did in order, in the past: First I took the bus to the bank. Then I bought vegetables. After that … Finally … These four words make your story easy to follow.",
        te: "చేసిన పనులు వరుసగా past లో చెప్పండి: First I took the bus to the bank. Then I bought vegetables. తర్వాత After that, చివర్లో Finally. ఈ నాలుగు పదాలతో మీ మాటలు సులభంగా అర్థమవుతాయి.",
      },
      bridge: {
        te: ["ముందు", "నేను", "బస్‌లో బ్యాంక్‌కి", "వెళ్ళాను"],
        en: [
          { text: "First", role: "when" },
          { text: "I", role: "who" },
          { text: "took", role: "action" },
          { text: "the bus to the bank", role: "what" },
        ],
      },
      examples: [
        { en: "I took the bus to the bank.", te: "నేను బస్‌లో బ్యాంక్‌కి వెళ్ళాను." },
        { en: "Then I bought vegetables at the market.", te: "తర్వాత మార్కెట్‌లో కూరగాయలు కొన్నాను." },
        { en: "Finally, I reached home at eleven.", te: "చివరికి పదకొండు గంటలకి ఇంటికి చేరాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Words that join your steps", te: "పనులను కలిపే పదాలు" },
      items: [
        {
          form: "First …",
          useFor: { en: "The first thing you did.", te: "మొదట చేసిన పని." },
          example: { en: "First, I went to the ATM.", te: "ముందు ATM కి వెళ్ళాను." },
        },
        {
          form: "Then … / After that …",
          useFor: { en: "The next thing.", te: "తర్వాత చేసిన పని." },
          example: { en: "After that, I took an auto home.", te: "ఆ తర్వాత ఆటోలో ఇంటికి వచ్చాను." },
        },
        {
          form: "On the way back …",
          useFor: { en: "Something you did while coming home.", te: "తిరిగి ఇంటికి వస్తూ దారిలో చేసిన పని." },
          example: { en: "On the way back, I stopped at the medical shop.", te: "తిరిగి వస్తుంటే దారిలో మెడికల్ షాపు దగ్గర ఆగాను." },
        },
        {
          form: "Finally …",
          useFor: { en: "The last thing.", te: "చివరి పని." },
          example: { en: "Finally, I was home by noon.", te: "చివరికి మధ్యాహ్నానికల్లా ఇంట్లో ఉన్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I reached to home at eleven.",
      right: "I reached home at eleven.",
      why: {
        en: "Home needs no to after reach, go or come, though Telugu says ఇంటికి.",
        te: "తెలుగులో 'ఇంటికి' అన్నా, reach, go, come తర్వాత home కి to రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "I withdrew two thousands rupees.",
      right: "I withdrew two thousand rupees.",
      why: {
        en: "After a number, thousand and lakh never take s; only rupees does.",
        te: "సంఖ్య తర్వాత thousand, lakh కి s రాదు; rupees కి మాత్రమే s.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Your friend asks why you are late. The bank was full of people.",
        te: "ఎందుకు లేట్ అయిందని స్నేహితులు అడిగారు. బ్యాంక్ నిండా జనం ఉన్నారు.",
      },
      options: ["The bank was very crowded.", "The bank very crowded.", "The bank were very crowded."],
      answer: 0,
      why: {
        en: "Telugu needs no verb here, but English needs was for one place in the past.",
        te: "తెలుగులో ఇక్కడ verb అక్కర్లేదు; ఇంగ్లీష్‌లో గతంలో ఒక్క చోటు గురించి was కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "I spent 300 rupees ___ vegetables.",
      te: "కూరగాయలకి 300 రూపాయలు ఖర్చు పెట్టాను.",
      options: ["on", "for", "in"],
      answer: 0,
      why: {
        en: "Spend money takes on; Telugu కూరగాయలకి makes us say for.",
        te: "డబ్బు దేని మీద ఖర్చు పెట్టారో చెప్పడానికి on; 'కూరగాయలకి' అని for అనకూడదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend says: On the way back, I met Rani. When did they meet?",
        te: "మీ స్నేహితులు 'On the way back, I met Rani' అన్నారు. వాళ్ళు ఎప్పుడు కలిశారు?",
      },
      options: ["While coming home", "Before leaving home", "At the bank counter"],
      answer: 0,
      why: {
        en: "On the way back means while you are coming home.",
        te: "on the way back అంటే తిరిగి ఇంటికి వస్తూ దారిలో.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I was in a hurry, so I take an auto.",
      wrongIndex: 7,
      fix: "I was in a hurry, so I took an auto.",
      why: {
        en: "The story is in the past, so take becomes took, like was.",
        te: "జరిగింది గతంలో, was లాగే take కూడా past లో took అవుతుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell your friend the first two things you did this morning: the bank, then the market.",
        te: "ఈ ఉదయం ముందుగా చేసిన రెండు పనులు స్నేహితులకి చెప్పండి: బ్యాంక్, తర్వాత మార్కెట్.",
      },
      expected: ["First I went to the bank, then the market.", "I went to the bank, then to the market."],
      options: ["First I went to the bank, then the market.", "First I go to the bank, then the market.", "First bank I went, then market."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "A neighbour asks where you were this morning. Say you were at the bank.",
        te: "ఈ ఉదయం ఎక్కడ ఉన్నారని పొరుగువారు అడిగారు. బ్యాంక్‌లో ఉన్నానని చెప్పండి.",
      },
      expected: ["I was at the bank this morning.", "This morning I was at the bank."],
      options: ["I was at the bank this morning.", "I was at the bank today morning.", "I am at the bank this morning."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "How was your morning?", te: "ఉదయం ఎలా గడిచింది?" },
    scene: {
      en: "Your friend Geetha meets you at the colony gate at noon. Tell her about your busy morning.",
      te: "మధ్యాహ్నం కాలనీ గేటు దగ్గర మీ స్నేహితురాలు గీత కలిశారు. మీ హడావిడి ఉదయం గురించి ఆవిడకి చెప్పండి.",
    },
    partner: { en: "Geetha (a friend)", te: "గీత (స్నేహితురాలు)" },
    skills: [
      { id: "order", label: { en: "Telling in order", te: "వరుసగా చెప్పడం" } },
      { id: "past", label: { en: "What you did", te: "ఏం చేశారో" } },
    ],
    turns: [
      {
        partner: "Hello! You look tired. Where were you all morning?",
        te: "హలో! అలసిపోయినట్టున్నారు. పొద్దున్నంతా ఎక్కడ ఉన్నారు?",
        hint: { en: "Say it was a busy morning, and where you went first.", te: "హడావిడి ఉదయం అని, ముందు ఎక్కడికి వెళ్ళారో చెప్పండి." },
        replies: [
          { say: "Very busy! First I took the bus to the bank.", good: true, skill: "order" },
          { say: "Very busy! First I take the bus to the bank.", good: false, skill: "past" },
        ],
      },
      {
        partner: "The bank? Were there many people?",
        te: "బ్యాంక్‌కా? చాలా మంది ఉన్నారా?",
        hint: { en: "Say yes, and how long you waited.", te: "అవునని, ఎంతసేపు ఎదురుచూశారో చెప్పండి." },
        replies: [
          { say: "Yes, very crowded! I waited for one hour.", good: true, skill: "past" },
          { say: "Yes, it very crowded! I waited for one hour.", good: false, skill: "past", fixIt: "be" },
        ],
      },
      {
        partner: "Oh no! What did you do after that?",
        te: "అయ్యో! ఆ తర్వాత ఏం చేశారు?",
        hint: { en: "Say what you bought, and how you came home.", te: "ఏం కొన్నారో, ఇంటికి ఎలా వచ్చారో చెప్పండి." },
        replies: [
          { say: "I bought vegetables, then took an auto home.", good: true, skill: "order" },
          { say: "I was bought vegetables, then took an auto home.", good: false, skill: "past" },
        ],
      },
      {
        partner: "You did so much! Come, have tea at my place.",
        te: "చాలా పనులు చేశారు! రండి, మా ఇంట్లో టీ తాగండి.",
        hint: { en: "Thank her, and say yes politely.", te: "థాంక్స్ చెప్పి, మర్యాదగా సరే అనండి." },
        replies: [
          { say: "Thank you, that's very kind. I'd love some tea.", good: true },
          {
            say: "Tea? Okay, but make it quickly.",
            good: false,
            react: { en: "Ha! Okay, okay. Sit down, I'll bring it.", te: "హా! సరే, సరే. కూర్చోండి, తెస్తాను." },
          },
        ],
      },
    ],
  },
};
