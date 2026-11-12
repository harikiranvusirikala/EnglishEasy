import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 50, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick reasons-and-returns round, and a story. */

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
  id: "w50-review",
  kind: "review",
  title: { en: "Returns and Refunds", te: "వాపస్, రీఫండ్" },
  extras: [
    pick("q1", "The fan is very noisy, ___ I brought it back.", "ఫ్యాన్ చాలా శబ్దం చేస్తోంది, అందుకే తిరిగి తెచ్చాను.", ["so", "because", "but"], 0, {
      en: "After the problem, the word so brings the result, like Telugu అందుకే.",
      te: "ముందు సమస్య, తర్వాత ఫలితం కాబట్టి so; తెలుగు 'అందుకే' లాగా.",
    }),
    pick("q2", "I came back ___ the zip broke.", "జిప్ పాడైపోయింది కాబట్టి మళ్ళీ వచ్చాను.", ["because", "so", "that's why"], 0, {
      en: "The reason comes after the gap, and because always brings the reason.",
      te: "ఖాళీ తర్వాత కారణం వస్తోంది; కారణం ముందు ఎప్పుడూ because.",
    }),
    pick("q3", "I'm ___ there's a problem with the bill.", "sorry అండీ, బిల్లులో ఒక సమస్య ఉంది.", ["afraid", "sorry for", "worry"], 0, {
      en: "To start a complaint politely, English uses the fixed words I'm afraid.",
      te: "సమస్యని మర్యాదగా మొదలుపెట్టడానికి I'm afraid అనే మాట వాడతాం.",
    }),
    pick(
      "q4",
      "Can I exchange this shirt ___ a bigger size?",
      "ఈ షర్ట్‌కి బదులు పెద్ద సైజు తీసుకోవచ్చా?",
      ["for", "with", "by"],
      0,
      {
        en: "You exchange one thing for another; Telugu బదులు is for, never with.",
        te: "ఒక దానికి బదులు ఇంకోటి అంటే exchange … for; with కాదు.",
      },
      "preposition",
    ),
    pick("q5", "I returned the kettle five days ___.", "ఐదు రోజుల క్రితం kettle వాపస్ ఇచ్చాను.", ["ago", "before", "back"], 0, {
      en: "Counting back from today, English puts ago after the time.",
      te: "ఈ రోజు నుంచి వెనక్కి లెక్కపెడితే, టైమ్ తర్వాత ago వస్తుంది.",
    }),
    pick(
      "q6",
      "When ___ I get my refund?",
      "నా రీఫండ్ ఎప్పుడు వస్తుంది?",
      ["will", "I will", "am"],
      0,
      {
        en: "In a question about later, will comes before I, not after it.",
        te: "తర్వాత జరిగేదాని గురించి ప్రశ్నలో will, I కంటే ముందు వస్తుంది.",
      },
      "question",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "The Cooker With No Whistle", te: "విజిల్ రాని కుక్కర్" },
      teller: { en: "Gopal", te: "గోపాల్" },
      voice: "b",
      parts: [
        {
          en: "Last month, I bought a new pressure cooker for Sankranti. My sister was coming to stay with me.",
          te: "పోయిన నెల సంక్రాంతికి నేను ఒక కొత్త pressure cooker కొన్నాను. మా అక్క నా దగ్గర ఉండటానికి వస్తున్నారు.",
        },
        {
          en: "On the first day, I made pongal in it. But steam came out from the sides, and there was no whistle. I was worried, so I stopped cooking at once.",
          te: "మొదటి రోజే అందులో పొంగలి చేశాను. కానీ పక్కల నుంచి ఆవిరి బయటికి వచ్చింది, విజిల్ రాలేదు. నాకు భయం వేసింది, అందుకే వెంటనే వంట ఆపేశాను.",
        },
        {
          en: "The next morning, I took it back to the shop with the bill. I said, “I'm afraid this cooker is faulty.” The young salesman looked at it and said, “Sorry, it's used. We can't take it back.”",
          te: "మర్నాడు పొద్దున బిల్లు తీసుకుని దాన్ని షాపుకి తీసుకెళ్ళాను. “ఈ cooker లో లోపం ఉంది అండీ” అన్నాను. ఆ యువ సేల్స్‌మన్ చూసి, “sorry, ఇది వాడినది. వాపస్ తీసుకోలేం” అన్నారు.",
        },
        {
          en: "I didn't shout. I said, “I understand, but it was faulty from day one. Could I speak to the manager, please?”",
          te: "నేను అరవలేదు. “అర్థమైంది, కానీ ఇది మొదటి రోజు నుంచే సరిగ్గా లేదు. మేనేజర్ గారితో ఒకసారి మాట్లాడొచ్చా?” అన్నాను.",
        },
        {
          en: "The manager, Fatima, came at once. She checked the lid and found a problem with the rubber ring. She said sorry and gave me a new cooker.",
          te: "మేనేజర్ ఫాతిమా గారు వెంటనే వచ్చారు. మూత చూసి, రబ్బరు రింగ్‌లో లోపం ఉందని కనిపెట్టారు. sorry చెప్పి, నాకు కొత్త cooker ఇచ్చారు.",
        },
        {
          en: "My sister came the next day, and the new cooker worked well. That's why I always say: be firm, but stay polite.",
          te: "మర్నాడు మా అక్క వచ్చారు, కొత్త cooker బాగా పని చేసింది. అందుకే నేను ఎప్పుడూ చెప్తాను: గట్టిగా ఉండండి, కానీ మర్యాద వదలకండి.",
        },
      ],
      questions: [
        { prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" }, options: ["Returning a faulty cooker", "A trip for Sankranti", "Buying a new phone"], answer: 0 },
        {
          prompt: { en: "What was wrong with the cooker?", te: "cooker కి ఏమైంది?" },
          options: ["Steam came out, and there was no whistle.", "The handle broke.", "It was too small."],
          answer: 0,
        },
        {
          prompt: { en: "What did the young salesman say first?", te: "ఆ యువ సేల్స్‌మన్ మొదట ఏమన్నారు?" },
          options: ["They can't take it back.", "He will give a refund.", "Come back tomorrow."],
          answer: 0,
        },
        {
          prompt: { en: "What did the manager do?", te: "మేనేజర్ గారు ఏం చేశారు?" },
          options: ["She gave him a new cooker.", "She gave him a credit note.", "She sent it for repair."],
          answer: 0,
        },
      ],
    },
  ],
};
