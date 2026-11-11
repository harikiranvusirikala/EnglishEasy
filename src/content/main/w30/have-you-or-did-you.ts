import type { Lesson } from "../../types";

/** Week 30, Day 5 (CURRICULUM §4): present perfect vs past simple — Have you been to Goa? Yes, I went there in 2010. */
export const day: Lesson = {
  id: "have-you-or-did-you",
  kind: "lesson",
  title: { en: "Have You …? Did You …?", te: "ఎప్పుడైనా / ఎప్పుడు" },
  subtitle: "have been, then went",
  summary: {
    en: "Learn to switch to the past when you say the time: Have you been to Goa? Yes, I went there in 2010.",
    te: "సమయం చెప్పగానే past కి మారడం నేర్చుకుందాం: Have you been to Goa? Yes, I went there in 2010.",
  },
  seo: {
    title: "Have You or Did You? in English for Telugu Speakers",
    description:
      "Ask Have you been to Goa? and answer Yes, I went there in 2010. Simple lessons for Telugu speakers on have been and went.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "went", role: "action" },
    { text: "there", role: "what" },
    { text: "in 2010", role: "when" },
  ],
  core: [
    { en: "Have you been to Goa?", te: "మీరు గోవా వెళ్ళొచ్చారా?", extra: ["Did"] },
    { en: "Yes, I went there in 2010.", te: "ఆ, 2010 లో వెళ్ళాను.", extra: ["have"] },
    { en: "When did you go?", te: "ఎప్పుడు వెళ్ళారు?", extra: ["have"] },
    { en: "I went to Tirupati last year.", te: "నేను పోయిన సంవత్సరం తిరుపతి వెళ్ళాను.", extra: ["gone"] },
    { en: "How was your trip?", te: "మీ ప్రయాణం ఎలా జరిగింది?", extra: ["is"] },
    { en: "We ate fish curry near the beach.", te: "మేము బీచ్ దగ్గర చేపల కూర తిన్నాం.", extra: ["eaten"] },
    { en: "It was wonderful. I'd like to go again.", te: "చాలా బాగుంది. మళ్ళీ వెళ్ళాలని ఉంది.", extra: ["going"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Remember one trip and say when it was: I went to … last year.",
    te: "మీ ఒక ప్రయాణం గుర్తు చేసుకుని, ఎప్పుడో చెప్పండి: I went to … last year.",
  },
  words: [
    { en: "tour", te: "టూర్, యాత్ర" },
    { en: "pilgrimage", te: "తీర్థయాత్ర" },
    { en: "boat", te: "పడవ" },
    { en: "wonderful", te: "అద్భుతం, చాలా బాగుంది" },
    { en: "fish curry", te: "చేపల కూర" },
  ],
  grammar: ["present-perfect", "past-simple"],
  topics: ["travel", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Ever, then when", te: "ఎప్పుడైనా, తర్వాత ఎప్పుడు" },
      body: {
        en: "Have you been …? asks about any time in your life. When you say the time, like last year or in 2010, use the past: I went there in 2010. Never use have with a finished time.",
        te: "Have you been …? అంటే జీవితంలో ఎప్పుడైనా వెళ్ళారా అని. last year, in 2010 లాంటి సమయం చెప్తే past వాడండి: I went there in 2010. ఆ సమయంతో have రాదు.",
      },
      bridge: {
        te: ["నేను", "2010 లో", "అక్కడికి", "వెళ్ళాను"],
        en: [
          { text: "I", role: "who" },
          { text: "went", role: "action" },
          { text: "there", role: "what" },
          { text: "in 2010", role: "when" },
        ],
      },
      examples: [
        { en: "Have you been to Goa?", te: "మీరు గోవా వెళ్ళొచ్చారా?" },
        { en: "Yes, I went there in 2010.", te: "ఆ, 2010 లో వెళ్ళాను." },
        { en: "I went to Tirupati last year.", te: "నేను పోయిన సంవత్సరం తిరుపతి వెళ్ళాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Have or did?", te: "have ఆ, did ఆ?" },
      items: [
        {
          form: "Have you been …?",
          useFor: { en: "Any time in your life; no time said.", te: "జీవితంలో ఎప్పుడైనా; సమయం చెప్పకుండా." },
          example: { en: "Have you been to Goa?", te: "మీరు గోవా వెళ్ళొచ్చారా?" },
        },
        {
          form: "I went … in 2010.",
          useFor: { en: "A finished time: last year, in 2010, two years ago.", te: "అయిపోయిన సమయం: last year, in 2010, two years ago." },
          example: { en: "Yes, I went there in 2010.", te: "ఆ, 2010 లో వెళ్ళాను." },
        },
        {
          form: "When did you …?",
          useFor: { en: "Asking the time it happened.", te: "ఎప్పుడు జరిగిందో అడగడానికి." },
          example: { en: "When did you go?", te: "ఎప్పుడు వెళ్ళారు?" },
        },
        {
          form: "How was …?",
          useFor: { en: "Asking what it was like.", te: "ఎలా ఉందో అడగడానికి." },
          example: { en: "How was your trip?", te: "మీ ప్రయాణం ఎలా జరిగింది?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I have been to Goa in 2010.",
      right: "I went to Goa in 2010.",
      why: {
        en: "A finished time like in 2010 needs the past, not have.",
        te: "in 2010 లాంటి అయిపోయిన సమయంతో past వాడాలి, have రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "When you went to Goa?",
      right: "When did you go to Goa?",
      why: {
        en: "Telugu adds no extra word to a question, but English needs did, and then go.",
        te: "తెలుగులో ప్రశ్నకి అదనపు పదం అక్కర్లేదు; ఇంగ్లీష్‌లో did కావాలి, ఆ తర్వాత go.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "A friend asks if you have been to Goa. You went in 2010. Answer.",
        te: "గోవా వెళ్ళొచ్చారా అని ఒక స్నేహితులు అడిగారు. మీరు 2010 లో వెళ్ళారు. జవాబు చెప్పండి.",
      },
      options: ["Yes, I went there in 2010.", "Yes, I have been there in 2010.", "Yes, I have went there in 2010."],
      answer: 0,
      why: {
        en: "In 2010 is a finished time, so switch to the past form.",
        te: "in 2010 అయిపోయిన సమయం; అందుకే past రూపానికి మారండి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "I went to Goa ___ 2010.",
      te: "నేను 2010 లో గోవా వెళ్ళాను.",
      options: ["in", "on", "at"],
      answer: 0,
      why: {
        en: "A year takes in, the way Telugu says 2010 లో.",
        te: "సంవత్సరానికి in వస్తుంది, తెలుగులో '2010 లో' అన్నట్టు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask a friend the time of her Goa trip.", te: "స్నేహితురాలిని గోవా ఎప్పుడు వెళ్ళారో అడగండి." },
      options: ["When did you go to Goa?", "When you went to Goa?", "When have you gone to Goa?"],
      answer: 0,
      why: {
        en: "When asks about a finished time, so use did with go.",
        te: "When అయిపోయిన సమయం గురించి అడుగుతుంది; అందుకే did, go.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I have visited Tirupati last year.",
      wrongIndex: 1,
      fix: "I visited Tirupati last year.",
      why: {
        en: "Last year is a finished time, so drop have and use the past.",
        te: "last year అయిపోయిన సమయం; have తీసేసి past వాడండి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell a friend you went to Tirupati last year.",
        te: "మీరు పోయిన సంవత్సరం తిరుపతి వెళ్ళారని స్నేహితులకి చెప్పండి.",
      },
      expected: ["I went to Tirupati last year.", "Last year I went to Tirupati."],
      options: ["I went to Tirupati last year.", "I have gone to Tirupati last year.", "I went to Tirupati in last year."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend has been to Goa. Ask when she went.",
        te: "మీ స్నేహితురాలు గోవా వెళ్ళొచ్చారు. ఎప్పుడు వెళ్ళారో అడగండి.",
      },
      expected: ["When did you go?", "When did you go to Goa?", "When did you go there?"],
      options: ["When did you go?", "When you went?", "When have you gone?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Talking on the train", te: "రైల్లో కబుర్లు" },
    scene: {
      en: "On a train to Vijayawada, Geetha sits opposite you. You talk about trips.",
      te: "విజయవాడ రైల్లో గీత గారు మీ ఎదురుగా కూర్చున్నారు. ప్రయాణాల గురించి మాట్లాడుకుంటున్నారు.",
    },
    partner: { en: "Geetha (fellow passenger)", te: "గీత (తోటి ప్రయాణికురాలు)" },
    skills: [{ id: "when", label: { en: "Have you …? Did you …?", te: "have, did వాడకం" } }],
    turns: [
      {
        partner: "Do you travel a lot? Have you been to Goa?",
        te: "మీరు ఎక్కువగా ప్రయాణాలు చేస్తారా? గోవా వెళ్ళొచ్చారా?",
        hint: { en: "Say yes, and give the year you went.", te: "అవునని, ఏ సంవత్సరం వెళ్ళారో చెప్పండి." },
        replies: [
          { say: "Yes, I went there in 2015.", good: true, skill: "when" },
          { say: "Yes, I have been there in 2015.", good: false, skill: "when" },
          { say: "Yes, I went there on 2015.", good: false, skill: "when", fixIt: "preposition" },
        ],
      },
      {
        partner: "Oh, nice! How was it?",
        te: "ఓ, బాగుంది! ఎలా ఉంది?",
        hint: { en: "Say it was wonderful, and one thing you ate there.", te: "చాలా బాగుందని, అక్కడ తిన్న ఒకటి చెప్పండి." },
        replies: [
          { say: "It was wonderful. We ate fish curry every day.", good: true, skill: "when" },
          { say: "It is wonderful. We have eaten fish curry daily.", good: false, skill: "when" },
        ],
      },
      {
        partner: "Lovely! I have never been to Goa.",
        te: "బాగుంది! నేను ఎప్పుడూ గోవా వెళ్ళలేదు.",
        hint: { en: "Ask if she has ever visited Kashi.", te: "ఆవిడ ఎప్పుడైనా కాశీ వెళ్ళారా అని అడగండి." },
        replies: [
          { say: "Have you ever been to Kashi?", good: true, skill: "when" },
          { say: "Did you ever been to Kashi?", good: false, skill: "when", fixIt: "question" },
          {
            say: "Never? You should travel more!",
            good: false,
            react: { en: "Maybe! But I have been to many temples.", te: "అవునేమో! కానీ నేను చాలా గుళ్ళకి వెళ్ళొచ్చాను." },
          },
        ],
      },
      {
        partner: "Yes, in March. Oh, this is my station!",
        te: "ఆ, మార్చిలో వెళ్ళాను. ఓ, నా స్టేషన్ వచ్చేసింది!",
        hint: { en: "Wish her a safe journey, and say goodbye.", te: "ప్రయాణం జాగ్రత్తగా సాగాలని చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Have a safe journey. Bye!", good: true },
          { say: "Okay, go fast. Bye.", good: false },
        ],
      },
    ],
  },
};
