import type { Lesson } from "../../types";

/** Week 73, Day 2 (CURRICULUM §5): might be / could be for guesses that are less sure — The shop might be closed for lunch. */
export const day: Lesson = {
  id: "the-shop-might-be-closed",
  kind: "lesson",
  title: { en: "It Might Be Closed", te: "మూసేసి ఉండొచ్చు" },
  subtitle: "might be / could be",
  summary: {
    en: "Learn to guess when you are not so sure: The shop might be closed for lunch. It could be a holiday today.",
    te: "అంత ఖచ్చితంగా తెలియనప్పుడు ఊహించడం నేర్చుకుందాం: The shop might be closed for lunch. It could be a holiday today.",
  },
  seo: {
    title: "Might Be and Could Be in English for Telugu Speakers",
    description:
      "Say The shop might be closed for lunch and It could be a holiday today. Simple lessons for Telugu speakers on guesses that are not sure.",
  },
  pattern: [
    { text: "The shop", role: "who" },
    { text: "might be", role: "action" },
    { text: "closed", role: "what" },
    { text: "for lunch", role: "when" },
  ],
  core: [
    { en: "The shop might be closed for lunch.", te: "షాప్ భోజనానికి మూసేసి ఉండొచ్చు.", extra: ["close"] },
    { en: "It could be a holiday today.", te: "ఈ రోజు సెలవు అయ్యుండొచ్చు.", extra: ["holidays"] },
    { en: "Sita might be at the temple.", te: "సీత గారు గుడిలో ఉండొచ్చు.", extra: ["is"] },
    { en: "He might be on leave today.", te: "ఈ రోజు ఆయన సెలవులో ఉండొచ్చు.", extra: ["in"] },
    { en: "The owner might be at the bank.", te: "షాప్ ఓనర్ గారు బ్యాంక్‌లో ఉండొచ్చు.", extra: ["to"] },
    { en: "The shutter is down. Let's try another shop.", te: "షట్టర్ మూసి ఉంది. వేరే షాప్‌లో చూద్దాం.", extra: ["other"] },
    { en: "It's Tuesday. It could be their weekly holiday.", te: "ఈ రోజు మంగళవారం. వాళ్ళ వారపు సెలవు అయ్యుండొచ్చు.", extra: ["week"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "If a shop or office is shut today, guess why aloud: It might be …",
    te: "ఈ రోజు ఏదైనా షాపో ఆఫీసో మూసి ఉంటే, ఎందుకో గట్టిగా ఊహించి చెప్పండి: It might be …",
  },
  words: [
    { en: "might be", te: "… అయ్యుండొచ్చు, … ఉండొచ్చు" },
    { en: "could be", te: "… అయ్యుండొచ్చు" },
    { en: "shutter", te: "షట్టర్" },
    { en: "half day", te: "హాఫ్ డే, సగం రోజే పని" },
    { en: "weekly holiday", te: "వారపు సెలవు" },
  ],
  grammar: ["might-may", "passive-voice", "prepositions"],
  topics: ["shopping", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Not so sure: might be, could be", te: "అంత ఖచ్చితంగా కాదు: might be, could be" },
      body: {
        en: "When you are not so sure, say might be or could be. Both mean maybe: The shop might be closed for lunch.",
        te: "అంత ఖచ్చితంగా తెలియనప్పుడు might be లేదా could be అనండి. రెండిటికీ అర్థం '… ఉండొచ్చు': The shop might be closed for lunch.",
      },
      bridge: {
        te: ["షాప్", "భోజనానికి", "మూసేసి ఉండొచ్చు"],
        en: [
          { text: "The shop", role: "who" },
          { text: "might be", role: "action" },
          { text: "closed", role: "what" },
          { text: "for lunch", role: "when" },
        ],
      },
      examples: [
        { en: "The shop might be closed for lunch.", te: "షాప్ భోజనానికి మూసేసి ఉండొచ్చు." },
        { en: "It could be a holiday today.", te: "ఈ రోజు సెలవు అయ్యుండొచ్చు." },
        { en: "Sita might be at the temple.", te: "సీత గారు గుడిలో ఉండొచ్చు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How sure are you?", te: "మీకు ఎంత ఖచ్చితంగా తెలుసు?" },
      items: [
        {
          form: "is",
          useFor: { en: "You know it.", te: "మీకు తెలుసు." },
          example: { en: "The shop is closed on Tuesdays.", te: "మంగళవారాలు షాప్ మూసి ఉంటుంది." },
        },
        {
          form: "must be",
          useFor: { en: "You are almost sure.", te: "దాదాపు ఖచ్చితంగా అనిపిస్తుంది." },
          example: { en: "The shutter is down. It must be closed.", te: "షట్టర్ మూసి ఉంది. షాప్ మూసేసి ఉంటారు." },
        },
        {
          form: "might be / could be",
          useFor: { en: "Maybe: you are not sure.", te: "ఏమో: ఖచ్చితంగా తెలియదు." },
          example: { en: "It might be a half day today.", te: "ఈ రోజు హాఫ్ డే అయ్యుండొచ్చు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "The shop might closed.",
      right: "The shop might be closed.",
      why: {
        en: "Closed tells how the shop is, so might needs be before it.",
        te: "closed అనేది షాప్ ఎలా ఉందో చెప్తుంది; అందుకే might తర్వాత be కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Maybe the shop might be closed.",
      right: "The shop might be closed.",
      why: {
        en: "Might already means maybe, so do not use both in one sentence.",
        te: "might లోనే 'ఏమో' అనే అర్థం ఉంది; దానితో పాటు maybe కూడా చేర్చకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "It's half past one, and the medical shop is shut. You are not sure why. What do you tell your friend?",
        te: "ఒకటిన్నర అయింది, మెడికల్ షాప్ మూసి ఉంది. ఎందుకో మీకు ఖచ్చితంగా తెలియదు. స్నేహితులకి ఏం చెప్తారు?",
      },
      options: ["It might be closed for lunch.", "It might be close for lunch.", "It might closed for lunch."],
      answer: 0,
      why: {
        en: "A guess about how the shop is needs might be, then closed with a d.",
        te: "షాప్ ఎలా ఉందో ఊహించాలంటే might be, తర్వాత closed (చివర d తో).",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "article",
      sentence: "It might be ___ important day for them.",
      te: "వాళ్ళకి ఈ రోజు ఏదో ముఖ్యమైన రోజు అయ్యుండొచ్చు.",
      options: ["an", "a", "one"],
      answer: 0,
      why: {
        en: "Important starts with a vowel sound, so it takes an; Telugu ఏదో is not one.",
        te: "important అచ్చు శబ్దంతో మొదలవుతుంది, అందుకే an; తెలుగు 'ఏదో' కి one అనకూడదు.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "sign",
      heading: "Lakshmi Medicals",
      lines: ["Closed for lunch", "1 pm to 4 pm", "Sorry for the trouble"],
      prompt: {
        en: "It's 2 pm. You see this sign on the shutter. What do you tell your friend?",
        te: "మధ్యాహ్నం 2 అయింది. షట్టర్ మీద ఈ బోర్డు కనిపించింది. స్నేహితులకి ఏం చెప్తారు?",
      },
      options: ["It's closed for lunch till 4.", "It might be a holiday today.", "It opens again at 1."],
      answer: 0,
      why: {
        en: "The sign gives the reason and the time, so there is no need to guess.",
        te: "బోర్డు మీదే కారణం, టైమ్ రాసి ఉన్నాయి; కాబట్టి ఊహించాల్సిన అవసరం లేదు.",
      },
      say: "Closed for lunch, 1 pm to 4 pm.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "indian-english",
      sentence: "The shop was shut today morning, so it might be a holiday.",
      wrongIndex: 4,
      fix: "The shop was shut this morning, so it might be a holiday.",
      why: {
        en: "English says this morning; today morning copies the Telugu ఈ రోజు పొద్దున.",
        te: "ఇంగ్లీష్‌లో this morning అంటారు; today morning అనేది 'ఈ రోజు పొద్దున' ని నేరుగా మార్చడం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "At the post office, the clerk's seat is empty. Tell the person behind you: maybe the clerk is on leave.",
        te: "పోస్ట్ ఆఫీసులో క్లర్క్ సీటు ఖాళీగా ఉంది. మీ వెనకాల ఉన్నవారికి చెప్పండి: క్లర్క్ సెలవులో ఉండొచ్చు.",
      },
      expected: ["The clerk might be on leave today.", "He might be on leave today.", "She might be on leave today.", "The clerk could be on leave."],
      options: ["The clerk might be on leave today.", "The clerk might be in leave today.", "The clerk might on leave today."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your friend asks why the kirana shop is shut on a Tuesday. Guess: maybe it's their weekly holiday.",
        te: "మంగళవారం కిరాణా షాప్ ఎందుకు మూసి ఉందని స్నేహితులు అడుగుతున్నారు. ఊహించండి: వాళ్ళ వారపు సెలవు కావచ్చు.",
      },
      expected: ["It might be their weekly holiday.", "It could be their weekly holiday.", "It's Tuesday. It could be their weekly holiday."],
      options: ["It might be their weekly holiday.", "Might be it is their weekly holiday.", "It might their weekly holiday."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The shutter is down", te: "షట్టర్ మూసి ఉంది" },
    scene: {
      en: "It's half past one. You and your friend Joseph reach the medical shop to buy your tablets. The shutter is down.",
      te: "ఒకటిన్నర అయింది. మీరు, మీ స్నేహితుడు జోసెఫ్ గారు మీ మాత్రలు కొనడానికి మెడికల్ షాప్‌కి వచ్చారు. షట్టర్ మూసి ఉంది.",
    },
    partner: { en: "Joseph (your friend)", te: "జోసెఫ్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "guess", label: { en: "Guessing", te: "ఊహించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Oh no, the shutter is down! Why is it closed?",
        te: "అయ్యో, షట్టర్ మూసి ఉంది! ఎందుకు మూసేశారు?",
        hint: { en: "Say you are not sure, and guess it is lunch time.", te: "మీకు ఖచ్చితంగా తెలియదని చెప్పి, భోజన సమయం అయ్యుండొచ్చని ఊహించండి." },
        replies: [
          { say: "I'm not sure. It might be closed for lunch.", good: true, skill: "guess" },
          { say: "It could be closed for lunch.", good: true, skill: "guess" },
          { say: "I'm not sure. It might closed for lunch.", good: false, skill: "guess", fixIt: "be" },
        ],
      },
      {
        partner: "But it's Tuesday. Is it their weekly holiday?",
        te: "కానీ ఈ రోజు మంగళవారం. వాళ్ళ వారపు సెలవా?",
        hint: { en: "Say maybe, and suggest asking at the tea stall next door.", te: "కావచ్చు అని, పక్కనే ఉన్న టీ కొట్టులో అడుగుదామని చెప్పండి." },
        replies: [
          { say: "It could be. Let's ask at the tea stall.", good: true, skill: "guess" },
          {
            say: "How should I know? I'm not the owner.",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay! Don't be upset. I'm only asking.", te: "సరే సరే! కోప్పడకండి. ఊరికే అడుగుతున్నాను." },
          },
        ],
      },
      {
        partner: "The tea stall owner says it's a half day. They open again at four.",
        te: "ఈ రోజు హాఫ్ డే అని టీ కొట్టు ఆయన చెప్తున్నారు. మళ్ళీ నాలుగింటికి తెరుస్తారట.",
        hint: { en: "Say that is a long wait, and suggest another shop.", te: "అది చాలా సేపు అని చెప్పి, వేరే షాప్ సూచించండి." },
        replies: [
          { say: "That's a long wait. Let's try another shop.", good: true, skill: "guess" },
          { say: "That's long wait. Let's try another shop.", good: false, skill: "guess", fixIt: "article" },
        ],
      },
      {
        partner: "Good idea. There's one near the bus stand.",
        te: "మంచి ఆలోచన. బస్ స్టాండ్ దగ్గర ఒకటి ఉంది.",
        hint: { en: "Agree, and start walking with him.", te: "ఒప్పుకుని, ఆయనతో కలిసి నడవడం మొదలుపెట్టండి." },
        replies: [
          { say: "Okay, let's go there.", good: true, skill: "polite" },
          { say: "Sounds good. Let's go.", good: true, skill: "polite" },
          { say: "Okay, let's going there.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
