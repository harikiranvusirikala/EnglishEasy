import type { Lesson } from "../../types";

/** Week 44, Day 5 (CURRICULUM §5): stitching, alterations and by when — Can you make the sleeves a little shorter? When will it be ready? */
export const day: Lesson = {
  id: "at-the-tailor",
  kind: "lesson",
  title: { en: "At the Tailor", te: "టైలర్ దగ్గర" },
  subtitle: "stitching, alterations, by when",
  summary: {
    en: "Learn to give clothes for stitching and changes: Can you make the sleeves a little shorter? When will it be ready?",
    te: "బట్టలు కుట్టించడం, మార్పులు చెప్పడం నేర్చుకుందాం: Can you make the sleeves a little shorter? When will it be ready?",
  },
  seo: {
    title: "Talking to a Tailor in English for Telugu Speakers",
    description:
      "Say Can you make the sleeves a little shorter? and When will it be ready? Simple lessons for Telugu speakers on stitching and alterations.",
  },
  pattern: [
    { text: "Can", role: "action" },
    { text: "you", role: "who" },
    { text: "make the sleeves", role: "action" },
    { text: "a little shorter?", role: "what" },
  ],
  core: [
    { en: "When will it be ready?", te: "ఇది ఎప్పటికి రెడీ అవుతుంది?", extra: ["does"] },
    { en: "Can you make the sleeves a little shorter?", te: "చేతులు కొంచెం పొట్టిగా చేస్తారా?", extra: ["more"] },
    { en: "Please stitch this blouse by Friday.", te: "ఈ బ్లౌజ్ శుక్రవారం లోపు కుట్టి ఇవ్వండి.", extra: ["until"] },
    { en: "Can you take my measurements, please?", te: "నా కొలతలు తీసుకుంటారా?", extra: ["measurement"] },
    { en: "Please make these trousers two inches shorter.", te: "ఈ ప్యాంటుని రెండు అంగుళాలు పొట్టిగా చేయండి.", extra: ["inch"] },
    { en: "How much do you charge for stitching a blouse?", te: "బ్లౌజ్ కుట్టడానికి ఎంత తీసుకుంటారు?", extra: ["does"] },
    { en: "It's a little loose here. Can you make it tighter?", te: "ఇక్కడ కొంచెం లూజుగా ఉంది. కొంచెం బిగుతుగా చేస్తారా?", extra: ["more"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at one piece of clothing at home. Say aloud one change you want: Can you make it a little …?",
    te: "ఇంట్లో ఉన్న ఒక బట్టను చూడండి. మీకు కావాల్సిన ఒక మార్పుని గట్టిగా చెప్పండి: Can you make it a little …?",
  },
  words: [
    { en: "sleeves", te: "చేతులు, స్లీవ్స్" },
    { en: "blouse", te: "బ్లౌజ్, జాకెట్టు" },
    { en: "measurements", te: "కొలతలు" },
    { en: "alteration", te: "బట్టలో మార్పు, ఆల్టరేషన్" },
    { en: "inch", te: "అంగుళం" },
  ],
  grammar: ["can-could", "will", "prepositions"],
  topics: ["shopping", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking the tailor", te: "టైలర్‌ని అడగడం" },
      body: {
        en: "Ask Can you make it …? with a word like shorter, longer or tighter. Then ask When will it be ready? and give the last day with by.",
        te: "Can you make it …? అని అడిగి, shorter, longer, tighter లాంటి పదం చెప్పండి. తర్వాత When will it be ready? అని అడిగి, ఆఖరి రోజుకి ముందు by వాడండి.",
      },
      bridge: {
        te: ["చేతులు", "కొంచెం పొట్టిగా", "చేస్తారా?"],
        en: [
          { text: "Can", role: "action" },
          { text: "you", role: "who" },
          { text: "make the sleeves", role: "action" },
          { text: "a little shorter?", role: "what" },
        ],
      },
      examples: [
        { en: "When will it be ready?", te: "ఇది ఎప్పటికి రెడీ అవుతుంది?" },
        { en: "Can you make the sleeves a little shorter?", te: "చేతులు కొంచెం పొట్టిగా చేస్తారా?" },
        { en: "Please stitch this blouse by Friday.", te: "ఈ బ్లౌజ్ శుక్రవారం లోపు కుట్టి ఇవ్వండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "by or until?", te: "by నా, until నా?" },
      items: [
        {
          form: "by Friday",
          useFor: { en: "On that day or before it; the last day for a job.", te: "ఆ రోజు, లేదా అంతకంటే ముందే; పని అయిపోవాల్సిన ఆఖరి రోజు." },
          example: { en: "Please stitch this blouse by Friday.", te: "ఈ బ్లౌజ్ శుక్రవారం లోపు కుట్టి ఇవ్వండి." },
        },
        {
          form: "until Friday",
          useFor: { en: "All the time up to that day.", te: "ఆ రోజు వరకు మొత్తం సమయం." },
          example: { en: "The shop is closed until Friday.", te: "శుక్రవారం వరకు షాపు మూసి ఉంటుంది." },
        },
        {
          form: "a little longer",
          useFor: { en: "A small change, not a big one.", te: "చిన్న మార్పు, పెద్దది కాదు." },
          example: { en: "Please make it a little longer.", te: "కొంచెం పొడుగ్గా చేయండి." },
        },
        {
          form: "an alteration",
          useFor: { en: "A change to clothes you already have.", te: "ఉన్న బట్టల్లో చేసే మార్పు." },
          example: { en: "How long does an alteration take?", te: "ఆల్టరేషన్‌కి ఎంత టైమ్ పడుతుంది?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I need it until Friday.",
      right: "I need it by Friday.",
      why: {
        en: "By gives the last day for a job; until means all the time up to that day.",
        te: "పని పూర్తి కావాల్సిన ఆఖరి రోజుకి by; ఆ రోజు వరకు మొత్తం సమయానికి until.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "Please take my measurement.",
      right: "Please take my measurements.",
      why: {
        en: "A tailor takes many measurements, so English adds s.",
        te: "టైలర్ చాలా కొలతలు తీసుకుంటారు; అందుకే ఇంగ్లీష్‌లో s వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "You gave a shirt for stitching. Ask the tailor the day it will be ready.",
        te: "మీరు ఒక చొక్కా కుట్టడానికి ఇచ్చారు. ఎప్పటికి రెడీ అవుతుందో టైలర్‌ని అడగండి.",
      },
      options: ["When will it be ready?", "When it will be ready?", "When will it ready?"],
      answer: 0,
      why: {
        en: "In a question, will comes before it, and ready needs be.",
        te: "ప్రశ్నలో will, it కంటే ముందు వస్తుంది; ready ముందు be కావాలి.",
      },
    },
    {
      id: "p2",
      type: "passage",
      kind: "notice",
      heading: "Raju Tailors, Main Road",
      lines: [
        "Dear customers,",
        "The festival season is here, and we are very busy.",
        "Blouse stitching now takes ten days.",
        "Small alterations take two days.",
        "Please bring a sample blouse with your material.",
        "Pay half the amount when you give the order.",
        "Please collect your clothes within one month.",
        "The shop is closed on Tuesdays.",
        "Thank you, Raju",
      ],
      questions: [
        {
          prompt: { en: "How long does blouse stitching take now?", te: "ఇప్పుడు బ్లౌజ్ కుట్టడానికి ఎన్ని రోజులు పడుతుంది?" },
          options: ["Ten days", "Two days", "One month"],
          answer: 0,
          why: {
            en: "The third line gives the time for a blouse in the festival season.",
            te: "మూడో లైన్‌లో పండుగ రోజుల్లో బ్లౌజ్‌కి పట్టే టైమ్ ఉంది.",
          },
        },
        {
          prompt: { en: "What should you bring with your material?", te: "మెటీరియల్‌తో పాటు ఏం తీసుకెళ్ళాలి?" },
          options: ["A sample blouse", "Your Aadhaar card", "A photo"],
          answer: 0,
          why: {
            en: "The notice asks for an old blouse, so the tailor can copy the size.",
            te: "సైజు చూసి కుట్టడానికి ఒక పాత బ్లౌజ్ తెమ్మని నోటీస్‌లో ఉంది.",
          },
        },
        {
          prompt: { en: "Which day is the shop closed?", te: "షాపు ఏ రోజు మూసి ఉంటుంది?" },
          options: ["Tuesday", "Sunday", "Friday"],
          answer: 0,
          why: {
            en: "The last line before the name says the shop does not open that day.",
            te: "పేరుకి ముందు ఉన్న లైన్‌లో ఆ రోజు షాపు తెరవరని ఉంది.",
          },
        },
      ],
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your neighbour Fatima stitches blouses at home. Tell a friend about her.",
        te: "మీ పక్కింటి ఫాతిమా గారు ఇంట్లో బ్లౌజ్‌లు కుడతారు. ఆవిడ గురించి మీ స్నేహితులకి చెప్పండి.",
      },
      options: ["Fatima stitches blouses very well.", "Fatima stitch blouses very well.", "Fatima stitches blouse very well."],
      answer: 0,
      why: {
        en: "One person, like she, takes es after stitch, and many blouses take s.",
        te: "ఒక్కరైతే (she లాగా) stitch కి es వస్తుంది; చాలా బ్లౌజ్‌లు కాబట్టి s కూడా.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Can you make the sleeves little shorter?",
      wrongIndex: 5,
      fix: "Can you make the sleeves a little shorter?",
      why: {
        en: "Say a little for a small change; little alone means almost none.",
        te: "చిన్న మార్పుకి a little అనాలి; a లేకుండా little అంటే దాదాపు ఏమీ లేదని అర్థం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "The tailor asks: You didn't bring a sample blouse? You forgot it. Answer.",
        te: "టైలర్ You didn't bring a sample blouse? అని అడుగుతున్నారు. మీరు మర్చిపోయారు. జవాబు చెప్పండి.",
      },
      expected: ["No, I didn't. I forgot it.", "No, I didn't. I'm sorry.", "No, sorry, I forgot it."],
      options: ["No, I didn't. I forgot it.", "Yes, I didn't. I forgot it.", "Yes, I did. I forgot it."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "You need your blouse for a wedding on Sunday. Tell the tailor Saturday is the last day.",
        te: "ఆదివారం పెళ్లికి మీ బ్లౌజ్ కావాలి. శనివారమే ఆఖరి రోజు అని టైలర్‌కి చెప్పండి.",
      },
      expected: ["I need it by Saturday, please.", "Please make it ready by Saturday.", "Can you finish it by Saturday?"],
      options: ["I need it by Saturday, please.", "I need it until Saturday, please.", "I need it within Saturday, please."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A blouse for Padma", te: "పద్మ గారి బ్లౌజ్" },
    scene: {
      en: "Your friend Padma is not well. She needs a new blouse for a wedding, so you take her material to Rahim, the tailor.",
      te: "మీ స్నేహితురాలు పద్మ గారికి ఒంట్లో బాగాలేదు. ఒక పెళ్లికి ఆవిడకి కొత్త బ్లౌజ్ కావాలి. అందుకే ఆవిడ మెటీరియల్ తీసుకుని టైలర్ రహీమ్ గారి దగ్గరికి వెళ్ళారు.",
    },
    partner: { en: "Rahim (tailor)", te: "రహీమ్ (టైలర్)" },
    voice: "b",
    skills: [
      { id: "tailor", label: { en: "Asking for changes", te: "మార్పులు అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Come in. What can I do for you?",
        te: "నమస్కారం! లోపలికి రండి. ఏం కావాలి?",
        hint: { en: "Show him the material, and say the blouse is for your friend Padma.", te: "మెటీరియల్ చూపించి, బ్లౌజ్ మీ స్నేహితురాలు పద్మ గారి కోసమని చెప్పండి." },
        replies: [
          { say: "Can you stitch this blouse for my friend Padma?", good: true, skill: "tailor" },
          { say: "Can you stitch this blouse to my friend Padma?", good: false, skill: "tailor", fixIt: "preposition" },
        ],
      },
      {
        partner: "Sure. Her sample blouse has short sleeves. The same length?",
        te: "సరే. ఆవిడ శాంపిల్ బ్లౌజ్‌కి చేతులు పొట్టిగా ఉన్నాయి. అదే పొడవా?",
        hint: { en: "Say Padma wants them a bit longer this time.", te: "ఈసారి పద్మ గారికి కొంచెం పొడుగ్గా కావాలని చెప్పండి." },
        replies: [
          { say: "Can you make the sleeves a little longer, please?", good: true, skill: "tailor" },
          { say: "She wants them a little longer this time.", good: true, skill: "tailor" },
          { say: "She want them a little longer this time.", good: false, skill: "tailor", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "Okay. It will be ready in ten days.",
        te: "సరే. పది రోజుల్లో రెడీ అవుతుంది.",
        hint: { en: "Say when the wedding is, and ask for it a day before.", te: "పెళ్లి ఎప్పుడో చెప్పి, ఒక రోజు ముందే ఇవ్వమని అడగండి." },
        replies: [
          { say: "The wedding is next Friday. Can you finish it by Thursday?", good: true, skill: "tailor" },
          { say: "The wedding is next Friday. Can you finish it until Thursday?", good: false, skill: "tailor", fixIt: "preposition" },
          {
            say: "Ten days? You tailors are always late!",
            good: false,
            skill: "polite",
            react: { en: "Please don't say that. I'll try for Thursday.", te: "అలా అనకండి. గురువారానికి ఇవ్వడానికి ప్రయత్నిస్తాను." },
          },
        ],
      },
      {
        partner: "All right, Thursday evening. That's 450 rupees.",
        te: "సరే, గురువారం సాయంత్రం. 450 రూపాయలు.",
        hint: { en: "Thank him, and say goodbye.", te: "ఆయనకి థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Thank you so much. See you on Thursday!", good: true, skill: "polite" },
          { say: "Thank you so much. See you in Thursday!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
