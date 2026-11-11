import type { Lesson } from "../../types";

/** Week 38, Day 5 (CURRICULUM §4): changing and cancelling plans politely — Can we make it six instead of five? */
export const day: Lesson = {
  id: "can-we-change-the-time",
  kind: "lesson",
  title: { en: "Can We Change the Time?", te: "టైమ్ మారుద్దామా?" },
  subtitle: "changing and cancelling plans",
  summary: {
    en: "Learn to change or cancel a plan politely: Can we make it six instead of five?",
    te: "ప్లాన్‌ని మర్యాదగా మార్చడం, cancel చేయడం నేర్చుకుందాం: Can we make it six instead of five?",
  },
  seo: {
    title: "Changing and Cancelling Plans in English for Telugu Speakers",
    description:
      "Say Can we make it six instead of five? and Something has come up. Simple lessons for Telugu speakers on changing plans politely.",
  },
  pattern: [
    { text: "Can", role: "action" },
    { text: "we", role: "who" },
    { text: "make it six", role: "action" },
    { text: "instead of five?", role: "when" },
  ],
  core: [
    { en: "Can we change the time?", te: "టైమ్ మారుద్దామా?", extra: ["changing"] },
    { en: "Can we make it six instead of five?", te: "ఐదుకి బదులు ఆరింటికి పెట్టుకుందామా?", extra: ["for"] },
    { en: "Sorry, I have to cancel today.", te: "సారీ, ఈ రోజు ప్లాన్ cancel చేయాల్సి వస్తోంది.", extra: ["cancelling"] },
    { en: "Can we meet on Monday instead?", te: "బదులుగా సోమవారం కలుద్దామా?", extra: ["in"] },
    { en: "Something has come up. I can't make it.", te: "ఏదో పని పడింది. నేను రాలేను.", extra: ["came"] },
    { en: "Let's postpone it to next week.", te: "దాన్ని వచ్చే వారానికి వాయిదా వేద్దాం.", extra: ["on"] },
    { en: "Can we meet a little earlier, at four?", te: "కొంచెం ముందుగా, నాలుగింటికి కలుద్దామా?", extra: ["more"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one plan you have this week. Say aloud how you would move it: Can we meet on … instead?",
    te: "ఈ వారం మీకున్న ఒక ప్లాన్ గుర్తు చేసుకోండి. దాన్ని ఎలా మారుస్తారో గట్టిగా చెప్పండి: Can we meet on … instead?",
  },
  words: [
    { en: "cancel", te: "రద్దు చేయడం, cancel చేయడం" },
    { en: "change of plan", te: "ప్లాన్‌లో మార్పు" },
    { en: "earlier", te: "ఇంకా ముందుగా" },
    { en: "postpone", te: "వాయిదా వేయడం" },
    { en: "come up", te: "అనుకోకుండా పని పడటం" },
  ],
  grammar: ["can-could", "politeness-softening", "present-perfect"],
  topics: ["people", "time", "phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Changing a plan politely", te: "ప్లాన్ మర్యాదగా మార్చడం" },
      body: {
        en: "To change a plan, ask with Can we …? and give the new time or day: Can we make it six instead of five? To cancel, say sorry first and give a short reason.",
        te: "ప్లాన్ మార్చాలంటే Can we …? అని అడిగి, కొత్త టైమ్ లేదా రోజు చెప్పండి: Can we make it six instead of five? cancel చేయాలంటే ముందు sorry చెప్పి, చిన్న కారణం చెప్పండి.",
      },
      bridge: {
        te: ["ఐదుకి బదులు", "ఆరింటికి", "పెట్టుకుందామా?"],
        en: [
          { text: "Can", role: "action" },
          { text: "we", role: "who" },
          { text: "make it six", role: "action" },
          { text: "instead of five?", role: "when" },
        ],
      },
      examples: [
        { en: "Can we change the time?", te: "టైమ్ మారుద్దామా?" },
        { en: "Can we make it six instead of five?", te: "ఐదుకి బదులు ఆరింటికి పెట్టుకుందామా?" },
        { en: "Can we meet on Monday instead?", te: "బదులుగా సోమవారం కలుద్దామా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Change, move or cancel", te: "మార్చడం, వాయిదా, cancel" },
      items: [
        {
          form: "make it + a time",
          useFor: { en: "Change the time.", te: "టైమ్ మార్చడానికి." },
          example: { en: "Can we make it six instead of five?", te: "ఐదుకి బదులు ఆరింటికి పెట్టుకుందామా?" },
        },
        {
          form: "… instead",
          useFor: { en: "Give a new day in place of the old one.", te: "పాత రోజుకి బదులు కొత్త రోజు చెప్పడానికి." },
          example: { en: "Can we meet on Monday instead?", te: "బదులుగా సోమవారం కలుద్దామా?" },
        },
        {
          form: "postpone it to …",
          useFor: { en: "Move the plan to a later day.", te: "ప్లాన్‌ని తర్వాతి రోజుకి జరపడానికి." },
          example: { en: "Let's postpone it to next week.", te: "దాన్ని వచ్చే వారానికి వాయిదా వేద్దాం." },
        },
        {
          form: "I can't make it.",
          useFor: { en: "Say you can't come.", te: "రాలేనని చెప్పడానికి." },
          example: { en: "Something has come up. I can't make it.", te: "ఏదో పని పడింది. నేను రాలేను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Let's discuss about the new time.",
      right: "Let's discuss the new time.",
      why: {
        en: "Discuss already means talk about, so it takes no about.",
        te: "discuss అంటేనే 'దాని గురించి మాట్లాడటం'; అందుకే about అక్కర్లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Can we meet more earlier?",
      right: "Can we meet earlier?",
      why: {
        en: "Earlier already means more early, so do not add more.",
        te: "earlier అంటేనే 'ఇంకా ముందుగా'; దానికి more చేర్చకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "You can't come at five. Ask your friend to meet at six.", te: "మీరు ఐదింటికి రాలేరు. ఆరింటికి కలుద్దామని స్నేహితుల్ని అడగండి." },
      options: ["Can we make it six instead of five?", "We can make it six instead of five?", "Can we make it six instead five?"],
      answer: 0,
      why: {
        en: "A question starts with can, and instead needs of before the old time.",
        te: "ప్రశ్న can తో మొదలవుతుంది; పాత టైమ్ ముందు instead of అనాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Something has come up. I can't ___ it today.",
      te: "ఏదో పని పడింది. ఈ రోజు నేను రాలేను.",
      options: ["make", "do", "come"],
      answer: 0,
      why: {
        en: "Make it is the fixed English phrase for being able to come.",
        te: "రాగలగడం అనడానికి ఇంగ్లీష్‌లో make it అనేది అలవాటైన మాట.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your friend Rani is ill, so today's plan is off. Tell the group.",
        te: "మీ స్నేహితురాలు రాణి గారికి ఒంట్లో బాగాలేదు, అందుకే ఈ రోజు ప్లాన్ లేదు. గ్రూప్‌కి చెప్పండి.",
      },
      options: ["Rani has a fever, so we're cancelling today.", "Rani have a fever, so we're cancelling today.", "Rani is having fever, so we're cancelling today."],
      answer: 0,
      why: {
        en: "One person, like she, takes has, not have; Telugu has no such change.",
        te: "ఒక్కరైతే (she లాగా) have కాదు, has; తెలుగులో ఇలాంటి మార్పు ఉండదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Sorry, I have to cancel. I have fever.",
      wrongIndex: 7,
      fix: "Sorry, I have to cancel. I have a fever.",
      why: {
        en: "In English you have a fever or a cold; Telugu has no word for a.",
        te: "ఇంగ్లీష్‌లో a fever, a cold అంటారు; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend wants to meet on Sunday, but Monday is better for you. Ask for Monday.",
        te: "స్నేహితులు ఆదివారం కలుద్దాం అంటున్నారు, కానీ మీకు సోమవారం వీలు. సోమవారం అడగండి.",
      },
      expected: ["Can we meet on Monday instead?", "Can we make it Monday?", "Can we meet on Monday?", "How about Monday instead?"],
      options: ["Can we meet on Monday instead?", "We can meet on Monday instead?", "Can we meet in Monday instead?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Something has come up, and you can't meet your friend today. Tell him kindly.",
        te: "ఏదో పని పడింది, ఈ రోజు స్నేహితుడిని కలవలేరు. ఆయనకి మర్యాదగా చెప్పండి.",
      },
      expected: [
        "Sorry, I can't make it today.",
        "Sorry, something has come up. I can't make it today.",
        "Sorry, something has come up.",
        "Sorry, I have to cancel today.",
      ],
      options: ["Sorry, I can't make it today.", "Not coming today. Bye.", "Sorry, I can't to make it today."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Moving a visit", te: "చూడటానికి వెళ్ళే రోజు మార్చడం" },
    scene: {
      en: "You and David planned to visit your sick friend Venkat on Thursday at five. Now you can't go then. David calls.",
      te: "మీరు, డేవిడ్ గారు గురువారం ఐదింటికి ఒంట్లో బాగాలేని స్నేహితుడు వెంకట్ గారిని చూడటానికి వెళ్ళాలనుకున్నారు. ఇప్పుడు మీకు కుదరదు. డేవిడ్ గారు ఫోన్ చేశారు.",
    },
    partner: { en: "David (your friend)", te: "డేవిడ్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "change", label: { en: "Changing a plan", te: "ప్లాన్ మార్చడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Are we still going to see Venkat on Thursday?",
        te: "హలో! గురువారం వెంకట్ గారిని చూడటానికి వెళ్తున్నాం కదా?",
        hint: { en: "Say sorry: something has happened, and you can't come then.", te: "సారీ చెప్పండి: ఏదో పని పడింది, ఆ రోజు రాలేరు." },
        replies: [
          { say: "Sorry, something has come up. I can't make it.", good: true, skill: "change" },
          { say: "Sorry, there's a change of plan. I can't come then.", good: true, skill: "change" },
          {
            say: "No, I'm not coming. Go alone.",
            good: false,
            skill: "polite",
            react: { en: "Oh! Is everything okay?", te: "అయ్యో! అంతా బాగానే ఉందా?" },
          },
        ],
      },
      {
        partner: "No problem. Can we go on Friday instead?",
        te: "పర్లేదు. బదులుగా శుక్రవారం వెళ్దామా?",
        hint: { en: "Say Friday is fine, and ask to change the time to six.", te: "శుక్రవారం కుదురుతుందని చెప్పి, టైమ్ ఆరింటికి మార్చమని అడగండి." },
        replies: [
          { say: "Friday is fine. Can we make it six?", good: true, skill: "change" },
          { say: "Friday is fine. We can make it six?", good: false, skill: "change", fixIt: "question" },
        ],
      },
      {
        partner: "Visiting hours end at six. How about five thirty?",
        te: "విజిటింగ్ అవర్స్ ఆరింటికే అయిపోతాయి. ఐదున్నర ఎలా ఉంటుంది?",
        hint: { en: "Agree, and offer to pick him up.", te: "ఒప్పుకుని, ఆయన్ని పికప్ చేసుకుంటానని చెప్పండి." },
        replies: [
          { say: "Okay, five thirty. I'll pick you up at five.", good: true, skill: "change" },
          { say: "Okay, five thirty. I'll picking you up at five.", good: false, skill: "change" },
        ],
      },
      {
        partner: "Thank you! See you on Friday.",
        te: "థాంక్యూ! శుక్రవారం కలుద్దాం.",
        hint: { en: "Say goodbye kindly.", te: "మర్యాదగా బై చెప్పండి." },
        replies: [
          { say: "See you on Friday. Bye!", good: true, skill: "polite" },
          { say: "See you at Friday. Bye!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
