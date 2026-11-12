import type { Lesson } from "../../types";

/** Week 48, Day 5 (CURRICULUM §5): if or when in plans — If all goes well, I'll visit Tirupati. When I reach Nellore, I'll message you. */
export const day: Lesson = {
  id: "if-all-goes-well-trip-plans",
  kind: "lesson",
  title: { en: "If All Goes Well", te: "అంతా బాగుంటే" },
  subtitle: "if or when in plans",
  summary: {
    en: "Learn to tell your trip plans, with a backup plan: If all goes well, I'll visit Tirupati in March. When I reach Nellore, I'll send you a message.",
    te: "మీ ప్రయాణ ప్లాన్లు, బ్యాకప్ ప్లాన్‌తో సహా, చెప్పడం నేర్చుకుందాం: If all goes well, I'll visit Tirupati in March. When I reach Nellore, I'll send you a message.",
  },
  seo: {
    title: "If and When in Plans in English for Telugu Speakers",
    description:
      "Say If all goes well, I'll visit Tirupati and When I reach Nellore, I'll message you. Simple lessons for Telugu speakers on trip plans.",
  },
  pattern: [
    { text: "If all goes well,", role: "when" },
    { text: "I'll", role: "who" },
    { text: "visit Tirupati", role: "action" },
    { text: "in March", role: "when" },
  ],
  core: [
    { en: "If all goes well, I'll visit Tirupati in March.", te: "అంతా బాగుంటే, మార్చిలో తిరుపతి వెళ్తాను.", extra: ["on"] },
    { en: "When I reach Nellore, I'll send you a message.", te: "నెల్లూరు చేరుకోగానే, మీకు మెసేజ్ పెడతాను.", extra: ["to"] },
    { en: "If I get the tickets, I'll go by train.", te: "టికెట్లు దొరికితే, రైల్లో వెళ్తాను.", extra: ["in"] },
    { en: "When I come back, I'll bring you a laddu.", te: "తిరిగి వచ్చాక, మీకు లడ్డు తెస్తాను.", extra: ["will"] },
    { en: "If there are no train tickets, we'll take the bus.", te: "రైలు టికెట్లు దొరకకపోతే, బస్సులో వెళ్తాం.", extra: ["is"] },
    { en: "If the dates don't suit you, we'll go in April.", te: "ఆ తేదీలు మీకు కుదరకపోతే, ఏప్రిల్‌లో వెళ్దాం.", extra: ["doesn't"] },
    { en: "When I get home, I'll call you.", te: "ఇంటికి చేరుకున్నాక, మీకు ఫోన్ చేస్తాను.", extra: ["to"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a trip or a visit you want to make. Say your plan aloud with If all goes well, I'll …",
    te: "మీరు వెళ్ళాలనుకుంటున్న ఒక ప్రయాణం గుర్తు చేసుకోండి. If all goes well, I'll … అని మీ ప్లాన్ గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "if all goes well", te: "అంతా సవ్యంగా జరిగితే" },
    { en: "backup plan", te: "బ్యాకప్ ప్లాన్, ఇంకో దారి" },
    { en: "as planned", te: "అనుకున్నట్టే" },
    { en: "go ahead", te: "అనుకున్నది చేయడం, ముందుకెళ్ళడం" },
    { en: "return journey", te: "తిరుగు ప్రయాణం" },
  ],
  grammar: ["conditionals", "will", "prepositions"],
  topics: ["travel", "time", "transport"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "If or when?", te: "If నా, When ఆ?" },
      body: {
        en: "Use if when you are not sure it will happen: If all goes well. Use when when you are sure: When I reach Nellore. Both take the present, then I'll.",
        te: "జరుగుతుందో లేదో తెలియకపోతే if; ఖచ్చితంగా జరిగేదానికి when. రెండిటి తర్వాత present, ఆ తర్వాత I'll.",
      },
      bridge: {
        te: ["అంతా బాగుంటే,", "మార్చిలో", "తిరుపతి", "వెళ్తాను"],
        en: [
          { text: "If all goes well,", role: "when" },
          { text: "I'll", role: "who" },
          { text: "visit Tirupati", role: "action" },
          { text: "in March", role: "when" },
        ],
      },
      examples: [
        { en: "If all goes well, I'll visit Tirupati in March.", te: "అంతా బాగుంటే, మార్చిలో తిరుపతి వెళ్తాను." },
        { en: "When I reach Nellore, I'll send you a message.", te: "నెల్లూరు చేరుకోగానే, మీకు మెసేజ్ పెడతాను." },
        { en: "If I get the tickets, I'll go by train.", te: "టికెట్లు దొరికితే, రైల్లో వెళ్తాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "if or when", te: "if, when తేడా" },
      items: [
        {
          form: "If …",
          useFor: { en: "You are not sure it will happen.", te: "జరుగుతుందో లేదో ఖచ్చితంగా తెలియదు." },
          example: { en: "If I get the tickets, I'll go by train.", te: "టికెట్లు దొరికితే, రైల్లో వెళ్తాను." },
        },
        {
          form: "When …",
          useFor: { en: "You are sure it will happen.", te: "ఖచ్చితంగా జరుగుతుంది." },
          example: { en: "When I start my return journey, I'll call you.", te: "తిరుగు ప్రయాణం మొదలుపెట్టగానే, మీకు ఫోన్ చేస్తాను." },
        },
        {
          form: "If all goes well, …",
          useFor: { en: "A plan you hope will work.", te: "అనుకున్నట్టు జరగాలని ఆశిస్తూ చెప్పే ప్లాన్." },
          example: { en: "If all goes well, we'll go ahead as planned.", te: "అంతా బాగుంటే, అనుకున్నట్టే వెళ్తాం." },
        },
        {
          form: "If not, …",
          useFor: { en: "Your backup plan.", te: "మీ బ్యాకప్ ప్లాన్." },
          example: { en: "If not, we'll take the bus.", te: "లేకపోతే, బస్సులో వెళ్తాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "When I will reach Nellore, I'll send you a message.",
      right: "When I reach Nellore, I'll send you a message.",
      why: {
        en: "Like if, when takes the present for a future plan; will comes only in the other part.",
        te: "if లాగానే, when తర్వాత కూడా రాబోయే పనికి present వస్తుంది; will రెండో భాగంలోనే.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "If all goes well, I'll visit Tirupati on March.",
      right: "If all goes well, I'll visit Tirupati in March.",
      why: {
        en: "Months take in, like in March or in April; on is for days and dates.",
        te: "నెలలకి in వస్తుంది, in March, in April లాగా; on రోజులకి, తేదీలకి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "You are sure your train reaches Nellore tonight. Tell your friend you'll message her then.",
        te: "మీ రైలు ఈ రాత్రి నెల్లూరు చేరుకుంటుందని మీకు ఖచ్చితంగా తెలుసు. అప్పుడు మెసేజ్ పెడతానని స్నేహితురాలికి చెప్పండి.",
      },
      options: [
        "When I reach Nellore, I'll send you a message.",
        "When I will reach Nellore, I'll send you a message.",
        "When I reach to Nellore, I'll send you a message.",
      ],
      answer: 0,
      why: {
        en: "You are sure, so use when with the present, and reach takes no to.",
        te: "ఖచ్చితంగా జరుగుతుంది కాబట్టి when, దాని తర్వాత present; reach తర్వాత to రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "If all ___ well, I'll visit Tirupati in March.",
      te: "అంతా బాగుంటే, మార్చిలో తిరుపతి వెళ్తాను.",
      options: ["goes", "will go", "go"],
      answer: 0,
      why: {
        en: "All here means everything, like it, so go takes es; will never goes after if.",
        te: "ఇక్కడ all అంటే 'అంతా', it లాగా; అందుకే go కి es. if తర్వాత will రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "Your friend asks: You won't go if it rains? You won't go. Answer.",
        te: "వర్షం పడితే మీరు వెళ్ళరా? అని స్నేహితులు అడుగుతున్నారు. మీరు వెళ్ళరు. జవాబు చెప్పండి.",
      },
      options: ["No, I won't. I'll go next week.", "Yes, I won't. I'll go next week.", "No, I don't. I'll go next week."],
      answer: 0,
      why: {
        en: "To say you won't go, start with No, even though Telugu starts with అవును.",
        te: "వెళ్ళను అని చెప్పాలంటే No తో మొదలుపెట్టాలి; తెలుగులో 'అవును, వెళ్ళను' అన్నా.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "If I get two ticket, we'll go by train.",
      wrongIndex: 4,
      fix: "If I get two tickets, we'll go by train.",
      why: {
        en: "After two, ticket takes s; Telugu టికెట్లు also shows more than one.",
        te: "రెండు తర్వాత ticket కి s వస్తుంది; తెలుగులోనూ 'టికెట్' కాదు, 'టికెట్లు' అంటాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your friend asks about your plans for March. Say you'll visit Tirupati, if all goes well.",
        te: "మార్చిలో మీ ప్లాన్లు ఏంటని స్నేహితులు అడుగుతున్నారు. అంతా బాగుంటే తిరుపతి వెళ్తానని చెప్పండి.",
      },
      expected: [
        "If all goes well, I'll visit Tirupati in March.",
        "I'll visit Tirupati in March, if all goes well.",
        "If all goes well, I'll go to Tirupati.",
        "If all goes well, I'll visit Tirupati.",
      ],
      options: [
        "If all goes well, I'll visit Tirupati in March.",
        "If all will go well, I'll visit Tirupati in March.",
        "If all goes well, I'll visit Tirupati on March.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your cousin asks you to call after the trip. Say you'll call when you get home.",
        te: "ప్రయాణం తర్వాత ఫోన్ చేయమని మీ కజిన్ అడుగుతున్నారు. ఇంటికి చేరుకున్నాక ఫోన్ చేస్తానని చెప్పండి.",
      },
      expected: ["When I get home, I'll call you.", "I'll call you when I get home.", "I'll call you when I reach home."],
      options: ["When I get home, I'll call you.", "When I will get home, I'll call you.", "When I get to home, I'll call you."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Trip plans and a backup", te: "ప్రయాణ ప్లాన్, బ్యాకప్" },
    scene: {
      en: "You meet your friend Usha at the vegetable market. She asks about your trip to Tirupati.",
      te: "కూరగాయల మార్కెట్‌లో మీ స్నేహితురాలు ఉష గారు కలిశారు. మీ తిరుపతి ప్రయాణం గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Usha (your friend)", te: "ఉష (మీ స్నేహితురాలు)" },
    skills: [
      { id: "plans", label: { en: "Plans with if and when", te: "if, when తో ప్లాన్లు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hi! I heard you're planning a trip. Where are you going?",
        te: "హాయ్! మీరు ఏదో ప్రయాణం ప్లాన్ చేస్తున్నారని విన్నాను. ఎక్కడికి వెళ్తున్నారు?",
        hint: { en: "Tell her about Tirupati in March, and say it depends on things going well.", te: "మార్చిలో తిరుపతి గురించి చెప్పి, అంతా బాగుంటేనే అని చెప్పండి." },
        replies: [
          { say: "If all goes well, I'll visit Tirupati in March.", good: true, skill: "plans" },
          { say: "If all goes well, I'll visit Tirupati on March.", good: false, skill: "plans", fixIt: "preposition" },
        ],
      },
      {
        partner: "Lovely! Do you go there often?",
        te: "బాగుంది! మీరు అక్కడికి తరచూ వెళ్తుంటారా?",
        hint: { en: "Say yes: every year, with your cousins.", te: "అవును అని చెప్పండి: ప్రతి సంవత్సరం, మీ కజిన్స్‌తో." },
        replies: [
          { say: "Yes, I go every year with my cousins.", good: true, skill: "plans" },
          { say: "Yes, I am going every year with my cousins.", good: false, skill: "plans", fixIt: "state-ing" },
        ],
      },
      {
        partner: "What will you do if you don't get train tickets?",
        te: "రైలు టికెట్లు దొరకకపోతే ఏం చేస్తారు?",
        hint: { en: "Give your backup plan: the bus.", te: "మీ బ్యాకప్ ప్లాన్ చెప్పండి: బస్సు." },
        replies: [
          { say: "If I don't get train tickets, I'll take the bus.", good: true, skill: "plans" },
          { say: "Then we'll go by bus. That's our backup plan.", good: true, skill: "plans" },
          { say: "If I won't get train tickets, I'll take the bus.", good: false, skill: "plans" },
        ],
      },
      {
        partner: "Good thinking. Please bring me some laddus!",
        te: "బాగా ఆలోచించారు. నాకు కొన్ని లడ్డూలు తీసుకురండి!",
        hint: { en: "Promise to bring her some after the trip, and say goodbye.", te: "తిరిగి వచ్చాక తెస్తానని మాట ఇచ్చి, బై చెప్పండి." },
        replies: [
          { say: "Sure! When I come back, I'll bring you some. Bye!", good: true, skill: "polite" },
          { say: "Sure! When I will come back, I'll bring you some. Bye!", good: false, skill: "plans" },
          {
            say: "Laddus? Buy them yourself.",
            good: false,
            skill: "polite",
            react: { en: "Oh! I was only joking.", te: "అయ్యో! ఊరికే సరదాగా అన్నాను." },
          },
        ],
      },
    ],
  },
};
