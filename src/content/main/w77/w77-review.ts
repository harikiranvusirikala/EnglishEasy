import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 77, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick -ed / -ing and so / such round, and a story. */

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
  id: "w77-review",
  kind: "review",
  title: { en: "Let's Talk About Films", te: "సినిమాల గురించి మాట్లాడుకుందాం" },
  extras: [
    pick("q1", "Halfway through the film, I was ___.", "సినిమా సగంలో నాకు బోర్ కొట్టింది.", ["bored", "boring", "bore"], 0, {
      en: "You are the one who feels it, so use the -ed word.",
      te: "ఆ భావం మీది, అందుకే -ed మాట వాడాలి.",
    }),
    pick("q2", "The kabaddi final was really ___.", "కబడ్డీ ఫైనల్ భలే ఉత్సాహంగా సాగింది.", ["exciting", "excited", "excite"], 0, {
      en: "The final made people feel that way, so it takes -ing.",
      te: "ఫైనల్ అలా అనిపించేలా చేసింది, అందుకే -ing మాట.",
    }),
    pick(
      "q3",
      "It's ___ funny serial.",
      "అది ఎంతో నవ్వించే సీరియల్.",
      ["such a", "so", "such"],
      0,
      {
        en: "One serial with funny before it needs such a.",
        te: "funny తో ఒక్క సీరియల్ అయితే such a కావాలి.",
      },
      "article",
    ),
    pick("q4", "The old songs were ___ sweet.", "పాత పాటలు ఎంతో మధురంగా ఉన్నాయి.", ["so", "such", "such a"], 0, {
      en: "Sweet stands alone with no thing after it, so use so.",
      te: "sweet తర్వాత ఏ వస్తువూ లేదు, అందుకే so.",
    }),
    pick(
      "q5",
      "Are you interested ___ cricket?",
      "మీకు క్రికెట్ అంటే ఆసక్తి ఉందా?",
      ["in", "on", "about"],
      0,
      {
        en: "Interested is always followed by in, never on or about.",
        te: "interested తర్వాత ఎప్పుడూ in; on, about రావు.",
      },
      "preposition",
    ),
    pick(
      "q6",
      "I ___ this serial for two years.",
      "రెండేళ్ళుగా ఈ సీరియల్ చూస్తున్నాను.",
      ["have been watching", "am watching", "watching"],
      0,
      {
        en: "For a time up to now, use have been with -ing; Telugu uses the present here.",
        te: "ఇప్పటిదాకా ఎంతకాలంగా అంటే have been తో -ing; తెలుగులో ఇక్కడ వర్తమానమే వాడతాం.",
      },
      "duration",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "Old Films Are Never Boring", te: "పాత సినిమాలు ఎప్పుడూ బోర్ కొట్టవు" },
      teller: { en: "Gopal", te: "గోపాల్" },
      voice: "b",
      parts: [
        {
          en: "Last month, our local theatre had an Old Classics Week. I was very excited. I've loved old films since my school days.",
          te: "పోయిన నెల మా ఊరి థియేటర్‌లో ఓల్డ్ క్లాసిక్స్ వీక్ పెట్టారు. నాకు చాలా ఉత్సాహంగా అనిపించింది. స్కూల్ రోజుల నుంచి నాకు పాత సినిమాలంటే ఇష్టం.",
        },
        {
          en: "I asked my friends from the walking group to come with me. Suresh laughed and said, Old films are so boring. Padma said, I get tired in long films.",
          te: "వాకింగ్ గ్రూప్ స్నేహితుల్ని నాతో రమ్మని అడిగాను. సురేష్ గారు నవ్వి, 'పాత సినిమాలు చాలా బోరింగ్' అన్నారు. 'పెద్ద సినిమాలు చూస్తే నాకు అలసట వస్తుంది' అని పద్మ గారు అన్నారు.",
        },
        {
          en: "But I said, Please try just one. The tickets are only fifty rupees. Finally, five of us went on Sunday morning.",
          te: "'ఒక్కటి చూడండి, టికెట్ యాభై రూపాయలే' అని నేను అడిగాను. చివరికి ఆదివారం పొద్దున మేం ఐదుగురం వెళ్ళాం.",
        },
        {
          en: "It was a black-and-white film from the nineteen sixties. For the first ten minutes, Suresh looked bored. Then the songs started, and they were so beautiful.",
          te: "అది 1960ల నాటి బ్లాక్ అండ్ వైట్ సినిమా. మొదటి పది నిమిషాలు సురేష్ గారికి బోర్ కొట్టినట్టు కనిపించింది. తర్వాత పాటలు మొదలయ్యాయి, అవి ఎంతో అందంగా ఉన్నాయి.",
        },
        {
          en: "The story was full of humour, and we laughed a lot. The ending was so surprising. Everyone in the hall was surprised, even Suresh!",
          te: "కథ నిండా హాస్యమే, మేం బాగా నవ్వుకున్నాం. ముగింపు ఎంతో ఆశ్చర్యపరిచింది. హాల్లో అందరూ ఆశ్చర్యపోయారు, సురేష్ గారు కూడా!",
        },
        {
          en: "Outside, Suresh said, That was such a good film! Now he comes with me every Sunday. Old films are never boring, are they?",
          te: "బయటికి వచ్చాక, 'ఎంత మంచి సినిమానో!' అని సురేష్ గారు అన్నారు. ఇప్పుడు ఆయన ప్రతి ఆదివారం నాతో వస్తున్నారు. పాత సినిమాలు ఎప్పుడూ బోర్ కొట్టవు, కదా?",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Friends enjoying an old film together", "A new film that was boring", "Booking tickets on the phone"],
          answer: 0,
        },
        {
          prompt: { en: "What did Suresh say about old films at first?", te: "మొదట్లో పాత సినిమాల గురించి సురేష్ గారు ఏమన్నారు?" },
          options: ["They are so boring.", "They are too expensive.", "They are too short."],
          answer: 0,
        },
        {
          prompt: { en: "How much were the tickets?", te: "టికెట్ ధర ఎంత?" },
          options: ["Fifty rupees", "Five rupees", "Two hundred rupees"],
          answer: 0,
        },
        {
          prompt: { en: "What does Suresh do now?", te: "ఇప్పుడు సురేష్ గారు ఏం చేస్తున్నారు?" },
          options: ["He goes with Gopal every Sunday.", "He watches films on YouTube.", "He never goes to the theatre."],
          answer: 0,
        },
      ],
    },
  ],
};
