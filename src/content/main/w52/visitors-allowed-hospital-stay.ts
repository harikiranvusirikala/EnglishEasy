import type { Lesson } from "../../types";

/** Week 52, Day 2 (CURRICULUM §5): be allowed to and not allowed to on the ward — Visitors are allowed from four to six. */
export const day: Lesson = {
  id: "visitors-allowed-hospital-stay",
  kind: "lesson",
  title: { en: "Are Visitors Allowed?", te: "విజిటర్స్‌ని రానిస్తారా?" },
  subtitle: "be allowed to · not allowed to",
  summary: {
    en: "Learn to ask about and follow the visiting rules in a hospital: Visitors are allowed from four to six.",
    te: "ఆసుపత్రిలో విజిటర్స్ నియమాలు అడగడం, పాటించడం నేర్చుకుందాం: Visitors are allowed from four to six.",
  },
  seo: {
    title: "Hospital Visiting Rules in English for Telugu Speakers",
    description:
      "Say Visitors are allowed from four to six and Am I allowed to see him now? Simple lessons for Telugu speakers visiting a hospital.",
  },
  pattern: [
    { text: "Visitors", role: "who" },
    { text: "are allowed", role: "action" },
    { text: "from four to six", role: "when" },
  ],
  core: [
    { en: "Visitors are allowed from four to six.", te: "నాలుగు నుంచి ఆరింటి వరకు విజిటర్స్‌ని రానిస్తారు.", extra: ["at"] },
    { en: "Only one person is allowed to stay at night.", te: "రాత్రి పూట ఒక్కరిని మాత్రమే ఉండనిస్తారు.", extra: ["are"] },
    { en: "Am I allowed to see him now?", te: "ఇప్పుడు నేను ఆయన్ని చూడొచ్చా?", extra: ["Do"] },
    { en: "Outside food is not allowed here.", te: "బయటి భోజనం ఇక్కడికి తేకూడదు.", extra: ["allow"] },
    { en: "You are allowed to bring fruit, but not flowers.", te: "పండ్లు తేవచ్చు, కానీ పూలు తేకూడదు.", extra: ["bringing"] },
    { en: "Please speak softly. Don't disturb the patients.", te: "మెల్లగా మాట్లాడండి. పేషెంట్లని ఇబ్బంది పెట్టకండి.", extra: ["patient"] },
    { en: "Is the attendant allowed to sleep here?", te: "attendant ఇక్కడ పడుకోవచ్చా?", extra: ["Does"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Next time you pass a hospital, clinic or temple, read one notice on the wall. Say aloud one thing that is not allowed there.",
    te: "ఈసారి ఆసుపత్రి, క్లినిక్ లేదా గుడి దగ్గర గోడ మీద ఒక నోటీసు చదవండి. అక్కడ ఏది not allowed అని ఉందో గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "at a time", te: "ఒకేసారి" },
    { en: "private room", te: "ఒక్కరికే ఉండే గది, ప్రైవేట్ రూమ్" },
    { en: "outside food", te: "బయటి నుంచి తెచ్చిన భోజనం" },
    { en: "disturb", te: "ఇబ్బంది పెట్టడం, డిస్టర్బ్ చేయడం" },
    { en: "softly", te: "మెల్లగా, నెమ్మదిగా" },
  ],
  grammar: ["should-must-have-to", "can-could"],
  topics: ["health", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "What the rules allow", te: "నియమాలు ఏం చేయనిస్తాయి" },
      body: {
        en: "You know not allowed from signs. Use is allowed or are allowed for what the rules let you do: Visitors are allowed from four to six.",
        te: "బోర్డుల మీద not allowed చూశారు. నియమాలు ఏం చేయనిస్తాయో చెప్పడానికి is allowed, are allowed వాడండి: Visitors are allowed from four to six.",
      },
      bridge: {
        te: ["నాలుగు నుంచి ఆరింటి వరకు", "విజిటర్స్‌ని", "రానిస్తారు"],
        en: [
          { text: "Visitors", role: "who" },
          { text: "are allowed", role: "action" },
          { text: "from four to six", role: "when" },
        ],
      },
      examples: [
        { en: "Visitors are allowed from four to six.", te: "నాలుగు నుంచి ఆరింటి వరకు విజిటర్స్‌ని రానిస్తారు." },
        { en: "Only one person is allowed to stay at night.", te: "రాత్రి పూట ఒక్కరిని మాత్రమే ఉండనిస్తారు." },
        { en: "Am I allowed to see him now?", te: "ఇప్పుడు నేను ఆయన్ని చూడొచ్చా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking about the rules", te: "నియమాల గురించి అడగడం" },
      items: [
        {
          form: "… is allowed",
          useFor: { en: "One person or thing the rules let in.", te: "నియమాల ప్రకారం ఒక్క మనిషికి లేదా వస్తువుకి అనుమతి." },
          example: { en: "One attendant is allowed with each patient.", te: "ఒక్కో పేషెంట్‌తో ఒక్క attendant ని ఉండనిస్తారు." },
        },
        {
          form: "… are allowed",
          useFor: { en: "More than one: visitors, flowers, phones.", te: "ఒకటి కంటే ఎక్కువ: visitors, flowers, phones." },
          example: { en: "Two visitors are allowed at a time.", te: "ఒకేసారి ఇద్దరు విజిటర్స్‌ని రానిస్తారు." },
        },
        {
          form: "Am I allowed to …?",
          useFor: { en: "Ask if you may do something.", te: "ఏదైనా చేయొచ్చా అని అడగడానికి." },
          example: { en: "Am I allowed to stay with her tonight?", te: "ఈ రాత్రి ఆవిడతో నేను ఉండొచ్చా?" },
        },
        {
          form: "… is not allowed",
          useFor: { en: "The rules say no.", te: "నియమాల ప్రకారం కుదరదు." },
          example: { en: "Outside food is not allowed here.", te: "బయటి భోజనం ఇక్కడికి తేకూడదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "plural",
      wrong: "Two visitor are allowed at a time.",
      right: "Two visitors are allowed at a time.",
      why: {
        en: "After two, visitor takes s; Telugu says ఇద్దరు, but English shows it on the word.",
        te: "రెండు తర్వాత visitor కి s వస్తుంది; తెలుగులో 'ఇద్దరు' అంటాం, ఇంగ్లీష్‌లో పదం చివర s చేర్చాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Am I allow to stay at night?",
      right: "Am I allowed to stay at night?",
      why: {
        en: "After am, is or are, always say allowed with -ed, in a question too.",
        te: "am, is, are తర్వాత ఎప్పుడూ allowed అనాలి, చివర -ed తో; ప్రశ్నలో కూడా.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "Your friend wants to visit your neighbour at eleven in the morning. Visiting time is in the evening. What do you say?",
        te: "మీ స్నేహితులు పొద్దున పదకొండింటికి మీ పక్కింటివారిని చూడటానికి వెళ్దాం అంటున్నారు. విజిటింగ్ టైమ్ సాయంత్రం. ఏమంటారు?",
      },
      options: [
        "Sorry, visitors are allowed only from four to six.",
        "Sorry, visitors are allowed only between four to six.",
        "Sorry, visitors are allow only from four to six.",
      ],
      answer: 0,
      why: {
        en: "Use from with to, or between with and; never mix the two pairs.",
        te: "from తో to, between తో and వాడాలి; రెండు జతలనీ కలపకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The attendant ___ to wear a pass all the time.",
      te: "attendant ఎప్పుడూ pass పెట్టుకోవాలి.",
      options: ["has", "have", "having"],
      answer: 0,
      why: {
        en: "One person, like he or she, takes has to, not have to.",
        te: "ఒక్కరి గురించి అయితే (he, she లాగా) have to కాదు, has to.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "sign",
      heading: "Visiting Hours",
      lines: [
        "Ward 3, General Ward",
        "Visitors: 4 pm to 6 pm only",
        "Two visitors at a time",
        "One attendant at night, with a pass",
        "Children below 12 not allowed",
        "Outside food not allowed",
      ],
      prompt: {
        en: "Your neighbour is in Ward 3. When can you visit?",
        te: "మీ పక్కింటివారు వార్డ్ 3 లో ఉన్నారు. మీరు ఎప్పుడు చూడటానికి వెళ్ళొచ్చు?",
      },
      options: ["From 4 pm to 6 pm", "Any time in the day", "Only at night"],
      answer: 0,
      why: {
        en: "The second line gives the only visiting time, in the evening.",
        te: "రెండో లైన్‌లో సాయంత్రం విజిటింగ్ టైమ్ ఒక్కటే ఉంది.",
      },
      say: "Visitors are allowed from four to six only.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "My neighbour is in private room on the second floor.",
      wrongIndex: 4,
      fix: "My neighbour is in a private room on the second floor.",
      why: {
        en: "Room is a thing you count, so one room needs a; Telugu has no such word.",
        te: "room ని లెక్కపెట్టొచ్చు, అందుకే ఒక్క room ముందు a కావాలి; తెలుగులో అలాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You reach the ward a little early. Ask the guard if you are allowed to go in now.",
        te: "మీరు వార్డుకి కొంచెం ముందుగా వచ్చారు. ఇప్పుడు లోపలికి వెళ్ళొచ్చా అని గార్డుని అడగండి.",
      },
      expected: ["Excuse me, am I allowed to go in now?", "Am I allowed to go in now?", "Can I go in now?", "May I go in now?"],
      options: ["Excuse me, am I allowed to go in now?", "Excuse me, do I allowed to go in now?", "Excuse me, am I allow to go in now?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "You and your cousin want to go in together. Ask the guard if two people can go in.",
        te: "మీరు, మీ కజిన్ కలిసి లోపలికి వెళ్ళాలనుకుంటున్నారు. ఇద్దరు వెళ్ళొచ్చా అని గార్డుని అడగండి.",
      },
      expected: ["Are two people allowed at a time?", "Can two people go in together?", "Are two visitors allowed?", "Can two of us go in?"],
      options: ["Are two people allowed at a time?", "Are two person allowed at a time?", "Is two people allowed at a time?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the hospital gate", te: "ఆసుపత్రి గేటు దగ్గర" },
    scene: {
      en: "Your neighbour Geetha is in the general ward. You reach the hospital at a quarter to four. The security guard Kumar stops you.",
      te: "మీ పక్కింటి గీత గారు జనరల్ వార్డులో ఉన్నారు. మీరు నాలుగింటికి పావుగంట ముందు ఆసుపత్రికి వచ్చారు. సెక్యూరిటీ గార్డు కుమార్ గారు మిమ్మల్ని ఆపారు.",
    },
    partner: { en: "Kumar (security guard)", te: "కుమార్ (సెక్యూరిటీ గార్డు)" },
    voice: "b",
    skills: [
      { id: "rules", label: { en: "Asking about rules", te: "నియమాలు అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good afternoon. Who are you visiting?",
        te: "నమస్కారం. ఎవరిని చూడటానికి వచ్చారు?",
        hint: { en: "Say her name and which ward she is in.", te: "ఆవిడ పేరు, ఏ వార్డులో ఉన్నారో చెప్పండి." },
        replies: [
          { say: "I'm visiting my neighbour, Geetha. She is in the general ward.", good: true, skill: "rules" },
          {
            say: "Why do you care? Just let me go in.",
            good: false,
            skill: "polite",
            react: { en: "Sorry, it's my job to ask everyone.", te: "సారీ అండీ, అందరినీ అడగడం నా డ్యూటీ." },
          },
        ],
      },
      {
        partner: "Visitors are allowed only from four. Please wait fifteen minutes.",
        te: "నాలుగింటి నుంచే విజిటర్స్‌ని రానిస్తాం. పదిహేను నిమిషాలు ఆగండి.",
        hint: { en: "Agree to wait. Ask if you can take your bag of fruit inside.", te: "ఆగుతానని చెప్పండి. మీ పండ్ల సంచి లోపలికి తీసుకెళ్ళొచ్చా అని అడగండి." },
        replies: [
          { say: "Okay, I'll wait. Am I allowed to take fruit inside?", good: true, skill: "rules" },
          { say: "Okay. Is fruit allowed inside?", good: true, skill: "rules" },
          { say: "Okay, I'll wait. Do I allowed to take fruit inside?", good: false, skill: "rules", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, fruit is fine. But flowers are not allowed.",
        te: "పండ్లు పర్లేదు. కానీ పూలు రానివ్వం.",
        hint: { en: "Say okay, and ask how long you can stay with her.", te: "సరే అని, ఆవిడతో ఎంతసేపు ఉండొచ్చో అడగండి." },
        replies: [
          { say: "Okay. How long am I allowed to stay?", good: true, skill: "rules" },
          { say: "Okay. How long can I stay with her?", good: true, skill: "rules" },
          { say: "Okay. How long I can stay with her?", good: false, skill: "rules", fixIt: "question" },
        ],
      },
      {
        partner: "Till six. Only two visitors at a time, please.",
        te: "ఆరింటి వరకు. ఒకేసారి ఇద్దరు విజిటర్స్ మాత్రమే.",
        hint: { en: "Thank him, and say you will go in at four.", te: "థాంక్స్ చెప్పి, నాలుగింటికి లోపలికి వెళ్తానని చెప్పండి." },
        replies: [
          { say: "Thank you. I'll go in at four.", good: true, skill: "polite" },
          { say: "Thank you. I'll go in on four.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
