import type { Lesson } from "../../types";

/** Week 4, Day 2 (CURRICULUM §3): my, your, his, her, our, their. */
export const day: Lesson = {
  id: "my-your-his-her",
  kind: "lesson",
  title: { en: "My, Your, His, Her", te: "నా, మీ, ఆయన, ఆవిడ" },
  subtitle: "my / your / his / her",
  summary: {
    en: "Learn to say whose something is with my, your, his, her, our and their.",
    te: "ఏదైనా ఎవరిదో my, your, his, her, our, their తో చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "My, Your, His, Her in English for Telugu Speakers",
    description:
      "Say This is my brother and Her name is Padma in English. Simple lessons for Telugu speakers on my, your, his, her, our and their.",
  },
  pattern: [
    { text: "Her name", role: "who" },
    { text: "is", role: "action" },
    { text: "Padma", role: "what" },
  ],
  core: [
    { en: "This is my brother.", te: "ఈయన మా అన్నయ్య.", extra: ["mine"] },
    { en: "Her name is Padma.", te: "ఆవిడ పేరు పద్మ.", extra: ["His"] },
    { en: "His shop is near the temple.", te: "ఆయన షాపు గుడి దగ్గర ఉంది.", extra: ["He"] },
    { en: "Is this your bag?", te: "ఇది మీ బ్యాగా?", extra: ["you"] },
    { en: "Our house is small.", te: "మా ఇల్లు చిన్నది.", extra: ["We"] },
    { en: "Their shop is very old.", te: "వాళ్ళ షాప్ చాలా పాతది.", extra: ["They"] },
    { en: "My sister lives in Guntur.", te: "మా చెల్లెలు గుంటూరులో ఉంటారు.", extra: ["she"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Show someone a photo and say: This is my … His name is … or Her name is …",
    te: "ఎవరికైనా ఒక ఫోటో చూపించి చెప్పండి: This is my … His name is … లేదా Her name is …",
  },
  words: [
    { en: "his", te: "ఆయన, అతని (ది)" },
    { en: "her", te: "ఆమె, ఆవిడ (ది)" },
    { en: "our", te: "మా, మన" },
    { en: "their", te: "వాళ్ళ" },
    { en: "photo", te: "ఫోటో" },
  ],
  grammar: ["have-has-possessives", "am-is-are"],
  topics: ["people", "family"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "His for a man, her for a woman", te: "మగవారికి his, ఆడవారికి her" },
      body: {
        en: "These words come before the thing: my bag, your bag, his bag, her bag. His is for a man; her is for a woman. Our is for us; their is for them.",
        te: "ఈ పదాలు వస్తువు ముందు వస్తాయి: my bag, your bag, his bag, her bag. his అంటే ఆయన (మగవారు); her అంటే ఆవిడ (ఆడవారు). our అంటే మా, their అంటే వాళ్ళ.",
      },
      bridge: {
        te: ["ఆవిడ", "పేరు", "పద్మ"],
        en: [
          { text: "Her name", role: "who" },
          { text: "is", role: "action" },
          { text: "Padma", role: "what" },
        ],
      },
      examples: [
        { en: "This is my brother.", te: "ఈయన మా అన్నయ్య." },
        { en: "Her name is Padma.", te: "ఆవిడ పేరు పద్మ." },
        { en: "His shop is near the temple.", te: "ఆయన షాపు గుడి దగ్గర ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which word?", te: "ఏ పదం వాడాలి?" },
      items: [
        {
          form: "my / your",
          useFor: {
            en: "Say my for your own, your for the other person's. Telugu says మా అన్నయ్య, but English says my brother.",
            te: "my అంటే నా, your అంటే మీ. తెలుగులో 'మా అన్నయ్య' అన్నా, ఇంగ్లీష్‌లో my brother అనాలి.",
          },
          example: { en: "My sister lives in Guntur.", te: "మా చెల్లెలు గుంటూరులో ఉంటారు." },
        },
        {
          form: "his / her",
          useFor: { en: "His for a man, her for a woman.", te: "మగవారికి his, ఆడవారికి her." },
          example: { en: "Her name is Padma.", te: "ఆవిడ పేరు పద్మ." },
        },
        {
          form: "our / their",
          useFor: { en: "Our for us, their for them.", te: "మనకి/మాకు our, వాళ్ళకి their." },
          example: { en: "Our house is small.", te: "మా ఇల్లు చిన్నది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Padma is here. His bag is red.",
      right: "Padma is here. Her bag is red.",
      why: {
        en: "Padma is a woman, so say her. His is only for a man.",
        te: "పద్మ ఆడవారు, కాబట్టి her అనాలి. his మగవారికి మాత్రమే.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "My sister she lives in Guntur.",
      right: "My sister lives in Guntur.",
      why: {
        en: "Name the person once. Don't add she after my sister: My sister lives in Guntur.",
        te: "మనిషిని ఒక్కసారే చెప్పాలి. my sister తర్వాత మళ్ళీ she వద్దు: My sister lives in Guntur.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Imran is a man. Which sentence is correct?", te: "ఇమ్రాన్ మగవారు. ఏ వాక్యం సరైనది?" },
      options: ["Her shop is big.", "His shop is big.", "He shop is big."],
      answer: 1,
      why: {
        en: "Imran is a man, so use his.",
        te: "ఇమ్రాన్ మగవారు, కాబట్టి his.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "This is Sita. ___ house is big.",
      te: "ఈవిడ సీత. ఆవిడ ఇల్లు పెద్దది.",
      options: ["His", "Her", "She"],
      answer: 1,
      why: {
        en: "Sita is a woman, so use her: Her house is big.",
        te: "సీత ఆడవారు, కాబట్టి her: Her house is big.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "be",
      prompt: { en: "Which sentence means: మా ఇల్లు చిన్నది (the family's house)?", te: "మా ఇల్లు చిన్నది (కుటుంబం అందరిదీ) — ఏది సరైనది?" },
      options: ["Our house is small.", "Their house is small.", "Our house small."],
      answer: 0,
      why: {
        en: "Here మా means the family's, so say our, and keep is.",
        te: "ఇక్కడ 'మా' అంటే కుటుంబం అందరిదీ, కాబట్టి our; is కూడా ఉండాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "This is Suresh. Her bike is new.",
      wrongIndex: 3,
      fix: "This is Suresh. His bike is new.",
      why: {
        en: "Suresh is a man, so use his: His bike is new.",
        te: "సురేష్ మగవారు, కాబట్టి his: His bike is new.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You show a friend a photo of your sister Padma. Say her name.",
        te: "మీ చెల్లెలు పద్మ ఫోటో మీ స్నేహితులకి చూపిస్తున్నారు. ఆవిడ పేరు చెప్పండి.",
      },
      expected: ["Her name is Padma.", "This is my sister Padma.", "This is my sister."],
      options: ["His name is Padma.", "Her name is Padma.", "She name is Padma."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Someone points to your bag and asks: Is this your bag? Say yes.",
        te: "ఒకరు మీ బ్యాగ్ చూపించి అడుగుతున్నారు: Is this your bag? అవునని చెప్పండి.",
      },
      expected: ["Yes, it is my bag.", "Yes, this is my bag."],
      options: ["Yes, it is my bag.", "Yes, this my bag.", "Yes, it is mine bag."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Showing a photo", te: "ఫోటో చూపించడం" },
    scene: {
      en: "You show your friend David a photo of your brother and sister.",
      te: "మీ స్నేహితులు డేవిడ్ గారికి మీ అన్నయ్య, చెల్లెలి ఫోటో చూపిస్తున్నారు.",
    },
    partner: { en: "David (a friend)", te: "డేవిడ్ (స్నేహితులు)" },
    voice: "b",
    skills: [{ id: "whose", label: { en: "my / his / her", te: "my / his / her వాడకం" } }],
    turns: [
      {
        partner: "Who is this in the photo?",
        te: "ఫోటోలో ఈయన ఎవరు?",
        hint: { en: "Say who he is: your brother.", te: "ఈయన ఎవరో చెప్పండి: మీ అన్నయ్య." },
        replies: [
          { say: "This is my brother.", good: true, skill: "whose" },
          { say: "This my brother.", good: false, skill: "whose", fixIt: "be" },
          {
            say: "Can't you see? My brother.",
            good: false,
            react: { en: "Ha ha, sorry! He looks like you.", te: "హహ, సారీ! అచ్చం మీలాగే ఉన్నారు." },
          },
        ],
      },
      {
        partner: "What is his name?",
        te: "ఆయన పేరు ఏంటి?",
        hint: { en: "Tell his name. He is a man, so use his.", te: "ఆయన పేరు చెప్పండి. మగవారు కాబట్టి his." },
        replies: [
          { say: "His name is Mohan.", good: true, skill: "whose" },
          { say: "Her name is Mohan.", good: false, skill: "whose" },
        ],
      },
      {
        partner: "And who is she?",
        te: "మరి ఈవిడ ఎవరు?",
        hint: { en: "Say she is your sister, and give her name.", te: "ఆవిడ మీ చెల్లెలు అని చెప్పి, ఆవిడ పేరు చెప్పండి." },
        replies: [
          { say: "She is my sister, Padma.", good: true, skill: "whose" },
          { say: "He is my sister, Padma.", good: false, skill: "whose" },
        ],
      },
      {
        partner: "Is that your house behind them?",
        te: "వాళ్ళ వెనకాల ఉన్నది మీ ఇల్లా?",
        hint: { en: "Say yes, it is your family's house.", te: "అవును, అది మీ కుటుంబం ఇల్లు అని చెప్పండి." },
        replies: [
          { say: "Yes, that is our house.", good: true, skill: "whose" },
          { say: "Yes, that our house.", good: false, skill: "whose", fixIt: "be" },
        ],
      },
    ],
  },
};
