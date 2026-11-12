import type { Lesson } from "../../types";

/** Week 56, Day 5 (CURRICULUM §5): the passive for local products — Kondapalli toys are made from soft wood. Guntur chillies are sent all over the world. */
export const day: Lesson = {
  id: "famous-products-of-our-region",
  kind: "lesson",
  title: { en: "Famous Products", te: "మన ప్రాంతం ప్రత్యేకతలు" },
  subtitle: "is made from, is known for",
  summary: {
    en: "Learn to tell visitors about the famous things of our region: Kondapalli toys are made from soft wood. Guntur chillies are sent all over the world.",
    te: "మన ప్రాంతంలో పేరున్న వస్తువుల గురించి అతిథులకి చెప్పడం నేర్చుకుందాం: Kondapalli toys are made from soft wood. Guntur chillies are sent all over the world.",
  },
  seo: {
    title: "Talking About Famous Local Products in English for Telugu Speakers",
    description:
      "Say Kondapalli toys are made from soft wood and Guntur chillies are sent all over the world. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "Kondapalli toys", role: "who" },
    { text: "are made", role: "action" },
    { text: "from soft wood", role: "what" },
  ],
  core: [
    { en: "Kondapalli toys are made from soft wood.", te: "కొండపల్లి బొమ్మలు మెత్తటి చెక్కతో చేస్తారు.", extra: ["is"] },
    { en: "Guntur chillies are sent all over the world.", te: "గుంటూరు మిరపకాయలు ప్రపంచమంతా పంపిస్తారు.", extra: ["send"] },
    { en: "Kakinada is known for its kaja.", te: "కాకినాడ కాజాకి పేరుపొందింది.", extra: ["by"] },
    { en: "Araku coffee is grown in the hills.", te: "అరకు కాఫీ కొండల్లో పండిస్తారు.", extra: ["are"] },
    { en: "These toys are painted by hand.", te: "ఈ బొమ్మలకి చేత్తోనే రంగులు వేస్తారు.", extra: ["paint"] },
    { en: "Many of these toys are bought by tourists.", te: "ఈ బొమ్మలు ఎక్కువగా టూరిస్టులు కొంటారు.", extra: ["buy"] },
    { en: "Guntur is known for its big chilli market.", te: "గుంటూరు పెద్ద మిరపకాయల మార్కెట్‌కి పేరుపొందింది.", extra: ["with"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one thing your town is known for. Say it aloud: My town is known for …",
    te: "మీ ఊరికి దేనితో పేరుందో ఆలోచించండి. గట్టిగా చెప్పండి: My town is known for …",
  },
  words: [
    { en: "made from", te: "… తో చేసిన" },
    { en: "wooden", te: "చెక్కతో చేసిన" },
    { en: "toys", te: "బొమ్మలు" },
    { en: "craft", te: "చేతిపని, చేతివృత్తి" },
    { en: "all over the world", te: "ప్రపంచమంతా" },
  ],
  grammar: ["passive-voice", "articles", "prepositions"],
  topics: ["people", "shopping", "travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Our famous products", te: "మన ప్రసిద్ధ వస్తువులు" },
      body: {
        en: "To describe a product, say what it is made from, where it is sent, or what a place is known for: Kondapalli toys are made from soft wood.",
        te: "ఒక వస్తువు గురించి చెప్పాలంటే, దేనితో చేస్తారో, ఎక్కడికి పంపిస్తారో, ఒక ఊరికి దేనితో పేరో చెప్పండి: Kondapalli toys are made from soft wood.",
      },
      bridge: {
        te: ["కొండపల్లి బొమ్మలు", "మెత్తటి చెక్కతో", "చేస్తారు"],
        en: [
          { text: "Kondapalli toys", role: "who" },
          { text: "are made", role: "action" },
          { text: "from soft wood", role: "what" },
        ],
      },
      examples: [
        { en: "Kondapalli toys are made from soft wood.", te: "కొండపల్లి బొమ్మలు మెత్తటి చెక్కతో చేస్తారు." },
        { en: "Guntur chillies are sent all over the world.", te: "గుంటూరు మిరపకాయలు ప్రపంచమంతా పంపిస్తారు." },
        { en: "Kakinada is known for its kaja.", te: "కాకినాడ కాజాకి పేరుపొందింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "made in, made from, known for", te: "made in, made from, known for తేడా" },
      items: [
        {
          form: "made in + place",
          useFor: { en: "Where it is made.", te: "ఎక్కడ తయారవుతుందో." },
          example: { en: "These toys are made in Kondapalli, near Vijayawada.", te: "ఈ బొమ్మలు విజయవాడ దగ్గర కొండపల్లిలో తయారవుతాయి." },
        },
        {
          form: "made from + material",
          useFor: { en: "The material: wood, cotton, clay.", te: "దేనితో చేశారో: చెక్క, కాటన్, మట్టి." },
          example: { en: "These lamps are made from clay.", te: "ఈ దీపాలు మట్టితో చేస్తారు." },
        },
        {
          form: "sent to / sent all over",
          useFor: { en: "Where it goes after it is made.", te: "తయారయ్యాక ఎక్కడికి పంపిస్తారో." },
          example: { en: "Guntur chillies are sent all over the world.", te: "గుంటూరు మిరపకాయలు ప్రపంచమంతా పంపిస్తారు." },
        },
        {
          form: "known for",
          useFor: { en: "Why a place is famous.", te: "ఒక ఊరికి దేనితో పేరో." },
          example: { en: "Kakinada is known for its kaja.", te: "కాకినాడ కాజాకి పేరుపొందింది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Kakinada is known by its kaja.",
      right: "Kakinada is known for its kaja.",
      why: {
        en: "Known and famous take for before the reason, never by or with.",
        te: "known, famous తర్వాత కారణం ముందు for మాత్రమే వస్తుంది; by గానీ with గానీ రావు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Guntur has biggest chilli market in Asia.",
      right: "Guntur has the biggest chilli market in Asia.",
      why: {
        en: "Biggest, best and cheapest always take the before them; Telugu has no such word.",
        te: "biggest, best, cheapest లాంటి పదాల ముందు ఎప్పుడూ the కావాలి; తెలుగులో అలాంటి పదం లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "A visitor asks about Prasad, an old toy maker in Kondapalli. Say he paints every toy by hand.",
        te: "కొండపల్లిలో బొమ్మలు చేసే పెద్దాయన ప్రసాద్ గారి గురించి ఒక visitor అడుగుతున్నారు. ఆయన ప్రతి బొమ్మకి చేత్తోనే రంగు వేస్తారని చెప్పండి.",
      },
      options: ["He paints every toy by hand.", "He paint every toy by hand.", "He is paint every toy by hand."],
      answer: 0,
      why: {
        en: "One person, like he, takes s on the verb for a habit.",
        te: "ఒక్కరి అలవాటు గురించి, he లాగా, చెప్తే verb కి s వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Kondapalli toys are made ___ soft wood.",
      te: "కొండపల్లి బొమ్మలు మెత్తటి చెక్కతో చేస్తారు.",
      options: ["from", "by", "at"],
      answer: 0,
      why: {
        en: "For the material, use made from; by is for the person who makes it.",
        te: "దేనితో చేశారో చెప్పడానికి made from; by అయితే చేసిన మనిషి కోసం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "Tell a visitor that Guntur sends its chillies all over the world.",
        te: "గుంటూరు మిరపకాయలు ప్రపంచమంతా పంపిస్తారని ఒక visitor కి చెప్పండి.",
      },
      options: ["Guntur chillies are sent all over the world.", "Guntur chillies is sent all over the world.", "Guntur chilli are sent all over the world."],
      answer: 0,
      why: {
        en: "Chillies are many, so use are, and chilli changes to chillies.",
        te: "మిరపకాయలు చాలా కాబట్టి are; chilli కాస్తా chillies అవుతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "These toys are sold in all over the world.",
      wrongIndex: 4,
      fix: "These toys are sold all over the world.",
      why: {
        en: "All over the world needs no in before it; it already means everywhere.",
        te: "all over the world ముందు in అక్కర్లేదు; దానికే 'అన్ని చోట్లా' అని అర్థం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You are showing a visitor around Vijayawada. Tell her Kondapalli toys are made nearby.",
        te: "మీరు ఒక అతిథికి విజయవాడ చూపిస్తున్నారు. కొండపల్లి బొమ్మలు దగ్గర్లోనే తయారవుతాయని ఆవిడకి చెప్పండి.",
      },
      expected: ["Kondapalli toys are made near here.", "Kondapalli toys are made near Vijayawada.", "These toys are made in Kondapalli, near here."],
      options: ["Kondapalli toys are made near here.", "Kondapalli toys made near here.", "Kondapalli toys are make near here."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "The visitor asks if Araku coffee is good. Say yes, and say it is grown in the hills.",
        te: "అరకు కాఫీ బాగుంటుందా అని అతిథి అడుగుతున్నారు. బాగుంటుందని, అది కొండల్లో పండిస్తారని చెప్పండి.",
      },
      expected: ["Yes, it's grown in the hills.", "Yes, Araku coffee is grown in the hills.", "Yes, it's very good. It's grown in the hills."],
      options: ["Yes, it's grown in the hills.", "Yes, it's grow in the hills.", "Yes, it growing in the hills."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Kondapalli toys", te: "కొండపల్లి బొమ్మలు" },
    scene: {
      en: "You are at a craft shop in Vijayawada. Mary, a visitor from Mumbai, picks up a painted toy and asks you about it.",
      te: "మీరు విజయవాడలో ఒక హస్తకళల షాపులో ఉన్నారు. ముంబై నుంచి వచ్చిన మేరీ గారు రంగుల బొమ్మ ఒకటి చేతిలోకి తీసుకుని దాని గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Mary (a visitor)", te: "మేరీ (ఊరికి వచ్చిన అతిథి)" },
    skills: [
      { id: "tell", label: { en: "Telling about local crafts", te: "మన చేతివృత్తుల గురించి చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "These toys are so pretty! What are they?",
        te: "ఈ బొమ్మలు ఎంత బాగున్నాయో! ఇవేంటి?",
        hint: { en: "Give the name of the toys, and the place near Vijayawada.", te: "బొమ్మల పేరు, విజయవాడ దగ్గర ఊరి పేరు చెప్పండి." },
        replies: [
          { say: "They're Kondapalli toys. They're made near Vijayawada.", good: true, skill: "tell" },
          { say: "They're Kondapalli toys. They made near Vijayawada.", good: false, skill: "tell", fixIt: "be" },
        ],
      },
      {
        partner: "Really? What are they made from?",
        te: "నిజమా? వీటిని దేనితో చేస్తారు?",
        hint: { en: "Say the material: a soft, light wood.", te: "దేనితో చేస్తారో చెప్పండి: మెత్తటి, తేలికైన చెక్క." },
        replies: [
          { say: "They're made from a soft, light wood.", good: true, skill: "tell" },
          { say: "They're made by a soft, light wood.", good: false, skill: "tell", fixIt: "preposition" },
        ],
      },
      {
        partner: "And the colours? Are they painted by a machine?",
        te: "మరి రంగులు? మెషిన్‌తో వేస్తారా?",
        hint: { en: "Say no; the toy makers paint each one by hand.", te: "లేదని చెప్పండి; బొమ్మలు చేసేవాళ్ళు ఒక్కోదానికి చేత్తోనే రంగు వేస్తారు." },
        replies: [
          { say: "No, each toy is painted by hand.", good: true, skill: "tell" },
          { say: "No, each toys are painted by hand.", good: false, skill: "tell", fixIt: "plural" },
          {
            say: "Machine? Don't you know anything about our crafts?",
            good: false,
            skill: "polite",
            react: { en: "Sorry, this is my first visit here. Please tell me.", te: "సారీ, ఇక్కడికి రావడం ఇదే మొదటిసారి. మీరే చెప్పండి." },
          },
        ],
      },
      {
        partner: "Wonderful! Thank you for telling me all this.",
        te: "అద్భుతం! ఇవన్నీ చెప్పినందుకు థాంక్స్.",
        hint: { en: "Say you are happy to help, and wish her a nice visit.", te: "సంతోషమేనని చెప్పి, ఆవిడ పర్యటన బాగా జరగాలని చెప్పండి." },
        replies: [
          { say: "My pleasure. Enjoy your visit to Vijayawada!", good: true, skill: "polite" },
          { say: "My pleasure. Enjoy your visit to the Vijayawada!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
