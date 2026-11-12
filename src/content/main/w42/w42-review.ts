import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 42, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick used to round, and a story. */

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
  id: "w42-review",
  kind: "review",
  title: { en: "Those Were the Days", te: "ఆ రోజులే వేరు" },
  extras: [
    pick("q1", "We ___ to live near a big temple.", "మేము ఒకప్పుడు ఒక పెద్ద గుడి దగ్గర ఉండేవాళ్ళం.", ["used", "use", "were"], 0, {
      en: "In a plain sentence about long ago, write used to; Telugu ఉండేవాళ్ళం means the same.",
      te: "ఒకప్పటి సంగతి చెప్పే మామూలు వాక్యంలో used to; 'ఉండేవాళ్ళం' కి అదే అర్థం.",
    }),
    pick("q2", "Did you ___ to go to the village fair?", "మీరు ఊరి జాతరకి వెళ్ళేవారా?", ["use", "used", "using"], 0, {
      en: "After did, the verb stays plain, so use has no d in a question.",
      te: "did తర్వాత verb మారదు, అందుకే ప్రశ్నలో use కి d రాదు.",
    }),
    pick("q3", "One day, our teacher ___ a cake to class.", "ఒక రోజు మా టీచర్ గారు క్లాస్‌కి కేక్ తెచ్చారు.", ["brought", "used to bring", "brings"], 0, {
      en: "One day is only one time, so the past form is right, not used to.",
      te: "One day అంటే ఒక్కసారే, అందుకే used to కాదు, past form సరైనది.",
    }),
    pick("q4", "We used to ___ hide and seek after school.", "స్కూల్ అయ్యాక దాగుడుమూతలు ఆడేవాళ్ళం.", ["play", "playing", "played"], 0, {
      en: "After used to, the verb always stays plain, with no -ing and no -ed.",
      te: "used to తర్వాత verb ఎప్పుడూ మారదు; -ing గానీ -ed గానీ రావు.",
    }),
    pick("q5", "We don't fly kites on the terrace ___.", "ఇప్పుడు ఇంక మేము డాబా మీద గాలిపటాలు ఎగరేయడం లేదు.", ["anymore", "now also", "still"], 0, {
      en: "Anymore ends a not sentence about something that has stopped.",
      te: "ఆగిపోయిన పని గురించి not ఉన్న వాక్యం చివర anymore వస్తుంది.",
    }),
    pick(
      "q6",
      "You didn't have a radio? ___, we didn't.",
      "మీకు రేడియో లేదా? లేదు, మాకు లేదు.",
      ["No", "Yes", "Not"],
      0,
      {
        en: "With didn't in the answer, English starts with No, unlike Telugu అవును.",
        te: "జవాబులో didn't ఉంటే ఇంగ్లీష్‌లో No తో మొదలవుతుంది; తెలుగులో లాగా 'అవును' అనకూడదు.",
      },
      "negative-answer",
    ),
    pick(
      "q7",
      "We used to sit outside ___ the evening.",
      "సాయంత్రం మేము బయట కూర్చునేవాళ్ళం.",
      ["in", "at", "on"],
      0,
      {
        en: "Parts of the day take in, like in the morning; at is for clock times.",
        te: "రోజులోని భాగాలకి in వస్తుంది, in the morning లాగా; at గడియారం టైమ్‌కి.",
      },
      "preposition",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "The Mango Tree", te: "మామిడి చెట్టు" },
      teller: { en: "Venkat", te: "వెంకట్" },
      voice: "b",
      parts: [
        {
          en: "When I was young, we used to live in a village near Khammam. There used to be a big mango tree behind our house.",
          te: "నేను చిన్నప్పుడు మేము ఖమ్మం దగ్గర ఒక ఊర్లో ఉండేవాళ్ళం. మా ఇంటి వెనక ఒక పెద్ద మామిడి చెట్టు ఉండేది.",
        },
        {
          en: "Every summer, my friends and I used to climb it after school. We would sit on the branches and eat green mangoes with salt.",
          te: "ప్రతి ఎండాకాలం స్కూల్ అయ్యాక నేను, నా స్నేహితులు ఆ చెట్టు ఎక్కేవాళ్ళం. కొమ్మల మీద కూర్చుని ఉప్పు అద్దుకుని పచ్చి మామిడికాయలు తినేవాళ్ళం.",
        },
        {
          en: "One day, I climbed too high, and a branch broke. I fell down and hurt my arm.",
          te: "ఒక రోజు నేను చాలా పైకి ఎక్కాను, ఒక కొమ్మ విరిగిపోయింది. నేను కింద పడ్డాను, చేతికి దెబ్బ తగిలింది.",
        },
        {
          en: "Our neighbour Geetha ran to help me. She took me to the doctor on her bicycle.",
          te: "పక్కింటి గీత గారు నాకు సాయం చేయడానికి పరిగెత్తుకొచ్చారు. ఆవిడ నన్ను సైకిల్ మీద డాక్టర్ దగ్గరికి తీసుకెళ్ళారు.",
        },
        {
          en: "After that day, I didn't climb trees anymore. But I used to visit Geetha every evening.",
          te: "ఆ రోజు తర్వాత నేను చెట్లు ఎక్కడం మానేశాను. కానీ రోజూ సాయంత్రం గీత గారి దగ్గరికి వెళ్ళేవాణ్ణి.",
        },
        {
          en: "Last month, I visited the village again. The mango tree isn't there now. But Geetha still lives there, and she still laughs about that day.",
          te: "పోయిన నెల మళ్ళీ ఊరికి వెళ్ళాను. ఇప్పుడు ఆ మామిడి చెట్టు లేదు. కానీ గీత గారు ఇంకా అక్కడే ఉంటున్నారు, ఆ రోజు గురించి ఇప్పటికీ నవ్వుతారు.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A childhood memory of a mango tree", "Buying mangoes at the market", "A new house in Khammam"],
          answer: 0,
        },
        {
          prompt: { en: "When did Venkat and his friends climb the tree?", te: "వెంకట్ గారు, ఆయన స్నేహితులు చెట్టు ఎప్పుడు ఎక్కేవారు?" },
          options: ["After school in summer", "Before school every day", "Only on festival days"],
          answer: 0,
        },
        {
          prompt: { en: "What happened one day?", te: "ఒక రోజు ఏమైంది?" },
          options: ["A branch broke, and he fell", "He lost his school bag", "The whole tree fell down"],
          answer: 0,
        },
        {
          prompt: { en: "Who took him to the doctor?", te: "ఆయన్ని డాక్టర్ దగ్గరికి ఎవరు తీసుకెళ్ళారు?" },
          options: ["Geetha, his neighbour", "His teacher", "His friends"],
          answer: 0,
        },
      ],
    },
  ],
};
