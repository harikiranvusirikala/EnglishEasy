import type { Lesson } from "../../types";

/** Week 27, Day 2 (CURRICULUM §4): spelling aloud — surnames and street names, double letters, B for Bus, and an email (at, dot). */
export const day: Lesson = {
  id: "can-you-spell-it",
  kind: "lesson",
  title: { en: "Can You Spell It?", te: "స్పెల్లింగ్ చెప్పండి" },
  subtitle: "spelling aloud; at, dot",
  summary: {
    en: "Learn to spell names and street names aloud, and to say an email: kiran at gmail dot com.",
    te: "పేర్లు, వీధి పేర్లు స్పెల్లింగ్ చెప్పడం, email ని మాటల్లో చెప్పడం నేర్చుకుందాం: kiran at gmail dot com.",
  },
  seo: {
    title: "Spelling Aloud and Saying an Email in English for Telugu Speakers",
    description:
      "Spell your surname aloud, say double D and B for Bus, and give an email: kiran at gmail dot com. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "My email", role: "who" },
    { text: "is", role: "action" },
    { text: "kiran at gmail dot com", role: "what" },
  ],
  core: [
    { en: "Can you spell it, please?", te: "స్పెల్లింగ్ చెప్తారా?", extra: ["spelling"] },
    { en: "My email is kiran at gmail dot com.", te: "నా email kiran@gmail.com.", extra: ["rate"] },
    { en: "My surname is Reddy. R, E, double D, Y.", te: "నా ఇంటి పేరు రెడ్డి. R, E, double D, Y.", extra: ["two"] },
    { en: "Is that B for bus or V for van?", te: "అది bus లో B నా, van లో V నా?", extra: ["of"] },
    { en: "Please say it slowly, letter by letter.", te: "కొంచెం నెమ్మదిగా, ఒక్కో అక్షరం చెప్పండి.", extra: ["slow"] },
    { en: "Is it all in small letters?", te: "అన్నీ చిన్న అక్షరాలేనా?", extra: ["on"] },
    { en: "It's Gandhi Road. G, A, N, D, H, I.", te: "గాంధీ రోడ్. G, A, N, D, H, I.", extra: ["J,"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Spell your own surname and your street aloud, letter by letter. Use double where you need it.",
    te: "మీ ఇంటి పేరు, మీ వీధి పేరు ఒక్కో అక్షరంగా గట్టిగా చెప్పండి. అవసరమైన చోట double వాడండి.",
  },
  words: [
    { en: "email", te: "ఈమెయిల్" },
    { en: "dot", te: "చుక్క (email లో)" },
    { en: "surname", te: "ఇంటి పేరు" },
    { en: "double", te: "రెండు ఒకే అక్షరాలు" },
    { en: "small letters", te: "చిన్న అక్షరాలు" },
  ],
  grammar: ["can-could", "yes-no-questions", "prepositions"],
  topics: ["offices", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Spelling aloud", te: "స్పెల్లింగ్ గట్టిగా చెప్పడం" },
      body: {
        en: "Say each letter with a small pause. When the same letter comes twice, say double: R, E, double D, Y. In an email, @ is at, and the full stop is dot.",
        te: "ఒక్కో అక్షరం తర్వాత చిన్న విరామం ఇవ్వండి. ఒకే అక్షరం రెండుసార్లు వస్తే double అనండి: R, E, double D, Y. email లో @ అంటే at, చుక్క అంటే dot.",
      },
      bridge: {
        te: ["నా email", "kiran@gmail.com"],
        en: [
          { text: "My email", role: "who" },
          { text: "is", role: "action" },
          { text: "kiran at gmail dot com", role: "what" },
        ],
      },
      examples: [
        { en: "My surname is Reddy. R, E, double D, Y.", te: "నా ఇంటి పేరు రెడ్డి. R, E, double D, Y." },
        { en: "It's Gandhi Road. G, A, N, D, H, I.", te: "గాంధీ రోడ్. G, A, N, D, H, I." },
        { en: "My email is kiran at gmail dot com.", te: "నా email kiran@gmail.com." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Making each letter clear", te: "అక్షరం స్పష్టంగా" },
      items: [
        {
          form: "B for bus",
          useFor: { en: "When a letter can sound like another one.", te: "ఒక అక్షరం ఇంకో అక్షరం లా వినిపించేటప్పుడు." },
          example: { en: "Is that B for bus or V for van?", te: "అది bus లో B నా, van లో V నా?" },
        },
        {
          form: "double L",
          useFor: { en: "The same letter twice, side by side.", te: "ఒకే అక్షరం రెండుసార్లు, పక్కపక్కనే." },
          example: { en: "It's Mallesh. M, A, double L, E, S, H.", te: "మల్లేష్ అండీ. M, A, double L, E, S, H." },
        },
        {
          form: "at, dot",
          useFor: { en: "The @ sign and the full stop in an email.", te: "email లో @ గుర్తు, చుక్క." },
          example: { en: "It's sita dot rani at gmail dot com.", te: "అది sita.rani@gmail.com." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "My email is kiran at the rate gmail dot com.",
      right: "My email is kiran at gmail dot com.",
      why: {
        en: "In an email, just say at; at the rate is heard only in India and confuses others.",
        te: "email లో at అంటే చాలు; at the rate అనేది మన దగ్గరే, బయటివాళ్ళకి అర్థం కాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "How you spell it?",
      right: "How do you spell it?",
      why: {
        en: "A how question needs do before you; Telugu has no word for it.",
        te: "how ప్రశ్నలో you ముందు do రావాలి; తెలుగులో అలాంటి పదం ఉండదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Your surname is Reddy. Spell it the clear way.", te: "మీ ఇంటి పేరు Reddy. స్పష్టంగా స్పెల్లింగ్ చెప్పండి." },
      options: ["R, E, double D, Y.", "R, E, two D, Y.", "R, E, D, Y."],
      answer: 0,
      why: {
        en: "When the same letter comes twice, say double; two D sounds like a number.",
        te: "ఒకే అక్షరం రెండుసార్లు వస్తే double అనాలి; two D అంటే నంబర్ లా వినిపిస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "indian-english",
      sentence: "My email is sita ___ gmail dot com.",
      te: "నా email sita@gmail.com.",
      options: ["at", "at the rate", "at rate"],
      answer: 0,
      why: {
        en: "The sign in an email is said as at, and nothing more.",
        te: "email లోని ఆ గుర్తుని at అని మాత్రమే అంటారు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The clerk asks: B for bus? What does she want to know?", te: "క్లర్క్ 'B for bus?' అని అడుగుతున్నారు. ఆవిడ ఏం తెలుసుకోవాలనుకుంటున్నారు?" },
      options: ["If the letter is B, not V or P.", "If you came by bus.", "If you need a bus ticket."],
      answer: 0,
      why: {
        en: "B for bus checks a letter, because B, V and P sound alike.",
        te: "B, V, P ఒకేలా వినిపిస్తాయి, అందుకే B for bus అని ఆ అక్షరాన్ని నిర్ధారించుకుంటారు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Can you tell me spelling, please?",
      wrongIndex: 4,
      fix: "Can you tell me the spelling, please?",
      why: {
        en: "Spelling here needs the before it; Telugu has no word for the.",
        te: "ఇక్కడ spelling ముందు the కావాలి; తెలుగులో the లాంటి పదం ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "The clerk did not catch your surname, Reddy. Spell it.",
        te: "క్లర్క్‌కి మీ ఇంటి పేరు Reddy సరిగ్గా వినిపించలేదు. స్పెల్లింగ్ చెప్పండి.",
      },
      expected: ["R, E, double D, Y.", "Reddy. R, E, double D, Y."],
      options: ["R, E, double D, Y.", "R, E, two D, Y.", "Reddy spelling is R, E, D, Y."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Give the clerk your email: kiran@gmail.com.",
        te: "క్లర్క్‌కి మీ email చెప్పండి: kiran@gmail.com.",
      },
      expected: ["My email is kiran at gmail dot com.", "It's kiran at gmail dot com.", "Kiran at gmail dot com."],
      options: ["My email is kiran at gmail dot com.", "My email kiran at gmail dot com.", "My email is kiran gmail com."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Your email at the gas agency", te: "గ్యాస్ ఏజెన్సీలో మీ email" },
    scene: {
      en: "You are at the gas agency counter. Swapna is adding your email to your account.",
      te: "మీరు గ్యాస్ ఏజెన్సీ కౌంటర్ దగ్గర ఉన్నారు. స్వప్న మీ account కి మీ email చేరుస్తున్నారు.",
    },
    partner: { en: "Swapna (counter clerk)", te: "స్వప్న (కౌంటర్ క్లర్క్)" },
    skills: [
      { id: "email", label: { en: "Saying an email", te: "email చెప్పడం" } },
      { id: "spell", label: { en: "Spelling", te: "స్పెల్లింగ్" } },
    ],
    turns: [
      {
        partner: "Good morning. Your email ID, please?",
        te: "నమస్కారం. మీ email ID చెప్తారా?",
        hint: { en: "Say your email, kiran.rao@gmail.com, the spoken way.", te: "మీ email kiran.rao@gmail.com ని మాట్లాడే పద్ధతిలో చెప్పండి." },
        replies: [
          { say: "It's kiran dot rao at gmail dot com.", good: true, skill: "email" },
          {
            say: "Kiran dot rao at the rate gmail dot com.",
            good: false,
            skill: "email",
            fixIt: "indian-english",
            react: { en: "At the rate? You mean at, right?", te: "at the rate ఆ? at అనా మీ ఉద్దేశం?" },
          },
        ],
      },
      {
        partner: "Sorry, kiran dot what? Can you spell it?",
        te: "సారీ, kiran dot ఏంటి? స్పెల్లింగ్ చెప్తారా?",
        hint: { en: "Spell your surname letter by letter.", te: "మీ ఇంటి పేరు ఒక్కో అక్షరంగా చెప్పండి." },
        replies: [
          { say: "Rao. R, A, O. All small letters.", good: true, skill: "spell" },
          {
            say: "It's simple. Just write it.",
            good: false,
            skill: "spell",
            react: { en: "Sorry, but I must get it right.", te: "సారీ అండీ, కానీ సరిగ్గా రాయాలి కదా." },
          },
        ],
      },
      {
        partner: "Okay. And gmail, is that G for Guntur?",
        te: "సరే. gmail అంటే Guntur లో G నా?",
        hint: { en: "Say yes, and check the letter with the same word.", te: "అవునని చెప్పి, అదే పదంతో అక్షరాన్ని నిర్ధారించండి." },
        replies: [
          { say: "Yes, G for Guntur.", good: true, skill: "spell" },
          { say: "Yes, J for Guntur.", good: false, skill: "spell" },
        ],
      },
      {
        partner: "Done. You will get an email today.",
        te: "అయిపోయింది. ఈ రోజు మీకు ఒక email వస్తుంది.",
        hint: { en: "Thank her, and say goodbye.", te: "ఆవిడకి థాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you. Have a good day.", good: true },
          { say: "Finally! That took so long.", good: false },
        ],
      },
    ],
  },
};
