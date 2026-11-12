import type { Lesson } from "../../types";

/** Week 61, Day 1 (CURRICULUM §5): headlines use the present simple for past events — Heavy Rains Hit Vijayawada means it rained yesterday. */
export const day: Lesson = {
  id: "headlines-in-the-present",
  kind: "lesson",
  title: { en: "Rains Hit the City", te: "హెడ్‌లైన్స్ చదవడం" },
  subtitle: "headlines in the present",
  summary: {
    en: "Learn to read a headline and tell the news: Heavy Rains Hit Vijayawada means it rained heavily yesterday.",
    te: "హెడ్‌లైన్ చదివి, ఆ వార్తని చెప్పడం నేర్చుకుందాం: Heavy Rains Hit Vijayawada అంటే నిన్న బాగా వర్షం పడిందని.",
  },
  seo: {
    title: "Reading News Headlines in English for Telugu Speakers",
    description:
      "Read Heavy Rains Hit Vijayawada and say It rained heavily yesterday. Simple lessons for Telugu speakers on headlines in the present.",
  },
  pattern: [
    { text: "Heavy Rains", role: "who" },
    { text: "Hit", role: "action" },
    { text: "Vijayawada", role: "what" },
  ],
  core: [
    { en: "What does the headline say?", te: "హెడ్‌లైన్‌లో ఏముంది?", extra: ["says"] },
    { en: "The headline says Heavy Rains Hit Vijayawada.", te: "'విజయవాడలో భారీ వర్షాలు' అని హెడ్‌లైన్‌లో ఉంది.", extra: ["say"] },
    { en: "It means it rained heavily yesterday.", te: "అంటే నిన్న బాగా వర్షం పడిందని.", extra: ["rains"] },
    { en: "Did you see the front page today?", te: "ఈ రోజు ఫ్రంట్ పేజీ చూశారా?", extra: ["saw"] },
    { en: "There was a lot of damage in the low areas.", te: "లోతట్టు ప్రాంతాల్లో చాలా నష్టం జరిగింది.", extra: ["were"] },
    {
      en: "Collector Visits Flood Areas means the collector went there yesterday.",
      te: "Collector Visits Flood Areas అంటే కలెక్టర్ గారు నిన్న అక్కడికి వెళ్ళారని.",
      extra: ["goes"],
    },
    { en: "Look at this headline about the floods.", te: "వరదల గురించి ఈ హెడ్‌లైన్ చూడండి.", extra: ["on"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Read one headline in a paper or on TV today. Say what happened, with the past: It rained … / The collector visited …",
    te: "ఈ రోజు పేపర్‌లో గానీ టీవీలో గానీ ఒక హెడ్‌లైన్ చదవండి. ఏం జరిగిందో past తో చెప్పండి: It rained … / The collector visited …",
  },
  words: [
    { en: "headline", te: "హెడ్‌లైన్, వార్త శీర్షిక" },
    { en: "front page", te: "పేపర్ మొదటి పేజీ" },
    { en: "flood", te: "వరద" },
    { en: "damage", te: "నష్టం" },
    { en: "hit", te: "ముంచెత్తడం, దెబ్బ తీయడం (వార్తల్లో)" },
  ],
  grammar: ["present-simple", "past-simple", "articles"],
  topics: ["weather", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Headlines use the present", te: "హెడ్‌లైన్స్‌లో present" },
      body: {
        en: "Headlines use the present for news that has already happened. Heavy Rains Hit Vijayawada means it rained heavily yesterday. When you tell the news, use the past.",
        te: "జరిగిపోయిన వార్తకి కూడా హెడ్‌లైన్స్‌లో present వాడతారు. Heavy Rains Hit Vijayawada అంటే నిన్న బాగా వర్షం పడిందని. మీరు ఆ వార్త చెప్పేటప్పుడు past వాడండి.",
      },
      bridge: {
        te: ["భారీ వర్షాలు", "విజయవాడను", "ముంచెత్తాయి"],
        en: [
          { text: "Heavy Rains", role: "who" },
          { text: "Hit", role: "action" },
          { text: "Vijayawada", role: "what" },
        ],
      },
      examples: [
        { en: "The headline says Heavy Rains Hit Vijayawada.", te: "'విజయవాడలో భారీ వర్షాలు' అని హెడ్‌లైన్‌లో ఉంది." },
        { en: "It means it rained heavily yesterday.", te: "అంటే నిన్న బాగా వర్షం పడిందని." },
        {
          en: "Collector Visits Flood Areas means the collector went there yesterday.",
          te: "Collector Visits Flood Areas అంటే కలెక్టర్ గారు నిన్న అక్కడికి వెళ్ళారని.",
        },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Headline or news you tell?", te: "హెడ్‌లైన్ ఆ, మీరు చెప్పే వార్త ఆ?" },
      items: [
        {
          form: "Rains Hit …",
          useFor: { en: "A headline: short, in the present, about past news.", te: "హెడ్‌లైన్: చిన్నగా, present లో, జరిగిపోయిన వార్త." },
          example: { en: "The headline says Floods Hit Villages Near the River.", te: "'నది దగ్గర ఊళ్ళను ముంచెత్తిన వరదలు' అని హెడ్‌లైన్ ఉంది." },
        },
        {
          form: "It rained …",
          useFor: { en: "Telling a friend the news: use the past.", te: "స్నేహితులకి వార్త చెప్పేటప్పుడు: past వాడాలి." },
          example: { en: "It rained heavily in Vijayawada yesterday.", te: "నిన్న విజయవాడలో బాగా వర్షం పడింది." },
        },
        {
          form: "Collector Visits …",
          useFor: { en: "One person in a headline: the verb takes s.", te: "హెడ్‌లైన్‌లో ఒక్కరే ఉంటే verb కి s వస్తుంది." },
          example: { en: "The headline says Collector Visits Flood Areas.", te: "'వరద ప్రాంతాల్లో కలెక్టర్ పర్యటన' అని హెడ్‌లైన్ ఉంది." },
        },
        {
          form: "the, a",
          useFor: { en: "Headlines drop the and a, but your sentences keep them.", te: "హెడ్‌లైన్స్‌లో the, a ఉండవు; మీరు చెప్పే వాక్యంలో ఉండాలి." },
          example: { en: "The collector visited the flood areas yesterday.", te: "నిన్న కలెక్టర్ గారు వరద ప్రాంతాలకి వెళ్ళారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Collector visited flood areas yesterday.",
      right: "The collector visited the flood areas yesterday.",
      why: {
        en: "Headlines drop the, but a sentence you say needs it; Telugu has no word like the.",
        te: "హెడ్‌లైన్స్‌లో the ఉండదు, కానీ మీరు మాట్లాడే వాక్యంలో కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "It rained heavily yesterday night.",
      right: "It rained heavily last night.",
      why: {
        en: "English says last night, not yesterday night; Telugu నిన్న రాత్రి is word for word.",
        te: "ఇంగ్లీష్‌లో last night అంటారు, yesterday night అనరు; 'నిన్న రాత్రి' ని పదం పదం మార్చకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "The headline says Flood Hits Villages. What does it mean?",
        te: "హెడ్‌లైన్‌లో Flood Hits Villages అని ఉంది. దాని అర్థం ఏంటి?",
      },
      options: ["A flood hit some villages.", "A flood hits villages every day.", "A flood will hit the villages."],
      answer: 0,
      why: {
        en: "Headlines use the present for news that has already happened, so it is past news.",
        te: "జరిగిపోయిన వార్తకి కూడా హెడ్‌లైన్స్ present వాడతాయి; అంటే ఇది ఇప్పటికే జరిగిన వార్త.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The paper ___ the old bridge is closed.",
      te: "పాత బ్రిడ్జి మూసేశారని పేపర్‌లో ఉంది.",
      options: ["says", "say", "saying"],
      answer: 0,
      why: {
        en: "One paper, like he or she, takes s on the verb; Telugu ఉంది does not show it.",
        te: "ఒక్క పేపర్ (he, she లాగా), అందుకే verb కి s; తెలుగు 'ఉంది' లో అది కనిపించదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "Your friend did not see the paper. Tell him the news about the collector.",
        te: "మీ స్నేహితుడు పేపర్ చూడలేదు. కలెక్టర్ గారి గురించిన వార్త ఆయనకి చెప్పండి.",
      },
      options: [
        "The collector visited the flood areas yesterday.",
        "Collector visited flood areas yesterday.",
        "The collector visit the flood areas yesterday.",
      ],
      answer: 0,
      why: {
        en: "When you tell the news, put back the and use the past for yesterday.",
        te: "మీరు వార్త చెప్పేటప్పుడు the మళ్ళీ చేర్చాలి; నిన్నటి పనికి past వాడాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "It rains heavily in Vijayawada yesterday.",
      wrongIndex: 1,
      fix: "It rained heavily in Vijayawada yesterday.",
      why: {
        en: "Headlines use the present, but when you tell the news, yesterday needs the past.",
        te: "హెడ్‌లైన్స్‌లో present ఉంటుంది; కానీ మీరు వార్త చెప్పేటప్పుడు yesterday కి past కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your friend asks about the rain. The headline says Heavy Rains Hit Vijayawada. Tell her what happened.",
        te: "వర్షం గురించి మీ స్నేహితురాలు అడుగుతున్నారు. హెడ్‌లైన్‌లో Heavy Rains Hit Vijayawada అని ఉంది. ఏం జరిగిందో ఆవిడకి చెప్పండి.",
      },
      expected: [
        "It rained heavily in Vijayawada yesterday.",
        "It rained heavily in Vijayawada.",
        "There was heavy rain in Vijayawada yesterday.",
      ],
      options: [
        "It rained heavily in Vijayawada yesterday.",
        "It rains heavily in Vijayawada yesterday.",
        "It rained heavily in Vijayawada yesterday night.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend is holding the paper. Ask what the headline says.",
        te: "మీ స్నేహితుడి చేతిలో పేపర్ ఉంది. హెడ్‌లైన్‌లో ఏముందో అడగండి.",
      },
      expected: ["What does the headline say?", "What does it say?", "What does the paper say?"],
      options: ["What does the headline say?", "What the headline says?", "What does the headline says?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The paper at the tea stall", te: "టీ కొట్టు దగ్గర పేపర్" },
    scene: {
      en: "It is early morning at the tea stall. Your friend Gopal is reading the paper.",
      te: "పొద్దున్నే టీ కొట్టు దగ్గర ఉన్నారు. మీ స్నేహితుడు గోపాల్ గారు పేపర్ చదువుతున్నారు.",
    },
    partner: { en: "Gopal (your friend)", te: "గోపాల్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "news", label: { en: "Understanding headlines", te: "హెడ్‌లైన్స్ అర్థం చేసుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Have you seen today's paper?",
        te: "గుడ్ మార్నింగ్! ఈ రోజు పేపర్ చూశారా?",
        hint: { en: "Greet him, say not yet, and ask what the news is.", te: "ఆయనకి నమస్కారం చెప్పి, ఇంకా లేదని, వార్త ఏంటని అడగండి." },
        replies: [
          { say: "Good morning! Not yet. What's the news today?", good: true, skill: "polite" },
          { say: "Good morning! Not yet. What's the news today morning?", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Look at this headline. Heavy Rains Hit Vijayawada.",
        te: "ఈ హెడ్‌లైన్ చూడండి. 'విజయవాడలో భారీ వర్షాలు'.",
        hint: { en: "Ask when it rained.", te: "వర్షం ఎప్పుడు పడిందో అడగండి." },
        replies: [
          { say: "Oh! When did it rain?", good: true, skill: "news" },
          { say: "Oh! When it rained?", good: false, skill: "news", fixIt: "question" },
        ],
      },
      {
        partner: "Yesterday. Headlines use the present, you know.",
        te: "నిన్న. హెడ్‌లైన్స్‌లో present వాడతారు కదా.",
        hint: { en: "Say you understand, and ask if there was much damage.", te: "అర్థమైందని చెప్పి, నష్టం ఎక్కువగా జరిగిందా అని అడగండి." },
        replies: [
          { say: "I see. Was there much damage?", good: true, skill: "news" },
          {
            say: "So what? It rains every year.",
            good: false,
            skill: "polite",
            react: { en: "Many people lost their homes. It's serious.", te: "చాలామంది ఇళ్ళు పోగొట్టుకున్నారు. ఇది చిన్న విషయం కాదు." },
          },
        ],
      },
      {
        partner: "Yes, the low areas are under water. The collector visited them.",
        te: "అవును, లోతట్టు ప్రాంతాలు నీళ్ళలో ఉన్నాయి. కలెక్టర్ గారు అక్కడికి వెళ్ళారు.",
        hint: { en: "Say you hope people are safe, and say goodbye.", te: "అందరూ క్షేమంగా ఉండాలని చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "I hope everyone is safe. See you tomorrow, Gopal!", good: true, skill: "polite" },
          { say: "I hope everyone safe. See you tomorrow, Gopal!", good: false, skill: "polite", fixIt: "be" },
        ],
      },
    ],
  },
};
