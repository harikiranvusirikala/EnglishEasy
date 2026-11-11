import type { Lesson } from "../../types";

/** Week 23, Day 3 (CURRICULUM §4): asking for changes — less spicy, without onions, extra chutney. */
export const day: Lesson = {
  id: "less-spicy-please",
  kind: "lesson",
  title: { en: "Less Spicy, Please", te: "కారం తక్కువ" },
  subtitle: "less, without, extra",
  summary: {
    en: "Learn to ask for small changes to your food: Less spicy, please. Can I have it without onions?",
    te: "మీ భోజనంలో చిన్న మార్పులు అడగడం నేర్చుకుందాం: Less spicy, please. Can I have it without onions?",
  },
  seo: {
    title: "Less Spicy, Please: Asking for Changes in English for Telugu Speakers",
    description:
      "Say Less spicy, please and Can I have it without onions? Simple lessons for Telugu speakers on asking for changes to a dish.",
  },
  pattern: [
    { text: "Can", role: "action" },
    { text: "I", role: "who" },
    { text: "have it", role: "action" },
    { text: "without onions?", role: "what" },
  ],
  core: [
    { en: "Less spicy, please.", te: "కారం తక్కువగా వేయండి.", extra: ["little"] },
    { en: "Can I have it without onions?", te: "ఉల్లిపాయలు లేకుండా ఇస్తారా?", extra: ["no"] },
    { en: "Coffee without sugar, please.", te: "చక్కెర లేకుండా కాఫీ ఇవ్వండి.", extra: ["with"] },
    { en: "Can I have extra chutney?", te: "చట్నీ ఇంకొంచెం ఇస్తారా?", extra: ["more"] },
    { en: "Please use less oil.", te: "నూనె తక్కువగా వేయండి.", extra: ["little"] },
    { en: "This curry is too spicy for me.", te: "ఈ కూర నాకు మరీ కారంగా ఉంది.", extra: ["much"] },
    { en: "A plain dosa with ghee, please.", te: "నెయ్యి వేసి ఒక ప్లెయిన్ దోసె ఇవ్వండి.", extra: ["the"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Next time you have tea or coffee, ask for it your way: less sugar, or without sugar.",
    te: "ఈసారి టీ లేదా కాఫీ తాగేటప్పుడు మీకు నచ్చినట్టు అడగండి: less sugar, లేదా without sugar.",
  },
  words: [
    { en: "less", te: "తక్కువ" },
    { en: "without", te: "లేకుండా" },
    { en: "mild", te: "కారం తక్కువగా, తేలికగా" },
    { en: "plain", te: "ప్లెయిన్, ఏమీ కలపని" },
    { en: "ghee", te: "నెయ్యి" },
  ],
  grammar: ["can-could", "politeness-softening", "am-is-are"],
  topics: ["food", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Your food, your way", te: "మీకు నచ్చినట్టు" },
      body: {
        en: "You can ask for small changes. Less means not so much: less spicy, less oil. Without means none at all: without onions. Extra means a little more: extra chutney.",
        te: "చిన్న మార్పులు అడగొచ్చు. less అంటే తక్కువగా: less spicy, less oil. without అంటే అసలు వద్దు: without onions. extra అంటే ఇంకొంచెం: extra chutney.",
      },
      bridge: {
        te: ["ఉల్లిపాయలు లేకుండా", "ఇస్తారా?"],
        en: [
          { text: "Can", role: "action" },
          { text: "I", role: "who" },
          { text: "have it", role: "action" },
          { text: "without onions?", role: "what" },
        ],
      },
      examples: [
        { en: "Less spicy, please.", te: "కారం తక్కువగా వేయండి." },
        { en: "Can I have it without onions?", te: "ఉల్లిపాయలు లేకుండా ఇస్తారా?" },
        { en: "Can I have extra chutney?", te: "చట్నీ ఇంకొంచెం ఇస్తారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Less, without, extra", te: "less, without, extra వాడకం" },
      items: [
        {
          form: "less",
          useFor: { en: "Not so much.", te: "తక్కువగా." },
          example: { en: "Please use less oil.", te: "నూనె తక్కువగా వేయండి." },
        },
        {
          form: "without",
          useFor: { en: "None at all.", te: "అసలు వద్దు." },
          example: { en: "Coffee without sugar, please.", te: "చక్కెర లేకుండా కాఫీ ఇవ్వండి." },
        },
        {
          form: "extra",
          useFor: { en: "A little more.", te: "ఇంకొంచెం ఎక్కువగా." },
          example: { en: "Can I have extra chutney?", te: "చట్నీ ఇంకొంచెం ఇస్తారా?" },
        },
        {
          form: "mild",
          useFor: { en: "Not spicy, easy on the stomach.", te: "కారం లేకుండా, కడుపుకి తేలికగా." },
          example: { en: "Do you have something mild?", te: "కారం తక్కువగా ఉండేది ఏమైనా ఉందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "This curry too spicy.",
      right: "This curry is too spicy.",
      why: {
        en: "Telugu can say కూర చాలా కారం with no verb, but English needs is.",
        te: "తెలుగులో 'కూర చాలా కారం' అని verb లేకుండా అంటాం; ఇంగ్లీష్‌లో is తప్పనిసరి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Make it little spicy.",
      right: "Make it less spicy, please.",
      why: {
        en: "A little spicy means with some chilli; less spicy means lower than usual.",
        te: "a little spicy అంటే కొంచెం కారంగా; less spicy అంటే మామూలు కంటే తక్కువ కారం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "You don't want any onions. What do you say?", te: "మీకు ఉల్లిపాయలు అసలు వద్దు. ఏమంటారు?" },
      options: ["Can I have it without onions?", "Can I have it less onions?", "Can I have it no onions?"],
      answer: 0,
      why: {
        en: "Without means none at all, so it fits here.",
        te: "without అంటే అసలు వద్దు అని, అందుకే ఇక్కడ సరిపోతుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "This curry ___ too spicy for me.",
      te: "ఈ కూర నాకు మరీ కారంగా ఉంది.",
      options: ["is", "are", "has"],
      answer: 0,
      why: {
        en: "One curry takes is; Telugu ఉంది becomes is here.",
        te: "కూర ఒక్కటే, అందుకే is; ఇక్కడ 'ఉంది' అంటే is.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The waiter asks: Normal or less spicy? You can't eat much chilli. What do you say?",
        te: "వెయిటర్ Normal or less spicy? అని అడిగారు. మీరు కారం ఎక్కువ తినలేరు. ఏమంటారు?",
      },
      options: ["Less spicy, please.", "Extra spicy, please.", "Little spicy, please."],
      answer: 0,
      why: {
        en: "Less spicy means lower than usual; a little spicy means some chilli.",
        te: "less spicy అంటే మామూలు కంటే తక్కువ కారం; a little spicy అంటే కొంచెం కారం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "A plain dosa with a ghee, please.",
      wrongIndex: 4,
      fix: "A plain dosa with ghee, please.",
      why: {
        en: "Ghee is not counted, like water or oil, so it takes no a.",
        te: "నెయ్యిని నీళ్ళు, నూనె లాగా లెక్కపెట్టం, అందుకే ముందు a రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Ask for your food with less chilli.",
        te: "మీ భోజనంలో కారం తక్కువగా వేయమని అడగండి.",
      },
      expected: ["Less spicy, please.", "Make it less spicy, please.", "Can I have it less spicy?"],
      options: ["Less spicy, please.", "Spicy less, please.", "Little spicy, please."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "The curry has too much chilli for you. Tell the waiter.",
        te: "కూరలో మీకు కారం మరీ ఎక్కువైంది. వెయిటర్‌కి చెప్పండి.",
      },
      expected: ["This curry is too spicy for me.", "This curry is too spicy.", "It is too spicy for me."],
      options: ["This curry is too spicy for me.", "This curry too spicy for me.", "This curry is too much spicy."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Breakfast your way", te: "మీకు నచ్చినట్టు టిఫిన్" },
    scene: {
      en: "At a small hotel, Satish cooks and takes the orders himself. Order your breakfast with changes.",
      te: "ఒక చిన్న హోటల్‌లో సతీష్ గారే వంట చేసి, ఆర్డర్లు తీసుకుంటారు. మార్పులతో మీ టిఫిన్ ఆర్డర్ చేయండి.",
    },
    partner: { en: "Satish (cook)", te: "సతీష్ (వంట చేసేవారు)" },
    voice: "b",
    skills: [{ id: "change", label: { en: "Asking for changes", te: "మార్పులు అడగడం" } }],
    turns: [
      {
        partner: "Good morning! What would you like today?",
        te: "నమస్కారం! ఈ రోజు ఏం కావాలి?",
        hint: { en: "Order a plain dosa, and ask for ghee on it.", te: "ఒక ప్లెయిన్ దోసె ఆర్డర్ చేసి, నెయ్యి వేయమని అడగండి." },
        replies: [
          { say: "A plain dosa with ghee, please.", good: true, skill: "change" },
          { say: "A plain dosa with a ghee, please.", good: false, skill: "change", fixIt: "article" },
        ],
      },
      {
        partner: "Sure. Our tomato chutney is a little spicy.",
        te: "సరే. మా టమాటా చట్నీ కొంచెం కారంగా ఉంటుంది.",
        hint: { en: "Ask if he has a chutney that is not spicy.", te: "కారం లేని చట్నీ ఏమైనా ఉందా అని అడగండి." },
        replies: [
          { say: "Do you have something mild?", good: true, skill: "change" },
          { say: "You have something mild?", good: false, skill: "change", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, coconut chutney is mild. Sambar also?",
        te: "ఉంది, కొబ్బరి చట్నీకి కారం ఉండదు. సాంబార్ కూడా కావాలా?",
        hint: { en: "Say yes, but ask for it with less chilli.", te: "కావాలని చెప్పి, కారం తక్కువగా అడగండి." },
        replies: [
          { say: "Yes, but less spicy, please.", good: true, skill: "change" },
          {
            say: "Yes, but don't make it spicy like last time!",
            good: false,
            skill: "change",
            react: { en: "Sorry about that! Today I'll make it mild.", te: "అప్పటి సంగతికి sorry అండీ! ఈ రోజు కారం తక్కువగా చేస్తాను." },
          },
        ],
      },
      {
        partner: "Okay. Do you want coffee too?",
        te: "సరే. కాఫీ కూడా కావాలా?",
        hint: { en: "Say yes, and ask for it with no sugar.", te: "కావాలని చెప్పి, చక్కెర లేకుండా అడగండి." },
        replies: [
          { say: "Yes, coffee without sugar, please. Thank you.", good: true, skill: "change" },
          { say: "Yes, coffee without no sugar, please.", good: false, skill: "change" },
        ],
      },
    ],
  },
};
