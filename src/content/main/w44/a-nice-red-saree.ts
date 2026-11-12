import type { Lesson } from "../../types";

/** Week 44, Day 3 (CURRICULUM §5): the order of describing words (opinion, size, colour, material) — I want a nice red cotton saree. */
export const day: Lesson = {
  id: "a-nice-red-saree",
  kind: "lesson",
  title: { en: "A Nice Red Saree", te: "రంగు, సైజు వరుస" },
  subtitle: "opinion, size, colour, material",
  summary: {
    en: "Learn the order of describing words: I want a nice red cotton saree. A small blue bag, please.",
    te: "వస్తువు ఎలా ఉందో చెప్పే పదాల వరుస నేర్చుకుందాం: I want a nice red cotton saree. A small blue bag, please.",
  },
  seo: {
    title: "Describing Clothes in the Right Order in English for Telugu Speakers",
    description:
      "Say I want a nice red cotton saree and A small blue bag, please. Simple lessons for Telugu speakers on the order of describing words.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "want", role: "action" },
    { text: "a nice red", role: "what" },
    { text: "cotton saree", role: "what" },
  ],
  core: [
    { en: "I want a nice red cotton saree.", te: "నాకు ఒక మంచి ఎర్రటి కాటన్ చీర కావాలి.", extra: ["colour"] },
    { en: "A small blue bag, please.", te: "ఒక చిన్న నీలం బ్యాగ్ ఇవ్వండి.", extra: ["an"] },
    { en: "Do you have a nice white cotton shirt?", te: "మంచి తెల్లటి కాటన్ చొక్కా ఉందా?", extra: ["any"] },
    { en: "I need a warm woollen shawl for winter.", te: "చలికాలానికి నాకు ఒక వెచ్చటి ఉన్ని శాలువా కావాలి.", extra: ["shawls"] },
    { en: "My friend wants a big black leather bag.", te: "నా స్నేహితుడికి ఒక పెద్ద నల్ల లెదర్ బ్యాగ్ కావాలి.", extra: ["want"] },
    { en: "Can I have a plain white cotton dhoti, please?", te: "ఒక ప్లెయిన్ తెల్లటి కాటన్ పంచె ఇస్తారా?", extra: ["colour"] },
    { en: "My neighbour bought a lovely green silk saree.", te: "మా పక్కింటి ఆవిడ ఒక అందమైన ఆకుపచ్చ పట్టు చీర కొన్నారు.", extra: ["buyed"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Pick one thing you are wearing. Say what it is like aloud, in the right order: a nice blue cotton …",
    te: "మీరు వేసుకున్న ఒక బట్ట ఎలా ఉందో సరైన వరుసలో గట్టిగా చెప్పండి: a nice blue cotton …",
  },
  words: [
    { en: "cotton", te: "కాటన్, నూలు" },
    { en: "material", te: "బట్ట, మెటీరియల్" },
    { en: "nice", te: "బాగున్న, మంచి" },
    { en: "shawl", te: "శాలువా" },
    { en: "woollen", te: "ఉన్ని" },
  ],
  grammar: ["word-order", "articles"],
  topics: ["shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Which word comes first?", te: "ఏ పదం ముందు?" },
      body: {
        en: "With many describing words, keep this order: what you think (nice), size (small), colour (red), material (cotton), then the thing.",
        te: "చాలా పదాలు వాడితే ఈ వరుస: మీ అభిప్రాయం (nice), సైజు (small), రంగు (red), బట్ట రకం (cotton), చివర్లో వస్తువు.",
      },
      bridge: {
        te: ["నాకు", "ఒక మంచి ఎర్రటి", "కాటన్ చీర", "కావాలి"],
        en: [
          { text: "I", role: "who" },
          { text: "want", role: "action" },
          { text: "a nice red", role: "what" },
          { text: "cotton saree", role: "what" },
        ],
      },
      examples: [
        { en: "I want a nice red cotton saree.", te: "నాకు ఒక మంచి ఎర్రటి కాటన్ చీర కావాలి." },
        { en: "A small blue bag, please.", te: "ఒక చిన్న నీలం బ్యాగ్ ఇవ్వండి." },
        { en: "Do you have a nice white cotton shirt?", te: "మంచి తెల్లటి కాటన్ చొక్కా ఉందా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "The order, step by step", te: "ఏది ముందు, ఏది తర్వాత" },
      items: [
        {
          form: "1. nice, lovely",
          useFor: { en: "First, what you think of it.", te: "ముందు, అది మీకు ఎలా అనిపిస్తుందో." },
          example: { en: "That's a lovely shawl.", te: "ఆ శాలువా చాలా బాగుంది." },
        },
        {
          form: "2. big, small",
          useFor: { en: "Then the size.", te: "తర్వాత సైజు." },
          example: { en: "A small blue bag, please.", te: "ఒక చిన్న నీలం బ్యాగ్ ఇవ్వండి." },
        },
        {
          form: "3. red, black",
          useFor: { en: "Then the colour.", te: "తర్వాత రంగు." },
          example: { en: "I need a big black umbrella.", te: "నాకు ఒక పెద్ద నల్ల గొడుగు కావాలి." },
        },
        {
          form: "4. cotton, silk",
          useFor: { en: "Last, the material, just before the thing.", te: "చివర్లో బట్ట రకం, వస్తువుకి సరిగ్గా ముందు." },
          example: { en: "I want a nice red cotton saree.", te: "నాకు ఒక మంచి ఎర్రటి కాటన్ చీర కావాలి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I want a red colour saree.",
      right: "I want a red saree.",
      why: {
        en: "Red is already a colour, so English drops the word colour here.",
        te: "red అంటేనే రంగు; అందుకే ఇంగ్లీష్‌లో ఇక్కడ colour అనరు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I want a red nice saree.",
      right: "I want a nice red saree.",
      why: {
        en: "What you think, like nice, comes first; the colour comes after it.",
        te: "nice లాంటి మీ అభిప్రాయం ముందు వస్తుంది; రంగు దాని తర్వాత.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "Ask the shop assistant for a saree: nice, red and cotton.",
        te: "షాపులో అసిస్టెంట్‌ని ఒక చీర అడగండి: బాగుండాలి, ఎర్రగా ఉండాలి, కాటన్ అయ్యుండాలి.",
      },
      options: ["I want a nice red cotton saree.", "I want a red cotton nice saree.", "I want nice red cotton saree."],
      answer: 0,
      why: {
        en: "First your opinion, then colour, then material; one saree also needs a.",
        te: "ముందు అభిప్రాయం, తర్వాత రంగు, తర్వాత బట్ట; ఒక్క చీర కాబట్టి a కూడా కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "A ___ bag, please.",
      te: "ఒక చిన్న నీలం బ్యాగ్ ఇవ్వండి.",
      options: ["small blue", "blue small", "small blue colour"],
      answer: 0,
      why: {
        en: "Size comes before colour, and blue already names the colour.",
        te: "సైజు రంగు కంటే ముందు వస్తుంది; blue అంటేనే రంగు, colour అక్కర్లేదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your friend Mohan wants a bag: big, black and leather. Tell the shopkeeper.",
        te: "మీ స్నేహితుడు మోహన్ గారికి ఒక బ్యాగ్ కావాలి: పెద్దది, నల్లది, లెదర్‌ది. షాపు వాళ్ళకి చెప్పండి.",
      },
      options: ["My friend wants a big black leather bag.", "My friend want a big black leather bag.", "My friend wants a black big leather bag."],
      answer: 0,
      why: {
        en: "One friend, like he, takes s on the verb; size comes before colour.",
        te: "ఒక్క స్నేహితుడు (he లాగా), అందుకే verb కి s; సైజు రంగు కంటే ముందు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "I want two cotton saree.",
      wrongIndex: 4,
      fix: "I want two cotton sarees.",
      why: {
        en: "After two, the thing takes s; Telugu changes it too, from చీర to చీరలు.",
        te: "రెండు తర్వాత s కావాలి; తెలుగులోనూ 'చీర' కాదు, 'చీరలు' అంటాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "At the shop, ask for a saree that is nice, green and silk.",
        te: "షాపులో ఒక చీర అడగండి: బాగుండాలి, ఆకుపచ్చ రంగు, పట్టుది.",
      },
      expected: ["I want a nice green silk saree.", "Do you have a nice green silk saree?", "Can I see a nice green silk saree?"],
      options: ["I want a nice green silk saree.", "I want a green colour silk saree.", "I want a silk green nice saree."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "You are going to Araku in winter. Ask for something warm: a woollen shawl.",
        te: "మీరు చలికాలంలో అరకు వెళ్తున్నారు. వెచ్చగా ఉండేది అడగండి: ఉన్ని శాలువా.",
      },
      expected: ["I need a warm woollen shawl, please.", "Do you have a warm woollen shawl?", "I need a woollen shawl, please."],
      options: ["I need a warm woollen shawl, please.", "I need warm woollen shawl, please.", "I need a woollen warm shawl, please."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the cloth shop", te: "బట్టల షాపులో" },
    scene: {
      en: "You are going to Araku in winter. At a shop in Visakhapatnam, you need a shawl and a small bag. Satish helps you.",
      te: "మీరు చలికాలంలో అరకు వెళ్తున్నారు. విశాఖపట్నంలో ఒక షాపులో మీకు ఒక శాలువా, ఒక చిన్న బ్యాగ్ కావాలి. సతీష్ గారు సహాయం చేస్తున్నారు.",
    },
    partner: { en: "Satish (shop assistant)", te: "సతీష్ (షాపు అసిస్టెంట్)" },
    voice: "b",
    skills: [
      { id: "describe", label: { en: "Saying what you want", te: "ఏం కావాలో చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening! What can I show you?",
        te: "నమస్కారం! ఏం చూపించమంటారు?",
        hint: { en: "Say you need a shawl, a warm one.", te: "మీకు ఒక శాలువా కావాలని, వెచ్చగా ఉండాలని చెప్పండి." },
        replies: [
          { say: "I'm looking for a warm woollen shawl.", good: true, skill: "describe" },
          { say: "I'm looking for a woollen warm shawl.", good: false, skill: "describe" },
        ],
      },
      {
        partner: "Here are some. Which colour do you like?",
        te: "ఇవిగోండి. మీకు ఏ రంగు ఇష్టం?",
        hint: { en: "Ask for a dark colour, like brown.", te: "గోధుమ రంగు లాంటి ముదురు రంగు అడగండి." },
        replies: [
          { say: "A dark brown one, please.", good: true, skill: "describe" },
          { say: "Dark brown colour one, please.", good: false, skill: "describe", fixIt: "indian-english" },
        ],
      },
      {
        partner: "This dark brown one is very soft. Anything else?",
        te: "ఈ ముదురు గోధుమ రంగుది చాలా మెత్తగా ఉంటుంది. ఇంకేమైనా కావాలా?",
        hint: { en: "Ask for a bag too: small and black.", te: "ఒక బ్యాగ్ కూడా అడగండి: చిన్నది, నల్లది." },
        replies: [
          { say: "Yes, a small black bag, please.", good: true, skill: "describe" },
          { say: "Yes, a black small bag, please.", good: false, skill: "describe" },
          {
            say: "Yes. Bring a small black bag. Hurry up.",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay. One minute, please.", te: "సరే, సరే. ఒక్క నిమిషం ఆగండి." },
          },
        ],
      },
      {
        partner: "Here you are. That's 1650 rupees for both.",
        te: "ఇదిగోండి. రెండూ కలిపి 1650 రూపాయలు.",
        hint: { en: "Ask if you can pay by UPI, and thank him.", te: "UPI తో కట్టొచ్చా అని అడిగి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Can I pay by UPI? Thank you.", good: true, skill: "polite" },
          { say: "Can I pay in UPI? Thank you.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
