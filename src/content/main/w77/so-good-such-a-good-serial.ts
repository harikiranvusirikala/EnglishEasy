import type { Lesson } from "../../types";

/** Week 77, Day 3 (CURRICULUM §5): so + a describing word, such a + word + thing — The songs were so beautiful. It's such a good story. */
export const day: Lesson = {
  id: "so-good-such-a-good-serial",
  kind: "lesson",
  title: { en: "So Good, Such a Good Story", te: "అంత బాగుంది" },
  subtitle: "so good, such a good story",
  summary: {
    en: "Learn to say how much you liked something: The songs were so beautiful. It's such a good story. You should watch it.",
    te: "ఏదైనా ఎంత నచ్చిందో చెప్పడం నేర్చుకుందాం: The songs were so beautiful. It's such a good story. You should watch it.",
  },
  seo: {
    title: "So and Such in English for Telugu Speakers",
    description:
      "Say The songs were so beautiful and It's such a good story. Simple lessons for Telugu speakers on so and such a when you praise a serial.",
  },
  pattern: [
    { text: "It's", role: "who" },
    { text: "such a good", role: "action" },
    { text: "story", role: "what" },
  ],
  core: [
    { en: "The songs were so beautiful.", te: "పాటలు ఎంతో అందంగా ఉన్నాయి.", extra: ["such"] },
    { en: "It's such a good story. You should watch it.", te: "ఎంత మంచి కథో. మీరు తప్పకుండా చూడండి.", extra: ["so"] },
    { en: "This serial is so popular in our colony.", te: "మా కాలనీలో ఈ సీరియల్ చాలా పాపులర్.", extra: ["such"] },
    { en: "She is such a good actor.", te: "ఆవిడ ఎంత మంచి నటి!", extra: ["so"] },
    { en: "The last episode was so touching that I cried.", te: "చివరి ఎపిసోడ్ ఎంతగా కదిలించిందంటే, నాకు ఏడుపు వచ్చేసింది.", extra: ["such"] },
    { en: "It's such a long serial, but it's worth watching.", te: "చాలా పెద్ద సీరియల్, కానీ చూడదగ్గది.", extra: ["so"] },
    { en: "The characters are so real, like people we know.", te: "పాత్రలు అచ్చం మనకు తెలిసినవాళ్ళలాగే, ఎంతో సహజంగా ఉంటాయి.", extra: ["such"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Praise one thing today with so or such a: the coffee, a song, or your neighbour's garden.",
    te: "ఈ రోజు so లేదా such a తో ఒక దాన్ని మెచ్చుకోండి: కాఫీ, ఒక పాట, లేదా పక్కింటివారి తోట.",
  },
  words: [
    { en: "such a", te: "అంత, ఎంత … !" },
    { en: "serial", te: "సీరియల్, ధారావాహిక" },
    { en: "touching", te: "మనసుని కదిలించే" },
    { en: "worth watching", te: "చూడదగ్గది" },
    { en: "character", te: "పాత్ర" },
  ],
  grammar: ["articles", "should-must-have-to", "connectors"],
  topics: ["feelings", "home", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "so and such a", te: "so, such a ఎప్పుడు వాడాలి" },
      body: {
        en: "Use so before a word like good or beautiful: so beautiful. When a thing comes after it, use such a: such a good story.",
        te: "good, beautiful లాంటి మాట ముందు so: so beautiful. ఆ మాట తర్వాత ఒక వస్తువు వస్తే such a: such a good story.",
      },
      bridge: {
        te: ["ఎంత", "మంచి", "కథ!"],
        en: [
          { text: "It's", role: "who" },
          { text: "such a good", role: "action" },
          { text: "story", role: "what" },
        ],
      },
      examples: [
        { en: "The songs were so beautiful.", te: "పాటలు ఎంతో అందంగా ఉన్నాయి." },
        { en: "It's such a good story. You should watch it.", te: "ఎంత మంచి కథో. మీరు తప్పకుండా చూడండి." },
        { en: "She is such a good actor.", te: "ఆవిడ ఎంత మంచి నటి!" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "so or such?", te: "so నా, such ఆ?" },
      items: [
        {
          form: "so funny",
          useFor: { en: "A word like good, long or funny on its own.", te: "good, long, funny లాంటి మాట ఒక్కటే ఉంటే." },
          example: { en: "The comedy scenes were so funny.", te: "కామెడీ సీన్లు ఎంతో నవ్వించాయి." },
        },
        {
          form: "such a big city",
          useFor: { en: "One thing, with a word like big before it.", te: "ఒక వస్తువు, దాని ముందు big లాంటి మాట." },
          example: { en: "Hyderabad is such a big city.", te: "హైదరాబాద్ ఎంత పెద్ద నగరమో." },
        },
        {
          form: "such good songs",
          useFor: { en: "Many things: no a.", te: "చాలా వస్తువులు అయితే a రాదు." },
          example: { en: "They are such good songs.", te: "అవి ఎంత మంచి పాటలో." },
        },
        {
          form: "so funny that …",
          useFor: { en: "Say what happened because of it.", te: "దాని వల్ల ఏం జరిగిందో చెప్పడానికి." },
          example: { en: "The film was so funny that we laughed all evening.", te: "సినిమా ఎంతగా నవ్వించిందంటే, సాయంత్రమంతా నవ్వుతూనే ఉన్నాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "It's such good story.",
      right: "It's such a good story.",
      why: {
        en: "One story needs a after such; Telugu has no word like a.",
        te: "ఒక్క కథ అయితే such తర్వాత a కావాలి; తెలుగులో a లాంటి మాట లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "The serial is too good.",
      right: "The serial is really good.",
      why: {
        en: "Too means more than you want, as in too hot; to praise, say so, very or really.",
        te: "too అంటే కావాల్సిన దానికంటే ఎక్కువ, too hot లాగా; మెచ్చుకోవడానికి so, very, really అనండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "indian-english",
      prompt: { en: "You loved the songs in the film. Tell your friend.", te: "సినిమాలో పాటలు మీకు చాలా నచ్చాయి. స్నేహితులకి చెప్పండి." },
      options: ["The songs were so beautiful.", "The songs were such beautiful.", "The songs were too beautiful."],
      answer: 0,
      why: {
        en: "Beautiful stands alone here, so use so; too means more than you want.",
        te: "ఇక్కడ beautiful ఒక్కటే ఉంది, అందుకే so; too అంటే అవసరానికి మించి అని.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "article",
      sentence: "She is ___ good actor.",
      te: "ఆవిడ ఎంత మంచి నటి!",
      options: ["such a", "so", "such"],
      answer: 0,
      why: {
        en: "An actor is one person with good before it, so use such a.",
        te: "actor ఒక్కరే, ముందు good ఉంది, అందుకే such a వాడాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend says: It's such a long serial, but it's worth watching. What does she mean?",
        te: "It's such a long serial, but it's worth watching అని స్నేహితురాలు అన్నారు. ఆవిడ ఉద్దేశం ఏంటి?",
      },
      options: ["It's very long, but you should still watch it.", "It's very long, so it's not worth your time.", "It has just finished, so you can't watch it."],
      answer: 0,
      why: {
        en: "Worth watching means it is good enough to spend your time on.",
        te: "worth watching అంటే దానికి టైమ్ పెట్టడం విలువైనదే అని.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Everyone in our colony watch this serial every night.",
      wrongIndex: 4,
      fix: "Everyone in our colony watches this serial every night.",
      why: {
        en: "Everyone works like he or she, so the verb takes s, though it means many people.",
        te: "everyone అంటే చాలామంది అయినా, he, she లాగానే verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your friend asks about the serial you watch every night. Tell her the story is very good.",
        te: "మీరు రోజూ రాత్రి చూసే సీరియల్ గురించి స్నేహితురాలు అడుగుతున్నారు. కథ చాలా బాగుందని చెప్పండి.",
      },
      expected: ["It's such a good story.", "It's such a good story. You should watch it.", "The story is so good."],
      options: ["It's such a good story.", "It's such good story.", "It's so good story."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "The last episode moved you so much that you cried. Tell your neighbour.",
        te: "చివరి ఎపిసోడ్ మిమ్మల్ని ఎంతగా కదిలించిందంటే మీకు ఏడుపు వచ్చింది. పక్కింటివారికి చెప్పండి.",
      },
      expected: ["The last episode was so touching.", "The last episode was so touching that I cried.", "It was such a touching episode."],
      options: ["The last episode was so touching.", "The last episode was so touched.", "The last episode was too much touching."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Try this serial!", te: "ఈ సీరియల్ చూడండి!" },
    scene: {
      en: "Your friend Narayana says he is bored in the evenings. You want him to try your favourite serial.",
      te: "సాయంత్రాలు బోర్ కొడుతోందని మీ స్నేహితుడు నారాయణ గారు అంటున్నారు. మీకు ఇష్టమైన సీరియల్ ఆయన చూడాలని మీకు ఉంది.",
    },
    partner: { en: "Narayana (your friend)", te: "నారాయణ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "praise", label: { en: "Praising with so and such", te: "so, such తో మెచ్చుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "These days I'm so bored in the evenings. There's nothing good on TV.",
        te: "ఈ మధ్య సాయంత్రాలు నాకు చాలా బోర్ కొడుతోంది. TV లో మంచిదేమీ రావట్లేదు.",
        hint: { en: "Suggest the serial you watch at nine, and praise its story.", te: "మీరు తొమ్మిదింటికి చూసే సీరియల్ సూచించి, దాని కథని మెచ్చుకోండి." },
        replies: [
          { say: "Why don't you watch the nine o'clock serial? It's such a good story.", good: true, skill: "praise" },
          { say: "Why don't you watch the nine o'clock serial? It's such good story.", good: false, skill: "praise", fixIt: "article" },
        ],
      },
      {
        partner: "Serials are always so long. What is it about?",
        te: "సీరియల్స్ ఎప్పుడూ చాలా సాగుతాయి. అది దేని గురించి?",
        hint: { en: "Say it's about two brothers, and what they run in Araku.", te: "అది ఇద్దరు అన్నదమ్ముల గురించని, వాళ్ళు అరకులో ఏం నడుపుతారో చెప్పండి." },
        replies: [
          { say: "It's about two brothers who run a small hotel in Araku.", good: true, skill: "praise" },
          { say: "It's about two brothers which run a small hotel in Araku.", good: false, skill: "praise" },
        ],
      },
      {
        partner: "Hmm. Is it funny or sad?",
        te: "హ్మ్. నవ్విస్తుందా, ఏడిపిస్తుందా?",
        hint: { en: "Say it is both, and that the characters feel real.", te: "రెండూ అని, పాత్రలు సహజంగా అనిపిస్తాయని చెప్పండి." },
        replies: [
          { say: "Both! The characters are so real. You'll love it.", good: true, skill: "praise" },
          { say: "Both! The characters are such real. You'll love it.", good: false, skill: "praise" },
          {
            say: "Just watch it. Don't ask so many questions.",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay! I only wanted to know.", te: "సరే, సరే! తెలుసుకుందామనే అడిగాను." },
          },
        ],
      },
      {
        partner: "All right, I'll try it tonight.",
        te: "సరే, ఈ రాత్రి చూస్తాను.",
        hint: { en: "Say you are glad, and ask him to tell you tomorrow what he thinks.", te: "మీకు సంతోషంగా ఉందని చెప్పి, రేపు ఆయన అభిప్రాయం చెప్పమని అడగండి." },
        replies: [
          { say: "Great! Tell me tomorrow what you think.", good: true, skill: "polite" },
          { say: "Great! Tell me tomorrow how you are liking it.", good: false, skill: "polite", fixIt: "state-ing" },
        ],
      },
    ],
  },
};
