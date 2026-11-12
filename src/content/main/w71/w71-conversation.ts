import type { ConversationDay } from "../../types";

/** Week 71, Day 6 (CURRICULUM §5): Conversation Day — chatting about prices with a shopkeeper, and telling a visitor how life has changed in thirty years. */
export const day: ConversationDay = {
  id: "w71-conversation",
  kind: "conversation",
  title: { en: "Old Prices, New Prices", te: "పాత ధరలు, కొత్త ధరలు" },
  summary: {
    en: "Use the whole week: chat about prices with a shopkeeper, and tell a visitor how life has changed in thirty years.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: షాపులో ధరల గురించి మాట్లాడండి, ముప్పై ఏళ్ళలో జీవితం ఎలా మారిందో వచ్చినవారికి చెప్పండి.",
  },
  topics: ["market", "money", "time"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Back after thirty years", te: "ముప్పై ఏళ్ళ తర్వాత" },
    lines: [
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Namaste, Narayana! I'm back in Guntur after thirty years.", te: "నమస్తే, నారాయణ గారూ! ముప్పై ఏళ్ళ తర్వాత గుంటూరు వచ్చాను." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Welcome back, Geetha! The town has changed a lot, hasn't it?", te: "రండి, గీత గారూ! ఊరు చాలా మారిపోయింది కదా?" },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Yes! There used to be fields here. Now there are buildings everywhere.", te: "అవును! ఇక్కడ పొలాలు ఉండేవి. ఇప్పుడు ఎక్కడ చూసినా బిల్డింగులే." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "And the roads are getting more crowded day by day.", te: "రోడ్ల మీద రద్దీ కూడా రోజురోజుకీ పెరుగుతోంది." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "What about prices? A dosa used to cost two rupees!", te: "మరి ధరలు? అప్పట్లో దోస రెండు రూపాయలు ఉండేది!" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Now it's forty. Everything has become ten times more expensive.", te: "ఇప్పుడు నలభై. అన్నీ పది రెట్లు ఖరీదైపోయాయి." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Do people still go to the old market?", te: "ఇంకా పాత మార్కెట్‌కి వెళ్తున్నారా?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Some do. But most people have started ordering groceries on the phone.", te: "కొంతమంది వెళ్తారు. కానీ చాలామంది ఫోన్‌లోనే సరుకులు ఆర్డర్ చేయడం మొదలుపెట్టారు." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "And everyone pays by UPI now, I think.", te: "ఇప్పుడు అందరూ UPI తోనే కడుతున్నారనుకుంటా." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Even the tea stall has a QR code! Come, let's have tea.", te: "టీ కొట్టులో కూడా QR code ఉంది! రండి, టీ తాగుదాం." },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["How the town has changed", "A new job in Guntur", "A wedding next week"],
        answer: 0,
      },
      {
        prompt: { en: "How long has Geetha been away?", te: "గీత గారు ఎన్నేళ్ళుగా ఊరికి దూరంగా ఉన్నారు?" },
        options: ["Thirty years", "Three years", "Ten years"],
        answer: 0,
      },
      {
        prompt: { en: "What used to be there before the buildings?", te: "బిల్డింగులు రాకముందు అక్కడ ఏముండేవి?" },
        options: ["Fields", "A market", "A school"],
        answer: 0,
      },
      {
        prompt: { en: "How do most people buy groceries now?", te: "ఇప్పుడు చాలామంది సరుకులు ఎలా కొంటున్నారు?" },
        options: ["On the phone", "At the old market", "From the tea stall"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "At the shop, you see rice costs more than last month. Say so to the shopkeeper.",
        te: "షాపులో బియ్యం పోయిన నెల కంటే ఎక్కువ ధర ఉందని గమనించారు. షాపు వారికి ఆ మాట చెప్పండి.",
      },
      expected: ["The price of rice has gone up.", "The price of rice has gone up again.", "Rice has gone up this month.", "Rice has become costly."],
      options: ["The price of rice has gone up.", "The price of rice gone up.", "Price of rice has gone up."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Tell your friend you saw cheap onions at the market early today.",
        te: "ఈ రోజు పొద్దున మార్కెట్‌లో ఉల్లిపాయలు చవకగా ఉన్నాయని స్నేహితులకి చెప్పండి.",
      },
      expected: ["Onions were cheap at the market this morning.", "This morning, onions were cheap at the market.", "I saw cheap onions at the market this morning."],
      options: ["Onions were cheap at the market this morning.", "Onions were cheap at the market today morning.", "Onions was cheap at the market this morning."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your friend Mary runs a tea stall. Tell a visitor she takes UPI now.",
        te: "మీ స్నేహితురాలు మేరీ గారు టీ కొట్టు నడుపుతారు. ఇప్పుడు ఆవిడ UPI తీసుకుంటారని వచ్చినవారికి చెప్పండి.",
      },
      expected: ["Mary takes UPI now.", "Mary has started taking UPI.", "Mary accepts UPI now.", "She takes UPI now."],
      options: ["Mary takes UPI now.", "Mary take UPI now.", "Mary taking UPI now."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Prices at the provision shop", te: "కిరాణా షాపులో ధరలు" },
      scene: {
        en: "You go to Ayesha's provision shop for dal and oil.",
        te: "పప్పు, నూనె కోసం మీరు ఆయేషా గారి కిరాణా షాపుకి వెళ్ళారు.",
      },
      partner: { en: "Ayesha (shopkeeper)", te: "ఆయేషా (షాపు యజమాని)" },
      skills: [
        { id: "prices", label: { en: "Talking about prices", te: "ధరల గురించి మాట్లాడటం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning! What can I get you today?",
          te: "నమస్కారం! ఈ రోజు ఏం కావాలండీ?",
          hint: { en: "Greet her, and ask politely for one kilo of toor dal.", te: "పలకరించి, ఒక కిలో కందిపప్పు మర్యాదగా అడగండి." },
          replies: [
            { say: "Good morning! One kilo of toor dal, please.", good: true, skill: "prices" },
            {
              say: "Give one kilo dal. Quickly.",
              good: false,
              skill: "polite",
              react: { en: "Okay, okay. One minute, please.", te: "సరే, సరే. ఒక్క నిమిషం అండీ." },
            },
          ],
        },
        {
          partner: "That's 180 rupees. The price has gone up again.",
          te: "180 రూపాయలు. ధర మళ్ళీ పెరిగింది.",
          hint: { en: "Say it was much cheaper some years ago.", te: "కొన్నేళ్ళ క్రితం చాలా చవకగా ఉండేదని చెప్పండి." },
          replies: [
            { say: "Really? Dal used to be much cheaper.", good: true, skill: "prices" },
            { say: "Really? Dal use to be much cheaper.", good: false, skill: "prices" },
          ],
        },
        {
          partner: "Yes. It has gone up twice this year.",
          te: "అవునండీ. ఈ సంవత్సరం రెండుసార్లు పెరిగింది.",
          hint: { en: "Ask about the price of oil.", te: "నూనె ధర గురించి అడగండి." },
          replies: [
            { say: "Has the price of oil gone up too?", good: true, skill: "prices" },
            { say: "The price of oil also gone up?", good: false, skill: "prices", fixIt: "question" },
          ],
        },
        {
          partner: "No, oil has come down a little this month.",
          te: "లేదండీ, ఈ నెల నూనె కొంచెం తగ్గింది.",
          hint: { en: "Say you are glad to hear it, and ask for a litre.", te: "విని సంతోషంగా ఉందని చెప్పి, ఒక లీటర్ అడగండి." },
          replies: [
            { say: "That's good news! One litre of oil, please.", good: true, skill: "prices" },
            { say: "That's a good news! One litre of oil, please.", good: false, skill: "prices", fixIt: "article" },
          ],
        },
        {
          partner: "Here you are. That's 330 rupees altogether.",
          te: "ఇదిగోండి. మొత్తం 330 రూపాయలు.",
          hint: { en: "Thank her, and say goodbye until next week.", te: "థాంక్స్ చెప్పి, వచ్చే వారం కలుద్దామని బై చెప్పండి." },
          replies: [
            { say: "Thank you. See you next week!", good: true, skill: "polite" },
            { say: "Thank you. See you on next week!", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "How life has changed", te: "జీవితం ఎలా మారింది" },
      scene: {
        en: "Your friend's son Imran is visiting from Bengaluru. He wants to know how your town has changed.",
        te: "మీ స్నేహితుల అబ్బాయి ఇమ్రాన్ గారు బెంగళూరు నుంచి వచ్చారు. మీ ఊరు ఎలా మారిందో తెలుసుకోవాలని ఆయనకి ఉంది.",
      },
      partner: { en: "Imran (a friend's son)", te: "ఇమ్రాన్ (స్నేహితుల అబ్బాయి)" },
      voice: "b",
      skills: [
        { id: "change", label: { en: "Talking about change", te: "మార్పుల గురించి మాట్లాడటం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "How long have you lived in this town?",
          te: "మీరు ఈ ఊరిలో ఎంత కాలంగా ఉంటున్నారు?",
          hint: { en: "Say more than thirty years.", te: "ముప్పై ఏళ్ళకు పైగా అని చెప్పండి." },
          replies: [
            { say: "I have lived here for more than thirty years.", good: true, skill: "change" },
            { say: "I am living here for more than thirty years.", good: false, skill: "change", fixIt: "duration" },
          ],
        },
        {
          partner: "Has the town changed a lot?",
          te: "ఊరు చాలా మారిందా?",
          hint: { en: "Say yes, and say how it is still growing.", te: "అవునని చెప్పి, ఊరు ఇంకా ఎలా పెరుగుతోందో చెప్పండి." },
          replies: [
            { say: "Yes, it's getting bigger and more crowded every year.", good: true, skill: "change" },
            { say: "Yes, it getting bigger and more crowded every year.", good: false, skill: "change", fixIt: "be" },
          ],
        },
        {
          partner: "What about shopping? Do people still go to the market?",
          te: "మరి షాపింగ్? ఇంకా మార్కెట్‌కి వెళ్తున్నారా?",
          hint: { en: "Say many people now order things on the phone.", te: "చాలామంది ఇప్పుడు ఫోన్‌లో ఆర్డర్ చేస్తున్నారని చెప్పండి." },
          replies: [
            { say: "Many people have started ordering things online.", good: true, skill: "change" },
            { say: "Many peoples have started ordering things online.", good: false, skill: "change", fixIt: "plural" },
          ],
        },
        {
          partner: "And prices? My father says everything was cheap then.",
          te: "మరి ధరలు? అప్పుడు అన్నీ చవకగా ఉండేవని మా నాన్నగారు అంటారు.",
          hint: { en: "Agree, and give the old price of a bus ticket: fifty paise.", te: "ఒప్పుకుని, బస్ టికెట్ పాత ధర చెప్పండి: యాభై పైసలు." },
          replies: [
            { say: "Yes, a bus ticket used to cost fifty paise!", good: true, skill: "change" },
            {
              say: "Your father is old. He doesn't remember well.",
              good: false,
              skill: "polite",
              react: { en: "Oh! He remembers very well, actually.", te: "అయ్యో! ఆయనకి బాగానే గుర్తుందండీ." },
            },
          ],
        },
        {
          partner: "Fifty paise! Things have really changed.",
          te: "యాభై పైసలా! నిజంగా చాలా మారిపోయింది.",
          hint: { en: "Agree, and invite him in for coffee.", te: "ఒప్పుకుని, కాఫీకి లోపలికి రమ్మని పిలవండి." },
          replies: [
            { say: "Yes, they have. Come in, let's have some coffee.", good: true, skill: "polite" },
            { say: "Yes, they have. Come in, let's having some coffee.", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};
