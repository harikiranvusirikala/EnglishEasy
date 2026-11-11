import type { Lesson } from "../../types";

/** Week 30, Day 1 (CURRICULUM §4): Have you ever + the third form? — asking about experiences; Yes, I have / No, I haven't. */
export const day: Lesson = {
  id: "have-you-ever",
  kind: "lesson",
  title: { en: "Have You Ever …?", te: "ఎప్పుడైనా …?" },
  subtitle: "Have you ever …?",
  summary: {
    en: "Learn to ask about experiences: Have you ever been to Delhi? Yes, I have. No, I haven't.",
    te: "అనుభవాల గురించి అడగడం నేర్చుకుందాం: Have you ever been to Delhi? Yes, I have. No, I haven't.",
  },
  seo: {
    title: "Have You Ever …? in English for Telugu Speakers",
    description:
      "Ask Have you ever been to Delhi? and answer Yes, I have or No, I haven't. Simple lessons for Telugu speakers on talking about experiences.",
  },
  pattern: [
    { text: "Have", role: "action" },
    { text: "you", role: "who" },
    { text: "ever been", role: "action" },
    { text: "to Delhi?", role: "what" },
  ],
  core: [
    { en: "Have you ever been to Delhi?", te: "మీరు ఎప్పుడైనా ఢిల్లీ వెళ్ళారా?", extra: ["went"] },
    { en: "Have you ever seen the sea?", te: "మీరు ఎప్పుడైనా సముద్రం చూశారా?", extra: ["saw"] },
    { en: "Yes, I have. It was beautiful.", te: "ఆ, చూశాను. చాలా అందంగా ఉంది.", extra: ["has"] },
    { en: "No, I haven't. I'd like to go.", te: "లేదు, వెళ్ళలేదు. వెళ్ళాలని ఉంది.", extra: ["didn't"] },
    { en: "I have been to the beach in Vizag.", te: "నేను వైజాగ్‌లో బీచ్‌కి వెళ్ళొచ్చాను.", extra: ["at"] },
    { en: "Has Mohan ever been to Tirupati?", te: "మోహన్ గారు ఎప్పుడైనా తిరుపతి వెళ్ళారా?", extra: ["Have"] },
    { en: "Yes, I have been there.", te: "ఆ, నేను అక్కడికి వెళ్ళొచ్చాను.", extra: ["gone"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask a friend or neighbour today: Have you ever been to Delhi?",
    te: "ఈ రోజు ఎవరైనా స్నేహితులని గానీ పొరుగువారిని గానీ అడగండి: Have you ever been to Delhi?",
  },
  words: [
    { en: "ever", te: "ఎప్పుడైనా" },
    { en: "been to", te: "వెళ్ళొచ్చారు (వెళ్ళి తిరిగి వచ్చారు)" },
    { en: "sea", te: "సముద్రం" },
    { en: "beach", te: "బీచ్, సముద్ర తీరం" },
    { en: "experience", te: "అనుభవం" },
  ],
  grammar: ["present-perfect", "yes-no-questions"],
  topics: ["travel", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking about experiences", te: "అనుభవాల గురించి అడగడం" },
      body: {
        en: "To ask about any time in someone's life, say Have you ever and the third form of the verb: been, seen. Ever means at any time. Answer Yes, I have, or No, I haven't.",
        te: "జీవితంలో ఎప్పుడైనా చేశారా అని అడగడానికి Have you ever + verb మూడో రూపం (been, seen) అనండి. జవాబు: Yes, I have లేదా No, I haven't.",
      },
      bridge: {
        te: ["మీరు", "ఎప్పుడైనా", "ఢిల్లీ", "వెళ్ళారా?"],
        en: [
          { text: "Have", role: "action" },
          { text: "you", role: "who" },
          { text: "ever been", role: "action" },
          { text: "to Delhi?", role: "what" },
        ],
      },
      examples: [
        { en: "Have you ever been to Delhi?", te: "మీరు ఎప్పుడైనా ఢిల్లీ వెళ్ళారా?" },
        { en: "Have you ever seen the sea?", te: "మీరు ఎప్పుడైనా సముద్రం చూశారా?" },
        { en: "Has Mohan ever been to Tirupati?", te: "మోహన్ గారు ఎప్పుడైనా తిరుపతి వెళ్ళారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking and answering", te: "అడగడం, జవాబు చెప్పడం" },
      items: [
        {
          form: "Have you ever …?",
          useFor: { en: "Asking about any time in someone's life.", te: "జీవితంలో ఎప్పుడైనా జరిగిందా అని అడగడానికి." },
          example: { en: "Have you ever seen the sea?", te: "మీరు ఎప్పుడైనా సముద్రం చూశారా?" },
        },
        {
          form: "Has he / she ever …?",
          useFor: { en: "Asking about one other person.", te: "ఇంకొకరి గురించి అడగడానికి." },
          example: { en: "Has Mohan ever been to Tirupati?", te: "మోహన్ గారు ఎప్పుడైనా తిరుపతి వెళ్ళారా?" },
        },
        {
          form: "Yes, I have.",
          useFor: { en: "A short yes.", te: "అవును అని చిన్న జవాబు." },
          example: { en: "Yes, I have. It was beautiful.", te: "ఆ, చూశాను. చాలా అందంగా ఉంది." },
        },
        {
          form: "No, I haven't.",
          useFor: { en: "A short no.", te: "లేదు అని చిన్న జవాబు." },
          example: { en: "No, I haven't. I'd like to go.", te: "లేదు, వెళ్ళలేదు. వెళ్ళాలని ఉంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "You have ever been to Delhi?",
      right: "Have you ever been to Delhi?",
      why: {
        en: "Telugu asks with the voice alone, but an English question puts have before you.",
        te: "తెలుగులో గొంతుతోనే ప్రశ్న అడుగుతాం; ఇంగ్లీష్ ప్రశ్నలో have, you కంటే ముందు వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Have you ever went to Delhi?",
      right: "Have you ever been to Delhi?",
      why: {
        en: "Went is the past form; after have, use the third form, been.",
        te: "went అనేది past రూపం; have తర్వాత మూడో రూపం been రావాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask a friend if she has ever seen the sea.", te: "ఎప్పుడైనా సముద్రం చూశారా అని ఒక స్నేహితురాలిని అడగండి." },
      options: ["Have you ever seen the sea?", "You have ever seen the sea?", "Did you ever seen the sea?"],
      answer: 0,
      why: {
        en: "In a question, have comes first, then you, then seen.",
        te: "ప్రశ్నలో ముందు have, తర్వాత you, ఆ తర్వాత seen వస్తాయి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "___ Mohan ever been to Tirupati?",
      te: "మోహన్ గారు ఎప్పుడైనా తిరుపతి వెళ్ళారా?",
      options: ["Has", "Have", "Is"],
      answer: 0,
      why: {
        en: "Mohan is one person, like he, so the question starts with has.",
        te: "మోహన్ ఒక్కరే (he లాగా), అందుకే ప్రశ్న has తో మొదలవుతుంది.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Swapna",
      lines: ["Hello Kiran! Have you ever been to Araku?", "It is beautiful in winter.", "We are going on Saturday. Will you come?"],
      prompt: { en: "What does Swapna ask you first?", te: "స్వప్న గారు మిమ్మల్ని ముందు ఏం అడుగుతున్నారు?" },
      options: ["If you have ever been to Araku", "If you live in Araku", "If you are in Araku now"],
      answer: 0,
      why: {
        en: "Have you ever been asks about any time in your life.",
        te: "Have you ever been అంటే జీవితంలో ఎప్పుడైనా వెళ్ళారా అని.",
      },
      say: "Have you ever been to Araku?",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Have you ever seen sea?",
      wrongIndex: 4,
      fix: "Have you ever seen the sea?",
      why: {
        en: "Telugu has no the, but English says the sea, the sky, the moon.",
        te: "తెలుగులో the ఉండదు; ఇంగ్లీష్‌లో the sea, the sky, the moon అంటాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask your neighbour if she has ever been to Delhi.",
        te: "ఎప్పుడైనా ఢిల్లీ వెళ్ళారా అని పొరుగావిడని అడగండి.",
      },
      expected: ["Have you ever been to Delhi?", "Have you been to Delhi?"],
      options: ["Have you ever been to Delhi?", "Are you ever been to Delhi?", "You ever went to Delhi?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A friend asks if you have ever seen the sea. You have. Answer.",
        te: "ఎప్పుడైనా సముద్రం చూశారా అని ఒక స్నేహితులు అడిగారు. మీరు చూశారు. జవాబు చెప్పండి.",
      },
      expected: ["Yes, I have.", "Yes, I have seen the sea.", "Yes, I have seen it."],
      options: ["Yes, I have.", "Yes, I am.", "Yes, I have saw."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A new neighbour", te: "కొత్త పొరుగావిడ" },
    scene: {
      en: "In the colony park you meet Anitha. She moved here last month. Chat about places.",
      te: "కాలనీ పార్క్‌లో అనిత గారిని కలిశారు. ఆవిడ గత నెలే ఇక్కడికి వచ్చారు. ఊళ్ళ గురించి మాట్లాడండి.",
    },
    partner: { en: "Anitha (new neighbour)", te: "అనిత (కొత్త పొరుగావిడ)" },
    skills: [{ id: "ever", label: { en: "Have you ever …?", te: "Have you ever … అని అడగడం" } }],
    turns: [
      {
        partner: "Hello! I'm Anitha. I'm new here, from Nellore.",
        te: "నమస్కారం! నేను అనిత. ఇక్కడికి కొత్త, నెల్లూరు నుంచి వచ్చాను.",
        hint: { en: "Greet her and give your own name.", te: "ఆవిడని పలకరించి, మీ పేరు చెప్పండి." },
        replies: [
          { say: "Nice to meet you. I'm Kiran.", good: true },
          { say: "Nice to meet you. Myself Kiran.", good: false, fixIt: "indian-english" },
        ],
      },
      {
        partner: "Have you ever been to Nellore?",
        te: "మీరు ఎప్పుడైనా నెల్లూరు వెళ్ళారా?",
        hint: { en: "Say no with a short answer, and that you'd like to go.", te: "చిన్న జవాబుతో లేదని చెప్పి, వెళ్ళాలని ఉందని చెప్పండి." },
        replies: [
          { say: "No, I haven't. I'd like to go.", good: true, skill: "ever" },
          { say: "No, I am not. I'd like to go.", good: false, skill: "ever" },
        ],
      },
      {
        partner: "Please come one day. It's near the sea.",
        te: "ఒకసారి తప్పకుండా రండి. సముద్రానికి దగ్గర.",
        hint: { en: "Ask if she has ever visited Vizag.", te: "ఆవిడ ఎప్పుడైనా వైజాగ్ వెళ్ళారా అని అడగండి." },
        replies: [
          { say: "Have you ever been to Vizag?", good: true, skill: "ever" },
          { say: "You have ever been to Vizag?", good: false, skill: "ever", fixIt: "question" },
          {
            say: "Nellore is too hot. Why visit?",
            good: false,
            skill: "ever",
            react: { en: "Hot, yes! But the food is very good.", te: "ఎండ ఎక్కువే! కానీ అక్కడి భోజనం చాలా బాగుంటుంది." },
          },
        ],
      },
      {
        partner: "Yes, I have. Okay, I must go now. Bye!",
        te: "ఆ, వెళ్ళాను. సరే, ఇక వెళ్ళాలి. బై!",
        hint: { en: "Say goodbye kindly, and say it was nice to meet her.", te: "మర్యాదగా బై చెప్పి, కలవడం సంతోషంగా ఉందని చెప్పండి." },
        replies: [
          { say: "Bye! It was nice to meet you.", good: true },
          { say: "Bye! It was nice to meeting you.", good: false },
        ],
      },
    ],
  },
};
