import type { Lesson } from "../../types";

/** Week 74, Day 2 (CURRICULUM §5): the passive in a process — The milk is collected from farmers every morning. Then it is cooled and sent to the city. */
export const day: Lesson = {
  id: "the-milk-is-collected-dairy",
  kind: "lesson",
  title: { en: "The Milk Is Collected", te: "పాలు సేకరిస్తారు" },
  subtitle: "is collected, is tested, is sent",
  summary: {
    en: "Learn to explain a process: The milk is collected from farmers every morning. Then it is cooled and sent to the city.",
    te: "ఒక పని ఏ వరుసలో జరుగుతుందో చెప్పడం నేర్చుకుందాం: The milk is collected from farmers every morning. Then it is cooled and sent to the city.",
  },
  seo: {
    title: "Explaining a Process in English for Telugu Speakers",
    description:
      "Say The milk is collected from farmers every morning. Then it is cooled and sent to the city. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "The milk", role: "who" },
    { text: "is collected", role: "action" },
    { text: "from farmers", role: "what" },
    { text: "every morning", role: "when" },
  ],
  core: [
    { en: "The milk is collected from farmers every morning.", te: "రైతుల దగ్గర నుంచి ప్రతి రోజు పొద్దున పాలు సేకరిస్తారు.", extra: ["are"] },
    { en: "Then it is cooled and sent to the city.", te: "తర్వాత వాటిని చల్లబరిచి సిటీకి పంపుతారు.", extra: ["send"] },
    { en: "First, a sample of the milk is tested.", te: "ముందు పాల నుంచి కొంచెం sample తీసి పరీక్షిస్తారు.", extra: ["test"] },
    { en: "How is the milk kept fresh?", te: "పాలు పాడవకుండా ఎలా ఉంచుతారు?", extra: ["does"] },
    { en: "The packets are sent to shops before six.", te: "ప్యాకెట్లని ఆరింటికి ముందే షాపులకి పంపుతారు.", extra: ["is"] },
    { en: "The milk is heated, then cooled quickly, to keep it safe.", te: "పాలు సురక్షితంగా ఉండడానికి వేడిచేసి, వెంటనే చల్లబరుస్తారు.", extra: ["heat"] },
    { en: "Fresh milk spoils quickly in the heat, so it is cooled at once.", te: "వేడికి పాలు త్వరగా పాడైపోతాయి, అందుకే వెంటనే చల్లబరుస్తారు.", extra: ["spoil"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at a milk packet and find the word pasteurised. Then say it aloud: The milk is pasteurised.",
    te: "ఒక పాల ప్యాకెట్ మీద pasteurised అనే మాట వెతకండి. తర్వాత గట్టిగా చెప్పండి: The milk is pasteurised.",
  },
  words: [
    { en: "dairy", te: "డెయిరీ, పాల కేంద్రం" },
    { en: "process", te: "ఒక పని జరిగే వరుస, ప్రాసెస్" },
    { en: "collection centre", te: "పాలు సేకరించే కేంద్రం" },
    { en: "pasteurised", te: "వేడిచేసి శుద్ధి చేసిన" },
    { en: "spoil", te: "పాడవడం, చెడిపోవడం" },
  ],
  grammar: ["passive-voice", "connectors", "plurals-countable"],
  topics: ["food", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "What is done to the milk", te: "పాలకి ఏం చేస్తారు" },
      body: {
        en: "In a process, the thing matters more than the worker. So start with the thing, then say is and the done form: The milk is collected.",
        te: "ఒక process లో పని చేసేవాళ్ళ కంటే వస్తువే ముఖ్యం. అందుకే వస్తువుతో మొదలుపెట్టి, is, పూర్తయిన రూపం చెప్పండి: The milk is collected.",
      },
      bridge: {
        te: ["రైతుల దగ్గర నుంచి", "ప్రతి రోజు పొద్దున", "పాలు", "సేకరిస్తారు"],
        en: [
          { text: "The milk", role: "who" },
          { text: "is collected", role: "action" },
          { text: "from farmers", role: "what" },
          { text: "every morning", role: "when" },
        ],
      },
      examples: [
        { en: "The milk is collected from farmers every morning.", te: "రైతుల దగ్గర నుంచి ప్రతి రోజు పొద్దున పాలు సేకరిస్తారు." },
        { en: "Then it is cooled and sent to the city.", te: "తర్వాత వాటిని చల్లబరిచి సిటీకి పంపుతారు." },
        { en: "First, a sample of the milk is tested.", te: "ముందు పాల నుంచి కొంచెం sample తీసి పరీక్షిస్తారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "is or are in a process", te: "process లో is ఆ, are ఆ" },
      items: [
        {
          form: "the milk is …",
          useFor: { en: "Milk, oil, water: things we don't count take is.", te: "పాలు, నూనె, నీళ్ళు: లెక్కపెట్టని వాటికి is." },
          example: { en: "Then it is cooled and sent to the city.", te: "తర్వాత వాటిని చల్లబరిచి సిటీకి పంపుతారు." },
        },
        {
          form: "the packets are …",
          useFor: { en: "Many things we count take are.", te: "లెక్కపెట్టే చాలా వస్తువులకి are." },
          example: { en: "The packets are sent to shops before six.", te: "ప్యాకెట్లని ఆరింటికి ముందే షాపులకి పంపుతారు." },
        },
        {
          form: "is heated, then cooled",
          useFor: { en: "Two steps need only one is.", te: "రెండు పనులకి ఒక్క is చాలు." },
          example: { en: "The milk is heated, then cooled quickly, to keep it safe.", te: "పాలు సురక్షితంగా ఉండడానికి వేడిచేసి, వెంటనే చల్లబరుస్తారు." },
        },
        {
          form: "How is … ?",
          useFor: { en: "Ask about a step: is comes before the thing.", te: "ఒక step గురించి అడగడానికి: is వస్తువు కంటే ముందు వస్తుంది." },
          example: { en: "How is the milk kept fresh?", te: "పాలు పాడవకుండా ఎలా ఉంచుతారు?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "plural",
      wrong: "The milk are collected every morning.",
      right: "The milk is collected every morning.",
      why: {
        en: "English does not count milk, so it takes is. Telugu పాలు is plural, but English milk is not.",
        te: "ఇంగ్లీష్‌లో milk లెక్కపెట్టనిది, అందుకే is. తెలుగులో 'పాలు' బహువచనం, ఇంగ్లీష్‌లో కాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "The milk reaches to the city by six.",
      right: "The milk reaches the city by six.",
      why: {
        en: "Reach takes the place straight, with no to; Telugu సిటీకి has కి, but English does not.",
        te: "reach తర్వాత to రాదు, చోటు నేరుగా వస్తుంది; తెలుగులో 'సిటీకి' అని కి ఉన్నా ఇంగ్లీష్‌లో to అనకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "A visitor asks what happens to the milk first. Say it is tested.",
        te: "పాలకి ముందు ఏం చేస్తారని ఒక visitor అడుగుతున్నారు. పరీక్షిస్తారని చెప్పండి.",
      },
      options: ["First, the milk is tested.", "First, the milk tested.", "First, the milk is test."],
      answer: 0,
      why: {
        en: "Say is and the done form tested together; leaving out either one is wrong.",
        te: "is, పూర్తయిన రూపం tested రెండూ కలిసి రావాలి; ఒకటి వదిలేస్తే తప్పు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "The packets ___ sent to shops before six.",
      te: "ప్యాకెట్లని ఆరింటికి ముందే షాపులకి పంపుతారు.",
      options: ["are", "is", "do"],
      answer: 0,
      why: {
        en: "Packets means many, so the verb is are; is is only for one thing.",
        te: "packets అంటే చాలా, అందుకే are; is ఒక్క వస్తువుకి మాత్రమే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The man at the dairy says: The milk is sent to Hyderabad. What does he mean?",
        te: "డెయిరీలో ఆయన The milk is sent to Hyderabad అన్నారు. ఆయన ఉద్దేశం ఏంటి?",
      },
      options: ["The dairy sends the milk to Hyderabad.", "Hyderabad sends the milk to the dairy.", "The milk is made in Hyderabad."],
      answer: 0,
      why: {
        en: "Is sent tells what happens to the milk; the dairy does the sending.",
        te: "is sent అంటే పాలకి జరిగే పని; పంపేది డెయిరీ వాళ్ళు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Then it is cooled and sent to city.",
      wrongIndex: 7,
      fix: "Then it is cooled and sent to the city.",
      why: {
        en: "A city you both know takes the; Telugu సిటీకి has no word like the.",
        te: "ఇద్దరికీ తెలిసిన సిటీ కాబట్టి the కావాలి; తెలుగు 'సిటీకి' లో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "A visitor asks when the milk reaches the city. Say by six in the morning.",
        te: "పాలు సిటీకి ఎప్పటికి చేరతాయని visitor అడుగుతున్నారు. పొద్దున ఆరింటికల్లా అని చెప్పండి.",
      },
      expected: ["It reaches the city by six in the morning.", "The milk reaches the city by six.", "By six in the morning."],
      options: ["It reaches the city by six in the morning.", "It reaches to the city by six in the morning.", "It reach the city by six in the morning."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "At the dairy, ask how the milk is kept fresh.",
        te: "డెయిరీలో పాలు పాడవకుండా ఎలా ఉంచుతారో అడగండి.",
      },
      expected: ["How is the milk kept fresh?", "How do you keep the milk fresh?", "How is the milk kept cold?"],
      options: ["How is the milk kept fresh?", "How the milk is kept fresh?", "How does the milk kept fresh?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the village dairy", te: "ఊరి డెయిరీలో" },
    scene: {
      en: "You visit a dairy near Guntur with your walking group. The manager, Anitha, shows you around.",
      te: "మీ వాకింగ్ గ్రూప్‌తో కలిసి గుంటూరు దగ్గర ఒక డెయిరీ చూడటానికి వెళ్ళారు. మేనేజర్ అనిత గారు అంతా చూపిస్తున్నారు.",
    },
    partner: { en: "Anitha (the dairy manager)", te: "అనిత (డెయిరీ మేనేజర్)" },
    skills: [
      { id: "process", label: { en: "Asking about a process", te: "process గురించి అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Welcome! The milk comes here from the village collection centres.",
        te: "రండి! ఊళ్ళలోని పాల సేకరణ కేంద్రాల నుంచి పాలు ఇక్కడికి వస్తాయి.",
        hint: { en: "Thank her, and ask what time the farmers' milk comes in.", te: "ఆవిడకి థాంక్స్ చెప్పి, రైతుల పాలు ఏ టైమ్‌కి వస్తాయో అడగండి." },
        replies: [
          { say: "Thank you. When is the milk collected?", good: true, skill: "process" },
          { say: "Good morning. What time is the milk collected?", good: true, skill: "process" },
          { say: "Thank you. When the milk is collected?", good: false, skill: "process", fixIt: "question" },
        ],
      },
      {
        partner: "Every morning at five. First, a sample is tested.",
        te: "ప్రతి రోజు పొద్దున ఐదింటికి. ముందు కొంచెం sample తీసి పరీక్షిస్తాం.",
        hint: { en: "Ask what happens after the test.", te: "పరీక్ష తర్వాత ఏం చేస్తారో అడగండి." },
        replies: [
          { say: "I see. What happens after that?", good: true, skill: "process" },
          { say: "And what is done next?", good: true, skill: "process" },
          {
            say: "Tested? Is the farmers' milk not pure?",
            good: false,
            skill: "polite",
            react: { en: "It is pure! We test it to keep it that way.", te: "స్వచ్ఛమైనవేనండీ! అలాగే ఉండాలనే పరీక్షిస్తాం." },
          },
        ],
      },
      {
        partner: "Then it is cooled at once, or it spoils.",
        te: "తర్వాత వెంటనే చల్లబరుస్తాం, లేకపోతే పాడైపోతాయి.",
        hint: { en: "Ask how the milk gets to the city.", te: "పాలు సిటీకి ఎలా వెళ్తాయో అడగండి." },
        replies: [
          { say: "How is it sent to the city?", good: true, skill: "process" },
          { say: "How does the milk reach the city?", good: true, skill: "process" },
          { say: "How does the milk reach to the city?", good: false, skill: "process", fixIt: "preposition" },
        ],
      },
      {
        partner: "In big cold tankers. It reaches Vijayawada by six.",
        te: "పెద్ద చల్లని ట్యాంకర్లలో. ఆరింటికల్లా విజయవాడ చేరతాయి.",
        hint: { en: "Thank her for the visit, and say goodbye.", te: "చూపించినందుకు ఆవిడకి థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Thank you for showing us around. Goodbye!", good: true, skill: "polite" },
          { say: "Thank you. It was a very nice visit.", good: true, skill: "polite" },
          { say: "Thank you. It was very nice visit.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
