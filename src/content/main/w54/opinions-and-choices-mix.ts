import type { Lesson } from "../../types";

/** Week 54, Day 2 (CURRICULUM §5): Checkpoint 4 mix — opinions, comparing and if + will (Weeks 46–48), helping a neighbour choose a phone. */
export const day: Lesson = {
  id: "opinions-and-choices-mix",
  kind: "lesson",
  title: { en: "Opinions and Choices", te: "అభిప్రాయాలు, ఎంపికలు" },
  subtitle: "I think, not as heavy as, if it breaks",
  summary: {
    en: "Help a neighbour choose a phone: give your opinion, compare two phones, and say what you'll do if it breaks.",
    te: "పక్కింటివారికి ఫోన్ ఎంచుకోవడంలో సాయం చేద్దాం: అభిప్రాయం చెప్పడం, రెండు ఫోన్లు పోల్చడం, పాడైతే ఏం చేస్తారో చెప్పడం.",
  },
  seo: {
    title: "Giving Opinions and Choosing in English for Telugu Speakers",
    description:
      "Say I think the smaller phone is better for you and If it breaks, I'll take it back. Lessons for Telugu speakers on opinions and choices.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "think", role: "action" },
    { text: "the smaller phone is better", role: "what" },
    { text: "for you", role: "what" },
  ],
  core: [
    { en: "I think the smaller phone is better for you.", te: "నా ఉద్దేశంలో చిన్న ఫోనే మీకు బాగుంటుంది.", extra: ["more"] },
    { en: "If it breaks, I'll take it back to the shop.", te: "అది పాడైతే, నేను దాన్ని తిరిగి షాపుకి తీసుకెళ్తాను.", extra: ["will"] },
    { en: "This one is not as heavy as the big one.", te: "ఇది పెద్దదానంత బరువుగా లేదు.", extra: ["than"] },
    { en: "I don't think you need the most expensive one.", te: "మీకు అన్నిటికంటే ఖరీదైనది అవసరం లేదనుకుంటాను.", extra: ["thinking"] },
    { en: "I see your point, but the battery is more important.", te: "మీరు చెప్పేది అర్థమైంది, కానీ బ్యాటరీ ఇంకా ముఖ్యం." },
    { en: "What do you think about the blue one?", te: "నీలం రంగుది మీకు ఎలా అనిపిస్తోంది?", extra: ["are"] },
    { en: "I'd rather buy the one with a bigger screen.", te: "పెద్ద screen ఉన్నదే కొనడం నాకు మేలు.", extra: ["to"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Compare two things at home, like two fans or two bags. Say aloud which is better and why.",
    te: "ఇంట్లో రెండు వస్తువులు పోల్చండి, రెండు ఫ్యాన్లు లేదా రెండు బ్యాగులు లాగా. ఏది బాగుందో, ఎందుకో గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "battery life", te: "ఛార్జ్ ఎంతసేపు ఉంటుందో" },
    { en: "budget", te: "బడ్జెట్, పెట్టగలిగే డబ్బు" },
    { en: "value for money", te: "పెట్టిన డబ్బుకి తగ్గ విలువ" },
    { en: "important", te: "ముఖ్యమైన" },
    { en: "lightweight", te: "తేలికైన" },
  ],
  grammar: ["comparatives-superlatives", "conditionals", "politeness-softening"],
  topics: ["shopping", "technology", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Opinion, compare, decide", te: "అభిప్రాయం, పోలిక, నిర్ణయం" },
      body: {
        en: "Give your opinion with I think and a reason. Compare with not as heavy as or lighter than. For a plan, say If it breaks, I'll take it back.",
        te: "I think తో మీ అభిప్రాయం, ఒక కారణం చెప్పండి. పోల్చడానికి not as heavy as, lighter than; తర్వాతి ప్లాన్‌కి If it breaks, I'll take it back.",
      },
      bridge: {
        te: ["నా ఉద్దేశంలో", "చిన్న ఫోనే", "మీకు బాగుంటుంది"],
        en: [
          { text: "I", role: "who" },
          { text: "think", role: "action" },
          { text: "the smaller phone is better", role: "what" },
          { text: "for you", role: "what" },
        ],
      },
      examples: [
        { en: "I think the smaller phone is better for you.", te: "నా ఉద్దేశంలో చిన్న ఫోనే మీకు బాగుంటుంది." },
        { en: "This one is not as heavy as the big one.", te: "ఇది పెద్దదానంత బరువుగా లేదు." },
        { en: "If it breaks, I'll take it back to the shop.", te: "అది పాడైతే, నేను దాన్ని తిరిగి షాపుకి తీసుకెళ్తాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which one to use", te: "ఏది ఎప్పుడు వాడాలి" },
      items: [
        {
          form: "I think / I don't think",
          useFor: { en: "Your opinion, said gently.", te: "మీ అభిప్రాయం, మెత్తగా." },
          example: { en: "I don't think you need the most expensive one.", te: "మీకు అన్నిటికంటే ఖరీదైనది అవసరం లేదనుకుంటాను." },
        },
        {
          form: "not as … as",
          useFor: { en: "Less than the other one.", te: "రెండో దాని కంటే తక్కువ." },
          example: { en: "This one is not as heavy as the big one.", te: "ఇది పెద్దదానంత బరువుగా లేదు." },
        },
        {
          form: "I'd rather + verb",
          useFor: { en: "What you would choose.", te: "మీరైతే ఏది ఎంచుకుంటారో." },
          example: { en: "I'd rather buy the one with a bigger screen.", te: "పెద్ద screen ఉన్నదే కొనడం నాకు మేలు." },
        },
        {
          form: "If + now form, I'll + verb",
          useFor: { en: "What you will do later, if it happens.", te: "అలా జరిగితే, తర్వాత మీరు ఏం చేస్తారో." },
          example: { en: "If it breaks, I'll take it back to the shop.", te: "అది పాడైతే, నేను దాన్ని తిరిగి షాపుకి తీసుకెళ్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "My neighbour prefer the big phone.",
      right: "My neighbour prefers the big phone.",
      why: {
        en: "With one person, like my neighbour, add s to prefer; Telugu verbs don't change like this.",
        te: "ఒక్కరి గురించి చెప్తే, my neighbour లాగా, prefer కి s చేర్చాలి; తెలుగు verbs ఇలా మారవు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "You are wrong. The big one is better.",
      right: "I see your point, but the big one is better.",
      why: {
        en: "You are wrong sounds rude; I see your point, but disagrees kindly.",
        te: "You are wrong అంటే మొరటుగా ఉంటుంది; I see your point, but అంటే మర్యాదగా వేరే అభిప్రాయం చెప్పినట్టు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "Your neighbour asks which one you like. Say you prefer the black one to the white one.",
        te: "మీకు ఏది నచ్చిందని పక్కింటివారు అడుగుతున్నారు. తెల్లదాని కంటే నల్లదే ఇష్టమని చెప్పండి.",
      },
      options: ["I prefer the black one to the white one.", "I prefer the black one than the white one.", "I am preferring the black one to the white one."],
      answer: 0,
      why: {
        en: "Prefer takes to before the second thing; than goes only with words like better.",
        te: "prefer తో రెండో దాని ముందు to వస్తుంది; than అనేది better లాంటి పదాలతోనే.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "label",
      heading: "Sunrise A12 Smartphone",
      lines: ["Screen: 6.5 inch", "Battery life: up to 2 days", "Weight: 160 grams, lightweight", "Warranty: 1 year"],
      prompt: {
        en: "Your neighbour wants a phone that lasts long without charging. What does the box say?",
        te: "charge చేయకుండా ఎక్కువసేపు ఉండే ఫోన్ కావాలని పక్కింటివారు అంటున్నారు. box మీద ఏముంది?",
      },
      options: ["It lasts up to two days.", "It lasts up to one year.", "It lasts up to six hours."],
      answer: 0,
      why: {
        en: "The battery life line says two days; one year is the warranty.",
        te: "Battery life లైన్‌లో 2 రోజుల దాకా అని ఉంది; ఒక సంవత్సరం అనేది warranty.",
      },
      say: "Battery life: up to 2 days.",
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "article",
      sentence: "I think this phone is ___ best value for money.",
      te: "నా ఉద్దేశంలో పెట్టిన డబ్బుకి ఈ ఫోనే అన్నిటికంటే బాగుంది.",
      options: ["the", "a", "most"],
      answer: 0,
      why: {
        en: "Best always has the before it, because only one thing can be the best.",
        te: "best ముందు ఎప్పుడూ the వస్తుంది, ఎందుకంటే అన్నిటికంటే బాగున్నది ఒక్కటే.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "If the price will come down, I'll buy it next month.",
      wrongIndex: 3,
      fix: "If the price comes down, I'll buy it next month.",
      why: {
        en: "After if, use the now form, even for later; will goes in the other half.",
        te: "if తర్వాత, తర్వాత జరిగేదైనా present form వాడాలి; will రెండో భాగంలోనే వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your neighbour asks your opinion. Say you think the smaller one is lighter.",
        te: "పక్కింటివారు మీ అభిప్రాయం అడుగుతున్నారు. చిన్నది తేలికగా ఉందని మీకు అనిపిస్తోందని చెప్పండి.",
      },
      expected: ["I think the smaller one is lighter.", "I think the small one is lighter.", "I think the smaller phone is lighter."],
      options: ["I think the smaller one is lighter.", "I think the smaller one lighter.", "I am thinking the smaller one is lighter."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend says the big phone is better. Disagree politely: the small one is easier to carry.",
        te: "పెద్ద ఫోనే బాగుందని మీ స్నేహితులు అంటున్నారు. మర్యాదగా వేరే అభిప్రాయం చెప్పండి: చిన్నది తీసుకెళ్ళడానికి సులువు.",
      },
      expected: [
        "I see your point, but the small one is easier to carry.",
        "That's true, but the small one is easier to carry.",
        "I'm not so sure. The small one is easier to carry.",
      ],
      options: [
        "I see your point, but the small one is easier to carry.",
        "You are wrong. The small one is easier to carry.",
        "I see your point, but the small one is more easier to carry.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Choosing a phone", te: "ఫోన్ ఎంచుకోవడం" },
    scene: {
      en: "Your neighbour Kamala wants a new phone. You have come to the mobile shop with her to help her choose.",
      te: "మీ పక్కింటి కమల గారికి కొత్త ఫోన్ కావాలి. ఎంచుకోవడంలో సాయం చేయడానికి మీరు ఆవిడతో mobile shop కి వచ్చారు.",
    },
    partner: { en: "Kamala (your neighbour)", te: "కమల (పక్కింటావిడ)" },
    skills: [
      { id: "opinion", label: { en: "Giving an opinion", te: "అభిప్రాయం చెప్పడం" } },
      { id: "compare", label: { en: "Comparing", te: "పోల్చడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Thanks for coming! So many phones here. Which one do you like?",
        te: "వచ్చినందుకు థాంక్స్! ఇక్కడ ఎన్ని ఫోన్లో! మీకు ఏది నచ్చింది?",
        hint: { en: "Give your opinion: say the smaller phone suits her better.", te: "మీ అభిప్రాయం చెప్పండి: చిన్న ఫోనే ఆవిడకి బాగుంటుందని." },
        replies: [
          { say: "I think the smaller one is better for you.", good: true, skill: "opinion" },
          { say: "I think the smaller one is more better for you.", good: false, skill: "opinion" },
        ],
      },
      {
        partner: "But the big one has a better camera.",
        te: "కానీ పెద్దదాని camera ఇంకా బాగుంది.",
        hint: { en: "Agree a little, then say battery life matters more.", te: "కొంచెం ఒప్పుకుని, battery life ఇంకా ముఖ్యమని చెప్పండి." },
        replies: [
          { say: "That's true, but battery life is more important.", good: true, skill: "opinion" },
          { say: "I see your point, but the battery is more important.", good: true, skill: "opinion" },
          {
            say: "Camera? At your age, you don't need a good camera.",
            good: false,
            skill: "polite",
            react: { en: "Why not? I want to send photos to my cousins!", te: "ఎందుకు అక్కర్లేదు? మా కజిన్స్‌కి ఫోటోలు పంపాలి కదా!" },
          },
        ],
      },
      {
        partner: "Hmm. And the price? My budget is twelve thousand.",
        te: "హ్మ్. మరి ధర? నా బడ్జెట్ పన్నెండు వేలు.",
        hint: { en: "Compare the prices: say the small one costs less, and how much.", te: "ధరలు పోల్చండి: చిన్నది తక్కువ ధర అని, ఎంతో చెప్పండి." },
        replies: [
          { say: "The small one is not as expensive. It's only ten thousand.", good: true, skill: "compare" },
          { say: "The small one is not as expensive than the big one.", good: false, skill: "compare" },
        ],
      },
      {
        partner: "Okay, I'll take it. But what if it stops working?",
        te: "సరే, ఇదే తీసుకుంటాను. కానీ అది పని చేయడం ఆగిపోతే?",
        hint: { en: "Calm her, and say what you will do if it breaks.", te: "ఆవిడకి ధైర్యం చెప్పి, అది పాడైతే మీరు ఏం చేస్తారో చెప్పండి." },
        replies: [
          { say: "Don't worry. If it breaks, I'll take it back to the shop.", good: true, skill: "compare" },
          { say: "Don't worry. If it will break, I'll take it back.", good: false, skill: "compare" },
        ],
      },
    ],
  },
};
