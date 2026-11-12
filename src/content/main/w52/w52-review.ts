import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 52, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick have to / allowed / before / until round, and a story. */

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
  id: "w52-review",
  kind: "review",
  title: { en: "Hospital Rules", te: "ఆసుపత్రి నియమాలు" },
  extras: [
    pick(
      "q1",
      "You ___ to sign this form before the operation.",
      "ఆపరేషన్‌కి ముందు మీరు ఈ form మీద సంతకం చేయాలి.",
      ["have", "has", "are"],
      0,
      {
        en: "With you, say have to; has to is only for one other person.",
        te: "you తో have to; has to ఇంకొక్క మనిషి గురించి చెప్పేటప్పుడు మాత్రమే.",
      },
      "he-she-s",
    ),
    pick("q2", "Only one attendant is ___ to stay at night.", "రాత్రి ఒక్క attendant ని మాత్రమే ఉండనిస్తారు.", ["allowed", "allow", "allowing"], 0, {
      en: "After is, the rule word is always allowed, with -ed at the end.",
      te: "is తర్వాత ఎప్పుడూ allowed అనాలి, చివర -ed తో.",
    }),
    pick(
      "q3",
      "Don't eat anything ___ the operation.",
      "ఆపరేషన్‌కి ముందు ఏమీ తినకండి.",
      ["before", "since", "ago"],
      0,
      {
        en: "Before shows the time ahead of an event; ago only comes after a length of time.",
        te: "ఒక సంఘటనకి ముందు అనడానికి before; ago ఎప్పుడూ 'రెండు రోజులు' లాంటి టైమ్ తర్వాతే వస్తుంది.",
      },
      "preposition",
    ),
    pick("q4", "Please wait here ___ the nurse calls your name.", "నర్సు గారు మీ పేరు పిలిచేదాకా ఇక్కడే ఉండండి.", ["until", "since", "from"], 0, {
      en: "Until means up to that moment; after it, you can move.",
      te: "until అంటే ఆ క్షణం వచ్చేదాకా; ఆ తర్వాత మీరు కదలొచ్చు.",
    }),
    pick(
      "q5",
      "Haven't you paid the bill yet? ___, I haven't.",
      "మీరు ఇంకా బిల్లు కట్టలేదా? లేదు, కట్టలేదు.",
      ["No", "Yes", "Not"],
      0,
      {
        en: "You have not paid, so the answer starts with No, to match the fact.",
        te: "మీరు కట్టలేదు, అందుకే జవాబు No తో మొదలవుతుంది; జరిగిన దాన్ని బట్టి.",
      },
      "negative-answer",
    ),
    pick(
      "q6",
      "Is this covered ___ the health scheme?",
      "ఇది health scheme లో కవర్ అవుతుందా?",
      ["by", "with", "from"],
      0,
      {
        en: "Covered takes by before the one who pays, never with or from.",
        te: "ఎవరు డబ్బు కడతారో చెప్పేటప్పుడు covered తర్వాత by వస్తుంది; with, from రావు.",
      },
      "preposition",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "Three Days in Ward Five", te: "ఐదో వార్డులో మూడు రోజులు" },
      teller: { en: "Usha", te: "ఉష" },
      voice: "a",
      parts: [
        {
          en: "Last month, I had a small operation at a hospital in Guntur. I was a little scared before it. My neighbour Rani came with me on admission day. The lady at the desk was very kind.",
          te: "పోయిన నెల గుంటూరులోని ఒక ఆసుపత్రిలో నాకు చిన్న ఆపరేషన్ జరిగింది. దానికి ముందు నాకు కొంచెం భయం వేసింది. admission రోజు మా పక్కింటి రాణి గారు నాతో వచ్చారు. desk దగ్గర ఉన్న ఆవిడ చాలా మర్యాదగా మాట్లాడారు.",
        },
        {
          en: "The night before the operation, the nurse explained the rules. I had to stop eating at ten. I wasn't allowed to drink water after six in the morning. I was hungry, but I followed every rule.",
          te: "ఆపరేషన్ ముందు రోజు రాత్రి నర్సు గారు నియమాలు చెప్పారు. పదింటికి తినడం ఆపేయాలి. పొద్దున ఆరు తర్వాత నీళ్ళు కూడా తాగకూడదు. ఆకలి వేసింది, కానీ ప్రతి నియమం పాటించాను.",
        },
        {
          en: "The operation took only forty minutes. When I woke up, Rani was there with a smile. Only one attendant was allowed at night, so she stayed with me. The night nurse came every two hours.",
          te: "ఆపరేషన్‌కి నలభై నిమిషాలే పట్టింది. నాకు మెలకువ వచ్చేసరికి రాణి గారు నవ్వుతూ అక్కడే ఉన్నారు. రాత్రి ఒక్క attendant నే ఉండనిస్తారు, అందుకే ఆవిడ నాతో ఉన్నారు. రాత్రి నర్సు గారు ప్రతి రెండు గంటలకి వచ్చి చూశారు.",
        },
        {
          en: "At two in the morning, my drip stopped. I pressed the call bell, and the nurse came at once. She changed the bottle and said: Don't worry, everything is fine. After that, I slept well.",
          te: "తెల్లవారుజామున రెండింటికి నా డ్రిప్ ఆగిపోయింది. call bell నొక్కాను, నర్సు గారు వెంటనే వచ్చారు. బాటిల్ మార్చి, 'కంగారు పడకండి, అంతా బాగానే ఉంది' అన్నారు. ఆ తర్వాత హాయిగా నిద్రపోయాను.",
        },
        {
          en: "The next day, friends from my colony came during visiting hours. They brought fruit, but I couldn't eat it until the evening. We talked and laughed until six. Then the guard said: Visiting hours are over.",
          te: "మరుసటి రోజు విజిటింగ్ అవర్స్‌లో మా కాలనీ స్నేహితులు వచ్చారు. పండ్లు తెచ్చారు, కానీ సాయంత్రం దాకా నేను తినలేకపోయాను. ఆరింటి దాకా మాట్లాడుకుంటూ నవ్వుకున్నాం. అప్పుడు గార్డు గారు 'విజిటింగ్ అవర్స్ అయిపోయాయి' అన్నారు.",
        },
        {
          en: "On the third day, Dr Mary came for rounds. She smiled and said: You can go home today. I paid the final bill and collected my discharge summary. Now I tell my friends: Follow the rules, and don't be scared.",
          te: "మూడో రోజు డాక్టర్ మేరీ గారు రౌండ్స్‌కి వచ్చారు. నవ్వుతూ 'ఈ రోజు మీరు ఇంటికి వెళ్ళొచ్చు' అన్నారు. ఫైనల్ బిల్లు కట్టి, discharge summary తీసుకున్నాను. ఇప్పుడు నా స్నేహితులకి చెప్తుంటాను: నియమాలు పాటించండి, భయపడకండి.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Usha's short stay in hospital", "A trip to the market in Guntur", "Rani's new job"],
          answer: 0,
        },
        {
          prompt: { en: "Who stayed with Usha at night?", te: "రాత్రి ఉష గారితో ఎవరు ఉన్నారు?" },
          options: ["Her neighbour Rani", "Dr Mary", "Her cousin"],
          answer: 0,
        },
        {
          prompt: { en: "What happened at two in the morning?", te: "తెల్లవారుజామున రెండింటికి ఏం జరిగింది?" },
          options: ["The drip stopped", "Usha felt hungry", "The doctor came"],
          answer: 0,
        },
        {
          prompt: { en: "When did Usha go home?", te: "ఉష గారు ఇంటికి ఎప్పుడు వెళ్ళారు?" },
          options: ["On the third day", "After ten days", "The next morning"],
          answer: 0,
        },
      ],
    },
  ],
};
