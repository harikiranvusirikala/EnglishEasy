import type { Lesson } from "../../types";

/** Week 60, Day 1 (CURRICULUM §5): big money numbers with halves — one and a half lakh, ten lakh = one million, crore = ten million. */
export const day: Lesson = {
  id: "lakh-and-million-money",
  kind: "lesson",
  title: { en: "Lakh and Million", te: "లక్ష, మిలియన్" },
  subtitle: "one and a half lakh = 150,000",
  summary: {
    en: "Learn to say big amounts with halves, and change lakh into thousands and millions: one and a half lakh is one hundred and fifty thousand.",
    te: "సగంతో పెద్ద మొత్తాలు చెప్పడం, లక్షని thousand, million లోకి మార్చడం నేర్చుకుందాం: one and a half lakh is one hundred and fifty thousand.",
  },
  seo: {
    title: "One and a Half Lakh in English for Telugu Speakers",
    description:
      "Say one and a half lakh, and that ten lakh is the same as one million. Simple lessons for Telugu speakers on big money numbers.",
  },
  pattern: [
    { text: "One and a half lakh", role: "who" },
    { text: "is", role: "action" },
    { text: "one hundred and fifty thousand", role: "what" },
  ],
  core: [
    { en: "One and a half lakh is one hundred and fifty thousand.", te: "ఒకటిన్నర లక్ష అంటే నూట యాభై వేలు.", extra: ["lakhs"] },
    { en: "Ten lakh is the same as one million.", te: "పది లక్షలు, ఒక మిలియన్ రెండూ ఒకటే.", extra: ["millions"] },
    { en: "Fifteen lakh is one point five million.", te: "పదిహేను లక్షలు అంటే ఒకటిన్నర మిలియన్.", extra: ["lakhs"] },
    { en: "Sorry, did you say fifteen lakh or fifty lakh?", te: "సారీ, పదిహేను లక్షలు అన్నారా, యాభై లక్షలు అన్నారా?", extra: ["said"] },
    { en: "The house costs about one and a half crore rupees.", te: "ఆ ఇంటి ధర సుమారు ఒకటిన్నర కోటి రూపాయలు.", extra: ["crores"] },
    { en: "Lakhs of people visit Tirupati every month.", te: "ప్రతి నెలా లక్షల మంది తిరుపతి వెళ్తారు.", extra: ["lakh"] },
    { en: "How much is one and a half crore in millions?", te: "ఒకటిన్నర కోటి అంటే మిలియన్లలో ఎంత?", extra: ["many"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find a big price in the newspaper or on a board, and say it two ways: in lakh, and in thousands or millions.",
    te: "పేపర్‌లో గానీ బోర్డు మీద గానీ ఒక పెద్ద ధర చూసి, రెండు రకాలుగా చెప్పండి: లక్షల్లో, తర్వాత thousand లేదా million లో.",
  },
  words: [
    { en: "hundred thousand", te: "వంద వేలు, ఒక లక్ష" },
    { en: "one and a half", te: "ఒకటిన్నర" },
    { en: "two and a half", te: "రెండున్నర" },
    { en: "lakhs of", te: "లక్షల కొద్దీ, లక్షల మంది" },
    { en: "in millions", te: "మిలియన్లలో" },
  ],
  grammar: ["big-numbers", "plurals-countable", "articles"],
  topics: ["money", "phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Halves in big numbers", te: "పెద్ద సంఖ్యల్లో సగం" },
      body: {
        en: "You know one lakh is one hundred thousand. For a half more, say one and a half lakh. Ten lakh is one million, so fifteen lakh is one point five million.",
        te: "లక్ష అంటే one hundred thousand అని మీకు తెలుసు. సగం ఎక్కువైతే one and a half lakh అనండి. పది లక్షలు ఒక million, కాబట్టి పదిహేను లక్షలు one point five million.",
      },
      bridge: {
        te: ["ఒకటిన్నర లక్ష", "అంటే", "నూట యాభై వేలు"],
        en: [
          { text: "One and a half lakh", role: "who" },
          { text: "is", role: "action" },
          { text: "one hundred and fifty thousand", role: "what" },
        ],
      },
      examples: [
        { en: "One and a half lakh is one hundred and fifty thousand.", te: "ఒకటిన్నర లక్ష అంటే నూట యాభై వేలు." },
        { en: "Ten lakh is the same as one million.", te: "పది లక్షలు, ఒక మిలియన్ రెండూ ఒకటే." },
        { en: "Fifteen lakh is one point five million.", te: "పదిహేను లక్షలు అంటే ఒకటిన్నర మిలియన్." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Lakh or million?", te: "లక్షా, మిలియనా?" },
      items: [
        {
          form: "one and a half lakh",
          useFor: { en: "Half more than one lakh, the Indian way.", te: "ఒక లక్ష కంటే సగం ఎక్కువ, మన పద్ధతిలో." },
          example: { en: "The car costs about seven and a half lakh rupees.", te: "ఆ కారు ధర సుమారు ఏడున్నర లక్షల రూపాయలు." },
        },
        {
          form: "one point five million",
          useFor: { en: "The same idea with point, for friends abroad.", te: "అదే లెక్క point తో, విదేశాల్లో ఉండే స్నేహితుల కోసం." },
          example: { en: "Fifteen lakh is one point five million.", te: "పదిహేను లక్షలు అంటే ఒకటిన్నర మిలియన్." },
        },
        {
          form: "lakhs of …",
          useFor: { en: "Very many, with no number before it. Only then lakh takes s.", te: "చాలా ఎక్కువ అని, ముందు సంఖ్య లేకుండా. అప్పుడు మాత్రమే lakh కి s వస్తుంది." },
          example: { en: "Lakhs of people visit Tirupati every month.", te: "ప్రతి నెలా లక్షల మంది తిరుపతి వెళ్తారు." },
        },
        {
          form: "Did you say … or …?",
          useFor: { en: "Check a big number you did not catch.", te: "సరిగ్గా వినపడని పెద్ద సంఖ్యని నిర్ధారించుకోవడానికి." },
          example: { en: "Sorry, did you say fifteen lakh or fifty lakh?", te: "సారీ, పదిహేను లక్షలు అన్నారా, యాభై లక్షలు అన్నారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "plural",
      wrong: "It costs two and a half lakhs rupees.",
      right: "It costs two and a half lakh rupees.",
      why: {
        en: "Telugu says రెండున్నర లక్షలు, but after a number, even with a half, lakh has no s.",
        te: "తెలుగులో 'రెండున్నర లక్షలు' అంటాం; కానీ సంఖ్య తర్వాత, సగం ఉన్నా, lakh కి s రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Ten lakh is same as one million.",
      right: "Ten lakh is the same as one million.",
      why: {
        en: "Same always needs the before it; Telugu ఒకటే has no such word, so the gets lost.",
        te: "same ముందు ఎప్పుడూ the కావాలి; తెలుగు 'ఒకటే' లో అలాంటి పదం లేదు, అందుకే the మర్చిపోతాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Your friend in London counts in millions. Ask what one and a half crore is in millions.",
        te: "లండన్‌లో ఉండే మీ స్నేహితులు millions లో లెక్కపెడతారు. ఒకటిన్నర కోటి millions లో ఎంతో అడగండి.",
      },
      options: [
        "How much is one and a half crore in millions?",
        "How much one and a half crore is in millions?",
        "How many is one and a half crore in millions?",
      ],
      answer: 0,
      why: {
        en: "In a how much question, is comes before the amount; Telugu keeps the statement order.",
        te: "how much ప్రశ్నలో is మొత్తం కంటే ముందు వస్తుంది; తెలుగులో వాక్యం వరుస మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Ten lakh is the same ___ one million.",
      te: "పది లక్షలు, ఒక మిలియన్ రెండూ ఒకటే.",
      options: ["as", "like", "to"],
      answer: 0,
      why: {
        en: "The same is always followed by as, never by like or to.",
        te: "the same తర్వాత ఎప్పుడూ as వస్తుంది; like గానీ to గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "A friend abroad asks: How much is fifteen lakh? Choose the right answer.",
        te: "విదేశంలో ఉండే స్నేహితులు అడుగుతున్నారు: How much is fifteen lakh? సరైన జవాబు ఎంచుకోండి.",
      },
      options: ["One point five million", "Fifteen million", "One hundred and fifty thousand"],
      answer: 0,
      why: {
        en: "Ten lakh makes one million, and the other five lakh is half a million more.",
        te: "పది లక్షలు ఒక million; మిగతా ఐదు లక్షలు ఇంకో అర million.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Lakhs of people visit Tirupati every months.",
      wrongIndex: 6,
      fix: "Lakhs of people visit Tirupati every month.",
      why: {
        en: "Every is followed by one thing, so month has no s here.",
        te: "every తర్వాత ఒక్కటే వస్తుంది, అందుకే ఇక్కడ month కి s రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "A friend abroad asks the price of a new car in your town. It is seven and a half lakh rupees. Answer.",
        te: "విదేశంలో ఉండే స్నేహితులు మీ ఊర్లో కొత్త కారు ధర అడుగుతున్నారు. ఏడున్నర లక్షల రూపాయలు. జవాబు చెప్పండి.",
      },
      expected: [
        "It costs seven and a half lakh rupees.",
        "Seven and a half lakh rupees.",
        "It's about seven and a half lakh rupees.",
        "It costs about seven and a half lakh.",
      ],
      options: ["It costs seven and a half lakh rupees.", "It costs seven and a half lakhs rupees.", "It is costing seven and a half lakh rupees."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "On a video call, you did not catch a price. Was it fifteen lakh or fifty lakh? Ask.",
        te: "video call లో ఒక ధర సరిగ్గా వినపడలేదు. పదిహేను లక్షలా, యాభై లక్షలా? అడగండి.",
      },
      expected: [
        "Sorry, did you say fifteen lakh or fifty lakh?",
        "Sorry, was it fifteen lakh or fifty lakh?",
        "Did you say fifteen or fifty lakh?",
      ],
      options: [
        "Sorry, did you say fifteen lakh or fifty lakh?",
        "Sorry, what you said, fifteen lakh or fifty lakh?",
        "Sorry, did you said fifteen lakh or fifty lakh?",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A video call from London", te: "లండన్ నుంచి video call" },
    scene: {
      en: "Your friend Fatima lives in London. On a video call, she asks about a flat for sale near your house.",
      te: "మీ స్నేహితురాలు ఫాతిమా గారు లండన్‌లో ఉంటారు. video call లో, మీ ఇంటి దగ్గర అమ్మకానికి ఉన్న ఫ్లాట్ గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Fatima (a friend in London)", te: "ఫాతిమా (లండన్‌లో ఉండే స్నేహితురాలు)" },
    skills: [
      { id: "numbers", label: { en: "Big numbers", te: "పెద్ద సంఖ్యలు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Can you hear me clearly?",
        te: "హలో! నా మాట స్పష్టంగా వినపడుతోందా?",
        hint: { en: "Say yes, and ask how she is.", te: "వినపడుతోందని చెప్పి, ఆవిడ ఎలా ఉన్నారో అడగండి." },
        replies: [
          { say: "Yes, I can hear you clearly. How are you?", good: true, skill: "polite" },
          {
            say: "Yes, yes. Tell me quickly, I'm busy.",
            good: false,
            skill: "polite",
            react: { en: "Oh, sorry! I'll be quick.", te: "అయ్యో, సారీ! త్వరగా చెప్తాను." },
          },
        ],
      },
      {
        partner: "I'm fine. How much is the flat near your house?",
        te: "నేను బాగున్నాను. మీ ఇంటి దగ్గర ఫ్లాట్ ధర ఎంత?",
        hint: { en: "Tell her the price: 1.5 crore, said the Indian way.", te: "ధర చెప్పండి: 1.5 కోట్లు, మన పద్ధతిలో." },
        replies: [
          { say: "It costs one and a half crore rupees.", good: true, skill: "numbers" },
          { say: "It's about one and a half crore.", good: true, skill: "numbers" },
          { say: "It costs one and a half crores rupees.", good: false, skill: "numbers", fixIt: "plural" },
        ],
      },
      {
        partner: "Sorry, I count in millions now. What is that in millions?",
        te: "సారీ, ఇప్పుడు నేను millions లో లెక్కపెడతాను. millions లో అది ఎంత?",
        hint: { en: "Work it out: one crore is ten million. Tell her.", te: "లెక్క వేయండి: ఒక కోటి అంటే పది million. ఆవిడకి చెప్పండి." },
        replies: [
          { say: "It's fifteen million rupees.", good: true, skill: "numbers" },
          {
            say: "It's one point five million rupees.",
            good: false,
            skill: "numbers",
            react: { en: "One point five million? That's only fifteen lakh!", te: "ఒకటిన్నర మిలియనా? అది పదిహేను లక్షలే కదా!" },
          },
        ],
      },
      {
        partner: "That's a lot! Please send me some photos. Talk to you soon!",
        te: "చాలా ఎక్కువే! కొన్ని ఫోటోలు పంపండి. మళ్ళీ మాట్లాడదాం!",
        hint: { en: "Agree, say when you will send them, and say goodbye.", te: "సరే అని, ఎప్పుడు పంపుతారో చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Of course. I'll send them this evening. Take care!", good: true, skill: "polite" },
          { say: "Of course. I'll sending them this evening. Take care!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
