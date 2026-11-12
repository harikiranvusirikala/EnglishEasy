import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 44, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick round on -est, word order and by, and a story. */

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
  id: "w44-review",
  kind: "review",
  title: { en: "Choosing Clothes", te: "బట్టలు ఎంచుకోవడం" },
  extras: [
    pick("q1", "This is the ___ shirt in the shop.", "ఈ షాపులో అన్నిటికంటే చవకైన చొక్కా ఇదే.", ["cheapest", "cheaper", "most cheap"], 0, {
      en: "For one out of many, a short word takes -est after the.",
      te: "చాలా వాటిలో ఒకటి అయితే, చిన్న పదానికి the తర్వాత -est వస్తుంది.",
    }),
    pick("q2", "That's the ___ saree here.", "ఇక్కడ అన్నిటికంటే అందమైన చీర అదే.", ["most beautiful", "beautifulest", "more beautiful"], 0, {
      en: "Beautiful is a long word, so it takes most instead of -est.",
      te: "beautiful పెద్ద పదం; అందుకే -est కాదు, most వాడాలి.",
    }),
    pick("q3", "I want a ___ saree.", "నాకు ఒక మంచి ఎర్రటి కాటన్ చీర కావాలి.", ["nice red cotton", "red nice cotton", "cotton red nice"], 0, {
      en: "First what you think, then the colour, then the material.",
      te: "ముందు మీ అభిప్రాయం, తర్వాత రంగు, తర్వాత బట్ట రకం.",
    }),
    pick("q4", "It's too tight. Do you have a ___ size?", "ఇది చాలా బిగుతుగా ఉంది. ఇంకా పెద్ద సైజు ఉందా?", ["bigger", "biggest", "more big"], 0, {
      en: "You compare it with the one you are wearing, so use -er, not -est.",
      te: "వేసుకున్నదానితో పోలుస్తున్నారు; అందుకే -est కాదు, -er.",
    }),
    pick(
      "q5",
      "It doesn't fit ___.",
      "ఇది నాకు సరిపోవట్లేదు.",
      ["me", "to me", "for me"],
      0,
      {
        en: "Fit takes the person straight after it, with no to or for.",
        te: "fit తర్వాత నేరుగా వ్యక్తి వస్తారు; to, for రావు.",
      },
      "preposition",
    ),
    pick(
      "q6",
      "Please stitch this blouse ___ Friday.",
      "ఈ బ్లౌజ్ శుక్రవారం లోపు కుట్టి ఇవ్వండి.",
      ["by", "until", "within"],
      0,
      {
        en: "For the last day of a job, use by; it means the same as Telugu లోపు.",
        te: "పని అయిపోవాల్సిన ఆఖరి రోజుకి by; తెలుగులో 'లోపు' లాగే.",
      },
      "preposition",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "The Shirt for Ugadi", te: "ఉగాది చొక్కా" },
      teller: { en: "Gopal", te: "గోపాల్" },
      voice: "b",
      parts: [
        {
          en: "Last year, my friend Ramana invited me to his housewarming on Ugadi. I wanted a new shirt for the day. So I went to the biggest cloth shop in Vijayawada.",
          te: "పోయిన సంవత్సరం ఉగాది రోజు నా స్నేహితుడు రమణ గారు వాళ్ళ గృహప్రవేశానికి నన్ను పిలిచారు. ఆ రోజుకి నాకు ఒక కొత్త చొక్కా కావాలనిపించింది. అందుకే విజయవాడలో అన్నిటికంటే పెద్ద బట్టల షాపుకి వెళ్ళాను.",
        },
        {
          en: "The shop assistant showed me many shirts. The most expensive one was a lovely cream silk shirt. But I chose a nice light blue cotton shirt. It was cooler, and much cheaper.",
          te: "షాపు అసిస్టెంట్ గారు నాకు చాలా చొక్కాలు చూపించారు. అన్నిటికంటే ఖరీదైనది ఒక అందమైన క్రీమ్ రంగు పట్టు చొక్కా. కానీ నేను ఒక మంచి లేత నీలం కాటన్ చొక్కా ఎంచుకున్నాను. అది ఇంకా చల్లగా ఉంటుంది, చాలా చవక కూడా.",
        },
        {
          en: "I was in a hurry, so I didn't try it on. At home, I put it on and looked in the mirror. It was too tight at the shoulders, and the sleeves were too long!",
          te: "నేను హడావుడిలో ఉన్నాను, అందుకే వేసుకుని చూడలేదు. ఇంట్లో వేసుకుని అద్దంలో చూసుకున్నాను. భుజాల దగ్గర చాలా బిగుతుగా ఉంది, చేతులు మరీ పొడుగ్గా ఉన్నాయి!",
        },
        {
          en: "The next day, I took it to Rahim, the tailor in our colony. He made the sleeves a little shorter. But he could not make the shoulders bigger.",
          te: "మర్నాడు దాన్ని మా కాలనీలో టైలర్ రహీమ్ గారి దగ్గరికి తీసుకెళ్ళాను. ఆయన చేతులు కొంచెం పొట్టిగా చేశారు. కానీ భుజాలు పెద్దగా చేయలేకపోయారు.",
        },
        {
          en: "So I went back to the shop with the bill. Luckily, they gave me a bigger size. This time, I tried it on first. It fitted well!",
          te: "అందుకే బిల్లు తీసుకుని మళ్ళీ షాపుకి వెళ్ళాను. అదృష్టం కొద్దీ, వాళ్ళు పెద్ద సైజు ఇచ్చారు. ఈసారి ముందే వేసుకుని చూశాను. బాగా సరిపోయింది!",
        },
        {
          en: "At the housewarming, everyone liked my shirt. Ramana laughed when I told him the whole story. Now I always try clothes on before I pay.",
          te: "గృహప్రవేశంలో అందరికీ నా చొక్కా నచ్చింది. మొత్తం కథ చెప్తే రమణ గారు నవ్వారు. ఇప్పుడు డబ్బు కట్టే ముందు ఎప్పుడూ బట్టలు వేసుకుని చూస్తాను.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A new shirt that did not fit", "A trip to a temple", "Learning to stitch clothes"],
          answer: 0,
        },
        {
          prompt: { en: "Why did Gopal choose the blue cotton shirt?", te: "గోపాల్ గారు నీలం కాటన్ చొక్కా ఎందుకు ఎంచుకున్నారు?" },
          options: ["It was cooler and cheaper.", "It was the most expensive.", "Ramana chose it for him."],
          answer: 0,
        },
        {
          prompt: { en: "What could the tailor not do?", te: "టైలర్ గారు ఏం చేయలేకపోయారు?" },
          options: ["Make the shoulders bigger", "Make the sleeves shorter", "Finish it in one day"],
          answer: 0,
        },
        {
          prompt: { en: "What does Gopal always do now?", te: "ఇప్పుడు గోపాల్ గారు ఎప్పుడూ ఏం చేస్తారు?" },
          options: ["He tries clothes on before he pays.", "He buys only silk shirts.", "He goes to the tailor first."],
          answer: 0,
        },
      ],
    },
  ],
};
