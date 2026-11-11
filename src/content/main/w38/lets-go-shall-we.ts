import type { Lesson } from "../../types";

/** Week 38, Day 1 (CURRICULUM §4): Let's … and Shall we …? — suggesting an outing to a friend. */
export const day: Lesson = {
  id: "lets-go-shall-we",
  kind: "lesson",
  title: { en: "Let's Go! Shall We?", te: "వెళ్దాం! వెళ్దామా?" },
  subtitle: "Let's … / Shall we …?",
  summary: {
    en: "Learn to suggest a plan to a friend: Let's go to the beach on Sunday. Shall we take a bus?",
    te: "స్నేహితులకి ఒక ప్లాన్ చెప్పడం నేర్చుకుందాం: Let's go to the beach on Sunday. Shall we take a bus?",
  },
  seo: {
    title: "Let's and Shall We in English for Telugu Speakers",
    description:
      "Say Let's go to the beach on Sunday and Shall we take a bus? Simple lessons for Telugu speakers on suggesting plans to friends.",
  },
  pattern: [
    { text: "Let's", role: "who" },
    { text: "go", role: "action" },
    { text: "to the beach", role: "what" },
    { text: "on Sunday", role: "when" },
  ],
  core: [
    { en: "Let's go for a walk.", te: "నడకకి వెళ్దాం.", extra: ["going"] },
    { en: "Let's go to the beach on Sunday.", te: "ఆదివారం బీచ్‌కి వెళ్దాం.", extra: ["in"] },
    { en: "Shall we take a bus?", te: "బస్సులో వెళ్దామా?", extra: ["taking"] },
    { en: "Shall we go together?", te: "కలిసి వెళ్దామా?", extra: ["are"] },
    { en: "Let's have a picnic near the river.", te: "నది దగ్గర పిక్నిక్ చేద్దాం.", extra: ["having"] },
    { en: "Shall we leave at seven in the morning?", te: "పొద్దున ఏడింటికి బయలుదేరుదామా?", extra: ["on"] },
    { en: "Let's not go today. It's too hot.", te: "ఈ రోజు వద్దు. చాలా ఎండగా ఉంది.", extra: ["don't"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Suggest one small plan to a friend or neighbour today, with Let's …",
    te: "ఈ రోజు ఎవరైనా స్నేహితులకి గానీ పక్కింటివారికి గానీ Let's … అని ఒక చిన్న ప్లాన్ చెప్పండి.",
  },
  words: [
    { en: "let's", te: "…దాం (మనం కలిసి)" },
    { en: "shall we", te: "…దామా?" },
    { en: "together", te: "కలిసి" },
    { en: "join", te: "కలవడం, తోడు రావడం" },
    { en: "picnic", te: "పిక్నిక్, వనభోజనం" },
  ],
  grammar: ["imperatives", "yes-no-questions", "politeness-softening"],
  topics: ["people", "time", "travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Let's and Shall we", te: "వెళ్దాం, వెళ్దామా?" },
      body: {
        en: "To suggest a plan, start with Let's and the plain verb: Let's go for a walk. To ask your friend, say Shall we …? Both mean you do it together.",
        te: "ప్లాన్ చెప్పాలంటే Let's తో మొదలుపెట్టి verb అలాగే వాడండి: Let's go (వెళ్దాం). స్నేహితుల్ని అడగాలంటే Shall we …? (వెళ్దామా?) అనండి. రెండిట్లోనూ 'మనం కలిసి' అనే అర్థం ఉంది.",
      },
      bridge: {
        te: ["ఆదివారం", "బీచ్‌కి", "వెళ్దాం"],
        en: [
          { text: "Let's", role: "who" },
          { text: "go", role: "action" },
          { text: "to the beach", role: "what" },
          { text: "on Sunday", role: "when" },
        ],
      },
      examples: [
        { en: "Let's go for a walk.", te: "నడకకి వెళ్దాం." },
        { en: "Let's go to the beach on Sunday.", te: "ఆదివారం బీచ్‌కి వెళ్దాం." },
        { en: "Shall we take a bus?", te: "బస్సులో వెళ్దామా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Telling or asking", te: "చెప్పడమా, అడగడమా" },
      items: [
        {
          form: "Let's …",
          useFor: { en: "Suggest a plan.", te: "ప్లాన్ చెప్పడానికి (…దాం)." },
          example: { en: "Let's have a picnic near the river.", te: "నది దగ్గర పిక్నిక్ చేద్దాం." },
        },
        {
          form: "Shall we …?",
          useFor: { en: "Ask what your friend thinks.", te: "స్నేహితుల అభిప్రాయం అడగడానికి (…దామా?)." },
          example: { en: "Shall we leave at seven in the morning?", te: "పొద్దున ఏడింటికి బయలుదేరుదామా?" },
        },
        {
          form: "Let's not …",
          useFor: { en: "Suggest not doing something.", te: "ఏదైనా వద్దు అని చెప్పడానికి." },
          example: { en: "Let's not go today. It's too hot.", te: "ఈ రోజు వద్దు. చాలా ఎండగా ఉంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Let's go for walk.",
      right: "Let's go for a walk.",
      why: {
        en: "One walk needs a before it; Telugu నడకకి has no word like a.",
        te: "ఒక walk కాబట్టి ముందు a కావాలి; తెలుగు 'నడకకి' లో a లాంటి పదం ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Let's we go to the beach.",
      right: "Let's go to the beach.",
      why: {
        en: "Let's already means let us, so do not add we again.",
        te: "Let's లోనే 'మనం' ఉంది (let us), అందుకే మళ్ళీ we చేర్చకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask your friend if you two should take a bus.", te: "బస్సులో వెళ్దామా అని స్నేహితుల్ని అడగండి." },
      options: ["Shall we take a bus?", "We shall take a bus?", "Shall we taking a bus?"],
      answer: 0,
      why: {
        en: "In a question, shall comes before we, and the verb stays plain.",
        te: "ప్రశ్నలో shall, we కంటే ముందు వస్తుంది; verb మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Let's ___ for a walk.",
      te: "నడకకి వెళ్దాం.",
      options: ["go", "going", "to go"],
      answer: 0,
      why: {
        en: "After Let's, the verb stays plain, with no -ing and no to.",
        te: "Let's తర్వాత verb అలాగే ఉంటుంది; -ing గానీ to గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend says: Shall we go to the temple on Sunday? You want to go with her. What do you say?",
        te: "ఆదివారం గుడికి వెళ్దామా? అని స్నేహితురాలు అడిగారు. మీరూ ఆవిడతో వెళ్ళాలనుకుంటున్నారు. ఏమంటారు?",
      },
      options: ["Yes, let's go.", "Yes, you go.", "Yes, let's going."],
      answer: 0,
      why: {
        en: "Let's go means we go together; you go sends your friend alone.",
        te: "Let's go అంటే కలిసి వెళ్దాం; you go అంటే మీరు ఒక్కరే వెళ్ళండి అని.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Shall we go to Araku in train?",
      wrongIndex: 5,
      fix: "Shall we go to Araku by train?",
      why: {
        en: "For how you travel, English uses by: by bus, by train, by auto.",
        te: "ఎలా వెళ్తామో చెప్పడానికి ఇంగ్లీష్‌లో by: by bus, by train, by auto. 'రైల్లో' అని in అనకూడదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "It is a cool evening. Suggest a walk to your neighbour.",
        te: "సాయంత్రం చల్లగా ఉంది. నడకకి వెళ్దామని పక్కింటివారికి చెప్పండి.",
      },
      expected: ["Let's go for a walk.", "Shall we go for a walk?", "Let's go for a walk together."],
      options: ["Let's go for a walk.", "Let's go for walk.", "Let's going for a walk."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Ask your friend if you both can start at seven in the morning.",
        te: "పొద్దున ఏడింటికి బయలుదేరుదామా అని స్నేహితుల్ని అడగండి.",
      },
      expected: ["Shall we leave at seven in the morning?", "Shall we leave at seven?", "Shall we start at seven?"],
      options: ["Shall we leave at seven in the morning?", "Shall we leave on seven in the morning?", "We shall leave at seven in morning?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A Sunday outing", te: "ఆదివారం బయటికి" },
    scene: {
      en: "Your friend Narayana drops in on Friday evening. You want an outing on Sunday.",
      te: "శుక్రవారం సాయంత్రం మీ స్నేహితుడు నారాయణ గారు మీ ఇంటికి వచ్చారు. ఆదివారం ఎక్కడికైనా వెళ్ళాలని మీకు ఉంది.",
    },
    partner: { en: "Narayana (your friend)", te: "నారాయణ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "suggest", label: { en: "Let's and Shall we", te: "వెళ్దాం, వెళ్దామా అనడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! I'm free this Sunday. Any plans?",
        te: "హలో! ఈ ఆదివారం నేను ఖాళీగా ఉన్నాను. ఏమైనా ప్లాన్ ఉందా?",
        hint: { en: "Suggest a trip to the beach that day.", te: "ఆ రోజు బీచ్‌కి వెళ్దామని చెప్పండి." },
        replies: [
          { say: "Let's go to the beach on Sunday.", good: true, skill: "suggest" },
          { say: "Let's we go to the beach on Sunday.", good: false, skill: "suggest" },
        ],
      },
      {
        partner: "Good idea! Shall I ask Imran to join us?",
        te: "మంచి ఆలోచన! ఇమ్రాన్ గారిని కూడా రమ్మని అడగనా?",
        hint: { en: "Say yes, and ask if you should all take a bus.", te: "సరే అని, అందరం బస్సులో వెళ్దామా అని అడగండి." },
        replies: [
          { say: "Yes, please. Shall we take a bus?", good: true, skill: "suggest" },
          { say: "Yes, please. Shall we take bus?", good: false, skill: "suggest", fixIt: "article" },
        ],
      },
      {
        partner: "Yes, the bus is easy. What time?",
        te: "అవును, బస్సు సులువు. ఏ టైమ్‌కి?",
        hint: { en: "Suggest leaving early, at seven.", te: "పొద్దున్నే, ఏడింటికి బయలుదేరుదామని చెప్పండి." },
        replies: [
          { say: "Shall we leave at seven in the morning?", good: true, skill: "suggest" },
          { say: "Let's leave at seven in the morning.", good: true, skill: "suggest" },
          {
            say: "Seven o'clock. Don't be late again!",
            good: false,
            skill: "polite",
            react: { en: "Again? Okay, okay, I'll be on time!", te: "మళ్ళీనా? సరే, సరే, టైమ్‌కి వస్తాను!" },
          },
        ],
      },
      {
        partner: "Perfect. See you at the bus stand at seven.",
        te: "సరే. ఏడింటికి బస్ స్టాండ్‌లో కలుద్దాం.",
        hint: { en: "Agree, and say goodbye.", te: "ఒప్పుకుని, బై చెప్పండి." },
        replies: [
          { say: "Okay. See you on Sunday. Bye!", good: true, skill: "polite" },
          { say: "Okay. See you in Sunday. Bye!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
