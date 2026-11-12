import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 65, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick round on the week's slips, and a story. */

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
  id: "w65-review",
  kind: "review",
  title: { en: "Kind Words", te: "మంచి మాటలు" },
  extras: [
    pick(
      "q1",
      "Many congratulations ___ the wedding.",
      "పెళ్లి సందర్భంగా హృదయపూర్వక అభినందనలు.",
      ["on", "for", "at"],
      0,
      {
        en: "Congratulations takes on before the happy event; for is a common slip.",
        te: "శుభ సందర్భం ముందు congratulations తర్వాత on వస్తుంది; for అనడం మామూలుగా చేసే పొరపాటు.",
      },
      "preposition",
    ),
    pick(
      "q2",
      "Wishing you both ___ very happy married life.",
      "మీ ఇద్దరి వైవాహిక జీవితం ఎంతో సంతోషంగా సాగాలని కోరుకుంటున్నాను.",
      ["a", "the", "an"],
      0,
      {
        en: "One happy life needs a, and very starts with a consonant sound, so not an.",
        te: "ఒక్క సంతోషకరమైన జీవితం, అందుకే a; very హల్లు శబ్దంతో మొదలవుతుంది, కాబట్టి an కాదు.",
      },
      "article",
    ),
    pick("q3", "Your father ___ a very gentle man.", "మీ నాన్నగారు చాలా సౌమ్యులు.", ["was", "is", "were"], 0, {
      en: "He has passed away, so English uses the past; Telugu shows no time here.",
      te: "ఆయన కన్నుమూశారు కాబట్టి ఇంగ్లీష్‌లో past వాడాలి; తెలుగులో ఇక్కడ కాలం కనిపించదు.",
    }),
    pick(
      "q4",
      "We ___ lived here since March.",
      "మార్చి నుంచి మేము ఇక్కడే ఉంటున్నాం.",
      ["have", "are", "has"],
      0,
      {
        en: "From a past time up to now, we takes have with the verb; Telugu uses the present.",
        te: "గతం నుంచి ఇప్పటిదాకా అయితే we తో verb ముందు have; తెలుగులో present తో అంటాం.",
      },
      "duration",
    ),
    pick(
      "q5",
      "Please let me know if you ___ anything.",
      "మీకు ఏమైనా కావాలంటే నాకు చెప్పండి.",
      ["need", "are needing", "needs"],
      0,
      {
        en: "Need is a state, so it takes no -ing, and with you the verb takes no s.",
        te: "need అనేది అవసరం, జరుగుతున్న పని కాదు, అందుకే -ing రాదు; you తో verb కి s కూడా రాదు.",
      },
      "state-ing",
    ),
    pick(
      "q6",
      "Mr Joseph ___ everyone in the colony.",
      "జోసెఫ్ గారికి కాలనీలో అందరూ తెలుసు.",
      ["knows", "know", "is knowing"],
      0,
      {
        en: "One person takes s on the verb, and know never takes -ing.",
        te: "ఒక్కరైతే verb కి s వస్తుంది; know కి ఎప్పుడూ -ing రాదు.",
      },
      "he-she-s",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "A Few Kind Words", te: "కొన్ని మంచి మాటలు" },
      teller: { en: "Geetha", te: "గీత" },
      voice: "a",
      parts: [
        {
          en: "Last month, our old neighbour, Mr David, passed away. He was eighty-six, and he died peacefully in his sleep. He lived next door to us for thirty years.",
          te: "పోయిన నెల మా పాత పొరుగాయన డేవిడ్ గారు కన్నుమూశారు. ఆయనకి ఎనభై ఆరేళ్ళు, నిద్రలోనే ప్రశాంతంగా వెళ్ళిపోయారు. ముప్ఫై ఏళ్ళు ఆయన మా పక్కింట్లోనే ఉన్నారు.",
        },
        {
          en: "His son, John, came from Bengaluru with some friends. Some of them did not speak Telugu. I wanted to visit the family, but I was nervous about my English.",
          te: "ఆయన అబ్బాయి జాన్ గారు కొంతమంది స్నేహితులతో బెంగళూరు నుంచి వచ్చారు. వాళ్ళలో కొందరికి తెలుగు రాదు. ఆ కుటుంబాన్ని పరామర్శించాలనుకున్నాను, కానీ నా ఇంగ్లీష్ గురించి భయంగా ఉంది.",
        },
        {
          en: "That evening, I went to their house. I held John's hand and said, I'm so sorry for your loss. Your father was a very kind man.",
          te: "ఆ సాయంత్రం వాళ్ళింటికి వెళ్ళాను. జాన్ గారి చేయి పట్టుకుని, మీకు ఈ లోటు కలిగినందుకు చాలా బాధగా ఉంది, మీ నాన్నగారు చాలా మంచి మనిషి అని చెప్పాను.",
        },
        {
          en: "John smiled a little. He said his father often talked about our evening walks. I told him about the mangoes his father always shared with us.",
          te: "జాన్ గారు కొంచెం నవ్వారు. మా సాయంత్రపు నడకల గురించి వాళ్ళ నాన్నగారు ఎప్పుడూ చెప్పేవారని అన్నారు. వాళ్ళ నాన్నగారు మాకు ఎప్పుడూ ఇచ్చే మామిడిపళ్ళ గురించి నేను చెప్పాను.",
        },
        {
          en: "Before I left, I said, please let me know if you need anything. The next morning, I took idli and chutney for everyone. John said it was a big help.",
          te: "బయలుదేరే ముందు, మీకు ఏమైనా కావాలంటే నాకు చెప్పండి అన్నాను. మర్నాడు పొద్దున అందరికీ ఇడ్లీ, చట్నీ తీసుకెళ్ళాను. అది చాలా పెద్ద సహాయమని జాన్ గారు అన్నారు.",
        },
        {
          en: "I learned something that week. You don't need perfect English or many words. A few kind words and a little help are enough.",
          te: "ఆ వారం నేను ఒక విషయం నేర్చుకున్నాను. పర్ఫెక్ట్ ఇంగ్లీష్, బోలెడు మాటలు అక్కర్లేదు. కొన్ని మంచి మాటలు, కొంచెం సహాయం చాలు.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Visiting a neighbour's family after a death", "Going to a friend's wedding", "Moving into a new house"],
          answer: 0,
        },
        {
          prompt: { en: "How old was Mr David?", te: "డేవిడ్ గారి వయసు ఎంత?" },
          options: ["Eighty-six", "Sixty-eight", "Thirty"],
          answer: 0,
        },
        {
          prompt: { en: "What did John say his father often talked about?", te: "వాళ్ళ నాన్నగారు దేని గురించి ఎప్పుడూ చెప్పేవారని జాన్ గారు అన్నారు?" },
          options: ["Their evening walks", "His job in Bengaluru", "His new house"],
          answer: 0,
        },
        {
          prompt: { en: "What did Geetha take the next morning?", te: "మర్నాడు పొద్దున గీత గారు ఏం తీసుకెళ్ళారు?" },
          options: ["Idli and chutney", "Mangoes", "Flowers"],
          answer: 0,
        },
      ],
    },
  ],
};
