import type { Lesson } from "../../types";

/** Week 50, Day 3 (CURRICULUM §5): I'd like to return / exchange … — the bill, within seven days, and a shop's return notice. */
export const day: Lesson = {
  id: "id-like-to-return-this-kettle",
  kind: "lesson",
  title: { en: "I'd Like to Return This", te: "ఇది వాపస్ ఇవ్వాలి" },
  subtitle: "I'd like to return / exchange …",
  summary: {
    en: "Learn to return or exchange something you bought: I'd like to return this kettle. Can I exchange it for a different model?",
    te: "కొన్న వస్తువుని వాపస్ ఇవ్వడం, మార్చుకోవడం నేర్చుకుందాం: I'd like to return this kettle. Can I exchange it for a different model?",
  },
  seo: {
    title: "Returning and Exchanging in English for Telugu Speakers",
    description:
      "Say I'd like to return this kettle and Can I exchange it? Simple lessons for Telugu speakers on returns, bills and shop return notices.",
  },
  pattern: [
    { text: "I'd like to", role: "who" },
    { text: "return", role: "action" },
    { text: "this kettle", role: "what" },
  ],
  core: [
    { en: "I'd like to return this kettle.", te: "ఈ kettle వాపస్ ఇవ్వాలనుకుంటున్నాను.", extra: ["back"] },
    { en: "I bought it on Monday, and here is the bill.", te: "సోమవారం కొన్నాను, ఇదిగోండి బిల్లు.", extra: ["in"] },
    { en: "Can I exchange it for a different model?", te: "దీనికి బదులు వేరే model తీసుకోవచ్చా?", extra: ["with"] },
    { en: "Can I return it within seven days?", te: "ఏడు రోజుల్లోపు వాపస్ ఇవ్వొచ్చా?", extra: ["day"] },
    { en: "It's unused, and it's still in the box.", te: "అది అసలు వాడలేదు, ఇంకా box లోనే ఉంది.", extra: ["at"] },
    { en: "I'd like to exchange this shirt for a bigger size.", te: "ఈ షర్ట్‌కి బదులు ఇంకా పెద్ద సైజు కావాలి.", extra: ["more"] },
    { en: "Do I need the original box to return it?", te: "వాపస్ ఇవ్వడానికి అసలు box కావాలా?", extra: ["for"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find a bill from a recent shopping trip. Say aloud: I'd like to return this, and here is the bill.",
    te: "ఈ మధ్య కొన్న దేనిదైనా ఒక బిల్లు తీయండి. గట్టిగా చెప్పండి: I'd like to return this, and here is the bill.",
  },
  words: [
    { en: "return", te: "వాపస్ ఇవ్వడం, తిరిగి ఇచ్చేయడం" },
    { en: "exchange", te: "బదులుగా వేరేది తీసుకోవడం, మార్చుకోవడం" },
    { en: "within", te: "… లోపు, … లోగా" },
    { en: "unused", te: "వాడని, కొత్తగానే ఉన్న" },
    { en: "return policy", te: "వాపస్ నియమాలు" },
  ],
  grammar: ["would-like", "can-could", "prepositions"],
  topics: ["shopping", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Return or exchange", te: "వాపస్, మార్పు" },
      body: {
        en: "After I'd like to, the verb stays plain: I'd like to return this kettle. Exchange means you give it back and take another one.",
        te: "I'd like to తర్వాత verb అలాగే ఉంటుంది: I'd like to return (వాపస్ ఇవ్వాలి). exchange అంటే ఇచ్చేసి బదులుగా వేరేది తీసుకోవడం.",
      },
      bridge: {
        te: ["ఈ kettle", "వాపస్ ఇవ్వాలనుకుంటున్నాను"],
        en: [
          { text: "I'd like to", role: "who" },
          { text: "return", role: "action" },
          { text: "this kettle", role: "what" },
        ],
      },
      examples: [
        { en: "I'd like to return this kettle.", te: "ఈ kettle వాపస్ ఇవ్వాలనుకుంటున్నాను." },
        { en: "I'd like to exchange this shirt for a bigger size.", te: "ఈ షర్ట్‌కి బదులు ఇంకా పెద్ద సైజు కావాలి." },
        { en: "Do I need the original box to return it?", te: "వాపస్ ఇవ్వడానికి అసలు box కావాలా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Return, exchange, within", te: "return, exchange, within వాడకం" },
      items: [
        {
          form: "return",
          useFor: { en: "Give it back and get your money.", te: "ఇచ్చేసి డబ్బులు తిరిగి తీసుకోవడం." },
          example: { en: "I'd like to return this kettle.", te: "ఈ kettle వాపస్ ఇవ్వాలనుకుంటున్నాను." },
        },
        {
          form: "exchange … for …",
          useFor: { en: "Give it back and take another one.", te: "ఇచ్చేసి బదులుగా వేరేది తీసుకోవడం." },
          example: { en: "Can I exchange it for a different model?", te: "దీనికి బదులు వేరే model తీసుకోవచ్చా?" },
        },
        {
          form: "within … days",
          useFor: { en: "Before that many days are over.", te: "అన్ని రోజులు అయిపోయేలోపు." },
          example: { en: "Can I return it within seven days?", te: "ఏడు రోజుల్లోపు వాపస్ ఇవ్వొచ్చా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I want to return back this kettle.",
      right: "I want to return this kettle.",
      why: {
        en: "Return already means give back, so never add back after it.",
        te: "return అంటేనే తిరిగి ఇవ్వడం, అందుకే దాని తర్వాత మళ్ళీ back చేర్చకూడదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Kindly do the needful.",
      right: "Could you please help me with this?",
      why: {
        en: "Do the needful is old office English; outside India, people find it unclear.",
        te: "do the needful పాత ఆఫీసు ఇంగ్లీష్; మన దేశం బయట చాలామందికి అర్థం కాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "You want to give back a kettle you bought. What do you say?", te: "మీరు కొన్న kettle వాపస్ ఇవ్వాలనుకుంటున్నారు. ఏమంటారు?" },
      options: ["I'd like to return this kettle.", "I'd like return this kettle.", "I like to return this kettle."],
      answer: 0,
      why: {
        en: "A polite wish is I'd like, and to always comes before the verb.",
        te: "మర్యాదగా కావాలని చెప్పడానికి I'd like; verb ముందు ఎప్పుడూ to వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Can I exchange it ___ a different model?",
      te: "దీనికి బదులు వేరే model తీసుకోవచ్చా?",
      options: ["for", "with", "to"],
      answer: 0,
      why: {
        en: "You exchange one thing for another; Telugu బదులు is for, never with.",
        te: "ఒక దానికి బదులు ఇంకోటి అంటే exchange … for; 'బదులు' అంటే for, with కాదు.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Return Policy",
      lines: [
        "Thank you for shopping at Sri Durga Electronics.",
        "You can return or exchange any item within seven days.",
        "Please bring the bill and the original box.",
        "The item must be unused and not damaged.",
        "We return your money the way you paid: cash, card or UPI.",
        "We exchange sale items, but we do not return money for them.",
        "For help, please ask at the customer service counter.",
      ],
      questions: [
        {
          prompt: { en: "How many days do you have to return an item?", te: "వస్తువు వాపస్ ఇవ్వడానికి ఎన్ని రోజులు ఉంటాయి?" },
          options: ["Seven days", "Ten days", "Two days"],
          answer: 0,
          why: { en: "The second line gives the time limit for every return.", te: "రెండో లైన్‌లో వాపస్‌కి గడువు ఎన్ని రోజులో ఉంది." },
        },
        {
          prompt: { en: "What must you bring with the item?", te: "వస్తువుతో పాటు ఏం తీసుకెళ్ళాలి?" },
          options: ["The bill and the original box", "Your Aadhaar card", "Nothing at all"],
          answer: 0,
          why: { en: "The third line asks for two things along with the item.", te: "మూడో లైన్‌లో వస్తువుతో పాటు రెండు తేవాలని ఉంది." },
        },
        {
          prompt: { en: "You bought a saree in the sale. What can you do?", te: "మీరు sale లో ఒక చీర కొన్నారు. ఏం చేయొచ్చు?" },
          options: ["Exchange it for another one", "Get your money back", "Nothing at all"],
          answer: 0,
          why: { en: "The notice says sale items are exchanged, but with no money back.", te: "sale వస్తువులు మార్చుకోవచ్చు, కానీ డబ్బులు తిరిగి ఇవ్వరని notice లో ఉంది." },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Do I need the original box for return it?",
      wrongIndex: 6,
      fix: "Do I need the original box to return it?",
      why: {
        en: "Before a verb, a purpose takes to, never for; Telugu ఇవ్వడానికి misleads us.",
        te: "verb ముందు 'దేనికోసం' అంటే to వస్తుంది, for రాదు; తెలుగు 'ఇవ్వడానికి' వల్ల for అనేస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "The kettle you bought on Monday doesn't heat. Say you'd like to return it, and give the bill.",
        te: "సోమవారం కొన్న kettle వేడి చేయట్లేదు. దాన్ని వాపస్ ఇవ్వాలనుకుంటున్నారని చెప్పి, బిల్లు ఇవ్వండి.",
      },
      expected: ["I'd like to return this kettle. Here is the bill.", "Here is the bill. I'd like to return this kettle.", "I'd like to return this kettle, please."],
      options: ["I'd like to return this kettle. Here is the bill.", "I'd like to return this kettle. Here is bill.", "I'd like return this kettle. Here is the bill."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The shirt is too small. Ask if you can exchange it for a bigger size.",
        te: "షర్ట్ చాలా చిన్నగా ఉంది. పెద్ద సైజుకి మార్చుకోవచ్చా అని అడగండి.",
      },
      expected: ["Can I exchange it for a bigger size?", "Can I exchange this shirt for a bigger size?", "Could I exchange it for a bigger one?"],
      options: ["Can I exchange it for a bigger size?", "I can exchange it for a bigger size?", "Can I exchange it with a bigger size?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Returning a kettle", te: "kettle వాపస్" },
    scene: {
      en: "Five days ago you bought an electric kettle. It doesn't heat the water. You go back to the shop with the bill.",
      te: "ఐదు రోజుల క్రితం మీరు ఒక electric kettle కొన్నారు. అది నీళ్ళు వేడి చేయట్లేదు. బిల్లు తీసుకుని షాపుకి మళ్ళీ వెళ్ళారు.",
    },
    partner: { en: "Srinivas (the salesperson)", te: "శ్రీనివాస్ (సేల్స్‌మన్)" },
    voice: "b",
    skills: [
      { id: "return", label: { en: "Returning and exchanging", te: "వాపస్, మార్పు అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Welcome to Sri Durga Electronics! How can I help you?",
        te: "శ్రీ దుర్గా ఎలక్ట్రానిక్స్‌కి స్వాగతం! చెప్పండి, ఏం కావాలి?",
        hint: { en: "Say you want to give back this kettle.", te: "ఈ kettle వాపస్ ఇవ్వాలనుకుంటున్నారని చెప్పండి." },
        replies: [
          { say: "I'd like to return this kettle, please.", good: true, skill: "return" },
          { say: "I want to return back this kettle.", good: false, skill: "return", fixIt: "preposition" },
        ],
      },
      {
        partner: "May I know the problem? And do you have the bill?",
        te: "సమస్య ఏంటో చెప్తారా? బిల్లు ఉందా?",
        hint: { en: "Say what is wrong with it, and give him the bill.", te: "దానికేమైందో చెప్పి, బిల్లు ఇవ్వండి." },
        replies: [
          { say: "It doesn't heat the water. Here is the bill.", good: true, skill: "return" },
          { say: "It stopped working on the second day. Here's the bill.", good: true, skill: "return" },
          {
            say: "Your kettle is rubbish. Take it back!",
            good: false,
            skill: "polite",
            react: { en: "Please, there's no need to get angry. Let me check it.", te: "కోపం ఎందుకండీ. నన్ను ఒకసారి చూడనివ్వండి." },
          },
        ],
      },
      {
        partner: "You bought it five days ago, so it's within seven days. Refund or exchange?",
        te: "ఐదు రోజుల క్రితం కొన్నారు, అంటే ఏడు రోజుల్లోపే. రీఫండ్ కావాలా, మార్చుకుంటారా?",
        hint: { en: "Ask if you can take a different model instead.", te: "బదులుగా వేరే model తీసుకోవచ్చా అని అడగండి." },
        replies: [
          { say: "Can I exchange it for a different model?", good: true, skill: "return" },
          { say: "I can exchange it for a different model?", good: false, skill: "return", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, of course. This steel one is 200 rupees more.",
        te: "తప్పకుండా. ఈ steel ది 200 రూపాయలు ఎక్కువ.",
        hint: { en: "Agree to pay the extra amount, and thank him.", te: "ఎక్కువ డబ్బులు కడతానని ఒప్పుకుని, థాంక్స్ చెప్పండి." },
        replies: [
          { say: "That's fine. I'll pay the difference. Thank you.", good: true, skill: "polite" },
          {
            say: "Okay. Kindly do the needful.",
            good: false,
            skill: "polite",
            fixIt: "indian-english",
            react: { en: "Sorry? Do you want the steel one, then?", te: "అంటే? steel ది తీసుకుంటారా మరి?" },
          },
        ],
      },
    ],
  },
};
