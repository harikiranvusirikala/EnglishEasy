import type { Lesson } from "../../types";

/** Week 7, Day 5 (CURRICULUM §3): weekdays and weekends — on Sundays, every weekend, from … to … */
export const day: Lesson = {
  id: "weekdays-and-weekends",
  kind: "lesson",
  title: { en: "Weekdays and Weekends", te: "వారం రోజులు, వారాంతం" },
  subtitle: "on Sundays / every weekend",
  summary: {
    en: "Learn to talk about your week: on Sundays, every weekend, from Monday to Friday.",
    te: "మీ వారం గురించి మాట్లాడటం నేర్చుకుందాం: on Sundays, every weekend, from Monday to Friday.",
  },
  seo: {
    title: "On Sundays, Every Weekend: Days of the Week in English for Telugu Speakers",
    description:
      "Say On Sundays I go to the temple and I rest every weekend in English. Simple lessons for Telugu speakers, with Telugu explanations.",
  },
  pattern: [
    { text: "On Sundays", role: "when" },
    { text: "I", role: "who" },
    { text: "go", role: "action" },
    { text: "to the temple", role: "what" },
  ],
  core: [
    { en: "On Sundays I go to the temple.", te: "ఆదివారాలు నేను గుడికి వెళ్తాను.", extra: ["In"] },
    { en: "I rest every weekend.", te: "నేను ప్రతి వారాంతం విశ్రాంతి తీసుకుంటాను.", extra: ["on"] },
    { en: "The market is busy on Saturdays.", te: "శనివారాలు మార్కెట్ రద్దీగా ఉంటుంది.", extra: ["in"] },
    { en: "What do you do on Sundays?", te: "ఆదివారాలు మీరు ఏం చేస్తారు?", extra: ["does"] },
    { en: "I work from Monday to Friday.", te: "నేను సోమవారం నుండి శుక్రవారం వరకు పని చేస్తాను.", extra: ["since"] },
    { en: "We visit our relatives on weekends.", te: "వారాంతాల్లో మేము బంధువుల ఇంటికి వెళ్తాం.", extra: ["in"] },
    { en: "Every Tuesday, she goes to the bank.", te: "ప్రతి మంగళవారం ఆవిడ బ్యాంక్‌కి వెళ్తారు.", extra: ["On"] },
  ],
  key: [0, 1, 3, 4],
  tryToday: {
    en: "Tell someone what you do on Sundays, in English.",
    te: "ఆదివారాలు మీరు ఏం చేస్తారో ఎవరికైనా ఇంగ్లీష్‌లో చెప్పండి.",
  },
  words: [
    { en: "weekend", te: "వారాంతం (శని, ఆదివారాలు)" },
    { en: "weekday", te: "వారం రోజు (సోమ నుండి శుక్ర)" },
    { en: "Saturday", te: "శనివారం" },
    { en: "Tuesday", te: "మంగళవారం" },
    { en: "relatives", te: "బంధువులు" },
  ],
  grammar: ["prepositions", "present-simple"],
  topics: ["time", "family"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "On Sundays, every weekend", te: "ఆదివారాలు, ప్రతి వారాంతం" },
      body: {
        en: "Days take on: on Sunday, on Sundays (every Sunday). With every, there is no on: every Sunday, every weekend. Weekdays are Monday to Friday; the weekend is Saturday and Sunday.",
        te: "రోజులకు on: on Sunday, on Sundays (ప్రతి ఆదివారం). every ఉంటే on ఉండదు: every Sunday, every weekend. weekdays అంటే సోమ నుండి శుక్ర; weekend అంటే శని, ఆదివారాలు.",
      },
      bridge: {
        te: ["ఆదివారాలు", "నేను", "గుడికి వెళ్తాను"],
        en: [
          { text: "On Sundays", role: "when" },
          { text: "I", role: "who" },
          { text: "go", role: "action" },
          { text: "to the temple", role: "what" },
        ],
      },
      examples: [
        { en: "On Sundays I go to the temple.", te: "ఆదివారాలు నేను గుడికి వెళ్తాను." },
        { en: "I rest every weekend.", te: "నేను ప్రతి వారాంతం విశ్రాంతి తీసుకుంటాను." },
        { en: "I work from Monday to Friday.", te: "నేను సోమవారం నుండి శుక్రవారం వరకు పని చేస్తాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "On, every, from … to", te: "on, every, from … to — ఏది?" },
      items: [
        {
          form: "on Sundays",
          useFor: { en: "On + a day; add s for every week.", te: "on + రోజు; ప్రతి వారం అయితే s." },
          example: { en: "The market is busy on Saturdays.", te: "శనివారాలు మార్కెట్ రద్దీగా ఉంటుంది." },
        },
        {
          form: "every + day (no on)",
          useFor: { en: "With every, do not say on.", te: "every ఉంటే on అనకండి." },
          example: { en: "Every Tuesday, she goes to the bank.", te: "ప్రతి మంగళవారం ఆవిడ బ్యాంక్‌కి వెళ్తారు." },
        },
        {
          form: "from … to …",
          useFor: { en: "From one day to another.", te: "ఒక రోజు నుండి ఇంకో రోజు వరకు." },
          example: { en: "I work from Monday to Friday.", te: "నేను సోమవారం నుండి శుక్రవారం వరకు పని చేస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I go to the temple in Sundays.",
      right: "I go to the temple on Sundays.",
      why: {
        en: "Telugu needs no word before ఆదివారం, but English days take on: on Sundays.",
        te: "తెలుగులో 'ఆదివారం' ముందు ఏ పదం అక్కర్లేదు; ఇంగ్లీష్‌లో రోజులకు on: on Sundays.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I rest on every weekend.",
      right: "I rest every weekend.",
      why: {
        en: "Every already says when, so there is no on: I rest every weekend.",
        te: "every ఉంటే on రాదు: I rest every weekend.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["The market is busy in Saturdays.", "The market is busy on Saturdays.", "The market is busy at Saturdays."],
      answer: 1,
      why: {
        en: "Days of the week take on, not in or at: busy on Saturdays.",
        te: "వారంలోని రోజులకు on, in లేదా at కాదు: busy on Saturdays.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I work from Monday ___ Friday.",
      te: "నేను సోమవారం నుండి శుక్రవారం వరకు పని చేస్తాను.",
      options: ["to", "on", "in"],
      answer: 0,
      why: {
        en: "Telugu నుండి and వరకు become from and to: from Monday to Friday.",
        te: "నుండి = from, వరకు = to: from Monday to Friday.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which days are the weekend?", te: "వారాంతం అంటే ఏ రోజులు?" },
      options: ["Monday and Tuesday", "Saturday and Sunday", "Friday and Monday"],
      answer: 1,
      why: {
        en: "The weekend is Saturday and Sunday.",
        te: "weekend అంటే శని, ఆదివారాలు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "She goes to the bank on every Tuesday.",
      wrongIndex: 5,
      fix: "She goes to the bank every Tuesday.",
      why: {
        en: "With every, drop on: She goes to the bank every Tuesday.",
        te: "every ఉంటే on తీసేయాలి: She goes to the bank every Tuesday.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: What do you do on Sundays? Say you go to the temple.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: What do you do on Sundays? గుడికి వెళ్తానని చెప్పండి.",
      },
      expected: ["I go to the temple.", "On Sundays I go to the temple.", "I go to the temple on Sundays."],
      options: ["I go to the temple in Sundays.", "I go to the temple on Sundays.", "I going to the temple on Sundays."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say that you rest every weekend.",
        te: "మీరు ప్రతి వారాంతం విశ్రాంతి తీసుకుంటారని చెప్పండి.",
      },
      expected: ["I rest every weekend."],
      options: ["I rest on every weekend.", "I rest every weekend.", "I rests every weekend."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "What do you do on Sundays?", te: "ఆదివారాలు ఏం చేస్తారు?" },
    scene: {
      en: "Your friend Mary asks about your week and your weekends.",
      te: "మీ స్నేహితురాలు మేరీ మీ వారం, వారాంతాల గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Mary (a friend)", te: "మేరీ (స్నేహితురాలు)" },
    skills: [{ id: "days", label: { en: "Days of the week", te: "వారంలోని రోజులు" } }],
    turns: [
      {
        partner: "What do you do on Sundays?",
        te: "ఆదివారాలు మీరు ఏం చేస్తారు?",
        hint: { en: "Tell her what you do on Sundays. Start with On Sundays.", te: "ఆదివారాలు ఏం చేస్తారో చెప్పండి. On Sundays తో మొదలుపెట్టండి." },
        replies: [
          { say: "On Sundays I go to the temple.", good: true, skill: "days" },
          { say: "In Sundays I go to the temple.", good: false, skill: "days" },
        ],
      },
      {
        partner: "And on Saturdays?",
        te: "మరి శనివారాలు?",
        hint: { en: "Tell her one thing you do on Saturdays.", te: "శనివారాలు చేసే ఒక పని చెప్పండి." },
        replies: [
          { say: "I visit my relatives.", good: true },
          { say: "I visits my relatives.", good: false },
        ],
      },
      {
        partner: "Do you work on weekdays?",
        te: "వారం రోజుల్లో పని చేస్తారా?",
        hint: { en: "Answer for yourself: your work days, or that you are retired.", te: "మీ గురించి చెప్పండి: పని రోజులు, లేదా రిటైర్ అయ్యారని." },
        replies: [
          { say: "Yes, from Monday to Friday.", good: true, skill: "days" },
          { say: "No, I am retired.", good: true },
          { say: "Yes, since Monday to Friday.", good: false, skill: "days" },
        ],
      },
      {
        partner: "Let's go to the market on Saturday.",
        te: "శనివారం మార్కెట్‌కి వెళ్దాం.",
        hint: { en: "Agree, but warn her about the Saturday crowd.", te: "సరే అని, శనివారం రద్దీ గురించి చెప్పండి." },
        replies: [
          { say: "Okay, but it is busy on Saturdays.", good: true, skill: "days" },
          { say: "Okay, but it is busy in Saturdays.", good: false, skill: "days" },
          {
            say: "No. I don't like going with you.",
            good: false,
            react: { en: "Oh! Okay, I will go alone.", te: "అయ్యో! సరే, నేను ఒక్కదాన్నే వెళ్తాను." },
          },
        ],
      },
    ],
  },
};
