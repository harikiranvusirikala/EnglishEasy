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
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Hello, Jyothi! Where were you last week?", te: "నమస్తే జ్యోతి గారు! పోయిన వారం ఎక్కడ ఉన్నారు?" },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "I went to Tirupati with my sister.", te: "నేను మా చెల్లెలితో తిరుపతి వెళ్ళాను." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "How did you go?", te: "ఎలా వెళ్ళారు?" },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "We took the train on Monday.", te: "సోమవారం రైలులో వెళ్ళాం." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Was it crowded at the temple?", te: "గుడిలో రద్దీగా ఉండిందా?" },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Yes! We waited for five hours.", te: "అవును! ఐదు గంటలు ఎదురుచూశాం." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Did you buy laddus?", te: "లడ్డూలు కొన్నారా?" },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Yes, I bought ten laddus.", te: "అవును, పది లడ్డూలు కొన్నాను." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "When did you come back?", te: "ఎప్పుడు తిరిగి వచ్చారు?" },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Two days ago.", te: "రెండు రోజుల క్రితం." },
    ],
    questions: [
      { prompt: { en: "What are they talking about?", te: "వాళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" }, options: ["A temple trip", "A wedding", "A visit to the doctor"], answer: 0 },
      { prompt: { en: "Where did Jyothi go?", te: "జ్యోతి ఎక్కడికి వెళ్ళారు?" }, options: ["To Tirupati", "To Vijayawada", "To Hyderabad"], answer: 0 },
      { prompt: { en: "How long did they wait at the temple?", te: "గుడిలో వాళ్ళు ఎంతసేపు ఎదురుచూశారు?" }, options: ["Two hours", "Five hours", "Ten hours"], answer: 1 },
      { prompt: { en: "When did Jyothi come back?", te: "జ్యోతి ఎప్పుడు తిరిగి వచ్చారు?" }, options: ["Yesterday", "Two days ago", "Last month"], answer: 1 },
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
        te: "మీ స్నేహితురాలు ఒక పెళ్ళికి వెళ్ళారు. ఎలా వెళ్ళారో అడగండి.",
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
        en: "You came back from Srisailam. Your friend David asks about the trip.",
        te: "మీరు శ్రీశైలం నుండి తిరిగి వచ్చారు. మీ స్నేహితుడు డేవిడ్ యాత్ర గురించి అడుగుతున్నారు.",
      },
      partner: { en: "David (a friend)", te: "డేవిడ్ (స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "past", label: { en: "Past words", te: "గతం పదాలు" } },
        { id: "when", label: { en: "last / ago", te: "last / ago వాడకం" } },
      ],
      turns: [
        {
          partner: "You look happy! Where did you go?",
          te: "సంతోషంగా ఉన్నారు! ఎక్కడికి వెళ్ళారు?",
          hint: { en: "Say where you went, and when.", te: "ఎక్కడికి, ఎప్పుడు వెళ్ళారో చెప్పండి." },
          replies: [
            { say: "I went to Srisailam last week.", good: true, skill: "past" },
            { say: "I go to Srisailam last week.", good: false, skill: "past" },
            {
              say: "Why do you ask?",
              good: false,
              react: { en: "Just asking! You look so happy.", te: "ఊరికే అడిగాను! చాలా సంతోషంగా కనిపిస్తున్నారు." },
            },
          ],
        },
        {
          partner: "How did you go?",
          te: "ఎలా వెళ్ళారు?",
          hint: { en: "Say how you travelled.", te: "దేనిలో వెళ్ళారో చెప్పండి." },
          replies: [
            { say: "We took a bus.", good: true, skill: "past" },
            { say: "We taked a bus.", good: false, skill: "past" },
          ],
        },
        {
          partner: "Was it a long trip?",
          te: "ప్రయాణం చాలా సేపు పట్టిందా?",
          hint: { en: "Say yes, and how many hours it took.", te: "అవును అని, ఎన్ని గంటలు పట్టిందో చెప్పండి." },
          replies: [
            { say: "Yes, it was six hours.", good: true, skill: "past" },
            { say: "Yes, it were six hours.", good: false, skill: "past" },
          ],
        },
        {
          partner: "What did you do there?",
          te: "అక్కడ ఏం చేశారు?",
          hint: { en: "Say two things you did at the temple.", te: "గుడిలో మీరు చేసిన రెండు పనులు చెప్పండి." },
          replies: [
            { say: "We prayed and ate prasadam.", good: true, skill: "past" },
            { say: "We pray and eat prasadam.", good: false, skill: "past" },
          ],
        },
        {
          partner: "When did you come back?",
          te: "ఎప్పుడు తిరిగి వచ్చారు?",
          hint: { en: "Say how many days ago you came back.", te: "ఎన్ని రోజుల క్రితం వచ్చారో చెప్పండి." },
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
        en: "Your aunt Kamala could not go to Satish's wedding. Tell her about it.",
        te: "మీ అత్త కమల గారు సతీష్ పెళ్ళికి వెళ్ళలేకపోయారు. ఆవిడకి పెళ్ళి గురించి చెప్పండి.",
      },
      partner: { en: "Kamala (your aunt)", te: "కమల (మీ అత్త)" },
      skills: [{ id: "past", label: { en: "Past words", te: "గతం పదాలు" } }],
      turns: [
        {
          partner: "Did you go to Satish's wedding?",
          te: "సతీష్ పెళ్ళికి వెళ్ళారా?",
          hint: { en: "Say yes, and which day you went.", te: "అవును అని, ఏ రోజు వెళ్ళారో చెప్పండి." },
          replies: [
            { say: "Yes, I went on Sunday.", good: true, skill: "past" },
            { say: "Yes, I goed on Sunday.", good: false, skill: "past" },
          ],
        },
        {
          partner: "Was it nice?",
          te: "బాగా జరిగిందా?",
          hint: { en: "Tell her how the wedding was.", te: "పెళ్ళి ఎలా జరిగిందో చెప్పండి." },
          replies: [
            { say: "Yes, it was very nice.", good: true, skill: "past" },
            { say: "Yes, it is very nice.", good: false, skill: "past" },
            {
              say: "Why didn't you come? Everyone asked!",
              good: false,
              react: { en: "I wasn't well. I felt so bad.", te: "నాకు ఒంట్లో బాగాలేదు. రాలేకపోయినందుకు చాలా బాధపడ్డాను." },
            },
          ],
        },
        {
          partner: "What did you eat?",
          te: "ఏం తిన్నారు?",
          hint: { en: "Name two things you ate.", te: "మీరు తిన్న రెండు వంటకాలు చెప్పండి." },
          replies: [
            { say: "We ate pulihora and sweets.", good: true, skill: "past" },
            { say: "We eated pulihora and sweets.", good: false, skill: "past" },
          ],
        },
        {
          partner: "Who did you meet there?",
          te: "అక్కడ ఎవరిని కలిశారు?",
          hint: { en: "Say who you met there.", te: "అక్కడ ఎవరెవరిని కలిశారో చెప్పండి." },
          replies: [
            { say: "I met many old friends.", good: true, skill: "past" },
            { say: "I meet many old friends.", good: false, skill: "past" },
          ],
        },
      ],
    },
  ],
};
