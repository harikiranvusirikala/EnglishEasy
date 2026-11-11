import type { Lesson } from "../../types";

/** Week 34, Day 5 (CURRICULUM §4): ending a chat politely — I must go now. Nice talking to you. */
export const day: Lesson = {
  id: "nice-talking-to-you",
  kind: "lesson",
  title: { en: "Nice Talking to You", te: "మాట్లాడినందుకు సంతోషం" },
  subtitle: "ending a chat politely",
  summary: {
    en: "Learn to end a chat kindly: I must go now. Nice talking to you. Let's catch up again soon.",
    te: "కబుర్లను మర్యాదగా ముగించడం నేర్చుకుందాం: I must go now. Nice talking to you. Let's catch up again soon.",
  },
  seo: {
    title: "Ending a Conversation Politely in English for Telugu Speakers",
    description:
      "Say I must go now. Nice talking to you. Simple lessons for Telugu speakers on ending a friendly chat kindly, at the bus stop or on a walk.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "must go", role: "action" },
    { text: "now.", role: "when" },
  ],
  core: [
    { en: "I must go now. Nice talking to you.", te: "ఇక వెళ్ళాలి. మీతో మాట్లాడటం సంతోషంగా ఉంది.", extra: ["going"] },
    { en: "It's getting late. I'll see you tomorrow.", te: "ఆలస్యం అవుతోంది. రేపు కలుస్తాను.", extra: ["seeing"] },
    { en: "Nice talking to you too.", te: "మీతో మాట్లాడటం నాకూ సంతోషమే.", extra: ["talk"] },
    { en: "Let's catch up again soon.", te: "త్వరలో మళ్ళీ కలిసి మాట్లాడుకుందాం.", extra: ["catching"] },
    { en: "Sorry, my bus is here. Bye!", te: "Sorry అండీ, నా బస్ వచ్చేసింది. బై!", extra: ["came"] },
    { en: "Please say hello to your mother.", te: "మీ అమ్మగారికి నా నమస్కారం చెప్పండి.", extra: ["for"] },
    { en: "See you around. Take care!", te: "మళ్ళీ కలుద్దాం. జాగ్రత్త!", extra: ["Taking"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When you end a chat today, give a reason and say: Nice talking to you.",
    te: "ఈ రోజు ఎవరితోనైనా మాట ముగించేటప్పుడు, కారణం చెప్పి Nice talking to you అనండి.",
  },
  words: [
    { en: "nice talking to you", te: "మీతో మాట్లాడటం సంతోషం" },
    { en: "getting late", te: "ఆలస్యం అవుతోంది" },
    { en: "catch up", te: "కలిసి కబుర్లు చెప్పుకోవడం" },
    { en: "see you around", te: "మళ్ళీ కలుద్దాం" },
    { en: "keep in touch", te: "టచ్‌లో ఉండటం" },
  ],
  grammar: ["should-must-have-to", "politeness-softening"],
  topics: ["people", "neighbours", "transport"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Ending a chat kindly", te: "మర్యాదగా మాట ముగించడం" },
      body: {
        en: "Don't just walk away. First give a reason: I must go now, or It's getting late. Then say something kind: Nice talking to you. See you around.",
        te: "ఉన్నట్టుండి వెళ్ళిపోకండి. ముందు కారణం చెప్పండి: I must go now, లేదా It's getting late. తర్వాత ఒక మంచి మాట: Nice talking to you. See you around.",
      },
      bridge: {
        te: ["ఇక", "వెళ్ళాలి"],
        en: [
          { text: "I", role: "who" },
          { text: "must go", role: "action" },
          { text: "now.", role: "when" },
        ],
      },
      examples: [
        { en: "I must go now. Nice talking to you.", te: "ఇక వెళ్ళాలి. మీతో మాట్లాడటం సంతోషంగా ఉంది." },
        { en: "It's getting late. I'll see you tomorrow.", te: "ఆలస్యం అవుతోంది. రేపు కలుస్తాను." },
        { en: "See you around. Take care!", te: "మళ్ళీ కలుద్దాం. జాగ్రత్త!" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Steps to end a chat", te: "మాట ముగించే దశలు" },
      items: [
        {
          form: "I must go now. / It's getting late.",
          useFor: { en: "Give a reason first.", te: "ముందు కారణం చెప్పడానికి." },
          example: { en: "It's getting late. I'll see you tomorrow.", te: "ఆలస్యం అవుతోంది. రేపు కలుస్తాను." },
        },
        {
          form: "Nice talking to you.",
          useFor: { en: "Say you liked the chat.", te: "కబుర్లు నచ్చాయని చెప్పడానికి." },
          example: { en: "I must go now. Nice talking to you.", te: "ఇక వెళ్ళాలి. మీతో మాట్లాడటం సంతోషంగా ఉంది." },
        },
        {
          form: "… too",
          useFor: { en: "They said it first: add too.", te: "వాళ్ళు ముందే అంటే, మీరు too చేర్చండి." },
          example: { en: "Nice talking to you too.", te: "మీతో మాట్లాడటం నాకూ సంతోషమే." },
        },
        {
          form: "Let's catch up soon.",
          useFor: { en: "Say you want to meet again.", te: "మళ్ళీ కలవాలని ఉందని చెప్పడానికి." },
          example: { en: "Let's catch up again soon.", te: "త్వరలో మళ్ళీ కలిసి మాట్లాడుకుందాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I'm going to home now.",
      right: "I'm going home now.",
      why: {
        en: "Telugu ఇంటికి has కి, but English home needs no to after go.",
        te: "'ఇంటికి' లో 'కి' ఉంది, కానీ ఇంగ్లీష్‌లో go తర్వాత home కి to అక్కర్లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Okay, I'll go and come.",
      right: "Okay, I must go now. See you soon!",
      why: {
        en: "I'll go and come is Telugu వెళ్ళొస్తాను word for word; in English it sounds odd.",
        te: "I'll go and come అనేది 'వెళ్ళొస్తాను' కి మాటకి మాట అనువాదం; ఇంగ్లీష్‌లో వింతగా ఉంటుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "You want to end the chat politely.", te: "మాటను మర్యాదగా ముగించాలి." },
      options: ["I must go now. Nice talking to you.", "Okay, go. Bye.", "Enough talking. I am going."],
      answer: 0,
      why: {
        en: "A reason and a kind word end the chat without hurting anyone.",
        te: "కారణం, ఒక మంచి మాట చెప్తే ఎవరూ నొచ్చుకోకుండా మాట ముగుస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Please say hello ___ your mother.",
      te: "మీ అమ్మగారికి నా నమస్కారం చెప్పండి.",
      options: ["to", "for", "with"],
      answer: 0,
      why: {
        en: "Say hello takes to before the person; Telugu అమ్మగారికి has కి, which is to.",
        te: "say hello తర్వాత మనిషి ముందు to; 'అమ్మగారికి' లోని 'కి' ఇక్కడ to.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: { en: "Give a reason to leave: a meeting at ten.", te: "వెళ్ళడానికి కారణం చెప్పండి: పదింటికి మీటింగ్." },
      options: ["Sorry, I have a meeting at ten.", "Sorry, I have meeting at ten.", "Sorry, I am having meeting at ten."],
      answer: 0,
      why: {
        en: "One meeting needs a in front; Telugu has no word like a, so it slips.",
        te: "ఒక మీటింగ్ అంటే ముందు a కావాలి; తెలుగులో a లాంటి మాట లేదు, అందుకే జారిపోతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "It's getting late. I will seeing you tomorrow.",
      wrongIndex: 5,
      fix: "It's getting late. I will see you tomorrow.",
      why: {
        en: "After will, the verb stays plain, with no -ing.",
        te: "will తర్వాత verb మామూలుగానే ఉంటుంది, -ing రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You are chatting at the bus stop. Your bus comes. End the chat.",
        te: "బస్ స్టాప్‌లో కబుర్లు చెప్తున్నారు. మీ బస్ వచ్చింది. మాట ముగించండి.",
      },
      expected: ["Sorry, my bus is here. Bye!", "Sorry, that's my bus. Nice talking to you!", "My bus is here. See you!"],
      options: ["Sorry, my bus is here. Bye!", "Bus came. Going.", "Okay, I'll go and come."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Tell your friend you are going home now.",
        te: "ఇప్పుడు ఇంటికి వెళ్తున్నానని స్నేహితులకి చెప్పండి.",
      },
      expected: ["I'm going home now.", "I am going home now."],
      options: ["I'm going home now.", "I'm going to home now.", "I'm go home now."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A long chat at the bus stop", te: "బస్ స్టాప్‌లో పెద్ద కబుర్లు" },
    scene: {
      en: "Usha, a neighbour, has talked for twenty minutes. Your bus is coming. End the chat kindly.",
      te: "పక్కింటావిడ ఉష గారు ఇరవై నిమిషాలుగా మాట్లాడుతున్నారు. మీ బస్ వస్తోంది. మర్యాదగా మాట ముగించండి.",
    },
    partner: { en: "Usha (a neighbour)", te: "ఉష (పక్కింటావిడ)" },
    skills: [
      { id: "end", label: { en: "Ending a chat", te: "మాట ముగించడం" } },
      { id: "kind", label: { en: "Being kind", te: "ఆప్యాయంగా" } },
    ],
    turns: [
      {
        partner: "Oh, wait! I have one more story for you.",
        te: "ఆగండి! మీకు ఇంకో కథ చెప్పాలి.",
        hint: { en: "Say sorry, give a reason, and say you have to leave.", te: "sorry చెప్పి, కారణం చెప్పి, వెళ్ళాలని చెప్పండి." },
        replies: [
          { say: "Sorry, it's getting late. I must go.", good: true, skill: "end" },
          { say: "Sorry, it's getting late. I must going.", good: false, skill: "end" },
          {
            say: "Enough! You talk too much.",
            good: false,
            skill: "end",
            react: { en: "Oh! I'm sorry. I didn't know.", te: "అయ్యో! sorry అండీ. నాకు తెలియలేదు." },
          },
        ],
      },
      {
        partner: "Oh, sorry! I kept you so long.",
        te: "అయ్యో, sorry! మిమ్మల్ని చాలాసేపు ఆపేశాను.",
        hint: { en: "Say it is fine, and that you enjoyed the chat.", te: "పర్వాలేదని, కబుర్లు నచ్చాయని చెప్పండి." },
        replies: [
          { say: "No problem. It was nice talking to you.", good: true, skill: "kind" },
          { say: "No problem. It was nice talk to you.", good: false, skill: "kind" },
        ],
      },
      {
        partner: "Nice talking to you too. Let's catch up soon.",
        te: "మీతో మాట్లాడటం నాకూ సంతోషమే. త్వరలో మళ్ళీ కలుద్దాం.",
        hint: { en: "Agree, and ask her to stay in contact.", te: "ఒప్పుకుని, ఫోన్‌లో టచ్‌లో ఉండమని అడగండి." },
        replies: [
          { say: "Sure. Let's keep in touch.", good: true, skill: "kind" },
          { say: "Sure. Let's keep touch.", good: false, skill: "kind", fixIt: "preposition" },
        ],
      },
      {
        partner: "Yes! Here's your bus. Bye, take care!",
        te: "అవును! మీ బస్ వచ్చింది. బై, జాగ్రత్త!",
        hint: { en: "Say goodbye, and wish her well too.", te: "బై చెప్పి, ఆవిడని కూడా జాగ్రత్తగా ఉండమనండి." },
        replies: [
          { say: "Bye! You take care too.", good: true, skill: "end" },
          { say: "Bye! I'll go and come.", good: false, skill: "end", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
