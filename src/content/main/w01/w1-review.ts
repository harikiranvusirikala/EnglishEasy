import type { Activity, ReviewDay } from "../../types";

/**
 * Week 1, Day 7 (CURRICULUM §3): the automatic review, plus a timeline (one verb on four days), two recognition items
 * (a negative and he / she + s, heard and understood, never built: they are built in Weeks 7 and 9) and a 6-turn video call.
 */

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
      id: "n1",
      type: "choose",
      prompt: { en: 'What does "I didn\'t go out." mean?', te: '"I didn\'t go out." అంటే ఏంటి?' },
      say: "I didn't go out.",
      options: ["నేను బయటికి వెళ్లలేదు.", "నేను బయటికి వెళ్లాను.", "నేను బయటికి వెళ్తాను."],
      answer: 0,
      why: {
        en: "Didn't means no about the past. I didn't go out means you stayed at home.",
        te: "didn't అంటే గతంలో చేయలేదు అని. I didn't go out అంటే బయటికి వెళ్లలేదు, ఇంట్లోనే ఉన్నారు.",
      },
    },
    {
      id: "n2",
      type: "choose",
      prompt: { en: 'What does "He works in an office." mean?', te: '"He works in an office." అంటే ఏంటి?' },
      say: "He works in an office.",
      options: ["ఆయన ఆఫీసులో పని చేస్తారు.", "నేను ఆఫీసులో పని చేస్తాను.", "వాళ్లు ఆఫీసులో పని చేస్తారు."],
      answer: 0,
      why: {
        en: "He is one man, and the action word gets an s with he: works. You will practice this in Week 7.",
        te: "He అంటే ఒక ఆయన; he తో verb కి s వస్తుంది: works. ఇది 7వ వారంలో practice చేస్తాం.",
      },
    },
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A video call about your day", te: "మీ రోజు గురించి వీడియో కాల్" },
      scene: {
        en: "Your cousin Jyothi calls you on video. Talk about your day: every day, right now, yesterday and tomorrow.",
        te: "మీ బంధువు జ్యోతి గారు మీకు వీడియో కాల్ చేశారు. మీ రోజు గురించి చెప్పండి: రోజూ, ఇప్పుడు, నిన్న, రేపు.",
      },
      partner: { en: "Jyothi (your cousin)", te: "జ్యోతి (బంధువు)" },
      skills: [
        { id: "every", label: { en: "Every day", te: "రోజూ" } },
        { id: "now", label: { en: "Right now", te: "ఇప్పుడు" } },
        { id: "past", label: { en: "Yesterday", te: "నిన్న" } },
        { id: "will", label: { en: "Tomorrow", te: "రేపు" } },
      ],
      turns: [
        {
          partner: "Hello! How are you today?",
          te: "హలో! ఈ రోజు ఎలా ఉన్నారు?",
          hint: { en: "Say how you are, and thank her.", te: "మీరు ఎలా ఉన్నారో చెప్పి, thank you చెప్పండి." },
          replies: [
            { say: "I am fine, thank you.", good: true, skill: "every" },
            { say: "I fine, thank you.", good: false, skill: "every", fixIt: "be" },
            {
              say: "Fine. Why are you calling?",
              good: false,
              react: { en: "Just to say hello! I missed you.", te: "ఊరికే, పలకరిద్దామని! మీరు గుర్తొచ్చారు." },
            },
          ],
        },
        {
          partner: "What do you do every morning?",
          te: "ప్రతి ఉదయం మీరు ఏం చేస్తారు?",
          hint: { en: "Say one thing you do every morning.", te: "ప్రతి ఉదయం మీరు చేసే ఒక పని చెప్పండి." },
          replies: [
            { say: "I walk every morning.", good: true, skill: "every" },
            { say: "I walking every morning.", good: false, skill: "every", fixIt: "state-ing" },
            { say: "Every morning I walked.", good: false, skill: "every" },
          ],
        },
        {
          partner: "What are you doing now?",
          te: "ఇప్పుడు ఏం చేస్తున్నారు?",
          hint: { en: "Say what you are doing right now.", te: "ఇప్పుడు మీరు ఏం చేస్తున్నారో చెప్పండి." },
          replies: [
            { say: "I am cooking now.", good: true, skill: "now" },
            { say: "I cooking now.", good: false, skill: "now", fixIt: "be" },
            { say: "Now I cook.", good: false, skill: "now" },
          ],
        },
        {
          partner: "What did you do yesterday?",
          te: "నిన్న మీరు ఏం చేశారు?",
          hint: { en: "Say where you went yesterday.", te: "నిన్న ఎక్కడికి వెళ్లారో చెప్పండి." },
          replies: [
            { say: "I went to the market.", good: true, skill: "past" },
            { say: "I go to the market.", good: false, skill: "past" },
            { say: "I goed to the market.", good: false, skill: "past" },
          ],
        },
        {
          partner: "Did you eat idli?",
          te: "ఇడ్లీ తిన్నారా?",
          hint: { en: "Say yes, the short way or the full way.", te: "అవును అని చిన్నగా గానీ, పూర్తి వాక్యంగా గానీ చెప్పండి." },
          replies: [
            { say: "Yes, I did.", good: true, skill: "past" },
            { say: "Yes, I ate idli.", good: true, skill: "past" },
            { say: "Yes, I do.", good: false, skill: "past" },
          ],
        },
        {
          partner: "What will you do tomorrow?",
          te: "రేపు మీరు ఏం చేస్తారు?",
          hint: { en: "Say one plan for tomorrow.", te: "రేపటి మీ ప్లాన్ ఒకటి చెప్పండి." },
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
