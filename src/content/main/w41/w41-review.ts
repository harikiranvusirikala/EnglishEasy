import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 41, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick story-telling round, and a story to listen to. */

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
  id: "w41-review",
  kind: "review",
  title: { en: "Story Time", te: "కథల సమయం" },
  extras: [
    pick("q1", "I had breakfast. ___ that, I went to the bank.", "టిఫిన్ చేశాను. ఆ తర్వాత బ్యాంక్‌కి వెళ్ళాను.", ["After", "Then", "Finally"], 0, {
      en: "After that means next; then and finally never take that after them.",
      te: "After that అంటే ఆ తర్వాత; then, finally తర్వాత that రాదు.",
    }),
    pick("q2", "I ___ cooking when the power went off.", "నేను వంట చేస్తుండగా కరెంట్ పోయింది.", ["was", "am", "were"], 0, {
      en: "The background of a past story takes was or were, and I takes was.",
      te: "గతంలోని కథ నేపథ్యానికి was / were; I తో was.",
    }),
    pick(
      "q3",
      "Where ___ you going when it happened?",
      "అది జరిగినప్పుడు మీరు ఎక్కడికి వెళ్తున్నారు?",
      ["were", "was", "did"],
      0,
      {
        en: "You always takes were, and a question puts it before you.",
        te: "you తో ఎప్పుడూ were; ప్రశ్నలో అది you కంటే ముందు వస్తుంది.",
      },
      "question",
    ),
    pick("q4", "It was pouring. ___, my phone was safe in my bag.", "కుండపోత వర్షం. అదృష్టం కొద్దీ నా ఫోన్ బ్యాగ్‌లో భద్రంగా ఉంది.", ["Luckily", "Unfortunately", "Suddenly"], 0, {
      en: "Good news after a problem starts with Luckily, not with a word for bad news or surprise.",
      te: "సమస్య తర్వాత మంచి వార్త Luckily తో మొదలవుతుంది; చెడు వార్తకో, అనుకోనిదానికో వాడే పదాలు కాదు.",
    }),
    pick(
      "q5",
      "She ___ the conductor for twenty years.",
      "ఆ కండక్టర్ గారు ఆవిడకి ఇరవై ఏళ్ళుగా తెలుసు.",
      ["has known", "knows", "is knowing"],
      0,
      {
        en: "From twenty years ago until now needs has known; know never takes -ing.",
        te: "ఇరవై ఏళ్ళ క్రితం నుంచి ఇప్పటిదాకా అంటే has known; know కి -ing రాదు.",
      },
      "duration",
    ),
    pick(
      "q6",
      "In the ___, we all laughed about it.",
      "చివరికి మేమంతా దాని గురించి నవ్వుకున్నాం.",
      ["end", "last", "finish"],
      0,
      {
        en: "To say how a story finished, English uses in the end; Telugu చివరికి is not in the last.",
        te: "కథ ఎలా ముగిసిందో చెప్పడానికి in the end; 'చివరికి' ని in the last అనకూడదు.",
      },
      "indian-english",
    ),
    {
      id: "st1",
      type: "story",
      title: { en: "The Old Man at the Bus Stand", te: "బస్ స్టాండ్‌లో పెద్దాయన" },
      teller: { en: "Kamala", te: "కమల" },
      voice: "a",
      parts: [
        {
          en: "Last Saturday, I went to Warangal to see my cousin. In the evening, I was waiting at the bus stand for the bus home. It was very hot, and the bus was late.",
          te: "పోయిన శనివారం మా కజిన్‌ని చూడటానికి వరంగల్ వెళ్ళాను. సాయంత్రం ఇంటికి వెళ్ళే బస్సు కోసం బస్ స్టాండ్‌లో ఎదురుచూస్తున్నాను. చాలా ఎండగా ఉంది, బస్సు ఆలస్యం అయింది.",
        },
        {
          en: "While I was waiting, I noticed an old man near the gate. He was holding a small cloth bag and looking around. He looked lost and very worried.",
          te: "నేను ఎదురుచూస్తుండగా గేటు దగ్గర ఒక పెద్దాయనని గమనించాను. ఆయన ఒక చిన్న గుడ్డ సంచి పట్టుకుని చుట్టూ చూస్తున్నారు. దారి తప్పినట్టు, చాలా కంగారుగా కనిపించారు.",
        },
        {
          en: "First I gave him some water and a place to sit. Then I asked him, “Sir, where are you going?”",
          te: "ముందు ఆయనకి కొన్ని నీళ్ళు ఇచ్చి, కూర్చోడానికి చోటు చూపించాను. తర్వాత 'ఎక్కడికి వెళ్తున్నారండీ?' అని అడిగాను.",
        },
        {
          en: "He was going to his nephew's house, near the Thousand Pillar Temple. Unfortunately, he didn't remember the address. Luckily, he had a paper in his pocket with a phone number.",
          te: "ఆయన వేయి స్తంభాల గుడి దగ్గర ఉండే వాళ్ళ మేనల్లుడి ఇంటికి వెళ్తున్నారు. దురదృష్టం కొద్దీ ఆయనకి అడ్రస్ గుర్తు లేదు. అదృష్టం కొద్దీ ఆయన జేబులో ఫోన్ నంబర్ రాసిన ఒక కాగితం ఉంది.",
        },
        {
          en: "I called the number at once, and a young man answered. It was the nephew, and he was searching everywhere for his uncle! I told him, “Your uncle is safe with me. Please don't worry.”",
          te: "నేను వెంటనే ఆ నంబర్‌కి ఫోన్ చేశాను, ఒక యువకుడు ఫోన్ ఎత్తారు. ఆయనే ఆ మేనల్లుడు, మామయ్య కోసం అంతటా వెతుకుతున్నారు! 'మీ మామయ్య నా దగ్గర క్షేమంగా ఉన్నారు. కంగారు పడకండి' అని చెప్పాను.",
        },
        {
          en: "Twenty minutes later, the nephew came in an auto. When the old man saw him, he smiled at last. They both thanked me many times. In the end, I missed my bus, but I went home very happy.",
          te: "ఇరవై నిమిషాల తర్వాత మేనల్లుడు ఆటోలో వచ్చారు. ఆయన్ని చూడగానే పెద్దాయన మొహంలో ఎట్టకేలకు నవ్వు వచ్చింది. ఇద్దరూ నాకు ఎన్నోసార్లు థాంక్స్ చెప్పారు. చివరికి నా బస్సు మిస్ అయింది, కానీ చాలా సంతోషంగా ఇంటికి వెళ్ళాను.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Helping a lost old man", "A bus accident in Warangal", "A visit to a famous temple"],
          answer: 0,
        },
        {
          prompt: { en: "Why was Kamala at the bus stand?", te: "కమల గారు బస్ స్టాండ్‌లో ఎందుకు ఉన్నారు?" },
          options: ["She was waiting for her bus home.", "She was waiting for her cousin.", "She was meeting the old man."],
          answer: 0,
        },
        {
          prompt: { en: "How did Kamala find the nephew?", te: "కమల గారు మేనల్లుడిని ఎలా కనుక్కున్నారు?" },
          options: ["She called the number on a paper.", "She asked the bus conductor.", "She went to the temple."],
          answer: 0,
        },
        {
          prompt: { en: "What happened to Kamala's bus?", te: "కమల గారి బస్సు ఏమైంది?" },
          options: ["She missed it.", "It broke down.", "It came early."],
          answer: 0,
        },
      ],
    },
  ],
};
