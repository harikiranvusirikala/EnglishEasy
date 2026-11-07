import type { Activity, ReviewDay } from "../../types";

/** Week 1, Day 7 (CURRICULUM §3): the automatic review, plus a timeline (one verb on four days) and a 6-turn video call. */

const timeline = (id: string, sentence: string, te: string, answer: number): Activity => ({
  id,
  type: "fillBlank",
  sentence,
  te,
  options: ["go", "am going", "went", "will go"],
  answer,
  why: {
    en: "The time word tells you the form: every day = go, right now = am going, yesterday = went, tomorrow = will go.",
    te: "time word ని బట్టి form మారుతుంది: every day = go, right now = am going, yesterday = went, tomorrow = will go.",
  },
});

export const day: ReviewDay = {
  id: "w1-review",
  kind: "review",
  title: { en: "My Day", te: "నా రోజు" },
  extras: [
    timeline("t1", "I ___ to the market every day.", "నేను రోజూ మార్కెట్‌కి వెళ్తాను.", 0),
    timeline("t2", "I ___ to the market right now.", "నేను ఇప్పుడు మార్కెట్‌కి వెళ్తున్నాను.", 1),
    timeline("t3", "I ___ to the market yesterday.", "నేను నిన్న మార్కెట్‌కి వెళ్లాను.", 2),
    timeline("t4", "I ___ to the market tomorrow.", "నేను రేపు మార్కెట్‌కి వెళ్తాను.", 3),
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A video call about your day", te: "మీ రోజు గురించి వీడియో కాల్" },
      scene: {
        en: "A relative calls you on video. Talk about your day: every day, right now, yesterday and tomorrow.",
        te: "ఒక బంధువు మీకు వీడియో కాల్ చేశారు. మీ రోజు గురించి చెప్పండి: రోజూ, ఇప్పుడు, నిన్న, రేపు.",
      },
      partner: { en: "Relative", te: "బంధువు" },
      skills: [
        { id: "every", label: { en: "Every day", te: "రోజూ" } },
        { id: "now", label: { en: "Right now", te: "ఇప్పుడు" } },
        { id: "past", label: { en: "Yesterday", te: "నిన్న" } },
        { id: "will", label: { en: "Tomorrow", te: "రేపు" } },
      ],
      turns: [
        {
          partner: "Hello! How are you today?",
          te: "హలో! ఈ రోజు ఎలా ఉన్నావు?",
          hint: { en: "Say: I am fine, thank you.", te: "ఇలా చెప్పండి: I am fine, thank you." },
          replies: [
            { say: "I am fine, thank you.", good: true, skill: "every" },
            { say: "I fine, thank you.", good: false, skill: "every" },
            { say: "I will fine, thank you.", good: false, skill: "every" },
          ],
        },
        {
          partner: "What do you do every morning?",
          te: "ప్రతి ఉదయం నువ్వు ఏం చేస్తావు?",
          hint: { en: "Say: I walk every morning.", te: "ఇలా చెప్పండి: I walk every morning." },
          replies: [
            { say: "I walk every morning.", good: true, skill: "every" },
            { say: "I walking every morning.", good: false, skill: "every" },
            { say: "Every morning I walked.", good: false, skill: "every" },
          ],
        },
        {
          partner: "What are you doing now?",
          te: "ఇప్పుడు ఏం చేస్తున్నావు?",
          hint: { en: "Say: I am cooking now.", te: "ఇలా చెప్పండి: I am cooking now." },
          replies: [
            { say: "I am cooking now.", good: true, skill: "now" },
            { say: "I cooking now.", good: false, skill: "now" },
            { say: "Now I cook.", good: false, skill: "now" },
          ],
        },
        {
          partner: "What did you do yesterday?",
          te: "నిన్న నువ్వు ఏం చేశావు?",
          hint: { en: "Say: I went to the market.", te: "ఇలా చెప్పండి: I went to the market." },
          replies: [
            { say: "I went to the market.", good: true, skill: "past" },
            { say: "I go to the market.", good: false, skill: "past" },
            { say: "I goed to the market.", good: false, skill: "past" },
          ],
        },
        {
          partner: "Did you eat idli?",
          te: "ఇడ్లీ తిన్నావా?",
          hint: { en: "Say yes: Yes, I did.", te: "అవును అని చెప్పండి: Yes, I did." },
          replies: [
            { say: "Yes, I did.", good: true, skill: "past" },
            { say: "Yes, I ate idli.", good: true, skill: "past" },
            { say: "Yes, I do.", good: false, skill: "past" },
          ],
        },
        {
          partner: "What will you do tomorrow?",
          te: "రేపు నువ్వు ఏం చేస్తావు?",
          hint: { en: "Say: I will go to the temple.", te: "ఇలా చెప్పండి: I will go to the temple." },
          replies: [
            { say: "I will go to the temple.", good: true, skill: "will" },
            { say: "I will going to the temple.", good: false, skill: "will" },
            { say: "I go to the temple tomorrow.", good: false, skill: "will" },
          ],
        },
      ],
    },
  ],
};
