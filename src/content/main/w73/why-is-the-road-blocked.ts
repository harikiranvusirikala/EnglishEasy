import type { Lesson } from "../../types";

/** Week 73, Day 5 (CURRICULUM §5): guessing reasons in a scene with must, might and can't — There must be a procession today. */
export const day: Lesson = {
  id: "why-is-the-road-blocked",
  kind: "lesson",
  title: { en: "Why Is the Road Blocked?", te: "రోడ్డు ఎందుకు మూసేశారు?" },
  subtitle: "guessing reasons: must, might, can't",
  summary: {
    en: "Learn to guess the reason in a real scene: There must be a procession today. It can't be an accident. There's no ambulance.",
    te: "నిజమైన సందర్భంలో కారణం ఊహించడం నేర్చుకుందాం: There must be a procession today. It can't be an accident. There's no ambulance.",
  },
  seo: {
    title: "Guessing Reasons in English for Telugu Speakers",
    description:
      "Say There must be a procession today and It can't be an accident. Simple lessons for Telugu speakers on guessing why the traffic is stuck.",
  },
  pattern: [
    { text: "There", role: "who" },
    { text: "must be", role: "action" },
    { text: "a procession", role: "what" },
    { text: "today", role: "when" },
  ],
  core: [
    { en: "There must be a procession today.", te: "ఈ రోజు ఏదో ఊరేగింపు ఉండి ఉంటుంది.", extra: ["are"] },
    { en: "It can't be an accident. There's no ambulance.", te: "ప్రమాదం అయ్యుండదు. అంబులెన్స్ ఏదీ లేదు.", extra: ["a"] },
    { en: "The road might be closed for repairs.", te: "రిపేర్ల కోసం రోడ్డు మూసేసి ఉండొచ్చు.", extra: ["close"] },
    { en: "Why is the traffic not moving?", te: "ట్రాఫిక్ ఎందుకు కదలట్లేదు?", extra: ["does"] },
    { en: "We've been stuck here for twenty minutes.", te: "ఇరవై నిమిషాలుగా ఇక్కడే ఇరుక్కుపోయాం.", extra: ["since"] },
    { en: "Do you hear the drums? It must be a Ganesh procession.", te: "డప్పుల శబ్దం వినిపిస్తోందా? వినాయకుడి ఊరేగింపు అయ్యుంటుంది.", extra: ["hearing"] },
    { en: "There could be a minister's visit. The police are everywhere.", te: "ఏదో మంత్రి గారి పర్యటన అయ్యుండొచ్చు. ఎక్కడ చూసినా పోలీసులే.", extra: ["is"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Next time the traffic stops or a crowd gathers, guess the reason aloud with must, might or can't.",
    te: "ఈసారి ట్రాఫిక్ ఆగినా, జనం గుమిగూడినా, must, might, can't తో కారణాన్ని గట్టిగా ఊహించి చెప్పండి.",
  },
  words: [
    { en: "procession", te: "ఊరేగింపు" },
    { en: "blocked", te: "మూసేసిన, అడ్డంగా ఉన్న" },
    { en: "diversion", te: "డైవర్షన్, వేరే దారి" },
    { en: "barricade", te: "బారికేడ్, అడ్డుకట్ట" },
    { en: "drums", te: "డప్పులు" },
  ],
  grammar: ["might-may", "present-perfect-continuous", "question-words"],
  topics: ["transport", "festivals", "directions"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Guessing a reason from what you see", te: "చూసినదాన్ని బట్టి కారణం ఊహించడం" },
      body: {
        en: "Look at the signs, then choose: must be when you are almost sure, might be when you are not sure, can't be when it's surely not true.",
        te: "గుర్తులు చూసి ఎంచుకోండి: దాదాపు ఖచ్చితంగా అనిపిస్తే must be, తెలియకపోతే might be, కాదని గట్టిగా అనిపిస్తే can't be.",
      },
      bridge: {
        te: ["ఈ రోజు", "ఏదో ఊరేగింపు", "ఉండి ఉంటుంది"],
        en: [
          { text: "There", role: "who" },
          { text: "must be", role: "action" },
          { text: "a procession", role: "what" },
          { text: "today", role: "when" },
        ],
      },
      examples: [
        { en: "There must be a procession today.", te: "ఈ రోజు ఏదో ఊరేగింపు ఉండి ఉంటుంది." },
        { en: "It can't be an accident. There's no ambulance.", te: "ప్రమాదం అయ్యుండదు. అంబులెన్స్ ఏదీ లేదు." },
        { en: "The road might be closed for repairs.", te: "రిపేర్ల కోసం రోడ్డు మూసేసి ఉండొచ్చు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Sign first, then the guess", te: "ముందు గుర్తు, తర్వాత ఊహ" },
      items: [
        {
          form: "must be",
          useFor: { en: "Strong signs point one way.", te: "గట్టి గుర్తులు ఒకే వైపు చూపిస్తున్నాయి." },
          example: { en: "Do you hear the drums? It must be a Ganesh procession.", te: "డప్పుల శబ్దం వినిపిస్తోందా? వినాయకుడి ఊరేగింపు అయ్యుంటుంది." },
        },
        {
          form: "might be / could be",
          useFor: { en: "The signs are weak, or there are many reasons.", te: "గుర్తులు బలంగా లేవు, లేదా చాలా కారణాలు ఉండొచ్చు." },
          example: { en: "There's a barricade. The road might be closed for repairs.", te: "బారికేడ్ ఉంది. రిపేర్ల కోసం రోడ్డు మూసేసి ఉండొచ్చు." },
        },
        {
          form: "can't be",
          useFor: { en: "A sign shows it is not true.", te: "అది నిజం కాదని ఒక గుర్తు చూపిస్తోంది." },
          example: { en: "It can't be an accident. There's no ambulance.", te: "ప్రమాదం అయ్యుండదు. అంబులెన్స్ ఏదీ లేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "We are stuck here since twenty minutes.",
      right: "We've been stuck here for twenty minutes.",
      why: {
        en: "Time up to now takes have been with for; Telugu says it in the present.",
        te: "ఇప్పటిదాకా సాగుతున్న సమయానికి have been, for వాడాలి; తెలుగులో వర్తమానంలోనే చెప్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "The police is everywhere.",
      right: "The police are everywhere.",
      why: {
        en: "Police means many officers together, so it always takes are.",
        te: "police అంటే చాలామంది పోలీసులు కలిసి; అందుకే ఎప్పుడూ are వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "You hear drums and see people with flowers. The road is blocked. What do you say?",
        te: "డప్పుల శబ్దం వినిపిస్తోంది, పూలతో జనం కనిపిస్తున్నారు. రోడ్డు మూసేసి ఉంది. ఏమంటారు?",
      },
      options: ["There must be a procession.", "There must a procession.", "There can't be a procession."],
      answer: 0,
      why: {
        en: "Drums and flowers are strong signs, so the guess uses must be.",
        te: "డప్పులు, పూలు గట్టి గుర్తులు; అందుకే must be తో ఊహిస్తాం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "duration",
      sentence: "We've been stuck here ___ twenty minutes.",
      te: "ఇరవై నిమిషాలుగా ఇక్కడే ఇరుక్కుపోయాం.",
      options: ["for", "since", "from"],
      answer: 0,
      why: {
        en: "Use for with a length of time, and since with a starting time.",
        te: "ఎంతసేపో చెప్తే for; ఎప్పట్నుంచో చెప్తే since.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "The traffic is stuck, but you see no ambulance. Your friend asks: Is it an accident? Answer.",
        te: "ట్రాఫిక్ ఆగిపోయింది, కానీ అంబులెన్స్ ఏమీ కనిపించట్లేదు. ప్రమాదమా? అని స్నేహితులు అడుగుతున్నారు. జవాబు చెప్పండి.",
      },
      options: ["It can't be an accident. There's no ambulance.", "It mustn't be an accident. There's no ambulance.", "It can't be a accident. There's no ambulance."],
      answer: 0,
      why: {
        en: "No ambulance rules it out, so say can't be, with an before a vowel sound.",
        te: "అంబులెన్స్ లేదు కాబట్టి can't be; accident అచ్చుతో మొదలవుతుంది, అందుకే ముందు an.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "question",
      sentence: "Why the traffic is not moving?",
      wrongIndex: 1,
      fix: "Why is the traffic not moving?",
      why: {
        en: "In a why question, is comes before the traffic, unlike the Telugu order.",
        te: "why ప్రశ్నలో is, the traffic కంటే ముందు వస్తుంది; తెలుగులో వరుస అలా మారదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You are in an auto, and the traffic has stopped. Ask the driver why.",
        te: "మీరు ఆటోలో ఉన్నారు, ట్రాఫిక్ ఆగిపోయింది. ఎందుకని డ్రైవర్‌ని అడగండి.",
      },
      expected: ["Why is the traffic not moving?", "Why isn't the traffic moving?", "Why is the road blocked?"],
      options: ["Why is the traffic not moving?", "Why the traffic is not moving?", "Why is the traffic not move?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Your friend calls and asks where you are. Say you have been stuck in traffic for half an hour.",
        te: "స్నేహితులు ఫోన్ చేసి ఎక్కడున్నారని అడుగుతున్నారు. అరగంటగా ట్రాఫిక్‌లో ఇరుక్కుపోయారని చెప్పండి.",
      },
      expected: ["I've been stuck in traffic for half an hour.", "I have been stuck in traffic for half an hour.", "I'm stuck in traffic. It's been half an hour."],
      options: ["I've been stuck in traffic for half an hour.", "I am stuck in traffic since half an hour.", "I've been stuck in traffic since half an hour."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Stuck in an auto", te: "ఆటోలో ఇరుక్కుపోయాం" },
    scene: {
      en: "You are in an auto, going to the bus stand. Suddenly the traffic stops. You can hear drums ahead. Fatima is driving.",
      te: "మీరు ఆటోలో బస్ స్టాండ్‌కి వెళ్తున్నారు. ఒక్కసారిగా ట్రాఫిక్ ఆగిపోయింది. ముందు నుంచి డప్పుల శబ్దం వినిపిస్తోంది. ఫాతిమా గారు ఆటో నడుపుతున్నారు.",
    },
    partner: { en: "Fatima (the auto driver)", te: "ఫాతిమా (ఆటో డ్రైవర్)" },
    skills: [
      { id: "guess", label: { en: "Guessing the reason", te: "కారణం ఊహించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Sorry, we can't move. The road ahead is blocked.",
        te: "సారీ, ముందుకు వెళ్ళలేం. ముందు రోడ్డు మూసేసి ఉంది.",
        hint: { en: "Ask her why the road is blocked.", te: "రోడ్డు ఎందుకు మూసేశారని ఆవిడని అడగండి." },
        replies: [
          { say: "Oh! Why is the road blocked?", good: true, skill: "guess" },
          { say: "Oh! Why the road is blocked?", good: false, skill: "guess", fixIt: "question" },
        ],
      },
      {
        partner: "I'm not sure. Can you hear the drums?",
        te: "ఖచ్చితంగా తెలియదు. డప్పుల శబ్దం వినిపిస్తోందా?",
        hint: { en: "Make a sure guess from the drums.", te: "డప్పుల శబ్దాన్ని బట్టి గట్టిగా ఊహించండి." },
        replies: [
          { say: "Yes. There must be a procession.", good: true, skill: "guess" },
          { say: "It must be a Ganesh procession.", good: true, skill: "guess" },
          { say: "Yes. It must a procession.", good: false, skill: "guess", fixIt: "be" },
        ],
      },
      {
        partner: "Yes, I can see the idol now. It will take twenty minutes.",
        te: "అవును, ఇప్పుడు విగ్రహం కనిపిస్తోంది. ఇరవై నిమిషాలు పడుతుంది.",
        hint: { en: "Say your bus leaves soon, and ask about another road.", te: "మీ బస్సు త్వరలో బయలుదేరుతుందని చెప్పి, వేరే దారి ఉందా అని అడగండి." },
        replies: [
          { say: "My bus leaves at five. Is there another road?", good: true, skill: "polite" },
          {
            say: "Twenty minutes? Just drive on the footpath!",
            good: false,
            skill: "polite",
            react: { en: "No, no. That's not safe, and it's not allowed.", te: "వద్దు వద్దు. అది ప్రమాదం, పైగా అలా వెళ్ళకూడదు." },
          },
        ],
      },
      {
        partner: "There's a diversion near the school. I'll take that road.",
        te: "స్కూల్ దగ్గర డైవర్షన్ ఉంది. ఆ దారిలో వెళ్తాను.",
        hint: { en: "Agree, and thank her.", te: "ఒప్పుకుని, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, please take that road. Thank you.", good: true, skill: "polite" },
          { say: "Okay, please take that road. Thanks you.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
