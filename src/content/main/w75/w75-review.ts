import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 75, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), plus a quick complaint-English round, and a story to end. */

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
  id: "w75-review",
  kind: "review",
  title: { en: "Speaking Up for Our Colony", te: "మా కాలనీ కోసం మాట్లాడటం" },
  extras: [
    pick("q1", "The garbage hasn't ___ collected for three days.", "మూడు రోజులుగా చెత్త తీసుకెళ్లలేదు.", ["been", "be", "being"], 0, {
      en: "After hasn't, put been before the done form of the verb.",
      te: "hasn't తర్వాత been, దాని తర్వాత verb పూర్తయిన రూపం వస్తుంది.",
    }),
    pick(
      "q2",
      "We haven't had water ___ Monday.",
      "సోమవారం నుంచి మాకు నీళ్ళు రాలేదు.",
      ["since", "for", "from"],
      0,
      {
        en: "Since marks the day a problem began; Telugu నుంచి tempts people to say from.",
        te: "సమస్య మొదలైన రోజుకి since; తెలుగు 'నుంచి' వల్ల from అనేస్తాం.",
      },
      "duration",
    ),
    pick("q3", "The drain has been ___ for a week.", "వారం రోజులుగా డ్రైనేజీ పొంగి పొర్లుతోంది.", ["overflowing", "overflow", "overflowed"], 0, {
      en: "Has been with an action that is still going on takes the -ing form.",
      te: "ఇంకా సాగుతున్న పనికి has been తర్వాత -ing రూపం వస్తుంది.",
    }),
    pick("q4", "___ when will the road be repaired?", "రోడ్డు ఎప్పటిలోగా రిపేర్ చేస్తారు?", ["By", "Until", "From"], 0, {
      en: "By when asks for the last day by which the work will be finished.",
      te: "by when అంటే పని ఏ రోజులోగా పూర్తవుతుందని అడగడం.",
    }),
    pick("q5", "We request you ___ someone this week.", "ఈ వారమే ఎవరినైనా పంపించమని కోరుతున్నాం.", ["to send", "for sending", "send"], 0, {
      en: "After request you, formal English uses to with the plain verb.",
      te: "request you తర్వాత to, దాని తర్వాత verb అలాగే వస్తుంది.",
    }),
    pick(
      "q6",
      "The tanker ___ to our lane only twice a week now.",
      "ఇప్పుడు tanker మా లేన్‌కి వారానికి రెండుసార్లే వస్తోంది.",
      ["comes", "come", "coming"],
      0,
      {
        en: "One tanker, like he or she, needs s on the verb for a habit.",
        te: "ఒక్క tanker (he, she లాగా), అలవాటుగా జరిగే పనికి verb కి s కావాలి.",
      },
      "he-she-s",
    ),
    {
      id: "st1",
      type: "story",
      title: { en: "The Dark Lane", te: "చీకటి లేన్" },
      teller: { en: "Ayesha", te: "ఆయేషా" },
      voice: "a",
      parts: [
        {
          en: "Last winter, the streetlight at the end of our lane stopped working. The lane became very dark after seven. Elders were afraid to walk to the temple in the evening.",
          te: "పోయిన చలికాలం మా లేన్ చివర వీధి లైట్ పని చేయడం ఆగిపోయింది. ఏడు దాటితే లేన్ అంతా చీకటి. సాయంత్రం గుడికి నడిచి వెళ్ళడానికి పెద్దవాళ్ళు భయపడేవారు.",
        },
        {
          en: "First, I called the municipal helpline. I said, The streetlight hasn't been repaired for two weeks. The lady gave me a complaint number and said, Within three days.",
          te: "ముందు మున్సిపల్ హెల్ప్‌లైన్‌కి ఫోన్ చేశాను. రెండు వారాలుగా వీధి లైట్ రిపేర్ చేయలేదని చెప్పాను. ఆవిడ నాకు ఒక ఫిర్యాదు నంబర్ ఇచ్చి, మూడు రోజుల్లో అన్నారు.",
        },
        {
          en: "A week went by, but nothing was done. I was angry, but I didn't shout. I called again and gave the complaint number calmly.",
          te: "ఒక వారం గడిచింది, కానీ ఏమీ జరగలేదు. నాకు కోపం వచ్చింది, కానీ అరవలేదు. మళ్ళీ ఫోన్ చేసి, ప్రశాంతంగా ఫిర్యాదు నంబర్ చెప్పాను.",
        },
        {
          en: "Then my neighbour Joseph had an idea. We wrote a short letter, and forty neighbours signed it. We took it to the ward meeting on Saturday.",
          te: "అప్పుడు మా పక్కింటాయన జోసెఫ్ గారికి ఒక ఆలోచన వచ్చింది. మేము ఒక చిన్న లెటర్ రాశాం, నలభై మంది ఇరుగుపొరుగువాళ్ళు సంతకం పెట్టారు. శనివారం దాన్ని వార్డ్ మీటింగ్‌కి తీసుకెళ్ళాం.",
        },
        {
          en: "At the meeting, I stood up and spoke slowly. I said, This problem has been going on for a month. We request you to send someone this week.",
          te: "మీటింగ్‌లో లేచి నిలబడి నెమ్మదిగా మాట్లాడాను. ఈ సమస్య నెల రోజులుగా సాగుతోంది, ఈ వారమే ఎవరినైనా పంపించమని కోరుతున్నాం అని చెప్పాను.",
        },
        {
          en: "On Monday evening, two workers came with a ladder. By seven, our lane was bright again. Now the elders walk to the temple without any fear.",
          te: "సోమవారం సాయంత్రం ఇద్దరు పనివాళ్ళు నిచ్చెనతో వచ్చారు. ఏడింటికల్లా మా లేన్ మళ్ళీ వెలుగులో ఉంది. ఇప్పుడు పెద్దవాళ్ళు ఏ భయం లేకుండా గుడికి నడిచి వెళ్తున్నారు.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Getting a broken streetlight repaired", "Building a new temple", "A power cut at a wedding"],
          answer: 0,
        },
        {
          prompt: { en: "What did Ayesha do when nothing happened?", te: "ఏమీ జరగనప్పుడు ఆయేషా గారు ఏం చేశారు?" },
          options: ["She called again calmly", "She shouted at the helpline", "She bought a new light"],
          answer: 0,
        },
        {
          prompt: { en: "How many neighbours signed the letter?", te: "లెటర్ మీద ఎంతమంది ఇరుగుపొరుగువాళ్ళు సంతకం పెట్టారు?" },
          options: ["Forty", "Four", "Fourteen"],
          answer: 0,
        },
        {
          prompt: { en: "When did the workers come?", te: "పనివాళ్ళు ఎప్పుడు వచ్చారు?" },
          options: ["On Monday evening", "On Saturday morning", "After a month"],
          answer: 0,
        },
      ],
    },
  ],
};
