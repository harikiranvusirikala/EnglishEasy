import type { Lesson } from "../../types";

/** Week 4, Day 4 (CURRICULUM §3): describing people with is + word and has + feature. */
export const day: Lesson = {
  id: "describing-people",
  kind: "lesson",
  title: { en: "Describing People", te: "మనుషులు ఎలా ఉంటారు" },
  subtitle: "is tall / has grey hair",
  summary: {
    en: "Learn to describe people: is for how they are, has for what they have.",
    te: "మనుషులు ఎలా ఉంటారో చెప్పడం నేర్చుకుందాం: ఎలా ఉంటారో is తో, వాళ్ళకి ఏమి ఉందో has తో.",
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
    { en: "He is tall.", te: "ఆయన పొడుగ్గా ఉంటారు.", extra: ["has"] },
    { en: "She is very kind.", te: "ఆవిడ చాలా మంచి మనిషి.", extra: ["has"] },
    { en: "He has grey hair.", te: "ఆయనకి నెరిసిన జుట్టు ఉంది.", extra: ["is"] },
    { en: "She has long hair.", te: "ఆవిడకి పొడవాటి జుట్టు ఉంది.", extra: ["is"] },
    { en: "He is short and thin.", te: "ఆయన పొట్టిగా, సన్నగా ఉంటారు.", extra: ["has"] },
    { en: "She wears glasses.", te: "ఆవిడ కళ్ళజోడు పెట్టుకుంటారు.", extra: ["is"] },
    { en: "What does he look like?", te: "ఆయన ఎలా ఉంటారు?", extra: ["How"] },
  ],
  key: [0, 1, 2, 6],
  tryToday: {
    en: "Describe a friend in two sentences: one with is and one with has.",
    te: "మీ స్నేహితులు ఒకరు ఎలా ఉంటారో రెండు వాక్యాల్లో చెప్పండి: ఒకటి is తో, ఒకటి has తో.",
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
        en: "How a person is takes is: He is tall. What a person has takes has: He has grey hair. In Telugu we say ఆయనకి నెరిసిన జుట్టు ఉంది; in English, He has grey hair.",
        te: "ఒకరు ఎలా ఉంటారో చెప్పడానికి is: He is tall. వాళ్ళకి ఏమి ఉందో చెప్పడానికి has: He has grey hair. తెలుగులో 'ఆయనకి నెరిసిన జుట్టు ఉంది' అంటాం; ఇంగ్లీష్‌లో He has grey hair.",
      },
      bridge: {
        te: ["ఆయనకి", "నెరిసిన జుట్టు", "ఉంది"],
        en: [
          { text: "He", role: "who" },
          { text: "has", role: "action" },
          { text: "grey hair", role: "what" },
        ],
      },
      examples: [
        { en: "He is tall.", te: "ఆయన పొడుగ్గా ఉంటారు." },
        { en: "She is very kind.", te: "ఆవిడ చాలా మంచి మనిషి." },
        { en: "He has grey hair.", te: "ఆయనకి నెరిసిన జుట్టు ఉంది." },
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
          example: { en: "He is short and thin.", te: "ఆయన పొట్టిగా, సన్నగా ఉంటారు." },
        },
        {
          form: "has + grey hair, a beard",
          useFor: { en: "For what a person has.", te: "ఒకరికి ఏమి ఉందో చెప్పడానికి." },
          example: { en: "She has long hair.", te: "ఆవిడకి పొడవాటి జుట్టు ఉంది." },
        },
        {
          form: "What does … look like?",
          useFor: { en: "To ask how a person looks.", te: "ఒకరు ఎలా కనిపిస్తారో అడగడానికి." },
          example: { en: "What does he look like?", te: "ఆయన ఎలా ఉంటారు?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "He is grey hair.",
      right: "He has grey hair.",
      why: {
        en: "Telugu says ఆయనకి … ఉంది, so English says has: He has grey hair.",
        te: "తెలుగులో 'ఆయనకి నెరిసిన జుట్టు ఉంది' అంటాం, అంటే has: He has grey hair.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "How does he look like?",
      right: "What does he look like?",
      why: {
        en: "Telugu says ఎలా, but with look like English asks what: What does he look like?",
        te: "తెలుగులో 'ఎలా' అన్నా, look like తో how కాదు, what: What does he look like?",
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
        en: "Kind says what she is like, so use is.",
        te: "kind అంటే ఆవిడ ఎలాంటి మనిషో చెప్తుంది, కాబట్టి is.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which question asks how a person looks?", te: "ఒకరు ఎలా కనిపిస్తారో అడిగే ప్రశ్న ఏది?" },
      options: ["What does he look like?", "How does he look like?", "What is he look like?"],
      answer: 0,
      why: {
        en: "Use what and does with look like: What does he look like?",
        te: "look like తో what, does వాడాలి: What does he look like?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "She is long hair.",
      wrongIndex: 1,
      fix: "She has long hair.",
      why: {
        en: "Long hair is something she has, so use has.",
        te: "ఆవిడకి పొడవాటి జుట్టు ఉంది, కాబట్టి has.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Describe your friend: he is tall and has grey hair.",
        te: "మీ స్నేహితులు ఎలా ఉంటారో చెప్పండి: ఆయన పొడుగ్గా ఉంటారు, ఆయనకి నెరిసిన జుట్టు ఉంది.",
      },
      expected: ["He is tall and has grey hair.", "He is tall. He has grey hair."],
      options: ["He is tall and has grey hair.", "He is tall and grey hair.", "He has tall and grey hair."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Someone asks: What does your sister look like? She has long hair. Answer.",
        te: "ఒకరు అడుగుతున్నారు: What does your sister look like? ఆవిడకి పొడవాటి జుట్టు ఉంది. జవాబు చెప్పండి.",
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
      en: "You are at the railway station to meet your cousin Suresh. Grace, at the help desk, offers to look for him.",
      te: "మీ కజిన్ సురేష్‌ని కలవడానికి మీరు రైల్వే స్టేషన్‌లో ఉన్నారు. హెల్ప్ డెస్క్‌లో ఉండే గ్రేస్ గారు ఆయన్ని వెతకడానికి సాయం చేస్తామంటున్నారు.",
    },
    partner: { en: "Grace (station help desk)", te: "గ్రేస్ (స్టేషన్ హెల్ప్ డెస్క్)" },
    skills: [{ id: "describe", label: { en: "Describe", te: "ఎలా ఉంటారో చెప్పడం" } }],
    turns: [
      {
        partner: "Who are you waiting for?",
        te: "మీరు ఎవరి కోసం ఎదురుచూస్తున్నారు?",
        hint: { en: "Say who you are waiting for: your cousin.", te: "ఎవరి కోసం ఎదురుచూస్తున్నారో చెప్పండి: మీ కజిన్." },
        replies: [
          { say: "I am waiting for my cousin.", good: true },
          { say: "I am waiting my cousin.", good: false },
        ],
      },
      {
        partner: "What does he look like?",
        te: "ఆయన ఎలా ఉంటారు?",
        hint: { en: "Say how he looks: tall and thin. Use is.", te: "ఆయన ఎలా ఉంటారో చెప్పండి: పొడుగ్గా, సన్నగా. is వాడండి." },
        replies: [
          { say: "He is tall and thin.", good: true, skill: "describe" },
          { say: "He has tall and thin.", good: false, skill: "describe" },
          {
            say: "He is a very good man.",
            good: false,
            skill: "describe",
            react: { en: "I mean, is he tall or short?", te: "అంటే, ఆయన పొడుగా, పొట్టా?" },
          },
        ],
      },
      {
        partner: "Anything else?",
        te: "ఇంకా ఏమైనా?",
        hint: { en: "Tell her about his hair and beard. Use has.", te: "ఆయన జుట్టు, గడ్డం గురించి చెప్పండి. has వాడండి." },
        replies: [
          { say: "He has grey hair and a beard.", good: true, skill: "describe" },
          { say: "He is grey hair and a beard.", good: false, skill: "describe" },
        ],
      },
      {
        partner: "Is that him, near the gate?",
        te: "గేట్ దగ్గర ఉన్నది ఆయనేనా?",
        hint: { en: "Say yes, it is your cousin, and thank her.", te: "అవును, ఆయనే అని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Yes! That is him. Thank you.", good: true },
          { say: "Yes! That him. Thank you.", good: false },
        ],
      },
    ],
  },
};
