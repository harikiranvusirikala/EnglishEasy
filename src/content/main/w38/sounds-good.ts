import type { Lesson } from "../../types";

/** Week 38, Day 4 (CURRICULUM §4): agreeing to a plan and saying no kindly — Sounds good! Sorry, I'm busy on Sunday. */
export const day: Lesson = {
  id: "sounds-good",
  kind: "lesson",
  title: { en: "Sounds Good!", te: "బాగుంది!" },
  subtitle: "agreeing and saying no",
  summary: {
    en: "Learn to say yes to a plan, and no kindly: Sounds good! Sorry, I'm busy on Sunday.",
    te: "ప్లాన్‌కి సరే అనడం, కుదరకపోతే మర్యాదగా చెప్పడం నేర్చుకుందాం: Sounds good! Sorry, I'm busy on Sunday.",
  },
  seo: {
    title: "Saying Yes and No to Plans in English for Telugu Speakers",
    description:
      "Say Sounds good! and Sorry, I'm busy on Sunday. Simple lessons for Telugu speakers on saying yes or no kindly to a friend's plan.",
  },
  pattern: [
    { text: "Sorry,", role: "what" },
    { text: "I'm", role: "who" },
    { text: "busy", role: "action" },
    { text: "on Sunday", role: "when" },
  ],
  core: [
    { en: "Sounds good! See you there.", te: "బాగుంది! అక్కడ కలుద్దాం.", extra: ["Sound"] },
    { en: "Sorry, I'm busy on Sunday.", te: "సారీ, ఆదివారం నేను బిజీ.", extra: ["in"] },
    { en: "That's a good idea!", te: "మంచి ఆలోచన!", extra: ["very"] },
    { en: "I'd love to, but I can't.", te: "రావాలనే ఉంది, కానీ కుదరదు.", extra: ["can"] },
    { en: "Maybe some other time.", te: "ఇంకోసారి చూద్దాం.", extra: ["times"] },
    { en: "Yes, I'm free. Shall I book four tickets?", te: "సరే, నేను ఖాళీ. నాలుగు టికెట్లు బుక్ చేయనా?", extra: ["ticket"] },
    { en: "Sorry, I can't come. I have a doctor's appointment.", te: "సారీ, రాలేను. డాక్టర్ అపాయింట్‌మెంట్ ఉంది.", extra: ["an"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When someone suggests something today, answer with Sounds good! or That's a good idea!",
    te: "ఈ రోజు ఎవరైనా ఏదైనా సూచిస్తే Sounds good! లేదా That's a good idea! అని జవాబు చెప్పండి.",
  },
  words: [
    { en: "sounds good", te: "బాగుంది, సరే" },
    { en: "good idea", te: "మంచి ఆలోచన" },
    { en: "be there", te: "అక్కడికి వస్తాను, అక్కడ ఉంటాను" },
    { en: "maybe", te: "బహుశా, చూద్దాం" },
    { en: "some other time", te: "ఇంకోసారి" },
  ],
  grammar: ["politeness-softening", "can-could", "plurals-countable"],
  topics: ["people", "feelings", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Yes and no, kindly", te: "సరే, కుదరదు: మర్యాదగా" },
      body: {
        en: "To say yes to a plan, say Sounds good! or That's a good idea! To say no, start with Sorry, give a short reason, and offer some other time.",
        te: "ప్లాన్‌కి సరే అనాలంటే Sounds good! లేదా That's a good idea! అనండి. కుదరకపోతే Sorry తో మొదలుపెట్టి, చిన్న కారణం చెప్పి, ఇంకోసారి కలుద్దాం అనండి.",
      },
      bridge: {
        te: ["సారీ,", "ఆదివారం", "నేను", "బిజీ"],
        en: [
          { text: "Sorry,", role: "what" },
          { text: "I'm", role: "who" },
          { text: "busy", role: "action" },
          { text: "on Sunday", role: "when" },
        ],
      },
      examples: [
        { en: "Sounds good! See you there.", te: "బాగుంది! అక్కడ కలుద్దాం." },
        { en: "Sorry, I'm busy on Sunday.", te: "సారీ, ఆదివారం నేను బిజీ." },
        { en: "That's a good idea!", te: "మంచి ఆలోచన!" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Yes, maybe or no", te: "సరే, చూద్దాం, కుదరదు" },
      items: [
        {
          form: "Sounds good!",
          useFor: { en: "Say yes happily.", te: "సంతోషంగా సరే అనడానికి." },
          example: { en: "Sounds good! See you there.", te: "బాగుంది! అక్కడ కలుద్దాం." },
        },
        {
          form: "I'd love to, but …",
          useFor: { en: "Say no kindly, when you want to but can't.", te: "రావాలని ఉన్నా కుదరనప్పుడు, మర్యాదగా చెప్పడానికి." },
          example: { en: "I'd love to, but I can't.", te: "రావాలనే ఉంది, కానీ కుదరదు." },
        },
        {
          form: "Sorry, I can't …",
          useFor: { en: "Say no, with a short reason.", te: "చిన్న కారణంతో కుదరదని చెప్పడానికి." },
          example: { en: "Sorry, I can't come. I have a doctor's appointment.", te: "సారీ, రాలేను. డాక్టర్ అపాయింట్‌మెంట్ ఉంది." },
        },
        {
          form: "Maybe some other time.",
          useFor: { en: "Keep the plan for later.", te: "ఇంకోసారి కలుద్దాం అని చెప్పడానికి." },
          example: { en: "Maybe some other time.", te: "ఇంకోసారి చూద్దాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "That's good idea.",
      right: "That's a good idea.",
      why: {
        en: "One idea needs a before it; Telugu has no word like a.",
        te: "ఒక ఆలోచన కాబట్టి ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "No, I won't come.",
      right: "Sorry, I can't come.",
      why: {
        en: "I won't sounds like you do not want to come; I can't is kind.",
        te: "I won't అంటే రావడం ఇష్టం లేనట్టు వినిపిస్తుంది; Sorry, I can't అంటే మర్యాదగా ఉంటుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "Your friend says: Let's have biryani on Sunday! You like the idea. What do you say?",
        te: "ఆదివారం బిర్యానీ తిందాం! అని స్నేహితులు అన్నారు. మీకు నచ్చింది. ఏమంటారు?",
      },
      options: ["Sounds good!", "It is sounding good!", "It sounds well!"],
      answer: 0,
      why: {
        en: "Sound here is a state, so no -ing, and it takes good, not well.",
        te: "ఇక్కడ sound ఒక స్థితి, అందుకే -ing రాదు; దాని తర్వాత well కాదు, good వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "Shall I book four ___?",
      te: "నాలుగు టికెట్లు బుక్ చేయనా?",
      options: ["tickets", "ticket", "the ticket"],
      answer: 0,
      why: {
        en: "After four, the thing takes s; Telugu changes the end too.",
        te: "నాలుగు తర్వాత s కావాలి; తెలుగులోనూ టికెట్ కాదు, టికెట్లు అంటాం.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Morning Walk Friends",
      lines: [
        "Padma: Good morning, friends!",
        "Temple trip to Mangalagiri on Sunday.",
        "Bus leaves the bus stand at 6 am.",
        "Back home by 7 pm.",
        "Who's coming? Please reply by Friday.",
      ],
      prompt: { en: "Padma sent this to the group. When must you reply?", te: "పద్మ గారు గ్రూప్‌లో ఇది పంపారు. మీరు ఎప్పటిలోగా జవాబు ఇవ్వాలి?" },
      options: ["By Friday", "By Sunday", "By 6 am"],
      answer: 0,
      why: {
        en: "The last line asks everyone to answer by Friday, before the trip.",
        te: "చివరి లైన్‌లో Friday లోగా జవాబు ఇవ్వమని ఉంది, ప్రయాణానికి ముందే.",
      },
      say: "Please reply by Friday.",
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I'd love to, but I can't to come.",
      wrongIndex: 6,
      fix: "I'd love to, but I can't come.",
      why: {
        en: "After can or can't, the verb comes straight, with no to.",
        te: "can, can't తర్వాత verb నేరుగా వస్తుంది; to రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your friend says: Let's go to the beach on Sunday. Say yes happily.",
        te: "ఆదివారం బీచ్‌కి వెళ్దాం అని స్నేహితులు అన్నారు. సంతోషంగా సరే అనండి.",
      },
      expected: ["That's a good idea!", "Sounds good!", "Sounds good! I'll be there.", "Yes, let's go!"],
      options: ["That's a good idea!", "That's good idea!", "It's sounding good!"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "A friend invites you to a film on Sunday, but you are busy. Say no kindly.",
        te: "ఆదివారం సినిమాకి రమ్మని స్నేహితులు పిలిచారు, కానీ మీరు బిజీ. మర్యాదగా కుదరదని చెప్పండి.",
      },
      expected: [
        "Sorry, I'm busy on Sunday.",
        "I'd love to, but I can't.",
        "Sorry, I can't come. I'm busy on Sunday.",
        "Sorry, I'm busy on Sunday. Maybe some other time.",
      ],
      options: ["Sorry, I'm busy on Sunday.", "No. I won't come.", "Sorry, I'm busy in Sunday."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A film with friends", te: "స్నేహితులతో సినిమా" },
    scene: {
      en: "After your morning walk, your friends are planning a film. Imran asks everyone.",
      te: "పొద్దున నడక తర్వాత మీ స్నేహితులు సినిమాకి ప్లాన్ చేస్తున్నారు. ఇమ్రాన్ గారు అందరినీ అడుగుతున్నారు.",
    },
    partner: { en: "Imran (your friend)", te: "ఇమ్రాన్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "agree", label: { en: "Saying yes and no", te: "సరే, కుదరదు అనడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Friends, let's see the new Telugu film on Sunday!",
        te: "ఫ్రెండ్స్, ఆదివారం కొత్త తెలుగు సినిమా చూద్దాం!",
        hint: { en: "Say yes happily.", te: "సంతోషంగా సరే అనండి." },
        replies: [
          { say: "Sounds good!", good: true, skill: "agree" },
          { say: "That's a good idea!", good: true, skill: "agree" },
          { say: "That's good idea!", good: false, skill: "agree", fixIt: "article" },
        ],
      },
      {
        partner: "Great. Shall I book tickets for the evening show?",
        te: "సూపర్. సాయంత్రం షోకి టికెట్లు బుక్ చేయనా?",
        hint: { en: "Say the evening is hard for you, and suggest the afternoon.", te: "సాయంత్రం మీకు కష్టమని చెప్పి, మధ్యాహ్నం సూచించండి." },
        replies: [
          { say: "Evening is difficult for me. How about the afternoon show?", good: true, skill: "agree" },
          {
            say: "Evening show? No. Bad idea.",
            good: false,
            skill: "polite",
            react: { en: "Oh! Then you tell me a better time.", te: "ఓ! అయితే మీరే మంచి టైమ్ చెప్పండి." },
          },
        ],
      },
      {
        partner: "Okay, the afternoon show. How many tickets?",
        te: "సరే, మధ్యాహ్నం షో. ఎన్ని టికెట్లు?",
        hint: { en: "Count: you, Imran, Kamala and Raju. Say the number.", te: "లెక్కపెట్టండి: మీరు, ఇమ్రాన్, కమల, రాజు. ఎన్నో చెప్పండి." },
        replies: [
          { say: "Four tickets, please.", good: true, skill: "agree" },
          { say: "Four ticket, please.", good: false, skill: "agree", fixIt: "plural" },
        ],
      },
      {
        partner: "Done! See you at the cinema at two.",
        te: "అయిపోయింది! రెండింటికి సినిమా హాల్ దగ్గర కలుద్దాం.",
        hint: { en: "Agree, and thank him.", te: "ఒప్పుకుని, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Sounds good. I'll be there. Thank you, Imran!", good: true, skill: "polite" },
          { say: "Sounds good. Thank you, Imran!", good: true, skill: "polite" },
          { say: "Sounds good. Thanks you, Imran!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
