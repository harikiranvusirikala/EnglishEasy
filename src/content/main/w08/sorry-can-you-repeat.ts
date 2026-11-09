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
    { en: "Sorry, I don't understand.", te: "sorry అండీ, నాకు అర్థం కావడం లేదు.", extra: ["not"] },
    { en: "Could you say that again?", te: "మళ్ళీ ఒకసారి చెప్తారా?", extra: ["tell"] },
    { en: "Can you speak slowly, please?", te: "కొంచెం నెమ్మదిగా మాట్లాడతారా, ప్లీజ్?", extra: ["slow"] },
    { en: "What does this word mean?", te: "ఈ పదానికి అర్థం ఏంటి?", extra: ["means"] },
    { en: "Please repeat the number.", te: "ప్లీజ్, ఆ నంబర్ మళ్ళీ చెప్పండి.", extra: ["repeating"] },
    { en: "Can you spell that, please?", te: "దాని స్పెల్లింగ్ కొంచెం చెప్తారా?", extra: ["spelling"] },
    { en: "Sorry, the line is not clear.", te: "sorry అండీ, లైన్ సరిగ్గా వినిపించడం లేదు.", extra: ["clean"] },
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
        te: ["మళ్ళీ ఒకసారి", "చెప్తారా?"],
        en: [
          { text: "Could", role: "action" },
          { text: "you", role: "who" },
          { text: "say that again?", role: "action" },
        ],
      },
      examples: [
        { en: "Sorry, I don't understand.", te: "sorry అండీ, నాకు అర్థం కావడం లేదు." },
        { en: "Could you say that again?", te: "మళ్ళీ ఒకసారి చెప్తారా?" },
        { en: "Can you speak slowly, please?", te: "కొంచెం నెమ్మదిగా మాట్లాడతారా, ప్లీజ్?" },
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
          example: { en: "Please repeat the number.", te: "ప్లీజ్, ఆ నంబర్ మళ్ళీ చెప్పండి." },
        },
        {
          form: "speak slowly / spell",
          useFor: { en: "When it is too fast, or a name is hard.", te: "చాలా వేగంగా ఉన్నప్పుడు, లేదా పేరు కష్టంగా ఉన్నప్పుడు." },
          example: { en: "Can you spell that, please?", te: "దాని స్పెల్లింగ్ కొంచెం చెప్తారా?" },
        },
        {
          form: "What does … mean?",
          useFor: { en: "When you don't know a word.", te: "ఒక పదం తెలియనప్పుడు." },
          example: { en: "What does this word mean?", te: "ఈ పదానికి అర్థం ఏంటి?" },
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
        en: "The question needs does, and then mean has no s: What does this word mean?",
        te: "ప్రశ్నలో does ఉండాలి, అప్పుడు mean కి s రాదు: What does this word mean?",
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
        en: "Understand takes no am with -ing, and not needs don't: Sorry, I don't understand.",
        te: "understand కి am, -ing రావు; not కి don't కావాలి: Sorry, I don't understand.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Could you say that ___?",
      te: "మళ్ళీ ఒకసారి చెప్తారా?",
      options: ["again", "repeat", "more"],
      answer: 0,
      why: {
        en: "Telugu మళ్ళీ is again, and it goes at the end: Could you say that again?",
        te: "'మళ్ళీ' = again, అది చివర వస్తుంది: Could you say that again?",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The agent speaks too fast. What do you say?", te: "ఏజెంట్ చాలా వేగంగా మాట్లాడుతున్నారు. ఏమంటారు?" },
      options: ["Can you speak slowly, please?", "Speak slow.", "You are too fast."],
      answer: 0,
      why: {
        en: "Ask with can and please; Speak slow sounds like an order: Can you speak slowly, please?",
        te: "can, please తో అడగండి; Speak slow ఆజ్ఞలా వినిపిస్తుంది: Can you speak slowly, please?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "What does this word means?",
      wrongIndex: 4,
      fix: "What does this word mean?",
      why: {
        en: "Does already has the s, so mean stays plain: What does this word mean?",
        te: "does లోనే s ఉంది, అందుకే mean కి s రాదు: What does this word mean?",
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
        te: "ఒకరు మీకు తెలియని పదం వాడారు. దాని అర్థం ఏంటని అడగండి.",
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
      te: "తప్పు బిల్ గురించి మీరు కస్టమర్ కేర్‌కి ఫోన్ చేశారు. ఏజెంట్ రాణి గారు చాలా వేగంగా మాట్లాడుతున్నారు.",
    },
    partner: { en: "Rani (customer care)", te: "రాణి (కస్టమర్ కేర్)" },
    skills: [{ id: "clarify", label: { en: "Asking again", te: "మళ్ళీ అడగడం" } }],
    turns: [
      {
        partner: "Hello, how can I help you?",
        te: "హలో, మీకు ఎలా సహాయం చేయగలను?",
        hint: { en: "Tell her why you are calling.", te: "ఎందుకు ఫోన్ చేశారో చెప్పండి." },
        replies: [
          { say: "I have a problem with my bill.", good: true },
          { say: "I have problem with my bill.", good: false },
        ],
      },
      {
        partner: "Tell me your account number, please.",
        te: "దయచేసి మీ అకౌంట్ నంబర్ చెప్పండి.",
        hint: { en: "She was too fast. Ask her politely to slow down.", te: "ఆవిడ చాలా వేగంగా చెప్పారు. నెమ్మదిగా మాట్లాడమని మర్యాదగా అడగండి." },
        replies: [
          { say: "Sorry, can you speak slowly?", good: true, skill: "clarify" },
          { say: "Sorry, can you speak slow?", good: false, skill: "clarify" },
          {
            say: "You talk too fast! Stop.",
            good: false,
            skill: "clarify",
            react: { en: "Sorry! I will speak slowly.", te: "sorry అండీ! నెమ్మదిగా మాట్లాడతాను." },
          },
        ],
      },
      {
        partner: "Your account number, please.",
        te: "మీ అకౌంట్ నంబర్ చెప్పండి.",
        hint: { en: "Say the digits one by one.", te: "అంకెలు ఒక్కొక్కటిగా చెప్పండి." },
        replies: [
          { say: "It is four five six seven.", good: true },
          { say: "It is four thousand five hundred sixty-seven.", good: false },
        ],
      },
      {
        partner: "We will fix it in two days.",
        te: "రెండు రోజుల్లో సరిచేస్తాం.",
        hint: { en: "You are not sure you heard it. Ask her to repeat.", te: "సరిగ్గా విన్నారో లేదో తెలియదు. మళ్ళీ చెప్పమని అడగండి." },
        replies: [
          { say: "Sorry, could you say that again?", good: true, skill: "clarify" },
          { say: "Sorry, could you tell again?", good: false, skill: "clarify" },
        ],
      },
    ],
  },
};
