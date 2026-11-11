import type { Lesson } from "../../types";

/** Week 15, Day 4 (CURRICULUM §4): taking an auto — the fare, the meter, waiting and where to stop. */
export const day: Lesson = {
  id: "how-much-to-the-station",
  kind: "lesson",
  title: { en: "How Much to the Station?", te: "ఆటో ఛార్జీ" },
  subtitle: "How much is it to …?",
  summary: {
    en: "Learn to take an auto: ask the fare, ask for the meter, and say where to stop.",
    te: "ఆటో ఎక్కడం నేర్చుకుందాం: ఛార్జీ అడగడం, మీటర్ వేయమనడం, ఎక్కడ దింపాలో చెప్పడం.",
  },
  seo: {
    title: "Taking an Auto in English for Telugu Speakers",
    description:
      "Ask How much is it to the railway station? and say Please go by meter. Simple lessons for Telugu speakers on auto fares.",
  },
  pattern: [
    { text: "How much", role: "what" },
    { text: "is it", role: "action" },
    { text: "to the railway station?", role: "what" },
  ],
  core: [
    { en: "How much is it to the railway station?", te: "రైల్వే స్టేషన్‌కి ఎంత అవుతుంది?", extra: ["are"] },
    { en: "Please go by meter.", te: "మీటర్ వేసి తీసుకెళ్ళండి.", extra: ["on"] },
    { en: "Please drop me at the temple gate.", te: "నన్ను గుడి గేటు దగ్గర దింపండి.", extra: ["in"] },
    { en: "Please wait here for five minutes.", te: "ఇక్కడ ఐదు నిమిషాలు ఆగండి.", extra: ["minute"] },
    { en: "Do you charge extra for luggage?", te: "సామానుకి ఎక్స్‌ట్రా తీసుకుంటారా?", extra: ["luggages"] },
    { en: "The fare is 120 rupees by meter.", te: "మీటర్ ప్రకారం ఛార్జీ 120 రూపాయలు.", extra: ["are"] },
    { en: "That's too much. Can you make it 150?", te: "అది మరీ ఎక్కువ. 150 కి వస్తారా?", extra: ["give"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say aloud three things you tell an auto driver: the place, the meter, where to stop.",
    te: "ఆటో డ్రైవర్‌కి చెప్పే మూడు మాటలు గట్టిగా చెప్పండి: ఎక్కడికి, మీటర్, ఎక్కడ దింపాలి.",
  },
  words: [
    { en: "meter", te: "మీటర్" },
    { en: "fare", te: "ఛార్జీ" },
    { en: "extra", te: "ఎక్కువగా, అదనంగా" },
    { en: "luggage", te: "సామాను" },
    { en: "drop", te: "దింపడం" },
  ],
  grammar: ["imperatives", "question-words", "politeness-softening"],
  topics: ["transport", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Talking to an auto driver", te: "ఆటో డ్రైవర్‌తో మాట్లాడటం" },
      body: {
        en: "Before you get in, ask How much is it to …? Ask for the meter politely: Please go by meter. At the end, say where to stop: Please drop me at …",
        te: "ఆటో ఎక్కే ముందు How much is it to …? అని అడగండి. మీటర్ కావాలంటే మర్యాదగా Please go by meter అనండి. చివర్లో ఎక్కడ దిగాలో: Please drop me at …",
      },
      bridge: {
        te: ["రైల్వే స్టేషన్‌కి", "ఎంత", "అవుతుంది?"],
        en: [
          { text: "How much", role: "what" },
          { text: "is it", role: "action" },
          { text: "to the railway station?", role: "what" },
        ],
      },
      examples: [
        { en: "How much is it to the railway station?", te: "రైల్వే స్టేషన్‌కి ఎంత అవుతుంది?" },
        { en: "Please go by meter.", te: "మీటర్ వేసి తీసుకెళ్ళండి." },
        { en: "Please drop me at the temple gate.", te: "నన్ను గుడి గేటు దగ్గర దింపండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "In the auto", te: "ఆటోలో" },
      items: [
        {
          form: "How much is it to …?",
          useFor: { en: "Before you get in: the price.", te: "ఎక్కే ముందు: ఎంతో అడగడానికి." },
          example: { en: "How much is it to the railway station?", te: "రైల్వే స్టేషన్‌కి ఎంత అవుతుంది?" },
        },
        {
          form: "Please go by meter.",
          useFor: { en: "You want to pay what the meter shows.", te: "మీటర్ చూపించినంతే ఇవ్వాలనుకున్నప్పుడు." },
          example: { en: "The fare is 120 rupees by meter.", te: "మీటర్ ప్రకారం ఛార్జీ 120 రూపాయలు." },
        },
        {
          form: "Please wait here.",
          useFor: { en: "You will come back in a few minutes.", te: "కొద్ది నిమిషాల్లో తిరిగి వస్తారు." },
          example: { en: "Please wait here for five minutes.", te: "ఇక్కడ ఐదు నిమిషాలు ఆగండి." },
        },
        {
          form: "Please drop me at …",
          useFor: { en: "Where you want to get down.", te: "ఎక్కడ దిగాలో." },
          example: { en: "Please drop me at the temple gate.", te: "నన్ను గుడి గేటు దగ్గర దింపండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "How much you will take?",
      right: "How much will you charge?",
      why: {
        en: "In a question, will comes before you. For a fare, English says charge, not take.",
        te: "ప్రశ్నలో will ముందు, you తర్వాత. ఛార్జీ అడిగేటప్పుడు take అనరు, charge అంటారు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "I have two luggages.",
      right: "I have two bags.",
      why: {
        en: "Luggage has no plural, so count the bags instead.",
        te: "luggage కి plural లేదు; సంచులు లెక్కపెట్టి bags అనండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "You want the driver to use the meter. What do you say?", te: "డ్రైవర్ మీటర్ వేయాలి. ఏమంటారు?" },
      options: ["Please go by meter.", "Meter put, please.", "Go by meter. Don't cheat me."],
      answer: 0,
      why: {
        en: "Please makes it a kind request. Never say the driver will cheat you.",
        te: "Please అంటే మర్యాదగా అడగడం. మోసం చేస్తారని ముందే అనకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Please drop me ___ the temple gate.",
      te: "నన్ను గుడి గేటు దగ్గర దింపండి.",
      options: ["at", "on", "for"],
      answer: 0,
      why: {
        en: "A point where you stop takes at, like at the gate or at the bus stand.",
        te: "ఆగే చోటుకి at వాడాలి: at the gate, at the bus stand.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The driver says: Waiting is 20 rupees extra. What does it mean?",
        te: "డ్రైవర్ Waiting is 20 rupees extra అన్నారు. అర్థం ఏంటి?",
      },
      options: ["You pay 20 rupees more for waiting.", "He waits 20 minutes for free.", "The whole fare is only 20 rupees."],
      answer: 0,
      why: {
        en: "Extra means more money on top of the normal fare.",
        te: "extra అంటే మామూలు ఛార్జీకి పైన ఇంకా డబ్బు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "The fare are 120 rupees by meter.",
      wrongIndex: 2,
      fix: "The fare is 120 rupees by meter.",
      why: {
        en: "The fare is one amount, so use is, even with many rupees.",
        te: "fare ఒక్కటే మొత్తం; ఎన్ని రూపాయలు ఉన్నా is వాడాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the auto driver the fare to the bus stand.",
        te: "బస్టాండ్‌కి ఎంతో ఆటో డ్రైవర్‌ని అడగండి.",
      },
      expected: ["How much is it to the bus stand?", "How much to the bus stand?"],
      options: ["How much is it to the bus stand?", "Bus stand, how much you will take?", "How many is it to the bus stand?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask the driver to wait for five minutes.",
        te: "ఐదు నిమిషాలు ఆగమని డ్రైవర్‌ని అడగండి.",
      },
      expected: ["Please wait here for five minutes.", "Please wait for five minutes.", "Can you wait for five minutes?"],
      options: ["Please wait here for five minutes.", "Please wait here for five minute.", "Wait here. Five minutes. Okay?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Taking an auto", te: "ఆటోలో" },
    scene: {
      en: "You need to go to the railway station with one big bag. Rani stops her auto.",
      te: "మీరు ఒక పెద్ద సంచితో రైల్వే స్టేషన్‌కి వెళ్ళాలి. రాణి తన ఆటో ఆపారు.",
    },
    partner: { en: "Rani (auto driver)", te: "రాణి (ఆటో డ్రైవర్)" },
    skills: [
      { id: "fare", label: { en: "Fares", te: "ఛార్జీ" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Yes? Where do you want to go?",
        te: "చెప్పండి, ఎక్కడికి వెళ్ళాలి?",
        hint: { en: "Ask the fare to the railway station.", te: "రైల్వే స్టేషన్‌కి ఎంతో అడగండి." },
        replies: [
          { say: "How much is it to the railway station?", good: true, skill: "fare" },
          { say: "Railway station. How much you will take?", good: false, skill: "fare", fixIt: "question" },
        ],
      },
      {
        partner: "200 rupees. There is a lot of traffic.",
        te: "200 రూపాయలు. ట్రాఫిక్ చాలా ఉంది.",
        hint: { en: "Say politely it is a lot, and ask for the meter.", te: "ఎక్కువ అని మర్యాదగా చెప్పి, మీటర్ వేయమని అడగండి." },
        replies: [
          { say: "That's a bit much. Please go by meter.", good: true, skill: "polite" },
          {
            say: "200? Are you a thief?",
            good: false,
            skill: "polite",
            react: { en: "Thief? Please talk nicely. Okay, I'll go by meter.", te: "దొంగా? మర్యాదగా మాట్లాడండి. సరే, మీటర్ వేస్తాను." },
          },
        ],
      },
      {
        partner: "Okay, by meter. We are near the station. Where exactly?",
        te: "సరే, మీటర్ ప్రకారమే. స్టేషన్ దగ్గరికి వచ్చాం. ఎక్కడ ఆపాలి?",
        hint: { en: "Ask her to stop at the main gate.", te: "మెయిన్ గేటు దగ్గర దింపమని అడగండి." },
        replies: [
          { say: "Please drop me at the main gate.", good: true, skill: "fare" },
          { say: "Please drop me in the main gate.", good: false, skill: "fare", fixIt: "preposition" },
        ],
      },
      {
        partner: "Here we are. The meter shows 140 rupees.",
        te: "వచ్చేశాం. మీటర్ 140 రూపాయలు చూపిస్తోంది.",
        hint: { en: "Pay her, and thank her.", te: "డబ్బు ఇచ్చి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Here is 140 rupees. Thank you!", good: true, skill: "polite" },
          { say: "Here is 140 rupee. Thank you!", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
    ],
  },
};
