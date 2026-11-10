import type { Lesson } from "../../types";

/** Week 1, Day 2 (CURRICULUM §3): Who + am / is / are + what / how; chunks Hello, I'm Kiran. Nice to meet you. Sorry? Again, please. */
export const day: Lesson = {
  id: "i-am-you-are",
  kind: "lesson",
  title: { en: "I Am, You Are", te: "నేను, మీరు" },
  subtitle: "am / is / are",
  summary: {
    en: "Learn to say who you are and how you feel with am, is and are.",
    te: "am, is, are తో మీరు ఎవరో, ఎలా ఉన్నారో ఇంగ్లీష్‌లో చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "I Am, You Are: am, is, are in English for Telugu Speakers",
    description:
      "Learn am, is and are in English from a Telugu speaker's point of view. Say who you are and how you feel, with simple examples and Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "am", role: "action" },
    { text: "hungry", role: "what" },
  ],
  core: [
    { en: "I am Kiran.", te: "నేను కిరణ్.", extra: ["is"] },
    { en: "I am hungry.", te: "నాకు ఆకలిగా ఉంది.", extra: ["is"] },
    { en: "He is my friend.", te: "ఆయన నా స్నేహితుడు.", extra: ["am"] },
    { en: "She is a teacher.", te: "ఆవిడ టీచర్.", extra: ["are"] },
    { en: "We are happy.", te: "మేము సంతోషంగా ఉన్నాం.", extra: ["is"] },
    { en: "Are you tired?", te: "మీకు అలసటగా ఉందా?", extra: ["is"] },
    { en: "Yes, I am.", te: "అవును, ఉంది.", extra: ["is"] },
  ],
  key: [0, 1, 3, 5],
  tryToday: {
    en: "Introduce yourself to someone. Say: Hello, I'm (your name). Nice to meet you.",
    te: "ఎవరికైనా మిమ్మల్ని పరిచయం చేసుకోండి. ఇలా చెప్పండి: Hello, I'm (మీ పేరు). Nice to meet you.",
  },
  words: [
    { en: "hungry", te: "ఆకలిగా" },
    { en: "tired", te: "అలసటగా" },
    { en: "happy", te: "సంతోషంగా" },
    { en: "friend", te: "స్నేహితుడు" },
    { en: "teacher", te: "టీచర్" },
  ],
  grammar: ["am-is-are", "yes-no-questions"],
  topics: ["people", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "I am hungry", te: "నాకు ఆకలిగా ఉంది" },
      body: {
        en: "In Telugu we say ఆకలిగా ఉన్నాను, and ఉన్నాను is the word for am. In English you must say am, is or are. Without it, the sentence is not complete.",
        te: "తెలుగులో 'ఆకలిగా ఉన్నాను' అంటాం. ఇంగ్లీష్‌లో am, is, are అనే పదం తప్పనిసరిగా ఉండాలి: I am hungry. ఈ పదం లేకపోతే వాక్యం పూర్తికాదు.",
      },
      bridge: {
        te: ["నేను", "ఆకలిగా", "ఉన్నాను"],
        en: [
          { text: "I", role: "who" },
          { text: "am", role: "action" },
          { text: "hungry", role: "what" },
        ],
      },
      examples: [
        { en: "I am Kiran.", te: "నేను కిరణ్." },
        { en: "I am hungry.", te: "నాకు ఆకలిగా ఉంది." },
        { en: "We are happy.", te: "మేము సంతోషంగా ఉన్నాం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which one: am, is or are?", te: "am, is, are — ఏది వాడాలి?" },
      items: [
        {
          form: "I → am",
          useFor: { en: "Use am only with I.", te: "am ని I తో మాత్రమే వాడాలి." },
          example: { en: "I am tired.", te: "నాకు అలసటగా ఉంది." },
        },
        {
          form: "he, she, it → is",
          useFor: {
            en: "Use is for one person or thing: he, she, it. You always takes are, even for one person.",
            te: "ఒక్క మనిషికి, ఒక్క వస్తువుకి is: he, she, it. you కి ఎప్పుడూ are, ఒక్కరే అయినా సరే.",
          },
          example: { en: "She is a teacher.", te: "ఆవిడ టీచర్." },
        },
        {
          form: "we, you, they → are",
          useFor: { en: "Use are with we, you and they.", te: "we, you, they తో are వాడాలి." },
          example: { en: "We are happy.", te: "మేము సంతోషంగా ఉన్నాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "I hungry.",
      right: "I am hungry.",
      why: {
        en: "Telugu can drop ఉన్నాను, but English always needs am: I am hungry.",
        te: "తెలుగులో ఉన్నాను లేకున్నా అర్థమవుతుంది, కానీ ఇంగ్లీష్‌లో am తప్పనిసరి: I am hungry.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "He are my friend.",
      right: "He is my friend.",
      why: {
        en: "For one person (he or she), use is. Are is for we, you and they.",
        te: "ఒక్క వ్యక్తికి (he, she) is వాడాలి. are ని we, you, they తో వాడాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I hungry.", "I am hungry.", "I is hungry."],
      answer: 1,
      why: {
        en: "With I, use am: I am hungry.",
        te: "I తో am వాడాలి: I am hungry.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "She ___ a teacher.",
      te: "ఆవిడ టీచర్.",
      options: ["am", "is", "are"],
      answer: 1,
      why: {
        en: "She is one person, so use is: She is a teacher.",
        te: "she అంటే ఒక్కరు, కాబట్టి is: She is a teacher.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "be",
      prompt: { en: "Which sentence means: మేము సంతోషంగా ఉన్నాం?", te: "మేము సంతోషంగా ఉన్నాం — ఇంగ్లీష్‌లో ఏది సరైనది?" },
      options: ["We happy.", "We is happy.", "We are happy."],
      answer: 2,
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "He am my friend.",
      wrongIndex: 1,
      fix: "He is my friend.",
      why: {
        en: "Am goes only with I. He is one person, so use is: He is my friend.",
        te: "am ఒక్క I తోనే. he అంటే ఒక్కరు, కాబట్టి is: He is my friend.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "A new neighbour says: Hello! I am Usha. What is your name? Say your name in English.",
        te: "కొత్తగా వచ్చిన పక్కింటావిడ అంటున్నారు: Hello! I am Usha. What is your name? మీ పేరు ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["I am Kiran.", "I am Sai.", "My name is Kiran."],
      options: ["Myself Kiran.", "I am Kiran.", "I Kiran."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "A friend asks: Are you tired? Say yes, in English.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: Are you tired? అవును అని ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["Yes, I am.", "Yes, I am tired."],
      options: ["Yes, I do.", "Yes, I am.", "Yes, I tired."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Meeting a new neighbour", te: "కొత్త పొరుగు వాళ్లతో పరిచయం" },
    scene: {
      en: "Usha, a new neighbour, says hello in the evening. Your friend Imran is with you. Answer with short sentences.",
      te: "సాయంత్రం కొత్తగా వచ్చిన పక్కింటి ఉష గారు పలకరిస్తున్నారు. మీతో మీ స్నేహితుడు ఇమ్రాన్ ఉన్నారు. చిన్న వాక్యాలతో జవాబు చెప్పండి.",
    },
    partner: { en: "Usha (a neighbour)", te: "ఉష (పొరుగింటావిడ)" },
    skills: [
      { id: "be", label: { en: "am / is / are", te: "am / is / are వాడకం" } },
      { id: "polite", label: { en: "Polite phrases", te: "మర్యాద మాటలు" } },
    ],
    turns: [
      {
        partner: "Hello! I'm Usha, your new neighbour.",
        te: "నమస్తే! నేను ఉష, మీ కొత్త పక్కింటావిడని.",
        hint: { en: "You did not catch her name. Ask her politely to say it again.", te: "ఆవిడ పేరు సరిగ్గా వినిపించలేదు. మళ్ళీ చెప్పమని మర్యాదగా అడగండి." },
        replies: [
          { say: "Sorry? Again, please.", good: true, skill: "polite" },
          {
            say: "What? Say it again.",
            good: false,
            skill: "polite",
            react: { en: "Oh! Usha. My name is Usha.", te: "ఓ! ఉష. నా పేరు ఉష." },
          },
        ],
      },
      {
        partner: "Usha. I'm Usha. And you?",
        te: "ఉష. నేను ఉషని. మరి మీరు?",
        hint: { en: "Greet her, give your name, and say you are glad to meet her.", te: "పలకరించి, మీ పేరు చెప్పి, కలిసినందుకు సంతోషం అని చెప్పండి." },
        replies: [
          { say: "Hello, I'm Kiran. Nice to meet you.", good: true, skill: "be" },
          { say: "Hello, I Kiran. Nice to meet you.", good: false, skill: "be", fixIt: "be" },
          { say: "Myself Kiran.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
      {
        partner: "You too! Long day? Are you tired?",
        te: "మిమ్మల్ని కలవడం నాకూ సంతోషం! రోజంతా పనా? మీకు అలసటగా ఉందా?",
        hint: { en: "Say yes, the short way.", te: "అవును అని చిన్నగా చెప్పండి." },
        replies: [
          { say: "Yes, I am.", good: true, skill: "be" },
          { say: "Yes, I are.", good: false, skill: "be" },
          { say: "Yes, I tired.", good: false, skill: "be", fixIt: "be" },
        ],
      },
      {
        partner: "Is he your friend?",
        te: "ఆయన మీ స్నేహితుడా?",
        hint: { en: "Say yes, the short way, about him.", te: "ఆయన గురించి అవును అని చిన్నగా చెప్పండి." },
        replies: [
          { say: "Yes, he is.", good: true, skill: "be" },
          { say: "Yes, he are.", good: false, skill: "be" },
        ],
      },
    ],
  },
};
