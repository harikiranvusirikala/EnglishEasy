import type { Lesson } from "../../types";

/** Week 36, Day 4 (CURRICULUM §4): look like vs be like — He looks like his brother, but he's quieter. */
export const day: Lesson = {
  id: "looks-like-and-is-like",
  kind: "lesson",
  title: { en: "Looks Like, Is Like", te: "రూపం, స్వభావం" },
  subtitle: "look like / be like",
  summary: {
    en: "Learn to tell looks from nature: He looks like his brother, but he's quieter.",
    te: "రూపానికీ స్వభావానికీ తేడా చెప్పడం నేర్చుకుందాం: He looks like his brother, but he's quieter.",
  },
  seo: {
    title: "Looks Like and Is Like in English for Telugu Speakers",
    description:
      "Say He looks like his brother, but he's quieter. Simple lessons for Telugu speakers on describing looks and nature.",
  },
  pattern: [
    { text: "He", role: "who" },
    { text: "looks like", role: "action" },
    { text: "his brother", role: "what" },
  ],
  core: [
    { en: "She looks like her mother.", te: "ఆవిడ అచ్చం వాళ్ళ అమ్మగారిలాగే ఉంటారు.", extra: ["looking"] },
    { en: "He looks like his brother, but he's quieter.", te: "చూడటానికి ఆయన వాళ్ళ అన్నయ్యలాగే ఉంటారు, కానీ తక్కువ మాట్లాడతారు.", extra: ["more"] },
    { en: "They look the same, but they're very different.", te: "వారిద్దరూ ఒకేలా కనిపిస్తారు, కానీ స్వభావాలు చాలా వేరు.", extra: ["looking"] },
    { en: "Ramesh is calm, but his brother is talkative.", te: "రమేష్ గారు ప్రశాంతంగా ఉంటారు, కానీ వాళ్ళ తమ్ముడు బాగా మాట్లాడతారు.", extra: ["talk"] },
    { en: "My cousin is very similar to me.", te: "మా కజిన్ స్వభావం అచ్చం నాలాంటిదే.", extra: ["with"] },
    { en: "She looks strict, but she's very kind.", te: "ఆవిడ చూడటానికి strict గా కనిపిస్తారు, కానీ చాలా మంచివారు.", extra: ["is"] },
    { en: "Who do you look like, your mother or father?", te: "మీరు ఎవరిలా ఉంటారు, అమ్మగారిలానా, నాన్నగారిలానా?", extra: ["are"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of two relatives. Say how they look, and what they're like.",
    te: "మీ బంధువుల్లో ఇద్దరిని గుర్తు చేసుకోండి. వారు ఎలా కనిపిస్తారో, ఎలాంటివారో చెప్పండి.",
  },
  words: [
    { en: "looks like", te: "… లాగా ఉంటారు, పోలి ఉంటారు" },
    { en: "similar", te: "దాదాపు ఒకేలాంటి" },
    { en: "calm", te: "ప్రశాంతంగా ఉండే" },
    { en: "quiet", te: "తక్కువ మాట్లాడే, నెమ్మదైన" },
    { en: "talkative", te: "బాగా మాట్లాడే" },
  ],
  grammar: ["comparatives-superlatives", "present-simple"],
  topics: ["people", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Looks or nature?", te: "రూపమా, స్వభావమా?" },
      body: {
        en: "Look like is about the face: She looks like her mother. Be like is about nature: What is she like? Join the two with but.",
        te: "look like అంటే రూపం: She looks like her mother. be like అంటే స్వభావం: What is she like? రెండిటినీ but తో కలిపి చెప్పొచ్చు.",
      },
      bridge: {
        te: ["ఆయన", "వాళ్ళ అన్నయ్యలాగే", "ఉంటారు"],
        en: [
          { text: "He", role: "who" },
          { text: "looks like", role: "action" },
          { text: "his brother", role: "what" },
        ],
      },
      examples: [
        { en: "She looks like her mother.", te: "ఆవిడ అచ్చం వాళ్ళ అమ్మగారిలాగే ఉంటారు." },
        { en: "He looks like his brother, but he's quieter.", te: "చూడటానికి ఆయన వాళ్ళ అన్నయ్యలాగే ఉంటారు, కానీ తక్కువ మాట్లాడతారు." },
        { en: "She looks strict, but she's very kind.", te: "ఆవిడ చూడటానికి strict గా కనిపిస్తారు, కానీ చాలా మంచివారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Three ways to use like", te: "like ని మూడు రకాలుగా" },
      items: [
        {
          form: "looks like + a person",
          useFor: { en: "The same face as someone.", te: "ఇంకొకరి లాంటి ముఖం." },
          example: { en: "She looks like her mother.", te: "ఆవిడ అచ్చం వాళ్ళ అమ్మగారిలాగే ఉంటారు." },
        },
        {
          form: "looks + a describing word",
          useFor: { en: "How someone seems from outside.", te: "బయటికి ఎలా కనిపిస్తారో." },
          example: { en: "She looks strict, but she's very kind.", te: "ఆవిడ చూడటానికి strict గా కనిపిస్తారు, కానీ చాలా మంచివారు." },
        },
        {
          form: "What is she like?",
          useFor: { en: "Her nature, inside.", te: "లోపలి స్వభావం." },
          example: { en: "What is her sister like?", te: "వాళ్ళ అక్కగారు ఎలాంటివారు?" },
        },
        {
          form: "quieter / more talkative",
          useFor: { en: "Comparing two people.", te: "ఇద్దరిని పోల్చడానికి." },
          example: { en: "He looks like his brother, but he's quieter.", te: "చూడటానికి ఆయన వాళ్ళ అన్నయ్యలాగే ఉంటారు, కానీ తక్కువ మాట్లాడతారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "He is looking like his father.",
      right: "He looks like his father.",
      why: {
        en: "Here looks like is always true, not only now, so it takes no -ing.",
        te: "ఇక్కడ looks like ఎప్పుడూ ఉండే నిజం, ఇప్పుడు మాత్రమే కాదు; అందుకే -ing వద్దు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "She looks like very strict.",
      right: "She looks very strict.",
      why: {
        en: "Before a describing word, use looks alone. Looks like comes before a person.",
        te: "describing పదం ముందు looks ఒక్కటే చాలు. looks like మనిషి ముందు వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: { en: "Your friend Joseph has his father's face. What do you say?", te: "మీ స్నేహితులు జోసెఫ్ గారి ముఖం అచ్చం వాళ్ళ నాన్నగారిదే. ఏమంటారు?" },
      options: ["Joseph looks like his father.", "Joseph is looking like his father.", "Joseph looks his father."],
      answer: 0,
      why: {
        en: "For the same face, say looks like, with s and without -ing.",
        te: "ఒకే రూపం అంటే looks like; s ఉండాలి, -ing వద్దు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "He looks like his brother, but he's ___.",
      te: "చూడటానికి ఆయన వాళ్ళ అన్నయ్యలాగే ఉంటారు, కానీ తక్కువ మాట్లాడతారు.",
      options: ["quieter", "more quieter", "quietly"],
      answer: 0,
      why: {
        en: "Quiet is a short word, so add er; never put more before an er word.",
        te: "quiet చిన్న పదం, er చేర్చండి; er ఉన్న పదం ముందు more వద్దు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "A friend asks: What is your neighbour like? Choose the right answer.",
        te: "What is your neighbour like? అని స్నేహితులు అడిగారు. సరైన జవాబు ఎంచుకోండి.",
      },
      options: ["She's very calm and helpful.", "She's tall, with long hair.", "She likes music and films."],
      answer: 0,
      why: {
        en: "What is she like asks about her nature, not her looks or her hobbies.",
        te: "What is she like అంటే స్వభావం గురించి; రూపం, ఇష్టాల గురించి కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "My cousin is very similar with me.",
      wrongIndex: 5,
      fix: "My cousin is very similar to me.",
      why: {
        en: "Telugu thinks నాతో, with me, but similar always takes to, never with.",
        te: "'నాతో' అని ఆలోచించి with అంటాం; కానీ similar తర్వాత ఎప్పుడూ to వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Tell a friend that Prasad has the same face as his father.",
        te: "ప్రసాద్ గారు అచ్చం వాళ్ళ నాన్నగారిలాగే ఉంటారని స్నేహితులకి చెప్పండి.",
      },
      expected: ["Prasad looks like his father.", "He looks like his father."],
      options: ["Prasad looks like his father.", "Prasad is looking like his father.", "Prasad look like his father."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Two sisters look the same, but their nature is very different. Say this.",
        te: "ఇద్దరు అక్కాచెల్లెళ్ళు ఒకేలా ఉంటారు, కానీ స్వభావాలు చాలా వేరు. ఈ మాట చెప్పండి.",
      },
      expected: ["They look the same, but they're very different.", "They look the same, but they are very different."],
      options: ["They look the same, but they're very different.", "They are looking same, but very different.", "They look like same, but they're different."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Two brothers at the station", te: "స్టేషన్‌లో ఇద్దరు అన్నదమ్ములు" },
    scene: {
      en: "Your friends Suresh and Venkat are brothers. Your neighbour Gopal will pick them up at the station.",
      te: "మీ స్నేహితులు సురేష్, వెంకట్ అన్నదమ్ములు. మీ పక్కింటి గోపాల్ గారు స్టేషన్‌కి వెళ్ళి వారిని తీసుకొస్తారు.",
    },
    partner: { en: "Gopal (neighbour)", te: "గోపాల్ (పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "looks", label: { en: "Describing looks", te: "రూపం చెప్పడం" } },
      { id: "nature", label: { en: "Describing nature", te: "స్వభావం చెప్పడం" } },
    ],
    turns: [
      {
        partner: "I'm leaving for the station. How will I know them?",
        te: "నేను స్టేషన్‌కి బయలుదేరుతున్నాను. వారిని ఎలా గుర్తుపట్టాలి?",
        hint: { en: "Tell him the two brothers have the same face.", te: "ఇద్దరు అన్నదమ్ముల ముఖాలు ఒకేలా ఉంటాయని చెప్పండి." },
        replies: [
          { say: "They look the same. They're brothers.", good: true, skill: "looks" },
          { say: "They are looking same. They're brothers.", good: false, skill: "looks", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Oh! Then how will I know who is who?",
        te: "అయ్యో! మరి ఎవరు ఎవరో ఎలా తెలుస్తుంది?",
        hint: { en: "Give one thing on each face that is different.", te: "ఒక్కొక్కరి ముఖంలో వేరుగా ఉండే ఒక గుర్తు చెప్పండి." },
        replies: [
          { say: "Suresh has a moustache, and Venkat has a beard.", good: true, skill: "looks" },
          { say: "Suresh has moustache, and Venkat has beard.", good: false, skill: "looks", fixIt: "article" },
        ],
      },
      {
        partner: "Good. And what are they like?",
        te: "సరే. మరి వారు ఎలాంటివారు?",
        hint: { en: "Compare their nature: one talks a lot, one talks less.", te: "వారి స్వభావం పోల్చండి: ఒకరు బాగా మాట్లాడతారు, ఇంకొకరు తక్కువ." },
        replies: [
          { say: "Suresh is very talkative, but Venkat is quieter.", good: true, skill: "nature" },
          { say: "Suresh is very talkative, but Venkat is more quieter.", good: false, skill: "nature" },
          {
            say: "Venkat is boring. Don't talk to him.",
            good: false,
            skill: "nature",
            react: { en: "Boring? That's not a nice thing to say!", te: "బోరింగా? అలా అనడం బాగోలేదు!" },
          },
        ],
      },
      {
        partner: "No problem. I'll bring them home safely.",
        te: "పర్లేదు. వారిని జాగ్రత్తగా ఇంటికి తీసుకొస్తాను.",
        hint: { en: "Thank him warmly for his help.", te: "ఆయన సహాయానికి మనస్ఫూర్తిగా థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you so much, Gopal. That's very kind.", good: true },
          { say: "Thank you, Gopal. You are very kind type.", good: false, fixIt: "indian-english" },
        ],
      },
    ],
  },
};
