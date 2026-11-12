import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 76, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick tags and So do I round, and a story. */

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
  id: "w76-review",
  kind: "review",
  title: { en: "Isn't It? So Do I!", te: "కదా? నేను కూడా!" },
  extras: [
    pick(
      "q1",
      "You're new here, ___ you?",
      "మీరు ఇక్కడికి కొత్త కదా?",
      ["aren't", "isn't", "don't"],
      0,
      {
        en: "You are takes aren't in the tag; isn't is only for it, he or she.",
        te: "you are కి tag లో aren't; isn't అనేది it, he, she కి మాత్రమే.",
      },
      "indian-english",
    ),
    pick(
      "q2",
      "Ramana lives near the temple, ___ he?",
      "రమణ గారు గుడి దగ్గర ఉంటారు కదా?",
      ["doesn't", "isn't", "don't"],
      0,
      {
        en: "Lives has s and no is, so the tag for one person uses doesn't.",
        te: "lives కి s ఉంది, is లేదు; ఒక్కరి గురించి కాబట్టి tag లో doesn't.",
      },
      "he-she-s",
    ),
    pick("q3", "It was very hot yesterday, ___ it?", "నిన్న చాలా ఎండగా ఉంది కదా?", ["wasn't", "isn't", "didn't"], 0, {
      en: "The tag keeps the time of the sentence, so was takes wasn't.",
      te: "tag వాక్యం కాలాన్నే పాటిస్తుంది, అందుకే was కి wasn't.",
    }),
    pick("q4", "I can't walk fast anymore. ___ can I.", "నేను ఇప్పుడు వేగంగా నడవలేను. నేను కూడా.", ["Neither", "So", "Also"], 0, {
      en: "After a sentence with not, agree with Neither; So is for sentences without not.",
      te: "not ఉన్న వాక్యానికి ఒప్పుకోవాలంటే Neither; So, not లేని వాక్యాలకి.",
    }),
    pick(
      "q5",
      "You didn't come yesterday, did you? ___, I had a fever.",
      "నిన్న మీరు రాలేదు కదా? లేదు, నాకు జ్వరం వచ్చింది.",
      ["No", "Yes", "Not"],
      0,
      {
        en: "You did not come, so start with No; Telugu అవును makes people say Yes.",
        te: "మీరు రాలేదు, అందుకే No తో మొదలుపెట్టాలి; తెలుగు 'అవును' వల్ల Yes అనేస్తాం.",
      },
      "negative-answer",
    ),
    pick(
      "q6",
      "We sat ___ the new bench near the gate.",
      "గేట్ దగ్గర కొత్త బెంచ్ మీద కూర్చున్నాం.",
      ["on", "in", "at"],
      0,
      {
        en: "You sit on top of a bench, so English uses on, like Telugu మీద.",
        te: "బెంచ్ పైన కూర్చుంటాం, అందుకే on; తెలుగులో 'మీద' లాగా.",
      },
      "preposition",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "A New Friend at the Park", te: "పార్క్‌లో కొత్త స్నేహం" },
      teller: { en: "Radha", te: "రాధ" },
      voice: "a",
      parts: [
        {
          en: "Every morning, I walk in Gandhi Park near my house. I do five laps, and then I sit on my favourite bench. Last month, I saw a new face there.",
          te: "ప్రతి రోజు పొద్దున మా ఇంటి దగ్గర గాంధీ పార్క్‌లో నడుస్తాను. ఐదు రౌండ్లు నడిచి, నాకు ఇష్టమైన బెంచ్ మీద కూర్చుంటాను. పోయిన నెల అక్కడ ఒక కొత్త ముఖం కనిపించింది.",
        },
        {
          en: "She was walking very slowly with a stick. I smiled and said, You're new here, aren't you? She said, Yes, I moved here from Khammam last week.",
          te: "ఆవిడ కర్ర పట్టుకుని చాలా మెల్లగా నడుస్తున్నారు. నేను నవ్వి, 'మీరు ఇక్కడికి కొత్త కదా?' అన్నాను. 'అవునండి, పోయిన వారమే ఖమ్మం నుంచి వచ్చాను' అన్నారు.",
        },
        {
          en: "Her name was Kamala. I said, Khammam is very hot in summer, isn't it? She laughed and said, Very hot! That's why I walk early.",
          te: "ఆవిడ పేరు కమల. 'ఖమ్మంలో ఎండాకాలం చాలా వేడిగా ఉంటుంది కదా?' అన్నాను. ఆవిడ నవ్వి, 'చాలా ఎండ! అందుకే పొద్దున్నే నడుస్తాను' అన్నారు.",
        },
        {
          en: "Then she said, I can't walk fast anymore. Neither can I, I said. My knees are old too! We both laughed.",
          te: "తర్వాత ఆవిడ, 'ఇక నేను వేగంగా నడవలేను' అన్నారు. 'నేను కూడా నడవలేను, నా మోకాళ్ళు కూడా ముసలివే!' అన్నాను. ఇద్దరం నవ్వుకున్నాం.",
        },
        {
          en: "Then for two days, Kamala didn't come. I was worried. So I asked the watchman, Kamala hasn't come, has she? He said, No, she has a cold.",
          te: "తర్వాత రెండు రోజులు కమల గారు రాలేదు. నాకు కంగారుగా ఉంది. అందుకే వాచ్‌మన్‌ని, 'కమల గారు రాలేదు కదా?' అని అడిగాను. 'లేదండీ, ఆవిడకి జలుబు చేసింది' అన్నారు.",
        },
        {
          en: "On Sunday, she was back on the bench, with a big smile. Now we walk together every morning. A new friend at our age is a real gift, isn't it?",
          te: "ఆదివారం ఆవిడ పెద్ద నవ్వుతో మళ్ళీ బెంచ్ మీద కనిపించారు. ఇప్పుడు రోజూ పొద్దున ఇద్దరం కలిసి నడుస్తాం. ఈ వయసులో కొత్త స్నేహం నిజంగా ఒక వరం కదా?",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Making a new friend at the park", "Buying a walking stick", "A trip to Khammam"],
          answer: 0,
        },
        {
          prompt: { en: "Where did Kamala move from?", te: "కమల గారు ఎక్కడి నుంచి వచ్చారు?" },
          options: ["Khammam", "Guntur", "Nellore"],
          answer: 0,
        },
        {
          prompt: { en: "Why didn't Kamala come for two days?", te: "కమల గారు రెండు రోజులు ఎందుకు రాలేదు?" },
          options: ["She had a cold.", "She went back to Khammam.", "The park was closed."],
          answer: 0,
        },
        {
          prompt: { en: "Who did Radha ask about Kamala?", te: "కమల గారి గురించి రాధ గారు ఎవరిని అడిగారు?" },
          options: ["The watchman", "A doctor", "Kamala's neighbour"],
          answer: 0,
        },
      ],
    },
  ],
};
