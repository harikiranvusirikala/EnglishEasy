import type { Lesson } from "../../types";

/** Week 48, Day 1 (CURRICULUM §5): the first conditional — If it rains, I'll stay at home (never "If it will rain"). */
export const day: Lesson = {
  id: "if-it-rains-ill-stay-home",
  kind: "lesson",
  title: { en: "If It Rains, I'll Stay Home", te: "వర్షం పడితే ఇంట్లోనే" },
  subtitle: "If + present, will + verb",
  summary: {
    en: "Learn to make plans that depend on the weather: If it rains, I'll stay at home. If it's sunny, we'll go.",
    te: "వాతావరణం మీద ఆధారపడే ప్లాన్లు చెప్పడం నేర్చుకుందాం: If it rains, I'll stay at home. If it's sunny, we'll go.",
  },
  seo: {
    title: "If It Rains, I'll Stay Home in English for Telugu Speakers",
    description:
      "Say If it rains, I'll stay at home and If it's sunny, we'll go. Simple lessons for Telugu speakers on plans that depend on the weather.",
  },
  pattern: [
    { text: "If it rains,", role: "when" },
    { text: "I'll", role: "who" },
    { text: "stay", role: "action" },
    { text: "at home", role: "what" },
  ],
  core: [
    { en: "If it rains, I'll stay at home.", te: "వర్షం పడితే, నేను ఇంట్లోనే ఉంటాను.", extra: ["will"] },
    { en: "If it's sunny tomorrow, we'll dry the pickles on the terrace.", te: "రేపు ఎండగా ఉంటే, డాబా మీద ఊరగాయ ఎండబెడతాం.", extra: ["in"] },
    { en: "If it rains, we'll go to the temple another day.", te: "వర్షం పడితే, ఇంకో రోజు గుడికి వెళ్తాం.", extra: ["rain"] },
    { en: "If it doesn't rain, I'll come with you.", te: "వర్షం పడకపోతే, నేను మీతో వస్తాను.", extra: ["won't"] },
    { en: "I'll take an umbrella if it looks cloudy.", te: "మబ్బు పట్టినట్టు ఉంటే, గొడుగు తీసుకెళ్తాను.", extra: ["will"] },
    { en: "If the rain stops by four, we'll go for a walk.", te: "నాలుగింటికల్లా వర్షం ఆగితే, నడకకి వెళ్తాం.", extra: ["stop"] },
    { en: "If the sky clears up by noon, we'll leave.", te: "మధ్యాహ్నానికల్లా ఆకాశం తెరిపిస్తే, బయలుదేరుతాం.", extra: ["clear"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at the sky today, and say one plan aloud: If it rains, I'll …",
    te: "ఈ రోజు ఆకాశం చూసి, ఒక ప్లాన్ గట్టిగా చెప్పండి: If it rains, I'll …",
  },
  words: [
    { en: "if", te: "ఒకవేళ … అయితే, …తే" },
    { en: "pickle", te: "ఊరగాయ, పచ్చడి" },
    { en: "raincoat", te: "రెయిన్‌కోట్, వాన కోటు" },
    { en: "drizzle", te: "చిరుజల్లు, తుంపర" },
    { en: "clear up", te: "వర్షం తగ్గి ఆకాశం తెరిపివ్వడం" },
  ],
  grammar: ["conditionals", "will", "present-simple"],
  topics: ["weather", "time", "travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "If it rains, I'll …", te: "వర్షం పడితే, …" },
      body: {
        en: "For a plan that depends on something, say If and the present, then will: If it rains, I'll stay at home. Will never goes in the if part.",
        te: "దేని మీదైనా ఆధారపడే ప్లాన్‌కి If తర్వాత present, ఆ తర్వాత will వాడండి: If it rains, I'll stay at home. if భాగంలో will ఎప్పుడూ రాదు.",
      },
      bridge: {
        te: ["వర్షం పడితే,", "నేను", "ఇంట్లోనే", "ఉంటాను"],
        en: [
          { text: "If it rains,", role: "when" },
          { text: "I'll", role: "who" },
          { text: "stay", role: "action" },
          { text: "at home", role: "what" },
        ],
      },
      examples: [
        { en: "If it rains, I'll stay at home.", te: "వర్షం పడితే, నేను ఇంట్లోనే ఉంటాను." },
        { en: "If it's sunny tomorrow, we'll dry the pickles on the terrace.", te: "రేపు ఎండగా ఉంటే, డాబా మీద ఊరగాయ ఎండబెడతాం." },
        { en: "If it rains, we'll go to the temple another day.", te: "వర్షం పడితే, ఇంకో రోజు గుడికి వెళ్తాం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which part gets will?", te: "will ఏ భాగంలో వస్తుంది?" },
      items: [
        {
          form: "If it rains / If it's sunny",
          useFor: { en: "The if part: the present, even for tomorrow.", te: "if భాగం: రేపటి గురించైనా present." },
          example: { en: "If it's sunny tomorrow, we'll dry the pickles on the terrace.", te: "రేపు ఎండగా ఉంటే, డాబా మీద ఊరగాయ ఎండబెడతాం." },
        },
        {
          form: "I'll / we'll + verb",
          useFor: { en: "The other part: what you will do.", te: "రెండో భాగం: మీరు ఏం చేస్తారో." },
          example: { en: "If it rains, I'll wear my raincoat.", te: "వర్షం పడితే, నా రెయిన్‌కోట్ వేసుకుంటాను." },
        },
        {
          form: "If it doesn't …",
          useFor: { en: "An if part with no: doesn't, isn't.", te: "'…కపోతే' అనడానికి: doesn't, isn't." },
          example: { en: "If it doesn't rain, I'll come with you.", te: "వర్షం పడకపోతే, నేను మీతో వస్తాను." },
        },
        {
          form: "… if …",
          useFor: { en: "The if part can come last, with no comma.", te: "if భాగం చివర్లో కూడా రావచ్చు; అప్పుడు comma ఉండదు." },
          example: { en: "I'll take an umbrella if it looks cloudy.", te: "మబ్బు పట్టినట్టు ఉంటే, గొడుగు తీసుకెళ్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "If it will rain, I'll stay at home.",
      right: "If it rains, I'll stay at home.",
      why: {
        en: "The if part takes the present, even about tomorrow; will goes only in the other part.",
        te: "if భాగంలో రేపటి గురించైనా present వస్తుంది; will రెండో భాగంలో మాత్రమే.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "If it rain tomorrow, we'll stay at home.",
      right: "If it rains tomorrow, we'll stay at home.",
      why: {
        en: "It is one thing, like he or she, so the verb takes s: rains, looks, stops.",
        te: "it అంటే ఒక్కటే, he, she లాగా; అందుకే verb కి s వస్తుంది: rains, looks, stops.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your friend asks about the morning walk tomorrow. Tell her your plan if it rains.",
        te: "రేపు పొద్దుటి నడక గురించి స్నేహితురాలు అడుగుతున్నారు. వర్షం పడితే మీ ప్లాన్ ఏంటో చెప్పండి.",
      },
      options: ["If it rains, I'll stay at home.", "If it will rain, I'll stay at home.", "If it rains, I staying at home."],
      answer: 0,
      why: {
        en: "The if part stays in the present, and the plan uses I'll with a plain verb.",
        te: "if భాగం present లోనే ఉంటుంది; ప్లాన్‌కి I'll తర్వాత verb అలాగే వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "If it's sunny tomorrow, we'll dry the pickles ___ the terrace.",
      te: "రేపు ఎండగా ఉంటే, డాబా మీద ఊరగాయ ఎండబెడతాం.",
      options: ["on", "in", "into"],
      answer: 0,
      why: {
        en: "A terrace is an open top, so things are on it, like Telugu మీద.",
        te: "డాబా పైన తెరిచి ఉండే చోటు; తెలుగు 'మీద' లాగా on వాడాలి, in కాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your neighbour says: If it doesn't rain, I'll come with you. What does she mean?",
        te: "పక్కింటావిడ If it doesn't rain, I'll come with you అన్నారు. ఆవిడ ఉద్దేశం ఏంటి?",
      },
      options: ["She will come only if there is no rain.", "She will come even in the rain.", "She will not come at all."],
      answer: 0,
      why: {
        en: "If it doesn't rain sets a condition: no rain, and then she comes.",
        te: "If it doesn't rain అనేది ఒక షరతు: వర్షం లేకపోతేనే ఆవిడ వస్తారు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "I'll take umbrella if it looks cloudy.",
      wrongIndex: 2,
      fix: "I'll take an umbrella if it looks cloudy.",
      why: {
        en: "One umbrella needs an before it, because umbrella starts with a vowel sound.",
        te: "ఒక గొడుగు కాబట్టి ముందు an కావాలి; umbrella అచ్చు శబ్దంతో మొదలవుతుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Rain is coming, and your friend asks about the temple visit tomorrow. Tell her your plan if it rains.",
        te: "వర్షం వచ్చేలా ఉంది. రేపు గుడికి వెళ్ళడం గురించి స్నేహితురాలు అడుగుతున్నారు. వర్షం పడితే మీ ప్లాన్ చెప్పండి.",
      },
      expected: [
        "If it rains, we'll go to the temple another day.",
        "If it rains, we'll go another day.",
        "If it rains, I'll stay at home.",
        "We'll go another day if it rains.",
      ],
      options: ["If it rains, we'll go another day.", "If it will rain, we'll go another day.", "If it rains, we'll going another day."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your neighbour asks: Shall we dry the pickles tomorrow? Say yes, if it is sunny.",
        te: "రేపు ఊరగాయ ఎండబెడదామా? అని పక్కింటివారు అడుగుతున్నారు. ఎండగా ఉంటే సరే అని చెప్పండి.",
      },
      expected: ["Yes, if it's sunny, we'll dry them.", "If it's sunny, we'll dry the pickles.", "Yes, if it's sunny tomorrow.", "Yes, if it is sunny."],
      options: ["Yes, if it's sunny, we'll dry them.", "Yes, if it sunny, we'll dry them.", "Yes, if it will be sunny, we'll dry them."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A temple visit and the rain", te: "గుడికి వెళ్ళడం, వర్షం" },
    scene: {
      en: "Your friend Kavitha wants to visit the Durga temple with you tomorrow. The forecast says rain.",
      te: "మీ స్నేహితురాలు కవిత గారు రేపు మీతో కలిసి దుర్గ గుడికి వెళ్ళాలనుకుంటున్నారు. వర్షం పడుతుందని forecast చెప్తోంది.",
    },
    partner: { en: "Kavitha (your friend)", te: "కవిత (మీ స్నేహితురాలు)" },
    skills: [
      { id: "if", label: { en: "Plans with if", te: "if తో ప్లాన్లు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Shall we go to the Durga temple tomorrow morning?",
        te: "హలో! రేపు పొద్దున దుర్గ గుడికి వెళ్దామా?",
        hint: { en: "Say yes, but tell her what the forecast says.", te: "సరే అని, కానీ forecast ఏం చెప్తోందో ఆవిడకి చెప్పండి." },
        replies: [
          { say: "Yes, but the forecast says rain tomorrow.", good: true, skill: "if" },
          { say: "Yes, but forecast says rain tomorrow.", good: false, skill: "if", fixIt: "article" },
        ],
      },
      {
        partner: "Oh! Then what shall we do?",
        te: "అయ్యో! మరి ఏం చేద్దాం?",
        hint: { en: "Give your plan for rain: another day.", te: "వర్షం పడితే మీ ప్లాన్ చెప్పండి: ఇంకో రోజు." },
        replies: [
          { say: "If it rains, we'll go another day.", good: true, skill: "if" },
          { say: "Let's go another day if it rains.", good: true, skill: "if" },
          { say: "If it will rain, we'll go another day.", good: false, skill: "if" },
        ],
      },
      {
        partner: "And if it's only a drizzle?",
        te: "చిరుజల్లు మాత్రమే అయితే?",
        hint: { en: "Say you'll still go, and you'll bring umbrellas for both of you.", te: "అయినా వెళ్దామని, ఇద్దరికీ గొడుగులు తెస్తానని చెప్పండి." },
        replies: [
          { say: "Then we'll still go. I'll bring two umbrellas.", good: true, skill: "if" },
          { say: "Then we'll still go. I'll bring two umbrella.", good: false, skill: "if", fixIt: "plural" },
          {
            say: "Why do you ask so many questions?",
            good: false,
            skill: "polite",
            react: { en: "Sorry! I only want to plan well.", te: "సారీ! బాగా ప్లాన్ చేద్దామనే అడిగాను." },
          },
        ],
      },
      {
        partner: "Good. If the sky clears up, I'll call you at six. Bye!",
        te: "సరే. ఆకాశం తెరిపిస్తే, ఆరింటికి మీకు ఫోన్ చేస్తాను. బై!",
        hint: { en: "Agree, and say goodbye until tomorrow.", te: "ఒప్పుకుని, రేపటి దాకా బై చెప్పండి." },
        replies: [
          { say: "Okay, see you tomorrow. Bye!", good: true, skill: "polite" },
          { say: "Okay, see you at tomorrow. Bye!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
