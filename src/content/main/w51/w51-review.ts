import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 51, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a checking round, and a story. */

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
  id: "w51-review",
  kind: "review",
  title: { en: "Checking With the Doctor", te: "డాక్టర్‌తో సరిచూసుకోవడం" },
  extras: [
    pick("q1", "___ you mean I should stop sugar completely?", "అంటే నేను షుగర్ పూర్తిగా మానేయాలనా?", ["Do", "Are", "Is"], 0, {
      en: "Mean is an action word, so the question starts with Do, not Are.",
      te: "mean ఒక action కాబట్టి ప్రశ్న Do తో మొదలవుతుంది; Are రాదు.",
    }),
    pick(
      "q2",
      "I've had asthma ___ twenty years.",
      "ఇరవై ఏళ్ళ నుంచి నాకు ఆస్తమా ఉంది.",
      ["for", "since", "from"],
      0,
      {
        en: "A length of time, like twenty years, takes for; a starting point takes since.",
        te: "ఇరవై ఏళ్ళు లాంటి కాలానికి for; మొదలైన సమయానికి since.",
      },
      "duration",
    ),
    pick(
      "q3",
      "My cholesterol ___ slightly high.",
      "నా కొలెస్ట్రాల్ కొంచెం ఎక్కువగా ఉంది.",
      ["is", "has", "are"],
      0,
      {
        en: "Telugu can drop the verb here, but English needs is for one thing.",
        te: "తెలుగులో ఇక్కడ verb లేకుండా అనొచ్చు; ఇంగ్లీష్‌లో ఒక్క దానికి is కావాలి.",
      },
      "be",
    ),
    pick(
      "q4",
      "The doctor ___ I should walk every day.",
      "నేను రోజూ నడవాలని డాక్టర్ చెప్తున్నారు.",
      ["says", "say", "saying"],
      0,
      {
        en: "One person, like he, she or the doctor, takes s on the verb.",
        te: "ఒక్కరి గురించి (he, she, the doctor) చెప్పేటప్పుడు verb కి s వస్తుంది.",
      },
      "he-she-s",
    ),
    pick(
      "q5",
      "So I should ___ for two days?",
      "అంటే రెండు రోజులు విశ్రాంతి తీసుకోవాలా?",
      ["rest", "take rest", "resting"],
      0,
      {
        en: "English says rest or get some rest; take rest is only Indian English.",
        te: "ఇంగ్లీష్‌లో rest లేదా get some rest అంటారు; take rest మన దగ్గరే అంటారు.",
      },
      "indian-english",
    ),
    pick(
      "q6",
      "Do I need ___ test after three months?",
      "మూడు నెలల తర్వాత నాకు ఇంకో టెస్ట్ అవసరమా?",
      ["another", "other", "the another"],
      0,
      {
        en: "For one more, use another; other alone needs a plural or the.",
        te: "ఇంకొకటి అంటే another; other ఒక్కటే వాడకూడదు.",
      },
      "article",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "The Word I Didn't Understand", te: "అర్థం కాని పదం" },
      teller: { en: "Gopal", te: "గోపాల్" },
      voice: "b",
      parts: [
        {
          en: "Last month, I went for a full check-up at a hospital in Guntur. I'm sixty-five, and I had no health problems. But my friend Ramana goes every year, so I went too.",
          te: "పోయిన నెల గుంటూరులో ఒక ఆసుపత్రికి ఫుల్ చెకప్‌కి వెళ్ళాను. నాకు అరవై ఐదేళ్ళు, నాకు ఏ ఆరోగ్య సమస్యలూ లేవు. కానీ మా స్నేహితుడు రమణ గారు ప్రతి సంవత్సరం వెళ్తారు, అందుకే నేనూ వెళ్ళాను.",
        },
        {
          en: "A week later, I went back for the reports. A young doctor, Dr Ayesha, looked at them carefully. My sugar was in the prediabetes range. I didn't understand that word at all.",
          te: "వారం తర్వాత రిపోర్టుల కోసం మళ్ళీ వెళ్ళాను. డాక్టర్ ఆయేషా అనే ఒక యువ డాక్టర్ వాటిని జాగ్రత్తగా చూశారు. నా షుగర్ prediabetes range లో ఉంది. ఆ పదం నాకు అస్సలు అర్థం కాలేదు.",
        },
        {
          en: "Before, I always just nodded and said okay. This time, I asked, “Sorry, what does prediabetes mean?” She smiled and explained it in simple words.",
          te: "ఇంతకు ముందు నేను ఎప్పుడూ తల ఊపి సరే అనేవాడిని. ఈసారి, “సారీ, prediabetes అంటే ఏంటి?” అని అడిగాను. ఆవిడ నవ్వి, సులభమైన మాటల్లో వివరించారు.",
        },
        {
          en: "It means the sugar is a little high, but it is not diabetes yet. “Do you mean I can still stop it?” I asked. “Yes,” she said, “with food and walking.”",
          te: "అంటే షుగర్ కొంచెం ఎక్కువగా ఉంది, కానీ ఇంకా డయాబెటిస్ కాదు. “అంటే నేను దీన్ని ఇంకా ఆపొచ్చనా?” అని అడిగాను. “అవును,” అన్నారు ఆవిడ, “తిండి, నడకతో.”",
        },
        {
          en: "So I repeated her advice to check it. Less rice, no sweets, and a brisk walk every morning. She also wanted another test after three months.",
          te: "అందుకే సరిచూసుకోవడానికి ఆవిడ సలహాని మళ్ళీ చెప్పాను. అన్నం తక్కువ, స్వీట్లు వద్దు, రోజూ పొద్దున వేగంగా నడక. మూడు నెలల తర్వాత ఇంకో టెస్ట్ కూడా చేయించుకోమన్నారు.",
        },
        {
          en: "That was three months ago. Now I walk every morning with my neighbour Krishna. Last week, I got my new report. My sugar is normal now, and I'm very happy.",
          te: "అది మూడు నెలల క్రితం. ఇప్పుడు రోజూ పొద్దున మా పక్కింటి కృష్ణ గారితో కలిసి నడుస్తున్నాను. పోయిన వారం కొత్త రిపోర్ట్ వచ్చింది. ఇప్పుడు నా షుగర్ నార్మల్‌గా ఉంది, నాకు చాలా సంతోషంగా ఉంది.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Asking a doctor to explain a report", "A knee operation", "Buying medicines online"],
          answer: 0,
        },
        {
          prompt: { en: "Why did Gopal go for a check-up?", te: "గోపాల్ గారు చెకప్‌కి ఎందుకు వెళ్ళారు?" },
          options: ["His friend Ramana goes every year.", "He was very sick.", "His BP was very high."],
          answer: 0,
        },
        {
          prompt: { en: "What did Dr Ayesha tell him to do?", te: "డాక్టర్ ఆయేషా ఆయనకి ఏం చేయమని చెప్పారు?" },
          options: ["Eat less rice and walk every morning", "Take two tablets every day", "Stop eating at night"],
          answer: 0,
        },
        {
          prompt: { en: "What does his new report say?", te: "ఆయన కొత్త రిపోర్ట్‌లో ఏముంది?" },
          options: ["His sugar is normal now.", "His sugar is very high.", "He needs an operation."],
          answer: 0,
        },
      ],
    },
  ],
};
