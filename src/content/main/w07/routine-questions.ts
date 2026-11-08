import type { Lesson } from "../../types";

/** Week 7, Day 3 (CURRICULUM §3): present simple questions — Do you …? Does she …? with short answers. */
export const day: Lesson = {
  id: "routine-questions",
  kind: "lesson",
  title: { en: "Do You …? Does She …?", te: "రోజువారీ ప్రశ్నలు" },
  subtitle: "do / does questions",
  summary: {
    en: "Learn to ask about someone's day with do and does, and to give short answers.",
    te: "do, does తో ఒకరి రోజు గురించి అడగడం, చిన్న జవాబులు చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Do You and Does She Questions in English for Telugu Speakers",
    description:
      "Ask Do you get up early? and What time does she sleep? in English, and answer Yes, I do. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "Do", role: "action" },
    { text: "you", role: "who" },
    { text: "get up early?", role: "action" },
  ],
  core: [
    { en: "Do you get up early?", te: "మీరు తొందరగా లేస్తారా?", extra: ["Does"] },
    { en: "What time does she sleep?", te: "ఆమె ఎన్ని గంటలకు పడుకుంటుంది?", extra: ["sleeps"] },
    { en: "Does he drink coffee?", te: "అతను కాఫీ తాగుతాడా?", extra: ["drinks"] },
    { en: "Yes, he does.", te: "అవును, తాగుతాడు.", extra: ["do"] },
    { en: "Where do you go every evening?", te: "మీరు ప్రతి సాయంత్రం ఎక్కడికి వెళ్తారు?", extra: ["does"] },
    { en: "When does the milkman come?", te: "పాలవాడు ఎప్పుడు వస్తాడు?", extra: ["comes"] },
    { en: "No, I don't.", te: "లేదు, అలా చేయను.", extra: ["doesn't"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask someone two questions about their day: Do you …? What time do you …?",
    te: "ఎవరినైనా వాళ్ళ రోజు గురించి రెండు ప్రశ్నలు అడగండి: Do you …? What time do you …?",
  },
  words: [
    { en: "early", te: "తొందరగా, పొద్దున్నే" },
    { en: "evening", te: "సాయంత్రం" },
    { en: "milkman", te: "పాలవాడు" },
    { en: "routine", te: "దినచర్య" },
  ],
  grammar: ["present-simple", "yes-no-questions", "question-words"],
  topics: ["time", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Do or does?", te: "do ఆ, does ఆ?" },
      body: {
        en: "For I, you, we and they, ask with do: Do you get up early? For he, she or one person, ask with does, and the action word has no s: Does he drink coffee? Short answers: Yes, he does. No, I don't.",
        te: "I, you, we, they కి do తో అడగాలి: Do you get up early? he, she లేదా ఒక్కరికి does తో, అప్పుడు పని పదానికి s ఉండదు: Does he drink coffee? చిన్న జవాబులు: Yes, he does. No, I don't.",
      },
      bridge: {
        te: ["మీరు", "తొందరగా", "లేస్తారా?"],
        en: [
          { text: "Do", role: "action" },
          { text: "you", role: "who" },
          { text: "get up early?", role: "action" },
        ],
      },
      examples: [
        { en: "Do you get up early?", te: "మీరు తొందరగా లేస్తారా?" },
        { en: "Does he drink coffee?", te: "అతను కాఫీ తాగుతాడా?" },
        { en: "Yes, he does.", te: "అవును, తాగుతాడు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Do, does, question words", te: "do, does, ప్రశ్న పదాలు" },
      items: [
        {
          form: "Do + I, you, we, they",
          useFor: { en: "Ask about you, us or them.", te: "మీ, మా, వాళ్ళ గురించి అడగడానికి." },
          example: { en: "Where do you go every evening?", te: "మీరు ప్రతి సాయంత్రం ఎక్కడికి వెళ్తారు?" },
        },
        {
          form: "Does + he, she (no s)",
          useFor: { en: "Ask about one person. The action word has no s.", te: "ఒక్కరి గురించి అడగడానికి. పని పదానికి s ఉండదు." },
          example: { en: "When does the milkman come?", te: "పాలవాడు ఎప్పుడు వస్తాడు?" },
        },
        {
          form: "Yes, I do / No, he doesn't",
          useFor: { en: "Short answers repeat do or does.", te: "చిన్న జవాబుల్లో do, does మళ్ళీ వస్తాయి." },
          example: { en: "No, I don't.", te: "లేదు, అలా చేయను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Does he drinks coffee?",
      right: "Does he drink coffee?",
      why: {
        en: "After does, the action word has no s.",
        te: "does తర్వాత పని పదానికి s ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "What time she sleeps?",
      right: "What time does she sleep?",
      why: {
        en: "A question needs does: What time does she sleep?",
        te: "ప్రశ్నలో does ఉండాలి: What time does she sleep?",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct question.", te: "సరైన ప్రశ్నను ఎంచుకోండి." },
      options: ["Does she sleeps early?", "Does she sleep early?", "Do she sleep early?"],
      answer: 1,
      why: {
        en: "Does she + sleep (no s).",
        te: "Does she + sleep (s లేకుండా).",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "___ you get up early?",
      te: "మీరు తొందరగా లేస్తారా?",
      options: ["Do", "Does", "Are"],
      answer: 0,
      why: {
        en: "With you, ask with do.",
        te: "you తో do.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Does he drink coffee? He does. Choose the short answer.", te: "Does he drink coffee? తాగుతాడు. సరైన చిన్న జవాబు ఏది?" },
      options: ["Yes, he does.", "Yes, he is.", "Yes, he do."],
      answer: 0,
      why: {
        en: "Answer a does question with does.",
        te: "does ప్రశ్నకి does తో జవాబు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "When does the milkman comes?",
      wrongIndex: 4,
      fix: "When does the milkman come?",
      why: {
        en: "After does, come has no s.",
        te: "does తర్వాత come కి s ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A new friend asks: Do you get up early? Say yes.",
        te: "కొత్త స్నేహితులు అడుగుతున్నారు: Do you get up early? అవునని చెప్పండి.",
      },
      expected: ["Yes, I do.", "Yes, I get up early."],
      options: ["Yes, I do.", "Yes, I does.", "Yes, I am."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask your friend what time her sister sleeps.",
        te: "మీ స్నేహితురాలి చెల్లెలు ఎన్ని గంటలకు పడుకుంటుందో అడగండి.",
      },
      expected: ["What time does she sleep?", "What time does your sister sleep?"],
      options: ["What time she sleeps?", "What time does she sleep?", "What time does she sleeps?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Questions about your day", te: "మీ రోజు గురించి ప్రశ్నలు" },
    scene: {
      en: "Venkat, a new friend, asks about your day. Answer, then ask about his brother.",
      te: "కొత్త స్నేహితుడు వెంకట్ మీ రోజు గురించి అడుగుతున్నారు. జవాబు చెప్పి, ఆయన అన్నయ్య గురించి అడగండి.",
    },
    partner: { en: "Venkat (a new friend)", te: "వెంకట్ (కొత్త స్నేహితుడు)" },
    skills: [
      { id: "answer", label: { en: "Short answers", te: "చిన్న జవాబులు" } },
      { id: "ask", label: { en: "do / does questions", te: "do / does ప్రశ్నలు" } },
    ],
    turns: [
      {
        partner: "Do you get up early?",
        te: "మీరు తొందరగా లేస్తారా?",
        hint: { en: "Say: Yes, I do. At five.", te: "ఇలా చెప్పండి: Yes, I do. At five." },
        replies: [
          { say: "Yes, I do. At five.", good: true, skill: "answer" },
          { say: "Yes, I does. At five.", good: false, skill: "answer" },
        ],
      },
      {
        partner: "What do you do in the evening?",
        te: "సాయంత్రం ఏం చేస్తారు?",
        hint: { en: "Say: I go to the temple.", te: "ఇలా చెప్పండి: I go to the temple." },
        replies: [
          { say: "I go to the temple.", good: true, skill: "answer" },
          { say: "I goes to the temple.", good: false, skill: "answer" },
        ],
      },
      {
        partner: "I walk with my brother.",
        te: "నేను మా అన్నయ్యతో కలిసి నడుస్తాను.",
        hint: { en: "Ask: Does he walk every day?", te: "అడగండి: Does he walk every day?" },
        replies: [
          { say: "Does he walk every day?", good: true, skill: "ask" },
          { say: "Does he walks every day?", good: false, skill: "ask" },
        ],
      },
      {
        partner: "No, he doesn't. He works.",
        te: "లేదు, రాడు. ఆయన పని చేస్తారు.",
        hint: { en: "Ask: What time does he come home?", te: "అడగండి: What time does he come home?" },
        replies: [
          { say: "What time does he come home?", good: true, skill: "ask" },
          { say: "What time he comes home?", good: false, skill: "ask" },
        ],
      },
    ],
  },
};
