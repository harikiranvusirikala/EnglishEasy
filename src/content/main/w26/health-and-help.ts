import type { Lesson } from "../../types";

/** Week 26, Day 2 (CURRICULUM §4): Checkpoint review of the doctor, the pharmacy and emergencies (Weeks 16–18). */
export const day: Lesson = {
  id: "health-and-help",
  kind: "lesson",
  title: { en: "Health and Help", te: "ఆరోగ్యం, సహాయం" },
  subtitle: "doctor, pharmacy, emergencies",
  summary: {
    en: "Use what you learned about health: tell the doctor what is wrong and for how long, ask about medicines, and call 108.",
    te: "ఆరోగ్యం గురించి నేర్చుకున్నదంతా వాడండి: ఏం బాలేదో, ఎన్ని రోజులుగానో డాక్టర్‌కి చెప్పడం, మందుల గురించి అడగడం, 108 కి ఫోన్ చేయడం.",
  },
  seo: {
    title: "Doctor, Pharmacy and Emergencies in English for Telugu Speakers",
    description:
      "Say I've had this cough for a week, ask how to take a tablet, and call 108. A review lesson for Telugu speakers on health and emergencies.",
  },
  pattern: [
    { text: "I've had", role: "action" },
    { text: "this cough", role: "what" },
    { text: "for a week", role: "when" },
  ],
  core: [
    { en: "I've had this cough for a week.", te: "ఈ దగ్గు వారం రోజులుగా ఉంది.", extra: ["since"] },
    { en: "Can I have a token for the doctor?", te: "డాక్టర్‌ని చూడడానికి ఒక టోకెన్ ఇస్తారా?", extra: ["give"] },
    { en: "Do I have to take it after food?", te: "ఇది భోజనం తర్వాత వేసుకోవాలా?", extra: ["Does"] },
    { en: "Please call one zero eight now.", te: "వెంటనే 108 కి ఫోన్ చేయండి.", extra: ["to"] },
    { en: "The nurse will check your BP first.", te: "ముందు నర్సు మీ BP చూస్తారు.", extra: ["checks"] },
    { en: "Do you have a painkiller for knee pain?", te: "మోకాలి నొప్పికి painkiller ఉందా?", extra: ["Are"] },
    { en: "My neighbour fell. Her leg is bleeding.", te: "మా పొరుగావిడ పడిపోయారు. ఆవిడ కాలి నుంచి రక్తం కారుతోంది.", extra: ["fall"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Save 108 in your phone as Ambulance, and say aloud: Please call one zero eight.",
    te: "మీ ఫోన్‌లో 108 ని Ambulance అని save చేసి, గట్టిగా అనండి: Please call one zero eight.",
  },
  words: [
    { en: "nurse", te: "నర్సు" },
    { en: "token", te: "టోకెన్, వరుస నంబర్" },
    { en: "painkiller", te: "నొప్పి మాత్ర" },
    { en: "first aid", te: "ప్రథమ చికిత్స" },
    { en: "bandage", te: "కట్టు, బ్యాండేజీ" },
  ],
  grammar: ["present-perfect", "should-must-have-to", "imperatives", "prepositions"],
  topics: ["health", "doctor", "pharmacy"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Three places for your health", te: "ఆరోగ్యానికి మూడు చోట్లు" },
      body: {
        en: "At the doctor, say what is wrong and for how long: I've had this cough for a week. At the medical shop, ask how to take it: Do I have to take it after food? In an emergency, call 108 and say what happened.",
        te: "డాక్టర్ దగ్గర ఏం బాలేదో, ఎన్ని రోజులుగానో చెప్పండి: I've had this cough for a week. మెడికల్ షాపులో ఎలా వేసుకోవాలో అడగండి: Do I have to take it after food? అత్యవసరమైతే 108 కి ఫోన్ చేసి ఏం జరిగిందో చెప్పండి.",
      },
      bridge: {
        te: ["ఈ దగ్గు", "వారం రోజులుగా", "ఉంది"],
        en: [
          { text: "I've had", role: "action" },
          { text: "this cough", role: "what" },
          { text: "for a week", role: "when" },
        ],
      },
      examples: [
        { en: "I've had this cough for a week.", te: "ఈ దగ్గు వారం రోజులుగా ఉంది." },
        { en: "Do I have to take it after food?", te: "ఇది భోజనం తర్వాత వేసుకోవాలా?" },
        { en: "Please call one zero eight now.", te: "వెంటనే 108 కి ఫోన్ చేయండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Who to ask for what", te: "ఎవరిని ఏం అడగాలి" },
      items: [
        {
          form: "I've had … for …",
          useFor: { en: "Telling the doctor how long.", te: "ఎన్ని రోజులుగానో డాక్టర్‌కి చెప్పడానికి." },
          example: { en: "I've had a headache for two days.", te: "రెండు రోజులుగా తలనొప్పిగా ఉంది." },
        },
        {
          form: "Do I have to …?",
          useFor: { en: "Asking the pharmacist how to take it.", te: "ఎలా వేసుకోవాలో ఫార్మసిస్ట్‌ని అడగడానికి." },
          example: { en: "Do I have to take it at night too?", te: "రాత్రి కూడా వేసుకోవాలా?" },
        },
        {
          form: "Do you have …?",
          useFor: { en: "Asking for a medicine or first aid things.", te: "మందు గానీ, first aid వస్తువులు గానీ అడగడానికి." },
          example: { en: "Do you have a bandage and some cotton?", te: "బ్యాండేజీ, కొంచెం దూది ఉన్నాయా?" },
        },
        {
          form: "Please call …",
          useFor: { en: "An emergency: 108 for an ambulance, 100 for the police.", te: "అత్యవసరం: అంబులెన్స్‌కి 108, పోలీసులకి 100." },
          example: { en: "Please call one zero eight. She can't breathe.", te: "108 కి ఫోన్ చేయండి. ఆవిడకి ఊపిరి ఆడట్లేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Please call to one zero eight.",
      right: "Please call one zero eight.",
      why: {
        en: "Telugu says 108 కి, but in English call takes no to after it.",
        te: "తెలుగులో '108 కి' అంటాం, కానీ ఇంగ్లీష్‌లో call తర్వాత to రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please take rest for two days.",
      right: "Please rest for two days.",
      why: {
        en: "Take rest is heard only in India; English just says rest, or get some rest.",
        te: "take rest మన దగ్గరే అంటారు; ఇంగ్లీష్‌లో rest అని, లేదా get some rest అని చాలు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "At the hospital desk, you want a token for the doctor. What do you say?",
        te: "హాస్పిటల్ కౌంటర్ దగ్గర డాక్టర్‌ని చూడడానికి టోకెన్ కావాలి. మీరు ఏమంటారు?",
      },
      options: ["Can I have a token for the doctor, please?", "Give one token for doctor.", "I am wanting a token for the doctor."],
      answer: 0,
      why: {
        en: "Can I have is polite, and want never takes -ing.",
        te: "Can I have మర్యాదగా ఉంటుంది; want కి -ing రాదు, am wanting అనకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Do I ___ to take it after food?",
      te: "ఇది భోజనం తర్వాత వేసుకోవాలా?",
      options: ["have", "has", "must"],
      answer: 0,
      why: {
        en: "With I, use have to after do; must never comes after do.",
        te: "I తో do తర్వాత have to వస్తుంది; do తో must రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your neighbour fell and can't get up. Which number do you call?",
        te: "మీ పొరుగావిడ కింద పడి లేవలేకపోతున్నారు. ఏ నంబర్‌కి ఫోన్ చేస్తారు?",
      },
      options: ["Call one zero eight for an ambulance.", "Call one zero zero for an ambulance.", "Call one nine three zero for an ambulance."],
      answer: 0,
      why: {
        en: "One zero eight brings an ambulance; one zero zero is the police.",
        te: "108 అంబులెన్స్; 100 పోలీసులు, 1930 సైబర్ మోసాలకి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My neighbour have diabetes and high BP.",
      wrongIndex: 2,
      fix: "My neighbour has diabetes and high BP.",
      why: {
        en: "One person, like he or she, takes has, not have.",
        te: "ఒక్కరు (he, she లాగా) అయితే have కాదు, has.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Tell the doctor you have had a fever for three days.",
        te: "మూడు రోజులుగా జ్వరం ఉందని డాక్టర్‌కి చెప్పండి.",
      },
      expected: ["I've had a fever for three days.", "I have had a fever for three days.", "For three days, doctor."],
      options: ["I've had a fever for three days.", "I've had a fever for three day.", "I am fever from three days."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour fainted on the road. Ask a shopkeeper to call an ambulance.",
        te: "మీ పొరుగాయన రోడ్డు మీద స్పృహ తప్పి పడిపోయారు. అంబులెన్స్‌కి ఫోన్ చేయమని షాపు వారిని అడగండి.",
      },
      expected: ["Please call one zero eight now.", "Please call one zero eight.", "Please call an ambulance."],
      options: ["Please call one zero eight now.", "Please call to one zero eight now.", "You call ambulance, no?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the doctor with a neighbour", te: "పొరుగాయనతో డాక్టర్ దగ్గర" },
    scene: {
      en: "You take your elderly neighbour Narayana to Dr Gopal. Narayana doesn't speak English, so you talk.",
      te: "మీ పెద్ద పొరుగాయన నారాయణ గారిని డాక్టర్ గోపాల్ దగ్గరికి తీసుకెళ్ళారు. నారాయణ గారికి ఇంగ్లీష్ రాదు, మీరే మాట్లాడతారు.",
    },
    partner: { en: "Dr Gopal", te: "డాక్టర్ గోపాల్" },
    voice: "b",
    skills: [
      { id: "problem", label: { en: "Saying the problem", te: "సమస్య చెప్పడం" } },
      { id: "medicine", label: { en: "Asking about medicine", te: "మందు గురించి అడగడం" } },
    ],
    turns: [
      {
        partner: "Hello. What's the problem today?",
        te: "నమస్కారం. ఈ రోజు ఏంటి సమస్య?",
        hint: { en: "Say Narayana has a bad cough.", te: "నారాయణ గారికి బాగా దగ్గు ఉందని చెప్పండి." },
        replies: [
          { say: "My neighbour Narayana has a bad cough.", good: true, skill: "problem" },
          { say: "My neighbour Narayana have a bad cough.", good: false, skill: "problem", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "I see. How long has he had it?",
        te: "అలాగా. ఎన్ని రోజులుగా ఉంది?",
        hint: { en: "Say how long: about ten days.", te: "ఎన్ని రోజులో చెప్పండి: సుమారు పది రోజులు." },
        replies: [
          { say: "He's had it for about ten days.", good: true, skill: "problem" },
          { say: "For about ten days, doctor.", good: true, skill: "problem" },
          { say: "Since ten days, doctor.", good: false, skill: "problem", fixIt: "preposition" },
        ],
      },
      {
        partner: "Give him this syrup twice a day, after food.",
        te: "ఈ సిరప్ రోజుకు రెండుసార్లు, భోజనం తర్వాత ఇవ్వండి.",
        hint: { en: "Ask if he must take it at night too. Start with Does.", te: "రాత్రి కూడా వేసుకోవాలా అని అడగండి. Does తో మొదలుపెట్టండి." },
        replies: [
          { say: "Does he have to take it at night too?", good: true, skill: "medicine" },
          { say: "He has to take at night also?", good: false, skill: "medicine", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, at night too. Buy it at the pharmacy downstairs.",
        te: "అవును, రాత్రి కూడా. కింద ఫార్మసీలో కొనుక్కోండి.",
        hint: { en: "Thank the doctor, and say you will go there now.", te: "డాక్టర్‌కి థాంక్స్ చెప్పి, ఇప్పుడే అక్కడికి వెళ్తామని చెప్పండి." },
        replies: [
          { say: "Thank you, doctor. We'll go there now.", good: true, skill: "medicine" },
          {
            say: "Only syrup? Please give an injection. It's faster.",
            good: false,
            skill: "medicine",
            react: { en: "No, he doesn't need an injection. The syrup is enough.", te: "లేదండీ, ఇంజెక్షన్ అవసరం లేదు. సిరప్ చాలు." },
          },
        ],
      },
    ],
  },
};
