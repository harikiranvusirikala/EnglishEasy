import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 56, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), plus a quick is made / was packed round, a sign, and a story. */

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
  id: "w56-review",
  kind: "review",
  title: { en: "Read the Label", te: "లేబుల్ చదవండి" },
  extras: [
    pick(
      "q1",
      "These sarees ___ woven by hand.",
      "ఈ చీరలు చేతితో నేసినవి.",
      ["are", "is", "do"],
      0,
      {
        en: "Many sarees take are; is is only for one thing.",
        te: "చాలా చీరలు కాబట్టి are; is ఒక్క వస్తువుకి మాత్రమే.",
      },
      "plural",
    ),
    pick("q2", "This oil was ___ in May.", "ఈ నూనె మేలో ప్యాక్ చేశారు.", ["packed", "pack", "packing"], 0, {
      en: "After was, use the done form packed, for something done to the oil.",
      te: "was తర్వాత పూర్తయిన రూపం packed రావాలి; నూనెకి ఆ పని జరిగింది.",
    }),
    pick(
      "q3",
      "It was packed ___ 12 May.",
      "దీన్ని మే 12న ప్యాక్ చేశారు.",
      ["on", "in", "at"],
      0,
      {
        en: "A date with a day number takes on; a month alone takes in.",
        te: "రోజుతో ఉన్న తేదీకి on; నెల మాత్రమే అయితే in.",
      },
      "preposition",
    ),
    pick(
      "q4",
      "Where ___ this pickle made?",
      "ఈ పచ్చడి ఎక్కడ తయారు చేస్తారు?",
      ["is", "does", "it"],
      0,
      {
        en: "A where question with made needs is before the thing; does goes with a plain verb.",
        te: "made తో where ప్రశ్నకి వస్తువు ముందు is కావాలి; does అయితే verb అలాగే ఉండాలి.",
      },
      "question",
    ),
    pick("q5", "Photography is not ___ inside the museum.", "మ్యూజియం లోపల ఫోటోలు తీయకూడదు.", ["permitted", "permit", "permitting"], 0, {
      en: "Signs use is not with the done form permitted; it means not allowed.",
      te: "బోర్డుల మీద is not తర్వాత పూర్తయిన రూపం permitted; అంటే not allowed.",
    }),
    pick(
      "q6",
      "Prasad ___ every toy by hand.",
      "ప్రసాద్ గారు ప్రతి బొమ్మకి చేత్తోనే రంగు వేస్తారు.",
      ["paints", "paint", "painting"],
      0,
      {
        en: "One person, like he, takes s on the verb for a habit.",
        te: "ఒక్కరి అలవాటు గురించి, he లాగా, చెప్తే verb కి s వస్తుంది.",
      },
      "he-she-s",
    ),
    {
      id: "q7",
      type: "choose",
      prompt: { en: "A board at the gate says: Parking is prohibited. What does it mean?", te: "గేట్ దగ్గర బోర్డు మీద Parking is prohibited అని ఉంది. దాని అర్థం ఏంటి?" },
      options: ["You must not park here.", "You can park here for free.", "Parking is only for buses."],
      answer: 0,
      why: {
        en: "Prohibited means a rule says no, so no one may leave a vehicle there.",
        te: "prohibited అంటే నియమం ఒప్పుకోదు; అక్కడ ఎవరూ బండి పెట్టకూడదు.",
      },
    },
    {
      id: "story",
      type: "story",
      title: { en: "The Saree From Pochampally", te: "పోచంపల్లి చీర" },
      teller: { en: "Geetha", te: "గీత" },
      voice: "a",
      parts: [
        {
          en: "Last month, our walking group went on a day trip to Pochampally. It is a small town near Hyderabad. It is known for its handloom sarees.",
          te: "పోయిన నెల మా వాకింగ్ గ్రూప్ అంతా ఒక రోజు పోచంపల్లి వెళ్ళాం. అది హైదరాబాద్ దగ్గర ఒక చిన్న ఊరు. అక్కడి చేనేత చీరలకి మంచి పేరు ఉంది.",
        },
        {
          en: "We visited the house of a weaver called Ramana. His loom was kept in the front room. The sound of the loom was like music.",
          te: "రమణ గారనే ఒక నేత కార్మికుడి ఇంటికి వెళ్ళాం. ఆయన మగ్గం ముందు గదిలో ఉంది. మగ్గం చప్పుడు సంగీతంలా వినిపించింది.",
        },
        {
          en: "Ramana showed us how the sarees are made. First, the threads are tied and coloured. Then they are woven on the loom by hand.",
          te: "చీరలు ఎలా తయారవుతాయో రమణ గారు మాకు చూపించారు. ముందు దారాలకి ముడులు వేసి రంగులు వేస్తారు. తర్వాత మగ్గం మీద చేతితో నేస్తారు.",
        },
        {
          en: "One saree takes many days of work. Every saree is a little different. I was surprised. So much work goes into one saree!",
          te: "ఒక చీరకి చాలా రోజుల పని పడుతుంది. ప్రతి చీర కొంచెం వేరుగా ఉంటుంది. నాకు ఆశ్చర్యం వేసింది. ఒక్క చీర వెనక ఎంత శ్రమ ఉంటుందో!",
        },
        {
          en: "Then I saw a blue saree with a red border. A label was tied to it: Handwoven in Pochampally. The price was 4000 rupees.",
          te: "అప్పుడు ఎర్ర అంచు ఉన్న ఒక నీలం చీర కనిపించింది. దానికి ఒక లేబుల్ కట్టి ఉంది: Handwoven in Pochampally. ధర 4000 రూపాయలు.",
        },
        {
          en: "I bought it for my sister's birthday. She loves it and wears it to every function. Now I always ask: Is it woven by hand?",
          te: "మా అక్క పుట్టినరోజుకి అది కొన్నాను. ఆవిడకి చాలా నచ్చింది, ప్రతి ఫంక్షన్‌కి అదే కట్టుకుంటారు. ఇప్పుడు నేను ఎప్పుడూ అడుగుతాను: ఇది చేతితో నేసిందేనా?",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A trip to see handloom weavers", "A visit to a hospital", "Buying vegetables at the market"],
          answer: 0,
        },
        {
          prompt: { en: "What is Pochampally known for?", te: "పోచంపల్లికి దేనితో పేరు?" },
          options: ["Handloom sarees", "Wooden toys", "Chillies"],
          answer: 0,
        },
        {
          prompt: { en: "What happens to the threads first?", te: "దారాలకి ముందు ఏం చేస్తారు?" },
          options: ["They are tied and coloured.", "They are washed in the river.", "They are sent to Hyderabad."],
          answer: 0,
        },
        {
          prompt: { en: "Who did Geetha buy the saree for?", te: "గీత గారు చీర ఎవరి కోసం కొన్నారు?" },
          options: ["Her sister", "Her neighbour", "Herself"],
          answer: 0,
        },
      ],
    },
  ],
};
