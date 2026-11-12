import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 74, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), plus a quick steps and passive round, and a story. */

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
  id: "w74-review",
  kind: "review",
  title: { en: "Step by Step", te: "ఒక్కో step గా" },
  extras: [
    pick("q1", "___, put the clothes in. Then add the powder.", "ముందు బట్టలు వేయండి. తర్వాత పౌడర్ వేయండి.", ["First", "Finally", "After"], 0, {
      en: "The step before all the others starts with First; Finally is for the last one.",
      te: "అన్నిటికంటే ముందు step కి First; Finally చివరి step కి.",
    }),
    pick(
      "q2",
      "The milk ___ collected from farmers every morning.",
      "రైతుల దగ్గర నుంచి ప్రతి రోజు పొద్దున పాలు సేకరిస్తారు.",
      ["is", "are", "does"],
      0,
      {
        en: "English does not count milk, so it takes is, though Telugu పాలు is plural.",
        te: "ఇంగ్లీష్‌లో milk లెక్కపెట్టనిది, అందుకే is; తెలుగులో 'పాలు' బహువచనమైనా సరే.",
      },
      "plural",
    ),
    pick("q3", "Your form is checked first, then ___ to the officer.", "ముందు మీ ఫారమ్ చెక్ చేసి, తర్వాత ఆఫీసర్‌కి పంపుతారు.", ["sent", "send", "sending"], 0, {
      en: "One is covers both steps, so the second step also takes the done form.",
      te: "ఒక్క is రెండు పనులకీ సరిపోతుంది; అందుకే రెండో పనికి కూడా పూర్తయిన రూపమే.",
    }),
    pick(
      "q4",
      "The notes are counted ___ the machine.",
      "నోట్లని మెషీన్ లెక్కపెడుతుంది.",
      ["by", "from", "with"],
      0,
      {
        en: "In this pattern, by tells who or what does the work.",
        te: "ఈ రకం వాక్యంలో పని ఎవరు లేదా ఏది చేస్తుందో by చెప్తుంది.",
      },
      "preposition",
    ),
    pick(
      "q5",
      "How long ___ it take to get the card?",
      "కార్డు రావడానికి ఎంత టైమ్ పడుతుంది?",
      ["does", "is", "it"],
      0,
      {
        en: "With a plain verb like take, the question needs does before it.",
        te: "take లాంటి verb తో ప్రశ్నకి it ముందు does కావాలి.",
      },
      "question",
    ),
    pick(
      "q6",
      "The machine ___ the notes and shows the amount.",
      "మెషీన్ నోట్లు లెక్కపెట్టి, amount చూపిస్తుంది.",
      ["counts", "count", "counting"],
      0,
      {
        en: "One machine, like he or she, takes s on the verb.",
        te: "ఒక్క మెషీన్ (he, she లాగా), అందుకే verb కి s.",
      },
      "he-she-s",
    ),
    {
      id: "q7",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "Your neighbour asks: Haven't you booked the gas yet? You have not. What do you say?",
        te: "పక్కింటివారు Haven't you booked the gas yet? అని అడిగారు. మీరు ఇంకా బుక్ చేయలేదు. ఏమంటారు?",
      },
      options: ["No, I haven't. I'll do it today.", "Yes, I haven't. I'll do it today.", "Yes, not yet. I'll do it today."],
      answer: 0,
      why: {
        en: "You have not booked it, so English says No. Telugu అవును agrees with the question instead.",
        te: "బుక్ చేయలేదు కాబట్టి ఇంగ్లీష్‌లో No. తెలుగులో 'అవును' అంటే ప్రశ్నతో ఒప్పుకోవడం.",
      },
    },
    {
      id: "story",
      type: "story",
      title: { en: "Avakaya Day in Our Colony", te: "మా కాలనీలో ఆవకాయ రోజు" },
      teller: { en: "Ramesh", te: "రమేష్" },
      voice: "b",
      parts: [
        {
          en: "Every May, our colony makes avakaya together on one Sunday. This year, I joined them for the first time. I was a little nervous.",
          te: "ప్రతి మే నెలలో ఒక ఆదివారం మా కాలనీ వాళ్ళంతా కలిసి ఆవకాయ పెడతారు. ఈ సంవత్సరం నేను మొదటిసారి వాళ్ళతో చేరాను. నాకు కొంచెం భయంగా ఉంది.",
        },
        {
          en: "Early in the morning, fifty green mangoes were brought from the market. First, they were washed and dried with a cloth.",
          te: "పొద్దున్నే మార్కెట్ నుంచి యాభై పచ్చి మామిడికాయలు తెచ్చారు. ముందు వాటిని కడిగి, గుడ్డతో తుడిచారు.",
        },
        {
          en: "Then Mohan cut them into pieces with a big, sharp cutter. Only he is allowed to use it. It is very old and very sharp.",
          te: "తర్వాత మోహన్ గారు ఒక పెద్ద, పదునైన కత్తిపీటతో వాటిని ముక్కలుగా కోశారు. దాన్ని ఆయన ఒక్కరే వాడతారు. అది చాలా పాతది, చాలా పదునైనది.",
        },
        {
          en: "My job was to wipe every piece dry. Padma told me why. Even one drop of water can spoil the pickle.",
          te: "ప్రతి ముక్కనీ పొడిగా తుడవడం నా పని. ఎందుకో పద్మ గారు చెప్పారు. ఒక్క నీటి చుక్క పడినా పచ్చడి పాడైపోతుంది.",
        },
        {
          en: "After that, chilli powder, mustard powder and salt were mixed in a big vessel. The pieces were added, and then the oil.",
          te: "ఆ తర్వాత ఒక పెద్ద గిన్నెలో కారం, ఆవపిండి, ఉప్పు కలిపారు. ముక్కలు వేశారు, తర్వాత నూనె పోశారు.",
        },
        {
          en: "Finally, the pickle was put into ten jars. After three days, we mixed it again. Now every house has a jar of our avakaya!",
          te: "చివరగా పచ్చడిని పది జాడీల్లో పెట్టారు. మూడు రోజుల తర్వాత మళ్ళీ కలిపాం. ఇప్పుడు ప్రతి ఇంట్లో మా ఆవకాయ జాడీ ఉంది!",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Making avakaya with the colony", "Buying mangoes at the market", "A visit to a dairy"],
          answer: 0,
        },
        {
          prompt: { en: "When does the colony make avakaya?", te: "కాలనీ వాళ్ళు ఆవకాయ ఎప్పుడు పెడతారు?" },
          options: ["On one Sunday in May", "Every Sunday", "At Sankranti"],
          answer: 0,
        },
        {
          prompt: { en: "What was Ramesh's job?", te: "రమేష్ గారి పని ఏంటి?" },
          options: ["Wiping the pieces dry", "Cutting the mangoes", "Buying the oil"],
          answer: 0,
        },
        {
          prompt: { en: "Why must the pieces be dry?", te: "ముక్కలు ఎందుకు పొడిగా ఉండాలి?" },
          options: ["Water can spoil the pickle.", "Dry pieces are cheaper.", "The cutter works better."],
          answer: 0,
        },
      ],
    },
  ],
};
