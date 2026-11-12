import type { Lesson } from "../../types";

/** Week 47, Day 5 (CURRICULUM §5): comparing options and deciding (Which is better for …? I'll take …) — choosing a ceiling fan. */
export const day: Lesson = {
  id: "which-would-you-choose-fan",
  kind: "lesson",
  title: { en: "Which Would You Choose?", te: "మీరైతే ఏది తీసుకుంటారు?" },
  subtitle: "Which is better for …? I'll take …",
  summary: {
    en: "Learn to compare and decide: Which is better for daily use, the small one or the big one? I'll take the smaller one.",
    te: "పోల్చి, నిర్ణయం చెప్పడం నేర్చుకుందాం: Which is better for daily use, the small one or the big one? I'll take the smaller one.",
  },
  seo: {
    title: "Which Is Better and I'll Take in English for Telugu Speakers",
    description:
      "Ask Which is better for daily use? and say I'll take the smaller one. Simple lessons for Telugu speakers on choosing at a shop.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "'ll take", role: "action" },
    { text: "the smaller one", role: "what" },
  ],
  core: [
    { en: "Which is better for daily use?", te: "రోజూ వాడటానికి ఏది మంచిది?", extra: ["more"] },
    { en: "I'll take the smaller one. It's lighter and cheaper.", te: "చిన్నది తీసుకుంటాను. అది తేలికగా ఉంది, ధర కూడా తక్కువ.", extra: ["taking"] },
    { en: "Which would you choose, the white one or the brown one?", te: "మీరైతే ఏది తీసుకుంటారు, తెల్లదా, బ్రౌన్‌దా?", extra: ["will"] },
    { en: "This fan is quieter than that one.", te: "ఈ ఫ్యాన్ ఆ ఫ్యాన్ కంటే తక్కువ శబ్దం చేస్తుంది.", extra: ["then"] },
    { en: "The bigger one uses more power.", te: "పెద్దది ఎక్కువ కరెంట్ తీసుకుంటుంది.", extra: ["most"] },
    { en: "Which is better for daily use, the small one or the big one?", te: "రోజూ వాడటానికి ఏది మంచిది, చిన్నదా, పెద్దదా?", extra: ["more"] },
    { en: "I'll take this one, because it saves more power.", te: "ఇదే తీసుకుంటాను, ఎందుకంటే ఇది కరెంట్ ఎక్కువ ఆదా చేస్తుంది.", extra: ["taking"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "At a shop today, ask Which is better for …? before you buy something.",
    te: "ఈ రోజు షాపులో ఏదైనా కొనే ముందు Which is better for …? అని అడగండి.",
  },
  words: [
    { en: "ceiling fan", te: "సీలింగ్ ఫ్యాన్" },
    { en: "I'll take", te: "… తీసుకుంటాను" },
    { en: "lighter", te: "ఇంకా తేలికైన" },
    { en: "daily use", te: "రోజువారీ వాడకం" },
    { en: "star rating", te: "కరెంట్ ఆదాని చూపించే స్టార్లు" },
  ],
  grammar: ["comparatives-superlatives", "will", "question-words"],
  topics: ["shopping", "home", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Which is better? I'll take …", te: "ఏది మంచిది? … తీసుకుంటాను" },
      body: {
        en: "To compare two things, ask Which is better for …? To decide in the shop, say I'll take and the thing: I'll take the smaller one.",
        te: "రెండిటిని పోల్చాలంటే Which is better for …? అని అడగండి. షాపులో నిర్ణయం చెప్పాలంటే I'll take (తీసుకుంటాను) అనండి: I'll take the smaller one.",
      },
      bridge: {
        te: ["చిన్నది", "తీసుకుంటాను"],
        en: [
          { text: "I", role: "who" },
          { text: "'ll take", role: "action" },
          { text: "the smaller one", role: "what" },
        ],
      },
      examples: [
        { en: "Which is better for daily use?", te: "రోజూ వాడటానికి ఏది మంచిది?" },
        { en: "I'll take the smaller one. It's lighter and cheaper.", te: "చిన్నది తీసుకుంటాను. అది తేలికగా ఉంది, ధర కూడా తక్కువ." },
        { en: "Which would you choose, the white one or the brown one?", te: "మీరైతే ఏది తీసుకుంటారు, తెల్లదా, బ్రౌన్‌దా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking and deciding", te: "అడగడం, నిర్ణయించడం" },
      items: [
        {
          form: "Which is better for …?",
          useFor: { en: "Ask which one suits a need.", te: "ఏ అవసరానికి ఏది మంచిదో అడగడానికి." },
          example: { en: "Which is better for daily use?", te: "రోజూ వాడటానికి ఏది మంచిది?" },
        },
        {
          form: "Which would you choose?",
          useFor: { en: "Ask what the other person would pick.", te: "ఎదుటివారైతే ఏది తీసుకుంటారో అడగడానికి." },
          example: { en: "Which would you choose, the white one or the brown one?", te: "మీరైతే ఏది తీసుకుంటారు, తెల్లదా, బ్రౌన్‌దా?" },
        },
        {
          form: "I'll take …",
          useFor: { en: "Say your decision in the shop.", te: "షాపులో మీ నిర్ణయం చెప్పడానికి." },
          example: { en: "I'll take this one, because it saves more power.", te: "ఇదే తీసుకుంటాను, ఎందుకంటే ఇది కరెంట్ ఎక్కువ ఆదా చేస్తుంది." },
        },
        {
          form: "-er than",
          useFor: { en: "Give a reason by comparing.", te: "పోల్చి కారణం చెప్పడానికి." },
          example: { en: "This fan is quieter than that one.", te: "ఈ ఫ్యాన్ ఆ ఫ్యాన్ కంటే తక్కువ శబ్దం చేస్తుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "I'll take smaller one.",
      right: "I'll take the smaller one.",
      why: {
        en: "When you pick one of two, put the before it; Telugu has no word like the.",
        te: "రెండిట్లో ఒకటి ఎంచుకున్నప్పుడు ముందు the రావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please give one cover for the fan.",
      right: "Could you give me a bag for the fan?",
      why: {
        en: "In our shops a cover means a bag, but in English a cover goes over something.",
        te: "మన షాపుల్లో cover అంటే సంచి; కానీ ఇంగ్లీష్‌లో cover అంటే దేనిమీదైనా కప్పేది. bag అనండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask the shopkeeper which fan he would pick.", te: "షాపు ఆయనైతే ఏ ఫ్యాన్ తీసుకుంటారో అడగండి." },
      options: ["Which one would you choose?", "Which one you would choose?", "Which one would you choosing?"],
      answer: 0,
      why: {
        en: "After which, put would before you; Telugu keeps the normal order.",
        te: "Which తర్వాత would, you కంటే ముందు రావాలి; తెలుగులో మాటల వరుస మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "This fan is quieter ___ that one.",
      te: "ఈ ఫ్యాన్ ఆ ఫ్యాన్ కంటే తక్కువ శబ్దం చేస్తుంది.",
      options: ["than", "then", "as"],
      answer: 0,
      why: {
        en: "After quieter or cheaper, use than; then means after that.",
        te: "quieter, cheaper తర్వాత than వస్తుంది; then అంటే 'ఆ తర్వాత' అని.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "The shopkeeper asks: Which one will you take? You want the light, cheap fan.",
        te: "Which one will you take? అని షాపు ఆయన అడిగారు. మీకు తేలికైన, చవక ఫ్యాన్ కావాలి.",
      },
      options: ["I'll take the lighter one.", "I'll take the heavier one.", "I'm liking the lighter one."],
      answer: 0,
      why: {
        en: "Lighter is what you want, and I'll take says your choice; like does not take -ing.",
        te: "lighter మీకు కావాల్సింది, I'll take మీ నిర్ణయం చెప్తుంది; ఇష్టం చెప్పేటప్పుడు like కి -ing రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Usha say the white fan is better.",
      wrongIndex: 1,
      fix: "Usha says the white fan is better.",
      why: {
        en: "For one person like Usha, the verb takes s.",
        te: "ఉష గారు ఒక్కరే కాబట్టి verb కి s వస్తుంది: says.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You are buying a fan. Ask the shopkeeper which one is better for a small room.",
        te: "మీరు ఫ్యాన్ కొంటున్నారు. చిన్న రూమ్‌కి ఏది మంచిదని షాపు వారిని అడగండి.",
      },
      expected: ["Which is better for a small room?", "Which one is better for a small room?", "Which fan is better for a small room?"],
      options: ["Which is better for a small room?", "Which better for a small room?", "Which is better to a small room?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "You have decided. Tell the shopkeeper you want the smaller fan, because it is cheaper.",
        te: "మీరు నిర్ణయించుకున్నారు. చిన్న ఫ్యాన్ కావాలని, దాని ధర తక్కువని షాపు వారికి చెప్పండి.",
      },
      expected: ["I'll take the smaller one. It's cheaper.", "I'll take the smaller fan. It's cheaper.", "I'll take the smaller one, please."],
      options: ["I'll take the smaller one. It's cheaper.", "I'll take smaller one. It's cheaper.", "I'll take the smaller one. It cheaper."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A new ceiling fan", te: "కొత్త సీలింగ్ ఫ్యాన్" },
    scene: {
      en: "Your old ceiling fan makes a lot of noise. At the electrical shop, Gopal shows you two fans.",
      te: "మీ పాత సీలింగ్ ఫ్యాన్ చాలా శబ్దం చేస్తోంది. ఎలక్ట్రికల్ షాపులో గోపాల్ గారు మీకు రెండు ఫ్యాన్లు చూపిస్తున్నారు.",
    },
    partner: { en: "Gopal (shopkeeper)", te: "గోపాల్ (షాపు యజమాని)" },
    voice: "b",
    skills: [
      { id: "decide", label: { en: "Comparing and deciding", te: "పోల్చి నిర్ణయించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening! This fan is 2,400 rupees, and this one is 3,100.",
        te: "నమస్కారం! ఈ ఫ్యాన్ 2,400 రూపాయలు, ఇది 3,100.",
        hint: { en: "Ask him which one suits everyday use.", te: "రోజూ వాడటానికి ఏది సరిపోతుందో అడగండి." },
        replies: [
          { say: "Which is better for daily use?", good: true, skill: "decide" },
          { say: "Which one would you choose for daily use?", good: true, skill: "decide" },
          { say: "Which better for daily use?", good: false, skill: "decide", fixIt: "be" },
        ],
      },
      {
        partner: "The 3,100 one is quieter, and it has a five-star rating.",
        te: "3,100 ది తక్కువ శబ్దం చేస్తుంది, దానికి five-star rating కూడా ఉంది.",
        hint: { en: "Ask if the other fan is fine for a small room.", te: "రెండో ఫ్యాన్ చిన్న రూమ్‌కి సరిపోతుందా అని అడగండి." },
        replies: [
          { say: "Is the cheaper one okay for a small room?", good: true, skill: "decide" },
          {
            say: "3,100 for a fan? Are you mad?",
            good: false,
            skill: "polite",
            react: { en: "Mad? No! That's the price in every shop.", te: "పిచ్చా? లేదండీ! అన్ని షాపుల్లోనూ ఇదే ధర." },
          },
        ],
      },
      {
        partner: "Yes. For a small room, it's as good as the expensive one.",
        te: "అవును. చిన్న రూమ్‌కి ఇది ఖరీదైనదాంత బాగానే పనిచేస్తుంది.",
        hint: { en: "Decide: say you want the cheaper fan, and give a reason.", te: "నిర్ణయించండి: చవక ఫ్యాన్ కావాలని చెప్పి, ఒక కారణం చెప్పండి." },
        replies: [
          { say: "Then I'll take the cheaper one. It's lighter too.", good: true, skill: "decide" },
          { say: "Then I'll take cheaper one. It's lighter too.", good: false, skill: "decide", fixIt: "article" },
        ],
      },
      {
        partner: "Good choice. Do you need anything else?",
        te: "మంచి ఎంపిక. ఇంకేమైనా కావాలా?",
        hint: { en: "Say no, and politely ask for a bag to carry it.", te: "ఇంకేమీ వద్దని చెప్పి, తీసుకెళ్ళడానికి ఒక bag ఇవ్వమని మర్యాదగా అడగండి." },
        replies: [
          { say: "No, thank you. Could you give me a bag, please?", good: true, skill: "polite" },
          { say: "No, thank you. Please give one cover for this.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
