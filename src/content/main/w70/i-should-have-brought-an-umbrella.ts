import type { Lesson } from "../../types";

/** Week 70, Day 3 (CURRICULUM §5): I should have + the form after have, a fixed phrase for small regrets — I should have brought an umbrella. */
export const day: Lesson = {
  id: "i-should-have-brought-an-umbrella",
  kind: "lesson",
  title: { en: "I Should Have Brought an Umbrella", te: "గొడుగు తెచ్చుకోవాల్సింది" },
  subtitle: "I should have … for small regrets",
  summary: {
    en: "Learn to talk about small things you didn't do: I should have brought an umbrella. I should have left home earlier.",
    te: "చేయకుండా వదిలేసిన చిన్న చిన్న పనుల గురించి చెప్పడం నేర్చుకుందాం: I should have brought an umbrella. I should have left home earlier.",
  },
  seo: {
    title: "I Should Have in English for Telugu Speakers",
    description:
      "Say I should have brought an umbrella and I should have left home earlier. Simple lessons for Telugu speakers on small regrets.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "should have brought", role: "action" },
    { text: "an umbrella", role: "what" },
  ],
  core: [
    { en: "I should have brought an umbrella.", te: "గొడుగు తెచ్చుకోవాల్సింది.", extra: ["bring"] },
    { en: "I should have left home earlier.", te: "ఇంటి నుంచి ఇంకా ముందే బయలుదేరాల్సింది.", extra: ["leave"] },
    { en: "I should have checked the weather.", te: "వాతావరణం ఎలా ఉందో చూసుకోవాల్సింది.", extra: ["check"] },
    { en: "We got caught in the rain on the way.", te: "దారిలో వర్షంలో చిక్కుకుపోయాం.", extra: ["at"] },
    { en: "I'm wet through. I should have taken an auto.", te: "పూర్తిగా తడిసిపోయాను. ఆటోలో వెళ్ళాల్సింది.", extra: ["take"] },
    { en: "What a downpour! Can I wait here until it stops?", te: "ఎంత పెద్ద వర్షం! ఆగేదాకా ఇక్కడ ఉండొచ్చా?", extra: ["stop"] },
    { en: "Next time, I'll keep an umbrella in my bag.", te: "ఈసారి నుంచి బ్యాగ్‌లో ఒక గొడుగు పెట్టుకుంటాను.", extra: ["keeping"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one small thing you forgot this week. Say it aloud: I should have …",
    te: "ఈ వారం మీరు మర్చిపోయిన ఒక చిన్న పని గుర్తు చేసుకోండి. దాన్ని గట్టిగా చెప్పండి: I should have …",
  },
  words: [
    { en: "should have", te: "…చేయాల్సింది" },
    { en: "regret", te: "చేసినదానికో, చేయనిదానికో బాధపడటం" },
    { en: "caught in the rain", te: "వర్షంలో చిక్కుకుపోవడం" },
    { en: "wet through", te: "పూర్తిగా తడిసిపోయి" },
    { en: "downpour", te: "కుండపోత వర్షం" },
  ],
  grammar: ["modal-perfects", "wish-hope-regret", "articles"],
  topics: ["weather", "shopping", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "I should have … for a small regret", te: "అలా చేసుంటే బాగుండేది" },
      body: {
        en: "To say you didn't do something and now you are sorry, say I should have and the form used after have: brought, left, checked. Learn it as one phrase.",
        te: "'…చేయాల్సింది' అనడానికి I should have తర్వాత have తో వచ్చే form వాడండి: brought, left, checked. దీన్ని ఒకే మాటగా గుర్తుపెట్టుకోండి.",
      },
      bridge: {
        te: ["గొడుగు", "తెచ్చుకోవాల్సింది"],
        en: [
          { text: "I", role: "who" },
          { text: "should have brought", role: "action" },
          { text: "an umbrella", role: "what" },
        ],
      },
      examples: [
        { en: "I should have brought an umbrella.", te: "గొడుగు తెచ్చుకోవాల్సింది." },
        { en: "I should have left home earlier.", te: "ఇంటి నుంచి ఇంకా ముందే బయలుదేరాల్సింది." },
        { en: "I should have checked the weather.", te: "వాతావరణం ఎలా ఉందో చూసుకోవాల్సింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "should or should have?", te: "should ఆ, should have ఆ?" },
      items: [
        {
          form: "I should + verb",
          useFor: { en: "Advice for now or later.", te: "ఇప్పుడు లేదా తర్వాత చేయాల్సిన పని." },
          example: { en: "I should take an umbrella today.", te: "ఈ రోజు గొడుగు తీసుకెళ్తే మంచిది." },
        },
        {
          form: "I should have + brought, left",
          useFor: { en: "You didn't do it, and now it is too late.", te: "చేయలేదు, ఇప్పుడు ఆలస్యం అయిపోయింది." },
          example: { en: "I should have brought an umbrella.", te: "గొడుగు తెచ్చుకోవాల్సింది." },
        },
        {
          form: "should've",
          useFor: { en: "How people say should have quickly.", te: "should have ని త్వరగా ఇలా అంటారు." },
          example: { en: "I should've left home earlier.", te: "ఇంటి నుంచి ఇంకా ముందే బయలుదేరాల్సింది." },
        },
        {
          form: "Next time, I'll …",
          useFor: { en: "Say what you will do differently.", te: "ఈసారి ఏం వేరేగా చేస్తారో చెప్పడానికి." },
          example: { en: "Next time, I'll keep an umbrella in my bag.", te: "ఈసారి నుంచి బ్యాగ్‌లో ఒక గొడుగు పెట్టుకుంటాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I should have bring an umbrella.",
      right: "I should have brought an umbrella.",
      why: {
        en: "After should have, bring changes to brought, the form used after have.",
        te: "should have తర్వాత bring కాదు, brought వస్తుంది; have తర్వాత వచ్చే form అదే.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "I should have brought umbrella.",
      right: "I should have brought an umbrella.",
      why: {
        en: "One umbrella needs an before it, because umbrella starts with the sound u.",
        te: "ఒక్క umbrella కాబట్టి ముందు an కావాలి; umbrella 'అ' శబ్దంతో మొదలవుతుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "You are wet. Your friend asks: Didn't you bring an umbrella? You didn't. Answer.",
        te: "మీరు తడిసిపోయారు. గొడుగు తేలేదా? అని స్నేహితులు అడిగారు. మీరు తేలేదు. జవాబు చెప్పండి.",
      },
      options: ["No, I didn't. I should have brought one.", "Yes, I didn't. I should have brought one.", "No, I didn't. I should brought one."],
      answer: 0,
      why: {
        en: "English answers the fact: you didn't bring it, so say no. Telugu అవును does not fit here.",
        te: "ఇంగ్లీష్‌లో జవాబు నిజాన్ని బట్టి: తేలేదు కాబట్టి No. ఇక్కడ తెలుగులో లాగా అవును అనకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I should have ___ home earlier.",
      te: "ఇంటి నుంచి ఇంకా ముందే బయలుదేరాల్సింది.",
      options: ["left", "leave", "leaving"],
      answer: 0,
      why: {
        en: "After should have, use left, the form that follows have, never leave.",
        te: "should have తర్వాత leave కాదు, left వస్తుంది; have తర్వాత వచ్చే form అదే.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "AP Weather Alert",
      lines: [
        "Heavy rain likely in Guntur district after 3 pm today.",
        "Carry an umbrella if you go out.",
        "Stay away from trees when there is lightning.",
      ],
      prompt: { en: "This message came on your phone. When will the rain start?", te: "ఈ మెసేజ్ మీ ఫోన్‌కి వచ్చింది. వర్షం ఎప్పుడు మొదలవుతుంది?" },
      options: ["After 3 pm", "Before noon", "Tomorrow morning"],
      answer: 0,
      why: {
        en: "The first line says the heavy rain is likely this afternoon, after three.",
        te: "మొదటి లైన్‌లో, ఈ రోజు మధ్యాహ్నం మూడు తర్వాత భారీ వర్షం పడొచ్చని ఉంది.",
      },
      say: "Heavy rain likely in Guntur district after 3 pm today.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "We got caught on the rain near the market.",
      wrongIndex: 3,
      fix: "We got caught in the rain near the market.",
      why: {
        en: "You are inside the rain, so English says caught in it, never on it.",
        te: "వర్షంలో అంటే in the rain; ఇంగ్లీష్‌లో on the rain అనరు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You reach the post office at 5:05. It closed at five. Say your small regret.",
        te: "మీరు ఐదు గంటల ఐదు నిమిషాలకి పోస్టాఫీస్‌కి చేరారు. అది ఐదింటికే మూసేశారు. మీ చిన్న బాధ చెప్పండి.",
      },
      expected: ["I should have left home earlier.", "I should have come earlier.", "I should've left home earlier.", "I should have left earlier."],
      options: ["I should have left home earlier.", "I should have leave home earlier.", "I should left home earlier."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "It is raining hard. Ask the shopkeeper if you can wait inside her shop.",
        te: "వర్షం గట్టిగా పడుతోంది. షాప్ లోపల ఉండొచ్చా అని షాప్ ఆవిడని అడగండి.",
      },
      expected: ["Can I wait here until the rain stops?", "Can I wait here for a few minutes?", "May I wait inside until it stops?", "Can I wait here until it stops?"],
      options: ["Can I wait here until the rain stops?", "Can I wait here until rain stops?", "Can I waiting here until the rain stops?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Caught in the rain", te: "వర్షంలో చిక్కుకుని" },
    scene: {
      en: "You are walking home from the market in Guntur. Suddenly it starts to pour. You run into Usha's small shop.",
      te: "మీరు గుంటూరులో మార్కెట్ నుంచి ఇంటికి నడుస్తున్నారు. ఉన్నట్టుండి కుండపోత వర్షం మొదలైంది. ఉష గారి చిన్న షాప్‌లోకి పరిగెత్తారు.",
    },
    partner: { en: "Usha (the shopkeeper)", te: "ఉష (షాప్ ఆవిడ)" },
    skills: [
      { id: "regret", label: { en: "Saying I should have", te: "I should have అనడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Oh, you're wet through! Please come inside.",
        te: "అయ్యో, పూర్తిగా తడిసిపోయారు! లోపలికి రండి.",
        hint: { en: "Thank her, and say you are sorry you left your umbrella at home.", te: "థాంక్స్ చెప్పి, గొడుగు ఇంట్లో వదిలేసినందుకు బాధపడుతూ చెప్పండి." },
        replies: [
          { say: "Thank you! I should have brought an umbrella.", good: true, skill: "regret" },
          { say: "Thank you! I should have bring an umbrella.", good: false, skill: "regret" },
        ],
      },
      {
        partner: "It was sunny this morning. Nobody expected this downpour.",
        te: "పొద్దున ఎండగా ఉంది. ఇంత పెద్ద వర్షం వస్తుందని ఎవరూ అనుకోలేదు.",
        hint: { en: "Agree, and say you didn't look at the weather on your phone.", te: "ఒప్పుకుని, ఫోన్‌లో వాతావరణం చూసుకోలేదని చెప్పండి." },
        replies: [
          { say: "True. I should have checked the weather on my phone.", good: true, skill: "regret" },
          { say: "Yes. I should have checked the forecast.", good: true, skill: "regret" },
          {
            say: "Just give me a towel. Quickly!",
            good: false,
            skill: "polite",
            react: { en: "Oh! Okay, one minute. Here you are.", te: "ఓ! సరే, ఒక్క నిమిషం. ఇదిగోండి." },
          },
        ],
      },
      {
        partner: "Do you want to buy an umbrella? We have some for 250 rupees.",
        te: "గొడుగు కొంటారా? మా దగ్గర 250 రూపాయలవి ఉన్నాయి.",
        hint: { en: "Say yes, and ask for a black one.", te: "సరే అని, నల్ల రంగుది అడగండి." },
        replies: [
          { say: "Yes, please. Can I have a black one?", good: true, skill: "polite" },
          { say: "Yes, please. Can I have black one?", good: false, skill: "polite", fixIt: "article" },
        ],
      },
      {
        partner: "Here you are. Next time, keep one in your bag!",
        te: "ఇదిగోండి. ఈసారి నుంచి బ్యాగ్‌లో ఒకటి పెట్టుకోండి!",
        hint: { en: "Agree with a smile, and thank her for her help.", te: "నవ్వుతూ ఒప్పుకుని, సాయానికి ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Yes, I will! Thank you for your help.", good: true, skill: "polite" },
          { say: "Yes, I will keeping one! Thank you.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
