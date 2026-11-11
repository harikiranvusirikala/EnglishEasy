import type { Lesson } from "../../types";

/** Week 37, Day 3 (CURRICULUM §4): should for advice vs must for rules — the doctor's rules and advice. */
export const day: Lesson = {
  id: "should-or-must",
  kind: "lesson",
  title: { en: "Should or Must?", te: "సలహా ఆ, నియమమా?" },
  subtitle: "advice or rule",
  summary: {
    en: "Learn to tell advice from a rule: You should walk for half an hour. You must take these tablets every day.",
    te: "సలహాకీ నియమానికీ తేడా తెలుసుకుందాం: You should walk for half an hour. You must take these tablets every day.",
  },
  seo: {
    title: "Should or Must: Advice and Rules in English for Telugu Speakers",
    description:
      "Understand You should walk every day and You must take these tablets. Simple lessons for Telugu speakers on the doctor's advice and rules.",
  },
  pattern: [
    { text: "You", role: "who" },
    { text: "must take", role: "action" },
    { text: "these tablets", role: "what" },
    { text: "every day.", role: "when" },
  ],
  core: [
    { en: "You must take these tablets every day.", te: "మీరు ఈ మాత్రలు ప్రతి రోజూ తప్పకుండా వేసుకోవాలి.", extra: ["taking"] },
    { en: "You should walk for half an hour.", te: "మీరు అరగంట నడిస్తే మంచిది.", extra: ["to"] },
    { en: "You must come back after one week.", te: "వారం తర్వాత తప్పకుండా మళ్ళీ రావాలి.", extra: ["came"] },
    { en: "You should eat less salt.", te: "మీరు ఉప్పు తక్కువ తింటే మంచిది.", extra: ["little"] },
    { en: "You should drink plenty of water.", te: "మీరు నీళ్ళు బాగా తాగితే మంచిది.", extra: ["much"] },
    { en: "You mustn't stop the tablets on your own.", te: "మీ అంతట మీరు మాత్రలు ఆపకూడదు.", extra: ["yourself"] },
    { en: "Should I take it daily, or only when needed?", te: "రోజూ వేసుకోవాలా, అవసరమైనప్పుడు మాత్రమేనా?", extra: ["need"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one thing your doctor told you. Is it a rule or advice? Say it with must or should.",
    te: "మీ డాక్టర్ చెప్పిన ఒక మాట గుర్తు తెచ్చుకోండి. అది నియమమా, సలహానా? must లేదా should తో చెప్పండి.",
  },
  words: [
    { en: "follow", te: "పాటించడం" },
    { en: "compulsory", te: "తప్పనిసరి" },
    { en: "regularly", te: "క్రమం తప్పకుండా" },
    { en: "plenty of", te: "బాగా, చాలినంత" },
    { en: "on your own", te: "మీ అంతట మీరే" },
  ],
  grammar: ["should-must-have-to"],
  topics: ["health", "doctor"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Advice or a rule?", te: "సలహానా, నియమమా?" },
      body: {
        en: "Should is advice: it is good for you, but you choose. Must is a rule: there is no choice. Signs and forms also say compulsory: it means must.",
        te: "should అంటే సలహా: మీకు మంచిది, కానీ మీ ఇష్టం. must అంటే నియమం: తప్పదు. బోర్డుల మీద, ఫారాల్లో compulsory అని కూడా ఉంటుంది: అంటే must.",
      },
      bridge: {
        te: ["మీరు", "ఈ మాత్రలు", "ప్రతి రోజూ", "తప్పకుండా వేసుకోవాలి"],
        en: [
          { text: "You", role: "who" },
          { text: "must take", role: "action" },
          { text: "these tablets", role: "what" },
          { text: "every day.", role: "when" },
        ],
      },
      examples: [
        { en: "You must take these tablets every day.", te: "మీరు ఈ మాత్రలు ప్రతి రోజూ తప్పకుండా వేసుకోవాలి." },
        { en: "You should walk for half an hour.", te: "మీరు అరగంట నడిస్తే మంచిది." },
        { en: "You should drink plenty of water.", te: "మీరు నీళ్ళు బాగా తాగితే మంచిది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What the doctor means", te: "డాక్టర్ మాటకి అర్థం" },
      items: [
        {
          form: "should",
          useFor: { en: "Advice: a good idea, your choice.", te: "సలహా: మంచి ఆలోచన, మీ ఇష్టం." },
          example: { en: "You should eat less salt.", te: "మీరు ఉప్పు తక్కువ తింటే మంచిది." },
        },
        {
          form: "must",
          useFor: { en: "A rule: no choice.", te: "నియమం: తప్పదు." },
          example: { en: "You must check your sugar regularly.", te: "మీరు క్రమం తప్పకుండా షుగర్ చూపించుకోవాలి." },
        },
        {
          form: "mustn't",
          useFor: { en: "Not allowed: it can harm you.", te: "చేయకూడదు: హాని చేస్తుంది." },
          example: { en: "You mustn't stop the tablets on your own.", te: "మీ అంతట మీరు మాత్రలు ఆపకూడదు." },
        },
        {
          form: "don't have to",
          useFor: { en: "Not needed.", te: "అవసరం లేదు." },
          example: { en: "You don't have to come fasting this time.", te: "ఈసారి పరగడుపున రావక్కర్లేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "Yes, doctor. I am walking daily.",
      right: "Yes, doctor. I walk every day.",
      why: {
        en: "A daily habit takes the plain verb, not am walking; Telugu నడుస్తున్నాను misleads us here.",
        te: "రోజూ చేసే అలవాటుకి plain verb వాడాలి, am walking కాదు; 'నడుస్తున్నాను' అనే తెలుగు మాట మనల్ని తప్పుదారి పట్టిస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "You should take rest for two days.",
      right: "You should rest for two days.",
      why: {
        en: "Take rest is heard only in India; in English, rest is the verb by itself.",
        te: "take rest అనేది మన దగ్గరే వినిపిస్తుంది; ఇంగ్లీష్‌లో rest ఒక్కటే verb.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "The doctor says: You should walk every day. Is it a rule or advice?",
        te: "డాక్టర్ గారు You should walk every day అన్నారు. ఇది నియమమా, సలహానా?",
      },
      options: ["Advice: it is good for you.", "A strict rule: no choice.", "Walking is not allowed."],
      answer: 0,
      why: {
        en: "Should gives advice; the choice is yours, but it is good for you.",
        te: "should అంటే సలహా; మీ ఇష్టమే, కానీ మీకు మంచిది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Your sugar is high. You ___ take these tablets.",
      te: "మీ షుగర్ ఎక్కువగా ఉంది. ఈ మాత్రలు తప్పకుండా వేసుకోవాలి.",
      options: ["must", "should to", "can"],
      answer: 0,
      why: {
        en: "The doctor's order leaves no choice, so must; should never takes to.",
        te: "డాక్టర్ ఆర్డర్ కాబట్టి తప్పదు, అందుకే must; should తర్వాత to రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "The doctor asks: Do you walk? You walk every morning. What do you say?",
        te: "డాక్టర్ గారు Do you walk? అని అడిగారు. మీరు ప్రతి రోజూ ఉదయం నడుస్తారు. ఏమంటారు?",
      },
      options: ["Yes, I walk every morning.", "Yes, I am walking every morning.", "Yes, I walking every morning."],
      answer: 0,
      why: {
        en: "A habit takes the plain verb walk, not am walking.",
        te: "అలవాటుకి plain verb walk, am walking కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "You should drinking plenty of water.",
      wrongIndex: 2,
      fix: "You should drink plenty of water.",
      why: {
        en: "After should, the verb stays plain, with no -ing.",
        te: "should తర్వాత verb మారదు, -ing రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend Swapna sits at home all day. Give her friendly advice about walking.",
        te: "మీ స్నేహితురాలు స్వప్న రోజంతా ఇంట్లోనే కూర్చుంటారు. నడక గురించి ఆవిడకి ఒక సలహా ఇవ్వండి.",
      },
      expected: ["You should walk every day.", "You should walk for half an hour.", "You should walk every morning."],
      options: ["You should walk every day.", "You should walking every day.", "Walk, or you will get fat!"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour Narayana wants to stop his BP tablets himself. Warn him.",
        te: "పక్కింటి నారాయణ గారు తనంతట తానే BP మాత్రలు ఆపేయాలనుకుంటున్నారు. ఆయన్ని హెచ్చరించండి.",
      },
      expected: ["You mustn't stop them on your own.", "You mustn't stop the tablets on your own.", "Please ask the doctor first."],
      options: ["You mustn't stop them on your own.", "You don't have to stop them on your own.", "You mustn't stopping them on your own."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The doctor's rules and advice", te: "డాక్టర్ నియమాలు, సలహాలు" },
    scene: {
      en: "You are at the clinic for a sugar check. Dr Kavitha tells you what to do.",
      te: "షుగర్ చెకప్ కోసం క్లినిక్‌కి వచ్చారు. డాక్టర్ కవిత గారు ఏం చేయాలో చెప్తున్నారు.",
    },
    partner: { en: "Dr Kavitha", te: "డాక్టర్ కవిత" },
    skills: [
      { id: "advice", label: { en: "Rules and advice", te: "నియమాలు, సలహాలు" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Your sugar is a bit high today.",
        te: "ఈ రోజు మీ షుగర్ కొంచెం ఎక్కువగా ఉంది.",
        hint: { en: "Ask her what you need to do now.", te: "ఇప్పుడు ఏం చేయాలో ఆవిడని అడగండి." },
        replies: [
          { say: "What should I do, doctor?", good: true, skill: "advice" },
          { say: "What I should do, doctor?", good: false, skill: "advice", fixIt: "question" },
        ],
      },
      {
        partner: "You must take this tablet every morning.",
        te: "ఈ మాత్ర ప్రతి రోజూ ఉదయం తప్పకుండా వేసుకోవాలి.",
        hint: { en: "Ask if it is for a long time.", te: "చాలా కాలం వేసుకోవాలా అని అడగండి." },
        replies: [
          { say: "Do I have to take it for a long time?", good: true, skill: "advice" },
          {
            say: "Tablets again? I don't like tablets.",
            good: false,
            skill: "polite",
            react: { en: "I understand. But your health comes first.", te: "అర్థమైంది. కానీ మీ ఆరోగ్యమే ముఖ్యం." },
          },
        ],
      },
      {
        partner: "Let's see after three months. Do you walk?",
        te: "మూడు నెలల తర్వాత చూద్దాం. మీరు నడుస్తారా?",
        hint: { en: "Say yes, it is your daily habit.", te: "అవును, అది మీ రోజూ అలవాటు అని చెప్పండి." },
        replies: [
          { say: "Yes, I walk every morning.", good: true, skill: "advice" },
          { say: "Yes, I am walking daily.", good: false, skill: "advice", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Good. You should also eat less rice at night.",
        te: "మంచిది. రాత్రిపూట అన్నం కూడా తక్కువ తింటే మంచిది.",
        hint: { en: "Agree to follow it, and thank her.", te: "పాటిస్తానని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, doctor. I'll follow your advice. Thank you.", good: true, skill: "polite" },
          { say: "Okay, doctor. I'll follow your advices. Thank you.", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
    ],
  },
};
