import type { Lesson } from "../../types";

/**
 * Week 67, Day 3 (CURRICULUM §5): Checkpoint mix — savings words (Week 60), offers to guests with a little / a few
 * (Week 64) and relative clauses with which, where and whose (Week 59).
 */
export const day: Lesson = {
  id: "money-and-guests-mix",
  kind: "lesson",
  title: { en: "Money and Guests", te: "డబ్బు, అతిథులు" },
  subtitle: "savings, offers and which, where, whose",
  summary: {
    en: "Talk about savings, say which one you mean with which, where and whose, and look after a guest with kind offers.",
    te: "పొదుపు గురించి మాట్లాడటం, which, where, whose తో ఏది అనేది చెప్పడం, అతిథికి మర్యాదగా ఇంకా వడ్డించడం.",
  },
  seo: {
    title: "Savings and Hosting Guests in English for Telugu Speakers",
    description:
      "Say The FD which I opened last year matures in May and Would you like a little more payasam? A review lesson for Telugu speakers.",
  },
  pattern: [
    { text: "The FD", role: "who" },
    { text: "which I opened last year", role: "what" },
    { text: "matures", role: "action" },
    { text: "in May", role: "when" },
  ],
  core: [
    { en: "Would you like a little more payasam?", te: "ఇంకొంచెం పాయసం వేసుకుంటారా?", extra: ["few"] },
    { en: "The FD which I opened last year matures in May.", te: "నేను పోయిన సంవత్సరం తెరిచిన FD మే లో mature అవుతుంది.", extra: ["mature"] },
    { en: "Please have a few more biscuits with your tea.", te: "టీ తో పాటు ఇంకొన్ని బిస్కెట్లు తీసుకోండి.", extra: ["little"] },
    { en: "Senior citizens get a higher interest rate on deposits.", te: "సీనియర్ సిటిజన్లకి డిపాజిట్ల మీద వడ్డీ రేటు ఎక్కువ ఇస్తారు.", extra: ["more"] },
    { en: "I save five thousand rupees every month.", te: "నేను ప్రతి నెలా ఐదు వేల రూపాయలు దాచుకుంటాను.", extra: ["thousands"] },
    { en: "This is the post office where I opened my savings account.", te: "నేను savings account తెరిచిన పోస్టాఫీసు ఇదే." },
    { en: "Ask Anitha, whose brother works at the post office.", te: "అనిత గారిని అడగండి, ఆవిడ తమ్ముడు పోస్టాఫీసులో పని చేస్తారు." },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say three sentences aloud about places you know, like This is the bank where I opened my account.",
    te: "మీకు తెలిసిన చోట్ల గురించి మూడు వాక్యాలు గట్టిగా చెప్పండి, ఉదాహరణకి This is the bank where I opened my account.",
  },
  words: [
    { en: "payasam", te: "పాయసం" },
    { en: "scheme", te: "పథకం, స్కీమ్" },
    { en: "monthly income", te: "నెలనెలా వచ్చే ఆదాయం" },
    { en: "savings account", te: "పొదుపు ఖాతా, savings account" },
    { en: "sweet dish", te: "తీపి వంటకం" },
  ],
  grammar: ["relative-clauses", "big-numbers", "would-like", "plurals-countable"],
  topics: ["money", "bank", "food", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Money talk, guest talk", te: "డబ్బు మాటలు, అతిథి మర్యాదలు" },
      body: {
        en: "Say which one you mean with which for things, where for places and whose for someone's things. Offer food with Would you like …? Use a little for payasam or rice, and a few for things you count.",
        te: "ఏది అనేది చెప్పడానికి: వస్తువులకి which, చోట్లకి where, ఒకరి వస్తువులకి whose. Would you like …? తో వడ్డించండి; పాయసం, అన్నానికి a little, లెక్కపెట్టేవాటికి a few.",
      },
      bridge: {
        te: ["నేను పోయిన సంవత్సరం తెరిచిన", "FD", "మే లో", "mature అవుతుంది"],
        en: [
          { text: "The FD", role: "who" },
          { text: "which I opened last year", role: "what" },
          { text: "matures", role: "action" },
          { text: "in May", role: "when" },
        ],
      },
      examples: [
        { en: "The FD which I opened last year matures in May.", te: "నేను పోయిన సంవత్సరం తెరిచిన FD మే లో mature అవుతుంది." },
        { en: "This is the post office where I opened my savings account.", te: "నేను savings account తెరిచిన పోస్టాఫీసు ఇదే." },
        { en: "Would you like a little more payasam?", te: "ఇంకొంచెం పాయసం వేసుకుంటారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "which, where, a little, a few", te: "which, where, a little, a few ఎప్పుడు?" },
      items: [
        {
          form: "which",
          useFor: { en: "A thing: the scheme, the FD, the bus.", te: "ఒక వస్తువు: స్కీమ్, FD, బస్సు." },
          example: { en: "Is there a scheme which gives a monthly income?", te: "నెలనెలా ఆదాయం వచ్చే స్కీమ్ ఏదైనా ఉందా?" },
        },
        {
          form: "where",
          useFor: { en: "A place: the bank, the shop, the town.", te: "ఒక చోటు: బ్యాంక్, షాపు, ఊరు." },
          example: { en: "This is the post office where I opened my savings account.", te: "నేను savings account తెరిచిన పోస్టాఫీసు ఇదే." },
        },
        {
          form: "a little more",
          useFor: { en: "Food you don't count: payasam, rice, curd.", te: "లెక్కపెట్టని ఆహారం: పాయసం, అన్నం, పెరుగు." },
          example: { en: "Would you like a little more payasam?", te: "ఇంకొంచెం పాయసం వేసుకుంటారా?" },
        },
        {
          form: "a few more",
          useFor: { en: "Things you count: biscuits, dosas, laddus.", te: "లెక్కపెట్టేవి: బిస్కెట్లు, దోసెలు, లడ్డూలు." },
          example: { en: "Please have a few more biscuits with your tea.", te: "టీ తో పాటు ఇంకొన్ని బిస్కెట్లు తీసుకోండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "plural",
      wrong: "I save five thousands rupees every month.",
      right: "I save five thousand rupees every month.",
      why: {
        en: "After a number, thousand and lakh take no s; only rupees takes the s.",
        te: "నంబర్ తర్వాత thousand, lakh కి s రాదు; s రూపాయలకి (rupees) మాత్రమే.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "The FD which I opened last year mature in May.",
      right: "The FD which I opened last year matures in May.",
      why: {
        en: "One FD is like it, so its verb takes s, even with words in between.",
        te: "ఒక్క FD అంటే it లాంటిది, అందుకే verb కి s వస్తుంది; మధ్యలో పదాలు ఉన్నా సరే.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "Your guest Narayana has finished his payasam. Offer him some more.",
        te: "మీ అతిథి నారాయణ గారు పాయసం తినేశారు. ఇంకొంచెం వేసుకుంటారేమో అడగండి.",
      },
      options: ["Would you like a little more payasam?", "Would you like a few more payasam?", "You want some more payasam?"],
      answer: 0,
      why: {
        en: "Payasam is not counted, so it takes a little, and a question to a guest starts with Would you.",
        te: "పాయసాన్ని లెక్కపెట్టం, అందుకే a little; అతిథిని అడిగే ప్రశ్న Would you తో మొదలవుతుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "This is the bank ___ I opened my first account.",
      te: "నేను మొదటి ఖాతా తెరిచిన బ్యాంక్ ఇదే.",
      options: ["where", "which", "who"],
      answer: 0,
      why: {
        en: "Use where for a place where something happened; which is for the thing itself, and who for people.",
        te: "ఏదైనా జరిగిన చోటుకి where; which వస్తువుకి, who మనుషులకి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "At the bank, ask the clerk if senior citizens get a higher interest rate.",
        te: "బ్యాంక్‌లో, సీనియర్ సిటిజన్లకి వడ్డీ రేటు ఎక్కువ వస్తుందా అని క్లర్క్‌ని అడగండి.",
      },
      options: [
        "Do senior citizens get a higher interest rate?",
        "Senior citizens are getting higher interest rate?",
        "Does senior citizens get a higher interest rate?",
      ],
      answer: 0,
      why: {
        en: "A yes or no question needs do at the start, and senior citizens is more than one, so not does.",
        te: "అవునా కాదా ప్రశ్నకి మొదట do కావాలి; senior citizens ఒకరి కంటే ఎక్కువ, అందుకే does కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "My FD matures on May, so I will renew it.",
      wrongIndex: 3,
      fix: "My FD matures in May, so I will renew it.",
      why: {
        en: "A month takes in; on is only for a day or a date, like on Monday.",
        te: "నెల ముందు in వస్తుంది; on అనేది రోజు, తేదీ ముందు మాత్రమే, on Monday లాగా.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Your friend asks how long you have had your post office savings account. You opened it fifteen years ago.",
        te: "పోస్టాఫీసులో మీ savings account ఎన్నాళ్ళుగా ఉందని స్నేహితులు అడుగుతున్నారు. మీరు పదిహేనేళ్ళ క్రితం తెరిచారు.",
      },
      expected: ["I have had it for fifteen years.", "I've had this account for fifteen years.", "For fifteen years."],
      options: ["I have had it for fifteen years.", "I am having it for fifteen years.", "I have it since fifteen years."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your guest asks who made the payasam. Say your friend Ramesh made it, and he cooks very well.",
        te: "పాయసం ఎవరు చేశారని మీ అతిథి అడుగుతున్నారు. మీ స్నేహితుడు రమేష్ గారు చేశారని, ఆయన చాలా బాగా వంట చేస్తారని చెప్పండి.",
      },
      expected: [
        "My friend Ramesh made it. He cooks very well.",
        "Ramesh made it. He cooks very well.",
        "My friend Ramesh made it. He is a very good cook.",
      ],
      options: ["My friend Ramesh made it. He cooks very well.", "My friend Ramesh made it. He cook very well.", "My friend Ramesh made it. He is cooking very well."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Coffee and savings", te: "కాఫీ, పొదుపు కబుర్లు" },
    scene: {
      en: "Your friend Joseph comes to your home in Guntur for coffee. His FD matures soon, and he wants your advice.",
      te: "మీ స్నేహితుడు జోసెఫ్ గారు కాఫీకి గుంటూరులో మీ ఇంటికి వచ్చారు. ఆయన FD త్వరలో mature అవుతుంది, మీ సలహా కావాలంటున్నారు.",
    },
    partner: { en: "Joseph (a friend)", te: "జోసెఫ్ (స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "host", label: { en: "Looking after a guest", te: "అతిథి మర్యాద" } },
      { id: "money", label: { en: "Talking about savings", te: "పొదుపు గురించి మాట్లాడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Sorry I'm a little late. The bus was very slow today.",
        te: "హలో! కొంచెం ఆలస్యమైంది, సారీ. ఈ రోజు బస్సు చాలా నెమ్మదిగా వచ్చింది.",
        hint: { en: "Say it's no problem, welcome him in, and offer him coffee.", te: "పర్లేదని చెప్పి, లోపలికి ఆహ్వానించి, కాఫీ కావాలా అని అడగండి." },
        replies: [
          { say: "No problem. Come in! Would you like some filter coffee?", good: true, skill: "host" },
          { say: "No problem. Come in! You want some coffee?", good: false, skill: "host", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, please. My FD matures next month. Any ideas for the money?",
        te: "అలాగే, ఇవ్వండి. నా FD వచ్చే నెల mature అవుతుంది. ఆ డబ్బు ఏం చేయమంటారు?",
        hint: { en: "Tell him about a post office scheme that pays something every month.", te: "ప్రతి నెలా కొంత డబ్బు ఇచ్చే పోస్టాఫీసు స్కీమ్ గురించి చెప్పండి." },
        replies: [
          { say: "There's a post office scheme which gives a monthly income.", good: true, skill: "money" },
          { say: "There's a post office scheme who gives a monthly income.", good: false, skill: "money" },
        ],
      },
      {
        partner: "Sounds good. But is it safe? Who told you about it?",
        te: "బాగుంది. కానీ అది సురక్షితమేనా? మీకు దాని గురించి ఎవరు చెప్పారు?",
        hint: { en: "Say the government runs it, and say who explained it to you.", te: "అది ప్రభుత్వ స్కీమ్ అని, మీకు ఎవరు వివరించారో చెప్పండి." },
        replies: [
          { say: "It's a government scheme. The clerk at the post office explained it to me.", good: true, skill: "money" },
          { say: "It's a government scheme. The clerk explained me everything.", good: false, skill: "money", fixIt: "preposition" },
          {
            say: "Of course it's safe. Do you think I'm a fool?",
            good: false,
            skill: "polite",
            react: { en: "No, no! I just want to be careful with my savings.", te: "అయ్యో, అలా కాదండీ! నా పొదుపు విషయంలో జాగ్రత్తగా ఉండాలని అంతే." },
          },
        ],
      },
      {
        partner: "That helps, thank you. I should go now. The payasam was lovely!",
        te: "చాలా ఉపయోగపడింది, థాంక్యూ. ఇక నేను బయలుదేరాలి. పాయసం చాలా బాగుంది!",
        hint: { en: "Offer him some more before he goes, and thank him for coming.", te: "వెళ్ళే ముందు ఇంకొంచెం వేసుకోమని చెప్పి, వచ్చినందుకు థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Have a little more before you go. Thanks for coming!", good: true, skill: "host" },
          { say: "Have a few more payasam before you go. Thanks for coming!", good: false, skill: "host", fixIt: "plural" },
        ],
      },
    ],
  },
};
