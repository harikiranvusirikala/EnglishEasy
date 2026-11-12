import type { Lesson } from "../../types";

/** Week 66, Day 1 (CURRICULUM §5): turn on / off, turn up / down; "it" goes in the middle — Please turn it off. */
export const day: Lesson = {
  id: "turn-on-turn-off-at-home",
  kind: "lesson",
  title: { en: "Turn On, Turn Off", te: "ఆన్ చేయడం, ఆఫ్ చేయడం" },
  subtitle: "turn on / off, turn up / down",
  summary: {
    en: "Learn to talk about switches and sound at home: Please turn off the geyser. Could you turn the TV down?",
    te: "ఇంట్లో స్విచ్‌లు, సౌండ్ గురించి మాట్లాడటం నేర్చుకుందాం: Please turn off the geyser. Could you turn the TV down?",
  },
  seo: {
    title: "Turn On and Turn Off in English for Telugu Speakers",
    description:
      "Say Please turn off the geyser and Could you turn the TV down? Simple lessons for Telugu speakers on turn on, off, up and down.",
  },
  pattern: [
    { text: "Please turn off", role: "action" },
    { text: "the geyser", role: "what" },
    { text: "after your bath", role: "when" },
  ],
  core: [
    { en: "Please turn off the geyser after your bath.", te: "స్నానం అయ్యాక గీజర్ ఆఫ్ చేయండి.", extra: ["of"] },
    { en: "Could you turn the TV down a little?", te: "కొంచెం TV సౌండ్ తగ్గిస్తారా?", extra: ["low"] },
    { en: "Turn on the fan, please.", te: "కొంచెం ఫ్యాన్ వేయండి.", extra: ["open"] },
    { en: "I've turned it off.", te: "నేను దాన్ని ఆఫ్ చేశాను.", extra: ["turn"] },
    { en: "Don't forget to turn off the gas.", te: "గ్యాస్ ఆపడం మర్చిపోకండి.", extra: ["forgot"] },
    { en: "The music is too loud. Please turn it down.", te: "పాట చాలా గట్టిగా వస్తోంది. కొంచెం తగ్గించండి.", extra: ["less"] },
    { en: "Shall I turn on the light? It's dark in here.", te: "లైట్ వేయనా? ఇక్కడ చీకటిగా ఉంది.", extra: ["Do"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Turn something on or off at home today, and say it aloud: I'm turning off the fan.",
    te: "ఈ రోజు ఇంట్లో ఏదైనా ఆన్ లేదా ఆఫ్ చేస్తూ గట్టిగా చెప్పండి: I'm turning off the fan.",
  },
  words: [
    { en: "turn on", te: "ఆన్ చేయడం, వేయడం" },
    { en: "turn off", te: "ఆఫ్ చేయడం, ఆపేయడం" },
    { en: "turn up", te: "సౌండ్ పెంచడం" },
    { en: "geyser", te: "గీజర్, నీళ్ళు వేడిచేసే మెషిన్" },
    { en: "volume", te: "సౌండ్, వాల్యూమ్" },
  ],
  grammar: ["phrasal-verbs", "can-could", "prepositions"],
  topics: ["home", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Turn on, turn off", te: "ఆన్, ఆఫ్: turn on, turn off" },
      body: {
        en: "Use turn on and turn off for lights, fans and the TV. Turn up and turn down make the sound louder or softer.",
        te: "లైట్, ఫ్యాన్, TV వేయడానికి turn on, ఆపడానికి turn off. సౌండ్ పెంచడానికి turn up, తగ్గించడానికి turn down.",
      },
      bridge: {
        te: ["స్నానం అయ్యాక", "గీజర్", "ఆఫ్ చేయండి"],
        en: [
          { text: "Please turn off", role: "action" },
          { text: "the geyser", role: "what" },
          { text: "after your bath", role: "when" },
        ],
      },
      examples: [
        { en: "Please turn off the geyser after your bath.", te: "స్నానం అయ్యాక గీజర్ ఆఫ్ చేయండి." },
        { en: "Could you turn the TV down a little?", te: "కొంచెం TV సౌండ్ తగ్గిస్తారా?" },
        { en: "Shall I turn on the light? It's dark in here.", te: "లైట్ వేయనా? ఇక్కడ చీకటిగా ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Where does it go?", te: "it ఎక్కడ వస్తుంది?" },
      items: [
        {
          form: "turn off the TV / turn the TV off",
          useFor: { en: "With the thing's name, both orders are right.", te: "వస్తువు పేరు ఉంటే రెండు వరుసలూ సరైనవే." },
          example: { en: "Please turn the TV off.", te: "కొంచెం TV ఆఫ్ చేయండి." },
        },
        {
          form: "turn it off",
          useFor: { en: "With it or them, the little word goes last.", te: "it, them వస్తే చిన్న పదం (off) చివరికి వెళ్తుంది." },
          example: { en: "The music is too loud. Please turn it down.", te: "పాట చాలా గట్టిగా వస్తోంది. కొంచెం తగ్గించండి." },
        },
        {
          form: "turn up / turn down",
          useFor: { en: "Make the sound louder or softer.", te: "సౌండ్ పెంచడానికి, తగ్గించడానికి." },
          example: { en: "Could you turn up the volume a little?", te: "కొంచెం సౌండ్ పెంచుతారా?" },
        },
        {
          form: "switch on / switch off",
          useFor: { en: "The same as turn on and off, for lights and fans.", te: "లైట్లు, ఫ్యాన్లకి turn on, turn off లాగానే." },
          example: { en: "Switch off the fan before you go out.", te: "బయటికి వెళ్ళే ముందు ఫ్యాన్ ఆఫ్ చేయండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Please on the light.",
      right: "Please turn on the light.",
      why: {
        en: "In Telugu we say ఆన్ చేయండి, but on alone is not a verb. English needs turn on or switch on.",
        te: "తెలుగులో 'లైట్ ఆన్ చేయండి' అంటాం; ఇంగ్లీష్‌లో on ఒక్కటే verb కాదు, turn on లేదా switch on కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Please turn off it.",
      right: "Please turn it off.",
      why: {
        en: "With it or them, the little word off always comes after it.",
        te: "it, them వస్తే off ఎప్పుడూ వాటి తర్వాతే వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your neighbour Geetha never wastes power. What does she do with the lights?",
        te: "మీ పక్కింటి గీత గారు కరెంట్ అస్సలు వృథా చేయరు. లైట్లని ఆవిడ ఏం చేస్తారు?",
      },
      options: ["She turns them off when she leaves a room.", "She turn them off when she leaves a room.", "She turns off them when she leaves a room."],
      answer: 0,
      why: {
        en: "One person, like she, takes s on the verb, and them goes before off.",
        te: "ఒక్కరు (she) అయితే verb కి s వస్తుంది; them, off కంటే ముందు వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Could you turn the TV ___ a little? I'm on the phone.",
      te: "కొంచెం TV సౌండ్ తగ్గిస్తారా? నేను ఫోన్‌లో ఉన్నాను.",
      options: ["down", "low", "off"],
      answer: 0,
      why: {
        en: "To make the sound softer, English says turn down; turn low is not used.",
        te: "సౌండ్ తగ్గించడానికి turn down అంటారు; turn low అనరు.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "sign",
      heading: "Guest Bathroom",
      lines: ["Please switch off the geyser", "before you use the water.", "Turn off the tap after use."],
      prompt: {
        en: "This sign is in your friend's bathroom. What should you do before you use the water?",
        te: "మీ స్నేహితుల బాత్రూమ్‌లో ఈ బోర్డు ఉంది. నీళ్ళు వాడే ముందు ఏం చేయాలి?",
      },
      options: ["Switch off the geyser", "Switch on the geyser", "Turn off the tap"],
      answer: 0,
      why: {
        en: "The first two lines ask you to stop the geyser before you take the water.",
        te: "మొదటి రెండు లైన్లలో, నీళ్ళు వాడే ముందు గీజర్ ఆపమని ఉంది.",
      },
      say: "Please switch off the geyser before you use the water.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Please turn off light in the kitchen.",
      wrongIndex: 3,
      fix: "Please turn off the light in the kitchen.",
      why: {
        en: "One light that you both know takes the; Telugu has no such word.",
        te: "ఇద్దరికీ తెలిసిన ఒక లైట్ కాబట్టి ముందు the కావాలి; తెలుగులో అలాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "It is getting dark in the room. Ask your friend to put on the light.",
        te: "గదిలో చీకటి పడుతోంది. లైట్ వేయమని మీ స్నేహితులని అడగండి.",
      },
      expected: [
        "Could you turn on the light, please?",
        "Please turn on the light.",
        "Could you switch on the light, please?",
        "Could you turn the light on, please?",
      ],
      options: ["Could you turn on the light, please?", "Could you on the light, please?", "Could you turn on light, please?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your guest is watching TV loudly, and you are on the phone. Ask kindly for less sound.",
        te: "మీ అతిథి TV గట్టిగా పెట్టి చూస్తున్నారు, మీరు ఫోన్‌లో ఉన్నారు. సౌండ్ తగ్గించమని మర్యాదగా అడగండి.",
      },
      expected: [
        "Could you turn it down a little, please?",
        "Could you turn the TV down, please?",
        "Could you turn down the TV a little?",
      ],
      options: ["Could you turn it down a little, please?", "Could you turn down it a little, please?", "Turn it down. I'm on the phone."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The geyser", te: "గీజర్" },
    scene: {
      en: "Your friend Usha from Kurnool is staying with you. In the morning, she asks about the geyser.",
      te: "కర్నూలు నుంచి మీ స్నేహితురాలు ఉష గారు మీ ఇంట్లో ఉన్నారు. పొద్దున ఆవిడ గీజర్ గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Usha (your guest)", te: "ఉష (మీ అతిథి)" },
    skills: [
      { id: "explain", label: { en: "Explaining how", te: "ఎలా వాడాలో చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Sorry to trouble you. How do I use the geyser?",
        te: "గుడ్ మార్నింగ్! ఇబ్బంది పెడుతున్నందుకు సారీ. గీజర్ ఎలా వాడాలి?",
        hint: { en: "Greet her, and say the switch is outside the bathroom door.", te: "ఆవిడకి గుడ్ మార్నింగ్ చెప్పి, స్విచ్ బాత్రూమ్ తలుపు బయట ఉందని చెప్పండి." },
        replies: [
          { say: "Good morning! The switch is outside the bathroom door.", good: true, skill: "explain" },
          { say: "Good morning! Switch is outside the bathroom door.", good: false, skill: "explain", fixIt: "article" },
        ],
      },
      {
        partner: "Ah, I see it. Do I just turn it on?",
        te: "ఆ, కనిపించింది. ఆన్ చేస్తే చాలా?",
        hint: { en: "Say yes, and tell her to wait ten minutes for hot water.", te: "అవునని చెప్పి, వేడి నీళ్ళకి పది నిమిషాలు ఆగమని చెప్పండి." },
        replies: [
          { say: "Yes, turn it on and wait ten minutes.", good: true, skill: "explain" },
          { say: "Yes. The water gets hot in ten minutes.", good: true, skill: "explain" },
          { say: "Yes, on it and wait ten minutes.", good: false, skill: "explain", fixIt: "preposition" },
        ],
      },
      {
        partner: "Okay. Anything else I should know?",
        te: "సరే. ఇంకా ఏమైనా తెలుసుకోవాలా?",
        hint: { en: "Ask her kindly to switch it off before she uses the water.", te: "నీళ్ళు వాడే ముందు దాన్ని ఆఫ్ చేయమని మర్యాదగా అడగండి." },
        replies: [
          { say: "Please turn it off before you use the water.", good: true, skill: "polite" },
          { say: "Please turn off it before you use the water.", good: false, skill: "explain" },
          {
            say: "Don't waste my electricity. Turn it off!",
            good: false,
            skill: "polite",
            react: { en: "Oh! Of course. I'll be careful.", te: "అయ్యో! తప్పకుండా. జాగ్రత్తగా ఉంటాను." },
          },
        ],
      },
      {
        partner: "Thank you so much. You're very kind.",
        te: "చాలా థాంక్స్. మీరు చాలా మంచివారు.",
        hint: { en: "Say it is no trouble, and offer her a clean towel.", te: "ఇబ్బందేమీ లేదని చెప్పి, ఒక శుభ్రమైన టవల్ కావాలా అని అడగండి." },
        replies: [
          { say: "It's no trouble. Would you like a clean towel?", good: true, skill: "polite" },
          { say: "It's no trouble. You like a clean towel?", good: false, skill: "polite", fixIt: "question" },
        ],
      },
    ],
  },
};
