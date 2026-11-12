import type { ConversationDay } from "../../types";

/** Week 56, Day 6 (CURRICULUM §5): Conversation Day — at a handloom exhibition, and explaining the signs at a bus station. */
export const day: ConversationDay = {
  id: "w56-conversation",
  kind: "conversation",
  title: { en: "At a Handloom Exhibition", te: "చేనేత ఎగ్జిబిషన్" },
  summary: {
    en: "Use the whole week: read labels and ask questions at a handloom exhibition, and explain the signs at a bus station to a visitor.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: చేనేత ఎగ్జిబిషన్‌లో లేబుల్స్ చదివి ప్రశ్నలు అడగండి, బస్ స్టేషన్‌లో బోర్డులు ఒక అతిథికి వివరించండి.",
  },
  topics: ["shopping", "market", "travel"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Sarees from Venkatagiri", te: "వెంకటగిరి చీరలు" },
    lines: [
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Good morning! Are these sarees from Venkatagiri?", te: "నమస్కారం! ఈ చీరలు వెంకటగిరివేనా?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Yes, madam. They're woven by hand in Venkatagiri, near Nellore.", te: "అవునండీ. నెల్లూరు దగ్గర వెంకటగిరిలో చేతితో నేస్తారు." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "They're beautiful. Is this one pure cotton?", te: "చాలా బాగున్నాయి. ఇది స్వచ్ఛమైన కాటనేనా?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Yes. Look, the Handloom Mark is printed on the label.", te: "అవును. చూడండి, లేబుల్ మీద Handloom Mark ప్రింట్ చేసి ఉంది." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "How much is it? I can't see the price.", te: "ఇది ఎంత? ధర కనిపించట్లేదు." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "The price is written on the back. It's 2500 rupees.", te: "ధర వెనకవైపు రాసి ఉంది. 2500 రూపాయలు." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Is there a discount at the exhibition?", te: "ఎగ్జిబిషన్‌లో ఏమైనా discount ఉందా?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Yes, 200 rupees off on every saree.", te: "ఉందండీ, ప్రతి చీర మీద 200 రూపాయలు తగ్గింపు." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Good. I'll take it. Can I pay by UPI?", te: "బాగుంది. తీసుకుంటాను. UPI తో కట్టొచ్చా?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Of course. The QR code is kept on the table.", te: "తప్పకుండా. QR code టేబుల్ మీద పెట్టి ఉంది." },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At a handloom exhibition", "At a railway station", "At a kirana shop"],
        answer: 0,
      },
      {
        prompt: { en: "Where are the sarees woven?", te: "ఈ చీరలు ఎక్కడ నేస్తారు?" },
        options: ["In Venkatagiri", "In Pochampally", "In Guntur"],
        answer: 0,
      },
      {
        prompt: { en: "Where is the price written?", te: "ధర ఎక్కడ రాసి ఉంది?" },
        options: ["On the back", "On the front", "On the table"],
        answer: 0,
      },
      {
        prompt: { en: "How will Anitha pay?", te: "అనిత గారు ఎలా కడతారు?" },
        options: ["By UPI", "In cash", "By card"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "At the exhibition, you like some brass lamps. Ask where they are made.",
        te: "ఎగ్జిబిషన్‌లో మీకు కొన్ని ఇత్తడి దీపాలు నచ్చాయి. అవి ఎక్కడ తయారవుతాయో అడగండి.",
      },
      expected: ["Where are these lamps made?", "Where are they made?", "Excuse me, where are these lamps made?"],
      options: ["Where are these lamps made?", "Where these lamps are made?", "Where are these lamps make?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your friend asks about the woman at the saree stall. Say she weaves the sarees herself.",
        te: "చీరల స్టాల్‌లో ఉన్నావిడ గురించి స్నేహితులు అడుగుతున్నారు. ఆవిడే స్వయంగా చీరలు నేస్తారని చెప్పండి.",
      },
      expected: ["She weaves the sarees herself.", "She weaves them herself.", "She weaves them by hand."],
      options: ["She weaves the sarees herself.", "She weave the sarees herself.", "She is weave the sarees herself."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "At the bus station, a man lights a cigarette near the gate. Tell him kindly it is not permitted.",
        te: "బస్ స్టేషన్‌లో గేట్ దగ్గర ఒకాయన సిగరెట్ వెలిగిస్తున్నారు. ఇక్కడ కుదరదని ఆయనకి మర్యాదగా చెప్పండి.",
      },
      expected: ["Sorry, smoking is not permitted here.", "Excuse me, smoking is prohibited here.", "Sorry, smoking is not allowed here."],
      options: ["Sorry, smoking is not permitted here.", "Sorry, smoking is not permit here.", "Stop it! Can't you read the board?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Kalamkari at the exhibition", te: "ఎగ్జిబిషన్‌లో కలంకారీ" },
      scene: {
        en: "At the handloom exhibition, Kavitha sells Kalamkari dupattas from Pedana, near Machilipatnam.",
        te: "చేనేత ఎగ్జిబిషన్‌లో కవిత గారు మచిలీపట్నం దగ్గర పెడన నుంచి తెచ్చిన కలంకారీ దుపట్టాలు అమ్ముతున్నారు.",
      },
      partner: { en: "Kavitha (seller)", te: "కవిత (అమ్మేవారు)" },
      skills: [
        { id: "ask", label: { en: "Asking how it is made", te: "ఎలా చేశారో అడగడం" } },
        { id: "buy", label: { en: "Buying", te: "కొనడం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Welcome! These are Kalamkari dupattas from Pedana.",
          te: "రండి! ఇవి పెడన కలంకారీ దుపట్టాలు.",
          hint: { en: "Greet her, and ask if the designs are printed by hand.", te: "నమస్కారం చెప్పి, డిజైన్లు చేత్తో ప్రింట్ చేసినవా అని అడగండి." },
          replies: [
            { say: "Hello! Are the designs printed by hand?", good: true, skill: "ask" },
            { say: "Hello! Does the designs printed by hand?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "Yes. Each design is printed with wooden blocks.",
          te: "అవునండీ. ప్రతి డిజైన్ చెక్క అచ్చులతో ప్రింట్ చేస్తారు.",
          hint: { en: "Say they are lovely, and ask about the colours: natural or not?", te: "చాలా బాగున్నాయని చెప్పి, రంగుల గురించి అడగండి: సహజమైనవా కాదా?" },
          replies: [
            { say: "Lovely! Are natural colours used?", good: true, skill: "ask" },
            { say: "Lovely! Natural colours used?", good: false, skill: "ask", fixIt: "be" },
          ],
        },
        {
          partner: "Yes, only natural colours. This red one is 600 rupees.",
          te: "అవును, సహజమైన రంగులే. ఈ ఎరుపుది 600 రూపాయలు.",
          hint: { en: "Say you want two, and ask politely for a small discount.", te: "రెండు కావాలని చెప్పి, కొంచెం discount మర్యాదగా అడగండి." },
          replies: [
            { say: "I'll take two. Could you give me a small discount?", good: true, skill: "buy" },
            { say: "I'll take two dupatta. Could you give me a small discount?", good: false, skill: "buy", fixIt: "plural" },
            {
              say: "Two. Give discount, no? Everybody gives.",
              good: false,
              skill: "polite",
              react: { en: "Please ask nicely! But okay, 1100 for two.", te: "కొంచెం మర్యాదగా అడగండి! సరే, రెండూ 1100." },
            },
          ],
        },
        {
          partner: "Okay, 1100 rupees for two. Shall I pack them?",
          te: "సరే, రెండూ 1100 రూపాయలు. ప్యాక్ చేయనా?",
          hint: { en: "Say yes, and ask how to wash them.", te: "సరే అని, వాటిని ఎలా ఉతకాలో అడగండి." },
          replies: [
            { say: "Yes, please. How should I wash them?", good: true, skill: "ask" },
            { say: "Yes, please. How I should wash them?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "Wash them by hand in cold water. Thank you!",
          te: "చల్లటి నీళ్ళలో చేత్తో ఉతకండి. థాంక్యూ!",
          hint: { en: "Thank her, and say goodbye.", te: "థాంక్స్ చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Thank you. Have a nice day!", good: true, skill: "polite" },
            { say: "Thank you. Have nice day!", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Signs at the bus station", te: "బస్ స్టేషన్‌లో బోర్డులు" },
      scene: {
        en: "You are at the bus station in Vijayawada. Joseph, a visitor from Kerala, needs help with the signs.",
        te: "మీరు విజయవాడ బస్ స్టేషన్‌లో ఉన్నారు. కేరళ నుంచి వచ్చిన జోసెఫ్ గారికి బోర్డులు అర్థం కావట్లేదు.",
      },
      partner: { en: "Joseph (a visitor)", te: "జోసెఫ్ (ఊరికి వచ్చిన అతిథి)" },
      voice: "b",
      skills: [
        { id: "explain", label: { en: "Explaining signs", te: "బోర్డులు వివరించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Excuse me, I can't read Telugu. What does this board say?",
          te: "ఎక్స్‌క్యూజ్ మీ, నాకు తెలుగు చదవడం రాదు. ఈ బోర్డు మీద ఏం రాసి ఉంది?",
          hint: { en: "Explain the board: no smoking anywhere inside the bus station.", te: "బోర్డు అర్థం చెప్పండి: బస్ స్టేషన్ లోపల ఎక్కడా సిగరెట్ తాగకూడదు." },
          replies: [
            { say: "It says smoking is prohibited inside the bus station.", good: true, skill: "explain" },
            { say: "It say smoking is prohibited inside the bus station.", good: false, skill: "explain", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "I see. Isn't there a place to leave my bag?",
          te: "అలాగా. నా బ్యాగ్ పెట్టడానికి ఇక్కడ ఏ చోటూ లేదా?",
          hint: { en: "Answer the question: there is a cloak room, near platform two.", te: "జవాబు చెప్పండి: ప్లాట్‌ఫాం రెండు దగ్గర cloak room ఉంది." },
          replies: [
            { say: "Yes, there is. The cloak room is near platform two.", good: true, skill: "explain" },
            { say: "No, there is. The cloak room is near platform two.", good: false, skill: "explain", fixIt: "negative-answer" },
          ],
        },
        {
          partner: "Thank you. Where do the Guntur buses leave from?",
          te: "థాంక్స్. గుంటూరు బస్సులు ఎక్కడి నుంచి బయలుదేరుతాయి?",
          hint: { en: "Say platform five, and tell him to look for the board with the town's name.", te: "ప్లాట్‌ఫాం ఐదు అని చెప్పి, ఊరి పేరున్న బోర్డు చూడమని చెప్పండి." },
          replies: [
            { say: "They leave from platform five. Look for the Guntur board.", good: true, skill: "explain" },
            { say: "They leave from platform five. Look for Guntur board.", good: false, skill: "explain", fixIt: "article" },
          ],
        },
        {
          partner: "You've been very kind. Thank you so much!",
          te: "మీరు చాలా సహాయం చేశారు. చాలా థాంక్స్!",
          hint: { en: "Reply kindly, and wish him a good trip.", te: "మర్యాదగా జవాబు చెప్పి, ప్రయాణం బాగా జరగాలని చెప్పండి." },
          replies: [
            { say: "My pleasure. Have a good trip to Guntur!", good: true, skill: "polite" },
            {
              say: "Okay, okay. Now go, I'm busy.",
              good: false,
              skill: "polite",
              react: { en: "Oh! Sorry to trouble you.", te: "అయ్యో! ఇబ్బంది పెట్టినందుకు సారీ." },
            },
          ],
        },
      ],
    },
  ],
};
