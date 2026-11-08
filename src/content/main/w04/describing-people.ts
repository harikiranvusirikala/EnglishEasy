import type { Lesson } from "../../types";

/** Week 4, Day 4 (CURRICULUM §3): describing people with is + word and has + feature. */
export const day: Lesson = {
  id: "describing-people",
  kind: "lesson",
  title: { en: "Describing People", te: "మనుషుల వర్ణన" },
  subtitle: "is tall / has grey hair",
  summary: {
    en: "Learn to describe people: is for how they are, has for what they have.",
    te: "మనుషులను వర్ణించడం నేర్చుకుందాం: ఎలా ఉంటారో is తో, వాళ్ళకు ఏమి ఉందో has తో.",
  },
  seo: {
    title: "Describing People in English for Telugu Speakers",
    description:
      "Say He is tall, She is very kind and He has grey hair in English. Simple lessons for Telugu speakers on describing people.",
  },
  pattern: [
    { text: "He", role: "who" },
    { text: "has", role: "action" },
    { text: "grey hair", role: "what" },
  ],
  core: [
    { en: "He is tall.", te: "అతను పొడుగ్గా ఉంటాడు.", extra: ["has"] },
    { en: "She is very kind.", te: "ఆవిడ చాలా మంచి మనిషి.", extra: ["has"] },
    { en: "He has grey hair.", te: "అతనికి నెరిసిన జుట్టు ఉంది.", extra: ["is"] },
    { en: "She has long hair.", te: "ఆమెకు పొడవాటి జుట్టు ఉంది.", extra: ["is"] },
    { en: "He is short and thin.", te: "అతను పొట్టిగా, సన్నగా ఉంటాడు.", extra: ["has"] },
    { en: "She wears glasses.", te: "ఆమె కళ్ళజోడు పెట్టుకుంటుంది.", extra: ["is"] },
    { en: "What does he look like?", te: "అతను ఎలా ఉంటాడు?", extra: ["How"] },
  ],
  key: [0, 1, 2, 6],
  tryToday: {
    en: "Describe a friend in two sentences: one with is and one with has.",
    te: "ఒక స్నేహితుడిని రెండు వాక్యాల్లో వర్ణించండి: ఒకటి is తో, ఒకటి has తో.",
  },
  words: [
    { en: "tall", te: "పొడుగు" },
    { en: "short", te: "పొట్టి" },
    { en: "kind", te: "మంచి, దయగల" },
    { en: "hair", te: "జుట్టు" },
    { en: "glasses", te: "కళ్ళజోడు" },
  ],
  grammar: ["am-is-are", "have-has-possessives", "present-simple"],
  topics: ["people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Is or has?", te: "is ఆ, has ఆ?" },
      body: {
        en: "How a person is takes is: He is tall. What a person has takes has: He has grey hair. In Telugu we say అతనికి నెరిసిన జుట్టు ఉంది; in English, He has grey hair.",
        te: "ఒకరు ఎలా ఉంటారో చెప్పడానికి is: He is tall. వాళ్ళకు ఏమి ఉందో చెప్పడానికి has: He has grey hair. తెలుగులో 'అతనికి నెరిసిన జుట్టు ఉంది' అంటాం; ఇంగ్లీష్‌లో He has grey hair.",
      },
      bridge: {
        te: ["అతనికి", "నెరిసిన జుట్టు", "ఉంది"],
        en: [
          { text: "He", role: "who" },
          { text: "has", role: "action" },
          { text: "grey hair", role: "what" },
        ],
      },
      examples: [
        { en: "He is tall.", te: "అతను పొడుగ్గా ఉంటాడు." },
        { en: "She is very kind.", te: "ఆవిడ చాలా మంచి మనిషి." },
        { en: "He has grey hair.", te: "అతనికి నెరిసిన జుట్టు ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Is, has, look like", te: "is, has, look like — ఎప్పుడు ఏది?" },
      items: [
        {
          form: "is + tall, kind, thin",
          useFor: { en: "For how a person is.", te: "ఒకరు ఎలా ఉంటారో చెప్పడానికి." },
          example: { en: "He is short and thin.", te: "అతను పొట్టిగా, సన్నగా ఉంటాడు." },
        },
        {
          form: "has + hair, glasses",
          useFor: { en: "For what a person has.", te: "ఒకరికి ఏమి ఉందో చెప్పడానికి." },
          example: { en: "She has long hair.", te: "ఆమెకు పొడవాటి జుట్టు ఉంది." },
        },
        {
          form: "What does … look like?",
          useFor: { en: "To ask how a person looks.", te: "ఒకరు ఎలా కనిపిస్తారో అడగడానికి." },
          example: { en: "What does he look like?", te: "అతను ఎలా ఉంటాడు?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "He is grey hair.",
      right: "He has grey hair.",
      why: {
        en: "Hair is something he has, so say has.",
        te: "జుట్టు అతనికి ఉన్నది, కాబట్టి has అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "How does he look like?",
      right: "What does he look like?",
      why: {
        en: "With look like, ask what, not how.",
        te: "look like తో how కాదు, what అడగాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["He is grey hair.", "He has grey hair.", "He have grey hair."],
      answer: 1,
      why: {
        en: "For hair, use has: He has grey hair.",
        te: "జుట్టుకి has: He has grey hair.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "My friend ___ very kind.",
      te: "నా స్నేహితురాలు చాలా మంచి మనిషి.",
      options: ["is", "has", "have"],
      answer: 0,
      why: {
        en: "Kind is how she is, so is.",
        te: "kind అంటే ఆమె ఎలా ఉంటుందో, కాబట్టి is.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which question asks how a person looks?", te: "ఒకరు ఎలా కనిపిస్తారో అడిగే ప్రశ్న ఏది?" },
      options: ["What does he look like?", "How does he look like?", "What is he look like?"],
      answer: 0,
      why: {
        en: "Ask: What does he look like?",
        te: "ఇలా అడగాలి: What does he look like?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "She is long hair.",
      wrongIndex: 1,
      fix: "She has long hair.",
      why: {
        en: "Long hair is something she has: has.",
        te: "పొడవాటి జుట్టు ఆమెకు ఉన్నది: has.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Describe your friend: he is tall and has grey hair.",
        te: "మీ స్నేహితుడిని వర్ణించండి: అతను పొడుగు, నెరిసిన జుట్టు ఉంది.",
      },
      expected: ["He is tall and has grey hair.", "He is tall. He has grey hair."],
      options: ["He is tall and has grey hair.", "He has tall and is grey hair.", "He is tall and is grey hair."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Someone asks: What does your sister look like? She has long hair. Answer.",
        te: "ఒకరు అడుగుతున్నారు: What does your sister look like? ఆమెకు పొడవాటి జుట్టు ఉంది. జవాబు చెప్పండి.",
      },
      expected: ["She has long hair."],
      options: ["She is long hair.", "She has long hair.", "She have long hair."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Waiting at the station", te: "స్టేషన్‌లో ఎదురుచూపు" },
    scene: {
      en: "You are at the railway station to meet your cousin Suresh. A helper, Rani, offers to look for him.",
      te: "మీ కజిన్ సురేష్‌ని కలవడానికి మీరు రైల్వే స్టేషన్‌లో ఉన్నారు. రాణి అనే సహాయకురాలు అతన్ని వెతకడానికి సహాయం చేస్తానంటోంది.",
    },
    partner: { en: "Rani (a station helper)", te: "రాణి (స్టేషన్ సహాయకురాలు)" },
    skills: [{ id: "describe", label: { en: "Describe", te: "వర్ణించడం" } }],
    turns: [
      {
        partner: "Who are you waiting for?",
        te: "మీరు ఎవరి కోసం ఎదురుచూస్తున్నారు?",
        hint: { en: "Say: I am waiting for my cousin.", te: "ఇలా చెప్పండి: I am waiting for my cousin." },
        replies: [
          { say: "I am waiting for my cousin.", good: true },
          { say: "I am waiting my cousin.", good: false },
        ],
      },
      {
        partner: "What does he look like?",
        te: "అతను ఎలా ఉంటాడు?",
        hint: { en: "Say: He is tall and thin.", te: "ఇలా చెప్పండి: He is tall and thin." },
        replies: [
          { say: "He is tall and thin.", good: true, skill: "describe" },
          { say: "He has tall and thin.", good: false, skill: "describe" },
        ],
      },
      {
        partner: "Anything else?",
        te: "ఇంకా ఏమైనా?",
        hint: { en: "Say: He has grey hair and glasses.", te: "ఇలా చెప్పండి: He has grey hair and glasses." },
        replies: [
          { say: "He has grey hair and glasses.", good: true, skill: "describe" },
          { say: "He is grey hair and glasses.", good: false, skill: "describe" },
        ],
      },
      {
        partner: "Is that him, near the gate?",
        te: "గేట్ దగ్గర ఉన్నది అతనేనా?",
        hint: { en: "Say: Yes! That is him. Thank you.", te: "ఇలా చెప్పండి: Yes! That is him. Thank you." },
        replies: [
          { say: "Yes! That is him. Thank you.", good: true },
          { say: "Yes! That him. Thank you.", good: false },
        ],
      },
    ],
  },
};
