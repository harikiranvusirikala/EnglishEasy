import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 78, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick round of word pairs and checking questions, and a story told by a British friend. */

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
  id: "w78-review",
  kind: "review",
  title: { en: "Many Accents, One English", te: "యాసలు వేరు, ఇంగ్లీష్ ఒకటే" },
  extras: [
    pick("q1", "In America, a mobile is called a ___.", "అమెరికాలో మొబైల్‌ని cell phone అంటారు.", ["cell phone", "check", "flat"], 0, {
      en: "Cell phone is the American word; check means the bill, and flat means an apartment.",
      te: "cell phone అమెరికన్ పదం; check అంటే బిల్, flat అంటే అపార్ట్‌మెంట్.",
    }),
    pick("q2", "In New York, people wait in ___ at the bus stop.", "న్యూయార్క్‌లో బస్ స్టాప్ దగ్గర జనం క్యూలో ఎదురుచూస్తారు.", ["line", "check", "vacation"], 0, {
      en: "Americans say line for a queue, people waiting one behind another.",
      te: "అమెరికా వాళ్ళు queue ని line అంటారు, అంటే ఒకరి వెనక ఒకరు నిలబడటం.",
    }),
    pick(
      "q3",
      "Sorry, what ___ you say? The line is not clear.",
      "సారీ, మీరు ఏమన్నారు? లైన్ సరిగ్గా లేదు.",
      ["did", "are", "have"],
      0,
      {
        en: "Asking about words someone just said needs did before you; Telugu adds no such word.",
        te: "ఇప్పుడే అన్న మాట గురించి అడిగితే you ముందు did కావాలి; తెలుగులో అలాంటి పదం ఉండదు.",
      },
      "question",
    ),
    pick(
      "q4",
      "My friend in London ___ lift, not elevator.",
      "లండన్‌లో ఉండే నా స్నేహితురాలు elevator అనరు, lift అంటారు.",
      ["says", "say", "saying"],
      0,
      {
        en: "One friend is like he or she, so the verb in the present takes s.",
        te: "ఒక్క స్నేహితురాలు అంటే she లాంటిది; అందుకే ఇప్పటి కాలంలో verb కి s.",
      },
      "he-she-s",
    ),
    pick(
      "q5",
      "You didn't understand the video, did you? ___, I missed the end.",
      "వీడియో మీకు అర్థం కాలేదు కదా? లేదు, చివర్లో వినిపించలేదు.",
      ["No", "Yes", "Not"],
      0,
      {
        en: "You did not understand, so begin with No, even though Telugu starts with అవును.",
        te: "మీకు అర్థం కాలేదు, అందుకే No తో మొదలుపెట్టాలి; తెలుగులో 'అవును' అని మొదలుపెట్టినా సరే.",
      },
      "negative-answer",
    ),
    pick(
      "q6",
      "Stir the onion ___ five minutes.",
      "ఉల్లిపాయని ఐదు నిమిషాలు కలపండి.",
      ["for", "since", "from"],
      0,
      {
        en: "A length of time takes for; since and from need a starting point.",
        te: "ఎంతసేపు అనడానికి for; since, from కి మొదలైన టైమ్ కావాలి.",
      },
      "preposition",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "Three Englishes in One Home", te: "ఒకే ఇంట్లో మూడు ఇంగ్లీష్‌లు" },
      teller: { en: "Mary", te: "మేరీ" },
      voice: "gb-f",
      parts: [
        {
          en: "Last winter, I came from London to Hyderabad to stay with my friend Kavitha. She lives in a flat on the fifth floor. On the same day, her cousin Ruth arrived from America.",
          te: "పోయిన చలికాలం నేను లండన్ నుంచి హైదరాబాద్‌కి నా స్నేహితురాలు కవిత దగ్గర ఉండటానికి వచ్చాను. ఆవిడ ఐదో అంతస్తులో ఒక ఫ్లాట్‌లో ఉంటారు. అదే రోజు ఆవిడ కజిన్ రూత్ అమెరికా నుంచి వచ్చారు.",
        },
        {
          en: "Ruth looked around and said, What a nice apartment! Is there an elevator? Kavitha's neighbour looked confused. Then he smiled and said, Oh, the lift! It's on the left.",
          te: "రూత్ చుట్టూ చూసి, 'ఎంత బాగుంది ఈ అపార్ట్‌మెంట్! ఎలివేటర్ ఉందా?' అన్నారు. కవిత గారి పక్కింటాయనకి అర్థం కాలేదు. తర్వాత ఆయన నవ్వి, 'ఓ, లిఫ్ట్! అది ఎడమవైపు ఉంది' అన్నారు.",
        },
        {
          en: "That evening, we went out for biryani. After dinner, Ruth asked the waiter for the check. He looked confused too. Kavitha laughed and said, She means the bill, please.",
          te: "ఆ సాయంత్రం మేము బిర్యానీ తినడానికి బయటికి వెళ్ళాం. భోజనం అయ్యాక రూత్ waiter ని check అడిగారు. ఆయనకి కూడా అర్థం కాలేదు. కవిత నవ్వి, 'ఆవిడ అడుగుతున్నది బిల్ అండీ' అన్నారు.",
        },
        {
          en: "The next day, I went to a shop alone. The shopkeeper spoke very fast, and I didn't catch a word. So I said, Sorry, could you say that again more slowly?",
          te: "మర్నాడు నేను ఒక్కదాన్నే ఒక షాపుకి వెళ్ళాను. షాపు ఆయన చాలా వేగంగా మాట్లాడారు, నాకు ఒక్క మాట కూడా అర్థం కాలేదు. అందుకే, 'సారీ, ఇంకా మెల్లగా మళ్ళీ చెప్తారా?' అని అడిగాను.",
        },
        {
          en: "He smiled and spoke slowly. Then he asked me, You're from London, aren't you? Your English sounds different. We both laughed, and I bought two kilos of guavas.",
          te: "ఆయన నవ్వి మెల్లగా మాట్లాడారు. తర్వాత, 'మీరు లండన్ నుంచి వచ్చారు కదా? మీ ఇంగ్లీష్ వేరేగా వినిపిస్తుంది' అన్నారు. ఇద్దరం నవ్వుకున్నాం, నేను రెండు కిలోల జామపండ్లు కొన్నాను.",
        },
        {
          en: "That night, Kavitha said, British, American, Indian: it's all English. Only some words and sounds are different. Now I always ask politely when I don't understand. Nobody minds.",
          te: "ఆ రాత్రి కవిత, 'బ్రిటిష్, అమెరికన్, ఇండియన్: అన్నీ ఇంగ్లీషే. కొన్ని పదాలు, శబ్దాలు మాత్రమే వేరు' అన్నారు. ఇప్పుడు నాకు అర్థం కాకపోతే ఎప్పుడూ మర్యాదగా మళ్ళీ అడుగుతాను. ఎవరూ ఏమీ అనుకోరు.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Different kinds of English in one home", "A trip to London", "Learning to cook biryani"],
          answer: 0,
        },
        {
          prompt: { en: "Where does Kavitha live?", te: "కవిత గారు ఎక్కడ ఉంటారు?" },
          options: ["In a flat on the fifth floor", "In a house near the lake", "In a hotel near the station"],
          answer: 0,
        },
        {
          prompt: { en: "What did Ruth ask the waiter for?", te: "రూత్ గారు waiter ని ఏం అడిగారు?" },
          options: ["The check", "Some water", "The menu"],
          answer: 0,
        },
        {
          prompt: { en: "What did Mary do when the shopkeeper spoke fast?", te: "షాపు ఆయన వేగంగా మాట్లాడినప్పుడు మేరీ గారు ఏం చేశారు?" },
          options: ["She asked him to say it again more slowly.", "She walked out of the shop.", "She called Kavitha for help."],
          answer: 0,
        },
      ],
    },
  ],
};
