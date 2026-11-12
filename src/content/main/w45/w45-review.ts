import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 45, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick round on the week's small words, and a story. */

const pick = (id: string, sentence: string, te: string, options: string[], answer: number, why: Bi, fixIt?: FixIt): Activity => ({
  id,
  type: "fillBlank",
  sentence,
  te,
  options,
  answer,
  why,
  ...(fixIt ? { fixIt } : {}),
});

export const day: ReviewDay = {
  id: "w45-review",
  kind: "review",
  title: { en: "Our Town, Then and Now", te: "మా ఊరు: అప్పుడు, ఇప్పుడు" },
  extras: [
    pick("q1", "There ___ no buses in those days.", "ఆ రోజుల్లో బస్సులు లేవు.", ["were", "was", "are"], 0, {
      en: "Buses are more than one, and this is the past, so the form is were.",
      te: "buses ఒకటి కంటే ఎక్కువ, పైగా గతం; అందుకే were.",
    }),
    pick("q2", "The roads are busier ___ before.", "రోడ్లు ఇదివరకటి కంటే రద్దీగా ఉన్నాయి.", ["than", "then", "that"], 0, {
      en: "To compare two times, English uses than, like Telugu కంటే.",
      te: "రెండు కాలాలను పోల్చడానికి than; తెలుగు 'కంటే' లాగా.",
    }),
    pick(
      "q3",
      "Guntur is famous ___ chillies.",
      "గుంటూరు మిర్చికి ప్రసిద్ధి.",
      ["for", "in", "with"],
      0,
      {
        en: "Famous always takes for after it, never in or with.",
        te: "famous తర్వాత ఎప్పుడూ for వస్తుంది; in, with రావు.",
      },
      "preposition",
    ),
    pick(
      "q4",
      "It's ___ oldest temple in our town.",
      "మా ఊర్లో అన్నిటికంటే పాత గుడి అదే.",
      ["the", "a", "an"],
      0,
      {
        en: "A word ending in -est always takes the before it; Telugu has no such word.",
        te: "-est తో ముగిసే పదం ముందు ఎప్పుడూ the వస్తుంది; తెలుగులో అలాంటి పదం లేదు.",
      },
      "article",
    ),
    pick("q5", "What's Hyderabad ___?", "హైదరాబాద్ ఎలా ఉంటుంది?", ["like", "how", "about"], 0, {
      en: "To ask about a place, end the question with like; here it does not mean liking.",
      te: "ఒక ఊరి గురించి అడిగేటప్పుడు ప్రశ్న like తో ముగుస్తుంది; ఇక్కడ దానికి 'ఇష్టం' అని అర్థం కాదు.",
    }),
    pick(
      "q6",
      "I have ___ here since nineteen ninety.",
      "1990 నుంచి నేను ఇక్కడ ఉంటున్నాను.",
      ["lived", "live", "living"],
      0,
      {
        en: "With since, use have and the past form; Telugu ఉంటున్నాను uses the present.",
        te: "since ఉంటే have తో పాటు past form వాడాలి; తెలుగులో 'ఉంటున్నాను' అని ఇప్పటి కాలం అంటాం.",
      },
      "duration",
    ),
    {
      id: "x1",
      type: "story",
      title: { en: "My Village, Then and Now", te: "మా ఊరు, అప్పుడు ఇప్పుడు" },
      teller: { en: "Mohan", te: "మోహన్" },
      voice: "b",
      parts: [
        {
          en: "I grew up in a small village near Guntur. I moved to Hyderabad for work when I was twenty. Last month, I went back after forty years.",
          te: "నేను గుంటూరు దగ్గర ఒక చిన్న ఊర్లో పెరిగాను. ఇరవై ఏళ్ళప్పుడు పని కోసం హైదరాబాద్ వెళ్ళాను. పోయిన నెల, నలభై ఏళ్ళ తర్వాత మళ్ళీ అక్కడికి వెళ్ళాను.",
        },
        {
          en: "In my childhood, there was a big pond near the temple. We used to swim in it every evening. There were no buses, so we walked everywhere.",
          te: "నా చిన్నప్పుడు గుడి దగ్గర ఒక పెద్ద చెరువు ఉండేది. రోజూ సాయంత్రం అందులో ఈత కొట్టేవాళ్ళం. బస్సులు లేవు, అందుకే ఎక్కడికైనా నడిచే వెళ్ళేవాళ్ళం.",
        },
        {
          en: "Now the village is much bigger. The roads are wider, and there are three schools. The pond is still there, but it is smaller than before.",
          te: "ఇప్పుడు ఊరు చాలా పెద్దదైంది. రోడ్లు వెడల్పయ్యాయి, మూడు బడులు ఉన్నాయి. చెరువు ఇంకా ఉంది, కానీ ఇదివరకటి కంటే చిన్నదైపోయింది.",
        },
        {
          en: "There's a new hospital now, so people don't go to Guntur for small things. There are many shops too. The market is very noisy in the morning.",
          te: "ఇప్పుడు కొత్త ఆసుపత్రి ఉంది, అందుకే చిన్న చిన్న వాటికి జనం గుంటూరు వెళ్ళట్లేదు. షాపులు కూడా చాలా ఉన్నాయి. పొద్దున మార్కెట్ చాలా గోలగా ఉంటుంది.",
        },
        {
          en: "My old friend Gopal still lives there. He grows chillies, like his father. He says the village is famous for its chillies now.",
          te: "నా పాత స్నేహితుడు గోపాల్ ఇంకా అక్కడే ఉంటున్నారు. వాళ్ళ నాన్నగారి లాగే ఆయనా మిర్చి పండిస్తున్నారు. ఇప్పుడు ఊరు మిర్చికి ప్రసిద్ధి అని ఆయన అంటున్నారు.",
        },
        {
          en: "In the evening, Gopal took me to the old temple. It was the best part of my visit. The village has changed, but the people are still very kind.",
          te: "సాయంత్రం గోపాల్ నన్ను పాత గుడికి తీసుకెళ్ళారు. నా ప్రయాణంలో అదే అన్నిటికంటే మంచి భాగం. ఊరు మారింది, కానీ జనం ఇప్పటికీ చాలా మంచివాళ్ళు.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A visit to an old village", "A new job in Guntur", "A trip to the beach"],
          answer: 0,
        },
        {
          prompt: { en: "What was near the temple in Mohan's childhood?", te: "మోహన్ గారి చిన్నప్పుడు గుడి దగ్గర ఏముండేది?" },
          options: ["A big pond", "A school", "A bus stand"],
          answer: 0,
        },
        {
          prompt: { en: "What does Gopal grow?", te: "గోపాల్ గారు ఏం పండిస్తున్నారు?" },
          options: ["Chillies", "Rice", "Mangoes"],
          answer: 0,
        },
        {
          prompt: { en: "What was the best part of the visit?", te: "ఆ ప్రయాణంలో అన్నిటికంటే మంచి భాగం ఏది?" },
          options: ["The old temple", "The new hospital", "The market"],
          answer: 0,
        },
      ],
    },
  ],
};
