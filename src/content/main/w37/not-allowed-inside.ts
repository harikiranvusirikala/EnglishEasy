import type { Lesson } from "../../types";

/** Week 37, Day 4 (CURRICULUM §4): allowed / not allowed in places (Smoking is not allowed: a fixed phrase) — temple, library, park. */
export const day: Lesson = {
  id: "not-allowed-inside",
  kind: "lesson",
  title: { en: "Not Allowed Inside", te: "అనుమతి లేదు" },
  subtitle: "allowed / not allowed",
  summary: {
    en: "Learn to read and explain the rules of a place: Phones are not allowed inside. Please remove your footwear.",
    te: "ఒక చోటి నియమాలు చదవడం, చెప్పడం నేర్చుకుందాం: Phones are not allowed inside. Please remove your footwear.",
  },
  seo: {
    title: "Allowed and Not Allowed in English for Telugu Speakers",
    description:
      "Say Phones are not allowed inside and Please remove your footwear. Simple lessons for Telugu speakers on rules at a temple, library or park.",
  },
  pattern: [
    { text: "Phones", role: "who" },
    { text: "are not allowed", role: "action" },
    { text: "inside.", role: "what" },
  ],
  core: [
    { en: "Phones are not allowed inside.", te: "లోపలికి ఫోన్లకు అనుమతి లేదు.", extra: ["is"] },
    { en: "Please remove your footwear here.", te: "చెప్పులు ఇక్కడ విడవండి.", extra: ["off"] },
    { en: "Are photos allowed inside?", te: "లోపల ఫోటోలు తీయొచ్చా?", extra: ["Is"] },
    { en: "Food is not allowed in the library.", te: "లైబ్రరీలోకి తిండి తీసుకెళ్ళకూడదు.", extra: ["are"] },
    { en: "Smoking is not allowed in the park.", te: "పార్కులో సిగరెట్ తాగకూడదు.", extra: ["Smoke"] },
    { en: "Bags are not allowed. Please leave them here.", te: "బ్యాగులు లోపలికి తీసుకెళ్ళకూడదు. ఇక్కడ పెట్టండి.", extra: ["it"] },
    { en: "You are not allowed to park here.", te: "ఇక్కడ బండి పెట్టకూడదు.", extra: ["for"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of your nearest temple, mosque or church. Say one thing that is not allowed inside.",
    te: "మీకు దగ్గర్లో ఉన్న గుడి, మసీదు లేదా చర్చిని గుర్తు తెచ్చుకోండి. లోపల ఏది not allowed యో ఇంగ్లీష్‌లో చెప్పండి.",
  },
  words: [
    { en: "allowed", te: "అనుమతి ఉంది, చేయొచ్చు" },
    { en: "not allowed", te: "అనుమతి లేదు, చేయకూడదు" },
    { en: "footwear", te: "చెప్పులు, బూట్లు" },
    { en: "remove", te: "తీసేయడం, విడవడం" },
    { en: "darshan", te: "దర్శనం" },
  ],
  grammar: ["should-must-have-to", "imperatives"],
  topics: ["travel", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Allowed and not allowed", te: "allowed, not allowed అర్థం" },
      body: {
        en: "Allowed means you may do it there; not allowed means a rule says no. Say the thing first, then is or are: Phones are not allowed. Smoking is not allowed is a fixed phrase on many signs.",
        te: "allowed అంటే అక్కడ చేయొచ్చు; not allowed అంటే నియమం ఒప్పుకోదు. ముందు వస్తువు పేరు, తర్వాత is లేదా are: Phones are not allowed. Smoking is not allowed అనేది బోర్డుల మీద ఉండే మామూలు మాట.",
      },
      bridge: {
        te: ["లోపలికి", "ఫోన్లు", "అనుమతి లేదు"],
        en: [
          { text: "Phones", role: "who" },
          { text: "are not allowed", role: "action" },
          { text: "inside.", role: "what" },
        ],
      },
      examples: [
        { en: "Phones are not allowed inside.", te: "లోపలికి ఫోన్లకు అనుమతి లేదు." },
        { en: "Smoking is not allowed in the park.", te: "పార్కులో సిగరెట్ తాగకూడదు." },
        { en: "Are photos allowed inside?", te: "లోపల ఫోటోలు తీయొచ్చా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Is or are?", te: "is ఆ, are ఆ?" },
      items: [
        {
          form: "… is not allowed",
          useFor: { en: "One thing, or something you do: food, smoking.", te: "ఒక్క వస్తువు, లేదా ఒక పని: food, smoking." },
          example: { en: "Food is not allowed in the library.", te: "లైబ్రరీలోకి తిండి తీసుకెళ్ళకూడదు." },
        },
        {
          form: "… are not allowed",
          useFor: { en: "Many things: phones, bags.", te: "చాలా వస్తువులు: phones, bags." },
          example: { en: "Bags are not allowed. Please leave them here.", te: "బ్యాగులు లోపలికి తీసుకెళ్ళకూడదు. ఇక్కడ పెట్టండి." },
        },
        {
          form: "Please remove …",
          useFor: { en: "A polite instruction at the door.", te: "గుమ్మం దగ్గర మర్యాదగా చెప్పే సూచన." },
          example: { en: "Please remove your footwear here.", te: "చెప్పులు ఇక్కడ విడవండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "Phones not allowed inside.",
      right: "Phones are not allowed inside.",
      why: {
        en: "A sign can drop are, but when you speak, English needs are before not allowed.",
        te: "బోర్డు మీద are లేకపోయినా పర్లేదు, కానీ మాట్లాడేటప్పుడు not allowed ముందు are కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Please remove off your footwear.",
      right: "Please remove your footwear.",
      why: {
        en: "Remove already means take off, so no off after it.",
        te: "remove అంటేనే తీసేయడం; దాని తర్వాత off అక్కర్లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "A visitor wants to take her phone into the temple. Tell her the rule.",
        te: "ఒక భక్తురాలు ఫోన్ గుడిలోకి తీసుకెళ్ళాలనుకుంటున్నారు. ఆవిడకి నియమం చెప్పండి.",
      },
      options: ["Sorry, phones are not allowed inside.", "Sorry, phones not allowed inside.", "Sorry, phones are not allowing inside."],
      answer: 0,
      why: {
        en: "Phones are many, so use are, and say allowed, not allowing.",
        te: "phones చాలా, అందుకే are; allowing కాదు, allowed.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "sign",
      heading: "Sri Venkateswara Temple",
      lines: ["Please remove footwear here", "Mobile phones not allowed inside", "Darshan: 6 AM to 12 noon", "Evening: 4 PM to 8 PM"],
      prompt: {
        en: "You have your phone with you. What should you do?",
        te: "మీ దగ్గర ఫోన్ ఉంది. ఏం చేయాలి?",
      },
      options: ["Leave it outside before you go in.", "Keep it in your pocket inside.", "Take photos quietly inside."],
      answer: 0,
      why: {
        en: "The board says mobile phones are not allowed inside the temple.",
        te: "మొబైల్ ఫోన్లు గుడి లోపలికి తీసుకెళ్ళకూడదని బోర్డు మీద ఉంది.",
      },
      say: "Phones are not allowed inside.",
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The library guard says: Bags are not allowed. What does it mean?",
        te: "లైబ్రరీ గార్డ్ గారు Bags are not allowed అన్నారు. అర్థం ఏంటి?",
      },
      options: ["Leave your bag outside.", "Bring a bigger bag.", "You must carry a bag."],
      answer: 0,
      why: {
        en: "Not allowed means a rule says no, so the bag stays outside.",
        te: "not allowed అంటే నియమం ఒప్పుకోదు, అందుకే బ్యాగ్ బయటే ఉండాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Smoking are not allowed in the park.",
      wrongIndex: 1,
      fix: "Smoking is not allowed in the park.",
      why: {
        en: "Smoking is one activity, so it takes is, not are.",
        te: "smoking అనేది ఒక పని, ఒక్కటే; అందుకే are కాదు, is.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "At the temple gate, ask a visitor to take off her footwear.",
        te: "గుడి గేటు దగ్గర ఒక భక్తురాలిని చెప్పులు విడవమని చెప్పండి.",
      },
      expected: ["Please remove your footwear here.", "Please remove your footwear.", "Please take off your footwear."],
      options: ["Please remove your footwear here.", "Please remove off your footwear here.", "Remove! Remove your footwear!"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Ask the library guard if bags are allowed inside.",
        te: "బ్యాగులు లోపలికి తీసుకెళ్ళొచ్చా అని లైబ్రరీ గార్డ్‌ని అడగండి.",
      },
      expected: ["Are bags allowed inside?", "Can I take my bag inside?", "Is my bag allowed inside?"],
      options: ["Are bags allowed inside?", "Bags allowed inside?", "Bags are allow inside?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Temple rules for a visitor", te: "కొత్తవారికి గుడి నియమాలు" },
    scene: {
      en: "David, a visitor from Bengaluru, is at the temple in your town. He asks you about the rules.",
      te: "బెంగళూరు నుండి వచ్చిన డేవిడ్ గారు మీ ఊరి గుడి దగ్గర ఉన్నారు. నియమాల గురించి మిమ్మల్ని అడుగుతున్నారు.",
    },
    partner: { en: "David (visitor)", te: "డేవిడ్ (కొత్తగా వచ్చినవారు)" },
    voice: "b",
    skills: [
      { id: "rules", label: { en: "Explaining rules", te: "నియమాలు చెప్పడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Excuse me. Can I go inside with my shoes?",
        te: "ఎక్స్‌క్యూజ్ మీ. బూట్లతో లోపలికి వెళ్ళొచ్చా?",
        hint: { en: "Say no politely, and tell him to leave them here.", te: "మర్యాదగా వద్దని చెప్పి, ఇక్కడ విడవమని చెప్పండి." },
        replies: [
          { say: "Sorry, please remove your shoes here.", good: true, skill: "rules" },
          {
            say: "No! Shoes not allowed! Remove!",
            good: false,
            skill: "polite",
            fixIt: "be",
            react: { en: "Okay, okay. Please don't shout.", te: "సరే, సరే. అరవకండి." },
          },
        ],
      },
      {
        partner: "Okay. And my phone? Can I take photos?",
        te: "సరే. మరి నా ఫోన్? ఫోటోలు తీయొచ్చా?",
        hint: { en: "Tell him the rule about phones.", te: "ఫోన్ల నియమం ఆయనకి చెప్పండి." },
        replies: [
          { say: "Sorry, phones are not allowed inside.", good: true, skill: "rules" },
          { say: "Sorry, phones are not allow inside.", good: false, skill: "rules" },
        ],
      },
      {
        partner: "Oh. Where can I keep it, then?",
        te: "ఓ. అయితే దాన్ని ఎక్కడ పెట్టాలి?",
        hint: { en: "Tell him about the counter near the gate.", te: "గేటు దగ్గర ఉన్న కౌంటర్ గురించి చెప్పండి." },
        replies: [
          { say: "There is a counter near the gate.", good: true, skill: "rules" },
          { say: "There is counter near the gate.", good: false, skill: "rules", fixIt: "article" },
        ],
      },
      {
        partner: "Thank you so much for your help!",
        te: "మీ సహాయానికి చాలా థాంక్స్!",
        hint: { en: "Reply to his thanks, and wish him a good darshan.", te: "ఆయన థాంక్స్‌కి జవాబు చెప్పి, దర్శనం బాగా జరగాలని చెప్పండి." },
        replies: [
          { say: "You're welcome. Have a good darshan!", good: true, skill: "polite" },
          { say: "No mention. Have a good darshan!", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
