import type { Lesson } from "../../types";

/** Week 37, Day 2 (CURRICULUM §4): mustn't (not allowed) vs don't have to (not needed) — signs and rules at a hospital. */
export const day: Lesson = {
  id: "you-mustnt-smoke-here",
  kind: "lesson",
  title: { en: "You Mustn't Smoke Here", te: "చేయకూడదు" },
  subtitle: "mustn't / don't have to",
  summary: {
    en: "Learn the difference: You mustn't smoke here means it is not allowed. You don't have to pay means it is not needed.",
    te: "తేడా నేర్చుకుందాం: You mustn't smoke here అంటే చేయకూడదు. You don't have to pay అంటే అవసరం లేదు.",
  },
  seo: {
    title: "Mustn't and Don't Have To in English for Telugu Speakers",
    description:
      "Say You mustn't smoke here and You don't have to pay for parking. Simple lessons for Telugu speakers on rules and signs.",
  },
  pattern: [
    { text: "You", role: "who" },
    { text: "mustn't smoke", role: "action" },
    { text: "here.", role: "what" },
  ],
  core: [
    { en: "You mustn't smoke here.", te: "మీరు ఇక్కడ సిగరెట్ తాగకూడదు.", extra: ["smoking"] },
    { en: "You don't have to pay for parking.", te: "పార్కింగ్‌కి డబ్బులు కట్టక్కర్లేదు.", extra: ["mustn't"] },
    { en: "You mustn't park in front of the gate.", te: "గేటు ముందు బండి పెట్టకూడదు.", extra: ["at"] },
    { en: "You mustn't make noise in the ward.", te: "వార్డులో శబ్దం చేయకూడదు.", extra: ["do"] },
    { en: "Senior citizens don't have to stand in the queue.", te: "సీనియర్ సిటిజన్లు క్యూలో నిలబడక్కర్లేదు.", extra: ["doesn't"] },
    { en: "You don't have to bring the old reports.", te: "పాత రిపోర్టులు తీసుకురావక్కర్లేదు.", extra: ["no"] },
    { en: "Visitors mustn't come after eight at night.", te: "రాత్రి ఎనిమిది తర్వాత విజిటర్లు రాకూడదు.", extra: ["in"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Read one sign today, at a shop, bus stand or hospital. Say what you mustn't do there.",
    te: "ఈ రోజు ఏదైనా షాప్, బస్టాండ్ లేదా హాస్పిటల్‌లో ఒక బోర్డు చదవండి. అక్కడ ఏం చేయకూడదో ఇంగ్లీష్‌లో చెప్పండి.",
  },
  words: [
    { en: "mustn't", te: "చేయకూడదు" },
    { en: "visitor pass", te: "విజిటర్ పాస్, లోపలికి వెళ్ళే పాస్" },
    { en: "visiting hours", te: "రోగులను చూడటానికి వెళ్ళే సమయం" },
    { en: "sign", te: "బోర్డు, సూచిక" },
    { en: "senior citizens", te: "పెద్దవాళ్ళు, సీనియర్ సిటిజన్లు" },
  ],
  grammar: ["should-must-have-to"],
  topics: ["health", "doctor", "transport"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Not allowed, or not needed?", te: "చేయకూడదా, అవసరం లేదా?" },
      body: {
        en: "Mustn't means it is not allowed: a rule says no. Don't have to means it is not needed: you can, but there is no need. They look alike, but the meaning is very different.",
        te: "mustn't అంటే చేయకూడదు, నియమం ఒప్పుకోదు. don't have to అంటే అవసరం లేదు, చేయాలనుకుంటే చేయొచ్చు. రెండూ ఒకేలా కనిపిస్తాయి, కానీ అర్థం చాలా వేరు.",
      },
      bridge: {
        te: ["మీరు", "ఇక్కడ", "సిగరెట్ తాగకూడదు"],
        en: [
          { text: "You", role: "who" },
          { text: "mustn't smoke", role: "action" },
          { text: "here.", role: "what" },
        ],
      },
      examples: [
        { en: "You mustn't smoke here.", te: "మీరు ఇక్కడ సిగరెట్ తాగకూడదు." },
        { en: "You don't have to pay for parking.", te: "పార్కింగ్‌కి డబ్బులు కట్టక్కర్లేదు." },
        { en: "You mustn't park in front of the gate.", te: "గేటు ముందు బండి పెట్టకూడదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Three rule words", te: "నియమాల మూడు మాటలు" },
      items: [
        {
          form: "must",
          useFor: { en: "Needed: a rule says yes.", te: "తప్పనిసరి: నియమం చేయమంటుంది." },
          example: { en: "You must take a token first.", te: "ముందు తప్పనిసరిగా టోకెన్ తీసుకోవాలి." },
        },
        {
          form: "mustn't",
          useFor: { en: "Not allowed: a rule says no.", te: "చేయకూడదు: నియమం వద్దంటుంది." },
          example: { en: "You mustn't make noise in the ward.", te: "వార్డులో శబ్దం చేయకూడదు." },
        },
        {
          form: "don't have to",
          useFor: { en: "Not needed: it is your choice.", te: "అవసరం లేదు: మీ ఇష్టం." },
          example: { en: "You don't have to bring the old reports.", te: "పాత రిపోర్టులు తీసుకురావక్కర్లేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "You no need to pay for parking.",
      right: "You don't have to pay for parking.",
      why: {
        en: "You no need is an Indian habit; English puts don't have to after you.",
        te: "You no need అనేది మన దగ్గరి అలవాటు; ఇంగ్లీష్‌లో you తర్వాత don't have to వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "You don't have to smoke here.",
      right: "You mustn't smoke here.",
      why: {
        en: "Don't have to only means no need; a rule against something needs mustn't.",
        te: "don't have to అంటే అవసరం లేదు అని మాత్రమే; ఏదైనా చేయకూడదని చెప్పాలంటే mustn't.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "indian-english",
      prompt: {
        en: "Parking at the hospital is free. Tell your friend.",
        te: "హాస్పిటల్‌లో పార్కింగ్ ఉచితం. మీ స్నేహితులకి చెప్పండి.",
      },
      options: ["You don't have to pay for parking.", "You mustn't pay for parking.", "You no need to pay for parking."],
      answer: 0,
      why: {
        en: "Free means there is no need to pay, so use don't have to.",
        te: "ఉచితం అంటే కట్టాల్సిన అవసరం లేదు, అందుకే don't have to.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "You ___ smoke inside the hospital.",
      te: "హాస్పిటల్ లోపల సిగరెట్ తాగకూడదు.",
      options: ["mustn't", "don't have to", "not"],
      answer: 0,
      why: {
        en: "Smoking inside is against the rule, so it is not allowed at all.",
        te: "లోపల సిగరెట్ తాగడం నియమానికి విరుద్ధం, అస్సలు చేయకూడదు; అందుకే mustn't.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The nurse says: You don't have to wait here. What does it mean?",
        te: "నర్సు గారు You don't have to wait here అన్నారు. అర్థం ఏంటి?",
      },
      options: ["You can wait, but there is no need.", "Waiting here is against the rule.", "You must wait here."],
      answer: 0,
      why: {
        en: "Don't have to means no need; you are free to choose.",
        te: "don't have to అంటే అవసరం లేదు; మీ ఇష్టం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My uncle don't have to pay for the tests.",
      wrongIndex: 2,
      fix: "My uncle doesn't have to pay for the tests.",
      why: {
        en: "Uncle is one person, like he, so use doesn't, not don't.",
        te: "మావయ్య ఒక్కరే (he లాగా), అందుకే don't కాదు, doesn't.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A man is smoking near the hospital gate. Tell him politely.",
        te: "హాస్పిటల్ గేటు దగ్గర ఒకాయన సిగరెట్ తాగుతున్నారు. ఆయనకి మర్యాదగా చెప్పండి.",
      },
      expected: ["Sorry, you mustn't smoke here.", "You mustn't smoke here.", "Excuse me, you mustn't smoke here.", "Please don't smoke here."],
      options: ["Sorry, you mustn't smoke here.", "Sorry, you don't have to smoke here.", "Hey! Throw that away now!"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour Gopal is worried about the parking fee. It is free. Tell him.",
        te: "పక్కింటి గోపాల్ గారు పార్కింగ్ ఫీజు గురించి కంగారు పడుతున్నారు. అది ఉచితం. ఆయనకి చెప్పండి.",
      },
      expected: ["You don't have to pay for parking.", "You don't have to pay.", "Parking is free."],
      options: ["You don't have to pay for parking.", "You mustn't pay for parking.", "You not have to pay for parking."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Signs at the hospital", te: "హాస్పిటల్‌లో బోర్డులు" },
    scene: {
      en: "You are visiting your friend Prasad in hospital. Grace at the help desk explains the signs.",
      te: "హాస్పిటల్‌లో ఉన్న మీ స్నేహితుడు ప్రసాద్‌ని చూడటానికి వెళ్ళారు. హెల్ప్ డెస్క్‌లో గ్రేస్ గారు బోర్డుల గురించి చెప్తున్నారు.",
    },
    partner: { en: "Grace (help desk)", te: "గ్రేస్ (హెల్ప్ డెస్క్)" },
    skills: [
      { id: "rules", label: { en: "Understanding rules", te: "నియమాలు అర్థం చేసుకోవడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good afternoon. How can I help you?",
        te: "నమస్కారం. మీకు ఏం సహాయం కావాలి?",
        hint: { en: "Say who you have come to see, and where he is.", te: "ఎవరిని చూడటానికి వచ్చారో, ఆయన ఎక్కడ ఉన్నారో చెప్పండి." },
        replies: [
          { say: "I'm here to see my friend in Ward 3.", good: true, skill: "polite" },
          { say: "I came for seeing my friend in Ward 3.", good: false, skill: "polite" },
        ],
      },
      {
        partner: "Visiting hours are four to six. It's only three now.",
        te: "చూడటానికి వచ్చే సమయం నాలుగు నుండి ఆరు. ఇప్పుడు మూడే అయింది.",
        hint: { en: "Ask if you need to buy a pass first.", te: "ముందు పాస్ కొనాలా అని అడగండి." },
        replies: [
          { say: "Okay. Do I have to buy a visitor pass?", good: true, skill: "rules" },
          { say: "Okay. I must to buy a visitor pass?", good: false, skill: "rules" },
        ],
      },
      {
        partner: "No, you don't. But you mustn't smoke anywhere here.",
        te: "అక్కర్లేదు. కానీ ఇక్కడ ఎక్కడా సిగరెట్ తాగకూడదు.",
        hint: { en: "Say you understand, and ask if you can sit in the waiting hall.", te: "అర్థమైందని చెప్పి, వెయిటింగ్ హాల్‌లో కూర్చోవచ్చా అని అడగండి." },
        replies: [
          { say: "I understand. Can I sit in the waiting hall?", good: true, skill: "polite" },
          {
            say: "So many rules! Why so strict?",
            good: false,
            skill: "polite",
            react: { en: "The rules are for the patients. Please understand.", te: "ఈ నియమాలు రోగుల కోసమే. అర్థం చేసుకోండి." },
          },
        ],
      },
      {
        partner: "Yes, of course. I'll call you at four.",
        te: "తప్పకుండా. నాలుగింటికి మిమ్మల్ని పిలుస్తాను.",
        hint: { en: "Thank her for her help.", te: "ఆవిడ సహాయానికి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you very much. That's very kind.", good: true, skill: "polite" },
          { say: "Thanks you very much. That's very kind.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
