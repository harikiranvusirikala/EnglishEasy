import type { Lesson } from "../../types";

/** Week 69, Day 1 (CURRICULUM §5): the second conditional for dreams — If I had more time, I would learn the veena. */
export const day: Lesson = {
  id: "if-i-had-more-time-dreams",
  kind: "lesson",
  title: { en: "If I Had More Time", te: "టైమ్ ఎక్కువ ఉంటే" },
  subtitle: "If I had …, I would …",
  summary: {
    en: "Learn to talk about small dreams and things you imagine: If I had more time, I would learn the veena.",
    te: "చిన్న కలలు, ఊహించుకునే విషయాల గురించి మాట్లాడటం నేర్చుకుందాం: If I had more time, I would learn the veena.",
  },
  seo: {
    title: "Talking About Dreams in English for Telugu Speakers",
    description:
      "Say If I had more time, I would learn the veena. Simple lessons for Telugu speakers on imagining things and sharing small dreams.",
  },
  pattern: [
    { text: "If I had more time,", role: "when" },
    { text: "I", role: "who" },
    { text: "would learn", role: "action" },
    { text: "the veena", role: "what" },
  ],
  core: [
    { en: "If I had more time, I would learn the veena.", te: "నాకు ఇంకా టైమ్ ఉంటే, వీణ నేర్చుకుంటాను.", extra: ["will"] },
    { en: "If I lived near the sea, I would walk on the beach.", te: "నేను సముద్రం దగ్గర ఉంటే, బీచ్‌లో నడుస్తాను.", extra: ["live"] },
    { en: "If I had a garden, I would grow vegetables.", te: "నాకు ఒక తోట ఉంటే, కూరగాయలు పెంచుతాను.", extra: ["have"] },
    { en: "If I knew how to drive, I would visit my cousins more often.", te: "నాకు డ్రైవింగ్ వస్తే, మా కజిన్స్ దగ్గరికి ఇంకా ఎక్కువగా వెళ్తాను.", extra: ["know"] },
    { en: "If I lived in a village, I would keep a cow.", te: "నేను పల్లెటూర్లో ఉంటే, ఒక ఆవుని పెంచుతాను.", extra: ["will"] },
    { en: "If I had spare time, I would teach the children in our colony.", te: "నాకు ఖాళీ టైమ్ ఉంటే, మా కాలనీ పిల్లలకి పాఠాలు చెప్తాను.", extra: ["has"] },
    { en: "I don't have time now, but it's my dream.", te: "ఇప్పుడు నాకు టైమ్ లేదు, కానీ అది నా కల.", extra: ["haven't"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one small dream. Say it aloud once: If I had more time, I would …",
    te: "మీ ఒక చిన్న కల గుర్తు చేసుకోండి. దాన్ని ఒకసారి గట్టిగా చెప్పండి: If I had more time, I would …",
  },
  words: [
    { en: "dream", te: "కల, ఆశ" },
    { en: "imagine", te: "ఊహించుకోవడం" },
    { en: "spare time", te: "ఖాళీ సమయం" },
    { en: "veena", te: "వీణ" },
    { en: "if I had", te: "నాకు … ఉంటే (ఊహ)" },
  ],
  grammar: ["conditionals", "past-simple", "will"],
  topics: ["people", "feelings", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Imagining with if", te: "if తో ఊహించి చెప్పడం" },
      body: {
        en: "For something not true now, use if + past, then would + verb: If I had more time, I would learn the veena. It is about now, not the past.",
        te: "ఇప్పుడు నిజం కాని దాన్ని ఊహించి చెప్పాలంటే if తర్వాత past, తర్వాత would + verb. ఇది ఇప్పటి గురించే, గతం గురించి కాదు.",
      },
      bridge: {
        te: ["నాకు ఇంకా టైమ్ ఉంటే,", "వీణ", "నేర్చుకుంటాను"],
        en: [
          { text: "If I had more time,", role: "when" },
          { text: "I", role: "who" },
          { text: "would learn", role: "action" },
          { text: "the veena", role: "what" },
        ],
      },
      examples: [
        { en: "If I had more time, I would learn the veena.", te: "నాకు ఇంకా టైమ్ ఉంటే, వీణ నేర్చుకుంటాను." },
        { en: "If I lived near the sea, I would walk on the beach.", te: "నేను సముద్రం దగ్గర ఉంటే, బీచ్‌లో నడుస్తాను." },
        { en: "If I had a garden, I would grow vegetables.", te: "నాకు ఒక తోట ఉంటే, కూరగాయలు పెంచుతాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "True now, or only a dream?", te: "ఇప్పుడు నిజమా, కల మాత్రమేనా?" },
      items: [
        {
          form: "I have … / I will …",
          useFor: { en: "Something true now, or a real plan.", te: "ఇప్పుడు నిజంగా ఉన్నది, లేదా నిజమైన ప్లాన్." },
          example: { en: "I have time today, so I will visit Padma.", te: "ఈ రోజు నాకు టైమ్ ఉంది, అందుకే పద్మ గారిని చూడటానికి వెళ్తాను." },
        },
        {
          form: "If I had …, I would …",
          useFor: { en: "Something not true now. You only imagine it.", te: "ఇప్పుడు నిజం కానిది. మీరు ఊహిస్తున్నారు, అంతే." },
          example: { en: "If I had more time, I would learn the veena.", te: "నాకు ఇంకా టైమ్ ఉంటే, వీణ నేర్చుకుంటాను." },
        },
        {
          form: "I'd = I would",
          useFor: { en: "In speaking, I would is often short: I'd.", te: "మాట్లాడేటప్పుడు I would ని చిన్నగా I'd అంటారు." },
          example: { en: "If I lived near the sea, I'd walk every morning.", te: "నేను సముద్రం దగ్గర ఉంటే, రోజూ పొద్దున నడుస్తాను." },
        },
        {
          form: "If I knew …",
          useFor: { en: "know becomes knew in an imagined if.", te: "ఊహలో know కాస్తా knew అవుతుంది." },
          example: { en: "If I knew how to drive, I would visit my cousins more often.", te: "నాకు డ్రైవింగ్ వస్తే, మా కజిన్స్ దగ్గరికి ఇంకా ఎక్కువగా వెళ్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "If I would have more time, I would learn the veena.",
      right: "If I had more time, I would learn the veena.",
      why: {
        en: "Would goes only in the second half; after if, use the past, had.",
        te: "would రెండో భాగంలో మాత్రమే వస్తుంది; if తర్వాత past, అంటే had వాడాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "If I was knowing Hindi, I would talk to them.",
      right: "If I knew Hindi, I would talk to them.",
      why: {
        en: "Know is a state, so it never takes -ing; its past is knew.",
        te: "know ఒక స్థితి, అందుకే దానికి -ing రాదు; దాని past knew. తెలుగు 'తెలిసుంటే' ని -ing గా మార్చకండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "You love plants, but you live in a small flat. Tell your friend what you imagine.",
        te: "మీకు మొక్కలంటే ఇష్టం, కానీ మీరు ఒక చిన్న flat లో ఉంటారు. మీరు ఏం ఊహించుకుంటారో స్నేహితులకి చెప్పండి.",
      },
      options: ["If I had a garden, I would grow vegetables.", "If I had garden, I would grow vegetables.", "If I would have a garden, I would grow vegetables."],
      answer: 0,
      why: {
        en: "After if, use had, not would have; and one garden needs a.",
        te: "if తర్వాత would have కాదు, had; ఒక తోట కాబట్టి ముందు a కూడా కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "If I ___ near the sea, I would walk on the beach.",
      te: "నేను సముద్రం దగ్గర ఉంటే, బీచ్‌లో నడుస్తాను.",
      options: ["lived", "live", "would live"],
      answer: 0,
      why: {
        en: "This is only imagined, so the if part takes the past form.",
        te: "ఇది ఊహ మాత్రమే, అందుకే if భాగంలో past వస్తుంది. తెలుగులో 'ఉంటే' అన్నిటికీ ఒకటే, ఇంగ్లీష్‌లో కాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your friend Gopal says: If I had a car, I would visit you every week. Does Gopal have a car?",
        te: "మీ స్నేహితుడు గోపాల్ గారు If I had a car, I would visit you every week అన్నారు. గోపాల్ గారికి కారు ఉందా?",
      },
      options: ["No, he doesn't have a car.", "No, he don't have a car.", "Yes, he has a car."],
      answer: 0,
      why: {
        en: "If with had means only imagined, so he has no car; he takes doesn't.",
        te: "if తో had అంటే ఊహ మాత్రమే, అంటే ఆయనకి కారు లేదు; he తో don't కాదు, doesn't.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "If I had more time, I will learn to swim.",
      wrongIndex: 6,
      fix: "If I had more time, I would learn to swim.",
      why: {
        en: "With had in the if part, the other part takes would, not will.",
        te: "if భాగంలో had ఉంటే, రెండో భాగంలో will కాదు, would వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your neighbour asks what you would do with more time. Say you would read more books.",
        te: "ఇంకా టైమ్ ఉంటే ఏం చేస్తారని పక్కింటివారు అడుగుతున్నారు. ఇంకా ఎక్కువ పుస్తకాలు చదువుతానని చెప్పండి.",
      },
      expected: ["If I had more time, I would read more books.", "I would read more books.", "I'd read more books.", "If I had more time, I'd read more books."],
      options: ["If I had more time, I would read more books.", "If I would have more time, I would read more books.", "If I had more time, I will read more books."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "A friend asks you to join a yoga class. Say you are busy now, but you would join with more time.",
        te: "యోగా క్లాస్‌లో చేరమని స్నేహితులు అడుగుతున్నారు. ఇప్పుడు బిజీ అని, టైమ్ ఉంటే చేరతానని చెప్పండి.",
      },
      expected: ["I'm busy now, but if I had more time, I would join.", "Sorry, I'm busy now.", "I'm busy now. If I had time, I'd join."],
      options: ["I'm busy now, but if I had more time, I would join.", "I busy now, but if I had more time, I would join.", "I'm busy now, but if I had more time, I will join."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Dreams at the park", te: "పార్క్‌లో కలల కబుర్లు" },
    scene: {
      en: "You are sitting on a bench at the park in the evening. Your friend Sarala sits down next to you.",
      te: "సాయంత్రం మీరు పార్క్‌లో బెంచీ మీద కూర్చున్నారు. మీ స్నేహితురాలు సరళ గారు వచ్చి మీ పక్కన కూర్చున్నారు.",
    },
    partner: { en: "Sarala (your friend)", te: "సరళ (మీ స్నేహితురాలు)" },
    skills: [
      { id: "dream", label: { en: "Talking about dreams", te: "కలల గురించి చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening! You look happy today. What are you thinking about?",
        te: "నమస్కారం! ఈ రోజు సంతోషంగా కనిపిస్తున్నారు. దేని గురించి ఆలోచిస్తున్నారు?",
        hint: { en: "Say you are thinking about a small dream: music.", te: "ఒక చిన్న కల గురించి ఆలోచిస్తున్నారని చెప్పండి: సంగీతం." },
        replies: [
          { say: "I'm thinking about my dream. I'd love to learn the veena.", good: true, skill: "dream" },
          { say: "Just a small dream. I want to learn the veena.", good: true, skill: "dream" },
          { say: "I thinking about my dream. I want to learn the veena.", good: false, skill: "dream", fixIt: "be" },
        ],
      },
      {
        partner: "The veena! That's lovely. Why don't you start?",
        te: "వీణా! చాలా బాగుంది. మొదలుపెట్టొచ్చు కదా?",
        hint: { en: "Say you have no time now, and what you would do with more time.", te: "ఇప్పుడు టైమ్ లేదని, ఇంకా టైమ్ ఉంటే ఏం చేస్తారో చెప్పండి." },
        replies: [
          { say: "I'm too busy now. If I had more time, I'd join a class.", good: true, skill: "dream" },
          { say: "I'm too busy now. If I would have more time, I'd join a class.", good: false, skill: "dream" },
        ],
      },
      {
        partner: "I understand. And if you lived near the sea, what would you do?",
        te: "అర్థమైంది. మరి మీరు సముద్రం దగ్గర ఉంటే, ఏం చేస్తారు?",
        hint: { en: "Imagine it, and say what you would do there each morning.", te: "ఊహించుకుని, అక్కడ రోజూ పొద్దున ఏం చేస్తారో చెప్పండి." },
        replies: [
          { say: "I would walk on the beach every morning.", good: true, skill: "dream" },
          { say: "I'd walk by the sea and watch the sunrise.", good: true, skill: "dream" },
          {
            say: "What a silly question! I live in Guntur.",
            good: false,
            skill: "polite",
            react: { en: "Ha ha, it's only a game! Just imagine.", te: "హహ, ఇది ఆట మాత్రమే! ఊరికే ఊహించుకోండి." },
          },
        ],
      },
      {
        partner: "That sounds lovely. Well, it's getting dark. Shall we go home?",
        te: "బాగుంది. సరే, చీకటి పడుతోంది. ఇంటికి వెళ్దామా?",
        hint: { en: "Agree, and say goodbye until tomorrow.", te: "ఒప్పుకుని, రేపు కలుద్దామని బై చెప్పండి." },
        replies: [
          { say: "Yes, let's go. See you tomorrow!", good: true, skill: "polite" },
          { say: "Yes, let's going. See you tomorrow!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
