import type { Lesson } from "../../types";

/** Week 14, Day 2 (CURRICULUM §4): direction instructions — go straight, turn left at the signal, take the second right. */
export const day: Lesson = {
  id: "turn-left-go-straight",
  kind: "lesson",
  title: { en: "Turn Left, Go Straight", te: "ఎడమకు తిరగండి" },
  subtitle: "go straight / turn left",
  summary: {
    en: "Learn to give and follow simple directions: Go straight and turn left at the signal.",
    te: "దారి చెప్పడం, విని అర్థం చేసుకోవడం నేర్చుకుందాం: Go straight and turn left at the signal.",
  },
  seo: {
    title: "Giving Directions in English for Telugu Speakers",
    description:
      "Say Go straight and turn left at the signal, and Take the second left. Simple lessons for Telugu speakers on giving and following directions.",
  },
  pattern: [
    { text: "Turn left", role: "action" },
    { text: "at the signal", role: "what" },
  ],
  core: [
    { en: "Go straight and turn left.", te: "నేరుగా వెళ్ళి ఎడమకు తిరగండి.", extra: ["turning"] },
    { en: "Turn right at the signal.", te: "సిగ్నల్ దగ్గర కుడివైపు తిరగండి.", extra: ["on"] },
    { en: "Take the second left.", te: "రెండో ఎడమ మలుపులో తిరగండి.", extra: ["two"] },
    { en: "Go to the end of the road.", te: "రోడ్డు చివరి దాకా వెళ్ళండి.", extra: ["upto"] },
    { en: "The temple is on your right.", te: "గుడి మీకు కుడివైపు ఉంటుంది.", extra: ["in"] },
    { en: "Don't turn at the first signal.", te: "మొదటి సిగ్నల్ దగ్గర తిరగకండి.", extra: ["not"] },
    { en: "Then turn left near the school.", te: "తర్వాత స్కూల్ దగ్గర ఎడమకు తిరగండి.", extra: ["after"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Say the way from your door to the nearest shop: Go straight, turn left …",
    te: "మీ ఇంటి నుంచి దగ్గర్లో ఉన్న షాపుకి దారి ఇంగ్లీష్‌లో చెప్పండి: Go straight, turn left …",
  },
  words: [
    { en: "left", te: "ఎడమ" },
    { en: "right", te: "కుడి" },
    { en: "straight", te: "నేరుగా, తిన్నగా" },
    { en: "turn", te: "తిరగడం, మలుపు" },
    { en: "signal", te: "సిగ్నల్, ట్రాఫిక్ లైట్" },
  ],
  grammar: ["imperatives", "prepositions"],
  topics: ["directions"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Giving directions", te: "దారి చెప్పడం" },
      body: {
        en: "Directions start with the action: go, turn, take. Then say where, with at: at the signal, at the temple.",
        te: "దారి చెప్పేటప్పుడు ఇంగ్లీష్‌లో verb ముందు వస్తుంది: go, turn, take. ఎక్కడో తర్వాత at తో చెప్పండి: at the signal.",
      },
      bridge: {
        te: ["సిగ్నల్ దగ్గర", "ఎడమకు తిరగండి"],
        en: [
          { text: "Turn left", role: "action" },
          { text: "at the signal", role: "what" },
        ],
      },
      examples: [
        { en: "Go straight and turn left.", te: "నేరుగా వెళ్ళి ఎడమకు తిరగండి." },
        { en: "Turn right at the signal.", te: "సిగ్నల్ దగ్గర కుడివైపు తిరగండి." },
        { en: "Take the second left.", te: "రెండో ఎడమ మలుపులో తిరగండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Direction words", te: "దారి చెప్పే మాటలు" },
      items: [
        {
          form: "go straight",
          useFor: { en: "Do not turn; keep going.", te: "ఎక్కడా తిరగకుండా ముందుకే." },
          example: { en: "Go to the end of the road.", te: "రోడ్డు చివరి దాకా వెళ్ళండి." },
        },
        {
          form: "turn left / right",
          useFor: { en: "Change direction at a place.", te: "ఒక చోట దిశ మార్చడానికి." },
          example: { en: "Then turn left near the school.", te: "తర్వాత స్కూల్ దగ్గర ఎడమకు తిరగండి." },
        },
        {
          form: "take the second left",
          useFor: { en: "Count the turns: first, second, third.", te: "మలుపులు లెక్కపెట్టి చెప్పడానికి: first, second, third." },
          example: { en: "Take the second left.", te: "రెండో ఎడమ మలుపులో తిరగండి." },
        },
        {
          form: "on your right",
          useFor: { en: "Which side you will see the place.", te: "ఆ చోటు మీకు ఏ వైపు కనిపిస్తుందో." },
          example: { en: "The temple is on your right.", te: "గుడి మీకు కుడివైపు ఉంటుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Turn left at signal.",
      right: "Turn left at the signal.",
      why: {
        en: "Telugu has no the, but you both know which signal, so English adds the: Turn left at the signal.",
        te: "తెలుగులో the ఉండదు; ఏ సిగ్నలో ఇద్దరికీ తెలుసు కాబట్టి ఇంగ్లీష్‌లో the చేర్చాలి: Turn left at the signal.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Go upto the end.",
      right: "Go to the end of the road.",
      why: {
        en: "Upto is common on Indian signboards, but in speech say to the end of the road: Go to the end of the road.",
        te: "upto మన బోర్డుల మీద ఎక్కువ కనిపిస్తుంది; మాట్లాడేటప్పుడు to the end of the road అనండి: Go to the end of the road.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Tell someone to turn left at the signal.", te: "సిగ్నల్ దగ్గర ఎడమకు తిరగమని చెప్పండి." },
      options: ["Turn left at the signal.", "At the signal left turn.", "Turn left in the signal."],
      answer: 0,
      why: {
        en: "English puts the action first and uses at for the place; Telugu puts the action last.",
        te: "ఇంగ్లీష్‌లో verb ముందు, చోటుకి at; తెలుగులో verb చివర వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Take the ___ left.",
      te: "రెండో ఎడమ మలుపులో తిరగండి.",
      options: ["second", "two", "twice"],
      answer: 0,
      why: {
        en: "To count turns, say first, second, third, never two.",
        te: "మలుపులు లెక్కపెట్టేటప్పుడు first, second, third అనాలి; two అనకూడదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Someone says: The bank is on your right. Which side do you look?",
        te: "ఎవరో The bank is on your right అన్నారు. ఏ వైపు చూడాలి?",
      },
      options: ["To my right", "To my left", "Behind me"],
      answer: 0,
      why: {
        en: "On your right means the side of your right hand.",
        te: "on your right అంటే మీ కుడి చేతి వైపు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Go straight and turn left in the temple.",
      wrongIndex: 5,
      fix: "Go straight and turn left at the temple.",
      why: {
        en: "A point where you turn takes at; in means inside a place.",
        te: "తిరగాల్సిన చోటుకి at వాడాలి; in అంటే లోపల.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A visitor asks the way. Tell him to go straight, then turn right at the signal.",
        te: "ఒకాయన దారి అడుగుతున్నారు. నేరుగా వెళ్ళి, సిగ్నల్ దగ్గర కుడివైపు తిరగమని చెప్పండి.",
      },
      expected: ["Go straight and turn right at the signal.", "Go straight, then turn right at the signal."],
      options: ["Go straight and turn right at the signal.", "Go straight and turn right at signal.", "Straight go and right turn at the signal."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell someone they will see the temple on their right.",
        te: "గుడి వారికి కుడివైపు కనిపిస్తుందని చెప్పండి.",
      },
      expected: ["The temple is on your right.", "The temple will be on your right.", "You'll see the temple on your right."],
      options: ["The temple is on your right.", "The temple is in your right.", "Temple is your right side."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The way to the temple", te: "గుడికి దారి" },
    scene: {
      en: "You want to go to the Hanuman temple. Kamala sells flowers by the road.",
      te: "మీరు హనుమాన్ గుడికి వెళ్ళాలి. కమల గారు రోడ్డు పక్కన పూలు అమ్ముతున్నారు.",
    },
    partner: { en: "Kamala (flower seller)", te: "కమల (పూలు అమ్మే ఆవిడ)" },
    skills: [
      { id: "follow", label: { en: "Following directions", te: "దారి అర్థం చేసుకోవడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Flowers for the temple?",
        te: "నమస్కారం! గుడికి పూలు కావాలా?",
        hint: { en: "Say yes, and ask her the way to the temple.", te: "అవునని, గుడికి దారి అడగండి." },
        replies: [
          { say: "Yes, please. Can you tell me the way?", good: true, skill: "polite" },
          { say: "Yes. Where temple?", good: false, skill: "polite", fixIt: "be" },
        ],
      },
      {
        partner: "Go straight and turn left at the signal.",
        te: "నేరుగా వెళ్ళి, సిగ్నల్ దగ్గర ఎడమకు తిరగండి.",
        hint: { en: "Check the directions with her politely.", te: "ఆవిడ చెప్పిన దారిని మర్యాదగా సరిచూసుకోండి." },
        replies: [
          { say: "Left at the signal? Okay.", good: true, skill: "follow" },
          { say: "Sorry, can you say that again slowly?", good: true, skill: "polite" },
          {
            say: "Too fast! Say it again.",
            good: false,
            skill: "polite",
            react: { en: "Sorry! Straight, then left at the signal.", te: "సారీ! నేరుగా, తర్వాత సిగ్నల్ దగ్గర ఎడమకు." },
          },
        ],
      },
      {
        partner: "Then take the second right. It's on your left.",
        te: "తర్వాత రెండో కుడి మలుపులో తిరగండి. గుడి మీకు ఎడమవైపు ఉంటుంది.",
        hint: { en: "Ask if you can walk there.", te: "నడిచి వెళ్ళొచ్చా అని అడగండి." },
        replies: [
          { say: "Can I walk there?", good: true, skill: "follow" },
          { say: "I can walk there?", good: false, skill: "follow", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, only five minutes.",
        te: "వెళ్ళొచ్చు, ఐదు నిమిషాలే.",
        hint: { en: "Thank her, and buy some flowers.", te: "థాంక్స్ చెప్పి, కొన్ని పూలు అడగండి." },
        replies: [
          { say: "Thank you! Can I have some flowers, please?", good: true, skill: "polite" },
          { say: "Thank you! Give me one flowers.", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
    ],
  },
};
