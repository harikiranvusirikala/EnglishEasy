import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 72, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick definitely / probably / might round, and a story. */

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
  id: "w72-review",
  kind: "review",
  title: { en: "Sure or Not Sure?", te: "ఖచ్చితమా, అనుమానమా?" },
  extras: [
    pick("q1", "I'll ___ come to the wedding.", "పెళ్ళికి తప్పకుండా వస్తాను.", ["definitely", "definite", "sure"], 0, {
      en: "After I'll, the word for being sure is definitely; sure does not go there.",
      te: "I'll తర్వాత ఖచ్చితం అనడానికి definitely వస్తుంది; sure అక్కడ రాదు.",
    }),
    pick("q2", "I ___ won't come on Sunday.", "ఆదివారం బహుశా రాను.", ["probably", "will probably", "maybe"], 0, {
      en: "Probably goes before won't, and won't already has will in it.",
      te: "probably, won't కి ముందు వస్తుంది; won't లోనే will ఉంది.",
    }),
    pick(
      "q3",
      "It might ___ in the evening.",
      "సాయంత్రం వర్షం పడొచ్చు.",
      ["rain", "rains", "to rain"],
      0,
      {
        en: "After might, the verb stays plain, with no s and no to.",
        te: "might తర్వాత verb అలాగే ఉంటుంది; s గానీ to గానీ రావు.",
      },
      "he-she-s",
    ),
    pick(
      "q4",
      "___ you come to the meeting tomorrow?",
      "రేపు మీటింగ్‌కి వస్తారా?",
      ["Will", "Are", "Do"],
      0,
      {
        en: "To ask about tomorrow's plan, start the question with Will before you.",
        te: "రేపటి ప్లాన్ గురించి అడగాలంటే, ప్రశ్న you కంటే ముందు Will తో మొదలవుతుంది.",
      },
      "question",
    ),
    pick(
      "q5",
      "The report may take three ___.",
      "రిపోర్ట్‌కి మూడు రోజులు పట్టొచ్చు.",
      ["days", "day", "day's"],
      0,
      {
        en: "After three, day takes s, just as Telugu says రోజులు.",
        te: "మూడు తర్వాత day కి s వస్తుంది; తెలుగులో 'రోజులు' అన్నట్టే.",
      },
      "plural",
    ),
    pick(
      "q6",
      "I'll probably reach ___ seven.",
      "బహుశా ఏడింటికల్లా చేరుకుంటాను.",
      ["by", "to", "on"],
      0,
      {
        en: "By a time means at that time or before it, like Telugu -కల్లా.",
        te: "by seven అంటే ఏడింటికల్లా: ఏడుకి గానీ అంతకంటే ముందు గానీ.",
      },
      "preposition",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "The Trip to Srisailam", te: "శ్రీశైలం ట్రిప్" },
      teller: { en: "Anitha", te: "అనిత" },
      voice: "a",
      parts: [
        {
          en: "Last October, our walking group planned a trip to Srisailam. Our leader, Srinivas, asked: Who will come? I said: I'll definitely come. I even bought a new shawl for the trip.",
          te: "పోయిన అక్టోబర్‌లో మా వాకింగ్ గ్రూప్ శ్రీశైలం ట్రిప్ ప్లాన్ చేసింది. మా లీడర్ శ్రీనివాస్ గారు 'ఎవరెవరు వస్తారు?' అని అడిగారు. 'నేను తప్పకుండా వస్తాను' అన్నాను. ట్రిప్ కోసం ఒక కొత్త శాలువా కూడా కొన్నాను.",
        },
        {
          en: "Two days before the trip, the news was bad. The forecast said a cyclone might reach the coast on Friday. Srinivas said: We might have to cancel. Let's wait and see.",
          te: "ట్రిప్‌కి రెండు రోజుల ముందు ఒక చెడ్డ వార్త. శుక్రవారం తుఫాను తీరానికి రావచ్చని forecast చెప్పింది. 'ట్రిప్ cancel చేయాల్సి రావచ్చు. చూద్దాం' అని శ్రీనివాస్ గారు అన్నారు.",
        },
        {
          en: "I was very sad. Then my friend Kamala called me. She said: Perhaps the cyclone will turn north. It probably won't come this way.",
          te: "నాకు చాలా బాధగా అనిపించింది. అప్పుడు నా స్నేహితురాలు కమల గారు ఫోన్ చేశారు. 'తుఫాను ఉత్తరం వైపు తిరుగుతుందేమో. బహుశా ఇటు రాదు' అన్నారు.",
        },
        {
          en: "On Thursday night, the news changed. The cyclone was moving north, towards Odisha. Srinivas sent a message: The trip is on! The bus will leave at six.",
          te: "గురువారం రాత్రి వార్త మారింది. తుఫాను ఉత్తరం వైపు, ఒడిశా దిక్కుగా వెళ్తోంది. 'ట్రిప్ ఉంది! బస్సు ఆరింటికి బయలుదేరుతుంది' అని శ్రీనివాస్ గారు మెసేజ్ పెట్టారు.",
        },
        {
          en: "On Saturday, the sky was clear and the air was cool. We reached Srisailam by noon. The darshan queue was long, but nobody minded.",
          te: "శనివారం ఆకాశం నిర్మలంగా ఉంది, గాలి చల్లగా ఉంది. మధ్యాహ్నానికల్లా శ్రీశైలం చేరుకున్నాం. దర్శనం క్యూ పొడుగ్గా ఉంది, కానీ ఎవరూ పట్టించుకోలేదు.",
        },
        {
          en: "Now, when someone invites me, I don't say definitely at once. I say: I'll probably come. I'll let you know. Plans can change, like the weather!",
          te: "ఇప్పుడు ఎవరైనా పిలిస్తే, వెంటనే 'తప్పకుండా' అనను. 'బహుశా వస్తాను. మీకు చెప్తాను' అంటాను. వాతావరణం లాగే, ప్లాన్లు కూడా మారొచ్చు!",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A trip that was almost cancelled", "A cyclone that hit Srisailam", "A new walking group"],
          answer: 0,
        },
        {
          prompt: { en: "Why did Srinivas say they might cancel?", te: "ట్రిప్ cancel చేయాల్సి రావచ్చని శ్రీనివాస్ గారు ఎందుకు అన్నారు?" },
          options: ["A cyclone might come", "The bus was not ready", "Kamala was not well"],
          answer: 0,
        },
        {
          prompt: { en: "What did Kamala think?", te: "కమల గారు ఏమనుకున్నారు?" },
          options: ["The cyclone probably won't come this way", "The trip will definitely be cancelled", "They should go by train"],
          answer: 0,
        },
        {
          prompt: { en: "What does Anitha say now when someone invites her?", te: "ఇప్పుడు ఎవరైనా పిలిస్తే అనిత గారు ఏమంటారు?" },
          options: ["I'll probably come. I'll let you know.", "I'll definitely come.", "I might not make it."],
          answer: 0,
        },
      ],
    },
  ],
};
