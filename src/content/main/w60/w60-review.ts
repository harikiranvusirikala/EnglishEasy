import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 60, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick money-words round, and a story. */

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
  id: "w60-review",
  kind: "review",
  title: { en: "Money Talk", te: "డబ్బు మాటలు" },
  extras: [
    pick(
      "q1",
      "That old car costs two and a half ___ rupees.",
      "ఆ పాత కారు ధర రెండున్నర లక్షల రూపాయలు.",
      ["lakh", "lakhs", "lakhs of"],
      0,
      {
        en: "After a number, lakh has no s, even with a half; Telugu లక్షలు makes people add it.",
        te: "సంఖ్య తర్వాత, సగం ఉన్నా, lakh కి s రాదు; తెలుగు 'లక్షలు' వల్ల s చేరుస్తాం.",
      },
      "plural",
    ),
    pick("q2", "The interest rate is six point five ___.", "వడ్డీ రేటు ఆరున్నర శాతం.", ["per cent", "percentage", "per cents"], 0, {
      en: "After a number, say per cent, and it never takes an s.",
      te: "సంఖ్య తర్వాత per cent అనాలి; దానికి ఎప్పుడూ s రాదు.",
    }),
    pick(
      "q3",
      "___ the pension been credited this month?",
      "ఈ నెల పెన్షన్ అకౌంట్‌లో పడిందా?",
      ["Has", "Is", "Did"],
      0,
      {
        en: "Been needs has before it, so this question starts with has, not is or did.",
        te: "been ముందు has కావాలి; అందుకే ఈ ప్రశ్న has తో మొదలవుతుంది, is తో గానీ did తో గానీ కాదు.",
      },
      "question",
    ),
    pick(
      "q4",
      "Your FD will mature ___ March.",
      "మీ FD మార్చిలో mature అవుతుంది.",
      ["in", "on", "at"],
      0,
      {
        en: "Months take in; on is only for a date or a day of the week.",
        te: "నెలల ముందు in వస్తుంది; on తేదీకి గానీ వారానికి గానీ మాత్రమే.",
      },
      "preposition",
    ),
    pick(
      "q5",
      "This bank ___ interest every three months.",
      "ఈ బ్యాంక్ మూడు నెలలకి ఒకసారి వడ్డీ ఇస్తుంది.",
      ["pays", "pay", "paying"],
      0,
      {
        en: "A bank is one thing, like he or she, so the verb takes s in a fact.",
        te: "బ్యాంక్ ఒక్కటే, he, she లాగా; అందుకే నిజం చెప్పే వాక్యంలో verb కి s వస్తుంది.",
      },
      "he-she-s",
    ),
    pick(
      "q6",
      "You haven't shared your PIN with anyone? ___, I haven't.",
      "మీ PIN ఎవరికీ చెప్పలేదు కదా? లేదు, చెప్పలేదు.",
      ["No", "Yes", "Not"],
      0,
      {
        en: "When you agree that you have not, start with No; Telugu అవును, చెప్పలేదు makes people say Yes.",
        te: "చెప్పలేదు అని ఒప్పుకుంటే No తో మొదలుపెట్టాలి; తెలుగు 'అవును, చెప్పలేదు' వల్ల Yes అనేస్తాం.",
      },
      "negative-answer",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "Usha's Fixed Deposit", te: "ఉష గారి fixed deposit" },
      teller: { en: "Usha", te: "ఉష" },
      voice: "a",
      parts: [
        {
          en: "I worked as a teacher in Guntur for thirty years. Now I'm retired, and my pension comes on the first of the month. I always try to save a little from it.",
          te: "నేను గుంటూరులో ముప్పై సంవత్సరాలు టీచర్‌గా పనిచేశాను. ఇప్పుడు రిటైర్ అయ్యాను, నా పెన్షన్ నెల మొదటి తేదీన వస్తుంది. అందులోంచి ఎప్పుడూ కొంచెం దాచడానికి ప్రయత్నిస్తాను.",
        },
        {
          en: "Last year, I had two and a half lakh rupees in my savings account. It earned only about three per cent. My cousin Geetha said, Why don't you open a fixed deposit?",
          te: "పోయిన సంవత్సరం నా savings account లో రెండున్నర లక్షల రూపాయలు ఉన్నాయి. దానికి సుమారు మూడు శాతం వడ్డీ మాత్రమే వచ్చేది. 'fixed deposit ఎందుకు తెరవకూడదు?' అని మా కజిన్ గీత గారు అన్నారు.",
        },
        {
          en: "So I went to the bank and spoke to the manager, Imran. He explained the term and the interest very clearly. For senior citizens, the rate was about seven and a half per cent. I opened an FD for two years, and I made my sister the nominee.",
          te: "అందుకే బ్యాంక్‌కి వెళ్ళి మేనేజర్ ఇమ్రాన్ గారితో మాట్లాడాను. గడువు, వడ్డీ గురించి ఆయన చాలా బాగా వివరించారు. సీనియర్ సిటిజన్లకి రేటు సుమారు ఏడున్నర శాతం ఉంది. రెండేళ్ళకి FD తెరిచి, మా అక్కని nominee గా పెట్టాను.",
        },
        {
          en: "One week later, a man called me. He said, Madam, I'm calling from your bank. Your FD can double in one month! Just tell me the OTP.",
          te: "ఒక వారం తర్వాత ఒకాయన ఫోన్ చేశారు. 'మేడమ్, మీ బ్యాంక్ నుంచి ఫోన్ చేస్తున్నాను. మీ FD ఒక నెలలో రెట్టింపు అవుతుంది! OTP చెప్పండి చాలు' అన్నారు.",
        },
        {
          en: "I knew it was too good to be true. Banks never ask for your OTP or PIN. I said, No, thank you, and I put the phone down. Then I called my branch.",
          te: "అది నమ్మలేనంత మంచిగా ఉంది, నిజం కాదని నాకు తెలుసు. బ్యాంకులు ఎప్పుడూ OTP గానీ PIN గానీ అడగవు. 'వద్దు, థాంక్స్' అని ఫోన్ పెట్టేశాను. తర్వాత నా బ్రాంచ్‌కి ఫోన్ చేశాను.",
        },
        {
          en: "Imran said, You did the right thing. Many people have lost money because of calls like that. Now my FD is safe, and it will mature next year.",
          te: "'మీరు సరైన పని చేశారు. ఇలాంటి కాల్స్ వల్ల చాలామంది డబ్బు పోగొట్టుకున్నారు' అని ఇమ్రాన్ గారు అన్నారు. ఇప్పుడు నా FD భద్రంగా ఉంది, వచ్చే సంవత్సరం mature అవుతుంది.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Saving money safely and refusing a false call", "Buying a new house in Guntur", "Getting a new job at a bank"],
          answer: 0,
        },
        {
          prompt: { en: "How much money did Usha have in her savings account?", te: "ఉష గారి savings account లో ఎంత డబ్బు ఉంది?" },
          options: ["Two and a half lakh rupees", "Twenty-five lakh rupees", "Two lakh rupees"],
          answer: 0,
        },
        {
          prompt: { en: "What rate did Usha get as a senior citizen?", te: "సీనియర్ సిటిజన్‌గా ఉష గారికి ఎంత రేటు వచ్చింది?" },
          options: ["About seven and a half per cent", "About three per cent", "About six per cent"],
          answer: 0,
        },
        {
          prompt: { en: "What did the caller ask for?", te: "ఫోన్ చేసినాయన ఏం అడిగారు?" },
          options: ["The OTP", "Her passbook", "Her home address"],
          answer: 0,
        },
      ],
    },
  ],
};
