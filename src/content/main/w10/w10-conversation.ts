import type { ConversationDay } from "../../types";

/** Week 10, Day 6 (CURRICULUM §3): Conversation Day planning a temple trip, and booking a cab by phone. No new grammar. */
export const day: ConversationDay = {
  id: "w10-conversation",
  kind: "conversation",
  title: { en: "Planning a Temple Trip", te: "గుడికి ప్రయాణం" },
  summary: {
    en: "Use this week's future words: plan a trip with a friend, offer help, invite others and book a cab by phone.",
    te: "ఈ వారం నేర్చుకున్న భవిష్యత్తు మాటలు వాడండి: స్నేహితులతో ప్రయాణం ప్లాన్ చేయండి, సహాయం చేస్తానని చెప్పండి, ఇతరులను పిలవండి, ఫోన్‌లో క్యాబ్ బుక్ చేయండి.",
  },
  topics: ["travel", "festivals", "phone"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A trip to Bhadrachalam", te: "భద్రాచలం ప్రయాణం" },
    lines: [
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Let's go to Bhadrachalam next week!", te: "వచ్చే వారం భద్రాచలం వెళ్దాం!" },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Good idea! How will we go?", te: "మంచి ఆలోచన! ఎలా వెళ్దాం?" },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "I'll book a cab.", te: "నేను క్యాబ్ బుక్ చేస్తాను." },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Can we leave early?", te: "తొందరగా బయలుదేరదామా?" },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Yes, at six in the morning.", te: "అవును, ఉదయం ఆరు గంటలకు." },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "I'll bring food for the trip.", te: "ప్రయాణానికి నేను భోజనం తెస్తాను." },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Thank you! Are you going to invite Usha?", te: "థాంక్యూ! ఉషని కూడా పిలుస్తున్నారా?" },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Yes, I'll call her tonight.", te: "అవును, ఈ రాత్రి ఆమెకు ఫోన్ చేస్తాను." },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Perfect. See you next Saturday!", te: "సరే. వచ్చే శనివారం కలుద్దాం!" },
    ],
    questions: [
      { prompt: { en: "Where are they going?", te: "వాళ్ళు ఎక్కడికి వెళ్తున్నారు?" }, options: ["To Bhadrachalam", "To Tirupati", "To Srisailam"], answer: 0 },
      { prompt: { en: "Who will book the cab?", te: "క్యాబ్ ఎవరు బుక్ చేస్తారు?" }, options: ["Padma", "Ramana", "Usha"], answer: 1 },
      { prompt: { en: "What will Padma bring?", te: "పద్మ ఏం తెస్తుంది?" }, options: ["Water", "Food", "Flowers"], answer: 1 },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Offer to book a cab for the trip.",
        te: "ప్రయాణానికి క్యాబ్ బుక్ చేస్తానని చెప్పండి.",
      },
      expected: ["I'll book a cab.", "I will book a cab."],
      options: ["I'll book a cab.", "I'll booking a cab.", "I booking a cab."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Invite your friend to come on the trip.",
        te: "ప్రయాణానికి రమ్మని మీ స్నేహితుడిని పిలవండి.",
      },
      expected: ["Would you like to come?", "Would you like to come with us?"],
      options: ["Would you like to come?", "Would you like coming?", "You like to come?"],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "Tell your friend the plan: you are going to leave at six.",
        te: "ప్లాన్ మీ స్నేహితులకు చెప్పండి: ఆరు గంటలకు బయలుదేరబోతున్నారు.",
      },
      expected: ["We are going to leave at six.", "I am going to leave at six."],
      options: ["We are going to leave at six.", "We going to leave at six.", "We are going to leaving at six."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Planning a trip with a friend", te: "స్నేహితుడితో ప్రయాణం ప్లాన్" },
      scene: {
        en: "Your friend Ramana wants to plan a trip next month. Plan it together.",
        te: "మీ స్నేహితుడు రమణ వచ్చే నెల ఒక ప్రయాణం ప్లాన్ చేయాలనుకుంటున్నారు. కలిసి ప్లాన్ చేయండి.",
      },
      partner: { en: "Ramana (a friend)", te: "రమణ (స్నేహితుడు)" },
      skills: [
        { id: "will", label: { en: "I'll (offers)", te: "I'll (సహాయం)" } },
        { id: "plan", label: { en: "Plans", te: "ప్లాన్స్" } },
      ],
      turns: [
        {
          partner: "Let's plan a trip next month!",
          te: "వచ్చే నెల ఒక ప్రయాణం ప్లాన్ చేద్దాం!",
          hint: { en: "Say: Good idea! Where are we going?", te: "ఇలా చెప్పండి: Good idea! Where are we going?" },
          replies: [
            { say: "Good idea! Where are we going?", good: true, skill: "plan" },
            { say: "Good idea! Where we are going?", good: false, skill: "plan" },
          ],
        },
        {
          partner: "I want to go to Araku.",
          te: "నాకు అరకు వెళ్ళాలని ఉంది.",
          hint: { en: "Say: I'd love to go there.", te: "ఇలా చెప్పండి: I'd love to go there." },
          replies: [
            { say: "I'd love to go there.", good: true, skill: "plan" },
            { say: "I'd love to going there.", good: false, skill: "plan" },
          ],
        },
        {
          partner: "How are we going to go?",
          te: "ఎలా వెళ్దాం?",
          hint: { en: "Offer: I'll book the train tickets.", te: "సహాయం చెప్పండి: I'll book the train tickets." },
          replies: [
            { say: "I'll book the train tickets.", good: true, skill: "will" },
            { say: "I'll booking the train tickets.", good: false, skill: "will" },
          ],
        },
        {
          partner: "What about food?",
          te: "మరి భోజనం సంగతి?",
          hint: { en: "Promise: I'll bring snacks.", te: "మాట ఇవ్వండి: I'll bring snacks." },
          replies: [
            { say: "I'll bring snacks.", good: true, skill: "will" },
            { say: "I'll brings snacks.", good: false, skill: "will" },
          ],
        },
        {
          partner: "Let's invite Sita too.",
          te: "సీతని కూడా పిలుద్దాం.",
          hint: { en: "Say: Yes. I'll call her tonight.", te: "ఇలా చెప్పండి: Yes. I'll call her tonight." },
          replies: [
            { say: "Yes. I'll call her tonight.", good: true, skill: "will" },
            { say: "Yes. I'll calling her tonight.", good: false, skill: "will" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Booking a cab by phone", te: "ఫోన్‌లో క్యాబ్ బుకింగ్" },
      scene: {
        en: "Call City Cabs and book a cab for your trip next Saturday.",
        te: "సిటీ క్యాబ్స్‌కి ఫోన్ చేసి, వచ్చే శనివారం ప్రయాణానికి క్యాబ్ బుక్ చేయండి.",
      },
      partner: { en: "Mohan (City Cabs)", te: "మోహన్ (సిటీ క్యాబ్స్)" },
      skills: [
        { id: "book", label: { en: "Booking", te: "బుక్ చేయడం" } },
        { id: "time", label: { en: "Future time words", te: "భవిష్యత్తు పదాలు" } },
      ],
      turns: [
        {
          partner: "Hello, City Cabs.",
          te: "హలో, సిటీ క్యాబ్స్.",
          hint: { en: "Say: I'd like to book a cab, please.", te: "ఇలా చెప్పండి: I'd like to book a cab, please." },
          replies: [
            { say: "I'd like to book a cab, please.", good: true, skill: "book" },
            { say: "I'd like book a cab, please.", good: false, skill: "book" },
          ],
        },
        {
          partner: "When do you need it?",
          te: "మీకు ఎప్పుడు కావాలి?",
          hint: { en: "Say: Next Saturday, at six.", te: "ఇలా చెప్పండి: Next Saturday, at six." },
          replies: [
            { say: "Next Saturday, at six.", good: true, skill: "time" },
            { say: "On next Saturday, at six.", good: false, skill: "time" },
          ],
        },
        {
          partner: "Where are you going?",
          te: "మీరు ఎక్కడికి వెళ్తున్నారు?",
          hint: { en: "Say: We're going to Bhadrachalam.", te: "ఇలా చెప్పండి: We're going to Bhadrachalam." },
          replies: [
            { say: "We're going to Bhadrachalam.", good: true, skill: "book" },
            { say: "We're going in Bhadrachalam.", good: false, skill: "book" },
          ],
        },
        {
          partner: "Okay. The driver will call you.",
          te: "సరే. డ్రైవర్ మీకు ఫోన్ చేస్తారు.",
          hint: { en: "Ask: Will he come on time?", te: "అడగండి: Will he come on time?" },
          replies: [
            { say: "Will he come on time?", good: true, skill: "time" },
            { say: "Will he comes on time?", good: false, skill: "time" },
          ],
        },
      ],
    },
  ],
};
