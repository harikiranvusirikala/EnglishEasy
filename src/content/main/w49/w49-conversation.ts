import type { ConversationDay } from "../../types";

/** Week 49, Day 6 (CURRICULUM §5): Conversation Day — a wrong parcel at the door, and ordering a housewarming gift with cash on delivery. */
export const day: ConversationDay = {
  id: "w49-conversation",
  kind: "conversation",
  title: { en: "The Wrong Parcel", te: "తప్పు పార్సెల్" },
  summary: {
    en: "Use the whole week: sort out a parcel that came to the wrong flat, and order a gift with cash on delivery.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: తప్పు ఫ్లాట్‌కి వచ్చిన పార్సెల్ సంగతి చూడండి, cash on delivery తో ఒక గిఫ్ట్ ఆర్డర్ చేయండి.",
  },
  topics: ["shopping", "neighbours", "technology"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A parcel for someone else", te: "వేరేవాళ్ళ పార్సెల్" },
    lines: [
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Good morning, madam. Your ShopKart parcel is here.", te: "గుడ్ మార్నింగ్ మేడమ్. మీ ShopKart పార్సెల్ వచ్చింది." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Good morning. But I haven't ordered anything this week.", te: "గుడ్ మార్నింగ్. కానీ ఈ వారం నేనేమీ ఆర్డర్ చేయలేదే." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Is this flat two zero three? The name is Usha.", te: "ఇది ఫ్లాట్ 203 యేనా? పేరు ఉష అని ఉంది." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "No, this is three zero two. Usha lives in two zero three.", te: "కాదండీ, ఇది 302. ఉష గారు 203 లో ఉంటారు." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Oh, sorry! I've come to the wrong flat.", te: "అయ్యో, సారీ! నేను తప్పు ఫ్లాట్‌కి వచ్చాను." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "No problem. Her flat is one floor down, on the left.", te: "పర్లేదు. ఆవిడ ఫ్లాట్ ఒక ఫ్లోర్ కింద, ఎడమ వైపు." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Thank you. Is she at home now?", te: "థాంక్స్. ఆవిడ ఇప్పుడు ఇంట్లో ఉన్నారా?" },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "I think so. If she isn't there, leave it with the watchman.", te: "ఉన్నారనుకుంటా. ఒకవేళ లేకపోతే watchman దగ్గర ఇచ్చేయండి." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Okay. Thank you for your help, madam.", te: "సరే. మీ సాయానికి థాంక్స్ మేడమ్." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "You're welcome. Have a good day!", te: "పర్లేదండీ. మీ రోజు బాగా గడవాలి!" },
    ],
    questions: [
      {
        prompt: { en: "What is the problem?", te: "సమస్య ఏంటి?" },
        options: ["The parcel is for another flat", "The parcel is broken", "The delivery code is wrong"],
        answer: 0,
      },
      {
        prompt: { en: "Whose parcel is it?", te: "అది ఎవరి పార్సెల్?" },
        options: ["Usha's", "Anitha's", "The watchman's"],
        answer: 0,
      },
      {
        prompt: { en: "Where is Usha's flat?", te: "ఉష గారి ఫ్లాట్ ఎక్కడ ఉంది?" },
        options: ["One floor down, on the left", "Next door, on the right", "On the top floor"],
        answer: 0,
      },
      {
        prompt: { en: "What should Srinivas do if Usha is not at home?", te: "ఉష గారు ఇంట్లో లేకపోతే శ్రీనివాస్ గారు ఏం చేయాలి?" },
        options: ["Leave it with the watchman", "Bring it back tomorrow", "Leave it with Anitha"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "A parcel comes to your door, but you haven't ordered anything. Ask whose name is on it.",
        te: "మీ ఇంటికి ఒక పార్సెల్ వచ్చింది, కానీ మీరేమీ ఆర్డర్ చేయలేదు. దాని మీద ఎవరి పేరుందో అడగండి.",
      },
      expected: ["Whose name is on the parcel?", "Whose name is on it?", "Sorry, whose name is on it?"],
      options: ["Whose name is on the parcel?", "Whose name the parcel has?", "Who name is on the parcel?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Tell the delivery person politely that this parcel is not yours.",
        te: "ఈ పార్సెల్ మీది కాదని డెలివరీ వ్యక్తికి మర్యాదగా చెప్పండి.",
      },
      expected: ["Sorry, this parcel isn't mine.", "Sorry, this is not my parcel.", "Sorry, this parcel is not mine."],
      options: ["Sorry, this parcel isn't mine.", "Sorry, this parcel not mine.", "Sorry, this parcel is not belonging to me."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "The delivery person asks if you know Usha in the next flat. You have known her for ten years.",
        te: "పక్క ఫ్లాట్ ఉష గారు మీకు తెలుసా అని డెలివరీ వ్యక్తి అడుగుతున్నారు. పదేళ్ళుగా మీకు ఆవిడ తెలుసు.",
      },
      expected: ["Yes, I've known her for ten years.", "Yes, I have known her for ten years.", "Yes, she's my neighbour."],
      options: ["Yes, I've known her for ten years.", "Yes, I'm knowing her for ten years.", "Yes, I know her since ten years."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A parcel at the wrong door", te: "తప్పు ఇంటికి వచ్చిన పార్సెల్" },
      scene: {
        en: "You live in flat four one zero. A delivery person, Kumar, rings your bell with a parcel.",
        te: "మీరు ఫ్లాట్ four one zero లో ఉంటారు. డెలివరీ చేసే కుమార్ గారు పార్సెల్‌తో మీ బెల్ కొట్టారు.",
      },
      partner: { en: "Kumar (delivery person)", te: "కుమార్ (డెలివరీ చేసే ఆయన)" },
      voice: "b",
      skills: [
        { id: "explain", label: { en: "Explaining", te: "వివరించడం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! Parcel for Gopal, flat four zero one.",
          te: "హలో! గోపాల్ గారికి పార్సెల్, ఫ్లాట్ 401.",
          hint: { en: "Say sorry: this is a different flat, and give your flat number.", te: "సారీ చెప్పండి: ఇది వేరే ఫ్లాట్, మీ ఫ్లాట్ నంబర్ చెప్పండి." },
          replies: [
            { say: "Sorry, this is flat four one zero, not four zero one.", good: true, skill: "explain" },
            { say: "Sorry, wrong flat. This is four one zero.", good: true, skill: "explain" },
            { say: "Sorry, this flat four one zero.", good: false, skill: "explain", fixIt: "be" },
          ],
        },
        {
          partner: "Oh! Do you know where four zero one is?",
          te: "ఓ! 401 ఎక్కడో మీకు తెలుసా?",
          hint: { en: "Say it is on this floor, the last door on the left.", te: "ఈ ఫ్లోర్‌లోనే, ఎడమ వైపు చివరి తలుపు అని చెప్పండి." },
          replies: [
            { say: "Yes, it's on this floor. It's the last door on the left.", good: true, skill: "explain" },
            { say: "It's on this floor, the last door on the left.", good: true, skill: "explain" },
            {
              say: "How would I know? Ask someone else.",
              good: false,
              skill: "polite",
              react: { en: "Sorry to trouble you. I'll ask the watchman.", te: "ఇబ్బంది పెట్టినందుకు సారీ. watchman ని అడుగుతాను." },
            },
          ],
        },
        {
          partner: "Thank you. Nobody is answering there. Can I leave it with you?",
          te: "థాంక్స్. అక్కడ ఎవరూ తలుపు తీయట్లేదు. మీ దగ్గర ఇచ్చి వెళ్ళనా?",
          hint: { en: "Say kindly that you can't keep it, and ask him to give it to the watchman.", te: "మీరు ఉంచుకోలేరని మర్యాదగా చెప్పి, watchman దగ్గర ఇవ్వమని అడగండి." },
          replies: [
            { say: "Sorry, I can't keep it. Please leave it with the watchman.", good: true, skill: "polite" },
            { say: "I'm sorry, I'm going out. Could you leave it with the watchman?", good: true, skill: "polite" },
            { say: "Sorry, I can't keep it. Please leave it with watchman.", good: false, skill: "polite", fixIt: "article" },
          ],
        },
        {
          partner: "Okay, I'll do that. Thank you for your help!",
          te: "సరే, అలాగే చేస్తాను. మీ సాయానికి థాంక్స్!",
          hint: { en: "Say it's no trouble, and wish him a good day.", te: "ఇబ్బందేమీ లేదని చెప్పి, ఆయన రోజు బాగా గడవాలని చెప్పండి." },
          replies: [
            { say: "No problem. Have a good day!", good: true, skill: "polite" },
            { say: "You're welcome. Have a nice day!", good: true, skill: "polite" },
            { say: "No problem. Have good day!", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A housewarming gift", te: "గృహప్రవేశానికి గిఫ్ట్" },
      scene: {
        en: "Your friend Kamala's housewarming is on Sunday. Your friend Venkat is helping you order a gift on his phone.",
        te: "మీ స్నేహితురాలు కమల గారి గృహప్రవేశం ఆదివారం. మీ స్నేహితుడు వెంకట్ గారు తన ఫోన్‌లో గిఫ్ట్ ఆర్డర్ చేయడానికి సాయం చేస్తున్నారు.",
      },
      partner: { en: "Venkat (your friend)", te: "వెంకట్ (మీ స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "order", label: { en: "Ordering online", te: "ఆన్‌లైన్‌లో ఆర్డర్ చేయడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "So, what are you going to give Kamala?",
          te: "అయితే, కమల గారికి ఏం ఇవ్వబోతున్నారు?",
          hint: { en: "Say your plan: a steel dinner set, ordered online.", te: "మీ ప్లాన్ చెప్పండి: ఆన్‌లైన్‌లో ఒక steel dinner set." },
          replies: [
            { say: "I'm going to order a steel dinner set online.", good: true, skill: "order" },
            { say: "I'm going to give her a steel dinner set.", good: true, skill: "order" },
            { say: "I'm going to order steel dinner set online.", good: false, skill: "order", fixIt: "article" },
          ],
        },
        {
          partner: "Nice choice! I've added it to the cart. Shall I pay by UPI?",
          te: "మంచి ఎంపిక! cart లో వేశాను. UPI తో కట్టనా?",
          hint: { en: "Say no, thank you, and ask about paying at the door.", te: "వద్దు, థాంక్స్ అని, ఇంటి దగ్గర డబ్బు కట్టడం గురించి అడగండి." },
          replies: [
            { say: "No, thank you. Is cash on delivery available?", good: true, skill: "order" },
            { say: "No, thanks. Can I pay cash on delivery?", good: true, skill: "order" },
            { say: "No. Cash on delivery is available?", good: false, skill: "order", fixIt: "question" },
          ],
        },
        {
          partner: "Yes, it is. It will arrive by Saturday. Is that okay?",
          te: "ఉంది. శనివారం లోపు వస్తుంది. పర్లేదా?",
          hint: { en: "Say Saturday is fine, and ask him to finish the order now.", te: "శనివారం పర్లేదని చెప్పి, ఇప్పుడే ఆర్డర్ పూర్తి చేయమని అడగండి." },
          replies: [
            { say: "Yes, that's fine. Please place the order now.", good: true, skill: "order" },
            { say: "Saturday is fine. Could you place the order, please?", good: true, skill: "order" },
            {
              say: "Do it fast. I don't have all day.",
              good: false,
              skill: "polite",
              react: { en: "Okay, okay! It's done. No need to hurry me.", te: "సరే సరే! అయిపోయింది. తొందర పెట్టక్కర్లేదు." },
            },
          ],
        },
        {
          partner: "Done! You'll get a delivery code on Saturday.",
          te: "అయిపోయింది! శనివారం మీకు delivery code వస్తుంది.",
          hint: { en: "Thank him for his help.", te: "ఆయన సాయానికి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Thank you, Venkat. You've been very helpful.", good: true, skill: "polite" },
            { say: "Thanks a lot for your help, Venkat.", good: true, skill: "polite" },
            { say: "Okay. Now you can go.", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};
