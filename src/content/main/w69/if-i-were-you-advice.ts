import type { Lesson } from "../../types";

/** Week 69, Day 3 (CURRICULUM §5): If I were you, I'd … for friendly advice (weak were) — advising a friend about a long journey. */
export const day: Lesson = {
  id: "if-i-were-you-advice",
  kind: "lesson",
  title: { en: "If I Were You", te: "నేను మీ స్థానంలో ఉంటే" },
  subtitle: "If I were you, I'd …",
  summary: {
    en: "Learn to give gentle advice: If I were you, I'd take the morning train. If I were you, I'd ask the doctor again.",
    te: "మర్యాదగా సలహా ఇవ్వడం నేర్చుకుందాం: If I were you, I'd take the morning train. If I were you, I'd ask the doctor again.",
  },
  seo: {
    title: "Giving Advice with If I Were You in English for Telugu Speakers",
    description:
      "Say If I were you, I'd take the morning train. Simple lessons for Telugu speakers on giving friendly, gentle advice.",
  },
  pattern: [
    { text: "If I were you,", role: "when" },
    { text: "I'd", role: "who" },
    { text: "take", role: "action" },
    { text: "the morning train", role: "what" },
  ],
  core: [
    { en: "If I were you, I'd take the morning train.", te: "నేనైతే, పొద్దుటి ట్రైన్‌లో వెళ్తాను.", extra: ["was"] },
    { en: "If I were you, I'd ask the doctor again.", te: "నేనైతే, డాక్టర్‌ని మళ్ళీ అడుగుతాను.", extra: ["will"] },
    { en: "If I were you, I wouldn't travel at night.", te: "నేనైతే, రాత్రిపూట ప్రయాణం చేయను.", extra: ["don't"] },
    { en: "What would you do if you were me?", te: "మీరు నా స్థానంలో ఉంటే ఏం చేస్తారు?", extra: ["are"] },
    { en: "If I were you, I'd break the journey at Vijayawada.", te: "నేనైతే, మధ్యలో విజయవాడలో ఆగి వెళ్తాను.", extra: ["breaking"] },
    { en: "If I were you, I'd book the ticket today.", te: "నేనైతే, ఈ రోజే టికెట్ బుక్ చేస్తాను.", extra: ["booked"] },
    { en: "Thanks. I'll think it over and tell you tomorrow.", te: "థాంక్స్. ఆలోచించుకుని రేపు చెప్తాను.", extra: ["thinking"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When someone tells you a small problem today, give one kind piece of advice: If I were you, I'd …",
    te: "ఈ రోజు ఎవరైనా ఒక చిన్న సమస్య చెప్తే, ఒక మంచి సలహా ఇవ్వండి: If I were you, I'd …",
  },
  words: [
    { en: "if I were you", te: "నేనైతే, నేను మీ స్థానంలో ఉంటే" },
    { en: "I'd", te: "I would (చిన్నగా)" },
    { en: "in your place", te: "మీ స్థానంలో" },
    { en: "think it over", te: "బాగా ఆలోచించుకోవడం" },
    { en: "break the journey", te: "ప్రయాణం మధ్యలో ఆగడం" },
  ],
  grammar: ["conditionals", "should-must-have-to", "politeness-softening"],
  topics: ["people", "travel", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Advice with If I were you", te: "'నేనైతే' అని సలహా ఇవ్వడం" },
      body: {
        en: "To give friendly advice, say If I were you, then I'd and the verb: If I were you, I'd take the morning train. Use were here, even with I.",
        te: "స్నేహంగా సలహా ఇవ్వాలంటే If I were you, తర్వాత I'd + verb అనండి. ఇది తెలుగులో 'నేనైతే' లాంటిది. ఇక్కడ I తో కూడా were వస్తుంది.",
      },
      bridge: {
        te: ["నేనైతే,", "పొద్దుటి ట్రైన్‌లో", "వెళ్తాను"],
        en: [
          { text: "If I were you,", role: "when" },
          { text: "I'd", role: "who" },
          { text: "take", role: "action" },
          { text: "the morning train", role: "what" },
        ],
      },
      examples: [
        { en: "If I were you, I'd take the morning train.", te: "నేనైతే, పొద్దుటి ట్రైన్‌లో వెళ్తాను." },
        { en: "If I were you, I'd ask the doctor again.", te: "నేనైతే, డాక్టర్‌ని మళ్ళీ అడుగుతాను." },
        { en: "If I were you, I wouldn't travel at night.", te: "నేనైతే, రాత్రిపూట ప్రయాణం చేయను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Kind advice", te: "మర్యాదగా సలహా" },
      items: [
        {
          form: "If I were you, I'd …",
          useFor: { en: "Gentle advice to do something.", te: "ఏదైనా చేయమని మెల్లగా సలహా ఇవ్వడానికి." },
          example: { en: "If I were you, I'd book the ticket today.", te: "నేనైతే, ఈ రోజే టికెట్ బుక్ చేస్తాను." },
        },
        {
          form: "If I were you, I wouldn't …",
          useFor: { en: "Gentle advice not to do something.", te: "ఏదైనా చేయొద్దని మెల్లగా సలహా ఇవ్వడానికి." },
          example: { en: "If I were you, I wouldn't travel at night.", te: "నేనైతే, రాత్రిపూట ప్రయాణం చేయను." },
        },
        {
          form: "What would you do if you were me?",
          useFor: { en: "Ask a friend for advice.", te: "స్నేహితుల్ని సలహా అడగడానికి." },
          example: { en: "What would you do if you were me?", te: "మీరు నా స్థానంలో ఉంటే ఏం చేస్తారు?" },
        },
        {
          form: "You should …",
          useFor: { en: "Advice too, but more direct.", te: "ఇదీ సలహానే, కానీ కొంచెం నేరుగా." },
          example: { en: "You should take the morning train.", te: "మీరు పొద్దుటి ట్రైన్‌లో వెళ్తే మంచిది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "If I was you, I'd take the morning train.",
      right: "If I were you, I'd take the morning train.",
      why: {
        en: "For advice, the fixed phrase is If I were you; use were even with I.",
        te: "సలహా ఇచ్చేటప్పుడు If I were you అనేది అలవాటైన మాట; I తో కూడా were వాడండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "If I were you, I'd take rest for two days.",
      right: "If I were you, I'd rest for two days.",
      why: {
        en: "Take rest is an Indian habit; English says rest, or get some rest.",
        te: "take rest అనేది మన అలవాటు మాట; ఇంగ్లీష్‌లో rest లేదా get some rest అంటారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your friend Kavitha has a long bus journey at night. Give her gentle advice.",
        te: "మీ స్నేహితురాలు కవిత గారికి రాత్రి పూట బస్సులో పెద్ద ప్రయాణం ఉంది. ఆవిడకి మర్యాదగా సలహా ఇవ్వండి.",
      },
      options: ["If I were you, I'd take the morning train.", "If I would be you, I'd take the morning train.", "You take the morning train, that's all."],
      answer: 0,
      why: {
        en: "If I were you sounds kind; would never comes right after if.",
        te: "If I were you అంటే మర్యాదగా ఉంటుంది; if తర్వాత నేరుగా would రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "duration",
      sentence: "I ___ this knee pain for a month now.",
      te: "నెల రోజులుగా ఈ మోకాలి నొప్పి ఉంది.",
      options: ["have had", "am having", "have"],
      answer: 0,
      why: {
        en: "For a time up to now, English uses have had; Telugu uses the present.",
        te: "ఇప్పటిదాకా ఉన్న కాలానికి have had వాడాలి; తెలుగులో 'ఉంది' అని present లోనే అంటాం.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "letter",
      heading: "From Swapna, Hyderabad",
      lines: [
        "Dear Kiran,",
        "Thank you for your letter. I was happy to hear from you.",
        "You asked about your trip to Tirupati next month.",
        "If I were you, I'd take the morning train, not the night bus.",
        "The train is slower, but you can rest and walk around.",
        "I'd also book a darshan ticket online, two or three weeks early.",
        "The queues are very long in the holidays.",
        "Please carry your BP tablets and a water bottle.",
        "Call me when you reach. Take care,",
        "Swapna",
      ],
      questions: [
        {
          prompt: { en: "What does Swapna suggest for the journey?", te: "ప్రయాణం గురించి స్వప్న గారు ఏం సలహా ఇచ్చారు?" },
          options: ["The morning train", "The night bus", "A taxi"],
          answer: 0,
          why: { en: "Her advice line says the train, not the night bus.", te: "సలహా ఉన్న లైన్‌లో night bus కాదు, ట్రైన్ అని ఉంది." },
        },
        {
          prompt: { en: "Why should Kiran book the darshan ticket early?", te: "దర్శనం టికెట్ ముందుగానే ఎందుకు బుక్ చేయాలి?" },
          options: ["The queues are long in the holidays", "The tickets are free", "The temple closes early"],
          answer: 0,
          why: { en: "The next line explains that holiday queues are very long.", te: "తర్వాతి లైన్‌లో సెలవుల్లో క్యూలు చాలా పెద్దగా ఉంటాయని ఉంది." },
        },
        {
          prompt: { en: "What should Kiran carry?", te: "ఏం తీసుకెళ్ళమని చెప్పారు?" },
          options: ["BP tablets and a water bottle", "Warm clothes and an umbrella", "Snacks for the queue"],
          answer: 0,
          why: { en: "Near the end, the letter asks for medicine and water.", te: "లెటర్ చివర్లో మందులు, నీళ్ళు తీసుకెళ్ళమని ఉంది." },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "If I were you, I'd asked the doctor again.",
      wrongIndex: 5,
      fix: "If I were you, I'd ask the doctor again.",
      why: {
        en: "After I'd, the verb stays plain, with no -ed ending.",
        te: "I'd తర్వాత verb అలాగే ఉంటుంది; -ed రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your friend Ramesh has had a cough for weeks. Advise him to see the doctor again.",
        te: "మీ స్నేహితుడు రమేష్ గారికి వారాలుగా దగ్గు తగ్గట్లేదు. మళ్ళీ డాక్టర్ దగ్గరికి వెళ్ళమని సలహా ఇవ్వండి.",
      },
      expected: ["If I were you, I'd see the doctor again.", "If I were you, I'd ask the doctor again.", "You should see the doctor again."],
      options: ["If I were you, I'd see the doctor again.", "If I were you, I'd take rest at home.", "If I would be you, I'd see the doctor again."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend can't decide: the night bus or the morning train. Advise the train.",
        te: "రాత్రి బస్సా, పొద్దుటి ట్రైనా అని మీ స్నేహితులు తేల్చుకోలేకపోతున్నారు. ట్రైన్ అని సలహా ఇవ్వండి.",
      },
      expected: ["If I were you, I'd take the morning train.", "I'd take the morning train.", "If I were you, I wouldn't take the night bus."],
      options: ["If I were you, I'd take the morning train.", "If I were you, I'd took the morning train.", "If I were you, I will take the morning train."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A long journey", te: "పెద్ద ప్రయాణం" },
    scene: {
      en: "Your friend Narayana is going to a cousin's wedding in Bengaluru. He asks for your advice.",
      te: "మీ స్నేహితుడు నారాయణ గారు బెంగళూరులో ఒక కజిన్ పెళ్ళికి వెళ్తున్నారు. మీ సలహా అడుగుతున్నారు.",
    },
    partner: { en: "Narayana (your friend)", te: "నారాయణ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "advise", label: { en: "Giving advice", te: "సలహా ఇవ్వడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "I'm going to Bengaluru next week. Should I take the night bus?",
        te: "వచ్చే వారం బెంగళూరు వెళ్తున్నాను. రాత్రి బస్సులో వెళ్ళనా?",
        hint: { en: "Give gentle advice: the train is better for him.", te: "మెల్లగా సలహా ఇవ్వండి: ఆయనకి ట్రైన్ మంచిది." },
        replies: [
          { say: "If I were you, I'd take the train.", good: true, skill: "advise" },
          { say: "If I were you, I wouldn't take the night bus.", good: true, skill: "advise" },
          { say: "If I would be you, I'd take the train.", good: false, skill: "advise" },
        ],
      },
      {
        partner: "But the train takes twelve hours. That's very long!",
        te: "కానీ ట్రైన్‌కి పన్నెండు గంటలు పడుతుంది. చాలా ఎక్కువ!",
        hint: { en: "Suggest stopping for a day on the way, at Tirupati.", te: "దారిలో తిరుపతిలో ఒక రోజు ఆగమని సూచించండి." },
        replies: [
          { say: "If I were you, I'd break the journey at Tirupati.", good: true, skill: "advise" },
          {
            say: "You always complain! Just go.",
            good: false,
            skill: "polite",
            react: { en: "Sorry! I'm only a little worried about it.", te: "సారీ! నాకు కొంచెం దిగులుగా ఉంది, అంతే." },
          },
        ],
      },
      {
        partner: "That's a good idea. But my knee also hurts these days.",
        te: "మంచి ఆలోచన. కానీ ఈ మధ్య నా మోకాలు కూడా నొప్పిగా ఉంది.",
        hint: { en: "Tell him gently to see a doctor before the trip.", te: "ప్రయాణానికి ముందు డాక్టర్‌ని చూపించుకోమని మెల్లగా చెప్పండి." },
        replies: [
          { say: "If I were you, I'd see a doctor before the trip.", good: true, skill: "advise" },
          { say: "If I were you, I'd take rest before the trip.", good: false, skill: "advise", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Thank you. I'll think it over. You're a good friend.",
        te: "థాంక్స్. ఆలోచించుకుంటాను. మీరు మంచి స్నేహితులు.",
        hint: { en: "Say you are happy to help, and wish him a good trip.", te: "సాయం చేయడం సంతోషమని చెప్పి, ప్రయాణం బాగా జరగాలని కోరుకోండి." },
        replies: [
          { say: "Happy to help. Have a safe journey!", good: true, skill: "polite" },
          { say: "Happy to help. Have safe journey!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
