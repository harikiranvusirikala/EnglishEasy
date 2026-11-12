import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 46, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick opinion-words round, and a story. */

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
  id: "w46-review",
  kind: "review",
  title: { en: "What's Your Opinion?", te: "మీ అభిప్రాయం ఏంటి?" },
  extras: [
    pick("q1", "I ___ think the market should close at eight.", "మార్కెట్ ఎనిమిదింటికే మూసేయాలని నాకు అనిపించట్లేదు.", ["don't", "am not", "not"], 0, {
      en: "For a no opinion, put don't before think; Telugu says the no at the very end.",
      te: "'కాదు' అభిప్రాయానికి think ముందు don't పెట్టాలి; తెలుగులో 'లేదు' చివర్లో వస్తుంది.",
    }),
    pick(
      "q2",
      "I completely agree ___ Salma.",
      "సల్మా గారు చెప్పినదానికి నేను పూర్తిగా ఒప్పుకుంటాను.",
      ["with", "to", "for"],
      0,
      {
        en: "You agree with a person, like Telugu తో; to and for do not fit here.",
        te: "మనిషితో ఒప్పుకోవడానికి with, తెలుగు 'తో' లాగా; to, for సరిపోవు.",
      },
      "preposition",
    ),
    pick(
      "q3",
      "What ___ you think about the new timings?",
      "కొత్త టైమింగ్స్ గురించి మీకేమనిపిస్తోంది?",
      ["do", "are", "is"],
      0,
      {
        en: "A question with think needs do before you, because think is an action word.",
        te: "think తో ప్రశ్నకి you ముందు do కావాలి, ఎందుకంటే think ఒక verb.",
      },
      "question",
    ),
    pick(
      "q4",
      "Imran ___ the park needs more lights.",
      "పార్క్‌కి ఇంకా లైట్లు కావాలని ఇమ్రాన్ గారు అనుకుంటున్నారు.",
      ["thinks", "think", "thinking"],
      0,
      {
        en: "One person, like he, takes s on the verb in the present.",
        te: "ఒక్కరైతే (he లాగా) present లో verb కి s వస్తుంది.",
      },
      "he-she-s",
    ),
    pick("q5", "I see your point, ___ plastic bags are a big problem.", "మీరు చెప్పేది అర్థమైంది, కానీ ప్లాస్టిక్ సంచులు పెద్ద సమస్య.", ["but", "because", "so"], 0, {
      en: "After I see your point, but brings your different view.",
      te: "I see your point తర్వాత మీ వేరే అభిప్రాయం చెప్పడానికి but వస్తుంది.",
    }),
    {
      id: "st1",
      type: "story",
      title: { en: "The Bench Under the Neem Tree", te: "వేప చెట్టు కింద బెంచీ" },
      teller: { en: "Kamala", te: "కమల" },
      voice: "a",
      parts: [
        {
          en: "There is a small park near the temple in our colony. Every morning, many elders walk there. Last month, the municipal office gave us fifty thousand rupees for the park.",
          te: "మా కాలనీలో గుడి దగ్గర ఒక చిన్న పార్క్ ఉంది. రోజూ పొద్దున చాలామంది పెద్దవాళ్ళు అక్కడ నడుస్తారు. పోయిన నెల మున్సిపల్ ఆఫీస్ వాళ్ళు పార్క్ కోసం మాకు యాభై వేల రూపాయలు ఇచ్చారు.",
        },
        {
          en: "So we had a residents' meeting on Sunday. Our secretary, Grace, asked everyone for their views. Everybody had an opinion!",
          te: "అందుకే ఆదివారం రెసిడెంట్స్ మీటింగ్ పెట్టుకున్నాం. మా సెక్రటరీ గ్రేస్ గారు అందరి అభిప్రాయాలు అడిగారు. ఒక్కొక్కరిదీ ఒక్కో అభిప్రాయం!",
        },
        {
          en: "Prasad said, In my opinion, we need gym machines for young people. I said, I see your point, but the elders need benches first. Many of them can't walk for long without a rest.",
          te: "నా అభిప్రాయం ప్రకారం యువత కోసం జిమ్ మెషీన్లు కావాలి అని ప్రసాద్ గారు అన్నారు. మీరు చెప్పేది అర్థమైంది, కానీ ముందు పెద్దవాళ్ళకి బెంచీలు కావాలి అని నేను అన్నాను. వాళ్ళలో చాలామంది ఆగకుండా ఎక్కువసేపు నడవలేరు.",
        },
        {
          en: "Then Salma spoke. She said, That's true, but the park is also very dark at night. I completely agreed with her. Last week, a man fell near the gate in the dark.",
          te: "అప్పుడు సల్మా గారు మాట్లాడారు. నిజమే, కానీ రాత్రిపూట పార్క్ చాలా చీకటిగా కూడా ఉంటుంది అని ఆవిడ అన్నారు. నేను ఆవిడతో పూర్తిగా ఒప్పుకున్నాను. పోయిన వారం చీకట్లో గేటు దగ్గర ఒకాయన పడిపోయారు.",
        },
        {
          en: "We talked for one hour. Nobody said, You are wrong. Everyone listened, and everyone spoke politely.",
          te: "ఒక గంట మాట్లాడుకున్నాం. 'మీరు తప్పు' అని ఎవరూ అనలేదు. అందరూ విన్నారు, అందరూ మర్యాదగా మాట్లాడారు.",
        },
        {
          en: "In the end, we decided on four benches and two new lights. The young people will get one machine next year. Now I sit under the neem tree every morning. I think it's the best bench in town!",
          te: "చివరికి నాలుగు బెంచీలు, రెండు కొత్త లైట్లు అని నిర్ణయించాం. యువతకి వచ్చే సంవత్సరం ఒక మెషీన్ వస్తుంది. ఇప్పుడు నేను రోజూ పొద్దున వేప చెట్టు కింద కూర్చుంటాను. ఊర్లో అదే అన్నిటికంటే మంచి బెంచీ అని నా ఉద్దేశం!",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A colony meeting about the park", "A trip to the temple", "A problem at the bank"],
          answer: 0,
        },
        {
          prompt: { en: "Who wanted gym machines?", te: "జిమ్ మెషీన్లు ఎవరు కావాలన్నారు?" },
          options: ["Prasad", "Salma", "Grace"],
          answer: 0,
        },
        {
          prompt: { en: "What problem did Salma talk about?", te: "సల్మా గారు ఏ సమస్య గురించి చెప్పారు?" },
          options: ["The park is dark at night.", "The benches are broken.", "The park is too small."],
          answer: 0,
        },
        {
          prompt: { en: "What did they decide?", te: "వాళ్ళు ఏం నిర్ణయించారు?" },
          options: ["Four benches and two lights", "Two gym machines now", "A new gate and a guard"],
          answer: 0,
        },
      ],
    },
  ],
};
