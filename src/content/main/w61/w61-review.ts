import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 61, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick headline-to-sentence round, and a story. */

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
  id: "w61-review",
  kind: "review",
  title: { en: "In the News", te: "వార్తల్లో" },
  extras: [
    pick("q1", "Heavy Rains Hit Vijayawada means it ___ heavily yesterday.", "Heavy Rains Hit Vijayawada అంటే నిన్న బాగా వర్షం పడిందని.", ["rained", "rains", "is raining"], 0, {
      en: "Headlines use the present, but news you tell about yesterday takes the past.",
      te: "హెడ్‌లైన్స్‌లో present ఉంటుంది; కానీ నిన్నటి వార్త మీరు చెప్పేటప్పుడు past వాడాలి.",
    }),
    pick(
      "q2",
      "New Flyover Opened means a new flyover ___ opened.",
      "New Flyover Opened అంటే కొత్త ఫ్లైఓవర్‌ని ప్రారంభించారని.",
      ["was", "were", "did"],
      0,
      {
        en: "Headlines drop was, but a full sentence needs it; one flyover takes was.",
        te: "హెడ్‌లైన్స్‌లో was ఉండదు, కానీ పూర్తి వాక్యంలో కావాలి; ఒక్క ఫ్లైఓవర్ కాబట్టి was.",
      },
      "be",
    ),
    pick("q3", "Metro to Start in May means the metro ___ start in May.", "Metro to Start in May అంటే మే నెలలో మెట్రో మొదలవుతుందని.", ["will", "is", "to"], 0, {
      en: "In a headline, to + verb is the future; a full sentence uses will instead.",
      te: "హెడ్‌లైన్‌లో to + verb అంటే భవిష్యత్తు; పూర్తి వాక్యంలో దానికి బదులు will వాడాలి.",
    }),
    pick("q4", "Did you hear ___ the new bus to Srisailam?", "శ్రీశైలానికి కొత్త బస్సు గురించి విన్నారా?", ["about", "that", "for"], 0, {
      en: "Before a thing like a bus, use hear about; that comes before a full sentence.",
      te: "బస్సు లాంటి ఒక విషయం ముందు hear about; that తర్వాత పూర్తి వాక్యం రావాలి.",
    }),
    pick(
      "q5",
      "Is it true ___ banks are closed for a week?",
      "బ్యాంకులు వారం రోజులు మూసి ఉంటాయట, నిజమేనా?",
      ["that", "what", "if"],
      0,
      {
        en: "After Is it true, the news comes after that, like the Telugu అని.",
        te: "Is it true తర్వాత వార్త that తో మొదలవుతుంది; తెలుగులో 'అని' లాగా.",
      },
    ),
    pick(
      "q6",
      "I ___ this forward. Let's check it first.",
      "ఈ forward ని నేను నమ్మట్లేదు. ముందు చెక్ చేద్దాం.",
      ["don't believe", "am not believing", "not believe"],
      0,
      {
        en: "Believe is a thought, not an action, so it takes no -ing; not needs do before it.",
        te: "believe ఒక ఆలోచన, పని కాదు; అందుకే -ing రాదు. not ముందు do కావాలి.",
      },
      "state-ing",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "The Calf in the Canal", te: "కాలువలో దూడ" },
      teller: { en: "Srinivas", te: "శ్రీనివాస్" },
      voice: "b",
      parts: [
        {
          en: "Last Sunday, it rained heavily in our town. In the evening, I went for a walk by the canal. Suddenly, I heard a loud cry from the water. A small calf was stuck near the bank.",
          te: "పోయిన ఆదివారం మా ఊళ్ళో బాగా వర్షం పడింది. సాయంత్రం కాలువ పక్కన నడకకి వెళ్ళాను. ఉన్నట్టుండి నీళ్ళలోంచి ఒక పెద్ద అరుపు వినిపించింది. ఒక చిన్న దూడ ఒడ్డు దగ్గర ఇరుక్కుపోయింది.",
        },
        {
          en: "I am seventy, so I could not go into the water. I called two young men from the road. Together, we pulled the calf out with a rope. Its owner, Rani, came running and thanked us again and again.",
          te: "నాకు డెబ్బై ఏళ్ళు, అందుకే నీళ్ళలోకి దిగలేకపోయాను. రోడ్డు మీద వెళ్తున్న ఇద్దరు యువకుల్ని పిలిచాను. ముగ్గురం కలిసి తాడుతో దూడని బయటకు లాగాం. దాని యజమాని రాణి గారు పరిగెత్తుకుంటూ వచ్చి మాకు మళ్ళీ మళ్ళీ థాంక్స్ చెప్పారు.",
        },
        {
          en: "Rani took a photo of us with the calf. Her cousin works at the local paper. On Monday morning, I was at Raju's tea stall as usual. Raju showed me the paper and smiled.",
          te: "రాణి గారు దూడతో పాటు మా ఫోటో తీశారు. వాళ్ళ కజిన్ లోకల్ పేపర్‌లో పని చేస్తారు. సోమవారం పొద్దున ఎప్పటిలాగే రాజు గారి టీ కొట్టు దగ్గర ఉన్నాను. రాజు గారు నాకు పేపర్ చూపించి నవ్వారు.",
        },
        {
          en: "The headline said Retired Teacher Saves Calf From Canal. Our photo was there too, on page three! Everyone at the stall wanted to see it. Raju even gave me my tea for free.",
          te: "హెడ్‌లైన్‌లో 'కాలువలోంచి దూడను కాపాడిన రిటైర్డ్ టీచర్' అని ఉంది. మూడో పేజీలో మా ఫోటో కూడా ఉంది! టీ కొట్టు దగ్గర అందరూ దాన్ని చూడాలనుకున్నారు. రాజు గారు ఆ రోజు నా టీకి డబ్బులు కూడా తీసుకోలేదు.",
        },
        {
          en: "By evening, the story was much bigger. A forward said a teacher saved ten cows from a flood! My friend Gopal called me and asked if it was true. I laughed and told him the real story.",
          te: "సాయంత్రానికి ఆ కథ చాలా పెద్దదైపోయింది. ఒక టీచర్ వరదలోంచి పది ఆవుల్ని కాపాడారని ఒక forward వచ్చింది! నా స్నేహితుడు గోపాల్ గారు ఫోన్ చేసి అది నిజమేనా అని అడిగారు. నేను నవ్వి, జరిగిన అసలు కథ చెప్పాను.",
        },
        {
          en: "But the paper had it right: one calf and three helpers. Now Rani brings me a glass of milk every Sunday. And I always read the whole story, not only the headline.",
          te: "కానీ పేపర్‌లో ఉన్నదే నిజం: ఒక దూడ, మేము ముగ్గురం. ఇప్పుడు రాణి గారు ప్రతి ఆదివారం నాకు ఒక గ్లాసు పాలు తెచ్చిస్తారు. ఇక నేను ఎప్పుడూ హెడ్‌లైన్ ఒక్కటే కాదు, మొత్తం వార్త చదువుతాను.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A man who saved a calf and was in the news", "A flood that closed the schools", "A fake message about the banks"],
          answer: 0,
        },
        {
          prompt: { en: "Who pulled the calf out of the water?", te: "దూడని నీళ్ళలోంచి ఎవరు బయటకు లాగారు?" },
          options: ["Srinivas and two young men", "Rani and her cousin", "Raju from the tea stall"],
          answer: 0,
        },
        {
          prompt: { en: "What did the headline say?", te: "హెడ్‌లైన్‌లో ఏముంది?" },
          options: ["Retired Teacher Saves Calf From Canal", "Teacher Jumps Into Flood", "Ten Cows Saved From Flood"],
          answer: 0,
        },
        {
          prompt: { en: "What does Rani bring him every Sunday?", te: "ప్రతి ఆదివారం రాణి గారు ఆయనకి ఏం తెచ్చిస్తారు?" },
          options: ["A glass of milk", "The newspaper", "A cup of tea"],
          answer: 0,
        },
      ],
    },
  ],
};
