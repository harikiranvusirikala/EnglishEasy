import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 79, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick persuading round, and a story. */

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
  id: "w79-review",
  kind: "review",
  title: { en: "Kind Words That Persuade", te: "ఒప్పించే మంచి మాటలు" },
  extras: [
    pick("q1", "You should really ___ to the health camp.", "మీరు తప్పకుండా హెల్త్ క్యాంప్‌కి వెళ్ళాలి.", ["go", "going", "to go"], 0, {
      en: "After should, use the plain verb, without to and without -ing.",
      te: "should తర్వాత verb అలాగే వస్తుంది; to గానీ -ing గానీ రావు.",
    }),
    pick("q2", "It might be better ___ the train tonight.", "ఈ రాత్రి రైల్లో వెళ్తే మంచిదేమో.", ["to take", "take", "taking"], 0, {
      en: "It might be better is followed by to and the plain verb.",
      te: "It might be better తర్వాత to, ఆ తర్వాత verb అలాగే వస్తుంది.",
    }),
    pick("q3", "Have you thought about ___ the walking group?", "వాకింగ్ గ్రూప్‌లో చేరడం గురించి ఆలోచించారా?", ["joining", "join", "to join"], 0, {
      en: "About is followed by the -ing form of a verb, never the plain verb.",
      te: "about తర్వాత verb కి -ing వస్తుంది; verb అలాగే రాదు.",
    }),
    pick(
      "q4",
      "Why ___ you come with us on Sunday?",
      "ఆదివారం మాతో రావొచ్చు కదా?",
      ["don't", "doesn't", "aren't"],
      0,
      {
        en: "With you and a plain verb like come, the question uses don't, placed before you.",
        te: "you, come లాంటి verb ఉంటే ప్రశ్నలో don't వస్తుంది; అది you కంటే ముందు ఉంటుంది.",
      },
      "question",
    ),
    pick("q5", "If we all ___ a little, we can fix the gate.", "అందరం తలా కొంచెం ఇస్తే, గేట్ బాగు చేయించొచ్చు.", ["give", "will give", "gives"], 0, {
      en: "In the if part of a real plan, use the present; we takes no s.",
      te: "నిజమైన ప్లాన్‌లో if భాగంలో present వాడాలి; we తో verb కి s రాదు.",
    }),
    pick(
      "q6",
      "I ___ UPI for two years now.",
      "రెండేళ్ళుగా నేను UPI వాడుతున్నాను.",
      ["have been using", "am using", "use"],
      0,
      {
        en: "From the past up to now takes have been + -ing; Telugu వాడుతున్నాను tempts am using.",
        te: "గతం నుంచి ఇప్పటిదాకా అంటే have been + -ing; తెలుగు 'వాడుతున్నాను' వల్ల am using అనేస్తాం.",
      },
      "duration",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "A Push From a Friend", te: "స్నేహితుడి పట్టుదల" },
      teller: { en: "Ramana", te: "రమణ" },
      voice: "b",
      parts: [
        {
          en: "My friend Satish is seventy, and he loves his armchair. For years, he sat at home and watched TV all day. I knew it wasn't good for him.",
          te: "నా స్నేహితుడు సతీష్ గారికి డెబ్భై ఏళ్ళు, ఆయనకి తన కుర్చీ అంటే చాలా ఇష్టం. ఏళ్ళ తరబడి ఇంట్లో కూర్చుని రోజంతా TV చూసేవారు. అది ఆయనకి మంచిది కాదని నాకు తెలుసు.",
        },
        {
          en: "One day, I saw a notice about a free health camp. I said, Satish, you should really come with me. He laughed and said, I'm fine. Why should I go?",
          te: "ఒక రోజు ఉచిత హెల్త్ క్యాంప్ గురించి ఒక నోటీసు చూశాను. 'సతీష్ గారూ, మీరు తప్పకుండా నాతో రావాలి' అన్నాను. ఆయన నవ్వి, 'నేను బాగానే ఉన్నాను. నేనెందుకు రావాలి?' అన్నారు.",
        },
        {
          en: "I said, I understand, but the good thing is, it's free. Not only that, it's just five minutes from your house. He still said no.",
          te: "'అర్థమైంది, కానీ ఇందులో మంచి ఏంటంటే, ఇది ఉచితం. అంతే కాదు, మీ ఇంటి నుంచి ఐదు నిమిషాలే' అన్నాను. అయినా ఆయన రానన్నారు.",
        },
        {
          en: "So I tried once more. What if I pick you up at eight? We can have filter coffee afterwards. Finally, he smiled and said, All right, I'll give it a try.",
          te: "అందుకే ఇంకోసారి ప్రయత్నించాను. 'ఎనిమిదింటికి నేను మిమ్మల్ని పికప్ చేసుకుంటే? తర్వాత ఫిల్టర్ కాఫీ తాగుదాం.' చివరికి ఆయన నవ్వి, 'సరే, ఒకసారి try చేస్తాను' అన్నారు.",
        },
        {
          en: "At the camp, the doctor checked his BP. It was a little high. The doctor told him to walk every day and eat less salt.",
          te: "క్యాంప్‌లో డాక్టర్ ఆయన BP చూశారు. కొంచెం ఎక్కువగా ఉంది. రోజూ నడవమని, ఉప్పు తక్కువ తినమని డాక్టర్ ఆయనకి చెప్పారు.",
        },
        {
          en: "Now Satish walks with me every morning. Last week, he said, Thank you for not giving up on me. I was very happy.",
          te: "ఇప్పుడు సతీష్ గారు రోజూ పొద్దున నాతో నడుస్తారు. పోయిన వారం, 'నన్ను వదిలేయకుండా పట్టుబట్టినందుకు థాంక్స్' అన్నారు. నాకు చాలా సంతోషం వేసింది.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Persuading a friend to go to a health camp", "Buying a new armchair", "A trip to the hospital by bus"],
          answer: 0,
        },
        {
          prompt: { en: "Why did Satish say no at first?", te: "మొదట సతీష్ గారు ఎందుకు రానన్నారు?" },
          options: ["He said he was fine.", "He had no money.", "He was out of town."],
          answer: 0,
        },
        {
          prompt: { en: "What did Ramana offer to do?", te: "రమణ గారు ఏం చేస్తానన్నారు?" },
          options: ["Pick him up at eight", "Pay for the tests", "Bring the doctor home"],
          answer: 0,
        },
        {
          prompt: { en: "What does Satish do now?", te: "ఇప్పుడు సతీష్ గారు ఏం చేస్తున్నారు?" },
          options: ["He walks every morning.", "He works at the camp.", "He watches more TV."],
          answer: 0,
        },
      ],
    },
  ],
};
