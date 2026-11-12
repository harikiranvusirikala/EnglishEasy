import type { Lesson } from "../../types";

/** Week 50, Day 1 (CURRICULUM §5): because, so and that's why — explaining what went wrong with something you bought. */
export const day: Lesson = {
  id: "because-so-thats-why-returns",
  kind: "lesson",
  title: { en: "Because, So, That's Why", te: "అందుకే" },
  subtitle: "because / so / that's why",
  summary: {
    en: "Learn to explain a problem with its reason: The zip broke on the first day, so I brought it back.",
    te: "సమస్యని కారణంతో సహా చెప్పడం నేర్చుకుందాం: The zip broke on the first day, so I brought it back.",
  },
  seo: {
    title: "Because, So and That's Why in English for Telugu Speakers",
    description:
      "Say The zip broke on the first day, so I brought it back. Simple lessons for Telugu speakers on explaining a problem at a shop.",
  },
  pattern: [
    { text: "The zip", role: "who" },
    { text: "broke", role: "action" },
    { text: "on the first day,", role: "when" },
    { text: "so I brought it back", role: "what" },
  ],
  core: [
    { en: "It's too small, so I want to change it.", te: "ఇది చాలా చిన్నగా ఉంది, అందుకే మార్చుకోవాలనుకుంటున్నాను.", extra: ["changing"] },
    { en: "The zip broke on the first day, so I brought it back.", te: "మొదటి రోజే జిప్ పాడైపోయింది, అందుకే తిరిగి తీసుకొచ్చాను.", extra: ["in"] },
    { en: "I came back because the bag is torn.", te: "బ్యాగ్ చిరిగిపోయింది కాబట్టి మళ్ళీ వచ్చాను.", extra: ["so"] },
    { en: "There's a stain on it. That's why I came back.", te: "దీని మీద మరక ఉంది. అందుకే మళ్ళీ వచ్చాను.", extra: ["because"] },
    { en: "It stopped working after two days. That's why I'm here.", te: "రెండు రోజులకే పని చేయడం ఆగిపోయింది. అందుకే ఇక్కడికి వచ్చాను.", extra: ["day"] },
    { en: "These shoes hurt my feet, so I'd like a bigger size.", te: "ఈ షూస్ కాళ్ళకి నొప్పి పెడుతున్నాయి, అందుకే ఇంకా పెద్ద సైజు కావాలి.", extra: ["hurts"] },
    { en: "I paid 900 rupees, so I expected better quality.", te: "900 రూపాయలు పెట్టాను, అందుకే ఇంకా మంచి quality ఉంటుందనుకున్నాను.", extra: ["expect"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one thing at home that is broken or doesn't work well. Say aloud what is wrong, then add so or that's why.",
    te: "ఇంట్లో పాడైపోయిన లేదా సరిగ్గా పని చేయని ఒక వస్తువుని గుర్తు చేసుకోండి. దానికేమైందో గట్టిగా చెప్పి, so లేదా that's why తో ముగించండి.",
  },
  words: [
    { en: "that's why", te: "అందుకే" },
    { en: "zip", te: "జిప్" },
    { en: "torn", te: "చిరిగిపోయిన" },
    { en: "stain", te: "మరక" },
    { en: "bring back", te: "తిరిగి తీసుకురావడం" },
  ],
  grammar: ["connectors", "past-simple", "present-simple"],
  topics: ["shopping", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "because, so, that's why", te: "కాబట్టి, అందుకే" },
      body: {
        en: "Because comes before the reason: I came back because the bag is torn. So and that's why come before the result: it's torn, so I came back.",
        te: "because తర్వాత కారణం వస్తుంది (… కాబట్టి). so, that's why తర్వాత ఫలితం వస్తుంది (అందుకే …).",
      },
      bridge: {
        te: ["మొదటి రోజే", "జిప్", "పాడైపోయింది,", "అందుకే తిరిగి తీసుకొచ్చాను"],
        en: [
          { text: "The zip", role: "who" },
          { text: "broke", role: "action" },
          { text: "on the first day,", role: "when" },
          { text: "so I brought it back", role: "what" },
        ],
      },
      examples: [
        { en: "The zip broke on the first day, so I brought it back.", te: "మొదటి రోజే జిప్ పాడైపోయింది, అందుకే తిరిగి తీసుకొచ్చాను." },
        { en: "These shoes hurt my feet, so I'd like a bigger size.", te: "ఈ షూస్ కాళ్ళకి నొప్పి పెడుతున్నాయి, అందుకే ఇంకా పెద్ద సైజు కావాలి." },
        { en: "I paid 900 rupees, so I expected better quality.", te: "900 రూపాయలు పెట్టాను, అందుకే ఇంకా మంచి quality ఉంటుందనుకున్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Reason or result?", te: "కారణమా, ఫలితమా?" },
      items: [
        {
          form: "… because …",
          useFor: { en: "The reason comes after it.", te: "దీని తర్వాత కారణం వస్తుంది (… కాబట్టి)." },
          example: { en: "I came back because the bag is torn.", te: "బ్యాగ్ చిరిగిపోయింది కాబట్టి మళ్ళీ వచ్చాను." },
        },
        {
          form: "…, so …",
          useFor: { en: "The result comes after it, in the same sentence.", te: "అదే వాక్యంలో ఫలితం వస్తుంది (అందుకే …)." },
          example: { en: "It's too small, so I want to change it.", te: "ఇది చాలా చిన్నగా ఉంది, అందుకే మార్చుకోవాలనుకుంటున్నాను." },
        },
        {
          form: "That's why …",
          useFor: { en: "The result, in a new sentence.", te: "కొత్త వాక్యంలో ఫలితం (అందుకే …)." },
          example: { en: "There's a stain on it. That's why I came back.", te: "దీని మీద మరక ఉంది. అందుకే మళ్ళీ వచ్చాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "It don't fit.",
      right: "It doesn't fit.",
      why: {
        en: "With it, he or she, English uses doesn't, never don't.",
        te: "it, he, she తో doesn't వస్తుంది, don't రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Because the zip broke, so I brought it back.",
      right: "The zip broke, so I brought it back.",
      why: {
        en: "Use because or so, not both; Telugu says కాబట్టి and అందుకే together, but English uses one.",
        te: "because గానీ so గానీ ఒక్కటే వాడండి; తెలుగులో 'కాబట్టి… అందుకే' రెండూ అంటాం, ఇంగ్లీష్‌లో ఒక్కటే.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: { en: "Your new bag is torn. Tell the shopkeeper why you came back.", te: "మీ కొత్త బ్యాగ్ చిరిగిపోయింది. ఎందుకు మళ్ళీ వచ్చారో షాపువాళ్ళకి చెప్పండి." },
      options: ["I came back because the bag is torn.", "I came back so the bag is torn.", "I came back because bag is torn."],
      answer: 0,
      why: {
        en: "Because brings the reason, and one bag needs the before it.",
        te: "because తర్వాత కారణం వస్తుంది; ఒక బ్యాగ్ కాబట్టి ముందు the కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "It's too small, ___ I want to change it.",
      te: "ఇది చాలా చిన్నగా ఉంది, అందుకే మార్చుకోవాలనుకుంటున్నాను.",
      options: ["so", "because", "but"],
      answer: 0,
      why: {
        en: "The problem comes first, and so brings what you want next, like Telugu అందుకే.",
        te: "ముందు సమస్య, తర్వాత so తో ఏం కావాలో; తెలుగు 'అందుకే' లాగా.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend asks: Why did you take the shoes back? What do you say?",
        te: "షూస్ ఎందుకు వాపస్ ఇచ్చారు? అని స్నేహితులు అడిగారు. ఏమంటారు?",
      },
      options: ["Because they hurt my feet.", "So they hurt my feet.", "That's why they hurt my feet."],
      answer: 0,
      why: {
        en: "A why question gets because and the reason, like Telugu ఎందుకంటే.",
        te: "why ప్రశ్నకి because తో కారణం చెప్తాం, తెలుగు 'ఎందుకంటే' లాగా.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "The zip broke in the first day, so I brought it back.",
      wrongIndex: 3,
      fix: "The zip broke on the first day, so I brought it back.",
      why: {
        en: "For a day, English uses on: on the first day, on Monday.",
        te: "రోజుకి ఇంగ్లీష్‌లో on: on the first day, on Monday. 'రోజునే' అని in అనకూడదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "The shirt you bought is too small. Tell the shopkeeper, and say you want to change it.",
        te: "మీరు కొన్న షర్ట్ చాలా చిన్నగా ఉంది. ఆ విషయం షాపువాళ్ళకి చెప్పి, మార్చుకోవాలని అనండి.",
      },
      expected: ["It's too small, so I want to change it.", "It's too small. That's why I want to change it.", "It is too small, so I'd like to change it."],
      options: ["It's too small, so I want to change it.", "It's too small, because I want to change it.", "It too small, so I want to change it."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Your new pressure cooker stopped working after two days. Tell the shop why you are there.",
        te: "మీ కొత్త pressure cooker రెండు రోజులకే పని చేయడం ఆగిపోయింది. మీరు ఎందుకు వచ్చారో షాపులో చెప్పండి.",
      },
      expected: ["It stopped working after two days. That's why I'm here.", "It stopped working after two days, so I brought it back."],
      options: [
        "It stopped working after two days. That's why I'm here.",
        "It stopped working after two day. That's why I'm here.",
        "It stopped working after two days. That's because I'm here.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A broken bag", te: "పాడైన బ్యాగ్" },
    scene: {
      en: "Last week you bought a bag at Rahim's shop. The zip broke on the first day.",
      te: "పోయిన వారం మీరు రహీమ్ గారి షాపులో ఒక బ్యాగ్ కొన్నారు. మొదటి రోజే దాని జిప్ పాడైపోయింది.",
    },
    partner: { en: "Rahim (the shopkeeper)", te: "రహీమ్ (షాపు యజమాని)" },
    voice: "b",
    skills: [
      { id: "explain", label: { en: "Giving the reason", te: "కారణం చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! How can I help you?",
        te: "నమస్కారం! చెప్పండి, ఏం కావాలి?",
        hint: { en: "Greet him, and say you bought this bag here last week.", te: "నమస్కారం చెప్పి, ఈ బ్యాగ్ పోయిన వారం ఇక్కడే కొన్నారని చెప్పండి." },
        replies: [
          { say: "Good morning. I bought this bag here last week.", good: true, skill: "explain" },
          { say: "Good morning. I have bought this bag here last week.", good: false, skill: "explain" },
        ],
      },
      {
        partner: "Yes, I remember. What's the problem?",
        te: "అవును, గుర్తుంది. ఏంటి సమస్య?",
        hint: { en: "Say what broke and when, and that this is why you came back.", te: "ఏం పాడైందో, ఎప్పుడో చెప్పి, అందుకే వచ్చారని చెప్పండి." },
        replies: [
          { say: "The zip broke on the first day, so I brought it back.", good: true, skill: "explain" },
          {
            say: "Your bags are useless. The zip broke on day one!",
            good: false,
            skill: "polite",
            react: { en: "Useless? Please, let me see it first.", te: "పనికిరానివా? ముందు ఒకసారి నన్ను చూడనివ్వండి." },
          },
        ],
      },
      {
        partner: "Oh, I'm sorry. You didn't pull it too hard?",
        te: "అయ్యో, sorry. మీరు గట్టిగా లాగలేదు కదా?",
        hint: { en: "Say no: you were careful with it.", te: "లేదని చెప్పండి: మీరు జాగ్రత్తగానే వాడారు." },
        replies: [
          { say: "No, I didn't. I was very careful.", good: true, skill: "explain" },
          { say: "Yes. I was very careful.", good: false, skill: "explain", fixIt: "negative-answer" },
        ],
      },
      {
        partner: "Okay. Here is a new bag for you.",
        te: "సరే. ఇదిగోండి, మీకు కొత్త బ్యాగ్.",
        hint: { en: "Thank him, and say goodbye.", te: "థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Thank you so much. Have a nice day!", good: true, skill: "polite" },
          {
            say: "Okay. Give me a good one this time.",
            good: false,
            skill: "polite",
            react: { en: "Of course. I checked this one myself.", te: "తప్పకుండా. దీన్ని నేనే స్వయంగా చూశాను." },
          },
        ],
      },
    ],
  },
};
