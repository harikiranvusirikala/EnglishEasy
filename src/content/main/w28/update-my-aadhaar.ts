import type { Lesson } from "../../types";

/** Week 28, Day 1 (CURRICULUM §4): I want to / I need to + update, change — at the Aadhaar centre. */
export const day: Lesson = {
  id: "update-my-aadhaar",
  kind: "lesson",
  title: { en: "Updating My Aadhaar", te: "ఆధార్ అప్‌డేట్" },
  subtitle: "I want to / I need to",
  summary: {
    en: "Learn to say what you want to do at the Aadhaar centre: I want to update my address. I need to change my mobile number.",
    te: "ఆధార్ సెంటర్‌లో మీకు ఏం కావాలో చెప్పడం నేర్చుకుందాం: I want to update my address. I need to change my mobile number.",
  },
  seo: {
    title: "Updating Aadhaar in English for Telugu Speakers",
    description:
      "Say I want to update my address and I need to change my mobile number at the Aadhaar centre. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "want to update", role: "action" },
    { text: "my address", role: "what" },
  ],
  core: [
    { en: "I want to update my address.", te: "నా అడ్రస్ అప్‌డేట్ చేయించుకోవాలనుకుంటున్నాను.", extra: ["updating"] },
    { en: "I have a new mobile number.", te: "నాకు కొత్త మొబైల్ నంబర్ ఉంది.", extra: ["one"] },
    { en: "I need to change my mobile number.", te: "నా మొబైల్ నంబర్ మార్చుకోవాలి.", extra: ["changing"] },
    { en: "Where can I update my Aadhaar?", te: "నా ఆధార్ ఎక్కడ అప్‌డేట్ చేయించుకోవచ్చు?", extra: ["do"] },
    { en: "Please put your finger here.", te: "మీ వేలు ఇక్కడ పెట్టండి.", extra: ["keep"] },
    { en: "You will get an SMS on your new number.", te: "మీ కొత్త నంబర్‌కి SMS వస్తుంది.", extra: ["in"] },
    { en: "Do I need to come again?", te: "నేను మళ్ళీ రావాలా?", extra: ["Am"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask a neighbour where the nearest Aadhaar centre is: Where can I update my Aadhaar?",
    te: "దగ్గర్లో ఆధార్ సెంటర్ ఎక్కడుందో పక్కింటివాళ్ళని అడగండి: Where can I update my Aadhaar?",
  },
  words: [
    { en: "update", te: "అప్‌డేట్ చేయడం, కొత్త వివరాలు మార్చడం" },
    { en: "want to", te: "చేయాలనుకోవడం" },
    { en: "need to", te: "చేయాల్సి రావడం, అవసరం" },
    { en: "Aadhaar centre", te: "ఆధార్ సెంటర్" },
    { en: "fingerprint", te: "వేలిముద్ర" },
  ],
  grammar: ["gerunds-infinitives", "can-could", "question-words"],
  topics: ["offices", "phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "I want to / I need to", te: "want to, need to వాడకం" },
      body: {
        en: "Want to says what you wish to do: I want to update my address. Need to says what you must get done: I need to change my mobile number. After to, the verb stays plain.",
        te: "చేయాలని ఉంటే want to: I want to update my address. తప్పనిసరిగా చేయాల్సి వస్తే need to: I need to change my mobile number. to తర్వాత verb మారదు.",
      },
      bridge: {
        te: ["నా అడ్రస్", "అప్‌డేట్ చేయించుకోవాలి"],
        en: [
          { text: "I", role: "who" },
          { text: "want to update", role: "action" },
          { text: "my address", role: "what" },
        ],
      },
      examples: [
        { en: "I want to update my address.", te: "నా అడ్రస్ అప్‌డేట్ చేయించుకోవాలనుకుంటున్నాను." },
        { en: "I need to change my mobile number.", te: "నా మొబైల్ నంబర్ మార్చుకోవాలి." },
        { en: "Do I need to come again?", te: "నేను మళ్ళీ రావాలా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Want to, need to or have to?", te: "want to, need to, have to: ఏది ఎప్పుడు?" },
      items: [
        {
          form: "I want to …",
          useFor: { en: "Something you wish to do.", te: "మీకు చేయాలని ఉన్నది." },
          example: { en: "I want to update my address.", te: "నా అడ్రస్ అప్‌డేట్ చేయించుకోవాలనుకుంటున్నాను." },
        },
        {
          form: "I need to …",
          useFor: { en: "Something necessary for you.", te: "మీకు అవసరమైనది." },
          example: { en: "I need to change my mobile number.", te: "నా మొబైల్ నంబర్ మార్చుకోవాలి." },
        },
        {
          form: "I have to …",
          useFor: { en: "A rule you must follow.", te: "తప్పక పాటించాల్సిన నియమం." },
          example: { en: "I have to give my fingerprint.", te: "నేను వేలిముద్ర వేయాలి." },
        },
        {
          form: "Do I need to …?",
          useFor: { en: "Asking if something is necessary.", te: "అవసరమా అని అడగడం." },
          example: { en: "Do I need to come again?", te: "నేను మళ్ళీ రావాలా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "I have new mobile number.",
      right: "I have a new mobile number.",
      why: {
        en: "Telugu has no a, but English needs a before one thing.",
        te: "తెలుగులో a ఉండదు; ఇంగ్లీష్‌లో ఒక్క వస్తువు ముందు a కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "Where I can update my Aadhaar?",
      right: "Where can I update my Aadhaar?",
      why: {
        en: "Telugu keeps the same order in a question, but English puts can before I.",
        te: "తెలుగు ప్రశ్నలో పదాల వరుస మారదు; ఇంగ్లీష్‌లో can ముందు, I తర్వాత వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "You moved to a new house. What do you say at the Aadhaar centre?",
        te: "మీరు కొత్త ఇంటికి మారారు. ఆధార్ సెంటర్‌లో ఏమంటారు?",
      },
      options: ["I want to update my address.", "I want update my address.", "I am wanting to update my address."],
      answer: 0,
      why: {
        en: "Want needs to before the next verb, and want never takes -ing.",
        te: "want తర్వాత verb వస్తే మధ్యలో to కావాలి; want కి -ing రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I need ___ change my mobile number.",
      te: "నా మొబైల్ నంబర్ మార్చుకోవాలి.",
      options: ["to", "for", "the"],
      answer: 0,
      why: {
        en: "Need joins the next verb with to, just like want.",
        te: "need తర్వాత verb వస్తే మధ్యలో to కావాలి, want లాగే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The operator says: Please put your finger here. What does she want?",
        te: "ఆపరేటర్ Please put your finger here అన్నారు. ఆవిడకి ఏం కావాలి?",
      },
      options: ["Your fingerprint", "Your phone number", "Your signature"],
      answer: 0,
      why: {
        en: "Putting your finger on the machine gives your fingerprint.",
        te: "మెషిన్ మీద వేలు పెడితే వేలిముద్ర పడుతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I need to changing my mobile number.",
      wrongIndex: 3,
      fix: "I need to change my mobile number.",
      why: {
        en: "After to, the verb stays plain, with no -ing.",
        te: "to తర్వాత verb మారదు, -ing రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "At the Aadhaar centre, say you want to update your address.",
        te: "ఆధార్ సెంటర్‌లో మీ అడ్రస్ అప్‌డేట్ చేయించుకోవాలని చెప్పండి.",
      },
      expected: ["I want to update my address.", "I want to update my address, please.", "I need to update my address."],
      options: ["I want to update my address.", "I want update my address.", "Update my address. Quickly."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Tell the operator you have a new mobile number.",
        te: "మీకు కొత్త మొబైల్ నంబర్ ఉందని ఆపరేటర్‌కి చెప్పండి.",
      },
      expected: ["I have a new mobile number.", "I have a new number."],
      options: ["I have a new mobile number.", "I have new mobile number.", "I am having a new mobile number."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the Aadhaar centre", te: "ఆధార్ సెంటర్‌లో" },
    scene: {
      en: "You have a new mobile number. Imran, the operator, helps you at the Aadhaar centre.",
      te: "మీకు కొత్త మొబైల్ నంబర్ వచ్చింది. ఆధార్ సెంటర్‌లో ఆపరేటర్ ఇమ్రాన్ సహాయం చేస్తున్నారు.",
    },
    partner: { en: "Imran (Aadhaar centre operator)", te: "ఇమ్రాన్ (ఆధార్ సెంటర్ ఆపరేటర్)" },
    voice: "b",
    skills: [
      { id: "want", label: { en: "I want to / I need to", te: "want to, need to తో చెప్పడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. How can I help you?",
        te: "నమస్కారం. మీకు ఏం సహాయం కావాలి?",
        hint: { en: "Greet him, and say what you want to change.", te: "నమస్కారం చెప్పి, ఏం మార్చుకోవాలో చెప్పండి." },
        replies: [
          { say: "Good morning. I want to change my mobile number.", good: true, skill: "want" },
          { say: "Good morning. I want change my mobile number.", good: false, skill: "want" },
          {
            say: "Change my number fast. I am in a hurry.",
            good: false,
            skill: "polite",
            react: { en: "Please wait. Everyone here is in a hurry.", te: "కొంచెం ఆగండి. ఇక్కడ అందరికీ తొందరే." },
          },
        ],
      },
      {
        partner: "Okay. Do you have your Aadhaar card?",
        te: "సరే. మీ ఆధార్ కార్డ్ ఉందా?",
        hint: { en: "Say yes, and hand it over.", te: "ఉందని చెప్పి, కార్డ్ ఇవ్వండి." },
        replies: [
          { say: "Yes, here it is.", good: true, skill: "polite" },
          { say: "Yes, here is it.", good: false, skill: "polite" },
        ],
      },
      {
        partner: "Thank you. Please put your finger here.",
        te: "థాంక్స్. మీ వేలు ఇక్కడ పెట్టండి.",
        hint: { en: "Say okay, and ask if you must come back another day.", te: "సరే అని, ఇంకో రోజు మళ్ళీ రావాలా అని అడగండి." },
        replies: [
          { say: "Okay. Do I need to come again?", good: true, skill: "want" },
          { say: "Okay. I need to come again?", good: false, skill: "want", fixIt: "question" },
        ],
      },
      {
        partner: "No. You will get an SMS on your new number.",
        te: "అవసరం లేదు. మీ కొత్త నంబర్‌కి SMS వస్తుంది.",
        hint: { en: "Say that is all, and thank him.", te: "అంతే అని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "That's all for today. Thank you very much.", good: true, skill: "polite" },
          { say: "That is all only. Thank you.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
