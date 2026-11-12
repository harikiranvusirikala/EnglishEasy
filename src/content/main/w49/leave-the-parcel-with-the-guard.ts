import type { Lesson } from "../../types";

/** Week 49, Day 5 (CURRICULUM §5): instructions to a delivery person — I'm not at home. Please leave it with the security guard. */
export const day: Lesson = {
  id: "leave-the-parcel-with-the-guard",
  kind: "lesson",
  title: { en: "Leave It With the Guard", te: "సెక్యూరిటీ దగ్గర ఇవ్వండి" },
  subtitle: "Please leave it with …",
  summary: {
    en: "Learn to tell a delivery person what to do when you are out: I'm not at home. Please leave it with the security guard. I'll be back by six.",
    te: "మీరు ఇంట్లో లేనప్పుడు పార్సెల్ ఏం చేయాలో డెలివరీ వ్యక్తికి చెప్పడం నేర్చుకుందాం: I'm not at home. Please leave it with the security guard. I'll be back by six.",
  },
  seo: {
    title: "Leaving a Parcel With the Guard in English for Telugu Speakers",
    description:
      "Say I'm not at home. Please leave it with the security guard. Simple lessons for Telugu speakers on talking to delivery people.",
  },
  pattern: [
    { text: "Please", role: "what" },
    { text: "leave", role: "action" },
    { text: "it", role: "what" },
    { text: "with the security guard", role: "what" },
  ],
  core: [
    { en: "I'm not at home right now.", te: "నేను ఇప్పుడు ఇంట్లో లేను.", extra: ["in"] },
    { en: "Please leave it with the security guard.", te: "సెక్యూరిటీ గార్డ్ దగ్గర ఇచ్చేయండి, please.", extra: ["to"] },
    { en: "I'll be back by six.", te: "ఆరింటి లోపు తిరిగి వచ్చేస్తాను.", extra: ["until"] },
    { en: "Can you come after six?", te: "ఆరింటి తర్వాత వస్తారా?", extra: ["coming"] },
    { en: "Please don't leave it on the doorstep.", te: "తలుపు దగ్గర బయట పెట్టకండి, please.", extra: ["not"] },
    { en: "My flat number is two zero three.", te: "నా flat number 203.", extra: ["of"] },
    { en: "Can I reschedule the delivery to Monday?", te: "డెలివరీని సోమవారానికి మార్చుకోవచ్చా?", extra: ["rescheduling"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a person near your home who can take a parcel for you. Say aloud: Please leave it with …",
    te: "మీ ఇంటి దగ్గర మీ కోసం పార్సెల్ తీసుకోగలిగే ఒకరిని గుర్తు చేసుకోండి. గట్టిగా చెప్పండి: Please leave it with …",
  },
  words: [
    { en: "watchman", te: "వాచ్‌మన్, కాపలా ఉండే వ్యక్తి" },
    { en: "leave it with", te: "ఎవరి దగ్గరైనా ఇచ్చి వెళ్ళడం" },
    { en: "reschedule", te: "వేరే రోజుకి, వేరే టైమ్‌కి మార్చడం" },
    { en: "flat number", te: "ఫ్లాట్ నంబర్" },
    { en: "doorstep", te: "గుమ్మం, తలుపు ముందు" },
  ],
  grammar: ["imperatives", "will", "prepositions"],
  topics: ["shopping", "neighbours", "phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Out? Say what to do", te: "బయట ఉన్నారా? ఏం చేయాలో చెప్పండి" },
      body: {
        en: "Say where you are, what to do with the parcel, and when you'll be back. Use Please + verb, and I'll be back by + a time.",
        te: "మీరు ఎక్కడున్నారో, పార్సెల్ ఏం చేయాలో, ఎప్పటికి వస్తారో చెప్పండి. Please + verb, I'll be back by + టైమ్ వాడండి.",
      },
      bridge: {
        te: ["సెక్యూరిటీ గార్డ్ దగ్గర", "ఇచ్చేయండి,", "please"],
        en: [
          { text: "Please", role: "what" },
          { text: "leave", role: "action" },
          { text: "it", role: "what" },
          { text: "with the security guard", role: "what" },
        ],
      },
      examples: [
        { en: "I'm not at home right now.", te: "నేను ఇప్పుడు ఇంట్లో లేను." },
        { en: "Please leave it with the security guard.", te: "సెక్యూరిటీ గార్డ్ దగ్గర ఇచ్చేయండి, please." },
        { en: "I'll be back by six.", te: "ఆరింటి లోపు తిరిగి వచ్చేస్తాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Leave it, come later, or change the day", te: "ఇచ్చి వెళ్ళడం, తర్వాత రావడం, రోజు మార్చడం" },
      items: [
        {
          form: "leave it with …",
          useFor: { en: "Someone you trust can take it for you.", te: "మీరు నమ్మే ఎవరైనా మీ బదులు తీసుకోవచ్చు." },
          example: { en: "Please leave it with the watchman.", te: "watchman దగ్గర ఇచ్చేయండి, please." },
        },
        {
          form: "I'll be back by …",
          useFor: { en: "Give the time you will be home.", te: "మీరు ఇంటికి వచ్చే టైమ్ చెప్పడానికి." },
          example: { en: "I'll be back by six.", te: "ఆరింటి లోపు తిరిగి వచ్చేస్తాను." },
        },
        {
          form: "Can you come after …?",
          useFor: { en: "Ask them to come later the same day.", te: "అదే రోజు కొంచెం తర్వాత రమ్మని అడగడానికి." },
          example: { en: "Can you come after six?", te: "ఆరింటి తర్వాత వస్తారా?" },
        },
        {
          form: "reschedule",
          useFor: { en: "Move the delivery to another day.", te: "డెలివరీని వేరే రోజుకి మార్చడానికి." },
          example: { en: "Can I reschedule the delivery to Monday?", te: "డెలివరీని సోమవారానికి మార్చుకోవచ్చా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I'm out of station today.",
      right: "I'm out of town today.",
      why: {
        en: "Out of station is old Indian office English; out of town is clear everywhere.",
        te: "out of station పాత ఆఫీసు మాట, మన దగ్గరే వాడతారు; out of town అందరికీ అర్థమవుతుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "The watchman keep all the parcels.",
      right: "The watchman keeps all the parcels.",
      why: {
        en: "With one person, like he or she, the verb needs s in English.",
        te: "ఒక్కరి గురించి (he, she లాగా) చెప్తే, ఇంగ్లీష్‌లో verb కి s తప్పనిసరి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: { en: "The delivery person calls. You are at the temple. Tell him.", te: "డెలివరీ ఆయన ఫోన్ చేశారు. మీరు గుడిలో ఉన్నారు. ఆయనకి చెప్పండి." },
      options: ["I'm not at home. I'm at the temple.", "I'm not in home. I'm at the temple.", "I not at home. I'm at the temple."],
      answer: 0,
      why: {
        en: "Home takes at, and I needs am; Telugu ఇంట్లో లేను has neither.",
        te: "home ముందు at వస్తుంది, I తో am కావాలి; తెలుగు 'ఇంట్లో లేను' లో ఈ రెండూ కనిపించవు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "I'll be back ___ six. Can you come after that?",
      te: "ఆరింటి లోపు తిరిగి వచ్చేస్తాను. ఆ తర్వాత వస్తారా?",
      options: ["by", "until", "since"],
      answer: 0,
      why: {
        en: "By six means at six or before; until is for something that goes on.",
        te: "by six అంటే ఆరింటికి గానీ, ముందు గానీ; until అయితే ఒక పని ఆ టైమ్ దాకా సాగుతుంది.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Green Park Apartments",
      lines: [
        "Notice to all residents",
        "From 1 December, delivery persons cannot go up to the flats.",
        "The security guard will keep all parcels at the gate.",
        "Please collect your parcels before 10 pm.",
        "Tell the guard your name and flat number.",
        "For cash on delivery, please come down and pay at the gate.",
        "Food deliveries can still come up to your door.",
        "Thank you. Residents' Association",
      ],
      questions: [
        {
          prompt: { en: "Where will your parcels wait for you?", te: "మీ పార్సెల్స్ ఎక్కడ ఉంటాయి?" },
          options: ["With the guard at the gate", "At your door", "At the post office"],
          answer: 0,
          why: { en: "The third line says the guard keeps every parcel downstairs now.", te: "గార్డ్ అన్ని పార్సెల్స్ కింద ఉంచుతారని మూడో లైన్‌లో ఉంది." },
        },
        {
          prompt: { en: "Your order is cash on delivery. What should you do?", te: "మీ ఆర్డర్ cash on delivery. మీరు ఏం చేయాలి?" },
          options: ["Come down and pay at the gate", "Pay the guard the next day", "Ask the delivery person to come up"],
          answer: 0,
          why: { en: "The notice asks people who pay cash to go down to the gate.", te: "cash తో కట్టేవాళ్ళు కిందకి గేట్ దగ్గరికి రావాలని నోటీసులో ఉంది." },
        },
        {
          prompt: { en: "Which deliveries can still come up to your door?", te: "ఏ డెలివరీలు ఇంకా మీ తలుపు దాకా రావచ్చు?" },
          options: ["Food deliveries", "All parcels", "Big boxes only"],
          answer: 0,
          why: { en: "Only food can still come up; every other parcel stays with the guard.", te: "భోజనం మాత్రమే పైకి రావచ్చు; మిగతా పార్సెల్స్ అన్నీ గార్డ్ దగ్గరే." },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Please leave it with security guard.",
      wrongIndex: 4,
      fix: "Please leave it with the security guard.",
      why: {
        en: "The one guard you both know takes the; Telugu has no word for the.",
        te: "ఇద్దరికీ తెలిసిన ఆ ఒక్క గార్డ్ ముందు the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "A delivery person calls. You are out, but you will be home by seven. Tell him.",
        te: "డెలివరీ ఆయన ఫోన్ చేశారు. మీరు బయట ఉన్నారు, ఏడింటి లోపు ఇంటికి వస్తారు. ఆయనకి చెప్పండి.",
      },
      expected: [
        "I'm not at home. I'll be back by seven.",
        "Sorry, I'm out. I'll be back by seven.",
        "I'll be back by seven. Can you come after that?",
      ],
      options: ["I'm not at home. I'll be back by seven.", "I'm not at home. I'll back by seven.", "I'm not at home. I'm coming back until seven."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "You are out. Ask the delivery person to give the parcel to your neighbour Sarala.",
        te: "మీరు బయట ఉన్నారు. పార్సెల్ పక్కింటి సరళ గారికి ఇవ్వమని డెలివరీ వ్యక్తిని అడగండి.",
      },
      expected: ["Please leave it with my neighbour Sarala.", "Please leave it with Sarala next door.", "Can you leave it with Sarala next door, please?"],
      options: ["Please leave it with my neighbour Sarala.", "Please leave it at my neighbour Sarala.", "Keep it with my neighbour. Go fast!"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A call at the temple", te: "గుడిలో ఉండగా ఫోన్" },
    scene: {
      en: "You are at the temple. A delivery person, Raju, calls you about your parcel.",
      te: "మీరు గుడిలో ఉన్నారు. డెలివరీ చేసే రాజు గారు మీ పార్సెల్ గురించి ఫోన్ చేశారు.",
    },
    partner: { en: "Raju (delivery person)", te: "రాజు (డెలివరీ చేసే ఆయన)" },
    voice: "b",
    skills: [
      { id: "tell", label: { en: "Telling what to do", te: "ఏం చేయాలో చెప్పడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello, I'm calling from ShopKart. I'm outside your house with a parcel.",
        te: "హలో, ShopKart నుంచి మాట్లాడుతున్నాను. పార్సెల్‌తో మీ ఇంటి బయట ఉన్నాను.",
        hint: { en: "Say sorry: you are at the temple, not at home.", te: "సారీ చెప్పండి: మీరు ఇంట్లో లేరు, గుడిలో ఉన్నారు." },
        replies: [
          { say: "Sorry, I'm not at home. I'm at the temple.", good: true, skill: "tell" },
          { say: "Sorry, I'm at the temple right now.", good: true, skill: "tell" },
          { say: "Sorry, I'm not in home. I'm at the temple.", good: false, skill: "tell", fixIt: "preposition" },
        ],
      },
      {
        partner: "Okay. What should I do with the parcel?",
        te: "సరే. పార్సెల్ ఏం చేయమంటారు?",
        hint: { en: "Ask him to give it to the security guard.", te: "సెక్యూరిటీ గార్డ్ దగ్గర ఇవ్వమని అడగండి." },
        replies: [
          { say: "Please leave it with the security guard.", good: true, skill: "tell" },
          { say: "Could you leave it with the guard, please?", good: true, skill: "tell" },
          {
            say: "Just throw it over the gate.",
            good: false,
            skill: "polite",
            react: { en: "Sorry, I can't do that. It may break.", te: "సారీ, అలా చేయలేను. పగిలిపోవచ్చు." },
          },
        ],
      },
      {
        partner: "The guard is not at the gate now. Can I come back later?",
        te: "గార్డ్ ఇప్పుడు గేట్ దగ్గర లేరు. నేను తర్వాత రానా?",
        hint: { en: "Say you will be home by six, and ask him to come after that.", te: "ఆరింటి లోపు ఇంటికి వస్తారని చెప్పి, ఆ తర్వాత రమ్మని అడగండి." },
        replies: [
          { say: "Yes, please. I'll be back by six. Can you come after six?", good: true, skill: "tell" },
          { say: "Yes, please. I'll be back by six.", good: true, skill: "tell" },
          { say: "Yes. I'll be back until six. Come after six.", good: false, skill: "tell" },
        ],
      },
      {
        partner: "Okay, I'll come at half past six. Please keep the code ready.",
        te: "సరే, ఆరున్నరకి వస్తాను. కోడ్ రెడీగా ఉంచుకోండి.",
        hint: { en: "Thank him, and say goodbye.", te: "ఆయనకి థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Thank you. See you at half past six.", good: true, skill: "polite" },
          { say: "Thank you so much. Bye!", good: true, skill: "polite" },
          { say: "Thank you. Please do the needful.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
