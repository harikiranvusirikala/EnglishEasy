import type { Lesson } from "../../types";

/** Week 16, Day 2 (CURRICULUM §4): How long have you had …? (a fixed phrase) and answering with for + time. */
export const day: Lesson = {
  id: "how-long-have-you-had",
  kind: "lesson",
  title: { en: "How Long Have You Had It?", te: "ఎన్ని రోజులుగా?" },
  subtitle: "How long have you had …? For …",
  summary: {
    en: "Learn to understand the doctor's question How long have you had this cough? and answer For about a week.",
    te: "డాక్టర్ How long have you had this cough? అని అడిగితే అర్థం చేసుకుని, For about a week అని జవాబు చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "How Long Have You Had It? in English for Telugu Speakers",
    description:
      "Understand How long have you had this cough? and answer For about a week. Simple lessons for Telugu speakers on telling a doctor how long.",
  },
  pattern: [
    { text: "I've had", role: "action" },
    { text: "this cough", role: "what" },
    { text: "for a week", role: "when" },
  ],
  core: [
    { en: "I've had it for three days.", te: "ఇది మూడు రోజులుగా ఉంది.", extra: ["since"] },
    { en: "How long have you had this cough?", te: "ఈ దగ్గు ఎన్ని రోజులుగా ఉంది?", extra: ["has"] },
    { en: "For about a week.", te: "సుమారు వారం రోజులుగా.", extra: ["since"] },
    { en: "The pain comes and goes.", te: "నొప్పి వస్తూ పోతూ ఉంది.", extra: ["come"] },
    { en: "It is getting worse at night.", te: "రాత్రి పూట ఇంకా ఎక్కువ అవుతోంది.", extra: ["more"] },
    { en: "I've had a sore throat for two days.", te: "రెండు రోజులుగా గొంతు నొప్పిగా ఉంది.", extra: ["since"] },
    { en: "Yes, there is phlegm in the morning.", te: "అవును, పొద్దున పూట కఫం వస్తోంది.", extra: ["are"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Think of anything you have had for a long time, and say: I've had it for ….",
    te: "మీకు చాలా కాలంగా ఉన్న ఏదైనా ఒకటి తలుచుకుని చెప్పండి: I've had it for ….",
  },
  words: [
    { en: "for", te: "… గా, … నుంచి (ఎంత కాలం)" },
    { en: "sore throat", te: "గొంతు నొప్పి" },
    { en: "phlegm", te: "కఫం, తెమడ" },
    { en: "worse", te: "ఇంకా ఎక్కువ, అధ్వాన్నం" },
    { en: "comes and goes", te: "వస్తూ పోతూ ఉంటుంది" },
  ],
  grammar: ["present-perfect", "prepositions", "question-words"],
  topics: ["health", "doctor", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "How long?", te: "ఎంత కాలంగా?" },
      body: {
        en: "The doctor asks How long have you had …? Learn it as one fixed question. Answer with for: For three days. For about a week. Or say I've had it for a week.",
        te: "'ఎన్ని రోజులుగా ఉంది?' అని డాక్టర్ అడిగే ప్రశ్న How long have you had …? దీన్ని ఒకే మాటగా గుర్తుంచుకోండి. జవాబు for తో: For three days, I've had it for a week.",
      },
      bridge: {
        te: ["ఇది", "మూడు రోజులుగా", "ఉంది"],
        en: [
          { text: "I've had", role: "action" },
          { text: "it", role: "what" },
          { text: "for three days", role: "when" },
        ],
      },
      examples: [
        { en: "How long have you had this cough?", te: "ఈ దగ్గు ఎన్ని రోజులుగా ఉంది?" },
        { en: "For about a week.", te: "సుమారు వారం రోజులుగా." },
        { en: "I've had it for three days.", te: "ఇది మూడు రోజులుగా ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Saying how long", te: "ఎంత కాలమో చెప్పడం" },
      items: [
        {
          form: "For …",
          useFor: { en: "A short answer to How long?", te: "How long? కి చిన్న జవాబు." },
          example: { en: "For about a week.", te: "సుమారు వారం రోజులుగా." },
        },
        {
          form: "I've had it for …",
          useFor: { en: "A full answer, with the length of time.", te: "పూర్తి జవాబు, ఎంత కాలమో చెప్తూ." },
          example: { en: "I've had a sore throat for two days.", te: "రెండు రోజులుగా గొంతు నొప్పిగా ఉంది." },
        },
        {
          form: "It comes and goes.",
          useFor: { en: "A problem that stops, then starts again.", te: "ఆగి ఆగి మళ్ళీ వచ్చే సమస్య." },
          example: { en: "The pain comes and goes.", te: "నొప్పి వస్తూ పోతూ ఉంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Since one week.",
      right: "For a week.",
      why: {
        en: "Telugu says వారం నుంచి, but for a length of time English uses for, never since or from.",
        te: "తెలుగులో 'వారం నుంచి' అంటాం; ఎంత కాలమో చెప్పేటప్పుడు ఇంగ్లీష్‌లో for వాడాలి, since, from కాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "How long you have this cough?",
      right: "How long have you had this cough?",
      why: {
        en: "Learn the doctor's question as one fixed phrase: have comes before you, and had after it.",
        te: "డాక్టర్ అడిగే ఈ ప్రశ్నని ఒకే మాటగా గుర్తుంచుకోండి: you ముందు have, తర్వాత had.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "The doctor asks: How long have you had this fever? It started three days ago.",
        te: "డాక్టర్ How long have you had this fever? అని అడిగారు. జ్వరం మూడు రోజుల క్రితం మొదలైంది.",
      },
      options: ["For three days.", "Since three days.", "From three days."],
      answer: 0,
      why: {
        en: "For tells how long; Telugu నుంచి makes us say since or from, but English uses for.",
        te: "ఎంత కాలమో చెప్పడానికి for; 'నుంచి' అని since, from అనకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "How long have you ___ this cough?",
      te: "ఈ దగ్గు ఎన్ని రోజులుగా ఉంది?",
      options: ["had", "have", "having"],
      answer: 0,
      why: {
        en: "This doctor's question is a fixed phrase, and it always has had after you.",
        te: "ఇది డాక్టర్ అడిగే స్థిరమైన ప్రశ్న; you తర్వాత ఎప్పుడూ had వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your cough stops for a day, then starts again. What do you say?",
        te: "మీ దగ్గు ఒక రోజు ఆగి, మళ్ళీ మొదలవుతోంది. ఏమంటారు?",
      },
      options: ["It comes and goes.", "It is getting worse.", "It is always there."],
      answer: 0,
      why: {
        en: "Comes and goes means it stops for a while, then starts again.",
        te: "comes and goes అంటే కాసేపు ఆగి, మళ్ళీ మొదలవుతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "I've had a sore throat since two days.",
      wrongIndex: 5,
      fix: "I've had a sore throat for two days.",
      why: {
        en: "Two days is a length of time, so it takes for, not since.",
        te: "రెండు రోజులు అనేది ఎంత కాలమో చెప్తుంది, అందుకే for, since కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "The doctor asks how long you have had the cough. Say about a week.",
        te: "దగ్గు ఎన్ని రోజులుగా ఉందని డాక్టర్ అడిగారు. సుమారు ఒక వారం అని చెప్పండి.",
      },
      expected: ["For about a week.", "I've had it for about a week.", "About a week."],
      options: ["For about a week.", "Since about one week.", "From about one week."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell the doctor the cough is worse at night.",
        te: "రాత్రి పూట దగ్గు ఇంకా ఎక్కువ అవుతోందని డాక్టర్‌కి చెప్పండి.",
      },
      expected: ["It is getting worse at night.", "It's getting worse at night.", "The cough is worse at night."],
      options: ["It is getting worse at night.", "It is getting more worse at night.", "It is getting worst at night."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The doctor asks about your cough", te: "దగ్గు గురించి డాక్టర్ ప్రశ్నలు" },
    scene: {
      en: "Your cough is not going away. Dr Kavitha asks you about it.",
      te: "మీ దగ్గు తగ్గడం లేదు. డాక్టర్ కవిత దాని గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Dr Kavitha (a doctor)", te: "డాక్టర్ కవిత" },
    skills: [
      { id: "symptom", label: { en: "Telling symptoms", te: "లక్షణాలు చెప్పడం" } },
      { id: "howlong", label: { en: "Saying how long", te: "ఎంత కాలమో చెప్పడం" } },
    ],
    turns: [
      {
        partner: "Hello. Please sit down. What's the trouble?",
        te: "హలో. కూర్చోండి. ఏంటి ఇబ్బంది?",
        hint: { en: "Greet the doctor, and say what your problem is.", te: "డాక్టర్‌కి నమస్కారం చెప్పి, బాగా దగ్గు ఉందని చెప్పండి." },
        replies: [
          { say: "Good morning, doctor. I have a bad cough.", good: true, skill: "symptom" },
          { say: "Good morning, doctor. I am having bad cough.", good: false, skill: "symptom", fixIt: "state-ing" },
        ],
      },
      {
        partner: "How long have you had this cough?",
        te: "ఈ దగ్గు ఎన్ని రోజులుగా ఉంది?",
        hint: { en: "Say how long: about ten days.", te: "ఎంత కాలమో చెప్పండి: సుమారు పది రోజులు." },
        replies: [
          { say: "For about ten days.", good: true, skill: "howlong" },
          { say: "I've had it for about ten days.", good: true, skill: "howlong" },
          { say: "Since ten days, doctor.", good: false, skill: "howlong", fixIt: "preposition" },
        ],
      },
      {
        partner: "Is it worse at any time of day?",
        te: "రోజులో ఏదైనా సమయంలో ఇంకా ఎక్కువ అవుతుందా?",
        hint: { en: "Say when it is worse, and what happens in the morning.", te: "ఎప్పుడు ఎక్కువ అవుతుందో, పొద్దున ఏమవుతుందో చెప్పండి." },
        replies: [
          { say: "Yes, at night. There is phlegm in the morning.", good: true, skill: "symptom" },
          {
            say: "Doctor, just give me strong tablets, quickly.",
            good: false,
            skill: "symptom",
            react: { en: "First I must understand the problem. Please answer.", te: "ముందు సమస్య ఏంటో నాకు అర్థం కావాలి. చెప్పండి." },
          },
        ],
      },
      {
        partner: "I see. Let me check your chest now.",
        te: "అలాగా. ఇప్పుడు మీ ఛాతీ పరీక్షిస్తాను.",
        hint: { en: "Agree politely, and thank her.", te: "సరే అని, మర్యాదగా థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, doctor. Thank you.", good: true },
          { say: "Okay, doctor. Thanks you.", good: false },
        ],
      },
    ],
  },
};
