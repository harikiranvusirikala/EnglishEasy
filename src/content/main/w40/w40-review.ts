import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/**
 * Week 40, Day 7 (CURRICULUM §4): Checkpoint 3 (§2b), the end of Stage 2 — the automatic review, with the Conversation
 * Day's day of errands as the check's role play, a mixed round across the stage, a listening task (a one-minute "my life
 * now" heard first), the 1-minute speaking mission, and a celebration call for finishing Stage 2.
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
  id: "w40-review",
  kind: "review",
  title: { en: "Stage 2 Review", te: "రోజువారీ జీవితం పునశ్చరణ" },
  extras: [
    pick("q1", "My date of birth is the ___ of June.", "నా పుట్టిన తేదీ జూన్ ఐదో తేదీ.", ["fifth", "five", "fiveth"], 0, {
      en: "Dates use the order word, and five changes to fifth.",
      te: "తేదీలకి వరుస పదం వాడాలి; five మారి fifth అవుతుంది.",
    }),
    pick("q2", "The washing machine has ___ working.", "వాషింగ్ మెషీన్ పని చేయడం ఆగిపోయింది.", ["stopped", "stop", "stopping"], 0, {
      en: "After has, the verb takes its third form, with -ed here.",
      te: "has తర్వాత verb మూడో రూపంలో రావాలి; ఇక్కడ -ed తో.",
    }),
    pick("q3", "I have ___ been to Kashi.", "నేను ఎప్పుడూ కాశీ వెళ్ళలేదు.", ["never", "ever", "yet"], 0, {
      en: "Never makes the sentence mean not even once; ever is for questions.",
      te: "never అంటే ఒక్కసారి కూడా లేదు; ever ప్రశ్నల్లో వస్తుంది.",
    }),
    pick("q4", "Would you mind ___ my parcel today?", "ఈ రోజు నా పార్సెల్ మీ దగ్గర ఉంచుకుంటారా?", ["keeping", "keep", "to keep"], 0, {
      en: "Would you mind is always followed by a verb with -ing.",
      te: "Would you mind తర్వాత verb కి ఎప్పుడూ -ing వస్తుంది.",
    }),
    pick("q5", "You didn't come? ___, I didn't. I was unwell.", "మీరు రాలేదా? లేదు, రాలేదు. ఒంట్లో బాగాలేదు.", ["No", "Yes", "Not"], 0, {
      en: "Didn't goes with No in English, even where Telugu says అవును.",
      te: "తెలుగులో 'అవును' అన్నా, ఇంగ్లీష్‌లో didn't తో No వస్తుంది.",
    }, "negative-answer"),
    pick("q6", "Phones are not ___ inside the temple.", "గుడి లోపల ఫోన్లకి అనుమతి లేదు.", ["allowed", "allow", "allowing"], 0, {
      en: "For a rule after are not, use allowed, the third form.",
      te: "నియమం చెప్పేటప్పుడు are not తర్వాత మూడో రూపం allowed వాడాలి.",
    }),
    pick("q7", "She is very good ___ drawing rangoli.", "ఆవిడ ముగ్గులు బాగా వేస్తారు.", ["at", "in", "on"], 0, {
      en: "For a skill, English says good at; Telugu లో makes us say in.",
      te: "నైపుణ్యం గురించి good at అనాలి; 'లో' వల్ల in అనకూడదు.",
    }, "preposition"),
    pick("q8", "I'm so sorry for ___ late.", "ఆలస్యం అయినందుకు చాలా sorry.", ["being", "be", "am"], 0, {
      en: "After sorry for, the verb always takes -ing.",
      te: "sorry for తర్వాత verb కి ఎప్పుడూ -ing వస్తుంది.",
    }),
    {
      id: "d1",
      type: "dialogue",
      title: { en: "Listen: Sarala's life now", te: "వినండి: సరళ గారి ఇప్పటి జీవితం" },
      lines: [
        { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Hello, I'm Sarala. Let me tell you about my life.", te: "హలో, నేను సరళ. నా జీవితం గురించి చెప్తాను." },
        { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "I have lived in Warangal for thirty years.", te: "నేను ముప్పై ఏళ్ళుగా వరంగల్‌లో ఉంటున్నాను." },
        { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "I live with my brother, a retired teacher.", te: "మా అన్నయ్యతో కలిసి ఉంటాను; ఆయన రిటైర్డ్ టీచర్." },
        { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Every morning I walk in the park near our house.", te: "రోజూ ఉదయం మా ఇంటి దగ్గర పార్క్‌లో నడుస్తాను." },
        { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "These days I am learning to make video calls.", te: "ఈ మధ్య వీడియో కాల్స్ చేయడం నేర్చుకుంటున్నాను." },
        { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Last week my phone suddenly stopped working.", te: "పోయిన వారం నా ఫోన్ ఉన్నట్టుండి పని చేయడం ఆగిపోయింది." },
        { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "The service centre repaired it in two days.", te: "సర్వీస్ సెంటర్ వాళ్ళు రెండు రోజుల్లో రిపేర్ చేశారు." },
        { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "I have also joined a music class at the temple.", te: "గుడిలో ఒక సంగీతం క్లాస్‌లో కూడా చేరాను." },
        { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "I enjoy singing old Telugu songs with my friends.", te: "స్నేహితులతో కలిసి పాత తెలుగు పాటలు పాడటం నాకు చాలా ఇష్టం." },
        { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Next month I'm going to visit my cousin in Pune.", te: "వచ్చే నెల పుణేలో ఉండే మా కజిన్ దగ్గరికి వెళ్ళబోతున్నాను." },
      ],
      questions: [
        {
          prompt: { en: "What is Sarala talking about?", te: "సరళ గారు దేని గురించి చెప్తున్నారు?" },
          options: ["Her life now", "A trip she took last year", "Her first day at a new job"],
          answer: 0,
        },
        {
          prompt: { en: "How long has she lived in Warangal?", te: "ఆవిడ ఎన్నాళ్ళుగా వరంగల్‌లో ఉంటున్నారు?" },
          options: ["Thirty years", "Thirteen years", "Three years"],
          answer: 0,
        },
        {
          prompt: { en: "What is she learning these days?", te: "ఈ మధ్య ఆవిడ ఏం నేర్చుకుంటున్నారు?" },
          options: ["To make video calls", "To cook biryani", "To drive a car"],
          answer: 0,
        },
        {
          prompt: { en: "What happened to her phone last week?", te: "పోయిన వారం ఆవిడ ఫోన్‌కి ఏమైంది?" },
          options: ["It stopped working.", "She lost it on the bus.", "She bought a new one."],
          answer: 0,
        },
      ],
    },
    {
      id: "m1",
      type: "mission",
      title: { en: "My life now", te: "ఇప్పుడు నా జీవితం" },
      prompts: ["I'm … and I live in …", "I have lived here for …", "Every day I …", "These days I am …", "I enjoy …", "Next month I'm going to …"],
      seconds: 60,
    },
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Celebrating Stage 2", te: "స్టేజ్ 2 పండుగ" },
      scene: {
        en: "You finished Stage 2! Your friend Anitha calls to celebrate. Talk about your English now.",
        te: "మీరు స్టేజ్ 2 పూర్తి చేశారు! మీ స్నేహితురాలు అనిత అభినందించడానికి ఫోన్ చేశారు. ఇప్పటి మీ ఇంగ్లీష్ గురించి మాట్లాడండి.",
      },
      partner: { en: "Anitha (a friend)", te: "అనిత (స్నేహితురాలు)" },
      skills: [
        { id: "feel", label: { en: "Saying how you feel", te: "మీ మనసులో మాట" } },
        { id: "past", label: { en: "What you did", te: "ఏం చేశారో" } },
        { id: "can", label: { en: "What you can do", te: "మీరు ఏం చేయగలరో" } },
        { id: "plan", label: { en: "Making plans", te: "ప్లాన్ వేయడం" } },
      ],
      turns: [
        {
          partner: "Congratulations! You've finished Stage 2!",
          te: "అభినందనలు! మీరు స్టేజ్ 2 పూర్తి చేశారు!",
          hint: { en: "Thank her, and say how you feel.", te: "థాంక్స్ చెప్పి, మీకు ఎలా ఉందో చెప్పండి." },
          replies: [
            { say: "Thank you! I'm so happy and proud.", good: true, skill: "feel" },
            { say: "Thank you! I very happy and proud.", good: false, skill: "feel", fixIt: "be" },
          ],
        },
        {
          partner: "Do you remember your first lesson?",
          te: "మీ మొదటి పాఠం గుర్తుందా?",
          hint: { en: "Say yes, and how long ago you started.", te: "అవునని, ఎంత కాలం క్రితం మొదలుపెట్టారో చెప్పండి." },
          replies: [
            { say: "Yes! I started about ten months ago.", good: true, skill: "past" },
            { say: "Yes! I started before ten months.", good: false, skill: "past", fixIt: "indian-english" },
          ],
        },
        {
          partner: "And what can you do in English now?",
          te: "ఇప్పుడు ఇంగ్లీష్‌లో ఏమేం చేయగలరు?",
          hint: { en: "Name two things you can do now.", te: "ఇప్పుడు మీరు చేయగలిగే రెండు పనులు చెప్పండి." },
          replies: [
            { say: "I can fill forms and talk to customer care.", good: true, skill: "can" },
            { say: "I can filling forms and talk to customer care.", good: false, skill: "can" },
          ],
        },
        {
          partner: "Have you used your English outside this week?",
          te: "ఈ వారం బయట ఎక్కడైనా ఇంగ్లీష్ మాట్లాడారా?",
          hint: { en: "Say yes, and who you spoke to.", te: "అవునని, ఎవరితో మాట్లాడారో చెప్పండి." },
          replies: [
            { say: "Yes! I spoke to the bank manager in English.", good: true, skill: "past" },
            { say: "Yes! I have spoke to the bank manager.", good: false, skill: "past" },
          ],
        },
        {
          partner: "Wonderful! Shall we celebrate with coffee on Sunday?",
          te: "చాలా బాగుంది! ఆదివారం కాఫీ తాగుతూ సెలబ్రేట్ చేసుకుందామా?",
          hint: { en: "Agree happily, and suggest a time.", te: "సంతోషంగా ఒప్పుకుని, ఒక టైమ్ చెప్పండి." },
          replies: [
            { say: "Sounds great! How about ten o'clock?", good: true, skill: "plan" },
            {
              say: "Coffee? Only if you are paying.",
              good: false,
              skill: "plan",
              react: { en: "Ha! Okay, my treat this time!", te: "హా! సరే, ఈసారి నేనే ఇప్పిస్తాను!" },
            },
          ],
        },
        {
          partner: "Perfect. See you on Sunday. Stage 3 next!",
          te: "సరే. ఆదివారం కలుద్దాం. తర్వాత స్టేజ్ 3!",
          hint: { en: "Say goodbye, and how you feel about Stage 3.", te: "బై చెప్పి, స్టేజ్ 3 గురించి మీకు ఎలా ఉందో చెప్పండి." },
          replies: [
            { say: "See you! I'm ready for Stage 3.", good: true, skill: "feel" },
            { say: "See you! I'm ready to Stage 3.", good: false, skill: "feel", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};
