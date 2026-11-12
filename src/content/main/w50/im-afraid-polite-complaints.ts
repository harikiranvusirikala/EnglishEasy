import type { Lesson } from "../../types";

/** Week 50, Day 2 (CURRICULUM §5): I'm afraid … to soften a complaint — a strange noise, a wrong bill, a double charge. */
export const day: Lesson = {
  id: "im-afraid-polite-complaints",
  kind: "lesson",
  title: { en: "I'm Afraid There's a Problem", te: "ఒక చిన్న సమస్య ఉంది అండీ" },
  subtitle: "I'm afraid …",
  summary: {
    en: "Learn to point out a problem gently: I'm afraid the bill is wrong. You charged me twice for the rice.",
    te: "సమస్యని మెత్తగా, మర్యాదగా చెప్పడం నేర్చుకుందాం: I'm afraid the bill is wrong. You charged me twice for the rice.",
  },
  seo: {
    title: "Polite Complaints with I'm Afraid in English for Telugu Speakers",
    description:
      "Say I'm afraid the bill is wrong and You charged me twice. Simple lessons for Telugu speakers on pointing out a problem politely.",
  },
  pattern: [
    { text: "I'm afraid", role: "who" },
    { text: "the bill", role: "what" },
    { text: "is wrong", role: "action" },
  ],
  core: [
    { en: "I'm afraid the bill is wrong.", te: "sorry అండీ, బిల్లు తప్పుగా ఉంది.", extra: ["are"] },
    { en: "I'm afraid this mixer is making a strange noise.", te: "ఈ mixer ఏదో వింత శబ్దం చేస్తోంది అండీ.", extra: ["doing"] },
    { en: "You charged me twice for the rice.", te: "బియ్యానికి నాకు రెండుసార్లు బిల్లు వేశారు.", extra: ["two"] },
    { en: "I'm afraid there's a problem with this phone.", te: "ఈ ఫోన్‌లో ఒక చిన్న సమస్య ఉంది అండీ.", extra: ["in"] },
    { en: "I'm afraid this milk packet has gone sour.", te: "ఈ ప్యాకెట్‌లో పాలు విరిగిపోయాయి అండీ.", extra: ["is"] },
    { en: "I'm afraid you gave me the wrong change.", te: "మీరు నాకు చిల్లర తప్పుగా ఇచ్చారు అండీ.", extra: ["give"] },
    { en: "I'm afraid I can't take this. The seal is broken.", te: "ఇది నేను తీసుకోలేను అండీ. సీల్ ఊడిపోయి ఉంది.", extra: ["break"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Check one bill or receipt at home today. Practice saying one problem politely, starting with I'm afraid.",
    te: "ఈ రోజు ఇంట్లో ఉన్న ఏదైనా ఒక బిల్లు లేదా రసీదు చూడండి. I'm afraid తో మొదలుపెట్టి ఒక సమస్యని మర్యాదగా చెప్పి చూడండి.",
  },
  words: [
    { en: "I'm afraid", te: "sorry అండీ, కానీ … (సమస్య మర్యాదగా చెప్పేటప్పుడు)" },
    { en: "charged", te: "డబ్బులు వేశారు, బిల్లులో కలిపారు" },
    { en: "strange", te: "వింత, మామూలుగా లేని" },
    { en: "seal", te: "సీల్, మూత మీద అతుకు" },
    { en: "overcharged", te: "ఉండాల్సిన దానికంటే ఎక్కువ డబ్బులు వేశారు" },
  ],
  grammar: ["politeness-softening", "present-continuous", "past-simple"],
  topics: ["shopping", "money", "market"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "I'm afraid …", te: "sorry అండీ, …" },
      body: {
        en: "Here I'm afraid does not mean scared. It makes a complaint soft and polite, like Telugu sorry అండీ. Then say the problem.",
        te: "ఇక్కడ I'm afraid అంటే భయం కాదు. మన 'sorry అండీ' లాగా సమస్యని మెత్తగా, మర్యాదగా మొదలుపెడుతుంది. తర్వాత సమస్య చెప్పండి.",
      },
      bridge: {
        te: ["sorry అండీ,", "బిల్లు", "తప్పుగా ఉంది"],
        en: [
          { text: "I'm afraid", role: "who" },
          { text: "the bill", role: "what" },
          { text: "is wrong", role: "action" },
        ],
      },
      examples: [
        { en: "I'm afraid the bill is wrong.", te: "sorry అండీ, బిల్లు తప్పుగా ఉంది." },
        { en: "I'm afraid you gave me the wrong change.", te: "మీరు నాకు చిల్లర తప్పుగా ఇచ్చారు అండీ." },
        { en: "I'm afraid I can't take this. The seal is broken.", te: "ఇది నేను తీసుకోలేను అండీ. సీల్ ఊడిపోయి ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Polite ways to start", te: "మర్యాదగా మొదలుపెట్టడం" },
      items: [
        {
          form: "I'm afraid …",
          useFor: { en: "You are sure there is a problem.", te: "సమస్య ఉందని మీకు ఖచ్చితంగా తెలిసినప్పుడు." },
          example: { en: "I'm afraid this milk packet has gone sour.", te: "ఈ ప్యాకెట్‌లో పాలు విరిగిపోయాయి అండీ." },
        },
        {
          form: "Sorry, I think …",
          useFor: { en: "You are not fully sure.", te: "మీకు పూర్తిగా నమ్మకం లేనప్పుడు." },
          example: { en: "Sorry, I think you charged me twice.", te: "sorry అండీ, రెండుసార్లు బిల్లు వేశారనుకుంటా." },
        },
        {
          form: "Excuse me, …",
          useFor: { en: "To get someone's attention first.", te: "ముందు ఎదుటివారి దృష్టి మీ వైపు తిప్పడానికి." },
          example: { en: "Excuse me, I'm afraid there's a problem with this phone.", te: "ఏమండీ, ఈ ఫోన్‌లో ఒక చిన్న సమస్య ఉంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "There is a problem in this phone.",
      right: "There is a problem with this phone.",
      why: {
        en: "In English, a problem is with a thing; Telugu ఫోన్‌లో makes us say in.",
        te: "ఇంగ్లీష్‌లో problem with ఒక వస్తువు; తెలుగు 'ఫోన్‌లో' వల్ల in అనేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "Why you charged me twice?",
      right: "Why did you charge me twice?",
      why: {
        en: "A why question about the past needs did, and then the plain verb.",
        te: "జరిగిపోయినదాని గురించి why ప్రశ్నకి did కావాలి; తర్వాత verb మామూలు రూపంలో.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "You bought two packets of milk, but the bill shows three. What do you say?",
        te: "మీరు రెండు పాల ప్యాకెట్లు కొన్నారు, కానీ బిల్లులో మూడు ఉన్నాయి. ఏమంటారు?",
      },
      options: ["I'm afraid I bought only two packets.", "I'm afraid I bought only two packet.", "I bought only two. Are you cheating?"],
      answer: 0,
      why: {
        en: "After two, packet takes s; and I'm afraid keeps it polite, not rude.",
        te: "two తర్వాత packet కి s వస్తుంది; I'm afraid వల్ల మర్యాదగా ఉంటుంది, మొరటుగా కాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I'm ___ the bill is wrong.",
      te: "sorry అండీ, బిల్లు తప్పుగా ఉంది.",
      options: ["afraid", "fearing", "afraid of"],
      answer: 0,
      why: {
        en: "The polite phrase is always I'm afraid, with nothing after afraid.",
        te: "మర్యాద మాట ఎప్పుడూ I'm afraid; afraid తర్వాత of గానీ ఇంకేమీ గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The new mixer makes a strange noise. Which is the polite way to tell the shop?",
        te: "కొత్త mixer వింత శబ్దం చేస్తోంది. షాపులో మర్యాదగా ఎలా చెప్తారు?",
      },
      options: ["I'm afraid this mixer is making a strange noise.", "This mixer is useless. It makes noise.", "I'm afraid this mixer is doing a strange noise."],
      answer: 0,
      why: {
        en: "I'm afraid keeps it polite, and a machine makes a noise, never does one.",
        te: "I'm afraid వల్ల మర్యాదగా ఉంటుంది; శబ్దానికి make వాడతాం, do కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I'm afraid you give me the wrong change.",
      wrongIndex: 3,
      fix: "I'm afraid you gave me the wrong change.",
      why: {
        en: "It happened a moment ago, so use the past form: give becomes gave.",
        te: "ఇది ఇప్పుడే జరిగిపోయింది, అందుకే past form: give కాదు, gave.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "The new phone you bought is not charging. Tell the shop politely.",
        te: "మీరు కొన్న కొత్త ఫోన్ charge అవ్వట్లేదు. షాపులో మర్యాదగా చెప్పండి.",
      },
      expected: ["I'm afraid there's a problem with this phone.", "I'm afraid this phone is not charging.", "Excuse me, I'm afraid this phone isn't charging."],
      options: ["I'm afraid there's a problem with this phone.", "I'm afraid there's problem with this phone.", "I'm afraid there's a problem in this phone."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The cashier charged you twice for the rice. Tell her politely.",
        te: "క్యాషియర్ గారు బియ్యానికి రెండుసార్లు బిల్లు వేశారు. ఆవిడకి మర్యాదగా చెప్పండి.",
      },
      expected: ["I'm afraid you charged me twice for the rice.", "Excuse me, I'm afraid the bill is wrong.", "Sorry, I think you charged me twice."],
      options: ["I'm afraid you charged me twice for the rice.", "Why you charged me twice for the rice?", "You charged me twice. Are you cheating?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A double charge", te: "రెండుసార్లు బిల్లు" },
    scene: {
      en: "You are paying at the supermarket. On the bill, the rice bag is there two times.",
      te: "మీరు సూపర్‌మార్కెట్‌లో డబ్బులు కడుతున్నారు. బిల్లులో బియ్యం బస్తా రెండుసార్లు ఉంది.",
    },
    partner: { en: "Kavitha (the cashier)", te: "కవిత (క్యాషియర్)" },
    skills: [
      { id: "complain", label: { en: "Pointing out a problem", te: "సమస్యని చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Here is your bill. Thank you, please visit again.",
        te: "ఇదిగోండి మీ బిల్లు. థాంక్యూ, మళ్ళీ రండి.",
        hint: { en: "Stop her politely, and say there is a problem with the bill.", te: "ఆవిడని మర్యాదగా ఆపి, బిల్లులో సమస్య ఉందని చెప్పండి." },
        replies: [
          { say: "Excuse me, I'm afraid the bill is wrong.", good: true, skill: "complain" },
          { say: "Excuse me, I'm afraid the bill are wrong.", good: false, skill: "complain", fixIt: "be" },
        ],
      },
      {
        partner: "Oh! What's wrong with it?",
        te: "అవునా! ఏంటి తప్పు?",
        hint: { en: "Say what she did with the rice.", te: "బియ్యం విషయంలో ఆవిడ ఏం చేశారో చెప్పండి." },
        replies: [
          { say: "You charged me twice for the rice.", good: true, skill: "complain" },
          { say: "I'm afraid you overcharged me for the rice.", good: true, skill: "complain" },
          {
            say: "You people always cheat. Check your bill!",
            good: false,
            skill: "polite",
            react: { en: "Please don't say that. I'll check it now.", te: "అలా అనకండి, please. ఇప్పుడే చూస్తాను." },
          },
        ],
      },
      {
        partner: "Yes, you're right. Sorry, the machine scanned it twice.",
        te: "అవును, మీరు చెప్పింది నిజమే. sorry, మెషీన్ రెండుసార్లు scan చేసింది.",
        hint: { en: "Say it's okay, and ask her to give back the extra money.", te: "పర్వాలేదని చెప్పి, ఎక్కువ వేసిన డబ్బులు తిరిగి ఇవ్వమని అడగండి." },
        replies: [
          { say: "No problem. Could you give back the extra money, please?", good: true, skill: "polite" },
          { say: "No problem. Could you refund the extra amount, please?", good: true, skill: "polite" },
          { say: "No problem. You give back the extra money?", good: false, skill: "complain", fixIt: "question" },
        ],
      },
      {
        partner: "Here is 1,450 rupees. Sorry for the trouble.",
        te: "ఇదిగోండి 1,450 రూపాయలు. ఇబ్బందికి sorry.",
        hint: { en: "Thank her, and say goodbye.", te: "థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "That's all right. Thank you for your help. Bye!", good: true, skill: "polite" },
          {
            say: "Okay. Be more careful next time!",
            good: false,
            skill: "polite",
            react: { en: "Yes, of course. Sorry again.", te: "సరేనండి. మళ్ళీ sorry." },
          },
        ],
      },
    ],
  },
};
