import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 55, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick travel-words round, and a story. */

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
  id: "w55-review",
  kind: "review",
  title: { en: "Ready for the Trip", te: "ప్రయాణానికి రెడీ" },
  extras: [
    pick(
      "q1",
      "We're leaving ___ Tirupati on Friday night.",
      "శుక్రవారం రాత్రి మేము తిరుపతికి బయలుదేరుతున్నాం.",
      ["for", "to", "at"],
      0,
      {
        en: "Leave for a place means start the journey there; here Telugu కి becomes for, not to.",
        te: "ఒక ఊరికి బయలుదేరడం అంటే leave for; ఇక్కడ తెలుగు 'కి' కి to కాదు, for వస్తుంది.",
      },
      "preposition",
    ),
    pick("q2", "We're going to ___ two nights near the temple.", "గుడి దగ్గర రెండు రాత్రులు ఉండబోతున్నాం.", ["stay", "staying", "stayed"], 0, {
      en: "After going to, the verb stays plain, with no -ing and no -ed.",
      te: "going to తర్వాత verb అలాగే ఉంటుంది; -ing గానీ -ed గానీ రావు.",
    }),
    pick(
      "q3",
      "I'd like two lower ___ in sleeper class.",
      "స్లీపర్ క్లాస్‌లో రెండు లోయర్ బెర్తులు కావాలి.",
      ["berths", "berth", "the berth"],
      0,
      {
        en: "After two, berth takes s; Telugu బెర్తులు also shows more than one.",
        te: "రెండు తర్వాత berth కి s వస్తుంది; తెలుగులోనూ 'బెర్తులు' అని ఎక్కువ అని తెలుస్తుంది.",
      },
      "plural",
    ),
    pick("q4", "___ there hot water in the morning?", "పొద్దున వేడి నీళ్ళు వస్తాయా?", ["Is", "Are", "Does"], 0, {
      en: "Water is not counted one by one, so the question starts with is.",
      te: "నీళ్ళని ఒక్కొక్కటిగా లెక్కపెట్టం, అందుకే ప్రశ్న is తో మొదలవుతుంది.",
    }),
    pick(
      "q5",
      "We've been ___ in the queue since six.",
      "ఆరు గంటల నుంచి క్యూలో నిలబడి ఉన్నాం.",
      ["standing", "stand", "stood"],
      0,
      {
        en: "Have been takes the -ing form for a wait that started earlier and goes on now.",
        te: "ముందు మొదలై ఇప్పటికీ సాగుతున్న ఎదురుచూపుకి have been తర్వాత -ing వస్తుంది.",
      },
      "duration",
    ),
    pick(
      "q6",
      "Sorry, did they ___ platform five or nine?",
      "సారీ, ప్లాట్‌ఫామ్ ఐదు అన్నారా, తొమ్మిదా?",
      ["say", "said", "says"],
      0,
      {
        en: "After did, the verb stays plain, because did already shows the past.",
        te: "did తర్వాత verb అలాగే ఉంటుంది; గతం అని did లోనే ఉంది.",
      },
      "question",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "Platform Five or Nine?", te: "ప్లాట్‌ఫామ్ ఐదా, తొమ్మిదా?" },
      teller: { en: "Usha", te: "ఉష" },
      voice: "a",
      parts: [
        {
          en: "Last March, my friend Sita and I planned a trip to Tirupati. We wanted two lower berths on the Narayanadri Express. But both our tickets were on the waiting list.",
          te: "పోయిన మార్చిలో, నేను, నా స్నేహితురాలు సీత గారు తిరుపతి వెళ్ళాలని ప్లాన్ చేశాం. నారాయణాద్రి ఎక్స్‌ప్రెస్‌లో రెండు లోయర్ బెర్తులు కావాలనుకున్నాం. కానీ మా రెండు టికెట్లూ వెయిటింగ్ లిస్ట్‌లో ఉన్నాయి.",
        },
        {
          en: "Every morning, I checked the PNR status on my phone. Two days before the journey, both tickets were confirmed. Sita was so happy. She said: We're really going to Tirumala!",
          te: "రోజూ పొద్దున నా ఫోన్‌లో PNR స్టేటస్ చూసేదాన్ని. ప్రయాణానికి రెండు రోజుల ముందు, రెండు టికెట్లూ కన్ఫర్మ్ అయ్యాయి. సీత గారు చాలా సంతోషపడ్డారు. 'మనం నిజంగా తిరుమల వెళ్తున్నాం!' అన్నారు.",
        },
        {
          en: "On Friday night, we were waiting on platform five with our bags. Then an announcement came, but it was very fast. I didn't catch the platform number.",
          te: "శుక్రవారం రాత్రి, మా బ్యాగులతో ఐదో నంబర్ ప్లాట్‌ఫామ్ మీద ఎదురుచూస్తున్నాం. అప్పుడు ఒక అనౌన్స్‌మెంట్ వచ్చింది, కానీ చాలా వేగంగా. ప్లాట్‌ఫామ్ నంబర్ నాకు సరిగ్గా వినపడలేదు.",
        },
        {
          en: "A young woman was standing next to me. I asked her: Sorry, did they say platform five or nine? She said: Nine! Your train is arriving on platform nine now.",
          te: "నా పక్కన ఒక అమ్మాయి నిలబడి ఉన్నారు. ఆవిడని అడిగాను: 'సారీ, ప్లాట్‌ఫామ్ ఐదు అన్నారా, తొమ్మిదా?' ఆవిడ, 'తొమ్మిది! మీ రైలు ఇప్పుడే తొమ్మిదో నంబర్ ప్లాట్‌ఫామ్ మీదకి వస్తోంది' అన్నారు.",
        },
        {
          en: "We hurried over the bridge with our bags. A porter helped Sita on the stairs. We got into our coach one minute before the train left.",
          te: "బ్యాగులు పట్టుకుని గబగబా బ్రిడ్జ్ దాటాం. మెట్ల మీద ఒక కూలీ సీత గారికి సాయం చేశారు. రైలు బయలుదేరడానికి ఒక్క నిమిషం ముందు మా కోచ్ ఎక్కాం.",
        },
        {
          en: "In Tirupati, the hotel had a clean room and hot water. The next day, the senior citizens' queue was short, and our darshan was peaceful. Now I always listen to announcements very carefully.",
          te: "తిరుపతిలో హోటల్ రూమ్ శుభ్రంగా ఉంది, వేడి నీళ్ళూ వచ్చాయి. మర్నాడు సీనియర్ సిటిజన్ల క్యూ చిన్నగా ఉంది, మా దర్శనం ప్రశాంతంగా జరిగింది. ఇప్పుడు నేను అనౌన్స్‌మెంట్లు ఎప్పుడూ చాలా జాగ్రత్తగా వింటాను.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A trip to Tirupati and a platform change", "A lost ticket on a bus", "A wedding in Tirupati"],
          answer: 0,
        },
        {
          prompt: { en: "Where were their tickets at first?", te: "మొదట వాళ్ళ టికెట్లు ఎక్కడ ఉన్నాయి?" },
          options: ["On the waiting list", "In Sita's bag", "At the hotel"],
          answer: 0,
        },
        {
          prompt: { en: "Which platform did the train come to?", te: "రైలు ఏ ప్లాట్‌ఫామ్ మీదకి వచ్చింది?" },
          options: ["Platform nine", "Platform five", "Platform one"],
          answer: 0,
        },
        {
          prompt: { en: "Who helped Sita on the stairs?", te: "మెట్ల మీద సీత గారికి ఎవరు సాయం చేశారు?" },
          options: ["A porter", "The young woman", "The ticket checker"],
          answer: 0,
        },
      ],
    },
  ],
};
