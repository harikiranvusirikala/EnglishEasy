import type { Activity, Bi, ReviewDay } from "../../types";

/**
 * Week 12, Day 7 (CURRICULUM §3): Stage 1 Review — the automatic review (with a role play from the Conversation Day),
 * a mixed round across tenses and questions, and a 6-turn celebration call that uses all of Stage 1.
 */

const pick = (id: string, sentence: string, te: string, options: string[], answer: number, why: Bi): Activity => ({
  id,
  type: "fillBlank",
  sentence,
  te,
  options,
  answer,
  why,
});

export const day: ReviewDay = {
  id: "w12-review",
  kind: "review",
  title: { en: "Stage 1 Review", te: "పునాది పునశ్చరణ" },
  extras: [
    pick("q1", "She ___ to the temple every day.", "ఆమె రోజూ గుడికి వెళ్తుంది.", ["goes", "went", "going"], 0, {
      en: "Every day, with she: goes.",
      te: "రోజూ, she తో: goes.",
    }),
    pick("q2", "Right now I ___ cooking.", "ఇప్పుడు నేను వంట చేస్తున్నాను.", ["am", "was", "will"], 0, {
      en: "Now: am … -ing.",
      te: "ఇప్పుడు: am … -ing.",
    }),
    pick("q3", "Yesterday we ___ a film.", "నిన్న మేము సినిమా చూశాం.", ["watched", "watch", "will watch"], 0, {
      en: "Yesterday: watched.",
      te: "నిన్న: watched.",
    }),
    pick("q4", "Tomorrow I ___ call you.", "రేపు నేను మీకు ఫోన్ చేస్తాను.", ["will", "did", "am"], 0, {
      en: "Tomorrow: will.",
      te: "రేపు: will.",
    }),
    pick("q5", "___ you eat lunch?", "మీరు భోజనం చేశారా?", ["Did", "Do", "Are"], 0, {
      en: "A past question: did.",
      te: "గతం ప్రశ్న: did.",
    }),
    pick("q6", "I was tired, ___ I slept early.", "నాకు అలసటగా ఉంది, అందుకే తొందరగా పడుకున్నాను.", ["so", "because", "but"], 0, {
      en: "The result: so.",
      te: "ఫలితం: so.",
    }),
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Celebrating Stage 1", te: "స్టేజ్ 1 పండుగ" },
      scene: {
        en: "You finished Stage 1! Your friend Ravi calls to celebrate. Talk about your English: every day, yesterday, now and tomorrow.",
        te: "మీరు స్టేజ్ 1 పూర్తి చేశారు! మీ స్నేహితుడు రవి అభినందించడానికి ఫోన్ చేశారు. మీ ఇంగ్లీష్ గురించి మాట్లాడండి: రోజూ, నిన్న, ఇప్పుడు, రేపు.",
      },
      partner: { en: "Ravi (a friend)", te: "రవి (స్నేహితుడు)" },
      skills: [
        { id: "every", label: { en: "Every day", te: "రోజూ" } },
        { id: "past", label: { en: "Yesterday", te: "నిన్న" } },
        { id: "now", label: { en: "Right now", te: "ఇప్పుడు" } },
        { id: "will", label: { en: "Tomorrow", te: "రేపు" } },
        { id: "why", label: { en: "Because", te: "ఎందుకంటే" } },
      ],
      turns: [
        {
          partner: "Hello! You finished Stage 1!",
          te: "హలో! మీరు స్టేజ్ 1 పూర్తి చేశారు!",
          hint: { en: "Say: Yes! I am very happy.", te: "ఇలా చెప్పండి: Yes! I am very happy." },
          replies: [
            { say: "Yes! I am very happy.", good: true, skill: "now" },
            { say: "Yes! I very happy.", good: false, skill: "now" },
          ],
        },
        {
          partner: "What do you do every day?",
          te: "రోజూ ఏం చేస్తారు?",
          hint: { en: "Say: I practice English every morning.", te: "ఇలా చెప్పండి: I practice English every morning." },
          replies: [
            { say: "I practice English every morning.", good: true, skill: "every" },
            { say: "I practicing English every morning.", good: false, skill: "every" },
          ],
        },
        {
          partner: "What did you learn yesterday?",
          te: "నిన్న ఏం నేర్చుకున్నారు?",
          hint: { en: "Say: I learned questions with did.", te: "ఇలా చెప్పండి: I learned questions with did." },
          replies: [
            { say: "I learned questions with did.", good: true, skill: "past" },
            { say: "I learn questions with did.", good: false, skill: "past" },
          ],
        },
        {
          partner: "What are you doing now?",
          te: "ఇప్పుడు ఏం చేస్తున్నారు?",
          hint: { en: "Say: I am talking to you in English!", te: "ఇలా చెప్పండి: I am talking to you in English!" },
          replies: [
            { say: "I am talking to you in English!", good: true, skill: "now" },
            { say: "I talking to you in English!", good: false, skill: "now" },
          ],
        },
        {
          partner: "Will you start Stage 2?",
          te: "స్టేజ్ 2 మొదలుపెడతారా?",
          hint: { en: "Say: Yes, I will start next week.", te: "ఇలా చెప్పండి: Yes, I will start next week." },
          replies: [
            { say: "Yes, I will start next week.", good: true, skill: "will" },
            { say: "Yes, I will starting next week.", good: false, skill: "will" },
          ],
        },
        {
          partner: "Why do you want to learn more?",
          te: "ఇంకా ఎందుకు నేర్చుకోవాలనుకుంటున్నారు?",
          hint: { en: "Say: Because English makes me confident.", te: "ఇలా చెప్పండి: Because English makes me confident." },
          replies: [
            { say: "Because English makes me confident.", good: true, skill: "why" },
            { say: "Because of English makes me confident.", good: false, skill: "why" },
          ],
        },
      ],
    },
  ],
};
