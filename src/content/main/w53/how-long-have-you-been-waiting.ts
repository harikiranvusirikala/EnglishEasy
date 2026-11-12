import type { Lesson } from "../../types";

/** Week 53, Day 2 (CURRICULUM §5): How long have you been …? How long has … been …? — chatting in the bank queue. */
export const day: Lesson = {
  id: "how-long-have-you-been-waiting",
  kind: "lesson",
  title: { en: "How Long Have You Been Waiting?", te: "ఎంతసేపట్నుంచి ఉన్నారు?" },
  subtitle: "How long have you been …?",
  summary: {
    en: "Learn to ask how long something has been going on: How long have you been waiting? How long has the counter been closed?",
    te: "ఏదైనా ఎంతసేపట్నుంచి జరుగుతోందో అడగడం నేర్చుకుందాం: How long have you been waiting? How long has the counter been closed?",
  },
  seo: {
    title: "How Long Have You Been Waiting in English for Telugu Speakers",
    description:
      "Ask How long have you been waiting? and How long has the counter been closed? Simple lessons for Telugu speakers in a bank queue.",
  },
  pattern: [
    { text: "How long", role: "when" },
    { text: "have you", role: "who" },
    { text: "been waiting", role: "action" },
    { text: "here?", role: "what" },
  ],
  core: [
    { en: "How long have you been waiting?", te: "మీరు ఎంతసేపట్నుంచి ఎదురుచూస్తున్నారు?", extra: ["are"] },
    { en: "How long has the counter been closed?", te: "కౌంటర్ ఎంతసేపట్నుంచి మూసి ఉంది?", extra: ["have"] },
    { en: "How long has she been standing here?", te: "ఆవిడ ఎంతసేపట్నుంచి ఇక్కడ నిలబడి ఉన్నారు?", extra: ["is"] },
    { en: "The server has been down since eleven.", te: "పదకొండు నుంచి server పనిచేయట్లేదు.", extra: ["from"] },
    { en: "I've been standing behind him for an hour.", te: "నేను గంట నుంచి ఆయన వెనకాల నిలబడి ఉన్నాను.", extra: ["since"] },
    { en: "How long has the cashier been on lunch break?", te: "క్యాషియర్ గారు ఎంతసేపట్నుంచి లంచ్ బ్రేక్‌లో ఉన్నారు?", extra: ["have"] },
    { en: "Only two people are ahead of me now.", te: "ఇప్పుడు నా ముందు ఇద్దరే ఉన్నారు.", extra: ["peoples"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask someone today, kindly: How long have you been …? (waiting, working here, living here).",
    te: "ఈ రోజు ఎవరినైనా మర్యాదగా అడగండి: How long have you been …? (waiting, working here, living here).",
  },
  words: [
    { en: "ahead of", te: "… కంటే ముందు" },
    { en: "behind", te: "వెనకాల" },
    { en: "lunch break", te: "లంచ్ బ్రేక్, భోజన విరామం" },
    { en: "server down", te: "server పనిచేయకపోవడం" },
    { en: "for ages", te: "చాలా చాలాసేపట్నుంచి" },
  ],
  grammar: ["present-perfect-continuous", "question-words", "present-perfect"],
  topics: ["bank", "time", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "How long have you been …?", te: "ఎంతసేపట్నుంచి …?" },
      body: {
        en: "To ask how long, put have or has before the person: How long have you been waiting? For he, she or one thing, use has.",
        te: "ఎంతసేపట్నుంచి అని అడగాలంటే have లేదా has ని మనిషి కంటే ముందు పెట్టండి: How long have you been waiting? he, she, ఒక వస్తువు అయితే has.",
      },
      bridge: {
        te: ["మీరు", "ఎంతసేపట్నుంచి", "ఎదురుచూస్తున్నారు?"],
        en: [
          { text: "How long", role: "when" },
          { text: "have you", role: "who" },
          { text: "been waiting?", role: "action" },
        ],
      },
      examples: [
        { en: "How long have you been waiting?", te: "మీరు ఎంతసేపట్నుంచి ఎదురుచూస్తున్నారు?" },
        { en: "How long has the counter been closed?", te: "కౌంటర్ ఎంతసేపట్నుంచి మూసి ఉంది?" },
        { en: "How long has she been standing here?", te: "ఆవిడ ఎంతసేపట్నుంచి ఇక్కడ నిలబడి ఉన్నారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "have or has?", te: "have వాడాలా, has వాడాలా?" },
      items: [
        {
          form: "How long have you / they been …?",
          useFor: { en: "Ask about you, we or they.", te: "మీరు, మనం, వాళ్ళ గురించి అడగడానికి." },
          example: { en: "How long have they been sitting here?", te: "వాళ్ళు ఎంతసేపట్నుంచి ఇక్కడ కూర్చుని ఉన్నారు?" },
        },
        {
          form: "How long has he / she been …?",
          useFor: { en: "Ask about one person.", te: "ఒక్క మనిషి గురించి అడగడానికి." },
          example: { en: "How long has the cashier been on lunch break?", te: "క్యాషియర్ గారు ఎంతసేపట్నుంచి లంచ్ బ్రేక్‌లో ఉన్నారు?" },
        },
        {
          form: "It has been down since …",
          useFor: { en: "Answer with since and the time it started.", te: "since తో, మొదలైన టైమ్ చెప్పి జవాబు ఇవ్వడానికి." },
          example: { en: "The server has been down since eleven.", te: "పదకొండు నుంచి server పనిచేయట్లేదు." },
        },
        {
          form: "for ages",
          useFor: { en: "A wait that feels very long.", te: "చాలా చాలాసేపు అనిపించే ఎదురుచూపు." },
          example: { en: "We've been standing here for ages.", te: "మేము ఎప్పట్నుంచో ఇక్కడ నిలబడే ఉన్నాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "How long you are waiting here?",
      right: "How long have you been waiting here?",
      why: {
        en: "In a How long question, have comes before you, and the verb becomes been + -ing.",
        te: "How long ప్రశ్నలో have, you కంటే ముందు వస్తుంది; verb ఏమో been + -ing అవుతుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "How long have she been waiting?",
      right: "How long has she been waiting?",
      why: {
        en: "With he, she or one thing, use has, not have, just as he goes takes s.",
        te: "he, she, ఒక వస్తువు అయితే have కాదు, has; he goes లో s వచ్చినట్టే.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Ask the man in front of you in the bank queue how long he has been there.",
        te: "బ్యాంకు క్యూలో మీ ముందున్న ఆయన్ని ఎంతసేపట్నుంచి ఉన్నారని అడగండి.",
      },
      options: ["How long have you been waiting?", "How long you have been waiting?", "How much time you are waiting?"],
      answer: 0,
      why: {
        en: "A question puts have before you; Telugu keeps మీరు first, so don't copy that order.",
        te: "ప్రశ్నలో have, you కంటే ముందు వస్తుంది; తెలుగులో 'మీరు' ముందు ఉంటుంది, ఆ వరుస ఇక్కడ వద్దు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "How long ___ the server been down?",
      te: "server ఎంతసేపట్నుంచి పనిచేయట్లేదు?",
      options: ["has", "have", "is"],
      answer: 0,
      why: {
        en: "The server is one thing, like he or she, so it takes has, not have.",
        te: "server ఒకటే వస్తువు, he, she లాగా; అందుకే have కాదు, has.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "A lady in the queue says: I've been standing here for ages. What does she mean?",
        te: "క్యూలో ఒకావిడ I've been standing here for ages. అన్నారు. ఆవిడ ఉద్దేశం ఏంటి?",
      },
      options: ["She has waited a very long time.", "She is very old.", "She came just now."],
      answer: 0,
      why: {
        en: "For ages means for a very long time; people say it when a wait feels too long.",
        te: "for ages అంటే చాలా చాలాసేపు అని; ఎదురుచూపు మరీ ఎక్కువైనప్పుడు అలా అంటారు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "duration",
      sentence: "The counter is closed since one o'clock.",
      wrongIndex: 2,
      fix: "The counter has been closed since one o'clock.",
      why: {
        en: "With since, English needs has been, because it started earlier and is still true; Telugu uses the present here.",
        te: "since ఉంటే has been కావాలి, ఎందుకంటే అది ముందే మొదలై ఇంకా అలాగే ఉంది; తెలుగులో ఇక్కడ మామూలు present వాడతాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "There is no clerk at the counter. Ask the person next to you how long it has been closed.",
        te: "కౌంటర్ దగ్గర క్లర్క్ లేరు. అది ఎంతసేపట్నుంచి మూసి ఉందో పక్కనున్నవారిని అడగండి.",
      },
      expected: ["How long has the counter been closed?", "How long has it been closed?"],
      options: ["How long has the counter been closed?", "How long the counter is closed?", "How long have the counter been closed?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Someone asks how long you have been in the queue. Say forty minutes.",
        te: "ఎంతసేపట్నుంచి క్యూలో ఉన్నారని ఎవరో అడుగుతున్నారు. నలభై నిమిషాలు అని చెప్పండి.",
      },
      expected: ["I've been waiting for forty minutes.", "For forty minutes.", "About forty minutes."],
      options: ["I've been waiting for forty minutes.", "I am waiting since forty minutes.", "I've been waiting for forty minute."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A chat in the bank queue", te: "బ్యాంకు క్యూలో కబుర్లు" },
    scene: {
      en: "You join a long queue at the bank to print your passbook. Narayana, an elderly man, is in front of you.",
      te: "పాస్‌బుక్ ప్రింట్ చేయించుకోవడానికి బ్యాంకులో పెద్ద క్యూలో నిలబడ్డారు. మీ ముందు నారాయణ గారు అనే పెద్దాయన ఉన్నారు.",
    },
    partner: { en: "Narayana (in the queue)", te: "నారాయణ (క్యూలో ఉన్నవారు)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "Asking how long", te: "ఎంతసేపని అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Namaste. Are you also here for passbook printing?",
        te: "నమస్తే. మీరు కూడా పాస్‌బుక్ ప్రింటింగ్ కోసమే వచ్చారా?",
        hint: { en: "Say yes, and ask how long he has been in the line.", te: "అవునని చెప్పి, ఆయన ఎంతసేపట్నుంచి లైన్లో ఉన్నారో అడగండి." },
        replies: [
          { say: "Yes. How long have you been waiting here?", good: true, skill: "ask" },
          { say: "Yes. How long you have been waiting here?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "For almost an hour. The server has been down since eleven.",
        te: "దాదాపు గంట నుంచి. పదకొండు నుంచి server పనిచేయట్లేదు.",
        hint: { en: "Sound surprised, and ask how long the cashier has been away for lunch.", te: "ఆశ్చర్యపోయి, క్యాషియర్ గారు ఎంతసేపట్నుంచి లంచ్‌కి వెళ్ళారో అడగండి." },
        replies: [
          { say: "An hour! How long has the cashier been on lunch break?", good: true, skill: "ask" },
          { say: "An hour! How long have the cashier been on lunch break?", good: false, skill: "ask", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "Since one o'clock. My legs are aching from all this standing.",
        te: "ఒంటిగంట నుంచి. ఇంతసేపు నిలబడి నిలబడి కాళ్ళు నొప్పెడుతున్నాయి.",
        hint: { en: "Tell him to sit on the bench, and offer to keep his place.", te: "బెంచీ మీద కూర్చోమని చెప్పి, ఆయన చోటు మీరు చూసుకుంటానని చెప్పండి." },
        replies: [
          { say: "Please sit on the bench. I'll keep your place.", good: true, skill: "polite" },
          { say: "Why don't you sit down? I'll keep your place.", good: true, skill: "polite" },
          {
            say: "That's your problem. Everyone is standing here.",
            good: false,
            skill: "polite",
            react: { en: "Oh. Sorry, I was only talking.", te: "ఓ. సారీ అండీ, ఊరికే అన్నాను." },
          },
        ],
      },
      {
        partner: "Thank you! Look, the cashier is back. Finally!",
        te: "థాంక్యూ! చూడండి, క్యాషియర్ గారు వచ్చేశారు. హమ్మయ్య!",
        hint: { en: "Agree happily, and wish him a good day.", te: "సంతోషంగా ఒప్పుకుని, ఆయనకి మంచి రోజు కావాలని చెప్పండి." },
        replies: [
          { say: "Yes, finally! Have a good day, sir.", good: true, skill: "polite" },
          { say: "Yes, finally! Have good day, sir.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
