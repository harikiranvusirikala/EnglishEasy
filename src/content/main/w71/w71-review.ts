import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 71, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick then-and-now round, and a story. */

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
  id: "w71-review",
  kind: "review",
  title: { en: "Then and Now", te: "అప్పుడు, ఇప్పుడు" },
  extras: [
    pick("q1", "Prices ___ gone up again.", "ధరలు మళ్ళీ పెరిగాయి.", ["have", "has", "are"], 0, {
      en: "Prices means many things, so it takes have, not has.",
      te: "prices అంటే చాలా, అందుకే has కాదు, have వాడాలి.",
    }),
    pick("q2", "The price of onions ___ come down.", "ఉల్లిపాయల ధర తగ్గింది.", ["has", "have", "is"], 0, {
      en: "The price is one thing, so it takes has, even before onions.",
      te: "price ఒక్కటే, అందుకే onions ఉన్నా has వాడాలి.",
    }),
    pick("q3", "It's getting ___ every year.", "ప్రతి సంవత్సరం ఎండ ఎక్కువవుతోంది.", ["hotter", "more hot", "hottest"], 0, {
      en: "A change uses the -er form; hottest is only for the top one.",
      te: "మార్పుకి -er రూపం; hottest అన్నిటికంటే ఎక్కువైనదానికి మాత్రమే.",
    }),
    pick("q4", "A dosa ___ cost two rupees.", "అప్పట్లో దోస రెండు రూపాయలు ఉండేది.", ["used to", "use to", "was used to"], 0, {
      en: "For an old price, write used to, with d and no was.",
      te: "పాత ధరకి used to; చివర d ఉంటుంది, ముందు was రాదు.",
    }),
    pick(
      "q5",
      "I have lived in this town ___ thirty years.",
      "ముప్పై ఏళ్ళుగా నేను ఈ ఊరిలో ఉంటున్నాను.",
      ["for", "since", "from"],
      0,
      {
        en: "For a length of time, use for; since needs a starting point, like January.",
        te: "ఎంత కాలం అనడానికి for; since తర్వాత మొదలైన సమయం రావాలి, January లాగా.",
      },
      "duration",
    ),
    pick("q6", "I've cut down on ___ out.", "బయట తినడం తగ్గించాను.", ["eating", "eat", "to eat"], 0, {
      en: "After on, an action always takes the -ing form.",
      te: "on తర్వాత పని వస్తే ఎప్పుడూ -ing రూపం వస్తుంది.",
    }),
    {
      id: "x-story",
      type: "story",
      title: { en: "Rahim's Tea Stall", te: "రహీమ్ గారి టీ కొట్టు" },
      teller: { en: "Srinivas", te: "శ్రీనివాస్" },
      voice: "b",
      parts: [
        {
          en: "I have lived in Warangal all my life. Every morning, I drink tea at Rahim's stall near the bus stand. His father started the stall fifty years ago.",
          te: "నేను జీవితమంతా వరంగల్‌లోనే ఉన్నాను. ప్రతి పొద్దున బస్ స్టాండ్ దగ్గర రహీమ్ గారి కొట్టులో టీ తాగుతాను. ఆ కొట్టుని యాభై ఏళ్ళ క్రితం ఆయన నాన్నగారు మొదలుపెట్టారు.",
        },
        {
          en: "When I was young, a cup of tea used to cost twenty paise. People paid with coins, and everyone knew everyone. We used to sit on a wooden bench and read one newspaper together.",
          te: "నా చిన్నప్పుడు ఒక కప్పు టీ ఇరవై పైసలు ఉండేది. అందరూ చిల్లరతో కట్టేవాళ్ళు, అందరికీ అందరూ తెలుసు. ఒక చెక్క బెంచీ మీద కూర్చుని, ఒకే పేపర్ అందరం కలిసి చదివేవాళ్ళం.",
        },
        {
          en: "Now the town has changed a lot. The roads are getting more crowded every year. Tall buildings have come up where the fields used to be.",
          te: "ఇప్పుడు ఊరు చాలా మారింది. ప్రతి సంవత్సరం రోడ్ల మీద రద్దీ పెరుగుతోంది. పొలాలు ఉన్న చోట పెద్ద పెద్ద బిల్డింగులు వచ్చాయి.",
        },
        {
          en: "The price of tea has gone up too. Last month, it went up from ten rupees to twelve. Rahim felt bad about it, but milk and sugar have become costly.",
          te: "టీ ధర కూడా పెరిగింది. పోయిన నెల పది రూపాయల నుంచి పన్నెండుకి పెరిగింది. రహీమ్ గారు బాధపడ్డారు, కానీ పాలు, చక్కెర ఖరీదైపోయాయి.",
        },
        {
          en: "Rahim has started taking UPI. Young customers scan the QR code and pay in a second. Older customers like me still pay with coins, and Rahim smiles at us.",
          te: "రహీమ్ గారు UPI తీసుకోవడం మొదలుపెట్టారు. యువ కస్టమర్లు QR code scan చేసి, క్షణంలో కట్టేస్తారు. నాలాంటి పెద్దవాళ్ళం ఇంకా చిల్లరతోనే కడతాం, రహీమ్ గారు నవ్వుతారు.",
        },
        {
          en: "Prices have changed, and the town has changed. But the tea tastes the same, and my friends are still on the bench.",
          te: "ధరలు మారాయి, ఊరూ మారింది. కానీ టీ రుచి అలాగే ఉంది, నా స్నేహితులు ఇంకా ఆ బెంచీ మీదే ఉన్నారు.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["How life has changed around a tea stall", "A new restaurant in Warangal", "A trip to Hyderabad"],
          answer: 0,
        },
        {
          prompt: { en: "How much did a cup of tea cost when Srinivas was young?", te: "శ్రీనివాస్ గారి చిన్నప్పుడు ఒక కప్పు టీ ఎంత ఉండేది?" },
          options: ["Twenty paise", "Two rupees", "Ten rupees"],
          answer: 0,
        },
        {
          prompt: { en: "Why did the price of tea go up?", te: "టీ ధర ఎందుకు పెరిగింది?" },
          options: ["Milk and sugar became costly", "Rahim wanted a new stall", "The bus stand moved"],
          answer: 0,
        },
        {
          prompt: { en: "How do older customers like Srinivas pay?", te: "శ్రీనివాస్ గారి లాంటి పెద్దవాళ్ళు ఎలా కడతారు?" },
          options: ["With coins", "By UPI", "With a card"],
          answer: 0,
        },
      ],
    },
  ],
};
