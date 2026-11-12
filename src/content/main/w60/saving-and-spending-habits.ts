import type { Lesson } from "../../types";

/** Week 60, Day 5 (CURRICULUM §5): money habits — save, spend, I try to …, too much; saying no to a "double your money" offer. */
export const day: Lesson = {
  id: "saving-and-spending-habits",
  kind: "lesson",
  title: { en: "Saving and Spending", te: "పొదుపు, ఖర్చు" },
  subtitle: "I try to …; too much",
  summary: {
    en: "Learn to talk about money habits, and say no to offers that are too good: I try to save a little every month. I spend too much on auto fares.",
    te: "డబ్బు అలవాట్ల గురించి మాట్లాడటం, మరీ మంచిగా కనిపించే ఆఫర్లకి వద్దనడం నేర్చుకుందాం: I try to save a little every month. I spend too much on auto fares.",
  },
  seo: {
    title: "Talking About Saving and Spending in English for Telugu Speakers",
    description:
      "Say I try to save a little every month and I spend too much on auto fares, and say no to double-your-money offers.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "try to save", role: "action" },
    { text: "a little", role: "what" },
    { text: "every month", role: "when" },
  ],
  core: [
    { en: "I try to save a little every month.", te: "ప్రతి నెలా కొంచెం దాచడానికి ప్రయత్నిస్తాను.", extra: ["saving"] },
    { en: "I spend too much on auto fares.", te: "ఆటో ఛార్జీలకి నేను మరీ ఎక్కువ ఖర్చు పెడతాను.", extra: ["many"] },
    { en: "How do you save money every month?", te: "మీరు ప్రతి నెలా డబ్బు ఎలా దాస్తారు?", extra: ["are"] },
    { en: "My friend saves money in a post office scheme.", te: "నా స్నేహితులు పోస్టాఫీసు స్కీమ్‌లో డబ్బు దాస్తారు.", extra: ["save"] },
    { en: "If you spend less, you will save more.", te: "తక్కువ ఖర్చు పెడితే, ఎక్కువ దాచగలుగుతారు.", extra: ["spending"] },
    { en: "That sounds too good to be true.", te: "వినడానికి చాలా బాగుంది, కానీ నిజం అయ్యుండదు.", extra: ["truth"] },
    { en: "No, thank you. I don't trust schemes like that.", te: "వద్దు, థాంక్స్. అలాంటి స్కీమ్‌లని నేను నమ్మను.", extra: ["doesn't"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one thing you spend too much on, and say it aloud: I spend too much on …",
    te: "మీరు దేనికి మరీ ఎక్కువ ఖర్చు పెడతారో ఆలోచించి, గట్టిగా చెప్పండి: I spend too much on …",
  },
  words: [
    { en: "save", te: "దాచడం, పొదుపు చేయడం" },
    { en: "spend", te: "ఖర్చు పెట్టడం" },
    { en: "savings", te: "పొదుపు డబ్బు" },
    { en: "afford", te: "స్తోమత ఉండడం, కొనగలగడం" },
    { en: "too good to be true", te: "నిజమై ఉండనంత మంచిది, నమ్మలేనిది" },
  ],
  grammar: ["gerunds-infinitives", "present-simple", "conditionals"],
  topics: ["money", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Talking about money habits", te: "డబ్బు అలవాట్ల గురించి" },
      body: {
        en: "Use I try to … for a good habit you work at. Use too much for more than you should: I spend too much on auto fares.",
        te: "మీరు ప్రయత్నించే మంచి అలవాటుకి I try to … అనండి. అవసరానికి మించి అయితే too much: I spend too much on auto fares.",
      },
      bridge: {
        te: ["ప్రతి నెలా", "కొంచెం", "దాచడానికి ప్రయత్నిస్తాను"],
        en: [
          { text: "I", role: "who" },
          { text: "try to save", role: "action" },
          { text: "a little", role: "what" },
          { text: "every month", role: "when" },
        ],
      },
      examples: [
        { en: "I try to save a little every month.", te: "ప్రతి నెలా కొంచెం దాచడానికి ప్రయత్నిస్తాను." },
        { en: "I spend too much on auto fares.", te: "ఆటో ఛార్జీలకి నేను మరీ ఎక్కువ ఖర్చు పెడతాను." },
        { en: "How do you save money every month?", te: "మీరు ప్రతి నెలా డబ్బు ఎలా దాస్తారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Save, spend, afford", te: "save, spend, afford వాడకం" },
      items: [
        {
          form: "save",
          useFor: { en: "Keep money aside for later.", te: "తర్వాత కోసం డబ్బు పక్కన పెట్టడం." },
          example: { en: "I save some money for Sankranti every year.", te: "ప్రతి సంవత్సరం సంక్రాంతి కోసం కొంత డబ్బు దాస్తాను." },
        },
        {
          form: "spend … on …",
          useFor: { en: "Use money for something; on comes before the thing.", te: "దేనికైనా డబ్బు వాడడం; ఆ వస్తువు ముందు on వస్తుంది." },
          example: { en: "I spend about 500 rupees a month on medicines.", te: "నెలకి సుమారు 500 రూపాయలు మందులకి ఖర్చవుతుంది." },
        },
        {
          form: "can't afford",
          useFor: { en: "You don't have enough money for it.", te: "దానికి సరిపడా డబ్బు లేదు." },
          example: { en: "I can't afford a new phone right now.", te: "ఇప్పుడు కొత్త ఫోన్ కొనే స్తోమత లేదు." },
        },
        {
          form: "too good to be true",
          useFor: { en: "An offer so good that it must be false.", te: "నిజమై ఉండనంత మంచిగా కనిపించే ఆఫర్." },
          example: { en: "That sounds too good to be true.", te: "వినడానికి చాలా బాగుంది, కానీ నిజం అయ్యుండదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I spend too much for auto fares.",
      right: "I spend too much on auto fares.",
      why: {
        en: "Spend takes on before the thing; Telugu ఆటోలకి makes people say for.",
        te: "spend తర్వాత వస్తువు ముందు on వస్తుంది; తెలుగు 'ఆటోలకి' వల్ల for అనేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "He gave me good advices about saving.",
      right: "He gave me good advice about saving.",
      why: {
        en: "Advice never takes s, just like money; say some advice.",
        te: "money లాగే advice కి ఎప్పుడూ s రాదు; some advice అనండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Tell your friend how your cousin Padma saves her money.",
        te: "మీ కజిన్ పద్మ గారు డబ్బు ఎలా దాస్తారో మీ స్నేహితులకి చెప్పండి.",
      },
      options: [
        "Padma saves money in a post office scheme.",
        "Padma save money in a post office scheme.",
        "Padma saves money at a post office scheme.",
      ],
      answer: 0,
      why: {
        en: "Padma is one person, so save takes s, and money goes in a scheme.",
        te: "పద్మ గారు ఒక్కరే, అందుకే save కి s; డబ్బు స్కీమ్ లోపల ఉంటుంది కాబట్టి in.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "question",
      sentence: "How ___ you save money every month?",
      te: "మీరు ప్రతి నెలా డబ్బు ఎలా దాస్తారు?",
      options: ["do", "are", "does"],
      answer: 0,
      why: {
        en: "A question about a habit with you needs do, not are or does.",
        te: "you తో అలవాటు గురించి ప్రశ్నకి do కావాలి; are గానీ does గానీ కాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "A caller says: Give me one lakh, and I'll double it in one month! What do you say?",
        te: "ఒకాయన ఫోన్ చేసి 'ఒక లక్ష ఇవ్వండి, ఒక నెలలో రెట్టింపు చేస్తాను!' అంటున్నారు. మీరు ఏమంటారు?",
      },
      options: [
        "No, thank you. That sounds too good to be true.",
        "Okay! Please tell me where to send the money.",
        "Yes, I'll join. What is your bank account number?",
      ],
      answer: 0,
      why: {
        en: "No safe scheme doubles money so fast; offers like this are scams.",
        te: "ఏ నమ్మకమైన స్కీమ్ కూడా అంత త్వరగా డబ్బు రెట్టింపు చేయదు; ఇలాంటివి మోసాలు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I try to saving a little every month.",
      wrongIndex: 3,
      fix: "I try to save a little every month.",
      why: {
        en: "After try to, the verb comes plain, with no -ing.",
        te: "try to తర్వాత verb అలాగే వస్తుంది; -ing రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your friend asks where your money goes. Auto fares cost you a lot. Answer.",
        te: "మీ డబ్బు ఎక్కడ ఖర్చవుతుందని స్నేహితులు అడుగుతున్నారు. ఆటో ఛార్జీలకి చాలా పోతుంది. జవాబు చెప్పండి.",
      },
      expected: ["I spend too much on auto fares.", "I spend a lot on auto fares.", "I spend too much money on autos."],
      options: ["I spend too much on auto fares.", "I spend too much for auto fares.", "I am spending too many on auto fares."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "A friend asks: You don't save anything? But you do save a little. Answer.",
        te: "'మీరేమీ దాచరా?' అని స్నేహితులు అడుగుతున్నారు. కానీ మీరు కొంచెం దాస్తారు. జవాబు చెప్పండి.",
      },
      expected: ["Yes, I do. I save a little every month.", "Yes, I do. I try to save a little.", "Yes, I save a little every month."],
      options: ["Yes, I do. I save a little every month.", "No, I save a little every month.", "No, I do. I save a little every month."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Too good to be true", te: "నమ్మలేనంత మంచి ఆఫర్" },
    scene: {
      en: "At the park, your old classmate Ramesh talks about money. Then he tells you about a new scheme.",
      te: "పార్క్‌లో మీ పాత క్లాస్‌మేట్ రమేష్ గారు డబ్బు గురించి మాట్లాడుతున్నారు. తర్వాత ఒక కొత్త స్కీమ్ గురించి చెప్తున్నారు.",
    },
    partner: { en: "Ramesh (an old classmate)", te: "రమేష్ (పాత క్లాస్‌మేట్)" },
    voice: "b",
    skills: [
      { id: "habits", label: { en: "Money habits", te: "డబ్బు అలవాట్లు" } },
      { id: "refuse", label: { en: "Saying no firmly", te: "గట్టిగా వద్దనడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Long time no see. How do you manage your money these days?",
        te: "హలో! చాలా రోజులైంది. ఈ మధ్య డబ్బు ఎలా సర్దుకుంటున్నారు?",
        hint: { en: "Say you put a little money aside each month. Use try to.", te: "ప్రతి నెలా కొంచెం డబ్బు పక్కన పెడతానని చెప్పండి. try to వాడండి." },
        replies: [
          { say: "I try to save a little every month.", good: true, skill: "habits" },
          { say: "I try to saving a little every month.", good: false, skill: "habits" },
        ],
      },
      {
        partner: "Good habit! I can't save anything. Where does your money go?",
        te: "మంచి అలవాటు! నేను ఏమీ దాచలేకపోతున్నాను. మీ డబ్బు ఎక్కడ ఖర్చవుతుంది?",
        hint: { en: "Say auto fares cost you a lot.", te: "ఆటో ఛార్జీలకి చాలా పోతుందని చెప్పండి." },
        replies: [
          { say: "I spend too much on auto fares.", good: true, skill: "habits" },
          { say: "I spend too much for auto fares.", good: false, skill: "habits", fixIt: "preposition" },
        ],
      },
      {
        partner: "Listen, I know a scheme. Give one lakh, get two lakh in a year!",
        te: "వినండి, నాకు ఒక స్కీమ్ తెలుసు. ఒక లక్ష ఇస్తే, ఒక సంవత్సరంలో రెండు లక్షలు వస్తాయి!",
        hint: { en: "Say no politely: the offer sounds false to you.", te: "మర్యాదగా వద్దనండి: ఆ ఆఫర్ నిజం అనిపించట్లేదు." },
        replies: [
          { say: "No, thank you. That sounds too good to be true.", good: true, skill: "refuse" },
          { say: "Sorry, I don't trust schemes like that.", good: true, skill: "refuse" },
          {
            say: "You are a cheat! Go away!",
            good: false,
            skill: "polite",
            react: { en: "Hey, I'm only telling you! Many people have joined.", te: "అరే, ఊరికే చెప్తున్నాను! చాలామంది చేరారు." },
          },
        ],
      },
      {
        partner: "But my cousin got double money last year!",
        te: "కానీ పోయిన సంవత్సరం మా కజిన్‌కి రెట్టింపు డబ్బు వచ్చింది!",
        hint: { en: "Say your savings stay in the bank, and ask him kindly to be careful.", te: "మీ పొదుపు బ్యాంకులోనే ఉంటుందని చెప్పి, జాగ్రత్తగా ఉండమని ఆయనకి మర్యాదగా చెప్పండి." },
        replies: [
          { say: "I keep my savings in the bank. Please be careful, Ramesh.", good: true, skill: "refuse" },
          { say: "I keep my savings in bank. Please be careful, Ramesh.", good: false, skill: "refuse", fixIt: "article" },
        ],
      },
      {
        partner: "Hmm, maybe you're right. I'll ask at my bank first. Shall we have tea?",
        te: "హ్మ్, మీరు చెప్పింది నిజమేనేమో. ముందు నా బ్యాంకులో అడుగుతాను. టీ తాగుదామా?",
        hint: { en: "Agree happily.", te: "సంతోషంగా ఒప్పుకోండి." },
        replies: [
          { say: "Sure, let's go. The tea is on me today!", good: true, skill: "polite" },
          { say: "Sure, let's go to tea shop.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
