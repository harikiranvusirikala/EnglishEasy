import type { Lesson } from "../../types";

/** Week 60, Day 3 (CURRICULUM §5): FD words — deposit, term, mature, nominee, renew. I'd like to open a fixed deposit for one year. */
export const day: Lesson = {
  id: "opening-a-fixed-deposit",
  kind: "lesson",
  title: { en: "Opening a Fixed Deposit", te: "FD తెరవడం" },
  subtitle: "term, mature, nominee, renew",
  summary: {
    en: "Learn the words for a fixed deposit at the bank: I'd like to open a fixed deposit for one year. Who is the nominee? Can I renew it online?",
    te: "బ్యాంకులో fixed deposit కి కావలసిన మాటలు నేర్చుకుందాం: I'd like to open a fixed deposit for one year. Who is the nominee? Can I renew it online?",
  },
  seo: {
    title: "Opening a Fixed Deposit in English for Telugu Speakers",
    description:
      "Say I'd like to open a fixed deposit for one year, and ask Who is the nominee? Simple bank lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I'd", role: "who" },
    { text: "like to open", role: "action" },
    { text: "a fixed deposit", role: "what" },
    { text: "for one year", role: "when" },
  ],
  core: [
    { en: "I'd like to open a fixed deposit for one year.", te: "ఒక సంవత్సరానికి fixed deposit తెరవాలనుకుంటున్నాను.", extra: ["from"] },
    { en: "Who is the nominee for this deposit?", te: "ఈ deposit కి nominee ఎవరు?", extra: ["are"] },
    { en: "Can I renew it online?", te: "దాన్ని ఆన్‌లైన్‌లో renew చేయొచ్చా?", extra: ["in"] },
    { en: "When does the deposit mature?", te: "deposit ఎప్పుడు mature అవుతుంది?", extra: ["matures"] },
    { en: "This deposit will mature in March next year.", te: "ఈ deposit వచ్చే సంవత్సరం మార్చిలో mature అవుతుంది.", extra: ["on"] },
    { en: "My sister will be the nominee.", te: "మా అక్క nominee గా ఉంటారు.", extra: ["a"] },
    { en: "Can I take the money out before it matures?", te: "mature అవ్వకముందే డబ్బు తీసుకోవచ్చా?", extra: ["will"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at a bank notice or a passbook, and say one sentence with mature, renew or nominee.",
    te: "బ్యాంక్ notice గానీ passbook గానీ చూసి, mature, renew లేదా nominee తో ఒక వాక్యం చెప్పండి.",
  },
  words: [
    { en: "fixed deposit", te: "ఫిక్స్‌డ్ డిపాజిట్, FD" },
    { en: "term", te: "గడువు, కాలం" },
    { en: "mature", te: "గడువు తీరడం, mature అవ్వడం" },
    { en: "maturity amount", te: "గడువు తీరాక చేతికి వచ్చే మొత్తం డబ్బు" },
    { en: "renew", te: "మళ్ళీ కొనసాగించడం, renew చేయడం" },
  ],
  grammar: ["would-like", "question-words", "prepositions"],
  topics: ["bank", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Words for an FD", te: "FD మాటలు" },
      body: {
        en: "A fixed deposit keeps your money in the bank for a fixed term. When the term ends, it matures. The nominee is the person you choose to get the money, if needed.",
        te: "Fixed deposit అంటే డబ్బుని ఒక గడువు వరకు బ్యాంకులో ఉంచడం; ఆ గడువే term. term అయిపోతే mature అవుతుంది. అవసరమైతే డబ్బు అందుకునే వ్యక్తి nominee.",
      },
      bridge: {
        te: ["ఒక సంవత్సరానికి", "fixed deposit", "తెరవాలనుకుంటున్నాను"],
        en: [
          { text: "I'd", role: "who" },
          { text: "like to open", role: "action" },
          { text: "a fixed deposit", role: "what" },
          { text: "for one year", role: "when" },
        ],
      },
      examples: [
        { en: "I'd like to open a fixed deposit for one year.", te: "ఒక సంవత్సరానికి fixed deposit తెరవాలనుకుంటున్నాను." },
        { en: "Who is the nominee for this deposit?", te: "ఈ deposit కి nominee ఎవరు?" },
        { en: "Can I renew it online?", te: "దాన్ని ఆన్‌లైన్‌లో renew చేయొచ్చా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "FD words in use", te: "FD మాటల వాడకం" },
      items: [
        {
          form: "term",
          useFor: { en: "How long the money stays in the FD.", te: "డబ్బు FD లో ఎంత కాలం ఉంటుందో." },
          example: { en: "The term is two years.", te: "గడువు రెండేళ్ళు." },
        },
        {
          form: "mature",
          useFor: { en: "The term ends, and you can take the money.", te: "గడువు తీరుతుంది, డబ్బు తీసుకోవచ్చు." },
          example: { en: "When it matures, the maturity amount comes to your account.", te: "mature అయ్యాక, maturity amount మీ అకౌంట్‌లోకి వస్తుంది." },
        },
        {
          form: "renew",
          useFor: { en: "Keep the FD for one more term.", te: "FD ని ఇంకో గడువుకి కొనసాగించడం." },
          example: { en: "I'd like to renew it for one more year.", te: "దాన్ని ఇంకో సంవత్సరానికి renew చేయాలనుకుంటున్నాను." },
        },
        {
          form: "nominee",
          useFor: { en: "The person you choose to get the money, if needed.", te: "అవసరమైతే డబ్బు అందుకోవడానికి మీరు ఎంచుకునే వ్యక్తి." },
          example: { en: "My sister will be the nominee.", te: "మా అక్క nominee గా ఉంటారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Can I renew it in online?",
      right: "Can I renew it online?",
      why: {
        en: "Online needs no in before it; Telugu ఆన్‌లైన్‌లో adds -లో, but English does not.",
        te: "online ముందు in రాదు; తెలుగులో 'ఆన్‌లైన్‌లో' అని -లో వస్తుంది, ఇంగ్లీష్‌లో అది అక్కర్లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "When the deposit matures?",
      right: "When does the deposit mature?",
      why: {
        en: "A when question needs does before the deposit, and then mature has no s.",
        te: "when ప్రశ్నలో the deposit ముందు does కావాలి; అప్పుడు mature కి s రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "The officer asks about the nominee. Your sister Rani will be the nominee. What do you say?",
        te: "nominee గురించి ఆఫీసర్ అడుగుతున్నారు. మీ అక్క రాణి గారు nominee గా ఉంటారు. ఏమంటారు?",
      },
      options: ["My sister Rani will be the nominee.", "My sister Rani will the nominee.", "My sister Rani she will be the nominee."],
      answer: 0,
      why: {
        en: "After will, English needs be before the nominee, and the name needs no extra she.",
        te: "will తర్వాత be తప్పకుండా కావాలి; పేరు చెప్పాక మళ్ళీ she అక్కర్లేదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "I'd like to open a fixed deposit ___ one year.",
      te: "ఒక సంవత్సరానికి fixed deposit తెరవాలనుకుంటున్నాను.",
      options: ["for", "from", "since"],
      answer: 0,
      why: {
        en: "For tells how long; from and since need a starting point, like March.",
        te: "ఎంత కాలమో చెప్పడానికి for; from, since కి March లాంటి మొదలు కావాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "The officer tells you when your FD ends. Which sentence is right?",
        te: "మీ FD గడువు ఎప్పుడు తీరుతుందో ఆఫీసర్ చెప్తున్నారు. ఏ వాక్యం సరైనది?",
      },
      options: ["It matures in March next year.", "It mature in March next year.", "It will matures in March next year."],
      answer: 0,
      why: {
        en: "With it, mature takes s, like with he or she; after will, it never does.",
        te: "it తో mature కి s వస్తుంది, he, she లాగా; will తర్వాత మాత్రం ఎప్పుడూ రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Can I take the money out before it will mature?",
      wrongIndex: 8,
      fix: "Can I take the money out before it matures?",
      why: {
        en: "After before, use the present, not will, even for the future.",
        te: "before తర్వాత will రాదు; భవిష్యత్తు గురించైనా present వాడాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the bank officer when your deposit will mature.",
        te: "మీ deposit ఎప్పుడు mature అవుతుందో బ్యాంక్ ఆఫీసర్‌ని అడగండి.",
      },
      expected: ["When will my deposit mature?", "When does my deposit mature?", "When does it mature?", "When will it mature?"],
      options: ["When will my deposit mature?", "When my deposit will mature?", "When will my deposit matures?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "You want to renew your FD from home next year. Ask the clerk if you can.",
        te: "వచ్చే సంవత్సరం మీ FD ని ఇంటి నుంచే renew చేయాలనుకుంటున్నారు. చేయొచ్చా అని క్లర్క్‌ని అడగండి.",
      },
      expected: ["Can I renew it online?", "Can I renew my FD online?", "Can I renew it from home?"],
      options: ["Can I renew it online?", "Can I renew it in online?", "Can I renewal it online?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the bank, opening an FD", te: "బ్యాంకులో FD తెరవడం" },
    scene: {
      en: "Imagine you have some savings in your account. You want to put part of it in an FD. Ayesha, the officer, helps you.",
      te: "మీ అకౌంట్‌లో కొంత పొదుపు డబ్బు ఉందనుకోండి. అందులో కొంత FD లో వేయాలనుకుంటున్నారు. ఆఫీసర్ ఆయేషా గారు సాయం చేస్తున్నారు.",
    },
    partner: { en: "Ayesha (the bank officer)", te: "ఆయేషా (బ్యాంక్ ఆఫీసర్)" },
    skills: [
      { id: "fd", label: { en: "FD words", te: "FD మాటలు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. Please have a seat. What can I do for you?",
        te: "గుడ్ మార్నింగ్. కూర్చోండి. చెప్పండి, మీకు ఏం కావాలి?",
        hint: { en: "Say you would like to open an FD for one year.", te: "ఒక సంవత్సరానికి FD తెరవాలనుకుంటున్నానని చెప్పండి." },
        replies: [
          { say: "I'd like to open a fixed deposit for one year.", good: true, skill: "fd" },
          { say: "I'd like to open an FD for one year, please.", good: true, skill: "fd" },
          { say: "I'd like to open a fixed deposit from one year.", good: false, skill: "fd", fixIt: "preposition" },
        ],
      },
      {
        partner: "Sure. How much would you like to deposit?",
        te: "తప్పకుండా. ఎంత deposit చేయాలనుకుంటున్నారు?",
        hint: { en: "Tell her the amount: 50,000 rupees.", te: "మొత్తం చెప్పండి: 50,000 రూపాయలు." },
        replies: [
          { say: "Fifty thousand rupees, please.", good: true, skill: "fd" },
          { say: "Fifty thousands rupees, please.", good: false, skill: "fd", fixIt: "plural" },
        ],
      },
      {
        partner: "Fine. And who will be the nominee?",
        te: "సరే. nominee ఎవరు?",
        hint: { en: "Name your brother Suresh as the nominee.", te: "మీ అన్నయ్య సురేష్ గారిని nominee గా చెప్పండి." },
        replies: [
          { say: "My brother Suresh will be the nominee.", good: true, skill: "fd" },
          {
            say: "Why do you need to know that?",
            good: false,
            skill: "polite",
            react: {
              en: "It's for your safety. The nominee gets the money if needed.",
              te: "అది మీ భద్రత కోసమే. అవసరమైతే ఆ డబ్బు nominee కి వస్తుంది.",
            },
          },
        ],
      },
      {
        partner: "Thank you. When it matures, it renews by itself. Is that okay?",
        te: "థాంక్స్. mature అయ్యాక అదే renew అవుతుంది. పర్లేదా?",
        hint: { en: "Say yes, and ask if you can also renew it on the internet.", te: "సరే అని, internet లో కూడా renew చేయొచ్చా అని అడగండి." },
        replies: [
          { say: "Yes, that's fine. Can I also renew it online?", good: true, skill: "fd" },
          { say: "Yes, that's fine. Can I also renew it in online?", good: false, skill: "fd", fixIt: "preposition" },
        ],
      },
      {
        partner: "Yes, on the bank's app. Here is your receipt.",
        te: "చేయొచ్చు, బ్యాంక్ app లో. ఇదిగోండి మీ రసీదు.",
        hint: { en: "Thank her for her help, and say goodbye.", te: "సాయం చేసినందుకు థాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you so much for your help. Have a nice day!", good: true, skill: "polite" },
          { say: "Okay. Give it.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
