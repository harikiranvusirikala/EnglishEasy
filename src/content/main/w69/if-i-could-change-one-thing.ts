import type { Lesson } from "../../types";

/** Week 69, Day 5 (CURRICULUM §5): If I could + verb, I'd … — a short talk about your town at a colony meeting. */
export const day: Lesson = {
  id: "if-i-could-change-one-thing",
  kind: "lesson",
  title: { en: "If I Could Change One Thing", te: "ఒక్కటి మార్చగలిగితే" },
  subtitle: "If I could …, I'd …",
  summary: {
    en: "Learn to say what you would change in your town or life: If I could change one thing, I'd plant more trees here.",
    te: "మీ ఊరిలో, జీవితంలో ఏం మారుస్తారో చెప్పడం నేర్చుకుందాం: If I could change one thing, I'd plant more trees here.",
  },
  seo: {
    title: "If I Could in English for Telugu Speakers",
    description:
      "Say If I could change one thing, I'd plant more trees. Simple lessons for Telugu speakers on talking about your town and its future.",
  },
  pattern: [
    { text: "If I could change one thing,", role: "when" },
    { text: "I'd", role: "who" },
    { text: "plant", role: "action" },
    { text: "more trees", role: "what" },
  ],
  core: [
    { en: "If I could change one thing, I'd plant more trees.", te: "నేను ఒక్కటి మార్చగలిగితే, ఇంకా ఎక్కువ చెట్లు నాటుతాను.", extra: ["can"] },
    { en: "If I could travel anywhere, I'd go to Kashi.", te: "నేను ఎక్కడికైనా వెళ్ళగలిగితే, కాశీకి వెళ్తాను.", extra: ["will"] },
    { en: "If I could, I'd make our streets cleaner.", te: "నా చేతుల్లో ఉంటే, మన వీధుల్ని ఇంకా శుభ్రంగా చేస్తాను.", extra: ["more"] },
    { en: "If we all helped, our colony would be greener.", te: "మనందరం సాయం చేస్తే, మన కాలనీ ఇంకా పచ్చగా ఉంటుంది.", extra: ["will"] },
    { en: "If I could, I'd put more benches in the park.", te: "నా చేతుల్లో ఉంటే, పార్క్‌లో ఇంకా బెంచీలు పెట్టిస్తాను.", extra: ["putting"] },
    { en: "If the park had more shade, more people would walk there.", te: "పార్క్‌లో ఇంకా నీడ ఉంటే, ఎక్కువ మంది అక్కడ నడుస్తారు.", extra: ["has"] },
    { en: "I have lived here for thirty years, and I love this town.", te: "నేను ముప్పై ఏళ్ళుగా ఇక్కడే ఉంటున్నాను, ఈ ఊరంటే నాకు చాలా ఇష్టం.", extra: ["since"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look around your street today. Say one change aloud: If I could change one thing, I'd …",
    te: "ఈ రోజు మీ వీధిని ఒకసారి చూడండి. ఒక మార్పుని గట్టిగా చెప్పండి: If I could change one thing, I'd …",
  },
  words: [
    { en: "if I could", te: "నేను చేయగలిగితే" },
    { en: "anywhere", te: "ఎక్కడైనా, ఎక్కడికైనా" },
    { en: "make a difference", te: "మంచి మార్పు తేవడం" },
    { en: "greener", te: "ఇంకా పచ్చగా" },
    { en: "neem tree", te: "వేప చెట్టు" },
  ],
  grammar: ["conditionals", "can-could", "present-perfect"],
  topics: ["neighbours", "home", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "If I could …", te: "నేను చేయగలిగితే …" },
      body: {
        en: "Could is the past of can. For a change you can only imagine, say If I could, then I'd: If I could change one thing, I'd plant more trees.",
        te: "could అంటే can కి past. మీరు ఊహించే మార్పు గురించి If I could, తర్వాత I'd అనండి: 'మార్చగలిగితే, … చేస్తాను'.",
      },
      bridge: {
        te: ["నేను ఒక్కటి మార్చగలిగితే,", "ఇంకా ఎక్కువ చెట్లు", "నాటుతాను"],
        en: [
          { text: "If I could change one thing,", role: "when" },
          { text: "I'd", role: "who" },
          { text: "plant", role: "action" },
          { text: "more trees", role: "what" },
        ],
      },
      examples: [
        { en: "If I could change one thing, I'd plant more trees.", te: "నేను ఒక్కటి మార్చగలిగితే, ఇంకా ఎక్కువ చెట్లు నాటుతాను." },
        { en: "If I could travel anywhere, I'd go to Kashi.", te: "నేను ఎక్కడికైనా వెళ్ళగలిగితే, కాశీకి వెళ్తాను." },
        { en: "If I could, I'd make our streets cleaner.", te: "నా చేతుల్లో ఉంటే, మన వీధుల్ని ఇంకా శుభ్రంగా చేస్తాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Talking about your town", te: "మీ ఊరి గురించి మాట్లాడటం" },
      items: [
        {
          form: "If I could …, I'd …",
          useFor: { en: "A change you imagine.", te: "మీరు ఊహించే మార్పు." },
          example: { en: "If I could, I'd put more benches in the park.", te: "నా చేతుల్లో ఉంటే, పార్క్‌లో ఇంకా బెంచీలు పెట్టిస్తాను." },
        },
        {
          form: "If we all …, our … would …",
          useFor: { en: "What everyone could do together.", te: "అందరూ కలిసి చేయగలిగేది." },
          example: { en: "If we all helped, our colony would be greener.", te: "మనందరం సాయం చేస్తే, మన కాలనీ ఇంకా పచ్చగా ఉంటుంది." },
        },
        {
          form: "I have lived here for …",
          useFor: { en: "How long, from the past up to now.", te: "గతం నుంచి ఇప్పటిదాకా ఎంత కాలం." },
          example: { en: "I have lived here for thirty years, and I love this town.", te: "నేను ముప్పై ఏళ్ళుగా ఇక్కడే ఉంటున్నాను, ఈ ఊరంటే నాకు చాలా ఇష్టం." },
        },
        {
          form: "make a difference",
          useFor: { en: "Help to make things better.", te: "పరిస్థితి బాగుపడేలా చేయడం." },
          example: { en: "Small changes can make a big difference.", te: "చిన్న మార్పులే పెద్ద తేడా తేగలవు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "I am living here since nineteen ninety-five.",
      right: "I have lived here since nineteen ninety-five.",
      why: {
        en: "From a past time up to now, use have lived; Telugu uses the present here.",
        te: "గతంలో మొదలై ఇప్పటికీ ఉంటే have lived వాడాలి; తెలుగులో 'ఉంటున్నాను' అని present లో అంటాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "If I could change one thing, I will plant more trees.",
      right: "If I could change one thing, I'd plant more trees.",
      why: {
        en: "With If I could, the other half takes would or I'd, not will.",
        te: "If I could ఉంటే, రెండో భాగంలో will కాదు, would లేదా I'd వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "At the colony meeting, say the one change you would make: more trees.",
        te: "కాలనీ మీటింగ్‌లో మీరు చేసే ఒక్క మార్పు చెప్పండి: ఇంకా ఎక్కువ చెట్లు.",
      },
      options: ["If I could change one thing, I'd plant more trees.", "If I would change one thing, I'd plant more trees.", "If I can change one thing, I'd plant more trees."],
      answer: 0,
      why: {
        en: "Could is the past of can, and it fits the imagined if part.",
        te: "could అంటే can కి past; ఊహించే if భాగంలో అదే సరిపోతుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "If the park ___ more shade, more people would walk there.",
      te: "పార్క్‌లో ఇంకా నీడ ఉంటే, ఎక్కువ మంది అక్కడ నడుస్తారు.",
      options: ["had", "has", "would have"],
      answer: 0,
      why: {
        en: "This is imagined, so after if use the past; would comes only later.",
        te: "ఇది ఊహ, అందుకే if తర్వాత past; would తర్వాతి భాగంలోనే వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Green Colony Residents",
      lines: [
        "Secretary Fatima: Dear residents,",
        "Colony meeting this Sunday at 10 am, in the park.",
        "Topic: if you could change one thing here, what would it be?",
        "Please come with one idea.",
        "Tea and biscuits after the meeting.",
      ],
      prompt: { en: "Fatima sent this to the group. What should each person bring?", te: "ఫాతిమా గారు గ్రూప్‌లో ఇది పంపారు. ఒక్కొక్కరు ఏం తీసుకురావాలి?" },
      options: ["One idea", "Tea and biscuits", "A plant"],
      answer: 0,
      why: {
        en: "The message asks everyone to come with one idea for the colony.",
        te: "కాలనీ కోసం ఒక్కో ఆలోచనతో రమ్మని మెసేజ్‌లో ఉంది.",
      },
      say: "Please come with one idea.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Kumar water the park plants every morning.",
      wrongIndex: 1,
      fix: "Kumar waters the park plants every morning.",
      why: {
        en: "One person, like he or she, adds s to the verb for a habit.",
        te: "ఒక్కరైతే (he, she లాగా) అలవాటు చెప్పేటప్పుడు verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "At the colony meeting, the secretary asks for your idea. Say you would put more benches in the park.",
        te: "కాలనీ మీటింగ్‌లో సెక్రటరీ మీ ఆలోచన అడుగుతున్నారు. పార్క్‌లో ఇంకా బెంచీలు పెట్టిస్తానని చెప్పండి.",
      },
      expected: ["If I could, I'd put more benches in the park.", "I'd put more benches in the park.", "If I could change one thing, I'd put more benches in the park."],
      options: ["If I could, I'd put more benches in the park.", "If I can, I'd put more benches in the park.", "If I could, I'd putting more benches in the park."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "A new neighbour asks how long you have lived here. Say twenty years.",
        te: "ఇక్కడ ఎంత కాలంగా ఉంటున్నారని కొత్త పక్కింటివారు అడుగుతున్నారు. ఇరవై ఏళ్ళు అని చెప్పండి.",
      },
      expected: ["I've lived here for twenty years.", "I have lived here for twenty years.", "For twenty years."],
      options: ["I've lived here for twenty years.", "I am living here for twenty years.", "I've lived here since twenty years."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The colony meeting", te: "కాలనీ మీటింగ్" },
    scene: {
      en: "It is Sunday morning. At the colony meeting in the park, the secretary Fatima asks everyone for one idea.",
      te: "ఆదివారం పొద్దున. పార్క్‌లో కాలనీ మీటింగ్ జరుగుతోంది. సెక్రటరీ ఫాతిమా గారు అందరినీ ఒక్కో ఆలోచన అడుగుతున్నారు.",
    },
    partner: { en: "Fatima (the colony secretary)", te: "ఫాతిమా (కాలనీ సెక్రటరీ)" },
    skills: [
      { id: "idea", label: { en: "Sharing an idea", te: "ఆలోచన చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning, everyone. Let's begin with you. What would you change here?",
        te: "అందరికీ నమస్కారం. మీతో మొదలుపెడదాం. మీరైతే ఇక్కడ ఏం మారుస్తారు?",
        hint: { en: "Say the one change you would make: trees.", te: "మీరు చేసే ఒక్క మార్పు చెప్పండి: చెట్లు." },
        replies: [
          { say: "If I could change one thing, I'd plant more trees.", good: true, skill: "idea" },
          { say: "I'd plant neem trees along our main road.", good: true, skill: "idea" },
          { say: "If I would change one thing, I'd plant more trees.", good: false, skill: "idea" },
        ],
      },
      {
        partner: "Trees are a good idea. But why trees?",
        te: "చెట్లు మంచి ఆలోచనే. కానీ చెట్లే ఎందుకు?",
        hint: { en: "Give a reason: shade for the people who walk here.", te: "కారణం చెప్పండి: ఇక్కడ నడిచేవాళ్ళకి నీడ." },
        replies: [
          { say: "If we had more shade, more people would walk here.", good: true, skill: "idea" },
          { say: "If we have more shade, more people would walk here.", good: false, skill: "idea" },
        ],
      },
      {
        partner: "But who would water them? The watchman is very busy.",
        te: "కానీ వాటికి నీళ్ళు ఎవరు పోస్తారు? వాచ్‌మన్ చాలా బిజీ.",
        hint: { en: "Say politely that everyone could help a little.", te: "అందరూ కొంచెం కొంచెం సాయం చేయొచ్చని మర్యాదగా చెప్పండి." },
        replies: [
          { say: "If we all helped a little, it would be easy.", good: true, skill: "idea" },
          { say: "Each house could water one tree.", good: true, skill: "idea" },
          {
            say: "That's not my problem. The watchman should do it.",
            good: false,
            skill: "polite",
            react: { en: "Hmm. We all live here, so it's everyone's problem.", te: "హ్మ్. మనందరం ఇక్కడే ఉంటాం, అందుకే ఇది అందరి సమస్య." },
          },
        ],
      },
      {
        partner: "Good point. Let's start next month. Thank you for the idea.",
        te: "మంచి మాట. వచ్చే నెల మొదలుపెడదాం. ఆలోచన చెప్పినందుకు థాంక్స్.",
        hint: { en: "Thank her, and offer to bring two plants.", te: "ఆవిడకి థాంక్స్ చెప్పి, రెండు మొక్కలు తెస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you. I'll bring two plants from the nursery.", good: true, skill: "polite" },
          { say: "Thank you. I'll bring two plant from the nursery.", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
    ],
  },
};
