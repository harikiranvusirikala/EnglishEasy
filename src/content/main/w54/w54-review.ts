import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/**
 * Week 54, Day 7 (CURRICULUM §5): Checkpoint 4 (§2b) — the automatic review, with the Conversation Day's tea with an
 * old friend as the check's role play, a mixed round across Weeks 41–53, the listening task (a two-minute story heard
 * first) and the 1-minute speaking mission: a story from my childhood.
 */

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
  id: "w54-review",
  kind: "review",
  title: { en: "Checkpoint", te: "చెక్‌పాయింట్" },
  extras: [
    pick("q1", "While I ___ waiting for the bus, it started to rain.", "నేను బస్సు కోసం ఎదురుచూస్తుండగా వర్షం మొదలైంది.", ["was", "were", "am"], 0, {
      en: "With I in the past, use was; the -ing shows what was going on.",
      te: "past లో I తో was వస్తుంది; -ing అప్పుడు జరుగుతున్న పనిని చూపిస్తుంది.",
    }),
    pick(
      "q2",
      "I have lived in this colony ___ nineteen ninety-five.",
      "నేను 1995 నుంచి ఈ కాలనీలో ఉంటున్నాను.",
      ["since", "for", "from"],
      0,
      {
        en: "A starting year takes since; for goes with a length of time, like ten years.",
        te: "మొదలైన సంవత్సరం ముందు since; for అనేది పదేళ్ళు లాంటి కాల వ్యవధితో.",
      },
      "duration",
    ),
    pick("q3", "This fan is not as noisy ___ the old one.", "ఈ ఫ్యాన్ పాతదానంత శబ్దం చేయదు.", ["as", "than", "like"], 0, {
      en: "Not as needs a second as; than only follows words like noisier.",
      te: "not as తర్వాత మళ్ళీ as రావాలి; than అనేది noisier లాంటి పదాలతోనే.",
    }),
    pick("q4", "If the train ___ late, I'll call you from the station.", "రైలు ఆలస్యమైతే, స్టేషన్ నుంచి మీకు ఫోన్ చేస్తాను.", ["is", "will be", "was"], 0, {
      en: "After if, use the now form for a later plan; will goes in the other half.",
      te: "if తర్వాత, తర్వాతి ప్లాన్ అయినా present form; will రెండో భాగంలో వస్తుంది.",
    }),
    pick(
      "q5",
      "I'm afraid this kettle ___ work properly.",
      "ఈ కెటిల్ సరిగ్గా పని చేయట్లేదు అండీ.",
      ["doesn't", "don't", "not"],
      0,
      {
        en: "A kettle is one thing, like it, so use doesn't, not don't.",
        te: "kettle ఒక్క వస్తువు, it లాగా; అందుకే don't కాదు, doesn't.",
      },
      "he-she-s",
    ),
    pick(
      "q6",
      "You have to come at seven, ___ breakfast.",
      "మీరు ఏడింటికి, టిఫిన్ తినక ముందే రావాలి.",
      ["before", "until", "since"],
      0,
      {
        en: "Before means earlier than a time; until means up to it.",
        te: "before అంటే ఆ సమయం కంటే ముందు; until అంటే ఆ సమయం దాకా.",
      },
      "preposition",
    ),
    pick("q7", "How long have you been ___ in this queue?", "ఈ క్యూలో ఎంతసేపట్నుంచి నిలబడి ఉన్నారు?", ["standing", "stand", "stood"], 0, {
      en: "After have been, the verb takes -ing for something still going on.",
      te: "have been తర్వాత, ఇంకా జరుగుతున్న పనికి verb కి -ing వస్తుంది.",
    }),
    pick(
      "q8",
      "You didn't get your refund? ___, I didn't. Not yet.",
      "మీ రీఫండ్ రాలేదా? లేదు, రాలేదు. ఇంకా రాలేదు.",
      ["No", "Yes", "Not"],
      0,
      {
        en: "When the answer has didn't, English starts with No, even if Telugu says అవును.",
        te: "జవాబులో didn't ఉంటే ఇంగ్లీష్‌లో No తో మొదలవుతుంది; తెలుగులో 'అవును' అన్నా సరే.",
      },
      "negative-answer",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "My First Bicycle", te: "నా మొదటి సైకిల్" },
      teller: { en: "Radha", te: "రాధ" },
      voice: "a",
      parts: [
        {
          en: "When I was twelve, we used to live in a small town near Rajahmundry. My school was three kilometres away. Every day I used to walk there with my friend Mary.",
          te: "నాకు పన్నెండేళ్ళప్పుడు మేము రాజమండ్రి దగ్గర ఒక చిన్న ఊర్లో ఉండేవాళ్ళం. మా స్కూల్ మూడు కిలోమీటర్ల దూరంలో ఉండేది. రోజూ నా స్నేహితురాలు మేరీతో కలిసి నడిచి వెళ్ళేదాన్ని.",
        },
        {
          en: "I always wanted a bicycle, but bicycles were expensive in those days. My father was a tailor, and he didn't earn much.",
          te: "నాకు ఎప్పుడూ ఒక సైకిల్ కావాలని ఉండేది, కానీ ఆ రోజుల్లో సైకిళ్ళు చాలా ఖరీదు. మా నాన్నగారు టైలర్, ఆయనకి సంపాదన ఎక్కువ ఉండేది కాదు.",
        },
        {
          en: "One evening, while I was doing my homework, I heard a bell outside. My father was standing at the gate with a red bicycle!",
          te: "ఒక సాయంత్రం నేను హోంవర్క్ చేసుకుంటుండగా, బయట ఒక గంట శబ్దం వినిపించింది. మా నాన్నగారు ఒక ఎర్ర సైకిల్‌తో గేటు దగ్గర నిలబడి ఉన్నారు!",
        },
        {
          en: "I couldn't ride it at first. Every evening, Mary held the seat while I practiced on our street. After two weeks, I finally learned.",
          te: "మొదట్లో నాకు తొక్కడం రాలేదు. రోజూ సాయంత్రం మేరీ సీటు పట్టుకుంటే, నేను మా వీధిలో ప్రాక్టీస్ చేసేదాన్ని. రెండు వారాల తర్వాత చివరికి నేర్చుకున్నాను.",
        },
        {
          en: "Then one Sunday, I rode it to the market alone. Suddenly a goat ran in front of me, and I fell off!",
          te: "తర్వాత ఒక ఆదివారం ఒంటరిగా సైకిల్ మీద మార్కెట్‌కి వెళ్ళాను. ఉన్నట్టుండి ఒక మేక నా ముందుకు పరిగెత్తింది, నేను కింద పడిపోయాను!",
        },
        {
          en: "I hurt my knee, but I laughed all the way home. I have ridden many bicycles since then, but I still remember that red one.",
          te: "మోకాలికి దెబ్బ తగిలింది, కానీ ఇంటి దాకా నవ్వుతూనే వెళ్ళాను. అప్పటి నుంచి ఎన్నో సైకిళ్ళు తొక్కాను, కానీ ఆ ఎర్ర సైకిల్ ఇప్పటికీ గుర్తుంది.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Radha's first bicycle", "A trip to Rajahmundry", "Her first day at school"],
          answer: 0,
        },
        {
          prompt: { en: "How did Radha go to school every day?", te: "రాధ గారు రోజూ స్కూల్‌కి ఎలా వెళ్ళేవారు?" },
          options: ["She walked with her friend.", "She went by bus.", "Her father took her."],
          answer: 0,
        },
        {
          prompt: { en: "Who helped her learn to ride?", te: "సైకిల్ తొక్కడం నేర్చుకోవడానికి ఆవిడకి ఎవరు సాయం చేశారు?" },
          options: ["Her friend Mary", "Her father", "Her teacher"],
          answer: 0,
        },
        {
          prompt: { en: "What happened on the way to the market?", te: "మార్కెట్‌కి వెళ్ళే దారిలో ఏమైంది?" },
          options: ["A goat ran in front of her, and she fell.", "Someone stole her bicycle.", "It started to rain."],
          answer: 0,
        },
      ],
    },
    {
      id: "m1",
      type: "mission",
      title: { en: "A story from my childhood", te: "నా చిన్నప్పటి కథ" },
      prompts: ["When I was …, we used to live in …", "Every day I used to …", "One day, while I was …,", "First …, then …", "In the end, …", "I still remember …"],
      seconds: 60,
    },
  ],
};
