import type { Lesson } from "../../types";

/** Week 65, Day 2 (CURRICULUM §5): housewarming wishes and praising a home politely — The rooms are so bright and airy. */
export const day: Lesson = {
  id: "congratulations-on-the-new-home",
  kind: "lesson",
  title: { en: "Congratulations on the New Home", te: "గృహప్రవేశం" },
  subtitle: "housewarming wishes; praising a home",
  summary: {
    en: "Learn to wish a neighbour on a new home and praise it politely: It's beautiful. The rooms are so bright and airy.",
    te: "కొత్త ఇంటికి శుభాకాంక్షలు చెప్పడం, ఇంటిని మర్యాదగా పొగడటం నేర్చుకుందాం: It's beautiful. The rooms are so bright and airy.",
  },
  seo: {
    title: "Housewarming Wishes in English for Telugu Speakers",
    description:
      "Say Congratulations on your new home and The rooms are so bright and airy. Simple lessons for Telugu speakers on praising a new home.",
  },
  pattern: [
    { text: "The rooms", role: "who" },
    { text: "are", role: "action" },
    { text: "so bright and airy", role: "what" },
  ],
  core: [
    { en: "Congratulations on your new home. It's beautiful.", te: "కొత్త ఇంటికి అభినందనలు. ఇల్లు చాలా అందంగా ఉంది.", extra: ["for"] },
    { en: "The rooms are so bright and airy.", te: "గదులు చాలా వెలుతురుగా, గాలి బాగా వచ్చేలా ఉన్నాయి.", extra: ["is"] },
    { en: "The kitchen is very spacious.", te: "వంటగది చాలా విశాలంగా ఉంది.", extra: ["are"] },
    { en: "When did you move in?", te: "కొత్త ఇంట్లోకి ఎప్పుడు వచ్చారు?", extra: ["moved"] },
    { en: "We have been here since March.", te: "మార్చి నుంచి మేము ఇక్కడే ఉంటున్నాం.", extra: ["are"] },
    { en: "I love the view from your balcony.", te: "మీ బాల్కనీ నుంచి కనిపించే దృశ్యం నాకు చాలా నచ్చింది.", extra: ["loving"] },
    { en: "May you be very happy in your new home.", te: "కొత్త ఇంట్లో మీరు ఎప్పుడూ సంతోషంగా ఉండాలి.", extra: ["are"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look around your own home. Praise one room aloud, the way a guest would: The … is so bright.",
    te: "మీ సొంత ఇంటిని ఒకసారి చూడండి. అతిథి పొగిడినట్టు ఒక గదిని గట్టిగా పొగడండి: The … is so bright.",
  },
  words: [
    { en: "airy", te: "గాలి బాగా వచ్చే" },
    { en: "spacious", te: "విశాలమైన" },
    { en: "balcony", te: "బాల్కనీ" },
    { en: "bright", te: "వెలుతురుగా ఉన్న" },
    { en: "move in", te: "కొత్త ఇంట్లోకి మారడం" },
  ],
  grammar: ["am-is-are", "present-perfect", "present-simple"],
  topics: ["home", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Praising a new home", te: "కొత్త ఇంటిని పొగడటం" },
      body: {
        en: "First congratulate, then praise one or two real things: the rooms, the light, the kitchen. Use is for one thing and are for more than one.",
        te: "ముందు అభినందనలు చెప్పి, తర్వాత నిజంగా నచ్చిన ఒకటి రెండు విషయాలు పొగడండి. ఒక్కదానికి is, ఎక్కువ వాటికి are.",
      },
      bridge: {
        te: ["గదులు", "చాలా వెలుతురుగా", "ఉన్నాయి"],
        en: [
          { text: "The rooms", role: "who" },
          { text: "are", role: "action" },
          { text: "so bright and airy", role: "what" },
        ],
      },
      examples: [
        { en: "Congratulations on your new home. It's beautiful.", te: "కొత్త ఇంటికి అభినందనలు. ఇల్లు చాలా అందంగా ఉంది." },
        { en: "The rooms are so bright and airy.", te: "గదులు చాలా వెలుతురుగా, గాలి బాగా వచ్చేలా ఉన్నాయి." },
        { en: "The kitchen is very spacious.", te: "వంటగది చాలా విశాలంగా ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Praise, ask, bless", te: "పొగడటం, అడగటం, దీవించడం" },
      items: [
        {
          form: "The … is so …",
          useFor: { en: "Praise one thing.", te: "ఒక్క దాన్ని పొగడటానికి." },
          example: { en: "The kitchen is very spacious.", te: "వంటగది చాలా విశాలంగా ఉంది." },
        },
        {
          form: "The … are so …",
          useFor: { en: "Praise more than one thing.", te: "ఒకటి కంటే ఎక్కువ వాటిని పొగడటానికి." },
          example: { en: "The rooms are so bright and airy.", te: "గదులు చాలా వెలుతురుగా, గాలి బాగా వచ్చేలా ఉన్నాయి." },
        },
        {
          form: "When did you move in?",
          useFor: { en: "Ask about the day they came to live here.", te: "ఇక్కడికి ఎప్పుడు వచ్చారని అడగడానికి." },
          example: { en: "When did you move in?", te: "కొత్త ఇంట్లోకి ఎప్పుడు వచ్చారు?" },
        },
        {
          form: "May you be happy in …",
          useFor: { en: "A blessing as you leave.", te: "వెళ్ళేటప్పుడు దీవించడానికి." },
          example: { en: "May you be very happy in your new home.", te: "కొత్త ఇంట్లో మీరు ఎప్పుడూ సంతోషంగా ఉండాలి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am liking your new home very much.",
      right: "I like your new home very much.",
      why: {
        en: "Like is a feeling, not an action going on, so it takes no -ing.",
        te: "like అనేది మనసులో భావం, జరుగుతున్న పని కాదు; అందుకే -ing రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "duration",
      wrong: "We are here since March.",
      right: "We have been here since March.",
      why: {
        en: "From a past time until now, English needs have been; Telugu uses the present.",
        te: "గతంలో మొదలై ఇప్పటిదాకా ఉంటే have been కావాలి; తెలుగులో present తోనే అంటాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Your neighbour shows you the new kitchen. Praise it.",
        te: "పక్కింటివారు కొత్త వంటగది చూపిస్తున్నారు. దాన్ని పొగడండి.",
      },
      options: ["The kitchen is very spacious.", "The kitchen very spacious.", "The kitchen are very spacious."],
      answer: 0,
      why: {
        en: "One kitchen takes is; Telugu needs no such word, but English always does.",
        te: "ఒక్క వంటగది, అందుకే is; తెలుగులో ఇలాంటి పదం అక్కర్లేదు, ఇంగ్లీష్‌లో తప్పకుండా కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The new house ___ a lovely garden in front.",
      te: "కొత్త ఇంటి ముందు చక్కటి తోట ఉంది.",
      options: ["has", "have", "is having"],
      answer: 0,
      why: {
        en: "One house takes has, not have; having a garden is a fact, so no -ing.",
        te: "ఒక్క ఇల్లు, అందుకే have కాదు has; తోట ఉండటం ఒక వాస్తవం, కాబట్టి -ing రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "A guest asks how long you have lived in your home. Say twenty years.",
        te: "మీ ఇంట్లో ఎంత కాలంగా ఉంటున్నారని ఒక అతిథి అడుగుతున్నారు. ఇరవై ఏళ్ళు అని చెప్పండి.",
      },
      options: ["I have lived here for twenty years.", "I am living here for twenty years.", "I have lived here since twenty years."],
      answer: 0,
      why: {
        en: "Up to now takes have with the verb, and a length of time takes for, not since.",
        te: "ఇప్పటిదాకా అయితే verb తో have; ఎంత కాలమో చెప్పేటప్పుడు since కాదు, for.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Is there lift in this building?",
      wrongIndex: 2,
      fix: "Is there a lift in this building?",
      why: {
        en: "One lift needs a before it; Telugu has no word like a, so it is easy to miss.",
        te: "ఒక్క lift ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు, అందుకే మర్చిపోతాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Your neighbour asks: How do you like our new home? Answer warmly.",
        te: "మా కొత్త ఇల్లు ఎలా ఉంది అని పక్కింటివారు అడుగుతున్నారు. ఆప్యాయంగా జవాబు చెప్పండి.",
      },
      expected: ["I really like your new home.", "I like your new home very much.", "I really like it. It's beautiful."],
      options: ["I really like your new home.", "I am really liking your new home.", "I really likes your new home."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask your neighbour when they came to live in the new home.",
        te: "కొత్త ఇంట్లోకి ఎప్పుడు వచ్చారని పక్కింటివారిని అడగండి.",
      },
      expected: ["When did you move in?", "When did you move in here?", "Which day did you move in?"],
      options: ["When did you move in?", "When you moved in?", "When did you moved in?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the housewarming", te: "గృహప్రవేశంలో" },
    scene: {
      en: "Your neighbour Salma has moved into a new flat. She invites you to the housewarming, and you take a small gift.",
      te: "మీ పక్కింటి సల్మా గారు కొత్త ఫ్లాట్‌లోకి మారారు. గృహప్రవేశానికి మిమ్మల్ని పిలిచారు; మీరు ఒక చిన్న బహుమతి తీసుకెళ్ళారు.",
    },
    partner: { en: "Salma (your neighbour)", te: "సల్మా (మీ పక్కింటివారు)" },
    skills: [
      { id: "praise", label: { en: "Praising a home", te: "ఇంటిని పొగడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Welcome! Please come in. Thank you for coming.",
        te: "రండి! లోపలికి రండి. వచ్చినందుకు థ్యాంక్స్.",
        hint: { en: "Congratulate her on the new home, and give her your gift.", te: "కొత్త ఇంటికి అభినందనలు చెప్పి, మీ బహుమతి ఇవ్వండి." },
        replies: [
          { say: "Congratulations on your new home! This is a small gift for you.", good: true, skill: "polite" },
          { say: "Congratulations for your new home! This is a small gift for you.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
      {
        partner: "Thank you so much! Come, let me show you around.",
        te: "చాలా థ్యాంక్స్! రండి, ఇల్లంతా చూపిస్తాను.",
        hint: { en: "Praise the rooms: the light and the air.", te: "గదుల్ని పొగడండి: వెలుతురు, గాలి." },
        replies: [
          { say: "The rooms are so bright and airy.", good: true, skill: "praise" },
          { say: "The rooms is so bright and airy.", good: false, skill: "praise", fixIt: "be" },
          {
            say: "It's nice, but my house is bigger.",
            good: false,
            skill: "polite",
            react: { en: "Oh! Well, this one is enough for us.", te: "ఓ! సరే, మాకు ఇది చాలు లెండి." },
          },
        ],
      },
      {
        partner: "And this is the balcony. We sit here in the evenings.",
        te: "ఇదే బాల్కనీ. సాయంత్రాలు మేము ఇక్కడ కూర్చుంటాం.",
        hint: { en: "Say you love the view, and ask when she moved in.", te: "దృశ్యం చాలా నచ్చిందని చెప్పి, ఎప్పుడు ఇక్కడికి వచ్చారని అడగండి." },
        replies: [
          { say: "I love the view! When did you move in?", good: true, skill: "praise" },
          { say: "I am loving the view! When you moved in?", good: false, skill: "praise", fixIt: "state-ing" },
        ],
      },
      {
        partner: "We have been here since last Sunday. Please stay for lunch.",
        te: "పోయిన ఆదివారం నుంచి ఇక్కడే ఉంటున్నాం. భోజనం చేసి వెళ్ళండి.",
        hint: { en: "Thank her, and bless her in the new home.", te: "థ్యాంక్స్ చెప్పి, కొత్త ఇంట్లో సంతోషంగా ఉండాలని దీవించండి." },
        replies: [
          { say: "Thank you. May you be very happy in your new home.", good: true, skill: "polite" },
          { say: "Thank you. May you are very happy in your new home.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
