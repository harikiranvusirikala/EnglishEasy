import type { Lesson } from "../../types";

/** Week 11, Day 3 (CURRICULUM §3): should / shouldn't for advice; Should I …? */
export const day: Lesson = {
  id: "should-and-shouldnt",
  kind: "lesson",
  title: { en: "Should & Shouldn't", te: "సలహా" },
  subtitle: "should / shouldn't",
  summary: {
    en: "Learn to give and ask for advice with should and shouldn't.",
    te: "should, shouldn't తో సలహా ఇవ్వడం, అడగడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Should and Shouldn't: Giving Advice in English for Telugu Speakers",
    description:
      "Say You should rest and You shouldn't eat oily food in English. Simple lessons for Telugu speakers on giving and asking for advice.",
  },
  pattern: [
    { text: "You", role: "who" },
    { text: "should", role: "action" },
    { text: "rest", role: "action" },
  ],
  core: [
    { en: "You should rest.", te: "మీరు విశ్రాంతి తీసుకోవాలి.", extra: ["to"] },
    { en: "You shouldn't eat oily food.", te: "మీరు నూనె పదార్థాలు తినకూడదు.", extra: ["don't"] },
    { en: "You should see a doctor.", te: "మీరు డాక్టర్‌ని కలవాలి.", extra: ["to"] },
    { en: "Should I take a tablet?", te: "నేను మాత్ర వేసుకోవాలా?", extra: ["Do"] },
    { en: "You should drink hot water.", te: "మీరు వేడి నీళ్ళు తాగాలి.", extra: ["drinking"] },
    { en: "He shouldn't walk in the rain.", te: "ఆయన వర్షంలో నడవకూడదు.", extra: ["don't"] },
    { en: "What should I do?", te: "నేను ఏం చేయాలి?", extra: ["will"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Give a friend one piece of advice in English: You should …",
    te: "మీ స్నేహితులకు ఇంగ్లీష్‌లో ఒక సలహా ఇవ్వండి: You should …",
  },
  words: [
    { en: "should", te: "…ాలి (సలహా)" },
    { en: "shouldn't", te: "…కూడదు" },
    { en: "oily", te: "నూనె ఎక్కువగా ఉన్న" },
    { en: "tablet", te: "మాత్ర" },
    { en: "advice", te: "సలహా" },
  ],
  grammar: ["should-must-have-to"],
  topics: ["health", "doctor"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Should for advice", te: "సలహాకి should" },
      body: {
        en: "To give advice, say should, then the action: You should rest. To say something is not good, say shouldn't: You shouldn't eat oily food. In Telugu, it is like …ాలి and …కూడదు.",
        te: "సలహా ఇవ్వడానికి should, తర్వాత verb: You should rest. మంచిది కాదని చెప్పడానికి shouldn't: You shouldn't eat oily food. తెలుగులో '…ాలి', '…కూడదు' లాంటిది.",
      },
      bridge: {
        te: ["మీరు", "విశ్రాంతి", "తీసుకోవాలి"],
        en: [
          { text: "You", role: "who" },
          { text: "should", role: "action" },
          { text: "rest", role: "action" },
        ],
      },
      examples: [
        { en: "You should rest.", te: "మీరు విశ్రాంతి తీసుకోవాలి." },
        { en: "You shouldn't eat oily food.", te: "మీరు నూనె పదార్థాలు తినకూడదు." },
        { en: "Should I take a tablet?", te: "నేను మాత్ర వేసుకోవాలా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Should, shouldn't, Should I?", te: "should, shouldn't, Should I? — ఎప్పుడు?" },
      items: [
        {
          form: "should",
          useFor: { en: "A good idea.", te: "మంచి ఆలోచన." },
          example: { en: "You should see a doctor.", te: "మీరు డాక్టర్‌ని కలవాలి." },
        },
        {
          form: "shouldn't",
          useFor: { en: "Not a good idea.", te: "మంచి ఆలోచన కాదు." },
          example: { en: "He shouldn't walk in the rain.", te: "ఆయన వర్షంలో నడవకూడదు." },
        },
        {
          form: "Should I …?",
          useFor: { en: "To ask for advice.", te: "సలహా అడగడానికి." },
          example: { en: "What should I do?", te: "నేను ఏం చేయాలి?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "You should to rest.",
      right: "You should rest.",
      why: {
        en: "After should, the verb comes straight, with no to: You should rest.",
        te: "should తర్వాత to రాదు, verb నేరుగా వస్తుంది: You should rest.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "You don't should eat oily food.",
      right: "You shouldn't eat oily food.",
      why: {
        en: "Should makes its own no with n't, without don't: You shouldn't eat oily food.",
        te: "should కి don't అక్కర్లేదు, shouldn't అంటే చాలు: You shouldn't eat oily food.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["You should to rest.", "You should rest.", "You should resting."],
      answer: 1,
      why: {
        en: "After should, use the plain verb, with no to or -ing: You should rest.",
        te: "should తర్వాత verb మామూలుగా వస్తుంది, to గానీ -ing గానీ రావు: You should rest.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "You ___ eat oily food.",
      te: "మీరు నూనె పదార్థాలు తినకూడదు.",
      options: ["shouldn't", "should", "don't should"],
      answer: 0,
      why: {
        en: "Oily food is not a good idea, so shouldn't: You shouldn't eat oily food.",
        te: "నూనె పదార్థాలు మంచిది కాదు, అందుకే shouldn't: You shouldn't eat oily food.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Your friend has a bad cough. Give advice.", te: "మీ స్నేహితుడికి బాగా దగ్గుగా ఉంది. సలహా ఇవ్వండి." },
      options: ["You should see a doctor.", "You should seeing a doctor.", "You should go doctor."],
      answer: 0,
      why: {
        en: "After should, the plain verb, and a before doctor: You should see a doctor.",
        te: "should తర్వాత verb మామూలుగానే, doctor ముందు a: You should see a doctor.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "You should drinking hot water.",
      wrongIndex: 2,
      fix: "You should drink hot water.",
      why: {
        en: "After should, say drink, not drinking: You should drink hot water.",
        te: "should తర్వాత drinking కాదు, drink: You should drink hot water.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend has a cold. Tell her to rest.",
        te: "మీ స్నేహితురాలికి జలుబు చేసింది. విశ్రాంతి తీసుకోమని చెప్పండి.",
      },
      expected: ["You should rest.", "You should rest at home."],
      options: ["You should rest.", "You should to rest.", "You should resting."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask the doctor what you should do.",
        te: "మీరు ఏం చేయాలో డాక్టర్‌ని అడగండి.",
      },
      expected: ["What should I do?"],
      options: ["What should I do?", "What I should do?", "What should I doing?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A friend with a cold", te: "జలుబుతో స్నేహితుడు" },
    scene: {
      en: "Your friend Imran has a bad cold. Give him good advice.",
      te: "మీ స్నేహితుడు ఇమ్రాన్‌కి బాగా జలుబు చేసింది. మంచి సలహా ఇవ్వండి.",
    },
    partner: { en: "Imran (a friend)", te: "ఇమ్రాన్ (స్నేహితుడు)" },
    voice: "b",
    skills: [{ id: "advice", label: { en: "should / shouldn't", te: "should / shouldn't వాడకం" } }],
    turns: [
      {
        partner: "I have a bad cold.",
        te: "నాకు బాగా జలుబు చేసింది.",
        hint: { en: "Advise him to drink something warm.", te: "వేడిగా ఏదైనా తాగమని సలహా ఇవ్వండి." },
        replies: [
          { say: "You should drink hot water.", good: true, skill: "advice" },
          { say: "You should drinking hot water.", good: false, skill: "advice" },
          {
            say: "Don't come near me!",
            good: false,
            skill: "advice",
            react: { en: "Ha! Okay, I'll keep my distance.", te: "హా! సరే, దూరంగానే ఉంటాను." },
          },
        ],
      },
      {
        partner: "Should I go to work?",
        te: "నేను పనికి వెళ్ళాలా?",
        hint: { en: "Say no, and advise rest at home.", te: "వద్దని చెప్పి, ఇంట్లో విశ్రాంతి తీసుకోమని సలహా ఇవ్వండి." },
        replies: [
          { say: "No, you should rest at home.", good: true, skill: "advice" },
          { say: "No, you should to rest at home.", good: false, skill: "advice" },
        ],
      },
      {
        partner: "Can I eat ice cream?",
        te: "ఐస్ క్రీం తినొచ్చా?",
        hint: { en: "Say no, with shouldn't.", te: "వద్దని shouldn't తో చెప్పండి." },
        replies: [
          { say: "No, you shouldn't eat cold things.", good: true, skill: "advice" },
          { say: "No, you don't should eat cold things.", good: false, skill: "advice" },
        ],
      },
      {
        partner: "Okay. Thank you for the advice.",
        te: "సరే. సలహాకి థాంక్యూ.",
        hint: { en: "Wish him well as you leave.", te: "వెళ్తూ, త్వరగా కోలుకోమని చెప్పండి." },
        replies: [
          { say: "Take care. Get well soon.", good: true },
          { say: "Take care. Get well fastly.", good: false },
        ],
      },
    ],
  },
};
