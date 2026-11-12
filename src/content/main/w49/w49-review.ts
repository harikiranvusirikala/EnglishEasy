import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 49, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), plus a delivery-words round, reading a code, and a story. */

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
  id: "w49-review",
  kind: "review",
  title: { en: "Your Parcel Is on the Way", te: "మీ పార్సెల్ దారిలో ఉంది" },
  extras: [
    pick(
      "q1",
      "It will arrive ___ Friday.",
      "శుక్రవారం లోపు వస్తుంది.",
      ["by", "until", "since"],
      0,
      {
        en: "By a day means on that day or before; until is for something that goes on.",
        te: "by + రోజు అంటే ఆ రోజు గానీ, ముందు గానీ; until అయితే ఒక పని ఆ రోజు దాకా సాగుతుంది.",
      },
      "preposition",
    ),
    pick("q2", "I'm going to ___ a gift online.", "ఆన్‌లైన్‌లో ఒక గిఫ్ట్ ఆర్డర్ చేయబోతున్నాను.", ["order", "ordering", "ordered"], 0, {
      en: "After going to, the verb stays plain, with no -ing and no -ed.",
      te: "going to తర్వాత verb అలాగే వస్తుంది; -ing గానీ, -ed గానీ రావు.",
    }),
    pick(
      "q3",
      "Your parcel ___ out for delivery today.",
      "మీ పార్సెల్ ఈ రోజు డెలివరీకి బయలుదేరింది.",
      ["is", "are", "be"],
      0,
      {
        en: "One parcel takes is; the Telugu sentence has no word like is.",
        te: "ఒక్క పార్సెల్ కాబట్టి is; తెలుగు వాక్యంలో is లాంటి పదం ఉండదు, అయినా ఇంగ్లీష్‌లో వదలకూడదు.",
      },
      "be",
    ),
    pick("q4", "I ___ received it yet.", "నాకు ఇంకా అందలేదు.", ["haven't", "didn't", "am not"], 0, {
      en: "Yet goes with haven't and the done form; didn't needs the plain verb.",
      te: "yet తో haven't + done form వస్తుంది; didn't అయితే verb అలాగే ఉండాలి.",
    }),
    pick(
      "q5",
      "The watchman ___ all the parcels in his cabin.",
      "watchman అన్ని పార్సెల్స్ తన cabin లో ఉంచుతారు.",
      ["keeps", "keep", "keeping"],
      0,
      {
        en: "One person, like he, needs s on the verb, every time.",
        te: "ఒక్కరి గురించి (he లాగా) చెప్తే verb కి ఎప్పుడూ s కావాలి.",
      },
      "he-she-s",
    ),
    pick(
      "q6",
      "I have lived in this colony ___ twenty years.",
      "ఇరవై ఏళ్ళుగా ఈ కాలనీలో ఉంటున్నాను.",
      ["for", "since", "from"],
      0,
      {
        en: "For goes with a length of time; since needs a start, like last year.",
        te: "ఎంత కాలం అయితే for; since అయితే మొదలైన టైమ్ కావాలి (last year లాగా).",
      },
      "duration",
    ),
    {
      id: "q7",
      type: "choose",
      prompt: { en: "Your delivery code is 6880. How do you read it?", te: "మీ delivery code 6880. దాన్ని ఎలా చదువుతారు?" },
      options: ["Six double eight zero", "Six thousand eight hundred eighty", "Sixty-eight eighty"],
      answer: 0,
      why: {
        en: "Read a code digit by digit, and say double for two same digits.",
        te: "కోడ్‌ని ఒక్కో అంకె చదవాలి; ఒకే అంకె రెండుసార్లు వస్తే double అనాలి.",
      },
    },
    {
      id: "story",
      type: "story",
      title: { en: "My First Online Order", te: "నా మొదటి ఆన్‌లైన్ ఆర్డర్" },
      teller: { en: "Rahim", te: "రహీమ్" },
      voice: "b",
      parts: [
        {
          en: "Last month, my old mixer stopped working. I needed a new one, but the big shops are far. My neighbour Grace said, Why don't you order one online?",
          te: "పోయిన నెల నా పాత mixer పని చేయడం మానేసింది. కొత్తది కావాలి, కానీ పెద్ద షాపులు దూరం. ఆన్‌లైన్‌లో ఆర్డర్ చేయొచ్చు కదా అని మా పక్కింటి గ్రేస్ గారు అన్నారు.",
        },
        {
          en: "She showed me a shopping app on her phone. We chose a good mixer and added it to the cart. I don't like paying online, so I chose cash on delivery.",
          te: "ఆవిడ తన ఫోన్‌లో ఒక shopping app చూపించారు. ఒక మంచి mixer ఎంచుకుని cart లో వేశాం. ఆన్‌లైన్‌లో కట్టడం నాకు ఇష్టం ఉండదు, అందుకే cash on delivery ఎంచుకున్నాను.",
        },
        {
          en: "The next day, a message came. It said: Your order has been shipped. It will arrive by Friday. I was very happy, and I told my walking group.",
          te: "మరుసటి రోజు ఒక మెసేజ్ వచ్చింది. మీ ఆర్డర్ పంపించారు, శుక్రవారం లోపు వస్తుంది అని అందులో ఉంది. నాకు చాలా సంతోషం వేసింది, మా వాకింగ్ గ్రూప్‌లో అందరికీ చెప్పాను.",
        },
        {
          en: "On Thursday, a man called me about my order. He asked for the OTP on my phone. But that OTP was from my bank!",
          te: "గురువారం ఒకాయన నా ఆర్డర్ గురించి ఫోన్ చేశారు. నా ఫోన్‌కి వచ్చిన OTP చెప్పమన్నారు. కానీ ఆ OTP మా బ్యాంక్ నుంచి వచ్చింది!",
        },
        {
          en: "I remembered the rule. A real delivery person never needs your bank OTP. So I said, Sorry, I never share my bank OTP. Then I hung up.",
          te: "నాకు ఆ రూల్ గుర్తొచ్చింది. నిజమైన డెలివరీ వ్యక్తికి మన బ్యాంక్ OTP ఎప్పుడూ అక్కర్లేదు. అందుకే, సారీ, నా బ్యాంక్ OTP ఎవరికీ చెప్పను అని ఫోన్ పెట్టేశాను.",
        },
        {
          en: "On Friday evening, the real delivery person came to my door. He gave me the parcel, and I checked the box. Then I paid 2400 rupees and told him the delivery code. My new mixer works very well!",
          te: "శుక్రవారం సాయంత్రం నిజమైన డెలివరీ ఆయన మా ఇంటికి వచ్చారు. పార్సెల్ నా చేతికి ఇచ్చారు, నేను బాక్స్ చూసుకున్నాను. తర్వాత 2400 రూపాయలు ఇచ్చి, delivery code చెప్పాను. నా కొత్త mixer చాలా బాగా పని చేస్తోంది!",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Rahim's first online order", "A visit to a repair shop", "A trip with the walking group"],
          answer: 0,
        },
        {
          prompt: { en: "How did Rahim pay for the mixer?", te: "రహీమ్ గారు mixer కి డబ్బు ఎలా కట్టారు?" },
          options: ["In cash, at the door", "By UPI on the app", "With Grace's card"],
          answer: 0,
        },
        {
          prompt: { en: "What did the caller on Thursday ask for?", te: "గురువారం ఫోన్ చేసినాయన ఏం అడిగారు?" },
          options: ["The OTP from Rahim's bank", "Rahim's address", "The delivery code"],
          answer: 0,
        },
        {
          prompt: { en: "When did the mixer arrive?", te: "mixer ఎప్పుడు వచ్చింది?" },
          options: ["On Friday evening", "On Thursday morning", "On Saturday"],
          answer: 0,
        },
      ],
    },
  ],
};
