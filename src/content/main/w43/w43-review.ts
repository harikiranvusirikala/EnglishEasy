import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 43, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick past-or-have round, and Padma's life story. */

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
  id: "w43-review",
  kind: "review",
  title: { en: "My Story So Far", te: "ఇప్పటి వరకు నా కథ" },
  extras: [
    pick("q1", "I was ___ in Ongole in nineteen sixty-two.", "నేను 1962 లో ఒంగోలులో పుట్టాను.", ["born", "birth", "bear"], 0, {
      en: "Was born is the fixed way to say where your life started.",
      te: "ఎక్కడ పుట్టారో చెప్పడానికి ఎప్పుడూ was born వాడతాం.",
    }),
    pick(
      "q2",
      "I have lived in this colony ___ two thousand four.",
      "నేను 2004 నుంచి ఈ కాలనీలో ఉంటున్నాను.",
      ["since", "for", "from"],
      0,
      {
        en: "The year is when it started, so it takes since, not for.",
        te: "ఆ సంవత్సరం మొదలైన సమయం; అందుకే since, for కాదు.",
      },
      "preposition",
    ),
    pick("q3", "I ___ in Warangal for ten years. Then I moved here.", "నేను పదేళ్ళు వరంగల్‌లో ఉన్నాను. తర్వాత ఇక్కడికి వచ్చాను.", ["lived", "have lived", "am living"], 0, {
      en: "Then I moved shows that time is over, so use the past.",
      te: "Then I moved అంటే ఆ కాలం అయిపోయింది; అందుకే past.",
    }),
    pick(
      "q4",
      "I ___ known Padma since our school days.",
      "పద్మ గారు నాకు స్కూల్ రోజుల నుంచి తెలుసు.",
      ["have", "am", "was"],
      0,
      {
        en: "Something still true since a past time needs have, not am.",
        te: "అప్పటి నుంచి ఇప్పటికీ నిజమైనదానికి have కావాలి, am కాదు.",
      },
      "duration",
    ),
    pick("q5", "I ___ my first smartphone in two thousand nineteen.", "నేను 2019 లో నా మొదటి smartphone కొన్నాను.", ["bought", "have bought", "buy"], 0, {
      en: "A year is a finished time, so the plain past fits.",
      te: "సంవత్సరం అయిపోయిన సమయం; అందుకే past సరిపోతుంది.",
    }),
    pick(
      "q6",
      "My sister ___ at a school in Guntur.",
      "మా అక్క ఇప్పటికీ గుంటూరులో ఒక స్కూల్లో పాఠాలు చెప్తున్నారు.",
      ["still teaches", "still teach", "still teaching"],
      0,
      {
        en: "One person takes s on the verb, and still shows the work goes on.",
        te: "ఒక్క వ్యక్తికి verb కి s వస్తుంది; still అంటే ఆ పని ఇంకా జరుగుతోంది.",
      },
      "he-she-s",
    ),
    {
      id: "x-story",
      type: "story",
      title: { en: "Padma's Life Story", te: "పద్మ గారి జీవిత కథ" },
      teller: { en: "Padma", te: "పద్మ" },
      voice: "a",
      parts: [
        {
          en: "My name is Padma. I was born in a small village near Khammam in nineteen fifty-eight. My father was a farmer, and we had two cows.",
          te: "నా పేరు పద్మ. నేను 1958 లో ఖమ్మం దగ్గర ఒక చిన్న ఊర్లో పుట్టాను. మా నాన్నగారు రైతు, మాకు రెండు ఆవులు ఉండేవి.",
        },
        {
          en: "After school, I trained as a nurse in Hyderabad. It was my first time in a big city. I was scared, but I learned fast.",
          te: "స్కూల్ అయ్యాక నేను హైదరాబాద్‌లో నర్సు ట్రైనింగ్ చేశాను. పెద్ద సిటీకి రావడం అదే మొదటిసారి. భయం వేసింది, కానీ త్వరగా నేర్చుకున్నాను.",
        },
        {
          en: "I worked as a nurse at a government hospital for thirty-two years. The work was hard, but I loved it. I retired in two thousand sixteen.",
          te: "నేను ముప్పై రెండేళ్ళు ఒక ప్రభుత్వ ఆసుపత్రిలో నర్సుగా పని చేశాను. పని కష్టంగా ఉండేది, కానీ నాకు చాలా ఇష్టం. 2016 లో రిటైర్ అయ్యాను.",
        },
        {
          en: "I have lived in Ashok Nagar since nineteen ninety. I know almost everyone in the colony. Many of them were my patients once!",
          te: "నేను 1990 నుంచి అశోక్ నగర్‌లో ఉంటున్నాను. కాలనీలో దాదాపు అందరూ నాకు తెలుసు. వాళ్ళలో చాలా మంది ఒకప్పుడు నా దగ్గరికి వచ్చిన పేషెంట్లే!",
        },
        {
          en: "Since I retired, I have learned to use a smartphone. Now I video call my brother in Pune every Sunday.",
          te: "రిటైర్ అయ్యాక smartphone వాడటం నేర్చుకున్నాను. ఇప్పుడు ప్రతి ఆదివారం పుణేలో ఉన్న మా అన్నయ్యకి video call చేస్తాను.",
        },
        {
          en: "I also teach first aid to our walking group. My life has changed a lot, but I am happy.",
          te: "మా వాకింగ్ గ్రూప్‌కి first aid కూడా నేర్పిస్తాను. నా జీవితం చాలా మారింది, కానీ నేను సంతోషంగా ఉన్నాను.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Padma's life, from her village to today", "A day at a government hospital", "A trip to Pune"],
          answer: 0,
        },
        {
          prompt: { en: "What work did Padma do?", te: "పద్మ గారు ఏం పని చేసేవారు?" },
          options: ["She was a nurse.", "She was a teacher.", "She was a farmer."],
          answer: 0,
        },
        {
          prompt: { en: "How long has Padma lived in Ashok Nagar?", te: "పద్మ గారు అశోక్ నగర్‌లో ఎంత కాలంగా ఉంటున్నారు?" },
          options: ["Since nineteen ninety", "Since two thousand sixteen", "Since nineteen fifty-eight"],
          answer: 0,
        },
        {
          prompt: { en: "What has Padma learned since she retired?", te: "రిటైర్ అయ్యాక పద్మ గారు ఏం నేర్చుకున్నారు?" },
          options: ["To use a smartphone", "To drive a car", "To play the flute"],
          answer: 0,
        },
      ],
    },
  ],
};
