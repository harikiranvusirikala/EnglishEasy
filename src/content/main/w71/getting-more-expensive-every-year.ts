import type { Lesson } from "../../types";

/** Week 71, Day 2 (CURRICULUM §5): get / become + a comparative for change still happening — It's getting hotter every summer. */
export const day: Lesson = {
  id: "getting-more-expensive-every-year",
  kind: "lesson",
  title: { en: "It's Getting Hotter", te: "రోజురోజుకీ పెరుగుతోంది" },
  subtitle: "getting hotter, becoming more expensive",
  summary: {
    en: "Learn to talk about changes that are still going on: It's getting hotter every summer.",
    te: "ఇంకా జరుగుతూనే ఉన్న మార్పుల గురించి చెప్పడం నేర్చుకుందాం: It's getting hotter every summer.",
  },
  seo: {
    title: "Getting Hotter and More Expensive in English for Telugu Speakers",
    description:
      "Say It's getting hotter every summer and Life is becoming more expensive in the city. Simple lessons for Telugu speakers on changes.",
  },
  pattern: [
    { text: "It's", role: "who" },
    { text: "getting", role: "action" },
    { text: "hotter", role: "what" },
    { text: "every summer", role: "when" },
  ],
  core: [
    { en: "It's getting hotter every summer.", te: "ప్రతి ఎండాకాలం ఎండ ఎక్కువవుతోంది.", extra: ["more"] },
    { en: "Life is becoming more expensive in the city.", te: "సిటీలో బతకడం ఖరీదైపోతోంది.", extra: ["becomes"] },
    { en: "Things are getting more and more expensive.", te: "వస్తువుల ధరలు ఇంకా ఇంకా పెరిగిపోతున్నాయి.", extra: ["is"] },
    { en: "The roads are getting more crowded day by day.", te: "రోజురోజుకీ రోడ్ల మీద రద్దీ పెరుగుతోంది.", extra: ["most"] },
    { en: "Our town is getting bigger every year.", te: "మా ఊరు ప్రతి సంవత్సరం పెద్దదవుతోంది.", extra: ["big"] },
    { en: "The heat is becoming unbearable in May.", te: "మే నెలలో ఎండ భరించలేనంతగా అవుతోంది.", extra: ["on"] },
    { en: "The cost of living is rising every year.", te: "బతకడానికి అయ్యే ఖర్చు ప్రతి సంవత్సరం పెరుగుతోంది.", extra: ["rise"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell someone today about one thing that is changing in your town: It's getting …",
    te: "మీ ఊరిలో మారుతున్న ఒక విషయం గురించి ఈ రోజు ఎవరికైనా చెప్పండి: It's getting …",
  },
  words: [
    { en: "become", te: "అవడం, మారడం" },
    { en: "day by day", te: "రోజురోజుకీ" },
    { en: "more and more", te: "ఇంకా ఇంకా ఎక్కువగా" },
    { en: "cost of living", te: "బతకడానికి అయ్యే ఖర్చు" },
    { en: "rising", te: "పెరుగుతున్న, పెరుగుతూ ఉన్న" },
  ],
  grammar: ["present-continuous", "comparatives-superlatives"],
  topics: ["weather", "neighbours", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "A change still going on", te: "ఇంకా జరుగుతున్న మార్పు" },
      body: {
        en: "For a change that is still going on, say getting or becoming with words like hotter or more expensive: It's getting hotter every summer.",
        te: "ఇంకా జరుగుతూనే ఉన్న మార్పుకి getting లేదా becoming తర్వాత hotter, more expensive లాంటి మాటలు వాడండి: It's getting hotter every summer.",
      },
      bridge: {
        te: ["ప్రతి ఎండాకాలం", "ఎండ", "ఎక్కువవుతోంది"],
        en: [
          { text: "It's", role: "who" },
          { text: "getting", role: "action" },
          { text: "hotter", role: "what" },
          { text: "every summer", role: "when" },
        ],
      },
      examples: [
        { en: "It's getting hotter every summer.", te: "ప్రతి ఎండాకాలం ఎండ ఎక్కువవుతోంది." },
        { en: "Life is becoming more expensive in the city.", te: "సిటీలో బతకడం ఖరీదైపోతోంది." },
        { en: "Things are getting more and more expensive.", te: "వస్తువుల ధరలు ఇంకా ఇంకా పెరిగిపోతున్నాయి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Short words and long words", te: "చిన్న పదాలు, పెద్ద పదాలు" },
      items: [
        {
          form: "getting + -er",
          useFor: { en: "Short words take -er: hotter, bigger.", te: "చిన్న పదాలకి -er: hotter, bigger." },
          example: { en: "Our town is getting bigger every year.", te: "మా ఊరు ప్రతి సంవత్సరం పెద్దదవుతోంది." },
        },
        {
          form: "getting more + a long word",
          useFor: { en: "Long words take more: more expensive, more crowded.", te: "పెద్ద పదాలకి ముందు more: more expensive, more crowded." },
          example: { en: "The roads are getting more crowded day by day.", te: "రోజురోజుకీ రోడ్ల మీద రద్దీ పెరుగుతోంది." },
        },
        {
          form: "becoming",
          useFor: { en: "The same meaning, a little more formal.", te: "అదే అర్థం, కొంచెం పద్ధతిగా." },
          example: { en: "The heat is becoming unbearable in May.", te: "మే నెలలో ఎండ భరించలేనంతగా అవుతోంది." },
        },
        {
          form: "more and more",
          useFor: { en: "The change keeps growing.", te: "మార్పు పెరుగుతూనే ఉంది." },
          example: { en: "Things are getting more and more expensive.", te: "వస్తువుల ధరలు ఇంకా ఇంకా పెరిగిపోతున్నాయి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "It getting hotter every summer.",
      right: "It's getting hotter every summer.",
      why: {
        en: "With -ing, English needs is; Telugu ఎక్కువవుతోంది has it inside the verb.",
        te: "-ing తో is తప్పకుండా కావాలి; తెలుగు 'ఎక్కువవుతోంది' లో అది verb లోనే ఉంటుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "It's getting more hotter.",
      right: "It's getting hotter.",
      why: {
        en: "Hotter already means more hot, so do not add more.",
        te: "hotter అంటేనే 'ఇంకా వేడిగా'; దానికి more చేర్చకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your neighbour says the bus fare has gone up again. Agree: things cost more every year.",
        te: "బస్ ఛార్జీ మళ్ళీ పెరిగిందని పక్కింటివారు అన్నారు. ఒప్పుకోండి: ప్రతి సంవత్సరం అన్నీ ఖరీదవుతున్నాయి.",
      },
      options: ["Yes, everything is getting more expensive.", "Yes, everything is getting expensiver.", "Yes, everything is getting cheaper."],
      answer: 0,
      why: {
        en: "Expensive is a long word, so it takes more before it, not -er.",
        te: "expensive పెద్ద పదం, అందుకే -er కాదు, ముందు more వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "It's getting ___ every summer.",
      te: "ప్రతి ఎండాకాలం ఎండ ఎక్కువవుతోంది.",
      options: ["hotter", "hot", "more hot"],
      answer: 0,
      why: {
        en: "A change needs the -er form, and a short word like hot takes -er, not more.",
        te: "మార్పు చెప్పడానికి -er రూపం కావాలి; hot లాంటి చిన్న పదానికి more కాదు, -er.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your friend Rani lives in Hyderabad. Tell your neighbour what she says about the city.",
        te: "మీ స్నేహితురాలు రాణి గారు హైదరాబాద్‌లో ఉంటారు. సిటీ గురించి ఆవిడ ఏమంటారో పక్కింటివారికి చెప్పండి.",
      },
      options: ["Rani says the city is getting more crowded.", "Rani say the city is getting more crowded.", "Rani says the city getting more crowded."],
      answer: 0,
      why: {
        en: "With one person like Rani, the verb takes s: says, lives, goes.",
        te: "రాణి గారు లాంటి ఒక్కరైతే verb కి s వస్తుంది: says, lives, goes.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "City is getting more crowded day by day.",
      wrongIndex: 0,
      fix: "The city is getting more crowded day by day.",
      why: {
        en: "A city you both know takes the; Telugu సిటీ has no word like the.",
        te: "ఇద్దరికీ తెలిసిన సిటీ అయితే ముందు the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "It is May and very hot. Tell your neighbour that summers feel hotter each year.",
        te: "మే నెల, చాలా ఎండగా ఉంది. ప్రతి సంవత్సరం ఎండాకాలం ఇంకా వేడెక్కుతోందని పక్కింటివారికి చెప్పండి.",
      },
      expected: ["It's getting hotter every summer.", "It is getting hotter every summer.", "It's getting hotter every year.", "Summers are getting hotter every year."],
      options: ["It's getting hotter every summer.", "It getting hotter every summer.", "It's getting more hotter every summer."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A friend from your village asks about life in the city. Say it costs more and more.",
        te: "మీ ఊరి నుంచి ఒక స్నేహితులు సిటీలో జీవితం గురించి అడిగారు. ఖర్చు పెరిగిపోతోందని చెప్పండి.",
      },
      expected: [
        "Life is getting more expensive in the city.",
        "Life is becoming more expensive in the city.",
        "Things are getting more and more expensive.",
        "The cost of living is rising every year.",
      ],
      options: ["Life is getting more expensive in the city.", "Life is getting expensiver in the city.", "Life getting more expensive in the city."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A hot evening", te: "ఎండాకాలం సాయంత్రం" },
    scene: {
      en: "It is a hot May evening. Your neighbour Fatima is sitting outside her gate with a hand fan.",
      te: "మే నెల, వేడిగా ఉన్న సాయంత్రం. మీ పక్కింటావిడ ఫాతిమా గారు విసనకర్రతో గేటు బయట కూర్చున్నారు.",
    },
    partner: { en: "Fatima (your neighbour)", te: "ఫాతిమా (మీ పక్కింటావిడ)" },
    skills: [
      { id: "change", label: { en: "Talking about change", te: "మార్పుల గురించి మాట్లాడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening! It's very hot today, isn't it?",
        te: "శుభ సాయంత్రం! ఈ రోజు చాలా ఎండగా ఉంది కదా?",
        hint: { en: "Greet her, agree, and say summers keep getting worse.", te: "పలకరించి, ఒప్పుకుని, ప్రతి ఎండాకాలం ఇంకా ఎక్కువవుతోందని చెప్పండి." },
        replies: [
          { say: "Good evening! Yes, it's getting hotter every summer.", good: true, skill: "change" },
          { say: "Good evening! Yes, it getting hotter every summer.", good: false, skill: "change", fixIt: "be" },
        ],
      },
      {
        partner: "True. When I was young, May was not so bad.",
        te: "నిజమే. నా చిన్నప్పుడు మే నెల ఇంత ఘోరంగా ఉండేది కాదు.",
        hint: { en: "Agree, and say there were more trees here then.", te: "ఒప్పుకుని, అప్పట్లో ఇక్కడ చెట్లు ఎక్కువ ఉండేవని చెప్పండి." },
        replies: [
          { say: "Yes, there used to be more trees here.", good: true, skill: "change" },
          { say: "Yes, there use to be more trees here.", good: false, skill: "change" },
        ],
      },
      {
        partner: "Now there are buildings everywhere. The town is getting bigger.",
        te: "ఇప్పుడు ఎక్కడ చూసినా బిల్డింగులే. ఊరు పెద్దదవుతోంది.",
        hint: { en: "Agree, and add something about the traffic on the roads.", te: "ఒప్పుకుని, రోడ్ల మీద ట్రాఫిక్ గురించి ఒక మాట చేర్చండి." },
        replies: [
          { say: "Yes, and the roads are getting more crowded day by day.", good: true, skill: "change" },
          {
            say: "Hmm. I don't want to talk about it.",
            good: false,
            skill: "polite",
            react: { en: "Oh, okay. Sorry.", te: "ఓ, సరే. సారీ అండీ." },
          },
        ],
      },
      {
        partner: "Come in for some cold buttermilk. It will cool you down.",
        te: "లోపలికి రండి, చల్లటి మజ్జిగ తాగండి. చల్లగా ఉంటుంది.",
        hint: { en: "Thank her and accept happily.", te: "థాంక్స్ చెప్పి, సంతోషంగా ఒప్పుకోండి." },
        replies: [
          { say: "Thank you! That sounds lovely.", good: true, skill: "polite" },
          { say: "Thank you! That is sounding lovely.", good: false, skill: "polite", fixIt: "state-ing" },
        ],
      },
    ],
  },
};
