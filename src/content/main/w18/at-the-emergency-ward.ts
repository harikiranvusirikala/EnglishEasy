import type { Lesson } from "../../types";

/** Week 18, Day 4 (CURRICULUM §4): admission at the emergency ward — the patient's illnesses and medicines (He has …, He takes …). */
export const day: Lesson = {
  id: "at-the-emergency-ward",
  kind: "lesson",
  title: { en: "At the Emergency Ward", te: "ఎమర్జెన్సీ వార్డులో" },
  subtitle: "He has … / He takes …",
  summary: {
    en: "Learn to help someone get admitted: find the emergency ward, and give the patient's illnesses and medicines.",
    te: "ఎవరినైనా ఆసుపత్రిలో చేర్పించడం నేర్చుకుందాం: ఎమర్జెన్సీ వార్డ్ కనుక్కోవడం, పేషెంట్ జబ్బులు, మందుల వివరాలు చెప్పడం.",
  },
  seo: {
    title: "At the Emergency Ward in English for Telugu Speakers",
    description:
      "Say Where is the emergency ward? He has diabetes. He takes BP tablets. Simple lessons for Telugu speakers on hospital admission.",
  },
  pattern: [
    { text: "He", role: "who" },
    { text: "takes", role: "action" },
    { text: "BP tablets", role: "what" },
    { text: "every day", role: "when" },
  ],
  core: [
    { en: "Where is the emergency ward?", te: "ఎమర్జెన్సీ వార్డ్ ఎక్కడ ఉంది?", extra: ["are"] },
    { en: "Please admit him. He is very weak.", te: "ప్లీజ్, ఆయన్ని అడ్మిట్ చేసుకోండి. ఆయన చాలా నీరసంగా ఉన్నారు.", extra: ["admitted"] },
    { en: "He has diabetes.", te: "ఆయనకి షుగర్ ఉంది.", extra: ["have"] },
    { en: "He takes BP tablets every day.", te: "ఆయన రోజూ BP మాత్రలు వేసుకుంటారు.", extra: ["take"] },
    { en: "Is there a wheelchair, please?", te: "వీల్‌చెయిర్ ఉందా అండీ?", extra: ["Are"] },
    { en: "She is allergic to penicillin.", te: "ఆవిడకి పెన్సిలిన్ పడదు.", extra: ["allergy"] },
    { en: "I am his neighbour, not a relative.", te: "నేను ఆయన పక్కింట్లో ఉంటాను, బంధువుని కాదు.", extra: ["relatives"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of an elder you know. Say what they take every day: She takes BP tablets.",
    te: "మీకు తెలిసిన ఒక పెద్దవారిని తలచుకోండి. వారు రోజూ ఏం వేసుకుంటారో చెప్పండి: She takes BP tablets.",
  },
  words: [
    { en: "ward", te: "వార్డ్" },
    { en: "admit", te: "అడ్మిట్ చేయడం, ఆసుపత్రిలో చేర్చుకోవడం" },
    { en: "patient", te: "పేషెంట్, రోగి" },
    { en: "wheelchair", te: "వీల్‌చెయిర్" },
    { en: "allergic", te: "(మందు) పడకపోవడం, అలర్జీ" },
  ],
  grammar: ["present-simple", "have-has-possessives", "question-words"],
  topics: ["health", "doctor", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Giving the patient's details", te: "పేషెంట్ వివరాలు చెప్పడం" },
      body: {
        en: "At the desk, say the patient's illnesses and medicines. For one person, he or she, add s to the verb: He takes. And have becomes has: He has diabetes.",
        te: "డెస్క్ దగ్గర పేషెంట్ జబ్బులు, మందులు చెప్పండి. he, she అయితే verb కి s చేర్చండి: He takes. have కూడా has అవుతుంది: He has diabetes.",
      },
      bridge: {
        te: ["ఆయన", "రోజూ", "BP మాత్రలు", "వేసుకుంటారు"],
        en: [
          { text: "He", role: "who" },
          { text: "takes", role: "action" },
          { text: "BP tablets", role: "what" },
          { text: "every day", role: "when" },
        ],
      },
      examples: [
        { en: "He takes BP tablets every day.", te: "ఆయన రోజూ BP మాత్రలు వేసుకుంటారు." },
        { en: "He has diabetes.", te: "ఆయనకి షుగర్ ఉంది." },
        { en: "She is allergic to penicillin.", te: "ఆవిడకి పెన్సిలిన్ పడదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What the desk asks", te: "డెస్క్ దగ్గర ఏం అడుగుతారు" },
      items: [
        {
          form: "He has …",
          useFor: { en: "An illness he lives with.", te: "ఆయనకి ఉన్న జబ్బు." },
          example: { en: "He has a heart problem.", te: "ఆయనకి గుండె సమస్య ఉంది." },
        },
        {
          form: "She takes …",
          useFor: { en: "Her medicines.", te: "ఆవిడ వాడే మందులు." },
          example: { en: "She takes one tablet at night.", te: "ఆవిడ రాత్రి ఒక మాత్ర వేసుకుంటారు." },
        },
        {
          form: "He is allergic to …",
          useFor: { en: "A medicine or food that makes him sick.", te: "ఆయనకి పడని మందు గానీ ఆహారం గానీ." },
          example: { en: "He is allergic to brinjal.", te: "ఆయనకి వంకాయ పడదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "He take BP tablets every day.",
      right: "He takes BP tablets every day.",
      why: {
        en: "With he or she, the verb takes s every time.",
        te: "he, she తో verb కి s ప్రతిసారీ చేర్చాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "He is having diabetes.",
      right: "He has diabetes.",
      why: {
        en: "An illness he lives with is not an action now, so no -ing.",
        te: "ఎప్పుడూ ఉండే జబ్బు ఇప్పుడు జరుగుతున్న పని కాదు, అందుకే -ing రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "You are at the hospital gate. Ask for the emergency ward.", te: "మీరు ఆసుపత్రి గేటు దగ్గర ఉన్నారు. ఎమర్జెన్సీ వార్డ్ ఎక్కడో అడగండి." },
      options: ["Where is the emergency ward?", "Where the emergency ward is?", "Emergency ward is where?"],
      answer: 0,
      why: {
        en: "In a where question, is comes right after where.",
        te: "where ప్రశ్నలో where తర్వాతే is వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "She ___ two tablets at night.",
      te: "ఆవిడ రాత్రి రెండు మాత్రలు వేసుకుంటారు.",
      options: ["takes", "take", "taking"],
      answer: 0,
      why: {
        en: "She is one person, so the verb takes s.",
        te: "she ఒక్కరే, అందుకే verb కి s వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The nurse asks: Is he allergic to anything? What does she want to know?",
        te: "నర్స్ Is he allergic to anything? అని అడిగారు. ఆవిడ ఏం తెలుసుకోవాలనుకుంటున్నారు?",
      },
      options: ["If any medicine or food makes him sick.", "If he is in pain anywhere.", "If he takes any tablets."],
      answer: 0,
      why: {
        en: "Allergic to means a medicine or food does not suit him.",
        te: "allergic to అంటే ఆ మందు గానీ ఆహారం గానీ ఆయనకి పడదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "He have diabetes and BP.",
      wrongIndex: 1,
      fix: "He has diabetes and BP.",
      why: {
        en: "With he or she, have changes to has.",
        te: "he, she తో have కాదు, has వాడాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell the nurse your neighbour takes BP tablets.",
        te: "మీ పక్కింటాయన BP మాత్రలు వేసుకుంటారని నర్స్‌కి చెప్పండి.",
      },
      expected: ["He takes BP tablets.", "He takes BP tablets every day."],
      options: ["He takes BP tablets.", "He take BP tablets.", "BP tablets he is taking."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "At the desk, ask them to admit your neighbour. He is very weak.",
        te: "డెస్క్ దగ్గర మీ పక్కింటాయన్ని అడ్మిట్ చేసుకోమని అడగండి. ఆయన చాలా నీరసంగా ఉన్నారు.",
      },
      expected: ["Please admit him. He is very weak.", "Please admit him."],
      options: ["Please admit him. He is very weak.", "Please admit he. He is very weak.", "Admit him fast. He very weak."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the emergency desk at night", te: "రాత్రి ఎమర్జెన్సీ డెస్క్ దగ్గర" },
    scene: {
      en: "It is midnight. Your neighbour, Venkat, is very weak. You bring him to the emergency ward. Joseph is at the desk.",
      te: "అర్ధరాత్రి అయింది. మీ పక్కింటి వెంకట్ గారు చాలా నీరసంగా ఉన్నారు. ఆయన్ని ఎమర్జెన్సీ వార్డుకి తీసుకొచ్చారు. డెస్క్ దగ్గర జోసెఫ్ ఉన్నారు.",
    },
    partner: { en: "Joseph (emergency desk)", te: "జోసెఫ్ (ఎమర్జెన్సీ డెస్క్)" },
    voice: "b",
    skills: [
      { id: "details", label: { en: "Patient details", te: "పేషెంట్ వివరాలు" } },
      { id: "polite", label: { en: "Staying polite", te: "మర్యాదగా ఉండటం" } },
    ],
    turns: [
      {
        partner: "Emergency ward. What is the problem?",
        te: "ఎమర్జెన్సీ వార్డ్. ఏంటి సమస్య?",
        hint: { en: "Say how he is, and ask them to take him in.", te: "ఆయన ఎలా ఉన్నారో చెప్పి, చేర్చుకోమని అడగండి." },
        replies: [
          { say: "He is very weak. Please admit him.", good: true, skill: "polite" },
          { say: "He very weak. Please admit him.", good: false, skill: "polite", fixIt: "be" },
          {
            say: "Admit him first, then ask questions!",
            good: false,
            skill: "polite",
            react: { en: "Yes, we are admitting him. I just need some details.", te: "అవునండి, అడ్మిట్ చేస్తున్నాం. కొన్ని వివరాలు మాత్రం కావాలి." },
          },
        ],
      },
      {
        partner: "What is the patient's name and age?",
        te: "పేషెంట్ పేరు, వయసు ఎంత?",
        hint: { en: "Give his name and his age.", te: "ఆయన పేరు, వయసు చెప్పండి." },
        replies: [
          { say: "His name is Venkat. He is seventy-two.", good: true, skill: "details" },
          { say: "He name is Venkat. He is seventy-two.", good: false, skill: "details" },
        ],
      },
      {
        partner: "Does he have any health problems?",
        te: "ఆయనకి ఏమైనా ఆరోగ్య సమస్యలు ఉన్నాయా?",
        hint: { en: "Say his illness, and the tablets he takes.", te: "ఆయన జబ్బు, వేసుకునే మాత్రలు చెప్పండి." },
        replies: [
          { say: "He has diabetes. He takes sugar tablets.", good: true, skill: "details" },
          { say: "He have diabetes. He take sugar tablets.", good: false, skill: "details", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "Thank you. Are you a relative?",
        te: "థాంక్యూ. మీరు ఆయన బంధువులా?",
        hint: { en: "Say how you know him, and that you will stay.", te: "ఆయన మీకు ఎలా తెలుసో చెప్పి, ఇక్కడే ఉంటానని చెప్పండి." },
        replies: [
          { say: "No, I am his neighbour. I'll stay with him.", good: true, skill: "details" },
          { say: "No, I am his neighbour only.", good: false, skill: "details", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
