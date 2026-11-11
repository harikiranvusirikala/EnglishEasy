import type { Lesson } from "../../types";

/** Week 35, Day 1 (CURRICULUM §4): like / love / enjoy + -ing — I enjoy gardening. She loves singing old songs. */
export const day: Lesson = {
  id: "i-enjoy-gardening",
  kind: "lesson",
  title: { en: "I Enjoy Gardening", te: "నాకు తోటపని ఇష్టం" },
  subtitle: "like / love / enjoy + -ing",
  summary: {
    en: "Learn to talk about what you like doing: I enjoy gardening. She loves singing old songs.",
    te: "మీకు ఏం చేయడం ఇష్టమో చెప్పడం నేర్చుకుందాం: I enjoy gardening. She loves singing old songs.",
  },
  seo: {
    title: "Talking About Hobbies in English for Telugu Speakers",
    description:
      "Say I enjoy gardening and She loves singing old songs. Simple lessons for Telugu speakers on like, love and enjoy with -ing.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "enjoy", role: "action" },
    { text: "gardening", role: "what" },
  ],
  core: [
    { en: "I enjoy gardening.", te: "తోటపని చేయడం నాకు చాలా సరదా.", extra: ["garden"] },
    { en: "She loves singing old songs.", te: "ఆవిడకి పాత పాటలు పాడటం అంటే చాలా ఇష్టం.", extra: ["love"] },
    { en: "Do you like reading the newspaper?", te: "మీకు పేపర్ చదవడం ఇష్టమా?", extra: ["Does"] },
    { en: "I love listening to bhajans.", te: "నాకు భజనలు వినడం అంటే చాలా ఇష్టం.", extra: ["listen"] },
    { en: "We enjoy walking in the park.", te: "పార్కులో నడవడం మాకు సరదా.", extra: ["walk"] },
    { en: "What do you like doing in your free time?", te: "ఖాళీ సమయంలో మీకు ఏం చేయడం ఇష్టం?", extra: ["does"] },
    { en: "Mohan enjoys doing yoga every morning.", te: "మోహన్ గారికి రోజూ ఉదయం యోగా చేయడం సరదా.", extra: ["enjoy"] },
  ],
  key: [0, 1, 3, 5],
  tryToday: {
    en: "Tell a friend or neighbour one thing you enjoy doing, with -ing.",
    te: "మీకు సరదాగా అనిపించే ఒక పనిని -ing తో స్నేహితులకి గానీ పక్కింటివాళ్ళకి గానీ చెప్పండి.",
  },
  words: [
    { en: "hobby", te: "అభిరుచి, హాబీ" },
    { en: "enjoy", te: "సరదాగా చేయడం, ఆనందించడం" },
    { en: "gardening", te: "తోటపని" },
    { en: "bhajans", te: "భజనలు" },
    { en: "yoga", te: "యోగా" },
  ],
  grammar: ["gerunds-infinitives", "present-simple"],
  topics: ["people", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Saying what you like doing", te: "ఇష్టమైన పని చెప్పడం" },
      body: {
        en: "To talk about a hobby, say like, love or enjoy, then the verb with -ing: I enjoy gardening. Love is stronger than like. With he or she, add s: She loves singing.",
        te: "హాబీ గురించి చెప్పాలంటే like, love, enjoy తర్వాత verb కి -ing చేర్చండి: I enjoy gardening. like కంటే love ఎక్కువ ఇష్టం. he, she అయితే s: She loves singing.",
      },
      bridge: {
        te: ["నాకు", "తోటపని చేయడం", "సరదా"],
        en: [
          { text: "I", role: "who" },
          { text: "enjoy", role: "action" },
          { text: "gardening", role: "what" },
        ],
      },
      examples: [
        { en: "I enjoy gardening.", te: "తోటపని చేయడం నాకు చాలా సరదా." },
        { en: "She loves singing old songs.", te: "ఆవిడకి పాత పాటలు పాడటం అంటే చాలా ఇష్టం." },
        { en: "Mohan enjoys doing yoga every morning.", te: "మోహన్ గారికి రోజూ ఉదయం యోగా చేయడం సరదా." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Like, love or enjoy?", te: "like ఆ, love ఆ, enjoy ఆ?" },
      items: [
        {
          form: "like + -ing",
          useFor: { en: "You are happy doing it.", te: "ఆ పని చేయడం ఇష్టం." },
          example: { en: "Do you like reading the newspaper?", te: "మీకు పేపర్ చదవడం ఇష్టమా?" },
        },
        {
          form: "love + -ing",
          useFor: { en: "You like it very much.", te: "చాలా చాలా ఇష్టం." },
          example: { en: "I love listening to bhajans.", te: "నాకు భజనలు వినడం అంటే చాలా ఇష్టం." },
        },
        {
          form: "enjoy + -ing",
          useFor: { en: "It makes you happy. Enjoy always takes -ing.", te: "చేస్తుంటే సంతోషంగా ఉంటుంది. enjoy తర్వాత ఎప్పుడూ -ing." },
          example: { en: "We enjoy walking in the park.", te: "పార్కులో నడవడం మాకు సరదా." },
        },
        {
          form: "What do you like doing?",
          useFor: { en: "Asking about someone's hobbies.", te: "ఎవరి హాబీలైనా అడగడానికి." },
          example: { en: "What do you like doing in your free time?", te: "ఖాళీ సమయంలో మీకు ఏం చేయడం ఇష్టం?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am liking gardening.",
      right: "I like gardening.",
      why: {
        en: "Like is a feeling, so it takes no am … -ing; only the hobby gets -ing.",
        te: "like ఒక భావన, దానికి am … -ing రాదు; -ing హాబీకి మాత్రమే వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I enjoy to work in the garden.",
      right: "I enjoy working in the garden.",
      why: {
        en: "After enjoy, the next verb always takes -ing, never to.",
        te: "enjoy తర్వాత వచ్చే verb కి ఎప్పుడూ -ing; to రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I am enjoy gardening.", "I enjoy to garden.", "I enjoy gardening."],
      answer: 2,
      why: {
        en: "Enjoy takes the next verb with -ing, and needs no am before it.",
        te: "enjoy తర్వాత verb కి -ing; దాని ముందు am అక్కర్లేదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "She ___ singing old songs.",
      te: "ఆవిడకి పాత పాటలు పాడటం అంటే చాలా ఇష్టం.",
      options: ["love", "loves", "loving"],
      answer: 1,
      why: {
        en: "For one person, he or she, the verb takes s.",
        te: "ఒక్కరి గురించి (he, she) చెప్పేటప్పుడు verb కి s వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "indian-english",
      prompt: {
        en: "Someone asks why you watch cricket on TV. Choose the natural answer.",
        te: "మీరు TV లో క్రికెట్ ఎందుకు చూస్తారని ఎవరో అడిగారు. సహజమైన జవాబు ఎంచుకోండి.",
      },
      options: ["Just for fun. I enjoy it.", "Just for timepass. I enjoy it.", "Just for fun. I am enjoying it always."],
      answer: 0,
      why: {
        en: "Timepass is heard only in India; everyone understands for fun.",
        te: "timepass అని మన దగ్గరే అంటారు; for fun అందరికీ అర్థమవుతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I love listen to bhajans in the evening.",
      wrongIndex: 2,
      fix: "I love listening to bhajans in the evening.",
      why: {
        en: "After love, the next verb takes -ing, not the plain form.",
        te: "love తర్వాత వచ్చే verb కి -ing కావాలి; మామూలు రూపం రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell a friend that working in the garden makes you happy.",
        te: "తోటపని చేయడం మీకు సరదా అని స్నేహితులకి చెప్పండి.",
      },
      expected: ["I enjoy gardening.", "I love gardening.", "I like gardening."],
      options: ["I enjoy gardening.", "I enjoy garden.", "I am enjoying to garden."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask a new friend about their hobbies.",
        te: "కొత్త స్నేహితులని వాళ్ళ హాబీల గురించి అడగండి.",
      },
      expected: ["What do you like doing in your free time?", "What do you like to do in your free time?", "What are your hobbies?"],
      options: ["What do you like doing in your free time?", "What you like doing in your free time?", "What do you liking in your free time?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A chat at the park", te: "పార్కులో కబుర్లు" },
    scene: {
      en: "You are resting on a bench in the park. Usha, another walker, starts a chat.",
      te: "మీరు పార్కులో బెంచి మీద కూర్చుని ఉన్నారు. రోజూ నడిచే ఉష గారు మాట కలుపుతున్నారు.",
    },
    partner: { en: "Usha (a walker at the park)", te: "ఉష (పార్కులో నడిచే ఆవిడ)" },
    skills: [{ id: "hobby", label: { en: "Talking about hobbies", te: "హాబీల గురించి" } }],
    turns: [
      {
        partner: "Hello! I see you here every evening.",
        te: "నమస్కారం! మిమ్మల్ని రోజూ సాయంత్రం ఇక్కడ చూస్తుంటాను.",
        hint: { en: "Say yes, and that walking here makes you happy.", te: "అవునని, ఇక్కడ నడవడం మీకు సరదా అని చెప్పండి." },
        replies: [
          { say: "Yes, I enjoy walking here.", good: true, skill: "hobby" },
          { say: "Yes, I enjoy to walk here.", good: false, skill: "hobby" },
        ],
      },
      {
        partner: "Me too. What else do you like doing?",
        te: "నాకూ అంతే. మీకు ఇంకా ఏం చేయడం ఇష్టం?",
        hint: { en: "Say you like working in your garden very much.", te: "మీ తోటలో పని చేయడం అంటే మీకు చాలా ఇష్టమని చెప్పండి." },
        replies: [
          { say: "I love gardening. I grow tomatoes and chillies.", good: true, skill: "hobby" },
          { say: "I am loving gardening. I grow tomatoes.", good: false, skill: "hobby", fixIt: "state-ing" },
          {
            say: "Why do you want to know?",
            good: false,
            skill: "hobby",
            react: { en: "Oh, sorry! I was only asking.", te: "అయ్యో, సారీ అండీ! ఊరికే అడిగాను." },
          },
        ],
      },
      {
        partner: "Lovely! I love singing bhajans at the temple.",
        te: "చాలా బాగుంది! నాకు గుడిలో భజనలు పాడటం అంటే చాలా ఇష్టం.",
        hint: { en: "Say you like hearing bhajans too.", te: "మీకు కూడా భజనలు వినడం ఇష్టమని చెప్పండి." },
        replies: [
          { say: "I like listening to bhajans too.", good: true, skill: "hobby" },
          { say: "I like listen to bhajans too.", good: false, skill: "hobby" },
        ],
      },
      {
        partner: "Then come on Friday evening. Bye!",
        te: "అయితే శుక్రవారం సాయంత్రం రండి. బై!",
        hint: { en: "Thank her, say you will come, and say goodbye.", te: "థాంక్స్ చెప్పి, వస్తానని చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Thank you, I'll come. Bye!", good: true },
          { say: "Thank you, I'll coming. Bye!", good: false },
        ],
      },
    ],
  },
};
