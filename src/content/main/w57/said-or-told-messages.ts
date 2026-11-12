import type { Lesson } from "../../types";

/** Week 57, Day 3 (CURRICULUM §5): say something, tell someone (never "said me") — Ramesh told me he was busy. */
export const day: Lesson = {
  id: "said-or-told-messages",
  kind: "lesson",
  title: { en: "Said or Told?", te: "said ఆ, told ఆ?" },
  subtitle: "say something, tell someone",
  summary: {
    en: "Learn when to use said and when to use told: Ramesh said he was busy. Ramesh told me he was busy.",
    te: "said ఎప్పుడు, told ఎప్పుడు వాడాలో నేర్చుకుందాం: Ramesh said he was busy. Ramesh told me he was busy.",
  },
  seo: {
    title: "Said or Told in English for Telugu Speakers",
    description:
      "Say Ramesh said he was busy and Ramesh told me he was busy, never said me. Simple lessons for Telugu speakers on passing on messages.",
  },
  pattern: [
    { text: "Ramesh", role: "who" },
    { text: "told", role: "action" },
    { text: "me", role: "what" },
    { text: "he was busy", role: "what" },
  ],
  core: [
    { en: "Ramesh said he was busy.", te: "తను బిజీగా ఉన్నానని రమేష్ గారు చెప్పారు.", extra: ["told"] },
    { en: "Ramesh told me he was busy.", te: "తను బిజీగా ఉన్నానని రమేష్ గారు నాకు చెప్పారు.", extra: ["said"] },
    { en: "Fatima said she would call you tonight.", te: "ఈ రాత్రి మీకు ఫోన్ చేస్తానని ఫాతిమా గారు చెప్పారు.", extra: ["told"] },
    { en: "Mohan told us the meeting was cancelled.", te: "మీటింగ్ cancel అయిందని మోహన్ గారు మాకు చెప్పారు.", extra: ["said"] },
    { en: "She said she was stuck in traffic.", te: "తను ట్రాఫిక్‌లో ఇరుక్కుపోయానని ఆవిడ చెప్పారు.", extra: ["told"] },
    { en: "He told me to wait at the bus stand.", te: "బస్ స్టాండ్ దగ్గర ఆగమని ఆయన నాకు చెప్పారు.", extra: ["said"] },
    { en: "Please tell her I called.", te: "నేను ఫోన్ చేశానని ఆవిడకి చెప్పండి.", extra: ["say"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Pass on one small message today, to a friend or a neighbour: … told me that …",
    te: "ఈ రోజు ఒక చిన్న మెసేజ్‌ని స్నేహితులకో, పక్కింటివారికో అందించండి: … told me that …",
  },
  words: [
    { en: "say", te: "చెప్పడం, అనడం" },
    { en: "tell", te: "ఒకరికి చెప్పడం" },
    { en: "pass on", te: "ఇంకొకరికి అందించడం" },
    { en: "let you know", te: "మీకు తెలియజేయడం" },
    { en: "by the way", te: "అన్నట్టు" },
  ],
  grammar: ["reported-speech", "prepositions"],
  topics: ["people", "phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "said or told?", te: "said ఆ, told ఆ?" },
      body: {
        en: "Use said for the words alone: Ramesh said he was busy. Use told with the person who heard it: Ramesh told me. Never say said me.",
        te: "మాట మాత్రమే చెప్తే said. ఎవరికి చెప్పారో కూడా చెప్తే told me, told her. said me అని ఎప్పుడూ అనకూడదు.",
      },
      bridge: {
        te: ["తను బిజీగా ఉన్నానని", "రమేష్ గారు", "నాకు", "చెప్పారు"],
        en: [
          { text: "Ramesh", role: "who" },
          { text: "told", role: "action" },
          { text: "me", role: "what" },
          { text: "he was busy", role: "what" },
        ],
      },
      examples: [
        { en: "Ramesh said he was busy.", te: "తను బిజీగా ఉన్నానని రమేష్ గారు చెప్పారు." },
        { en: "Ramesh told me he was busy.", te: "తను బిజీగా ఉన్నానని రమేష్ గారు నాకు చెప్పారు." },
        { en: "Fatima said she would call you tonight.", te: "ఈ రాత్రి మీకు ఫోన్ చేస్తానని ఫాతిమా గారు చెప్పారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "said, told, said to", te: "said, told, said to వాడకం" },
      items: [
        {
          form: "said + the news",
          useFor: { en: "No person after said.", te: "said తర్వాత మనిషి రారు." },
          example: { en: "Rani said the shop was closed.", te: "షాపు మూసి ఉందని రాణి గారు చెప్పారు." },
        },
        {
          form: "told + a person",
          useFor: { en: "Always say who heard it: me, him, us.", te: "ఎవరికి చెప్పారో తప్పకుండా చెప్పాలి: me, him, us." },
          example: { en: "Rani told me the shop was closed.", te: "షాపు మూసి ఉందని రాణి గారు నాకు చెప్పారు." },
        },
        {
          form: "said to + a person",
          useFor: { en: "Correct too, but told me is more common.", te: "ఇది కూడా సరైనదే, కానీ told me ఎక్కువగా వాడతారు." },
          example: { en: "Rani said to me that the shop was closed.", te: "షాపు మూసి ఉందని రాణి గారు నాతో అన్నారు." },
        },
        {
          form: "say hello, say sorry",
          useFor: { en: "Fixed phrases that always take say.", te: "ఎప్పుడూ say తోనే వచ్చే అలవాటైన మాటలు." },
          example: { en: "Please say hello to Ramesh for me.", te: "నా తరఫున రమేష్ గారికి నమస్కారం చెప్పండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Ramesh said me he was busy.",
      right: "Ramesh told me he was busy.",
      why: {
        en: "Said never takes me straight after it; use told me, or said to me.",
        te: "said తర్వాత నేరుగా me రాదు; told me అనండి, లేదా said to me.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Ramesh told that he was busy.",
      right: "Ramesh said that he was busy.",
      why: {
        en: "Told needs a person after it, like me or her; with no person, use said.",
        te: "told తర్వాత మనిషి కావాలి, me, her లాగా; మనిషి లేకపోతే said వాడాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "Fatima phoned you. She can't come to the bhajan today. Tell your friend.",
        te: "ఫాతిమా గారు మీకు ఫోన్ చేశారు. ఈ రోజు భజనకి రాలేరట. మీ స్నేహితులకి చెప్పండి.",
      },
      options: ["Fatima told me she couldn't come today.", "Fatima said me she couldn't come today.", "Fatima told she couldn't come today."],
      answer: 0,
      why: {
        en: "Told takes the person who heard it, and said never takes me alone.",
        te: "told తర్వాత విన్న మనిషి వస్తారు; said తర్వాత నేరుగా me ఎప్పుడూ రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Mohan ___ us the meeting was cancelled.",
      te: "మీటింగ్ cancel అయిందని మోహన్ గారు మాకు చెప్పారు.",
      options: ["told", "said", "say"],
      answer: 0,
      why: {
        en: "With a person after it, like us, the verb is told, not said.",
        te: "తర్వాత us లాగా మనిషి ఉంటే said కాదు, told వాడాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "Your friend passes on a long message from Ramesh. Say you understand, and thank her.",
        te: "రమేష్ గారి పెద్ద మెసేజ్‌ని మీ స్నేహితురాలు మీకు చెప్పారు. అర్థమైందని చెప్పి, థాంక్స్ చెప్పండి.",
      },
      options: ["Okay, I understand. Thank you.", "Okay, I am understanding. Thank you.", "Okay, I understanding. Thank you."],
      answer: 0,
      why: {
        en: "Understand is about the mind, so English uses the plain verb here, with no -ing.",
        te: "understand మనసుకి సంబంధించిన మాట; అందుకే ఇక్కడ -ing లేకుండా verb నేరుగా వాడాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "be",
      sentence: "Grace told me the doctor not available today.",
      wrongIndex: 5,
      fix: "Grace told me the doctor was not available today.",
      why: {
        en: "English needs was before not here; Telugu లేరు says it in one word.",
        te: "ఇక్కడ not ముందు was కావాలి; తెలుగులో 'లేరు' అనే ఒక్క మాటలోనే అది ఉంటుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Ramesh phoned you. He is busy and can't come for the walk. Tell your walking group.",
        te: "రమేష్ గారు మీకు ఫోన్ చేశారు. ఆయన బిజీ, నడకకి రాలేరు. మీ వాకింగ్ గ్రూప్‌కి చెప్పండి.",
      },
      expected: [
        "Ramesh told me he was busy.",
        "Ramesh said he was busy.",
        "Ramesh said he couldn't come. He's busy.",
        "Ramesh told me he couldn't come today.",
      ],
      options: ["Ramesh told me he was busy.", "Ramesh said me he was busy.", "Ramesh told he was busy."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour asks you to pass on a message to Swapna. Say you will.",
        te: "స్వప్న గారికి ఒక మెసేజ్ అందించమని పక్కింటివారు అడుగుతున్నారు. అలాగే అని చెప్పండి.",
      },
      expected: ["Sure, I'll tell her.", "Okay, I'll pass it on.", "Sure, I'll tell Swapna.", "Don't worry, I'll pass it on to her."],
      options: ["Sure, I'll tell her.", "Sure, I'll say her.", "Sure, I'll tell to her."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A message from Narayana", te: "నారాయణ గారి మెసేజ్" },
    scene: {
      en: "Your friend Grace is planning a temple trip for Sunday. Narayana phoned you this morning with a message for her.",
      te: "మీ స్నేహితురాలు గ్రేస్ గారు ఆదివారం గుడి ట్రిప్ ప్లాన్ చేస్తున్నారు. ఈ రోజు పొద్దున నారాయణ గారు ఆవిడ కోసం ఒక మెసేజ్‌తో మీకు ఫోన్ చేశారు.",
    },
    partner: { en: "Grace (your friend)", te: "గ్రేస్ (మీ స్నేహితురాలు)" },
    skills: [
      { id: "pass", label: { en: "Passing on a message", te: "మెసేజ్ అందించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hi! Are we all ready for the temple trip on Sunday?",
        te: "హాయ్! ఆదివారం గుడి ట్రిప్‌కి అందరం రెడీనా?",
        hint: { en: "Say almost, and that you have a message from Narayana.", te: "దాదాపు రెడీ అని, నారాయణ గారి దగ్గర నుంచి ఒక మెసేజ్ ఉందని చెప్పండి." },
        replies: [
          { say: "Almost. By the way, I have a message from Narayana.", good: true, skill: "pass" },
          { say: "Almost. By the way, I have message from Narayana.", good: false, skill: "pass", fixIt: "article" },
        ],
      },
      {
        partner: "Oh, what did he say?",
        te: "ఓ, ఆయన ఏం చెప్పారు?",
        hint: { en: "Pass on his news: he has a fever, so he can't come.", te: "ఆయన వార్త చెప్పండి: జ్వరం వచ్చింది, అందుకే రాలేరు." },
        replies: [
          { say: "He told me he had a fever, so he couldn't come.", good: true, skill: "pass" },
          { say: "He said me he had a fever, so he couldn't come.", good: false, skill: "pass", fixIt: "preposition" },
        ],
      },
      {
        partner: "Oh no! I hope he gets well soon. Did he say anything else?",
        te: "అయ్యో! ఆయన త్వరగా కోలుకోవాలి. ఇంకేమైనా చెప్పారా?",
        hint: { en: "Pass on his promise about the next trip.", te: "తర్వాతి ట్రిప్ గురించి ఆయన ఇచ్చిన మాట చెప్పండి." },
        replies: [
          { say: "Yes. He said he would come next time.", good: true, skill: "pass" },
          { say: "Yes. He said he would let you know about the next trip.", good: true, skill: "pass" },
          {
            say: "No. Why should I remember everything?",
            good: false,
            skill: "polite",
            react: { en: "Sorry, I only asked. Thank you for telling me.", te: "సారీ, ఊరికే అడిగానండీ. చెప్పినందుకు థాంక్స్." },
          },
        ],
      },
      {
        partner: "Thank you for passing on the message. See you on Sunday!",
        te: "మెసేజ్ అందించినందుకు థాంక్స్. ఆదివారం కలుద్దాం!",
        hint: { en: "Answer her thanks, and say goodbye.", te: "ఆవిడ థాంక్స్‌కి జవాబు చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "You're welcome. See you on Sunday!", good: true, skill: "polite" },
          { say: "You're welcome. See you in Sunday!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
