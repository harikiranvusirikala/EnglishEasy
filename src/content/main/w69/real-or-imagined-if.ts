import type { Lesson } from "../../types";

/** Week 69, Day 4 (CURRICULUM §5): the first conditional (likely) next to the second (imagined) — If it rains, I'll …; If I had a car, I'd … */
export const day: Lesson = {
  id: "real-or-imagined-if",
  kind: "lesson",
  title: { en: "Real or Imagined?", te: "జరిగేదా, ఊహించేదా?" },
  subtitle: "If it rains, I'll … / If I had …, I'd …",
  summary: {
    en: "Learn to tell a real plan from a dream: If it rains tomorrow, I'll go by auto. If I had a car, I'd drive to Araku.",
    te: "నిజమైన ప్లాన్‌కీ, కలకీ తేడా చెప్పడం నేర్చుకుందాం: If it rains tomorrow, I'll go by auto. If I had a car, I'd drive to Araku.",
  },
  seo: {
    title: "Real and Imagined If Sentences in English for Telugu Speakers",
    description:
      "Say If it rains, I'll go by auto, and If I had a car, I'd drive to Araku. Simple lessons for Telugu speakers on real and imagined plans.",
  },
  pattern: [
    { text: "If I had a car,", role: "when" },
    { text: "I'd", role: "who" },
    { text: "drive", role: "action" },
    { text: "to Araku", role: "what" },
  ],
  core: [
    { en: "If it rains tomorrow, I'll go by auto.", te: "రేపు వర్షం పడితే, ఆటోలో వెళ్తాను.", extra: ["would"] },
    { en: "If I had a car, I'd drive to Araku.", te: "నాకు కారు ఉంటే, అరకుకి కారులో వెళ్తాను.", extra: ["will"] },
    { en: "If the shop is open, I'll buy some milk.", te: "షాపు తెరిచి ఉంటే, పాలు కొంటాను.", extra: ["would"] },
    { en: "If I knew the way, I'd take you there.", te: "నాకు దారి తెలిస్తే, మిమ్మల్ని అక్కడికి తీసుకెళ్తాను.", extra: ["know"] },
    { en: "If my cousin comes on Sunday, we'll go to the temple.", te: "ఆదివారం మా కజిన్ వస్తే, గుడికి వెళ్తాం.", extra: ["came"] },
    { en: "If Araku were closer, we'd go every winter.", te: "అరకు ఇంకా దగ్గరగా ఉంటే, ప్రతి చలికాలం వెళ్తాం.", extra: ["is"] },
    { en: "It's only a dream, but dreams sometimes come true.", te: "ఇది కల మాత్రమే, కానీ కలలు అప్పుడప్పుడు నిజమవుతాయి.", extra: ["comes"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say one real plan and one dream aloud: If it …, I'll … If I had …, I'd …",
    te: "ఒక నిజమైన ప్లాన్, ఒక కల గట్టిగా చెప్పండి: If it …, I'll … If I had …, I'd …",
  },
  words: [
    { en: "real", te: "నిజమైన" },
    { en: "imagined", te: "ఊహించిన" },
    { en: "come true", te: "నిజమవడం" },
    { en: "dream trip", te: "కలల ప్రయాణం" },
    { en: "valley", te: "లోయ" },
  ],
  grammar: ["conditionals", "will", "past-simple"],
  topics: ["travel", "weather", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Real or imagined?", te: "జరిగేదా, ఊహించేదా?" },
      body: {
        en: "If it can really happen, use if + present, then will: If it rains, I'll go by auto. If it is only imagined, use if + past, then would: If I had a car, I'd drive.",
        te: "నిజంగా జరగొచ్చు అంటే if + present, తర్వాత will. ఊహ మాత్రమే అయితే if + past, తర్వాత would. తెలుగులో రెండిటికీ 'ఉంటే', 'పడితే' అనే అంటాం.",
      },
      bridge: {
        te: ["నాకు కారు ఉంటే,", "అరకుకి", "కారులో వెళ్తాను"],
        en: [
          { text: "If I had a car,", role: "when" },
          { text: "I'd", role: "who" },
          { text: "drive", role: "action" },
          { text: "to Araku", role: "what" },
        ],
      },
      examples: [
        { en: "If it rains tomorrow, I'll go by auto.", te: "రేపు వర్షం పడితే, ఆటోలో వెళ్తాను." },
        { en: "If I had a car, I'd drive to Araku.", te: "నాకు కారు ఉంటే, అరకుకి కారులో వెళ్తాను." },
        { en: "If the shop is open, I'll buy some milk.", te: "షాపు తెరిచి ఉంటే, పాలు కొంటాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which one?", te: "ఏది వాడాలి?" },
      items: [
        {
          form: "If + present, I'll …",
          useFor: { en: "Something likely, that can really happen.", te: "నిజంగా జరిగే అవకాశం ఉన్నది." },
          example: { en: "If my cousin comes on Sunday, we'll go to the temple.", te: "ఆదివారం మా కజిన్ వస్తే, గుడికి వెళ్తాం." },
        },
        {
          form: "If + past, I'd …",
          useFor: { en: "Something not true now, only imagined.", te: "ఇప్పుడు నిజం కానిది, ఊహ మాత్రమే." },
          example: { en: "If I had a car, I'd drive to Araku.", te: "నాకు కారు ఉంటే, అరకుకి కారులో వెళ్తాను." },
        },
        {
          form: "If I knew …",
          useFor: { en: "know is a state: knew, never knowing.", te: "know ఒక స్థితి: knew అనాలి, knowing కాదు." },
          example: { en: "If I knew the way, I'd take you there.", te: "నాకు దారి తెలిస్తే, మిమ్మల్ని అక్కడికి తీసుకెళ్తాను." },
        },
        {
          form: "If … were …",
          useFor: { en: "Imagined if sentences often use were.", te: "ఊహించి చెప్పే if వాక్యాల్లో were ఎక్కువగా వస్తుంది." },
          example: { en: "If Araku were closer, we'd go every winter.", te: "అరకు ఇంకా దగ్గరగా ఉంటే, ప్రతి చలికాలం వెళ్తాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "If it will rain tomorrow, I'll go by auto.",
      right: "If it rains tomorrow, I'll go by auto.",
      why: {
        en: "For a real plan, the if part takes the present, never will.",
        te: "నిజమైన ప్లాన్‌లో if భాగంలో present వస్తుంది; will ఎప్పుడూ రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "If I was having a car, I'd drive to Araku.",
      right: "If I had a car, I'd drive to Araku.",
      why: {
        en: "Have, meaning own, is a state, so it takes no -ing.",
        te: "have (సొంతంగా ఉండటం) ఒక స్థితి; అందుకే దానికి -ing రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Dark clouds are coming, and rain looks likely. Tell your neighbour your plan.",
        te: "నల్లని మబ్బులు వస్తున్నాయి, వర్షం పడేలా ఉంది. పక్కింటివారికి మీ ప్లాన్ చెప్పండి.",
      },
      options: ["If it rains, I'll take an umbrella.", "If it would rain, I'll take an umbrella.", "If it rained, I'll take an umbrella."],
      answer: 0,
      why: {
        en: "Rain is likely, so use the present after if, then I'll.",
        te: "వర్షం పడే అవకాశం ఉంది, అందుకే if తర్వాత present, తర్వాత I'll.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "If Araku ___ closer, we'd go every winter.",
      te: "అరకు ఇంకా దగ్గరగా ఉంటే, ప్రతి చలికాలం వెళ్తాం.",
      options: ["were", "is", "will be"],
      answer: 0,
      why: {
        en: "Araku is far, so this is imagined; it takes the past form after if.",
        te: "అరకు దూరం, అందుకే ఇది ఊహ; if తర్వాత past form వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "Your neighbour Ayesha says: If I had a car, I'd drive to Araku. What does this tell you?",
        te: "పక్కింటి ఆయేషా గారు If I had a car, I'd drive to Araku అన్నారు. దీనర్థం ఏంటి?",
      },
      options: ["She doesn't have a car.", "She doesn't have car.", "She will buy a car tomorrow."],
      answer: 0,
      why: {
        en: "If with had is imagined, so she has no car; car needs a.",
        te: "if తో had అంటే ఊహ, అంటే ఆవిడకి కారు లేదు; ఒక కారు కాబట్టి a కావాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "be",
      sentence: "If the shop open, I'll buy some milk.",
      wrongIndex: 3,
      fix: "If the shop is open, I'll buy some milk.",
      why: {
        en: "Open here describes the shop, so English needs is; Telugu needs no such word.",
        te: "open ఇక్కడ షాపు ఎలా ఉందో చెప్తుంది, అందుకే is కావాలి; తెలుగులో అలాంటి మాట అక్కర్లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Your neighbour wants to visit the new temple, but you don't know the way. Say what you'd do if you knew it.",
        te: "పక్కింటివారు కొత్త గుడికి వెళ్ళాలనుకుంటున్నారు, కానీ మీకు దారి తెలీదు. తెలిస్తే ఏం చేస్తారో చెప్పండి.",
      },
      expected: ["If I knew the way, I'd take you.", "If I knew the way, I'd take you there.", "Sorry, I don't know the way."],
      options: ["If I knew the way, I'd take you.", "If I was knowing the way, I'd take you.", "If I knew the way, I'll take you."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend asks about your Sunday plan. Rain is likely. Say you'll stay home if it rains.",
        te: "ఆదివారం ప్లాన్ ఏంటని స్నేహితులు అడుగుతున్నారు. వర్షం పడేలా ఉంది. వర్షం పడితే ఇంట్లోనే ఉంటానని చెప్పండి.",
      },
      expected: ["If it rains, I'll stay home.", "If it rains, I'll stay at home.", "I'll stay home if it rains."],
      options: ["If it rains, I'll stay home.", "If it will rain, I'll stay home.", "If it rains, I would stay home."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Plans and dream trips", te: "ప్లాన్లు, కలల ప్రయాణాలు" },
    scene: {
      en: "Your neighbour Ayesha meets you at the gate on Friday evening. You talk about the weekend.",
      te: "శుక్రవారం సాయంత్రం పక్కింటి ఆయేషా గారు గేటు దగ్గర కలిశారు. వారాంతం గురించి మాట్లాడుకుంటున్నారు.",
    },
    partner: { en: "Ayesha (your neighbour)", te: "ఆయేషా (పక్కింటివారు)" },
    skills: [
      { id: "if", label: { en: "Real and imagined plans", te: "నిజమైన, ఊహించిన ప్లాన్లు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Any plans for the weekend?",
        te: "హలో! వారాంతానికి ఏమైనా ప్లాన్ ఉందా?",
        hint: { en: "Say you'll go to the market, but only if there is no rain.", te: "వర్షం లేకపోతేనే మార్కెట్‌కి వెళ్తానని చెప్పండి." },
        replies: [
          { say: "If it doesn't rain, I'll go to the market.", good: true, skill: "if" },
          { say: "If it won't rain, I'll go to the market.", good: false, skill: "if" },
        ],
      },
      {
        partner: "I want to see Araku one day. Have you been there?",
        te: "ఎప్పుడైనా అరకు చూడాలని ఉంది. మీరు అక్కడికి వెళ్ళారా?",
        hint: { en: "Say no, and what you would do if you had a car.", te: "లేదు అని, మీకు కారు ఉంటే ఏం చేస్తారో చెప్పండి." },
        replies: [
          { say: "No. If I had a car, I'd drive there.", good: true, skill: "if" },
          { say: "Not yet. If I had a car, I'd go tomorrow!", good: true, skill: "if" },
          { say: "No. If I would have a car, I'd drive there.", good: false, skill: "if" },
        ],
      },
      {
        partner: "Shall we go together by train in winter?",
        te: "చలికాలంలో కలిసి ట్రైన్‌లో వెళ్దామా?",
        hint: { en: "Say yes, if you both get train tickets.", te: "ట్రైన్ టికెట్లు దొరికితే సరే అని చెప్పండి." },
        replies: [
          { say: "Yes! If we get tickets, we'll go in December.", good: true, skill: "if" },
          { say: "Sounds good, if we get tickets.", good: true, skill: "if" },
          {
            say: "With you? No, you talk too much.",
            good: false,
            skill: "polite",
            react: { en: "Ha ha! I promise to be quiet on the train.", te: "హహ! ట్రైన్‌లో మాట్లాడకుండా ఉంటాను, ప్రామిస్!" },
          },
        ],
      },
      {
        partner: "Wonderful. I'll check the trains tonight and tell you. Bye!",
        te: "చాలా బాగుంది. ఈ రాత్రి ట్రైన్లు చూసి చెప్తాను. బై!",
        hint: { en: "Thank her, say you'll wait to hear, and say goodbye.", te: "థాంక్స్ చెప్పి, ఆవిడ మెసేజ్ కోసం ఎదురుచూస్తానని, బై చెప్పండి." },
        replies: [
          { say: "Thank you, Ayesha. I'll wait for your message. Bye!", good: true, skill: "polite" },
          { say: "Thank you, Ayesha. I'll wait your message. Bye!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
