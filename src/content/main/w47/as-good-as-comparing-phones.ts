import type { Lesson } from "../../types";

/** Week 47, Day 1 (CURRICULUM §5): as + adjective + as — comparing two phones at a mobile shop. */
export const day: Lesson = {
  id: "as-good-as-comparing-phones",
  kind: "lesson",
  title: { en: "As Good As", te: "అంతే బాగుంది" },
  subtitle: "as … as",
  summary: {
    en: "Learn to say two things are equal: This phone is as good as the expensive one.",
    te: "రెండూ సమానం అని చెప్పడం నేర్చుకుందాం: This phone is as good as the expensive one.",
  },
  seo: {
    title: "As Good As in English for Telugu Speakers",
    description:
      "Say This phone is as good as the expensive one. Simple lessons for Telugu speakers on comparing two things that are equal.",
  },
  pattern: [
    { text: "This phone", role: "who" },
    { text: "is", role: "action" },
    { text: "as good as", role: "what" },
    { text: "that one", role: "what" },
  ],
  core: [
    { en: "This phone is as good as that one.", te: "ఈ ఫోన్ ఆ ఫోన్ అంత బాగుంది.", extra: ["than"] },
    { en: "This phone is as good as the expensive one.", te: "ఈ ఫోన్ ఖరీదైన ఫోన్ అంత బాగుంది.", extra: ["so"] },
    { en: "Is it as good as the old one?", te: "ఇది పాత దానంత బాగుందా?", extra: ["Does"] },
    { en: "The screen is as big as yours.", te: "స్క్రీన్ మీ ఫోన్ స్క్రీన్ అంత పెద్దది.", extra: ["your"] },
    { en: "The new mall is as crowded as the old market.", te: "కొత్త మాల్ కూడా పాత మార్కెట్ అంత రద్దీగా ఉంది.", extra: ["more"] },
    { en: "The quality is as good as the big brands.", te: "క్వాలిటీ పెద్ద brands అంత బాగుంది.", extra: ["than"] },
    {
      en: "I've had this phone for four years, and it's still as good as new.",
      te: "ఈ ఫోన్ నాలుగేళ్ళుగా నా దగ్గర ఉంది, ఇప్పటికీ కొత్తదాని లాగే బాగుంది.",
      extra: ["since"],
    },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Compare two things at home or in a shop today with as … as.",
    te: "ఈ రోజు ఇంట్లో గానీ షాపులో గానీ రెండు వస్తువుల్ని as … as తో పోల్చి చెప్పండి.",
  },
  words: [
    { en: "as good as", te: "… అంత బాగా" },
    { en: "quality", te: "నాణ్యత, క్వాలిటీ" },
    { en: "model", te: "మోడల్, రకం" },
    { en: "features", te: "ఫీచర్లు, అందులో ఉండే సౌకర్యాలు" },
    { en: "worth it", te: "పెట్టిన డబ్బుకి తగినది" },
  ],
  grammar: ["comparatives-superlatives", "am-is-are", "present-perfect"],
  topics: ["shopping", "phone", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "as … as", te: "… అంత …" },
      body: {
        en: "To say two things are equal, put as before and after the word: as good as. The word in the middle stays plain.",
        te: "రెండూ సమానం అని చెప్పాలంటే పదానికి ముందూ వెనకా as పెట్టండి: as good as (అంత బాగా). మధ్యలో పదం మారదు.",
      },
      bridge: {
        te: ["ఈ ఫోన్", "ఆ ఫోన్ అంత", "బాగుంది"],
        en: [
          { text: "This phone", role: "who" },
          { text: "is", role: "action" },
          { text: "as good as", role: "what" },
          { text: "that one", role: "what" },
        ],
      },
      examples: [
        { en: "This phone is as good as that one.", te: "ఈ ఫోన్ ఆ ఫోన్ అంత బాగుంది." },
        { en: "This phone is as good as the expensive one.", te: "ఈ ఫోన్ ఖరీదైన ఫోన్ అంత బాగుంది." },
        { en: "Is it as good as the old one?", te: "ఇది పాత దానంత బాగుందా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Equal or more?", te: "సమానమా, ఎక్కువా?" },
      items: [
        {
          form: "as good as",
          useFor: { en: "The two things are equal.", te: "రెండూ సమానంగా ఉంటే." },
          example: { en: "The quality is as good as the big brands.", te: "క్వాలిటీ పెద్ద brands అంత బాగుంది." },
        },
        {
          form: "better than",
          useFor: { en: "One thing is more than the other.", te: "ఒకటి ఇంకోదానికంటే ఎక్కువగా ఉంటే." },
          example: { en: "This phone is better than my old one.", te: "ఈ ఫోన్ నా పాత ఫోన్ కంటే బాగుంది." },
        },
        {
          form: "the same as",
          useFor: { en: "The two are exactly alike.", te: "రెండూ పూర్తిగా ఒకేలా ఉంటే." },
          example: { en: "This model is the same as yours.", te: "ఈ మోడల్ మీ దానిలాంటిదే." },
        },
        {
          form: "as good as new",
          useFor: { en: "Old, but still like new.", te: "పాతదైనా, కొత్తదాని లాగే ఉంటే." },
          example: {
            en: "I've had this phone for four years, and it's still as good as new.",
            te: "ఈ ఫోన్ నాలుగేళ్ళుగా నా దగ్గర ఉంది, ఇప్పటికీ కొత్తదాని లాగే బాగుంది.",
          },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "This phone as good as that one.",
      right: "This phone is as good as that one.",
      why: {
        en: "English needs is before as good as; Telugu బాగుంది has no separate is.",
        te: "as good as ముందు is తప్పకుండా రావాలి; తెలుగు 'బాగుంది' లో విడిగా is ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "This phone is as good than that one.",
      right: "This phone is as good as that one.",
      why: {
        en: "After as good, use as again; than goes only with words like better and bigger.",
        te: "as good తర్వాత మళ్ళీ as రావాలి; than అనేది better, bigger లాంటి పదాలతోనే.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "You bought your phone four years ago and still use it. Tell the shopkeeper.",
        te: "మీ ఫోన్ నాలుగేళ్ళ క్రితం కొన్నారు, ఇప్పటికీ వాడుతున్నారు. షాపు వారికి చెప్పండి.",
      },
      options: ["I've had this phone for four years.", "I am having this phone for four years.", "I have this phone since four years."],
      answer: 0,
      why: {
        en: "For a time that runs up to now, use I've had with for; Telugu uses the present here.",
        te: "ఇప్పటిదాకా ఎంత కాలమో చెప్పాలంటే I've had + for; తెలుగులో 'ఉంది' అని present వాడతాం, అందుకే తప్పు వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "This phone is as ___ as that one.",
      te: "ఈ ఫోన్ ఆ ఫోన్ అంత బాగుంది.",
      options: ["good", "better", "best"],
      answer: 0,
      why: {
        en: "Between the two as words, the word stays plain, never better or best.",
        te: "రెండు as ల మధ్య పదం మారదు; better, best రావు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The shopkeeper says: This phone is as good as the expensive one. What does she mean?",
        te: "This phone is as good as the expensive one అని షాపు ఆవిడ అన్నారు. ఆవిడ ఉద్దేశం ఏంటి?",
      },
      options: ["The two phones are equally good.", "This phone is better than the expensive one.", "The expensive phone is not good."],
      answer: 0,
      why: {
        en: "As good as means the two are equal; it does not say one is better.",
        te: "as good as అంటే రెండూ సమానం; ఒకటి ఎక్కువ అని కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "This model is as same as yours.",
      wrongIndex: 3,
      fix: "This model is the same as yours.",
      why: {
        en: "For exactly alike, say the same as; as same as mixes two patterns.",
        te: "పూర్తిగా ఒకేలా అంటే the same as అనాలి; as same as అంటే రెండు పద్ధతులు కలిపేయడం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your neighbour asks about your cheap new phone. Say it is equal to the costly phones.",
        te: "మీ కొత్త చవక ఫోన్ గురించి పక్కింటివారు అడుగుతున్నారు. ఖరీదైన ఫోన్లకి సమానం అని చెప్పండి.",
      },
      expected: ["It's as good as the expensive phones.", "It is as good as the expensive ones.", "It's as good as an expensive phone."],
      options: ["It's as good as the expensive phones.", "It as good as the expensive phones.", "It's as good than the expensive phones."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend shows you her new phone. Ask if it is equal to her old one.",
        te: "స్నేహితురాలు తన కొత్త ఫోన్ చూపిస్తున్నారు. పాత ఫోన్ అంత బాగుందా అని అడగండి.",
      },
      expected: ["Is it as good as your old one?", "Is it as good as your old phone?", "Is the new one as good as the old one?"],
      options: ["Is it as good as your old one?", "It is as good as your old one?", "Is it as good than your old one?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Two phones", te: "రెండు ఫోన్లు" },
    scene: {
      en: "Your old phone is very slow. At the mobile shop, Swapna shows you two phones.",
      te: "మీ పాత ఫోన్ చాలా నెమ్మదిగా పనిచేస్తోంది. మొబైల్ షాపులో స్వప్న గారు మీకు రెండు ఫోన్లు చూపిస్తున్నారు.",
    },
    partner: { en: "Swapna (shopkeeper)", te: "స్వప్న (షాపు యజమాని)" },
    skills: [
      { id: "compare", label: { en: "Comparing with as … as", te: "as … as తో పోల్చడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! What are you looking for today?",
        te: "నమస్కారం అండీ! ఈ రోజు మీకు ఏం కావాలి?",
        hint: { en: "Greet her, and say you need a new phone.", te: "నమస్కారం చెప్పి, కొత్త ఫోన్ కావాలని చెప్పండి." },
        replies: [
          { say: "Good morning. I need a new phone, please.", good: true, skill: "polite" },
          { say: "Good morning. I need new phone, please.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
      {
        partner: "Look at these two. This one is 20,000 rupees, and this one is 11,000.",
        te: "ఈ రెండూ చూడండి. ఇది 20,000 రూపాయలు, ఇది 11,000.",
        hint: { en: "Ask if the cheaper phone is equally good.", te: "చవక ఫోన్ కూడా అంతే బాగుంటుందా అని అడగండి." },
        replies: [
          { say: "Is the cheaper one as good as the expensive one?", good: true, skill: "compare" },
          { say: "Is this one as good as that one?", good: true, skill: "compare" },
          { say: "The cheaper one is as good as the expensive one?", good: false, skill: "compare", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, the features are the same. Only the screen is a bit smaller.",
        te: "అవును, ఫీచర్లు అన్నీ ఒకటే. స్క్రీన్ మాత్రం కొంచెం చిన్నది.",
        hint: { en: "Say the size is fine for you, and ask about the warranty.", te: "సైజ్ మీకు పర్వాలేదని చెప్పి, warranty గురించి అడగండి." },
        replies: [
          { say: "That's fine for me. Is there a warranty?", good: true, skill: "polite" },
          { say: "It's worth it, then. Is there a warranty?", good: true, skill: "polite" },
          {
            say: "Smaller? You shop people always cheat us.",
            good: false,
            skill: "polite",
            react: { en: "Cheat? No! I'm telling you everything honestly.", te: "మోసమా? లేదండీ! అన్నీ నిజాయితీగానే చెప్తున్నాను." },
          },
        ],
      },
      {
        partner: "Yes, a one-year warranty. Shall I pack it for you?",
        te: "అవును, ఒక సంవత్సరం warranty ఉంది. ప్యాక్ చేయనా?",
        hint: { en: "Say yes, you will buy it, and thank her.", te: "సరే, తీసుకుంటానని చెప్పి, థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Yes, please. I'll take it. Thank you!", good: true, skill: "polite" },
          { say: "Yes, please. I'll taking it. Thank you!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
