import type { Lesson } from "../../types";

/** Week 18, Day 1 (CURRICULUM §4): calling 108 or 112 — what happened (There's been an accident), how many, and where. */
export const day: Lesson = {
  id: "call-an-ambulance",
  kind: "lesson",
  title: { en: "Call an Ambulance!", te: "అంబులెన్స్‌కి ఫోన్ చేయండి!" },
  subtitle: "There's been an accident.",
  summary: {
    en: "Learn to call one zero eight calmly: say what happened, how many people are injured, and where you are.",
    te: "108 కి నిదానంగా ఫోన్ చేయడం నేర్చుకుందాం: ఏం జరిగింది, ఎంత మందికి దెబ్బలు తగిలాయి, మీరు ఎక్కడ ఉన్నారు అని చెప్పడం.",
  },
  seo: {
    title: "Calling an Ambulance in English for Telugu Speakers",
    description:
      "Call 108 and say There's been an accident. Please send an ambulance. Simple lessons for Telugu speakers on emergency calls.",
  },
  pattern: [
    { text: "Please send", role: "action" },
    { text: "an ambulance", role: "what" },
    { text: "to Ring Road", role: "what" },
  ],
  core: [
    { en: "There's been an accident.", te: "ఇక్కడ ఒక ప్రమాదం జరిగింది.", extra: ["a"] },
    { en: "Please send an ambulance to Ring Road.", te: "ప్లీజ్, రింగ్ రోడ్‌కి అంబులెన్స్ పంపించండి.", extra: ["sent"] },
    { en: "Two people are injured.", te: "ఇద్దరికి దెబ్బలు తగిలాయి.", extra: ["is"] },
    { en: "He is breathing, but he can't talk.", te: "ఆయన ఊపిరి తీసుకుంటున్నారు, కానీ మాట్లాడలేకపోతున్నారు.", extra: ["breath"] },
    { en: "We are near the old bus stand.", te: "మేము పాత బస్ స్టాండ్ దగ్గర ఉన్నాం.", extra: ["to"] },
    { en: "The address is 12, Ring Road, Nellore.", te: "అడ్రస్: 12, రింగ్ రోడ్, నెల్లూరు.", extra: ["are"] },
    { en: "Please hurry. He is an old man.", te: "ప్లీజ్, త్వరగా రండి. ఆయన పెద్దవారు.", extra: ["a"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Say your address aloud with one landmark near your house: We are near …",
    te: "మీ ఇంటి దగ్గర ఉన్న ఒక గుర్తుతో కలిపి మీ అడ్రస్ పైకి చెప్పండి: We are near …",
  },
  words: [
    { en: "accident", te: "ప్రమాదం, యాక్సిడెంట్" },
    { en: "quickly", te: "త్వరగా, వెంటనే" },
    { en: "injured", te: "దెబ్బలు తగిలిన" },
    { en: "breathing", te: "ఊపిరి తీసుకోవడం" },
    { en: "hurry", te: "త్వరగా రావడం" },
  ],
  grammar: ["imperatives", "articles", "present-continuous"],
  topics: ["health", "phone", "directions"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Calling for an ambulance", te: "అంబులెన్స్ కోసం ఫోన్" },
      body: {
        en: "Call one zero eight for an ambulance. Stay calm and say three things: what happened, how many are injured, and where you are. Start with There's been an accident.",
        te: "అంబులెన్స్ కోసం 108 కి ఫోన్ చేయండి. నిదానంగా మూడు విషయాలు చెప్పండి: ఏం జరిగింది, ఎంత మందికి దెబ్బలు, మీరు ఎక్కడ ఉన్నారు. There's been an accident తో మొదలుపెట్టండి.",
      },
      bridge: {
        te: ["ప్లీజ్", "రింగ్ రోడ్‌కి", "అంబులెన్స్", "పంపించండి"],
        en: [
          { text: "Please send", role: "action" },
          { text: "an ambulance", role: "what" },
          { text: "to Ring Road", role: "what" },
        ],
      },
      examples: [
        { en: "There's been an accident.", te: "ఇక్కడ ఒక ప్రమాదం జరిగింది." },
        { en: "Please send an ambulance to Ring Road.", te: "ప్లీజ్, రింగ్ రోడ్‌కి అంబులెన్స్ పంపించండి." },
        { en: "Please hurry. He is an old man.", te: "ప్లీజ్, త్వరగా రండి. ఆయన పెద్దవారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which number?", te: "ఏ నంబర్‌కి?" },
      items: [
        {
          form: "108",
          useFor: { en: "Ambulance: an accident, a fall, or someone very sick.", te: "అంబులెన్స్: ప్రమాదం, కింద పడటం, ఎవరికైనా బాగా జబ్బు చేస్తే." },
          example: { en: "Please send an ambulance quickly.", te: "ప్లీజ్, త్వరగా అంబులెన్స్ పంపించండి." },
        },
        {
          form: "112",
          useFor: { en: "Any emergency: police, fire or ambulance.", te: "ఏ అత్యవసరానికైనా: పోలీస్, ఫైర్, అంబులెన్స్." },
          example: { en: "Hello, there's been an accident here.", te: "హలో, ఇక్కడ ఒక ప్రమాదం జరిగింది." },
        },
        {
          form: "100",
          useFor: { en: "Police: a theft or a fight.", te: "పోలీస్: దొంగతనం, గొడవ." },
          example: { en: "Please send the police.", te: "ప్లీజ్, పోలీసులను పంపించండి." },
        },
        {
          form: "101",
          useFor: { en: "Fire service: a fire in a house or a shop.", te: "ఫైర్ సర్వీస్: ఇంట్లో గానీ షాపులో గానీ మంటలు." },
          example: { en: "Please send a fire engine.", te: "ప్లీజ్, ఫైర్ ఇంజన్ పంపించండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "There's been accident.",
      right: "There's been an accident.",
      why: {
        en: "Telugu has no word like a or an, but English needs an before accident.",
        te: "తెలుగులో a, an లాంటి పదం లేదు; ఇంగ్లీష్‌లో accident ముందు an తప్పకుండా రావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Please call to one zero eight.",
      right: "Please call one zero eight.",
      why: {
        en: "Telugu says 108 కి, but in English call takes no to before a number.",
        te: "తెలుగులో '108 కి' అంటాం, కానీ ఇంగ్లీష్‌లో call తర్వాత నంబర్ ముందు to రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "A car hit a scooter. What do you say first on the phone?", te: "ఒక కారు స్కూటర్‌ని గుద్దింది. ఫోన్‌లో ముందు ఏమంటారు?" },
      options: ["There's been an accident.", "There is accident.", "Accident is happened."],
      answer: 0,
      why: {
        en: "This fixed phrase tells them at once that something bad happened.",
        te: "ఈ ఒక్క మాటతో ఏదో ప్రమాదం జరిగిందని వాళ్ళకి వెంటనే అర్థమవుతుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Please ___ an ambulance to Ring Road.",
      te: "ప్లీజ్, రింగ్ రోడ్‌కి అంబులెన్స్ పంపించండి.",
      options: ["send", "sent", "sending"],
      answer: 0,
      why: {
        en: "Please asks someone to do something, so the verb stays plain.",
        te: "Please తో ఏదైనా చేయమని అడిగేటప్పుడు verb మారదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The operator asks: Where are you? Choose the best answer.", te: "ఆపరేటర్ Where are you? అని అడిగారు. సరైన జవాబు ఎంచుకోండి." },
      options: ["We are near the old bus stand.", "We are here only.", "Near to bus stand we are."],
      answer: 0,
      why: {
        en: "A landmark near you helps the ambulance find you fast.",
        te: "దగ్గర్లో ఉన్న ఒక గుర్తు చెప్తే అంబులెన్స్ మిమ్మల్ని త్వరగా కనుక్కుంటుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Two people is injured.",
      wrongIndex: 2,
      fix: "Two people are injured.",
      why: {
        en: "People means more than one person, so use are, not is.",
        te: "people అంటే ఒకరి కంటే ఎక్కువ మంది, అందుకే is కాదు, are.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You call one zero eight. First, say that there was an accident.",
        te: "మీరు 108 కి ఫోన్ చేశారు. ముందుగా ప్రమాదం జరిగిందని చెప్పండి.",
      },
      expected: ["There's been an accident.", "There has been an accident.", "There was an accident."],
      options: ["There's been an accident.", "Accident is happened here.", "There's been a accident."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Ask them to send an ambulance to Ring Road.",
        te: "రింగ్ రోడ్‌కి అంబులెన్స్ పంపించమని అడగండి.",
      },
      expected: ["Please send an ambulance to Ring Road.", "Please send an ambulance."],
      options: ["Please send an ambulance to Ring Road.", "Send ambulance Ring Road.", "Please sent an ambulance to Ring Road."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Calling one zero eight", te: "108 కి ఫోన్" },
    scene: {
      en: "An old man fell down on Ring Road. You call one zero eight. Swapna, the operator, answers.",
      te: "రింగ్ రోడ్ మీద ఒక పెద్దాయన కింద పడిపోయారు. మీరు 108 కి ఫోన్ చేశారు. ఆపరేటర్ స్వప్న మాట్లాడుతున్నారు.",
    },
    partner: { en: "Swapna (108 operator)", te: "స్వప్న (108 ఆపరేటర్)" },
    skills: [
      { id: "call", label: { en: "Emergency call", te: "అత్యవసర ఫోన్" } },
      { id: "where", label: { en: "Saying where", te: "ఎక్కడో చెప్పడం" } },
    ],
    turns: [
      {
        partner: "One zero eight ambulance service. What happened?",
        te: "108 అంబులెన్స్ సర్వీస్. ఏం జరిగిందో చెప్పండి.",
        hint: { en: "Say there was an accident, and what happened.", te: "ప్రమాదం జరిగిందని, ఏం జరిగిందో చెప్పండి." },
        replies: [
          { say: "There's been an accident. A man fell down.", good: true, skill: "call" },
          { say: "Accident is happened. One man fell.", good: false, skill: "call" },
          {
            say: "Why so many questions? Just send someone!",
            good: false,
            skill: "call",
            react: { en: "I understand. I need details to send help fast.", te: "అర్థమైందండీ. త్వరగా సహాయం పంపాలంటే నాకు వివరాలు కావాలి." },
          },
        ],
      },
      {
        partner: "Okay. Where are you now?",
        te: "సరే. మీరు ఇప్పుడు ఎక్కడ ఉన్నారు?",
        hint: { en: "Give the road and one landmark near you.", te: "రోడ్డు పేరు, దగ్గర్లో ఉన్న ఒక గుర్తు చెప్పండి." },
        replies: [
          { say: "I am on Ring Road, near the water tank.", good: true, skill: "where" },
          { say: "I am in Ring Road, near to water tank.", good: false, skill: "where", fixIt: "preposition" },
        ],
      },
      {
        partner: "How many people are injured? Is he breathing?",
        te: "ఎంత మందికి దెబ్బలు తగిలాయి? ఆయన ఊపిరి తీసుకుంటున్నారా?",
        hint: { en: "Say how many, and answer about his breathing.", te: "ఎంత మందో చెప్పి, ఊపిరి గురించి జవాబు చెప్పండి." },
        replies: [
          { say: "Only one man. Yes, he is breathing.", good: true, skill: "call" },
          { say: "Only one man. Yes, he breathing.", good: false, skill: "call", fixIt: "be" },
        ],
      },
      {
        partner: "The ambulance is coming. Please stay with him.",
        te: "అంబులెన్స్ వస్తోంది. ప్లీజ్, ఆయన దగ్గరే ఉండండి.",
        hint: { en: "Thank her, and ask her to be quick.", te: "ఆవిడకి థాంక్స్ చెప్పి, త్వరగా రమ్మని అడగండి." },
        replies: [
          { say: "Thank you. Please hurry.", good: true, skill: "call" },
          { say: "Thank you. Please come fastly.", good: false, skill: "call" },
        ],
      },
    ],
  },
};
