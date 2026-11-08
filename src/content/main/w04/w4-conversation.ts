import type { ConversationDay } from "../../types";

/** Week 4, Day 6 (CURRICULUM §3): Conversation Day at the park. People and family words; no new grammar. */
export const day: ConversationDay = {
  id: "w4-conversation",
  kind: "conversation",
  title: { en: "A New Friend at the Park", te: "పార్క్‌లో కొత్త స్నేహితులు" },
  summary: {
    en: "Use this week's people words at the park: talk about your brothers and sisters, and describe someone.",
    te: "ఈ వారం నేర్చుకున్న మనుషుల పదాలు పార్క్‌లో వాడండి: మీ అన్నదమ్ములు, అక్కచెల్లెళ్ళ గురించి మాట్లాడండి, ఒకరిని వర్ణించండి.",
  },
  topics: ["people", "family", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "On a park bench", te: "పార్క్ బెంచీ మీద" },
    lines: [
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "Hello! Do you walk here every day?", te: "నమస్తే! మీరు రోజూ ఇక్కడ నడుస్తారా?" },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Yes. I come with my sister.", te: "అవును. మా చెల్లెలితో కలిసి వస్తాను." },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "Is that your sister, near the gate?", te: "గేట్ దగ్గర ఉన్నావిడ మీ చెల్లెలా?" },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Yes. Her name is Usha.", te: "అవును. ఆమె పేరు ఉష." },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "She looks very kind.", te: "ఆమె చాలా మంచిగా కనిపిస్తున్నారు." },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "She is. Do you live near here?", te: "అవును, మంచిదే. మీరు ఇక్కడ దగ్గర్లో ఉంటారా?" },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "Yes, in my brother's house.", te: "అవును, మా అన్నయ్య ఇంట్లో." },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Is that tall man your brother?", te: "ఆ పొడుగ్గా ఉన్న ఆయన మీ అన్నయ్యా?" },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "Yes, the man with grey hair.", te: "అవును, నెరిసిన జుట్టు ఉన్న ఆయన." },
    ],
    questions: [
      { prompt: { en: "Who is Usha?", te: "ఉష ఎవరు?" }, options: ["Kamala's sister", "Prasad's sister", "Kamala's neighbour"], answer: 0 },
      { prompt: { en: "Where does Prasad live?", te: "ప్రసాద్ ఎక్కడ ఉంటారు?" }, options: ["In his brother's house", "In Guntur", "Near the temple"], answer: 0 },
      { prompt: { en: "What does Prasad's brother look like?", te: "ప్రసాద్ అన్నయ్య ఎలా ఉంటారు?" }, options: ["Short, with glasses", "Tall, with grey hair", "Thin, with long hair"], answer: 1 },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell your new friend: you have one brother and one sister.",
        te: "మీ కొత్త స్నేహితులకు చెప్పండి: మీకు ఒక అన్నయ్య, ఒక చెల్లెలు ఉన్నారు.",
      },
      expected: ["I have one brother and one sister.", "I have a brother and a sister."],
      options: ["I has one brother and one sister.", "I have one brother and one sister.", "I am one brother and one sister."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Describe your friend Ravi: he is short and has glasses.",
        te: "మీ స్నేహితుడు రవిని వర్ణించండి: అతను పొట్టి, కళ్ళజోడు ఉంది.",
      },
      expected: ["He is short and has glasses.", "He is short. He has glasses."],
      options: ["He is short and has glasses.", "He has short and is glasses.", "He short and has glasses."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "A man is standing far away. Ask your friend who he is.",
        te: "దూరంగా ఒక ఆయన నిలబడి ఉన్నారు. ఆయన ఎవరని మీ స్నేహితుడిని అడగండి.",
      },
      expected: ["Who is that man?"],
      options: ["Who is this man?", "Who is that man?", "Who are that man?"],
      answer: 1,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Talking about your family", te: "మీ కుటుంబం గురించి" },
      scene: {
        en: "Prasad, a new friend at the park, asks about the people you live with.",
        te: "పార్క్‌లో కొత్తగా పరిచయమైన ప్రసాద్, మీరు ఎవరితో ఉంటారో అడుగుతున్నారు.",
      },
      partner: { en: "Prasad (a new friend)", te: "ప్రసాద్ (కొత్త స్నేహితుడు)" },
      skills: [
        { id: "people", label: { en: "People words", te: "మనుషుల పదాలు" } },
        { id: "whose", label: { en: "his / her / 's", te: "his / her / 's వాడకం" } },
      ],
      turns: [
        {
          partner: "Who do you live with?",
          te: "మీరు ఎవరితో కలిసి ఉంటారు?",
          hint: { en: "Say: I live with my sister.", te: "ఇలా చెప్పండి: I live with my sister." },
          replies: [
            { say: "I live with my sister.", good: true, skill: "people" },
            { say: "I live with me sister.", good: false, skill: "people" },
          ],
        },
        {
          partner: "What is her name?",
          te: "ఆమె పేరు ఏమిటి?",
          hint: { en: "Say: Her name is Usha.", te: "ఇలా చెప్పండి: Her name is Usha." },
          replies: [
            { say: "Her name is Usha.", good: true, skill: "whose" },
            { say: "His name is Usha.", good: false, skill: "whose" },
          ],
        },
        {
          partner: "What does she do?",
          te: "ఆమె ఏం చేస్తారు?",
          hint: { en: "Say: She has a tailoring shop.", te: "ఇలా చెప్పండి: She has a tailoring shop." },
          replies: [
            { say: "She has a tailoring shop.", good: true, skill: "people" },
            { say: "She have a tailoring shop.", good: false, skill: "people" },
          ],
        },
        {
          partner: "My brother has a shop too.",
          te: "మా అన్నయ్యకి కూడా ఒక షాప్ ఉంది.",
          hint: { en: "Ask: What is your brother's name?", te: "అడగండి: What is your brother's name?" },
          replies: [
            { say: "What is your brother's name?", good: true, skill: "whose" },
            { say: "What is your brother name?", good: false, skill: "whose" },
          ],
        },
        {
          partner: "Ramana. That is his house.",
          te: "రమణ. అదే అతని ఇల్లు.",
          hint: { en: "Say: Oh, that is a nice house.", te: "ఇలా చెప్పండి: Oh, that is a nice house." },
          replies: [
            { say: "Oh, that is a nice house.", good: true },
            { say: "Oh, those is a nice house.", good: false },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Looking for a friend", te: "స్నేహితురాలి కోసం వెతకడం" },
      scene: {
        en: "You are looking for your friend Sita at the park. Usha offers to help. Describe Sita.",
        te: "మీరు పార్క్‌లో మీ స్నేహితురాలు సీత కోసం వెతుకుతున్నారు. ఉష సహాయం చేస్తానంటోంది. సీతని వర్ణించండి.",
      },
      partner: { en: "Usha (at the park)", te: "ఉష (పార్క్‌లో)" },
      skills: [{ id: "describe", label: { en: "Describe", te: "వర్ణించడం" } }],
      turns: [
        {
          partner: "Are you looking for someone?",
          te: "మీరు ఎవరి కోసమైనా చూస్తున్నారా?",
          hint: { en: "Say: Yes, my friend Sita.", te: "ఇలా చెప్పండి: Yes, my friend Sita." },
          replies: [
            { say: "Yes, my friend Sita.", good: true },
            { say: "Yes, me friend Sita.", good: false },
          ],
        },
        {
          partner: "What does she look like?",
          te: "ఆమె ఎలా ఉంటారు?",
          hint: { en: "Say: She is short and has long hair.", te: "ఇలా చెప్పండి: She is short and has long hair." },
          replies: [
            { say: "She is short and has long hair.", good: true, skill: "describe" },
            { say: "She is short and is long hair.", good: false, skill: "describe" },
          ],
        },
        {
          partner: "Does she wear glasses?",
          te: "ఆమె కళ్ళజోడు పెట్టుకుంటారా?",
          hint: { en: "Say: Yes, she wears glasses.", te: "ఇలా చెప్పండి: Yes, she wears glasses." },
          replies: [
            { say: "Yes, she wears glasses.", good: true, skill: "describe" },
            { say: "Yes, she wear glasses.", good: false, skill: "describe" },
          ],
        },
        {
          partner: "She is near the temple, I think.",
          te: "ఆమె గుడి దగ్గర ఉన్నారనుకుంటా.",
          hint: { en: "Say: Thank you very much!", te: "ఇలా చెప్పండి: Thank you very much!" },
          replies: [
            { say: "Thank you very much!", good: true },
            { say: "Thanks you very much!", good: false },
          ],
        },
      ],
    },
  ],
};
