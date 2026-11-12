import type { Lesson } from "../../types";

/** Week 52, Day 3 (CURRICULUM §5): asking the nurse on the ward — The drip has stopped. Could you check it, please? */
export const day: Lesson = {
  id: "on-the-ward-calling-the-nurse",
  kind: "lesson",
  title: { en: "On the Ward", te: "వార్డులో" },
  subtitle: "Could you check …? · When will …?",
  summary: {
    en: "Learn to ask the nurse for help politely: The drip has stopped. Could you check it, please?",
    te: "నర్సుని మర్యాదగా సాయం అడగడం నేర్చుకుందాం: The drip has stopped. Could you check it, please?",
  },
  seo: {
    title: "Talking to the Nurse in English for Telugu Speakers",
    description:
      "Say The drip has stopped and When will the doctor come for rounds? Simple lessons for Telugu speakers on a hospital ward.",
  },
  pattern: [
    { text: "Could", role: "action" },
    { text: "you", role: "who" },
    { text: "check", role: "action" },
    { text: "the drip?", role: "what" },
  ],
  core: [
    { en: "Could you check the drip, please?", te: "కొంచెం డ్రిప్ చూస్తారా, ప్లీజ్?", extra: ["checking"] },
    { en: "When will the doctor come for rounds?", te: "డాక్టర్ గారు రౌండ్స్‌కి ఎప్పుడు వస్తారు?", extra: ["comes"] },
    { en: "The drip has stopped. Please come and see.", te: "డ్రిప్ ఆగిపోయింది. కొంచెం వచ్చి చూడండి.", extra: ["stop"] },
    { en: "I pressed the call bell, but nobody came.", te: "call bell నొక్కాను, కానీ ఎవరూ రాలేదు.", extra: ["press"] },
    { en: "My hand is a little swollen near the needle.", te: "సూది దగ్గర నా చేయి కొంచెం వాచింది.", extra: ["swelling"] },
    { en: "Could I have an extra blanket, please?", te: "ఇంకో దుప్పటి ఇస్తారా, ప్లీజ్?", extra: ["a"] },
    { en: "Which nurse is on duty tonight?", te: "ఈ రాత్రి ఏ నర్సు గారు డ్యూటీలో ఉన్నారు?", extra: ["in"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one thing you might need on a ward at night. Say aloud how you would ask: Could you …, please?",
    te: "రాత్రి పూట వార్డులో మీకు అవసరమయ్యే ఒక విషయం ఆలోచించండి. దాన్ని ఎలా అడుగుతారో గట్టిగా చెప్పండి: Could you …, please?",
  },
  words: [
    { en: "drip", te: "సెలైన్, డ్రిప్" },
    { en: "call bell", te: "నర్సుని పిలిచే బెల్" },
    { en: "rounds", te: "డాక్టర్ వార్డులో చూసి వెళ్ళడం, రౌండ్స్" },
    { en: "on duty", te: "డ్యూటీలో ఉండటం" },
    { en: "blanket", te: "దుప్పటి, రగ్గు" },
  ],
  grammar: ["can-could", "question-words", "present-perfect"],
  topics: ["health", "doctor"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking the nurse for help", te: "నర్సుని సాయం అడగడం" },
      body: {
        en: "First say what is wrong in a short sentence: The drip has stopped. Then ask with Could you … please.",
        te: "ముందు సమస్య ఒక చిన్న వాక్యంలో చెప్పండి: The drip has stopped. తర్వాత Could you … please తో అడగండి.",
      },
      bridge: {
        te: ["కొంచెం", "డ్రిప్", "చూస్తారా?"],
        en: [
          { text: "Could", role: "action" },
          { text: "you", role: "who" },
          { text: "check", role: "action" },
          { text: "the drip?", role: "what" },
        ],
      },
      examples: [
        { en: "Could you check the drip, please?", te: "కొంచెం డ్రిప్ చూస్తారా, ప్లీజ్?" },
        { en: "When will the doctor come for rounds?", te: "డాక్టర్ గారు రౌండ్స్‌కి ఎప్పుడు వస్తారు?" },
        { en: "The drip has stopped. Please come and see.", te: "డ్రిప్ ఆగిపోయింది. కొంచెం వచ్చి చూడండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Say the problem, then ask", te: "ముందు సమస్య, తర్వాత అడగడం" },
      items: [
        {
          form: "The … has stopped.",
          useFor: { en: "Something stopped working.", te: "ఏదో పని చేయడం ఆగిపోయింది." },
          example: { en: "The fan has stopped. It's very hot.", te: "ఫ్యాన్ ఆగిపోయింది. చాలా వేడిగా ఉంది." },
        },
        {
          form: "Could you check …?",
          useFor: { en: "Ask the nurse to look at it.", te: "దాన్ని చూడమని నర్సుని అడగడానికి." },
          example: { en: "Could you check my BP, please?", te: "నా BP ఒకసారి చూస్తారా, ప్లీజ్?" },
        },
        {
          form: "When will …?",
          useFor: { en: "Ask about a time.", te: "టైమ్ గురించి అడగడానికి." },
          example: { en: "When will they change the bedsheet?", te: "బెడ్‌షీట్ ఎప్పుడు మారుస్తారు?" },
        },
        {
          form: "Could I have …?",
          useFor: { en: "Ask for a thing.", te: "ఏదైనా వస్తువు అడగడానికి." },
          example: { en: "Could I have some hot water, please?", te: "కొంచెం వేడి నీళ్ళు ఇస్తారా, ప్లీజ్?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "The doctor come for rounds at nine.",
      right: "The doctor comes for rounds at nine.",
      why: {
        en: "One person, like he or she, takes s on the verb for a daily habit.",
        te: "రోజూ జరిగే పనిలో ఒక్కరి గురించి అయితే (he, she లాగా) verb కి s చేర్చాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "When the doctor will come?",
      right: "When will the doctor come?",
      why: {
        en: "In a question, will goes before the doctor; Telugu keeps the same order.",
        te: "ప్రశ్నలో will, the doctor కంటే ముందు వస్తుంది; తెలుగులో వరుస మారదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "It is night. The drip has stopped. You press the bell and the nurse comes. What do you say?",
        te: "రాత్రి అయ్యింది. డ్రిప్ ఆగిపోయింది. మీరు బెల్ నొక్కారు, నర్సు గారు వచ్చారు. ఏమంటారు?",
      },
      options: ["Sorry to trouble you. The drip has stopped.", "Sorry to trouble you. The drip has stop.", "Hey, the drip stopped. Do something!"],
      answer: 0,
      why: {
        en: "Say sorry first, then the problem: has needs the past form of the verb.",
        te: "ముందు sorry, తర్వాత సమస్య: has తర్వాత verb past form లో రావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Which nurse is ___ duty tonight?",
      te: "ఈ రాత్రి ఏ నర్సు గారు డ్యూటీలో ఉన్నారు?",
      options: ["on", "in", "at"],
      answer: 0,
      why: {
        en: "English says on duty; Telugu డ్యూటీలో makes us say in.",
        te: "ఇంగ్లీష్‌లో on duty అంటారు; తెలుగు 'డ్యూటీలో' వల్ల in అనేస్తాం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: { en: "You feel cold at night. Ask the nurse for one more blanket.", te: "రాత్రి చలిగా ఉంది. ఇంకో దుప్పటి కావాలని నర్సుని అడగండి." },
      options: ["Could I have an extra blanket, please?", "Could I have extra blanket, please?", "Give one more blanket. Fast."],
      answer: 0,
      why: {
        en: "One blanket needs a word before it, and extra starts with a vowel sound, so an.",
        te: "ఒక్క blanket ముందు ఒక పదం కావాలి; extra అచ్చుతో మొదలవుతుంది, అందుకే an. తెలుగులో ఇలాంటి పదం లేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "The nurse checks my BP every four hour.",
      wrongIndex: 6,
      fix: "The nurse checks my BP every four hours.",
      why: {
        en: "After four, hour takes s; Telugu గంటలకి also shows more than one.",
        te: "నాలుగు తర్వాత hour కి s వస్తుంది; తెలుగులోనూ 'గంటలకి' అని ఎక్కువని చూపిస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: { en: "You want to know when the doctor will see you today. Ask the nurse.", te: "ఈ రోజు డాక్టర్ గారు ఎప్పుడు చూస్తారో తెలుసుకోవాలి. నర్సుని అడగండి." },
      expected: ["When will the doctor come for rounds?", "When will the doctor come?", "What time will the doctor come?"],
      options: ["When will the doctor come for rounds?", "When the doctor will come for rounds?", "When will the doctor comes for rounds?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You pressed the call bell twice, but nobody came. Tell the nurse politely.",
        te: "మీరు call bell రెండుసార్లు నొక్కారు, కానీ ఎవరూ రాలేదు. నర్సుకి మర్యాదగా చెప్పండి.",
      },
      expected: ["Sorry, I pressed the bell twice, but nobody came.", "I pressed the call bell, but nobody came.", "I pressed the bell twice, but nobody came."],
      options: [
        "Sorry, I pressed the bell twice, but nobody came.",
        "Sorry, I pressed the bell twice, but nobody didn't come.",
        "Nobody comes here! What kind of hospital is this?",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Calling the nurse at night", te: "రాత్రి నర్సుని పిలవడం" },
    scene: {
      en: "It is two in the morning. You are on the ward after a small operation. The drip has stopped, so you press the call bell. The night nurse, Joseph, comes.",
      te: "తెల్లవారుజామున రెండు అయ్యింది. చిన్న ఆపరేషన్ తర్వాత మీరు వార్డులో ఉన్నారు. డ్రిప్ ఆగిపోయింది, అందుకే call bell నొక్కారు. రాత్రి డ్యూటీ నర్సు జోసెఫ్ గారు వచ్చారు.",
    },
    partner: { en: "Joseph (night nurse)", te: "జోసెఫ్ (రాత్రి నర్సు)" },
    voice: "b",
    skills: [
      { id: "help", label: { en: "Asking for help", te: "సాయం అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Yes? Did you press the bell?",
        te: "చెప్పండి? మీరు బెల్ నొక్కారా?",
        hint: { en: "Say sorry for the trouble, and tell him what is wrong with the drip.", te: "ఇబ్బంది పెట్టినందుకు sorry చెప్పి, డ్రిప్‌కి ఏమైందో చెప్పండి." },
        replies: [
          { say: "Yes, sorry to trouble you. The drip has stopped.", good: true, skill: "help" },
          { say: "Yes, sorry to trouble you. The drip has stop.", good: false, skill: "help" },
        ],
      },
      {
        partner: "Let me see. Oh, the bottle is empty. I'll change it.",
        te: "చూడనివ్వండి. ఓ, బాటిల్ ఖాళీ అయ్యింది. మారుస్తాను.",
        hint: { en: "Thank him. Tell him your hand has puffed up a bit near the needle.", te: "థాంక్స్ చెప్పండి. సూది దగ్గర చేయి కొంచెం ఉబ్బిందని చెప్పండి." },
        replies: [
          { say: "Thank you. My hand is a little swollen near the needle.", good: true, skill: "help" },
          { say: "Thank you. My hand is little swollen near the needle.", good: false, skill: "help", fixIt: "article" },
        ],
      },
      {
        partner: "Let me check. I'll put the needle in your other hand.",
        te: "చూస్తాను. సూది మీ ఇంకో చేతికి పెడతాను.",
        hint: { en: "Thank him, and ask politely what time the doctor will see you.", te: "థాంక్స్ చెప్పి, డాక్టర్ గారు ఎన్ని గంటలకి చూస్తారో మర్యాదగా అడగండి." },
        replies: [
          { say: "Thank you. When will the doctor come for rounds?", good: true, skill: "help" },
          { say: "Thank you. When the doctor will come for rounds?", good: false, skill: "help", fixIt: "question" },
          {
            say: "Fine. And tell the doctor to come early.",
            good: false,
            skill: "polite",
            react: { en: "I'll pass it on, but rounds start at nine.", te: "చెప్తాను, కానీ రౌండ్స్ తొమ్మిదింటికే మొదలవుతాయి." },
          },
        ],
      },
      {
        partner: "The doctor comes at nine. Please try to sleep now.",
        te: "డాక్టర్ గారు తొమ్మిదింటికి వస్తారు. ఇప్పుడు కొంచెం నిద్రపోవడానికి ప్రయత్నించండి.",
        hint: { en: "Thank him by name, and say good night.", te: "పేరుతో థాంక్స్ చెప్పి, గుడ్ నైట్ చెప్పండి." },
        replies: [
          { say: "Thank you, Joseph. Good night.", good: true, skill: "polite" },
          { say: "Thanks you, Joseph. Good night.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
