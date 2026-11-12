import type { Lesson } from "../../types";

/** Week 53, Day 5 (CURRICULUM §5): asking politely about a long delay — How much longer will it take? We've been waiting since ten. */
export const day: Lesson = {
  id: "how-much-longer-in-the-queue",
  kind: "lesson",
  title: { en: "How Much Longer?", te: "ఇంకా ఎంతసేపు?" },
  subtitle: "How much longer will it take?",
  summary: {
    en: "Learn to ask politely about a long delay: How much longer will it take? We've been waiting since ten.",
    te: "చాలా ఆలస్యం అయినప్పుడు మర్యాదగా అడగడం నేర్చుకుందాం: How much longer will it take? We've been waiting since ten.",
  },
  seo: {
    title: "Asking About Delays in English for Telugu Speakers",
    description:
      "Ask How much longer will it take? and Is there a separate counter for senior citizens? Simple lessons for Telugu speakers on long waits.",
  },
  pattern: [
    { text: "How much longer", role: "when" },
    { text: "will it", role: "who" },
    { text: "take?", role: "action" },
  ],
  core: [
    { en: "How much longer will it take?", te: "ఇంకా ఎంతసేపు పడుతుంది?", extra: ["long"] },
    { en: "We've been waiting since ten o'clock.", te: "మేము పది గంటల నుంచి ఎదురుచూస్తున్నాం.", extra: ["from"] },
    { en: "Is there a separate counter for senior citizens?", te: "సీనియర్ సిటిజన్స్‌కి వేరే కౌంటర్ ఉందా?", extra: ["Are"] },
    { en: "When will the system be back?", te: "సిస్టమ్ మళ్ళీ ఎప్పుడు పనిచేస్తుంది?", extra: ["is"] },
    { en: "She has been talking on the phone for twenty minutes.", te: "ఆవిడ ఇరవై నిమిషాలుగా ఫోన్‌లో మాట్లాడుతున్నారు.", extra: ["since"] },
    { en: "I understand, but we've been standing for two hours.", te: "అర్థమైంది అండీ, కానీ మేము రెండు గంటలుగా నిలబడి ఉన్నాం.", extra: ["hour"] },
    { en: "Can I sit somewhere while I wait?", te: "ఎదురుచూసేటప్పుడు నేను ఎక్కడైనా కూర్చోవచ్చా?", extra: ["waiting"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say these two lines aloud three times, calmly: How much longer will it take? We've been waiting since ten.",
    te: "ఈ రెండు మాటలు ప్రశాంతంగా మూడుసార్లు గట్టిగా చెప్పండి: How much longer will it take? We've been waiting since ten.",
  },
  words: [
    { en: "how much longer", te: "ఇంకా ఎంతసేపు" },
    { en: "separate counter", te: "వేరే కౌంటర్, ప్రత్యేక కౌంటర్" },
    { en: "priority", te: "ముందు అవకాశం, ప్రాధాన్యం" },
    { en: "any minute now", te: "ఏ నిమిషంలోనైనా, ఇంకాసేపట్లో" },
    { en: "patiently", te: "ఓపికగా" },
  ],
  grammar: ["present-perfect-continuous", "politeness-softening", "will"],
  topics: ["offices", "money", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking about a delay", te: "ఆలస్యం గురించి అడగడం" },
      body: {
        en: "Ask How much longer will it take? Then say how long you have waited: We've been waiting since ten. Stay calm and polite.",
        te: "How much longer will it take? అని అడగండి. తర్వాత ఎంతసేపట్నుంచి ఎదురుచూస్తున్నారో చెప్పండి: We've been waiting since ten. ప్రశాంతంగా, మర్యాదగా ఉండండి.",
      },
      bridge: {
        te: ["ఇంకా ఎంతసేపు", "పడుతుంది?"],
        en: [
          { text: "How much longer", role: "when" },
          { text: "will it", role: "who" },
          { text: "take?", role: "action" },
        ],
      },
      examples: [
        { en: "How much longer will it take?", te: "ఇంకా ఎంతసేపు పడుతుంది?" },
        { en: "We've been waiting since ten o'clock.", te: "మేము పది గంటల నుంచి ఎదురుచూస్తున్నాం." },
        { en: "Is there a separate counter for senior citizens?", te: "సీనియర్ సిటిజన్స్‌కి వేరే కౌంటర్ ఉందా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Polite ways to ask again", te: "మర్యాదగా మళ్ళీ అడిగే మాటలు" },
      items: [
        {
          form: "How much longer …?",
          useFor: { en: "Ask how much more time it needs.", te: "ఇంకా ఎంత టైమ్ పడుతుందో అడగడానికి." },
          example: { en: "How much longer is the wait?", te: "ఇంకా ఎంతసేపు ఎదురుచూడాలి?" },
        },
        {
          form: "I understand, but we've been …",
          useFor: { en: "Say how long, calmly, without anger.", te: "కోపం లేకుండా, ప్రశాంతంగా ఎంతసేపో చెప్పడానికి." },
          example: { en: "I understand, but we've been standing for two hours.", te: "అర్థమైంది అండీ, కానీ మేము రెండు గంటలుగా నిలబడి ఉన్నాం." },
        },
        {
          form: "Is there a … for senior citizens?",
          useFor: { en: "Ask about a special line or a priority counter.", te: "ప్రత్యేక లైన్ లేదా priority కౌంటర్ ఉందేమో అడగడానికి." },
          example: { en: "Is there a priority line for senior citizens?", te: "సీనియర్ సిటిజన్స్‌కి ప్రత్యేక లైన్ ఉందా?" },
        },
        {
          form: "Can I sit …?",
          useFor: { en: "Ask for a seat when you are tired.", te: "అలసిపోయినప్పుడు కూర్చునే చోటు అడగడానికి." },
          example: { en: "Can I sit somewhere while I wait?", te: "ఎదురుచూసేటప్పుడు నేను ఎక్కడైనా కూర్చోవచ్చా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please do the needful quickly.",
      right: "Could you please look into it soon?",
      why: {
        en: "Do the needful sounds old and unclear outside India; ask for the exact help you need.",
        te: "Do the needful పాత పద్ధతి మాట, ఇండియా బయట అర్థం కాదు; మీకు కావాల్సిన సహాయాన్ని సూటిగా అడగండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "Why counter number three closed?",
      right: "Why is counter number three closed?",
      why: {
        en: "A why question needs is before the thing; Telugu ఎందుకు మూసి ఉంది has no such word.",
        te: "why ప్రశ్నలో ఆ వస్తువు కంటే ముందు is కావాలి; తెలుగు 'ఎందుకు మూసి ఉంది' లో అలాంటి పదం లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "You have waited a long time at the electricity office. Ask the clerk politely about the time left.",
        te: "కరెంట్ ఆఫీసులో చాలాసేపట్నుంచి ఎదురుచూస్తున్నారు. ఇంకా ఎంత టైమ్ పడుతుందో క్లర్క్ గారిని మర్యాదగా అడగండి.",
      },
      options: ["How much longer will it take, please?", "How much longer it will take, please?", "Why you are so slow?"],
      answer: 0,
      why: {
        en: "In the question, will comes before it; please and a calm voice keep it polite.",
        te: "ప్రశ్నలో will, it కంటే ముందు వస్తుంది; please, ప్రశాంతమైన గొంతు మర్యాదగా ఉంచుతాయి.",
      },
    },
    {
      id: "p2",
      type: "passage",
      kind: "notice",
      heading: "Electricity Office, Kurnool Town",
      lines: [
        "Dear customers,",
        "Our computer system has been down since 10 am today.",
        "Our engineers are working on it now.",
        "You can pay your bills again after 1 pm.",
        "Senior citizens and patients can use Counter 4.",
        "Please keep your consumer number ready.",
        "There is no late fee this week.",
        "We are sorry for the trouble. Thank you for waiting patiently.",
        "Assistant Engineer",
      ],
      questions: [
        {
          prompt: { en: "When did the computer system stop working?", te: "కంప్యూటర్ సిస్టమ్ ఎప్పుడు పనిచేయడం ఆగిపోయింది?" },
          options: ["At 10 am today", "At 1 pm today", "Yesterday"],
          answer: 0,
          why: {
            en: "The second line gives the start time with since, for a problem still going on.",
            te: "రెండో లైన్‌లో since తో మొదలైన టైమ్ ఉంది; సమస్య ఇంకా కొనసాగుతోంది.",
          },
        },
        {
          prompt: { en: "Who can use Counter 4?", te: "Counter 4 ని ఎవరు వాడొచ్చు?" },
          options: ["Senior citizens and patients", "Only new customers", "The engineers"],
          answer: 0,
          why: {
            en: "The fifth line keeps that counter for older people and people who are unwell.",
            te: "ఐదో లైన్ ప్రకారం ఆ కౌంటర్ పెద్దవాళ్ళకి, ఒంట్లో బాగాలేనివాళ్ళకి.",
          },
        },
        {
          prompt: { en: "When can you pay your bill again?", te: "బిల్లు మళ్ళీ ఎప్పుడు కట్టొచ్చు?" },
          options: ["After 1 pm", "Before 10 am", "Next week"],
          answer: 0,
          why: {
            en: "The fourth line says the counters take bills again in the afternoon.",
            te: "నాలుగో లైన్ ప్రకారం మధ్యాహ్నం నుంచి మళ్ళీ బిల్లులు తీసుకుంటారు.",
          },
        },
      ],
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "We've been standing here for two ___.",
      te: "మేము రెండు గంటలుగా ఇక్కడ నిలబడి ఉన్నాం.",
      options: ["hours", "hour", "o'clock"],
      answer: 0,
      why: {
        en: "After two, hour needs s; o'clock is for a time on the clock, not a length of time.",
        te: "two తర్వాత hour కి s కావాలి; o'clock గడియారంలో టైమ్‌కి, ఎంతసేపు అనేదానికి కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "indian-english",
      sentence: "The officer is out of station today.",
      wrongIndex: 4,
      fix: "The officer is out of town today.",
      why: {
        en: "Out of station is old Indian English; people everywhere understand out of town.",
        te: "out of station పాత ఇండియన్ ఇంగ్లీష్; out of town అంటే అందరికీ అర్థమవుతుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "The clerk says: Please wait. Tell her calmly that you came at ten and are still waiting.",
        te: "Please wait అని క్లర్క్ గారు అన్నారు. మీరు పదింటికి వచ్చారని, ఇంకా ఎదురుచూస్తున్నారని ప్రశాంతంగా చెప్పండి.",
      },
      expected: ["Sorry, but we've been waiting since ten.", "I understand, but we've been waiting since ten.", "We have been waiting since ten o'clock."],
      options: ["Sorry, but we've been waiting since ten.", "Sorry, but we are waiting since ten.", "Always wait, wait! You people never work!"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the clerk if there is a separate counter for senior citizens.",
        te: "సీనియర్ సిటిజన్స్‌కి వేరే కౌంటర్ ఉందా అని క్లర్క్ గారిని అడగండి.",
      },
      expected: ["Is there a separate counter for senior citizens?", "Is there a counter for senior citizens?", "Do you have a counter for senior citizens?"],
      options: ["Is there a separate counter for senior citizens?", "There is a separate counter for senior citizens?", "Is there separate counter for senior citizens?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A long delay at the electricity office", te: "కరెంట్ ఆఫీసులో చాలా ఆలస్యం" },
    scene: {
      en: "You have come to pay your electricity bill. You reach the counter after a long wait. Ayesha is the clerk.",
      te: "కరెంట్ బిల్లు కట్టడానికి వచ్చారు. చాలాసేపు ఎదురుచూశాక కౌంటర్ దగ్గరికి వచ్చారు. అక్కడ క్లర్క్ ఆయేషా గారు.",
    },
    partner: { en: "Ayesha (the clerk)", te: "ఆయేషా (క్లర్క్)" },
    skills: [
      { id: "delay", label: { en: "Asking about a delay", te: "ఆలస్యం గురించి అడగడం" } },
      { id: "polite", label: { en: "Staying calm", te: "ప్రశాంతంగా ఉండటం" } },
    ],
    turns: [
      {
        partner: "Next, please. Sorry, the system is still down.",
        te: "తర్వాత ఎవరండీ. సారీ, సిస్టమ్ ఇంకా పనిచేయట్లేదు.",
        hint: { en: "Greet her, and ask about the time still needed.", te: "పలకరించి, ఇంకా ఎంత టైమ్ పడుతుందో అడగండి." },
        replies: [
          { say: "Good morning. How much longer will it take?", good: true, skill: "delay" },
          { say: "Good morning. How much longer it will take?", good: false, skill: "delay", fixIt: "question" },
        ],
      },
      {
        partner: "I'm not sure. Maybe one more hour.",
        te: "కచ్చితంగా తెలియదండీ. బహుశా ఇంకో గంట.",
        hint: { en: "Stay calm, and tell her how long you have waited: you came at ten.", te: "ప్రశాంతంగా, ఎంతసేపట్నుంచి ఎదురుచూస్తున్నారో చెప్పండి: మీరు పదింటికి వచ్చారు." },
        replies: [
          { say: "I understand, but we've been waiting since ten.", good: true, skill: "delay" },
          { say: "I understand, but we are waiting since ten.", good: false, skill: "delay", fixIt: "duration" },
          {
            say: "One more hour? You people never do any work!",
            good: false,
            skill: "polite",
            react: { en: "Please, the system is down. It's not in my hands.", te: "సిస్టమ్ పనిచేయట్లేదండీ. అది నా చేతుల్లో లేదు." },
          },
        ],
      },
      {
        partner: "I'm sorry. Counter 4 is for senior citizens. It's working now.",
        te: "సారీ అండీ. Counter 4 సీనియర్ సిటిజన్స్‌ది. అది ఇప్పుడు పనిచేస్తోంది.",
        hint: { en: "Thank her, and ask if you can pay your bill there.", te: "థాంక్స్ చెప్పి, అక్కడ బిల్లు కట్టొచ్చా అని అడగండి." },
        replies: [
          { say: "Thank you. Can I pay my bill there?", good: true, skill: "delay" },
          { say: "Thank you. I can pay my bill there?", good: false, skill: "delay", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, of course. Keep your consumer number ready. They'll call you any minute now.",
        te: "తప్పకుండా. మీ consumer number సిద్ధంగా ఉంచుకోండి. ఇంకాసేపట్లో మిమ్మల్ని పిలుస్తారు.",
        hint: { en: "Thank her for her help, and say goodbye kindly.", te: "సహాయం చేసినందుకు థాంక్స్ చెప్పి, మర్యాదగా బై చెప్పండి." },
        replies: [
          { say: "Thank you for your help. Have a good day.", good: true, skill: "polite" },
          { say: "Thanks for help. Have a good day.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
