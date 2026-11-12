import type { Lesson } from "../../types";

/** Week 68, Day 2 (CURRICULUM §5): verb + to after decide, plan, try and forget — I've decided to walk every morning. */
export const day: Lesson = {
  id: "decided-to-walk-healthy-habits",
  kind: "lesson",
  title: { en: "I've Decided to Walk", te: "నడవాలని నిర్ణయించుకున్నాను" },
  subtitle: "decide to, plan to, try to, forget to",
  summary: {
    en: "Learn to talk about health plans: I've decided to walk every morning. Don't forget to drink water.",
    te: "ఆరోగ్యం కోసం వేసుకునే ప్లాన్ల గురించి చెప్పడం నేర్చుకుందాం: I've decided to walk every morning. Don't forget to drink water.",
  },
  seo: {
    title: "Decide To and Plan To in English for Telugu Speakers",
    description:
      "Say I've decided to walk every morning and Don't forget to drink water. Simple lessons for Telugu speakers on decide, plan, try and forget + to.",
  },
  pattern: [
    { text: "I've", role: "who" },
    { text: "decided", role: "action" },
    { text: "to walk", role: "what" },
    { text: "every morning", role: "when" },
  ],
  core: [
    { en: "I've decided to walk every morning.", te: "రోజూ పొద్దున నడవాలని నిర్ణయించుకున్నాను.", extra: ["walking"] },
    { en: "Don't forget to drink water during the day.", te: "పగలంతా నీళ్ళు తాగడం మర్చిపోకండి.", extra: ["drinking"] },
    { en: "I'm planning to join a yoga class.", te: "యోగా క్లాస్‌లో చేరాలని అనుకుంటున్నాను.", extra: ["joining"] },
    { en: "Try to go to bed early.", te: "త్వరగా పడుకోవడానికి ప్రయత్నించండి.", extra: ["going"] },
    { en: "She forgot to take her tablet this morning.", te: "ఈ రోజు పొద్దున ఆవిడ టాబ్లెట్ వేసుకోవడం మర్చిపోయారు.", extra: ["taking"] },
    { en: "What time do you plan to start?", te: "మీరు ఎన్ని గంటలకి మొదలుపెట్టాలని అనుకుంటున్నారు?", extra: ["starting"] },
    { en: "I forgot to bring my water bottle.", te: "నా వాటర్ బాటిల్ తేవడం మర్చిపోయాను.", extra: ["bringing"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Decide one small health goal for this week. Say it aloud: I've decided to …",
    te: "ఈ వారానికి ఒక చిన్న ఆరోగ్య లక్ష్యం పెట్టుకోండి. గట్టిగా చెప్పండి: I've decided to …",
  },
  words: [
    { en: "goal", te: "లక్ష్యం" },
    { en: "brisk walk", te: "వేగంగా నడవడం" },
    { en: "stretch", te: "ఒళ్ళు విరుచుకోవడం, స్ట్రెచ్ చేయడం" },
    { en: "stay fit", te: "ఆరోగ్యంగా, చురుగ్గా ఉండటం" },
    { en: "step by step", te: "కొంచెం కొంచెంగా, మెల్లగా" },
  ],
  grammar: ["gerunds-infinitives", "present-perfect"],
  topics: ["health", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "decide, plan, try, forget + to", te: "decide, plan, try, forget తర్వాత to" },
      body: {
        en: "After decide, plan, try and forget, use to and the plain verb: I've decided to walk. Telugu says నడవాలని; English says to walk.",
        te: "decide, plan, try, forget తర్వాత to + verb వస్తుంది: I've decided to walk (నడవాలని నిర్ణయించుకున్నాను).",
      },
      bridge: {
        te: ["రోజూ పొద్దున", "నడవాలని", "నిర్ణయించుకున్నాను"],
        en: [
          { text: "I've", role: "who" },
          { text: "decided", role: "action" },
          { text: "to walk", role: "what" },
          { text: "every morning", role: "when" },
        ],
      },
      examples: [
        { en: "I've decided to walk every morning.", te: "రోజూ పొద్దున నడవాలని నిర్ణయించుకున్నాను." },
        { en: "Don't forget to drink water during the day.", te: "పగలంతా నీళ్ళు తాగడం మర్చిపోకండి." },
        { en: "I'm planning to join a yoga class.", te: "యోగా క్లాస్‌లో చేరాలని అనుకుంటున్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "-ing or to?", te: "-ing నా, to నా?" },
      items: [
        {
          form: "decide to, plan to",
          useFor: { en: "A choice or a plan for the future.", te: "ముందు చేయాలనుకున్న నిర్ణయం, ప్లాన్." },
          example: { en: "We plan to start slowly, step by step.", te: "మెల్లగా, కొంచెం కొంచెంగా మొదలుపెట్టాలని అనుకుంటున్నాం." },
        },
        {
          form: "try to",
          useFor: { en: "You make an effort.", te: "ప్రయత్నం చేయడం." },
          example: { en: "Try to take a brisk walk every day.", te: "రోజూ వేగంగా నడవడానికి ప్రయత్నించండి." },
        },
        {
          form: "forget to",
          useFor: { en: "You did not remember a job.", te: "ఒక పని గుర్తులేకపోవడం." },
          example: { en: "Don't forget to stretch before you walk.", te: "నడిచే ముందు స్ట్రెచ్ చేయడం మర్చిపోకండి." },
        },
        {
          form: "stop, keep, avoid + -ing",
          useFor: { en: "From the last lesson: these take -ing.", te: "ముందు పాఠంలోవి: వీటి తర్వాత -ing." },
          example: { en: "Avoid walking in the hot sun.", te: "మండే ఎండలో నడవకుండా చూసుకోండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I've decided walking every morning.",
      right: "I've decided to walk every morning.",
      why: {
        en: "Decide is followed by to and the plain verb, never by the -ing form.",
        te: "decide తర్వాత to + verb వస్తుంది; -ing రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I'm planning join a yoga class.",
      right: "I'm planning to join a yoga class.",
      why: {
        en: "Plan needs to before the next verb; Telugu చేరాలని has no separate word for it.",
        te: "plan తర్వాత verb ముందు to కావాలి; తెలుగులో 'చేరాలని' లో అది విడిగా కనిపించదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "You have made a choice: a walk every morning. What do you tell your friend?",
        te: "మీరు ఒక నిర్ణయం తీసుకున్నారు: రోజూ పొద్దున నడక. స్నేహితులకి ఏం చెప్తారు?",
      },
      options: ["I've decided to walk every morning.", "I've decided walking every morning.", "I've decided to walking every morning."],
      answer: 0,
      why: {
        en: "Decide takes to and the plain verb; -ing never comes after it.",
        te: "decide తర్వాత to + verb మాత్రమే; దాని తర్వాత -ing రాదు.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "Morning Walkers group",
      lines: [
        "Good morning, everyone!",
        "From Monday, we plan to start at 6 am, not 6:30.",
        "We'll meet at the park gate.",
        "Geetha will show us how to stretch before the walk.",
        "Don't forget to bring water.",
      ],
      prompt: { en: "What time will the group start from Monday?", te: "సోమవారం నుంచి గ్రూప్ ఎన్ని గంటలకి మొదలవుతుంది?" },
      options: ["At 6 am", "At 6:30 am", "At 7 am"],
      answer: 0,
      why: {
        en: "The second line says the new start is half an hour earlier than before.",
        te: "కొత్త టైమ్ ఇదివరకటి కంటే అరగంట ముందు అని రెండో లైన్‌లో ఉంది.",
      },
      say: "From Monday, we plan to start at 6 am, not 6:30.",
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Imran often ___ to take his tablets after lunch.",
      te: "ఇమ్రాన్ గారు మధ్యాహ్నం భోజనం తర్వాత టాబ్లెట్లు వేసుకోవడం తరచూ మర్చిపోతారు.",
      options: ["forgets", "forget", "forgetting"],
      answer: 0,
      why: {
        en: "Imran is one person, so the verb takes s in the present.",
        te: "ఇమ్రాన్ గారు ఒక్కరే, అందుకే present లో verb కి s వస్తుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "I reached to the temple before six.",
      wrongIndex: 2,
      fix: "I reached the temple before six.",
      why: {
        en: "Reach needs no to; the Telugu ending -కి is not said in English.",
        te: "reach తర్వాత to అక్కర్లేదు; తెలుగులో '-కి' ఉన్నా ఇంగ్లీష్‌లో to రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your neighbour asks about your new plan. Say you have decided to walk every evening.",
        te: "మీ కొత్త ప్లాన్ ఏంటని పక్కింటివారు అడుగుతున్నారు. రోజూ సాయంత్రం నడవాలని నిర్ణయించుకున్నారని చెప్పండి.",
      },
      expected: ["I've decided to walk every evening.", "I have decided to walk every evening.", "I'm going to walk every evening."],
      options: ["I've decided to walk every evening.", "I've decided walking every evening.", "I decided to walking every evening."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your neighbour wants to start walking too. Ask her what time she plans to start.",
        te: "పక్కింటావిడ కూడా నడక మొదలుపెట్టాలనుకుంటున్నారు. ఎన్ని గంటలకి మొదలుపెట్టాలనుకుంటున్నారో అడగండి.",
      },
      expected: ["What time do you plan to start?", "When do you plan to start?", "What time will you start?"],
      options: ["What time do you plan to start?", "What time you plan to start?", "What time do you plan starting?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Walking together", te: "కలిసి నడక" },
    scene: {
      en: "Your neighbour Kamala sees you coming back from a walk early in the morning.",
      te: "పొద్దున్నే మీరు నడక నుంచి తిరిగి వస్తుంటే పక్కింటి కమల గారు చూశారు.",
    },
    partner: { en: "Kamala (your neighbour)", te: "కమల (పక్కింటావిడ)" },
    skills: [
      { id: "plans", label: { en: "Saying your plans", te: "మీ ప్లాన్లు చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! I hear you've started walking to stay fit.",
        te: "గుడ్ మార్నింగ్! ఆరోగ్యంగా ఉండటానికి మీరు నడక మొదలుపెట్టారని విన్నాను.",
        hint: { en: "Say yes, and tell her your new plan for the mornings.", te: "అవును అని, పొద్దుటి కోసం మీ కొత్త ప్లాన్ చెప్పండి." },
        replies: [
          { say: "Yes! I've decided to walk every morning.", good: true, skill: "plans" },
          { say: "Yes! I've decided walking every morning.", good: false, skill: "plans" },
        ],
      },
      {
        partner: "Lovely! Can I join you? What time do you go?",
        te: "బాగుంది! నేను కూడా రావచ్చా? మీరు ఎన్ని గంటలకి వెళ్తారు?",
        hint: { en: "Say she is welcome, and give the time: half past five.", te: "రమ్మని చెప్పి, టైమ్ చెప్పండి: ఐదున్నర." },
        replies: [
          { say: "Please join me! I go at half past five.", good: true, skill: "polite" },
          { say: "Please join me! I go on half past five.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
      {
        partner: "Half past five is early! But I'll try. Where do you walk?",
        te: "ఐదున్నర అంటే చాలా పొద్దున్నే! అయినా ప్రయత్నిస్తాను. మీరు ఎక్కడ నడుస్తారు?",
        hint: { en: "Say you go to the temple and back, and plan to walk faster later.", te: "గుడి దాకా వెళ్ళి వస్తారని, తర్వాత ఇంకా వేగంగా నడవాలనుకుంటున్నారని చెప్పండి." },
        replies: [
          { say: "I walk to the temple and back. I plan to walk faster later.", good: true, skill: "plans" },
          {
            say: "If you can't get up early, don't come.",
            good: false,
            skill: "polite",
            react: { en: "Oh! I only said it's early. I'll come.", te: "అయ్యో! పొద్దున్నే అన్నాను, అంతే. నేను వస్తాను." },
          },
        ],
      },
      {
        partner: "Okay. Don't forget to call me tomorrow!",
        te: "సరే. రేపు నాకు ఫోన్ చేయడం మర్చిపోకండి!",
        hint: { en: "Promise to call her at five, and say goodbye.", te: "ఐదింటికి ఫోన్ చేస్తానని మాటిచ్చి, బై చెప్పండి." },
        replies: [
          { say: "Sure, I'll call you at five. See you tomorrow!", good: true, skill: "polite" },
          { say: "Sure, I'll calling you at five. See you tomorrow!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
