import type { Lesson } from "../../types";

/** Week 57, Day 2 (CURRICULUM §5): passing on advice with told me to / told me not to — Dr Kavitha told me to walk every evening. */
export const day: Lesson = {
  id: "told-me-to-walk-doctor",
  kind: "lesson",
  title: { en: "She Told Me to Walk", te: "నడవమని చెప్పారు" },
  subtitle: "told me to / told me not to",
  summary: {
    en: "Learn to pass on the doctor's advice: Dr Kavitha told me to walk every evening. She told me not to eat sweets.",
    te: "డాక్టర్ గారి సలహా ఇంకొకరికి చెప్పడం నేర్చుకుందాం: Dr Kavitha told me to walk every evening. She told me not to eat sweets.",
  },
  seo: {
    title: "Told Me To and Told Me Not To in English for Telugu Speakers",
    description:
      "Say Dr Kavitha told me to walk every evening and She told me not to eat sweets. Simple lessons for Telugu speakers on passing on advice.",
  },
  pattern: [
    { text: "Dr Kavitha", role: "who" },
    { text: "told me", role: "action" },
    { text: "to walk", role: "what" },
    { text: "every evening", role: "when" },
  ],
  core: [
    { en: "Dr Kavitha told me to walk every evening.", te: "రోజూ సాయంత్రం నడవమని డాక్టర్ కవిత గారు చెప్పారు.", extra: ["walking"] },
    { en: "She told me not to eat sweets.", te: "స్వీట్లు తినొద్దని ఆవిడ చెప్పారు.", extra: ["don't"] },
    { en: "The doctor told me to drink more water.", te: "నీళ్ళు ఎక్కువగా తాగమని డాక్టర్ గారు చెప్పారు.", extra: ["said"] },
    { en: "She told me to take this tablet after food.", te: "ఈ టాబ్లెట్ భోజనం తర్వాత వేసుకోమని ఆవిడ చెప్పారు.", extra: ["taking"] },
    { en: "The doctor told me to cut down on salt.", te: "ఉప్పు తగ్గించమని డాక్టర్ గారు చెప్పారు.", extra: ["cutting"] },
    { en: "She told me not to lift heavy bags for a month.", te: "ఒక నెల దాకా బరువైన సంచులు ఎత్తొద్దని ఆవిడ చెప్పారు.", extra: ["don't"] },
    { en: "She told me to rest for two days.", te: "రెండు రోజులు విశ్రాంతి తీసుకోమని ఆవిడ చెప్పారు.", extra: ["take"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Remember one piece of advice a doctor gave you. Say it aloud: The doctor told me to …",
    te: "డాక్టర్ గారు మీకు ఇచ్చిన ఒక సలహా గుర్తు చేసుకోండి. దాన్ని గట్టిగా చెప్పండి: The doctor told me to …",
  },
  words: [
    { en: "told", te: "ఒకరికి చెప్పారు" },
    { en: "told me not to", te: "… చేయొద్దని చెప్పారు" },
    { en: "strictly", te: "కచ్చితంగా" },
    { en: "stick to", te: "కట్టుబడి ఉండటం, తప్పకుండా పాటించడం" },
    { en: "glass of water", te: "గ్లాసు మంచినీళ్ళు" },
  ],
  grammar: ["reported-speech", "imperatives", "should-must-have-to"],
  topics: ["health", "doctor", "pharmacy"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "told me to, told me not to", te: "… చేయమని, … చేయొద్దని" },
      body: {
        en: "To pass on advice, say told me to and the plain verb: She told me to walk. When the doctor said don't, say told me not to.",
        te: "సలహా ఇంకొకరికి చెప్పాలంటే told me to తర్వాత verb అలాగే: She told me to walk. డాక్టర్ గారు don't అంటే, told me not to అనండి.",
      },
      bridge: {
        te: ["రోజూ సాయంత్రం", "నడవమని", "డాక్టర్ కవిత గారు", "చెప్పారు"],
        en: [
          { text: "Dr Kavitha", role: "who" },
          { text: "told me", role: "action" },
          { text: "to walk", role: "what" },
          { text: "every evening", role: "when" },
        ],
      },
      examples: [
        { en: "Dr Kavitha told me to walk every evening.", te: "రోజూ సాయంత్రం నడవమని డాక్టర్ కవిత గారు చెప్పారు." },
        { en: "She told me not to eat sweets.", te: "స్వీట్లు తినొద్దని ఆవిడ చెప్పారు." },
        { en: "The doctor told me to drink more water.", te: "నీళ్ళు ఎక్కువగా తాగమని డాక్టర్ గారు చెప్పారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Do this, don't do that", te: "ఇది చేయండి, అది చేయకండి" },
      items: [
        {
          form: "told me to + verb",
          useFor: { en: "The doctor said: Walk every day.", te: "డాక్టర్ గారు Walk every day అన్నారు." },
          example: { en: "She told me to go for a brisk walk.", te: "వేగంగా నడవమని ఆవిడ చెప్పారు." },
        },
        {
          form: "told me not to + verb",
          useFor: { en: "The doctor said: Don't eat fried food.", te: "డాక్టర్ గారు Don't eat fried food అన్నారు." },
          example: { en: "She told me not to eat fried food.", te: "వేపుళ్ళు తినొద్దని ఆవిడ చెప్పారు." },
        },
        {
          form: "told him to + verb",
          useFor: { en: "Advice given to someone else.", te: "వేరేవాళ్ళకి ఇచ్చిన సలహా." },
          example: { en: "The doctor told Venkat to sleep early.", te: "త్వరగా పడుకోమని డాక్టర్ గారు వెంకట్ గారికి చెప్పారు." },
        },
        {
          form: "said I should + verb",
          useFor: { en: "Another way to pass on advice.", te: "సలహా చెప్పడానికి ఇంకో పద్ధతి." },
          example: { en: "She said I should drink a glass of water every morning.", te: "రోజూ పొద్దున ఒక గ్లాసు మంచినీళ్ళు తాగాలని ఆవిడ చెప్పారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "The doctor told me to take rest.",
      right: "The doctor told me to rest.",
      why: {
        en: "English says rest, or get some rest; take rest comes from Telugu విశ్రాంతి తీసుకోండి.",
        te: "ఇంగ్లీష్‌లో rest లేదా get some rest అంటారు; take rest అనేది 'విశ్రాంతి తీసుకోండి' నుంచి వచ్చిన మాట.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "She told me don't eat sweets.",
      right: "She told me not to eat sweets.",
      why: {
        en: "When you pass on a don't, change it to not to before the verb.",
        te: "don't ని ఇంకొకరికి చెప్పేటప్పుడు, verb ముందు not to అనాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "The pharmacist asks how long you have taken your BP tablets. Two years. Answer.",
        te: "BP టాబ్లెట్లు ఎంత కాలంగా వేసుకుంటున్నారని pharmacist అడుగుతున్నారు. రెండేళ్ళు. జవాబు చెప్పండి.",
      },
      options: ["I have been taking them for two years.", "I am taking them since two years.", "I take them before two years."],
      answer: 0,
      why: {
        en: "For a time that runs up to now, use have been with -ing and for; Telugu uses the present.",
        te: "ఇప్పటిదాకా సాగుతున్న కాలానికి have been + -ing, for వాడాలి; తెలుగులో present తో అనేస్తాం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "She told me ___ eat sweets.",
      te: "స్వీట్లు తినొద్దని ఆవిడ చెప్పారు.",
      options: ["not to", "don't", "no"],
      answer: 0,
      why: {
        en: "After told me, a don't becomes not to before the plain verb.",
        te: "told me తర్వాత don't కాస్తా not to అవుతుంది, verb అలాగే.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "label",
      heading: "Dr Kavitha's Advice",
      lines: ["Walk 30 minutes every evening.", "No sweets.", "Less salt and oil.", "Drink 8 glasses of water a day.", "Next visit: after 3 months."],
      prompt: {
        en: "This is the doctor's advice slip. Your friend asks what she said about sweets. What do you say?",
        te: "ఇది డాక్టర్ గారి సలహా చీటీ. స్వీట్ల గురించి ఆవిడ ఏం చెప్పారని స్నేహితులు అడుగుతున్నారు. ఏమంటారు?",
      },
      options: ["She told me not to eat sweets.", "She told me to eat sweets only on Sundays.", "She told me to eat sweets after food."],
      answer: 0,
      why: {
        en: "The slip says No sweets, so she said not to eat them at all.",
        te: "చీటీలో No sweets అని ఉంది, అంటే అసలు తినొద్దని ఆవిడ చెప్పారు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "The doctor always tell me to walk more.",
      wrongIndex: 3,
      fix: "The doctor always tells me to walk more.",
      why: {
        en: "For one person, like the doctor, the verb takes s, even with always.",
        te: "ఒక్కరైతే (డాక్టర్ గారు లాగా) always ఉన్నా verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your friend asks you to come to the temple tomorrow. The doctor said: Rest for two days. Tell her.",
        te: "రేపు గుడికి రమ్మని స్నేహితురాలు అడుగుతున్నారు. రెండు రోజులు విశ్రాంతి తీసుకోమని డాక్టర్ గారు చెప్పారు. ఆవిడకి చెప్పండి.",
      },
      expected: [
        "Sorry, the doctor told me to rest for two days.",
        "The doctor told me to rest for two days.",
        "Sorry, the doctor said I should rest for two days.",
      ],
      options: [
        "Sorry, the doctor told me to rest for two days.",
        "Sorry, the doctor told me to take rest for two days.",
        "Sorry, the doctor told me rest for two days.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A friend offers you a sweet. The doctor said: Don't eat sweets. Say no politely.",
        te: "మీ స్నేహితులు ఒకరు మీకు స్వీట్ ఇస్తున్నారు. స్వీట్లు తినొద్దని డాక్టర్ గారు చెప్పారు. మర్యాదగా వద్దని చెప్పండి.",
      },
      expected: [
        "No, thank you. The doctor told me not to eat sweets.",
        "Sorry, the doctor told me not to eat sweets.",
        "No, thanks. The doctor told me not to eat sweets.",
      ],
      options: [
        "No, thank you. The doctor told me not to eat sweets.",
        "No, thank you. The doctor told me don't eat sweets.",
        "No. Doctor said no. Take it away.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the medical shop", te: "మెడికల్ షాపులో" },
    scene: {
      en: "You are at the medical shop with a new prescription from Dr Kavitha. Imran, the pharmacist, asks you some questions.",
      te: "డాక్టర్ కవిత గారు రాసిన కొత్త prescription తో మీరు మెడికల్ షాపుకి వెళ్ళారు. pharmacist ఇమ్రాన్ గారు మిమ్మల్ని కొన్ని ప్రశ్నలు అడుగుతున్నారు.",
    },
    partner: { en: "Imran (the pharmacist)", te: "ఇమ్రాన్ (pharmacist)" },
    voice: "b",
    skills: [
      { id: "pass", label: { en: "Passing on advice", te: "సలహా అందించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening. Do you have a prescription?",
        te: "నమస్కారం. మీ దగ్గర prescription ఉందా?",
        hint: { en: "Give it to him, and say which doctor wrote it.", te: "దాన్ని ఆయనకి ఇచ్చి, ఏ డాక్టర్ గారు రాశారో చెప్పండి." },
        replies: [
          { say: "Yes, here it is. It's from Dr Kavitha.", good: true, skill: "polite" },
          {
            say: "Here. Give the tablets quickly, I'm in a hurry.",
            good: false,
            skill: "polite",
            react: { en: "One minute, please. I need to read it first.", te: "ఒక్క నిమిషం అండీ. ముందు దాన్ని చదవాలి కదా." },
          },
        ],
      },
      {
        partner: "This tablet is new. How did she tell you to take it?",
        te: "ఈ టాబ్లెట్ కొత్తది. దీన్ని ఎలా వేసుకోమని ఆవిడ చెప్పారు?",
        hint: { en: "Pass on her advice: once a day, after food.", te: "ఆవిడ సలహా చెప్పండి: రోజుకి ఒకసారి, భోజనం తర్వాత." },
        replies: [
          { say: "She told me to take it once a day, after food.", good: true, skill: "pass" },
          { say: "She told me take it once a day, after food.", good: false, skill: "pass" },
        ],
      },
      {
        partner: "Right. Did she say anything about food?",
        te: "సరే. తిండి గురించి ఆవిడ ఏమైనా చెప్పారా?",
        hint: { en: "Pass on what she said about sweets and salt.", te: "స్వీట్లు, ఉప్పు గురించి ఆవిడ చెప్పింది చెప్పండి." },
        replies: [
          { say: "She told me not to eat sweets, and to cut down on salt.", good: true, skill: "pass" },
          { say: "She told me don't eat sweets, and cut down on salt.", good: false, skill: "pass" },
        ],
      },
      {
        partner: "Good advice. That's 240 rupees. Please follow her instructions.",
        te: "మంచి సలహా. 240 రూపాయలు. ఆవిడ చెప్పినట్టే చేయండి.",
        hint: { en: "Pay, thank him, and promise to follow her advice.", te: "డబ్బులు ఇచ్చి, థాంక్స్ చెప్పి, ఆవిడ చెప్పినట్టే చేస్తానని మాట ఇవ్వండి." },
        replies: [
          { say: "Here you are. Thank you, I'll stick to them strictly.", good: true, skill: "polite" },
          { say: "Here you are. Thank you, I'll sticking to them strictly.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
