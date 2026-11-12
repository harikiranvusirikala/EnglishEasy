import type { Lesson } from "../../types";

/** Week 61, Day 3 (CURRICULUM §5): to + verb for the future in headlines — Metro to Start in May means the metro will start in May. */
export const day: Lesson = {
  id: "headlines-with-to-for-future",
  kind: "lesson",
  title: { en: "Metro to Start in May", te: "మే నుంచి మెట్రో" },
  subtitle: "to + verb for the future",
  summary: {
    en: "Learn that to + verb in a headline means the future: Metro to Start in May means the metro will start in May.",
    te: "హెడ్‌లైన్‌లో to + verb అంటే భవిష్యత్తు అని తెలుసుకుందాం: Metro to Start in May అంటే the metro will start in May.",
  },
  seo: {
    title: "Future News Headlines in English for Telugu Speakers",
    description:
      "Read Metro to Start in May and say The metro will start in May. Simple lessons for Telugu speakers on headlines about the future.",
  },
  pattern: [
    { text: "Metro", role: "who" },
    { text: "to Start", role: "action" },
    { text: "in May", role: "when" },
  ],
  core: [
    { en: "The metro will start in May.", te: "మే నెలలో మెట్రో మొదలవుతుంది.", extra: ["to"] },
    { en: "Bus fares will go up from Monday.", te: "సోమవారం నుంచి బస్ ఛార్జీలు పెరుగుతాయి.", extra: ["goes"] },
    { en: "The water supply will stop for two days for repair work.", te: "రిపేర్ పనుల వల్ల రెండు రోజులు నీళ్ళు రావు.", extra: ["stops"] },
    { en: "The new bus stand will open next month.", te: "కొత్త బస్ స్టాండ్ వచ్చే నెల ప్రారంభం అవుతుంది.", extra: ["opens"] },
    { en: "The road has been closed since Monday.", te: "సోమవారం నుంచి రోడ్డు మూసేసి ఉంది.", extra: ["is"] },
    {
      en: "Metro to Start in May means the metro will start in May.",
      te: "Metro to Start in May అంటే మే నెలలో మెట్రో మొదలవుతుందని.",
      extra: ["started"],
    },
    { en: "RTC will launch a new bus app next week.", te: "వచ్చే వారం RTC ఒక కొత్త బస్ app ప్రారంభిస్తుంది.", extra: ["launching"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find one headline about something coming soon. Say it with will: The … will …",
    te: "త్వరలో జరగబోయే దాని గురించి ఒక హెడ్‌లైన్ వెతకండి. దాన్ని will తో చెప్పండి: The … will …",
  },
  words: [
    { en: "water supply", te: "నీటి సరఫరా, నీళ్ళు రావడం" },
    { en: "resume", te: "మళ్ళీ మొదలవడం" },
    { en: "fare hike", te: "ఛార్జీల పెంపు" },
    { en: "launch", te: "ప్రారంభించడం, కొత్తగా తేవడం" },
    { en: "repair work", te: "రిపేర్ పనులు, మరమ్మతులు" },
  ],
  grammar: ["will", "present-perfect", "prepositions"],
  topics: ["transport", "money", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "to + verb means the future", te: "to + verb అంటే భవిష్యత్తు" },
      body: {
        en: "In a headline, to + verb tells about the future. Metro to Start in May means the metro will start in May. When you tell it, use will.",
        te: "హెడ్‌లైన్‌లో to + verb భవిష్యత్తు గురించి చెప్తుంది. Metro to Start in May అంటే the metro will start in May. మీరు చెప్పేటప్పుడు will వాడండి.",
      },
      bridge: {
        te: ["మే నుంచి", "మెట్రో", "మొదలు"],
        en: [
          { text: "Metro", role: "who" },
          { text: "to Start", role: "action" },
          { text: "in May", role: "when" },
        ],
      },
      examples: [
        { en: "The metro will start in May.", te: "మే నెలలో మెట్రో మొదలవుతుంది." },
        {
          en: "Metro to Start in May means the metro will start in May.",
          te: "Metro to Start in May అంటే మే నెలలో మెట్రో మొదలవుతుందని.",
        },
        { en: "RTC will launch a new bus app next week.", te: "వచ్చే వారం RTC ఒక కొత్త బస్ app ప్రారంభిస్తుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Past, now or coming?", te: "జరిగిందా, జరుగుతోందా, జరగబోతోందా?" },
      items: [
        {
          form: "Fares Go Up",
          useFor: { en: "Present in a headline: it has already happened.", te: "హెడ్‌లైన్‌లో present: ఇప్పటికే జరిగిపోయింది." },
          example: { en: "Bus fares went up yesterday.", te: "నిన్న బస్ ఛార్జీలు పెరిగాయి." },
        },
        {
          form: "Fares to Go Up",
          useFor: { en: "to + verb in a headline: it will happen.", te: "హెడ్‌లైన్‌లో to + verb: ఇంకా జరగబోతోంది." },
          example: { en: "Bus fares will go up from Monday.", te: "సోమవారం నుంచి బస్ ఛార్జీలు పెరుగుతాయి." },
        },
        {
          form: "Fare Hike From Monday",
          useFor: { en: "A word like hike with a day: it will happen then.", te: "hike లాంటి పదంతో రోజు ఉంటే: ఆ రోజు జరుగుతుంది." },
          example: { en: "The fare hike starts on Monday.", te: "ఛార్జీల పెంపు సోమవారం నుంచి మొదలవుతుంది." },
        },
        {
          form: "Supply to Resume",
          useFor: { en: "resume means start again after a stop.", te: "resume అంటే ఆగిన తర్వాత మళ్ళీ మొదలవడం." },
          example: { en: "The water supply will resume on Friday.", te: "శుక్రవారం నుంచి నీళ్ళు మళ్ళీ వస్తాయి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "The road is closed since Monday.",
      right: "The road has been closed since Monday.",
      why: {
        en: "With since, English uses has been, not is; Telugu ఉంది stays the same for a long time.",
        te: "since తో has been వాడాలి, is కాదు; తెలుగులో ఎంత కాలమైనా 'ఉంది' అనే అంటాం, అందుకే ఈ తప్పు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "The metro will start from May month.",
      right: "The metro will start in May.",
      why: {
        en: "English says in May, with no month after it; Telugu మే నెల adds the word month.",
        te: "ఇంగ్లీష్‌లో in May అంటే చాలు, month అక్కర్లేదు; తెలుగులో 'మే నెల' అంటాం కాబట్టి ఈ తప్పు వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "The headline says Bus Fares to Go Up From Monday. What does it mean?",
        te: "హెడ్‌లైన్‌లో Bus Fares to Go Up From Monday అని ఉంది. దాని అర్థం ఏంటి?",
      },
      options: ["Fares will go up from Monday.", "Fares went up last Monday.", "Fares go up every Monday."],
      answer: 0,
      why: {
        en: "In a headline, to + verb tells about the future, so it has not happened yet.",
        te: "హెడ్‌లైన్‌లో to + verb భవిష్యత్తు గురించి; అంటే ఇంకా జరగలేదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "The new bus stand ___ open next month.",
      te: "కొత్త బస్ స్టాండ్ వచ్చే నెల ప్రారంభం అవుతుంది.",
      options: ["will", "is", "to"],
      answer: 0,
      why: {
        en: "In a full sentence, the future needs will; to + verb is only for headlines.",
        te: "పూర్తి వాక్యంలో భవిష్యత్తుకి will కావాలి; to + verb హెడ్‌లైన్స్‌లో మాత్రమే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "The headline says RTC to Launch New Bus App. Tell your neighbour the news.",
        te: "హెడ్‌లైన్‌లో RTC to Launch New Bus App అని ఉంది. ఆ వార్త పక్కింటివారికి చెప్పండి.",
      },
      options: [
        "RTC will launch a new bus app next week.",
        "RTC will launch new bus app next week.",
        "RTC will launching a new bus app next week.",
      ],
      answer: 0,
      why: {
        en: "The headline drops a, but your sentence needs it before one new app.",
        te: "హెడ్‌లైన్‌లో a ఉండదు; కానీ మీ వాక్యంలో ఒక కొత్త app ముందు a కావాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "duration",
      sentence: "Our street is without water since Sunday.",
      wrongIndex: 2,
      fix: "Our street has been without water since Sunday.",
      why: {
        en: "Since Sunday means it started then and goes on, so use has been, not is.",
        te: "since Sunday అంటే అప్పుడు మొదలై ఇంకా కొనసాగుతోంది; అందుకే is కాదు, has been.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "The headline says Water Supply to Resume on Friday. Tell your neighbour the good news.",
        te: "హెడ్‌లైన్‌లో Water Supply to Resume on Friday అని ఉంది. ఈ మంచి వార్త పక్కింటివారికి చెప్పండి.",
      },
      expected: ["The water supply will resume on Friday.", "Water will come again on Friday.", "We will get water again on Friday."],
      options: ["The water supply will resume on Friday.", "The water supply resumed on Friday.", "The water supply will resumes on Friday."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Your friend asks how long the road has been closed. It closed on Monday. Answer.",
        te: "రోడ్డు ఎప్పటి నుంచి మూసి ఉందని మీ స్నేహితులు అడుగుతున్నారు. సోమవారం మూసేశారు. జవాబు చెప్పండి.",
      },
      expected: ["It has been closed since Monday.", "It's been closed since Monday.", "Since Monday."],
      options: ["It has been closed since Monday.", "It is closed since Monday.", "It has been closed from Monday."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Headlines on the bus", te: "బస్సులో హెడ్‌లైన్స్" },
    scene: {
      en: "You are on the city bus. Your friend Salma sits next to you with the morning paper.",
      te: "మీరు సిటీ బస్సులో ఉన్నారు. మీ స్నేహితురాలు సల్మా గారు పొద్దుటి పేపర్‌తో మీ పక్కన కూర్చున్నారు.",
    },
    partner: { en: "Salma (your friend)", te: "సల్మా (మీ స్నేహితురాలు)" },
    skills: [
      { id: "news", label: { en: "Understanding headlines", te: "హెడ్‌లైన్స్ అర్థం చేసుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Look, there's news about our city today.",
        te: "గుడ్ మార్నింగ్! చూడండి, ఈ రోజు మన ఊరి గురించి వార్తలున్నాయి.",
        hint: { en: "Greet her, and ask what the main headline says.", te: "ఆవిడకి నమస్కారం చెప్పి, ముఖ్యమైన హెడ్‌లైన్‌లో ఏముందో అడగండి." },
        replies: [
          { say: "Good morning! What does the main headline say?", good: true, skill: "polite" },
          { say: "Good morning! What the main headline says?", good: false, skill: "polite", fixIt: "question" },
        ],
      },
      {
        partner: "It says Metro to Start in May.",
        te: "'మే నుంచి మెట్రో' అని ఉంది.",
        hint: { en: "Check you understand: ask if it will happen this May.", te: "మీకు అర్థమైందో లేదో చూసుకోండి: ఈ మే నెలలోనేనా అని అడగండి." },
        replies: [
          { say: "Does that mean the metro will start this May?", good: true, skill: "news" },
          { say: "Does that mean the metro started in May?", good: false, skill: "news" },
        ],
      },
      {
        partner: "Yes! And here's another one. Bus Fares to Go Up From Monday.",
        te: "అవును! ఇంకోటి కూడా ఉంది. 'సోమవారం నుంచి బస్ ఛార్జీల పెంపు'.",
        hint: { en: "Say that is bad news, and ask how much more you will pay.", te: "బాధాకరమైన వార్త అని చెప్పి, ఎంత ఎక్కువ కట్టాలో అడగండి." },
        replies: [
          { say: "Oh no. How much more will we pay?", good: true, skill: "news" },
          {
            say: "Who reads such boring news? Give me the cinema page.",
            good: false,
            skill: "polite",
            react: { en: "Ha! But this news is about your money too.", te: "హహ! కానీ ఈ వార్త మీ డబ్బుల గురించే కదా." },
          },
        ],
      },
      {
        partner: "Five rupees more. Oh, this is my stop!",
        te: "ఐదు రూపాయలు ఎక్కువ. అయ్యో, నా స్టాప్ వచ్చేసింది!",
        hint: { en: "Say goodbye, and say you will see her tomorrow.", te: "బై చెప్పి, రేపు కలుద్దామని చెప్పండి." },
        replies: [
          { say: "Bye, Salma! See you tomorrow on the bus.", good: true, skill: "polite" },
          { say: "Bye, Salma! See you tomorrow on bus.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
