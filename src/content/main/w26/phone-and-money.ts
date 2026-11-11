import type { Lesson } from "../../types";

/** Week 26, Day 3 (CURRICULUM §4): Checkpoint review of phone calls, video calls, UPI and OTP safety (Weeks 19–21). */
export const day: Lesson = {
  id: "phone-and-money",
  kind: "lesson",
  title: { en: "Phone, Apps and Money", te: "ఫోన్, యాప్‌లు, డబ్బు" },
  subtitle: "calls, video calls, UPI, OTP",
  summary: {
    en: "Use what you learned about phones: fix a bad line, check a UPI payment, and say no to an OTP caller.",
    te: "ఫోన్ గురించి నేర్చుకున్నదంతా వాడండి: లైన్ బాలేనప్పుడు సరిచేయడం, UPI డబ్బు అందిందో అడగడం, OTP అడిగేవాళ్ళకి చెప్పకపోవడం.",
  },
  seo: {
    title: "Phone Calls, UPI and OTP Safety in English for Telugu Speakers",
    description:
      "Say Can you hear me now? and I never share my OTP. A review lesson for Telugu speakers on phone calls, video calls, UPI and staying safe.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "never share", role: "action" },
    { text: "my OTP", role: "what" },
  ],
  core: [
    { en: "Can you hear me now?", te: "ఇప్పుడు నా మాట వినిపిస్తోందా?", extra: ["Are"] },
    { en: "I never share my OTP with anyone.", te: "నేను నా OTP ఎవరికీ చెప్పను.", extra: ["shares"] },
    { en: "The network is weak here. I'll call you back.", te: "ఇక్కడ నెట్‌వర్క్ సరిగ్గా లేదు. మళ్ళీ ఫోన్ చేస్తాను.", extra: ["calling"] },
    { en: "Did you get my payment?", te: "నేను పంపిన డబ్బు మీకు అందిందా?", extra: ["got"] },
    { en: "I don't know this caller. I'm hanging up.", te: "ఫోన్ చేసినవాళ్ళు నాకు తెలియదు. ఫోన్ పెట్టేస్తున్నాను.", extra: ["knowing"] },
    { en: "Please recharge my phone for 299 rupees.", te: "నా ఫోన్‌కి 299 రూపాయల రీఛార్జ్ చేయండి.", extra: ["to"] },
    { en: "I'll block this unknown number.", te: "ఈ తెలియని నంబర్‌ని block చేస్తాను.", extra: ["blocking"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "If an unknown number calls today and asks for money or an OTP, hang up and block it.",
    te: "ఈ రోజు తెలియని నంబర్ నుంచి ఎవరైనా డబ్బు గానీ OTP గానీ అడిగితే, ఫోన్ పెట్టేసి ఆ నంబర్‌ని block చేయండి.",
  },
  words: [
    { en: "network", te: "నెట్‌వర్క్, సిగ్నల్" },
    { en: "recharge", te: "రీఛార్జ్" },
    { en: "caller", te: "ఫోన్ చేసినవారు" },
    { en: "unknown number", te: "తెలియని నంబర్" },
    { en: "block", te: "block చేయడం (ఆ నంబర్ నుంచి కాల్స్ రాకుండా)" },
  ],
  grammar: ["can-could", "adverbs-frequency", "past-simple", "will"],
  topics: ["phone", "technology", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Clear and safe", te: "స్పష్టంగా, జాగ్రత్తగా" },
      body: {
        en: "On a call, check the line: Can you hear me now? After you pay, check: Did you get my payment? And keep your money safe: I never share my OTP. Never means not even once.",
        te: "ఫోన్‌లో లైన్ సరిగ్గా ఉందో అడగండి: Can you hear me now? డబ్బు పంపాక అడగండి: Did you get my payment? డబ్బు జాగ్రత్త: I never share my OTP. never అంటే ఒక్కసారి కూడా చేయను అని.",
      },
      bridge: {
        te: ["నేను", "నా OTP", "ఎవరికీ చెప్పను"],
        en: [
          { text: "I", role: "who" },
          { text: "never share", role: "action" },
          { text: "my OTP", role: "what" },
        ],
      },
      examples: [
        { en: "Can you hear me now?", te: "ఇప్పుడు నా మాట వినిపిస్తోందా?" },
        { en: "Did you get my payment?", te: "నేను పంపిన డబ్బు మీకు అందిందా?" },
        { en: "I never share my OTP with anyone.", te: "నేను నా OTP ఎవరికీ చెప్పను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What to say when", te: "ఎప్పుడు ఏం అనాలి" },
      items: [
        {
          form: "Can you hear me …?",
          useFor: { en: "A video call or a bad line.", te: "వీడియో కాల్‌లో గానీ, లైన్ బాలేనప్పుడు గానీ." },
          example: { en: "Hello? Can you hear me clearly now?", te: "హలో? ఇప్పుడు నా మాట స్పష్టంగా వినిపిస్తోందా?" },
        },
        {
          form: "Did you get …?",
          useFor: { en: "Checking that money or a message reached.", te: "డబ్బు గానీ మెసేజ్ గానీ అందిందో అడగడానికి." },
          example: { en: "Did you get my message on WhatsApp?", te: "WhatsApp లో నా మెసేజ్ వచ్చిందా?" },
        },
        {
          form: "I never …",
          useFor: { en: "Something you don't do, at any time.", te: "ఎప్పుడూ చేయనిది చెప్పడానికి." },
          example: { en: "I never open links from strangers.", te: "తెలియనివాళ్ళు పంపిన లింక్‌లు నేను ఎప్పుడూ తెరవను." },
        },
        {
          form: "I'm hanging up.",
          useFor: { en: "Ending a call you don't trust.", te: "నమ్మకం లేని కాల్ పెట్టేసేటప్పుడు." },
          example: { en: "Sorry, I don't trust this call. I'm hanging up.", te: "సారీ, ఈ కాల్‌ని నేను నమ్మను. ఫోన్ పెట్టేస్తున్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "You got my payment?",
      right: "Did you get my payment?",
      why: {
        en: "Telugu asks with the voice alone; English starts with did, and got becomes get.",
        te: "తెలుగులో గొంతుతోనే ప్రశ్న అడుగుతాం; ఇంగ్లీష్‌లో did తో మొదలుపెట్టి, got ని get చేయాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am not knowing this number.",
      right: "I don't know this number.",
      why: {
        en: "Know is a state, so it never takes -ing; use don't know.",
        te: "know ఒక స్థితిని చెప్తుంది, దానికి -ing రాదు; don't know అనండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "A caller says: I'm from your bank. Tell me the OTP. What do you say?",
        te: "'నేను మీ బ్యాంక్ నుంచి. OTP చెప్పండి' అని ఒకరు ఫోన్ చేశారు. మీరు ఏమంటారు?",
      },
      options: ["Sorry, I never share my OTP. Bye.", "Okay, one minute. I'll read it to you.", "Which bank? Okay, I'll send it on WhatsApp."],
      answer: 0,
      why: {
        en: "Banks never ask for your OTP, so anyone who asks is a cheat.",
        te: "బ్యాంక్ ఎప్పుడూ OTP అడగదు; అడిగేవాళ్ళు మోసగాళ్ళే.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "UPI Request",
      lines: ["Raju Kumar is requesting ₹2,000", "Note: Prize money", "Enter your UPI PIN to pay"],
      prompt: {
        en: "A caller says you won a prize. Then this comes on your phone. What does it mean?",
        te: "మీకు బహుమతి వచ్చిందని ఒకరు ఫోన్ చేశారు. తర్వాత మీ ఫోన్‌లో ఇది వచ్చింది. దీని అర్థం ఏంటి?",
      },
      options: ["You will pay 2,000 rupees.", "You will get 2,000 rupees.", "Your bank is giving you a prize."],
      answer: 0,
      why: {
        en: "A PIN always sends money out; you never need it to get money.",
        te: "PIN వేస్తే ఎప్పుడూ మీ డబ్బే వెళ్తుంది; డబ్బు రావడానికి PIN అక్కర్లేదు.",
      },
      say: "Enter your UPI PIN to pay.",
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The bank never ___ for your OTP.",
      te: "బ్యాంక్ మీ OTP ని ఎప్పుడూ అడగదు.",
      options: ["asks", "ask", "asking"],
      answer: 0,
      why: {
        en: "The bank is one, like he or she, so the verb takes s.",
        te: "bank ఒక్కటే (he, she లాగా), అందుకే verb కి s.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Please wait. I am talking in the phone.",
      wrongIndex: 5,
      fix: "Please wait. I am talking on the phone.",
      why: {
        en: "Telugu says ఫోన్‌లో, but in English you talk on the phone, not in it.",
        te: "తెలుగులో 'ఫోన్‌లో' అంటాం, కానీ ఇంగ్లీష్‌లో on the phone అనాలి, in కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You sent your friend 500 rupees by UPI. Ask if it reached.",
        te: "మీ స్నేహితులకి UPI లో 500 రూపాయలు పంపారు. అందిందా అని అడగండి.",
      },
      expected: ["Did you get my payment?", "Did you get the money?", "Did you get the 500 rupees?"],
      options: ["Did you get my payment?", "You got my payment?", "Did you got my payment?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "An unknown caller asks for your PIN. End the call.",
        te: "తెలియని నంబర్ నుంచి ఒకరు మీ PIN అడుగుతున్నారు. కాల్ పెట్టేయండి.",
      },
      expected: ["I don't know you. I'm hanging up.", "Sorry, I'm hanging up.", "I never share my PIN. Bye."],
      options: ["I don't know you. I'm hanging up.", "I don't know you. I hanging up.", "Wait, let me find my PIN."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A video call, and a fake call", te: "వీడియో కాల్, మధ్యలో దొంగ కాల్" },
    scene: {
      en: "Your cousin Anitha calls you on video from Hyderabad. In the middle, another call comes.",
      te: "హైదరాబాద్ నుంచి మీ కజిన్ అనిత వీడియో కాల్ చేశారు. మధ్యలో ఇంకో కాల్ వచ్చింది.",
    },
    partner: { en: "Anitha (your cousin)", te: "అనిత (మీ కజిన్)" },
    skills: [
      { id: "call", label: { en: "Video calls", te: "వీడియో కాల్" } },
      { id: "safe", label: { en: "Staying safe", te: "జాగ్రత్తగా ఉండటం" } },
    ],
    turns: [
      {
        partner: "Hello? I can see you, but I can't hear you.",
        te: "హలో? మీరు కనిపిస్తున్నారు, కానీ మాట వినిపించట్లేదు.",
        hint: { en: "Say sorry, you were on mute, and check she can hear you.", te: "సారీ, mute లో ఉన్నానని చెప్పి, ఇప్పుడు వినిపిస్తోందా అని అడగండి." },
        replies: [
          { say: "Sorry, I was on mute. Can you hear me now?", good: true, skill: "call" },
          { say: "Sorry, I was on mute. You are hearing me now?", good: false, skill: "call", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, now it's clear! How are you?",
        te: "అవును, ఇప్పుడు స్పష్టంగా ఉంది! ఎలా ఉన్నారు?",
        hint: { en: "Say you are fine, but another call is coming. Ask her to wait.", te: "బాగున్నానని, ఇంకో కాల్ వస్తోందని చెప్పి, కొంచెం ఆగమనండి." },
        replies: [
          { say: "I'm fine. Another call is coming. Please hold on.", good: true, skill: "call" },
          { say: "I fine. Another call is coming. Please hold on.", good: false, skill: "call", fixIt: "be" },
        ],
      },
      {
        partner: "You're back! Who was it?",
        te: "మళ్ళీ వచ్చారు! ఎవరు ఫోన్ చేశారు?",
        hint: { en: "Say it was a fake bank call that wanted your OTP.", te: "అది మీ OTP అడిగిన దొంగ బ్యాంక్ కాల్ అని చెప్పండి." },
        replies: [
          { say: "A fake bank call. They asked for my OTP.", good: true, skill: "safe" },
          {
            say: "A bank man. I told him my OTP.",
            good: false,
            skill: "safe",
            react: { en: "Oh no! Call one nine three zero right now!", te: "అయ్యో! వెంటనే 1930 కి ఫోన్ చేయండి!" },
          },
        ],
      },
      {
        partner: "Good, you didn't share it. I have to go now.",
        te: "మంచిది, మీరు చెప్పలేదు. నేను ఇప్పుడు వెళ్ళాలి.",
        hint: { en: "Say goodbye warmly, and say you will call on Sunday.", te: "ఆప్యాయంగా బై చెప్పి, ఆదివారం ఫోన్ చేస్తానని చెప్పండి." },
        replies: [
          { say: "Okay, bye! I'll call you on Sunday.", good: true, skill: "call" },
          {
            say: "Okay. Cut the call.",
            good: false,
            skill: "call",
            fixIt: "indian-english",
            react: { en: "Ha! Okay, bye. We'll talk on Sunday.", te: "హా! సరే, బై. ఆదివారం మాట్లాడదాం." },
          },
        ],
      },
    ],
  },
};
