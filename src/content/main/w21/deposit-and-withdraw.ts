import type { Lesson } from "../../types";

/** Week 21, Day 1 (CURRICULUM §4): at the cash counter — I'd like to deposit / withdraw …; You must bring …; have to. */
export const day: Lesson = {
  id: "deposit-and-withdraw",
  kind: "lesson",
  title: { en: "Deposit and Withdraw", te: "డబ్బు వేయడం, తీయడం" },
  subtitle: "deposit / withdraw; You must …",
  summary: {
    en: "Learn to put money in and take it out at the bank: I'd like to deposit ten thousand rupees. You must bring your passbook.",
    te: "బ్యాంక్‌లో డబ్బు వేయడం, తీయడం నేర్చుకుందాం: I'd like to deposit ten thousand rupees. You must bring your passbook.",
  },
  seo: {
    title: "Deposit and Withdraw at the Bank in English for Telugu Speakers",
    description:
      "Say I'd like to deposit ten thousand rupees and understand You must bring your passbook. Simple bank lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I'd", role: "who" },
    { text: "like to deposit", role: "action" },
    { text: "ten thousand rupees", role: "what" },
  ],
  core: [
    { en: "I'd like to deposit ten thousand rupees.", te: "నేను పది వేల రూపాయలు డిపాజిట్ చేయాలి.", extra: ["thousands"] },
    { en: "You must bring your passbook.", te: "మీరు పాస్‌బుక్ తప్పకుండా తీసుకురావాలి.", extra: ["to"] },
    { en: "I'd like to withdraw five thousand rupees.", te: "నేను ఐదు వేల రూపాయలు విత్‌డ్రా చేయాలి.", extra: ["take"] },
    { en: "Please fill in this slip.", te: "ఈ స్లిప్ నింపండి.", extra: ["up"] },
    { en: "You have to sign here.", te: "మీరు ఇక్కడ సంతకం చేయాలి.", extra: ["signature"] },
    { en: "The bank opens at ten o'clock.", te: "బ్యాంక్ పది గంటలకి తెరుస్తారు.", extra: ["open"] },
    { en: "Can I have a deposit slip, please?", te: "ఒక డిపాజిట్ స్లిప్ ఇస్తారా?", extra: ["give"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at your passbook or any bank slip. Find the words Deposit and Withdrawal.",
    te: "మీ పాస్‌బుక్ లేదా ఏదైనా బ్యాంక్ స్లిప్ చూడండి. Deposit, Withdrawal అనే మాటలు వెతకండి.",
  },
  words: [
    { en: "deposit", te: "డబ్బు వేయడం, డిపాజిట్" },
    { en: "withdraw", te: "డబ్బు తీయడం, విత్‌డ్రా" },
    { en: "passbook", te: "పాస్‌బుక్" },
    { en: "slip", te: "స్లిప్, చీటీ" },
    { en: "cashier", te: "క్యాషియర్" },
  ],
  grammar: ["should-must-have-to", "would-like"],
  topics: ["bank", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Deposit, withdraw and must", te: "డబ్బు వేయడం, తీయడం, must" },
      body: {
        en: "Deposit is putting money into your account. Withdraw is taking it out. Ask with I'd like to. The clerk may say You must bring your passbook: must means you need it.",
        te: "deposit అంటే అకౌంట్‌లో డబ్బు వేయడం, withdraw అంటే తీయడం. I'd like to తో అడగండి. You must bring … అంటే అది తప్పకుండా కావాలి.",
      },
      bridge: {
        te: ["పది వేల రూపాయలు", "డిపాజిట్ చేయాలి"],
        en: [
          { text: "I'd", role: "who" },
          { text: "like to deposit", role: "action" },
          { text: "ten thousand rupees", role: "what" },
        ],
      },
      examples: [
        { en: "I'd like to deposit ten thousand rupees.", te: "నేను పది వేల రూపాయలు డిపాజిట్ చేయాలి." },
        { en: "I'd like to withdraw five thousand rupees.", te: "నేను ఐదు వేల రూపాయలు విత్‌డ్రా చేయాలి." },
        { en: "You must bring your passbook.", te: "మీరు పాస్‌బుక్ తప్పకుండా తీసుకురావాలి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What you hear at the counter", te: "కౌంటర్ దగ్గర వినే మాటలు" },
      items: [
        {
          form: "I'd like to …",
          useFor: { en: "Saying politely what you want.", te: "మీకు ఏం కావాలో మర్యాదగా చెప్పడానికి." },
          example: { en: "I'd like to withdraw five thousand rupees.", te: "నేను ఐదు వేల రూపాయలు విత్‌డ్రా చేయాలి." },
        },
        {
          form: "You must …",
          useFor: { en: "A rule: you need to do it.", te: "నియమం: తప్పకుండా చేయాలి." },
          example: { en: "You must bring your passbook.", te: "మీరు పాస్‌బుక్ తప్పకుండా తీసుకురావాలి." },
        },
        {
          form: "You have to …",
          useFor: { en: "The same need, very common in talk.", te: "అదే అర్థం; మాటల్లో ఎక్కువగా వాడతారు." },
          example: { en: "You have to sign here.", te: "మీరు ఇక్కడ సంతకం చేయాలి." },
        },
        {
          form: "fill in",
          useFor: { en: "Writing your details on a form or slip.", te: "ఫారం, స్లిప్ మీద మీ వివరాలు రాయడం." },
          example: { en: "Please fill in this slip.", te: "ఈ స్లిప్ నింపండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "You must to bring your passbook.",
      right: "You must bring your passbook.",
      why: {
        en: "After must, the verb comes straight, with no to.",
        te: "must తర్వాత to రాదు; verb నేరుగా వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please fill up this slip.",
      right: "Please fill in this slip.",
      why: {
        en: "Fill up is for a glass or a tank; a form or a slip is filled in.",
        te: "fill up అంటే గ్లాసు, ట్యాంక్ నింపడం; ఫారం, స్లిప్‌కి fill in అనాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "You want to put money into your account. What do you say?", te: "మీ అకౌంట్‌లో డబ్బు వేయాలి. ఏమంటారు?" },
      options: ["I'd like to deposit ten thousand rupees.", "I'd like to withdraw ten thousand rupees.", "I want deposit ten thousand rupees."],
      answer: 0,
      why: {
        en: "Deposit puts money in, and I'd like to asks politely.",
        te: "deposit అంటే డబ్బు వేయడం; I'd like to అంటే మర్యాదగా అడగడం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "You must ___ your passbook.",
      te: "మీరు పాస్‌బుక్ తప్పకుండా తీసుకురావాలి.",
      options: ["bring", "to bring", "brings"],
      answer: 0,
      why: {
        en: "After must, the verb stays plain, with no to and no s.",
        te: "must తర్వాత verb మారదు; to గానీ, s గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The cashier says: Please fill in this slip. What must you do?",
        te: "క్యాషియర్ Please fill in this slip అన్నారు. మీరు ఏం చేయాలి?",
      },
      options: ["Write your details on the slip.", "Sign your passbook.", "Wait in the queue."],
      answer: 0,
      why: {
        en: "Fill in means writing your details in the empty spaces.",
        te: "fill in అంటే ఖాళీల్లో మీ వివరాలు రాయడం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "The cashier count the money twice.",
      wrongIndex: 2,
      fix: "The cashier counts the money twice.",
      why: {
        en: "The cashier is one person, like he or she, so count takes s.",
        te: "క్యాషియర్ ఒక్కరే, he లేదా she లాగా; అందుకే count కి s చేర్చాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "At the counter, say politely that you want to take out two thousand rupees.",
        te: "కౌంటర్ దగ్గర రెండు వేల రూపాయలు తీయాలని మర్యాదగా చెప్పండి.",
      },
      expected: ["I'd like to withdraw two thousand rupees.", "I would like to withdraw two thousand rupees."],
      options: ["I'd like to withdraw two thousand rupees.", "I'd like to deposit two thousand rupees.", "Give two thousand rupees withdraw."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the clerk if you have to bring your Aadhaar card.",
        te: "ఆధార్ కార్డ్ తీసుకురావాలా అని క్లర్క్‌ని అడగండి.",
      },
      expected: ["Do I have to bring my Aadhaar card?", "Do I need to bring my Aadhaar card?", "Do I have to bring my Aadhaar?"],
      options: ["Do I have to bring my Aadhaar card?", "I have to bring my Aadhaar card?", "Do I have to brought my Aadhaar card?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the cash counter", te: "క్యాష్ కౌంటర్ దగ్గర" },
    scene: {
      en: "You are at the cash counter of your bank. Usha, the cashier, helps you.",
      te: "మీరు మీ బ్యాంక్ క్యాష్ కౌంటర్ దగ్గర ఉన్నారు. క్యాషియర్ ఉష సహాయం చేస్తున్నారు.",
    },
    partner: { en: "Usha (cashier)", te: "ఉష (క్యాషియర్)" },
    skills: [
      { id: "bank", label: { en: "Deposit and withdraw", te: "డబ్బు వేయడం, తీయడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. How can I help you?",
        te: "నమస్కారం. మీకు ఏం సహాయం కావాలి?",
        hint: { en: "Greet her, and say you want to put in ten thousand rupees.", te: "నమస్కారం చెప్పి, పది వేల రూపాయలు వేయాలని చెప్పండి." },
        replies: [
          { say: "Good morning. I'd like to deposit ten thousand rupees.", good: true, skill: "bank" },
          { say: "Good morning. I'd like to deposit ten thousands rupees.", good: false, skill: "bank", fixIt: "plural" },
          {
            say: "Take this money. Quick, I'm busy.",
            good: false,
            skill: "polite",
            react: { en: "One minute, please. Everyone here is waiting too.", te: "ఒక్క నిమిషం అండీ. ఇక్కడ అందరూ వెయిట్ చేస్తున్నారు." },
          },
        ],
      },
      {
        partner: "Okay. Did you fill in the deposit slip?",
        te: "సరే. డిపాజిట్ స్లిప్ నింపారా?",
        hint: { en: "Say no, and ask her for one politely.", te: "లేదని చెప్పి, ఒక స్లిప్ మర్యాదగా అడగండి." },
        replies: [
          { say: "No. Can I have a slip, please?", good: true, skill: "polite" },
          { say: "No. Give one slip.", good: false, skill: "polite" },
        ],
      },
      {
        partner: "Here you are. You must sign at the bottom.",
        te: "ఇదిగోండి. కింద మీరు తప్పకుండా సంతకం చేయాలి.",
        hint: { en: "Say okay, and that you will sign it now.", te: "సరే అని, ఇప్పుడే సంతకం చేస్తానని చెప్పండి." },
        replies: [
          { say: "Okay, I'll sign it now.", good: true, skill: "bank" },
          { say: "Okay, I'll signing it now.", good: false, skill: "bank" },
        ],
      },
      {
        partner: "Thank you. Here is your passbook.",
        te: "థాంక్యూ. ఇదిగోండి మీ పాస్‌బుక్.",
        hint: { en: "Thank her, and say goodbye.", te: "ఆవిడకి థాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you very much. Have a nice day.", good: true, skill: "polite" },
          { say: "Thanks you. Bye.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
