import type { Lesson } from "../../types";

/** Week 71, Day 1 (CURRICULUM §5): the present perfect for price changes — The price of tomatoes has gone up again. */
export const day: Lesson = {
  id: "prices-have-gone-up-market",
  kind: "lesson",
  title: { en: "Prices Have Gone Up", te: "ధరలు పెరిగాయి" },
  subtitle: "has gone up, has come down",
  summary: {
    en: "Learn to talk about price changes at the market: The price of tomatoes has gone up again.",
    te: "మార్కెట్‌లో ధరల మార్పు గురించి మాట్లాడటం నేర్చుకుందాం: The price of tomatoes has gone up again.",
  },
  seo: {
    title: "Talking About Price Changes in English for Telugu Speakers",
    description:
      "Say The price of tomatoes has gone up again and Onions have come down a little. Simple lessons for Telugu speakers on market prices.",
  },
  pattern: [
    { text: "The price of tomatoes", role: "who" },
    { text: "has gone up", role: "action" },
    { text: "again", role: "when" },
  ],
  core: [
    { en: "Prices have gone up again.", te: "ధరలు మళ్ళీ పెరిగాయి.", extra: ["went"] },
    { en: "The price of tomatoes has gone up again.", te: "టమాటా ధర మళ్ళీ పెరిగింది.", extra: ["have"] },
    { en: "Onions have come down a little this week.", te: "ఈ వారం ఉల్లిపాయలు కొంచెం తగ్గాయి.", extra: ["came"] },
    { en: "Has the price of rice gone up?", te: "బియ్యం ధర పెరిగిందా?", extra: ["Is"] },
    { en: "The price of beans has doubled since last month.", te: "పోయిన నెల నుంచి బీన్స్ ధర రెట్టింపు అయింది.", extra: ["for"] },
    { en: "Tomatoes were 30 rupees a kilo last month.", te: "పోయిన నెల టమాటా కిలో 30 రూపాయలు ఉండేది.", extra: ["was"] },
    { en: "Prices haven't changed much this week.", te: "ఈ వారం ధరలు పెద్దగా మారలేదు.", extra: ["hasn't"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "At the market or on a price board today, notice one price that has changed. Say it aloud: The price of … has gone up.",
    te: "ఈ రోజు మార్కెట్‌లో గానీ ధరల బోర్డు మీద గానీ మారిన ఒక ధర గమనించండి. గట్టిగా చెప్పండి: The price of … has gone up.",
  },
  words: [
    { en: "go up", te: "ధర పెరగడం" },
    { en: "go down", te: "ధర తగ్గడం" },
    { en: "doubled", te: "రెట్టింపు అయింది" },
    { en: "costly", te: "ఖరీదు, ధర ఎక్కువ" },
    { en: "price rise", te: "ధరల పెరుగుదల" },
  ],
  grammar: ["present-perfect", "articles", "plurals-countable"],
  topics: ["market", "food", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Prices have gone up", te: "ధరలు పెరిగాయి" },
      body: {
        en: "For a price change you can see now, say has or have with gone up or come down: Prices have gone up. One thing takes has; many things take have.",
        te: "ఇప్పుడు కనిపిస్తున్న ధర మార్పుకి has లేదా have తో gone up, come down అనండి: Prices have gone up. ఒక్కటైతే has, చాలా అయితే have.",
      },
      bridge: {
        te: ["టమాటా ధర", "మళ్ళీ", "పెరిగింది"],
        en: [
          { text: "The price of tomatoes", role: "who" },
          { text: "has gone up", role: "action" },
          { text: "again", role: "when" },
        ],
      },
      examples: [
        { en: "Prices have gone up again.", te: "ధరలు మళ్ళీ పెరిగాయి." },
        { en: "The price of tomatoes has gone up again.", te: "టమాటా ధర మళ్ళీ పెరిగింది." },
        { en: "Onions have come down a little this week.", te: "ఈ వారం ఉల్లిపాయలు కొంచెం తగ్గాయి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Up, down or the same", te: "పెరిగింది, తగ్గింది, మారలేదు" },
      items: [
        {
          form: "has gone up",
          useFor: { en: "The price is higher now.", te: "ధర ఇప్పుడు ఎక్కువైంది." },
          example: { en: "The price of tomatoes has gone up again.", te: "టమాటా ధర మళ్ళీ పెరిగింది." },
        },
        {
          form: "have come down",
          useFor: { en: "The price is lower now.", te: "ధర ఇప్పుడు తగ్గింది." },
          example: { en: "Onions have come down a little this week.", te: "ఈ వారం ఉల్లిపాయలు కొంచెం తగ్గాయి." },
        },
        {
          form: "has doubled",
          useFor: { en: "The price is two times the old price.", te: "ధర పాత ధరకి రెండు రెట్లు అయింది." },
          example: { en: "The price of beans has doubled since last month.", te: "పోయిన నెల నుంచి బీన్స్ ధర రెట్టింపు అయింది." },
        },
        {
          form: "haven't changed",
          useFor: { en: "The price is the same.", te: "ధర అలాగే ఉంది." },
          example: { en: "Prices haven't changed much this week.", te: "ఈ వారం ధరలు పెద్దగా మారలేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Price of tomatoes has gone up again.",
      right: "The price of tomatoes has gone up again.",
      why: {
        en: "Before price of, English needs the; Telugu ధర has no word like the.",
        te: "price of ముందు the కావాలి; తెలుగులో 'ధర' ముందు the లాంటి పదం ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Today morning, onions were cheaper.",
      right: "This morning, onions were cheaper.",
      why: {
        en: "English says this morning; today morning comes from Telugu ఈ రోజు పొద్దున, word by word.",
        te: "ఇంగ్లీష్‌లో this morning అంటారు; today morning అనేది 'ఈ రోజు పొద్దున' ని నేరుగా మార్చడం వల్ల వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "plural",
      prompt: { en: "Onions are cheap today. Ask the seller for two kilos.", te: "ఈ రోజు ఉల్లిపాయలు చవకగా ఉన్నాయి. రెండు కిలోలు ఇవ్వమని అమ్మేవారిని అడగండి." },
      options: ["Two kilos of onions, please.", "Two kilo onions, please.", "Two kilos onions, please."],
      answer: 0,
      why: {
        en: "After two, kilo takes s, and of joins it to the vegetable.",
        te: "రెండు తర్వాత kilo కి s వస్తుంది; కూరగాయ పేరు ముందు of కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "The price of rice ___ gone up.",
      te: "బియ్యం ధర పెరిగింది.",
      options: ["has", "have", "is"],
      answer: 0,
      why: {
        en: "The price is one thing, so it takes has, not have or is.",
        te: "price ఒక్కటే, అందుకే have, is కాదు, has వాడాలి.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "news",
      heading: "Vegetable Prices Rise After Heavy Rain",
      lines: [
        "Vijayawada: Vegetable prices have gone up in the city this week.",
        "Heavy rain has damaged crops in many villages.",
        "The price of tomatoes has doubled in ten days.",
        "Tomatoes are now 60 rupees a kilo at the market.",
        "Beans and carrots have also gone up.",
        "But onions and potatoes have come down a little.",
        "Sellers say prices will come down when the rain stops.",
      ],
      questions: [
        {
          prompt: { en: "Why have vegetable prices gone up?", te: "కూరగాయల ధరలు ఎందుకు పెరిగాయి?" },
          options: ["Heavy rain damaged crops", "The market was closed", "There were no buses"],
          answer: 0,
          why: {
            en: "The second line gives the reason: the rain in the villages.",
            te: "రెండో లైన్‌లో కారణం ఉంది: ఊళ్ళలో పడిన వర్షం.",
          },
        },
        {
          prompt: { en: "What has happened to the price of tomatoes?", te: "టమాటా ధర ఏమైంది?" },
          options: ["It has doubled", "It has come down", "It hasn't changed"],
          answer: 0,
          why: {
            en: "Doubled means two times the old price, as the third line says.",
            te: "doubled అంటే పాత ధరకి రెండు రెట్లు; మూడో లైన్‌లో అదే ఉంది.",
          },
        },
        {
          prompt: { en: "Which vegetables have come down?", te: "ఏ కూరగాయల ధర తగ్గింది?" },
          options: ["Onions and potatoes", "Tomatoes and beans", "Beans and carrots"],
          answer: 0,
          why: {
            en: "The sixth line starts with But and names the cheaper ones.",
            te: "ఆరో లైన్ But తో మొదలై, చవకైన వాటి పేర్లు చెప్తుంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Onions have came down a little this week.",
      wrongIndex: 2,
      fix: "Onions have come down a little this week.",
      why: {
        en: "After have or has, use come, not came; came is the simple past alone.",
        te: "have, has తర్వాత came కాదు, come వాడాలి; came ఒంటరిగా past కి మాత్రమే.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Tomatoes cost more than last week. Tell your friend at the market.",
        te: "టమాటాలు పోయిన వారం కంటే ఎక్కువ ధర ఉన్నాయి. మార్కెట్‌లో మీ స్నేహితులకి చెప్పండి.",
      },
      expected: [
        "The price of tomatoes has gone up again.",
        "The price of tomatoes has gone up.",
        "Tomatoes have gone up again.",
        "Tomatoes have gone up.",
      ],
      options: ["The price of tomatoes has gone up again.", "Price of tomatoes has gone up again.", "The price of tomatoes has went up again."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You want to know if rice costs more this month. Ask the shopkeeper.",
        te: "ఈ నెల బియ్యం ధర ఎక్కువైందేమో తెలుసుకోవాలి. షాపు ఆయన్ని అడగండి.",
      },
      expected: ["Has the price of rice gone up?", "Has the price of rice gone up this month?", "Has rice gone up this month?", "Has rice gone up?"],
      options: ["Has the price of rice gone up?", "The price of rice has gone up?", "Has the price of rice went up?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the vegetable market", te: "కూరగాయల మార్కెట్‌లో" },
    scene: {
      en: "You go to Venkat's vegetable stall on Saturday morning. Last week, tomatoes were 40 rupees a kilo.",
      te: "శనివారం పొద్దున మీరు వెంకట్ గారి కూరగాయల కొట్టుకి వెళ్ళారు. పోయిన వారం టమాటాలు కిలో 40 రూపాయలు.",
    },
    partner: { en: "Venkat (vegetable seller)", te: "వెంకట్ (కూరగాయలు అమ్మేవారు)" },
    voice: "b",
    skills: [
      { id: "prices", label: { en: "Talking about prices", te: "ధరల గురించి మాట్లాడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Namaskaram! Fresh tomatoes today. How many kilos?",
        te: "నమస్కారం! ఈ రోజు తాజా టమాటాలు ఉన్నాయి. ఎన్ని కిలోలు?",
        hint: { en: "Greet him, and ask today's price first.", te: "నమస్కారం చెప్పి, ముందు ఈ రోజు ధర అడగండి." },
        replies: [
          { say: "Namaskaram. How much are tomatoes today?", good: true, skill: "prices" },
          { say: "Namaskaram. How much tomatoes today?", good: false, skill: "prices", fixIt: "be" },
        ],
      },
      {
        partner: "Sixty rupees a kilo.",
        te: "కిలో అరవై రూపాయలు.",
        hint: { en: "Say kindly that the price is higher again; it was forty last week.", te: "ధర మళ్ళీ పెరిగిందని, పోయిన వారం నలభై అని మర్యాదగా చెప్పండి." },
        replies: [
          { say: "Oh, the price has gone up again! It was forty last week.", good: true, skill: "prices" },
          {
            say: "Sixty? You are cheating me!",
            good: false,
            skill: "polite",
            react: { en: "Cheating? No! Prices have gone up everywhere this week.", te: "మోసమా? లేదండీ! ఈ వారం అన్నిచోట్లా ధరలు పెరిగాయి." },
          },
        ],
      },
      {
        partner: "Yes, because of the rain. But onions have come down. Thirty rupees.",
        te: "అవునండీ, వర్షాల వల్ల. కానీ ఉల్లిపాయలు తగ్గాయి. ముప్పై రూపాయలు.",
        hint: { en: "Ask for one kilo of tomatoes and two of onions.", te: "ఒక కిలో టమాటాలు, రెండు కిలోల ఉల్లిపాయలు అడగండి." },
        replies: [
          { say: "Then one kilo of tomatoes and two kilos of onions, please.", good: true, skill: "prices" },
          { say: "Then one kilo tomatoes and two kilo onions, please.", good: false, skill: "prices", fixIt: "plural" },
        ],
      },
      {
        partner: "That comes to 120 rupees. Thank you!",
        te: "మొత్తం 120 రూపాయలు అయింది. థాంక్యూ!",
        hint: { en: "Pay, thank him, and say goodbye.", te: "డబ్బులు ఇచ్చి, థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Here you are. Thank you, see you next week!", good: true, skill: "polite" },
          { say: "Here you are. Thank you, see you in next week!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
