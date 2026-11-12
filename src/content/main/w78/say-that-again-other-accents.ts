import type { Lesson } from "../../types";

/** Week 78, Day 2 (CURRICULUM §5): asking for repetition and slower speech politely — Sorry, could you say that again? */
export const day: Lesson = {
  id: "say-that-again-other-accents",
  kind: "lesson",
  title: { en: "Could You Say That Again?", te: "మళ్ళీ చెప్తారా?" },
  subtitle: "asking someone to repeat",
  summary: {
    en: "Learn to ask politely when you miss something: Sorry, could you say that again more slowly?",
    te: "మాట వినిపించకపోతే మర్యాదగా మళ్ళీ అడగడం నేర్చుకుందాం: Sorry, could you say that again more slowly?",
  },
  seo: {
    title: "Asking Someone to Repeat in English for Telugu Speakers",
    description:
      "Say Sorry, could you say that again? and Did you say thirteen or thirty? Simple lessons for Telugu speakers on calls with other accents.",
  },
  pattern: [
    { text: "Could", role: "action" },
    { text: "you", role: "who" },
    { text: "say that again", role: "action" },
    { text: "more slowly?", role: "when" },
  ],
  core: [
    { en: "Sorry, could you say that again?", te: "సారీ, అది మళ్ళీ చెప్తారా?", extra: ["tell"] },
    { en: "Could you speak a little more slowly, please?", te: "కొంచెం ఇంకా మెల్లగా మాట్లాడతారా, ప్లీజ్?", extra: ["slow"] },
    { en: "Did you say thirteen or thirty?", te: "మీరు పదమూడు అన్నారా, ముప్పై అన్నారా?", extra: ["told"] },
    { en: "Sorry, I didn't catch your name.", te: "సారీ, మీ పేరు సరిగ్గా వినిపించలేదు.", extra: ["catched"] },
    { en: "Could you spell that for me, please?", te: "అది నాకోసం స్పెల్లింగ్ చెప్తారా, ప్లీజ్?", extra: ["to"] },
    { en: "The line is not clear. Can I call you back?", te: "లైన్ సరిగ్గా లేదు. నేను మళ్ళీ ఫోన్ చేయనా?", extra: ["clearly"] },
    { en: "So the parcel comes on Monday, is that right?", te: "అంటే పార్సెల్ సోమవారం వస్తుంది, అంతేనా?", extra: ["in"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "On your next phone call, if you miss a word, say: Sorry, could you say that again?",
    te: "తర్వాతి ఫోన్ కాల్‌లో ఏదైనా మాట వినిపించకపోతే ఇలా అనండి: Sorry, could you say that again?",
  },
  words: [
    { en: "pardon", te: "మళ్ళీ చెప్తారా అని మర్యాదగా అడిగే మాట" },
    { en: "repeat", te: "మళ్ళీ చెప్పడం" },
    { en: "say that again", te: "అది మళ్ళీ చెప్పడం" },
    { en: "didn't catch", te: "సరిగ్గా వినిపించలేదు" },
    { en: "accent", te: "యాస, మాట్లాడే తీరు" },
  ],
  grammar: ["can-could", "politeness-softening", "yes-no-questions"],
  topics: ["phone", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Ask again, kindly", te: "మర్యాదగా మళ్ళీ అడగడం" },
      body: {
        en: "When you miss a word, don't just say What? Say Sorry first, then ask with Could you: Could you say that again? Could you speak more slowly?",
        te: "మాట వినిపించకపోతే What? అని మాత్రమే అనకండి. ముందు Sorry అని, తర్వాత Could you తో అడగండి: Could you say that again?",
      },
      bridge: {
        te: ["సారీ,", "అది", "మళ్ళీ", "చెప్తారా?"],
        en: [
          { text: "Sorry,", role: "what" },
          { text: "could", role: "action" },
          { text: "you", role: "who" },
          { text: "say that again?", role: "action" },
        ],
      },
      examples: [
        { en: "Sorry, could you say that again?", te: "సారీ, అది మళ్ళీ చెప్తారా?" },
        { en: "Could you speak a little more slowly, please?", te: "కొంచెం ఇంకా మెల్లగా మాట్లాడతారా, ప్లీజ్?" },
        { en: "Did you say thirteen or thirty?", te: "మీరు పదమూడు అన్నారా, ముప్పై అన్నారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What did you miss?", te: "ఏం వినిపించలేదు?" },
      items: [
        {
          form: "Could you repeat that?",
          useFor: { en: "You missed all of it.", te: "చెప్పిందంతా వినిపించలేదు." },
          example: { en: "Sorry, could you repeat that, please?", te: "సారీ, అది మళ్ళీ చెప్తారా, ప్లీజ్?" },
        },
        {
          form: "Did you say … or …?",
          useFor: { en: "You heard it, but you are not sure which number or word.", te: "వినిపించింది, కానీ ఏ నంబరో, ఏ మాటో సరిగ్గా తెలీదు." },
          example: { en: "Did you say fifteen or fifty?", te: "మీరు పదిహేను అన్నారా, యాభై అన్నారా?" },
        },
        {
          form: "I didn't catch …",
          useFor: { en: "You missed one thing, like a name or a number.", te: "ఒక్కటే వినిపించలేదు, పేరు లేదా నంబర్ లాంటిది." },
          example: { en: "Sorry, I didn't catch the last number.", te: "సారీ, చివరి నంబర్ సరిగ్గా వినిపించలేదు." },
        },
        {
          form: "Pardon?",
          useFor: { en: "A short, polite way to ask again.", te: "మళ్ళీ అడగడానికి చిన్న, మర్యాదైన మాట." },
          example: { en: "Pardon? Could you say that again?", te: "సారీ, ఏమన్నారు? అది మళ్ళీ చెప్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Sorry, what you said?",
      right: "Sorry, what did you say?",
      why: {
        en: "A question about the past needs did before you, and then the verb goes back to say.",
        te: "గతం గురించి ప్రశ్నలో you ముందు did వస్తుంది; తర్వాత verb మళ్ళీ say అవుతుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "What? Tell again.",
      right: "Sorry, could you say that again?",
      why: {
        en: "A bare What? sounds rude, and English says something again, not tell again.",
        te: "ఒట్టి What? అంటే మొరటుగా ఉంటుంది; ఇంగ్లీష్‌లో tell again అనరు, say that again అంటారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "A customer-care agent asks: You didn't get the message, did you? You didn't get it. Answer.",
        te: "customer-care agent: You didn't get the message, did you? అని అడిగారు. మీకు మెసేజ్ రాలేదు. జవాబు చెప్పండి.",
      },
      options: ["No, I didn't.", "Yes, I didn't.", "Yes, not got."],
      answer: 0,
      why: {
        en: "You did not get it, so say No; Telugu అవును, రాలేదు makes us start with Yes.",
        te: "మీకు రాలేదు కాబట్టి No అనాలి; తెలుగులో 'అవును, రాలేదు' అనడం వల్ల Yes అనేస్తాం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Sorry, I didn't ___ your name.",
      te: "సారీ, మీ పేరు సరిగ్గా వినిపించలేదు.",
      options: ["catch", "caught", "catching"],
      answer: 0,
      why: {
        en: "After didn't, the verb stays plain; didn't already shows the past.",
        te: "didn't తర్వాత verb అలాగే ఉంటుంది; గతం అని didn't లోనే ఉంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "The agent says a number, but you are not sure: thirteen or thirty? Check politely.",
        te: "agent ఒక నంబర్ చెప్పారు, కానీ పదమూడో, ముప్పయ్యో మీకు సరిగ్గా తెలీలేదు. మర్యాదగా సరిచూసుకోండి.",
      },
      options: ["Sorry, did you say thirteen or thirty?", "Sorry, thirteen or thirty, which you said?", "Thirteen or thirty? Say properly."],
      answer: 0,
      why: {
        en: "Start the question with did you say, and begin with sorry to sound kind.",
        te: "ప్రశ్న did you say తో మొదలవ్వాలి; ముందు sorry అంటే మర్యాదగా ఉంటుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Could you send me message with the details?",
      wrongIndex: 4,
      fix: "Could you send me a message with the details?",
      why: {
        en: "One message needs a before it; Telugu has no word like a.",
        te: "ఒక్క మెసేజ్ కాబట్టి ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A caller is speaking very fast, and you can't follow. Ask her kindly to slow down.",
        te: "ఫోన్ చేసినావిడ చాలా వేగంగా మాట్లాడుతున్నారు, మీకు అర్థం కావట్లేదు. మెల్లగా మాట్లాడమని మర్యాదగా అడగండి.",
      },
      expected: [
        "Could you speak a little more slowly, please?",
        "Could you speak more slowly, please?",
        "Sorry, could you speak more slowly?",
        "Sorry, could you say that again more slowly?",
      ],
      options: ["Could you speak a little more slowly, please?", "Speak slowly! I can't understand you.", "Could you to speak more slowly, please?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "The agent says your parcel will come in three days. Check that you heard it right.",
        te: "మీ పార్సెల్ మూడు రోజుల్లో వస్తుందని agent చెప్పారు. సరిగ్గా విన్నారా అని సరిచూసుకోండి.",
      },
      expected: ["Sorry, did you say three days?", "Did you say three days?", "Three days, is that right?"],
      options: ["Sorry, did you say three days?", "Sorry, did you say three day?", "Sorry, you are saying three days?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A call about a parcel", te: "పార్సెల్ గురించి ఫోన్" },
    scene: {
      en: "Your cousin in America has sent you a parcel. John, from the courier company, calls you from America.",
      te: "అమెరికాలో ఉన్న మీ కజిన్ మీకు ఒక పార్సెల్ పంపారు. courier కంపెనీ నుంచి జాన్ గారు అమెరికా నుంచి ఫోన్ చేశారు.",
    },
    partner: { en: "John (a courier company agent)", te: "జాన్ (courier కంపెనీ agent)" },
    voice: "us-m",
    skills: [
      { id: "again", label: { en: "Asking again", te: "మళ్ళీ అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hi, this is John from Swift Courier. I'm calling about a parcel from Ohio.",
        te: "హాయ్, నేను స్విఫ్ట్ courier నుంచి జాన్. ఒహాయో నుంచి వచ్చిన పార్సెల్ గురించి ఫోన్ చేస్తున్నాను.",
        hint: { en: "You missed his name. Ask him politely to say it again.", te: "ఆయన పేరు వినిపించలేదు. మళ్ళీ చెప్పమని మర్యాదగా అడగండి." },
        replies: [
          { say: "Sorry, I didn't catch your name. Could you say it again?", good: true, skill: "again" },
          { say: "Sorry, could you repeat your name, please?", good: true, skill: "again" },
          {
            say: "What? Who is this? Speak clearly!",
            good: false,
            skill: "polite",
            react: { en: "Oh, sorry. I'm John, from Swift Courier.", te: "ఓ, సారీ. నేను జాన్, స్విఫ్ట్ courier నుంచి." },
          },
        ],
      },
      {
        partner: "Sure. It's John. Your parcel will come on Friday, between two and four.",
        te: "తప్పకుండా. నా పేరు జాన్. మీ పార్సెల్ శుక్రవారం, రెండు నుంచి నాలుగు మధ్య వస్తుంది.",
        hint: { en: "He spoke fast. Ask him to say the time again, more slowly.", te: "ఆయన వేగంగా మాట్లాడారు. టైమ్ మళ్ళీ, ఇంకా మెల్లగా చెప్పమని అడగండి." },
        replies: [
          { say: "Sorry, could you say the time again more slowly?", good: true, skill: "again" },
          { say: "Sorry, could you tell the time again more slowly?", good: false, skill: "again" },
        ],
      },
      {
        partner: "Of course. Between two and four. Is your address near the bus stand?",
        te: "తప్పకుండా. రెండు నుంచి నాలుగు మధ్య. మీ అడ్రస్ బస్ స్టాండ్ దగ్గరేనా?",
        hint: { en: "Say no, and say the house is behind the temple.", te: "బస్ స్టాండ్ దగ్గర లేదని, ఇల్లు గుడి వెనకాల ఉందని చెప్పండి." },
        replies: [
          { say: "No, it's behind the temple, on Gandhi Road.", good: true, skill: "again" },
          { say: "No, it's behind of the temple, on Gandhi Road.", good: false, skill: "again", fixIt: "preposition" },
        ],
      },
      {
        partner: "Got it. The driver will call you before he comes. Have a nice day!",
        te: "అర్థమైంది. డ్రైవర్ వచ్చే ముందు మీకు ఫోన్ చేస్తారు. మంచి రోజు గడవాలి!",
        hint: { en: "Thank him, and end the call kindly.", te: "ఆయనకి థాంక్స్ చెప్పి, ఫోన్ మర్యాదగా పెట్టేయండి." },
        replies: [
          { say: "Thank you for calling. You too, bye!", good: true, skill: "polite" },
          { say: "Thanks you for calling. You too, bye!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
