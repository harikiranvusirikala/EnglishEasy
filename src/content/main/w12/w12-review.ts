import type { Activity, Bi, ReviewDay } from "../../types";

/**
 * Week 12, Day 7 (CURRICULUM §3): Stage 1 Review — the automatic review (with a role play from the Conversation Day),
 * a mixed round across tenses and questions, the 30-second speaking mission (Checkpoint 1, CURRICULUM §2b), and a 6-turn
 * celebration call that uses all of Stage 1.
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
    pick("q1", "She ___ to the temple every day.", "ఆవిడ రోజూ గుడికి వెళ్తారు.", ["goes", "go", "going"], 0, {
      en: "Every day, one person (she): add s to the verb. She goes to the temple every day.",
      te: "రోజూ జరిగేది, ఒక్కరు (she) అయితే verb కి s: She goes to the temple every day.",
    }),
    pick("q2", "Right now I ___ cooking.", "ఇప్పుడు నేను వంట చేస్తున్నాను.", ["am", "was", "will"], 0, {
      en: "Right now it is happening, so am with -ing: Right now I am cooking.",
      te: "ఇప్పుడు జరుగుతోంది, అందుకే am తో -ing: Right now I am cooking.",
    }),
    pick("q3", "Yesterday we ___ a film.", "నిన్న మేము సినిమా చూశాం.", ["watched", "watch", "will watch"], 0, {
      en: "Yesterday is past, so watch becomes watched: Yesterday we watched a film.",
      te: "నిన్న అంటే past, watch కాదు watched: Yesterday we watched a film.",
    }),
    pick("q4", "Tomorrow I ___ call you.", "రేపు నేను మీకు ఫోన్ చేస్తాను.", ["will", "did", "am"], 0, {
      en: "Tomorrow is still to come, so will goes before call: Tomorrow I will call you.",
      te: "రేపు ఇంకా రాలేదు, అందుకే call ముందు will: Tomorrow I will call you.",
    }),
    pick("q5", "___ you eat lunch?", "మీరు భోజనం చేశారా?", ["Did", "Have", "Are"], 0, {
      en: "Telugu చేశారా? is past, and English asks about the past with did: Did you eat lunch?",
      te: "'చేశారా?' past; ఇంగ్లీష్‌లో past ప్రశ్న did తో మొదలవుతుంది: Did you eat lunch?",
    }),
    pick("q6", "I was tired, ___ I slept early.", "అలసిపోయాను, అందుకే తొందరగా పడుకున్నాను.", ["so", "because", "but"], 0, {
      en: "Sleeping early is the result of being tired, so use so: I was tired, so I slept early.",
      te: "అలసట వల్ల తొందరగా పడుకున్నారు, అది ఫలితం, అందుకే so: I was tired, so I slept early.",
    }),
    {
      id: "m1",
      type: "mission",
      title: { en: "All about me", te: "నా గురించి" },
      prompts: ["My name is …", "I live in …", "Every day I …", "I like …", "Tomorrow I will …"],
      seconds: 30,
    },
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Celebrating Stage 1", te: "స్టేజ్ 1 పండుగ" },
      scene: {
        en: "You finished Stage 1! Your friend Swapna calls to celebrate. Talk about your English: every day, yesterday, now and tomorrow.",
        te: "మీరు స్టేజ్ 1 పూర్తి చేశారు! మీ స్నేహితురాలు స్వప్న అభినందించడానికి ఫోన్ చేశారు. మీ ఇంగ్లీష్ గురించి మాట్లాడండి: రోజూ, నిన్న, ఇప్పుడు, రేపు.",
      },
      partner: { en: "Swapna (a friend)", te: "స్వప్న (స్నేహితురాలు)" },
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
          hint: { en: "Say yes, and how you feel.", te: "అవునని, మీకు ఎలా ఉందో చెప్పండి." },
          replies: [
            { say: "Yes! I am very happy.", good: true, skill: "now" },
            { say: "Yes! I very happy.", good: false, skill: "now", fixIt: "be" },
            {
              say: "So what? It was easy.",
              good: false,
              skill: "now",
              react: { en: "Still, well done! I'm proud of you.", te: "అయినా సరే, శభాష్! మిమ్మల్ని చూసి గర్వంగా ఉంది." },
            },
          ],
        },
        {
          partner: "What do you do every day?",
          te: "రోజూ ఏం చేస్తారు?",
          hint: { en: "Say what you do every morning.", te: "రోజూ ఉదయం ఏం చేస్తారో చెప్పండి." },
          replies: [
            { say: "I practice English every morning.", good: true, skill: "every" },
            { say: "I practicing English every morning.", good: false, skill: "every", fixIt: "state-ing" },
          ],
        },
        {
          partner: "What did you learn yesterday?",
          te: "నిన్న ఏం నేర్చుకున్నారు?",
          hint: { en: "Say what you learned yesterday (past).", te: "నిన్న ఏం నేర్చుకున్నారో చెప్పండి (past)." },
          replies: [
            { say: "I learned questions with did.", good: true, skill: "past" },
            { say: "I learn questions with did.", good: false, skill: "past" },
          ],
        },
        {
          partner: "What are you doing now?",
          te: "ఇప్పుడు ఏం చేస్తున్నారు?",
          hint: { en: "Say what you are doing right now.", te: "ఇప్పుడు ఏం చేస్తున్నారో చెప్పండి." },
          replies: [
            { say: "I am talking to you in English!", good: true, skill: "now" },
            { say: "I talking to you in English!", good: false, skill: "now", fixIt: "be" },
          ],
        },
        {
          partner: "Will you start Stage 2?",
          te: "స్టేజ్ 2 మొదలుపెడతారా?",
          hint: { en: "Say yes, and when you will start.", te: "అవునని, ఎప్పుడు మొదలుపెడతారో చెప్పండి." },
          replies: [
            { say: "Yes, I will start next week.", good: true, skill: "will" },
            { say: "Yes, I will starting next week.", good: false, skill: "will" },
          ],
        },
        {
          partner: "Why do you want to learn more?",
          te: "ఇంకా ఎందుకు నేర్చుకోవాలనుకుంటున్నారు?",
          hint: { en: "Give your reason, with because.", te: "because తో మీ కారణం చెప్పండి." },
          replies: [
            { say: "Because English makes me confident.", good: true, skill: "why" },
            { say: "Because of English makes me confident.", good: false, skill: "why" },
          ],
        },
      ],
    },
  ],
};
