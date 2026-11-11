import type { Lesson } from "../../types";

/** Week 39, Day 3 (CURRICULUM §4): thanks for + a thing or + -ing, said warmly (Thank you for helping me. Thanks for the sweets.). */
export const day: Lesson = {
  id: "thank-you-so-much",
  kind: "lesson",
  title: { en: "Thank You So Much", te: "చాలా థ్యాంక్స్" },
  subtitle: "Thank you for + -ing",
  summary: {
    en: "Learn to thank people warmly and say what for: Thank you for helping me. Thanks for the sweets.",
    te: "దేనికో చెప్పి ఆప్యాయంగా థ్యాంక్స్ చెప్పడం నేర్చుకుందాం: Thank you for helping me. Thanks for the sweets.",
  },
  seo: {
    title: "Saying Thank You in English for Telugu Speakers",
    description:
      "Say Thank you for helping me, Thanks for the sweets and That's very kind of you. Simple lessons for Telugu speakers on thanking people.",
  },
  pattern: [
    { text: "Thank you", role: "action" },
    { text: "for helping", role: "what" },
    { text: "me.", role: "who" },
  ],
  core: [
    { en: "Thank you for helping me.", te: "నాకు సహాయం చేసినందుకు థ్యాంక్స్.", extra: ["help"] },
    { en: "Thanks for the sweets.", te: "స్వీట్లు ఇచ్చినందుకు థ్యాంక్స్.", extra: ["you"] },
    { en: "Thank you so much for coming.", te: "వచ్చినందుకు చాలా థ్యాంక్స్.", extra: ["come"] },
    { en: "That's very kind of you.", te: "మీరు చాలా మంచివారు.", extra: ["for"] },
    { en: "Thank you for taking me to the hospital.", te: "నన్ను ఆసుపత్రికి తీసుకెళ్ళినందుకు థ్యాంక్స్.", extra: ["take"] },
    { en: "I'm really grateful for your help.", te: "మీరు చేసిన సహాయానికి నిజంగా చాలా కృతజ్ఞతలు.", extra: ["helping"] },
    { en: "Thanks a lot. I really appreciate it.", te: "చాలా థ్యాంక్స్. మీరు చేసినదానికి నిజంగా చాలా సంతోషం.", extra: ["appreciating"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Thank someone today and say what for: Thank you for …",
    te: "ఈ రోజు ఎవరికైనా, దేనికో కూడా చెప్పి థ్యాంక్స్ చెప్పండి: Thank you for …",
  },
  words: [
    { en: "grateful", te: "కృతజ్ఞతతో, రుణపడి" },
    { en: "appreciate", te: "విలువ తెలుసుకోవడం, మెచ్చుకోవడం" },
    { en: "kind of you", te: "మీ మంచితనం" },
    { en: "thanks a lot", te: "చాలా థ్యాంక్స్" },
    { en: "trouble", te: "శ్రమ, ఇబ్బంది" },
  ],
  grammar: ["politeness-softening", "gerunds-infinitives"],
  topics: ["neighbours", "people", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Thanks for what?", te: "దేనికి థ్యాంక్స్?" },
      body: {
        en: "Say what you are thankful for: thank you for + a thing (thanks for the sweets), or thank you for + -ing (thank you for helping me). Add so much to make it warmer.",
        te: "దేనికి థ్యాంక్సో చెప్పండి: for + వస్తువు (thanks for the sweets), లేదా for + -ing (thank you for helping me). so much చేరిస్తే ఇంకా ఆప్యాయంగా ఉంటుంది.",
      },
      bridge: {
        te: ["నాకు సహాయం చేసినందుకు", "థ్యాంక్స్"],
        en: [
          { text: "Thank you", role: "action" },
          { text: "for helping", role: "what" },
          { text: "me.", role: "who" },
        ],
      },
      examples: [
        { en: "Thank you for helping me.", te: "నాకు సహాయం చేసినందుకు థ్యాంక్స్." },
        { en: "Thanks for the sweets.", te: "స్వీట్లు ఇచ్చినందుకు థ్యాంక్స్." },
        { en: "Thank you so much for coming.", te: "వచ్చినందుకు చాలా థ్యాంక్స్." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Ways to say thank you", te: "థ్యాంక్స్ చెప్పే విధాలు" },
      items: [
        {
          form: "Thank you for + -ing",
          useFor: { en: "For something someone did.", te: "ఎవరైనా చేసిన పనికి." },
          example: { en: "Thank you for taking me to the hospital.", te: "నన్ను ఆసుపత్రికి తీసుకెళ్ళినందుకు థ్యాంక్స్." },
        },
        {
          form: "Thanks for the …",
          useFor: { en: "For a thing someone gave.", te: "ఎవరైనా ఇచ్చిన వస్తువుకి." },
          example: { en: "Thanks for the sweets.", te: "స్వీట్లు ఇచ్చినందుకు థ్యాంక్స్." },
        },
        {
          form: "Sorry for the trouble.",
          useFor: { en: "When someone did a lot for you.", te: "ఎవరైనా మీ కోసం బాగా శ్రమపడినప్పుడు." },
          example: { en: "Thank you so much. Sorry for the trouble.", te: "చాలా థ్యాంక్స్. మీకు శ్రమ ఇచ్చినందుకు sorry." },
        },
        {
          form: "I'm grateful. I appreciate it.",
          useFor: { en: "A big, warm thank you.", te: "పెద్ద, మనస్ఫూర్తి థ్యాంక్స్." },
          example: { en: "I'm really grateful for your help.", te: "మీరు చేసిన సహాయానికి నిజంగా చాలా కృతజ్ఞతలు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Thank you for your helping.",
      right: "Thank you for your help.",
      why: {
        en: "Use your with help, or helping with no your; never the two together.",
        te: "your తో help, లేదా your లేకుండా helping; రెండూ కలిపి వాడరు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am appreciating your help.",
      right: "I really appreciate your help.",
      why: {
        en: "Appreciate is a feeling, so it does not take -ing, even though Telugu says -తున్నాను.",
        te: "appreciate మనసులోని భావం, దానికి -ing రాదు; తెలుగులో '-తున్నాను' అన్నా ఇంగ్లీష్‌లో వద్దు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your neighbour brought you food when you were sick. Thank her.",
        te: "మీకు ఒంట్లో బాగోలేనప్పుడు పక్కింటావిడ భోజనం తెచ్చారు. ఆవిడకి థ్యాంక్స్ చెప్పండి.",
      },
      options: ["Thank you for bringing the food.", "Thank you for bring the food.", "Why did you bring food?"],
      answer: 0,
      why: {
        en: "Thank you for + -ing names what she did, so bring needs -ing after for.",
        te: "thank you for + -ing తో ఆవిడ చేసిన పని చెప్తాం; for తర్వాత bring కి -ing కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Thanks ___ the lovely gift.",
      te: "మంచి బహుమతి ఇచ్చినందుకు థ్యాంక్స్.",
      options: ["for", "of", "about"],
      answer: 0,
      why: {
        en: "Thanks joins its reason with for; Telugu -కి becomes for here.",
        te: "థ్యాంక్స్ తర్వాత కారణం for తో వస్తుంది; తెలుగు '-కి' ఇక్కడ for అవుతుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Fatima helped you fill a form at the bank. What do you say?",
        te: "బ్యాంక్‌లో ఫారం నింపడానికి ఫాతిమా గారు సహాయం చేశారు. మీరేమంటారు?",
      },
      options: ["Thank you. That's very kind of you.", "Thank you. That's very kind for you.", "Thank you. You are kind person."],
      answer: 0,
      why: {
        en: "Kind of you is a fixed phrase that praises a kind act; for does not fit there.",
        te: "kind of you అనేది మంచి పనిని మెచ్చుకునే మాట; అక్కడ for రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Venkat always help everyone in our street.",
      wrongIndex: 2,
      fix: "Venkat always helps everyone in our street.",
      why: {
        en: "Venkat is one person, like he, so the verb takes s.",
        te: "వెంకట్ గారు ఒక్కరే (he లాగా), అందుకే verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend came to your Ugadi lunch. Thank her for coming.",
        te: "మీ ఇంట్లో ఉగాది భోజనానికి మీ స్నేహితురాలు వచ్చారు. వచ్చినందుకు థ్యాంక్స్ చెప్పండి.",
      },
      expected: ["Thank you so much for coming.", "Thank you for coming.", "Thanks for coming."],
      options: ["Thank you so much for coming.", "Thank you so much for come.", "Thank you so much to come."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your neighbour lent you a chair. Give it back and thank him.",
        te: "పక్కింటాయన మీకు ఒక కుర్చీ ఇచ్చారు. తిరిగి ఇచ్చేస్తూ థ్యాంక్స్ చెప్పండి.",
      },
      expected: ["Thank you for the chair.", "Thanks for the chair.", "Thank you for lending me the chair."],
      options: ["Thank you for the chair.", "Thank you for chair.", "Here, take your chair."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A big thank you", te: "మనస్ఫూర్తిగా థ్యాంక్స్" },
    scene: {
      en: "Last week you had a high fever, and your neighbour Venkat took you to the hospital. Today you meet him at the gate.",
      te: "పోయిన వారం మీకు బాగా జ్వరం వచ్చింది; పక్కింటి వెంకట్ గారు మిమ్మల్ని ఆసుపత్రికి తీసుకెళ్ళారు. ఈ రోజు గేట్ దగ్గర ఆయన కలిశారు.",
    },
    partner: { en: "Venkat (neighbour)", te: "వెంకట్ (పక్కింటాయన)" },
    voice: "b",
    skills: [{ id: "thank", label: { en: "Thanking", te: "థ్యాంక్స్ చెప్పడం" } }],
    turns: [
      {
        partner: "Hello! You look much better today.",
        te: "హలో! ఈ రోజు చాలా బాగున్నారు.",
        hint: { en: "Say you feel better, and thank him for his help.", te: "ఇప్పుడు బాగుందని చెప్పి, ఆయన సహాయానికి థ్యాంక్స్ చెప్పండి." },
        replies: [
          { say: "Yes, I feel better. Thank you for helping me.", good: true, skill: "thank" },
          { say: "Yes, I feel better. Thank you for help me.", good: false, skill: "thank" },
        ],
      },
      {
        partner: "Oh, it was nothing. Anyone would do that.",
        te: "అయ్యో, దానిదేముంది. ఎవరైనా అలాగే చేస్తారు.",
        hint: { en: "Say it was a big help, and thank him warmly.", te: "అది చాలా పెద్ద సహాయం అని చెప్పి, మనస్ఫూర్తిగా థ్యాంక్స్ చెప్పండి." },
        replies: [
          { say: "No, it was a big help. Thank you so much.", good: true, skill: "thank" },
          { say: "That's very kind of you. I'm really grateful.", good: true, skill: "thank" },
          {
            say: "Yes, it was nothing.",
            good: false,
            skill: "thank",
            react: { en: "Ha ha! Okay. I'm just happy you're well.", te: "హహ! సరే. మీరు బాగున్నారు, అదే చాలు." },
          },
        ],
      },
      {
        partner: "Is the fever gone? Are you taking the medicines?",
        te: "జ్వరం తగ్గిందా? మందులు వేసుకుంటున్నారా?",
        hint: { en: "Tell him about the fever, and how often you take the tablets.", te: "జ్వరం సంగతి, మాత్రలు రోజుకి ఎన్నిసార్లు వేసుకుంటున్నారో చెప్పండి." },
        replies: [
          { say: "It has gone. I take the tablets twice a day.", good: true },
          { say: "It have gone. I take the tablets twice a day.", good: false, fixIt: "he-she-s" },
        ],
      },
      {
        partner: "Good. Take care, and call me any time.",
        te: "మంచిది. జాగ్రత్తగా ఉండండి, ఎప్పుడైనా నాకు ఫోన్ చేయండి.",
        hint: { en: "Thank him once more, and say goodbye.", te: "ఇంకోసారి థ్యాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
        replies: [
          { say: "Thanks a lot. I really appreciate it. Bye!", good: true, skill: "thank" },
          { say: "Thanking you. Bye!", good: false, skill: "thank", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
