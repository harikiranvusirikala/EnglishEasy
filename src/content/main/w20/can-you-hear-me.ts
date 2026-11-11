import type { Lesson } from "../../types";

/** Week 20, Day 3 (CURRICULUM §4): video call phrases — Can you hear me? You're on mute. Your video is frozen. */
export const day: Lesson = {
  id: "can-you-hear-me",
  kind: "lesson",
  title: { en: "Can You Hear Me?", te: "వీడియో కాల్" },
  subtitle: "video call phrases",
  summary: {
    en: "Learn the short phrases of a video call: Can you hear me? You're on mute. Your video is frozen.",
    te: "వీడియో కాల్‌లో వాడే చిన్న మాటలు నేర్చుకుందాం: Can you hear me? You're on mute. Your video is frozen.",
  },
  seo: {
    title: "Video Call Phrases in English for Telugu Speakers",
    description:
      "Say Can you hear me? and You're on mute on a video call. Simple lessons for Telugu speakers on talking to relatives far away.",
  },
  pattern: [
    { text: "Can", role: "action" },
    { text: "you", role: "who" },
    { text: "hear", role: "action" },
    { text: "me?", role: "what" },
  ],
  core: [
    { en: "Can you hear me?", te: "నా మాట వినిపిస్తోందా?", extra: ["listen"] },
    { en: "Sorry, you're on mute.", te: "Sorry, మీరు mute లో ఉన్నారు.", extra: ["in"] },
    { en: "I can see you now.", te: "ఇప్పుడు మీరు కనిపిస్తున్నారు.", extra: ["seeing"] },
    { en: "Your video is frozen.", te: "మీ వీడియో ఆగిపోయింది, కదలట్లేదు.", extra: ["are"] },
    { en: "Please switch on your camera.", te: "కొంచెం మీ camera ఆన్ చేయండి.", extra: ["open"] },
    { en: "The connection is bad. I'll call again.", te: "connection సరిగ్గా లేదు. మళ్ళీ ఫోన్ చేస్తాను.", extra: ["will"] },
    { en: "Can you see me clearly?", te: "నేను మీకు సరిగ్గా కనిపిస్తున్నానా?", extra: ["clear"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "On your next video call, start with: Can you hear me?",
    te: "మీ తర్వాతి వీడియో కాల్‌లో Can you hear me? అని మొదలుపెట్టండి.",
  },
  words: [
    { en: "video call", te: "వీడియో కాల్" },
    { en: "mute", te: "మ్యూట్ (మాట వినిపించకుండా ఆపడం)" },
    { en: "frozen", te: "ఆగిపోయిన, కదలని" },
    { en: "camera", te: "కెమెరా" },
    { en: "connection", te: "కనెక్షన్, నెట్ సిగ్నల్" },
  ],
  grammar: ["can-could", "am-is-are", "yes-no-questions"],
  topics: ["phone", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "On a video call", te: "వీడియో కాల్‌లో" },
      body: {
        en: "A video call uses a few short phrases. Start with Can you hear me? If no sound comes, say You're on mute.",
        te: "వీడియో కాల్‌లో కొన్ని చిన్న మాటలే మళ్ళీ మళ్ళీ వస్తాయి. ముందు Can you hear me? అని అడగండి. సౌండ్ రాకపోతే You're on mute అనండి.",
      },
      bridge: {
        te: ["నా మాట", "మీకు", "వినిపిస్తోందా?"],
        en: [
          { text: "Can", role: "action" },
          { text: "you", role: "who" },
          { text: "hear", role: "action" },
          { text: "me?", role: "what" },
        ],
      },
      examples: [
        { en: "Can you hear me?", te: "నా మాట వినిపిస్తోందా?" },
        { en: "Sorry, you're on mute.", te: "Sorry, మీరు mute లో ఉన్నారు." },
        { en: "Your video is frozen.", te: "మీ వీడియో ఆగిపోయింది, కదలట్లేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What is wrong?", te: "సమస్య ఏంటి?" },
      items: [
        {
          form: "You're on mute.",
          useFor: { en: "Their lips move, but there is no sound.", te: "పెదాలు కదులుతున్నాయి, కానీ మాట వినిపించట్లేదు." },
          example: { en: "Sorry, you're on mute.", te: "Sorry, మీరు mute లో ఉన్నారు." },
        },
        {
          form: "Your video is frozen.",
          useFor: { en: "Their picture does not move.", te: "అవతలి వారి బొమ్మ కదలట్లేదు." },
          example: { en: "Your video is frozen.", te: "మీ వీడియో ఆగిపోయింది, కదలట్లేదు." },
        },
        {
          form: "The connection is bad.",
          useFor: { en: "Sound and picture come and go.", te: "మాట, బొమ్మ వచ్చి పోతున్నాయి." },
          example: { en: "The connection is bad. I'll call again.", te: "connection సరిగ్గా లేదు. మళ్ళీ ఫోన్ చేస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "You on mute.",
      right: "You're on mute.",
      why: {
        en: "Telugu puts ఉన్నారు at the end, but English needs are after you. Short form: you're.",
        te: "తెలుగులో 'ఉన్నారు' చివర వస్తుంది; ఇంగ్లీష్‌లో you తర్వాతే are కావాలి. పొట్టిగా you're.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Please on your camera.",
      right: "Please switch on your camera.",
      why: {
        en: "On alone is not an action word. Say switch on or turn on.",
        te: "on ఒక్కటే verb కాదు. switch on లేదా turn on అనాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "The video call starts. What do you ask first?", te: "వీడియో కాల్ మొదలైంది. ముందు ఏం అడుగుతారు?" },
      options: ["Can you hear me?", "Can you listen me?", "You can hear me?"],
      answer: 0,
      why: {
        en: "Hear is for sound that reaches you; a question starts with can.",
        te: "చెవికి వినిపించేది hear; ప్రశ్న can తో మొదలవుతుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Your video ___ frozen.",
      te: "మీ వీడియో ఆగిపోయింది, కదలట్లేదు.",
      options: ["is", "are", "be"],
      answer: 0,
      why: {
        en: "Your video is one thing, so use is.",
        te: "వీడియో ఒక్కటే, అందుకే is.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend's lips move, but there is no sound. What do you say?",
        te: "మీ స్నేహితుల పెదాలు కదులుతున్నాయి, కానీ సౌండ్ రావట్లేదు. ఏమంటారు?",
      },
      options: ["Sorry, you're on mute.", "Sorry, your video is frozen.", "Sorry, I can't see you."],
      answer: 0,
      why: {
        en: "No sound means mute is on; the picture is fine.",
        te: "సౌండ్ లేదు అంటే mute ఆన్‌లో ఉంది; బొమ్మ బాగానే ఉంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "state-ing",
      sentence: "Now I am understanding you clearly.",
      wrongIndex: 3,
      fix: "Now I understand you clearly.",
      why: {
        en: "Understand never takes -ing, even for right now.",
        te: "understand కి -ing రాదు, ఇప్పుడు జరుగుతున్నా సరే.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "On a video call, ask if your friend can hear you.",
        te: "వీడియో కాల్‌లో మీ మాట వినిపిస్తోందా అని స్నేహితులని అడగండి.",
      },
      expected: ["Can you hear me?", "Can you hear me now?"],
      options: ["Can you hear me?", "Can you listen me?", "You hearing me?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your friend's camera is off. Ask her politely to switch it on.",
        te: "మీ స్నేహితురాలి camera ఆఫ్‌లో ఉంది. ఆన్ చేయమని మర్యాదగా అడగండి.",
      },
      expected: ["Please switch on your camera.", "Can you switch on your camera, please?", "Please turn on your camera."],
      options: ["Please switch on your camera.", "Please on your camera.", "Switch on camera, quickly."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A call from America", te: "అమెరికా నుంచి వీడియో కాల్" },
    scene: {
      en: "Your cousin Anitha lives in America. She calls you on WhatsApp video.",
      te: "మీ cousin అనిత అమెరికాలో ఉంటారు. ఆవిడ WhatsApp లో వీడియో కాల్ చేశారు.",
    },
    partner: { en: "Anitha (cousin)", te: "అనిత (cousin)" },
    skills: [
      { id: "call", label: { en: "Video call phrases", te: "వీడియో కాల్ మాటలు" } },
      { id: "polite", label: { en: "Being kind", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Hello? Can you hear me?",
        te: "హలో! హలో? నా మాట వినిపిస్తోందా?",
        hint: { en: "Say yes, and ask if she can hear you too.", te: "అవునని చెప్పి, ఆవిడకి మీ మాట వినిపిస్తోందా అని అడగండి." },
        replies: [
          { say: "Yes, I can hear you. Can you hear me?", good: true, skill: "call" },
          { say: "Yes, I can listen you. You can hear me?", good: false, skill: "call" },
        ],
      },
      {
        partner: "No, I can't hear you. Are you there?",
        te: "లేదు, మీ మాట వినిపించట్లేదు. ఉన్నారా?",
        hint: { en: "Look at your screen. Say sorry: you were on mute.", te: "మీ screen చూడండి. Sorry చెప్పండి: మీరు mute లో ఉన్నారు." },
        replies: [
          { say: "Sorry, I was on mute. Can you hear me now?", good: true, skill: "call" },
          { say: "Sorry, I was in mute. Now hearing?", good: false, skill: "call" },
        ],
      },
      {
        partner: "Yes, now I can! But your screen is dark.",
        te: "ఆ, ఇప్పుడు వినిపిస్తోంది! కానీ మీ screen చీకటిగా ఉంది.",
        hint: { en: "Say sorry, and say you will turn the camera on.", te: "Sorry చెప్పి, camera ఆన్ చేస్తానని చెప్పండి." },
        replies: [
          { say: "Sorry, I'll switch on my camera.", good: true, skill: "call" },
          { say: "Sorry, I'll on my camera.", good: false, skill: "call", fixIt: "preposition" },
          {
            say: "Why are you complaining? Just wait.",
            good: false,
            skill: "polite",
            react: { en: "I'm not complaining! I just want to see you.", te: "నేను complain చేయట్లేదు! మిమ్మల్ని చూడాలని అంతే." },
          },
        ],
      },
      {
        partner: "There you are! Lovely. I'll call you on Sunday.",
        te: "ఆ, కనిపించారు! బాగుంది. ఆదివారం మళ్ళీ ఫోన్ చేస్తాను.",
        hint: { en: "Say okay, and say goodbye warmly.", te: "సరే అని, ప్రేమగా bye చెప్పండి." },
        replies: [
          { say: "Okay, talk to you on Sunday. Take care!", good: true, skill: "polite" },
          { say: "Okay, talk to you in Sunday. Take care!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
