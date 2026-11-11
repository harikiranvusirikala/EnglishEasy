import type { Lesson } from "../../types";

/** Week 37, Day 1 (CURRICULUM §4): must for strong rules — traffic rules (helmet, seat belt, red light, licence). */
export const day: Lesson = {
  id: "you-must-wear-a-helmet",
  kind: "lesson",
  title: { en: "You Must Wear a Helmet", te: "తప్పనిసరి" },
  subtitle: "must for rules",
  summary: {
    en: "Learn to say and understand strong rules with must: You must wear a helmet. You must stop at the red light.",
    te: "must తో గట్టి నియమాలు చెప్పడం, అర్థం చేసుకోవడం నేర్చుకుందాం: You must wear a helmet. You must stop at the red light.",
  },
  seo: {
    title: "Traffic Rules with Must in English for Telugu Speakers",
    description:
      "Say You must wear a helmet and You must stop at the red light. Simple lessons for Telugu speakers on rules with must.",
  },
  pattern: [
    { text: "You", role: "who" },
    { text: "must wear", role: "action" },
    { text: "a helmet.", role: "what" },
  ],
  core: [
    { en: "You must wear a helmet.", te: "మీరు తప్పనిసరిగా హెల్మెట్ పెట్టుకోవాలి.", extra: ["to"] },
    { en: "You must stop at the red light.", te: "రెడ్ లైట్ దగ్గర తప్పనిసరిగా ఆగాలి.", extra: ["on"] },
    { en: "You must wear your seat belt.", te: "మీరు తప్పనిసరిగా సీట్ బెల్ట్ పెట్టుకోవాలి.", extra: ["put"] },
    { en: "You must carry your licence.", te: "మీ లైసెన్స్ తప్పనిసరిగా దగ్గర ఉంచుకోవాలి.", extra: ["carrying"] },
    { en: "Everyone on a bike must wear a helmet.", te: "బైక్ మీద ఉన్న ప్రతి ఒక్కరూ హెల్మెట్ పెట్టుకోవాలి.", extra: ["wears"] },
    { en: "We must follow the traffic rules.", te: "మనం ట్రాఫిక్ నియమాలు పాటించాలి.", extra: ["rule"] },
    { en: "Sorry, sir. I will wear it from today.", te: "Sorry సార్. ఈ రోజు నుండి పెట్టుకుంటాను.", extra: ["wearing"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When you see a bike or a car today, say one rule: You must wear a helmet.",
    te: "ఈ రోజు ఏదైనా బైక్ గానీ కారు గానీ చూసినప్పుడు ఒక నియమం చెప్పండి: You must wear a helmet.",
  },
  words: [
    { en: "rule", te: "నియమం, రూల్" },
    { en: "seat belt", te: "సీట్ బెల్ట్" },
    { en: "red light", te: "రెడ్ లైట్, ఎర్ర దీపం" },
    { en: "licence", te: "లైసెన్స్" },
    { en: "penalty", te: "జరిమానా, ఫైన్" },
  ],
  grammar: ["should-must-have-to"],
  topics: ["transport", "travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Must: a strong rule", te: "must: గట్టి నియమం" },
      body: {
        en: "Must is for a strong rule: there is no choice. Traffic police, signs and offices use it. After must, the verb stays plain, with no to.",
        te: "must అంటే తప్పనిసరి నియమం, వేరే దారి లేదు. ట్రాఫిక్ పోలీసులు, బోర్డులు, ఆఫీసులు ఇది వాడతారు. must తర్వాత verb మారదు, to రాదు.",
      },
      bridge: {
        te: ["మీరు", "హెల్మెట్", "తప్పనిసరిగా పెట్టుకోవాలి"],
        en: [
          { text: "You", role: "who" },
          { text: "must wear", role: "action" },
          { text: "a helmet.", role: "what" },
        ],
      },
      examples: [
        { en: "You must wear a helmet.", te: "మీరు తప్పనిసరిగా హెల్మెట్ పెట్టుకోవాలి." },
        { en: "You must stop at the red light.", te: "రెడ్ లైట్ దగ్గర తప్పనిసరిగా ఆగాలి." },
        { en: "You must wear your seat belt.", te: "మీరు తప్పనిసరిగా సీట్ బెల్ట్ పెట్టుకోవాలి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Must, have to, will", te: "must, have to, will వాడకం" },
      items: [
        {
          form: "must",
          useFor: { en: "A rule from the law or a sign: no choice.", te: "చట్టం లేదా బోర్డు చెప్పే నియమం: తప్పదు." },
          example: { en: "Everyone on a bike must wear a helmet.", te: "బైక్ మీద ఉన్న ప్రతి ఒక్కరూ హెల్మెట్ పెట్టుకోవాలి." },
        },
        {
          form: "have to",
          useFor: { en: "Also needed; common when you talk about yourself.", te: "ఇది కూడా అవసరమే; మన గురించి చెప్పేటప్పుడు ఎక్కువ వాడతాం." },
          example: { en: "I have to show my licence.", te: "నేను నా లైసెన్స్ చూపించాలి." },
        },
        {
          form: "I will …",
          useFor: { en: "Promising to follow the rule.", te: "నియమం పాటిస్తానని మాట ఇవ్వడానికి." },
          example: { en: "Sorry, sir. I will wear it from today.", te: "Sorry సార్. ఈ రోజు నుండి పెట్టుకుంటాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "You must wear helmet.",
      right: "You must wear a helmet.",
      why: {
        en: "One helmet needs a before it; Telugu has no word like a, so it is easy to drop.",
        te: "ఒక helmet ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు, అందుకే మర్చిపోతాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "You must to stop at the red light.",
      right: "You must stop at the red light.",
      why: {
        en: "Must never takes to; the verb comes straight after it.",
        te: "must తర్వాత to రాదు; verb నేరుగా వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your friend gets on a bike with no helmet. Tell him the rule.",
        te: "మీ స్నేహితుడు హెల్మెట్ లేకుండా బైక్ ఎక్కుతున్నారు. ఆయనకి నియమం చెప్పండి.",
      },
      options: ["You must wear a helmet.", "You must wearing helmet.", "You can wear a helmet."],
      answer: 0,
      why: {
        en: "A helmet is a rule, not a choice, so use must with the plain verb.",
        te: "హెల్మెట్ అనేది నియమం, మన ఇష్టం కాదు; అందుకే must, దాని తర్వాత verb మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "You must stop ___ the red light.",
      te: "రెడ్ లైట్ దగ్గర తప్పనిసరిగా ఆగాలి.",
      options: ["at", "on", "in"],
      answer: 0,
      why: {
        en: "A point on the road, like a signal or a gate, takes at.",
        te: "రోడ్డు మీద ఒక చోటు (signal, gate) అంటే at వాడాలి; 'దగ్గర' అంటే ఇక్కడ at.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "A traffic policeman says: You must carry your licence. What does it mean?",
        te: "ఒక ట్రాఫిక్ పోలీస్ గారు You must carry your licence అన్నారు. అర్థం ఏంటి?",
      },
      options: ["Always keep your licence with you.", "You can leave your licence at home.", "You must buy a new licence."],
      answer: 0,
      why: {
        en: "Must leaves no choice, and carry means keep it with you.",
        te: "must అంటే తప్పదు; carry అంటే మీ దగ్గర ఉంచుకోవడం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Everyone on a bike must wears a helmet.",
      wrongIndex: 5,
      fix: "Everyone on a bike must wear a helmet.",
      why: {
        en: "After must, the verb never takes s, even with everyone.",
        te: "must తర్వాత verb కి s రాదు, everyone ఉన్నా కూడా.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your friend Mohan wants to ride without a helmet. Tell him the rule.",
        te: "మీ స్నేహితుడు మోహన్ హెల్మెట్ లేకుండా బండి నడపాలనుకుంటున్నారు. ఆయనకి నియమం చెప్పండి.",
      },
      expected: ["You must wear a helmet.", "Please wear a helmet.", "You must wear a helmet, please."],
      options: ["You must wear a helmet.", "You must wear helmet.", "You must to wear a helmet."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You are in a taxi with your friend Fatima. She has no seat belt on. Tell her.",
        te: "మీరు మీ స్నేహితురాలు ఫాతిమాతో టాక్సీలో ఉన్నారు. ఆవిడ సీట్ బెల్ట్ పెట్టుకోలేదు. ఆవిడకి చెప్పండి.",
      },
      expected: ["You must wear your seat belt.", "Please wear your seat belt.", "Please put on your seat belt."],
      options: ["Please wear your seat belt.", "Please put seat belt.", "Please wearing your seat belt."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At a traffic checkpoint", te: "ట్రాఫిక్ చెకింగ్ దగ్గర" },
    scene: {
      en: "You are riding your scooter with your friend Satish at the back. Ramesh, a traffic policeman, stops you.",
      te: "మీరు స్కూటర్ నడుపుతున్నారు, వెనక మీ స్నేహితుడు సతీష్ కూర్చున్నారు. ట్రాఫిక్ పోలీస్ రమేష్ గారు మిమ్మల్ని ఆపారు.",
    },
    partner: { en: "Ramesh (traffic policeman)", te: "రమేష్ (ట్రాఫిక్ పోలీస్)" },
    voice: "b",
    skills: [
      { id: "rules", label: { en: "Talking about rules", te: "నియమాల గురించి మాట్లాడటం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. Please stop here. Licence, please.",
        te: "నమస్కారం. ఇక్కడ ఆపండి. లైసెన్స్ చూపించండి.",
        hint: { en: "Greet him, and hand it over politely.", te: "నమస్కారం చెప్పి, మర్యాదగా లైసెన్స్ ఇవ్వండి." },
        replies: [
          { say: "Good morning, sir. Here you are.", good: true, skill: "polite" },
          {
            say: "Why me? I didn't do anything!",
            good: false,
            skill: "polite",
            react: { en: "It's only a check. Please show your licence.", te: "ఇది మామూలు చెకింగ్ అంతే. లైసెన్స్ చూపించండి." },
          },
        ],
      },
      {
        partner: "Thank you. But your friend has no helmet.",
        te: "థాంక్స్. కానీ మీ స్నేహితుడికి హెల్మెట్ లేదు.",
        hint: { en: "Say sorry, and agree that it is the rule for him too.", te: "Sorry చెప్పి, ఆయనకి కూడా అదే నియమం అని ఒప్పుకోండి." },
        replies: [
          { say: "Sorry, sir. He must wear one too.", good: true, skill: "rules" },
          { say: "Sorry, sir. He must wears one too.", good: false, skill: "rules" },
        ],
      },
      {
        partner: "You don't have a second helmet?",
        te: "మీ దగ్గర ఇంకో హెల్మెట్ లేదా?",
        hint: { en: "Answer that you don't have one, and say what you'll do.", te: "మీ దగ్గర లేదని జవాబు చెప్పి, ఏం చేస్తారో చెప్పండి." },
        replies: [
          { say: "No, I don't. I'll buy one today.", good: true, skill: "rules" },
          { say: "Yes, I don't have. I'll buy one today.", good: false, skill: "rules", fixIt: "negative-answer" },
        ],
      },
      {
        partner: "Okay. Only a warning today. Next time, a penalty.",
        te: "సరే. ఈ రోజుకి హెచ్చరిక మాత్రమే. మళ్ళీ అయితే జరిమానా.",
        hint: { en: "Thank him, and promise to be careful.", te: "ఆయనకి థాంక్స్ చెప్పి, జాగ్రత్తగా ఉంటామని మాట ఇవ్వండి." },
        replies: [
          { say: "Thank you, sir. We will be careful.", good: true, skill: "polite" },
          { say: "Thank you, sir. We will careful.", good: false, skill: "polite", fixIt: "be" },
        ],
      },
    ],
  },
};
