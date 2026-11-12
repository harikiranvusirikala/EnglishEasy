import type { Lesson } from "../../types";

/** Week 75, Day 4 (CURRICULUM §5): formal complaint phrases — I'd like to register a complaint; the complaint number; By when will it be fixed? */
export const day: Lesson = {
  id: "registering-a-civic-complaint",
  kind: "lesson",
  title: { en: "Registering a Complaint", te: "ఫిర్యాదు చేయడం" },
  subtitle: "I'd like to register a complaint; by when",
  summary: {
    en: "Learn to register a complaint and follow it up: I'd like to register a complaint about the drainage. By when will it be fixed?",
    te: "ఫిర్యాదు నమోదు చేసి, దాని సంగతి కనుక్కోవడం నేర్చుకుందాం: I'd like to register a complaint about the drainage. By when will it be fixed?",
  },
  seo: {
    title: "Registering a Civic Complaint in English for Telugu Speakers",
    description:
      "Say I'd like to register a complaint about the drainage and By when will it be fixed? Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I'd", role: "who" },
    { text: "like to register", role: "action" },
    { text: "a complaint about the drainage", role: "what" },
  ],
  core: [
    { en: "I'd like to register a complaint about the drainage.", te: "డ్రైనేజీ గురించి ఒక ఫిర్యాదు నమోదు చేయాలనుకుంటున్నాను.", extra: ["for"] },
    { en: "By when will it be fixed?", te: "ఎప్పటిలోగా బాగు చేస్తారు?", extra: ["Until"] },
    { en: "Could you give me the complaint number, please?", te: "ఫిర్యాదు నంబర్ కొంచెం చెప్తారా?", extra: ["say"] },
    { en: "The drain in our lane has been overflowing for a week.", te: "వారం రోజులుగా మా లేన్‌లో డ్రైనేజీ పొంగి పొర్లుతోంది.", extra: ["since"] },
    { en: "The sewage water is coming onto the road.", te: "మురుగు నీళ్ళు రోడ్డు మీదకి వస్తున్నాయి.", extra: ["are"] },
    { en: "My complaint number is five three eight two.", te: "నా ఫిర్యాదు నంబర్ 5382.", extra: ["was"] },
    { en: "If it isn't fixed by Friday, I'll call again.", te: "శుక్రవారం లోపు బాగు చేయకపోతే, మళ్ళీ ఫోన్ చేస్తాను.", extra: ["won't"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Write a complaint number or any long number on paper. Read it aloud digit by digit, the way you would on the phone.",
    te: "ఒక ఫిర్యాదు నంబర్ గానీ ఏదైనా పెద్ద నంబర్ గానీ కాగితం మీద రాయండి. ఫోన్‌లో చెప్పినట్టు ఒక్కో అంకె గట్టిగా చదవండి.",
  },
  words: [
    { en: "register a complaint", te: "ఫిర్యాదు నమోదు చేయడం" },
    { en: "drainage", te: "డ్రైనేజీ, మురుగు కాలువ" },
    { en: "sewage", te: "మురుగు నీళ్ళు" },
    { en: "manhole", te: "మ్యాన్‌హోల్" },
    { en: "by when", te: "ఎప్పటిలోగా" },
  ],
  grammar: ["would-like", "passive-voice", "conditionals"],
  topics: ["offices", "phone", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Registering a complaint", te: "ఫిర్యాదు నమోదు చేయడం" },
      body: {
        en: "Start with I'd like to register a complaint about … Then give the problem and how long it has lasted. At the end, ask for the complaint number and a date.",
        te: "I'd like to register a complaint about … తో మొదలుపెట్టండి. తర్వాత సమస్య, ఎంతకాలంగా ఉందో చెప్పండి. చివర్లో ఫిర్యాదు నంబర్, ఏ రోజుకి చేస్తారో అడగండి.",
      },
      bridge: {
        te: ["డ్రైనేజీ గురించి", "ఒక ఫిర్యాదు", "నమోదు చేయాలనుకుంటున్నాను"],
        en: [
          { text: "I'd", role: "who" },
          { text: "like to register", role: "action" },
          { text: "a complaint about the drainage", role: "what" },
        ],
      },
      examples: [
        { en: "I'd like to register a complaint about the drainage.", te: "డ్రైనేజీ గురించి ఒక ఫిర్యాదు నమోదు చేయాలనుకుంటున్నాను." },
        { en: "The drain in our lane has been overflowing for a week.", te: "వారం రోజులుగా మా లేన్‌లో డ్రైనేజీ పొంగి పొర్లుతోంది." },
        { en: "Could you give me the complaint number, please?", te: "ఫిర్యాదు నంబర్ కొంచెం చెప్తారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "The steps of a complaint call", te: "ఫిర్యాదు ఫోన్‌లో ఒక్కో అడుగు" },
      items: [
        {
          form: "I'd like to register a complaint about …",
          useFor: { en: "Start the call.", te: "ఫోన్ మొదలుపెట్టడానికి." },
          example: { en: "I'd like to register a complaint about an open manhole.", te: "తెరిచి ఉన్న ఒక మ్యాన్‌హోల్ గురించి ఫిర్యాదు చేయాలనుకుంటున్నాను." },
        },
        {
          form: "… has been … for …",
          useFor: { en: "Give the problem and how long.", te: "సమస్య, ఎంతకాలంగా ఉందో చెప్పడానికి." },
          example: { en: "The drain in our lane has been overflowing for a week.", te: "వారం రోజులుగా మా లేన్‌లో డ్రైనేజీ పొంగి పొర్లుతోంది." },
        },
        {
          form: "Could you give me the complaint number?",
          useFor: { en: "Get a number to follow up later.", te: "తర్వాత కనుక్కోవడానికి ఒక నంబర్ తీసుకోవడానికి." },
          example: { en: "Could you give me the complaint number, please?", te: "ఫిర్యాదు నంబర్ కొంచెం చెప్తారా?" },
        },
        {
          form: "By when …?",
          useFor: { en: "Ask for the last day for the work.", te: "పని ఏ రోజులోగా అవుతుందో అడగడానికి." },
          example: { en: "By when will it be fixed?", te: "ఎప్పటిలోగా బాగు చేస్తారు?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please do the needful.",
      right: "Please clean the drain by Friday.",
      why: {
        en: "Do the needful is old office English that many people don't follow. Say clearly what you want done, and by when.",
        te: "do the needful అనేది పాత ఆఫీసు ఇంగ్లీష్; చాలామందికి అర్థం కాదు. ఏం చేయాలో, ఎప్పటిలోగానో స్పష్టంగా చెప్పండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "I want to give one complaint.",
      right: "I'd like to register a complaint.",
      why: {
        en: "English uses a, not one, when the number doesn't matter; Telugu ఒక means both. I'd like is also more polite than I want.",
        te: "సంఖ్య ముఖ్యం కానప్పుడు one కాదు, a వాడాలి; తెలుగు 'ఒక' రెండింటికీ వాడతాం. I want కంటే I'd like మర్యాదగా ఉంటుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "Tell the complaint line that the drain has overflowed every day for a week, and still does.",
        te: "వారం రోజులుగా రోజూ డ్రైనేజీ పొంగుతోందని, ఇప్పటికీ పొంగుతోందని కంప్లయింట్ లైన్‌లో చెప్పండి.",
      },
      options: ["The drain has been overflowing for a week.", "The drain is overflowing since one week.", "The drain has been overflow for a week."],
      answer: 0,
      why: {
        en: "Something still going on takes has been with -ing, and for before a length of time.",
        te: "ఇంకా సాగుతున్న దానికి has been + -ing; ఎంతకాలం అనేదాని ముందు for.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "Municipal Corporation",
      lines: [
        "Dear Citizen, your complaint has been registered.",
        "Complaint No: 5382",
        "Problem: Drainage overflow and open manhole, Lane 4",
        "It will be attended to within 48 hours.",
        "To check the status, reply STATUS 5382.",
      ],
      prompt: {
        en: "This SMS came after your call. How soon should the work be done?",
        te: "మీ ఫోన్ తర్వాత ఈ SMS వచ్చింది. పని ఎంత తొందరగా జరగాలి?",
      },
      options: ["Within 48 hours", "Within a week", "By Friday"],
      answer: 0,
      why: {
        en: "The fourth line gives the time limit, and it is counted in hours.",
        te: "నాలుగో లైన్‌లో గడువు ఉంది; అది గంటల్లో లెక్కపెట్టారు.",
      },
    },
    {
      id: "p3",
      type: "fillBlank",
      sentence: "___ when will it be fixed?",
      te: "ఎప్పటిలోగా బాగు చేస్తారు?",
      options: ["By", "Until", "From"],
      answer: 0,
      why: {
        en: "By when asks for the last day for the work; until is for something that keeps going.",
        te: "by when అంటే పని ఏ రోజులోగా అవుతుందని; until ఏదైనా కొనసాగుతూ ఉండేదానికి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Could you give me complaint number, please?",
      wrongIndex: 4,
      fix: "Could you give me the complaint number, please?",
      why: {
        en: "The number for your own complaint is one known thing, so it needs the.",
        te: "మీ ఫిర్యాదుకి ఇచ్చే నంబర్ ఒక్కటే, ఇద్దరికీ తెలిసినది; అందుకే the కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "End the call. Ask firmly but politely for the drain to be cleaned by Friday.",
        te: "ఫోన్ ముగించండి. శుక్రవారం లోపు డ్రైనేజీ శుభ్రం చేయమని గట్టిగా, కానీ మర్యాదగా అడగండి.",
      },
      expected: ["Could you please clean it by Friday?", "Please clean the drain by Friday.", "Could you please clean the drain by Friday?"],
      options: ["Could you please clean it by Friday?", "Please do the needful by Friday.", "Clean it by Friday, or else!"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The agent says it will be fixed soon. Ask for the last day.",
        te: "త్వరలో బాగు చేస్తామని ఏజెంట్ అన్నారు. ఏ రోజులోగానో అడగండి.",
      },
      expected: ["By when will it be fixed?", "Could you tell me by when?", "Which day will it be fixed?"],
      options: ["By when will it be fixed?", "By when it will be fixed?", "Until when will it be fixed?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Calling the complaint line", te: "కంప్లయింట్ లైన్‌కి ఫోన్" },
    scene: {
      en: "The drain in your lane has been overflowing for a week. You call the municipal complaint line. Imran answers.",
      te: "వారం రోజులుగా మీ లేన్‌లో డ్రైనేజీ పొంగుతోంది. మీరు మున్సిపల్ కంప్లయింట్ లైన్‌కి ఫోన్ చేశారు. ఇమ్రాన్ గారు ఫోన్ ఎత్తారు.",
    },
    partner: { en: "Imran (at the complaint line)", te: "ఇమ్రాన్ (కంప్లయింట్ లైన్‌లో)" },
    voice: "b",
    skills: [
      { id: "register", label: { en: "Registering a complaint", te: "ఫిర్యాదు నమోదు" } },
      { id: "polite", label: { en: "Firm and polite", te: "గట్టిగా, మర్యాదగా" } },
    ],
    turns: [
      {
        partner: "Thank you for calling the municipal complaint line. This is Imran.",
        te: "మున్సిపల్ కంప్లయింట్ లైన్‌కి ఫోన్ చేసినందుకు థాంక్స్. నేను ఇమ్రాన్.",
        hint: { en: "Greet him, and say what kind of complaint you want to make.", te: "నమస్కారం చెప్పి, ఏ విషయం మీద ఫిర్యాదు చేయాలనుకుంటున్నారో చెప్పండి." },
        replies: [
          { say: "Good morning. I'd like to register a complaint about the drainage.", good: true, skill: "register" },
          { say: "Good morning. I want to give one complaint about drainage.", good: false, skill: "register", fixIt: "article" },
        ],
      },
      {
        partner: "Sure. What exactly is the problem, and where?",
        te: "సరే. సమస్య సరిగ్గా ఏంటి, ఎక్కడ?",
        hint: { en: "Describe the drain problem, where it is and how long it has lasted.", te: "డ్రైనేజీ సమస్య, అది ఎక్కడ, ఎంతకాలంగా ఉందో చెప్పండి." },
        replies: [
          { say: "The drain in Lane Four has been overflowing for a week.", good: true, skill: "register" },
          { say: "The drain in Lane Four is overflowing since one week.", good: false, skill: "register", fixIt: "duration" },
        ],
      },
      {
        partner: "I've registered it. Your complaint number is five three eight two.",
        te: "నమోదు చేశాను. మీ ఫిర్యాదు నంబర్ 5382.",
        hint: { en: "Repeat the number to check it, then ask for the last day for the work.", te: "నంబర్ సరిగ్గా ఉందో మళ్ళీ చెప్పి, పని ఏ రోజులోగా అవుతుందో అడగండి." },
        replies: [
          { say: "Five three eight two. By when will it be fixed?", good: true, skill: "register" },
          {
            say: "Numbers, numbers! Last time also nothing happened.",
            good: false,
            skill: "polite",
            react: { en: "I'm sorry about last time. I'll mark this one urgent.", te: "పోయినసారి జరిగినదానికి సారీ అండీ. దీన్ని urgent అని రాస్తాను." },
          },
        ],
      },
      {
        partner: "Within forty-eight hours. You'll get an SMS when it's done.",
        te: "నలభై ఎనిమిది గంటల్లోపు. పని అయ్యాక మీకు SMS వస్తుంది.",
        hint: { en: "Thank him, and say what you will do if nothing happens by then.", te: "థాంక్స్ చెప్పి, అప్పటికి ఏమీ జరగకపోతే ఏం చేస్తారో చెప్పండి." },
        replies: [
          { say: "Thank you. If it isn't fixed by then, I'll call again.", good: true, skill: "polite" },
          { say: "Thank you. If it won't be fixed by then, I'll call again.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
