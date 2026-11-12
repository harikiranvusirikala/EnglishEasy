import type { Lesson } from "../../types";

/**
 * Week 80, Day 5 (CURRICULUM §5): the speaking mission lesson — my town in two minutes, with the present perfect for
 * change (Week 71), the present perfect passive (Week 75), if + would (Week 69) and should.
 */
export const day: Lesson = {
  id: "my-town-in-two-minutes",
  kind: "lesson",
  title: { en: "My Town in Two Minutes", te: "రెండు నిమిషాల్లో మా ఊరు" },
  subtitle: "a two-minute talk about your town",
  summary: {
    en: "Get ready to talk for two minutes about your town: how it has changed, what hasn't been done, what would help, and a kind ending.",
    te: "మీ ఊరి గురించి రెండు నిమిషాలు మాట్లాడటానికి సిద్ధమవుదాం: ఎలా మారింది, ఏ పనులు జరగలేదు, ఏం చేస్తే బాగుంటుంది, చివర్లో ఒక మంచి మాట.",
  },
  seo: {
    title: "Talking About Your Town in English for Telugu Speakers",
    description:
      "Say Our town has grown a lot and If we had more buses, fewer people would drive. A lesson for Telugu speakers on a two-minute talk.",
  },
  pattern: [
    { text: "Our town", role: "who" },
    { text: "has grown", role: "action" },
    { text: "a lot", role: "what" },
    { text: "in twenty years", role: "when" },
  ],
  core: [
    { en: "Our town has grown a lot in twenty years.", te: "ఇరవై ఏళ్ళలో మా ఊరు చాలా పెరిగింది.", extra: ["grow"] },
    { en: "The roads haven't been repaired since the rains.", te: "వర్షాలు పడ్డప్పటి నుంచి రోడ్లు బాగు చేయలేదు.", extra: ["for"] },
    { en: "If we had more buses, fewer people would drive.", te: "బస్సులు ఎక్కువ ఉంటే, తక్కువ మంది సొంత బండ్లు నడుపుతారు.", extra: ["will"] },
    { en: "Our town needs better public transport.", te: "మా ఊరికి ఇంకా మంచి బస్సు, రైలు సౌకర్యాలు కావాలి.", extra: ["need"] },
    { en: "Traffic has become a big problem near the market.", te: "మార్కెట్ దగ్గర ట్రాఫిక్ పెద్ద సమస్య అయిపోయింది.", extra: ["becomes"] },
    { en: "Many new houses have been built on the outskirts.", te: "ఊరి శివార్లలో చాలా కొత్త ఇళ్ళు కట్టారు.", extra: ["build"] },
    { en: "In short, it's a good town, but it needs care.", te: "మొత్తానికి, మంచి ఊరే, కానీ కొంచెం శ్రద్ధ కావాలి.", extra: ["need"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Talk about your town for two minutes, aloud, with a clock: how it has changed, one problem, what would help, and In short.",
    te: "గడియారం చూసుకుంటూ మీ ఊరి గురించి రెండు నిమిషాలు గట్టిగా మాట్లాడండి: ఎలా మారింది, ఒక సమస్య, ఏం చేస్తే బాగుంటుంది, చివర్లో In short.",
  },
  words: [
    { en: "public transport", te: "బస్సు, రైలు లాంటి ప్రజా రవాణా" },
    { en: "footpath", te: "ఫుట్‌పాత్, రోడ్డు పక్కన నడిచే దారి" },
    { en: "pollution", te: "కాలుష్యం" },
    { en: "outskirts", te: "ఊరి శివార్లు" },
    { en: "in short", te: "మొత్తానికి, క్లుప్తంగా" },
  ],
  grammar: ["present-perfect", "passive-voice", "conditionals", "should-must-have-to"],
  topics: ["transport", "neighbours", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Your town in two minutes", te: "రెండు నిమిషాల్లో మీ ఊరు" },
      body: {
        en: "Talk in four parts. How it has changed: has grown. What hasn't been done: haven't been repaired. What would help: If we had …, … would …. Then end kindly with In short.",
        te: "నాలుగు భాగాలుగా చెప్పండి. ఎలా మారింది: has grown. ఏ పని జరగలేదు: haven't been repaired. ఏం చేస్తే బాగుంటుంది: If we had …, … would …. చివర్లో In short తో మంచి మాట చెప్పండి.",
      },
      bridge: {
        te: ["ఇరవై ఏళ్ళలో", "మా ఊరు", "చాలా", "పెరిగింది"],
        en: [
          { text: "Our town", role: "who" },
          { text: "has grown", role: "action" },
          { text: "a lot", role: "what" },
          { text: "in twenty years", role: "when" },
        ],
      },
      examples: [
        { en: "Our town has grown a lot in twenty years.", te: "ఇరవై ఏళ్ళలో మా ఊరు చాలా పెరిగింది." },
        { en: "The roads haven't been repaired since the rains.", te: "వర్షాలు పడ్డప్పటి నుంచి రోడ్లు బాగు చేయలేదు." },
        { en: "If we had more buses, fewer people would drive.", te: "బస్సులు ఎక్కువ ఉంటే, తక్కువ మంది సొంత బండ్లు నడుపుతారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "The four parts of your talk", te: "మీ మాటల్లో నాలుగు భాగాలు" },
      items: [
        {
          form: "Change: has become, has grown",
          useFor: { en: "How the town is different now.", te: "ఇప్పుడు ఊరు ఎలా మారిందో." },
          example: { en: "Traffic has become a big problem near the market.", te: "మార్కెట్ దగ్గర ట్రాఫిక్ పెద్ద సమస్య అయిపోయింది." },
        },
        {
          form: "Problem: hasn't been + -ed",
          useFor: { en: "What nobody has done yet.", te: "ఇంకా ఎవరూ చేయని పని." },
          example: { en: "The old canal hasn't been cleaned for years.", te: "ఏళ్ళుగా పాత కాలువని శుభ్రం చేయలేదు." },
        },
        {
          form: "Idea: If we had …, … would …",
          useFor: { en: "What would help, if things were different.", te: "పరిస్థితి వేరేగా ఉంటే ఏం బాగుంటుందో." },
          example: { en: "If we had a proper footpath, elders would walk safely.", te: "సరైన ఫుట్‌పాత్ ఉంటే, పెద్దవాళ్ళు భయం లేకుండా నడుస్తారు." },
        },
        {
          form: "End: In short, …",
          useFor: { en: "Sum up in one kind sentence.", te: "ఒక్క మంచి వాక్యంలో మొత్తం చెప్పడం." },
          example: { en: "In short, it's a good town, but it needs care.", te: "మొత్తానికి, మంచి ఊరే, కానీ కొంచెం శ్రద్ధ కావాలి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "plural",
      wrong: "There are many vehicle on the road now.",
      right: "There are many vehicles on the road now.",
      why: {
        en: "After many, a word you can count takes s, just as Telugu says వాహనాలు, not వాహనం.",
        te: "many తర్వాత లెక్కపెట్టే పదానికి s వస్తుంది; తెలుగులో కూడా 'వాహనం' కాదు, 'వాహనాలు' అంటాం కదా.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Pollution is big problem in our town.",
      right: "Pollution is a big problem in our town.",
      why: {
        en: "One problem needs a before it; Telugu has no word like a, so we drop it.",
        te: "ఒక problem కాబట్టి ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు, అందుకే వదిలేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "The road to the bus stand went bad in the rains, and it is still bad. Say so.",
        te: "బస్ స్టాండ్ రోడ్డు వర్షాల్లో పాడైంది, ఇప్పటికీ అలాగే ఉంది. ఆ మాట చెప్పండి.",
      },
      options: [
        "The road has been bad since the rains.",
        "The road is bad since the rains.",
        "The road has been bad from the rains.",
      ],
      answer: 0,
      why: {
        en: "A problem that began earlier and is still there takes has been, and the starting point takes since.",
        te: "ముందే మొదలై ఇప్పటికీ ఉన్న సమస్యకి has been; మొదలైన సమయానికి since వాడాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Many new flats ___ built near the highway.",
      te: "హైవే దగ్గర చాలా కొత్త ఫ్లాట్లు కట్టారు.",
      options: ["have been", "has been", "have"],
      answer: 0,
      why: {
        en: "Flats is more than one, so it takes have been; the flats did not build themselves.",
        te: "flats ఒకటి కంటే ఎక్కువ, అందుకే have been; ఫ్లాట్లు తమంతట తామే కట్టుకోలేదు కదా.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "End your talk with a short, kind summary.",
        te: "మీ మాటల్ని ఒక చిన్న, మంచి ముగింపుతో ముగించండి.",
      },
      options: [
        "In short, our town is lovely, but it needs some care.",
        "In short, our town is lovely, but it need some care.",
        "In short, nothing works here, and nobody cares.",
      ],
      answer: 0,
      why: {
        en: "A good ending sums up kindly and with hope; one town, like he or she, takes needs.",
        te: "మంచి ముగింపు ఆశతో, మర్యాదగా ఉండాలి; ఒక్క town (he, she లాగా), అందుకే needs.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Most shops in our town are in the main road.",
      wrongIndex: 6,
      fix: "Most shops in our town are on the main road.",
      why: {
        en: "A shop is on a road or a street; Telugu రోడ్డులో makes us say in.",
        te: "షాపు రోడ్డు మీద ఉంటుంది, అందుకే on; తెలుగు 'రోడ్డులో' వల్ల in అనేస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "A friend from Chennai asks about your town now. Say the traffic is very heavy these days.",
        te: "చెన్నై నుంచి ఒక స్నేహితులు ఇప్పుడు మీ ఊరు ఎలా ఉందని అడుగుతున్నారు. ఈ మధ్య ట్రాఫిక్ చాలా ఎక్కువగా ఉందని చెప్పండి.",
      },
      expected: ["The traffic is very heavy these days.", "Traffic is very heavy now.", "The traffic is really bad these days."],
      options: ["The traffic is very heavy these days.", "The traffic very heavy these days.", "The traffic is very heavy since these days."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "At the end of your talk, ask your friend for her ideas about what would help.",
        te: "మీ మాటలు అయిపోయాక, ఏం చేస్తే బాగుంటుందని స్నేహితురాలి అభిప్రాయం అడగండి.",
      },
      expected: ["What do you think would help?", "What would you suggest?", "What do you think?"],
      options: ["What do you think would help?", "What you think would help?", "What do you think would helping?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "My town in two minutes", te: "రెండు నిమిషాల్లో మా ఊరు" },
    scene: {
      en: "At the senior citizens' club, your friend Usha keeps time while you talk about your town. You have two minutes.",
      te: "సీనియర్ సిటిజన్స్ క్లబ్‌లో మీరు మీ ఊరి గురించి మాట్లాడుతున్నారు; మీ స్నేహితురాలు ఉష గారు టైమ్ చూస్తున్నారు. మీకు రెండు నిమిషాలు ఉన్నాయి.",
    },
    partner: { en: "Usha (your friend)", te: "ఉష (మీ స్నేహితురాలు)" },
    skills: [
      { id: "talk", label: { en: "Talking about your town", te: "మీ ఊరి గురించి మాట్లాడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Ready? Your two minutes start now. Tell us about your town.",
        te: "రెడీనా? మీ రెండు నిమిషాలు ఇప్పుడే మొదలు. మీ ఊరి గురించి చెప్పండి.",
        hint: { en: "Begin: say how long you have lived there, and how the town has changed.", te: "మొదలుపెట్టండి: ఎన్నాళ్ళుగా అక్కడ ఉంటున్నారో, ఊరు ఎలా మారిందో చెప్పండి." },
        replies: [
          { say: "I've lived in Khammam for forty years, and it has grown a lot.", good: true, skill: "talk" },
          { say: "I am living in Khammam since forty years. It grew a lot.", good: false, skill: "talk", fixIt: "duration" },
        ],
      },
      {
        partner: "And what is the biggest problem now?",
        te: "మరి ఇప్పుడు అన్నిటికంటే పెద్ద సమస్య ఏంటి?",
        hint: { en: "Name one problem, and say it hasn't been fixed.", te: "ఒక సమస్య చెప్పి, అది ఇంకా బాగు చేయలేదని చెప్పండి." },
        replies: [
          { say: "The roads haven't been repaired since the rains.", good: true, skill: "talk" },
          { say: "The drains haven't been cleaned for months.", good: true, skill: "talk" },
          { say: "The roads not repaired since the rains.", good: false, skill: "talk", fixIt: "be" },
        ],
      },
      {
        partner: "What would help, in your opinion?",
        te: "మీ అభిప్రాయంలో, ఏం చేస్తే బాగుంటుంది?",
        hint: { en: "Say what would change if the town had more buses.", te: "ఊరికి బస్సులు ఎక్కువ ఉంటే ఏం మారుతుందో చెప్పండి." },
        replies: [
          { say: "If we had more buses, fewer people would drive.", good: true, skill: "talk" },
          { say: "If we had more buses, the roads would be less crowded.", good: true, skill: "talk" },
          {
            say: "Nothing will help. This town is hopeless.",
            good: false,
            skill: "polite",
            react: { en: "Oh, don't say that! Every town can get better.", te: "అయ్యో, అలా అనకండి! ఏ ఊరైనా బాగుపడొచ్చు." },
          },
        ],
      },
      {
        partner: "Time's up! That was very clear. Well done!",
        te: "టైమ్ అయిపోయింది! చాలా స్పష్టంగా చెప్పారు. శభాష్!",
        hint: { en: "Thank her, and ask if you spoke too fast.", te: "థాంక్స్ చెప్పి, మరీ వేగంగా మాట్లాడానా అని అడగండి." },
        replies: [
          { say: "Thank you! Was I speaking too fast?", good: true, skill: "polite" },
          { say: "Thank you! Did I speak too fast?", good: true, skill: "polite" },
          { say: "Thank you! I was speaking too fast, no?", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
