import type { Lesson } from "../../types";

/** Week 56, Day 1 (CURRICULUM §5): is / are + the done form — This soap is made in Hyderabad. These mangoes are grown in Nuzvid. */
export const day: Lesson = {
  id: "made-in-india-labels",
  kind: "lesson",
  title: { en: "Made in India", te: "మేడ్ ఇన్ ఇండియా" },
  subtitle: "is made, are grown",
  summary: {
    en: "Learn to say where things are made or grown: This soap is made in Hyderabad. These mangoes are grown in Nuzvid.",
    te: "వస్తువులు ఎక్కడ తయారవుతాయో, ఎక్కడ పండుతాయో చెప్పడం నేర్చుకుందాం: This soap is made in Hyderabad. These mangoes are grown in Nuzvid.",
  },
  seo: {
    title: "Saying Where Things Are Made in English for Telugu Speakers",
    description:
      "Say This soap is made in Hyderabad and These mangoes are grown in Nuzvid. Simple lessons for Telugu speakers on is made and are grown.",
  },
  pattern: [
    { text: "This soap", role: "who" },
    { text: "is made", role: "action" },
    { text: "in Hyderabad", role: "what" },
  ],
  core: [
    { en: "This soap is made in Hyderabad.", te: "ఈ సబ్బు హైదరాబాద్‌లో తయారవుతుంది.", extra: ["make"] },
    { en: "These mangoes are grown in Nuzvid.", te: "ఈ మామిడిపళ్ళు నూజివీడులో పండుతాయి.", extra: ["is"] },
    { en: "This tea is grown in Assam.", te: "ఈ టీ అస్సాంలో పండుతుంది.", extra: ["are"] },
    { en: "This phone is made in India.", te: "ఈ ఫోన్ ఇండియాలోనే తయారవుతుంది.", extra: ["from"] },
    { en: "These steel plates are made in India.", te: "ఈ స్టీల్ ప్లేట్లు ఇండియాలో తయారవుతాయి.", extra: ["plate"] },
    { en: "This rice is packed in Nellore.", te: "ఈ బియ్యం నెల్లూరులో ప్యాక్ చేస్తారు.", extra: ["are"] },
    { en: "Fresh milk is brought from the village every morning.", te: "ప్రతి రోజు పొద్దున ఊరి నుంచి తాజా పాలు తెస్తారు.", extra: ["bring"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Pick up any packet or soap at home. Find where it is made, and say it aloud: It is made in …",
    te: "ఇంట్లో ఏదైనా ప్యాకెట్ లేదా సబ్బు తీసుకోండి. అది ఎక్కడ తయారైందో చూసి గట్టిగా చెప్పండి: It is made in …",
  },
  words: [
    { en: "made in", te: "… లో తయారైంది" },
    { en: "come from", te: "… నుంచి రావడం" },
    { en: "local", te: "మన ఊరిది, లోకల్" },
    { en: "imported", te: "విదేశాల నుంచి తెచ్చిన" },
    { en: "product", te: "వస్తువు, ప్రాడక్ట్" },
  ],
  grammar: ["passive-voice", "am-is-are", "plurals-countable"],
  topics: ["shopping", "market"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Where is it made?", te: "ఎక్కడ తయారవుతుంది?" },
      body: {
        en: "When the maker is not important, start with the thing. Then say is or are, and the done form: This soap is made in Hyderabad.",
        te: "తయారు చేసేవాళ్ళు ముఖ్యం కానప్పుడు వస్తువుతో మొదలుపెట్టండి. తర్వాత is లేదా are, దాని తర్వాత పూర్తయిన రూపం: This soap is made in Hyderabad.",
      },
      bridge: {
        te: ["ఈ సబ్బు", "హైదరాబాద్‌లో", "తయారవుతుంది"],
        en: [
          { text: "This soap", role: "who" },
          { text: "is made", role: "action" },
          { text: "in Hyderabad", role: "what" },
        ],
      },
      examples: [
        { en: "This soap is made in Hyderabad.", te: "ఈ సబ్బు హైదరాబాద్‌లో తయారవుతుంది." },
        { en: "These mangoes are grown in Nuzvid.", te: "ఈ మామిడిపళ్ళు నూజివీడులో పండుతాయి." },
        { en: "This tea is grown in Assam.", te: "ఈ టీ అస్సాంలో పండుతుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "is or are, made or grown?", te: "is ఆ, are ఆ? made ఆ, grown ఆ?" },
      items: [
        {
          form: "is made / is packed",
          useFor: { en: "One thing, or things we don't count: rice, oil, tea.", te: "ఒక్క వస్తువుకి, లేదా బియ్యం, నూనె, టీ లాంటి లెక్కపెట్టని వాటికి." },
          example: { en: "This rice is packed in Nellore.", te: "ఈ బియ్యం నెల్లూరులో ప్యాక్ చేస్తారు." },
        },
        {
          form: "are made / are grown",
          useFor: { en: "Many things: mangoes, plates, sarees.", te: "చాలా వస్తువులకి: మామిడిపళ్ళు, ప్లేట్లు, చీరలు." },
          example: { en: "These steel plates are made in India.", te: "ఈ స్టీల్ ప్లేట్లు ఇండియాలో తయారవుతాయి." },
        },
        {
          form: "made / grown",
          useFor: { en: "Made for things people make; grown for fruit, rice and tea.", te: "మనుషులు తయారుచేసే వస్తువులకి made; పండ్లు, బియ్యం, టీ లాంటి పంటలకి grown." },
          example: { en: "These mangoes are grown in Nuzvid.", te: "ఈ మామిడిపళ్ళు నూజివీడులో పండుతాయి." },
        },
        {
          form: "comes from",
          useFor: { en: "The same idea with no is. One thing takes comes.", te: "is లేకుండా అదే అర్థం. ఒక్క వస్తువుకి comes." },
          example: { en: "This soap comes from Hyderabad.", te: "ఈ సబ్బు హైదరాబాద్ నుంచి వస్తుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "It made in India.",
      right: "It is made in India.",
      why: {
        en: "Without is, it sounds like the thing made something. Telugu తయారైంది has no is, but English needs it.",
        te: "is లేకపోతే 'అదే ఏదో తయారు చేసింది' అనే అర్థం వస్తుంది. తెలుగులో is లాంటి పదం ఉండదు, ఇంగ్లీష్‌లో తప్పకుండా కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "These mangoes is grown in Nuzvid.",
      right: "These mangoes are grown in Nuzvid.",
      why: {
        en: "Many mangoes take are, not is; is is only for one thing.",
        te: "చాలా మామిడిపళ్ళు కాబట్టి are; is ఒక్క వస్తువుకి మాత్రమే.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "A customer asks where this soap comes from. It comes from Hyderabad. What do you say?",
        te: "ఈ సబ్బు ఎక్కడిదని ఒక కస్టమర్ అడుగుతున్నారు. అది హైదరాబాద్‌ది. ఏమంటారు?",
      },
      options: ["It is made in Hyderabad.", "It made in Hyderabad.", "It is make in Hyderabad."],
      answer: 0,
      why: {
        en: "Say is and the done form made together; both parts are needed.",
        te: "is, పూర్తయిన రూపం made రెండూ కలిసి రావాలి; ఒకటి వదిలేస్తే తప్పు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "These bananas ___ grown near Rajahmundry.",
      te: "ఈ అరటిపళ్ళు రాజమండ్రి దగ్గర పండుతాయి.",
      options: ["are", "is", "was"],
      answer: 0,
      why: {
        en: "Many bananas take are; Telugu changes the verb end, English changes is to are.",
        te: "చాలా అరటిపళ్ళు కాబట్టి are; తెలుగులో verb చివర మారినట్టే, ఇంగ్లీష్‌లో is కాస్తా are అవుతుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "Your friend likes your new pressure cooker. Tell her it is made in India.",
        te: "మీ కొత్త ప్రెషర్ కుక్కర్ మీ స్నేహితురాలికి నచ్చింది. అది ఇండియాలో తయారైందని చెప్పండి.",
      },
      options: ["It's made in India.", "It's made from India.", "It's made by India."],
      answer: 0,
      why: {
        en: "For the place, say made in; made from is for the material, like wood.",
        te: "ఎక్కడ తయారైందో చెప్పాలంటే made in; made from అయితే దేనితో చేశారో, చెక్క లాంటిది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "This is a imported soap.",
      wrongIndex: 2,
      fix: "This is an imported soap.",
      why: {
        en: "Before a vowel sound, like the im in imported, use an, not a.",
        te: "imported లాగా అచ్చు శబ్దంతో మొదలయ్యే పదం ముందు a కాదు, an వాడాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "A friend from Hyderabad likes the mangoes you brought. Say they are grown in Nuzvid.",
        te: "మీరు తెచ్చిన మామిడిపళ్ళు హైదరాబాద్ నుంచి వచ్చిన స్నేహితులకి నచ్చాయి. అవి నూజివీడులో పండుతాయని చెప్పండి.",
      },
      expected: ["They are grown in Nuzvid.", "They're grown in Nuzvid.", "These mangoes are grown in Nuzvid.", "They come from Nuzvid."],
      options: ["They are grown in Nuzvid.", "They is grown in Nuzvid.", "They are grow in Nuzvid."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your neighbour asks where your new fan is made. The box says India. Answer.",
        te: "మీ కొత్త ఫ్యాన్ ఎక్కడ తయారైందని పక్కింటివారు అడుగుతున్నారు. డబ్బా మీద India అని ఉంది. జవాబు చెప్పండి.",
      },
      expected: ["It's made in India.", "It is made in India.", "It's made in India. It's a local product."],
      options: ["It's made in India.", "It made in India.", "It's making in India."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Where is it from?", te: "ఇది ఎక్కడిది?" },
    scene: {
      en: "You are at Gopal's kirana shop. You want rice and some local products.",
      te: "మీరు గోపాల్ గారి కిరాణా షాపులో ఉన్నారు. బియ్యం, కొన్ని లోకల్ వస్తువులు కొనాలనుకుంటున్నారు.",
    },
    partner: { en: "Gopal (shopkeeper)", te: "గోపాల్ (షాపు యజమాని)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "Asking where things come from", te: "ఎక్కడివో అడగడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! What would you like today?",
        te: "నమస్కారం! ఈ రోజు ఏం కావాలండీ?",
        hint: { en: "Greet him, and ask for five kilos of good rice.", te: "నమస్కారం చెప్పి, ఐదు కిలోల మంచి బియ్యం అడగండి." },
        replies: [
          { say: "Good morning! Five kilos of good rice, please.", good: true, skill: "polite" },
          { say: "Good morning! Five kilo of good rice, please.", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
      {
        partner: "This rice is from Nellore. It's packed there too.",
        te: "ఇవి నెల్లూరు బియ్యం. అక్కడే ప్యాక్ కూడా చేస్తారు.",
        hint: { en: "Say that is good, and ask where the oil comes from.", te: "బాగుందని చెప్పి, ఈ నూనె ఎక్కడిదో అడగండి." },
        replies: [
          { say: "Good. And where does this oil come from?", good: true, skill: "ask" },
          { say: "Good. And where this oil comes from?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "This oil is made in a small local mill, near Guntur.",
        te: "ఈ నూనె గుంటూరు దగ్గర ఒక చిన్న లోకల్ మిల్లులో తయారవుతుంది.",
        hint: { en: "Say you like local products, and ask for one bottle.", te: "లోకల్ వస్తువులంటే మీకు ఇష్టమని చెప్పి, ఒక బాటిల్ అడగండి." },
        replies: [
          { say: "I like local products. One bottle, please.", good: true, skill: "ask" },
          {
            say: "Local? I don't think the quality is any good.",
            good: false,
            skill: "polite",
            react: { en: "Not at all! It's very good oil. Everyone here buys it.", te: "అలా ఏం కాదండీ! చాలా మంచి నూనె. ఇక్కడ అందరూ ఇదే కొంటారు." },
          },
        ],
      },
      {
        partner: "Here you are. Anything else?",
        te: "ఇదిగోండి. ఇంకేమైనా కావాలా?",
        hint: { en: "Say no, thank him, and ask for the total.", te: "ఇంకేమీ వద్దని, థాంక్స్ చెప్పి, మొత్తం ఎంతో అడగండి." },
        replies: [
          { say: "No, thank you. How much is it altogether?", good: true, skill: "polite" },
          { say: "No, thank you. How much it is altogether?", good: false, skill: "polite", fixIt: "question" },
        ],
      },
    ],
  },
};
