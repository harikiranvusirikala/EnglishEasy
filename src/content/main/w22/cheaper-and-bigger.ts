import type { Lesson } from "../../types";

/** Week 22, Day 2 (CURRICULUM §4): comparatives with -er / -ier, and than — cheaper, bigger, smaller, heavier. */
export const day: Lesson = {
  id: "cheaper-and-bigger",
  kind: "lesson",
  title: { en: "Cheaper, Bigger", te: "చవకైనది, పెద్దది" },
  subtitle: "cheaper, bigger than",
  summary: {
    en: "Learn to compare two things in a shop: This packet is cheaper. That packet is bigger than this one.",
    te: "షాపులో రెండు వస్తువులను పోల్చడం నేర్చుకుందాం: This packet is cheaper. That packet is bigger than this one.",
  },
  seo: {
    title: "Comparing Prices: Cheaper and Bigger in English for Telugu Speakers",
    description:
      "Say This packet is cheaper and That packet is bigger than this one. Simple lessons for Telugu speakers on comparing two things in a shop.",
  },
  pattern: [
    { text: "That packet", role: "who" },
    { text: "is", role: "action" },
    { text: "bigger", role: "what" },
    { text: "than this one", role: "what" },
  ],
  core: [
    { en: "This packet is cheaper.", te: "ఈ ప్యాకెట్ చవక.", extra: ["more"] },
    { en: "That packet is bigger than this one.", te: "దీని కంటే ఆ ప్యాకెట్ పెద్దది.", extra: ["then"] },
    { en: "Which one is cheaper?", te: "ఏది చవక?", extra: ["What"] },
    { en: "This one is smaller and cheaper.", te: "ఇది చిన్నది, చవక కూడా.", extra: ["are"] },
    { en: "This bag is heavier than that one.", te: "దాని కంటే ఈ సంచి బరువు ఎక్కువ.", extra: ["more"] },
    { en: "The big packet is cheaper per kilo.", te: "కిలో లెక్కన పెద్ద ప్యాకెట్ చవక.", extra: ["kilos"] },
    { en: "I'll take the bigger one.", te: "పెద్దది తీసుకుంటాను.", extra: ["taking"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at two packets at home. Say which one is bigger and which one is cheaper.",
    te: "ఇంట్లో రెండు ప్యాకెట్లు చూడండి. ఏది పెద్దదో, ఏది చవకో ఇంగ్లీష్‌లో చెప్పండి.",
  },
  words: [
    { en: "cheaper", te: "ఇంకా చవక, తక్కువ ధర" },
    { en: "bigger", te: "ఇంకా పెద్ద" },
    { en: "smaller", te: "ఇంకా చిన్న" },
    { en: "heavier", te: "ఇంకా బరువైన" },
    { en: "than", te: "కంటే" },
  ],
  grammar: ["comparatives-superlatives", "this-that"],
  topics: ["shopping", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Comparing two things", te: "రెండింటిని పోల్చడం" },
      body: {
        en: "To compare two things, add -er to a short word: cheap becomes cheaper, small becomes smaller. Then say than and the other thing. Telugu puts దీని కంటే first; English puts than after the -er word.",
        te: "రెండింటిని పోల్చడానికి చిన్న పదానికి -er చేర్చండి: cheap → cheaper, small → smaller. తర్వాత than, ఆ తర్వాత రెండో వస్తువు. తెలుగులో 'దీని కంటే' ముందు వస్తుంది; ఇంగ్లీష్‌లో than, -er పదం తర్వాత వస్తుంది.",
      },
      bridge: {
        te: ["దీని కంటే", "ఆ ప్యాకెట్", "పెద్దది"],
        en: [
          { text: "That packet", role: "who" },
          { text: "is", role: "action" },
          { text: "bigger", role: "what" },
          { text: "than this one", role: "what" },
        ],
      },
      examples: [
        { en: "This packet is cheaper.", te: "ఈ ప్యాకెట్ చవక." },
        { en: "That packet is bigger than this one.", te: "దీని కంటే ఆ ప్యాకెట్ పెద్దది." },
        { en: "This bag is heavier than that one.", te: "దాని కంటే ఈ సంచి బరువు ఎక్కువ." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Making the -er word", te: "-er పదం ఎలా చేయాలి" },
      items: [
        {
          form: "cheap, cheaper",
          useFor: { en: "Most short words: just add -er.", te: "చాలా చిన్న పదాలకు -er చేర్చితే చాలు." },
          example: { en: "Which one is cheaper?", te: "ఏది చవక?" },
        },
        {
          form: "big, bigger",
          useFor: { en: "Big, hot, thin: write the last letter twice.", te: "big, hot, thin: చివరి అక్షరం రెండుసార్లు." },
          example: { en: "That packet is bigger than this one.", te: "దీని కంటే ఆ ప్యాకెట్ పెద్దది." },
        },
        {
          form: "heavy, heavier",
          useFor: { en: "A word ending in y: y becomes ier.", te: "చివర y ఉంటే, y పోయి ier వస్తుంది." },
          example: { en: "This bag is heavier than that one.", te: "దాని కంటే ఈ సంచి బరువు ఎక్కువ." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "This packet cheaper.",
      right: "This packet is cheaper.",
      why: {
        en: "Telugu ఈ ప్యాకెట్ చవక has no verb, but English needs is before cheaper.",
        te: "'ఈ ప్యాకెట్ చవక' లో verb లేదు; ఇంగ్లీష్‌లో cheaper ముందు is కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "This one is more cheaper.",
      right: "This one is cheaper.",
      why: {
        en: "Cheaper already means more cheap, so never add more before it.",
        te: "cheaper అంటేనే 'ఇంకా చవక'; దాని ముందు more అక్కర్లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["That packet is bigger than this one.", "That packet is more bigger than this one.", "That packet is big than this one."],
      answer: 0,
      why: {
        en: "Big doubles its g and adds -er, and it needs no more.",
        te: "big కి g రెండుసార్లు వచ్చి bigger అవుతుంది; more అక్కర్లేదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "This bag is heavier ___ that one.",
      te: "దాని కంటే ఈ సంచి బరువు ఎక్కువ.",
      options: ["than", "from", "to"],
      answer: 0,
      why: {
        en: "When you compare two things, Telugu కంటే becomes than.",
        te: "రెండింటిని పోల్చేటప్పుడు తెలుగు 'కంటే' ఇంగ్లీష్‌లో than అవుతుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Sona rice is 60 rupees a kilo. BPT rice is 50. What do you say?",
        te: "సోనా బియ్యం కిలో 60 రూపాయలు. BPT బియ్యం 50. ఏమంటారు?",
      },
      options: ["BPT rice is cheaper.", "Sona rice is cheaper.", "BPT rice is cheap than Sona."],
      answer: 0,
      why: {
        en: "Fifty is less than sixty, so the BPT rice costs less.",
        te: "50, 60 కంటే తక్కువ; అందుకే BPT బియ్యం చవక.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Which one is more cheaper?",
      wrongIndex: 3,
      fix: "Which one is cheaper?",
      why: {
        en: "Cheaper already means more cheap, so the word more is extra.",
        te: "cheaper లోనే 'ఇంకా' అనే అర్థం ఉంది; more అదనం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "There are two packets of sugar. Ask which one is cheaper.",
        te: "రెండు చక్కెర ప్యాకెట్లు ఉన్నాయి. ఏది చవకో అడగండి.",
      },
      expected: ["Which one is cheaper?", "Which packet is cheaper?"],
      options: ["Which one is cheaper?", "What one is more cheap?", "Which one cheaper?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "The shopkeeper shows you a small packet. Say you'll take the bigger one.",
        te: "షాపువారు చిన్న ప్యాకెట్ చూపించారు. పెద్దది తీసుకుంటానని చెప్పండి.",
      },
      expected: ["I'll take the bigger one.", "I'll take the big one."],
      options: ["I'll take the bigger one.", "I'll take the more big one.", "I'll taking the bigger one."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Two brands of tea", te: "రెండు బ్రాండ్ల టీ పొడి" },
    scene: {
      en: "You want tea powder. Salma, the shopkeeper, shows you two brands.",
      te: "మీకు టీ పొడి కావాలి. షాపు నడిపే సల్మా రెండు బ్రాండ్లు చూపిస్తున్నారు.",
    },
    partner: { en: "Salma (shopkeeper)", te: "సల్మా (షాపు యజమాని)" },
    skills: [{ id: "compare", label: { en: "Comparing", te: "పోల్చడం" } }],
    turns: [
      {
        partner: "Namaste! We have two brands of tea. Which one?",
        te: "నమస్తే! మా దగ్గర రెండు బ్రాండ్ల టీ పొడి ఉంది. ఏది కావాలి?",
        hint: { en: "Ask her to compare the prices of the two.", te: "రెండింటి ధరలు పోల్చి చెప్పమని ఆవిడని అడగండి." },
        replies: [
          { say: "Which one is cheaper?", good: true, skill: "compare" },
          { say: "What one is more cheaper?", good: false, skill: "compare" },
        ],
      },
      {
        partner: "This one. It's 120 rupees. That one is 150.",
        te: "ఇది. 120 రూపాయలు. అది 150.",
        hint: { en: "Point out that the 150 rupee packet is bigger.", te: "150 రూపాయల ప్యాకెట్ పెద్దదని చెప్పండి." },
        replies: [
          { say: "But that packet is bigger than this one.", good: true, skill: "compare" },
          { say: "But that packet bigger than this one.", good: false, skill: "compare", fixIt: "be" },
        ],
      },
      {
        partner: "Yes, that one is 500 grams. This one is 250.",
        te: "అవును, అది 500 గ్రాములు. ఇది 250.",
        hint: { en: "Say which packet you'll take.", te: "ఏ ప్యాకెట్ తీసుకుంటారో చెప్పండి." },
        replies: [
          { say: "Then I'll take the bigger one.", good: true, skill: "compare" },
          { say: "Then I'll take the more big one.", good: false, skill: "compare" },
          {
            say: "Small packet, big price. Shopkeepers are so clever!",
            good: false,
            skill: "compare",
            react: { en: "Ha ha! The company decides the price, not me.", te: "హహ! ధర కంపెనీ వాళ్ళు పెడతారండీ, నేను కాదు." },
          },
        ],
      },
      {
        partner: "Good choice. Anything else?",
        te: "మంచి ఎంపిక. ఇంకేమైనా?",
        hint: { en: "Say that's all, and thank her.", te: "అంతే అని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "No, that's all. Thank you.", good: true },
          { say: "No, that is all only. Thank you.", good: false, fixIt: "indian-english" },
        ],
      },
    ],
  },
};
