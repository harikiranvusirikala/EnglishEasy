import type { Lesson } from "../../types";

/** Week 53, Day 4 (CURRICULUM §5): a polite word in a queue — Excuse me, the line starts there. We've been waiting too. */
export const day: Lesson = {
  id: "someone-jumped-the-queue",
  kind: "lesson",
  title: { en: "Someone Jumped the Queue", te: "క్యూలో ముందుకు దూరారు" },
  subtitle: "Excuse me, the line starts there.",
  summary: {
    en: "Learn to speak up kindly when someone pushes in: Excuse me, the line starts there. We've been waiting too.",
    te: "ఎవరైనా క్యూలో మధ్యలో దూరితే మర్యాదగా చెప్పడం నేర్చుకుందాం: Excuse me, the line starts there. We've been waiting too.",
  },
  seo: {
    title: "Speaking Up in a Queue in English for Telugu Speakers",
    description:
      "Say Excuse me, the line starts there and We've been waiting too. Simple lessons for Telugu speakers on handling queue jumpers politely.",
  },
  pattern: [
    { text: "We've", role: "who" },
    { text: "been waiting", role: "action" },
    { text: "in this line", role: "what" },
    { text: "since ten", role: "when" },
  ],
  core: [
    { en: "Excuse me, the line starts there.", te: "ఎక్స్‌క్యూజ్ మీ, లైన్ అక్కడ మొదలవుతుంది.", extra: ["start"] },
    { en: "We've been waiting in this line too.", te: "మేము కూడా ఈ లైన్లో ఎదురుచూస్తున్నాం.", extra: ["are"] },
    { en: "Sorry, I didn't see the line.", te: "సారీ, నేను లైన్ చూడలేదు.", extra: ["don't"] },
    { en: "Please go to the end of the line.", te: "లైన్ చివరికి వెళ్ళండి, ప్లీజ్.", extra: ["at"] },
    { en: "This lady has been standing here since nine.", te: "ఈవిడ తొమ్మిది నుంచి ఇక్కడ నిలబడి ఉన్నారు.", extra: ["have"] },
    { en: "If it's urgent, please ask the people in the line.", te: "అర్జెంట్ అయితే, లైన్లో ఉన్నవాళ్ళని అడగండి.", extra: ["will"] },
    { en: "No problem. You can go before me.", te: "పర్లేదు. మీరు నా కంటే ముందు వెళ్ళొచ్చు.", extra: ["going"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Practice once in front of a mirror: Excuse me, the line starts there. Smile as you say it.",
    te: "అద్దం ముందు ఒకసారి practice చేయండి: Excuse me, the line starts there. నవ్వుతూ చెప్పండి.",
  },
  words: [
    { en: "jump the queue", te: "క్యూలో ముందుకు దూరడం" },
    { en: "push in", te: "మధ్యలో దూరడం" },
    { en: "end of the line", te: "లైన్ చివర" },
    { en: "wait your turn", te: "మీ వంతు వచ్చేదాకా ఆగడం" },
    { en: "unfair", te: "అన్యాయం" },
  ],
  grammar: ["present-perfect-continuous", "politeness-softening", "articles"],
  topics: ["bank", "people", "offices"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "A kind word in a queue", te: "క్యూలో మర్యాదగా ఒక మాట" },
      body: {
        en: "Start with Excuse me, say where the line starts, and add We've been waiting too. Calm words work better than anger.",
        te: "Excuse me తో మొదలుపెట్టి, లైన్ ఎక్కడ మొదలవుతుందో చెప్పి, We've been waiting too అనండి. కోపం కంటే ప్రశాంతమైన మాటే బాగా పనిచేస్తుంది.",
      },
      bridge: {
        te: ["మేము కూడా", "ఈ లైన్లో", "ఎదురుచూస్తున్నాం"],
        en: [
          { text: "We've", role: "who" },
          { text: "been waiting", role: "action" },
          { text: "in this line too", role: "what" },
        ],
      },
      examples: [
        { en: "Excuse me, the line starts there.", te: "ఎక్స్‌క్యూజ్ మీ, లైన్ అక్కడ మొదలవుతుంది." },
        { en: "We've been waiting in this line too.", te: "మేము కూడా ఈ లైన్లో ఎదురుచూస్తున్నాం." },
        { en: "Sorry, I didn't see the line.", te: "సారీ, నేను లైన్ చూడలేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What to say in a queue", te: "క్యూలో ఏమనాలి" },
      items: [
        {
          form: "Excuse me, …",
          useFor: { en: "Start kindly before you correct someone.", te: "ఎవరినైనా సరిదిద్దే ముందు మర్యాదగా మొదలుపెట్టడానికి." },
          example: { en: "Excuse me, please don't push in.", te: "ఎక్స్‌క్యూజ్ మీ, మధ్యలో దూరకండి, ప్లీజ్." },
        },
        {
          form: "… has been standing since …",
          useFor: { en: "Say how long someone has waited.", te: "ఎవరైనా ఎంతసేపట్నుంచి ఎదురుచూస్తున్నారో చెప్పడానికి." },
          example: { en: "This lady has been standing here since nine.", te: "ఈవిడ తొమ్మిది నుంచి ఇక్కడ నిలబడి ఉన్నారు." },
        },
        {
          form: "Sorry, I didn't …",
          useFor: { en: "Your own mistake: say sorry and move back.", te: "మీ తప్పే అయితే: సారీ చెప్పి వెనక్కి వెళ్ళడానికి." },
          example: { en: "Sorry, I didn't know. I'll go back.", te: "సారీ, నాకు తెలియదు. వెనక్కి వెళ్తాను." },
        },
        {
          form: "You can go before me.",
          useFor: { en: "Let someone in real trouble go first.", te: "నిజంగా ఇబ్బందిలో ఉన్నవారిని ముందు పంపడానికి." },
          example: { en: "No problem. You can go before me.", te: "పర్లేదు. మీరు నా కంటే ముందు వెళ్ళొచ్చు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Excuse me, line starts there.",
      right: "Excuse me, the line starts there.",
      why: {
        en: "You both know which line, so English needs the; Telugu has no such word.",
        te: "ఏ లైన్ అనేది ఇద్దరికీ తెలుసు, అందుకే the కావాలి; తెలుగులో అలాంటి పదం లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please go to the back side.",
      right: "Please go to the back of the line.",
      why: {
        en: "Many people in India say back side, but outside India backside means a person's bottom, so it sounds rude.",
        te: "మన దగ్గర back side అని చాలామంది అంటారు; కానీ బయటి దేశాల్లో backside అంటే పిరుదులు, అందుకే అది మర్యాదగా ఉండదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "A man walks straight to the front of the bank line. What do you say?",
        te: "ఒకాయన నేరుగా బ్యాంకు లైన్ ముందుకు వెళ్ళిపోయారు. మీరు ఏమంటారు?",
      },
      options: ["Excuse me, the line starts there.", "Hey! Go to the back side!", "Excuse me, line is starting there."],
      answer: 0,
      why: {
        en: "Start with Excuse me and name the line with the; shouting makes people angry, not helpful.",
        te: "Excuse me తో మొదలుపెట్టి, the line అని చెప్పండి; అరిస్తే అవతలివాళ్ళకి కోపం వస్తుంది, పని జరగదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "duration",
      sentence: "We ___ waiting here since ten.",
      te: "పది నుంచి మేము ఇక్కడ ఎదురుచూస్తున్నాం.",
      options: ["have been", "are", "has been"],
      answer: 0,
      why: {
        en: "The wait began at ten and still goes on, so use have been, not are.",
        te: "ఎదురుచూపు పదింటికి మొదలై ఇంకా సాగుతోంది, అందుకే are కాదు, have been.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "You stepped in front of someone by mistake. She says: Excuse me, the line starts there. What do you say?",
        te: "పొరపాటున మీరు ఒకావిడ ముందు నిలబడ్డారు. Excuse me, the line starts there. అని ఆవిడ అన్నారు. మీరు ఏమంటారు?",
      },
      options: ["Sorry, I didn't see the line.", "So what? I'm in a hurry.", "Sorry, I don't saw the line."],
      answer: 0,
      why: {
        en: "When the mistake is yours, say sorry and the reason, then go to the back.",
        te: "తప్పు మీదే అయితే సారీ చెప్పి, కారణం చెప్పి, వెనక్కి వెళ్ళండి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "state-ing",
      sentence: "I am knowing the manager, so I'll go first.",
      wrongIndex: 2,
      fix: "I know the manager, so I'll go first.",
      why: {
        en: "Know is a state, not an action, so English never says am knowing.",
        te: "know చేసే పని కాదు, ఒక స్థితి; అందుకే ఇంగ్లీష్‌లో am knowing అనరు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Someone stands in front of you without seeing the line. Tell them kindly where the line starts.",
        te: "లైన్ చూడకుండా ఎవరో మీ ముందు నిలబడ్డారు. లైన్ ఎక్కడ మొదలవుతుందో మర్యాదగా చెప్పండి.",
      },
      expected: ["Excuse me, the line starts there.", "Excuse me, the line starts back there.", "Sorry, the line starts there."],
      options: ["Excuse me, the line starts there.", "Excuse me, line starts there.", "Go back! Can't you see?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "The man says he has only one small question. Tell him you have all been waiting for an hour.",
        te: "తనకి ఒక్క చిన్న ప్రశ్నే ఉందని ఆయన అంటున్నారు. మీరంతా గంట నుంచి ఎదురుచూస్తున్నారని చెప్పండి.",
      },
      expected: ["Sorry, we've been waiting for an hour too.", "We've all been waiting for an hour.", "Sorry, we've been waiting too."],
      options: ["Sorry, we've been waiting for an hour too.", "Sorry, we are waiting since one hour.", "Sorry, we have been waiting since an hour."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Someone pushes in", te: "ఎవరో మధ్యలో దూరారు" },
    scene: {
      en: "You have been in the queue at the bank counter for forty minutes. A man, Rahim, jumps the queue and walks straight to the front.",
      te: "నలభై నిమిషాలుగా మీరు బ్యాంకు కౌంటర్ క్యూలో ఉన్నారు. రహీమ్ గారు అనే ఆయన క్యూలో దూరి నేరుగా ముందుకు వచ్చేశారు.",
    },
    partner: { en: "Rahim (a customer)", te: "రహీమ్ (ఒక కస్టమర్)" },
    voice: "b",
    skills: [
      { id: "speak-up", label: { en: "Speaking up kindly", te: "మర్యాదగా గట్టిగా చెప్పడం" } },
      { id: "polite", label: { en: "Staying calm", te: "ప్రశాంతంగా ఉండటం" } },
    ],
    turns: [
      {
        partner: "Just one minute, please. I only need to deposit this cheque.",
        te: "ఒక్క నిమిషం అండీ. ఈ చెక్ డిపాజిట్ చేయాలంతే.",
        hint: { en: "Stop him politely, and show him where the line starts.", te: "ఆయన్ని మర్యాదగా ఆపి, లైన్ ఎక్కడ మొదలవుతుందో చూపించండి." },
        replies: [
          { say: "Excuse me, sir. The line starts there.", good: true, skill: "speak-up" },
          {
            say: "Hey! Are you blind? Go back!",
            good: false,
            skill: "polite",
            react: { en: "Blind? There's no need to shout like that.", te: "కళ్ళు లేవా అంటారా? అలా అరవాల్సిన అవసరం లేదు." },
          },
        ],
      },
      {
        partner: "But it will take only two minutes!",
        te: "కానీ రెండు నిమిషాలే పడుతుంది!",
        hint: { en: "Say kindly that everyone has waited a long time, and give the time.", te: "అందరూ చాలాసేపట్నుంచి ఎదురుచూస్తున్నారని, ఎంతసేపో మర్యాదగా చెప్పండి." },
        replies: [
          { say: "Sorry, but we've all been waiting for forty minutes.", good: true, skill: "speak-up" },
          { say: "Sorry, that's unfair. We've been waiting for forty minutes.", good: true, skill: "speak-up" },
          { say: "Sorry, but we all are waiting since forty minutes.", good: false, skill: "speak-up", fixIt: "duration" },
        ],
      },
      {
        partner: "Oh, I didn't see the line. Where does it end?",
        te: "ఓ, నేను లైన్ చూడలేదు. అది ఎక్కడ అయిపోతుంది?",
        hint: { en: "Show him the end: behind the lady in the green saree.", te: "చివర ఎక్కడో చూపించండి: ఆకుపచ్చ చీర కట్టుకున్న ఆవిడ వెనకాల." },
        replies: [
          { say: "It ends there, behind the lady in the green saree.", good: true, skill: "speak-up" },
          { say: "It ends there, behind lady in green saree.", good: false, skill: "speak-up", fixIt: "article" },
        ],
      },
      {
        partner: "Sorry about that. I'll wait my turn.",
        te: "సారీ అండీ. నా వంతు వచ్చేదాకా ఆగుతాను.",
        hint: { en: "Thank him for understanding.", te: "అర్థం చేసుకున్నందుకు ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "No problem. Thank you for understanding.", good: true, skill: "polite" },
          { say: "No problem. Thanks for understand.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
