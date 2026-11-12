import type { Lesson } from "../../types";

/** Week 42, Day 3 (CURRICULUM §5): used to (again and again) vs the past simple (once) — school days. */
export const day: Lesson = {
  id: "school-days-teacher-used-to",
  kind: "lesson",
  title: { en: "My School Days", te: "నా స్కూల్ రోజులు" },
  subtitle: "used to or the past",
  summary: {
    en: "Learn to tell school memories: what happened again and again, and what happened only once.",
    te: "స్కూల్ జ్ఞాపకాలు చెప్పడం నేర్చుకుందాం: మళ్ళీ మళ్ళీ జరిగినవి, ఒక్కసారే జరిగినవి.",
  },
  seo: {
    title: "School Memories in English for Telugu Speakers",
    description:
      "Say Our teacher used to tell us stories and One day the headmaster came to our class. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "Our teacher", role: "who" },
    { text: "used to tell", role: "action" },
    { text: "us stories", role: "what" },
    { text: "every Friday", role: "when" },
  ],
  core: [
    { en: "Our teacher used to tell us stories.", te: "మా టీచర్ గారు మాకు కథలు చెప్పేవారు.", extra: ["told"] },
    { en: "One day, the headmaster came to our class.", te: "ఒక రోజు హెడ్మాస్టర్ గారు మా క్లాస్‌కి వచ్చారు.", extra: ["used"] },
    { en: "We used to write on a slate.", te: "మేము పలక మీద రాసేవాళ్ళం.", extra: ["in"] },
    { en: "We used to learn the tables by heart.", te: "మేము ఎక్కాలు బట్టీ పట్టేవాళ్ళం.", extra: ["learnt"] },
    { en: "We used to wear a blue and white uniform.", te: "మేము నీలం, తెలుపు రంగుల యూనిఫామ్ వేసుకునేవాళ్ళం.", extra: ["wore"] },
    { en: "Once, I won a prize for drawing.", te: "ఒకసారి నాకు డ్రాయింగ్‌లో ప్రైజ్ వచ్చింది.", extra: ["win"] },
    { en: "Every morning, the monitor used to clean the blackboard.", te: "రోజూ పొద్దున క్లాస్ మానిటర్ నల్లబల్ల తుడిచేవారు.", extra: ["cleaning"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Remember one teacher from your school. Say aloud one thing that teacher used to do.",
    te: "మీ స్కూల్ టీచర్లలో ఒకరిని గుర్తు చేసుకోండి. ఆ టీచర్ గారు చేసే ఒక పని గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "headmaster", te: "హెడ్మాస్టర్, ప్రధానోపాధ్యాయులు" },
    { en: "slate", te: "పలక" },
    { en: "by heart", te: "బట్టీ పట్టి, కంఠస్థంగా" },
    { en: "uniform", te: "యూనిఫామ్" },
    { en: "blackboard", te: "నల్లబల్ల" },
  ],
  grammar: ["used-to-would", "past-simple", "plurals-countable"],
  topics: ["people", "time", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Again and again, or once", te: "మళ్ళీ మళ్ళీ, లేదా ఒక్కసారి" },
      body: {
        en: "For things that happened again and again at school, say used to. For one time, use the past: came, won, fell.",
        te: "మళ్ళీ మళ్ళీ జరిగినవాటికి used to (చెప్పేవారు). ఒక్కసారి జరిగినదానికి past form (వచ్చారు, గెలిచాను).",
      },
      bridge: {
        te: ["మా టీచర్ గారు", "ప్రతి శుక్రవారం", "మాకు కథలు", "చెప్పేవారు"],
        en: [
          { text: "Our teacher", role: "who" },
          { text: "used to tell", role: "action" },
          { text: "us stories", role: "what" },
          { text: "every Friday", role: "when" },
        ],
      },
      examples: [
        { en: "Our teacher used to tell us stories.", te: "మా టీచర్ గారు మాకు కథలు చెప్పేవారు." },
        { en: "One day, the headmaster came to our class.", te: "ఒక రోజు హెడ్మాస్టర్ గారు మా క్లాస్‌కి వచ్చారు." },
        { en: "We used to write on a slate.", te: "మేము పలక మీద రాసేవాళ్ళం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "used to or the past", te: "used to నా, past నా" },
      items: [
        {
          form: "used to + verb",
          useFor: { en: "Again and again, for a long time.", te: "చాలా కాలం, మళ్ళీ మళ్ళీ జరిగినది." },
          example: { en: "We used to learn the tables by heart.", te: "మేము ఎక్కాలు బట్టీ పట్టేవాళ్ళం." },
        },
        {
          form: "came, won, fell",
          useFor: { en: "Only one time.", te: "ఒక్కసారే జరిగినది." },
          example: { en: "Once, I won a prize for drawing.", te: "ఒకసారి నాకు డ్రాయింగ్‌లో ప్రైజ్ వచ్చింది." },
        },
        {
          form: "One day, …",
          useFor: { en: "Start a short story about one time.", te: "ఒక్కసారి జరిగిన సంగతి మొదలుపెట్టడానికి." },
          example: { en: "One day, the headmaster came to our class.", te: "ఒక రోజు హెడ్మాస్టర్ గారు మా క్లాస్‌కి వచ్చారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "One day, the headmaster used to come to our class.",
      right: "One day, the headmaster came to our class.",
      why: {
        en: "One day means only one time, so use the past, not used to.",
        te: "One day అంటే ఒక్కసారే, అందుకే used to కాదు, past form వాడాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "Our old teacher still live in Ongole.",
      right: "Our old teacher still lives in Ongole.",
      why: {
        en: "Still means now, and one person like he or she takes s; Telugu has no such ending.",
        te: "still అంటే ఇప్పుడు కూడా; ఒక్కరైతే (he, she లాగా) verb కి s వస్తుంది. తెలుగులో ఇలాంటి మార్పు లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "Tell a friend that, for years, your teacher told you stories every Friday.",
        te: "ఏళ్ళ తరబడి ప్రతి శుక్రవారం మీ టీచర్ గారు మీకు కథలు చెప్పేవారని స్నేహితులకి చెప్పండి.",
      },
      options: [
        "Our teacher used to tell us stories every Friday.",
        "Our teacher is telling us stories every Friday.",
        "One Friday, our teacher used to tell us a story.",
      ],
      answer: 0,
      why: {
        en: "A habit long ago that has stopped takes used to, not is with -ing.",
        te: "ఒకప్పుడు ఉండి ఆగిపోయిన అలవాటుకి used to; is తో -ing కాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "We used to write ___ a slate.",
      te: "మేము పలక మీద రాసేవాళ్ళం.",
      options: ["on", "in", "at"],
      answer: 0,
      why: {
        en: "We write on the top of a slate, so English says on; Telugu మీద is on.",
        te: "పలక పైన రాస్తాం, అందుకే on; 'మీద' అంటే on.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Old Students' Meet",
      lines: [
        "Dear old students,",
        "Our school is seventy-five years old this year.",
        "We are inviting all old students to a get-together.",
        "Date: Sunday, 12 January, at 10 am.",
        "Place: the school ground.",
        "Our retired teachers will also come.",
        "There will be lunch, old songs and old photos.",
        "Please bring one photo from your school days.",
        "To join, message the school office before 5 January.",
        "Headmaster, ZP High School, Kothapalli",
      ],
      questions: [
        {
          prompt: { en: "Why is the school having a get-together?", te: "స్కూల్ వాళ్ళు get-together ఎందుకు పెడుతున్నారు?" },
          options: ["It is seventy-five years old.", "A new headmaster has come.", "The school is closing."],
          answer: 0,
          why: {
            en: "The second line says the school turns seventy-five this year.",
            te: "రెండో లైన్‌లో, ఈ సంవత్సరం స్కూల్‌కి డెబ్భై ఐదు ఏళ్ళు అని ఉంది.",
          },
        },
        {
          prompt: { en: "What should old students bring?", te: "పాత విద్యార్థులు ఏం తీసుకురావాలి?" },
          options: ["A photo from their school days", "Lunch for everyone", "Their old uniform"],
          answer: 0,
          why: {
            en: "The notice asks each old student to bring one picture from school.",
            te: "స్కూల్ రోజుల నాటి ఒక ఫోటో తీసుకురమ్మని నోటీసులో ఉంది.",
          },
        },
        {
          prompt: { en: "Who else will come to the meet?", te: "ఈ మీట్‌కి ఇంకా ఎవరు వస్తారు?" },
          options: ["The retired teachers", "The students' parents", "The village leaders"],
          answer: 0,
          why: {
            en: "The notice says the teachers who have retired will join too.",
            te: "రిటైర్ అయిన టీచర్లు కూడా వస్తారని నోటీసులో ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Our school used to have only three classroom.",
      wrongIndex: 7,
      fix: "Our school used to have only three classrooms.",
      why: {
        en: "After three, the word takes s; Telugu changes the end too, గది to గదులు.",
        te: "మూడు తర్వాత s కావాలి; తెలుగులోనూ గది కాదు, గదులు అంటాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Tell a young neighbour that one day, the headmaster came to your class.",
        te: "ఒక రోజు హెడ్మాస్టర్ గారు మీ క్లాస్‌కి వచ్చారని పక్కింటి యువకులకి చెప్పండి.",
      },
      expected: [
        "One day, the headmaster came to our class.",
        "One day the headmaster came to our class.",
        "The headmaster came to our class one day.",
      ],
      options: ["One day, the headmaster came to our class.", "One day, headmaster came to our class.", "One day, the headmaster come to our class."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A young neighbour asks how you learned the tables. Say you learned them by heart.",
        te: "ఎక్కాలు ఎలా నేర్చుకున్నారని పక్కింటి యువకులు అడిగారు. బట్టీ పట్టేవాళ్ళమని చెప్పండి.",
      },
      expected: ["We used to learn the tables by heart.", "I used to learn the tables by heart.", "We learned the tables by heart."],
      options: ["We used to learn the tables by heart.", "We used to learning the tables by heart.", "We were learn the tables by heart."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "School then and now", te: "అప్పటి స్కూల్, ఇప్పటి స్కూల్" },
    scene: {
      en: "Ayesha, a young neighbour, has just started college. She asks about your school days.",
      te: "పక్కింటి ఆయేషా గారు ఈ మధ్యే కాలేజీలో చేరారు. మీ స్కూల్ రోజుల గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Ayesha (a young neighbour)", te: "ఆయేషా (పక్కింటి యువతి)" },
    skills: [
      { id: "past", label: { en: "used to or the past", te: "used to, past form వాడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening! What was your school like?",
        te: "నమస్తే అండీ! మీ స్కూల్ ఎలా ఉండేది?",
        hint: { en: "Say it was small, and tell her what you wrote on.", te: "చిన్న స్కూల్ అని చెప్పి, దేని మీద రాసేవారో చెప్పండి." },
        replies: [
          { say: "It was a small school. We used to write on a slate.", good: true, skill: "past" },
          { say: "It was small school. We used to write on a slate.", good: false, skill: "past", fixIt: "article" },
        ],
      },
      {
        partner: "A slate! Were your teachers strict?",
        te: "పలకా! మీ టీచర్లు strict గా ఉండేవారా?",
        hint: { en: "Say Mr Ramana was kind, and remember his Friday stories.", te: "రమణ మాస్టారు మంచివారని చెప్పి, ఆయన శుక్రవారం కథలు గుర్తు చేసుకోండి." },
        replies: [
          { say: "Mr Ramana was kind. He used to tell us stories every Friday.", good: true, skill: "past" },
          { say: "Mr Ramana was kind. He used to told us stories every Friday.", good: false, skill: "past" },
        ],
      },
      {
        partner: "That sounds lovely. Did anything funny happen?",
        te: "భలే బాగుంది. ఏదైనా సరదా సంఘటన జరిగిందా?",
        hint: { en: "Tell her about the day the headmaster came and sang in your class.", te: "హెడ్మాస్టర్ గారు మీ క్లాస్‌కి వచ్చి పాట పాడిన రోజు గురించి చెప్పండి." },
        replies: [
          { say: "Yes! One day, the headmaster came to our class and sang a song.", good: true, skill: "past" },
          {
            say: "Why do you want to know? It's old news.",
            good: false,
            skill: "polite",
            react: { en: "Sorry! I only wanted to hear a story.", te: "సారీ అండీ! ఒక కథ వినాలనిపించింది, అంతే." },
          },
        ],
      },
      {
        partner: "Ha ha! Thank you. I love your stories.",
        te: "హ హ! థాంక్యూ. మీ కథలు నాకు చాలా ఇష్టం.",
        hint: { en: "Thank her, and say she can visit again.", te: "ఆవిడకి థాంక్స్ చెప్పి, మళ్ళీ రమ్మని చెప్పండి." },
        replies: [
          { say: "Thank you! Please come again any time.", good: true, skill: "polite" },
          { say: "Thanks you! Please come again any time.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
