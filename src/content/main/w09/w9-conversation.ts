import type { ConversationDay } from "../../types";

/** Week 9, Day 6 (CURRICULUM §3): Conversation Day telling about a trip and a function. Past tense stories; no new grammar. */
export const day: ConversationDay = {
  id: "w9-conversation",
  kind: "conversation",
  title: { en: "Telling About a Trip", te: "ప్రయాణం గురించి" },
  summary: {
    en: "Use this week's past tense: tell a friend about a temple trip, and tell a relative about a wedding you went to.",
    te: "ఈ వారం నేర్చుకున్న గతం వాడండి: గుడి యాత్ర గురించి స్నేహితులకు, మీరు వెళ్ళిన పెళ్లి గురించి బంధువులకు చెప్పండి.",
  },
  topics: ["travel", "festivals", "family"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Back from Tirupati", te: "తిరుపతి నుండి తిరిగొచ్చాక" },
    lines: [
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "Hello, Kamala! Where were you last week?", te: "నమస్తే కమల! పోయిన వారం ఎక్కడ ఉన్నారు?" },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "I went to Tirupati with my sister.", te: "నేను మా చెల్లెలితో తిరుపతి వెళ్ళాను." },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "How did you go?", te: "ఎలా వెళ్ళారు?" },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "We took the train on Monday.", te: "సోమవారం రైలులో వెళ్ళాం." },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "Was it crowded at the temple?", te: "గుడిలో రద్దీగా ఉండిందా?" },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Yes! We waited for five hours.", te: "అవును! ఐదు గంటలు ఎదురుచూశాం." },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "Did you buy laddus?", te: "లడ్డూలు కొన్నారా?" },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Yes, I bought ten laddus.", te: "అవును, పది లడ్డూలు కొన్నాను." },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "When did you come back?", te: "ఎప్పుడు తిరిగి వచ్చారు?" },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Two days ago.", te: "రెండు రోజుల క్రితం." },
    ],
    questions: [
      { prompt: { en: "Where did Kamala go?", te: "కమల ఎక్కడికి వెళ్ళింది?" }, options: ["To Tirupati", "To Vijayawada", "To Hyderabad"], answer: 0 },
      { prompt: { en: "How long did they wait at the temple?", te: "గుడిలో వాళ్ళు ఎంతసేపు ఎదురుచూశారు?" }, options: ["Two hours", "Five hours", "Ten hours"], answer: 1 },
      { prompt: { en: "When did Kamala come back?", te: "కమల ఎప్పుడు తిరిగి వచ్చింది?" }, options: ["Yesterday", "Two days ago", "Last month"], answer: 1 },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell a friend you went to Tirupati last week.",
        te: "పోయిన వారం తిరుపతి వెళ్ళానని మీ స్నేహితులకు చెప్పండి.",
      },
      expected: ["I went to Tirupati last week."],
      options: ["I went to Tirupati last week.", "I go to Tirupati last week.", "I went to Tirupati before week."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend went to a wedding. Ask how she went there.",
        te: "మీ స్నేహితురాలు ఒక పెళ్లికి వెళ్ళింది. ఎలా వెళ్ళిందో అడగండి.",
      },
      expected: ["How did you go?", "How did you go there?"],
      options: ["How you went?", "How did you go?", "How did you went?"],
      answer: 1,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "Say that the temple was very crowded.",
        te: "గుడిలో చాలా రద్దీగా ఉండిందని చెప్పండి.",
      },
      expected: ["The temple was very crowded.", "It was very crowded."],
      options: ["The temple was very crowded.", "The temple were very crowded.", "The temple is very crowded yesterday."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A temple trip", te: "గుడి యాత్ర" },
      scene: {
        en: "You came back from Srisailam. Your friend Prasad asks about the trip.",
        te: "మీరు శ్రీశైలం నుండి తిరిగి వచ్చారు. మీ స్నేహితుడు ప్రసాద్ యాత్ర గురించి అడుగుతున్నారు.",
      },
      partner: { en: "Prasad (a friend)", te: "ప్రసాద్ (స్నేహితుడు)" },
      skills: [
        { id: "past", label: { en: "Past words", te: "గతం పదాలు" } },
        { id: "when", label: { en: "last / ago", te: "last / ago వాడకం" } },
      ],
      turns: [
        {
          partner: "You look happy! Where did you go?",
          te: "సంతోషంగా ఉన్నారు! ఎక్కడికి వెళ్ళారు?",
          hint: { en: "Say: I went to Srisailam last week.", te: "ఇలా చెప్పండి: I went to Srisailam last week." },
          replies: [
            { say: "I went to Srisailam last week.", good: true, skill: "past" },
            { say: "I go to Srisailam last week.", good: false, skill: "past" },
          ],
        },
        {
          partner: "How did you go?",
          te: "ఎలా వెళ్ళారు?",
          hint: { en: "Say: We took a bus.", te: "ఇలా చెప్పండి: We took a bus." },
          replies: [
            { say: "We took a bus.", good: true, skill: "past" },
            { say: "We taked a bus.", good: false, skill: "past" },
          ],
        },
        {
          partner: "Was it a long trip?",
          te: "ప్రయాణం చాలా సేపా?",
          hint: { en: "Say: Yes, it was six hours.", te: "ఇలా చెప్పండి: Yes, it was six hours." },
          replies: [
            { say: "Yes, it was six hours.", good: true, skill: "past" },
            { say: "Yes, it were six hours.", good: false, skill: "past" },
          ],
        },
        {
          partner: "What did you do there?",
          te: "అక్కడ ఏం చేశారు?",
          hint: { en: "Say: We prayed and ate prasadam.", te: "ఇలా చెప్పండి: We prayed and ate prasadam." },
          replies: [
            { say: "We prayed and ate prasadam.", good: true, skill: "past" },
            { say: "We pray and eat prasadam.", good: false, skill: "past" },
          ],
        },
        {
          partner: "When did you come back?",
          te: "ఎప్పుడు తిరిగి వచ్చారు?",
          hint: { en: "Say: We came back two days ago.", te: "ఇలా చెప్పండి: We came back two days ago." },
          replies: [
            { say: "We came back two days ago.", good: true, skill: "when" },
            { say: "We came back before two days.", good: false, skill: "when" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "About a wedding", te: "ఒక పెళ్లి గురించి" },
      scene: {
        en: "Your aunt Kamala could not go to Ravi's wedding. Tell her about it.",
        te: "మీ అత్త కమల రవి పెళ్లికి వెళ్ళలేకపోయింది. ఆమెకు పెళ్లి గురించి చెప్పండి.",
      },
      partner: { en: "Kamala (your aunt)", te: "కమల (మీ అత్త)" },
      skills: [{ id: "past", label: { en: "Past words", te: "గతం పదాలు" } }],
      turns: [
        {
          partner: "Did you go to Ravi's wedding?",
          te: "రవి పెళ్లికి వెళ్ళావా?",
          hint: { en: "Say: Yes, I went on Sunday.", te: "ఇలా చెప్పండి: Yes, I went on Sunday." },
          replies: [
            { say: "Yes, I went on Sunday.", good: true, skill: "past" },
            { say: "Yes, I goed on Sunday.", good: false, skill: "past" },
          ],
        },
        {
          partner: "Was it nice?",
          te: "బాగా జరిగిందా?",
          hint: { en: "Say: Yes, it was very nice.", te: "ఇలా చెప్పండి: Yes, it was very nice." },
          replies: [
            { say: "Yes, it was very nice.", good: true, skill: "past" },
            { say: "Yes, it is very nice.", good: false, skill: "past" },
          ],
        },
        {
          partner: "What did you eat?",
          te: "ఏం తిన్నావు?",
          hint: { en: "Say: We ate pulihora and sweets.", te: "ఇలా చెప్పండి: We ate pulihora and sweets." },
          replies: [
            { say: "We ate pulihora and sweets.", good: true, skill: "past" },
            { say: "We eated pulihora and sweets.", good: false, skill: "past" },
          ],
        },
        {
          partner: "Who did you meet there?",
          te: "అక్కడ ఎవరిని కలిశావు?",
          hint: { en: "Say: I met many old friends.", te: "ఇలా చెప్పండి: I met many old friends." },
          replies: [
            { say: "I met many old friends.", good: true, skill: "past" },
            { say: "I meet many old friends.", good: false, skill: "past" },
          ],
        },
      ],
    },
  ],
};
