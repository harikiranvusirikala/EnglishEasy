import type { Lesson } from "../../types";

/** Week 39, Day 1 (CURRICULUM §4): sorry for + -ing, then a short reason (I'm sorry for being late. I missed the bus.). */
export const day: Lesson = {
  id: "sorry-for-being-late",
  kind: "lesson",
  title: { en: "I'm Sorry for Being Late", te: "ఆలస్యం అయింది, sorry" },
  subtitle: "I'm sorry for + -ing",
  summary: {
    en: "Learn to say sorry and give a reason: I'm sorry for being late. I missed the bus.",
    te: "sorry చెప్పి, కారణం చెప్పడం నేర్చుకుందాం: I'm sorry for being late. I missed the bus.",
  },
  seo: {
    title: "Saying Sorry for Being Late in English for Telugu Speakers",
    description:
      "Say I'm sorry for being late and give a reason: I missed the bus. Simple lessons for Telugu speakers on saying sorry naturally.",
  },
  pattern: [
    { text: "I'm", role: "who" },
    { text: "sorry for", role: "action" },
    { text: "being late.", role: "what" },
  ],
  core: [
    { en: "I'm sorry for being late.", te: "ఆలస్యంగా వచ్చినందుకు sorry.", extra: ["be"] },
    { en: "I'm so sorry. I missed the bus.", te: "చాలా sorry. బస్ మిస్ అయిపోయింది.", extra: ["miss"] },
    { en: "Sorry for keeping you waiting.", te: "మిమ్మల్ని వెయిట్ చేయించినందుకు sorry.", extra: ["keep"] },
    { en: "Sorry, I forgot to call you.", te: "Sorry, మీకు ఫోన్ చేయడం మర్చిపోయాను.", extra: ["forget"] },
    { en: "I'm sorry. The traffic was very bad.", te: "Sorry. దారిలో ట్రాఫిక్ చాలా ఎక్కువగా ఉంది.", extra: ["is"] },
    { en: "I'm on my way. I'll be there soon.", te: "దారిలో ఉన్నాను. కాసేపట్లో అక్కడ ఉంటాను.", extra: ["in"] },
    { en: "I apologise. It won't happen again.", te: "క్షమించండి. మళ్ళీ ఇలా జరగదు.", extra: ["will"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Today, say one real sorry in English: Sorry for keeping you waiting.",
    te: "ఈ రోజు ఎవరికైనా ఒక sorry ఇంగ్లీష్‌లో చెప్పండి: Sorry for keeping you waiting.",
  },
  words: [
    { en: "apologise", te: "క్షమాపణ చెప్పడం" },
    { en: "keep you waiting", te: "మిమ్మల్ని వెయిట్ చేయించడం" },
    { en: "on my way", te: "దారిలో ఉన్నాను, వస్తున్నాను" },
    { en: "delay", te: "ఆలస్యం" },
    { en: "won't happen again", te: "మళ్ళీ జరగదు" },
  ],
  grammar: ["politeness-softening", "gerunds-infinitives"],
  topics: ["people", "time", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Sorry, and the reason", te: "sorry, తర్వాత కారణం" },
      body: {
        en: "To say sorry for something you did, use sorry for + -ing: sorry for being late. Then give the reason in a short sentence: I missed the bus.",
        te: "మీరు చేసిన దానికి sorry చెప్పాలంటే sorry for + -ing: sorry for being late. తర్వాత చిన్న వాక్యంలో కారణం చెప్పండి: I missed the bus.",
      },
      bridge: {
        te: ["ఆలస్యంగా వచ్చినందుకు", "sorry"],
        en: [
          { text: "I'm", role: "who" },
          { text: "sorry for", role: "action" },
          { text: "being late.", role: "what" },
        ],
      },
      examples: [
        { en: "I'm sorry for being late.", te: "ఆలస్యంగా వచ్చినందుకు sorry." },
        { en: "I'm so sorry. I missed the bus.", te: "చాలా sorry. బస్ మిస్ అయిపోయింది." },
        { en: "I'm sorry. The traffic was very bad.", te: "Sorry. దారిలో ట్రాఫిక్ చాలా ఎక్కువగా ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which sorry?", te: "ఏ sorry ఎప్పుడు?" },
      items: [
        {
          form: "Sorry for + -ing",
          useFor: { en: "For something you did.", te: "మీరు చేసిన పనికి." },
          example: { en: "Sorry for keeping you waiting.", te: "మిమ్మల్ని వెయిట్ చేయించినందుకు sorry." },
        },
        {
          form: "Sorry for the …",
          useFor: { en: "For a thing, like the delay.", te: "ఒక విషయానికి, ఆలస్యం లాంటిది." },
          example: { en: "Sorry for the delay. It won't happen again.", te: "ఆలస్యానికి sorry. మళ్ళీ ఇలా జరగదు." },
        },
        {
          form: "I'm on my way.",
          useFor: { en: "On the phone, when you are still coming.", te: "ఫోన్‌లో, మీరు ఇంకా దారిలో ఉన్నప్పుడు." },
          example: { en: "I'm on my way. I'll be there soon.", te: "దారిలో ఉన్నాను. కాసేపట్లో అక్కడ ఉంటాను." },
        },
        {
          form: "I apologise.",
          useFor: { en: "A formal sorry, at an office or a bank.", te: "ఆఫీస్‌లో, బ్యాంక్‌లో చెప్పే formal sorry." },
          example: { en: "I apologise. It won't happen again.", te: "క్షమించండి. మళ్ళీ ఇలా జరగదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Sorry for late.",
      right: "I'm sorry for being late.",
      why: {
        en: "After sorry for, English needs a verb with -ing; late alone is not a verb.",
        te: "sorry for తర్వాత -ing ఉన్న verb కావాలి; late ఒక్కటే verb కాదు, అందుకే being late.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "I sorry. The bus late.",
      right: "I'm sorry. The bus was late.",
      why: {
        en: "Telugu says నేను sorry with no verb, but English needs am, is or was.",
        te: "తెలుగులో 'నేను sorry' అంటాం, verb ఉండదు; ఇంగ్లీష్‌లో am, is, was తప్పనిసరి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "You are twenty minutes late to meet Usha. What do you say first?",
        te: "ఉష గారిని కలవడానికి ఇరవై నిమిషాలు ఆలస్యంగా వెళ్ళారు. ముందు ఏమంటారు?",
      },
      options: ["I'm sorry for being late.", "I'm sorry for be late.", "Traffic, what to do?"],
      answer: 0,
      why: {
        en: "Say sorry first, then the reason; after for, the verb takes -ing.",
        te: "ముందు sorry, తర్వాతే కారణం; for తర్వాత verb కి -ing వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Sorry for ___ you waiting.",
      te: "మిమ్మల్ని వెయిట్ చేయించినందుకు sorry.",
      options: ["keeping", "keep", "kept"],
      answer: 0,
      why: {
        en: "Telugu -నందుకు becomes for + -ing, so keep takes -ing here.",
        te: "'-నందుకు' ఇంగ్లీష్‌లో for + -ing అవుతుంది, అందుకే keep కి -ing.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend calls. You are still on the bus. What do you say?",
        te: "మీ స్నేహితులు ఫోన్ చేశారు. మీరు ఇంకా బస్‌లోనే ఉన్నారు. ఏమంటారు?",
      },
      options: ["Sorry, I'm on my way.", "Sorry, I'm in my way.", "Sorry, I already reached."],
      answer: 0,
      why: {
        en: "On my way means you are coming now; in my way means something is blocking you.",
        te: "on my way అంటే దారిలో ఉన్నాను, వస్తున్నాను; in my way అంటే ఏదో అడ్డంగా ఉంది అని.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I'm sorry for come late.",
      wrongIndex: 3,
      fix: "I'm sorry for coming late.",
      why: {
        en: "A verb after for always takes -ing, just like Telugu -నందుకు.",
        te: "for తర్వాత వచ్చే verb కి ఎప్పుడూ -ing వస్తుంది, తెలుగులో '-నందుకు' లాగా.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You are late to meet a friend. Say sorry.",
        te: "స్నేహితులని కలవడానికి ఆలస్యంగా వెళ్ళారు. sorry చెప్పండి.",
      },
      expected: ["I'm sorry for being late.", "Sorry for being late.", "I'm sorry I'm late."],
      options: ["I'm sorry for being late.", "Sorry for late.", "I sorry, I late."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend waited a long time for you. Say sorry for that.",
        te: "మీ స్నేహితులు మీ కోసం చాలాసేపు వెయిట్ చేశారు. దానికి sorry చెప్పండి.",
      },
      expected: ["Sorry for keeping you waiting.", "I'm sorry for keeping you waiting."],
      options: ["Sorry for keeping you waiting.", "Sorry for keep you waiting.", "You waited? Why?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Late at the park", te: "పార్క్ దగ్గర ఆలస్యం" },
    scene: {
      en: "You are meeting your friend Imran at the park gate at five. You arrive at half past five.",
      te: "ఐదింటికి పార్క్ గేట్ దగ్గర మీ స్నేహితులు ఇమ్రాన్ గారిని కలవాలి. మీరు ఐదున్నరకి చేరుకున్నారు.",
    },
    partner: { en: "Imran (your friend)", te: "ఇమ్రాన్ (మీ స్నేహితులు)" },
    voice: "b",
    skills: [
      { id: "sorry", label: { en: "Saying sorry", te: "sorry చెప్పడం" } },
      { id: "reason", label: { en: "Giving a reason", te: "కారణం చెప్పడం" } },
    ],
    turns: [
      {
        partner: "There you are! I was getting worried.",
        te: "వచ్చేశారా! నాకు కంగారుగా ఉంది.",
        hint: { en: "Apologise warmly for coming late.", te: "ఆలస్యంగా వచ్చినందుకు మనస్ఫూర్తిగా sorry చెప్పండి." },
        replies: [
          { say: "I'm so sorry for being late.", good: true, skill: "sorry" },
          { say: "Sorry for late, Imran.", good: false, skill: "sorry" },
          {
            say: "Only thirty minutes. Relax!",
            good: false,
            skill: "sorry",
            react: { en: "Thirty minutes is a long time! But okay.", te: "అరగంట అంటే చాలా సేపు! సరే, పర్వాలేదు." },
          },
        ],
      },
      {
        partner: "What happened? Is everything okay?",
        te: "ఏమైంది? అంతా బాగానే ఉందా?",
        hint: { en: "Say yes, and tell him what happened with the bus.", te: "అంతా బాగానే ఉందని చెప్పి, బస్ విషయంలో ఏమైందో చెప్పండి." },
        replies: [
          { say: "Yes, everything is fine. I missed the bus.", good: true, skill: "reason" },
          { say: "Yes, everything is fine. I missed bus.", good: false, skill: "reason", fixIt: "article" },
        ],
      },
      {
        partner: "Next time, please give me a call.",
        te: "ఇంకోసారి ఇలా అయితే, నాకు ఒక ఫోన్ చేయండి.",
        hint: { en: "Say sorry for not calling, and promise to call next time.", te: "ఫోన్ చేయనందుకు sorry చెప్పి, ఈ సారి చేస్తానని మాట ఇవ్వండి." },
        replies: [
          { say: "Sorry, I forgot to call. It won't happen again.", good: true, skill: "sorry" },
          { say: "Sorry, I forget to call. It won't happen again.", good: false, skill: "sorry" },
        ],
      },
      {
        partner: "It's okay. Come, let's have some coffee.",
        te: "పర్వాలేదు. రండి, కాఫీ తాగుదాం.",
        hint: { en: "Agree, and offer to pay for the coffee.", te: "సరే అని, కాఫీ డబ్బులు మీరే ఇస్తానని చెప్పండి." },
        replies: [
          { say: "Sure. Let me pay for the coffee.", good: true },
          { say: "Sure. Let me pay the coffee.", good: false },
        ],
      },
    ],
  },
};
