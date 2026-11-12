import type { Lesson } from "../../types";

/** Week 49, Day 4 (CURRICULUM §5): the present perfect for results in a delivery complaint — The app says delivered, but I haven't received it. */
export const day: Lesson = {
  id: "parcel-says-delivered-but",
  kind: "lesson",
  title: { en: "It Says Delivered, But", te: "డెలివరీ అయిందంటోంది, కానీ" },
  subtitle: "I haven't received it",
  summary: {
    en: "Learn to report a missing parcel politely: The app says delivered, but I haven't received it. Could you check with the delivery person, please?",
    te: "అందని పార్సెల్ గురించి మర్యాదగా చెప్పడం నేర్చుకుందాం: The app says delivered, but I haven't received it. Could you check with the delivery person, please?",
  },
  seo: {
    title: "Reporting a Missing Parcel in English for Telugu Speakers",
    description:
      "Say The app says delivered, but I haven't received it. Simple lessons for Telugu speakers on calling customer care about a missing parcel.",
  },
  pattern: [
    { text: "The app says delivered,", role: "what" },
    { text: "but I", role: "who" },
    { text: "haven't received", role: "action" },
    { text: "it", role: "what" },
  ],
  core: [
    { en: "The app says delivered, but I haven't received it.", te: "app లో delivered అని ఉంది, కానీ నాకు అందలేదు.", extra: ["receive"] },
    { en: "Could you check with the delivery person, please?", te: "డెలివరీ చేసిన వ్యక్తిని ఒకసారి అడుగుతారా, please?", extra: ["to"] },
    { en: "Nobody has come to my house today.", te: "ఈ రోజు మా ఇంటికి ఎవరూ రాలేదు.", extra: ["came"] },
    { en: "Maybe it has gone to the wrong address.", te: "బహుశా వేరే అడ్రస్‌కి వెళ్ళిందేమో.", extra: ["went"] },
    { en: "I've checked with the guard and my neighbours.", te: "సెక్యూరిటీ గార్డ్‌ని, పక్కింటివాళ్ళని అడిగి చూశాను.", extra: ["neighbour"] },
    { en: "Please look into it and call me back today.", te: "దయచేసి దీని సంగతి చూసి, ఈ రోజే నాకు మళ్ళీ ఫోన్ చేయండి.", extra: ["looking"] },
    { en: "The delivery person left it next door by mistake.", te: "డెలివరీ చేసే ఆయన పొరపాటున పక్కింట్లో ఇచ్చేశారు.", extra: ["leaved"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of something you are still waiting for. Say aloud what has happened: I haven't received …",
    te: "మీకు ఇంకా అందని ఏదైనా ఒకటి గుర్తు చేసుకోండి. ఏమైందో గట్టిగా చెప్పండి: I haven't received …",
  },
  words: [
    { en: "delivered", te: "అందజేశారు, డెలివరీ అయింది" },
    { en: "wrong address", te: "తప్పు అడ్రస్, వేరే అడ్రస్" },
    { en: "look into", te: "ఏమైందో చూడటం, పరిశీలించడం" },
    { en: "by mistake", te: "పొరపాటున" },
    { en: "check with", te: "ఎవరినైనా అడిగి తెలుసుకోవడం" },
  ],
  grammar: ["present-perfect", "can-could", "politeness-softening"],
  topics: ["shopping", "phone", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "It hasn't come", te: "ఇంకా రాలేదు" },
      body: {
        en: "For a result you see now, use have or has + the done form: I haven't received it. Nobody has come. Then ask kindly: Could you check …?",
        te: "ఇప్పుడు కనిపిస్తున్న ఫలితానికి have / has + done form: I haven't received it. Nobody has come. తర్వాత మర్యాదగా అడగండి: Could you check …?",
      },
      bridge: {
        te: ["app లో delivered అని ఉంది,", "కానీ నాకు", "అందలేదు"],
        en: [
          { text: "The app says delivered,", role: "what" },
          { text: "but I", role: "who" },
          { text: "haven't received", role: "action" },
          { text: "it", role: "what" },
        ],
      },
      examples: [
        { en: "The app says delivered, but I haven't received it.", te: "app లో delivered అని ఉంది, కానీ నాకు అందలేదు." },
        { en: "Nobody has come to my house today.", te: "ఈ రోజు మా ఇంటికి ఎవరూ రాలేదు." },
        { en: "Maybe it has gone to the wrong address.", te: "బహుశా వేరే అడ్రస్‌కి వెళ్ళిందేమో." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Haven't or didn't?", te: "haven't ఆ, didn't ఆ?" },
      items: [
        {
          form: "I haven't received it.",
          useFor: { en: "It is still not with you, now.", te: "ఇప్పటికీ మీ చేతికి రాలేదు." },
          example: { en: "The app says delivered, but I haven't received it.", te: "app లో delivered అని ఉంది, కానీ నాకు అందలేదు." },
        },
        {
          form: "Nobody has come.",
          useFor: { en: "Up to now, today.", te: "ఈ రోజు ఇప్పటి వరకు." },
          example: { en: "Nobody has come to my house today.", te: "ఈ రోజు మా ఇంటికి ఎవరూ రాలేదు." },
        },
        {
          form: "It didn't come yesterday.",
          useFor: { en: "A finished time, like yesterday or last week.", te: "నిన్న, పోయిన వారం లాంటి అయిపోయిన టైమ్." },
          example: { en: "It didn't come yesterday, and it hasn't come today.", te: "నిన్న రాలేదు, ఈ రోజు కూడా రాలేదు." },
        },
        {
          form: "I've checked …",
          useFor: { en: "You did it, so you know now.", te: "మీరు చేసి చూశారు, అందుకే ఇప్పుడు తెలుసు." },
          example: { en: "I've checked with the guard and my neighbours.", te: "సెక్యూరిటీ గార్డ్‌ని, పక్కింటివాళ్ళని అడిగి చూశాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "I am living at this address for ten years.",
      right: "I have lived at this address for ten years.",
      why: {
        en: "From the past up to now needs have, not am; Telugu ఉంటున్నాను misleads us.",
        te: "గతం నుంచి ఇప్పటి దాకా అయితే am కాదు, have వాడాలి; తెలుగు 'ఉంటున్నాను' వల్ల am living అనేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please revert back today.",
      right: "Please call me back today.",
      why: {
        en: "Revert back is office English heard only in India; call me back is clear everywhere.",
        te: "revert back మన ఆఫీసుల్లోనే వినిపిస్తుంది; call me back అందరికీ అర్థమవుతుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "The parcel has not reached you. Tell customer care.", te: "పార్సెల్ మీకు అందలేదు. customer care కి చెప్పండి." },
      options: ["I haven't received it.", "I haven't receive it.", "I am not received it."],
      answer: 0,
      why: {
        en: "Haven't goes with the done form, received; Telugu అందలేదు has no word like have.",
        te: "haven't తర్వాత done form (received) వస్తుంది; తెలుగు 'అందలేదు' లో have లాంటి పదం ఉండదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The delivery person ___ my house well.",
      te: "డెలివరీ చేసే ఆయనకి మా ఇల్లు బాగా తెలుసు.",
      options: ["knows", "know", "is knowing"],
      answer: 0,
      why: {
        en: "One person takes s on the verb, and know never takes -ing.",
        te: "ఒక్కరి గురించి అయితే verb కి s; know కి ఎప్పుడూ -ing రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "Customer care asks: Did you ask the security guard? You did. Say so.",
        te: "సెక్యూరిటీ గార్డ్‌ని అడిగారా? అని customer care అడుగుతున్నారు. అడిగారు. అదే చెప్పండి.",
      },
      options: ["Yes, I've checked with the guard.", "Yes, I've checked to the guard.", "Yes, I've check with the guard."],
      answer: 0,
      why: {
        en: "Check with a person means ask them; use with, and the done form checked.",
        te: "ఒకరిని అడిగి తెలుసుకోవడం check with; to కాదు, with. have తర్వాత done form checked.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "question",
      sentence: "Why the app is showing delivered?",
      wrongIndex: 3,
      fix: "Why is the app showing delivered?",
      why: {
        en: "In a why question, is comes right after why; Telugu keeps the order.",
        te: "why ప్రశ్నలో is వెంటనే why తర్వాత వస్తుంది; తెలుగులో పదాల వరుస మారదు, అందుకే పొరపాటు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Customer care asks: So you haven't received it? You haven't. Answer.",
        te: "So you haven't received it? అని customer care అడుగుతున్నారు. మీకు అందలేదు. జవాబు చెప్పండి.",
      },
      expected: ["No, I haven't.", "No, I haven't received it.", "No, it hasn't come."],
      options: ["No, I haven't.", "Yes, I haven't.", "No, I didn't received."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Ask customer care to find out what happened and phone you again.",
        te: "ఏమైందో కనుక్కుని, మళ్ళీ మీకు ఫోన్ చేయమని customer care ని అడగండి.",
      },
      expected: ["Could you look into it and call me back, please?", "Please look into it and call me back.", "Could you look into it, please?"],
      options: [
        "Could you look into it and call me back, please?",
        "Could you look into it and revert back, please?",
        "Look into it. Call me back.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Where is my parcel?", te: "నా పార్సెల్ ఎక్కడ?" },
    scene: {
      en: "The app shows your parcel as delivered at noon, but nobody came. You call customer care.",
      te: "మధ్యాహ్నం మీ పార్సెల్ డెలివరీ అయిందని app చూపిస్తోంది, కానీ ఎవరూ రాలేదు. customer care కి ఫోన్ చేశారు.",
    },
    partner: { en: "Imran (customer care)", te: "ఇమ్రాన్ (customer care)" },
    voice: "b",
    skills: [
      { id: "explain", label: { en: "Explaining a problem", te: "సమస్య చెప్పడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good afternoon, ShopKart customer care. This is Imran. How can I help?",
        te: "గుడ్ ఆఫ్టర్‌నూన్, ShopKart customer care. నేను ఇమ్రాన్. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Say the app shows delivered, but the parcel hasn't come.", te: "app లో delivered అని ఉంది, కానీ పార్సెల్ రాలేదని చెప్పండి." },
        replies: [
          { say: "The app says delivered, but I haven't received it.", good: true, skill: "explain" },
          { say: "My parcel shows delivered, but it hasn't come.", good: true, skill: "explain" },
          { say: "My parcel is not came, but the app says delivered.", good: false, skill: "explain" },
        ],
      },
      {
        partner: "I'm sorry about that. Have you checked with your neighbours?",
        te: "సారీ అండీ. మీ పక్కింటివాళ్ళని అడిగి చూశారా?",
        hint: { en: "Say yes: you have asked the guard and the neighbours.", te: "అవును అనండి: గార్డ్‌ని, పక్కింటివాళ్ళని అడిగారు." },
        replies: [
          { say: "Yes, I've checked with the guard and my neighbours.", good: true, skill: "explain" },
          { say: "Yes, I have. Nobody has seen it.", good: true, skill: "explain" },
          {
            say: "That's your job, not mine!",
            good: false,
            skill: "polite",
            react: { en: "You're right, sorry. I'll check it for you now.", te: "నిజమే, సారీ. నేను ఇప్పుడే మీ కోసం చెక్ చేస్తాను." },
          },
        ],
      },
      {
        partner: "I see. The delivery photo shows a blue gate. Is your gate blue?",
        te: "అలాగా. డెలివరీ ఫోటోలో నీలం రంగు గేట్ ఉంది. మీ గేట్ నీలం రంగేనా?",
        hint: { en: "Say no, your gate is green; maybe it has gone to the wrong house.", te: "లేదు, మీ గేట్ ఆకుపచ్చ అని చెప్పి, బహుశా వేరే ఇంటికి వెళ్ళిందేమో అనండి." },
        replies: [
          { say: "No, my gate is green. Maybe it has gone to the wrong house.", good: true, skill: "explain" },
          { say: "No, it's green. It has gone to the wrong address.", good: true, skill: "explain" },
          { say: "No, my gate green. Maybe it went to wrong house.", good: false, skill: "explain", fixIt: "be" },
        ],
      },
      {
        partner: "I'm sorry. I'll ask the delivery person to bring it to you today.",
        te: "సారీ అండీ. ఈ రోజే మీకు తెచ్చి ఇవ్వమని డెలివరీ ఆయనకి చెప్తాను.",
        hint: { en: "Thank him, and ask him to phone you if there is any problem.", te: "ఆయనకి థాంక్స్ చెప్పి, ఏదైనా సమస్య ఉంటే ఫోన్ చేయమని అడగండి." },
        replies: [
          { say: "Thank you. If there's any problem, please call me.", good: true, skill: "polite" },
          { say: "Thank you. Please call me if there's a problem.", good: true, skill: "polite" },
          { say: "Thank you. If there will be a problem, call me.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
