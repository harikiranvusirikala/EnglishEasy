import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 58, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick polite-question round, and a story. */

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
  id: "w58-review",
  kind: "review",
  title: { en: "Polite Questions", te: "మర్యాద ప్రశ్నలు" },
  extras: [
    pick(
      "q1",
      "Can you tell me where ___?",
      "ల్యాబ్ ఎక్కడ ఉందో చెప్తారా?",
      ["the lab is", "is the lab", "lab is"],
      0,
      {
        en: "After Can you tell me where, the place comes first with the, and is comes after it.",
        te: "Can you tell me where తర్వాత ముందు the తో చోటు, ఆ తర్వాతే is వస్తుంది.",
      },
      "question",
    ),
    pick(
      "q2",
      "Do you know what time the bank ___?",
      "బ్యాంక్ ఎన్నింటికి తెరుస్తారో మీకు తెలుసా?",
      ["opens", "open", "does open"],
      0,
      {
        en: "In normal order the bank is one thing, so open takes s.",
        te: "మామూలు వరుసలో the bank ఒక్కటే కాబట్టి open కి s వస్తుంది.",
      },
      "he-she-s",
    ),
    pick(
      "q3",
      "I'd like to know how long ___ take.",
      "ఎంతసేపు పడుతుందో తెలుసుకోవాలి అండీ.",
      ["it will", "will it", "it"],
      0,
      {
        en: "After I'd like to know, it comes before will, and the verb needs will or an s.",
        te: "I'd like to know తర్వాత it ముందు, will తర్వాత; will లేకపోతే verb కి s కావాలి.",
      },
      "question",
    ),
    pick(
      "q4",
      "Could you tell me which ward he is ___?",
      "ఆయన ఏ వార్డులో ఉన్నారో చెప్తారా?",
      ["in", "on", "at"],
      0,
      {
        en: "Patients stay in a ward, so the question ends with in.",
        te: "రోగులు వార్డు లోపల ఉంటారు, అందుకే చివర in వస్తుంది.",
      },
      "preposition",
    ),
    pick(
      "q5",
      "You don't know where the ATM is? ___, I don't. Let's ask someone.",
      "ATM ఎక్కడుందో మీకు తెలీదా? తెలీదు. ఎవరినైనా అడుగుదాం.",
      ["No", "Yes", "Not"],
      0,
      {
        en: "When you agree that you don't know, start with No; Telugu అవును, తెలీదు makes people say Yes.",
        te: "తెలీదు అని ఒప్పుకుంటే No తో మొదలుపెట్టాలి; తెలుగు 'అవును, తెలీదు' వల్ల Yes అనేస్తాం.",
      },
      "negative-answer",
    ),
    pick(
      "q6",
      "Excuse me, do you know where ___ ATM is?",
      "ఎక్స్‌క్యూజ్ మీ, దగ్గర్లో ATM ఎక్కడ ఉందో మీకు తెలుసా?",
      ["the nearest", "nearest", "a nearest"],
      0,
      {
        en: "Nearest picks out one place, so it always needs the before it.",
        te: "nearest అంటే ఒక్క చోటే, అందుకే దాని ముందు ఎప్పుడూ the కావాలి.",
      },
      "article",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "The Kind Clerk at Secunderabad", te: "సికింద్రాబాద్‌లో మంచి క్లర్క్" },
      teller: { en: "Ramana", te: "రమణ" },
      voice: "b",
      parts: [
        {
          en: "Last month, my cousin Prasad was admitted to a hospital in Hyderabad. I took the night train from Nellore to see him. I reached Secunderabad at six in the morning.",
          te: "పోయిన నెల, మా కజిన్ ప్రసాద్ గారిని హైదరాబాద్‌లో ఒక ఆసుపత్రిలో చేర్చారు. ఆయన్ని చూడటానికి నెల్లూరు నుంచి రాత్రి రైలు ఎక్కాను. పొద్దున ఆరింటికి సికింద్రాబాద్ చేరుకున్నాను.",
        },
        {
          en: "The station was very big and very crowded. I didn't know where to go. So I went to the enquiry counter.",
          te: "స్టేషన్ చాలా పెద్దది, చాలా రద్దీగా ఉంది. ఎక్కడికి వెళ్ళాలో నాకు తెలీలేదు. అందుకే ఎంక్వయిరీ కౌంటర్‌కి వెళ్ళాను.",
        },
        {
          en: "I asked, Could you tell me which bus goes to Gandhi Hospital? The clerk smiled. She said it was close, and she showed me the bus stop outside.",
          te: "'గాంధీ హాస్పిటల్‌కి ఏ బస్సు వెళ్తుందో చెప్తారా?' అని అడిగాను. క్లర్క్ గారు నవ్వారు. అది దగ్గరే అని చెప్పి, బయట ఉన్న బస్ స్టాప్ చూపించారు.",
        },
        {
          en: "At the hospital, there was a long queue at the desk. Finally my turn came. I asked, Can you tell me which ward Prasad is in? The nurse said he was in the general ward, bed number twelve.",
          te: "ఆసుపత్రిలో డెస్క్ దగ్గర పెద్ద క్యూ ఉంది. చివరికి నా వంతు వచ్చింది. 'ప్రసాద్ గారు ఏ వార్డులో ఉన్నారో చెప్తారా?' అని అడిగాను. ఆయన జనరల్ వార్డులో, బెడ్ నంబర్ పన్నెండులో ఉన్నారని నర్సు గారు చెప్పారు.",
        },
        {
          en: "Then I asked if visitors were allowed. She said visiting hours started at ten. So I waited, and I had a cup of tea in the canteen.",
          te: "తర్వాత, లోపలికి వెళ్ళొచ్చా అని అడిగాను. visiting hours పది గంటలకి మొదలవుతాయని ఆవిడ చెప్పారు. అందుకే ఆగాను, క్యాంటీన్‌లో ఒక కప్పు టీ తాగాను.",
        },
        {
          en: "At ten, I saw Prasad. He was much better, and very happy to see me. Now I know one thing: a polite question always gets a kind answer.",
          te: "పది గంటలకి ప్రసాద్ గారిని చూశాను. ఆయన బాగా కోలుకున్నారు, నన్ను చూసి చాలా సంతోషపడ్డారు. ఇప్పుడు నాకు ఒకటి తెలుసు: మర్యాదగా అడిగితే ఎప్పుడూ మంచి జవాబే వస్తుంది.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Finding a cousin in a big city hospital", "Buying a train ticket to Nellore", "A new job in Hyderabad"],
          answer: 0,
        },
        {
          prompt: { en: "Where did Ramana ask first?", te: "రమణ గారు మొదట ఎక్కడ అడిగారు?" },
          options: ["At the station enquiry counter", "At the hospital desk", "At a tea shop"],
          answer: 0,
        },
        {
          prompt: { en: "Which ward was Prasad in?", te: "ప్రసాద్ గారు ఏ వార్డులో ఉన్నారు?" },
          options: ["The general ward", "The ICU", "A private room"],
          answer: 0,
        },
        {
          prompt: { en: "What did Ramana do while he waited?", te: "ఎదురుచూస్తూ రమణ గారు ఏం చేశారు?" },
          options: ["He had tea in the canteen", "He slept on a bench", "He called the nurse"],
          answer: 0,
        },
      ],
    },
  ],
};
