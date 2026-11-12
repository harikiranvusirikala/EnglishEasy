import type { Lesson } from "../../types";

/** Week 70, Day 1 (CURRICULUM §5): I wish + past / could for things you would like to be different now — I wish I could swim. */
export const day: Lesson = {
  id: "i-wish-i-could-swim",
  kind: "lesson",
  title: { en: "I Wish I Could Swim", te: "ఈత వస్తే బాగుండేది" },
  subtitle: "I wish + past / could",
  summary: {
    en: "Learn to say what you would like to be different now: I wish I could swim. I wish my house was nearer the temple.",
    te: "ఇప్పుడు వేరేలా ఉంటే బాగుండు అనుకునేవి చెప్పడం నేర్చుకుందాం: I wish I could swim. I wish my house was nearer the temple.",
  },
  seo: {
    title: "I Wish I Could in English for Telugu Speakers",
    description:
      "Say I wish I could swim and I wish my house was nearer the temple. Simple lessons for Telugu speakers on wishes about now.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "wish", role: "action" },
    { text: "I could swim", role: "what" },
  ],
  core: [
    { en: "I wish I could swim.", te: "నాకు ఈత వస్తే బాగుండేది.", extra: ["can"] },
    { en: "I wish my house was nearer the temple.", te: "మా ఇల్లు గుడికి ఇంకా దగ్గరగా ఉంటే బాగుండేది.", extra: ["is"] },
    { en: "I wish I had more time.", te: "నాకు ఇంకా టైమ్ ఉంటే బాగుండేది.", extra: ["have"] },
    { en: "I wish I knew how to drive.", te: "నాకు డ్రైవింగ్ వస్తే బాగుండేది.", extra: ["know"] },
    { en: "I wish I could go into the water with you.", te: "మీతో పాటు నేనూ నీళ్ళలోకి రాగలిగితే బాగుండేది.", extra: ["can"] },
    { en: "The water is too deep here. Let's stay in the shallow part.", te: "ఇక్కడ నీళ్ళు చాలా లోతుగా ఉన్నాయి. లోతు తక్కువ ఉన్న చోటే ఉందాం.", extra: ["deeply"] },
    { en: "If I could swim, I would go to the swimming pool every day.", te: "నాకు ఈత వస్తే, రోజూ స్విమ్మింగ్ పూల్‌కి వెళ్ళొచ్చు.", extra: ["will"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one thing you would like to be different. Say it aloud: I wish I could …",
    te: "వేరేలా ఉంటే బాగుండు అనుకునే ఒక విషయం గుర్తు చేసుకోండి. దాన్ని గట్టిగా చెప్పండి: I wish I could …",
  },
  words: [
    { en: "float", te: "నీటి మీద తేలడం" },
    { en: "deep", te: "లోతైన" },
    { en: "shallow", te: "లోతు తక్కువ ఉన్న" },
    { en: "life jacket", te: "లైఫ్ జాకెట్, నీళ్ళలో మునగకుండా వేసుకునే జాకెట్" },
    { en: "swimming pool", te: "స్విమ్మింగ్ పూల్, ఈత కొలను" },
  ],
  grammar: ["wish-hope-regret", "can-could", "conditionals"],
  topics: ["feelings", "travel", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "I wish … about now", te: "ఇప్పుడు ఇలా ఉంటే బాగుండు" },
      body: {
        en: "To say you want something to be different now, use I wish with a past form: I wish I could swim. The past form here still means now.",
        te: "ఇప్పుడు వేరేలా ఉంటే బాగుండు అనడానికి I wish తర్వాత past form వాడండి: I wish I could swim (ఈత వస్తే బాగుండేది). past form అయినా అర్థం ఇప్పటి గురించే.",
      },
      bridge: {
        te: ["నాకు", "ఈత వస్తే", "బాగుండేది"],
        en: [
          { text: "I", role: "who" },
          { text: "wish", role: "action" },
          { text: "I could swim", role: "what" },
        ],
      },
      examples: [
        { en: "I wish I could swim.", te: "నాకు ఈత వస్తే బాగుండేది." },
        { en: "I wish my house was nearer the temple.", te: "మా ఇల్లు గుడికి ఇంకా దగ్గరగా ఉంటే బాగుండేది." },
        { en: "I wish I had more time.", te: "నాకు ఇంకా టైమ్ ఉంటే బాగుండేది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "wish or hope?", te: "wish ఆ, hope ఆ?" },
      items: [
        {
          form: "I wish I could …",
          useFor: { en: "Something you can't do now.", te: "ఇప్పుడు మీరు చేయలేని పని." },
          example: { en: "I wish I could swim.", te: "నాకు ఈత వస్తే బాగుండేది." },
        },
        {
          form: "I wish + was, had, knew",
          useFor: { en: "Something that is not true now.", te: "ఇప్పుడు నిజం కాని విషయం." },
          example: { en: "I wish I knew how to drive.", te: "నాకు డ్రైవింగ్ వస్తే బాగుండేది." },
        },
        {
          form: "I hope …",
          useFor: { en: "Something that can still happen.", te: "ఇంకా జరగొచ్చు అనుకునే విషయం." },
          example: { en: "I hope it doesn't rain tomorrow.", te: "రేపు వర్షం పడదనే అనుకుంటున్నాను." },
        },
        {
          form: "If I could …, I would …",
          useFor: { en: "Imagine what you would do.", te: "అలా అయితే ఏం చేస్తారో ఊహించి చెప్పడానికి." },
          example: { en: "If I could swim, I would go to the swimming pool every day.", te: "నాకు ఈత వస్తే, రోజూ స్విమ్మింగ్ పూల్‌కి వెళ్ళొచ్చు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I wish I can swim.",
      right: "I wish I could swim.",
      why: {
        en: "After I wish, can changes to could, even when you mean now.",
        te: "I wish తర్వాత can కాదు, could వస్తుంది; అర్థం ఇప్పటి గురించే అయినా.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I want to go for swimming.",
      right: "I want to go swimming.",
      why: {
        en: "Go takes the -ing word straight, like go swimming and go shopping, with no for.",
        te: "go తర్వాత -ing పదం నేరుగా వస్తుంది: go swimming, go shopping; మధ్యలో for రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "Your friend swims very well, but you can't. Tell her what you would like.",
        te: "మీ స్నేహితురాలు బాగా ఈత కొడతారు, మీకు రాదు. మీకు ఏం కావాలనిపిస్తోందో ఆవిడకి చెప్పండి.",
      },
      options: ["I wish I could swim like you.", "I wish I can swim like you.", "I am wishing I could swim like you."],
      answer: 0,
      why: {
        en: "Wish is a feeling, so no -ing, and after it can changes to could.",
        te: "wish ఒక మనసులోని భావం, అందుకే -ing రాదు; దాని తర్వాత can కాదు, could.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I wish my house ___ nearer the temple.",
      te: "మా ఇల్లు గుడికి ఇంకా దగ్గరగా ఉంటే బాగుండేది.",
      options: ["was", "is", "will be"],
      answer: 0,
      why: {
        en: "After I wish, use the past form was, even for a wish about now.",
        te: "I wish తర్వాత past form was వస్తుంది, కోరిక ఇప్పటిదైనా.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "At the beach, you want something that helps you float. Ask the lifeguard.",
        te: "బీచ్‌లో, నీటి మీద తేలడానికి సాయం చేసేది ఏదైనా కావాలి. lifeguard ని అడగండి.",
      },
      options: ["Can I have a life jacket, please?", "Can I have life jacket, please?", "Can I have one life jackets, please?"],
      answer: 0,
      why: {
        en: "One life jacket needs a before it; Telugu has no word like a.",
        te: "ఒక్క life jacket కాబట్టి ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My cousin Ramesh swim very well.",
      wrongIndex: 3,
      fix: "My cousin Ramesh swims very well.",
      why: {
        en: "One person, like he or she, takes s on the verb; Telugu has no such s.",
        te: "ఒక్కరైతే (he, she లాగా) verb కి s వస్తుంది; తెలుగులో ఇలాంటి s ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend swims very well. Ask her when she learned.",
        te: "మీ స్నేహితురాలు చాలా బాగా ఈత కొడతారు. ఎప్పుడు నేర్చుకున్నారో ఆవిడని అడగండి.",
      },
      expected: ["When did you learn to swim?", "Where did you learn to swim?", "How did you learn to swim?", "When did you learn?"],
      options: ["When did you learn to swim?", "When you learned to swim?", "When did you learned to swim?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friends are going into the sea. You can't swim. Tell them how you feel.",
        te: "మీ స్నేహితులు సముద్రంలోకి వెళ్తున్నారు. మీకు ఈత రాదు. మీకు ఎలా అనిపిస్తోందో చెప్పండి.",
      },
      expected: ["I wish I could swim.", "I can't swim. I wish I could.", "I wish I could go into the water with you."],
      options: ["I wish I could swim.", "I wish I can swim.", "I wish I could to swim."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A morning at Rushikonda", te: "రుషికొండలో ఒక పొద్దున" },
    scene: {
      en: "You are at Rushikonda beach in Visakhapatnam with your friend Grace. She loves the sea, but you can't swim.",
      te: "మీరు విశాఖపట్నంలో రుషికొండ బీచ్‌లో మీ స్నేహితురాలు గ్రేస్ గారితో ఉన్నారు. ఆవిడకి సముద్రం అంటే ఇష్టం, కానీ మీకు ఈత రాదు.",
    },
    partner: { en: "Grace (your friend)", te: "గ్రేస్ (మీ స్నేహితురాలు)" },
    skills: [
      { id: "wish", label: { en: "Saying I wish", te: "I wish అనడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Come on! The water is lovely. Let's go in!",
        te: "రండి! నీళ్ళు చాలా బాగున్నాయి. లోపలికి వెళ్దాం!",
        hint: { en: "Say you can't swim, and that you would like to.", te: "మీకు ఈత రాదని, వస్తే బాగుండేదని చెప్పండి." },
        replies: [
          { say: "I can't swim. I wish I could!", good: true, skill: "wish" },
          { say: "I can't swim. I wish I can!", good: false, skill: "wish" },
        ],
      },
      {
        partner: "Don't worry. Stay in the shallow part with me.",
        te: "పర్లేదు. నాతో పాటు లోతు తక్కువ ఉన్న చోట ఉండండి.",
        hint: { en: "Agree, but ask for something to help you float first.", te: "సరే అని, ముందు తేలడానికి సాయం చేసేది ఏదైనా అడగండి." },
        replies: [
          { say: "Okay. Can I get a life jacket first?", good: true, skill: "wish" },
          { say: "Okay. Can I get life jacket first?", good: false, skill: "wish", fixIt: "article" },
          {
            say: "No! Stop pulling me into the water.",
            good: false,
            skill: "polite",
            react: { en: "Sorry! I won't pull you. Come only if you want.", te: "సారీ! లాగను. మీకు ఇష్టమైతేనే రండి." },
          },
        ],
      },
      {
        partner: "There! You're floating! How does it feel?",
        te: "అదిగో! మీరు తేలుతున్నారు! ఎలా అనిపిస్తోంది?",
        hint: { en: "Say it feels great, and wish you could come every week.", te: "చాలా బాగుందని చెప్పి, ప్రతి వారం రాగలిగితే బాగుండేదని అనండి." },
        replies: [
          { say: "It feels great! I wish I could come here every week.", good: true, skill: "wish" },
          { say: "It feels great! I wish I will come here every week.", good: false, skill: "wish" },
        ],
      },
      {
        partner: "Then let's come again next Sunday!",
        te: "అయితే వచ్చే ఆదివారం మళ్ళీ వద్దాం!",
        hint: { en: "Agree happily, and thank her for her help.", te: "సంతోషంగా ఒప్పుకుని, సాయానికి ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Yes, let's! Thank you for your help, Grace.", good: true, skill: "polite" },
          { say: "Yes, let's come on next Sunday! Thank you, Grace.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
