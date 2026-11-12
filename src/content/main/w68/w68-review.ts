import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 68, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick -ing or to round, and a story. */

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
  id: "w68-review",
  kind: "review",
  title: { en: "Good Habits Every Day", te: "రోజూ మంచి అలవాట్లు" },
  extras: [
    pick("q1", "Rahim gave up ___ last year.", "రహీమ్ గారు పోయిన సంవత్సరం పొగ తాగడం మానేశారు.", ["smoking", "to smoke", "smoke"], 0, {
      en: "After give up, the next verb always takes -ing.",
      te: "give up తర్వాత వచ్చే verb కి ఎప్పుడూ -ing వస్తుంది.",
    }),
    pick("q2", "I've decided ___ every morning.", "రోజూ పొద్దున నడవాలని నిర్ణయించుకున్నాను.", ["to walk", "walking", "walk"], 0, {
      en: "Decide is followed by to and the plain verb, like plan and try.",
      te: "decide తర్వాత to + verb వస్తుంది, plan, try లాగే.",
    }),
    pick(
      "q3",
      "Please don't eat too ___ sweets.",
      "స్వీట్లు మరీ ఎక్కువగా తినకండి.",
      ["many", "much", "more"],
      0,
      {
        en: "Sweets are counted, so they take many, not much.",
        te: "స్వీట్లని లెక్కపెడతాం, అందుకే many; much రాదు.",
      },
      "plural",
    ),
    pick("q4", "You ought ___ your eyes checked every year.", "ప్రతి సంవత్సరం కళ్ళు చెక్ చేయించుకోవడం మంచిది.", ["to get", "get", "getting"], 0, {
      en: "Ought always needs to and then the plain verb.",
      te: "ought తర్వాత ఎప్పుడూ to, ఆ తర్వాత verb అలాగే.",
    }),
    pick(
      "q5",
      "Didn't Rahim smoke before? ___. He smoked for twenty years.",
      "రహీమ్ గారు ఇదివరకు సిగరెట్ తాగేవారు కదా? అవును. ఇరవై ఏళ్ళు తాగారు.",
      ["Yes, he did", "No, he did", "Yes, he didn't"],
      0,
      {
        en: "He did smoke, so say yes: English answers the fact, not the not in the question.",
        te: "ఆయన తాగారు కాబట్టి Yes: ఇంగ్లీష్‌లో జవాబు నిజాన్ని బట్టి ఉంటుంది, ప్రశ్నలోని not ని బట్టి కాదు.",
      },
      "negative-answer",
    ),
    pick(
      "q6",
      "My neighbour Ayesha ___ yoga every morning.",
      "మా పక్కింటి ఆయేషా గారు రోజూ పొద్దున యోగా చేస్తారు.",
      ["does", "do", "doing"],
      0,
      {
        en: "One person with every morning takes does, with s, like she goes.",
        te: "ఒక్కరు, every morning తో: do కి బదులు does, she goes లాగా.",
      },
      "he-she-s",
    ),
    {
      id: "x-story",
      type: "story",
      title: { en: "The Morning Bell", te: "పొద్దుటి బెల్" },
      teller: { en: "Kumar", te: "కుమార్" },
      voice: "b",
      parts: [
        {
          en: "Last year, my doctor told me to walk more. So I decided to walk every morning. But it didn't happen!",
          te: "పోయిన సంవత్సరం ఇంకా ఎక్కువగా నడవమని మా డాక్టర్ చెప్పారు. అందుకే రోజూ పొద్దున నడవాలని నిర్ణయించుకున్నాను. కానీ అది జరగలేదు!",
        },
        {
          en: "Every night, I planned to get up at five. Every morning, I switched off the alarm and went back to sleep.",
          te: "ప్రతి రాత్రి ఐదింటికి లేవాలని అనుకునేవాణ్ణి. ప్రతి పొద్దున అలారం ఆపేసి మళ్ళీ పడుకునేవాణ్ణి.",
        },
        {
          en: "Then my neighbour Ayesha had an idea. She said she would ring my bell at half past five. We could walk together.",
          te: "అప్పుడు మా పక్కింటి ఆయేషా గారికి ఒక ఆలోచన వచ్చింది. ఐదున్నరకి మా బెల్ కొడతానని ఆవిడ అన్నారు. ఇద్దరం కలిసి నడవొచ్చు అన్నారు.",
        },
        {
          en: "The first week was hard. My legs hurt, and I wanted to give up. But Ayesha kept telling me not to stop.",
          te: "మొదటి వారం కష్టంగా ఉంది. కాళ్ళు నొప్పి పెట్టాయి, మానేయాలనిపించింది. కానీ ఆపొద్దని ఆయేషా గారు చెప్తూనే ఉన్నారు.",
        },
        {
          en: "Slowly, it became easy. Now I walk for forty minutes, and I sleep much better. I have also stopped drinking tea at night.",
          te: "మెల్లగా అది తేలికైపోయింది. ఇప్పుడు నలభై నిమిషాలు నడుస్తున్నాను, నిద్ర కూడా చాలా బాగా పడుతోంది. రాత్రి టీ తాగడం కూడా మానేశాను.",
        },
        {
          en: "Last month, my BP was normal for the first time in years. And now I ring Ayesha's bell when she is late!",
          te: "పోయిన నెల, ఎన్నో ఏళ్ళ తర్వాత మొదటిసారి నా BP నార్మల్‌గా వచ్చింది. ఇప్పుడు ఆయేషా గారు ఆలస్యం చేస్తే నేనే వాళ్ళ బెల్ కొడుతున్నాను!",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Starting a habit of walking", "Buying a new alarm clock", "A visit to the hospital"],
          answer: 0,
        },
        {
          prompt: { en: "What did Kumar do every morning at first?", te: "మొదట్లో కుమార్ గారు రోజూ పొద్దున ఏం చేసేవారు?" },
          options: ["He switched off the alarm and slept", "He walked for forty minutes", "He drank tea with Ayesha"],
          answer: 0,
        },
        {
          prompt: { en: "How did Ayesha help him?", te: "ఆయేషా గారు ఆయనకి ఎలా సాయం చేశారు?" },
          options: ["She rang his bell and walked with him", "She took him to the doctor", "She bought him new shoes"],
          answer: 0,
        },
        {
          prompt: { en: "What happened last month?", te: "పోయిన నెల ఏం జరిగింది?" },
          options: ["His BP was normal", "He stopped walking", "Ayesha moved to another town"],
          answer: 0,
        },
      ],
    },
  ],
};
