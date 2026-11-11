import type { Lesson } from "../../types";

/** Week 39, Day 2 (CURRICULUM §4): accepting an apology and answering thanks (That's okay, don't worry. You're welcome.). */
export const day: Lesson = {
  id: "thats-okay",
  kind: "lesson",
  title: { en: "That's Okay", te: "పర్వాలేదు" },
  subtitle: "That's okay. You're welcome.",
  summary: {
    en: "Learn to answer sorry and thank you kindly: That's okay, don't worry. You're welcome.",
    te: "ఎవరైనా sorry, thank you చెప్తే మర్యాదగా జవాబు ఇవ్వడం నేర్చుకుందాం: That's okay, don't worry. You're welcome.",
  },
  seo: {
    title: "Answering Sorry and Thank You in English for Telugu Speakers",
    description:
      "Say That's okay, don't worry when someone says sorry, and You're welcome for thank you. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "That's", role: "who" },
    { text: "okay,", role: "what" },
    { text: "don't worry.", role: "action" },
  ],
  core: [
    { en: "That's okay, don't worry.", te: "పర్వాలేదు, కంగారు పడకండి.", extra: ["not"] },
    { en: "No problem at all.", te: "అస్సలు ఇబ్బంది లేదు.", extra: ["any"] },
    { en: "You're welcome. Any time.", te: "దానిదేముంది. ఎప్పుడైనా అడగండి.", extra: ["your"] },
    { en: "Never mind. It happens.", te: "పర్వాలేదు, వదిలేయండి. అలా జరుగుతూ ఉంటుంది.", extra: ["happen"] },
    { en: "Don't mention it. I was happy to help.", te: "అలా అనకండి. సహాయం చేయడం నాకు సంతోషమే.", extra: ["helping"] },
    { en: "It's all right. I wasn't sleeping.", te: "పర్వాలేదు. నేను అప్పుడు నిద్రపోవట్లేదు.", extra: ["didn't"] },
    { en: "It's fine. Please don't feel bad.", te: "పర్వాలేదు. బాధపడకండి.", extra: ["feeling"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When someone says thank you today, answer You're welcome or No problem.",
    te: "ఈ రోజు ఎవరైనా thank you అంటే You're welcome లేదా No problem అని జవాబు ఇవ్వండి.",
  },
  words: [
    { en: "no problem", te: "ఇబ్బంది లేదు" },
    { en: "never mind", te: "పర్వాలేదు, వదిలేయండి" },
    { en: "don't mention it", te: "అలా అనకండి, దానిదేముంది" },
    { en: "all right", te: "పర్వాలేదు, సరే" },
    { en: "feel bad", te: "బాధపడటం" },
  ],
  grammar: ["politeness-softening"],
  topics: ["neighbours", "people", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Answering sorry and thank you", te: "sorry కి, thank you కి జవాబు" },
      body: {
        en: "When someone says sorry, answer kindly: That's okay, don't worry. When someone says thank you, answer: You're welcome. A kind answer makes the other person feel better.",
        te: "ఎవరైనా sorry అంటే మెత్తగా జవాబు ఇవ్వండి: That's okay, don't worry. ఎవరైనా thank you అంటే: You're welcome.",
      },
      bridge: {
        te: ["పర్వాలేదు,", "కంగారు పడకండి."],
        en: [
          { text: "That's okay,", role: "what" },
          { text: "don't worry.", role: "action" },
        ],
      },
      examples: [
        { en: "That's okay, don't worry.", te: "పర్వాలేదు, కంగారు పడకండి." },
        { en: "No problem at all.", te: "అస్సలు ఇబ్బంది లేదు." },
        { en: "You're welcome. Any time.", te: "దానిదేముంది. ఎప్పుడైనా అడగండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which answer when?", te: "ఏ జవాబు ఎప్పుడు?" },
      items: [
        {
          form: "That's okay. It's all right.",
          useFor: { en: "Someone says sorry.", te: "ఎవరైనా sorry చెప్పినప్పుడు." },
          example: { en: "It's all right. I wasn't sleeping.", te: "పర్వాలేదు. నేను అప్పుడు నిద్రపోవట్లేదు." },
        },
        {
          form: "Never mind.",
          useFor: { en: "A small thing went wrong.", te: "చిన్న పొరపాటు జరిగినప్పుడు." },
          example: { en: "Never mind. It happens.", te: "పర్వాలేదు, వదిలేయండి. అలా జరుగుతూ ఉంటుంది." },
        },
        {
          form: "You're welcome.",
          useFor: { en: "Someone says thank you.", te: "ఎవరైనా thank you చెప్పినప్పుడు." },
          example: { en: "You're welcome. Any time.", te: "దానిదేముంది. ఎప్పుడైనా అడగండి." },
        },
        {
          form: "Don't mention it.",
          useFor: { en: "Thanks for a big help.", te: "పెద్ద సహాయానికి థ్యాంక్స్ చెప్పినప్పుడు." },
          example: { en: "Don't mention it. I was happy to help.", te: "అలా అనకండి. సహాయం చేయడం నాకు సంతోషమే." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Mention not.",
      right: "Don't mention it.",
      why: {
        en: "Mention not is heard only in India and puzzles others; You're welcome works everywhere too.",
        te: "Mention not మన దగ్గరే వింటాం, బయటివారికి వింతగా ఉంటుంది; You're welcome కూడా ఎక్కడైనా అనొచ్చు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "No any problem.",
      right: "No problem at all.",
      why: {
        en: "No and any never go together; to make it stronger, add at all at the end.",
        te: "No, any కలిసి రావు; ఇంకా గట్టిగా చెప్పాలంటే చివర at all చేర్చండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Anitha says: Sorry, I broke your cup. What do you say kindly?",
        te: "అనిత గారు 'Sorry, మీ కప్పు పగలగొట్టాను' అన్నారు. మెత్తగా ఏమంటారు?",
      },
      options: ["That's okay, don't worry.", "Okay. Buy me a new one.", "That's okay, don't worried."],
      answer: 0,
      why: {
        en: "A kind answer to sorry is That's okay; after don't, the verb stays plain.",
        te: "sorry కి మెత్తని జవాబు That's okay; don't తర్వాత verb మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "No problem ___ all.",
      te: "అస్సలు ఇబ్బంది లేదు.",
      options: ["at", "in", "for"],
      answer: 0,
      why: {
        en: "At all is a fixed pair that makes no stronger, like Telugu అస్సలు.",
        te: "at all ఎప్పుడూ కలిసే వస్తాయి; 'అస్సలు' లాగా no ని గట్టిగా చేస్తాయి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Sita says: Thank you for the help! What do you say?",
        te: "సీత గారు 'సహాయానికి థ్యాంక్స్!' అన్నారు. మీరేమంటారు?",
      },
      options: ["You're welcome.", "Same to you.", "Never mind."],
      answer: 0,
      why: {
        en: "This answers thanks; same to you answers wishes, and never mind answers small mistakes.",
        te: "థ్యాంక్స్ కి జవాబు ఇదే; same to you శుభాకాంక్షలకి, never mind చిన్న పొరపాట్లకి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Don't worry, it's small thing.",
      wrongIndex: 3,
      fix: "Don't worry, it's a small thing.",
      why: {
        en: "One small thing needs a before it; Telugu has no such word.",
        te: "ఒక చిన్న విషయం అంటే ముందు a కావాలి; తెలుగులో అలాంటి పదం ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend says sorry for coming late. Tell her it is okay.",
        te: "ఒక స్నేహితురాలు ఆలస్యంగా వచ్చినందుకు sorry చెప్పారు. పర్వాలేదని చెప్పండి.",
      },
      expected: ["That's okay, don't worry.", "That's okay.", "No problem.", "No problem at all."],
      options: ["That's okay, don't worry.", "Again late? Every time!", "That's okay, don't worried."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "The shopkeeper thanks you for giving the exact change. Answer him.",
        te: "సరిపడా చిల్లర ఇచ్చినందుకు షాప్ ఆయన థ్యాంక్స్ చెప్పారు. జవాబు ఇవ్వండి.",
      },
      expected: ["You're welcome.", "No problem.", "Don't mention it."],
      options: ["You're welcome.", "No any problem.", "Same to you."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Noise from upstairs", te: "పై ఫ్లాట్ నుండి శబ్దం" },
    scene: {
      en: "Last night there was loud noise from Geetha's flat upstairs. This morning she meets you on the stairs.",
      te: "నిన్న రాత్రి పై ఫ్లాట్‌లో ఉండే గీత గారి ఇంటి నుండి బాగా శబ్దం వచ్చింది. ఈ రోజు పొద్దున మెట్ల దగ్గర ఆవిడ మిమ్మల్ని కలిశారు.",
    },
    partner: { en: "Geetha (neighbour)", te: "గీత (పై ఫ్లాట్ వారు)" },
    skills: [
      { id: "accept", label: { en: "Accepting sorry", te: "sorry కి జవాబు" } },
      { id: "thanks", label: { en: "Answering thanks", te: "థ్యాంక్స్ కి జవాబు" } },
    ],
    turns: [
      {
        partner: "Good morning! Sorry about the noise last night.",
        te: "నమస్కారం! నిన్న రాత్రి శబ్దానికి sorry అండీ.",
        hint: { en: "Greet her, and tell her kindly it is okay.", te: "ఆవిడకి నమస్కారం చెప్పి, పర్వాలేదని మెత్తగా చెప్పండి." },
        replies: [
          { say: "Good morning. That's okay, don't worry.", good: true, skill: "accept" },
          {
            say: "Yes, very bad! I didn't sleep at all.",
            good: false,
            skill: "accept",
            react: { en: "Oh no! I'm really sorry about that.", te: "అయ్యో! నిజంగా sorry అండీ." },
          },
        ],
      },
      {
        partner: "My cousin's wedding is next week. We were packing.",
        te: "వచ్చే వారం మా కజిన్ పెళ్ళి. సామాన్లు సర్దుతూ ఉన్నాం.",
        hint: { en: "Say it is all right, and that you were not asleep then.", te: "పర్వాలేదని, అప్పుడు మీరు నిద్రపోవట్లేదని చెప్పండి." },
        replies: [
          { say: "It's all right. I wasn't sleeping.", good: true, skill: "accept" },
          { say: "It's all right. I not sleeping.", good: false, skill: "accept", fixIt: "be" },
        ],
      },
      {
        partner: "Thank you for understanding. Please have some sweets.",
        te: "అర్థం చేసుకున్నందుకు థ్యాంక్స్. కొన్ని స్వీట్లు తీసుకోండి.",
        hint: { en: "Take them, thank her, and congratulate her cousin.", te: "తీసుకుని, థ్యాంక్స్ చెప్పి, వాళ్ళ కజిన్‌కి శుభాకాంక్షలు చెప్పండి." },
        replies: [
          { say: "Thank you so much. Congratulations to your cousin!", good: true },
          { say: "Thanks you. Congratulations to your cousin!", good: false },
        ],
      },
      {
        partner: "And thank you for being so kind.",
        te: "ఇంత మంచిగా ఉన్నందుకు కూడా థ్యాంక్స్.",
        hint: { en: "Answer her thanks, and say goodbye.", te: "ఆవిడ థ్యాంక్స్ కి జవాబు ఇచ్చి, వెళ్ళొస్తానని చెప్పండి." },
        replies: [
          { say: "Don't mention it. See you later!", good: true, skill: "thanks" },
          { say: "You're welcome. Bye!", good: true, skill: "thanks" },
          { say: "Mention not. Bye!", good: false, skill: "thanks", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
