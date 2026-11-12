import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 48, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick if / when round, and a story. */

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
  id: "w48-review",
  kind: "review",
  title: { en: "If Plans Change", te: "ప్లాన్ మారితే" },
  extras: [
    pick(
      "q1",
      "If it ___ tomorrow, we'll stay at home.",
      "రేపు వర్షం పడితే, ఇంట్లోనే ఉంటాం.",
      ["rains", "will rain", "rain"],
      0,
      {
        en: "After if, use the present with s for it, even about tomorrow.",
        te: "if తర్వాత, రేపటి గురించైనా present; it కి verb చివర s.",
      },
      "he-she-s",
    ),
    pick("q2", "If the train is late, I'll ___ you from the station.", "రైలు ఆలస్యం అయితే, స్టేషన్ నుంచి మీకు ఫోన్ చేస్తాను.", ["call", "calling", "to call"], 0, {
      en: "After I'll, the verb stays plain, with no -ing and no to.",
      te: "I'll తర్వాత verb అలాగే ఉంటుంది; -ing గానీ to గానీ రావు.",
    }),
    pick(
      "q3",
      "What ___ you do if the power goes off?",
      "కరెంట్ పోతే మీరు ఏం చేస్తారు?",
      ["will", "are", "is"],
      0,
      {
        en: "To ask about a future plan, put will before you.",
        te: "రాబోయే ప్లాన్ గురించి అడగాలంటే, you కంటే ముందు will పెట్టాలి.",
      },
      "question",
    ),
    pick(
      "q4",
      "When we ___ Nellore, I'll send you a message.",
      "మనం నెల్లూరు చేరుకోగానే, మీకు మెసేజ్ పెడతాను.",
      ["reach", "reach to", "will reach"],
      0,
      {
        en: "Reach needs no to, and when takes the present for a plan.",
        te: "reach తర్వాత to రాదు; ప్లాన్‌లో when తర్వాత present వస్తుంది.",
      },
      "preposition",
    ),
    pick("q5", "If you feel dizzy, ___ down at once.", "కళ్ళు తిరిగితే, వెంటనే కూర్చోండి.", ["sit", "will sit", "sitting"], 0, {
      en: "Advice after an if part uses the plain verb, like an order.",
      te: "if భాగం తర్వాత సలహాకి verb నేరుగా, ఆజ్ఞ లాగా వస్తుంది.",
    }),
    pick(
      "q6",
      "If all goes well, we'll stay in Araku for two ___.",
      "అంతా బాగుంటే, అరకులో రెండు రాత్రులు ఉంటాం.",
      ["nights", "night", "the night"],
      0,
      {
        en: "After two, night takes s; Telugu రాత్రులు also shows more than one.",
        te: "రెండు తర్వాత night కి s వస్తుంది; తెలుగులోనూ 'రాత్రి' కాదు, 'రాత్రులు' అంటాం.",
      },
      "plural",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "The Late Train to Rajahmundry", te: "రాజమండ్రికి ఆలస్యమైన రైలు" },
      teller: { en: "Narayana", te: "నారాయణ" },
      voice: "b",
      parts: [
        {
          en: "Last month, I planned a trip to Rajahmundry to see my old friend Gopal. I told him: If all goes well, I'll reach on Saturday evening. The forecast said heavy rain, so I packed my raincoat.",
          te: "పోయిన నెల, నా పాత స్నేహితుడు గోపాల్ గారిని చూడటానికి రాజమండ్రి వెళ్ళాలని ప్లాన్ చేశాను. 'అంతా బాగుంటే, శనివారం సాయంత్రానికి చేరుకుంటాను' అని ఫోన్‌లో ఆయనకి చెప్పాను. జోరు వర్షం పడుతుందని forecast చెప్పింది, అందుకే నా రెయిన్‌కోట్ పెట్టుకున్నాను.",
        },
        {
          en: "On Saturday morning, my train was two hours late. I called Gopal from the station. He said: Don't worry. If you're late, I'll wait for you.",
          te: "శనివారం పొద్దున నా రైలు రెండు గంటలు ఆలస్యం. స్టేషన్ నుంచి గోపాల్ గారికి ఫోన్ చేశాను. 'కంగారు పడకండి. మీరు ఆలస్యమైతే, నేను మీ కోసం ఆగుతాను' అని ఆయన అన్నారు.",
        },
        {
          en: "Then the rain started. The train stopped again and again on the way. When I reached Rajahmundry, it was almost ten at night.",
          te: "తర్వాత వర్షం మొదలైంది. దారిలో రైలు మళ్ళీ మళ్ళీ ఆగింది. నేను రాజమండ్రి చేరుకునేసరికి దాదాపు రాత్రి పది అయ్యింది.",
        },
        {
          en: "I missed the last bus to Gopal's colony. I thought: If I take an auto now, it will cost a lot. Just then, my phone rang.",
          te: "గోపాల్ గారి కాలనీకి వెళ్ళే చివరి బస్సు మిస్ అయ్యాను. 'ఇప్పుడు ఆటోలో వెళ్తే, చాలా డబ్బులు అవుతాయి' అనుకున్నాను. అప్పుడే నా ఫోన్ మోగింది.",
        },
        {
          en: "It was Gopal. He was waiting outside the station with his car! He laughed and said: I told you. If you're late, I'll wait.",
          te: "అది గోపాల్ గారే. ఆయన తన కారుతో స్టేషన్ బయట ఎదురుచూస్తున్నారు! ఆయన నవ్వుతూ, 'చెప్పాను కదా. మీరు ఆలస్యమైతే, నేను ఆగుతాను' అన్నారు.",
        },
        {
          en: "We talked and laughed all the way home. Now, when I make a plan, I always make a backup plan. And I keep a good friend's number ready.",
          te: "ఇంటికి వెళ్ళేదాకా దారంతా మాట్లాడుకుంటూ నవ్వుకున్నాం. ఇప్పుడు నేను ఏ ప్లాన్ వేసినా, ఎప్పుడూ ఒక బ్యాకప్ ప్లాన్ కూడా వేసుకుంటాను. ఒక మంచి స్నేహితుడి నంబర్ కూడా రెడీగా ఉంచుకుంటాను.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A late train and a helpful friend", "A new car for Gopal", "A trip to the temple"],
          answer: 0,
        },
        {
          prompt: { en: "Why did Narayana pack his raincoat?", te: "నారాయణ గారు రెయిన్‌కోట్ ఎందుకు పెట్టుకున్నారు?" },
          options: ["The forecast said heavy rain", "Gopal asked him to", "It was very cold"],
          answer: 0,
        },
        {
          prompt: { en: "How late was the train in the morning?", te: "పొద్దున రైలు ఎంత ఆలస్యం?" },
          options: ["Two hours", "Four hours", "Half an hour"],
          answer: 0,
        },
        {
          prompt: { en: "Who was waiting outside the station?", te: "స్టేషన్ బయట ఎవరు ఎదురుచూస్తున్నారు?" },
          options: ["Gopal, with his car", "An auto driver", "The bus conductor"],
          answer: 0,
        },
      ],
    },
  ],
};
