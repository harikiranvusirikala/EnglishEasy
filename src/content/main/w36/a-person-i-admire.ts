import type { Lesson } from "../../types";

/** Week 36, Day 5 (CURRICULUM §4): describing someone, with reasons — I admire my old teacher because she was always kind. */
export const day: Lesson = {
  id: "a-person-i-admire",
  kind: "lesson",
  title: { en: "A Person I Admire", te: "నేను గౌరవించే వ్యక్తి" },
  subtitle: "describing someone, with reasons",
  summary: {
    en: "Learn to talk about someone you admire, and why: I admire my old teacher because she was always kind.",
    te: "మీరు గౌరవించే మనిషి గురించి, ఎందుకో చెప్పడం నేర్చుకుందాం: I admire my old teacher because she was always kind.",
  },
  seo: {
    title: "A Person I Admire in English for Telugu Speakers",
    description:
      "Say I admire my old teacher because she was always kind. Simple lessons for Telugu speakers on describing someone you admire.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "admire", role: "action" },
    { text: "my old teacher", role: "what" },
  ],
  core: [
    { en: "I admire my old teacher.", te: "నేను మా పాత టీచర్‌ని గౌరవిస్తాను.", extra: ["admiring"] },
    { en: "I admire her because she was always kind.", te: "ఆవిడ ఎప్పుడూ దయగా ఉండేవారు, అందుకే ఆవిడంటే నాకు గౌరవం.", extra: ["so"] },
    { en: "She taught us with a lot of patience.", te: "ఆవిడ మాకు చాలా ఓపికగా పాఠాలు చెప్పారు.", extra: ["patient"] },
    { en: "I have known Dr Rahim for twenty years.", te: "డాక్టర్ రహీమ్ గారు నాకు ఇరవై ఏళ్ళుగా తెలుసు.", extra: ["since"] },
    { en: "Everyone in our street respects him.", te: "మా వీధిలో అందరూ ఆయన్ని గౌరవిస్తారు.", extra: ["respect"] },
    { en: "He is very generous. He helps everyone.", te: "ఆయనది చాలా ఉదార స్వభావం. అందరికీ సహాయం చేస్తారు.", extra: ["help"] },
    { en: "I'm very proud of my friend Fatima.", te: "మా స్నేహితురాలు ఫాతిమా గారిని చూస్తే నాకు చాలా గర్వంగా ఉంటుంది.", extra: ["for"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one person you admire. Say one reason with because.",
    te: "మీరు గౌరవించే ఒకరిని గుర్తు చేసుకోండి. because తో ఒక కారణం చెప్పండి.",
  },
  words: [
    { en: "admire", te: "గౌరవించడం, మెచ్చుకోవడం" },
    { en: "respect", te: "గౌరవించడం, గౌరవం" },
    { en: "generous", te: "ఉదార స్వభావం గల, మనసారా ఇచ్చే" },
    { en: "patience", te: "ఓపిక" },
    { en: "proud of", te: "… ని చూసి గర్వంగా" },
  ],
  grammar: ["connectors", "past-simple", "present-perfect"],
  topics: ["people", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Who, and why", te: "ఎవరు, ఎందుకు" },
      body: {
        en: "Say who you admire, then give the reason with because: I admire my old teacher because she was always kind. For someone from long ago, use was.",
        te: "మీరు ఎవరిని గౌరవిస్తారో చెప్పి, because తో కారణం చెప్పండి: I admire my old teacher because she was always kind. చాలా కాలం క్రితం మనిషి అయితే was వాడండి.",
      },
      bridge: {
        te: ["నేను", "మా పాత టీచర్‌ని", "గౌరవిస్తాను"],
        en: [
          { text: "I", role: "who" },
          { text: "admire", role: "action" },
          { text: "my old teacher", role: "what" },
        ],
      },
      examples: [
        { en: "I admire her because she was always kind.", te: "ఆవిడ ఎప్పుడూ దయగా ఉండేవారు, అందుకే ఆవిడంటే నాకు గౌరవం." },
        { en: "She taught us with a lot of patience.", te: "ఆవిడ మాకు చాలా ఓపికగా పాఠాలు చెప్పారు." },
        { en: "Everyone in our street respects him.", te: "మా వీధిలో అందరూ ఆయన్ని గౌరవిస్తారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Talking about someone you admire", te: "మీరు గౌరవించే మనిషి గురించి" },
      items: [
        {
          form: "because + who + action",
          useFor: { en: "The reason, as a full sentence.", te: "కారణం, పూర్తి వాక్యంగా." },
          example: { en: "I admire her because she was always kind.", te: "ఆవిడ ఎప్పుడూ దయగా ఉండేవారు, అందుకే ఆవిడంటే నాకు గౌరవం." },
        },
        {
          form: "was / taught",
          useFor: { en: "What they were like long ago: the past.", te: "చాలా కాలం క్రితం ఎలా ఉండేవారో: past." },
          example: { en: "She taught us with a lot of patience.", te: "ఆవిడ మాకు చాలా ఓపికగా పాఠాలు చెప్పారు." },
        },
        {
          form: "have known … for / since",
          useFor: { en: "From then up to now.", te: "అప్పటి నుంచి ఇప్పటి వరకు." },
          example: { en: "I have known Dr Rahim for twenty years.", te: "డాక్టర్ రహీమ్ గారు నాకు ఇరవై ఏళ్ళుగా తెలుసు." },
        },
        {
          form: "proud of",
          useFor: { en: "Happy about someone's good work.", te: "ఒకరి మంచి పని చూసి సంతోషం, గర్వం." },
          example: { en: "I'm very proud of my friend Fatima.", te: "మా స్నేహితురాలు ఫాతిమా గారిని చూస్తే నాకు చాలా గర్వంగా ఉంటుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "I know him since school.",
      right: "I have known him since school.",
      why: {
        en: "Telugu తెలుసు sounds like now, but from then up to now needs have known.",
        te: "'తెలుసు' ఇప్పటి మాటలా ఉన్నా, అప్పటి నుంచి ఇప్పటి వరకు అంటే have known కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I'm very proud on my friend.",
      right: "I'm very proud of my friend.",
      why: {
        en: "Proud always takes of after it; on or for sound wrong.",
        te: "proud తర్వాత ఎప్పుడూ of వస్తుంది; on, for సరిపోవు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "You met Dr Rahim twenty years ago. You still see him. What do you say?",
        te: "డాక్టర్ రహీమ్ గారిని ఇరవై ఏళ్ళ క్రితం కలిశారు. ఇప్పటికీ కలుస్తుంటారు. ఏమంటారు?",
      },
      options: ["I have known him for twenty years.", "I know him for twenty years.", "I am knowing him since twenty years."],
      answer: 0,
      why: {
        en: "From then up to now needs have known, and a length of time takes for.",
        te: "అప్పటి నుంచి ఇప్పటి వరకు అంటే have known; ఎంత కాలం అని చెప్తే for.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I admire her ___ she was always kind.",
      te: "ఆవిడ ఎప్పుడూ దయగా ఉండేవారు, అందుకే ఆవిడంటే నాకు గౌరవం.",
      options: ["because", "so", "but"],
      answer: 0,
      why: {
        en: "Because brings in the reason; so brings in the result, the other way round.",
        te: "because తర్వాత కారణం వస్తుంది; so తర్వాత ఫలితం, అది తిరగబడుతుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your teacher Sarala never got angry with slow students. What do you say?",
        te: "మీ టీచర్ సరళ గారు నెమ్మదిగా నేర్చుకునే పిల్లల మీద ఎప్పుడూ కోప్పడలేదు. ఏమంటారు?",
      },
      options: ["She was very patient.", "She was very strict.", "She was very shy."],
      answer: 0,
      why: {
        en: "Someone who waits calmly and never gets angry is patient.",
        te: "కోపం లేకుండా ఓపికగా ఉండే మనిషిని patient అంటారు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Everyone in our street respect him.",
      wrongIndex: 4,
      fix: "Everyone in our street respects him.",
      why: {
        en: "Everyone sounds like many people, but it takes s, like he or she.",
        te: "everyone అంటే చాలా మంది అనిపించినా, he, she లాగా action కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "A friend asks who you admire. Talk about your old teacher, and give a reason.",
        te: "మీరు ఎవరిని గౌరవిస్తారని స్నేహితులు అడిగారు. మీ పాత టీచర్ గురించి, ఒక కారణంతో చెప్పండి.",
      },
      expected: [
        "I admire my old teacher because she was always kind.",
        "I admire my old teacher because she was very patient.",
        "My old teacher. She was always kind.",
      ],
      options: [
        "I admire my old teacher because she was always kind.",
        "I am admiring my old teacher because she was kind.",
        "I admire my old teacher so she was always kind.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Your friend Kumar was in your class at school. Say how long you've known him.",
        te: "మీ స్నేహితులు కుమార్ గారు స్కూల్లో మీ క్లాస్‌మేట్. ఆయన మీకు ఎప్పటి నుంచి తెలుసో చెప్పండి.",
      },
      expected: ["I have known Kumar since school.", "I've known him since school.", "I have known him since our school days."],
      options: ["I have known Kumar since school.", "I know Kumar since school.", "I am knowing Kumar from school."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "My favourite teacher", te: "నాకు ఇష్టమైన టీచర్" },
    scene: {
      en: "On your morning walk, your friend David talks about school days. He asks about your favourite teacher.",
      te: "ఉదయం వాకింగ్‌లో మీ స్నేహితులు డేవిడ్ గారు స్కూల్ రోజుల గురించి మాట్లాడుతున్నారు. మీకు ఇష్టమైన టీచర్ గురించి అడుగుతున్నారు.",
    },
    partner: { en: "David (friend)", te: "డేవిడ్ (స్నేహితులు)" },
    voice: "b",
    skills: [
      { id: "admire", label: { en: "Saying why", te: "కారణం చెప్పడం" } },
      { id: "time", label: { en: "How long", te: "ఎంత కాలంగా" } },
    ],
    turns: [
      {
        partner: "Who was your favourite teacher at school?",
        te: "స్కూల్లో మీకు ఇష్టమైన టీచర్ ఎవరు?",
        hint: { en: "Name the teacher, Sarala, and say she taught maths.", te: "టీచర్ పేరు సరళ అని, ఆవిడ లెక్కలు చెప్పేవారని చెప్పండి." },
        replies: [
          { say: "It was Sarala Madam. She taught us maths.", good: true, skill: "admire" },
          { say: "It was Sarala Madam. She teached us maths.", good: false, skill: "admire" },
        ],
      },
      {
        partner: "Why do you remember her so well?",
        te: "ఆవిడ మీకు అంత బాగా ఎందుకు గుర్తున్నారు?",
        hint: { en: "Give a reason about her nature, with because.", te: "because తో, ఆవిడ స్వభావం గురించి ఒక కారణం చెప్పండి." },
        replies: [
          { say: "Because she was very patient with everyone.", good: true, skill: "admire" },
          { say: "Because she very patient with everyone.", good: false, skill: "admire", fixIt: "be" },
          {
            say: "Why do you ask? That's my business.",
            good: false,
            skill: "admire",
            react: { en: "Sorry! I was only asking.", te: "సారీ! ఊరికే అడిగాను అంతే." },
          },
        ],
      },
      {
        partner: "Nice. Do you still meet her?",
        te: "బాగుంది. ఇప్పటికీ ఆవిడని కలుస్తుంటారా?",
        hint: { en: "Say yes, and how long you have known her: fifty years.", te: "అవునని, ఆవిడ మీకు ఎంత కాలంగా తెలుసో చెప్పండి: యాభై ఏళ్ళు." },
        replies: [
          { say: "Yes! I have known her for fifty years.", good: true, skill: "time" },
          { say: "Yes! I know her for fifty years.", good: false, skill: "time", fixIt: "duration" },
        ],
      },
      {
        partner: "Fifty years! That's wonderful.",
        te: "యాభై ఏళ్ళు! చాలా గొప్ప విషయం.",
        hint: { en: "Agree, and say how much you respect her.", te: "ఒప్పుకుని, ఆవిడంటే మీకు ఎంత గౌరవమో చెప్పండి." },
        replies: [
          { say: "Yes. I respect her very much.", good: true, skill: "admire" },
          { say: "Yes. I am respecting her very much.", good: false, skill: "admire", fixIt: "state-ing" },
        ],
      },
    ],
  },
};
