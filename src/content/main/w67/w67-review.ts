import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/**
 * Week 67, Day 7 (CURRICULUM §5): Checkpoint 5 (§2b) — the automatic review, with the Conversation Day's weekend train
 * as the check's role play, a mixed round across Weeks 55–66, the listening task (a two-minute story heard first) and
 * the 90-second speaking mission: a trip I took.
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
  id: "w67-review",
  kind: "review",
  title: { en: "Checkpoint", te: "చెక్‌పాయింట్" },
  extras: [
    pick(
      "q1",
      "Please ___ the fan before you go out.",
      "బయటికి వెళ్ళే ముందు ఫ్యాన్ ఆపేయండి.",
      ["turn off", "close", "off"],
      0,
      {
        en: "Fans and lights are turned off; close is only for doors and windows.",
        te: "ఫ్యాన్, లైట్ కి turn off అంటాం; close అనేది తలుపులు, కిటికీలకి మాత్రమే.",
      },
      "indian-english",
    ),
    pick("q2", "These sarees ___ woven by hand in Pochampally.", "ఈ చీరలు పోచంపల్లిలో చేత్తో నేస్తారు.", ["are", "is", "does"], 0, {
      en: "Sarees is more than one, so the passive takes are before woven.",
      te: "sarees ఒకటి కంటే ఎక్కువ, అందుకే woven ముందు are వస్తుంది.",
    }),
    pick("q3", "The doctor told me ___ eat sweets.", "స్వీట్లు తినొద్దని డాక్టర్ గారు నాకు చెప్పారు.", ["not to", "don't", "no"], 0, {
      en: "To pass on a don't, say told me not to; Telugu తినొద్దని becomes not to.",
      te: "'చేయొద్దు' అనేది ఇంకొకరికి చెప్పేటప్పుడు told me not to; 'తినొద్దని' అంటే not to.",
    }),
    pick(
      "q4",
      "Could you tell me where the X-ray room ___?",
      "X-ray రూమ్ ఎక్కడ ఉందో చెప్తారా?",
      ["is", "is it", "does"],
      0,
      {
        en: "In a polite question, is goes at the end, after the place.",
        te: "మర్యాద ప్రశ్నలో is చివరికి వెళ్తుంది, చోటు పేరు తర్వాత.",
      },
      "question",
    ),
    pick("q5", "This is the shop ___ I bought my reading glasses.", "నేను నా కళ్ళద్దాలు కొన్న షాపు ఇదే.", ["where", "which", "who"], 0, {
      en: "A place where something happened takes where; which is for the thing itself.",
      te: "ఏదైనా జరిగిన చోటుకి where; which అనేది వస్తువుకి.",
    }),
    pick(
      "q6",
      "My neighbour put two ___ rupees in a fixed deposit.",
      "మా పక్కింటివారు రెండు లక్షల రూపాయలు fixed deposit లో వేశారు.",
      ["lakh", "lakhs", "lakhs of"],
      0,
      {
        en: "After a number, lakh takes no s, just like thousand and crore.",
        te: "నంబర్ తర్వాత lakh కి s రాదు, thousand, crore లాగానే.",
      },
      "plural",
    ),
    pick(
      "q7",
      "I ___ known Mrs Kamala for ten years.",
      "కమల గారు నాకు పదేళ్ళుగా తెలుసు.",
      ["have", "am", "was"],
      0,
      {
        en: "For something that started long ago and is still true, use have with known.",
        te: "చాలా కాలం క్రితం మొదలై ఇప్పటికీ నిజమైనదానికి known ముందు have వస్తుంది.",
      },
      "duration",
    ),
    pick(
      "q8",
      "You haven't paid the water bill? ___, I haven't. I'll pay today.",
      "నీటి బిల్లు ఇంకా కట్టలేదా? లేదు, కట్టలేదు. ఈ రోజు కడతాను.",
      ["No", "Yes", "Not"],
      0,
      {
        en: "When the answer has haven't, English starts with No, even if Telugu says అవును.",
        te: "జవాబులో haven't ఉంటే ఇంగ్లీష్‌లో No తో మొదలవుతుంది; తెలుగులో 'అవును' అన్నా సరే.",
      },
      "negative-answer",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "The Train to Araku", te: "అరకు రైలు ప్రయాణం" },
      teller: { en: "Kamala", te: "కమల" },
      voice: "a",
      parts: [
        {
          en: "Last winter, I went to Araku Valley with my friend Mary. We took the early morning train from Visakhapatnam. Our tickets were booked a month before.",
          te: "పోయిన చలికాలంలో నేను నా స్నేహితురాలు మేరీతో కలిసి అరకు లోయకి వెళ్ళాను. విశాఖపట్నం నుంచి పొద్దున్నే రైలు ఎక్కాం. మా టికెట్లు నెల ముందే బుక్ చేశాం.",
        },
        {
          en: "At the station, the platform number was not on the board. So I politely asked a porter. He told us it was platform one.",
          te: "స్టేషన్‌లో బోర్డు మీద ప్లాట్‌ఫామ్ నంబర్ లేదు. అందుకే ఒక కూలీని మర్యాదగా అడిగాను. ఒకటో నంబర్ ప్లాట్‌ఫామ్ అని ఆయన చెప్పారు.",
        },
        {
          en: "The journey was beautiful. The train went through many tunnels and green hills. Every time it went dark, the children in our coach shouted with joy.",
          te: "ప్రయాణం చాలా అందంగా ఉంది. రైలు ఎన్నో సొరంగాల గుండా, పచ్చని కొండల మధ్య వెళ్ళింది. చీకటి పడిన ప్రతిసారీ మా బోగీలోని పిల్లలు సంతోషంగా అరిచారు.",
        },
        {
          en: "In Araku, we visited a coffee museum. We were told that coffee is grown on those hills. We bought two packets for our neighbours.",
          te: "అరకులో ఒక కాఫీ మ్యూజియం చూశాం. ఆ కొండల మీద కాఫీ పండిస్తారని మాకు చెప్పారు. మా పక్కింటివాళ్ళ కోసం రెండు ప్యాకెట్లు కొన్నాం.",
        },
        {
          en: "In the evening, it suddenly became very cold. Mary had no sweater, so a kind shopkeeper lent her a shawl. He told her to return it the next morning.",
          te: "సాయంత్రం ఉన్నట్టుండి బాగా చలి పెరిగింది. మేరీ దగ్గర స్వెటర్ లేదు, అందుకే ఒక షాపు యజమాని మంచి మనసుతో ఆవిడకి ఒక శాలువా ఇచ్చారు. మర్నాడు పొద్దున తిరిగి ఇవ్వమని చెప్పారు.",
        },
        {
          en: "When we came home, our neighbours came over for coffee. I served the Araku coffee with a few biscuits. Everyone loved it, and I would love to go back.",
          te: "ఇంటికి వచ్చాక మా పక్కింటివాళ్ళు కాఫీకి వచ్చారు. అరకు కాఫీ, కొన్ని బిస్కెట్లతో ఇచ్చాను. అందరికీ చాలా నచ్చింది; నాకు మళ్ళీ అక్కడికి వెళ్ళాలని ఉంది.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A trip to Araku Valley", "A coffee shop in town", "A train that was cancelled"],
          answer: 0,
        },
        {
          prompt: { en: "How did Kamala find the platform?", te: "కమల గారికి ప్లాట్‌ఫామ్ ఎలా తెలిసింది?" },
          options: ["She asked a porter.", "She saw it on the board.", "She called the station."],
          answer: 0,
        },
        {
          prompt: { en: "What did they learn at the coffee museum?", te: "కాఫీ మ్యూజియంలో వాళ్ళు ఏం తెలుసుకున్నారు?" },
          options: ["Coffee is grown on the hills there.", "Coffee is made in Hyderabad.", "The museum was closed on Sundays."],
          answer: 0,
        },
        {
          prompt: { en: "Who helped Mary when it became cold?", te: "చలి పెరిగినప్పుడు మేరీ గారికి ఎవరు సాయం చేశారు?" },
          options: ["A kind shopkeeper", "The porter", "Kamala's neighbour"],
          answer: 0,
        },
      ],
    },
    {
      id: "m1",
      type: "mission",
      title: { en: "A trip I took", te: "నేను చేసిన ప్రయాణం" },
      prompts: [
        "Last year, I went to … with …",
        "We went by … and stayed …",
        "First we …, then …",
        "The guide told us that …",
        "It was …, but …",
        "I would love to …",
      ],
      seconds: 90,
    },
  ],
};
