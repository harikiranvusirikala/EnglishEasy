import type { Lesson } from "../../types";

/** Week 65, Day 1 (CURRICULUM §5): formal wishes at a wedding — Wishing you both a very happy married life. */
export const day: Lesson = {
  id: "best-wishes-at-a-wedding",
  kind: "lesson",
  title: { en: "Best Wishes for the Wedding", te: "పెళ్లికి శుభాకాంక్షలు" },
  subtitle: "Wishing you both …; Many congratulations on …",
  summary: {
    en: "Learn to wish a couple and their family at a wedding: Wishing you both a very happy married life.",
    te: "పెళ్లిలో దంపతులకి, వాళ్ళ కుటుంబానికి శుభాకాంక్షలు చెప్పడం నేర్చుకుందాం: Wishing you both a very happy married life.",
  },
  seo: {
    title: "Wedding Wishes in English for Telugu Speakers",
    description:
      "Say Wishing you both a very happy married life and Many congratulations on the wedding. Simple lessons for Telugu speakers on formal wishes.",
  },
  pattern: [
    { text: "Wishing", role: "action" },
    { text: "you both", role: "who" },
    { text: "a very happy married life", role: "what" },
  ],
  core: [
    { en: "Wishing you both a very happy married life.", te: "మీ ఇద్దరి వైవాహిక జీవితం ఎంతో సంతోషంగా సాగాలని కోరుకుంటున్నాను.", extra: ["wish"] },
    { en: "Many congratulations on Anitha's wedding.", te: "అనిత పెళ్లి సందర్భంగా మీకు హృదయపూర్వక అభినందనలు.", extra: ["for"] },
    { en: "You make a lovely couple.", te: "మీ జంట చాలా చూడముచ్చటగా ఉంది.", extra: ["couples"] },
    { en: "The bride looks beautiful in that silk saree.", te: "ఆ పట్టుచీరలో పెళ్లికూతురు చాలా అందంగా ఉన్నారు.", extra: ["look"] },
    { en: "Thank you for inviting us to the wedding.", te: "పెళ్లికి మమ్మల్ని పిలిచినందుకు థ్యాంక్స్.", extra: ["invite"] },
    { en: "May God bless you both with a happy life.", te: "దేవుడు మీ ఇద్దరినీ చల్లగా, సంతోషంగా ఉండేలా దీవించాలి.", extra: ["blessed"] },
    { en: "Best wishes to the bride and groom.", te: "వధూవరులకి శుభాకాంక్షలు.", extra: ["a"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a couple you know. Say your wish for them aloud, softly: Wishing you both …",
    te: "మీకు తెలిసిన ఒక జంటను గుర్తు చేసుకోండి. వాళ్ళకి మీ శుభాకాంక్షను మెల్లగా, గట్టిగా చెప్పండి: Wishing you both …",
  },
  words: [
    { en: "bride", te: "పెళ్లికూతురు" },
    { en: "groom", te: "పెళ్లికొడుకు" },
    { en: "couple", te: "జంట, దంపతులు" },
    { en: "married life", te: "వైవాహిక జీవితం, సంసారం" },
    { en: "best wishes", te: "శుభాకాంక్షలు" },
  ],
  grammar: ["politeness-softening", "articles", "prepositions"],
  topics: ["festivals", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Formal wishes", te: "మర్యాదగా శుభాకాంక్షలు" },
      body: {
        en: "At a wedding, start your wish with Wishing you both or Many congratulations on. They sound warmer and more formal than a plain Congratulations.",
        te: "పెళ్లిలో శుభాకాంక్షలు Wishing you both లేదా Many congratulations on తో మొదలుపెట్టండి. ఒట్టి Congratulations కంటే ఇవి ఆప్యాయంగా, మర్యాదగా వినిపిస్తాయి.",
      },
      bridge: {
        te: ["మీ ఇద్దరికీ", "సంతోషకరమైన వైవాహిక జీవితం", "కోరుకుంటున్నాను"],
        en: [
          { text: "Wishing", role: "action" },
          { text: "you both", role: "who" },
          { text: "a very happy married life", role: "what" },
        ],
      },
      examples: [
        { en: "Wishing you both a very happy married life.", te: "మీ ఇద్దరి వైవాహిక జీవితం ఎంతో సంతోషంగా సాగాలని కోరుకుంటున్నాను." },
        { en: "Many congratulations on Anitha's wedding.", te: "అనిత పెళ్లి సందర్భంగా మీకు హృదయపూర్వక అభినందనలు." },
        { en: "You make a lovely couple.", te: "మీ జంట చాలా చూడముచ్చటగా ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which wish, for whom?", te: "ఎవరికి ఏ శుభాకాంక్ష?" },
      items: [
        {
          form: "Wishing you both …",
          useFor: { en: "To the couple, face to face or in a card.", te: "దంపతులకి, ఎదురుగా గానీ కార్డులో గానీ." },
          example: { en: "Wishing you both a very happy married life.", te: "మీ ఇద్దరి వైవాహిక జీవితం ఎంతో సంతోషంగా సాగాలని కోరుకుంటున్నాను." },
        },
        {
          form: "Many congratulations on …",
          useFor: { en: "To the parents or the family.", te: "తల్లిదండ్రులకి, కుటుంబానికి." },
          example: { en: "Many congratulations on Anitha's wedding.", te: "అనిత పెళ్లి సందర్భంగా మీకు హృదయపూర్వక అభినందనలు." },
        },
        {
          form: "May God bless you both.",
          useFor: { en: "A blessing for the couple, often from an elder.", te: "దంపతులకి దీవెన; ఎక్కువగా పెద్దవాళ్ళు అంటారు." },
          example: { en: "May God bless you both with a happy life.", te: "దేవుడు మీ ఇద్దరినీ చల్లగా, సంతోషంగా ఉండేలా దీవించాలి." },
        },
        {
          form: "Best wishes to …",
          useFor: { en: "In a card or a message, when the couple is not in front of you.", te: "దంపతులు ఎదురుగా లేనప్పుడు, కార్డులో లేదా మెసేజ్‌లో." },
          example: { en: "Best wishes to the bride and groom.", te: "వధూవరులకి శుభాకాంక్షలు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Congratulations for your wedding.",
      right: "Congratulations on your wedding.",
      why: {
        en: "English says congratulations on a happy event, never for; Telugu gives no clue here.",
        te: "ఇంగ్లీష్‌లో శుభ సందర్భానికి congratulations on అంటారు, for కాదు; తెలుగు నుంచి ఈ తేడా తెలియదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Wishing you both very happy married life.",
      right: "Wishing you both a very happy married life.",
      why: {
        en: "A happy life is one thing, so it needs a; Telugu has no word like a.",
        te: "సంతోషకరమైన జీవితం ఒక్కటి, అందుకే a కావాలి; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "readIt",
      kind: "message",
      heading: "Prasad (neighbour)",
      lines: [
        "Dear friends,",
        "Our Anitha is getting married to Suresh.",
        "Wedding: Sunday, 14 December, at 10:30 am.",
        "Reception: the same evening, at 7 pm.",
        "Venue: Sri Krishna Function Hall, Guntur.",
        "Please come and bless the couple.",
      ],
      prompt: { en: "Your neighbour sent this. When is the reception?", te: "పక్కింటాయన ఈ మెసేజ్ పంపారు. రిసెప్షన్ ఎప్పుడు?" },
      options: ["Sunday evening at 7 pm", "Sunday morning at 10:30 am", "Saturday evening at 7 pm"],
      answer: 0,
      why: {
        en: "The fourth line says the reception is on the same day as the wedding, in the evening.",
        te: "రిసెప్షన్ పెళ్లి రోజే, సాయంత్రం అని నాలుగో లైన్‌లో ఉంది.",
      },
      say: "The reception is on Sunday evening, at 7 pm.",
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The bride ___ beautiful in that silk saree.",
      te: "ఆ పట్టుచీరలో పెళ్లికూతురు చాలా అందంగా ఉన్నారు.",
      options: ["looks", "look", "looking"],
      answer: 0,
      why: {
        en: "One person, like the bride, takes s on the verb; Telugu shows this in a different way.",
        te: "ఒక్కరైతే (పెళ్లికూతురు లాగా) verb కి s వస్తుంది; తెలుగులో ఇది వేరేలా ఉంటుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "At the reception, you meet the groom's father. Tell him the arrangements are very nice.",
        te: "రిసెప్షన్‌లో పెళ్లికొడుకు తండ్రిగారిని కలిశారు. ఏర్పాట్లు చాలా బాగున్నాయని ఆయనకి చెప్పండి.",
      },
      options: ["The arrangements are very nice.", "The arrangements very nice.", "The arrangements is very nice."],
      answer: 0,
      why: {
        en: "Arrangements means more than one thing, so it takes are; Telugu needs no such word.",
        te: "arrangements అంటే చాలా ఏర్పాట్లు, అందుకే are; తెలుగులో ఇలాంటి పదం అక్కర్లేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "The groom is engineer in Hyderabad.",
      wrongIndex: 3,
      fix: "The groom is an engineer in Hyderabad.",
      why: {
        en: "A job needs a or an before it, and engineer starts with a vowel sound, so an.",
        te: "ఉద్యోగం ముందు a లేదా an కావాలి; engineer అచ్చు శబ్దంతో మొదలవుతుంది, అందుకే an.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "At the wedding, you meet Anitha's parents. Congratulate them.",
        te: "పెళ్లిలో అనిత తల్లిదండ్రుల్ని కలిశారు. వాళ్ళకి అభినందనలు చెప్పండి.",
      },
      expected: ["Many congratulations on Anitha's wedding.", "Congratulations on Anitha's wedding.", "Many congratulations on the wedding."],
      options: ["Many congratulations on Anitha's wedding.", "Many congratulations for Anitha's wedding.", "Many congratulation on Anitha's wedding."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Go up on the stage and wish the new couple.",
        te: "స్టేజ్ మీదికి వెళ్ళి కొత్త దంపతులకి శుభాకాంక్షలు చెప్పండి.",
      },
      expected: [
        "Wishing you both a very happy married life.",
        "Wishing you both a happy married life.",
        "Best wishes to you both.",
        "Congratulations to you both.",
      ],
      options: ["Wishing you both a very happy married life.", "Wishing you both a very happy marriage life.", "Wishing you both very happy married life."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the reception", te: "రిసెప్షన్‌లో" },
    scene: {
      en: "Your neighbour Prasad's daughter, Anitha, married Suresh today. You go up to the stage at the reception.",
      te: "మీ పక్కింటి ప్రసాద్ గారి అమ్మాయి అనితకి ఈ రోజు సురేష్‌తో పెళ్లయింది. రిసెప్షన్‌లో మీరు స్టేజ్ దగ్గరికి వెళ్ళారు.",
    },
    partner: { en: "Prasad (the bride's father)", te: "ప్రసాద్ (పెళ్లికూతురి తండ్రి)" },
    voice: "b",
    skills: [
      { id: "wish", label: { en: "Giving wishes", te: "శుభాకాంక్షలు చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Welcome, welcome! Thank you for coming.",
        te: "రండి, రండి! వచ్చినందుకు థ్యాంక్స్.",
        hint: { en: "Congratulate him on his daughter's wedding.", te: "ఆయన అమ్మాయి పెళ్లి సందర్భంగా అభినందనలు చెప్పండి." },
        replies: [
          { say: "Many congratulations on Anitha's wedding!", good: true, skill: "wish" },
          { say: "Many congratulations for Anitha's wedding!", good: false, skill: "wish", fixIt: "preposition" },
        ],
      },
      {
        partner: "Thank you. Come, meet the couple. This is Anitha, and this is Suresh.",
        te: "థ్యాంక్స్. రండి, దంపతుల్ని కలవండి. ఈమె అనిత, ఈయన సురేష్.",
        hint: { en: "Wish the couple a happy married life.", te: "దంపతులకి సంతోషకరమైన వైవాహిక జీవితం కోరుకోండి." },
        replies: [
          { say: "Wishing you both a very happy married life.", good: true, skill: "wish" },
          { say: "Best wishes to you both. You make a lovely couple.", good: true, skill: "wish" },
          {
            say: "So, finally married! No more freedom now, Suresh!",
            good: false,
            skill: "polite",
            react: { en: "Ha! Please don't scare the groom today.", te: "హా! ఈ రోజు పెళ్లికొడుకుని భయపెట్టకండి." },
          },
        ],
      },
      {
        partner: "Did you have dinner? Please eat before you go.",
        te: "భోజనం చేశారా? వెళ్ళే ముందు తప్పకుండా తినండి.",
        hint: { en: "Say yes, and praise the food and the arrangements.", te: "చేశానని చెప్పి, భోజనాన్ని, ఏర్పాట్లని పొగడండి." },
        replies: [
          { say: "Yes, thank you. The food and the arrangements are wonderful.", good: true, skill: "polite" },
          { say: "Yes, thank you. The food and the arrangements wonderful.", good: false, skill: "polite", fixIt: "be" },
        ],
      },
      {
        partner: "So glad you came. Please visit us again soon.",
        te: "మీరు వచ్చినందుకు చాలా సంతోషం. మళ్ళీ త్వరలో మా ఇంటికి రండి.",
        hint: { en: "Bless the couple once more, and say goodbye.", te: "దంపతుల్ని ఇంకోసారి దీవించి, వెళ్ళొస్తానని చెప్పండి." },
        replies: [
          { say: "May God bless them both. Goodbye!", good: true, skill: "wish" },
          { say: "May God blessed them both. Goodbye!", good: false, skill: "wish" },
        ],
      },
    ],
  },
};
