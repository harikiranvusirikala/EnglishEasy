import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 73, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick must / might / can't round, and a story. */

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
  id: "w73-review",
  kind: "review",
  title: { en: "Guess the Reason", te: "కారణం ఊహించండి" },
  extras: [
    pick("q1", "All the lights are off. There ___ be a power cut.", "లైట్లన్నీ ఆరిపోయాయి. కరెంట్ పోయి ఉంటుంది.", ["must", "can't", "is"], 0, {
      en: "A dark street is a strong sign, so the sure guess uses must.",
      te: "చీకటి వీధి గట్టి గుర్తు; అందుకే గట్టి ఊహకి must వాడతాం.",
    }),
    pick(
      "q2",
      "The shop might ___ closed for lunch.",
      "షాప్ భోజనానికి మూసేసి ఉండొచ్చు.",
      ["be", "is", "being"],
      0,
      {
        en: "After might, use be in its plain form, never is.",
        te: "might తర్వాత be అలాగే వస్తుంది; is రాదు.",
      },
      "be",
    ),
    pick("q3", "That can't be my bill. It's ___ too high.", "ఇది నా బిల్లు అయ్యుండదు. మరీ ఎక్కువగా ఉంది.", ["far", "very", "so much"], 0, {
      en: "Before too, English uses far or much, never very.",
      te: "too ముందు very రాదు; far లేదా much వస్తుంది.",
    }),
    pick(
      "q4",
      "Ask Rani. She must ___ the address.",
      "రాణి గారిని అడగండి. ఆవిడకి అడ్రస్ తెలిసే ఉంటుంది.",
      ["know", "be knowing", "knows"],
      0,
      {
        en: "Know is a state, so after must it takes no -ing and no s.",
        te: "know ఒక స్థితి; must తర్వాత దానికి -ing గానీ s గానీ రావు.",
      },
      "state-ing",
    ),
    pick(
      "q5",
      "Venkat ___ a walk every evening. He must be at the park.",
      "వెంకట్ గారు రోజూ సాయంత్రం నడకకి వెళ్తారు. పార్క్‌లో ఉండి ఉంటారు.",
      ["takes", "take", "taking"],
      0,
      {
        en: "Every evening shows a habit, and one person needs s on the verb.",
        te: "every evening అంటే అలవాటు; ఒక్కరైతే verb కి s కావాలి.",
      },
      "he-she-s",
    ),
    pick(
      "q6",
      "We've been stuck here ___ half an hour.",
      "అరగంటగా ఇక్కడే ఇరుక్కుపోయాం.",
      ["for", "since", "from"],
      0,
      {
        en: "A length of time takes for; since needs a starting time, like six o'clock.",
        te: "ఎంతసేపో చెప్తే for; since తర్వాత ఆరింటి లాంటి మొదలైన టైమ్ రావాలి.",
      },
      "duration",
    ),
    pick(
      "q7",
      "His phone is off. He might be out of ___.",
      "ఆయన ఫోన్ ఆఫ్‌లో ఉంది. ఊళ్ళో లేరేమో.",
      ["town", "station", "place"],
      0,
      {
        en: "Out of station is old Indian office English; people everywhere say out of town.",
        te: "out of station అనేది పాత మన ఆఫీసు ఇంగ్లీష్; అందరికీ అర్థమయ్యేది out of town.",
      },
      "indian-english",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "The Quiet Morning", te: "నిశ్శబ్దమైన పొద్దున" },
      teller: { en: "Prasad", te: "ప్రసాద్" },
      voice: "b",
      parts: [
        {
          en: "Last Sunday, I woke up and looked at my old clock. It said seven o'clock. But outside, it was still dark.",
          te: "పోయిన ఆదివారం నేను నిద్ర లేచి నా పాత గడియారం చూశాను. ఏడు గంటలు అని చూపిస్తోంది. కానీ బయట ఇంకా చీకటిగానే ఉంది.",
        },
        {
          en: "I thought, it must be a cloudy day. I opened the door for the milk packet. But there was no milk packet.",
          te: "ఈ రోజు మబ్బు పట్టి ఉంటుంది అనుకున్నాను. పాల ప్యాకెట్ కోసం తలుపు తీశాను. కానీ పాల ప్యాకెట్ లేదు.",
        },
        {
          en: "The milkman must be late, I said to myself. So I walked to the tea stall at the corner. Its shutter was down.",
          te: "పాలు పోసే ఆయన ఆలస్యం అయ్యుంటారు అని నాలో నేను అనుకున్నాను. అందుకే మూల మీద ఉన్న టీ కొట్టుకి నడిచి వెళ్ళాను. దాని షట్టర్ మూసి ఉంది.",
        },
        {
          en: "Ramana runs that stall. He opens it at six every day. He can't be on leave, I thought. He never takes a holiday.",
          te: "ఆ కొట్టు రమణ గారిది. ఆయన రోజూ ఆరింటికే తెరుస్తారు. ఆయన సెలవులో ఉండే ఛాన్స్ లేదు అనుకున్నాను. ఆయన ఎప్పుడూ సెలవు తీసుకోరు.",
        },
        {
          en: "Then I called my friend Mohan. His phone rang and rang. He must be fast asleep, I thought. But why so late?",
          te: "అప్పుడు నా స్నేహితుడు మోహన్ గారికి ఫోన్ చేశాను. రింగ్ అవుతూనే ఉంది. ఆయన గాఢ నిద్రలో ఉంటారు అనుకున్నాను. కానీ ఇంత సేపా?",
        },
        {
          en: "At last, I looked at my phone. It was only five o'clock! My old clock was two hours fast. Everyone was sleeping, except me.",
          te: "చివరికి నా ఫోన్ చూశాను. ఐదు గంటలే అయింది! నా పాత గడియారం రెండు గంటలు ముందుంది. నేను తప్ప అందరూ నిద్రపోతున్నారు.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A man who got up too early by mistake", "A man who lost his phone", "A tea stall that closed for good"],
          answer: 0,
        },
        {
          prompt: { en: "What did Prasad think when there was no milk packet?", te: "పాల ప్యాకెట్ లేనప్పుడు ప్రసాద్ గారు ఏమనుకున్నారు?" },
          options: ["The milkman must be late.", "The milkman was on holiday.", "It was a holiday."],
          answer: 0,
        },
        {
          prompt: { en: "When does Ramana open his tea stall?", te: "రమణ గారు టీ కొట్టు ఎన్నింటికి తెరుస్తారు?" },
          options: ["At six every day", "At seven every day", "Only on Sundays"],
          answer: 0,
        },
        {
          prompt: { en: "What was the real time?", te: "నిజంగా టైమ్ ఎంత అయింది?" },
          options: ["Five o'clock", "Seven o'clock", "Six o'clock"],
          answer: 0,
        },
      ],
    },
  ],
};
