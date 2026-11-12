import type { Lesson } from "../../types";

/** Week 45, Day 3 (CURRICULUM §5): describing a place — Guntur is famous for chillies. It's crowded but friendly. */
export const day: Lesson = {
  id: "famous-for-chillies",
  kind: "lesson",
  title: { en: "Famous for Chillies", te: "మా ఊరు దేనికి ప్రసిద్ధి" },
  subtitle: "famous for, crowded, quiet",
  summary: {
    en: "Learn to describe a place and say what it is known for: Guntur is famous for chillies. It's crowded but friendly.",
    te: "ఒక ఊరు ఎలా ఉంటుందో, దేనికి పేరో చెప్పడం నేర్చుకుందాం: Guntur is famous for chillies. It's crowded but friendly.",
  },
  seo: {
    title: "Describing Your Town in English for Telugu Speakers",
    description:
      "Say Guntur is famous for chillies and It's crowded but friendly. Simple lessons for Telugu speakers on describing a town or village.",
  },
  pattern: [
    { text: "Guntur", role: "who" },
    { text: "is", role: "action" },
    { text: "famous for chillies", role: "what" },
  ],
  core: [
    { en: "Guntur is famous for chillies.", te: "గుంటూరు మిర్చికి ప్రసిద్ధి.", extra: ["in"] },
    { en: "It's crowded but friendly.", te: "రద్దీగా ఉంటుంది, కానీ జనం ఆప్యాయంగా ఉంటారు.", extra: ["crowd"] },
    { en: "Our town is small and quiet.", te: "మా ఊరు చిన్నది, ప్రశాంతంగా ఉంటుంది.", extra: ["are"] },
    { en: "Tirupati is famous for its temple.", te: "తిరుపతి అక్కడి గుడికి ప్రసిద్ధి.", extra: ["it's"] },
    { en: "The market is very noisy in the morning.", te: "పొద్దున మార్కెట్ చాలా గోలగా ఉంటుంది.", extra: ["at"] },
    { en: "Kondapalli is known for its wooden toys.", te: "కొండపల్లి చెక్క బొమ్మలకి పేరు." },
    { en: "It's a lively place, especially at Sankranti.", te: "అది సందడిగా ఉండే ఊరు, ముఖ్యంగా సంక్రాంతికి." },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell someone what your town is famous for: My town is famous for …",
    te: "మీ ఊరు దేనికి ప్రసిద్ధో ఎవరికైనా చెప్పండి: My town is famous for …",
  },
  words: [
    { en: "famous for", te: "… కి ప్రసిద్ధి" },
    { en: "chillies", te: "మిర్చి, మిరపకాయలు" },
    { en: "noisy", te: "గోలగా, శబ్దంగా" },
    { en: "lively", te: "సందడిగా" },
    { en: "known for", te: "… కి పేరు" },
  ],
  grammar: ["am-is-are", "present-simple", "prepositions"],
  topics: ["people", "travel", "food"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Describing a place", te: "ఒక ఊరి గురించి చెప్పడం" },
      body: {
        en: "Say what a place is like with is and a describing word: It's crowded but friendly. To say what it is best known for, use famous for.",
        te: "ఒక ఊరు ఎలా ఉంటుందో is తో చెప్పండి: It's crowded but friendly. దేనికి పేరో చెప్పాలంటే famous for అనండి.",
      },
      bridge: {
        te: ["గుంటూరు", "మిర్చికి ప్రసిద్ధి"],
        en: [
          { text: "Guntur", role: "who" },
          { text: "is", role: "action" },
          { text: "famous for chillies", role: "what" },
        ],
      },
      examples: [
        { en: "Guntur is famous for chillies.", te: "గుంటూరు మిర్చికి ప్రసిద్ధి." },
        { en: "It's crowded but friendly.", te: "రద్దీగా ఉంటుంది, కానీ జనం ఆప్యాయంగా ఉంటారు." },
        { en: "Our town is small and quiet.", te: "మా ఊరు చిన్నది, ప్రశాంతంగా ఉంటుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Words for a place", te: "ఊరి గురించి చెప్పే మాటలు" },
      items: [
        {
          form: "crowded / noisy",
          useFor: { en: "Many people and a lot of sound.", te: "జనం ఎక్కువ, గోల ఎక్కువ." },
          example: { en: "The market is very noisy in the morning.", te: "పొద్దున మార్కెట్ చాలా గోలగా ఉంటుంది." },
        },
        {
          form: "quiet / peaceful",
          useFor: { en: "Few people and little sound.", te: "జనం తక్కువ, ప్రశాంతంగా." },
          example: { en: "The village is peaceful in the evening.", te: "సాయంత్రం ఊరు ప్రశాంతంగా ఉంటుంది." },
        },
        {
          form: "famous for / known for",
          useFor: { en: "What a place is best known for.", te: "ఆ ఊరికి దేనికి పేరో చెప్పడానికి." },
          example: { en: "Kondapalli is known for its wooden toys.", te: "కొండపల్లి చెక్క బొమ్మలకి పేరు." },
        },
        {
          form: "… but …",
          useFor: { en: "One good thing and one not so good.", te: "ఒక మంచి, ఒక అంత బాగాలేని విషయం కలిపి చెప్పడానికి." },
          example: { en: "It's crowded but friendly.", te: "రద్దీగా ఉంటుంది, కానీ జనం ఆప్యాయంగా ఉంటారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Guntur is famous in chillies.",
      right: "Guntur is famous for chillies.",
      why: {
        en: "Famous always takes for; Telugu మిర్చికి ends in -కి, and for matches it, not in.",
        te: "famous తర్వాత ఎప్పుడూ for వస్తుంది; 'మిర్చికి' లోని -కి కి సరిపోయేది for, in కాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "Our town is having two big temples.",
      right: "Our town has two big temples.",
      why: {
        en: "Has here means the town contains them, a state, so it takes no -ing.",
        te: "ఇక్కడ has అంటే 'ఉన్నాయి' అనే స్థితి; అందుకే -ing రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "A visitor asks what Guntur is best known for. Tell him.",
        te: "గుంటూరు దేనికి బాగా పేరో ఒక అతిథి అడుగుతున్నారు. ఆయనకి చెప్పండి.",
      },
      options: ["Guntur is famous for chillies.", "Guntur famous for chillies.", "Guntur is famous for chilli."],
      answer: 0,
      why: {
        en: "English needs is between the place and famous, and chillies are many, so add s.",
        te: "ఊరి పేరుకీ famous కీ మధ్య is కావాలి; మిరపకాయలు చాలా కాబట్టి s కూడా.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Tirupati is famous for ___ temple.",
      te: "తిరుపతి అక్కడి గుడికి ప్రసిద్ధి.",
      options: ["its", "it's", "their"],
      answer: 0,
      why: {
        en: "Its means belonging to it; it's is short for it is.",
        te: "its అంటే 'దాని'; it's అంటే it is అని.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The bus stand is full of people. Which sentence is right?",
        te: "బస్ స్టాండ్ నిండా జనం ఉన్నారు. ఏ వాక్యం సరైనది?",
      },
      options: ["The bus stand is very crowded.", "The bus stand is very crowd.", "The bus stand is very crowding."],
      answer: 0,
      why: {
        en: "A crowd is the people; crowded tells you how the place is.",
        te: "crowd అంటే జనం; ఆ చోటు ఎలా ఉందో చెప్పడానికి crowded.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Visakhapatnam is a beautiful city with long beach.",
      wrongIndex: 6,
      fix: "Visakhapatnam is a beautiful city with a long beach.",
      why: {
        en: "One beach needs a before it, even after with; Telugu has no such word.",
        te: "ఒక్క beach కాబట్టి with తర్వాత కూడా a కావాలి; తెలుగులో అలాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "A visitor asks what Guntur is famous for. Answer.",
        te: "గుంటూరు దేనికి ప్రసిద్ధి అని ఒక అతిథి అడుగుతున్నారు. జవాబు చెప్పండి.",
      },
      expected: ["It's famous for chillies.", "It is famous for chillies.", "Guntur is famous for chillies.", "Chillies."],
      options: ["It's famous for chillies.", "It's famous in chillies.", "It famous for chillies."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Tell a visitor your town is crowded, but the people are friendly.",
        te: "మీ ఊరు రద్దీగా ఉంటుంది కానీ జనం ఆప్యాయంగా ఉంటారని ఒక అతిథికి చెప్పండి.",
      },
      expected: ["It's crowded, but the people are friendly.", "It's crowded but friendly.", "My town is crowded, but the people are friendly."],
      options: ["It's crowded, but the people are friendly.", "It's crowded, but the people is friendly.", "It's crowd, but the people are friendly."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A visitor at the bus stand", te: "బస్ స్టాండ్‌లో ఒక అతిథి" },
    scene: {
      en: "You live in Guntur. Grace is from Chennai and has come for work. She asks you about the town at the bus stand.",
      te: "మీరు గుంటూరులో ఉంటారు. గ్రేస్ గారు చెన్నై నుంచి పని మీద వచ్చారు. బస్ స్టాండ్‌లో ఆవిడ మిమ్మల్ని ఊరి గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Grace (a visitor)", te: "గ్రేస్ (అతిథి)" },
    skills: [
      { id: "describe", label: { en: "Describing your town", te: "మీ ఊరి గురించి చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! I'm new here. Is Guntur a big city?",
        te: "హలో! నేను ఇక్కడికి కొత్త. గుంటూరు పెద్ద సిటీనా?",
        hint: { en: "Say how big and busy it is, and that the people are kind.", te: "ఊరు ఎంత పెద్దదో, ఎంత రద్దీనో, జనం మంచివాళ్ళని చెప్పండి." },
        replies: [
          { say: "It's quite big. It's crowded but friendly.", good: true, skill: "describe" },
          { say: "It's quite big. It's crowd but friendly.", good: false, skill: "describe" },
        ],
      },
      {
        partner: "And what is Guntur famous for?",
        te: "మరి గుంటూరు దేనికి ప్రసిద్ధి?",
        hint: { en: "Tell her about the chillies and the big market.", te: "మిర్చి గురించి, పెద్ద మార్కెట్ గురించి చెప్పండి." },
        replies: [
          { say: "It's famous for chillies. There's a very big chilli market.", good: true, skill: "describe" },
          { say: "It's famous in chillies. There's a very big chilli market.", good: false, skill: "describe", fixIt: "preposition" },
        ],
      },
      {
        partner: "Oh! Is the food very spicy here?",
        te: "అయ్యో! ఇక్కడ భోజనం చాలా కారంగా ఉంటుందా?",
        hint: { en: "Say yes, and tell her she can ask for less spice.", te: "అవును అని, కారం తక్కువగా అడగొచ్చని చెప్పండి." },
        replies: [
          { say: "Yes, quite spicy! You can ask for less spice.", good: true, skill: "polite" },
          {
            say: "Yes. If you can't eat spicy food, don't come here.",
            good: false,
            skill: "polite",
            react: { en: "Oh! I'll try, I promise.", te: "ఓ! ప్రయత్నిస్తాను, మాటిస్తున్నాను." },
          },
        ],
      },
      {
        partner: "Thank you! You've been very helpful.",
        te: "థాంక్యూ! మీరు చాలా సాయం చేశారు.",
        hint: { en: "Answer her thanks, and wish her a nice stay.", te: "ఆవిడ థాంక్స్‌కి జవాబిచ్చి, ఇక్కడ బాగా గడపమని చెప్పండి." },
        replies: [
          { say: "You're welcome. Enjoy your stay in Guntur!", good: true, skill: "polite" },
          { say: "Mention not. Enjoy your stay in Guntur!", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
