import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 64, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick round on offers, a little / a few and recipe steps, and a story heard first. */

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
  id: "w64-review",
  kind: "review",
  title: { en: "A Warm Welcome", te: "ఆప్యాయంగా ఆహ్వానం" },
  extras: [
    pick("q1", "Would you like ___ filter coffee?", "ఫిల్టర్ కాఫీ తాగుతారా?", ["some", "many", "few"], 0, {
      en: "In an offer, use some, even in a question, because you expect a yes.",
      te: "ఇవ్వజూపేటప్పుడు, ప్రశ్న అయినా some వాడతారు; ఎదుటివారు సరే అంటారని అనుకుంటాం కాబట్టి.",
    }),
    pick(
      "q2",
      "Just ___ rice, please. I'm full.",
      "అన్నం కొంచెమే వేయండి. కడుపు నిండిపోయింది.",
      ["a little", "a few", "many"],
      0,
      {
        en: "Rice can't be counted, so it takes a little, not a few.",
        te: "అన్నం లెక్కపెట్టలేం కాబట్టి a little వాడాలి, a few కాదు.",
      },
      "plural",
    ),
    pick("q3", "Please take ___ sweets home with you.", "కొన్ని స్వీట్లు ఇంటికి తీసుకెళ్ళండి.", ["a few", "a little", "much"], 0, {
      en: "Sweets can be counted one by one, so use a few.",
      te: "స్వీట్లు ఒక్కొక్కటిగా లెక్కపెట్టొచ్చు కాబట్టి a few వాడాలి.",
    }),
    pick(
      "q4",
      "Please help yourself ___ the snacks.",
      "స్నాక్స్ మొహమాటపడకుండా తీసుకోండి.",
      ["to", "with", "for"],
      0,
      {
        en: "For food, help yourself always takes to; Telugu తో pulls us to with.",
        te: "ఆహారం విషయంలో help yourself తర్వాత ఎప్పుడూ to; తెలుగు 'తో' వల్ల with అనేస్తాం.",
      },
      "preposition",
    ),
    pick("q5", "First, soak the green gram ___ four hours.", "ముందు పెసలు నాలుగు గంటలు నానబెట్టండి.", ["for", "since", "from"], 0, {
      en: "For how long something lasts, use for; since needs a starting point.",
      te: "ఎంతసేపు అని చెప్పడానికి for; since కి 'ఎప్పటి నుంచి' అనే మొదలు కావాలి.",
    }),
    pick("q6", "Thank you for ___ to my home.", "మా ఇంటికి వచ్చినందుకు థ్యాంక్స్.", ["coming", "come", "came"], 0, {
      en: "After Thank you for, an action always takes -ing.",
      te: "Thank you for తర్వాత పని వస్తే ఎప్పుడూ -ing చేరుతుంది.",
    }),
    {
      id: "x-story",
      type: "story",
      title: { en: "The Guests Who Came Early", te: "ముందే వచ్చిన అతిథులు" },
      teller: { en: "Kamala", te: "కమల" },
      voice: "a",
      parts: [
        {
          en: "Last Sunday, my friend Usha and her sister came from Hyderabad. They said they would come at one. But they arrived at eleven!",
          te: "పోయిన ఆదివారం నా స్నేహితురాలు ఉష, ఆవిడ చెల్లెలు హైదరాబాద్ నుంచి వచ్చారు. ఒంటిగంటకి వస్తామన్నారు. కానీ పదకొండింటికే వచ్చేశారు!",
        },
        {
          en: "I was not ready, and the kitchen was a mess. But I smiled and opened the door. I said, Welcome! Please make yourselves at home.",
          te: "నేను రెడీగా లేను, వంటగది అంతా చిందరవందరగా ఉంది. అయినా నవ్వుతూ తలుపు తీశాను. రండి! మీ ఇల్లు లాగే హాయిగా ఉండండి అన్నాను.",
        },
        {
          en: "I asked, Would you like some filter coffee? They both said, Yes, please. While they drank it, I had an idea.",
          te: "ఫిల్టర్ కాఫీ తాగుతారా? అని అడిగాను. ఇద్దరూ సరే, ఇవ్వండి అన్నారు. వాళ్ళు కాఫీ తాగుతుండగా నాకు ఒక ఆలోచన వచ్చింది.",
        },
        {
          en: "That morning, I soaked some green gram for the evening. So I said, Let's make pesarattu together! Usha ground the batter with ginger and green chillies.",
          te: "ఆ రోజు పొద్దున్నే సాయంత్రం కోసం కొన్ని పెసలు నానబెట్టాను. అందుకే, అందరం కలిసి పెసరట్టు చేద్దాం! అన్నాను. ఉష గారు అల్లం, పచ్చిమిర్చి వేసి పిండి రుబ్బారు.",
        },
        {
          en: "Her sister made a little ginger chutney. I spread the batter on the hot tawa. We ate and laughed, and nobody cared about the mess.",
          te: "ఉష గారి చెల్లెలు కొంచెం అల్లం చట్నీ చేశారు. నేను వేడి పెనం మీద పిండి పరిచాను. అందరం తింటూ నవ్వుకున్నాం; చిందరవందరని ఎవరూ పట్టించుకోలేదు.",
        },
        {
          en: "In the evening, I walked them to the bus stop. I said, Thank you for coming. Usha laughed and said, Next time, we'll come at one!",
          te: "సాయంత్రం వాళ్ళతో బస్ స్టాప్ దాకా వెళ్ళాను. వచ్చినందుకు థ్యాంక్స్ అన్నాను. ఉష గారు నవ్వి, ఈసారి ఒంటిగంటకే వస్తాం! అన్నారు.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Guests who came early, and a happy meal", "A lost bus ticket", "A visit to the doctor"],
          answer: 0,
        },
        {
          prompt: { en: "Where did the guests come from?", te: "అతిథులు ఎక్కడి నుంచి వచ్చారు?" },
          options: ["Hyderabad", "Guntur", "Warangal"],
          answer: 0,
        },
        {
          prompt: { en: "What did they drink first?", te: "వాళ్ళు ముందు ఏం తాగారు?" },
          options: ["Filter coffee", "Tea", "Buttermilk"],
          answer: 0,
        },
        {
          prompt: { en: "Who ground the batter?", te: "పిండి ఎవరు రుబ్బారు?" },
          options: ["Usha", "Kamala", "Usha's sister"],
          answer: 0,
        },
      ],
    },
  ],
};
