import type { Lesson } from "../../types";

/** Week 56, Day 3 (CURRICULUM §5): signs in the passive — Parking is not permitted in front of the gate. Smoking is prohibited. */
export const day: Lesson = {
  id: "signs-is-not-permitted",
  kind: "lesson",
  title: { en: "Parking Is Not Permitted", te: "ఇక్కడ పార్కింగ్ చేయకూడదు" },
  subtitle: "is not permitted, is prohibited",
  summary: {
    en: "Learn to read signs and explain them to others: Parking is not permitted here. Photography is not permitted inside the museum.",
    te: "బోర్డుల మీద రాసింది చదివి, ఇతరులకి చెప్పడం నేర్చుకుందాం: Parking is not permitted here. Photography is not permitted inside the museum.",
  },
  seo: {
    title: "Reading Signs in English for Telugu Speakers",
    description:
      "Understand signs like Parking is not permitted and Smoking is prohibited. Simple lessons for Telugu speakers at stations, museums and gates.",
  },
  pattern: [
    { text: "Parking", role: "who" },
    { text: "is not permitted", role: "action" },
    { text: "here", role: "what" },
  ],
  core: [
    { en: "Parking is not permitted here.", te: "ఇక్కడ పార్కింగ్ చేయకూడదు.", extra: ["are"] },
    { en: "Photography is not permitted inside the museum.", te: "మ్యూజియం లోపల ఫోటోలు తీయకూడదు.", extra: ["permit"] },
    { en: "Smoking is prohibited at the station.", te: "స్టేషన్‌లో సిగరెట్ తాగడం నిషేధం.", extra: ["prohibit"] },
    { en: "What does this board say?", te: "ఈ బోర్డు మీద ఏం రాసి ఉంది?", extra: ["is"] },
    { en: "Entry is not permitted after six in the evening.", te: "సాయంత్రం ఆరు తర్వాత లోపలికి అనుమతి లేదు.", extra: ["at"] },
    { en: "Sorry, you can't park here. It's written on the board.", te: "సారీ, ఇక్కడ పార్క్ చేయకూడదు. బోర్డు మీద రాసి ఉంది.", extra: ["write"] },
    { en: "Crossing the tracks is not permitted.", te: "పట్టాలు దాటకూడదు.", extra: ["Cross"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look for one sign today, at a shop, a bus stand or a hospital. Read it aloud, and say what it means.",
    te: "ఈ రోజు షాపు, బస్ స్టాండ్ లేదా ఆసుపత్రిలో ఒక బోర్డు చూడండి. గట్టిగా చదివి, దాని అర్థం చెప్పండి.",
  },
  words: [
    { en: "permitted", te: "అనుమతి ఉంది" },
    { en: "not permitted", te: "అనుమతి లేదు, చేయకూడదు" },
    { en: "prohibited", te: "నిషేధం" },
    { en: "photography", te: "ఫోటోలు తీయడం" },
    { en: "museum", te: "మ్యూజియం, ప్రదర్శనశాల" },
  ],
  grammar: ["passive-voice", "should-must-have-to", "yes-no-questions"],
  topics: ["travel", "transport"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Reading signs", te: "బోర్డులు చదవడం" },
      body: {
        en: "Signs say what you must not do with is not permitted or is prohibited. Both mean not allowed: Parking is not permitted here.",
        te: "చేయకూడని పనిని బోర్డులు is not permitted లేదా is prohibited అని చెప్తాయి. రెండింటికీ అర్థం not allowed: Parking is not permitted here.",
      },
      bridge: {
        te: ["ఇక్కడ", "పార్కింగ్", "చేయకూడదు"],
        en: [
          { text: "Parking", role: "who" },
          { text: "is not permitted", role: "action" },
          { text: "here", role: "what" },
        ],
      },
      examples: [
        { en: "Parking is not permitted here.", te: "ఇక్కడ పార్కింగ్ చేయకూడదు." },
        { en: "Photography is not permitted inside the museum.", te: "మ్యూజియం లోపల ఫోటోలు తీయకూడదు." },
        { en: "Smoking is prohibited at the station.", te: "స్టేషన్‌లో సిగరెట్ తాగడం నిషేధం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Allowed, permitted, prohibited", te: "allowed, permitted, prohibited తేడా" },
      items: [
        {
          form: "is not allowed",
          useFor: { en: "Everyday talk: a rule says no.", te: "మామూలు మాటల్లో: నియమం ఒప్పుకోదు." },
          example: { en: "Outside food is not allowed in the cinema.", te: "సినిమా హాల్‌లోకి బయటి తిండి తీసుకెళ్ళకూడదు." },
        },
        {
          form: "is not permitted",
          useFor: { en: "The same meaning, more formal: on boards and notices.", te: "అదే అర్థం, కొంచెం ఫార్మల్‌గా: బోర్డులు, నోటీసుల మీద." },
          example: { en: "Photography is not permitted inside the museum.", te: "మ్యూజియం లోపల ఫోటోలు తీయకూడదు." },
        },
        {
          form: "is prohibited",
          useFor: { en: "A strong no, often by law.", te: "గట్టి నిషేధం, చాలాసార్లు చట్టం ప్రకారం." },
          example: { en: "Smoking is prohibited at the station.", te: "స్టేషన్‌లో సిగరెట్ తాగడం నిషేధం." },
        },
        {
          form: "It's written on the board.",
          useFor: { en: "Show someone the rule kindly.", te: "నియమం ఎక్కడ ఉందో మర్యాదగా చూపించడానికి." },
          example: { en: "Sorry, you can't park here. It's written on the board.", te: "సారీ, ఇక్కడ పార్క్ చేయకూడదు. బోర్డు మీద రాసి ఉంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "plural",
      wrong: "Luggages are not permitted inside.",
      right: "Luggage is not permitted inside.",
      why: {
        en: "Luggage never takes s, and it takes is, like water or rice.",
        te: "luggage కి ఎప్పుడూ s రాదు, is వస్తుంది: water, rice లాగే.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "It's written on board.",
      right: "It's written on the board.",
      why: {
        en: "Say the board when you both can see it; Telugu has no word like the.",
        te: "ఇద్దరికీ కనిపించే బోర్డు కాబట్టి the board అనాలి; తెలుగులో the లాంటి పదం ఉండదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "A visitor asks: Isn't smoking allowed here? The board says it is prohibited. Answer.",
        te: "Isn't smoking allowed here? అని ఒక visitor అడుగుతున్నారు. నిషేధం అని బోర్డు మీద ఉంది. జవాబు చెప్పండి.",
      },
      options: ["No, it isn't. It's prohibited here.", "Yes, it isn't. It's prohibited here.", "Yes, it is. It's prohibited here."],
      answer: 0,
      why: {
        en: "In English, No goes with not. Telugu అవును can agree with the question, but English Yes cannot.",
        te: "ఇంగ్లీష్‌లో not ఉన్న జవాబుకి No వస్తుంది. తెలుగులో అవును అన్నట్టు ఇక్కడ Yes అనకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Photography ___ not permitted inside the museum.",
      te: "మ్యూజియం లోపల ఫోటోలు తీయకూడదు.",
      options: ["is", "are", "be"],
      answer: 0,
      why: {
        en: "Photography is one activity, like smoking, so it takes is.",
        te: "photography ఒకే పని, smoking లాగా; అందుకే is వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "South Central Railway",
      lines: [
        "Notice to all passengers",
        "Smoking is prohibited inside the station.",
        "Parking is not permitted in front of the main gate.",
        "Please use the parking area near platform one.",
        "Crossing the tracks is not permitted.",
        "Please use the foot overbridge to change platforms.",
        "Senior citizens can ask for a wheelchair at the enquiry counter.",
        "Thank you. Station Manager",
      ],
      questions: [
        {
          prompt: { en: "Where can you park your car?", te: "మీ కారు ఎక్కడ పార్క్ చేయొచ్చు?" },
          options: ["In the parking area near platform one", "In front of the main gate", "Next to the tracks"],
          answer: 0,
          why: {
            en: "The notice says no parking at the main gate, and it sends cars to platform one.",
            te: "మెయిన్ గేట్ ముందు పార్కింగ్ కుదరదని, ప్లాట్‌ఫాం ఒకటి దగ్గర పార్క్ చేయమని నోటీసులో ఉంది.",
          },
        },
        {
          prompt: { en: "How should you go to another platform?", te: "ఇంకో ప్లాట్‌ఫాంకి ఎలా వెళ్ళాలి?" },
          options: ["Use the foot overbridge", "Cross the tracks quickly", "Walk to the end of the platform"],
          answer: 0,
          why: {
            en: "Crossing the tracks is not permitted, so the notice tells you to use the bridge.",
            te: "పట్టాలు దాటడం కుదరదు; అందుకే bridge వాడమని నోటీసు చెప్తోంది.",
          },
        },
        {
          prompt: { en: "Where can an elderly passenger get a wheelchair?", te: "పెద్దవాళ్ళకి wheelchair ఎక్కడ దొరుకుతుంది?" },
          options: ["At the enquiry counter", "At the main gate", "In the parking area"],
          answer: 0,
          why: {
            en: "The seventh line tells senior citizens where to ask for a wheelchair.",
            te: "wheelchair ఎక్కడ అడగాలో ఏడో లైన్‌లో పెద్దవాళ్ళకి చెప్పారు.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Parking is not permitted in front the gate.",
      wrongIndex: 5,
      fix: "Parking is not permitted in front of the gate.",
      why: {
        en: "In front always needs of before the place; Telugu ముందు is one word, so we forget it.",
        te: "in front తర్వాత of తప్పకుండా రావాలి; తెలుగులో 'ముందు' ఒకే పదం కాబట్టి ఇది మర్చిపోతాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A man is parking his bike in front of the gate. Tell him kindly the board says no.",
        te: "ఒకాయన గేట్ ముందు బైక్ పెడుతున్నారు. బోర్డు మీద వద్దని ఉందని ఆయనకి మర్యాదగా చెప్పండి.",
      },
      expected: [
        "Sorry, you can't park here. It's written on the board.",
        "Sorry, parking is not permitted here.",
        "Sorry, parking is not permitted in front of the gate.",
        "Excuse me, parking is not allowed here.",
      ],
      options: ["Sorry, you can't park here. It's written on the board.", "Sorry, you can't park here. It's written on board.", "Hey! Can't you read the board?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "There is a board in English at the museum, but you can't read it well. Ask the guard what it says.",
        te: "మ్యూజియంలో ఇంగ్లీష్‌లో ఒక బోర్డు ఉంది, మీకు సరిగ్గా చదవడం రావట్లేదు. దాని మీద ఏం రాసి ఉందో గార్డ్‌ని అడగండి.",
      },
      expected: ["Excuse me, what does this board say?", "What does this board say?", "Excuse me, what is written on this board?"],
      options: ["Excuse me, what does this board say?", "Excuse me, what this board says?", "Excuse me, what is this board say?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Signs at the station", te: "స్టేషన్‌లో బోర్డులు" },
    scene: {
      en: "Imran is visiting from Bengaluru. He stops his car at the railway station gate and asks you something.",
      te: "బెంగళూరు నుంచి వచ్చిన ఇమ్రాన్ గారు రైల్వే స్టేషన్ గేట్ దగ్గర కారు ఆపి మిమ్మల్ని ఏదో అడుగుతున్నారు.",
    },
    partner: { en: "Imran (a visitor)", te: "ఇమ్రాన్ (ఊరికి కొత్తగా వచ్చినవారు)" },
    voice: "b",
    skills: [
      { id: "explain", label: { en: "Explaining signs", te: "బోర్డులు వివరించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Excuse me, can I leave my car here for ten minutes?",
        te: "ఎక్స్‌క్యూజ్ మీ, ఇక్కడ పది నిమిషాలు కారు పెట్టొచ్చా?",
        hint: { en: "Say sorry, and tell him the rule on the board.", te: "సారీ చెప్పి, బోర్డు మీద ఉన్న నియమం ఆయనకి చెప్పండి." },
        replies: [
          { say: "Sorry, parking is not permitted in front of the gate.", good: true, skill: "explain" },
          { say: "Sorry, parking is not permitted in front the gate.", good: false, skill: "explain", fixIt: "preposition" },
        ],
      },
      {
        partner: "Oh, I didn't see the board. Where can I park, then?",
        te: "అయ్యో, బోర్డు చూడలేదు. అయితే ఎక్కడ పార్క్ చేయాలి?",
        hint: { en: "Tell him about the parking area near platform one.", te: "ప్లాట్‌ఫాం ఒకటి దగ్గర ఉన్న పార్కింగ్ గురించి చెప్పండి." },
        replies: [
          { say: "There's a parking area near platform one.", good: true, skill: "explain" },
          { say: "There's parking area near platform one.", good: false, skill: "explain", fixIt: "article" },
        ],
      },
      {
        partner: "Thanks. Isn't smoking allowed anywhere in the station?",
        te: "థాంక్స్. స్టేషన్‌లో ఎక్కడా సిగరెట్ తాగకూడదా?",
        hint: { en: "Answer the question: it is not allowed anywhere in the station.", te: "జవాబు చెప్పండి: స్టేషన్‌లో ఎక్కడా కుదరదు." },
        replies: [
          { say: "No, it isn't. Smoking is prohibited in the whole station.", good: true, skill: "explain" },
          { say: "Yes, it isn't. Smoking is prohibited in the whole station.", good: false, skill: "explain", fixIt: "negative-answer" },
          {
            say: "Smoking? Shame on you, at your age!",
            good: false,
            skill: "polite",
            react: { en: "I was only asking! I want to know the rules.", te: "ఊరికే అడిగానండీ! నియమాలు తెలుసుకోవాలని." },
          },
        ],
      },
      {
        partner: "I see. Thank you so much for your help!",
        te: "అర్థమైంది. మీ సహాయానికి చాలా థాంక్స్!",
        hint: { en: "Say it was no trouble, and wish him a good trip.", te: "పర్లేదని చెప్పి, ప్రయాణం బాగా జరగాలని చెప్పండి." },
        replies: [
          { say: "You're welcome. Have a safe journey!", good: true, skill: "polite" },
          { say: "Not at all. Have a safe journey!", good: true, skill: "polite" },
          { say: "You're welcome. Have safe journey!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
