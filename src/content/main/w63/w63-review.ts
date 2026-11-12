import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 63, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), plus a quick round on letter and notice English, and a story. */

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
  id: "w63-review",
  kind: "review",
  title: { en: "Letters and Notices", te: "ఉత్తరాలు, నోటీసులు" },
  extras: [
    pick("q1", "You are requested ___ visit the branch with your passbook.", "మీ పాస్‌బుక్ తీసుకుని బ్రాంచ్‌కి రావాలని కోరుతున్నాం.", ["to", "for", "that"], 0, {
      en: "Requested is followed by to and the plain verb, just like asked to.",
      te: "requested తర్వాత to, ఆ తర్వాత verb అలాగే వస్తుంది, asked to లాగా.",
    }),
    pick(
      "q2",
      "All the forms must ___ signed by you.",
      "అన్ని ఫారాల మీద మీరే సంతకం చేయాలి.",
      ["be", "are", "being"],
      0,
      {
        en: "After must, use be before a done form like signed; are never follows must.",
        te: "must తర్వాత, signed లాంటి పూర్తయిన రూపం ముందు be వస్తుంది; must తర్వాత are రాదు.",
      },
      "be",
    ),
    pick(
      "q3",
      "Power will be cut ___ ten to two on Sunday.",
      "ఆదివారం పది నుంచి రెండు వరకు కరెంట్ ఉండదు.",
      ["from", "between", "since"],
      0,
      {
        en: "A stretch of time goes from one hour to another; between goes with and, not to.",
        te: "ఒక సమయం నుంచి ఇంకో సమయం వరకు అంటే from … to; between అయితే and తో వస్తుంది, to తో కాదు.",
      },
      "preposition",
    ),
    pick(
      "q4",
      "I ___ understand this notice. Can you help me?",
      "ఈ నోటీసు నాకు అర్థం కావట్లేదు. కొంచెం సాయం చేస్తారా?",
      ["don't", "am not", "not"],
      0,
      {
        en: "Understand is a state, so it takes don't; Telugu అర్థం కావట్లేదు sounds like -ing, but English does not use it.",
        te: "understand ఒక స్థితి, కాబట్టి don't వస్తుంది; తెలుగు 'కావట్లేదు' -ing లాగా ఉన్నా, ఇంగ్లీష్‌లో -ing రాదు.",
      },
      "state-ing",
    ),
    pick(
      "q5",
      "The water bill ___ overdue. Please pay it soon.",
      "నీళ్ళ బిల్లు గడువు దాటిపోయింది. త్వరగా కట్టండి.",
      ["is", "has", "are"],
      0,
      {
        en: "English needs is to say how something is; Telugu says గడువు దాటింది with no is.",
        te: "ఒకటి ఎలా ఉందో చెప్పడానికి ఇంగ్లీష్‌లో is కావాలి; తెలుగులో 'గడువు దాటింది' లో is ఉండదు.",
      },
      "be",
    ),
    pick(
      "q6",
      "This message ___ for your OTP. Don't reply to it.",
      "ఈ మెసేజ్ మీ OTP అడుగుతోంది. దానికి జవాబు ఇవ్వకండి.",
      ["asks", "ask", "asking"],
      0,
      {
        en: "One message, like it, takes s on the verb; asking would need is before it.",
        te: "ఒక్క మెసేజ్ (it లాగా) కాబట్టి verb కి s వస్తుంది; asking అయితే ముందు is కావాలి.",
      },
      "he-she-s",
    ),
    pick(
      "q7",
      "We ___ in this colony for twenty years.",
      "ఇరవై ఏళ్ళుగా మేము ఈ కాలనీలో ఉంటున్నాం.",
      ["have lived", "are living", "live"],
      0,
      {
        en: "For time from the past until now, use have lived with for; Telugu uses the present here.",
        te: "గతం నుంచి ఇప్పటి వరకు అయితే for తో have lived వాడాలి; తెలుగులో ఇక్కడ present వాడతాం.",
      },
      "duration",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "The Letter in Red", te: "ఎర్ర అక్షరాల ఉత్తరం" },
      teller: { en: "Swapna", te: "స్వప్న" },
      voice: "a",
      parts: [
        {
          en: "Last month, my neighbour Joseph got a letter. Big red letters on top said Final Reminder. He came to my house, very worried.",
          te: "పోయిన నెల మా పక్కింటి జోసెఫ్ గారికి ఒక ఉత్తరం వచ్చింది. పైన పెద్ద ఎర్ర అక్షరాల్లో Final Reminder అని ఉంది. ఆయన చాలా కంగారుగా మా ఇంటికి వచ్చారు.",
        },
        {
          en: "The letter said his electricity bill was overdue. His power would be cut in twenty-four hours. He was asked to pay 3000 rupees at once.",
          te: "ఆయన కరెంట్ బిల్లు గడువు దాటిపోయిందని ఉత్తరంలో ఉంది. ఇరవై నాలుగు గంటల్లో కరెంట్ కట్ చేస్తారట. వెంటనే 3000 రూపాయలు కట్టమని అడిగారు.",
        },
        {
          en: "I read the letter slowly. There was no reference number and no office address. The office name had a spelling mistake. The only phone number was a mobile number.",
          te: "నేను ఉత్తరం మెల్లగా చదివాను. అందులో reference నంబర్ లేదు, ఆఫీసు అడ్రస్ లేదు. ఆఫీసు పేరులోనే స్పెల్లింగ్ తప్పు ఉంది. ఒక మొబైల్ నంబర్ తప్ప వేరే నంబర్ లేదు.",
        },
        {
          en: "Then Joseph showed me his last bill. He paid it on the tenth, and the receipt was with it. So the bill was not overdue at all!",
          te: "అప్పుడు జోసెఫ్ గారు తన చివరి బిల్లు చూపించారు. పదో తేదీనే కట్టేశారు, రసీదు కూడా దానితో పాటే ఉంది. అంటే బిల్లు అసలు గడువు దాటలేదు!",
        },
        {
          en: "We did not call the mobile number. We called the electricity office on the number on his old bill. The clerk told us the letter was fake.",
          te: "మేము ఆ మొబైల్ నంబర్‌కి ఫోన్ చేయలేదు. ఆయన పాత బిల్లు మీద ఉన్న నంబర్‌తో కరెంట్ ఆఫీసుకి ఫోన్ చేశాం. ఆ ఉత్తరం నకిలీదని క్లర్క్ గారు చెప్పారు.",
        },
        {
          en: "Joseph was so relieved. Now he keeps all the office numbers in a small notebook. And he always checks a letter before he pays.",
          te: "జోసెఫ్ గారికి చాలా ఊరటగా అనిపించింది. ఇప్పుడు ఆయన ఆఫీసు నంబర్లన్నీ ఒక చిన్న పుస్తకంలో రాసి పెట్టుకుంటారు. ఏదైనా కట్టే ముందు ఉత్తరాన్ని ఎప్పుడూ చెక్ చేస్తారు.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A fake reminder letter", "A new electricity connection", "A trip to the bank"],
          answer: 0,
        },
        {
          prompt: { en: "What did the letter ask Joseph to do?", te: "ఉత్తరం జోసెఫ్ గారిని ఏం చేయమంది?" },
          options: ["Pay 3000 rupees at once", "Visit the office with his ID", "Call the police"],
          answer: 0,
        },
        {
          prompt: { en: "What was missing from the letter?", te: "ఉత్తరంలో ఏం లేదు?" },
          options: ["A reference number and an office address", "Joseph's name", "The words Final Reminder"],
          answer: 0,
        },
        {
          prompt: { en: "How did they check the letter?", te: "వాళ్ళు ఉత్తరాన్ని ఎలా చెక్ చేశారు?" },
          options: ["They called the number on his old bill.", "They called the mobile number.", "They asked the postman."],
          answer: 0,
        },
      ],
    },
  ],
};
