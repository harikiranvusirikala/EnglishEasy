import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/**
 * Week 80, Day 7 (CURRICULUM §5): Checkpoint 6 (§2b), the end of Stage 3 — the automatic review, with the Conversation
 * Day's visit from the corporator as the check's role play, a mixed round across the stage, the listening task (a
 * two-minute story heard first), the 2-minute speaking mission (my town's problems and what would help), and a
 * celebration call for finishing Stage 3.
 */

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
  id: "w80-review",
  kind: "review",
  title: { en: "Stage 3 Review", te: "ధైర్యంగా మాట్లాడటం పునశ్చరణ" },
  extras: [
    pick("q1", "Suresh used to ___ in a village, but now he lives in Guntur.", "సురేష్ గారు ఒకప్పుడు ఒక పల్లెటూర్లో ఉండేవారు, ఇప్పుడు గుంటూరులో ఉంటున్నారు.", ["live", "living", "lived"], 0, {
      en: "After used to, the verb stays plain, with no -ing and no -ed.",
      te: "used to తర్వాత verb అలాగే ఉంటుంది; -ing గానీ -ed గానీ రావు.",
    }),
    pick("q2", "If I ___ you, I'd see a doctor about that cough.", "నేను మీ స్థానంలో ఉంటే, ఆ దగ్గు గురించి డాక్టర్‌కి చూపిస్తాను.", ["were", "am", "will be"], 0, {
      en: "Advice like this is imagined, so English says If I were you, never If I am you.",
      te: "ఇది ఊహించి ఇచ్చే సలహా, అందుకే ఇంగ్లీష్‌లో If I were you అంటారు; If I am you అనరు.",
    }),
    pick("q3", "The garbage hasn't ___ collected for four days.", "నాలుగు రోజులుగా చెత్త తీసుకెళ్ళలేదు.", ["been", "be", "being"], 0, {
      en: "After hasn't, the passive needs been, then the -ed form of the verb.",
      te: "hasn't తర్వాత passive లో been, ఆ తర్వాత verb -ed form వస్తాయి.",
    }),
    pick(
      "q4",
      "Do you know what time the bank ___?",
      "బ్యాంక్ ఎన్ని గంటలకి తెరుస్తారో మీకు తెలుసా?",
      ["opens", "does open", "open"],
      0,
      {
        en: "Inside Do you know, keep the normal order; one bank, like he or she, takes s.",
        te: "Do you know లోపల మామూలు వాక్యం వరుసే; ఒక్క bank (he, she లాగా), అందుకే s.",
      },
      "question",
    ),
    pick("q5", "You live near the temple, ___ you?", "మీరు గుడి దగ్గర ఉంటారు కదా?", ["don't", "aren't", "isn't"], 0, {
      en: "The tag copies the verb: live goes with do, so the tag is don't you.",
      te: "tag verb నే మళ్ళీ వాడుతుంది: live కి do, అందుకే tag don't you.",
    }),
    pick(
      "q6",
      "I'm full. I ate too ___ rice at lunch.",
      "కడుపు నిండిపోయింది. మధ్యాహ్నం అన్నం మరీ ఎక్కువ తినేశాను.",
      ["much", "many", "lot"],
      0,
      {
        en: "Rice cannot be counted, so it takes too much; too many is for things you count.",
        te: "అన్నాన్ని లెక్కపెట్టలేం, అందుకే too much; too many లెక్కపెట్టేవాటికి మాత్రమే.",
      },
      "plural",
    ),
    pick(
      "q7",
      "We ___ in this colony for twenty years.",
      "మేము ఇరవై ఏళ్ళుగా ఈ కాలనీలో ఉంటున్నాం.",
      ["have lived", "are living", "live"],
      0,
      {
        en: "Something that started long ago and is still true takes have lived with for.",
        te: "చాలా కాలం క్రితం మొదలై ఇప్పటికీ నిజమైనదానికి for తో పాటు have lived వాడాలి.",
      },
      "duration",
    ),
    pick(
      "q8",
      "You haven't had lunch? ___, not yet. I'll eat soon.",
      "మీరు ఇంకా భోజనం చేయలేదా? లేదు, ఇంకా లేదు. కాసేపట్లో తింటాను.",
      ["No", "Yes", "Not"],
      0,
      {
        en: "When you have not done it, English starts with No, even if Telugu says అవును.",
        te: "మీరు చేయకపోతే ఇంగ్లీష్‌లో No తో మొదలవుతుంది; తెలుగులో 'అవును' అన్నా సరే.",
      },
      "negative-answer",
    ),
    {
      id: "story",
      type: "story",
      title: { en: "Our Park Comes Back", te: "మా పార్క్ మళ్ళీ బాగుపడింది" },
      teller: { en: "Narayana", te: "నారాయణ" },
      voice: "b",
      parts: [
        {
          en: "I have lived in Sai Nagar, Nellore, for twenty-five years. There used to be a lovely park at the end of our street. Children played there, and elders walked there every evening.",
          te: "నేను ఇరవై ఐదేళ్ళుగా నెల్లూరులోని సాయి నగర్‌లో ఉంటున్నాను. మా వీధి చివర ఒకప్పుడు ఒక అందమైన పార్క్ ఉండేది. అక్కడ పిల్లలు ఆడుకునేవారు, పెద్దవాళ్ళు రోజూ సాయంత్రం నడిచేవారు.",
        },
        {
          en: "But for the last two years, nobody looked after the park. The lights were broken, and garbage was thrown everywhere. Stray dogs slept on the benches, so people stopped going.",
          te: "కానీ గత రెండేళ్ళుగా ఆ పార్క్‌ని ఎవరూ పట్టించుకోలేదు. లైట్లు పగిలిపోయాయి, ఎక్కడ చూసినా చెత్త. బెంచీల మీద వీధి కుక్కలు పడుకునేవి, అందుకే జనం వెళ్ళడం మానేశారు.",
        },
        {
          en: "One evening, my neighbour Fatima had an idea. She said that if we all helped, the park would be lovely again. At first, some people weren't sure. They thought the municipality must be too busy for us.",
          te: "ఒక సాయంత్రం పక్కింటి ఫాతిమా గారికి ఒక ఆలోచన వచ్చింది. మనమందరం సాయం చేస్తే పార్క్ మళ్ళీ అందంగా తయారవుతుందని ఆవిడ అన్నారు. మొదట్లో కొందరికి నమ్మకం కుదరలేదు. మున్సిపాలిటీ వాళ్ళకి మనకోసం టైమ్ ఉండదేమో అనుకున్నారు.",
        },
        {
          en: "So we wrote a petition, and two hundred people signed it. Fatima and I took it to the commissioner's office. He listened politely and promised to send a team.",
          te: "అందుకే మేము ఒక అర్జీ రాశాం, రెండు వందల మంది సంతకం పెట్టారు. ఫాతిమా గారు, నేను దాన్ని కమిషనర్ గారి ఆఫీసుకి తీసుకెళ్ళాం. ఆయన మర్యాదగా విని, ఒక టీమ్‌ని పంపిస్తానని మాట ఇచ్చారు.",
        },
        {
          en: "Within a month, the lights were fixed and the garbage was cleared. On Sundays, we planted trees and painted the benches ourselves. Even the young people on our street joined us.",
          te: "నెల లోపే లైట్లు బాగు చేశారు, చెత్త అంతా తీసేశారు. ఆదివారాల్లో మేమే మొక్కలు నాటాం, బెంచీలకి రంగులు వేశాం. మా వీధిలోని యువకులు కూడా మాతో చేతులు కలిపారు.",
        },
        {
          en: "Now the park is full again every evening. I walk there with my friends, and I feel much fitter. We should have started sooner, but I'm glad we didn't give up.",
          te: "ఇప్పుడు ప్రతి సాయంత్రం పార్క్ మళ్ళీ జనంతో నిండిపోతోంది. నేను స్నేహితులతో కలిసి అక్కడ నడుస్తాను, ఒంట్లో చాలా చురుగ్గా అనిపిస్తోంది. ఇంకా ముందే మొదలుపెట్టాల్సింది, కానీ మేము వదిలేయనందుకు సంతోషంగా ఉంది.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["How a colony fixed its park", "A new park in Hyderabad", "A trip to the beach"],
          answer: 0,
        },
        {
          prompt: { en: "Why did people stop going to the park?", te: "జనం పార్క్‌కి వెళ్ళడం ఎందుకు మానేశారు?" },
          options: ["It was dark and dirty.", "The police closed it.", "It was too far away."],
          answer: 0,
        },
        {
          prompt: { en: "Where did Narayana and Fatima take the petition?", te: "నారాయణ గారు, ఫాతిమా గారు అర్జీని ఎక్కడికి తీసుకెళ్ళారు?" },
          options: ["To the commissioner's office", "To the police station", "To the bank"],
          answer: 0,
        },
        {
          prompt: { en: "How does Narayana feel now?", te: "ఇప్పుడు నారాయణ గారికి ఎలా అనిపిస్తోంది?" },
          options: ["Much fitter", "Very tired", "Worried about the dogs"],
          answer: 0,
        },
      ],
    },
    {
      id: "m1",
      type: "mission",
      title: { en: "My town's problems and what would help", te: "మా ఊరి సమస్యలు, ఏం చేస్తే బాగుంటుంది" },
      prompts: [
        "I live in … I have lived here for …",
        "In the last few years, our town has …",
        "The biggest problem is … It hasn't been … for …",
        "If we had …, … would …",
        "It might be better to …",
        "In short, …",
      ],
      seconds: 120,
    },
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Celebrating Stage 3", te: "స్టేజ్ 3 పండుగ" },
      scene: {
        en: "You finished Stage 3! Your friend Prasad calls to celebrate. Talk about your English now.",
        te: "మీరు స్టేజ్ 3 పూర్తి చేశారు! మీ స్నేహితుడు ప్రసాద్ గారు అభినందించడానికి ఫోన్ చేశారు. ఇప్పటి మీ ఇంగ్లీష్ గురించి మాట్లాడండి.",
      },
      partner: { en: "Prasad (a friend)", te: "ప్రసాద్ (స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "feel", label: { en: "Saying how you feel", te: "మీ మనసులో మాట" } },
        { id: "time", label: { en: "How long", te: "ఎంత కాలంగా" } },
        { id: "can", label: { en: "What you can do", te: "మీరు ఏం చేయగలరో" } },
        { id: "plan", label: { en: "Making plans", te: "ప్లాన్ వేయడం" } },
      ],
      turns: [
        {
          partner: "Congratulations! You've finished Stage 3!",
          te: "అభినందనలు! మీరు స్టేజ్ 3 పూర్తి చేశారు!",
          hint: { en: "Thank him, and say how you feel.", te: "థాంక్స్ చెప్పి, మీకు ఎలా ఉందో చెప్పండి." },
          replies: [
            { say: "Thank you! I'm really proud of myself.", good: true, skill: "feel" },
            { say: "Thank you! I really proud of myself.", good: false, skill: "feel", fixIt: "be" },
          ],
        },
        {
          partner: "Eighty weeks! How long have you been learning now?",
          te: "ఎనభై వారాలు! ఇప్పటికి ఎంత కాలంగా నేర్చుకుంటున్నారు?",
          hint: { en: "Say how long, using for.", te: "for వాడి, ఎంత కాలంగానో చెప్పండి." },
          replies: [
            { say: "I've been learning for about a year and a half.", good: true, skill: "time" },
            { say: "I am learning since one and a half years.", good: false, skill: "time", fixIt: "duration" },
          ],
        },
        {
          partner: "What can you do in English now that you couldn't do before?",
          te: "ఇంతకు ముందు చేయలేనివి, ఇప్పుడు ఇంగ్లీష్‌లో ఏమేం చేయగలరు?",
          hint: { en: "Name two things from Stage 3 you can do now.", te: "స్టేజ్ 3 లో నేర్చుకుని ఇప్పుడు చేయగలిగే రెండు పనులు చెప్పండి." },
          replies: [
            { say: "I can complain politely and follow different accents.", good: true, skill: "can" },
            { say: "I can talk to officials and tell long stories.", good: true, skill: "can" },
            { say: "I can complaining politely and follow different accents.", good: false, skill: "can" },
          ],
        },
        {
          partner: "Is there anything you wish you could do better?",
          te: "ఇంకా బాగా చేయగలిగితే బాగుండు అనిపించేది ఏమైనా ఉందా?",
          hint: { en: "Say one thing you wish you could do.", te: "మీరు చేయగలిగితే బాగుండు అనుకునే ఒక విషయం చెప్పండి." },
          replies: [
            { say: "I wish I could speak a little faster.", good: true, skill: "feel" },
            { say: "I wish I can speak a little faster.", good: false, skill: "feel" },
          ],
        },
        {
          partner: "You will, in Stage 4. Shall we celebrate with filter coffee?",
          te: "స్టేజ్ 4 లో అదీ వచ్చేస్తుంది. ఫిల్టర్ కాఫీతో సెలబ్రేట్ చేసుకుందామా?",
          hint: { en: "Agree happily, and suggest a place.", te: "సంతోషంగా ఒప్పుకుని, ఒక చోటు చెప్పండి." },
          replies: [
            { say: "Yes, let's! How about the coffee house near the bus stand?", good: true, skill: "plan" },
            {
              say: "Coffee? I'm too busy for that now.",
              good: false,
              skill: "plan",
              react: { en: "Oh! Okay, maybe another day then.", te: "ఓ! సరే, ఇంకో రోజు చూద్దాం." },
            },
          ],
        },
        {
          partner: "Perfect. See you there at five. Stage 4 next!",
          te: "సరే. ఐదింటికి అక్కడ కలుద్దాం. తర్వాత స్టేజ్ 4!",
          hint: { en: "Say goodbye, and how you feel about Stage 4.", te: "బై చెప్పి, స్టేజ్ 4 గురించి మీకు ఎలా ఉందో చెప్పండి." },
          replies: [
            { say: "See you at five! I can't wait to start Stage 4.", good: true, skill: "feel" },
            { say: "See you on five! I can't wait to start Stage 4.", good: false, skill: "feel", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};
