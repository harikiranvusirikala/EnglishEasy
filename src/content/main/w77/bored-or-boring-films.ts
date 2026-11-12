import type { Lesson } from "../../types";

/** Week 77, Day 1 (CURRICULUM §5): -ed for how you feel, -ing for what makes you feel it — The film was boring. I was bored. */
export const day: Lesson = {
  id: "bored-or-boring-films",
  kind: "lesson",
  title: { en: "Bored or Boring?", te: "బోర్ కొట్టిందా, బోరింగా ఉందా?" },
  subtitle: "bored or boring",
  summary: {
    en: "Learn to tell how you felt and what made you feel it: The film was boring. I was bored after an hour.",
    te: "మీకు ఎలా అనిపించిందో, దేని వల్ల అలా అనిపించిందో వేరుగా చెప్పడం నేర్చుకుందాం: The film was boring. I was bored after an hour.",
  },
  seo: {
    title: "Bored or Boring in English for Telugu Speakers",
    description:
      "Say The film was boring and I was bored after an hour. Simple lessons for Telugu speakers on -ed and -ing words for films.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "was", role: "action" },
    { text: "bored", role: "what" },
    { text: "after an hour", role: "when" },
  ],
  core: [
    { en: "The film was boring.", te: "ఆ సినిమా బోరింగ్‌గా ఉంది.", extra: ["bored"] },
    { en: "I was bored after an hour.", te: "గంట తర్వాత నాకు బోర్ కొట్టింది.", extra: ["boring"] },
    { en: "The ending was surprising.", te: "ఆ ముగింపు ఆశ్చర్యపరిచింది.", extra: ["surprised"] },
    { en: "Everyone was surprised at the end.", te: "చివర్లో అందరూ ఆశ్చర్యపోయారు.", extra: ["surprising"] },
    { en: "I was disappointed because the second half was boring.", te: "సెకండ్ హాఫ్ బోరింగ్‌గా ఉంది, అందుకే నాకు నిరాశగా అనిపించింది.", extra: ["disappointing"] },
    { en: "Were you bored, or did you enjoy it?", te: "మీకు బోర్ కొట్టిందా, లేక నచ్చిందా?", extra: ["boring"] },
    { en: "The songs were good, but the film was too long.", te: "పాటలు బాగున్నాయి, కానీ సినిమా మరీ పొడుగ్గా ఉంది.", extra: ["much"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of the last film or serial you watched. Say aloud one sentence with It was … and one with I was …",
    te: "మీరు చివరగా చూసిన సినిమా లేదా సీరియల్ గుర్తు చేసుకోండి. It was … తో ఒక వాక్యం, I was … తో ఒక వాక్యం గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "bored", te: "బోర్ కొట్టడం, విసుగ్గా ఉండటం" },
    { en: "surprised", te: "ఆశ్చర్యపోవడం" },
    { en: "surprising", te: "ఆశ్చర్యపరిచే, ఊహించని" },
    { en: "disappointed", te: "నిరాశ చెందడం" },
    { en: "ending", te: "ముగింపు, క్లైమాక్స్" },
  ],
  grammar: ["was-were", "am-is-are", "connectors"],
  topics: ["feelings", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "-ed for you, -ing for the film", te: "మీకు -ed, సినిమాకి -ing" },
      body: {
        en: "Use -ing for the thing that makes you feel something: The film was boring. Use -ed for how you feel: I was bored.",
        te: "మీకు ఒక భావం కలిగించే దానికి -ing: The film was boring. మీకు ఎలా అనిపించిందో చెప్పడానికి -ed: I was bored.",
      },
      bridge: {
        te: ["గంట తర్వాత", "నాకు", "బోర్ కొట్టింది"],
        en: [
          { text: "I", role: "who" },
          { text: "was", role: "action" },
          { text: "bored", role: "what" },
          { text: "after an hour", role: "when" },
        ],
      },
      examples: [
        { en: "The film was boring.", te: "ఆ సినిమా బోరింగ్‌గా ఉంది." },
        { en: "I was bored after an hour.", te: "గంట తర్వాత నాకు బోర్ కొట్టింది." },
        { en: "The ending was surprising.", te: "ఆ ముగింపు ఆశ్చర్యపరిచింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How you feel, or what made you feel it?", te: "మీ భావమా, ఆ భావం కలిగించినదా?" },
      items: [
        {
          form: "She was bored.",
          useFor: { en: "How a person felt: use -ed.", te: "ఒక మనిషికి ఎలా అనిపించిందో: -ed." },
          example: { en: "Sita was bored, so she left early.", te: "సీత గారికి బోర్ కొట్టింది, అందుకే త్వరగా వెళ్ళిపోయారు." },
        },
        {
          form: "It was boring.",
          useFor: { en: "The film, serial or speech that made you feel it: use -ing.", te: "ఆ భావం కలిగించిన సినిమా, సీరియల్, స్పీచ్: -ing." },
          example: { en: "The speech at the function was boring.", te: "ఫంక్షన్‌లో ఆ స్పీచ్ బోరింగ్‌గా ఉంది." },
        },
        {
          form: "We were surprised.",
          useFor: { en: "-ed works for many people too, with were.", te: "చాలామందికి కూడా -ed, were తో." },
          example: { en: "We were all surprised by the news.", te: "ఆ వార్త విని మేమంతా ఆశ్చర్యపోయాం." },
        },
        {
          form: "I was disappointed.",
          useFor: { en: "Something was not as good as you hoped.", te: "మీరు ఆశించినంత బాగా లేనప్పుడు." },
          example: { en: "I was disappointed with the second half.", te: "సెకండ్ హాఫ్ చూసి నాకు నిరాశగా అనిపించింది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "I bored after an hour.",
      right: "I was bored after an hour.",
      why: {
        en: "Bored tells how you felt, so it needs was or am before it; Telugu బోర్ కొట్టింది has no such word.",
        te: "bored మీకు ఎలా అనిపించిందో చెప్తుంది, అందుకే ముందు was లేదా am కావాలి; 'బోర్ కొట్టింది' లో అలాంటి మాట ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I was boring after an hour.",
      right: "I was bored after an hour.",
      why: {
        en: "I was boring means you made others feel bored; for your own feeling, use -ed.",
        te: "I was boring అంటే మీ వల్ల ఇతరులకి బోర్ కొట్టిందని అర్థం; మీ భావానికి -ed వాడాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Your friend asks how the film was. You yawned all through it. What do you say?",
        te: "సినిమా ఎలా ఉందని స్నేహితులు అడుగుతున్నారు. సినిమా అంతా మీకు ఆవలింతలే. ఏమంటారు?",
      },
      options: ["It was boring.", "It was bored.", "It boring."],
      answer: 0,
      why: {
        en: "The film made you feel bored, so it takes -ing, and it needs was.",
        te: "సినిమా మీకు బోర్ కొట్టించింది, అందుకే -ing; ముందు was కూడా కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Everyone was ___ at the end.",
      te: "చివర్లో అందరూ ఆశ్చర్యపోయారు.",
      options: ["surprised", "surprising", "surprise"],
      answer: 0,
      why: {
        en: "Everyone means people feeling something, so use the -ed word.",
        te: "ఇక్కడ మనుషులకి కలిగిన భావం, అందుకే -ed మాట వాడాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Lakshmi says: The ending was surprising. What does she mean?",
        te: "The ending was surprising అని లక్ష్మి గారు అన్నారు. ఆవిడ ఉద్దేశం ఏంటి?",
      },
      options: ["Nobody expected that ending.", "The ending was very sad.", "She didn't see the ending."],
      answer: 0,
      why: {
        en: "Surprising means not what people expected, and here it describes the ending.",
        te: "surprising అంటే ఎవరూ ఊహించనిది; ఇక్కడ అది ముగింపు గురించి చెప్తుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "The songs were good, but film was too long.",
      wrongIndex: 5,
      fix: "The songs were good, but the film was too long.",
      why: {
        en: "We both know which film, so it needs the; Telugu has no word like the.",
        te: "ఏ సినిమానో ఇద్దరికీ తెలుసు, అందుకే the కావాలి; తెలుగులో the లాంటి మాట లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "After the film, your friend asks: Did you like it? You felt bored in the second half. Answer.",
        te: "సినిమా అయ్యాక, నచ్చిందా అని స్నేహితులు అడుగుతున్నారు. సెకండ్ హాఫ్‌లో మీకు బోర్ కొట్టింది. జవాబు చెప్పండి.",
      },
      expected: ["Not really. I was bored in the second half.", "It was okay, but I was bored in the second half.", "The second half was boring."],
      options: ["Not really. I was bored in the second half.", "Not really. I bored in the second half.", "Not really. I was boring in the second half."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour asks about the ending of the film. Nobody expected it. Tell her.",
        te: "సినిమా ముగింపు గురించి పక్కింటావిడ అడుగుతున్నారు. ఎవరూ దాన్ని ఊహించలేదు. ఆవిడకి చెప్పండి.",
      },
      expected: ["The ending was very surprising.", "The ending was surprising.", "Everyone was surprised at the end."],
      options: ["The ending was very surprising.", "The ending was very surprised.", "The ending very surprising."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "After the show", te: "షో అయ్యాక" },
    scene: {
      en: "You and your friend Mohan are coming out of the theatre after the evening show.",
      te: "మీరు, మీ స్నేహితుడు మోహన్ గారు సాయంత్రం షో అయ్యాక థియేటర్ నుంచి బయటికి వస్తున్నారు.",
    },
    partner: { en: "Mohan (your friend)", te: "మోహన్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "feelings", label: { en: "Saying how you felt", te: "మీకు ఎలా అనిపించిందో చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "So, how was it? Did you like the film?",
        te: "అయితే, ఎలా ఉంది? సినిమా నచ్చిందా?",
        hint: { en: "Say the first half was good, but you felt bored in the second half.", te: "ఫస్ట్ హాఫ్ బాగుందని, సెకండ్ హాఫ్‌లో మీకు బోర్ కొట్టిందని చెప్పండి." },
        replies: [
          { say: "The first half was good, but I was bored in the second half.", good: true, skill: "feelings" },
          { say: "The first half was good, but I bored in the second half.", good: false, skill: "feelings", fixIt: "be" },
          { say: "The first half was good, but I was boring in the second half.", good: false, skill: "feelings" },
        ],
      },
      {
        partner: "Really? I was surprised at the end. Weren't you?",
        te: "నిజమా? చివర్లో నేను ఆశ్చర్యపోయాను. మీకు అలా అనిపించలేదా?",
        hint: { en: "Agree: the ending surprised you too.", te: "ఒప్పుకోండి: ముగింపు మిమ్మల్ని కూడా ఆశ్చర్యపరిచింది." },
        replies: [
          { say: "Yes, I was! The ending was really surprising.", good: true, skill: "feelings" },
          { say: "Yes, I was! The ending was really surprised.", good: false, skill: "feelings" },
        ],
      },
      {
        partner: "The hero was good, but the comedy scenes were too long.",
        te: "హీరో బాగా చేశారు, కానీ కామెడీ సీన్లు మరీ పొడుగ్గా ఉన్నాయి.",
        hint: { en: "Agree kindly with your friend's opinion.", te: "మీ స్నేహితుడి అభిప్రాయంతో మర్యాదగా ఒప్పుకోండి." },
        replies: [
          { say: "I think so too. They were a bit boring.", good: true, skill: "polite" },
          {
            say: "Well, you chose this film. It was your idea!",
            good: false,
            skill: "polite",
            react: { en: "Sorry! Next time, you can choose.", te: "సారీ! ఈసారి మీరే ఎంచుకోండి." },
          },
        ],
      },
      {
        partner: "Shall we have some tea before we go home?",
        te: "ఇంటికి వెళ్ళే ముందు కొంచెం టీ తాగుదామా?",
        hint: { en: "Say yes happily, and thank him for the evening.", te: "సంతోషంగా సరే అని, ఈ సాయంత్రానికి ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Yes, let's. Thanks for the lovely evening, Mohan!", good: true, skill: "polite" },
          { say: "Yes, let's. Thanks for lovely evening, Mohan!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
