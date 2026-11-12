import type { Lesson } from "../../types";

/** Week 59, Day 2 (CURRICULUM §5): where for places — That's the hotel where we had lunch last year. */
export const day: Lesson = {
  id: "the-place-where-we-had-lunch",
  kind: "lesson",
  title: { en: "The Place Where We Had Lunch", te: "మనం భోజనం చేసిన చోటు" },
  subtitle: "where for places",
  summary: {
    en: "Learn to talk about places with where: That's the hotel where we had lunch last year.",
    te: "చోట్ల గురించి where తో చెప్పడం నేర్చుకుందాం: That's the hotel where we had lunch last year.",
  },
  seo: {
    title: "Where for Places in English for Telugu Speakers",
    description:
      "Say That's the hotel where we had lunch last year. Simple lessons for Telugu speakers on talking about places with where.",
  },
  pattern: [
    { text: "That's", role: "who" },
    { text: "the hotel where", role: "what" },
    { text: "we had lunch", role: "action" },
    { text: "last year", role: "when" },
  ],
  core: [
    { en: "That's the hotel where we had lunch last year.", te: "పోయిన సంవత్సరం మనం భోజనం చేసిన హోటల్ అదే.", extra: ["which"] },
    { en: "Is there a shop where I can print photos?", te: "ఫోటోలు ప్రింట్ తీయించుకునే షాపు ఏదైనా ఉందా?", extra: ["who"] },
    { en: "This is the park where I walk every morning.", te: "నేను రోజూ పొద్దున నడిచే పార్క్ ఇదే.", extra: ["walking"] },
    { en: "That's the school where I studied.", te: "నేను చదువుకున్న స్కూల్ అదే.", extra: ["in"] },
    { en: "The tiffin centre where we had breakfast is very famous.", te: "మనం టిఫిన్ చేసిన ఆ టిఫిన్ సెంటర్ చాలా ఫేమస్.", extra: ["are"] },
    { en: "I'll show you around the area where I grew up.", te: "నేను పెరిగిన ఏరియా అంతా మీకు చూపిస్తాను.", extra: ["grown"] },
    { en: "There's a nice spot near the lake where people sit.", te: "చెరువు దగ్గర అందరూ కూర్చునే మంచి చోటు ఒకటి ఉంది.", extra: ["sitting"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at one place near your home and say what people do there: That's the … where …",
    te: "మీ ఇంటి దగ్గర ఒక చోటు చూసి, అక్కడ అందరూ ఏం చేస్తారో చెప్పండి: That's the … where …",
  },
  words: [
    { en: "photo studio", te: "ఫోటో స్టూడియో" },
    { en: "print", te: "ప్రింట్ తీయడం" },
    { en: "show around", te: "చుట్టూ తిప్పి చూపించడం" },
    { en: "spot", te: "చోటు, ప్రదేశం" },
    { en: "tiffin centre", te: "టిఫిన్ సెంటర్" },
  ],
  grammar: ["relative-clauses", "past-simple", "there-is-are"],
  topics: ["directions", "travel", "food"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "where for places", te: "చోట్లకి where" },
      body: {
        en: "To say what happens in a place, put where after the place, then who did what: the hotel where we had lunch.",
        te: "ఒక చోటులో ఏం జరిగిందో చెప్పాలంటే, ఆ చోటు తర్వాత where, ఆ తర్వాత ఎవరు ఏం చేశారో చెప్పండి: the hotel where we had lunch (మనం భోజనం చేసిన హోటల్).",
      },
      bridge: {
        te: ["పోయిన సంవత్సరం", "మనం భోజనం చేసిన", "హోటల్", "అదే"],
        en: [
          { text: "That's", role: "who" },
          { text: "the hotel where", role: "what" },
          { text: "we had lunch", role: "action" },
          { text: "last year", role: "when" },
        ],
      },
      examples: [
        { en: "That's the hotel where we had lunch last year.", te: "పోయిన సంవత్సరం మనం భోజనం చేసిన హోటల్ అదే." },
        { en: "Is there a shop where I can print photos?", te: "ఫోటోలు ప్రింట్ తీయించుకునే షాపు ఏదైనా ఉందా?" },
        { en: "This is the park where I walk every morning.", te: "నేను రోజూ పొద్దున నడిచే పార్క్ ఇదే." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "where or which", te: "where ఆ, which ఆ" },
      items: [
        {
          form: "the place where + who + verb",
          useFor: { en: "Say what people do in that place.", te: "ఆ చోటులో ఎవరు ఏం చేస్తారో చెప్పడానికి." },
          example: { en: "That's the school where I studied.", te: "నేను చదువుకున్న స్కూల్ అదే." },
        },
        {
          form: "the place which + verb",
          useFor: { en: "Say what the place itself does.", te: "ఆ చోటే ఏం చేసిందో చెప్పడానికి." },
          example: { en: "That's the photo studio which opened last month.", te: "పోయిన నెల తెరిచిన ఫోటో స్టూడియో అదే." },
        },
        {
          form: "a shop where I can …",
          useFor: { en: "Ask for a place to get something done.", te: "ఏదైనా పని అయ్యే చోటు గురించి అడగడానికి." },
          example: { en: "Is there a shop where I can print photos?", te: "ఫోటోలు ప్రింట్ తీయించుకునే షాపు ఏదైనా ఉందా?" },
        },
        {
          form: "show you around",
          useFor: { en: "Offer to take a visitor round your area.", te: "అతిథికి మీ ఏరియా చుట్టూ తిప్పి చూపిస్తానని చెప్పడానికి." },
          example: { en: "I'll show you around the area where I grew up.", te: "నేను పెరిగిన ఏరియా అంతా మీకు చూపిస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "We had lunch there today afternoon.",
      right: "We had lunch there this afternoon.",
      why: {
        en: "English says this morning and this afternoon; today afternoon comes word for word from Telugu.",
        te: "ఇంగ్లీష్‌లో this morning, this afternoon అంటారు; today afternoon అనేది 'ఈ రోజు మధ్యాహ్నం' నుంచి వచ్చిన అలవాటు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "That's the hotel which we had lunch.",
      right: "That's the hotel where we had lunch.",
      why: {
        en: "When you mean in that place, use where, not which.",
        te: "'ఆ చోటులో' అనే అర్థం వస్తే which కాదు, where వాడాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "A visitor asks about the big hotel. Tell her you had lunch there last year.",
        te: "పెద్ద హోటల్ గురించి అతిథి అడుగుతున్నారు. పోయిన సంవత్సరం అక్కడ భోజనం చేశామని చెప్పండి.",
      },
      options: [
        "That's the hotel where we had lunch last year.",
        "That the hotel where we had lunch last year.",
        "That's the hotel where we have lunch last year.",
      ],
      answer: 0,
      why: {
        en: "That's means that is, and last year needs the past form had.",
        te: "That's అంటే that is; last year ఉంది కాబట్టి past form had వాడాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Is there a shop ___ I can print photos?",
      te: "ఫోటోలు ప్రింట్ తీయించుకునే షాపు ఏదైనా ఉందా?",
      options: ["where", "which", "when"],
      answer: 0,
      why: {
        en: "You get the work done inside the shop, so the place takes where.",
        te: "ఆ షాపు లోపల పని చేయించుకుంటాం, అందుకే చోటుకి where వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "Tell a visitor about the park near your home. You walk there daily.",
        te: "మీ ఇంటి దగ్గర పార్క్ గురించి అతిథికి చెప్పండి. మీరు రోజూ అక్కడ నడుస్తారు.",
      },
      options: [
        "This is the park where I walk every morning.",
        "This is the park where I am walking every morning.",
        "This is the park which I walk every morning.",
      ],
      answer: 0,
      why: {
        en: "Something you do every day takes the simple form, not -ing.",
        te: "రోజూ చేసే పనికి -ing కాదు, verb మామూలు form వాడాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "That's the school where I studied in.",
      wrongIndex: 6,
      fix: "That's the school where I studied.",
      why: {
        en: "Where already means in that place, so do not add in at the end.",
        te: "where అంటేనే 'ఆ చోటులో'; అందుకే చివర in అక్కర్లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You need prints of some old photos. Ask a shopkeeper about a place nearby.",
        te: "కొన్ని పాత ఫోటోలు ప్రింట్ తీయించాలి. దగ్గర్లో ఏదైనా చోటు ఉందా అని ఒక షాపువారిని అడగండి.",
      },
      expected: [
        "Is there a shop where I can print photos?",
        "Is there a photo studio near here?",
        "Where can I print photos?",
        "Is there a shop near here where I can print photos?",
      ],
      options: ["Is there a shop where I can print photos?", "Is there a shop which I can print photos?", "There is a shop where I can print photos?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A friend from Kurnool is visiting you. Offer to show her your area.",
        te: "కర్నూలు నుంచి ఒక స్నేహితురాలు మీ దగ్గరికి వచ్చారు. మీ ఏరియా చూపిస్తానని చెప్పండి.",
      },
      expected: ["Let me show you around.", "I'll show you around the area.", "I'll show you around.", "Come, I'll show you around."],
      options: ["Let me show you around.", "Let me show around you.", "I will showing you around."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Showing a friend around", te: "స్నేహితురాలికి ఊరు చూపించడం" },
    scene: {
      en: "Your friend Kavitha from Warangal is visiting your town, Rajahmundry. You are walking around together.",
      te: "వరంగల్ నుంచి మీ స్నేహితురాలు కవిత గారు మీ ఊరు రాజమండ్రికి వచ్చారు. మీరిద్దరూ కలిసి ఊర్లో తిరుగుతున్నారు.",
    },
    partner: { en: "Kavitha (your friend)", te: "కవిత (మీ స్నేహితురాలు)" },
    skills: [
      { id: "places", label: { en: "Talking about places", te: "చోట్ల గురించి చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "This is a lovely area! How long have you lived here?",
        te: "ఈ ఏరియా చాలా బాగుంది! మీరు ఇక్కడ ఎన్నాళ్ళుగా ఉంటున్నారు?",
        hint: { en: "Thank her, and say you have lived here for many years.", te: "థాంక్స్ చెప్పి, చాలా ఏళ్ళుగా ఇక్కడే ఉంటున్నారని చెప్పండి." },
        replies: [
          { say: "Thank you! I've lived here for many years.", good: true, skill: "places" },
          { say: "Thank you! I am living here for many years.", good: false, skill: "places", fixIt: "duration" },
        ],
      },
      {
        partner: "What is that big old building?",
        te: "ఆ పెద్ద పాత బిల్డింగ్ ఏంటి?",
        hint: { en: "Tell her it is the school where you studied.", te: "మీరు చదువుకున్న స్కూల్ అదే అని చెప్పండి." },
        replies: [
          { say: "That's the school where I studied.", good: true, skill: "places" },
          { say: "That's my old school. I studied there.", good: true, skill: "places" },
          { say: "That's the school which I studied.", good: false, skill: "places" },
        ],
      },
      {
        partner: "I'm hungry. Is there a good place to eat?",
        te: "నాకు ఆకలేస్తోంది. తినడానికి మంచి చోటు ఏదైనా ఉందా?",
        hint: { en: "Suggest the tiffin centre from her last visit.", te: "ఆవిడ పోయినసారి వచ్చినప్పుడు వెళ్ళిన టిఫిన్ సెంటర్ సూచించండి." },
        replies: [
          { say: "Yes! Let's go to the tiffin centre where we had breakfast last time.", good: true, skill: "places" },
          {
            say: "You just ate! Are you hungry again?",
            good: false,
            skill: "polite",
            react: { en: "Ha! Walking makes me hungry. Let's go.", te: "హహ! నడిస్తే నాకు ఆకలేస్తుంది. పదండి వెళ్దాం." },
          },
        ],
      },
      {
        partner: "Oh yes, their pesarattu was wonderful! Thank you for the tour.",
        te: "అవును, అక్కడ తిన్న పెసరట్టు అద్భుతం! ఊరు చూపించినందుకు థాంక్స్.",
        hint: { en: "Say it was a pleasure, and invite her to come again.", te: "మీకు సంతోషమని చెప్పి, మళ్ళీ రమ్మని పిలవండి." },
        replies: [
          { say: "It was a pleasure. Please come again soon.", good: true, skill: "polite" },
          { say: "It was pleasure. Please come again soon.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
