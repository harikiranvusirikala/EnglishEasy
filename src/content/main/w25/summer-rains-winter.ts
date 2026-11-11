import type { Lesson } from "../../types";

/** Week 25, Day 4 (CURRICULUM §4): seasons and months — Summer is very hot in Vijayawada. The rains start in June. */
export const day: Lesson = {
  id: "summer-rains-winter",
  kind: "lesson",
  title: { en: "Summer, Rains, Winter", te: "వేసవి, వానలు, చలి" },
  subtitle: "seasons and months",
  summary: {
    en: "Learn to talk about the seasons: Summer is very hot in Vijayawada. The rains start in June.",
    te: "కాలాల గురించి మాట్లాడటం నేర్చుకుందాం: Summer is very hot in Vijayawada. The rains start in June.",
  },
  seo: {
    title: "Seasons and Months in English for Telugu Speakers",
    description:
      "Say Summer is very hot in Vijayawada and The rains start in June. Simple lessons for Telugu speakers on seasons and months.",
  },
  pattern: [
    { text: "Summer", role: "who" },
    { text: "is", role: "action" },
    { text: "very hot in Vijayawada", role: "what" },
  ],
  core: [
    { en: "Summer is very hot in Vijayawada.", te: "విజయవాడలో వేసవి చాలా వేడిగా ఉంటుంది.", extra: ["at"] },
    { en: "The rains start in June.", te: "వానలు జూన్‌లో మొదలవుతాయి.", extra: ["starts"] },
    { en: "Winter is pleasant in Hyderabad.", te: "హైదరాబాద్‌లో చలికాలం హాయిగా ఉంటుంది.", extra: ["are"] },
    { en: "Summer starts in March and ends in June.", te: "వేసవి మార్చిలో మొదలై జూన్‌లో అయిపోతుంది.", extra: ["start"] },
    { en: "In May, it's over forty degrees.", te: "మే నెలలో నలభై డిగ్రీలు దాటుతుంది.", extra: ["degree"] },
    { en: "The monsoon brings a lot of rain.", te: "వర్షాకాలంలో వానలు బాగా పడతాయి.", extra: ["many"] },
    { en: "Come in December. The weather is nice.", te: "డిసెంబర్‌లో రండి. వాతావరణం బాగుంటుంది.", extra: ["on"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say which season it is now, and one thing about it: It's summer. It's very hot.",
    te: "ఇప్పుడు ఏ కాలమో, దాని గురించి ఒక మాట చెప్పండి: It's summer. It's very hot.",
  },
  words: [
    { en: "season", te: "కాలం, ఋతువు" },
    { en: "summer", te: "వేసవి కాలం, ఎండాకాలం" },
    { en: "monsoon", te: "వర్షాకాలం" },
    { en: "winter", te: "చలికాలం" },
    { en: "pleasant", te: "హాయిగా, ఆహ్లాదంగా" },
  ],
  grammar: ["present-simple", "prepositions"],
  topics: ["weather", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "The seasons here", te: "మన దగ్గర కాలాలు" },
      body: {
        en: "Here we have three seasons: summer, the rains and winter. People also call the rains the monsoon. Use in with a season or a month: in summer, in June.",
        te: "మన దగ్గర మూడు కాలాలు: summer, the rains, winter. వానాకాలాన్ని monsoon అని కూడా అంటారు. కాలానికీ, నెలకీ ముందు in: in summer, in June.",
      },
      bridge: {
        te: ["విజయవాడలో", "వేసవి", "చాలా వేడిగా ఉంటుంది"],
        en: [
          { text: "Summer", role: "who" },
          { text: "is", role: "action" },
          { text: "very hot in Vijayawada", role: "what" },
        ],
      },
      examples: [
        { en: "Summer is very hot in Vijayawada.", te: "విజయవాడలో వేసవి చాలా వేడిగా ఉంటుంది." },
        { en: "The rains start in June.", te: "వానలు జూన్‌లో మొదలవుతాయి." },
        { en: "Winter is pleasant in Hyderabad.", te: "హైదరాబాద్‌లో చలికాలం హాయిగా ఉంటుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which months?", te: "ఏ నెలలు?" },
      items: [
        {
          form: "summer",
          useFor: { en: "March to June: very hot.", te: "మార్చి నుంచి జూన్: చాలా వేడి." },
          example: { en: "Summer starts in March and ends in June.", te: "వేసవి మార్చిలో మొదలై జూన్‌లో అయిపోతుంది." },
        },
        {
          form: "the rains, the monsoon",
          useFor: { en: "June to September: a lot of rain.", te: "జూన్ నుంచి సెప్టెంబర్: వానలు ఎక్కువ." },
          example: { en: "The monsoon brings a lot of rain.", te: "వర్షాకాలంలో వానలు బాగా పడతాయి." },
        },
        {
          form: "winter",
          useFor: { en: "November to February: cool and pleasant.", te: "నవంబర్ నుంచి ఫిబ్రవరి: చల్లగా, హాయిగా." },
          example: { en: "Winter is pleasant in Hyderabad.", te: "హైదరాబాద్‌లో చలికాలం హాయిగా ఉంటుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "Summer start in March.",
      right: "Summer starts in March.",
      why: {
        en: "Summer is one thing, like he or she, so the verb takes s.",
        te: "summer ఒక్కటే, he లేదా she లాగా; అందుకే verb కి s వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "The rains start on June.",
      right: "The rains start in June.",
      why: {
        en: "Use in for a month or a season; on is only for a day or a date.",
        te: "నెలకీ, కాలానికీ in; on రోజుకీ, తేదీకీ మాత్రమే.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "A visitor asks about the weather here in May. What do you say?", te: "మే నెలలో ఇక్కడ వాతావరణం ఎలా ఉంటుందని ఒక అతిథి అడుగుతున్నారు. ఏమంటారు?" },
      options: ["It's very hot. Over forty degrees.", "It's very cold. Bring a sweater.", "It snows a lot in May."],
      answer: 0,
      why: {
        en: "May comes in summer here, and it is very hot.",
        te: "మన దగ్గర మే నెల వేసవిలో వస్తుంది, చాలా వేడిగా ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Winter ___ in November here.",
      te: "ఇక్కడ చలికాలం నవంబర్‌లో మొదలవుతుంది.",
      options: ["starts", "start", "starting"],
      answer: 0,
      why: {
        en: "Winter is one thing and this happens every year, so starts takes s.",
        te: "winter ఒక్కటే, ఇది ప్రతి ఏడాదీ జరిగేది; అందుకే starts.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "plural",
      prompt: { en: "Say there is a lot of rain in the monsoon.", te: "వర్షాకాలంలో వానలు బాగా పడతాయని చెప్పండి." },
      options: ["The monsoon brings a lot of rain.", "The monsoon brings many rains.", "The monsoon bring a lot of rain."],
      answer: 0,
      why: {
        en: "We don't count rain, so say a lot of; monsoon is one, so brings.",
        te: "వర్షాన్ని లెక్కపెట్టం, అందుకే a lot of; monsoon ఒక్కటే, అందుకే brings.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "state-ing",
      sentence: "Every year it is raining a lot in July.",
      wrongIndex: 4,
      fix: "Every year it rains a lot in July.",
      why: {
        en: "For something that happens every year, use rains, not is raining.",
        te: "ప్రతి ఏడాదీ జరిగే దానికి rains; is raining అనకూడదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "A visitor asks when the rains start. Tell him: June.",
        te: "వానలు ఎప్పుడు మొదలవుతాయని ఒక అతిథి అడుగుతున్నారు. జూన్ అని చెప్పండి.",
      },
      expected: ["The rains start in June.", "They start in June.", "In June."],
      options: ["The rains start in June.", "The rains start on June.", "The rains is start in June."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Tell a visitor that winter in Hyderabad is pleasant.",
        te: "హైదరాబాద్‌లో చలికాలం హాయిగా ఉంటుందని అతిథికి చెప్పండి.",
      },
      expected: ["Winter is pleasant in Hyderabad.", "Winter is very pleasant in Hyderabad.", "In winter, Hyderabad is pleasant."],
      options: ["Winter is pleasant in Hyderabad.", "Winter pleasant in Hyderabad.", "Winter is pleasant at Hyderabad."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "When should I visit?", te: "ఎప్పుడు రావాలి?" },
    scene: {
      en: "You live in Vijayawada. David, a friend from Delhi, wants to visit. He asks about the seasons.",
      te: "మీరు విజయవాడలో ఉంటారు. దిల్లీ నుంచి మీ స్నేహితులు డేవిడ్ రావాలనుకుంటున్నారు. కాలాల గురించి అడుగుతున్నారు.",
    },
    partner: { en: "David (friend)", te: "డేవిడ్ (స్నేహితులు)" },
    voice: "b",
    skills: [{ id: "seasons", label: { en: "Seasons and months", te: "కాలాలు, నెలలు" } }],
    turns: [
      {
        partner: "Hello! I want to visit Vijayawada. When should I come?",
        te: "హలో! నేను విజయవాడ రావాలనుకుంటున్నాను. ఎప్పుడు రావాలి?",
        hint: { en: "Suggest a cool month, and say why.", te: "చల్లగా ఉండే ఒక నెల చెప్పి, ఎందుకో చెప్పండి." },
        replies: [
          { say: "Come in December. The weather is nice.", good: true, skill: "seasons" },
          { say: "Come on December. The weather is nice.", good: false, skill: "seasons", fixIt: "preposition" },
        ],
      },
      {
        partner: "What about May? I have a holiday then.",
        te: "మే నెల సంగతేంటి? అప్పుడు నాకు సెలవు ఉంది.",
        hint: { en: "Warn him that May is very hot, and how hot.", te: "మే నెలలో చాలా వేడిగా ఉంటుందని, ఎంత వేడో చెప్పండి." },
        replies: [
          { say: "May is very hot. It's over forty degrees.", good: true, skill: "seasons" },
          { say: "May is very hot. It's over forty degree.", good: false, skill: "seasons", fixIt: "plural" },
          {
            say: "May? Are you mad? Nobody comes in May.",
            good: false,
            skill: "seasons",
            react: { en: "Oh! Is it really that bad?", te: "అయ్యో! నిజంగా అంత దారుణంగా ఉంటుందా?" },
          },
        ],
      },
      {
        partner: "And when do the rains come?",
        te: "మరి వానలు ఎప్పుడు వస్తాయి?",
        hint: { en: "Say the month they start, and that it rains a lot.", te: "వానలు ఏ నెలలో మొదలవుతాయో, బాగా పడతాయని చెప్పండి." },
        replies: [
          { say: "They start in June. It rains a lot.", good: true, skill: "seasons" },
          { say: "In June. Every year it is raining a lot.", good: false, skill: "seasons", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Thank you! I'll come in December, then.",
        te: "థాంక్యూ! అయితే డిసెంబర్‌లోనే వస్తాను.",
        hint: { en: "Say you are happy, and that you'll see him then.", te: "సంతోషమని, అప్పుడు కలుద్దామని చెప్పండి." },
        replies: [
          { say: "Great! See you in December.", good: true },
          { say: "Great! See you in December only.", good: false, fixIt: "indian-english" },
        ],
      },
    ],
  },
};
