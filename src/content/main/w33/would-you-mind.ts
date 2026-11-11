import type { Lesson } from "../../types";

/** Week 33, Day 3 (CURRICULUM §4): Would you mind + -ing, and answering it: Not at all (= yes, gladly). */
export const day: Lesson = {
  id: "would-you-mind",
  kind: "lesson",
  title: { en: "Would You Mind …?", te: "అభ్యంతరం లేకపోతే" },
  subtitle: "Would you mind …ing? / Not at all.",
  summary: {
    en: "Learn the most polite way to ask, Would you mind keeping my parcel?, and the answer Not at all, which means yes.",
    te: "అన్నిటికంటే మర్యాదగా అడగడం నేర్చుకుందాం: Would you mind keeping my parcel? దానికి జవాబు Not at all, అంటే 'సరే' అని.",
  },
  seo: {
    title: "Would You Mind in English for Telugu Speakers",
    description:
      "Ask Would you mind keeping my parcel? and answer Not at all. Simple lessons for Telugu speakers on very polite requests to neighbours.",
  },
  pattern: [
    { text: "Would", role: "action" },
    { text: "you", role: "who" },
    { text: "mind keeping", role: "action" },
    { text: "my parcel?", role: "what" },
  ],
  core: [
    { en: "Would you mind keeping my parcel?", te: "అభ్యంతరం లేకపోతే నా పార్సెల్ మీ దగ్గర ఉంచుతారా?", extra: ["keep"] },
    { en: "Would you mind closing the gate, please?", te: "కొంచెం గేటు వేస్తారా, ప్లీజ్?", extra: ["to"] },
    { en: "Not at all. I'll keep it safe.", te: "అభ్యంతరం ఏం లేదు. జాగ్రత్తగా ఉంచుతాను.", extra: ["Yes"] },
    { en: "Would you mind waiting a minute?", te: "ఒక్క నిమిషం ఆగుతారా?", extra: ["wait"] },
    { en: "The courier will come at four o'clock.", te: "కొరియర్ నాలుగు గంటలకి వస్తుంది.", extra: ["coming"] },
    { en: "Of course not. Give it to me.", te: "అభ్యంతరం ఏముంది. నాకివ్వండి.", extra: ["for"] },
    { en: "Would you mind signing for it, please?", te: "కొంచెం మీరే సంతకం పెట్టి తీసుకుంటారా?", extra: ["sign"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask someone a small favour with Would you mind …ing?, or answer one with Not at all.",
    te: "Would you mind …ing? తో ఎవరినైనా చిన్న సహాయం అడగండి; ఎవరైనా అడిగితే Not at all అని జవాబివ్వండి.",
  },
  words: [
    { en: "would you mind", te: "అభ్యంతరం లేకపోతే … చేస్తారా?" },
    { en: "not at all", te: "అస్సలు అభ్యంతరం లేదు (సరే)" },
    { en: "of course not", te: "అభ్యంతరం ఏముంది (సరే)" },
    { en: "gate", te: "గేటు" },
    { en: "sign for", te: "సంతకం పెట్టి తీసుకోవడం" },
  ],
  grammar: ["would-like", "gerunds-infinitives", "politeness-softening"],
  topics: ["neighbours", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "A very polite request", te: "చాలా మర్యాదగా అడగడం" },
      body: {
        en: "Would you mind + -ing is a very polite way to ask. Mind means it troubles you. So Not at all means: no trouble, I'll do it.",
        te: "Would you mind + -ing చాలా మర్యాదగా అడిగే పద్ధతి. mind అంటే 'అభ్యంతరం'; అందుకే Not at all అంటే 'అభ్యంతరం లేదు, చేస్తాను' అని.",
      },
      bridge: {
        te: ["అభ్యంతరం లేకపోతే", "నా పార్సెల్", "ఉంచుతారా?"],
        en: [
          { text: "Would", role: "action" },
          { text: "you", role: "who" },
          { text: "mind keeping", role: "action" },
          { text: "my parcel?", role: "what" },
        ],
      },
      examples: [
        { en: "Would you mind keeping my parcel?", te: "అభ్యంతరం లేకపోతే నా పార్సెల్ మీ దగ్గర ఉంచుతారా?" },
        { en: "Would you mind closing the gate, please?", te: "కొంచెం గేటు వేస్తారా, ప్లీజ్?" },
        { en: "Not at all. I'll keep it safe.", te: "అభ్యంతరం ఏం లేదు. జాగ్రత్తగా ఉంచుతాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking and answering", te: "అడగడం, జవాబు చెప్పడం" },
      items: [
        {
          form: "Would you mind …ing?",
          useFor: { en: "Asking very politely; the verb takes -ing.", te: "చాలా మర్యాదగా అడగడం; verb కి -ing వస్తుంది." },
          example: { en: "Would you mind waiting a minute?", te: "ఒక్క నిమిషం ఆగుతారా?" },
        },
        {
          form: "Not at all.",
          useFor: { en: "Yes, I'll do it gladly.", te: "సరే, సంతోషంగా చేస్తాను అని." },
          example: { en: "Not at all. I'll keep it safe.", te: "అభ్యంతరం ఏం లేదు. జాగ్రత్తగా ఉంచుతాను." },
        },
        {
          form: "Of course not.",
          useFor: { en: "Also yes: it is no trouble.", te: "ఇది కూడా 'సరే' అనే: ఏ ఇబ్బందీ లేదు." },
          example: { en: "Of course not. Give it to me.", te: "అభ్యంతరం ఏముంది. నాకివ్వండి." },
        },
        {
          form: "Sorry, I …",
          useFor: { en: "Saying you can't, with a reason.", te: "చేయలేనని, కారణంతో మర్యాదగా చెప్పడం." },
          example: { en: "Sorry, I'm going out this evening.", te: "సారీ, నేను ఈ సాయంత్రం బయటికి వెళ్తున్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Would you mind to keep my parcel?",
      right: "Would you mind keeping my parcel?",
      why: {
        en: "Mind is always followed by the -ing form, never by to.",
        te: "mind తర్వాత ఎప్పుడూ -ing రూపమే వస్తుంది, to రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am not minding at all.",
      right: "I don't mind at all.",
      why: {
        en: "Mind is a feeling, not an action, so it does not take am and -ing.",
        te: "mind అనేది మనసులో భావన, చేసే పని కాదు; అందుకే am, -ing రావు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Ask your neighbour very politely to close the gate.",
        te: "గేటు వేయమని పక్కింటివారిని చాలా మర్యాదగా అడగండి.",
      },
      options: ["Would you mind closing the gate?", "Would you mind to close the gate?", "Why is the gate open? Close it."],
      answer: 0,
      why: {
        en: "After would you mind, the verb takes -ing; an order first is rude.",
        te: "would you mind తర్వాత verb కి -ing వస్తుంది; ముందే ఆర్డర్ వేస్తే మొరటుగా ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "be",
      sentence: "Sorry, I ___ not at home this afternoon.",
      te: "సారీ, ఈ మధ్యాహ్నం నేను ఇంట్లో ఉండటం లేదు.",
      options: ["am", "is", "be"],
      answer: 0,
      why: {
        en: "With I, always use am; Telugu ఉండటం లేదు hides it, but English needs it.",
        te: "I తో ఎప్పుడూ am; తెలుగులో విడిగా కనిపించకపోయినా ఇంగ్లీష్‌లో అది తప్పనిసరి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "You ask: Would you mind keeping my parcel? Your neighbour says: Not at all. What does she mean?",
        te: "Would you mind keeping my parcel? అని అడిగారు. పక్కింటావిడ Not at all అన్నారు. అర్థం ఏంటి?",
      },
      options: ["Yes, she will keep it.", "No, she won't keep it.", "She has no parcel."],
      answer: 0,
      why: {
        en: "Mind means it troubles you, so not at all means she is happy to help.",
        te: "mind అంటే అభ్యంతరం; not at all అంటే అస్సలు అభ్యంతరం లేదు, సంతోషంగా సాయం చేస్తారు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Would you mind open the gate, please?",
      wrongIndex: 3,
      fix: "Would you mind opening the gate, please?",
      why: {
        en: "After mind the verb needs -ing; the plain form is wrong here.",
        te: "mind తర్వాత verb కి -ing కావాలి; మామూలు రూపం ఇక్కడ సరిపోదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You are going out. Ask your neighbour very politely to keep your parcel.",
        te: "మీరు బయటికి వెళ్తున్నారు. మీ పార్సెల్ ఉంచమని పక్కింటివారిని చాలా మర్యాదగా అడగండి.",
      },
      expected: ["Would you mind keeping my parcel?", "Would you mind keeping my parcel, please?", "Could you please keep my parcel?"],
      options: ["Would you mind keeping my parcel?", "Would you mind to keep my parcel?", "Keep my parcel. I am going out."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Your neighbour asks: Would you mind signing for my courier? Say yes, gladly.",
        te: "Would you mind signing for my courier? అని పక్కింటివారు అడిగారు. సంతోషంగా చేస్తానని చెప్పండి.",
      },
      expected: ["Not at all. I'll do it.", "Not at all.", "Of course not."],
      options: ["Not at all. I'll do it.", "I am not minding. I'll do it.", "Yes, I mind. I'll do it."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Keeping a parcel", te: "పార్సెల్ ఉంచడం" },
    scene: {
      en: "You have to go to the bank, but a parcel is coming. Imran, your neighbour, is outside.",
      te: "మీరు బ్యాంక్‌కి వెళ్ళాలి, కానీ ఒక పార్సెల్ రాబోతోంది. పక్కింటి ఇమ్రాన్ గారు బయట ఉన్నారు.",
    },
    partner: { en: "Imran (neighbour)", te: "ఇమ్రాన్ (పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "Would you mind …?", te: "Would you mind … అని అడగడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Going out somewhere?",
        te: "నమస్కారం! ఎక్కడికైనా బయటికి వెళ్తున్నారా?",
        hint: { en: "Say yes, and say where you are going.", te: "అవునని, ఎక్కడికి వెళ్తున్నారో చెప్పండి." },
        replies: [
          { say: "Yes, I'm going to the bank.", good: true, skill: "polite" },
          { say: "Yes, I am going to bank.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
      {
        partner: "Oh, okay. Do you need anything?",
        te: "ఓ, సరే. ఏమైనా కావాలా?",
        hint: { en: "Ask him very politely to keep your parcel.", te: "మీ పార్సెల్ ఉంచమని ఆయనని చాలా మర్యాదగా అడగండి." },
        replies: [
          { say: "Would you mind keeping my parcel?", good: true, skill: "ask" },
          { say: "Would you mind to keep my parcel?", good: false, skill: "ask" },
          {
            say: "Keep my parcel. I'll take it later.",
            good: false,
            skill: "polite",
            react: { en: "Hmm. Am I your watchman?", te: "హ్మ్. నేనేమైనా మీ వాచ్‌మెన్‌నా?" },
          },
        ],
      },
      {
        partner: "Not at all. When will it come?",
        te: "అభ్యంతరం ఏం లేదు. ఎప్పుడు వస్తుంది?",
        hint: { en: "Tell him when the courier is coming.", te: "కొరియర్ ఎప్పుడు వస్తుందో చెప్పండి." },
        replies: [
          { say: "The courier will come at four o'clock.", good: true, skill: "ask" },
          { say: "It will come at about four.", good: true, skill: "ask" },
          { say: "The courier will coming at four.", good: false, skill: "ask" },
        ],
      },
      {
        partner: "Fine. I'll be at home. I'll keep it safe.",
        te: "సరే. నేను ఇంట్లోనే ఉంటాను. జాగ్రత్తగా ఉంచుతాను.",
        hint: { en: "Thank him, and say you'll collect it in the evening.", te: "థాంక్స్ చెప్పి, సాయంత్రం తీసుకుంటానని చెప్పండి." },
        replies: [
          { say: "Thank you so much. I'll collect it this evening.", good: true, skill: "polite" },
          { say: "Thank you so much. I'll collect it today evening.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
