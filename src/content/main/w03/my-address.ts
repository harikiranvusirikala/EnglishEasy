import type { Lesson } from "../../types";

/**
 * Week 3, Day 5 (CURRICULUM §3): NEW 2026-11-10, replacing big-numbers-lakh (moved to Week 21). Door number, road,
 * town and pin code (said digit by digit, written as words in spoken lines), and spelling your name with the alphabet.
 */
export const day: Lesson = {
  id: "my-address",
  kind: "lesson",
  title: { en: "My Address", te: "నా అడ్రస్" },
  subtitle: "address / pin code / spelling",
  summary: {
    en: "Learn to give your address in English: door number, road and pin code, and to spell your name.",
    te: "మీ అడ్రస్ ఇంగ్లీష్‌లో చెప్పడం నేర్చుకుందాం: డోర్ నంబర్, రోడ్, పిన్ కోడ్, అలాగే మీ పేరు స్పెల్లింగ్.",
  },
  seo: {
    title: "Saying Your Address in English for Telugu Speakers",
    description:
      "Say your door number, road and pin code in English, and spell your name letter by letter. Simple lessons for Telugu speakers, with Telugu explanations.",
  },
  pattern: [
    { text: "My address", role: "who" },
    { text: "is", role: "action" },
    { text: "twelve, Gandhi Road", role: "what" },
  ],
  core: [
    { en: "What is your address?", te: "మీ అడ్రస్ ఏంటి?", extra: ["Where"] },
    { en: "My door number is twelve.", te: "మా ఇంటి డోర్ నంబర్ పన్నెండు.", extra: ["are"] },
    { en: "I live on Gandhi Road.", te: "నేను గాంధీ రోడ్‌లో ఉంటాను.", extra: ["at"] },
    { en: "What is your pin code?", te: "మీ పిన్ కోడ్ ఏంటి?", extra: ["How"] },
    { en: "Five two two, double zero one.", te: "ఐదు రెండు రెండు, సున్నా సున్నా ఒకటి.", extra: ["hundred"] },
    { en: "How do you spell your name?", te: "మీ పేరు స్పెల్లింగ్ ఏంటి?", extra: ["What"] },
    { en: "Kiran. K, I, R, A, N.", te: "కిరణ్. K, I, R, A, N.", extra: ["E,"] },
  ],
  key: [0, 1, 3, 5],
  tryToday: {
    en: "Say your own address and pin code in English, then spell your name letter by letter.",
    te: "మీ అడ్రస్, పిన్ కోడ్ ఇంగ్లీష్‌లో చెప్పండి. తర్వాత మీ పేరు స్పెల్లింగ్ ఒక్కో అక్షరంగా చెప్పండి.",
  },
  words: [
    { en: "address", te: "అడ్రస్, చిరునామా" },
    { en: "pin code", te: "పిన్ కోడ్" },
    { en: "road", te: "రోడ్డు" },
    { en: "spell", te: "స్పెల్లింగ్ చెప్పడం" },
    { en: "alphabet", te: "అక్షరమాల (A నుండి Z)" },
  ],
  grammar: ["am-is-are", "question-words", "prepositions"],
  topics: ["home", "phone", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Saying your address", te: "మీ అడ్రస్ చెప్పడం" },
      body: {
        en: "Say your address in parts: door number, road, then town. Telugu needs no word in the middle, but English needs is: My address is twelve, Gandhi Road.",
        te: "అడ్రస్ ముక్కలుగా చెప్పండి: డోర్ నంబర్, రోడ్, తర్వాత ఊరు. తెలుగులో మధ్యలో పదం అక్కర్లేదు, ఇంగ్లీష్‌లో is కావాలి.",
      },
      bridge: {
        te: ["నా అడ్రస్", "పన్నెండు, గాంధీ రోడ్"],
        en: [
          { text: "My address", role: "who" },
          { text: "is", role: "action" },
          { text: "twelve, Gandhi Road", role: "what" },
        ],
      },
      examples: [
        { en: "What is your address?", te: "మీ అడ్రస్ ఏంటి?" },
        { en: "My door number is twelve.", te: "మా ఇంటి డోర్ నంబర్ పన్నెండు." },
        { en: "I live on Gandhi Road.", te: "నేను గాంధీ రోడ్‌లో ఉంటాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Numbers and letters", te: "అంకెలు, అక్షరాలు" },
      items: [
        {
          form: "door number",
          useFor: { en: "A small number: say it like any number.", te: "చిన్న నంబర్: మామూలు నంబర్ లాగే చెప్పండి." },
          example: { en: "My door number is twelve.", te: "మా ఇంటి డోర్ నంబర్ పన్నెండు." },
        },
        {
          form: "pin code",
          useFor: {
            en: "Six digits, one at a time, like a phone number. Two zeros together: double zero.",
            te: "ఆరు అంకెలు, ఫోన్ నంబర్ లాగా ఒక్కొక్కటిగా. రెండు సున్నాలు పక్కపక్కన ఉంటే: double zero.",
          },
          example: { en: "Five two two, double zero one.", te: "ఐదు రెండు రెండు, సున్నా సున్నా ఒకటి." },
        },
        {
          form: "spelling",
          useFor: {
            en: "Say the letters of the alphabet one by one. Careful: I sounds like ఐ, E sounds like ఈ.",
            te: "అక్షరమాలలో అక్షరాలు ఒక్కొక్కటిగా చెప్పండి. జాగ్రత్త: I అంటే 'ఐ', E అంటే 'ఈ'.",
          },
          example: { en: "Kiran. K, I, R, A, N.", te: "కిరణ్. K, I, R, A, N." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Where is your address?",
      right: "What is your address?",
      why: {
        en: "An address is words and numbers, not a place you can point to, so ask with what: What is your address?",
        te: "అడ్రస్ అంటే పదాలు, అంకెలు; చూపించే చోటు కాదు. అందుకే what తో అడగాలి: What is your address?",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "What is your name spelling?",
      right: "How do you spell your name?",
      why: {
        en: "Telugu says పేరు స్పెల్లింగ్ ఏంటి?, but in English spell is the action word: How do you spell your name?",
        te: "తెలుగులో 'పేరు స్పెల్లింగ్ ఏంటి?' అంటాం, కానీ ఇంగ్లీష్‌లో spell ని verb గా వాడాలి: How do you spell your name?",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "A courier asks for your pin code. It is 522001. What do you say?", te: "కొరియర్ వాళ్ళు మీ పిన్ కోడ్ అడుగుతున్నారు. అది 522001. ఏమంటారు?" },
      options: ["Five two two, double zero one.", "Five hundred twenty-two thousand one.", "Two five two, double zero one."],
      answer: 0,
      why: {
        en: "Say a pin code one digit at a time, like a phone number, and two zeros together as double zero.",
        te: "పిన్ కోడ్ ఫోన్ నంబర్ లాగా ఒక్కో అంకె విడిగా చెప్పాలి; రెండు సున్నాలు కలిసి ఉంటే double zero.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "My door number ___ twelve.",
      te: "మా ఇంటి డోర్ నంబర్ పన్నెండు.",
      options: ["is", "are", "am"],
      answer: 0,
      why: {
        en: "Telugu needs no word here, but English needs is for one number: My door number is twelve.",
        te: "తెలుగులో ఇక్కడ పదం అక్కర్లేదు, కానీ ఇంగ్లీష్‌లో ఒక్క నంబర్‌కి is కావాలి: My door number is twelve.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "indian-english",
      prompt: { en: "You want to write down a new neighbour's name. What do you ask?", te: "కొత్త పక్కింటి వారి పేరు రాసుకోవాలి. ఏమని అడుగుతారు?" },
      options: ["What is your name spelling?", "How do you spell your name?", "How you spell your name?"],
      answer: 1,
      why: {
        en: "Spell is the action word, and do comes after how: How do you spell your name?",
        te: "spell ని verb గా వాడాలి, how తర్వాత do రావాలి: How do you spell your name?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "I live at Gandhi Road.",
      wrongIndex: 2,
      fix: "I live on Gandhi Road.",
      why: {
        en: "Use on with the name of a road. At needs the door number too, like at twelve, Gandhi Road. So: I live on Gandhi Road.",
        te: "రోడ్డు పేరుతో on వాడాలి. డోర్ నంబర్ కూడా చెప్తేనే at: at twelve, Gandhi Road. కాబట్టి: I live on Gandhi Road.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "The shopkeeper will send your rice home. He asks your address. It is twelve, Gandhi Road.",
        te: "షాపు ఆయన బియ్యం ఇంటికి పంపిస్తారు. మీ అడ్రస్ అడుగుతున్నారు. అది పన్నెండు, గాంధీ రోడ్.",
      },
      expected: ["My address is twelve, Gandhi Road.", "Twelve, Gandhi Road."],
      options: ["My address twelve, Gandhi Road.", "My address is twelve, Gandhi Road.", "Gandhi Road twelve is address."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A clerk asks how to spell your name. Your name is Kiran. Spell it.",
        te: "ఒక క్లర్క్ మీ పేరు స్పెల్లింగ్ అడుగుతున్నారు. మీ పేరు కిరణ్. స్పెల్లింగ్ చెప్పండి.",
      },
      expected: ["K, I, R, A, N.", "Kiran. K, I, R, A, N."],
      options: ["K, I, R, A, N.", "K, E, R, A, N.", "Kiran spelling."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A call from the courier", te: "కొరియర్ నుండి ఫోన్" },
    scene: {
      en: "Anitha from the courier office calls about your parcel. Give your address, pin code and the spelling of your name.",
      te: "కొరియర్ ఆఫీస్ నుండి అనిత గారు మీ పార్సిల్ గురించి ఫోన్ చేశారు. మీ అడ్రస్, పిన్ కోడ్, పేరు స్పెల్లింగ్ చెప్పండి.",
    },
    partner: { en: "Anitha (courier office)", te: "అనిత (కొరియర్ ఆఫీస్)" },
    skills: [
      { id: "address", label: { en: "Address", te: "అడ్రస్" } },
      { id: "spell", label: { en: "Spelling", te: "స్పెల్లింగ్" } },
    ],
    turns: [
      {
        partner: "Hello! I have your parcel. Address, please?",
        te: "హలో! మీ పార్సిల్ నా దగ్గర ఉంది. అడ్రస్ చెప్తారా?",
        hint: { en: "Give your door number and road: 12, Gandhi Road.", te: "మీ డోర్ నంబర్, రోడ్ చెప్పండి: 12, గాంధీ రోడ్." },
        replies: [
          { say: "My address is twelve, Gandhi Road.", good: true, skill: "address" },
          { say: "My address twelve, Gandhi Road.", good: false, skill: "address", fixIt: "be" },
          {
            say: "Why? Who are you?",
            good: false,
            react: { en: "Sorry! I am Anitha, from the courier.", te: "sorry అండీ! నేను అనిత, కొరియర్ నుండి." },
          },
        ],
      },
      {
        partner: "And the pin code?",
        te: "మరి పిన్ కోడ్?",
        hint: { en: "Say the pin code one digit at a time: 522001.", te: "పిన్ కోడ్ ఒక్కో అంకె విడిగా చెప్పండి: 522001." },
        replies: [
          { say: "Five two two, double zero one.", good: true, skill: "address" },
          { say: "Five hundred twenty-two thousand one.", good: false, skill: "address" },
        ],
      },
      {
        partner: "How do you spell your name?",
        te: "మీ పేరు స్పెల్లింగ్ ఏంటి?",
        hint: { en: "Spell your name, letter by letter. Here it is Kiran.", te: "మీ పేరు ఒక్కో అక్షరంగా చెప్పండి. ఇక్కడ కిరణ్." },
        replies: [
          { say: "K, I, R, A, N.", good: true, skill: "spell" },
          { say: "K, E, R, A, N.", good: false, skill: "spell" },
        ],
      },
      {
        partner: "Thank you. I will come at five.",
        te: "థాంక్యూ. నేను ఐదు గంటలకి వస్తాను.",
        hint: { en: "Agree, thank her, and say you will see her then.", te: "సరే అని, థాంక్స్ చెప్పి, అప్పుడు కలుద్దామని చెప్పండి." },
        replies: [
          { say: "Okay, thank you. See you at five.", good: true },
          { say: "Okay, thank you. See you on five.", good: false, fixIt: "preposition" },
        ],
      },
    ],
  },
};
