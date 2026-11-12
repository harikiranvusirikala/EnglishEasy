import type { Lesson } from "../../types";

/** Week 74, Day 4 (CURRICULUM §5): instructions and the passive together — Insert your card and put the notes in the slot. The notes are counted, and you get a slip. */
export const day: Lesson = {
  id: "using-a-cash-deposit-machine",
  kind: "lesson",
  title: { en: "Using a Cash Deposit Machine", te: "క్యాష్ డిపాజిట్ మెషీన్" },
  subtitle: "Insert …; the notes are counted",
  summary: {
    en: "Learn the steps at a cash deposit machine: Insert your card and put the notes in the slot. The notes are counted by the machine.",
    te: "క్యాష్ డిపాజిట్ మెషీన్ దగ్గర steps నేర్చుకుందాం: Insert your card and put the notes in the slot. The notes are counted by the machine.",
  },
  seo: {
    title: "Using a Cash Deposit Machine in English for Telugu Speakers",
    description:
      "Say Put the notes in the slot and The notes are counted by the machine. Simple lessons for Telugu speakers on depositing cash.",
  },
  pattern: [
    { text: "The notes", role: "who" },
    { text: "are counted", role: "action" },
    { text: "by the machine", role: "what" },
  ],
  core: [
    { en: "Insert your card and enter your PIN.", te: "మీ కార్డు పెట్టి, మీ PIN ఎంటర్ చేయండి.", extra: ["inserting"] },
    { en: "Put the notes in the slot.", te: "నోట్లని slot లో పెట్టండి.", extra: ["note"] },
    { en: "The notes are counted by the machine.", te: "నోట్లని మెషీన్ లెక్కపెడుతుంది.", extra: ["is"] },
    { en: "Then the amount is shown on the screen.", te: "తర్వాత amount స్క్రీన్ మీద కనిపిస్తుంది.", extra: ["in"] },
    { en: "Torn or folded notes are not accepted.", te: "చినిగిన, మడిచిన నోట్లని మెషీన్ తీసుకోదు.", extra: ["accept"] },
    { en: "The money is added to your account at once.", te: "డబ్బు వెంటనే మీ అకౌంట్‌లో జమ అవుతుంది.", extra: ["in"] },
    { en: "Take your slip and keep it safe.", te: "మీ slip తీసుకుని జాగ్రత్తగా ఉంచుకోండి.", extra: ["slips"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Next time you pass a bank, look at the cash deposit machine. Read its board, and say the first two steps aloud.",
    te: "ఈసారి బ్యాంకు దగ్గరికి వెళ్ళినప్పుడు క్యాష్ డిపాజిట్ మెషీన్ చూడండి. దాని బోర్డు చదివి, మొదటి రెండు steps గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "cash deposit machine", te: "క్యాష్ డిపాజిట్ మెషీన్, డబ్బు జమ చేసే మెషీన్" },
    { en: "slot", te: "నోట్లు పెట్టే సందు, slot" },
    { en: "fold", te: "మడవడం" },
    { en: "bundle", te: "కట్ట" },
    { en: "accept", te: "తీసుకోవడం, ఒప్పుకోవడం" },
  ],
  grammar: ["imperatives", "passive-voice", "prepositions"],
  topics: ["bank", "money", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Your steps and the machine's steps", te: "మీరు చేసేది, మెషీన్ చేసేది" },
      body: {
        en: "For what you do, use the plain verb: Insert your card. For what the machine does, use is or are and the done form: The notes are counted.",
        te: "మీరు చేసే పనికి verb అలాగే: Insert your card. మెషీన్ చేసే పనికి is లేదా are, పూర్తయిన రూపం: The notes are counted.",
      },
      bridge: {
        te: ["నోట్లని", "మెషీన్", "లెక్కపెడుతుంది"],
        en: [
          { text: "The notes", role: "who" },
          { text: "are counted", role: "action" },
          { text: "by the machine", role: "what" },
        ],
      },
      examples: [
        { en: "Insert your card and enter your PIN.", te: "మీ కార్డు పెట్టి, మీ PIN ఎంటర్ చేయండి." },
        { en: "Put the notes in the slot.", te: "నోట్లని slot లో పెట్టండి." },
        { en: "The notes are counted by the machine.", te: "నోట్లని మెషీన్ లెక్కపెడుతుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "You do it, or it is done", te: "మీరు చేయాలా, మెషీన్ చేస్తుందా" },
      items: [
        {
          form: "Insert … / Put … / Press …",
          useFor: { en: "Steps you do with your own hands.", te: "మీరు మీ చేతులతో చేసే steps." },
          example: { en: "Put the notes in the slot.", te: "నోట్లని slot లో పెట్టండి." },
        },
        {
          form: "… are counted",
          useFor: { en: "Work the machine does for you.", te: "మెషీన్ మీ కోసం చేసే పని." },
          example: { en: "The notes are counted by the machine.", te: "నోట్లని మెషీన్ లెక్కపెడుతుంది." },
        },
        {
          form: "… is shown on the screen",
          useFor: { en: "Something you read on the screen.", te: "స్క్రీన్ మీద మీరు చదివేది." },
          example: { en: "Then the amount is shown on the screen.", te: "తర్వాత amount స్క్రీన్ మీద కనిపిస్తుంది." },
        },
        {
          form: "… are not accepted",
          useFor: { en: "Notes the machine gives back to you.", te: "మెషీన్ మీకు తిరిగి ఇచ్చేసే నోట్లు." },
          example: { en: "Torn or folded notes are not accepted.", te: "చినిగిన, మడిచిన నోట్లని మెషీన్ తీసుకోదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "The money is added in your account.",
      right: "The money is added to your account.",
      why: {
        en: "Money goes to an account, so English says added to. Telugu says అకౌంట్‌లో, but in is wrong here.",
        te: "డబ్బు అకౌంట్‌కి చేరుతుంది, అందుకే added to. తెలుగులో 'అకౌంట్‌లో' అంటాం, కానీ ఇక్కడ in తప్పు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "The notes are count by the machine.",
      right: "The notes are counted by the machine.",
      why: {
        en: "After are, use the done form counted, never the plain verb.",
        te: "are తర్వాత పూర్తయిన రూపం counted రావాలి; count అలాగే రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "The guard asks: Didn't you get a slip? You did not get one. What do you say?",
        te: "గార్డ్ గారు Didn't you get a slip? అని అడిగారు. మీకు slip రాలేదు. ఏమంటారు?",
      },
      options: ["No, I didn't. Nothing came out.", "Yes, I didn't. Nothing came out.", "Yes. Nothing came out."],
      answer: 0,
      why: {
        en: "You got no slip, so say No. Telugu అవును, రాలేదు agrees with the question, but English answers the fact.",
        te: "slip రాలేదు కాబట్టి No. తెలుగులో 'అవును, రాలేదు' అంటాం, కానీ ఇంగ్లీష్‌లో జరిగిన విషయానికే జవాబు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Then the amount is shown ___ the screen.",
      te: "తర్వాత amount స్క్రీన్ మీద కనిపిస్తుంది.",
      options: ["on", "in", "at"],
      answer: 0,
      why: {
        en: "Words and numbers on a screen take on, just like on a board.",
        te: "స్క్రీన్ మీద కనిపించేవాటికి on, బోర్డు మీద లాగే.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "sign",
      heading: "Cash Deposit Machine",
      lines: [
        "Deposit cash any time, day or night.",
        "Use your debit card or your account number.",
        "Do not insert torn or folded notes.",
        "Remove pins and rubber bands from the bundle.",
        "Never share your PIN with anyone.",
      ],
      prompt: { en: "You have some folded notes. What does the board tell you?", te: "మీ దగ్గర కొన్ని మడిచిన నోట్లు ఉన్నాయి. బోర్డు మీకు ఏం చెప్తోంది?" },
      options: ["Don't put them in the machine.", "Put them in with a rubber band.", "Give them to the guard."],
      answer: 0,
      why: {
        en: "The third line says torn or folded notes must not go into the machine.",
        te: "మూడో లైన్‌లో, చినిగిన, మడిచిన నోట్లు మెషీన్‌లో పెట్టకూడదని ఉంది.",
      },
      say: "Do not insert torn or folded notes.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "The machine count the notes and shows the amount.",
      wrongIndex: 2,
      fix: "The machine counts the notes and shows the amount.",
      why: {
        en: "One machine, like he or she, takes s on both verbs, as shows does.",
        te: "ఒక్క మెషీన్ (he, she లాగా), అందుకే shows లాగే count కి కూడా s కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A man at the machine asks where the notes go. Tell him.",
        te: "మెషీన్ దగ్గర ఒకాయన నోట్లు ఎక్కడ పెట్టాలని అడుగుతున్నారు. ఆయనకి చెప్పండి.",
      },
      expected: ["Put the notes in the slot.", "Put them in the slot.", "The notes go in the slot.", "In the slot."],
      options: ["Put the notes in the slot.", "Put the notes on the slot.", "Put notes in slot."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the guard how to use this machine.",
        te: "ఈ మెషీన్ ఎలా వాడాలో గార్డ్ గారిని అడగండి.",
      },
      expected: ["How do I use this machine?", "How do I deposit money here?", "Can you show me how to use it?"],
      options: ["How do I use this machine?", "How I use this machine?", "How do I using this machine?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The guard shows you the machine", te: "గార్డ్ గారు మెషీన్ చూపిస్తున్నారు" },
    scene: {
      en: "You want to deposit 4000 rupees. The queue at the cash counter is long, so the guard, Venkat, comes to help.",
      te: "మీరు 4000 రూపాయలు జమ చేయాలి. క్యాష్ కౌంటర్ దగ్గర క్యూ పెద్దగా ఉంది, అందుకే గార్డ్ వెంకట్ గారు సాయానికి వచ్చారు.",
    },
    partner: { en: "Venkat (the bank guard)", te: "వెంకట్ (బ్యాంకు గార్డ్)" },
    voice: "b",
    skills: [
      { id: "steps", label: { en: "Following the steps", te: "steps పాటించడం" } },
      { id: "safe", label: { en: "Keeping your PIN safe", te: "PIN జాగ్రత్తగా ఉంచుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "The queue is long. You can use the machine. It's quick.",
        te: "క్యూ పెద్దగా ఉంది. మెషీన్ వాడొచ్చు. త్వరగా అయిపోతుంది.",
        hint: { en: "Say you have never used one, and ask him to show you.", te: "ఎప్పుడూ వాడలేదని చెప్పి, చూపించమని ఆయన్ని అడగండి." },
        replies: [
          { say: "I've never used it. Can you show me, please?", good: true, skill: "steps" },
          { say: "Could you show me how it works, please?", good: true, skill: "steps" },
          {
            say: "You do it for me. Here's my card and my PIN.",
            good: false,
            skill: "safe",
            react: { en: "No, no! Never give your PIN to anyone, not even me.", te: "వద్దు, వద్దు! మీ PIN ఎవరికీ చెప్పకండి, నాకు కూడా." },
          },
        ],
      },
      {
        partner: "First, insert your card. Then enter your PIN. I'll look away.",
        te: "ముందు కార్డు పెట్టండి. తర్వాత PIN ఎంటర్ చేయండి. నేను అటు తిరుగుతాను.",
        hint: { en: "Say it's done, and ask where the money goes.", te: "అయిపోయిందని చెప్పి, డబ్బు ఎక్కడ పెట్టాలో అడగండి." },
        replies: [
          { say: "Done. Where do I put the notes?", good: true, skill: "steps" },
          { say: "Done. Where I put the notes?", good: false, skill: "steps", fixIt: "question" },
        ],
      },
      {
        partner: "In this slot. Are the notes flat? Folded notes are not accepted.",
        te: "ఈ slot లో. నోట్లు సాఫీగా ఉన్నాయా? మడిచిన నోట్లని మెషీన్ తీసుకోదు.",
        hint: { en: "Say yes, and say how many 500 rupee notes you have.", te: "అవునని చెప్పి, మీ దగ్గర ఎన్ని 500 నోట్లు ఉన్నాయో చెప్పండి." },
        replies: [
          { say: "Yes, they are. I have eight 500 rupee notes.", good: true, skill: "steps" },
          { say: "Yes, they are. I have eight 500 rupee note.", good: false, skill: "steps", fixIt: "plural" },
        ],
      },
      {
        partner: "Good. The machine is counting them. Check the amount, then press confirm.",
        te: "సరే. మెషీన్ లెక్కపెడుతోంది. amount చూసి, తర్వాత confirm నొక్కండి.",
        hint: { en: "Say the amount is right, and thank him.", te: "amount సరిగ్గా ఉందని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "It shows 4000 rupees. That's right. Thank you so much!", good: true, skill: "steps" },
          { say: "4000 rupees, correct. Thank you for your help!", good: true, skill: "steps" },
          {
            say: "Okay, okay. You can go now.",
            good: false,
            skill: "polite",
            react: { en: "Alright. Don't forget your card and your slip.", te: "సరేనండీ. మీ కార్డు, slip మర్చిపోకండి." },
          },
        ],
      },
    ],
  },
};
