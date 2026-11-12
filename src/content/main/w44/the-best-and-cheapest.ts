import type { Lesson } from "../../types";

/** Week 44, Day 2 (CURRICULUM §5): superlatives with -est and most — This is the cheapest shirt in the shop. */
export const day: Lesson = {
  id: "the-best-and-cheapest",
  kind: "lesson",
  title: { en: "The Best, The Cheapest", te: "అన్నిటికంటే" },
  subtitle: "the cheapest, the most beautiful",
  summary: {
    en: "Learn to say which one is the best of all: This is the cheapest shirt in the shop.",
    te: "అన్నిటికంటే ఏది ఎక్కువో చెప్పడం నేర్చుకుందాం: This is the cheapest shirt in the shop.",
  },
  seo: {
    title: "Saying the Best and the Cheapest in English for Telugu Speakers",
    description:
      "Say This is the cheapest shirt in the shop and That's the most beautiful saree here. Simple lessons for Telugu speakers on the best of all.",
  },
  pattern: [
    { text: "This", role: "who" },
    { text: "is", role: "action" },
    { text: "the cheapest shirt", role: "what" },
    { text: "in the shop", role: "what" },
  ],
  core: [
    { en: "This is the cheapest shirt in the shop.", te: "ఈ షాపులో అన్నిటికంటే చవకైన చొక్కా ఇదే.", extra: ["cheaper"] },
    { en: "That's the most beautiful saree here.", te: "ఇక్కడ అన్నిటికంటే అందమైన చీర అదే.", extra: ["more"] },
    { en: "Which one is the best?", te: "వీటిలో ఏది అన్నిటికంటే మంచిది?", extra: ["good"] },
    { en: "Can I see the cheapest one, please?", te: "అన్నిటికంటే చవకైనది ఒకసారి చూడొచ్చా?", extra: ["cheap"] },
    { en: "This is the latest design, and the most expensive.", te: "ఇది సరికొత్త డిజైన్, అన్నిటికంటే ఖరీదైనది కూడా.", extra: ["much"] },
    { en: "This is the biggest cloth shop in our town.", te: "మా ఊర్లో అన్నిటికంటే పెద్ద బట్టల షాపు ఇదే.", extra: ["bigger"] },
    { en: "Which shop has the best price for silk sarees?", te: "పట్టు చీరలకి ఏ షాపులో అన్నిటికంటే మంచి ధర ఉంటుంది?", extra: ["have"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at three things at home, like cups or pens. Say aloud which one is the biggest and which is the smallest.",
    te: "ఇంట్లో కప్పులు, పెన్నులు లాంటి మూడు వస్తువులు చూడండి. ఏది అన్నిటికంటే పెద్దదో, ఏది అన్నిటికంటే చిన్నదో గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "best", te: "అన్నిటికంటే మంచిది" },
    { en: "cheapest", te: "అన్నిటికంటే చవక" },
    { en: "most expensive", te: "అన్నిటికంటే ఖరీదైనది" },
    { en: "latest", te: "సరికొత్త" },
    { en: "design", te: "డిజైన్" },
  ],
  grammar: ["comparatives-superlatives", "articles"],
  topics: ["shopping", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "The best of all", te: "అన్నిటికంటే" },
      body: {
        en: "For two things, you know cheaper than. For three or more, say the + -est: the cheapest. Long words take the most: the most beautiful.",
        te: "రెండింటికి cheaper than అని మీకు తెలుసు. మూడు, అంతకంటే ఎక్కువ ఉంటే the + -est: the cheapest. పెద్ద పదాలకి the most: the most beautiful.",
      },
      bridge: {
        te: ["ఈ షాపులో", "అన్నిటికంటే చవకైన చొక్కా", "ఇదే"],
        en: [
          { text: "This", role: "who" },
          { text: "is", role: "action" },
          { text: "the cheapest shirt", role: "what" },
          { text: "in the shop", role: "what" },
        ],
      },
      examples: [
        { en: "This is the cheapest shirt in the shop.", te: "ఈ షాపులో అన్నిటికంటే చవకైన చొక్కా ఇదే." },
        { en: "That's the most beautiful saree here.", te: "ఇక్కడ అన్నిటికంటే అందమైన చీర అదే." },
        { en: "Which one is the best?", te: "వీటిలో ఏది అన్నిటికంటే మంచిది?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "-er or -est?", te: "-er నా, -est నా?" },
      items: [
        {
          form: "cheaper than",
          useFor: { en: "Compare two things.", te: "రెండింటిని పోల్చడానికి." },
          example: { en: "This shirt is cheaper than that one.", te: "ఆ చొక్కా కంటే ఈ చొక్కా చవక." },
        },
        {
          form: "the biggest",
          useFor: { en: "One out of three or more, with a short word.", te: "మూడు, లేదా ఎక్కువ వాటిలో ఒకటి; చిన్న పదాలకి." },
          example: { en: "This is the biggest cloth shop in our town.", te: "మా ఊర్లో అన్నిటికంటే పెద్ద బట్టల షాపు ఇదే." },
        },
        {
          form: "the most …",
          useFor: { en: "Long words like beautiful and expensive.", te: "beautiful, expensive లాంటి పెద్ద పదాలకి." },
          example: { en: "That's the most beautiful saree here.", te: "ఇక్కడ అన్నిటికంటే అందమైన చీర అదే." },
        },
        {
          form: "good → the best",
          useFor: { en: "Good changes fully; nobody says goodest.", te: "good పూర్తిగా మారుతుంది; goodest అని ఎవరూ అనరు." },
          example: { en: "Which one is the best?", te: "వీటిలో ఏది అన్నిటికంటే మంచిది?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "This is the most cheapest shirt.",
      right: "This is the cheapest shirt.",
      why: {
        en: "Use -est or most, never both together; one of them is enough.",
        te: "-est లేదా most, ఏదో ఒకటే; రెండూ కలిపి వాడకూడదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "This is cheapest shirt in the shop.",
      right: "This is the cheapest shirt in the shop.",
      why: {
        en: "A word with -est always needs the before it; Telugu has no word like the.",
        te: "-est పదం ముందు ఎప్పుడూ the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "The shop has many sarees. Tell your friend the gold one is lovelier than all the others.",
        te: "షాపులో చాలా చీరలు ఉన్నాయి. బంగారు రంగుది అన్నిటికంటే అందంగా ఉందని స్నేహితులకి చెప్పండి.",
      },
      options: ["That's the most beautiful saree here.", "That's the beautifulest saree here.", "That's most beautiful saree here."],
      answer: 0,
      why: {
        en: "Long words like beautiful take the most, never -est, and the is needed.",
        te: "beautiful లాంటి పెద్ద పదాలకి -est కాదు, the most వాడాలి; the కూడా కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Which shop ___ the best price for silk sarees?",
      te: "పట్టు చీరలకి ఏ షాపులో అన్నిటికంటే మంచి ధర ఉంటుంది?",
      options: ["has", "have", "having"],
      answer: 0,
      why: {
        en: "Which shop means one shop, like he or she, so have becomes has.",
        te: "Which shop అంటే ఒక్క షాపు (he, she లాగా); అందుకే have కాదు, has.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "There are five shirts on the table. Ask which one is the best.",
        te: "టేబుల్ మీద ఐదు చొక్కాలు ఉన్నాయి. వాటిలో ఏది అన్నిటికంటే మంచిదో అడగండి.",
      },
      options: ["Which one is the best?", "Which one the best is?", "Which one is the goodest?"],
      answer: 0,
      why: {
        en: "In a question, is comes right after which one, and good changes to best.",
        te: "ప్రశ్నలో which one తర్వాతే is వస్తుంది; good కి -est కాదు, best.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "These are the cheapest shirt in the shop.",
      wrongIndex: 4,
      fix: "These are the cheapest shirts in the shop.",
      why: {
        en: "These means many, so the thing takes s too.",
        te: "These అంటే చాలా, అందుకే వస్తువుకి కూడా s కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "You want to spend very little. Ask politely to see the cheapest saree.",
        te: "మీరు చాలా తక్కువ ఖర్చు పెట్టాలనుకుంటున్నారు. అన్నిటికంటే చవకైన చీర చూపించమని మర్యాదగా అడగండి.",
      },
      expected: ["Can I see the cheapest saree, please?", "Can I see the cheapest one, please?", "Please show me the cheapest saree."],
      options: ["Can I see the cheapest saree, please?", "Can I see cheapest saree, please?", "Show the cheapest saree. Quickly."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A friend asks about the cloth shops in town. Say Sri Devi Silks is the biggest.",
        te: "ఊర్లో బట్టల షాపుల గురించి స్నేహితులు అడుగుతున్నారు. శ్రీ దేవి సిల్క్స్ అన్నిటికంటే పెద్దదని చెప్పండి.",
      },
      expected: ["Sri Devi Silks is the biggest shop in town.", "Sri Devi Silks is the biggest.", "It's the biggest shop in town."],
      options: ["Sri Devi Silks is the biggest shop in town.", "Sri Devi Silks is the bigger shop in town.", "Sri Devi Silks is the most big shop in town."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A gift for Usha", te: "ఉష గారికి గిఫ్ట్" },
    scene: {
      en: "Your friend Usha is retiring next week. You want to buy her a saree as a gift. Kumar works at the cloth shop.",
      te: "మీ స్నేహితురాలు ఉష గారు వచ్చే వారం రిటైర్ అవుతున్నారు. ఆవిడకి గిఫ్ట్‌గా ఒక చీర కొనాలనుకుంటున్నారు. కుమార్ గారు బట్టల షాపులో పని చేస్తారు.",
    },
    partner: { en: "Kumar (shop assistant)", te: "కుమార్ (షాపు అసిస్టెంట్)" },
    voice: "b",
    skills: [
      { id: "choose", label: { en: "Choosing the best one", te: "అన్నిటికంటే మంచిది ఎంచుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! What are you looking for today?",
        te: "నమస్కారం! ఈ రోజు ఏం చూస్తున్నారు?",
        hint: { en: "Say you want a saree, as a gift for a friend.", te: "ఒక స్నేహితురాలికి గిఫ్ట్‌గా చీర కావాలని చెప్పండి." },
        replies: [
          { say: "I'm looking for a saree. It's a gift for a friend.", good: true, skill: "choose" },
          { say: "I'm looking for saree. It's a gift for a friend.", good: false, skill: "choose", fixIt: "article" },
        ],
      },
      {
        partner: "This red silk saree is the most popular. It's 6000 rupees.",
        te: "ఈ ఎర్ర పట్టు చీర అన్నిటికంటే ఎక్కువ అమ్ముడవుతుంది. 6000 రూపాయలు.",
        hint: { en: "Say it is lovely, but ask to see something cheaper.", te: "చీర బాగుందని చెప్పి, ఇంకా తక్కువ ధరవి చూపించమని అడగండి." },
        replies: [
          { say: "It's lovely, but can I see something cheaper?", good: true, skill: "choose" },
          { say: "It's beautiful, but do you have cheaper ones?", good: true, skill: "choose" },
          {
            say: "6000? Are you cheating me?",
            good: false,
            skill: "polite",
            react: { en: "No, no! That's the fixed price. Let me show you others.", te: "లేదండీ! అది ఫిక్స్‌డ్ ధర. వేరేవి చూపిస్తాను." },
          },
        ],
      },
      {
        partner: "This printed one is the cheapest, 1200. The green one is 2500.",
        te: "ఈ ప్రింటెడ్ చీర అన్నిటికంటే చవక, 1200. ఆకుపచ్చది 2500.",
        hint: { en: "Ask which of them is the best in quality.", te: "వాటిలో క్వాలిటీ ఏది బాగుంటుందో అడగండి." },
        replies: [
          { say: "Which one has the best quality?", good: true, skill: "choose" },
          { say: "Which one has the most good quality?", good: false, skill: "choose" },
        ],
      },
      {
        partner: "The green one. It's handloom cotton, the best at this price.",
        te: "ఆకుపచ్చదే. చేనేత కాటన్, ఈ ధరలో అన్నిటికంటే మంచిది.",
        hint: { en: "Say you will take it, and thank him.", te: "అదే తీసుకుంటానని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Then I'll take the green one. Thank you!", good: true, skill: "polite" },
          { say: "Then I'll taking the green one. Thank you!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
