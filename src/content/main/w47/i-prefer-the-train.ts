import type { Lesson } from "../../types";

/** Week 47, Day 3 (CURRICULUM §5): prefer A to B; prefer + -ing — choosing how to travel to Hyderabad with a friend. */
export const day: Lesson = {
  id: "i-prefer-the-train",
  kind: "lesson",
  title: { en: "I Prefer the Train", te: "నాకు రైలే ఇష్టం" },
  subtitle: "prefer A to B; prefer + -ing",
  summary: {
    en: "Learn to say which one you like more: I prefer the train to the bus for long trips. Padma prefers walking in the evening.",
    te: "రెండిట్లో దేన్ని ఎక్కువ ఇష్టపడతారో చెప్పడం నేర్చుకుందాం: I prefer the train to the bus for long trips. Padma prefers walking in the evening.",
  },
  seo: {
    title: "Prefer in English for Telugu Speakers",
    description:
      "Say I prefer the train to the bus for long trips. Simple lessons for Telugu speakers on saying which one you like more.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "prefer", role: "action" },
    { text: "the train", role: "what" },
    { text: "to the bus", role: "what" },
  ],
  core: [
    { en: "I prefer the train.", te: "నాకు రైలే ఇష్టం.", extra: ["am"] },
    { en: "I prefer the train to the bus for long trips.", te: "దూర ప్రయాణాలకి నాకు బస్సు కంటే రైలే ఇష్టం.", extra: ["than"] },
    { en: "Padma prefers walking in the evening.", te: "పద్మ గారికి సాయంత్రం నడవడమే ఇష్టం.", extra: ["prefer"] },
    { en: "Which do you prefer, tea or coffee?", te: "మీకు ఏది ఇష్టం, టీయా, కాఫీయా?", extra: ["are"] },
    { en: "I prefer sitting by the window.", te: "నాకు కిటికీ పక్కన కూర్చోవడమే ఇష్టం.", extra: ["sit"] },
    { en: "Venkat prefers the bus because it is cheaper.", te: "వెంకట్ గారికి బస్సే ఇష్టం, ఎందుకంటే దాని ధర తక్కువ.", extra: ["than"] },
    {
      en: "The train is as fast as the bus, and much more comfortable.",
      te: "రైలు కూడా బస్సు అంత త్వరగా వెళ్తుంది, పైగా చాలా సౌకర్యంగా ఉంటుంది.",
      extra: ["than"],
    },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell a friend or neighbour one thing you prefer today, with I prefer …",
    te: "ఈ రోజు ఎవరైనా స్నేహితులకి గానీ పక్కింటివారికి గానీ I prefer … అని మీకు ఎక్కువ ఇష్టమైనది ఒకటి చెప్పండి.",
  },
  words: [
    { en: "prefer", te: "ఎక్కువ ఇష్టపడటం" },
    { en: "comfortable", te: "సౌకర్యంగా, హాయిగా" },
    { en: "overnight", te: "రాత్రంతా, రాత్రి ప్రయాణం" },
    { en: "berth", te: "బెర్త్, రైల్లో పడుకునే సీటు" },
    { en: "tiring", te: "అలసట కలిగించే" },
  ],
  grammar: ["gerunds-infinitives", "comparatives-superlatives", "present-simple"],
  topics: ["transport", "travel", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "prefer", te: "ఏది ఎక్కువ ఇష్టం" },
      body: {
        en: "To say which one you like more, use prefer. Put to before the other thing, not than: prefer the train to the bus. For an action, add -ing: prefer walking.",
        te: "రెండిట్లో ఏది ఎక్కువ ఇష్టమో prefer తో చెప్పండి. రెండోదాని ముందు than కాదు, to: prefer the train to the bus. పని అయితే -ing: prefer walking.",
      },
      bridge: {
        te: ["నాకు", "బస్సు కంటే", "రైలే", "ఇష్టం"],
        en: [
          { text: "I", role: "who" },
          { text: "prefer", role: "action" },
          { text: "the train", role: "what" },
          { text: "to the bus", role: "what" },
        ],
      },
      examples: [
        { en: "I prefer the train.", te: "నాకు రైలే ఇష్టం." },
        { en: "I prefer the train to the bus for long trips.", te: "దూర ప్రయాణాలకి నాకు బస్సు కంటే రైలే ఇష్టం." },
        { en: "Padma prefers walking in the evening.", te: "పద్మ గారికి సాయంత్రం నడవడమే ఇష్టం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Ways to use prefer", te: "prefer వాడే విధాలు" },
      items: [
        {
          form: "prefer + a thing",
          useFor: { en: "Say the thing you like more.", te: "ఎక్కువ ఇష్టమైన వస్తువు చెప్పడానికి." },
          example: { en: "I prefer filter coffee.", te: "నాకు ఫిల్టర్ కాఫీయే ఇష్టం." },
        },
        {
          form: "prefer A to B",
          useFor: { en: "Name both things.", te: "రెండిటి పేర్లూ చెప్పడానికి." },
          example: { en: "I prefer the train to the bus for long trips.", te: "దూర ప్రయాణాలకి నాకు బస్సు కంటే రైలే ఇష్టం." },
        },
        {
          form: "prefer + -ing",
          useFor: { en: "Say the action you like more.", te: "ఎక్కువ ఇష్టమైన పని చెప్పడానికి." },
          example: { en: "I prefer sitting by the window.", te: "నాకు కిటికీ పక్కన కూర్చోవడమే ఇష్టం." },
        },
        {
          form: "Which do you prefer?",
          useFor: { en: "Ask someone to choose.", te: "ఎవరినైనా ఎంచుకోమని అడగడానికి." },
          example: { en: "Which do you prefer, tea or coffee?", te: "మీకు ఏది ఇష్టం, టీయా, కాఫీయా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am preferring the train.",
      right: "I prefer the train.",
      why: {
        en: "Prefer is about what you like, so it does not take am and -ing.",
        te: "prefer మనసులో ఇష్టం గురించి; దానికి am, -ing రావు. 'ఇష్టపడుతున్నాను' అని అనుకుని ఇలా అనేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I prefer the train than the bus.",
      right: "I prefer the train to the bus.",
      why: {
        en: "With prefer, the second thing takes to; Telugu కంటే makes us say than.",
        te: "prefer తో రెండోదాని ముందు to వస్తుంది; తెలుగు 'కంటే' వల్ల than అనేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Say that Padma likes walking in the evening more.",
        te: "పద్మ గారికి సాయంత్రం నడవడమే ఎక్కువ ఇష్టమని చెప్పండి.",
      },
      options: ["Padma prefers walking in the evening.", "Padma prefer walking in the evening.", "Padma is prefer walking in the evening."],
      answer: 0,
      why: {
        en: "For one person like Padma, the verb takes s; Telugu ఇష్టం does not change, so the s gets lost.",
        te: "పద్మ గారు ఒక్కరే కాబట్టి verb కి s: prefers. తెలుగు 'ఇష్టం' మారదు కాబట్టి s మర్చిపోతాం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I prefer ___ in the morning.",
      te: "నాకు పొద్దున నడవడమే ఇష్టం.",
      options: ["walking", "walk", "to walking"],
      answer: 0,
      why: {
        en: "After prefer, an action takes -ing here, not the plain verb.",
        te: "prefer తర్వాత పని వస్తే -ing చేర్చండి; verb అలాగే రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend asks: Which do you prefer, the bus or the train? You like the train more.",
        te: "బస్సా, రైలా, మీకు ఏది ఇష్టం? అని స్నేహితులు అడిగారు. మీకు రైలే ఎక్కువ ఇష్టం.",
      },
      options: ["I prefer the train.", "I prefer the bus.", "Yes, I prefer."],
      answer: 0,
      why: {
        en: "Answer with the thing you like more; yes alone does not choose one.",
        te: "ఎక్కువ ఇష్టమైనదాని పేరుతో జవాబు చెప్పండి; yes ఒక్కటే అంటే ఏదీ ఎంచుకున్నట్టు కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Kumar prefers travelling at night in sleeper bus.",
      wrongIndex: 6,
      fix: "Kumar prefers travelling at night in a sleeper bus.",
      why: {
        en: "One bus needs a before it; Telugu బస్సులో has no word like a.",
        te: "ఒక బస్సు కాబట్టి ముందు a కావాలి; తెలుగు 'బస్సులో' లో a లాంటి పదం ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "A friend asks how you like to travel on long trips. Say you like the train more than the bus.",
        te: "దూర ప్రయాణాలకి ఎలా వెళ్ళడం ఇష్టమని స్నేహితులు అడుగుతున్నారు. బస్సు కంటే రైలే ఇష్టమని చెప్పండి.",
      },
      expected: ["I prefer the train to the bus.", "I prefer the train.", "I prefer the train for long trips."],
      options: ["I prefer the train to the bus.", "I am preferring the train to the bus.", "I prefer the train than the bus."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour asks you to walk with her in the morning. You like evening walks more.",
        te: "పొద్దున తనతో నడకకి రమ్మని పక్కింటావిడ అడుగుతున్నారు. మీకు సాయంత్రం నడకే ఎక్కువ ఇష్టం.",
      },
      expected: ["Sorry, I prefer walking in the evening.", "I prefer walking in the evening.", "I prefer evening walks."],
      options: ["Sorry, I prefer walking in the evening.", "Sorry, I prefer walk in the evening.", "Sorry, I am prefer walking in the evening."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Going to Hyderabad", te: "హైదరాబాద్ ప్రయాణం" },
    scene: {
      en: "You and your friend Venkat are going from Vijayawada to Hyderabad next week. You are deciding how to travel.",
      te: "మీరు, మీ స్నేహితుడు వెంకట్ గారు వచ్చే వారం విజయవాడ నుంచి హైదరాబాద్ వెళ్తున్నారు. ఎలా వెళ్ళాలో అనుకుంటున్నారు.",
    },
    partner: { en: "Venkat (your friend)", te: "వెంకట్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "prefer", label: { en: "Saying what you prefer", te: "ఏది ఇష్టమో చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "So, how shall we go to Hyderabad? Bus or train?",
        te: "మరి హైదరాబాద్‌కి ఎలా వెళ్దాం? బస్సా, రైలా?",
        hint: { en: "Say you like the train more than the bus.", te: "బస్సు కంటే రైలే మీకు ఇష్టమని చెప్పండి." },
        replies: [
          { say: "I prefer the train to the bus.", good: true, skill: "prefer" },
          { say: "I prefer the train. It's more comfortable.", good: true, skill: "prefer" },
          { say: "I am preferring the train to the bus.", good: false, skill: "prefer", fixIt: "state-ing" },
        ],
      },
      {
        partner: "But the bus is faster, and there are more buses.",
        te: "కానీ బస్సు త్వరగా వెళ్తుంది, బస్సులు కూడా ఎక్కువ ఉన్నాయి.",
        hint: { en: "Agree partly, and say the bus is tiring for you.", te: "కొంత ఒప్పుకుని, బస్సు ప్రయాణం మీకు అలసటగా ఉంటుందని చెప్పండి." },
        replies: [
          { say: "That's true, but the bus is very tiring for me.", good: true, skill: "prefer" },
          { say: "That's true, but the train is much more comfortable.", good: true, skill: "prefer" },
          {
            say: "No. You always choose the wrong thing.",
            good: false,
            skill: "polite",
            react: { en: "Wrong? I only said the bus is faster!", te: "తప్పా? బస్సు త్వరగా వెళ్తుందని మాత్రమే అన్నాను!" },
          },
        ],
      },
      {
        partner: "Okay, the overnight train, then. Do you want an upper berth?",
        te: "సరే, అయితే రాత్రి రైలే. మీకు పై బెర్త్ కావాలా?",
        hint: { en: "Say you like the lower berth more, and say why.", te: "కింది బెర్త్ ఎక్కువ ఇష్టమని, ఎందుకో చెప్పండి." },
        replies: [
          { say: "I prefer the lower berth. Climbing up is hard for me.", good: true, skill: "prefer" },
          { say: "I prefer lower berth. Climbing up is hard for me.", good: false, skill: "prefer", fixIt: "article" },
        ],
      },
      {
        partner: "No problem. I'll book two tickets tonight.",
        te: "పర్వాలేదు. ఈ రాత్రే రెండు టికెట్లు బుక్ చేస్తాను.",
        hint: { en: "Thank him, and say you will pay for your own ticket.", te: "థాంక్స్ చెప్పి, మీ టికెట్ డబ్బు మీరే ఇస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you, Venkat. I'll pay for my ticket.", good: true, skill: "polite" },
          { say: "Thank you, Venkat. I'll paying for my ticket.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
