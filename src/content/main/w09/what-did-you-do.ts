import type { Lesson } from "../../types";

/** Week 9, Day 4 (CURRICULUM §3): past wh- questions — Where did you go? What did you eat? */
export const day: Lesson = {
  id: "what-did-you-do",
  kind: "lesson",
  title: { en: "What Did You Do?", te: "ఏం చేశారు?" },
  subtitle: "question word + did",
  summary: {
    en: "Learn to ask about the past: Where did you go? What did you eat? Who did you meet?",
    te: "గతం గురించి అడగడం నేర్చుకుందాం: Where did you go? What did you eat? Who did you meet?",
  },
  seo: {
    title: "What Did You Do? Past Questions in English for Telugu Speakers",
    description:
      "Ask Where did you go? and What did you eat? in English. Simple lessons for Telugu speakers on past questions with did, with Telugu explanations.",
  },
  pattern: [
    { text: "Where", role: "what" },
    { text: "did", role: "action" },
    { text: "you", role: "who" },
    { text: "go?", role: "action" },
  ],
  core: [
    { en: "Where did you go?", te: "మీరు ఎక్కడికి వెళ్ళారు?", extra: ["went"] },
    { en: "What did you eat?", te: "మీరు ఏం తిన్నారు?", extra: ["ate"] },
    { en: "Who did you meet?", te: "మీరు ఎవరిని కలిశారు?", extra: ["met"] },
    { en: "When did you come back?", te: "మీరు ఎప్పుడు తిరిగి వచ్చారు?", extra: ["came"] },
    { en: "What did you do on Sunday?", te: "ఆదివారం మీరు ఏం చేశారు?", extra: ["done"] },
    { en: "How did you go there?", te: "మీరు అక్కడికి ఎలా వెళ్ళారు?", extra: ["went"] },
    { en: "Why did you leave early?", te: "మీరు ఎందుకు తొందరగా వెళ్ళిపోయారు?", extra: ["left"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Ask someone two questions about yesterday: Where did you go? What did you eat?",
    te: "నిన్నటి గురించి ఎవరినైనా రెండు ప్రశ్నలు అడగండి: Where did you go? What did you eat?",
  },
  words: [
    { en: "meet", te: "కలవడం" },
    { en: "come back", te: "తిరిగి రావడం" },
    { en: "leave", te: "వెళ్ళిపోవడం, బయలుదేరడం" },
    { en: "trip", te: "ప్రయాణం, యాత్ర" },
    { en: "there", te: "అక్కడ, అక్కడికి" },
  ],
  grammar: ["past-simple", "question-words"],
  topics: ["people", "travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Question word + did", te: "ప్రశ్న పదం + did" },
      body: {
        en: "To ask about the past, say the question word, then did, then you, then the plain action word: Where did you go? The past is in did, so go stays go.",
        te: "గతం గురించి అడగడానికి: ప్రశ్న పదం, తర్వాత did, తర్వాత you, తర్వాత మామూలు verb: Where did you go? గతం did లోనే ఉంది, కాబట్టి go మారదు.",
      },
      bridge: {
        te: ["మీరు", "ఎక్కడికి", "వెళ్ళారు?"],
        en: [
          { text: "Where", role: "what" },
          { text: "did", role: "action" },
          { text: "you", role: "who" },
          { text: "go?", role: "action" },
        ],
      },
      examples: [
        { en: "Where did you go?", te: "మీరు ఎక్కడికి వెళ్ళారు?" },
        { en: "What did you eat?", te: "మీరు ఏం తిన్నారు?" },
        { en: "Who did you meet?", te: "మీరు ఎవరిని కలిశారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking and answering", te: "అడగడం, జవాబు చెప్పడం" },
      items: [
        {
          form: "What / Where / Who + did",
          useFor: { en: "Put did after the question word.", te: "ప్రశ్న పదం తర్వాత did పెట్టాలి." },
          example: { en: "When did you come back?", te: "మీరు ఎప్పుడు తిరిగి వచ్చారు?" },
        },
        {
          form: "did + plain word",
          useFor: { en: "After did: go, eat, meet, not went, ate, met.", te: "did తర్వాత go, eat, meet; went, ate, met కాదు." },
          example: { en: "How did you go there?", te: "మీరు అక్కడికి ఎలా వెళ్ళారు?" },
        },
        {
          form: "answer in the past",
          useFor: { en: "In the answer, use the past word.", te: "జవాబులో verb గతం రూపంలో ఉండాలి." },
          example: { en: "I went to Guntur.", te: "నేను గుంటూరు వెళ్ళాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Where you went?",
      right: "Where did you go?",
      why: {
        en: "Telugu shows the past in the verb, but an English question puts it in did: Where did you go?",
        te: "తెలుగులో గతం verb లోనే ఉంటుంది; English ప్రశ్నలో గతం did లో ఉంటుంది: Where did you go?",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "What did you ate?",
      right: "What did you eat?",
      why: {
        en: "Did already shows the past, so the verb stays plain: What did you eat?",
        te: "did లోనే గతం ఉంది, అందుకే verb మారదు: What did you eat?",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Choose the correct question.", te: "సరైన ప్రశ్నను ఎంచుకోండి." },
      options: ["Where you went?", "Where did you go?", "Where did you went?"],
      answer: 1,
      why: {
        en: "A past question goes: question word, did, you, plain verb.",
        te: "వరుస: ప్రశ్న పదం, did, you, మామూలు verb.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "What did you ___ on Sunday?",
      te: "ఆదివారం మీరు ఏం చేశారు?",
      options: ["do", "did", "done"],
      answer: 0,
      why: {
        en: "Did shows the past, so the verb after it stays plain.",
        te: "did లోనే గతం ఉంది, అందుకే తర్వాత do మారదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "A friend asks: Where did you go? Choose the best answer.", te: "మీ స్నేహితులు అడుగుతున్నారు: Where did you go? సరైన జవాబు ఏది?" },
      options: ["I went to Tirupati.", "I go to Tirupati yesterday.", "I did go Tirupati."],
      answer: 0,
      why: {
        en: "The question is about the past, so answer with went.",
        te: "ప్రశ్న గతం గురించి, అందుకే జవాబులో went.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Who did you met?",
      wrongIndex: 3,
      fix: "Who did you meet?",
      why: {
        en: "Did already shows the past, so meet stays plain.",
        te: "did లోనే గతం ఉంది, అందుకే meet మారదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend went to a wedding. Ask what she ate.",
        te: "మీ స్నేహితురాలు ఒక పెళ్ళికి వెళ్ళారు. అక్కడ ఏం తిన్నారో అడగండి.",
      },
      expected: ["What did you eat?", "What did you eat at the wedding?"],
      options: ["What you ate?", "What did you eat?", "What did you ate?"],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A friend asks: When did you come back? Say yesterday.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: When did you come back? నిన్న అని చెప్పండి.",
      },
      expected: ["I came back yesterday.", "Yesterday."],
      options: ["I came back yesterday.", "I come back yesterday.", "I did came back yesterday."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Your weekend", te: "మీ వారాంతం" },
    scene: {
      en: "Your friend John asks about your weekend. Answer, then ask about his.",
      te: "మీ స్నేహితుడు జాన్ మీ వారాంతం గురించి అడుగుతున్నారు. జవాబు చెప్పి, ఆయన వారాంతం గురించి అడగండి.",
    },
    partner: { en: "John (a friend)", te: "జాన్ (స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "answer", label: { en: "Past answers", te: "గతంలో జవాబులు" } },
      { id: "ask", label: { en: "did questions", te: "did ప్రశ్నలు" } },
    ],
    turns: [
      {
        partner: "What did you do on the weekend?",
        te: "వారాంతంలో ఏం చేశారు?",
        hint: { en: "Say which town you went to.", te: "ఏ ఊరికి వెళ్ళారో చెప్పండి." },
        replies: [
          { say: "I went to Guntur.", good: true, skill: "answer" },
          { say: "I go to Guntur.", good: false, skill: "answer" },
        ],
      },
      {
        partner: "Nice! Who did you meet there?",
        te: "బాగుంది! అక్కడ ఎవరిని కలిశారు?",
        hint: { en: "Say which relative you met.", te: "ఏ బంధువుని కలిశారో చెప్పండి." },
        replies: [
          { say: "I met my cousin.", good: true, skill: "answer" },
          { say: "I meet my cousin.", good: false, skill: "answer" },
        ],
      },
      {
        partner: "I stayed at home.",
        te: "నేను ఇంట్లోనే ఉన్నాను.",
        hint: { en: "Ask him how he spent the time.", te: "ఇంట్లో ఏం చేశారో ఆయన్ని అడగండి." },
        replies: [
          { say: "What did you do at home?", good: true, skill: "ask" },
          { say: "What you did at home?", good: false, skill: "ask", fixIt: "question" },
          {
            say: "So you did nothing at all?",
            good: false,
            react: { en: "Ha! I rested. That is something too!", te: "హహ! విశ్రాంతి తీసుకున్నాను. అది కూడా పనే కదా!" },
          },
        ],
      },
      {
        partner: "I watched two films!",
        te: "నేను రెండు సినిమాలు చూశాను!",
        hint: { en: "Ask him the names of the films.", te: "ఏ సినిమాలు చూశారో ఆయన్ని అడగండి." },
        replies: [
          { say: "Which films did you watch?", good: true, skill: "ask" },
          { say: "Which films did you watched?", good: false, skill: "ask" },
        ],
      },
    ],
  },
};
