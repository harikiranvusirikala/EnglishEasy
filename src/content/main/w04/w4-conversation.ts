import type { ConversationDay } from "../../types";

/** Week 4, Day 6 (CURRICULUM §3): Conversation Day at the park. People and family words, and whose; no new grammar. */
export const day: ConversationDay = {
  id: "w4-conversation",
  kind: "conversation",
  title: { en: "A New Friend at the Park", te: "పార్క్‌లో కొత్త స్నేహితులు" },
  summary: {
    en: "Use this week's people words at the park: talk about your brothers and sisters, and describe someone.",
    te: "ఈ వారం నేర్చుకున్న మనుషుల పదాలు పార్క్‌లో వాడండి: మీ అన్నదమ్ములు, అక్కచెల్లెళ్ళ గురించి మాట్లాడండి, ఒకరు ఎలా ఉంటారో చెప్పండి.",
  },
  topics: ["people", "family", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "On a park bench", te: "పార్క్ బెంచీ మీద" },
    lines: [
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Hello! Do you walk here every day?", te: "నమస్తే! మీరు రోజూ ఇక్కడ వాకింగ్ చేస్తారా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Yes. I come with my sister.", te: "అవును. మా చెల్లెలితో కలిసి వస్తాను." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Is that your sister, near the gate?", te: "గేట్ దగ్గర ఉన్నావిడ మీ చెల్లెలా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Yes. Her name is Geetha.", te: "అవును. ఆవిడ పేరు గీత." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "She looks very kind.", te: "ఆవిడ చాలా మంచివారిలా ఉన్నారు." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "She is. Do you live near here?", te: "అవును, చాలా మంచివారు. మీరు ఇక్కడ దగ్గర్లో ఉంటారా?" },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Yes, in my brother's house.", te: "అవును, మా అన్నయ్య ఇంట్లో." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Is that tall man your brother?", te: "ఆ పొడుగ్గా ఉన్న ఆయన మీ అన్నయ్యా?" },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Yes, the man with grey hair.", te: "అవును, నెరిసిన జుట్టు ఉన్న ఆయన." },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["Their brothers and sisters", "Vegetable prices", "The bus time"],
        answer: 0,
      },
      { prompt: { en: "Who is Geetha?", te: "గీత ఎవరు?" }, options: ["Radha's sister", "Joseph's sister", "Radha's neighbour"], answer: 0 },
      { prompt: { en: "Where does Joseph live?", te: "జోసెఫ్ గారు ఎక్కడ ఉంటారు?" }, options: ["In his brother's house", "In Guntur", "Near the temple"], answer: 0 },
      { prompt: { en: "What does Joseph's brother look like?", te: "జోసెఫ్ గారి అన్నయ్య ఎలా ఉంటారు?" }, options: ["Short, with glasses", "Tall, with grey hair", "Thin, with long hair"], answer: 1 },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Tell your new friend: you have one brother and one sister.",
        te: "మీ కొత్త స్నేహితులకు చెప్పండి: మీకు ఒక అన్నయ్య, ఒక చెల్లెలు ఉన్నారు.",
      },
      expected: ["I have one brother and one sister.", "I have a brother and a sister."],
      options: ["I has one brother and one sister.", "I have one brother and one sister.", "One brother and one sister are there."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say what your friend Gopal looks like: he is short and wears glasses.",
        te: "మీ స్నేహితులు గోపాల్ గారు ఎలా ఉంటారో చెప్పండి: ఆయన పొట్టిగా ఉంటారు, కళ్ళజోడు పెట్టుకుంటారు.",
      },
      expected: ["He is short and wears glasses.", "He is short. He wears glasses."],
      options: ["He is short and wears glasses.", "He is short and wear glasses.", "He short and wears glasses."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You find a water bottle on the park bench. Ask your new friend whose it is.",
        te: "పార్క్ బెంచీ మీద ఒక నీళ్ళ సీసా కనిపించింది. అది ఎవరిదో మీ కొత్త స్నేహితులను అడగండి.",
      },
      expected: ["Whose bottle is this?", "Whose water bottle is this?"],
      options: ["Who bottle is this?", "Whose bottle is this?", "Whose this bottle is?"],
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
        te: "పార్క్‌లో కొత్తగా పరిచయమైన ప్రసాద్ గారు, మీరు ఎవరితో ఉంటారో అడుగుతున్నారు.",
      },
      partner: { en: "Prasad (a new friend)", te: "ప్రసాద్ (కొత్త స్నేహితులు)" },
      voice: "b",
      skills: [
        { id: "people", label: { en: "People words", te: "మనుషుల పదాలు" } },
        { id: "whose", label: { en: "his / her / 's", te: "his / her / 's వాడకం" } },
      ],
      turns: [
        {
          partner: "Who do you live with?",
          te: "మీరు ఎవరితో కలిసి ఉంటారు?",
          hint: { en: "Say who you live with: your sister.", te: "మీరు ఎవరితో ఉంటారో చెప్పండి: మీ చెల్లెలు." },
          replies: [
            { say: "I live with my sister.", good: true, skill: "people" },
            { say: "I live my sister.", good: false, skill: "people", fixIt: "preposition" },
          ],
        },
        {
          partner: "What is her name?",
          te: "ఆవిడ పేరు ఏంటి?",
          hint: { en: "Tell her name. She is a woman, so use her.", te: "ఆవిడ పేరు చెప్పండి. ఆడవారు కాబట్టి her." },
          replies: [
            { say: "Her name is Usha.", good: true, skill: "whose" },
            { say: "His name is Usha.", good: false, skill: "whose" },
          ],
        },
        {
          partner: "What does she do?",
          te: "ఆవిడ ఏం చేస్తారు?",
          hint: { en: "Say she owns a tailoring shop. Use has.", te: "ఆవిడకి ఒక టైలరింగ్ షాపు ఉందని చెప్పండి. has వాడండి." },
          replies: [
            { say: "She has a tailoring shop.", good: true, skill: "people" },
            { say: "She have a tailoring shop.", good: false, skill: "people" },
            { say: "My sister she has a tailoring shop.", good: false, skill: "people" },
          ],
        },
        {
          partner: "My brother has a shop too.",
          te: "మా అన్నయ్యకి కూడా ఒక షాపు ఉంది.",
          hint: { en: "Ask his brother's name. Use 's.", te: "ఆయన అన్నయ్య పేరు అడగండి. 's వాడండి." },
          replies: [
            { say: "What is your brother's name?", good: true, skill: "whose" },
            { say: "What is your brother name?", good: false, skill: "whose" },
          ],
        },
        {
          partner: "Ramana. That is his house.",
          te: "రమణ. అదే ఆయన ఇల్లు.",
          hint: { en: "Say something nice about the house.", te: "ఆ ఇంటి గురించి ఒక మంచి మాట చెప్పండి." },
          replies: [
            { say: "Oh, that is a nice house.", good: true },
            {
              say: "Oh, it is very small.",
              good: false,
              react: { en: "Ha ha, yes. But it is nice!", te: "హహ, అవును. కానీ బాగుంటుంది!" },
            },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Looking for a friend", te: "స్నేహితురాలి కోసం వెతకడం" },
      scene: {
        en: "You are looking for your friend Sita at the park. Kavitha offers to help. Say what Sita looks like.",
        te: "మీరు పార్క్‌లో మీ స్నేహితురాలు సీత కోసం వెతుకుతున్నారు. కవిత గారు సాయం చేస్తామంటున్నారు. సీత ఎలా ఉంటారో చెప్పండి.",
      },
      partner: { en: "Kavitha (at the park)", te: "కవిత (పార్క్‌లో)" },
      skills: [{ id: "describe", label: { en: "Describe", te: "ఎలా ఉంటారో చెప్పడం" } }],
      turns: [
        {
          partner: "Are you looking for someone?",
          te: "మీరు ఎవరి కోసమైనా చూస్తున్నారా?",
          hint: { en: "Say yes, and say who: your friend Sita.", te: "అవునని చెప్పి, ఎవరో చెప్పండి: మీ స్నేహితురాలు సీత." },
          replies: [
            { say: "Yes, my friend Sita.", good: true },
            { say: "Yes, I am looking my friend.", good: false, fixIt: "preposition" },
          ],
        },
        {
          partner: "What does she look like?",
          te: "ఆవిడ ఎలా ఉంటారు?",
          hint: { en: "Say how she looks: short, with long hair.", te: "ఆవిడ ఎలా ఉంటారో చెప్పండి: పొట్టిగా, పొడవాటి జుట్టు." },
          replies: [
            { say: "She is short and has long hair.", good: true, skill: "describe" },
            { say: "She is short and is long hair.", good: false, skill: "describe" },
          ],
        },
        {
          partner: "Does she wear glasses?",
          te: "ఆవిడ కళ్ళజోడు పెట్టుకుంటారా?",
          hint: { en: "Say yes. Use wears for glasses.", te: "అవునని చెప్పండి. కళ్ళజోడుకి wears వాడండి." },
          replies: [
            { say: "Yes, she wears glasses.", good: true, skill: "describe" },
            { say: "Yes, she wear glasses.", good: false, skill: "describe" },
          ],
        },
        {
          partner: "She is near the temple, I think.",
          te: "ఆవిడ గుడి దగ్గర ఉన్నారనుకుంటా.",
          hint: { en: "Thank her warmly.", te: "ఆవిడకి మనస్ఫూర్తిగా థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Thank you very much!", good: true },
            {
              say: "Okay. Go and call her.",
              good: false,
              react: { en: "Ha ha! Okay, come with me.", te: "హహ! సరే, నాతో రండి." },
            },
          ],
        },
      ],
    },
  ],
};
