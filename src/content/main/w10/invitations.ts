import type { Lesson } from "../../types";

/** Week 10, Day 4 (CURRICULUM §3): invitations — invite, accept, decline kindly. */
export const day: Lesson = {
  id: "invitations",
  kind: "lesson",
  title: { en: "Would You Like to Come?", te: "ఆహ్వానాలు" },
  subtitle: "invite / accept / decline",
  summary: {
    en: "Learn to invite someone, say yes happily, and say no kindly with a reason.",
    te: "ఎవరినైనా ఆహ్వానించడం, సంతోషంగా ఒప్పుకోవడం, కారణంతో మర్యాదగా వద్దనడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Invitations in English for Telugu Speakers: Would You Like to Come?",
    description:
      "Say Would you like to come for lunch?, I'd love to and Sorry, I can't in English. Simple lessons for Telugu speakers on invitations.",
  },
  pattern: [
    { text: "Would you like", role: "action" },
    { text: "to come", role: "action" },
    { text: "for lunch?", role: "what" },
  ],
  core: [
    { en: "Would you like to come for lunch?", te: "మీరు భోజనానికి వస్తారా?", extra: ["coming"] },
    { en: "I'd love to.", te: "తప్పకుండా వస్తాను.", extra: ["loving"] },
    { en: "Sorry, I can't.", te: "క్షమించండి, రాలేను.", extra: ["don't"] },
    { en: "Please come to my house on Sankranti.", te: "సంక్రాంతికి మా ఇంటికి రండి.", extra: ["in"] },
    { en: "Thank you for inviting me.", te: "నన్ను పిలిచినందుకు థాంక్యూ.", extra: ["invite"] },
    { en: "Can my sister come too?", te: "మా చెల్లెలు కూడా రావచ్చా?", extra: ["comes"] },
    { en: "Sorry, I have another function.", te: "క్షమించండి, నాకు ఇంకో ఫంక్షన్ ఉంది.", extra: ["one"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Invite someone for tea or lunch in English: Would you like to come for …?",
    te: "ఎవరినైనా టీకి లేదా భోజనానికి ఇంగ్లీష్‌లో పిలవండి: Would you like to come for …?",
  },
  words: [
    { en: "invite", te: "ఆహ్వానించడం, పిలవడం" },
    { en: "Sankranti", te: "సంక్రాంతి" },
    { en: "another", te: "ఇంకొక" },
    { en: "dinner", te: "రాత్రి భోజనం" },
  ],
  grammar: ["would-like", "politeness-softening", "can-could"],
  topics: ["festivals", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Invite, accept, say no kindly", te: "పిలవడం, ఒప్పుకోవడం, మర్యాదగా వద్దనడం" },
      body: {
        en: "Invite with Would you like to come …? Say yes with I'd love to. Say no kindly: Sorry, I can't, and give a short reason.",
        te: "ఆహ్వానించడానికి Would you like to come …? ఒప్పుకోవడానికి I'd love to. మర్యాదగా వద్దనడానికి Sorry, I can't, తర్వాత చిన్న కారణం.",
      },
      bridge: {
        te: ["మీరు", "భోజనానికి", "వస్తారా?"],
        en: [
          { text: "Would you like", role: "action" },
          { text: "to come", role: "action" },
          { text: "for lunch?", role: "what" },
        ],
      },
      examples: [
        { en: "Would you like to come for lunch?", te: "మీరు భోజనానికి వస్తారా?" },
        { en: "I'd love to.", te: "తప్పకుండా వస్తాను." },
        { en: "Sorry, I have another function.", te: "క్షమించండి, నాకు ఇంకో ఫంక్షన్ ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Inviting and answering", te: "పిలవడం, జవాబు చెప్పడం" },
      items: [
        {
          form: "Would you like to come …?",
          useFor: { en: "To invite someone politely.", te: "మర్యాదగా ఆహ్వానించడానికి." },
          example: { en: "Please come to my house on Sankranti.", te: "సంక్రాంతికి మా ఇంటికి రండి." },
        },
        {
          form: "I'd love to",
          useFor: { en: "To say yes happily.", te: "సంతోషంగా ఒప్పుకోవడానికి." },
          example: { en: "Thank you for inviting me.", te: "నన్ను పిలిచినందుకు థాంక్యూ." },
        },
        {
          form: "Sorry, I can't + reason",
          useFor: { en: "To say no kindly.", te: "మర్యాదగా వద్దనడానికి." },
          example: { en: "Sorry, I have another function.", te: "క్షమించండి, నాకు ఇంకో ఫంక్షన్ ఉంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Would you like to coming?",
      right: "Would you like to come?",
      why: {
        en: "After like to, the plain action word: come.",
        te: "like to తర్వాత మామూలు పని పదం: come.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "No, I won't come.",
      right: "Sorry, I can't.",
      why: {
        en: "No, I won't come sounds rude. Say sorry and give a reason.",
        te: "No, I won't come అంటే కటువుగా ఉంటుంది. Sorry అని, కారణం చెప్పండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Invite your friend for lunch.", te: "మీ స్నేహితుడిని భోజనానికి పిలవండి." },
      options: ["Would you like to come for lunch?", "Would you like coming for lunch?", "You like come for lunch?"],
      answer: 0,
      why: {
        en: "Would you like to come …?",
        te: "Would you like to come …? అని పిలవాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Thank you for ___ me.",
      te: "నన్ను పిలిచినందుకు థాంక్యూ.",
      options: ["inviting", "invite", "invited"],
      answer: 0,
      why: {
        en: "After for, use -ing: inviting.",
        te: "for తర్వాత -ing: inviting.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "You can't go. Say no kindly.", te: "మీరు వెళ్ళలేరు. మర్యాదగా వద్దనండి." },
      options: ["Sorry, I can't. I have another function.", "No, I won't come.", "Not coming."],
      answer: 0,
      why: {
        en: "Say sorry and give a reason.",
        te: "Sorry అని, కారణం చెప్పాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Would you like to coming for lunch?",
      wrongIndex: 4,
      fix: "Would you like to come for lunch?",
      why: {
        en: "Like to + come.",
        te: "like to తర్వాత come.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend invites you to dinner. Say yes happily.",
        te: "మీ స్నేహితులు మిమ్మల్ని రాత్రి భోజనానికి పిలిచారు. సంతోషంగా ఒప్పుకోండి.",
      },
      expected: ["I'd love to.", "I would love to.", "Yes, I'd love to."],
      options: ["I'd love to.", "I'd loving to.", "I love to coming."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Invite your neighbour to your house on Sankranti.",
        te: "సంక్రాంతికి మీ ఇంటికి రమ్మని పొరుగువారిని పిలవండి.",
      },
      expected: ["Please come to my house on Sankranti.", "Would you like to come on Sankranti?"],
      options: ["Please come to my house on Sankranti.", "Please come to my house in Sankranti.", "Please coming to my house on Sankranti."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Sankranti lunch", te: "సంక్రాంతి భోజనం" },
    scene: {
      en: "Invite your friend Usha for lunch on Sankranti.",
      te: "మీ స్నేహితురాలు ఉషను సంక్రాంతి భోజనానికి పిలవండి.",
    },
    partner: { en: "Usha (a friend)", te: "ఉష (స్నేహితురాలు)" },
    skills: [{ id: "invite", label: { en: "Inviting", te: "ఆహ్వానించడం" } }],
    turns: [
      {
        partner: "Hi! How are you?",
        te: "హాయ్! ఎలా ఉన్నారు?",
        hint: { en: "Invite her: Would you like to come for lunch?", te: "ఆహ్వానించండి: Would you like to come for lunch?" },
        replies: [
          { say: "Would you like to come for lunch?", good: true, skill: "invite" },
          { say: "Would you like coming for lunch?", good: false, skill: "invite" },
        ],
      },
      {
        partner: "Oh, when?",
        te: "ఓ, ఎప్పుడు?",
        hint: { en: "Say: On Sankranti, at one o'clock.", te: "ఇలా చెప్పండి: On Sankranti, at one o'clock." },
        replies: [
          { say: "On Sankranti, at one o'clock.", good: true, skill: "invite" },
          { say: "In Sankranti, at one o'clock.", good: false, skill: "invite" },
        ],
      },
      {
        partner: "I'd love to! Can my sister come?",
        te: "తప్పకుండా! మా చెల్లెలు కూడా రావచ్చా?",
        hint: { en: "Say: Yes, of course. Please bring her.", te: "ఇలా చెప్పండి: Yes, of course. Please bring her." },
        replies: [
          { say: "Yes, of course. Please bring her.", good: true, skill: "invite" },
          { say: "Yes, of course. Please bring she.", good: false, skill: "invite" },
        ],
      },
      {
        partner: "Thank you for inviting us!",
        te: "మమ్మల్ని పిలిచినందుకు థాంక్యూ!",
        hint: { en: "Say: You are welcome. See you on Sankranti!", te: "ఇలా చెప్పండి: You are welcome. See you on Sankranti!" },
        replies: [
          { say: "You are welcome. See you on Sankranti!", good: true, skill: "invite" },
          { say: "You are welcome. See you in Sankranti!", good: false, skill: "invite" },
        ],
      },
    ],
  },
};
