import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 53, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), plus a for / since and have been round, and a story. */

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
  id: "w53-review",
  kind: "review",
  title: { en: "Still in the Queue", te: "ఇంకా క్యూలోనే" },
  extras: [
    pick(
      "q1",
      "I've been waiting ___ an hour.",
      "నేను గంట నుంచి ఎదురుచూస్తున్నాను.",
      ["for", "since", "from"],
      0,
      {
        en: "For goes with a length of time, like an hour or two days.",
        te: "for ఎంతసేపు అనేదానితో వస్తుంది: an hour, two days లాగా.",
      },
      "preposition",
    ),
    pick("q2", "We've been standing here ___ nine o'clock.", "తొమ్మిది గంటల నుంచి మేము ఇక్కడ నిలబడి ఉన్నాం.", ["since", "for", "from"], 0, {
      en: "Since goes with the time something started, like nine o'clock or Monday.",
      te: "since మొదలైన టైమ్‌తో వస్తుంది: nine o'clock, Monday లాగా.",
    }),
    pick(
      "q3",
      "How long ___ you been waiting?",
      "మీరు ఎంతసేపట్నుంచి ఎదురుచూస్తున్నారు?",
      ["have", "are", "has"],
      0,
      {
        en: "In a How long question, have comes before you, and then been.",
        te: "How long ప్రశ్నలో you కంటే ముందు have, తర్వాత been వస్తాయి.",
      },
      "question",
    ),
    pick(
      "q4",
      "The counter ___ been closed since one o'clock.",
      "ఒంటిగంట నుంచి కౌంటర్ మూసి ఉంది.",
      ["has", "have", "is"],
      0,
      {
        en: "One counter is like he or she, so it takes has, not have.",
        te: "ఒక్క కౌంటర్ అంటే he, she లాగా; అందుకే have కాదు, has.",
      },
      "he-she-s",
    ),
    pick(
      "q5",
      "I ___ this phone for five years.",
      "ఈ ఫోన్ ఐదేళ్ళుగా నా దగ్గర ఉంది.",
      ["have had", "have been having", "am having"],
      0,
      {
        en: "Have for owning something is a state, so it never takes -ing here.",
        te: "ఏదైనా మన దగ్గర ఉంది అనే have ఒక స్థితి; ఇక్కడ దానికి -ing రాదు.",
      },
      "state-ing",
    ),
    pick(
      "q6",
      "I ___ here since ten, and the line hasn't moved.",
      "పది నుంచి ఇక్కడ ఉన్నాను, లైన్ అస్సలు కదలలేదు.",
      ["have been", "am", "was"],
      0,
      {
        en: "From ten until now needs have been; am is only for this moment.",
        te: "పది నుంచి ఇప్పటిదాకా అంటే have been కావాలి; am ఈ క్షణానికి మాత్రమే.",
      },
      "duration",
    ),
    {
      id: "x-story",
      type: "story",
      title: { en: "The Man Who Pushed In", te: "మధ్యలో దూరిన మనిషి" },
      teller: { en: "Ramesh", te: "రమేష్" },
      voice: "b",
      parts: [
        {
          en: "Last Monday, I went to the bank to update my passbook. There was a long queue, and the fans were not working.",
          te: "పోయిన సోమవారం పాస్‌బుక్ అప్‌డేట్ చేయించుకోవడానికి బ్యాంకుకి వెళ్ళాను. పెద్ద క్యూ ఉంది, ఫ్యాన్లు కూడా తిరగట్లేదు.",
        },
        {
          en: "An old lady was standing in front of me. She smiled and said, \"I've been standing here since ten.\" She looked very tired.",
          te: "నా ముందు ఒక పెద్దావిడ నిలబడి ఉన్నారు. \"పది నుంచి ఇక్కడ నిలబడి ఉన్నాను\" అని నవ్వుతూ అన్నారు. ఆవిడ చాలా అలసిపోయినట్టు కనిపించారు.",
        },
        {
          en: "Then a young man walked straight to the counter. He said, \"I only have one small question.\" Nobody said anything.",
          te: "అప్పుడు ఒక యువకుడు నేరుగా కౌంటర్ దగ్గరికి వెళ్ళారు. \"నాకు ఒక్క చిన్న ప్రశ్నే ఉంది\" అన్నారు. ఎవరూ ఏమీ అనలేదు.",
        },
        {
          en: "So I said, \"Excuse me, the line starts there. We've all been waiting for an hour.\" He turned and saw the long line.",
          te: "అప్పుడు నేను \"ఎక్స్‌క్యూజ్ మీ, లైన్ అక్కడ మొదలవుతుంది. మేమంతా గంట నుంచి ఎదురుచూస్తున్నాం\" అన్నాను. ఆయన వెనక్కి తిరిగి పెద్ద లైన్ చూశారు.",
        },
        {
          en: "\"Sorry, sir, I didn't see it,\" he said. He went to the end of the line. Soon, the manager opened a separate counter for senior citizens.",
          te: "\"సారీ సార్, నేను చూడలేదు\" అన్నారు. ఆయన లైన్ చివరికి వెళ్ళారు. కాసేపటికి మేనేజర్ గారు సీనియర్ సిటిజన్స్‌కి వేరే కౌంటర్ తెరిచారు.",
        },
        {
          en: "The old lady and I finished our work in ten minutes. On the way out, the young man waved and said sorry again. A kind word works better than anger.",
          te: "ఆ పెద్దావిడ, నేను పది నిమిషాల్లో పని పూర్తి చేసుకున్నాం. బయటికి వెళ్ళేటప్పుడు ఆ యువకుడు చేయి ఊపి మళ్ళీ సారీ చెప్పారు. కోపం కంటే మంచి మాటే బాగా పనిచేస్తుంది.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A man who pushed in at the bank", "A lost passbook", "Opening a new bank account"],
          answer: 0,
        },
        {
          prompt: { en: "Why did Ramesh go to the bank?", te: "రమేష్ గారు బ్యాంకుకి ఎందుకు వెళ్ళారు?" },
          options: ["To update his passbook", "To take out money", "To meet the manager"],
          answer: 0,
        },
        {
          prompt: { en: "When did the old lady start waiting in the line?", te: "ఆ పెద్దావిడ ఎన్ని గంటలకి లైన్లో నిలబడ్డారు?" },
          options: ["At ten", "At nine", "At eleven"],
          answer: 0,
        },
        {
          prompt: { en: "What did the manager do?", te: "మేనేజర్ గారు ఏం చేశారు?" },
          options: ["Opened a separate counter for senior citizens", "Sent the young man home", "Closed the bank early"],
          answer: 0,
        },
      ],
    },
  ],
};
