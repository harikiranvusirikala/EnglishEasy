import type { Lesson } from "../../types";

/** Week 24, Day 4 (CURRICULUM §4): past continuous questions — What were you doing at eight? Were you sleeping? */
export const day: Lesson = {
  id: "what-were-you-doing",
  kind: "lesson",
  title: { en: "What Were You Doing?", te: "అప్పుడు ఏం చేస్తున్నారు?" },
  subtitle: "What were you doing?",
  summary: {
    en: "Learn to ask and answer about a time in the past: What were you doing at eight? Were you sleeping?",
    te: "గతంలో ఒక సమయం గురించి అడగడం, జవాబివ్వడం నేర్చుకుందాం: What were you doing at eight? Were you sleeping?",
  },
  seo: {
    title: "What Were You Doing? Past Questions in English for Telugu Speakers",
    description:
      "Ask What were you doing at eight? and Were you sleeping? and answer Yes, I was. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "What", role: "what" },
    { text: "were", role: "action" },
    { text: "you", role: "who" },
    { text: "doing at eight?", role: "when" },
  ],
  core: [
    { en: "What were you doing at eight?", te: "ఎనిమిదింటికి మీరు ఏం చేస్తూ ఉన్నారు?", extra: ["did"] },
    { en: "Were you sleeping at that time?", te: "ఆ సమయంలో మీరు నిద్రపోతూ ఉన్నారా?", extra: ["Was"] },
    { en: "No, I wasn't. I was reading.", te: "లేదు. నేను చదువుకుంటూ ఉన్నాను.", extra: ["didn't"] },
    { en: "Did you hear a loud noise?", te: "మీకు పెద్ద శబ్దం ఏదైనా వినిపించిందా?", extra: ["heard"] },
    { en: "What was that noise last night?", te: "నిన్న రాత్రి ఆ శబ్దం ఏంటి?", extra: ["is"] },
    { en: "Who was shouting at midnight?", te: "అర్ధరాత్రి ఎవరు అరుస్తూ ఉన్నారు?", extra: ["were"] },
    { en: "We heard a crash from upstairs.", te: "పై ఇంట్లో నుంచి ధడేల్‌మని చప్పుడు వినిపించింది.", extra: ["listened"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask a friend or neighbour: What were you doing at eight last night?",
    te: "ఒక స్నేహితులనో, పక్కింటివారినో అడగండి: What were you doing at eight last night?",
  },
  words: [
    { en: "noise", te: "శబ్దం, చప్పుడు" },
    { en: "loud", te: "గట్టిగా, పెద్ద (శబ్దం)" },
    { en: "midnight", te: "అర్ధరాత్రి" },
    { en: "crash", te: "ధడేల్‌మని పడిన చప్పుడు" },
    { en: "upstairs", te: "పైన, పై అంతస్తులో" },
  ],
  grammar: ["past-continuous", "question-words", "yes-no-questions"],
  topics: ["neighbours", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking about a time in the past", te: "గతంలో ఒక సమయం గురించి అడగడం" },
      body: {
        en: "To ask, put was or were before the person: What were you doing? Were you sleeping? The short answers are Yes, I was, and No, I wasn't.",
        te: "అడిగేటప్పుడు was / were ని మనిషి కంటే ముందు పెట్టండి: What were you doing? Were you sleeping? చిన్న జవాబులు: Yes, I was. No, I wasn't.",
      },
      bridge: {
        te: ["ఎనిమిదింటికి", "మీరు", "ఏం చేస్తూ ఉన్నారు?"],
        en: [
          { text: "What", role: "what" },
          { text: "were", role: "action" },
          { text: "you", role: "who" },
          { text: "doing at eight?", role: "when" },
        ],
      },
      examples: [
        { en: "What were you doing at eight?", te: "ఎనిమిదింటికి మీరు ఏం చేస్తూ ఉన్నారు?" },
        { en: "Were you sleeping at that time?", te: "ఆ సమయంలో మీరు నిద్రపోతూ ఉన్నారా?" },
        { en: "Who was shouting at midnight?", te: "అర్ధరాత్రి ఎవరు అరుస్తూ ఉన్నారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Questions and short answers", te: "ప్రశ్నలు, చిన్న జవాబులు" },
      items: [
        {
          form: "What were you doing?",
          useFor: { en: "Ask what someone was busy with.", te: "అప్పుడు ఏ పనిలో ఉన్నారో అడగడానికి." },
          example: { en: "What were they doing at noon?", te: "మధ్యాహ్నం వాళ్ళు ఏం చేస్తూ ఉన్నారు?" },
        },
        {
          form: "Were you …ing?",
          useFor: { en: "A yes or no question.", te: "అవును, లేదు అని జవాబిచ్చే ప్రశ్న." },
          example: { en: "Were you sleeping at that time?", te: "ఆ సమయంలో మీరు నిద్రపోతూ ఉన్నారా?" },
        },
        {
          form: "Yes, I was. No, I wasn't.",
          useFor: { en: "Short answers: no -ing needed.", te: "చిన్న జవాబులు: -ing అక్కర్లేదు." },
          example: { en: "No, I wasn't. I was reading.", te: "లేదు. నేను చదువుకుంటూ ఉన్నాను." },
        },
        {
          form: "Did you hear …?",
          useFor: { en: "A short, finished thing: ask with did.", te: "చిన్న, అయిపోయిన విషయం: did తో అడగండి." },
          example: { en: "Did you hear a loud noise?", te: "మీకు పెద్ద శబ్దం ఏదైనా వినిపించిందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "What you were doing at eight?",
      right: "What were you doing at eight?",
      why: {
        en: "Telugu puts మీరు first, but an English question puts were before you.",
        te: "తెలుగులో 'మీరు' ముందు వస్తుంది; ఇంగ్లీష్ ప్రశ్నలో you కంటే ముందు were వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Did you sleeping at that time?",
      right: "Were you sleeping at that time?",
      why: {
        en: "An -ing verb goes with was or were, never with did.",
        te: "-ing verb తో was / were వస్తాయి; did తో -ing ఎప్పుడూ రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask your neighbour what she was doing at eight.", te: "ఎనిమిదింటికి ఏం చేస్తూ ఉన్నారో పక్కింటావిడని అడగండి." },
      options: ["What were you doing at eight?", "What you were doing at eight?", "What did you doing at eight?"],
      answer: 0,
      why: {
        en: "In a question, were comes before you; Telugu order puts మీరు first.",
        te: "ప్రశ్నలో you కంటే ముందు were; తెలుగులో 'మీరు' ముందు రావడం వల్ల తప్పు వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Every night, he ___ home at one.",
      te: "రోజూ రాత్రి ఒంటిగంటకి ఆయన ఇంటికి వస్తారు.",
      options: ["comes", "come", "coming"],
      answer: 0,
      why: {
        en: "For something he does every day, the verb takes s.",
        te: "ఆయన రోజూ చేసే పనికి verb కి s చేర్చాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your neighbour asks: Were you sleeping at ten? You were. What do you say?",
        te: "పదింటికి నిద్రపోతూ ఉన్నారా అని పక్కింటివారు అడిగారు. అవును. ఏమంటారు?",
      },
      options: ["Yes, I was.", "Yes, I did.", "Yes, I were."],
      answer: 0,
      why: {
        en: "A were question gets a was answer with I, not did.",
        te: "were తో అడిగితే I తో జవాబు was; did కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Who were shouting at midnight?",
      wrongIndex: 1,
      fix: "Who was shouting at midnight?",
      why: {
        en: "Who asks about someone you don't know, and takes was, like he or she.",
        te: "ఎవరో తెలియనప్పుడు who; దానితో was వస్తుంది (he, she లాగా).",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You heard a loud noise last night. Ask your neighbour about it.",
        te: "నిన్న రాత్రి మీకు పెద్ద శబ్దం వినిపించింది. పక్కింటివారిని దాని గురించి అడగండి.",
      },
      expected: ["Did you hear a loud noise?", "Did you hear that noise?", "Did you hear a loud noise last night?"],
      options: ["Did you hear a loud noise?", "Did you heard a loud noise?", "You heard a loud noise?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask your friend if he was sleeping when you called.",
        te: "మీరు ఫోన్ చేసినప్పుడు నిద్రపోతూ ఉన్నారా అని మీ స్నేహితులని అడగండి.",
      },
      expected: ["Were you sleeping when I called?", "Were you sleeping?"],
      options: ["Were you sleeping when I called?", "You were sleeping when I called?", "Did you sleeping when I called?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A noise last night", te: "నిన్న రాత్రి శబ్దం" },
    scene: {
      en: "In the morning, your neighbour Narayana asks you about a loud noise last night.",
      te: "ఉదయం పక్కింటి నారాయణ గారు నిన్న రాత్రి వచ్చిన పెద్ద శబ్దం గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Narayana (neighbour)", te: "నారాయణ (పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "past", label: { en: "Past questions and answers", te: "గతం గురించి ప్రశ్నలు, జవాబులు" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. Was everything okay last night?",
        te: "నమస్కారం. నిన్న రాత్రి అంతా బాగానే ఉందా?",
        hint: { en: "Say yes, and ask him why he is asking.", te: "అవునని చెప్పి, ఎందుకు అడుగుతున్నారో అడగండి." },
        replies: [
          { say: "Yes, everything was fine. Why do you ask?", good: true, skill: "past" },
          { say: "Yes, everything was fine. Why you are asking?", good: false, skill: "past", fixIt: "question" },
        ],
      },
      {
        partner: "We heard a loud crash at midnight.",
        te: "అర్ధరాత్రి మాకు పెద్ద చప్పుడు వినిపించింది.",
        hint: { en: "Say sorry, and say what your brother was doing at that time: coming home.", te: "Sorry చెప్పి, ఆ సమయంలో మీ brother ఏం చేస్తూ ఉన్నారో చెప్పండి: ఇంటికి వస్తూ ఉన్నారు." },
        replies: [
          { say: "Sorry. My brother was coming home then.", good: true, skill: "past" },
          { say: "Sorry. My brother coming home then.", good: false, skill: "past", fixIt: "be" },
        ],
      },
      {
        partner: "At midnight? What was he doing so late?",
        te: "అర్ధరాత్రా? అంత లేటుగా ఆయన ఏం చేస్తున్నారు?",
        hint: { en: "Explain that he works at night every day: he is a nurse.", te: "ఆయన రోజూ రాత్రి పనిచేస్తారని చెప్పండి: ఆయన నర్సు." },
        replies: [
          { say: "He works at night. He is a nurse.", good: true, skill: "past" },
          { say: "He work at night. He is a nurse.", good: false, skill: "past", fixIt: "he-she-s" },
          {
            say: "That is our business, not yours.",
            good: false,
            skill: "polite",
            react: { en: "Sorry, sorry. I was only asking.", te: "సారీ, సారీ. ఊరికే అడిగాను, అంతే." },
          },
        ],
      },
      {
        partner: "Oh, a nurse! That's fine then. No problem.",
        te: "ఓ, నర్సా! అయితే పర్లేదు. ఏం సమస్య లేదు.",
        hint: { en: "Say sorry again for the noise, and wish him a good day.", te: "శబ్దానికి మళ్ళీ sorry చెప్పి, మంచి రోజు కావాలని చెప్పండి." },
        replies: [
          { say: "Sorry again for the noise. Have a good day.", good: true, skill: "polite" },
          { say: "Sorry again for noise. Have a good day.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
