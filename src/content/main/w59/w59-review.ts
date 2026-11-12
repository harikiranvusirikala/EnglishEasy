import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 59, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick who / which / where / whose round, and a story. */

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
  id: "w59-review",
  kind: "review",
  title: { en: "Good Places, Good People", te: "మంచి చోట్లు, మంచి మనుషులు" },
  extras: [
    pick("q1", "Do you know a mechanic ___ repairs old radios?", "పాత రేడియోలు రిపేర్ చేసే మెకానిక్ ఎవరైనా మీకు తెలుసా?", ["who", "which", "whose"], 0, {
      en: "A mechanic is a person, so use who; which is only for things.",
      te: "మెకానిక్ ఒక మనిషి, అందుకే who; which వస్తువులకి మాత్రమే.",
    }),
    pick("q2", "That's the hotel ___ we had lunch last year.", "పోయిన సంవత్సరం మనం భోజనం చేసిన హోటల్ అదే.", ["where", "which", "who"], 0, {
      en: "We did something inside that place, so the place takes where.",
      te: "ఆ చోటు లోపల మనం ఏదో చేశాం, అందుకే చోటుకి where వస్తుంది.",
    }),
    pick("q3", "Mohan is the man ___ shop is near the temple.", "మోహన్ గారంటే గుడి దగ్గర షాపున్న ఆయన.", ["whose", "who", "who his"], 0, {
      en: "The shop belongs to Mohan, and whose already means his, so do not add his.",
      te: "షాపు మోహన్ గారిది; whose అంటేనే his, అందుకే మళ్ళీ his చేర్చకూడదు.",
    }),
    pick(
      "q4",
      "The clinic which is near the bus stand ___ open on Sundays.",
      "బస్ స్టాండ్ దగ్గర ఉన్న క్లినిక్ ఆదివారాలు కూడా తెరిచి ఉంటుంది.",
      ["is", "are", "be"],
      0,
      {
        en: "Open here says how the clinic is, so English needs is before it; one clinic takes is, not are.",
        te: "ఇక్కడ open క్లినిక్ ఎలా ఉందో చెప్తుంది, అందుకే ముందు is కావాలి; ఒక్క క్లినిక్ కాబట్టి are కాదు.",
      },
      "be",
    ),
    pick(
      "q5",
      "This is the shop that ___ the best bangles.",
      "అన్నిటికంటే మంచి గాజులు అమ్మే షాపు ఇదే.",
      ["sells", "sell", "selling"],
      0,
      {
        en: "One shop is like he or she, so the verb after that takes s.",
        te: "ఒక్క షాపు he, she లాంటిది, అందుకే that తర్వాత వచ్చే verb కి s వస్తుంది.",
      },
      "he-she-s",
    ),
    pick(
      "q6",
      "Kanaka Durga temple is ___ famous temple in Vijayawada.",
      "విజయవాడలో అన్నిటికంటే ఫేమస్ గుడి కనకదుర్గ గుడి.",
      ["the most", "most", "the more"],
      0,
      {
        en: "Most famous picks out one place from all, so it needs the before most.",
        te: "most famous అంటే అన్నిటిలో ఒక్కటే, అందుకే most ముందు the కావాలి.",
      },
      "article",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "The Workshop That Saved My Radio", te: "నా రేడియోని బతికించిన workshop" },
      teller: { en: "Narayana", te: "నారాయణ" },
      voice: "b",
      parts: [
        {
          en: "My father's old radio is very special to me. He listened to the news on it every morning. Last month, it suddenly stopped working.",
          te: "మా నాన్నగారి పాత రేడియో నాకు చాలా ప్రత్యేకం. ఆయన రోజూ పొద్దున దాంట్లో వార్తలు వినేవారు. పోయిన నెల, అది సడన్‌గా పనిచేయడం ఆగిపోయింది.",
        },
        {
          en: "I was very sad. I asked my neighbour, Do you know a shop which repairs old radios? She said, Yes, there's a small workshop next to the post office.",
          te: "నాకు చాలా బాధగా అనిపించింది. 'పాత రేడియోలు రిపేర్ చేసే షాపు ఏదైనా మీకు తెలుసా?' అని పక్కింటావిడని అడిగాను. 'తెలుసు, పోస్ట్ ఆఫీస్ పక్కన ఒక చిన్న workshop ఉంది' అని ఆవిడ చెప్పారు.",
        },
        {
          en: "The next evening, I took the radio there. The mechanic was an old man whose hands were very steady. He opened the radio slowly and smiled.",
          te: "మర్నాడు సాయంత్రం, రేడియోని అక్కడికి తీసుకెళ్ళాను. మెకానిక్ ఒక పెద్దాయన, ఆయన చేతులు అస్సలు వణకవు. ఆయన రేడియోని మెల్లగా తెరిచి నవ్వారు.",
        },
        {
          en: "He said, This radio was made in nineteen sixty-five. They don't make radios like this anymore. He asked me to come back after three days.",
          te: "'ఈ రేడియో 1965 లో తయారైంది. ఇలాంటి రేడియోలు ఇప్పుడు తయారుచేయట్లేదు' అని ఆయన అన్నారు. మూడు రోజుల తర్వాత మళ్ళీ రమ్మని చెప్పారు.",
        },
        {
          en: "After three days, I went back. The radio was working again! His charge was only three hundred rupees.",
          te: "మూడు రోజుల తర్వాత మళ్ళీ వెళ్ళాను. రేడియో మళ్ళీ పనిచేస్తోంది! ఆయన తీసుకున్నది మూడు వందల రూపాయలే.",
        },
        {
          en: "Now I tell everyone about that workshop. It's the best place in our area for old things. And a good neighbour is the one who gives good advice!",
          te: "ఇప్పుడు ఆ workshop గురించి అందరికీ చెప్తుంటాను. పాత వస్తువులకి మా ఏరియాలో అదే అన్నిటికంటే మంచి చోటు. మంచి సలహా ఇచ్చేవారే మంచి పక్కింటివారు!",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Getting an old radio repaired", "Buying a new radio", "A trip to the post office"],
          answer: 0,
        },
        {
          prompt: { en: "Whose radio was it first?", te: "ఆ రేడియో మొదట ఎవరిది?" },
          options: ["His father's", "His neighbour's", "The mechanic's"],
          answer: 0,
        },
        {
          prompt: { en: "Where is the workshop?", te: "ఆ workshop ఎక్కడ ఉంది?" },
          options: ["Next to the post office", "Near the temple", "Behind the bus stand"],
          answer: 0,
        },
        {
          prompt: { en: "How much did the repair cost?", te: "రిపేర్‌కి ఎంత అయింది?" },
          options: ["Three hundred rupees", "Three thousand rupees", "Sixty-five rupees"],
          answer: 0,
        },
      ],
    },
  ],
};
