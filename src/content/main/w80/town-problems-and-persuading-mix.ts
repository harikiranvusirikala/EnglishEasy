import type { Lesson } from "../../types";

/**
 * Week 80, Day 3 (CURRICULUM §5): Checkpoint mix — complaints with the present perfect passive (Week 75), words from
 * other accents (Week 78) and persuading gently (Week 79).
 */
export const day: Lesson = {
  id: "town-problems-and-persuading-mix",
  kind: "lesson",
  title: { en: "Town Problems", te: "ఊరి సమస్యలు" },
  subtitle: "what hasn't been done, and getting neighbours to help",
  summary: {
    en: "Say clearly what hasn't been done in your area, and gently persuade your neighbours to act together.",
    te: "మీ ప్రాంతంలో ఏ పని జరగలేదో స్పష్టంగా చెప్పడం, అందరూ కలిసి ముందుకు రావాలని పొరుగువాళ్ళని మెల్లగా ఒప్పించడం.",
  },
  seo: {
    title: "Talking About Town Problems in English for Telugu Speakers",
    description:
      "Say The drain hasn't been cleaned for weeks and It might be better to go to the office together. A review lesson for Telugu speakers.",
  },
  pattern: [
    { text: "The drain", role: "who" },
    { text: "hasn't been cleaned", role: "action" },
    { text: "for weeks", role: "when" },
  ],
  core: [
    { en: "The drain hasn't been cleaned for weeks.", te: "వారాలుగా మురుగు కాలువ శుభ్రం చేయలేదు.", extra: ["since"] },
    { en: "It might be better to go to the office together.", te: "అందరం కలిసి ఆఫీసుకి వెళ్తే మంచిదేమో.", extra: ["going"] },
    { en: "Stray dogs have been chasing people at night.", te: "రాత్రుళ్ళు వీధి కుక్కలు జనాల వెంట పడుతున్నాయి.", extra: ["are"] },
    { en: "You should really sign the petition. It will help everyone.", te: "మీరు ఈ అర్జీ మీద తప్పకుండా సంతకం పెట్టాలి. అది అందరికీ ఉపయోగపడుతుంది.", extra: ["signing"] },
    { en: "If we all go together, they will listen to us.", te: "మనమందరం కలిసి వెళ్తే, వాళ్ళు మన మాట వింటారు.", extra: ["would"] },
    { en: "In Britain, people say rubbish for garbage.", te: "బ్రిటన్‌లో garbage ని rubbish అంటారు." },
    { en: "The residents' association has written to the commissioner.", te: "కాలనీ సంఘం కమిషనర్ గారికి ఉత్తరం రాసింది.", extra: ["wrote"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one problem on your street. Say aloud what hasn't been done, and one sentence to get a neighbour to help.",
    te: "మీ వీధిలో ఒక సమస్య గురించి ఆలోచించండి. ఏ పని జరగలేదో, పొరుగువారిని సాయానికి ఒప్పించే ఒక వాక్యం, రెండూ గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "open drain", te: "మూత లేని మురుగు కాలువ" },
    { en: "stray dogs", te: "వీధి కుక్కలు" },
    { en: "petition", te: "అర్జీ, అందరూ సంతకం పెట్టిన వినతి పత్రం" },
    { en: "residents' association", te: "కాలనీ సంఘం" },
    { en: "commissioner", te: "కమిషనర్ (మున్సిపల్ అధికారి)" },
  ],
  grammar: ["passive-voice", "present-perfect", "should-must-have-to", "conditionals"],
  topics: ["neighbours", "offices", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Say the problem, then persuade", te: "సమస్య చెప్పి, తర్వాత ఒప్పించడం" },
      body: {
        en: "First say what nobody has done: The drain hasn't been cleaned. Then persuade gently: It might be better to …, You should really …, If we all …, they will ….",
        te: "ముందు ఎవరూ చేయని పని చెప్పండి: The drain hasn't been cleaned. తర్వాత మెల్లగా ఒప్పించండి: It might be better to …, You should really …, If we all …, they will ….",
      },
      bridge: {
        te: ["వారాలుగా", "మురుగు కాలువ", "శుభ్రం చేయలేదు"],
        en: [
          { text: "The drain", role: "who" },
          { text: "hasn't been cleaned", role: "action" },
          { text: "for weeks", role: "when" },
        ],
      },
      examples: [
        { en: "The drain hasn't been cleaned for weeks.", te: "వారాలుగా మురుగు కాలువ శుభ్రం చేయలేదు." },
        { en: "It might be better to go to the office together.", te: "అందరం కలిసి ఆఫీసుకి వెళ్తే మంచిదేమో." },
        { en: "Stray dogs have been chasing people at night.", te: "రాత్రుళ్ళు వీధి కుక్కలు జనాల వెంట పడుతున్నాయి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Four steps to get help", te: "సాయం పొందడానికి నాలుగు అడుగులు" },
      items: [
        {
          form: "hasn't been + -ed",
          useFor: { en: "What nobody has done yet.", te: "ఇంకా ఎవరూ చేయని పని." },
          example: { en: "The open drain near the school hasn't been covered.", te: "స్కూల్ దగ్గర ఉన్న మురుగు కాలువకి ఇంకా మూత వేయలేదు." },
        },
        {
          form: "It might be better to …",
          useFor: { en: "A soft suggestion.", te: "మెత్తగా ఇచ్చే సలహా." },
          example: { en: "It might be better to write a letter first.", te: "ముందు ఒక ఉత్తరం రాస్తే మంచిదేమో." },
        },
        {
          form: "You should really …",
          useFor: { en: "Gently push a friend to act.", te: "స్నేహితుల్ని ముందుకు రమ్మని మెల్లగా ప్రోత్సహించడం." },
          example: { en: "You should really sign the petition. It will help everyone.", te: "మీరు ఈ అర్జీ మీద తప్పకుండా సంతకం పెట్టాలి. అది అందరికీ ఉపయోగపడుతుంది." },
        },
        {
          form: "If we all …, they will …",
          useFor: { en: "Show what will happen if everyone helps.", te: "అందరూ కలిస్తే ఏం జరుగుతుందో చూపించడం." },
          example: { en: "If we all go together, they will listen to us.", te: "మనమందరం కలిసి వెళ్తే, వాళ్ళు మన మాట వింటారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "The drain is blocked since last month.",
      right: "The drain has been blocked since last month.",
      why: {
        en: "A problem that started earlier and is still there takes has been; Telugu uses the present, so we copy it.",
        te: "ముందే మొదలై ఇప్పటికీ ఉన్న సమస్యకి has been వాడాలి; తెలుగులో వర్తమానం వాడతాం కాబట్టి అలాగే అనేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please revert back about our petition.",
      right: "Please reply to us about our petition.",
      why: {
        en: "Revert already means reply, so back is extra; most people simply say reply.",
        te: "revert అంటేనే జవాబు ఇవ్వడం, అందుకే back అక్కర్లేదు; చాలామంది మామూలుగా reply అంటారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "The garbage truck hasn't come for a week. Tell the municipal helpline.",
        te: "వారం నుంచి చెత్త బండి రాలేదు. మున్సిపల్ హెల్ప్‌లైన్‌కి చెప్పండి.",
      },
      options: [
        "The garbage hasn't been collected for a week.",
        "The garbage hasn't collected for a week.",
        "The garbage isn't collected since a week.",
      ],
      answer: 0,
      why: {
        en: "Garbage does not collect itself, so the passive needs been, and a length of time takes for.",
        te: "చెత్త తనంతట తానే పోదు, అందుకే been కావాలి; ఎంత కాలం అని చెప్పడానికి for వాడాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "A visitor from America asks for the ___. She means the lift.",
      te: "అమెరికా నుంచి వచ్చిన అతిథి, అమెరికన్లు వాడే పదంతో lift ఎక్కడ అని అడుగుతున్నారు.",
      options: ["elevator", "escalator", "apartment"],
      answer: 0,
      why: {
        en: "In America, a lift is an elevator; an escalator is a moving staircase.",
        te: "అమెరికాలో lift ని elevator అంటారు; escalator అంటే కదిలే మెట్లు.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Gandhi Nagar Residents' Association",
      lines: [
        "Dear Residents,",
        "The open drain on Lane Two hasn't been covered for three months.",
        "Two people have slipped into it this month.",
        "We have complained to the municipality twice, but nothing has been done.",
        "Now we are sending a petition to the commissioner.",
        "Please come and sign it at the community hall this Sunday.",
        "Signing time is from 9 am to 12 noon.",
        "If we all sign, the work will be done faster.",
        "Secretary, Residents' Association",
      ],
      questions: [
        {
          prompt: { en: "What is the problem?", te: "సమస్య ఏంటి?" },
          options: ["An open drain on Lane Two", "No water on Lane Two", "Stray dogs near the hall"],
          answer: 0,
          why: {
            en: "The second line says the drain there has not been covered for months.",
            te: "అక్కడి కాలువకి నెలలుగా మూత వేయలేదని రెండో లైన్‌లో ఉంది.",
          },
        },
        {
          prompt: { en: "Where can you sign the petition?", te: "అర్జీ మీద ఎక్కడ సంతకం పెట్టొచ్చు?" },
          options: ["At the community hall", "At the municipal office", "At the commissioner's house"],
          answer: 0,
          why: {
            en: "The notice asks residents to come to the hall on Sunday morning.",
            te: "ఆదివారం పొద్దున హాల్‌కి రమ్మని నోటీసులో ఉంది.",
          },
        },
        {
          prompt: { en: "Why should everyone sign?", te: "అందరూ ఎందుకు సంతకం పెట్టాలి?" },
          options: ["The work will be done faster.", "The drain will be cleaned for free.", "The commissioner will visit Lane Two."],
          answer: 0,
          why: {
            en: "The last line before the name says more signatures will get the work done sooner.",
            te: "పేరుకి ముందున్న లైన్‌లో, ఎక్కువ సంతకాలుంటే పని త్వరగా అవుతుందని ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "We discussed about the drain at the meeting.",
      wrongIndex: 2,
      fix: "We discussed the drain at the meeting.",
      why: {
        en: "Discuss already means talk about, so no about follows it; Telugu గురించి makes us add it.",
        te: "discuss అంటేనే 'గురించి మాట్లాడటం', అందుకే about అక్కర్లేదు; తెలుగు 'గురించి' వల్ల చేర్చేస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Persuade your neighbour Fatima, gently, to come with you all to the municipal office.",
        te: "అందరితో కలిసి మున్సిపల్ ఆఫీసుకి రమ్మని పక్కింటి ఫాతిమా గారిని మెల్లగా ఒప్పించండి.",
      },
      expected: ["It might be better to go to the office together.", "Why don't we go to the office together?", "Shall we all go to the office together?"],
      options: [
        "It might be better to go to the office together.",
        "It might be better to go to office together.",
        "It might be better going to the office together.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "A new neighbour, Joseph, hasn't signed the petition. Ask him gently why not, and give a reason to sign.",
        te: "కొత్తగా వచ్చిన జోసెఫ్ గారు అర్జీ మీద సంతకం పెట్టలేదు. ఎందుకో మెల్లగా అడిగి, సంతకం పెట్టడానికి ఒక కారణం చెప్పండి.",
      },
      expected: ["Why don't you sign it? It will help everyone.", "Why don't you sign the petition? It helps everyone.", "Why not sign it? It will help us all."],
      options: ["Why don't you sign it? It will help everyone.", "Why you don't sign it? It will help everyone.", "Just sign it. Don't waste my time."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Let's complain together", te: "కలిసి ఫిర్యాదు చేద్దాం" },
    scene: {
      en: "Your neighbour Geetha stops you on the street. The open drain near your houses smells terrible.",
      te: "పక్కింటి గీత గారు మిమ్మల్ని వీధిలో ఆపారు. మీ ఇళ్ళ దగ్గర ఉన్న మురుగు కాలువ నుంచి భరించలేని వాసన వస్తోంది.",
    },
    partner: { en: "Geetha (your neighbour)", te: "గీత (పక్కింటావిడ)" },
    skills: [
      { id: "problem", label: { en: "Saying the problem", te: "సమస్య చెప్పడం" } },
      { id: "persuade", label: { en: "Persuading gently", te: "మెల్లగా ఒప్పించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Have you seen the drain? The smell is terrible.",
        te: "హలో! కాలువ చూశారా? వాసన భరించలేకపోతున్నాం.",
        hint: { en: "Agree, and say how long it has been like this.", te: "ఒప్పుకుని, ఎన్నాళ్ళుగా ఇలా ఉందో చెప్పండి." },
        replies: [
          { say: "Yes. It hasn't been cleaned for three weeks.", good: true, skill: "problem" },
          { say: "Yes. It is not cleaned since three weeks.", good: false, skill: "problem", fixIt: "duration" },
        ],
      },
      {
        partner: "I called the helpline twice, but nobody came.",
        te: "హెల్ప్‌లైన్‌కి రెండుసార్లు ఫోన్ చేశాను, కానీ ఎవరూ రాలేదు.",
        hint: { en: "Suggest gently that the neighbours go to the office as a group.", te: "పొరుగువాళ్ళందరూ గుంపుగా ఆఫీసుకి వెళ్దామని మెల్లగా సూచించండి." },
        replies: [
          { say: "It might be better to go to the office together.", good: true, skill: "persuade" },
          { say: "Why don't we all go to the municipal office together?", good: true, skill: "persuade" },
          {
            say: "Calling is useless. You should have gone yourself.",
            good: false,
            skill: "polite",
            react: { en: "Hmm. I was only trying to help.", te: "హ్మ్. నేను సాయం చేద్దామనే ప్రయత్నించాను." },
          },
        ],
      },
      {
        partner: "But will they listen to a few old people like us?",
        te: "కానీ మనలాంటి నలుగురు పెద్దవాళ్ళ మాట వాళ్ళు వింటారా?",
        hint: { en: "Persuade her: if everyone comes, the officials will listen.", te: "ఒప్పించండి: అందరూ వస్తే అధికారులు వింటారు." },
        replies: [
          { say: "If we all go together, they will listen to us.", good: true, skill: "persuade" },
          { say: "If twenty of us go, they will surely listen.", good: true, skill: "persuade" },
          { say: "If we all would go together, they will listen to us.", good: false, skill: "persuade" },
        ],
      },
      {
        partner: "You're right. Let's ask the others this evening.",
        te: "మీరు చెప్పింది నిజమే. ఈ సాయంత్రం మిగతావాళ్ళని అడుగుదాం.",
        hint: { en: "Agree, offer to bring the petition, and say goodbye.", te: "ఒప్పుకుని, అర్జీ మీరు తెస్తానని చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Yes. I'll bring the petition. See you this evening!", good: true, skill: "persuade" },
          { say: "Yes. I'll bring the petition. See you today evening!", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
