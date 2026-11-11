import type { Lesson } from "../../types";

/** Week 28, Day 4 (CURRICULUM §4): applying for a certificate — fee, receipt, how many days — at Mee Seva or the secretariat. */
export const day: Lesson = {
  id: "at-mee-seva",
  kind: "lesson",
  title: { en: "At Mee Seva", te: "మీ సేవలో" },
  subtitle: "How many days will it take?",
  summary: {
    en: "Learn to apply for a certificate at Mee Seva or the secretariat: How many days will it take? Here is my receipt.",
    te: "మీ సేవలో గానీ సచివాలయంలో గానీ సర్టిఫికెట్‌కి అప్లై చేయడం నేర్చుకుందాం: How many days will it take? Here is my receipt.",
  },
  seo: {
    title: "Applying at Mee Seva in English for Telugu Speakers",
    description:
      "Say I want to apply for an income certificate and How many days will it take? at Mee Seva. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "How many days", role: "what" },
    { text: "will", role: "action" },
    { text: "it", role: "who" },
    { text: "take?", role: "action" },
  ],
  core: [
    { en: "I want to apply for an income certificate.", te: "ఇన్‌కమ్ సర్టిఫికెట్‌కి అప్లై చేయాలనుకుంటున్నాను.", extra: ["a"] },
    { en: "How many days will it take?", te: "ఎన్ని రోజులు పడుతుంది?", extra: ["day"] },
    { en: "How much is the fee?", te: "ఫీజు ఎంత?", extra: ["many"] },
    { en: "Here is my receipt.", te: "ఇదిగోండి నా రసీదు.", extra: ["are"] },
    { en: "It will take about seven days.", te: "సుమారు ఏడు రోజులు పడుతుంది.", extra: ["takes"] },
    { en: "Please keep this receipt safe.", te: "ఈ రసీదు జాగ్రత్తగా దాచుకోండి.", extra: ["safely"] },
    { en: "You can also apply at the ward secretariat.", te: "వార్డ్ సచివాలయంలో కూడా అప్లై చేయొచ్చు.", extra: ["in"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask a neighbour where the nearest Mee Seva centre or secretariat is.",
    te: "దగ్గర్లో మీ సేవ సెంటర్ గానీ సచివాలయం గానీ ఎక్కడుందో పక్కింటివాళ్ళని అడగండి.",
  },
  words: [
    { en: "Mee Seva", te: "మీ సేవ (ప్రభుత్వ సేవల సెంటర్)" },
    { en: "secretariat", te: "సచివాలయం (గ్రామ / వార్డ్)" },
    { en: "apply", te: "అప్లై చేయడం, దరఖాస్తు చేయడం" },
    { en: "fee", te: "ఫీజు, రుసుము" },
    { en: "income certificate", te: "ఆదాయ సర్టిఫికెట్, ఇన్‌కమ్ సర్టిఫికెట్" },
  ],
  grammar: ["will", "question-words", "gerunds-infinitives"],
  topics: ["offices", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Applying for a certificate", te: "సర్టిఫికెట్‌కి అప్లై చేయడం" },
      body: {
        en: "First say what you want: I want to apply for an income certificate. Then ask the fee and the time: How many days will it take? Keep the receipt. You need it later.",
        te: "ముందు ఏం కావాలో చెప్పండి: I want to apply for an income certificate. తర్వాత ఫీజు, ఎన్ని రోజులో అడగండి: How many days will it take? రసీదు దాచుకోండి, తర్వాత కావాలి.",
      },
      bridge: {
        te: ["ఎన్ని రోజులు", "పడుతుంది?"],
        en: [
          { text: "How many days", role: "what" },
          { text: "will", role: "action" },
          { text: "it", role: "who" },
          { text: "take?", role: "action" },
        ],
      },
      examples: [
        { en: "I want to apply for an income certificate.", te: "ఇన్‌కమ్ సర్టిఫికెట్‌కి అప్లై చేయాలనుకుంటున్నాను." },
        { en: "How many days will it take?", te: "ఎన్ని రోజులు పడుతుంది?" },
        { en: "It will take about seven days.", te: "సుమారు ఏడు రోజులు పడుతుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking at the counter", te: "కౌంటర్ దగ్గర అడగడం" },
      items: [
        {
          form: "How many …?",
          useFor: { en: "Things you can count, like days.", te: "లెక్కపెట్టగలిగేవి, రోజుల లాగా." },
          example: { en: "How many days will it take?", te: "ఎన్ని రోజులు పడుతుంది?" },
        },
        {
          form: "How much …?",
          useFor: { en: "Money: the fee, the price.", te: "డబ్బు: ఫీజు, ధర." },
          example: { en: "How much is the fee?", te: "ఫీజు ఎంత?" },
        },
        {
          form: "Here is …",
          useFor: { en: "Handing something over.", te: "ఏదైనా చేతికి ఇస్తున్నప్పుడు." },
          example: { en: "Here is my receipt.", te: "ఇదిగోండి నా రసీదు." },
        },
        {
          form: "apply for … / apply at …",
          useFor: { en: "For the thing you want; at the place.", te: "కావాల్సిన దానికి for; చోటుకి at." },
          example: { en: "You can also apply at the ward secretariat.", te: "వార్డ్ సచివాలయంలో కూడా అప్లై చేయొచ్చు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "How many days it will take?",
      right: "How many days will it take?",
      why: {
        en: "Telugu keeps the same order, but an English question puts will before it.",
        te: "తెలుగులో వరుస మారదు; ఇంగ్లీష్ ప్రశ్నలో will ముందు, it తర్వాత వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "I want to apply for income certificate.",
      right: "I want to apply for an income certificate.",
      why: {
        en: "Telugu has no a or an; English needs an before a vowel sound like income.",
        te: "తెలుగులో a, an ఉండవు; ఇంగ్లీష్‌లో income లాంటి అచ్చు శబ్దం ముందు an అనాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: { en: "Ask the clerk the fee.", te: "ఫీజు ఎంతో క్లర్క్‌ని అడగండి." },
      options: ["How much is the fee?", "How many is the fee?", "How much the fee?"],
      answer: 0,
      why: {
        en: "Money takes much, and Telugu ఎంత? has no verb, but English needs is.",
        te: "డబ్బుకి much వాడాలి; తెలుగు 'ఎంత?' లో verb ఉండదు, ఇంగ్లీష్‌లో is కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "I want to apply ___ an income certificate.",
      te: "ఇన్‌కమ్ సర్టిఫికెట్‌కి అప్లై చేయాలనుకుంటున్నాను.",
      options: ["for", "to", "on"],
      answer: 0,
      why: {
        en: "Telugu సర్టిఫికెట్‌కి has కి, but you apply for the thing you want.",
        te: "'సర్టిఫికెట్‌కి' లో 'కి' ఉన్నా, ఇంగ్లీష్‌లో కావాల్సిన దానికి apply for అనాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The clerk says: It will take about seven days. When do you come back?",
        te: "క్లర్క్ It will take about seven days అన్నారు. మీరు మళ్ళీ ఎప్పుడు రావాలి?",
      },
      options: ["After about a week", "Tomorrow", "After seven months"],
      answer: 0,
      why: {
        en: "Seven days is about one week, so come back next week.",
        te: "ఏడు రోజులు అంటే సుమారు ఒక వారం; వచ్చే వారం రండి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "It will take about seven day.",
      wrongIndex: 5,
      fix: "It will take about seven days.",
      why: {
        en: "Seven is more than one, so day takes s.",
        te: "ఏడు అంటే ఒకటి కంటే ఎక్కువ; అందుకే day కి s చేర్చాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "At Mee Seva, say you want to apply for an income certificate.",
        te: "మీ సేవలో ఇన్‌కమ్ సర్టిఫికెట్‌కి అప్లై చేయాలని చెప్పండి.",
      },
      expected: ["I want to apply for an income certificate.", "I need an income certificate.", "I want an income certificate, please."],
      options: ["I want to apply for an income certificate.", "I want to apply for income certificate.", "Give me income certificate."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You paid the fee. Ask how many days it will take.",
        te: "ఫీజు కట్టారు. ఎన్ని రోజులు పడుతుందో అడగండి.",
      },
      expected: ["How many days will it take?", "How long will it take?"],
      options: ["How many days will it take?", "How many days it will take?", "How much days will it take?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "An income certificate", te: "ఇన్‌కమ్ సర్టిఫికెట్" },
    scene: {
      en: "You need an income certificate. Geetha helps you at the Mee Seva centre.",
      te: "మీకు ఇన్‌కమ్ సర్టిఫికెట్ కావాలి. మీ సేవ సెంటర్‌లో గీత గారు సహాయం చేస్తున్నారు.",
    },
    partner: { en: "Geetha (Mee Seva operator)", te: "గీత (మీ సేవ ఆపరేటర్)" },
    skills: [
      { id: "apply", label: { en: "Applying", te: "అప్లై చేయడం" } },
      { id: "ask", label: { en: "Asking the fee and the time", te: "ఫీజు, సమయం అడగడం" } },
    ],
    turns: [
      {
        partner: "Good morning. Which service do you need?",
        te: "నమస్కారం. మీకు ఏ సర్వీస్ కావాలి?",
        hint: { en: "Say which certificate you need.", te: "మీకు ఏ సర్టిఫికెట్ కావాలో చెప్పండి." },
        replies: [
          { say: "I want to apply for an income certificate.", good: true, skill: "apply" },
          { say: "I want to apply for income certificate.", good: false, skill: "apply", fixIt: "article" },
        ],
      },
      {
        partner: "Okay. The fee is 45 rupees.",
        te: "సరే. ఫీజు 45 రూపాయలు.",
        hint: { en: "Pay, and ask how long it will take.", te: "డబ్బు ఇచ్చి, ఎన్ని రోజులు పడుతుందో అడగండి." },
        replies: [
          { say: "Here you are. How many days will it take?", good: true, skill: "ask" },
          { say: "Here you are. How many day it will take?", good: false, skill: "ask", fixIt: "plural" },
          {
            say: "So much? It should be free!",
            good: false,
            skill: "ask",
            react: { en: "Sorry, this is the government fee.", te: "సారీ అండీ, ఇది ప్రభుత్వం పెట్టిన ఫీజు." },
          },
        ],
      },
      {
        partner: "About seven days. Here is your receipt.",
        te: "సుమారు ఏడు రోజులు. ఇదిగోండి మీ రసీదు.",
        hint: { en: "Ask if you must come back to collect it.", te: "తీసుకోవడానికి మళ్ళీ రావాలా అని అడగండి." },
        replies: [
          { say: "Do I need to come back here?", good: true, skill: "ask" },
          { say: "Do I need come back here?", good: false, skill: "ask" },
        ],
      },
      {
        partner: "Yes, after you get an SMS. Bring this receipt.",
        te: "అవును, మీకు SMS వచ్చాక రండి. ఈ రసీదు తీసుకురండి.",
        hint: { en: "Say you will bring it, and thank her.", te: "తీసుకొస్తానని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, I will bring it. Thank you very much.", good: true, skill: "apply" },
          { say: "Okay, I will bringing it. Thank you.", good: false, skill: "apply" },
        ],
      },
    ],
  },
};
