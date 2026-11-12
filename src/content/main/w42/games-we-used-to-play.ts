import type { Lesson } from "../../types";

/** Week 42, Day 4 (CURRICULUM §5): used to + play, make, climb; would for repeated actions (recognition) — childhood games. */
export const day: Lesson = {
  id: "games-we-used-to-play",
  kind: "lesson",
  title: { en: "Games We Used to Play", te: "చిన్నప్పటి ఆటలు" },
  subtitle: "used to play; would",
  summary: {
    en: "Learn to talk about the games of your childhood: We used to play gilli danda after school.",
    te: "చిన్నప్పటి ఆటల గురించి చెప్పడం నేర్చుకుందాం: We used to play gilli danda after school.",
  },
  seo: {
    title: "Childhood Games in English for Telugu Speakers",
    description:
      "Say We used to play gilli danda after school and understand In summer we would climb mango trees. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "We", role: "who" },
    { text: "used to play", role: "action" },
    { text: "gilli danda", role: "what" },
    { text: "after school", role: "when" },
  ],
  core: [
    { en: "We used to play gilli danda.", te: "మేము గిల్లీ దండా ఆడేవాళ్ళం.", extra: ["played"] },
    { en: "We used to play marbles in the street.", te: "మేము వీధిలో గోళీలు ఆడేవాళ్ళం.", extra: ["at"] },
    { en: "We used to make toys with mud.", te: "మేము మట్టితో బొమ్మలు చేసేవాళ్ళం.", extra: ["toy"] },
    { en: "In summer, we would climb mango trees.", te: "ఎండాకాలంలో మామిడి చెట్లు ఎక్కేవాళ్ళం.", extra: ["will"] },
    { en: "We didn't have mobile phones, so we used to play outside.", te: "మాకు మొబైల్ ఫోన్లు లేవు, అందుకే బయట ఆడుకునేవాళ్ళం.", extra: ["phone"] },
    { en: "We used to play hide and seek till dark.", te: "చీకటి పడేవరకు దాగుడుమూతలు ఆడేవాళ్ళం.", extra: ["playing"] },
    { en: "My cousins and I used to spin tops.", te: "నేను, మా కజిన్స్ బొంగరాలు తిప్పేవాళ్ళం.", extra: ["spinning"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Tell a friend or neighbour about one game you used to play, and where you played it.",
    te: "మీరు చిన్నప్పుడు ఆడిన ఒక ఆట గురించి, ఎక్కడ ఆడేవారో, ఈ రోజు ఎవరైనా స్నేహితులకి గానీ పక్కింటివారికి గానీ చెప్పండి.",
  },
  words: [
    { en: "gilli danda", te: "గిల్లీ దండా, బిళ్ళంగోడు" },
    { en: "marbles", te: "గోళీలు" },
    { en: "hide and seek", te: "దాగుడుమూతలు" },
    { en: "spinning top", te: "బొంగరం" },
    { en: "kabaddi", te: "కబడ్డీ" },
  ],
  grammar: ["used-to-would", "adverbs-frequency", "plurals-countable"],
  topics: ["people", "technology", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Games long ago", te: "అప్పటి ఆటలు" },
      body: {
        en: "For games you played again and again, say used to play. In stories you may also hear would: we would climb trees.",
        te: "మళ్ళీ మళ్ళీ ఆడిన ఆటలకి used to play (ఆడేవాళ్ళం). కథల్లో would కూడా వినిపిస్తుంది: we would climb trees (ఎక్కేవాళ్ళం).",
      },
      bridge: {
        te: ["మేము", "స్కూల్ అయ్యాక", "గిల్లీ దండా", "ఆడేవాళ్ళం"],
        en: [
          { text: "We", role: "who" },
          { text: "used to play", role: "action" },
          { text: "gilli danda", role: "what" },
          { text: "after school", role: "when" },
        ],
      },
      examples: [
        { en: "We used to play gilli danda.", te: "మేము గిల్లీ దండా ఆడేవాళ్ళం." },
        { en: "We used to play marbles in the street.", te: "మేము వీధిలో గోళీలు ఆడేవాళ్ళం." },
        { en: "We used to make toys with mud.", te: "మేము మట్టితో బొమ్మలు చేసేవాళ్ళం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "used to or would", te: "used to నా, would నా" },
      items: [
        {
          form: "used to + verb",
          useFor: { en: "Games and habits long ago. Use this one yourself.", te: "ఒకప్పటి ఆటలు, అలవాట్లు. మీరు ఇదే వాడండి." },
          example: { en: "We used to play hide and seek till dark.", te: "చీకటి పడేవరకు దాగుడుమూతలు ఆడేవాళ్ళం." },
        },
        {
          form: "would + verb",
          useFor: { en: "Heard in stories, for actions done again and again.", te: "మళ్ళీ మళ్ళీ చేసిన పనులకి కథల్లో వినిపిస్తుంది." },
          example: { en: "In summer, we would climb mango trees.", te: "ఎండాకాలంలో మామిడి చెట్లు ఎక్కేవాళ్ళం." },
        },
        {
          form: "used to be",
          useFor: { en: "How things were. Here would does not work.", te: "ఒకప్పుడు ఎలా ఉండేదో. ఇక్కడ would పనికిరాదు." },
          example: { en: "Our street used to be very quiet.", te: "మా వీధి ఒకప్పుడు చాలా ప్రశాంతంగా ఉండేది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "We used to play at evening.",
      right: "We used to play in the evening.",
      why: {
        en: "English says in the evening; at is for a clock time, like at five.",
        te: "ఇంగ్లీష్‌లో in the evening అంటారు; at గడియారం టైమ్‌కి మాత్రమే, at five లాగా.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "I used to have fifty marble.",
      right: "I used to have fifty marbles.",
      why: {
        en: "After fifty, the thing takes s; Telugu changes the end too, గోళీ to గోళీలు.",
        te: "యాభై తర్వాత s కావాలి; తెలుగులోనూ గోళీ కాదు, గోళీలు అంటాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Which sentence means you played gilli danda again and again, long ago?",
        te: "ఒకప్పుడు మళ్ళీ మళ్ళీ గిల్లీ దండా ఆడేవాళ్ళం అనే అర్థం ఏ వాక్యానికి ఉంది?",
      },
      options: ["We would play gilli danda after school.", "We will play gilli danda after school.", "We would like to play gilli danda."],
      answer: 0,
      why: {
        en: "Here would means again and again in the past; will is for later, and would like means want.",
        te: "ఇక్కడ would అంటే గతంలో మళ్ళీ మళ్ళీ; will అంటే రాబోయేది, would like అంటే కావాలి అని.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "My cousin still ___ kabaddi every Sunday.",
      te: "మా కజిన్ ఇప్పటికీ ప్రతి ఆదివారం కబడ్డీ ఆడతారు.",
      options: ["plays", "play", "playing"],
      answer: 0,
      why: {
        en: "Still means it happens now, and one person takes s on the verb.",
        te: "still అంటే ఇప్పుడు కూడా జరుగుతోంది; ఒక్కరైతే verb కి s వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "Tell a young neighbour that long ago, there was a big ground behind your school.",
        te: "ఒకప్పుడు మీ స్కూల్ వెనక ఒక పెద్ద గ్రౌండ్ ఉండేదని పక్కింటి యువకులకి చెప్పండి.",
      },
      options: [
        "There used to be a big ground behind our school.",
        "There used to be big ground behind our school.",
        "There was used to be a big ground behind our school.",
      ],
      answer: 0,
      why: {
        en: "One ground needs a before big; Telugu has no word like a.",
        te: "ఒక గ్రౌండ్ కాబట్టి big ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "We used to climbed mango trees in summer.",
      wrongIndex: 3,
      fix: "We used to climb mango trees in summer.",
      why: {
        en: "After used to, the verb stays plain; do not add the past ending.",
        te: "used to తర్వాత verb అలాగే ఉండాలి; climbed లాగా past form వాడకూడదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Tell a young neighbour that you played kabaddi every evening as a child.",
        te: "చిన్నప్పుడు రోజూ సాయంత్రం కబడ్డీ ఆడేవారని పక్కింటి యువకులకి చెప్పండి.",
      },
      expected: [
        "We used to play kabaddi every evening.",
        "I used to play kabaddi every evening.",
        "We used to play kabaddi in the evening.",
      ],
      options: ["We used to play kabaddi every evening.", "We used to play kabaddi at evening.", "We used to play kabaddi on every evening."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "A young friend asks if you had mobile phones as a child. Say no, so you played outside.",
        te: "చిన్నప్పుడు మొబైల్ ఫోన్లు ఉండేవా అని ఒక యువ స్నేహితులు అడిగారు. లేవు, అందుకే బయట ఆడుకునేవారని చెప్పండి.",
      },
      expected: [
        "We didn't have mobile phones, so we used to play outside.",
        "No, we didn't. We used to play outside.",
        "No, we used to play outside.",
      ],
      options: [
        "We didn't have mobile phones, so we used to play outside.",
        "We didn't have mobile phone, so we used to play outside.",
        "We don't have mobile phones, so we used to play outside.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Games before mobile phones", te: "మొబైల్ ఫోన్లు రాకముందు ఆటలు" },
    scene: {
      en: "Your young neighbour Satish is always on his phone. Today he asks what you did for fun as a child.",
      te: "పక్కింటి సతీష్ గారు ఎప్పుడూ ఫోన్‌లోనే ఉంటారు. మీరు చిన్నప్పుడు సరదాకి ఏం చేసేవారని ఈ రోజు అడుగుతున్నారు.",
    },
    partner: { en: "Satish (a young neighbour)", te: "సతీష్ (పక్కింటి యువకుడు)" },
    voice: "b",
    skills: [
      { id: "games", label: { en: "Talking about old games", te: "పాత ఆటల గురించి చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! What did you do for fun without a phone?",
        te: "హలో! ఫోన్ లేకుండా సరదాకి ఏం చేసేవారు?",
        hint: { en: "Say you played outside with friends every day.", te: "రోజూ స్నేహితులతో బయట ఆడుకునేవారని చెప్పండి." },
        replies: [
          { say: "We used to play outside with our friends every day.", good: true, skill: "games" },
          {
            say: "Phones are useless. Your generation is so lazy.",
            good: false,
            skill: "polite",
            react: { en: "Lazy? That's not fair! But please tell me about your games.", te: "సోమరులమా? అది న్యాయం కాదండీ! సరే, మీ ఆటల గురించి చెప్పండి." },
          },
        ],
      },
      {
        partner: "What games did you use to play?",
        te: "మీరు ఏ ఆటలు ఆడేవారు?",
        hint: { en: "Name two games, and say when you played them.", te: "రెండు ఆటల పేర్లు చెప్పి, ఎప్పుడు ఆడేవారో చెప్పండి." },
        replies: [
          { say: "We used to play gilli danda and marbles after school.", good: true, skill: "games" },
          { say: "We used to play gilli danda and marble after school.", good: false, skill: "games", fixIt: "plural" },
        ],
      },
      {
        partner: "Gilli danda? I've never played it. Is it hard?",
        te: "గిల్లీ దండానా? నేనెప్పుడూ ఆడలేదు. కష్టమా?",
        hint: { en: "Say it is easy, and offer to show him on Sunday.", te: "సులువే అని చెప్పి, ఆదివారం నేర్పిస్తానని చెప్పండి." },
        replies: [
          { say: "No, it's easy. I can show you on Sunday.", good: true, skill: "games" },
          { say: "No, it's easy. I can show you in Sunday.", good: false, skill: "games", fixIt: "preposition" },
        ],
      },
      {
        partner: "Great! I'll keep my phone at home that day.",
        te: "సూపర్! ఆ రోజు ఫోన్ ఇంట్లోనే పెట్టేసి వస్తాను.",
        hint: { en: "Laugh, agree and say goodbye.", te: "నవ్వుతూ ఒప్పుకుని, బై చెప్పండి." },
        replies: [
          { say: "Ha ha, good idea! See you on Sunday.", good: true, skill: "polite" },
          { say: "Sounds good! See you on Sunday. Bye!", good: true, skill: "polite" },
        ],
      },
    ],
  },
};
