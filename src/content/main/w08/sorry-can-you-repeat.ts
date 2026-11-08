import type { Lesson } from "../../types";

/** Week 8, Day 5 (CURRICULUM §3): clarifying phrases — Sorry, I don't understand; Could you say that again? */
export const day: Lesson = {
  id: "sorry-can-you-repeat",
  kind: "lesson",
  title: { en: "Sorry, Can You Repeat?", te: "అర్థం కాకపోతే" },
  subtitle: "say that again / slowly",
  summary: {
    en: "Learn what to say when you don't understand: ask people to repeat, speak slowly or spell a word.",
    te: "అర్థం కానప్పుడు ఏమనాలో నేర్చుకుందాం: మళ్ళీ చెప్పమని, నెమ్మదిగా మాట్లాడమని, స్పెల్లింగ్ చెప్పమని అడగండి.",
  },
  seo: {
    title: "Sorry, I Don't Understand: Asking to Repeat in English for Telugu Speakers",
    description:
      "Say Sorry, I don't understand and Could you say that again? in English. Simple lessons for Telugu speakers, with Telugu explanations.",
  },
  pattern: [
    { text: "Could", role: "action" },
    { text: "you", role: "who" },
    { text: "say that again?", role: "action" },
  ],
  core: [
    { en: "Sorry, I don't understand.", te: "క్షమించండి, నాకు అర్థం కాలేదు.", extra: ["not"] },
    { en: "Could you say that again?", te: "మళ్ళీ ఒకసారి చెప్పగలరా?", extra: ["tell"] },
    { en: "Can you speak slowly, please?", te: "దయచేసి నెమ్మదిగా మాట్లాడగలరా?", extra: ["slow"] },
    { en: "What does this word mean?", te: "ఈ పదానికి అర్థం ఏమిటి?", extra: ["means"] },
    { en: "Please repeat the number.", te: "దయచేసి ఆ నంబర్ మళ్ళీ చెప్పండి.", extra: ["repeating"] },
    { en: "Can you spell that, please?", te: "దయచేసి దాని స్పెల్లింగ్ చెప్పగలరా?", extra: ["spelling"] },
    { en: "Sorry, the line is not clear.", te: "క్షమించండి, లైన్ సరిగ్గా వినిపించడం లేదు.", extra: ["clean"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "If you don't understand someone today, say: Sorry, could you say that again?",
    te: "ఈ రోజు ఎవరైనా చెప్పింది అర్థం కాకపోతే ఇలా అనండి: Sorry, could you say that again?",
  },
  words: [
    { en: "understand", te: "అర్థం చేసుకోవడం" },
    { en: "repeat", te: "మళ్ళీ చెప్పడం" },
    { en: "again", te: "మళ్ళీ" },
    { en: "spell", te: "స్పెల్లింగ్ చెప్పడం" },
    { en: "clear", te: "స్పష్టంగా" },
  ],
  grammar: ["can-could", "politeness-softening", "present-simple"],
  topics: ["phone", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "When you don't understand", te: "అర్థం కానప్పుడు" },
      body: {
        en: "It is okay not to understand. Say Sorry, I don't understand, then ask: Could you say that again? Can you speak slowly, please? People are happy to help.",
        te: "అర్థం కాకపోవడం తప్పు కాదు. Sorry, I don't understand అని చెప్పి, అడగండి: Could you say that again? Can you speak slowly, please? అందరూ సంతోషంగా సహాయం చేస్తారు.",
      },
      bridge: {
        te: ["మళ్ళీ ఒకసారి", "చెప్పగలరా?"],
        en: [
          { text: "Could", role: "action" },
          { text: "you", role: "who" },
          { text: "say that again?", role: "action" },
        ],
      },
      examples: [
        { en: "Sorry, I don't understand.", te: "క్షమించండి, నాకు అర్థం కాలేదు." },
        { en: "Could you say that again?", te: "మళ్ళీ ఒకసారి చెప్పగలరా?" },
        { en: "Can you speak slowly, please?", te: "దయచేసి నెమ్మదిగా మాట్లాడగలరా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What to ask", te: "ఏమని అడగాలి" },
      items: [
        {
          form: "say that again / repeat",
          useFor: { en: "When you did not hear well.", te: "సరిగ్గా వినిపించనప్పుడు." },
          example: { en: "Please repeat the number.", te: "దయచేసి ఆ నంబర్ మళ్ళీ చెప్పండి." },
        },
        {
          form: "speak slowly / spell",
          useFor: { en: "When it is too fast, or a name is hard.", te: "చాలా వేగంగా ఉన్నప్పుడు, లేదా పేరు కష్టంగా ఉన్నప్పుడు." },
          example: { en: "Can you spell that, please?", te: "దయచేసి దాని స్పెల్లింగ్ చెప్పగలరా?" },
        },
        {
          form: "What does … mean?",
          useFor: { en: "When you don't know a word.", te: "ఒక పదం తెలియనప్పుడు." },
          example: { en: "What does this word mean?", te: "ఈ పదానికి అర్థం ఏమిటి?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I am not understanding.",
      right: "Sorry, I don't understand.",
      why: {
        en: "Understand is not used with am … -ing. Say I don't understand.",
        te: "understand ని am … -ing తో వాడరు. I don't understand అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "What this word means?",
      right: "What does this word mean?",
      why: {
        en: "The question needs does, and mean has no s.",
        te: "ప్రశ్నలో does ఉండాలి, mean కి s ఉండదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I am not understanding.", "Sorry, I don't understand.", "Sorry, I not understand."],
      answer: 1,
      why: {
        en: "Say: Sorry, I don't understand.",
        te: "ఇలా అనాలి: Sorry, I don't understand.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Could you say that ___?",
      te: "మళ్ళీ ఒకసారి చెప్పగలరా?",
      options: ["again", "back", "more"],
      answer: 0,
      why: {
        en: "Say that again.",
        te: "say that again (మళ్ళీ చెప్పండి).",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The agent speaks too fast. What do you say?", te: "ఏజెంట్ చాలా వేగంగా మాట్లాడుతున్నారు. ఏమంటారు?" },
      options: ["Can you speak slowly, please?", "Speak slow.", "You are too fast."],
      answer: 0,
      why: {
        en: "Ask politely: Can you speak slowly, please?",
        te: "మర్యాదగా అడగండి: Can you speak slowly, please?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "What does this word means?",
      wrongIndex: 4,
      fix: "What does this word mean?",
      why: {
        en: "After does, mean has no s.",
        te: "does తర్వాత mean కి s ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You did not hear a phone number. Ask the person to repeat it.",
        te: "ఒక ఫోన్ నంబర్ మీకు సరిగ్గా వినిపించలేదు. మళ్ళీ చెప్పమని అడగండి.",
      },
      expected: ["Please repeat the number.", "Could you say that again?", "Can you repeat the number, please?"],
      options: ["Please repeat the number.", "Please repeating the number.", "Repeat again the number."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Someone uses a word you don't know. Ask what it means.",
        te: "ఒకరు మీకు తెలియని పదం వాడారు. దాని అర్థం ఏమిటని అడగండి.",
      },
      expected: ["What does this word mean?", "What does that mean?"],
      options: ["What this word means?", "What does this word mean?", "What is mean this word?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A fast customer-care agent", te: "వేగంగా మాట్లాడే కస్టమర్ కేర్" },
    scene: {
      en: "You call customer care about a wrong bill. Rani, the agent, speaks very fast.",
      te: "తప్పు బిల్ గురించి మీరు కస్టమర్ కేర్‌కి ఫోన్ చేశారు. ఏజెంట్ రాణి చాలా వేగంగా మాట్లాడుతోంది.",
    },
    partner: { en: "Rani (customer care)", te: "రాణి (కస్టమర్ కేర్)" },
    skills: [{ id: "clarify", label: { en: "Asking again", te: "మళ్ళీ అడగడం" } }],
    turns: [
      {
        partner: "Hello, how can I help you?",
        te: "హలో, మీకు ఎలా సహాయం చేయగలను?",
        hint: { en: "Say: I have a problem with my bill.", te: "ఇలా చెప్పండి: I have a problem with my bill." },
        replies: [
          { say: "I have a problem with my bill.", good: true },
          { say: "I have problem with my bill.", good: false },
        ],
      },
      {
        partner: "Tell me your account number, please.",
        te: "దయచేసి మీ అకౌంట్ నంబర్ చెప్పండి.",
        hint: { en: "She was too fast. Say: Sorry, can you speak slowly?", te: "ఆమె చాలా వేగంగా చెప్పింది. అనండి: Sorry, can you speak slowly?" },
        replies: [
          { say: "Sorry, can you speak slowly?", good: true, skill: "clarify" },
          { say: "Sorry, can you speak slow?", good: false, skill: "clarify" },
        ],
      },
      {
        partner: "Your account number, please.",
        te: "మీ అకౌంట్ నంబర్ చెప్పండి.",
        hint: { en: "Say the digits one by one: It is four five six seven.", te: "అంకెలు ఒక్కొక్కటిగా చెప్పండి: It is four five six seven." },
        replies: [
          { say: "It is four five six seven.", good: true },
          { say: "It is four thousand five hundred sixty-seven.", good: false },
        ],
      },
      {
        partner: "We will fix it in two days.",
        te: "రెండు రోజుల్లో సరిచేస్తాం.",
        hint: { en: "Check it: Sorry, could you say that again?", te: "నిర్ధారించుకోండి: Sorry, could you say that again?" },
        replies: [
          { say: "Sorry, could you say that again?", good: true, skill: "clarify" },
          { say: "Sorry, could you tell again?", good: false, skill: "clarify" },
        ],
      },
    ],
  },
};
