import type { Lesson } from "../../types";

/** Week 76, Day 5 (CURRICULUM §5): answering tags and negative questions the English way, and words that keep a chat going (Fix-it 9). */
export const day: Lesson = {
  id: "keeping-the-park-chat-going",
  kind: "lesson",
  title: { en: "Keeping the Chat Going", te: "కబుర్లు కొనసాగించడం" },
  subtitle: "No, I had a cold. Oh, really?",
  summary: {
    en: "Learn to answer a tag the English way and keep the chat going: You didn't come yesterday, did you? No, I had a cold. Oh, really?",
    te: "tag ప్రశ్నకి ఇంగ్లీష్ పద్ధతిలో జవాబు చెప్పి, కబుర్లు సాగించడం నేర్చుకుందాం: You didn't come yesterday, did you? No, I had a cold. Oh, really?",
  },
  seo: {
    title: "Keeping a Conversation Going in English for Telugu Speakers",
    description:
      "Say No, I had a cold, Oh, really? and It's a small world! Simple lessons for Telugu speakers on answering tags and keeping a chat going.",
  },
  pattern: [
    { text: "No,", role: "what" },
    { text: "I", role: "who" },
    { text: "had", role: "action" },
    { text: "a cold.", role: "what" },
  ],
  core: [
    { en: "You didn't come yesterday, did you?", te: "నిన్న మీరు రాలేదు కదా?", extra: ["don't"] },
    { en: "No, I had a cold. I'm better now.", te: "లేదు, నాకు జలుబు చేసింది. ఇప్పుడు బాగానే ఉంది.", extra: ["Yes,"] },
    { en: "Oh, really? I didn't know that.", te: "ఓ, అవునా? ఆ విషయం నాకు తెలీదు.", extra: ["don't"] },
    { en: "Me too. I love this time of day.", te: "నాకు కూడా. రోజులో ఈ టైమ్ అంటే నాకు చాలా ఇష్టం.", extra: ["also"] },
    { en: "You haven't met Sita, have you? No, I haven't.", te: "మీరు సీత గారిని కలవలేదు కదా? లేదు, కలవలేదు.", extra: ["Yes,"] },
    { en: "How come you were late today?", te: "ఈ రోజు ఆలస్యం ఎందుకు అయింది?", extra: ["did"] },
    { en: "Is that so? It's a small world, isn't it?", te: "అలాగా? లోకం చాలా చిన్నది కదా!", extra: ["aren't"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When someone tells you some news today, keep the chat going: Oh, really? I didn't know that.",
    te: "ఈ రోజు ఎవరైనా ఏదైనా విషయం చెప్తే, కబుర్లు సాగించండి: Oh, really? I didn't know that.",
  },
  words: [
    { en: "me too", te: "నాకు కూడా" },
    { en: "is that so", te: "అలాగా?" },
    { en: "how come", te: "ఎందుకు? ఎలా?" },
    { en: "small world", te: "లోకం చిన్నది (తెలిసినవాళ్ళు ఎక్కడైనా కలుస్తారు)" },
    { en: "I didn't know that", te: "ఆ విషయం నాకు తెలీదు" },
  ],
  grammar: ["indirect-tag-questions", "yes-no-questions", "past-simple"],
  topics: ["people", "neighbours", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Answer the fact, then add more", te: "జరిగింది చెప్పి, ఇంకో మాట చేర్చండి" },
      body: {
        en: "To a tag or a not question, yes and no tell the fact: You didn't come, did you? No, I had a cold. Then add a little more, so the chat goes on.",
        te: "tag ప్రశ్నకైనా, not ప్రశ్నకైనా Yes, No జరిగిందాన్నే చెప్తాయి: రాకపోతే No. తర్వాత ఇంకో చిన్న మాట చేర్చండి, కబుర్లు సాగుతాయి.",
      },
      bridge: {
        te: ["లేదు,", "నాకు", "జలుబు", "చేసింది"],
        en: [
          { text: "No,", role: "what" },
          { text: "I", role: "who" },
          { text: "had", role: "action" },
          { text: "a cold.", role: "what" },
        ],
      },
      examples: [
        { en: "You didn't come yesterday, did you?", te: "నిన్న మీరు రాలేదు కదా?" },
        { en: "No, I had a cold. I'm better now.", te: "లేదు, నాకు జలుబు చేసింది. ఇప్పుడు బాగానే ఉంది." },
        { en: "Oh, really? I didn't know that.", te: "ఓ, అవునా? ఆ విషయం నాకు తెలీదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Words that keep a chat going", te: "కబుర్లు సాగించే మాటలు" },
      items: [
        {
          form: "Really? / Is that so?",
          useFor: { en: "Show interest in someone's news.", te: "ఎవరైనా చెప్పిన విషయం మీద ఆసక్తి చూపించడానికి." },
          example: { en: "Oh, really? I didn't know that.", te: "ఓ, అవునా? ఆ విషయం నాకు తెలీదు." },
        },
        {
          form: "Me too.",
          useFor: { en: "Say you feel the same.", te: "మీకూ అలాగే అనిపిస్తుందని చెప్పడానికి." },
          example: { en: "Me too. I love this time of day.", te: "నాకు కూడా. రోజులో ఈ టైమ్ అంటే నాకు చాలా ఇష్టం." },
        },
        {
          form: "How come …?",
          useFor: { en: "Ask why in a friendly way, with no did after it.", te: "స్నేహంగా ఎందుకు అని అడగడానికి; దాని తర్వాత did రాదు." },
          example: { en: "How come you were late today?", te: "ఈ రోజు ఆలస్యం ఎందుకు అయింది?" },
        },
        {
          form: "It's a small world.",
          useFor: { en: "You both know the same person or place.", te: "మీ ఇద్దరికీ ఒకే మనిషి గానీ ఒకే ఊరు గానీ తెలిసినప్పుడు." },
          example: { en: "You know Rani too? It's a small world!", te: "మీకు రాణి గారు కూడా తెలుసా? లోకం చాలా చిన్నది!" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "negative-answer",
      wrong: "You didn't come yesterday, did you? Yes, I had a cold.",
      right: "You didn't come yesterday, did you? No, I had a cold.",
      why: {
        en: "You did not come, so English starts with No; Telugu అవును agrees with the question instead.",
        te: "మీరు రాలేదు, అందుకే ఇంగ్లీష్‌లో No తో మొదలవుతుంది; తెలుగు 'అవును' ప్రశ్నతో ఒప్పుకుంటుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "How come did you miss the walk?",
      right: "How come you missed the walk?",
      why: {
        en: "How come keeps the normal order, who and then the action, with no did.",
        te: "How come తర్వాత మామూలు వరుసే: ముందు ఎవరు, తర్వాత పని; did రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "A walker asks: You haven't been to the new temple, have you? You have been there.",
        te: "ఒక వాకర్ You haven't been to the new temple, have you? అని అడిగారు. మీరు వెళ్ళారు.",
      },
      options: ["Yes, I have. It's beautiful.", "No, I have. It's beautiful.", "Yes, I haven't. It's beautiful."],
      answer: 0,
      why: {
        en: "You went there, so say Yes and match it with have, not haven't.",
        te: "మీరు వెళ్ళారు, అందుకే Yes అని, haven't కాదు have తో జవాబు చెప్పాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Oh, really? I ___ know that.",
      te: "ఓ, అవునా? ఆ విషయం నాకు తెలీదు.",
      options: ["didn't", "not", "wasn't"],
      answer: 0,
      why: {
        en: "Not cannot stand alone before know; for the past, say didn't and keep know plain.",
        te: "know ముందు not ఒక్కటే రాదు; గతం కాబట్టి didn't, దాని తర్వాత know అలాగే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend says: I've joined the laughter club. Show interest, and keep the chat going.",
        te: "స్నేహితులు I've joined the laughter club అన్నారు. ఆసక్తి చూపించి, కబుర్లు సాగించండి.",
      },
      options: ["Really? How is it?", "Okay.", "Why? It's useless."],
      answer: 0,
      why: {
        en: "Really with a question shows interest; okay alone ends the chat, and useless is rude.",
        te: "Really తో పాటు ఒక ప్రశ్న అడిగితే ఆసక్తి తెలుస్తుంది; okay ఒక్కటే అంటే మాట ఆగిపోతుంది, useless అనడం మర్యాద కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "We were talking at the bench for an hour.",
      wrongIndex: 3,
      fix: "We were talking on the bench for an hour.",
      why: {
        en: "You sit on top of a bench, so English uses on; Telugu బెంచ్ మీద says the same.",
        te: "బెంచ్ మీద కూర్చుంటాం, అందుకే on; తెలుగులో 'మీద' అన్నట్టే.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Your friend asks: You didn't hear about Suresh's trip, did you? You didn't hear about it.",
        te: "స్నేహితులు You didn't hear about Suresh's trip, did you? అని అడిగారు. మీరు వినలేదు.",
      },
      expected: ["No, I didn't. Tell me!", "No, I didn't.", "No, I didn't. What happened?"],
      options: ["No, I didn't. Tell me!", "Yes, I didn't. Tell me!", "No, I didn't heard. Tell me!"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A walker you just met knows your cousin Mohan. Show your surprise.",
        te: "ఇప్పుడే పరిచయమైన ఒక వాకర్ గారికి మీ కజిన్ మోహన్ గారు తెలుసు. మీ ఆశ్చర్యం చూపించండి.",
      },
      expected: ["Really? It's a small world!", "It's a small world!", "Is that so? It's a small world, isn't it?"],
      options: ["Really? It's a small world!", "Really? It's small world!", "Really? World is small!"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A long chat on the bench", te: "బెంచ్ మీద పెద్ద కబుర్లు" },
    scene: {
      en: "You missed your walk yesterday. Today Venkat, a walker you know, sits next to you on the bench.",
      te: "నిన్న మీరు walk కి రాలేదు. ఈ రోజు మీకు తెలిసిన వాకర్ వెంకట్ గారు బెంచ్ మీద మీ పక్కన కూర్చున్నారు.",
    },
    partner: { en: "Venkat (a walker you know)", te: "వెంకట్ (మీకు తెలిసిన వాకర్)" },
    voice: "b",
    skills: [
      { id: "answer", label: { en: "Answering the English way", te: "ఇంగ్లీష్ పద్ధతిలో జవాబు" } },
      { id: "chat", label: { en: "Keeping the chat going", te: "కబుర్లు సాగించడం" } },
    ],
    turns: [
      {
        partner: "Hello! You didn't come for the walk yesterday, did you?",
        te: "హలో! నిన్న మీరు walk కి రాలేదు కదా?",
        hint: { en: "Say you didn't come, and give the reason: a cold.", te: "రాలేదని చెప్పి, కారణం చెప్పండి: జలుబు." },
        replies: [
          { say: "No, I didn't. I had a cold.", good: true, skill: "answer" },
          { say: "Yes, I didn't. I had a cold.", good: false, skill: "answer", fixIt: "negative-answer" },
        ],
      },
      {
        partner: "Oh, sorry to hear that. I went to Tirupati last week with my brother.",
        te: "అయ్యో. పోయిన వారం నేను మా తమ్ముడితో తిరుపతి వెళ్ళాను.",
        hint: { en: "Show interest, say this is news to you, and ask about the trip.", te: "ఆసక్తి చూపించి, ఈ విషయం మీకు తెలీదని చెప్పి, ప్రయాణం గురించి అడగండి." },
        replies: [
          { say: "Oh, really? I didn't know that. How was it?", good: true, skill: "chat" },
          { say: "Oh, really? I don't knew that. How was it?", good: false, skill: "chat" },
          {
            say: "Hmm. Okay.",
            good: false,
            skill: "chat",
            react: { en: "Oh, you're not interested? Fine.", te: "ఓ, మీకు ఆసక్తి లేదా? సరే." },
          },
        ],
      },
      {
        partner: "It was crowded, but darshan was quick. My brother knows your neighbour Grace!",
        te: "రద్దీగా ఉంది, కానీ దర్శనం త్వరగా అయింది. మా తమ్ముడికి మీ పక్కింటి గ్రేస్ గారు తెలుసు!",
        hint: { en: "Show surprise: you both know the same person.", te: "ఆశ్చర్యం చూపించండి: మీ ఇద్దరికీ ఒకే మనిషి తెలుసు." },
        replies: [
          { say: "Is that so? It's a small world!", good: true, skill: "chat" },
          { say: "Is that so? It's small world!", good: false, skill: "chat", fixIt: "article" },
        ],
      },
      {
        partner: "It is! Well, the sun is up. Shall we do one more lap?",
        te: "అవును! సరే, ఎండ వచ్చేసింది. ఇంకో రౌండ్ నడుద్దామా?",
        hint: { en: "Agree, and say you need the walk too.", te: "ఒప్పుకుని, మీకూ నడక అవసరమని చెప్పండి." },
        replies: [
          { say: "Yes, let's. I need the walk too.", good: true, skill: "chat" },
          { say: "Sure, let's go together.", good: true, skill: "chat" },
          { say: "Sure, let's going together.", good: false, skill: "chat" },
        ],
      },
    ],
  },
};
