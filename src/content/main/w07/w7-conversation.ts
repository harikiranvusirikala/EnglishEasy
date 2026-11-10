import type { ConversationDay } from "../../types";

/** Week 7, Day 6 (CURRICULUM §3): Conversation Day about daily routines — a morning walk chat and a check-up. No new grammar. */
export const day: ConversationDay = {
  id: "w7-conversation",
  kind: "conversation",
  title: { en: "A Day in Your Life", te: "మీ రోజు" },
  summary: {
    en: "Use this week's routine words: chat on a morning walk, and answer a doctor's questions about your habits.",
    te: "ఈ వారం నేర్చుకున్న దినచర్య మాటలు వాడండి: ఉదయం నడకలో కబుర్లు చెప్పండి, మీ అలవాట్ల గురించి డాక్టర్ ప్రశ్నలకు జవాబు చెప్పండి.",
  },
  topics: ["time", "health", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A morning walk at the park", te: "పార్క్‌లో ఉదయం నడక" },
    lines: [
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Good morning! Do you walk here every day?", te: "గుడ్ మార్నింగ్! మీరు రోజూ ఇక్కడ నడుస్తారా?" },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Yes, I always walk at six.", te: "అవును, నేను రోజూ ఆరు గంటలకే నడుస్తాను." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "What time do you get up?", te: "మీరు ఎన్ని గంటలకు లేస్తారు?" },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "I usually get up at five.", te: "మామూలుగా ఐదు గంటలకు లేస్తాను." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "And after the walk?", te: "మరి నడక తర్వాత?" },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "I drink tea and read the newspaper.", te: "టీ తాగి, న్యూస్‌పేపర్ చదువుతాను." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "My sister does the same!", te: "మా చెల్లెలు కూడా అలాగే చేస్తారు!" },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Does she walk here too?", te: "ఆవిడ కూడా ఇక్కడ నడుస్తారా?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Yes, on weekends.", te: "అవును, వారాంతాల్లో." },
    ],
    questions: [
      {
        prompt: { en: "Where are they talking?", te: "వీళ్ళు ఎక్కడ మాట్లాడుకుంటున్నారు?" },
        options: ["On a morning walk", "At a hospital", "At a temple"],
        answer: 0,
      },
      { prompt: { en: "What time does Usha walk?", te: "ఉష గారు ఎన్ని గంటలకు నడుస్తారు?" }, options: ["At five", "At six", "At seven"], answer: 1 },
      { prompt: { en: "What does Usha do after the walk?", te: "నడక తర్వాత ఉష గారు ఏం చేస్తారు?" }, options: ["She cooks lunch", "She drinks tea and reads", "She goes to the temple"], answer: 1 },
      { prompt: { en: "When does Narayana's sister walk here?", te: "నారాయణ గారి చెల్లెలు ఇక్కడ ఎప్పుడు నడుస్తారు?" }, options: ["Every day", "On weekends", "On Mondays"], answer: 1 },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell someone what time you usually get up.",
        te: "మీరు మామూలుగా ఎన్ని గంటలకు లేస్తారో చెప్పండి.",
      },
      expected: ["I usually get up at five.", "I usually get up at six.", "I get up at five."],
      options: ["I usually get up at five.", "I get usually up at five.", "I usually gets up at five."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask your friend if her brother walks every day.",
        te: "మీ స్నేహితురాలి అన్నయ్య రోజూ నడుస్తారా అని అడగండి.",
      },
      expected: ["Does your brother walk every day?", "Does he walk every day?"],
      options: ["Does your brother walks every day?", "Does your brother walk every day?", "Do your brother walk every day?"],
      answer: 1,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "The doctor asks how often you eat sweets. Say sometimes.",
        te: "మీరు స్వీట్లు ఎన్నిసార్లు తింటారని డాక్టర్ అడుగుతున్నారు. అప్పుడప్పుడు అని చెప్పండి.",
      },
      expected: ["I sometimes eat sweets.", "Sometimes."],
      options: ["I sometimes eat sweets.", "I eat sometimes sweets.", "I am sometimes eat sweets."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Chat on a morning walk", te: "ఉదయం నడకలో కబుర్లు" },
      scene: {
        en: "On your morning walk, Srinivas starts a chat about your day.",
        te: "ఉదయం నడకలో శ్రీనివాస్ గారు మీ రోజు గురించి మాటలు మొదలుపెట్టారు.",
      },
      partner: { en: "Srinivas (at the park)", te: "శ్రీనివాస్ (పార్క్‌లో)" },
      voice: "b",
      skills: [
        { id: "routine", label: { en: "My routine", te: "నా దినచర్య" } },
        { id: "ask", label: { en: "do / does questions", te: "do / does ప్రశ్నలు" } },
      ],
      turns: [
        {
          partner: "Do you walk here every day?",
          te: "మీరు రోజూ ఇక్కడ నడుస్తారా?",
          hint: { en: "Say yes, on most days, and give the time.", te: "అవును, మామూలుగా అని చెప్పి, టైం చెప్పండి." },
          replies: [
            { say: "Yes, I usually walk at six.", good: true, skill: "routine" },
            { say: "Yes, I walk usually at six.", good: false, skill: "routine" },
            {
              say: "Why? Are you watching me?",
              good: false,
              react: { en: "No, no! I just see you often.", te: "లేదండీ! మిమ్మల్ని రోజూ చూస్తుంటాను, అంతే." },
            },
          ],
        },
        {
          partner: "What do you do after that?",
          te: "తర్వాత ఏం చేస్తారు?",
          hint: { en: "Tell him two things you do after the walk.", te: "నడక తర్వాత చేసే రెండు పనులు చెప్పండి." },
          replies: [
            { say: "I drink tea and read the newspaper.", good: true, skill: "routine" },
            { say: "I drinks tea and read the newspaper.", good: false, skill: "routine" },
          ],
        },
        {
          partner: "Do you watch TV?",
          te: "మీరు TV చూస్తారా?",
          hint: { en: "Say you watch it on some days, and when.", te: "కొన్ని రోజులు చూస్తానని, ఎప్పుడో చెప్పండి." },
          replies: [
            { say: "Sometimes, in the evening.", good: true, skill: "routine" },
            { say: "Sometimes, in evening.", good: false, skill: "routine", fixIt: "article" },
          ],
        },
        {
          partner: "I go to my shop at nine.",
          te: "నేను తొమ్మిదికి నా షాప్‌కి వెళ్తాను.",
          hint: { en: "Ask him about Sundays. Start with Do you.", te: "ఆదివారాలు కూడా వెళ్తారా అని అడగండి. Do you తో మొదలుపెట్టండి." },
          replies: [
            { say: "Do you work on Sundays?", good: true, skill: "ask" },
            { say: "Do you works on Sundays?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "No, I never work on Sundays.",
          te: "లేదు, ఆదివారాలు నేను ఎప్పుడూ పని చేయను.",
          hint: { en: "Say something kind, and goodbye till tomorrow.", te: "ఒక మంచి మాట చెప్పి, రేపు కలుద్దామని చెప్పండి." },
          replies: [
            { say: "Very good. See you tomorrow!", good: true },
            { say: "Very good. See tomorrow!", good: false },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Questions at a check-up", te: "చెకప్‌లో ప్రశ్నలు" },
      scene: {
        en: "Dr Prasad asks about your habits at a health check-up.",
        te: "హెల్త్ చెకప్‌లో డాక్టర్ ప్రసాద్ మీ అలవాట్ల గురించి అడుగుతున్నారు.",
      },
      partner: { en: "Dr Prasad (a doctor)", te: "డాక్టర్ ప్రసాద్" },
      voice: "b",
      skills: [{ id: "often", label: { en: "How often", te: "ఎన్నిసార్లు" } }],
      turns: [
        {
          partner: "Do you sleep well?",
          te: "మీరు బాగా నిద్రపోతారా?",
          hint: { en: "Say yes, and the time you usually sleep.", te: "అవునని, మామూలుగా ఎన్ని గంటలకు పడుకుంటారో చెప్పండి." },
          replies: [
            { say: "Yes, I usually sleep at ten.", good: true, skill: "often" },
            { say: "Yes, I usually sleeps at ten.", good: false, skill: "often" },
          ],
        },
        {
          partner: "Do you eat sweets?",
          te: "మీరు స్వీట్లు తింటారా?",
          hint: { en: "Say not often, only on special days.", te: "ఎప్పుడో ఒకసారి, పండగలప్పుడు మాత్రమే అని చెప్పండి." },
          replies: [
            { say: "Sometimes, at festivals.", good: true, skill: "often" },
            { say: "Sometimes, in festivals.", good: false, skill: "often", fixIt: "preposition" },
          ],
        },
        {
          partner: "How often do you walk?",
          te: "మీరు ఎన్నిసార్లు నడుస్తారు?",
          hint: { en: "Say how often, using every.", te: "every వాడి, ఎన్నిసార్లో చెప్పండి." },
          replies: [
            { say: "I walk every morning.", good: true, skill: "often" },
            { say: "I walk every mornings.", good: false, skill: "often", fixIt: "plural" },
            {
              say: "Doctor, just give me tablets.",
              good: false,
              react: { en: "First, I need to know your habits.", te: "ముందు మీ అలవాట్లు తెలుసుకోవాలండీ." },
            },
          ],
        },
        {
          partner: "Do you drink a lot of water?",
          te: "మీరు నీళ్ళు బాగా తాగుతారా?",
          hint: { en: "Say yes, and how many glasses a day.", te: "అవునని, రోజుకు ఎన్ని గ్లాసులో చెప్పండి." },
          replies: [
            { say: "Yes, eight glasses a day.", good: true, skill: "often" },
            { say: "Yes, eight glass a day.", good: false, skill: "often", fixIt: "plural" },
          ],
        },
      ],
    },
  ],
};
