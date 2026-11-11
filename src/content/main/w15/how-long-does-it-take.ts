import type { Lesson } from "../../types";

/** Week 15, Day 3 (CURRICULUM §4): How long does it take? It takes about an hour — travel time by bus, train and auto. */
export const day: Lesson = {
  id: "how-long-does-it-take",
  kind: "lesson",
  title: { en: "How Long Does It Take?", te: "ఎంతసేపు పడుతుంది?" },
  subtitle: "How long does it take?",
  summary: {
    en: "Learn to ask and say travel time: How long does it take to Guntur? It takes about an hour.",
    te: "ప్రయాణానికి ఎంతసేపు పడుతుందో అడగడం, చెప్పడం నేర్చుకుందాం: How long does it take to Guntur? It takes about an hour.",
  },
  seo: {
    title: "How Long Does It Take in English for Telugu Speakers",
    description:
      "Ask How long does it take to Guntur? and answer It takes about an hour. Simple lessons for Telugu speakers on travel time.",
  },
  pattern: [
    { text: "It", role: "who" },
    { text: "takes", role: "action" },
    { text: "about an hour", role: "what" },
    { text: "by bus", role: "what" },
  ],
  core: [
    { en: "How long does it take to Guntur?", te: "గుంటూరుకి ఎంతసేపు పడుతుంది?", extra: ["takes"] },
    { en: "It takes about an hour by bus.", te: "బస్‌లో దాదాపు ఒక గంట పడుతుంది.", extra: ["take"] },
    { en: "By train, it takes two hours.", te: "రైలులో అయితే రెండు గంటలు పడుతుంది.", extra: ["hour"] },
    { en: "Is there a direct bus?", te: "డైరెక్ట్ బస్ ఉందా?", extra: ["Are"] },
    { en: "There is a lot of traffic today.", te: "ఈ రోజు ట్రాఫిక్ చాలా ఎక్కువగా ఉంది.", extra: ["many"] },
    { en: "How long is the journey to Tirupati?", te: "తిరుపతికి ప్రయాణం ఎంతసేపు?", extra: ["does"] },
    { en: "We can take the eight o'clock bus.", te: "మనం ఎనిమిది గంటల బస్ ఎక్కొచ్చు.", extra: ["takes"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one place you often visit. Say how long it takes: It takes about …",
    te: "మీరు ఎక్కువగా వెళ్ళే ఒక చోటు గురించి ఆలోచించండి. ఎంతసేపు పడుతుందో చెప్పండి: It takes about …",
  },
  words: [
    { en: "how long", te: "ఎంతసేపు" },
    { en: "it takes", te: "పడుతుంది (సమయం)" },
    { en: "journey", te: "ప్రయాణం" },
    { en: "traffic", te: "ట్రాఫిక్" },
    { en: "direct", te: "నేరుగా వెళ్ళే (డైరెక్ట్)" },
  ],
  grammar: ["present-simple", "question-words", "articles"],
  topics: ["transport", "time", "travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "How long does it take?", te: "ఎంతసేపు పడుతుంది?" },
      body: {
        en: "To ask about travel time, say How long does it take to …? Answer with It takes and the time: about an hour, two hours. Add by bus or by train.",
        te: "ప్రయాణానికి ఎంతసేపో అడగాలంటే How long does it take to …? అనండి. జవాబు It takes తో: about an hour, two hours. చివర by bus, by train కలపండి.",
      },
      bridge: {
        te: ["బస్‌లో", "దాదాపు ఒక గంట", "పడుతుంది"],
        en: [
          { text: "It", role: "who" },
          { text: "takes", role: "action" },
          { text: "about an hour", role: "what" },
          { text: "by bus", role: "what" },
        ],
      },
      examples: [
        { en: "How long does it take to Guntur?", te: "గుంటూరుకి ఎంతసేపు పడుతుంది?" },
        { en: "It takes about an hour by bus.", te: "బస్‌లో దాదాపు ఒక గంట పడుతుంది." },
        { en: "By train, it takes two hours.", te: "రైలులో అయితే రెండు గంటలు పడుతుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Saying the time it takes", te: "ఎంతసేపో చెప్పడం" },
      items: [
        {
          form: "about an hour",
          useFor: { en: "One hour, more or less. The h is silent, so an.", te: "దాదాపు ఒక గంట. hour లో h పలకదు, అందుకే an." },
          example: { en: "It takes about an hour by bus.", te: "బస్‌లో దాదాపు ఒక గంట పడుతుంది." },
        },
        {
          form: "two hours",
          useFor: { en: "More than one: add s.", te: "ఒకటి కంటే ఎక్కువ: s చేర్చండి." },
          example: { en: "By train, it takes two hours.", te: "రైలులో అయితే రెండు గంటలు పడుతుంది." },
        },
        {
          form: "by bus / by train / by auto",
          useFor: { en: "How you travel. No the after by.", te: "దేనిలో వెళ్తారో. by తర్వాత the రాదు." },
          example: { en: "It takes forty minutes by auto.", te: "ఆటోలో నలభై నిమిషాలు పడుతుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "plural",
      wrong: "It takes two hour.",
      right: "It takes two hours.",
      why: {
        en: "More than one hour needs s at the end. Say the s clearly.",
        te: "ఒక గంట కంటే ఎక్కువ అయితే hours; చివర s స్పష్టంగా పలకండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "It takes one and half hour.",
      right: "It takes one and a half hours.",
      why: {
        en: "Put a before half, and hours takes s: one and a half hours.",
        te: "half ముందు a కావాలి, hours కి s కూడా: one and a half hours.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask how much time the bus takes to Guntur.", te: "గుంటూరుకి బస్‌లో ఎంతసేపు పడుతుందో అడగండి." },
      options: ["How long does it take to Guntur?", "How long it takes to Guntur?", "How long does it takes to Guntur?"],
      answer: 0,
      why: {
        en: "A how long question needs does, and take stays plain after it.",
        te: "How long ప్రశ్నలో does కావాలి; ఆ తర్వాత take కి s రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "article",
      sentence: "It takes about ___ hour by bus.",
      te: "బస్‌లో దాదాపు ఒక గంట పడుతుంది.",
      options: ["an", "a", "the"],
      answer: 0,
      why: {
        en: "The h in hour is silent, so it starts with a vowel sound and takes an.",
        te: "hour లో h పలకదు, అచ్చు శబ్దంతో మొదలవుతుంది; అందుకే an.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend says: It takes forty minutes by auto. What does it mean?",
        te: "మీ స్నేహితులు It takes forty minutes by auto అన్నారు. అర్థం ఏంటి?",
      },
      options: ["The auto ride is forty minutes long.", "The auto costs forty rupees.", "The auto comes in forty minutes."],
      answer: 0,
      why: {
        en: "It takes tells you how long the trip is, not the price.",
        te: "It takes అంటే ప్రయాణానికి పట్టే సమయం, ధర కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "There is a lot of traffics today.",
      wrongIndex: 5,
      fix: "There is a lot of traffic today.",
      why: {
        en: "Traffic has no plural, so never add s to it.",
        te: "traffic కి plural లేదు; దానికి s చేర్చకూడదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Ask your neighbour how long it takes to Vijayawada by bus.",
        te: "బస్‌లో విజయవాడకి ఎంతసేపు పడుతుందో మీ పొరుగువారిని అడగండి.",
      },
      expected: ["How long does it take to Vijayawada by bus?", "How long does it take to Vijayawada?"],
      options: ["How long does it take to Vijayawada by bus?", "How long it takes to Vijayawada by bus?", "How long does it take for Vijayawada by bus?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Your cousin asks about the train to Tirupati. Say it takes about three hours.",
        te: "తిరుపతి రైలు గురించి మీ కజిన్ అడిగారు. దాదాపు మూడు గంటలు పడుతుందని చెప్పండి.",
      },
      expected: ["It takes about three hours.", "About three hours."],
      options: ["It takes about three hours.", "It takes about three hour.", "It is taking about three hours."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Planning a trip", te: "ప్రయాణం ప్లాన్" },
    scene: {
      en: "Your friend Geetha wants to visit Mangalagiri temple with you on Sunday. Plan the trip.",
      te: "మీ స్నేహితురాలు గీత ఆదివారం మీతో కలిసి మంగళగిరి గుడికి వెళ్ళాలనుకుంటున్నారు. ప్రయాణం ప్లాన్ చేయండి.",
    },
    partner: { en: "Geetha (your friend)", te: "గీత (మీ స్నేహితురాలు)" },
    skills: [
      { id: "plan", label: { en: "Planning a trip", te: "ప్రయాణం ప్లాన్" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Do you want to come to Mangalagiri on Sunday?",
        te: "ఆదివారం మంగళగిరికి వస్తారా?",
        hint: { en: "Say yes, and ask how much time the trip takes.", te: "వస్తానని చెప్పి, ప్రయాణానికి ఎంతసేపు పడుతుందో అడగండి." },
        replies: [
          { say: "Yes! How long does it take to get there?", good: true, skill: "plan" },
          { say: "Yes! How long it takes to go there?", good: false, skill: "plan", fixIt: "question" },
        ],
      },
      {
        partner: "About an hour by bus. There is a direct bus.",
        te: "బస్‌లో దాదాపు గంట. డైరెక్ట్ బస్ ఉంది.",
        hint: { en: "Say that is good, and ask its time.", te: "మంచిదని చెప్పి, బస్ ఎన్నింటికో అడగండి." },
        replies: [
          { say: "Good. What time does it leave?", good: true, skill: "plan" },
          { say: "Good. What time does it leaves?", good: false, skill: "plan", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "It leaves the bus stand at 6:30.",
        te: "బస్టాండ్ నుంచి ఆరున్నరకి బయల్దేరుతుంది.",
        hint: {
          en: "Say politely that it is early for you. Ask about a later bus.",
          te: "అది మీకు కొంచెం పొద్దున్నే అని మర్యాదగా చెప్పి, తర్వాతి బస్ గురించి అడగండి.",
        },
        replies: [
          { say: "That's a bit early. Is there a later bus?", good: true, skill: "polite" },
          {
            say: "6:30? No way! Are you mad?",
            good: false,
            skill: "polite",
            react: { en: "Ha! Okay, okay. There is one at nine.", te: "హహ! సరే, సరే. తొమ్మిదింటికి ఇంకోటి ఉంది." },
          },
        ],
      },
      {
        partner: "Yes, at nine. It takes the same time.",
        te: "ఉంది, తొమ్మిదింటికి. దానికీ అంతే సమయం పడుతుంది.",
        hint: { en: "Agree, and say where you will meet her.", te: "సరే అని, ఆవిడని ఎక్కడ కలుస్తారో చెప్పండి." },
        replies: [
          { say: "Okay, nine o'clock. See you at the bus stand.", good: true, skill: "plan" },
          { say: "Okay, nine o'clock. See you in the bus stand.", good: false, skill: "plan", fixIt: "preposition" },
        ],
      },
    ],
  },
};
