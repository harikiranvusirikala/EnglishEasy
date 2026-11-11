import type { Lesson } from "../../types";

/** Week 23, Day 4 (CURRICULUM §4): complaining politely — this coffee is cold, not what I ordered, could you change it? */
export const day: Lesson = {
  id: "theres-a-problem",
  kind: "lesson",
  title: { en: "There's a Problem", te: "ఏదో తేడా" },
  subtitle: "complaining politely",
  summary: {
    en: "Learn to complain politely in a restaurant: Excuse me, this coffee is cold. I ordered dosa, not uttapam.",
    te: "హోటల్‌లో మర్యాదగా ఫిర్యాదు చేయడం నేర్చుకుందాం: Excuse me, this coffee is cold. I ordered dosa, not uttapam.",
  },
  seo: {
    title: "Complaining Politely in a Restaurant in English for Telugu Speakers",
    description:
      "Say Excuse me, this coffee is cold and Could you change it, please? Simple lessons for Telugu speakers on complaining politely.",
  },
  pattern: [
    { text: "This coffee", role: "who" },
    { text: "is", role: "action" },
    { text: "cold", role: "what" },
  ],
  core: [
    { en: "Excuse me, this coffee is cold.", te: "ఏమండీ, ఈ కాఫీ చల్లగా ఉంది.", extra: ["are"] },
    { en: "I ordered dosa, not uttapam.", te: "నేను దోసె ఆర్డర్ చేశాను, ఉతప్పం కాదు.", extra: ["order"] },
    { en: "Sorry, this is not what I ordered.", te: "Sorry అండీ, నేను ఆర్డర్ చేసింది ఇది కాదు.", extra: ["which"] },
    { en: "Could you change it, please?", te: "దీన్ని మార్చి ఇస్తారా?", extra: ["changing"] },
    { en: "This idli is stale.", te: "ఈ ఇడ్లీ పాచిపోయింది.", extra: ["are"] },
    { en: "The sambar tastes too salty.", te: "సాంబార్ మరీ ఉప్పగా ఉంది.", extra: ["taste"] },
    { en: "Can I speak to the manager, please?", te: "మేనేజర్‌తో మాట్లాడొచ్చా?", extra: ["speaking"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Practice once aloud: Excuse me, this tea is cold. Could you change it, please?",
    te: "ఒకసారి గట్టిగా ప్రాక్టీస్ చేయండి: Excuse me, this tea is cold. Could you change it, please?",
  },
  words: [
    { en: "manager", te: "మేనేజర్" },
    { en: "stale", te: "పాచిపోయిన, నిల్వ" },
    { en: "salty", te: "ఉప్పగా" },
    { en: "taste", te: "రుచి, రుచిగా ఉండడం" },
    { en: "instead", te: "దాని బదులు" },
  ],
  grammar: ["can-could", "politeness-softening", "past-simple"],
  topics: ["food", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Complaining politely", te: "మర్యాదగా ఫిర్యాదు" },
      body: {
        en: "Start softly with Excuse me or Sorry. Say the problem calmly: this coffee is cold. Then ask for help: Could you change it, please? Calm words get quick help.",
        te: "Excuse me లేదా Sorry తో మెల్లగా మొదలుపెట్టండి. సమస్య ప్రశాంతంగా చెప్పండి: this coffee is cold. తర్వాత అడగండి: Could you change it, please? ప్రశాంతంగా అడిగితే తొందరగా సరిచేస్తారు.",
      },
      bridge: {
        te: ["ఈ కాఫీ", "చల్లగా", "ఉంది"],
        en: [
          { text: "This coffee", role: "who" },
          { text: "is", role: "action" },
          { text: "cold", role: "what" },
        ],
      },
      examples: [
        { en: "Excuse me, this coffee is cold.", te: "ఏమండీ, ఈ కాఫీ చల్లగా ఉంది." },
        { en: "I ordered dosa, not uttapam.", te: "నేను దోసె ఆర్డర్ చేశాను, ఉతప్పం కాదు." },
        { en: "Could you change it, please?", te: "దీన్ని మార్చి ఇస్తారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "First the problem, then the request", te: "ముందు సమస్య, తర్వాత అడగడం" },
      items: [
        {
          form: "Excuse me, …",
          useFor: { en: "Call the waiter politely.", te: "వెయిటర్‌ని మర్యాదగా పిలవడానికి." },
          example: { en: "Excuse me, this coffee is cold.", te: "ఏమండీ, ఈ కాఫీ చల్లగా ఉంది." },
        },
        {
          form: "not what I ordered",
          useFor: { en: "The wrong dish came.", te: "వేరే వంటకం వచ్చినప్పుడు." },
          example: { en: "Sorry, this is not what I ordered.", te: "Sorry అండీ, నేను ఆర్డర్ చేసింది ఇది కాదు." },
        },
        {
          form: "Could you change it?",
          useFor: { en: "Ask for a new one.", te: "కొత్తది ఇవ్వమని అడగడానికి." },
          example: { en: "Could you change it, please?", te: "దీన్ని మార్చి ఇస్తారా?" },
        },
        {
          form: "instead",
          useFor: { en: "Ask for another dish in its place.", te: "దాని బదులు వేరేది అడగడానికి." },
          example: { en: "Can I have idli instead?", te: "దాని బదులు ఇడ్లీ ఇస్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Hey! This is wrong. Take it back!",
      right: "Sorry, this is not what I ordered.",
      why: {
        en: "Shouting makes people upset; start with Sorry or Excuse me, and stay calm.",
        te: "గట్టిగా అరిస్తే ఎదుటివాళ్ళు బాధపడతారు; Sorry లేదా Excuse me తో ప్రశాంతంగా మొదలుపెట్టండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "The sambar taste too salty.",
      right: "The sambar tastes too salty.",
      why: {
        en: "One thing, like he or she, adds s to the verb.",
        te: "ఒక్క వస్తువు అయితే, he, she లాగానే verb కి s చేర్చాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: { en: "Your coffee is cold. Choose the polite way.", te: "మీ కాఫీ చల్లగా ఉంది. మర్యాదైన మాట ఎంచుకోండి." },
      options: ["Excuse me, this coffee is cold.", "Excuse me, this coffee cold.", "What is this? Cold coffee!"],
      answer: 0,
      why: {
        en: "Excuse me keeps it polite, and English needs is before cold.",
        te: "Excuse me మర్యాదగా ఉంటుంది; cold ముందు is తప్పనిసరి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "state-ing",
      sentence: "This sambar ___ too salty.",
      te: "ఈ సాంబార్ మరీ ఉప్పగా ఉంది.",
      options: ["tastes", "is tasting", "taste"],
      answer: 0,
      why: {
        en: "Taste for how food is takes no -ing, and one thing takes s.",
        te: "రుచి ఎలా ఉందో చెప్పేటప్పుడు -ing రాదు; ఒక్క వస్తువు కాబట్టి s.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "You ordered dosa, but uttapam came. What do you say?", te: "మీరు దోసె ఆర్డర్ చేశారు, కానీ ఉతప్పం వచ్చింది. ఏమంటారు?" },
      options: ["Sorry, I ordered dosa, not uttapam.", "Sorry, I order dosa, not uttapam.", "Sorry, I ordered dosa, no uttapam."],
      answer: 0,
      why: {
        en: "The order is already done, so use the past; Telugu కాదు is not.",
        te: "ఆర్డర్ ముందే చేశారు, అందుకే past; 'కాదు' అనడానికి not.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Could you changing it, please?",
      wrongIndex: 2,
      fix: "Could you change it, please?",
      why: {
        en: "After could, the verb stays plain, with no -ing.",
        te: "could తర్వాత verb మారదు, -ing రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "The idli is not fresh. Tell the waiter politely.",
        te: "ఇడ్లీ తాజాగా లేదు. వెయిటర్‌కి మర్యాదగా చెప్పండి.",
      },
      expected: ["Excuse me, this idli is stale.", "Excuse me, the idli is stale.", "Sorry, this idli is not fresh."],
      options: ["Excuse me, this idli is stale.", "Excuse me, this idli stale.", "This idli is stale. Bring new, fast!"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "The wrong dish came. Ask the waiter to change it.",
        te: "వేరే వంటకం వచ్చింది. మార్చి ఇవ్వమని వెయిటర్‌ని అడగండి.",
      },
      expected: ["Could you change it, please?", "Can you change it, please?", "Sorry, this is not what I ordered."],
      options: ["Could you change it, please?", "Could you changing it, please?", "You change it, please?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The wrong order", te: "తప్పు ఆర్డర్" },
    scene: {
      en: "You ordered a dosa and a coffee. Swapna, the waiter, brings an uttapam, and the coffee is cold.",
      te: "మీరు దోసె, కాఫీ ఆర్డర్ చేశారు. వెయిటర్ స్వప్న ఉతప్పం తెచ్చారు; కాఫీ కూడా చల్లగా ఉంది.",
    },
    partner: { en: "Swapna (waiter)", te: "స్వప్న (వెయిటర్)" },
    skills: [{ id: "complain", label: { en: "Complaining politely", te: "మర్యాదగా ఫిర్యాదు" } }],
    turns: [
      {
        partner: "Here is your uttapam. Please enjoy!",
        te: "ఇదిగోండి మీ ఉతప్పం. తినండి!",
        hint: { en: "Tell her politely you ordered something else.", te: "మీరు వేరేది ఆర్డర్ చేశారని మర్యాదగా చెప్పండి." },
        replies: [
          { say: "Sorry, I ordered dosa, not uttapam.", good: true, skill: "complain" },
          { say: "Sorry, I order dosa, not uttapam.", good: false, skill: "complain" },
          {
            say: "Wrong! Are you not listening?",
            good: false,
            skill: "complain",
            react: { en: "Oh, sorry! Let me check your order.", te: "అయ్యో, sorry అండీ! మీ ఆర్డర్ చూస్తాను." },
          },
        ],
      },
      {
        partner: "So sorry! A dosa will take fifteen minutes.",
        te: "చాలా sorry అండీ! దోసెకి పదిహేను నిమిషాలు పడుతుంది.",
        hint: { en: "Ask for idli in its place.", te: "దాని బదులు ఇడ్లీ అడగండి." },
        replies: [
          { say: "Then can I have idli instead?", good: true, skill: "complain" },
          { say: "Then can I have instead idli?", good: false, skill: "complain" },
        ],
      },
      {
        partner: "Yes, idli is ready. Anything else?",
        te: "అలాగే, ఇడ్లీ రెడీగా ఉంది. ఇంకేమైనా?",
        hint: { en: "Tell her about the coffee, and ask for a new one.", te: "కాఫీ సంగతి చెప్పి, కొత్తది అడగండి." },
        replies: [
          { say: "Yes, this coffee is cold. Could you change it?", good: true, skill: "complain" },
          { say: "Yes, this coffee cold. Could you change it?", good: false, skill: "complain", fixIt: "be" },
        ],
      },
      {
        partner: "Of course! A hot coffee is coming.",
        te: "తప్పకుండా! వేడి కాఫీ వస్తోంది.",
        hint: { en: "Say it is okay, and thank her.", te: "పర్లేదని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "It's okay, no problem. Thank you.", good: true },
          {
            say: "Okay. Don't do this again!",
            good: false,
            react: { en: "I'm very sorry. It won't happen again.", te: "చాలా sorry అండీ. మళ్ళీ ఇలా జరగదు." },
          },
        ],
      },
    ],
  },
};
