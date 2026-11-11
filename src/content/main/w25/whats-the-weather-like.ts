import type { Lesson } from "../../types";

/** Week 25, Day 1 (CURRICULUM §4): weather words — sunny, cloudy, humid, windy — with It's … and What's the weather like? */
export const day: Lesson = {
  id: "whats-the-weather-like",
  kind: "lesson",
  title: { en: "What's the Weather Like?", te: "వాతావరణం ఎలా ఉంది?" },
  subtitle: "sunny, cloudy, humid, windy",
  summary: {
    en: "Learn to talk about the weather: It's very hot and humid today. What's the weather like in Guntur?",
    te: "వాతావరణం గురించి మాట్లాడటం నేర్చుకుందాం: It's very hot and humid today. What's the weather like in Guntur?",
  },
  seo: {
    title: "Talking About the Weather in English for Telugu Speakers",
    description:
      "Say It's very hot and humid today and ask What's the weather like? Simple lessons for Telugu speakers on weather small talk.",
  },
  pattern: [
    { text: "It", role: "who" },
    { text: "is", role: "action" },
    { text: "very hot and humid", role: "what" },
    { text: "today", role: "when" },
  ],
  core: [
    { en: "It's very hot and humid today.", te: "ఈ రోజు చాలా వేడిగా, ఉక్కగా ఉంది.", extra: ["humidity"] },
    { en: "What's the weather like in Guntur?", te: "గుంటూరులో వాతావరణం ఎలా ఉంది?", extra: ["how"] },
    { en: "It's cloudy this morning.", te: "ఈ ఉదయం మబ్బుగా ఉంది.", extra: ["today"] },
    { en: "It's very windy near the sea.", te: "సముద్రం దగ్గర గాలి బాగా వీస్తోంది.", extra: ["wind"] },
    { en: "It's sunny now, but it's cool at night.", te: "ఇప్పుడు ఎండగా ఉంది, కానీ రాత్రి చల్లగా ఉంటుంది.", extra: ["in"] },
    { en: "Is it raining in Hyderabad now?", te: "హైదరాబాద్‌లో ఇప్పుడు వర్షం పడుతోందా?", extra: ["Does"] },
    { en: "It was very cold last night.", te: "నిన్న రాత్రి చాలా చల్లగా ఉంది.", extra: ["yesterday"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look out of the window and say the weather in English: It's sunny, or It's cloudy.",
    te: "కిటికీ లోంచి చూసి వాతావరణం ఇంగ్లీష్‌లో చెప్పండి: It's sunny, లేదా It's cloudy.",
  },
  words: [
    { en: "sunny", te: "ఎండగా" },
    { en: "cloudy", te: "మబ్బుగా" },
    { en: "humid", te: "ఉక్కగా, తేమగా" },
    { en: "windy", te: "గాలి ఎక్కువగా" },
    { en: "cool", te: "కొంచెం చల్లగా" },
  ],
  grammar: ["am-is-are"],
  topics: ["weather"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Talking about the weather", te: "వాతావరణం గురించి మాట్లాడటం" },
      body: {
        en: "For the weather, English starts with It's: It's hot, It's cloudy, It's windy. Telugu says ఎండగా ఉంది with no it, but English always needs It's. To ask, say What's the weather like?",
        te: "వాతావరణం చెప్పాలంటే It's తో మొదలుపెట్టండి: It's hot, It's cloudy. తెలుగులో 'ఎండగా ఉంది' అంటాం, it ఉండదు; ఇంగ్లీష్‌లో It's తప్పకుండా కావాలి. అడగాలంటే: What's the weather like?",
      },
      bridge: {
        te: ["ఈ రోజు", "చాలా వేడిగా, ఉక్కగా", "ఉంది"],
        en: [
          { text: "It", role: "who" },
          { text: "is", role: "action" },
          { text: "very hot and humid", role: "what" },
          { text: "today", role: "when" },
        ],
      },
      examples: [
        { en: "It's very hot and humid today.", te: "ఈ రోజు చాలా వేడిగా, ఉక్కగా ఉంది." },
        { en: "It's cloudy this morning.", te: "ఈ ఉదయం మబ్బుగా ఉంది." },
        { en: "It's very windy near the sea.", te: "సముద్రం దగ్గర గాలి బాగా వీస్తోంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which weather word?", te: "ఏ వాతావరణానికి ఏ పదం?" },
      items: [
        {
          form: "sunny",
          useFor: { en: "Bright sun and a clear sky.", te: "ఎండ బాగా ఉంది, ఆకాశం నిర్మలంగా ఉంది." },
          example: { en: "It's sunny now, but it's cool at night.", te: "ఇప్పుడు ఎండగా ఉంది, కానీ రాత్రి చల్లగా ఉంటుంది." },
        },
        {
          form: "cloudy",
          useFor: { en: "Clouds cover the sky.", te: "ఆకాశం నిండా మబ్బులు." },
          example: { en: "It's cloudy this morning.", te: "ఈ ఉదయం మబ్బుగా ఉంది." },
        },
        {
          form: "humid",
          useFor: { en: "Hot, wet air. You sweat a lot.", te: "గాలిలో తేమ, ఉక్కపోత. చెమట బాగా పడుతుంది." },
          example: { en: "It's very hot and humid today.", te: "ఈ రోజు చాలా వేడిగా, ఉక్కగా ఉంది." },
        },
        {
          form: "windy",
          useFor: { en: "A lot of strong wind.", te: "గాలి బాగా వీస్తోంది." },
          example: { en: "It's very windy near the sea.", te: "సముద్రం దగ్గర గాలి బాగా వీస్తోంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Today morning it was very cloudy.",
      right: "This morning it was very cloudy.",
      why: {
        en: "Today morning comes from Telugu ఈ రోజు ఉదయం; English says this morning instead.",
        te: "'ఈ రోజు ఉదయం' నుంచి today morning వస్తుంది; ఇంగ్లీష్‌లో this morning అంటారు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "Today very hot.",
      right: "It's very hot today.",
      why: {
        en: "Telugu ఈ రోజు చాలా వేడి has no verb, but English needs It's before the weather word.",
        te: "'ఈ రోజు చాలా వేడి' లో verb లేదు; ఇంగ్లీష్‌లో వాతావరణం మాట ముందు It's కావాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: { en: "The air is hot and wet. What do you say?", te: "గాలి వేడిగా, తేమగా ఉంది. ఏమంటారు?" },
      options: ["It's very humid today.", "Today very humid.", "It's very humidity today."],
      answer: 0,
      why: {
        en: "English needs It's before the weather, and humid, not humidity, describes the air.",
        te: "వాతావరణం ముందు It's కావాలి; గాలిని వర్ణించే పదం humid, humidity కాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "What's the weather ___ in Guntur?",
      te: "గుంటూరులో వాతావరణం ఎలా ఉంది?",
      options: ["like", "how", "about"],
      answer: 0,
      why: {
        en: "The fixed question is What's the weather like, so how cannot go here.",
        te: "ఈ ప్రశ్న ఎప్పుడూ What's the weather like అనే వస్తుంది; ఇక్కడ how రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "A neighbour says: It's cloudy today. What does it mean?",
        te: "పక్కింటివారు It's cloudy today అన్నారు. అర్థం ఏంటి?",
      },
      options: ["The sky is full of clouds.", "It is raining very hard.", "The sun is very bright."],
      answer: 0,
      why: {
        en: "Cloudy means clouds cover the sky; it is not raining yet.",
        te: "cloudy అంటే ఆకాశం నిండా మబ్బులు; ఇంకా వర్షం పడట్లేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "indian-english",
      sentence: "It was very cold yesterday night.",
      wrongIndex: 4,
      fix: "It was very cold last night.",
      why: {
        en: "Yesterday night is a habit from Telugu నిన్న రాత్రి; English says last night.",
        te: "'నిన్న రాత్రి' ని yesterday night అనడం మన అలవాటు; ఇంగ్లీష్‌లో last night అంటారు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend lives in Guntur. Ask about the weather there.",
        te: "మీ స్నేహితులు గుంటూరులో ఉంటారు. అక్కడ వాతావరణం ఎలా ఉందో అడగండి.",
      },
      expected: ["What's the weather like in Guntur?", "What's the weather like there?", "How is the weather in Guntur?"],
      options: ["What's the weather like in Guntur?", "How is the weather like in Guntur?", "Guntur weather how is?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "There is a strong wind near the sea. Tell your friend.",
        te: "సముద్రం దగ్గర గాలి బాగా వీస్తోంది. మీ స్నేహితులకి చెప్పండి.",
      },
      expected: ["It's very windy near the sea.", "It's windy near the sea.", "It is very windy near the sea."],
      options: ["It's very windy near the sea.", "Very windy near the sea.", "It's very wind near the sea."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Small talk at the bus stop", te: "బస్ స్టాప్‌లో చిన్న కబుర్లు" },
    scene: {
      en: "You are waiting for the bus in the morning. Geetha, your neighbour, comes and stands next to you.",
      te: "మీరు ఉదయం బస్ కోసం ఎదురుచూస్తున్నారు. పక్కింటి గీత వచ్చి మీ పక్కన నిలబడ్డారు.",
    },
    partner: { en: "Geetha (neighbour)", te: "గీత (పక్కింటావిడ)" },
    skills: [{ id: "weather", label: { en: "Weather talk", te: "వాతావరణం కబుర్లు" } }],
    turns: [
      {
        partner: "Good morning! It's so hot already.",
        te: "నమస్కారం! పొద్దున్నే ఇంత వేడిగా ఉంది.",
        hint: { en: "Agree, and say the air feels wet too.", te: "ఒప్పుకుని, గాలిలో తేమ కూడా ఉందని చెప్పండి." },
        replies: [
          { say: "Yes, it's very hot and humid today.", good: true, skill: "weather" },
          { say: "Yes, today very hot and humid.", good: false, skill: "weather", fixIt: "be" },
          {
            say: "Yes, yes. You say this every day.",
            good: false,
            skill: "weather",
            react: { en: "Oh, sorry! I just like to talk.", te: "అయ్యో, సారీ! ఊరికే మాట్లాడదామని." },
          },
        ],
      },
      {
        partner: "My brother lives in Vizag. It's cooler there.",
        te: "మా తమ్ముడు వైజాగ్‌లో ఉంటారు. అక్కడ ఇక్కడికంటే చల్లగా ఉంటుంది.",
        hint: { en: "Ask her about the weather there today.", te: "ఈ రోజు అక్కడ వాతావరణం ఎలా ఉందో ఆవిడని అడగండి." },
        replies: [
          { say: "What's the weather like there today?", good: true, skill: "weather" },
          { say: "How is the weather like there today?", good: false, skill: "weather" },
        ],
      },
      {
        partner: "He says it's cloudy and windy today.",
        te: "ఈ రోజు మబ్బుగా ఉంది, గాలి బాగా వీస్తోంది అని చెప్పారు.",
        hint: { en: "Say it is sunny here, but cool at night.", te: "ఇక్కడ ఎండగా ఉంది, కానీ రాత్రి చల్లగా ఉంటుందని చెప్పండి." },
        replies: [
          { say: "Here it's sunny, but it's cool at night.", good: true, skill: "weather" },
          { say: "Here it's sunny, but it's cool in night.", good: false, skill: "weather", fixIt: "preposition" },
        ],
      },
      {
        partner: "Oh, my bus is here. Bye!",
        te: "అయ్యో, నా బస్ వచ్చింది. బై!",
        hint: { en: "Say bye, and wish her a good day.", te: "బై చెప్పి, ఆవిడ రోజు బాగా గడవాలని చెప్పండి." },
        replies: [
          { say: "Bye! Have a nice day.", good: true },
          { say: "Bye! You also have nice day.", good: false, fixIt: "article" },
        ],
      },
    ],
  },
};
