import type { Lesson } from "../../types";

/** Week 9, Day 2 (CURRICULUM §3): regular past -ed and its three sounds. */
export const day: Lesson = {
  id: "regular-past-verbs",
  kind: "lesson",
  title: { en: "Walked, Cooked, Called", te: "-ed తో గతం" },
  subtitle: "-ed past",
  summary: {
    en: "Learn to talk about the past by adding -ed: walked, cooked, called, visited.",
    te: "-ed చేర్చి గతం గురించి మాట్లాడటం నేర్చుకుందాం: walked, cooked, called, visited.",
  },
  seo: {
    title: "Regular Past Verbs (-ed) in English for Telugu Speakers",
    description:
      "Say I called my friend and She cooked pulihora in English, and say -ed the right way. Simple lessons for Telugu speakers on the past.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "called", role: "action" },
    { text: "my friend", role: "what" },
  ],
  core: [
    { en: "I called my friend.", te: "నేను నా స్నేహితుడికి ఫోన్ చేశాను.", extra: ["call"] },
    { en: "We watched the news.", te: "మేము వార్తలు చూశాం.", extra: ["watch"] },
    { en: "She cooked pulihora.", te: "ఆమె పులిహోర చేసింది.", extra: ["cook"] },
    { en: "I walked to the market.", te: "నేను మార్కెట్‌కి నడిచి వెళ్ళాను.", extra: ["walk"] },
    { en: "He visited his cousin.", te: "అతను తన కజిన్ ఇంటికి వెళ్ళాడు.", extra: ["visit"] },
    { en: "I didn't watch TV.", te: "నేను TV చూడలేదు.", extra: ["watched"] },
    { en: "We talked for an hour.", te: "మేము గంటసేపు మాట్లాడుకున్నాం.", extra: ["talk"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say three things you did yesterday with -ed: I cleaned … I called … I watched …",
    te: "నిన్న చేసిన మూడు పనులు -ed తో చెప్పండి: I cleaned … I called … I watched …",
  },
  words: [
    { en: "talk", te: "మాట్లాడటం" },
    { en: "hour", te: "గంట" },
    { en: "news", te: "వార్తలు" },
    { en: "clean", te: "శుభ్రం చేయడం" },
    { en: "play", te: "ఆడటం" },
  ],
  grammar: ["past-simple", "pronunciation"],
  topics: ["home", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Add -ed for the past", te: "గతానికి -ed చేర్చండి" },
      body: {
        en: "Most action words add -ed for the past: walk becomes walked, call becomes called. The -ed has three sounds: walked ends like t, called ends like d, and visited ends like id.",
        te: "చాలా పని పదాలకు గతంలో -ed చేరుతుంది: walk → walked, call → called. -ed మూడు రకాలుగా పలుకుతారు: walked చివర 't', called చివర 'd', visited చివర 'id'.",
      },
      bridge: {
        te: ["నేను", "నా స్నేహితుడికి", "ఫోన్ చేశాను"],
        en: [
          { text: "I", role: "who" },
          { text: "called", role: "action" },
          { text: "my friend", role: "what" },
        ],
      },
      examples: [
        { en: "I walked to the market.", te: "నేను మార్కెట్‌కి నడిచి వెళ్ళాను." },
        { en: "I called my friend.", te: "నేను నా స్నేహితుడికి ఫోన్ చేశాను." },
        { en: "He visited his cousin.", te: "అతను తన కజిన్ ఇంటికి వెళ్ళాడు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Three sounds of -ed", te: "-ed కి మూడు శబ్దాలు" },
      items: [
        {
          form: "-ed = t (walked, cooked, watched)",
          useFor: { en: "After sounds like k, p, s, ch, sh.", te: "k, p, s, ch, sh శబ్దాల తర్వాత." },
          example: { en: "She cooked pulihora.", te: "ఆమె పులిహోర చేసింది." },
        },
        {
          form: "-ed = d (called, cleaned, played)",
          useFor: { en: "After most other sounds.", te: "మిగతా చాలా శబ్దాల తర్వాత." },
          example: { en: "We talked for an hour.", te: "మేము గంటసేపు మాట్లాడుకున్నాం." },
        },
        {
          form: "-ed = id (visited, wanted)",
          useFor: { en: "After t or d: an extra small sound.", te: "t లేదా d తర్వాత: ఒక చిన్న అదనపు శబ్దం." },
          example: { en: "He visited his cousin.", te: "అతను తన కజిన్ ఇంటికి వెళ్ళాడు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Yesterday I call my friend.",
      right: "Yesterday I called my friend.",
      why: {
        en: "Yesterday is the past: add -ed.",
        te: "yesterday అంటే గతం: -ed చేర్చాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I didn't watched TV.",
      right: "I didn't watch TV.",
      why: {
        en: "After didn't, no -ed: watch.",
        te: "didn't తర్వాత -ed ఉండదు: watch.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["Yesterday she cook pulihora.", "Yesterday she cooked pulihora.", "Yesterday she cooking pulihora."],
      answer: 1,
      why: {
        en: "Past: cooked.",
        te: "గతం: cooked.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "We ___ for an hour.",
      te: "మేము గంటసేపు మాట్లాడుకున్నాం.",
      options: ["talk", "talked", "talking"],
      answer: 1,
      why: {
        en: "It is the past: talked.",
        te: "ఇది గతం: talked.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which word ends with an id sound?", te: "ఏ పదం చివర 'id' శబ్దం వస్తుంది?" },
      options: ["walked", "called", "visited"],
      answer: 2,
      why: {
        en: "Visit ends in t, so visited ends like id.",
        te: "visit చివర t ఉంది, కాబట్టి visited చివర 'id'.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I didn't watched TV.",
      wrongIndex: 2,
      fix: "I didn't watch TV.",
      why: {
        en: "After didn't, watch.",
        te: "didn't తర్వాత watch.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: What did you do last night? Say you watched the news.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: What did you do last night? వార్తలు చూశానని చెప్పండి.",
      },
      expected: ["I watched the news.", "We watched the news."],
      options: ["I watch the news.", "I watched the news.", "I watching the news."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say you called your friend yesterday.",
        te: "నిన్న మీ స్నేహితుడికి ఫోన్ చేశారని చెప్పండి.",
      },
      expected: ["I called my friend yesterday.", "I called my friend."],
      options: ["I called my friend yesterday.", "I call my friend yesterday.", "I calling my friend yesterday."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Your evening", te: "మీ సాయంత్రం" },
    scene: {
      en: "Your neighbour Usha asks what you did last evening.",
      te: "పొరుగింటి ఉష నిన్న సాయంత్రం మీరు ఏం చేశారో అడుగుతోంది.",
    },
    partner: { en: "Usha (a neighbour)", te: "ఉష (పొరుగింటావిడ)" },
    skills: [{ id: "ed", label: { en: "-ed past", te: "-ed గతం" } }],
    turns: [
      {
        partner: "What did you do last evening?",
        te: "నిన్న సాయంత్రం ఏం చేశారు?",
        hint: { en: "Say: I cleaned the house.", te: "ఇలా చెప్పండి: I cleaned the house." },
        replies: [
          { say: "I cleaned the house.", good: true, skill: "ed" },
          { say: "I clean the house.", good: false, skill: "ed" },
        ],
      },
      {
        partner: "And then?",
        te: "తర్వాత?",
        hint: { en: "Say: I called my sister.", te: "ఇలా చెప్పండి: I called my sister." },
        replies: [
          { say: "I called my sister.", good: true, skill: "ed" },
          { say: "I calling my sister.", good: false, skill: "ed" },
        ],
      },
      {
        partner: "Did you watch the cricket match?",
        te: "క్రికెట్ మ్యాచ్ చూశారా?",
        hint: { en: "Say: No, I didn't watch it.", te: "ఇలా చెప్పండి: No, I didn't watch it." },
        replies: [
          { say: "No, I didn't watch it.", good: true, skill: "ed" },
          { say: "No, I didn't watched it.", good: false, skill: "ed" },
        ],
      },
      {
        partner: "India played very well!",
        te: "ఇండియా చాలా బాగా ఆడింది!",
        hint: { en: "Say: Oh! I wanted to watch it.", te: "ఇలా చెప్పండి: Oh! I wanted to watch it." },
        replies: [
          { say: "Oh! I wanted to watch it.", good: true, skill: "ed" },
          { say: "Oh! I want to watched it.", good: false, skill: "ed" },
        ],
      },
    ],
  },
};
