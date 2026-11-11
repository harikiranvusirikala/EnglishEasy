import type { Lesson } from "../../types";

/** Week 23, Day 5 (CURRICULUM §4): the bill — Could I have the bill? paying by UPI, splitting, a tip, packing the rest. */
export const day: Lesson = {
  id: "could-i-have-the-bill",
  kind: "lesson",
  title: { en: "Could I Have the Bill?", te: "బిల్ ఇస్తారా?" },
  subtitle: "Could I have the bill?",
  summary: {
    en: "Learn to pay and leave a restaurant: Could I have the bill, please? Can I pay by UPI?",
    te: "హోటల్‌లో బిల్ కట్టి బయల్దేరడం నేర్చుకుందాం: Could I have the bill, please? Can I pay by UPI?",
  },
  seo: {
    title: "Asking for the Bill in English for Telugu Speakers",
    description:
      "Say Could I have the bill, please? and Can we split the bill? Simple lessons for Telugu speakers on paying at a restaurant.",
  },
  pattern: [
    { text: "Could", role: "action" },
    { text: "I", role: "who" },
    { text: "have", role: "action" },
    { text: "the bill, please?", role: "what" },
  ],
  core: [
    { en: "Could I have the bill, please?", te: "బిల్ ఇస్తారా?", extra: ["give"] },
    { en: "Can I pay by UPI?", te: "UPI తో కట్టొచ్చా?", extra: ["in"] },
    { en: "Can we split the bill?", te: "బిల్ పంచుకుని కడదామా?", extra: ["splitting"] },
    { en: "Is there a service charge?", te: "సర్వీస్ ఛార్జ్ ఏమైనా ఉందా?", extra: ["Are"] },
    { en: "Could you pack the rest, please?", te: "మిగిలింది పార్సెల్ చేసి ఇస్తారా?", extra: ["packing"] },
    { en: "Keep the change.", te: "చిల్లర మీరే ఉంచుకోండి.", extra: ["Take"] },
    { en: "The food was very good, thank you.", te: "భోజనం చాలా బాగుంది, థాంక్యూ.", extra: ["is"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Next time you eat out or buy tea, ask: Can I pay by UPI?",
    te: "ఈసారి బయట తిన్నప్పుడు లేదా టీ తాగినప్పుడు అడగండి: Can I pay by UPI?",
  },
  words: [
    { en: "bill", te: "బిల్" },
    { en: "split", te: "పంచుకోవడం" },
    { en: "tip", te: "టిప్, వెయిటర్‌కి ఇచ్చే చిన్న డబ్బు" },
    { en: "service charge", te: "సర్వీస్ ఛార్జ్" },
    { en: "parcel", te: "పార్సెల్" },
  ],
  grammar: ["can-could", "politeness-softening", "was-were"],
  topics: ["food", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Paying the bill", te: "బిల్ కట్టడం" },
      body: {
        en: "When you finish, call the waiter and say: Could I have the bill, please? Could is a little softer than can. Then say how you will pay: by UPI, by card or in cash.",
        te: "తినడం అయ్యాక వెయిటర్‌ని పిలిచి అడగండి: Could I have the bill, please? can కంటే could కొంచెం మెత్తగా ఉంటుంది. తర్వాత ఎలా కడతారో చెప్పండి: by UPI, by card, in cash.",
      },
      bridge: {
        te: ["బిల్", "ఇస్తారా?"],
        en: [
          { text: "Could", role: "action" },
          { text: "I", role: "who" },
          { text: "have", role: "action" },
          { text: "the bill, please?", role: "what" },
        ],
      },
      examples: [
        { en: "Could I have the bill, please?", te: "బిల్ ఇస్తారా?" },
        { en: "Can I pay by UPI?", te: "UPI తో కట్టొచ్చా?" },
        { en: "Can we split the bill?", te: "బిల్ పంచుకుని కడదామా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "At the end of the meal", te: "భోజనం అయ్యాక" },
      items: [
        {
          form: "split the bill",
          useFor: { en: "Each person pays a part.", te: "ఒక్కొక్కరు కొంత భాగం కట్టడం." },
          example: { en: "Can we split the bill?", te: "బిల్ పంచుకుని కడదామా?" },
        },
        {
          form: "service charge",
          useFor: { en: "Extra money some places add to the bill.", te: "కొన్ని హోటళ్ళు బిల్‌లో కలిపే అదనపు డబ్బు." },
          example: { en: "Is there a service charge?", te: "సర్వీస్ ఛార్జ్ ఏమైనా ఉందా?" },
        },
        {
          form: "Keep the change.",
          useFor: { en: "Leave the rest as a tip.", te: "మిగిలిన చిల్లర టిప్‌గా ఇవ్వడానికి." },
          example: { en: "Keep the change.", te: "చిల్లర మీరే ఉంచుకోండి." },
        },
        {
          form: "pack / parcel",
          useFor: { en: "Food to take home. Parcel is used in India; pack is understood everywhere.", te: "ఇంటికి తీసుకెళ్ళే భోజనం. parcel మన దగ్గర వాడతారు; pack అందరికీ అర్థమవుతుంది." },
          example: { en: "Could you pack the rest, please?", te: "మిగిలింది పార్సెల్ చేసి ఇస్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Kindly give the bill.",
      right: "Could I have the bill, please?",
      why: {
        en: "Kindly give sounds like an old office letter; when you speak, ask with could.",
        te: "Kindly give అంటే పాత ఆఫీస్ ఉత్తరంలా ఉంటుంది; మాట్లాడేటప్పుడు could తో అడగండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Could I have bill, please?",
      right: "Could I have the bill, please?",
      why: {
        en: "Your table has one bill, so English puts the before it.",
        te: "మీ టేబుల్‌కి ఉన్నది ఒకే బిల్, అందుకే దాని ముందు the కావాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: { en: "You have finished eating. Ask for the bill.", te: "తినడం అయిపోయింది. బిల్ అడగండి." },
      options: ["Could I have the bill, please?", "Could I have bill, please?", "Kindly give the bill."],
      answer: 0,
      why: {
        en: "Could I have is soft and polite, and bill needs the.",
        te: "Could I have మర్యాదగా ఉంటుంది; bill ముందు the కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Can I pay ___ UPI?",
      te: "UPI తో కట్టొచ్చా?",
      options: ["by", "in", "from"],
      answer: 0,
      why: {
        en: "UPI is a way to pay, like a card, so it takes by.",
        te: "UPI కూడా card లాగా కట్టే పద్ధతి, అందుకే by.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The bill is 470 rupees. You give 500 and say Keep the change. What does it mean?",
        te: "బిల్ 470 రూపాయలు. మీరు 500 ఇచ్చి Keep the change అన్నారు. అర్థం ఏంటి?",
      },
      options: ["The waiter keeps the 30 rupees.", "The waiter gives you 30 rupees back.", "You want a new bill."],
      answer: 0,
      why: {
        en: "Keep the change means the rest is a small tip for them.",
        te: "Keep the change అంటే మిగిలింది వాళ్ళకే, చిన్న టిప్ లాగా.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Ramana always pay the bill.",
      wrongIndex: 2,
      fix: "Ramana always pays the bill.",
      why: {
        en: "Ramana is one person, like he, so the verb takes s.",
        te: "రమణ ఒక్కరే, he లాగా, అందుకే verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Ask the waiter if you can pay by UPI.",
        te: "UPI తో కట్టొచ్చా అని వెయిటర్‌ని అడగండి.",
      },
      expected: ["Can I pay by UPI?", "Could I pay by UPI?", "Can I pay by UPI, please?"],
      options: ["Can I pay by UPI?", "Can I pay in UPI?", "I can pay UPI?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "You want to pay now. Ask the waiter politely.",
        te: "మీరు ఇప్పుడు డబ్బు కట్టాలి. వెయిటర్‌ని మర్యాదగా అడగండి.",
      },
      expected: ["Could I have the bill, please?", "Can I have the bill, please?", "The bill, please."],
      options: ["Could I have the bill, please?", "Kindly give the bill.", "Could I have bill, please?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Paying and leaving", te: "బిల్ కట్టి బయల్దేరడం" },
    scene: {
      en: "You have finished lunch, and some biryani is left. Fatima, the waiter, comes to your table.",
      te: "మీ భోజనం అయిపోయింది, కొంచెం బిర్యానీ మిగిలింది. వెయిటర్ ఫాతిమా మీ టేబుల్ దగ్గరికి వచ్చారు.",
    },
    partner: { en: "Fatima (waiter)", te: "ఫాతిమా (వెయిటర్)" },
    skills: [{ id: "pay", label: { en: "Paying the bill", te: "బిల్ కట్టడం" } }],
    turns: [
      {
        partner: "Would you like anything else? Some sweet?",
        te: "ఇంకేమైనా కావాలా? స్వీట్ ఏమైనా?",
        hint: { en: "Say no, and ask for the bill politely.", te: "వద్దని చెప్పి, బిల్ మర్యాదగా అడగండి." },
        replies: [
          { say: "No, thank you. Could I have the bill, please?", good: true, skill: "pay" },
          { say: "No. Kindly give the bill.", good: false, skill: "pay", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Here it is. 640 rupees.",
        te: "ఇదిగోండి. 640 రూపాయలు.",
        hint: { en: "Ask if you can pay with your phone, by UPI.", te: "ఫోన్‌తో, UPI తో కట్టొచ్చా అని అడగండి." },
        replies: [
          { say: "Can I pay by UPI?", good: true, skill: "pay" },
          { say: "Can I pay in UPI?", good: false, skill: "pay", fixIt: "preposition" },
        ],
      },
      {
        partner: "Yes, please scan this QR code.",
        te: "అలాగే, ఈ QR code స్కాన్ చేయండి.",
        hint: { en: "Say it is done, and ask her to pack the leftover biryani.", te: "కట్టేశానని చెప్పి, మిగిలిన బిర్యానీ పార్సెల్ చేయమని అడగండి." },
        replies: [
          { say: "Done. Could you pack the rest, please?", good: true, skill: "pay" },
          {
            say: "Done. Pack the rest. Quickly!",
            good: false,
            skill: "pay",
            react: { en: "Sure, I'll bring a box. One minute, please.", te: "తప్పకుండా, బాక్స్ తెస్తాను. ఒక్క నిమిషం అండీ." },
          },
        ],
      },
      {
        partner: "Here is your parcel. Please come again!",
        te: "ఇదిగోండి మీ పార్సెల్. మళ్ళీ రండి!",
        hint: { en: "Thank her, and say you liked the food.", te: "ఆవిడకి థాంక్స్ చెప్పి, భోజనం నచ్చిందని చెప్పండి." },
        replies: [
          { say: "Thank you. The food was very good.", good: true },
          { say: "Thank you. The food were very good.", good: false },
        ],
      },
    ],
  },
};
