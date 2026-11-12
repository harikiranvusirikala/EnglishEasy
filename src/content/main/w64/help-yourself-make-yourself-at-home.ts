import type { Lesson } from "../../types";

/** Week 64, Day 2 (CURRICULUM §5): Help yourself, Please have some more, Make yourself at home — making a guest comfortable. */
export const day: Lesson = {
  id: "help-yourself-make-yourself-at-home",
  kind: "lesson",
  title: { en: "Help Yourself", te: "మొహమాటపడకండి" },
  subtitle: "Help yourself / Make yourself at home",
  summary: {
    en: "Learn to make a guest feel at home: Please help yourself to the sweets. Make yourself at home.",
    te: "అతిథి మొహమాటం లేకుండా హాయిగా ఉండేలా చెప్పడం నేర్చుకుందాం: Please help yourself to the sweets. Make yourself at home.",
  },
  seo: {
    title: "Help Yourself and Make Yourself at Home in English for Telugu Speakers",
    description:
      "Say Please help yourself to the sweets and Make yourself at home. Simple lessons for Telugu speakers on making guests comfortable.",
  },
  pattern: [
    { text: "Please", role: "who" },
    { text: "help yourself", role: "action" },
    { text: "to the sweets", role: "what" },
  ],
  core: [
    { en: "Please help yourself to the sweets.", te: "స్వీట్లు మొహమాటపడకుండా తీసుకోండి.", extra: ["with"] },
    { en: "Make yourself at home.", te: "మీ ఇల్లు లాగే హాయిగా ఉండండి.", extra: ["in"] },
    { en: "Please have some more.", te: "ఇంకొంచెం తీసుకోండి.", extra: ["many"] },
    { en: "The fan switch is here.", te: "ఫ్యాన్ స్విచ్ ఇక్కడ ఉంది.", extra: ["are"] },
    { en: "Don't be shy. Have another vada.", te: "మొహమాటపడకండి. ఇంకో వడ తీసుకోండి.", extra: ["vadas"] },
    { en: "Please feel free to rest in this room.", te: "ఈ గదిలో హాయిగా కాసేపు నడుం వాల్చండి.", extra: ["take"] },
    { en: "Lunch is ready. Please come and sit down.", te: "భోజనం రెడీ. రండి, కూర్చోండి.", extra: ["sitting"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When someone visits you today, say Please make yourself at home.",
    te: "ఈ రోజు ఎవరైనా మీ ఇంటికి వస్తే Please make yourself at home అని చెప్పండి.",
  },
  words: [
    { en: "help yourself", te: "మొహమాటపడకుండా తీసుకోండి" },
    { en: "make yourself at home", te: "మీ ఇల్లు లాగే హాయిగా ఉండండి" },
    { en: "have some more", te: "ఇంకొంచెం తీసుకోండి" },
    { en: "feel free", te: "సంకోచం లేకుండా, హాయిగా" },
    { en: "serve", te: "వడ్డించడం" },
  ],
  grammar: ["imperatives", "politeness-softening", "prepositions"],
  topics: ["home", "food", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Making a guest comfortable", te: "అతిథికి మొహమాటం పోగొట్టడం" },
      body: {
        en: "Help yourself means take as much as you like. Make yourself at home means relax, as in your own house.",
        te: "Help yourself అంటే 'మొహమాటపడకుండా కావలసినంత తీసుకోండి'. Make yourself at home అంటే 'మీ ఇల్లు లాగే హాయిగా ఉండండి'.",
      },
      bridge: {
        te: ["స్వీట్లు", "మొహమాటపడకుండా తీసుకోండి"],
        en: [
          { text: "Please", role: "who" },
          { text: "help yourself", role: "action" },
          { text: "to the sweets", role: "what" },
        ],
      },
      examples: [
        { en: "Please help yourself to the sweets.", te: "స్వీట్లు మొహమాటపడకుండా తీసుకోండి." },
        { en: "Make yourself at home.", te: "మీ ఇల్లు లాగే హాయిగా ఉండండి." },
        { en: "Please have some more.", te: "ఇంకొంచెం తీసుకోండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which one when", te: "ఏది ఎప్పుడు" },
      items: [
        {
          form: "Help yourself to …",
          useFor: { en: "Food on the table: take what you like.", te: "టేబుల్ మీద ఉన్నది ఇష్టమైనంత తీసుకోమని." },
          example: { en: "Help yourself to the snacks.", te: "స్నాక్స్ మొహమాటపడకుండా తీసుకోండి." },
        },
        {
          form: "Have some more.",
          useFor: { en: "Offer more food on the plate.", te: "ప్లేట్‌లో ఇంకా వేసుకోమని." },
          example: { en: "Don't be shy. Have another vada.", te: "మొహమాటపడకండి. ఇంకో వడ తీసుకోండి." },
        },
        {
          form: "Feel free to …",
          useFor: { en: "Say they can use something in your home.", te: "ఇంట్లో ఏదైనా సంకోచం లేకుండా వాడుకోమని." },
          example: { en: "Please feel free to rest in this room.", te: "ఈ గదిలో హాయిగా కాసేపు నడుం వాల్చండి." },
        },
        {
          form: "Make yourself at home.",
          useFor: { en: "Ask a guest to relax.", te: "అతిథిని హాయిగా ఉండమని." },
          example: { en: "Make yourself at home.", te: "మీ ఇల్లు లాగే హాయిగా ఉండండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Please help yourself with the sweets.",
      right: "Please help yourself to the sweets.",
      why: {
        en: "Telugu స్వీట్లతో pulls us to with, but for food English says help yourself to.",
        te: "తెలుగులో 'తో' వల్ల with అనేస్తాం; కానీ ఆహారం విషయంలో help yourself తర్వాత to వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please take rest in this room.",
      right: "Please rest in this room for a while.",
      why: {
        en: "Take rest is Indian English; people elsewhere say rest or have a rest.",
        te: "take rest అనేది మన ఇండియన్ ఇంగ్లీష్; మామూలుగా rest లేదా have a rest అంటారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "Your guest Usha asks: Aren't you eating with us? You will eat later. What do you say?",
        te: "మీ అతిథి ఉష గారు Aren't you eating with us? అని అడిగారు. మీరు తర్వాత తింటారు. ఏమంటారు?",
      },
      options: ["No, I'll eat later. Please start.", "Yes, I'll eat later. Please start.", "No, I'm not eat now. Please start."],
      answer: 0,
      why: {
        en: "You are not eating now, so start with No; Telugu అవును would sound like yes, I am.",
        te: "మీరు ఇప్పుడు తినట్లేదు కాబట్టి No తో మొదలుపెట్టాలి; తెలుగులోలా 'అవును' అంటే 'తింటున్నాను' అని అర్థమవుతుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Make yourself ___ home.",
      te: "మీ ఇల్లు లాగే హాయిగా ఉండండి.",
      options: ["at", "in", "on"],
      answer: 0,
      why: {
        en: "The fixed phrase uses at; Telugu ఇంట్లో makes people say in.",
        te: "ఈ మాటలో ఎప్పుడూ at వస్తుంది; తెలుగు 'ఇంట్లో' వల్ల in అనేస్తాం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your host says: Please help yourself to the sweets. What does she mean?",
        te: "ఇంటివారు Please help yourself to the sweets అన్నారు. ఆవిడ ఉద్దేశం ఏంటి?",
      },
      options: ["Take as many sweets as you like.", "Please help me with the sweets.", "Please serve the sweets to everyone."],
      answer: 0,
      why: {
        en: "Help yourself means take what you want; it is not a request for help.",
        te: "Help yourself అంటే 'మీకు కావలసినంత తీసుకోండి'; సాయం చేయమని అడగడం కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My neighbour Gopal make this halwa every Diwali.",
      wrongIndex: 3,
      fix: "My neighbour Gopal makes this halwa every Diwali.",
      why: {
        en: "A habit of one person, like Gopal, takes s on the verb.",
        te: "గోపాల్ గారి లాంటి ఒక్కరి అలవాటు చెప్పేటప్పుడు verb కి s చేరుతుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "The snacks are on the table. Tell your guests to take what they like.",
        te: "స్నాక్స్ టేబుల్ మీద ఉన్నాయి. ఇష్టమైనంత తీసుకోమని అతిథులకు చెప్పండి.",
      },
      expected: ["Please help yourself to the snacks.", "Please help yourself.", "Help yourself, please."],
      options: ["Please help yourself to the snacks.", "Please help yourself with the snacks.", "Please helping yourself to the snacks."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend's cousin looks shy in your house. Ask him to relax.",
        te: "మీ స్నేహితుడి కజిన్ మీ ఇంట్లో మొహమాటంగా ఉన్నారు. హాయిగా ఉండమని చెప్పండి.",
      },
      expected: ["Please make yourself at home.", "Make yourself at home.", "Don't be shy. Make yourself at home."],
      options: ["Please make yourself at home.", "Please make yourself in home.", "Please make you at home."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Lunch for a neighbour", te: "పక్కింటావిడకి భోజనం" },
    scene: {
      en: "You have invited your neighbour Salma for lunch. She is at the door.",
      te: "మీ పక్కింటి సల్మా గారిని భోజనానికి పిలిచారు. ఆవిడ గుమ్మం దగ్గర ఉన్నారు.",
    },
    partner: { en: "Salma (your neighbour)", te: "సల్మా (మీ పక్కింటావిడ)" },
    skills: [
      { id: "host", label: { en: "Making a guest comfortable", te: "అతిథిని హాయిగా ఉంచడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Something smells very good.",
        te: "హలో! ఏదో మంచి వాసన వస్తోంది.",
        hint: { en: "Welcome her, and tell her lunch is ready.", te: "ఆవిడని లోపలికి రమ్మని, భోజనం రెడీ అని చెప్పండి." },
        replies: [
          { say: "Come in, Salma! Lunch is ready. Please sit down.", good: true, skill: "host" },
          {
            say: "Lunch is ready. Sit.",
            good: false,
            skill: "polite",
            react: { en: "Oh! Okay, okay. I'm sitting!", te: "ఓ! సరే, సరే. కూర్చుంటున్నాను!" },
          },
        ],
      },
      {
        partner: "Thank you. Wow, so many dishes!",
        te: "థ్యాంక్స్. అబ్బో, ఎన్ని రకాలో!",
        hint: { en: "Tell her to take whatever she likes.", te: "ఇష్టమైనవన్నీ మొహమాటం లేకుండా తీసుకోమని చెప్పండి." },
        replies: [
          { say: "Please help yourself.", good: true, skill: "host" },
          { say: "Please help yourself to anything you like.", good: true, skill: "host" },
          { say: "Please help yourself with anything you like.", good: false, skill: "host", fixIt: "preposition" },
        ],
      },
      {
        partner: "This gongura pachadi is wonderful!",
        te: "ఈ గోంగూర పచ్చడి అద్భుతంగా ఉంది!",
        hint: { en: "Thank her, and offer her some more.", te: "థ్యాంక్స్ చెప్పి, ఇంకొంచెం వేసుకోమనండి." },
        replies: [
          { say: "Thank you! Please have some more.", good: true, skill: "host" },
          { say: "Thank you! Please have little more.", good: false, skill: "host", fixIt: "article" },
        ],
      },
      {
        partner: "No, thank you. I'm full. It was a lovely lunch.",
        te: "వద్దండి, థ్యాంక్స్. కడుపు నిండిపోయింది. భోజనం చాలా బాగుంది.",
        hint: { en: "Say you are glad, and ask her to relax under the fan.", te: "మీకు సంతోషంగా ఉందని చెప్పి, ఫ్యాన్ కింద హాయిగా కూర్చోమనండి." },
        replies: [
          { say: "I'm so glad. Please relax here under the fan.", good: true, skill: "polite" },
          { say: "I'm happy you liked it. Make yourself at home.", good: true, skill: "polite" },
          { say: "I so glad. Please relax here under the fan.", good: false, skill: "polite", fixIt: "be" },
        ],
      },
    ],
  },
};
