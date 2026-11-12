import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 57, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick said / told / asked round, and a story. */

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
  id: "w57-review",
  kind: "review",
  title: { en: "Passing It On", te: "మాట అందించడం" },
  extras: [
    pick("q1", "Ramesh ___ me he was busy.", "తను బిజీగా ఉన్నానని రమేష్ గారు నాకు చెప్పారు.", ["told", "said", "say"], 0, {
      en: "With a person like me after it, the verb is told, not said.",
      te: "తర్వాత me లాగా మనిషి ఉంటే said కాదు, told వాడాలి.",
    }),
    pick("q2", "The doctor said my BP ___ normal.", "నా BP నార్మల్‌గా ఉందని డాక్టర్ గారు చెప్పారు.", ["was", "were", "be"], 0, {
      en: "BP is one thing, so it takes was; passed on later, is moves back to was.",
      te: "BP ఒక్కటే, అందుకే was; తర్వాత ఇంకొకరికి చెప్పేటప్పుడు is కాస్తా was అవుతుంది.",
    }),
    pick("q3", "Dr Kavitha told me ___ walk every evening.", "రోజూ సాయంత్రం నడవమని డాక్టర్ కవిత గారు చెప్పారు.", ["to", "for", "that"], 0, {
      en: "After told me, an action takes to before the plain verb.",
      te: "told me తర్వాత పనికి, verb ముందు to వస్తుంది.",
    }),
    pick(
      "q4",
      "What did the nurse ___?",
      "నర్సు ఏం చెప్పారు?",
      ["say", "said", "told"],
      0,
      {
        en: "Did already shows the past, so the verb after it stays plain.",
        te: "did లోనే past ఉంది; అందుకే దాని తర్వాత verb అలాగే ఉంటుంది.",
      },
      "question",
    ),
    pick("q5", "The electrician said he ___ come on Thursday.", "గురువారం వస్తానని ఎలక్ట్రీషియన్ గారు చెప్పారు.", ["would", "was", "is"], 0, {
      en: "His words had will; passed on later, will usually becomes would.",
      te: "ఆయన మాటలో will ఉంది; తర్వాత చెప్పేటప్పుడు అది మామూలుగా would అవుతుంది.",
    }),
    pick(
      "q6",
      "I ___ waiting for the doctor since ten o'clock.",
      "పది గంటల నుంచి డాక్టర్ గారి కోసం ఎదురుచూస్తున్నాను.",
      ["have been", "am", "was being"],
      0,
      {
        en: "Waiting from a past time until now takes have been with -ing; Telugu uses the present.",
        te: "గతంలో మొదలై ఇప్పటిదాకా సాగుతుంటే have been + -ing; తెలుగులో present తో అనేస్తాం.",
      },
      "duration",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "Two Hours or Two Days?", te: "రెండు గంటలా, రెండు రోజులా?" },
      teller: { en: "Kamala", te: "కమల" },
      voice: "a",
      parts: [
        {
          en: "Last Sunday, our colony secretary, Radha, sent me a message about the water. I was in a hurry, so I read it very quickly. I told my neighbour Usha the water would stop on Tuesday for two days.",
          te: "పోయిన ఆదివారం, మా కాలనీ సెక్రటరీ రాధ గారు నీళ్ళ గురించి నాకు ఒక మెసేజ్ పంపారు. నేను హడావిడిలో ఉన్నాను, అందుకే దాన్ని చాలా త్వరగా చదివేశాను. మంగళవారం రెండు రోజులు నీళ్ళు రావని పక్కింటి ఉష గారికి చెప్పాను.",
        },
        {
          en: "Usha told Joseph upstairs, and Joseph told his friend Satish. Satish said the whole colony would have no water for two days! Soon, everyone in our lane knew the news.",
          te: "ఉష గారు పై ఇంట్లో ఉండే జోసెఫ్ గారికి చెప్పారు, జోసెఫ్ గారు తన స్నేహితుడు సతీష్ గారికి చెప్పారు. రెండు రోజులు కాలనీ మొత్తానికీ నీళ్ళు ఉండవని సతీష్ గారు అందరికీ చెప్పారు! కాసేపట్లోనే మా వీధిలో అందరికీ ఈ వార్త తెలిసిపోయింది.",
        },
        {
          en: "By Monday evening, everyone was filling buckets and drums. The kirana shop sold all its water cans. Joseph even said he would go to his sister's house in Guntur.",
          te: "సోమవారం సాయంత్రానికి అందరూ బకెట్లు, డ్రమ్ములు నింపుతున్నారు. కిరాణా షాపులో వాటర్ క్యాన్లు అన్నీ అమ్ముడైపోయాయి. గుంటూరులో తన సిస్టర్ వాళ్ళింటికి వెళ్తానని జోసెఫ్ గారు కూడా అన్నారు.",
        },
        {
          en: "Then Radha called me. She said people were calling her all evening. She asked me to read her message again, slowly.",
          te: "అప్పుడు రాధ గారు నాకు ఫోన్ చేశారు. సాయంత్రం అంతా జనం తనకి ఫోన్ చేస్తూనే ఉన్నారని చెప్పారు. తన మెసేజ్‌ని మళ్ళీ, మెల్లగా చదవమని నన్ను అడిగారు.",
        },
        {
          en: "It said two hours, from ten to twelve, not two days! I felt very bad. I called Usha and Joseph and said sorry. They laughed, and Joseph told me not to worry.",
          te: "అందులో పది నుంచి పన్నెండు దాకా, రెండు గంటలు అని ఉంది, రెండు రోజులు కాదు! నాకు చాలా బాధగా అనిపించింది. ఉష గారికి, జోసెఫ్ గారికి ఫోన్ చేసి సారీ చెప్పాను. వాళ్ళు నవ్వారు, కంగారు పడొద్దని జోసెఫ్ గారు నాకు చెప్పారు.",
        },
        {
          en: "On Tuesday, the water stopped at ten and came back at twelve. Now, before I pass on a message, I read it twice. And sometimes I just forward it!",
          te: "మంగళవారం పదింటికి నీళ్ళు ఆగిపోయి, పన్నెండింటికి మళ్ళీ వచ్చాయి. ఇప్పుడు ఏదైనా మెసేజ్ అందించే ముందు, దాన్ని రెండుసార్లు చదువుతాను. ఒక్కోసారి నేరుగా forward చేసేస్తాను!",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A message that changed as people passed it on", "A new water tank for the colony", "A fight between two neighbours"],
          answer: 0,
        },
        {
          prompt: { en: "Why did Kamala make a mistake?", te: "కమల గారు ఎందుకు పొరపాటు చేశారు?" },
          options: ["She read the message too quickly", "Radha wrote the wrong time", "Usha told her two days"],
          answer: 0,
        },
        {
          prompt: { en: "What did Radha ask Kamala to do?", te: "రాధ గారు కమల గారిని ఏం చేయమని అడిగారు?" },
          options: ["Read the message again, slowly", "Call everyone in the lane", "Buy some water cans"],
          answer: 0,
        },
        {
          prompt: { en: "How long did the water really stop?", te: "నిజానికి నీళ్ళు ఎంతసేపు ఆగాయి?" },
          options: ["Two hours", "Two days", "Half a day"],
          answer: 0,
        },
      ],
    },
  ],
};
