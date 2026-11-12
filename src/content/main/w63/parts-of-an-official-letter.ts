import type { Lesson } from "../../types";

/** Week 63, Day 1 (CURRICULUM §5): the parts of an official letter — Dear Sir or Madam, Subject, Ref. No., Yours faithfully. */
export const day: Lesson = {
  id: "parts-of-an-official-letter",
  kind: "lesson",
  title: { en: "Dear Sir or Madam", te: "ఉత్తరం మొదలు, ముగింపు" },
  subtitle: "the parts of a letter",
  summary: {
    en: "Learn the parts of an official letter: the date, the subject, Dear Sir or Madam and Yours faithfully.",
    te: "ఆఫీసు ఉత్తరంలోని భాగాలు నేర్చుకుందాం: తేదీ, subject, Dear Sir or Madam, Yours faithfully.",
  },
  seo: {
    title: "Reading an Official Letter in English for Telugu Speakers",
    description:
      "Learn the parts of an official letter: Subject, Ref. No., Dear Sir or Madam and Yours faithfully. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "This letter", role: "who" },
    { text: "is dated", role: "action" },
    { text: "the fifth of March", role: "when" },
  ],
  core: [
    { en: "This letter is from the bank.", te: "ఈ ఉత్తరం బ్యాంక్ నుంచి వచ్చింది.", extra: ["came"] },
    { en: "The subject line tells you what the letter is about.", te: "ఉత్తరం దేని గురించో subject లైన్ చెప్తుంది.", extra: ["tell"] },
    { en: "This letter is dated the fifth of March.", te: "ఈ ఉత్తరం మీద మార్చి ఐదో తేదీ ఉంది.", extra: ["five"] },
    { en: "It is signed by the branch manager.", te: "దీని మీద బ్రాంచ్ మేనేజర్ గారు సంతకం చేశారు.", extra: ["sign"] },
    { en: "The letter starts with Dear Sir or Madam.", te: "ఉత్తరం Dear Sir or Madam తో మొదలవుతుంది.", extra: ["start"] },
    { en: "It ends with Yours faithfully and a signature.", te: "ఉత్తరం Yours faithfully, ఒక సంతకంతో ముగుస్తుంది.", extra: ["end"] },
    { en: "Keep this letter safe. You will need it at the branch.", te: "ఈ ఉత్తరం జాగ్రత్తగా దాచుకోండి. బ్రాంచ్‌లో ఇది అవసరం అవుతుంది.", extra: ["safely"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find any letter or bill at home. Point to the date, the subject and the signature, and say them aloud.",
    te: "ఇంట్లో ఏదైనా ఉత్తరం లేదా బిల్లు తీసుకోండి. తేదీ, subject, సంతకం చూపిస్తూ గట్టిగా చదవండి.",
  },
  words: [
    { en: "official letter", te: "ఆఫీసు నుంచి వచ్చే ఉత్తరం" },
    { en: "subject", te: "ఉత్తరం దేని గురించో చెప్పే లైన్, subject" },
    { en: "dated", te: "ఆ తేదీ వేసిన" },
    { en: "Dear Sir or Madam", te: "ఉత్తరం మొదట్లో గౌరవంగా పిలిచే మాట" },
    { en: "Yours faithfully", te: "ఉత్తరం చివర 'ఇట్లు'" },
  ],
  grammar: ["passive-voice", "present-simple", "articles"],
  topics: ["offices", "bank", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "The parts of a letter", te: "ఉత్తరంలోని భాగాలు" },
      body: {
        en: "An official letter has fixed parts: the sender, the date, Ref. No., the subject, Dear Sir or Madam, and Yours faithfully. Read the subject first: it tells you what the letter is about.",
        te: "ఆఫీసు ఉత్తరంలో కొన్ని భాగాలు ఉంటాయి: పంపినవారు, తేదీ, Ref. No., subject, Dear Sir or Madam, Yours faithfully. ముందు subject చదవండి: ఉత్తరం దేని గురించో అది చెప్తుంది.",
      },
      bridge: {
        te: ["ఈ ఉత్తరం మీద", "మార్చి ఐదో తేదీ", "ఉంది"],
        en: [
          { text: "This letter", role: "who" },
          { text: "is dated", role: "action" },
          { text: "the fifth of March", role: "when" },
        ],
      },
      examples: [
        { en: "This letter is dated the fifth of March.", te: "ఈ ఉత్తరం మీద మార్చి ఐదో తేదీ ఉంది." },
        { en: "The letter starts with Dear Sir or Madam.", te: "ఉత్తరం Dear Sir or Madam తో మొదలవుతుంది." },
        { en: "It ends with Yours faithfully and a signature.", te: "ఉత్తరం Yours faithfully, ఒక సంతకంతో ముగుస్తుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which part tells you what?", te: "ఏ భాగం ఏం చెప్తుంది?" },
      items: [
        {
          form: "Subject:",
          useFor: { en: "What the letter is about, in a few words.", te: "ఉత్తరం దేని గురించో, కొన్ని మాటల్లో." },
          example: { en: "The subject line tells you what the letter is about.", te: "ఉత్తరం దేని గురించో subject లైన్ చెప్తుంది." },
        },
        {
          form: "Ref. No.",
          useFor: { en: "The reference number. Give it when you call or visit.", te: "reference నంబర్. ఫోన్ చేసినా, వెళ్ళినా ఇది చెప్పాలి." },
          example: { en: "Please give this reference number at the counter.", te: "కౌంటర్ దగ్గర ఈ reference నంబర్ ఇవ్వండి." },
        },
        {
          form: "dated …",
          useFor: { en: "The day the letter was written.", te: "ఉత్తరం రాసిన రోజు." },
          example: { en: "This letter is dated the fifth of March.", te: "ఈ ఉత్తరం మీద మార్చి ఐదో తేదీ ఉంది." },
        },
        {
          form: "Yours faithfully",
          useFor: { en: "The end, just before the signature and the name.", te: "ఉత్తరం చివర, సంతకం, పేరు ముందు." },
          example: { en: "It ends with Yours faithfully and a signature.", te: "ఉత్తరం Yours faithfully, ఒక సంతకంతో ముగుస్తుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "This letter is from bank.",
      right: "This letter is from the bank.",
      why: {
        en: "Your own bank, the one you both know, takes the; Telugu has no word for the.",
        te: "మీ ఇద్దరికీ తెలిసిన బ్యాంక్ కాబట్టి ముందు the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "This letter came on my name.",
      right: "This letter is addressed to me.",
      why: {
        en: "A letter is addressed to a person; Telugu నా పేరు మీద makes people say on my name.",
        te: "ఉత్తరం ఒకరికి addressed to అవుతుంది; తెలుగులో 'నా పేరు మీద' అంటాం కాబట్టి on my name అనేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your neighbour asks what the subject line is for. Explain it to her.",
        te: "subject లైన్ ఎందుకని పక్కింటావిడ అడుగుతున్నారు. ఆవిడకి వివరించండి.",
      },
      options: ["It tells you what the letter is about.", "It tell you what the letter is about.", "It tells you what is the letter about."],
      answer: 0,
      why: {
        en: "With it, the verb takes s; and after what, the letter comes before is.",
        te: "it తో verb కి s వస్తుంది; what తర్వాత ముందు the letter, తర్వాత is వస్తాయి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "It is signed ___ the branch manager.",
      te: "దీని మీద బ్రాంచ్ మేనేజర్ గారు సంతకం చేశారు.",
      options: ["by", "from", "with"],
      answer: 0,
      why: {
        en: "After a done form like signed, by tells you who did it; Telugu says only గారు.",
        te: "signed లాంటి పూర్తయిన రూపం తర్వాత, ఎవరు చేశారో by చెప్తుంది; తెలుగులో 'గారు' చాలు.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "letter",
      heading: "Godavari Cooperative Bank",
      lines: [
        "Main Road Branch, Guntur",
        "Reference number: GCB four five eight one",
        "Dear Sir or Madam,",
        "Subject: Your new debit card",
        "Your new debit card is ready at the branch.",
        "Please collect it within thirty days, with your passbook.",
        "The card will not be sent by post.",
        "Never share your PIN or OTP with anyone.",
        "Yours faithfully,",
        "Branch Manager",
      ],
      questions: [
        {
          prompt: { en: "What is the letter about?", te: "ఈ ఉత్తరం దేని గురించి?" },
          options: ["A new debit card", "A new loan", "A change of address"],
          answer: 0,
          why: {
            en: "The subject line gives the topic in a few words, before the letter starts.",
            te: "ఉత్తరం మొదలయ్యే ముందే subject లైన్ విషయాన్ని కొన్ని మాటల్లో చెప్తుంది.",
          },
        },
        {
          prompt: { en: "How will you get the card?", te: "కార్డు మీకు ఎలా అందుతుంది?" },
          options: ["Collect it at the branch", "It will come by post", "The manager will bring it home"],
          answer: 0,
          why: {
            en: "The letter says the card is not sent by post, so you must go there yourself.",
            te: "కార్డు పోస్ట్‌లో పంపరని ఉత్తరంలో ఉంది; అందుకే మీరే బ్రాంచ్‌కి వెళ్ళాలి.",
          },
        },
        {
          prompt: { en: "Who signed the letter?", te: "ఉత్తరం మీద ఎవరు సంతకం చేశారు?" },
          options: ["The branch manager", "A bank customer", "The postman"],
          answer: 0,
          why: {
            en: "The name or post just after Yours faithfully tells you who signed it.",
            te: "Yours faithfully తర్వాత ఉన్న పేరు లేదా హోదా, సంతకం చేసింది ఎవరో చెప్తుంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "be",
      sentence: "The subject line tells you what the letter about.",
      wrongIndex: 8,
      fix: "The subject line tells you what the letter is about.",
      why: {
        en: "English needs is before about; Telugu దేని గురించో has no verb at all.",
        te: "about ముందు ఇంగ్లీష్‌లో is కావాలి; తెలుగులో 'దేని గురించో' లో verb ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your neighbour Kamala got a letter. Ask her who it is from.",
        te: "పక్కింటి కమల గారికి ఒక ఉత్తరం వచ్చింది. అది ఎవరి దగ్గర్నుంచి వచ్చిందో అడగండి.",
      },
      expected: ["Who is the letter from?", "Who is it from?", "Who sent this letter?", "Who is this letter from?"],
      options: ["Who is the letter from?", "From who the letter is?", "Who the letter is from?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "The bank clerk asks which letter you mean. Say it is dated the fifth of March.",
        te: "ఏ ఉత్తరం అని బ్యాంక్ క్లర్క్ అడుగుతున్నారు. దాని మీద మార్చి ఐదో తేదీ ఉందని చెప్పండి.",
      },
      expected: ["It's dated the fifth of March.", "It is dated the fifth of March.", "The letter is dated the fifth of March.", "The one dated the fifth of March."],
      options: ["It's dated the fifth of March.", "It's dated the five March.", "It's dated in the fifth of March."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A letter for Narayana", te: "నారాయణ గారికి ఉత్తరం" },
    scene: {
      en: "Your neighbour Narayana got a letter from his bank. His glasses are broken, so he asks you to read it.",
      te: "పక్కింటి నారాయణ గారికి బ్యాంక్ నుంచి ఒక ఉత్తరం వచ్చింది. ఆయన కళ్ళజోడు విరిగిపోయింది, అందుకే చదివి పెట్టమని మిమ్మల్ని అడుగుతున్నారు.",
    },
    partner: { en: "Narayana (your neighbour)", te: "నారాయణ (పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "read", label: { en: "Reading a letter", te: "ఉత్తరం చదవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! My glasses are broken. Could you read this letter for me?",
        te: "నమస్కారం! నా కళ్ళజోడు విరిగిపోయింది. ఈ ఉత్తరం కొంచెం చదివి పెడతారా?",
        hint: { en: "Say yes happily, and ask him to show you the letter.", te: "సంతోషంగా సరే అని, ఉత్తరం చూపించమని అడగండి." },
        replies: [
          { say: "Of course. Please show me the letter.", good: true, skill: "polite" },
          { say: "Sure, give it to me. Let me read it.", good: true, skill: "polite" },
          {
            say: "Again? Can't you read it yourself?",
            good: false,
            skill: "polite",
            react: { en: "Sorry to trouble you. I really can't see the small letters.", te: "ఇబ్బంది పెడుతున్నందుకు సారీ. చిన్న అక్షరాలు నాకు అస్సలు కనిపించట్లేదు." },
          },
        ],
      },
      {
        partner: "Thank you. What is it about? Is it bad news?",
        te: "థాంక్స్. ఇది దేని గురించి? ఏమైనా చెడ్డ వార్తా?",
        hint: { en: "Read the subject line: his new debit card. Tell him not to worry.", te: "subject లైన్ చదవండి: ఆయన కొత్త debit card. కంగారు పడొద్దని చెప్పండి." },
        replies: [
          { say: "No, it's good news. The subject is your new debit card.", good: true, skill: "read" },
          { say: "No, it's a good news. The subject is your new debit card.", good: false, skill: "read", fixIt: "plural" },
        ],
      },
      {
        partner: "Oh, good. And what date is on the letter?",
        te: "ఓ, మంచిది. ఉత్తరం మీద ఏ తేదీ ఉంది?",
        hint: { en: "Read him the date on the letter: 5 March.", te: "ఉత్తరం మీది తేదీ చదివి చెప్పండి: మార్చి 5." },
        replies: [
          { say: "It's dated the fifth of March.", good: true, skill: "read" },
          { say: "It's dated five March.", good: false, skill: "read" },
        ],
      },
      {
        partner: "Thank you so much. Will you come with me to the branch?",
        te: "చాలా థాంక్స్. నాతో పాటు బ్రాంచ్‌కి వస్తారా?",
        hint: { en: "Agree, and say when you can go together.", te: "ఒప్పుకుని, ఇద్దరూ ఎప్పుడు వెళ్ళొచ్చో చెప్పండి." },
        replies: [
          { say: "Sure. Let's go tomorrow morning.", good: true, skill: "polite" },
          { say: "Of course. I'm free tomorrow at ten.", good: true, skill: "polite" },
          { say: "Sure. Let's go on tomorrow morning.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
