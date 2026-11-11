import type { Lesson } from "../../types";

/** Week 40, Day 2 (CURRICULUM §4): Checkpoint review of customer care, repairs, and offices and forms (Weeks 27–29, 33). */
export const day: Lesson = {
  id: "three-small-problems",
  kind: "lesson",
  title: { en: "Three Small Problems", te: "మూడు చిన్న సమస్యలు" },
  subtitle: "has stopped, Could you …?",
  summary: {
    en: "Sort out small problems politely: say what has happened, then ask for what you need. My phone has stopped working. Could you check it?",
    te: "చిన్న సమస్యలను మర్యాదగా పరిష్కరించుకుందాం: ఏం జరిగిందో చెప్పి, మీకు ఏం కావాలో అడగండి. My phone has stopped working. Could you check it?",
  },
  seo: {
    title: "Reporting Problems Politely in English for Telugu Speakers",
    description:
      "Say My phone has stopped working. Could you check it? A review lesson for Telugu speakers on repairs, customer care and office forms.",
  },
  pattern: [
    { text: "My phone", role: "who" },
    { text: "has stopped", role: "action" },
    { text: "working", role: "what" },
  ],
  core: [
    { en: "My phone has stopped working.", te: "నా ఫోన్ పని చేయడం ఆగిపోయింది.", extra: ["stop"] },
    { en: "Could you check it, please?", te: "కొంచెం చెక్ చేస్తారా?", extra: ["checking"] },
    { en: "Which day will the technician come?", te: "టెక్నీషియన్ ఏ రోజు వస్తారు?", extra: ["comes"] },
    { en: "There is a spelling mistake in my name.", te: "నా పేరులో స్పెల్లింగ్ తప్పు ఉంది.", extra: ["has"] },
    { en: "Can you repair it or replace it?", te: "దాన్ని రిపేర్ చేస్తారా, లేక మార్చి ఇస్తారా?", extra: ["repairing"] },
    { en: "Where do I apply for a correction?", te: "correction కి ఎక్కడ apply చేయాలి?", extra: ["am"] },
    { en: "I'd like a refund, please.", te: "నాకు refund కావాలి, ప్లీజ్.", extra: ["give"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one small problem at home. Say it aloud in English: My … has stopped working.",
    te: "ఇంట్లో ఒక చిన్న సమస్య గుర్తు చేసుకోండి. దాన్ని ఇంగ్లీష్‌లో గట్టిగా చెప్పండి: My … has stopped working.",
  },
  words: [
    { en: "service centre", te: "సర్వీస్ సెంటర్ (రిపేర్ చేసే చోటు)" },
    { en: "repair", te: "రిపేర్ చేయడం, బాగు చేయడం" },
    { en: "replace", te: "కొత్తది మార్చి ఇవ్వడం" },
    { en: "refund", te: "కట్టిన డబ్బు వాపసు" },
    { en: "correction", te: "తప్పు సరిచేయడం, కరెక్షన్" },
  ],
  grammar: ["present-perfect", "can-could", "question-words", "politeness-softening"],
  topics: ["phone", "home", "offices", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Say the problem, then ask", te: "సమస్య చెప్పి, తర్వాత అడగండి" },
      body: {
        en: "Most problems take two steps. First say what has happened: My phone has stopped working. Then ask politely for what you need: Could you check it, please? Which day will the technician come?",
        te: "చాలా సమస్యలు రెండు అడుగుల్లో తేలిపోతాయి. ముందు ఏం జరిగిందో చెప్పండి: My phone has stopped working. తర్వాత మీకు ఏం కావాలో మర్యాదగా అడగండి: Could you check it, please?",
      },
      bridge: {
        te: ["నా ఫోన్", "పని చేయడం", "ఆగిపోయింది"],
        en: [
          { text: "My phone", role: "who" },
          { text: "has stopped", role: "action" },
          { text: "working", role: "what" },
        ],
      },
      examples: [
        { en: "My phone has stopped working.", te: "నా ఫోన్ పని చేయడం ఆగిపోయింది." },
        { en: "Could you check it, please?", te: "కొంచెం చెక్ చేస్తారా?" },
        { en: "Which day will the technician come?", te: "టెక్నీషియన్ ఏ రోజు వస్తారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which problem, where?", te: "ఏ సమస్యకి ఎక్కడికి?" },
      items: [
        {
          form: "the service centre",
          useFor: { en: "A phone, TV or mixer you can carry there.", te: "మీరు తీసుకెళ్ళగలిగే ఫోన్, TV, మిక్సీ." },
          example: { en: "I'm taking my phone to the service centre.", te: "నా ఫోన్‌ని సర్వీస్ సెంటర్‌కి తీసుకెళ్తున్నాను." },
        },
        {
          form: "customer care",
          useFor: { en: "A big machine: someone has to come home.", te: "పెద్ద మెషీన్: ఎవరైనా ఇంటికి రావాలి." },
          example: { en: "Could you send a technician tomorrow?", te: "రేపు టెక్నీషియన్‌ని పంపిస్తారా?" },
        },
        {
          form: "the office counter",
          useFor: { en: "A mistake on a card or certificate.", te: "కార్డ్‌లో లేదా సర్టిఫికెట్‌లో తప్పు ఉంటే." },
          example: { en: "Where do I apply for a correction?", te: "correction కి ఎక్కడ apply చేయాలి?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "The mixer is broken since Monday.",
      right: "The mixer has been broken since Monday.",
      why: {
        en: "Since tells when it started, so English needs has been, not is.",
        te: "since అంటే ఎప్పటి నుంచో చెప్పడం; అప్పుడు is కాదు, has been వాడాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please do the needful.",
      right: "Could you please fix it soon?",
      why: {
        en: "Do the needful is heard only in India; say clearly what you want done.",
        te: "do the needful మన దగ్గరే అంటారు; మీకు ఏం కావాలో స్పష్టంగా చెప్పండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "At the service centre, ask the man to look at your phone.",
        te: "సర్వీస్ సెంటర్‌లో మీ ఫోన్ చూడమని అక్కడి ఆయన్ని అడగండి.",
      },
      options: ["Could you check it, please?", "Check it fast, I'm busy.", "Could you checking it, please?"],
      answer: 0,
      why: {
        en: "Could you … please? is polite, and after could the verb stays plain.",
        te: "Could you … please? మర్యాదగా ఉంటుంది; could తర్వాత verb మారదు.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "QuickFix Service",
      lines: ["Dear customer, your complaint no. 7316 is registered.", "Technician visit: Sat 15 Nov, 10 AM to 1 PM.", "Visit charge ₹200. Spare parts extra."],
      prompt: { en: "When will the technician come?", te: "టెక్నీషియన్ ఎప్పుడు వస్తారు?" },
      options: ["On Saturday morning", "On Saturday evening", "Today at one o'clock"],
      answer: 0,
      why: {
        en: "The message says Saturday, between ten and one, which is the morning.",
        te: "మెసేజ్‌లో శనివారం, పది నుంచి ఒంటి గంట మధ్య అని ఉంది; అంటే ఉదయం.",
      },
      say: "The technician will come on Saturday morning.",
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The mixer ___ stopped working.",
      te: "మిక్సీ పని చేయడం ఆగిపోయింది.",
      options: ["has", "have", "is"],
      answer: 0,
      why: {
        en: "One mixer is like he or she, so has goes with stopped.",
        te: "ఒక్క మిక్సీ అంటే he, she లాంటిదే, అందుకే stopped తో has.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "There is a spelling mistake on my name.",
      wrongIndex: 5,
      fix: "There is a spelling mistake in my name.",
      why: {
        en: "A mistake is in a name or a word, never on it.",
        te: "తప్పు పేరులో లేదా పదంలో ఉంటుంది: in వాడాలి, on కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Customer care says a technician will come. Ask which day.",
        te: "టెక్నీషియన్ వస్తారని కస్టమర్ కేర్ వాళ్ళు చెప్పారు. ఏ రోజో అడగండి.",
      },
      expected: ["Which day will the technician come?", "Which day will he come?", "When will the technician come?"],
      options: ["Which day will the technician come?", "Which day the technician will come?", "Which day will the technician comes?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "At the office, say your name on the certificate has a spelling mistake.",
        te: "ఆఫీసులో, సర్టిఫికెట్‌లో మీ పేరు స్పెల్లింగ్ తప్పుగా ఉందని చెప్పండి.",
      },
      expected: ["There is a spelling mistake in my name.", "My name is spelled wrong."],
      options: ["There is a spelling mistake in my name.", "There is spelling mistake in my name.", "My name is spelling mistake."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Three small problems", te: "మూడు చిన్న సమస్యలు" },
    scene: {
      en: "Your young neighbour Kumar knows phones and offices well. Ask him for help with three small problems.",
      te: "మీ పక్కింటి కుమార్‌కి ఫోన్ల గురించి, ఆఫీసు పనుల గురించి బాగా తెలుసు. మీ మూడు చిన్న సమస్యలకి ఆయన సహాయం అడగండి.",
    },
    partner: { en: "Kumar (a neighbour)", te: "కుమార్ (పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "problem", label: { en: "Saying the problem", te: "సమస్య చెప్పడం" } },
      { id: "polite", label: { en: "Asking politely", te: "మర్యాదగా అడగడం" } },
    ],
    turns: [
      {
        partner: "Good morning! You look worried. What happened?",
        te: "నమస్కారం! కంగారుగా ఉన్నారు. ఏం జరిగింది?",
        hint: { en: "Say you have three small problems, and start with your phone.", te: "మూడు చిన్న సమస్యలు ఉన్నాయని చెప్పి, ఫోన్‌తో మొదలుపెట్టండి." },
        replies: [
          { say: "Three small problems! First, my phone has stopped working.", good: true, skill: "problem" },
          { say: "Three small problems! First, my phone is stopped working.", good: false, skill: "problem" },
        ],
      },
      {
        partner: "The battery is fine. Please try the service centre.",
        te: "బ్యాటరీ బాగానే ఉంది. సర్వీస్ సెంటర్‌లో ఒకసారి చూపించండి.",
        hint: { en: "Thank him, and tell him the second problem: the mixer, since Sunday.", te: "థాంక్స్ చెప్పి, రెండో సమస్య చెప్పండి: ఆదివారం నుంచి మిక్సీ." },
        replies: [
          { say: "Thanks. Also, my mixer has been broken since Sunday.", good: true, skill: "problem" },
          { say: "Thanks. Also, my mixer is broken since Sunday.", good: false, skill: "problem", fixIt: "duration" },
        ],
      },
      {
        partner: "Call customer care and ask for a visit date.",
        te: "కస్టమర్ కేర్‌కి ఫోన్ చేసి, ఎప్పుడు వస్తారో అడగండి.",
        hint: { en: "Ask him politely to help you with the call.", te: "ఫోన్ చేయడంలో సహాయం చేయమని ఆయన్ని మర్యాదగా అడగండి." },
        replies: [
          { say: "Could you help me with the call, please?", good: true, skill: "polite" },
          {
            say: "You call them. I don't like phone calls.",
            good: false,
            skill: "polite",
            react: { en: "Ha! Okay, I'll dial. But you speak, okay?", te: "హా! సరే, నేను డయల్ చేస్తాను. కానీ మీరే మాట్లాడాలి, సరేనా?" },
          },
        ],
      },
      {
        partner: "Done! They're coming on Saturday. Anything else?",
        te: "అయిపోయింది! శనివారం వస్తున్నారు. ఇంకేమైనా ఉందా?",
        hint: { en: "Tell him the last problem: your name on a certificate.", te: "చివరి సమస్య చెప్పండి: సర్టిఫికెట్‌లో మీ పేరు." },
        replies: [
          { say: "Yes. There is a mistake in my name.", good: true, skill: "problem" },
          { say: "Yes. There is mistake in my name.", good: false, skill: "problem", fixIt: "article" },
        ],
      },
      {
        partner: "Easy. Apply for a correction at Mee Seva.",
        te: "అది సులభం. మీ సేవలో correction కి apply చేయండి.",
        hint: { en: "Thank him warmly for all his help.", te: "ఆయన చేసిన సహాయానికి మనస్ఫూర్తిగా థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you so much for all your help!", good: true, skill: "polite" },
          { say: "Thanks. You did the needful.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
