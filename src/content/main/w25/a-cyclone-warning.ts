import type { Lesson } from "../../types";

/** Week 25, Day 5 (CURRICULUM §4): warnings and staying safe — a cyclone warning, a heat wave; instructions and Don't. */
export const day: Lesson = {
  id: "a-cyclone-warning",
  kind: "lesson",
  title: { en: "A Cyclone Warning", te: "తుఫాను హెచ్చరిక" },
  subtitle: "warnings and staying safe",
  summary: {
    en: "Learn to understand and pass on a weather warning: There is a cyclone warning for tonight. Please stay inside.",
    te: "వాతావరణ హెచ్చరిక అర్థం చేసుకుని ఇతరులకి చెప్పడం నేర్చుకుందాం: There is a cyclone warning for tonight. Please stay inside.",
  },
  seo: {
    title: "Cyclone and Heat Wave Warnings in English for Telugu Speakers",
    description:
      "Say There is a cyclone warning for tonight and Don't go near the sea. Simple lessons for Telugu speakers on weather warnings.",
  },
  pattern: [
    { text: "There", role: "who" },
    { text: "is", role: "action" },
    { text: "a cyclone warning", role: "what" },
    { text: "for tonight", role: "when" },
  ],
  core: [
    { en: "There is a cyclone warning for tonight.", te: "ఈ రాత్రికి తుఫాను హెచ్చరిక ఉంది.", extra: ["are"] },
    { en: "Please stay inside tonight.", te: "ఈ రాత్రి ఇంట్లోనే ఉండండి, ప్లీజ్.", extra: ["staying"] },
    { en: "Keep a torch and some water ready.", te: "టార్చ్, కొంచెం మంచినీళ్ళు సిద్ధంగా పెట్టుకోండి.", extra: ["waters"] },
    { en: "Don't go near the sea.", te: "సముద్రం దగ్గరికి వెళ్ళకండి.", extra: ["to"] },
    { en: "Drink a lot of water in this heat.", te: "ఈ ఎండల్లో నీళ్ళు బాగా తాగండి.", extra: ["many"] },
    { en: "Stay inside from 12 to 3 in a heat wave.", te: "వడగాలుల సమయంలో 12 నుంచి 3 వరకు ఇంట్లోనే ఉండండి.", extra: ["at"] },
    { en: "Stay away from fallen electric wires.", te: "తెగిపడిన కరెంట్ తీగలకు దూరంగా ఉండండి.", extra: ["far"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find your torch at home, and check that it works.",
    te: "ఇంట్లో మీ టార్చ్ ఎక్కడుందో చూసి, అది పని చేస్తోందో లేదో చెక్ చేయండి.",
  },
  words: [
    { en: "cyclone", te: "తుఫాను" },
    { en: "warning", te: "హెచ్చరిక" },
    { en: "heat wave", te: "వడగాలులు" },
    { en: "coast", te: "సముద్ర తీరం" },
    { en: "stay indoors", te: "ఇంట్లోనే ఉండండి" },
  ],
  grammar: ["imperatives", "there-is-are"],
  topics: ["weather", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "When a warning comes", te: "హెచ్చరిక వచ్చినప్పుడు" },
      body: {
        en: "A warning tells you about danger: There is a cyclone warning. To tell people what to do, start with the verb: Stay inside. Keep water ready. For no, start with Don't: Don't go near the sea.",
        te: "ప్రమాదం గురించి చెప్పేది warning: There is a cyclone warning. ఏం చేయాలో చెప్పాలంటే verb తో మొదలుపెట్టండి: Stay inside. వద్దు అంటే Don't: Don't go near the sea.",
      },
      bridge: {
        te: ["ఈ రాత్రికి", "తుఫాను హెచ్చరిక", "ఉంది"],
        en: [
          { text: "There", role: "who" },
          { text: "is", role: "action" },
          { text: "a cyclone warning", role: "what" },
          { text: "for tonight", role: "when" },
        ],
      },
      examples: [
        { en: "There is a cyclone warning for tonight.", te: "ఈ రాత్రికి తుఫాను హెచ్చరిక ఉంది." },
        { en: "Please stay inside tonight.", te: "ఈ రాత్రి ఇంట్లోనే ఉండండి, ప్లీజ్." },
        { en: "Don't go near the sea.", te: "సముద్రం దగ్గరికి వెళ్ళకండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Staying safe", te: "జాగ్రత్తగా ఉండటం" },
      items: [
        {
          form: "a cyclone",
          useFor: { en: "Stay inside. Keep a torch and water ready.", te: "ఇంట్లోనే ఉండండి. టార్చ్, నీళ్ళు సిద్ధంగా పెట్టుకోండి." },
          example: { en: "Keep a torch and some water ready.", te: "టార్చ్, కొంచెం మంచినీళ్ళు సిద్ధంగా పెట్టుకోండి." },
        },
        {
          form: "a heat wave",
          useFor: { en: "Don't go out from 12 to 3. Drink water.", te: "12 నుంచి 3 వరకు బయటకు వెళ్ళకండి. నీళ్ళు బాగా తాగండి." },
          example: { en: "Stay inside from 12 to 3 in a heat wave.", te: "వడగాలుల సమయంలో 12 నుంచి 3 వరకు ఇంట్లోనే ఉండండి." },
        },
        {
          form: "heavy rain and floods",
          useFor: { en: "Keep away from fallen wires and deep water.", te: "తెగిపడిన తీగలకీ, లోతైన నీళ్ళకీ దూరంగా ఉండండి." },
          example: { en: "Stay away from fallen electric wires.", te: "తెగిపడిన కరెంట్ తీగలకు దూరంగా ఉండండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "There is cyclone warning.",
      right: "There is a cyclone warning.",
      why: {
        en: "One warning needs a before it; Telugu has no word like a.",
        te: "ఒక్క హెచ్చరిక అంటే ముందు a కావాలి; తెలుగులో a లాంటి పదం ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Don't go to near the sea.",
      right: "Don't go near the sea.",
      why: {
        en: "Near already means దగ్గరికి, so no to before it.",
        te: "near అంటేనే 'దగ్గరికి'; దాని ముందు to రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: { en: "Tell your neighbour about the warning on TV.", te: "TV లో వచ్చిన హెచ్చరిక గురించి పక్కింటివారికి చెప్పండి." },
      options: ["There is a cyclone warning for tonight.", "There cyclone warning for tonight.", "There are a cyclone warning for tonight."],
      answer: 0,
      why: {
        en: "One warning takes there is, and a goes before warning.",
        te: "ఒక్క హెచ్చరికకి there is; warning ముందు a వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "Weather Alert",
      lines: [
        "Cyclone warning for the Krishna district coast.",
        "Heavy rain and strong winds tonight.",
        "Stay indoors. Fishermen, do not go to sea.",
        "For help, call 112.",
      ],
      prompt: { en: "What does the message ask you to do tonight?", te: "ఈ రాత్రి ఏం చేయమని మెసేజ్‌లో ఉంది?" },
      options: ["Stay indoors.", "Go to the beach and see the waves.", "Travel to the coast."],
      answer: 0,
      why: {
        en: "The message says stay indoors, because strong winds and heavy rain are coming.",
        te: "బలమైన గాలులు, భారీ వర్షం వస్తున్నాయి; అందుకే ఇంట్లోనే ఉండమని మెసేజ్ చెప్తోంది.",
      },
      say: "Stay indoors. Fishermen, do not go to sea.",
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "There is a heat wave warning. When should you stay inside?", te: "వడగాలుల హెచ్చరిక ఉంది. ఏ సమయంలో ఇంట్లోనే ఉండాలి?" },
      options: ["From 12 to 3 in the afternoon.", "From 6 to 8 in the morning.", "From 8 to 10 at night."],
      answer: 0,
      why: {
        en: "The afternoon sun is very strong, so stay out of it.",
        te: "మధ్యాహ్నం ఎండ చాలా తీవ్రంగా ఉంటుంది, అందుకే బయటకు వెళ్ళకూడదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Keep a torch and some waters ready.",
      wrongIndex: 5,
      fix: "Keep a torch and some water ready.",
      why: {
        en: "We don't count water, so it never takes s.",
        te: "నీళ్ళని లెక్కపెట్టం, అందుకే water కి s రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "The TV says a cyclone is coming. Tell your neighbour to stay inside tonight.",
        te: "తుఫాను వస్తోందని TV లో చెప్తున్నారు. ఈ రాత్రి ఇంట్లోనే ఉండమని పక్కింటివారికి చెప్పండి.",
      },
      expected: ["Please stay inside tonight.", "Please stay at home tonight.", "Stay inside tonight."],
      options: ["Please stay inside tonight.", "Please staying inside tonight.", "Tonight inside you stay, please."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "A friend wants to go fishing during the cyclone. Warn him.",
        te: "తుఫాను సమయంలో ఒక స్నేహితులు చేపలు పట్టడానికి వెళ్ళాలనుకుంటున్నారు. హెచ్చరించండి.",
      },
      expected: ["Please don't go near the sea.", "Don't go near the sea.", "Don't go to the sea today."],
      options: ["Please don't go near the sea.", "Please don't go to near the sea.", "Please not go near the sea."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "News of a cyclone", te: "తుఫాను వార్త" },
    scene: {
      en: "Your neighbour Narayana saw a cyclone warning on the TV news. He comes to tell you.",
      te: "పక్కింటి నారాయణ గారు TV వార్తల్లో తుఫాను హెచ్చరిక చూశారు. మీకు చెప్పడానికి వచ్చారు.",
    },
    partner: { en: "Narayana (neighbour)", te: "నారాయణ (పక్కింటాయన)" },
    voice: "b",
    skills: [{ id: "safe", label: { en: "Staying safe", te: "జాగ్రత్తలు" } }],
    turns: [
      {
        partner: "Did you see the news? There is a cyclone warning.",
        te: "వార్తలు చూశారా? తుఫాను హెచ్చరిక ఉంది.",
        hint: { en: "Say you didn't see it, and ask when it will come.", te: "చూడలేదని చెప్పి, అది ఎప్పుడు వస్తుందో అడగండి." },
        replies: [
          { say: "No, I didn't. When will it come?", good: true, skill: "safe" },
          { say: "No, I didn't. When it will come?", good: false, skill: "safe", fixIt: "question" },
        ],
      },
      {
        partner: "Tonight. It will hit the coast near Nellore.",
        te: "ఈ రాత్రికే. నెల్లూరు దగ్గర తీరాన్ని తాకుతుంది.",
        hint: { en: "Ask him what you should do.", te: "ఏం చేయాలో ఆయనని అడగండి." },
        replies: [
          { say: "What should we do?", good: true, skill: "safe" },
          {
            say: "Oh, they always say that. Nothing happens.",
            good: false,
            skill: "safe",
            react: { en: "No, this time it's serious. Please be careful.", te: "లేదండీ, ఈసారి నిజంగానే ప్రమాదం. జాగ్రత్తగా ఉండండి." },
          },
        ],
      },
      {
        partner: "Stay inside, and keep a torch ready.",
        te: "ఇంట్లోనే ఉండండి, టార్చ్ సిద్ధంగా పెట్టుకోండి.",
        hint: { en: "Agree, and say you'll charge your phone and store water.", te: "సరే అని, ఫోన్ చార్జ్ చేసి నీళ్ళు పట్టుకుంటానని చెప్పండి." },
        replies: [
          { say: "Okay. I'll charge my phone and keep water too.", good: true, skill: "safe" },
          { say: "Okay. I'll charge my phone and keep waters too.", good: false, skill: "safe", fixIt: "plural" },
        ],
      },
      {
        partner: "Good. Call me any time, okay?",
        te: "మంచిది. ఎప్పుడైనా ఫోన్ చేయండి, సరేనా?",
        hint: { en: "Thank him for the news, and ask him to be careful too.", te: "వార్త చెప్పినందుకు థాంక్స్ చెప్పి, ఆయనని కూడా జాగ్రత్తగా ఉండమనండి." },
        replies: [
          { say: "Thank you. Please be careful too.", good: true },
          { say: "Thanks for the informations. Be careful too.", good: false, fixIt: "plural" },
        ],
      },
    ],
  },
};
