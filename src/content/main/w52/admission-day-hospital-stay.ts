import type { Lesson } from "../../types";

/** Week 52, Day 1 (CURRICULUM §5): have to for hospital procedures — You have to come at seven tomorrow. Please bring … */
export const day: Lesson = {
  id: "admission-day-hospital-stay",
  kind: "lesson",
  title: { en: "Admission Day", te: "ఆసుపత్రిలో చేరే రోజు" },
  subtitle: "You have to … · Please bring …",
  summary: {
    en: "Learn to follow the admission desk before a planned stay: You have to come at seven tomorrow. Please bring your old reports.",
    te: "ముందే అనుకున్న ఆసుపత్రి stay కి admission desk దగ్గర చెప్పేది అర్థం చేసుకుందాం: You have to come at seven tomorrow. Please bring your old reports.",
  },
  seo: {
    title: "Hospital Admission in English for Telugu Speakers",
    description:
      "Say Please bring your old reports and Do I have to pay an advance? Simple lessons for Telugu speakers on hospital admission day.",
  },
  pattern: [
    { text: "You", role: "who" },
    { text: "have to come", role: "action" },
    { text: "at seven", role: "when" },
    { text: "tomorrow", role: "when" },
  ],
  core: [
    { en: "You have to come at seven tomorrow.", te: "మీరు రేపు ఏడింటికి రావాలి.", extra: ["in"] },
    { en: "Please bring your old reports and your ID card.", te: "దయచేసి మీ పాత రిపోర్టులు, మీ ID కార్డు తీసుకురండి.", extra: ["report"] },
    { en: "Do I have to pay an advance?", te: "నేను అడ్వాన్స్ కట్టాలా?", extra: ["Am"] },
    { en: "Where is the admission desk, please?", te: "admission desk ఎక్కడ ఉంది అండీ?", extra: ["are"] },
    { en: "You have to sign the consent form before the operation.", te: "ఆపరేషన్‌కి ముందు మీరు consent form మీద సంతకం చేయాలి.", extra: ["signature"] },
    { en: "Please come on an empty stomach.", te: "ఏమీ తినకుండా, ఖాళీ కడుపుతో రండి.", extra: ["in"] },
    { en: "Does someone have to stay with me?", te: "నాతో ఎవరైనా ఉండాలా?", extra: ["Do"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at your health papers at home. Say aloud what you would take to a hospital: I have to bring my …",
    te: "ఇంట్లో మీ ఆరోగ్య కాగితాలు చూడండి. ఆసుపత్రికి ఏం తీసుకెళ్తారో గట్టిగా చెప్పండి: I have to bring my …",
  },
  words: [
    { en: "admission", te: "ఆసుపత్రిలో చేరడం, అడ్మిషన్" },
    { en: "operation", te: "ఆపరేషన్" },
    { en: "advance", te: "ముందుగా కట్టే డబ్బు, అడ్వాన్స్" },
    { en: "consent form", te: "ఒప్పుకుంటున్నామని సంతకం పెట్టే form" },
    { en: "empty stomach", te: "ఖాళీ కడుపు" },
  ],
  grammar: ["should-must-have-to", "imperatives"],
  topics: ["health", "doctor"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "What you have to do", te: "మీరు చేయాల్సినవి" },
      body: {
        en: "The desk uses have to for what you must do: You have to come at seven. Please bring … tells you what to carry.",
        te: "మీరు తప్పకుండా చేయాల్సిన పనికి desk వాళ్ళు have to వాడతారు: You have to come at seven. ఏం తీసుకురావాలో Please bring … తో చెప్తారు.",
      },
      bridge: {
        te: ["మీరు", "రేపు ఏడింటికి", "రావాలి"],
        en: [
          { text: "You", role: "who" },
          { text: "have to come", role: "action" },
          { text: "at seven", role: "when" },
          { text: "tomorrow", role: "when" },
        ],
      },
      examples: [
        { en: "You have to come at seven tomorrow.", te: "మీరు రేపు ఏడింటికి రావాలి." },
        { en: "Please bring your old reports and your ID card.", te: "దయచేసి మీ పాత రిపోర్టులు, మీ ID కార్డు తీసుకురండి." },
        { en: "Do I have to pay an advance?", te: "నేను అడ్వాన్స్ కట్టాలా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Must, not needed, or bring", te: "తప్పనిసరా, అక్కర్లేదా, తేవాలా" },
      items: [
        {
          form: "You have to …",
          useFor: { en: "Something you must do.", te: "తప్పకుండా చేయాల్సిన పని." },
          example: { en: "You have to sign the consent form before the operation.", te: "ఆపరేషన్‌కి ముందు మీరు consent form మీద సంతకం చేయాలి." },
        },
        {
          form: "You don't have to …",
          useFor: { en: "Something that is not needed.", te: "అవసరం లేని పని." },
          example: { en: "You don't have to pay anything today.", te: "ఈ రోజు మీరు ఏమీ కట్టక్కర్లేదు." },
        },
        {
          form: "Do I have to …?",
          useFor: { en: "Ask if you must do something.", te: "ఏదైనా తప్పకుండా చేయాలా అని అడగడానికి." },
          example: { en: "Do I have to come on an empty stomach?", te: "ఖాళీ కడుపుతో రావాలా?" },
        },
        {
          form: "Please bring …",
          useFor: { en: "The desk tells you what to carry.", te: "ఏం తీసుకురావాలో desk వాళ్ళు చెప్పడానికి." },
          example: { en: "Please bring all your tablets with you.", te: "మీరు వేసుకునే మాత్రలన్నీ తీసుకురండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Do I have to pay advance?",
      right: "Do I have to pay an advance?",
      why: {
        en: "Advance starts with a vowel sound, so it needs an; Telugu has no such word.",
        te: "advance అచ్చుతో మొదలవుతుంది, అందుకే ముందు an కావాలి; తెలుగులో అలాంటి పదం లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "Where I have to go now?",
      right: "Where do I have to go now?",
      why: {
        en: "A question with have to needs do before I; Telugu only changes the ending.",
        te: "have to ప్రశ్నలో I కంటే ముందు do కావాలి; తెలుగులో చివరి అక్షరం మాత్రమే మారుతుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "A friend asks about your plan for tomorrow. The hospital wants you there at seven. What do you say?",
        te: "రేపటి ప్లాన్ ఏంటని స్నేహితులు అడుగుతున్నారు. ఆసుపత్రిలో ఏడింటికి ఉండాలి. ఏమంటారు?",
      },
      options: ["I have to go to the hospital at seven.", "I have to going to the hospital at seven.", "I must to go to the hospital at seven."],
      answer: 0,
      why: {
        en: "After have to, the verb stays plain, with no -ing and no extra to.",
        te: "have to తర్వాత verb అలాగే వస్తుంది; -ing గానీ ఇంకో to గానీ రావు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "You have to come ___ seven tomorrow.",
      te: "మీరు రేపు ఏడింటికి రావాలి.",
      options: ["at", "on", "in"],
      answer: 0,
      why: {
        en: "A clock time takes at; Telugu puts it inside the ending of ఏడింటికి.",
        te: "గడియారం టైమ్‌కి at వస్తుంది; తెలుగులో అది 'ఏడింటికి' చివర్లోనే ఉంటుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "You want to know if you must pay money today. Ask the desk.", te: "ఈ రోజు డబ్బు కట్టాలా అని తెలుసుకోవాలి. desk దగ్గర అడగండి." },
      options: ["Do I have to pay today?", "Am I have to pay today?", "Do I have to paying today?"],
      answer: 0,
      why: {
        en: "Questions with have to start with do, never am; Telugu has no word like do.",
        te: "have to ప్రశ్న do తో మొదలవుతుంది, am తో కాదు; తెలుగులో do లాంటి పదం లేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Please bring all your old report.",
      wrongIndex: 5,
      fix: "Please bring all your old reports.",
      why: {
        en: "After all, a thing you can count takes s; Telugu రిపోర్టులు also shows more than one.",
        te: "all తర్వాత లెక్కపెట్టే వస్తువుకి s వస్తుంది; తెలుగులోనూ 'రిపోర్టులు' అని ఎక్కువని చూపిస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The desk asks you to bring your ID card. Ask if you have to bring anything else.",
        te: "ID కార్డు తీసుకురమ్మని desk వాళ్ళు చెప్పారు. ఇంకా ఏమైనా తేవాలా అని అడగండి.",
      },
      expected: ["Do I have to bring anything else?", "What else do I have to bring?", "Anything else, please?"],
      options: ["Do I have to bring anything else?", "What else I have to bring?", "Do I have to bring anything other?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "You are at the hospital gate. Ask the guard where the admission desk is.",
        te: "మీరు ఆసుపత్రి గేటు దగ్గర ఉన్నారు. admission desk ఎక్కడ ఉందో గార్డుని అడగండి.",
      },
      expected: ["Excuse me, where is the admission desk?", "Where is the admission desk, please?", "Where is the admission desk?"],
      options: ["Excuse me, where is the admission desk?", "Excuse me, where is admission desk?", "Hey, you! Where is the admission desk?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the admission desk", te: "admission desk దగ్గర" },
    scene: {
      en: "Your small operation is tomorrow. Today you go to the hospital's admission desk. Ayesha helps you there.",
      te: "రేపు మీకు ఒక చిన్న ఆపరేషన్. ఈ రోజు ఆసుపత్రి admission desk కి వెళ్ళారు. అక్కడ ఆయేషా గారు మీకు సాయం చేస్తున్నారు.",
    },
    partner: { en: "Ayesha (admission desk)", te: "ఆయేషా (admission desk)" },
    skills: [
      { id: "admit", label: { en: "Admission talk", te: "అడ్మిషన్ మాటలు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. How can I help you?",
        te: "నమస్కారం. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Greet her. Say you are here for admission, for tomorrow's operation.", te: "పలకరించండి. రేపటి ఆపరేషన్ కోసం admission కి వచ్చారని చెప్పండి." },
        replies: [
          { say: "Good morning. I've come for admission. My operation is tomorrow.", good: true, skill: "admit" },
          {
            say: "Admission. Do it fast, please.",
            good: false,
            skill: "polite",
            react: { en: "Please be patient. I'll help you.", te: "కొంచెం ఓపిక పట్టండి. నేను చూస్తాను." },
          },
        ],
      },
      {
        partner: "Okay. Please give me your ID card and the doctor's letter.",
        te: "సరే. మీ ID కార్డు, డాక్టర్ గారి లెటర్ ఇవ్వండి.",
        hint: { en: "Give them, and ask if she needs your old reports too.", te: "అవి ఇచ్చి, పాత రిపోర్టులు కూడా కావాలా అని అడగండి." },
        replies: [
          { say: "Here they are. Do you need my old reports too?", good: true, skill: "admit" },
          { say: "Here they are. Are you need my old reports too?", good: false, skill: "admit", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, please. You have to pay an advance of ten thousand rupees.",
        te: "అవునండి. మీరు పది వేల రూపాయలు అడ్వాన్స్ కట్టాలి.",
        hint: { en: "Ask if you can pay by phone, with UPI.", te: "ఫోన్‌లో UPI తో కట్టొచ్చా అని అడగండి." },
        replies: [
          { say: "Can I pay by UPI?", good: true, skill: "admit" },
          { say: "Can I pay the advance by UPI?", good: true, skill: "admit" },
          { say: "Can I pay in UPI?", good: false, skill: "admit", fixIt: "preposition" },
        ],
      },
      {
        partner: "Yes, you can. Please come back at seven tomorrow, before breakfast.",
        te: "కట్టొచ్చు. రేపు పొద్దున ఏడింటికి, టిఫిన్ తినకముందే మళ్ళీ రండి.",
        hint: { en: "Say you will be on time, and thank her.", te: "టైమ్‌కి వస్తానని చెప్పి, థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, I'll come at seven. Thank you very much.", good: true, skill: "polite" },
          { say: "Okay, I'll coming at seven. Thank you very much.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
