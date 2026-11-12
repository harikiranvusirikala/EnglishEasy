import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 66, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick phrasal-verb round, and a story. */

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
  id: "w66-review",
  kind: "review",
  title: { en: "Jobs Around the House", te: "ఇంటి పనులు" },
  extras: [
    pick(
      "q1",
      "It's dark in here. Could you ___ the light?",
      "ఇక్కడ చీకటిగా ఉంది. కొంచెం లైట్ వేస్తారా?",
      ["turn on", "open", "on"],
      0,
      {
        en: "A light is turned on, not opened, and on alone is not a verb in English.",
        te: "లైట్‌ని turn on చేస్తారు, open చేయరు; ఇంగ్లీష్‌లో on ఒక్కటే verb కాదు.",
      },
      "preposition",
    ),
    pick("q2", "The TV is too loud. Please turn ___.", "TV చాలా గట్టిగా ఉంది. కొంచెం తగ్గించండి.", ["it down", "down it", "it low"], 0, {
      en: "With it, the little word down comes after it, and sound is turned down, never low.",
      te: "it వస్తే down దాని తర్వాతే వస్తుంది; సౌండ్ తగ్గించడానికి turn down, turn low అనరు.",
    }),
    pick("q3", "Could you ___ when the shop closes today?", "ఈ రోజు షాప్ ఎప్పుడు మూస్తారో కనుక్కుంటారా?", ["find out", "find", "look for"], 0, {
      en: "To learn a fact like a time or a price, use find out; find is for things.",
      te: "టైమ్, ధర లాంటి విషయం తెలుసుకోవడానికి find out; find వస్తువులకి.",
    }),
    pick(
      "q4",
      "Didn't you call the plumber? ___, I forgot.",
      "ప్లంబర్‌కి ఫోన్ చేయలేదా? లేదు, మర్చిపోయాను.",
      ["No, I didn't", "Yes, I didn't", "No, I don't"],
      0,
      {
        en: "English answers the fact: you did not call, so say no. Telugu అవును does not fit.",
        te: "ఇంగ్లీష్‌లో జవాబు నిజాన్ని బట్టి: ఫోన్ చేయలేదు కాబట్టి No. తెలుగులో లాగా అవును అనకూడదు.",
      },
      "negative-answer",
    ),
    pick(
      "q5",
      "Srinivas always ___ out the garbage at night.",
      "శ్రీనివాస్ గారు ఎప్పుడూ రాత్రి చెత్త బయట పెడతారు.",
      ["takes", "take", "taking"],
      0,
      {
        en: "One person with always takes s on the verb, like she goes.",
        te: "ఒక్కరు, always తో: verb కి s వస్తుంది, she goes లాగా.",
      },
      "he-she-s",
    ),
    pick(
      "q6",
      "We've run out of milk. Please get two ___ of milk.",
      "పాలు అయిపోయాయి. రెండు పాల ప్యాకెట్లు తీసుకురండి.",
      ["packets", "packet", "milks"],
      0,
      {
        en: "After two, the word takes s, and milk itself is never counted with s.",
        te: "two తర్వాత పదానికి s వస్తుంది; milk కి మాత్రం ఎప్పుడూ s రాదు.",
      },
      "plural",
    ),
    {
      id: "x-story",
      type: "story",
      title: { en: "The Trunk in the Storeroom", te: "స్టోర్‌రూమ్‌లో ట్రంకు పెట్టె" },
      teller: { en: "Kavitha", te: "కవిత" },
      voice: "a",
      parts: [
        {
          en: "Every year, I clear out my storeroom before Ugadi. This year, my friend Salma came to help me.",
          te: "ప్రతి సంవత్సరం ఉగాది ముందు నేను నా స్టోర్‌రూమ్ ఖాళీ చేస్తాను. ఈసారి నా స్నేహితురాలు సల్మా గారు సాయానికి వచ్చారు.",
        },
        {
          en: "We took out all the boxes first. Then Salma found a heavy steel trunk behind them. I didn't even know it was there!",
          te: "ముందు డబ్బాలన్నీ బయటికి తీశాం. అప్పుడు వాటి వెనకాల ఒక బరువైన స్టీల్ ట్రంకు పెట్టె సల్మా గారికి కనిపించింది. అది అక్కడ ఉందని నాకు తెలీనే తెలీదు!",
        },
        {
          en: "Inside, there were my mother's old sarees and some letters. My father wrote those letters in nineteen seventy-five.",
          te: "లోపల మా అమ్మ పాత చీరలు, కొన్ని ఉత్తరాలు ఉన్నాయి. ఆ ఉత్తరాలు మా నాన్నగారు 1975 లో రాశారు.",
        },
        {
          en: "I wanted to keep everything. But Salma said we could give the sarees to a women's hostel. She told me to keep the letters.",
          te: "నాకు అన్నీ ఉంచుకోవాలనిపించింది. కానీ చీరలు ఒక మహిళా హాస్టల్‌కి ఇచ్చేయొచ్చని సల్మా గారు అన్నారు. ఉత్తరాలు మాత్రం ఉంచుకోమన్నారు.",
        },
        {
          en: "We put the letters away in a new box. Then we wanted tea, but there was no milk. Salma got some from the kirana shop.",
          te: "ఉత్తరాలని ఒక కొత్త డబ్బాలో సర్దిపెట్టాం. తర్వాత టీ తాగాలనిపించింది, కానీ పాలు లేవు. సల్మా గారు కిరాణా షాప్ నుంచి తెచ్చారు.",
        },
        {
          en: "Now my storeroom is clean, and the letters are safe. I read one again every Ugadi.",
          te: "ఇప్పుడు నా స్టోర్‌రూమ్ శుభ్రంగా ఉంది, ఉత్తరాలు భద్రంగా ఉన్నాయి. ప్రతి ఉగాదికి ఒక ఉత్తరం మళ్ళీ చదువుకుంటాను.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Clearing out a storeroom before Ugadi", "Buying sarees for Ugadi", "Writing letters to a friend"],
          answer: 0,
        },
        {
          prompt: { en: "Who came to help Kavitha?", te: "కవిత గారికి సాయానికి ఎవరు వచ్చారు?" },
          options: ["Her friend Salma", "Her neighbour's son", "The electrician"],
          answer: 0,
        },
        {
          prompt: { en: "What was inside the trunk?", te: "ట్రంకు పెట్టెలో ఏమున్నాయి?" },
          options: ["Old sarees and letters", "Old clothes and toys", "A broken radio"],
          answer: 0,
        },
        {
          prompt: { en: "What did they do with the sarees?", te: "చీరలని వాళ్ళు ఏం చేశారు?" },
          options: ["Gave them to a women's hostel", "Threw them away", "Put them back in the trunk"],
          answer: 0,
        },
      ],
    },
  ],
};
