import type { Lesson } from "../../types";

/** Week 21, Day 4 (CURRICULUM §4): Never + action — Never share your OTP; the bank never asks for your PIN; fake KYC calls. */
export const day: Lesson = {
  id: "never-share-your-otp",
  kind: "lesson",
  title: { en: "Never Share Your OTP", te: "OTP ఎవరికీ చెప్పకండి" },
  subtitle: "Never + action",
  summary: {
    en: "Learn to warn and to refuse: Never share your OTP. The bank never asks for your PIN.",
    te: "హెచ్చరించడం, లేదు అనడం నేర్చుకుందాం: Never share your OTP. The bank never asks for your PIN.",
  },
  seo: {
    title: "Never Share Your OTP: Bank Safety in English for Telugu Speakers",
    description:
      "Say Never share your OTP and The bank never asks for your PIN, and refuse fake KYC calls. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "Never", role: "when" },
    { text: "share", role: "action" },
    { text: "your OTP", role: "what" },
  ],
  core: [
    { en: "Never share your OTP.", te: "మీ OTP ఎవరికీ చెప్పకండి.", extra: ["sharing"] },
    { en: "The bank never asks for your PIN.", te: "బ్యాంక్ ఎప్పుడూ మీ PIN అడగదు.", extra: ["ask"] },
    { en: "I don't share my OTP with anyone.", te: "నేను నా OTP ఎవరికీ చెప్పను.", extra: ["to"] },
    { en: "Sorry, I don't give details on the phone.", te: "Sorry అండీ, నేను ఫోన్‌లో వివరాలు చెప్పను.", extra: ["in"] },
    { en: "Please update your KYC today.", te: "దయచేసి ఈ రోజే మీ KYC అప్‌డేట్ చేయండి.", extra: ["updating"] },
    { en: "You must never tell anyone your PIN.", te: "మీ PIN ఎవరికీ ఎప్పుడూ చెప్పకూడదు.", extra: ["to"] },
    { en: "I will go to the branch myself.", te: "నేనే బ్రాంచ్‌కి వెళ్తాను.", extra: ["at"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find an OTP message on your phone and read the line Do not share it.",
    te: "మీ ఫోన్‌లో ఒక OTP మెసేజ్ వెతికి, Do not share it అనే లైన్ చదవండి.",
  },
  words: [
    { en: "OTP", te: "OTP, ఒక్కసారి వాడే రహస్య నంబర్" },
    { en: "share", te: "ఇతరులకి చెప్పడం, పంచుకోవడం" },
    { en: "KYC", te: "KYC, మీ వివరాల తనిఖీ" },
    { en: "fake", te: "నకిలీ, ఫేక్" },
    { en: "branch", te: "బ్యాంక్ బ్రాంచ్, శాఖ" },
  ],
  grammar: ["imperatives", "adverbs-frequency", "should-must-have-to"],
  topics: ["bank", "phone", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Never + action", te: "Never + verb వాడకం" },
      body: {
        en: "To warn strongly, start with Never and the action: Never share your OTP. It means not at any time, not to anyone. Remember: the bank never asks for your OTP or PIN.",
        te: "గట్టిగా హెచ్చరించాలంటే Never తో మొదలుపెట్టండి: Never share your OTP. అంటే ఎప్పుడూ, ఎవరికీ చెప్పకూడదు. బ్యాంక్ ఎప్పుడూ OTP, PIN అడగదు.",
      },
      bridge: {
        te: ["మీ OTP", "ఎవరికీ", "చెప్పకండి"],
        en: [
          { text: "Never", role: "when" },
          { text: "share", role: "action" },
          { text: "your OTP", role: "what" },
        ],
      },
      examples: [
        { en: "Never share your OTP.", te: "మీ OTP ఎవరికీ చెప్పకండి." },
        { en: "The bank never asks for your PIN.", te: "బ్యాంక్ ఎప్పుడూ మీ PIN అడగదు." },
        { en: "You must never tell anyone your PIN.", te: "మీ PIN ఎవరికీ ఎప్పుడూ చెప్పకూడదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Saying no to a fake call", te: "ఫేక్ కాల్‌కి లేదు అనడం" },
      items: [
        {
          form: "Never …",
          useFor: { en: "A strong warning to anyone.", te: "ఎవరికైనా గట్టి హెచ్చరిక." },
          example: { en: "Never share your OTP.", te: "మీ OTP ఎవరికీ చెప్పకండి." },
        },
        {
          form: "The bank never asks …",
          useFor: { en: "What the bank does not do. Asks has s.", te: "బ్యాంక్ ఎప్పుడూ చేయనిది. asks కి s ఉంటుంది." },
          example: { en: "The bank never asks for your PIN.", te: "బ్యాంక్ ఎప్పుడూ మీ PIN అడగదు." },
        },
        {
          form: "I don't …",
          useFor: { en: "Saying no to a caller, politely.", te: "ఫోన్ చేసినవాళ్ళకి మర్యాదగా లేదు అనడం." },
          example: { en: "Sorry, I don't give details on the phone.", te: "Sorry అండీ, నేను ఫోన్‌లో వివరాలు చెప్పను." },
        },
        {
          form: "I will go …",
          useFor: { en: "Saying you will check at the bank yourself.", te: "మీరే బ్యాంక్‌కి వెళ్ళి చూసుకుంటానని చెప్పడం." },
          example: { en: "I will go to the branch myself.", te: "నేనే బ్రాంచ్‌కి వెళ్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "The bank never ask for your PIN.",
      right: "The bank never asks for your PIN.",
      why: {
        en: "The bank is one, like he or she, so asks takes s, even after never.",
        te: "బ్యాంక్ ఒక్కటే, he లేదా she లాగా; never ఉన్నా asks కి s ఉంటుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Don't never share your OTP.",
      right: "Never share your OTP.",
      why: {
        en: "Never already has the no inside, so do not add don't.",
        te: "never లోనే 'వద్దు' ఉంది; don't చేర్చకండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "A stranger calls and asks for your OTP. Choose the right reply.",
        te: "తెలియని వాళ్ళు ఫోన్ చేసి మీ OTP అడుగుతున్నారు. సరైన జవాబు ఎంచుకోండి.",
      },
      options: ["Sorry, I don't know you.", "Sorry, I am not knowing you.", "Okay, I will read the OTP."],
      answer: 0,
      why: {
        en: "Know never takes -ing, and an OTP is never shared.",
        te: "know కి -ing రాదు; OTP ఎవరికీ చెప్పకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The bank never ___ for your OTP.",
      te: "బ్యాంక్ ఎప్పుడూ మీ OTP అడగదు.",
      options: ["asks", "ask", "asking"],
      answer: 0,
      why: {
        en: "The bank is one, like he or she, so the verb takes s.",
        te: "బ్యాంక్ ఒక్కటే, he లేదా she లాగా; అందుకే verb కి s.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "AX-MYBANK",
      lines: ["Your OTP is 4821 for a payment of ₹49,999.", "Do not share it with anyone.", "Bank staff never ask for your OTP."],
      prompt: { en: "A caller asks you for this number. What do you do?", te: "ఫోన్ చేసినవాళ్ళు ఈ నంబర్ అడుగుతున్నారు. మీరు ఏం చేయాలి?" },
      options: ["Don't tell them. Hang up.", "Tell them the number.", "Send it to them on WhatsApp."],
      answer: 0,
      why: {
        en: "The message says do not share it, not even with bank staff.",
        te: "ఎవరికీ చెప్పకూడదని మెసేజ్‌లోనే ఉంది, బ్యాంక్ వాళ్ళకి కూడా.",
      },
      say: "Do not share it with anyone.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Please don't share your OTP to anyone.",
      wrongIndex: 5,
      fix: "Please don't share your OTP with anyone.",
      why: {
        en: "Telugu says ఎవరికీ, but in English you share with someone.",
        te: "తెలుగులో 'ఎవరికీ' అంటాం, కానీ ఇంగ్లీష్‌లో share తో with వాడాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "A caller says he is from your bank and asks for your OTP. Refuse politely.",
        te: "ఒకాయన మీ బ్యాంక్ నుంచి అని చెప్పి మీ OTP అడుగుతున్నారు. మర్యాదగా లేదు అనండి.",
      },
      expected: ["Sorry, I never share my OTP.", "Sorry, I don't share my OTP.", "Sorry, I don't share my OTP with anyone."],
      options: ["Sorry, I never share my OTP.", "Sorry, I never shares my OTP.", "Okay. Wait, I will read it."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A caller says your KYC is pending. Say you will go to the branch yourself.",
        te: "మీ KYC పెండింగ్ అని ఒకరు ఫోన్ చేశారు. మీరే బ్రాంచ్‌కి వెళ్తానని చెప్పండి.",
      },
      expected: ["I'll go to the branch myself.", "I will go to the branch myself."],
      options: ["I'll go to the branch myself.", "I'll go at the branch myself.", "I'll going to the branch myself."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A fake KYC call", te: "ఫేక్ KYC కాల్" },
    scene: {
      en: "Your phone rings. A man says he is from your bank. He wants your OTP.",
      te: "మీ ఫోన్ మోగుతోంది. ఒకాయన మీ బ్యాంక్ నుంచి అని చెప్తున్నారు. ఆయనకి మీ OTP కావాలి.",
    },
    partner: { en: "A caller (says he is from the bank)", te: "ఫోన్ చేసినాయన (బ్యాంక్ నుంచి అంటున్నారు)" },
    voice: "b",
    skills: [
      { id: "refuse", label: { en: "Refusing safely", te: "జాగ్రత్తగా లేదు అనడం" } },
      { id: "polite", label: { en: "Staying polite", te: "మర్యాదగా ఉండటం" } },
    ],
    turns: [
      {
        partner: "Hello, I am calling from your bank.",
        te: "హలో, నేను మీ బ్యాంక్ నుంచి ఫోన్ చేస్తున్నాను.",
        hint: { en: "Ask politely who is speaking.", te: "ఎవరు మాట్లాడుతున్నారో మర్యాదగా అడగండి." },
        replies: [
          { say: "Sorry, who is speaking, please?", good: true, skill: "polite" },
          { say: "Who you are?", good: false, skill: "polite", fixIt: "question" },
        ],
      },
      {
        partner: "Your KYC is not updated. Your account will close today.",
        te: "మీ KYC అప్‌డేట్ కాలేదు. ఈ రోజు మీ అకౌంట్ క్లోజ్ అవుతుంది.",
        hint: { en: "Say you will visit the bank yourself.", te: "మీరే బ్యాంక్‌కి వెళ్తానని చెప్పండి." },
        replies: [
          { say: "I will go to the branch myself.", good: true, skill: "refuse" },
          { say: "I'll go to the branch myself.", good: true, skill: "refuse" },
          {
            say: "Oh no! Please help me, sir!",
            good: false,
            skill: "refuse",
            react: { en: "Yes, yes. Just tell me the OTP.", te: "అలాగే, అలాగే. OTP చెప్పండి చాలు." },
          },
        ],
      },
      {
        partner: "No need. I sent an OTP. Tell me the number.",
        te: "అవసరం లేదు. OTP పంపాను. ఆ నంబర్ చెప్పండి.",
        hint: { en: "Refuse. Say what the bank never does.", te: "లేదు అనండి. బ్యాంక్ ఎప్పుడూ ఏం చేయదో చెప్పండి." },
        replies: [
          { say: "Sorry. My bank never asks for my OTP.", good: true, skill: "refuse" },
          { say: "Sorry. My bank never ask for my OTP.", good: false, skill: "refuse", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "It is urgent! You will lose all your money!",
        te: "చాలా అర్జెంట్! మీ డబ్బంతా పోతుంది!",
        hint: { en: "Stay polite, and end the call.", te: "మర్యాదగానే ఉండి, కాల్ ముగించండి." },
        replies: [
          { say: "No, thank you. I am ending this call now.", good: true, skill: "polite" },
          {
            say: "Stupid fellow! Don't call me again!",
            good: false,
            skill: "polite",
            react: { en: "Please don't shout. I am only helping you.", te: "అరవకండి. నేను మీకు సహాయం చేస్తున్నాను అంతే." },
          },
        ],
      },
    ],
  },
};
