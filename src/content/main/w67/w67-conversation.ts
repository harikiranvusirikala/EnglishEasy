import type { ConversationDay } from "../../types";

/**
 * Week 67, Day 6 (CURRICULUM §5): Conversation Day — a weekend trip to Warangal: following the station announcement,
 * then hosting the friends who came along (Weeks 55–66).
 */
export const day: ConversationDay = {
  id: "w67-conversation",
  kind: "conversation",
  title: { en: "A Weekend Trip", te: "వీకెండ్ ట్రిప్" },
  summary: {
    en: "Use Weeks 55 to 66: catch the station announcement on a weekend trip, then welcome the friends who came with you for dinner.",
    te: "55 నుంచి 66 వారాల్లో నేర్చుకున్నదంతా వాడండి: వీకెండ్ ట్రిప్‌లో స్టేషన్ అనౌన్స్‌మెంట్ అర్థం చేసుకోండి; తర్వాత మీతో వచ్చిన స్నేహితులని భోజనానికి ఆహ్వానించండి.",
  },
  topics: ["travel", "transport", "food", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "At the station before the trip", te: "ప్రయాణానికి ముందు స్టేషన్‌లో" },
    lines: [
      {
        speaker: { en: "Jyothi", te: "జ్యోతి" },
        voice: "a",
        en: "Imran, our train is at six. Do you know which platform it leaves from?",
        te: "ఇమ్రాన్ గారూ, మన రైలు ఆరింటికి. అది ఏ ప్లాట్‌ఫామ్ నుంచి బయలుదేరుతుందో మీకు తెలుసా?",
      },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "Not yet. Let's ask at the enquiry counter. Oh wait, listen!", te: "ఇంకా తెలీదు. ఎంక్వయిరీ కౌంటర్‌లో అడుగుదాం. ఆగండి, వినండి!" },
      {
        speaker: { en: "Announcement", te: "అనౌన్స్‌మెంట్" },
        voice: "a",
        en: "Attention please. The train to Warangal will now leave from platform four.",
        te: "ప్రయాణికులకు గమనిక. వరంగల్ వెళ్ళే రైలు ఇప్పుడు నాలుగో నంబర్ ప్లాట్‌ఫామ్ నుంచి బయలుదేరుతుంది.",
      },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "Did they say four? Good, it's near the stairs.", te: "నాలుగు అన్నారా? మంచిది, అది మెట్ల దగ్గరే." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Rani and Gopal are coming too. They're bringing the snacks.", te: "రాణి గారు, గోపాల్ గారు కూడా వస్తున్నారు. చిరుతిళ్ళు వాళ్ళే తెస్తున్నారు." },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "Great. The hotel said our rooms would be ready by noon.", te: "బాగుంది. మన గదులు మధ్యాహ్నానికి రెడీ అవుతాయని హోటల్ వాళ్ళు చెప్పారు." },
      {
        speaker: { en: "Jyothi", te: "జ్యోతి" },
        voice: "a",
        en: "Good. My cousin told me the Ramappa Temple is a World Heritage Site.",
        te: "మంచిది. రామప్ప గుడి World Heritage Site అని మా కజిన్ నాకు చెప్పారు.",
      },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "Wonderful. And on Sunday evening, everyone can come to my house for dinner.", te: "చాలా బాగుంది. ఆదివారం సాయంత్రం అందరూ మా ఇంటికి భోజనానికి రండి." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "That's kind of you. Shall I bring some payasam?", te: "ఎంత మంచివారు మీరు. నేను కొంచెం పాయసం తీసుకురానా?" },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "Yes, please! Now let's hurry. The train is coming in.", te: "తప్పకుండా! ఇక త్వరగా పదండి. రైలు వస్తోంది." },
    ],
    questions: [
      {
        prompt: { en: "Where are Jyothi and Imran?", te: "జ్యోతి గారు, ఇమ్రాన్ గారు ఎక్కడ ఉన్నారు?" },
        options: ["At a railway station, before a trip", "At a hotel reception", "At a temple in Warangal"],
        answer: 0,
      },
      {
        prompt: { en: "Which platform will the train leave from?", te: "రైలు ఏ ప్లాట్‌ఫామ్ నుంచి బయలుదేరుతుంది?" },
        options: ["Platform four", "Platform two", "Platform six"],
        answer: 0,
      },
      {
        prompt: { en: "What did the hotel say?", te: "హోటల్ వాళ్ళు ఏం చెప్పారు?" },
        options: ["The rooms would be ready by noon.", "The rooms were all full.", "Breakfast would be free."],
        answer: 0,
      },
      {
        prompt: { en: "Where will everyone have dinner on Sunday?", te: "ఆదివారం అందరూ ఎక్కడ భోజనం చేస్తారు?" },
        options: ["At Imran's house", "At the hotel", "At Jyothi's house"],
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
        en: "At the station, ask a railway staff member politely if the train to Warangal is on time.",
        te: "స్టేషన్‌లో, వరంగల్ రైలు సమయానికి వస్తుందో లేదో రైల్వే సిబ్బందిని మర్యాదగా అడగండి.",
      },
      expected: [
        "Excuse me, do you know if the Warangal train is on time?",
        "Could you tell me if the train to Warangal is on time?",
        "Excuse me, is the train to Warangal on time?",
      ],
      options: [
        "Excuse me, do you know if the Warangal train is on time?",
        "Excuse me, do you know is the Warangal train on time?",
        "Tell me, the Warangal train is on time or not?",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Your guests have finished their dosas. Offer them a few more.",
        te: "మీ అతిథులు దోసెలు తినేశారు. ఇంకొన్ని వేసుకుంటారేమో అడగండి.",
      },
      expected: ["Would you like a few more dosas?", "Please have a few more dosas.", "Would you like some more dosas?"],
      options: ["Would you like a few more dosas?", "Would you like a little more dosas?", "You like few more dosa?"],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Tell your friends what the hotel said: breakfast is served from seven to ten.",
        te: "హోటల్ వాళ్ళు చెప్పింది స్నేహితులకి చెప్పండి: పొద్దున ఏడు నుంచి పది దాకా టిఫిన్ పెడతారు.",
      },
      expected: ["Breakfast is served from seven to ten.", "They said breakfast is served from seven to ten.", "Breakfast is from seven to ten."],
      options: ["Breakfast is served from seven to ten.", "Breakfast served from seven to ten.", "Breakfast is serve from seven to ten."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Catching the weekend train", te: "వీకెండ్ రైలు అందుకోవడం" },
      scene: {
        en: "You and your friend Salma are at Secunderabad station for a weekend trip to Warangal. Listen for your train.",
        te: "మీరు, మీ స్నేహితురాలు సల్మా గారు వీకెండ్ ట్రిప్ కోసం వరంగల్ వెళ్ళడానికి సికింద్రాబాద్ స్టేషన్‌లో ఉన్నారు. మీ రైలు గురించి జాగ్రత్తగా వినండి.",
      },
      partner: { en: "Salma (a friend)", te: "సల్మా (స్నేహితురాలు)" },
      skills: [
        { id: "travel", label: { en: "Travelling", te: "ప్రయాణం" } },
        { id: "listen", label: { en: "Following announcements", te: "అనౌన్స్‌మెంట్లు అర్థం చేసుకోవడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning! Have you got the tickets? Which coach are we in?",
          te: "గుడ్ మార్నింగ్! టికెట్లు తెచ్చారా? మనం ఏ బోగీలో ఉన్నాం?",
          hint: { en: "Say yes, and tell her the coach and the seat numbers.", te: "తెచ్చానని చెప్పి, బోగీ, సీటు నంబర్లు చెప్పండి." },
          replies: [
            { say: "Yes, I have them. We're in coach S4, seats ten and eleven.", good: true, skill: "travel" },
            { say: "Yes, I have them. We're in the coach S4, seats ten and eleven.", good: false, skill: "travel", fixIt: "article" },
          ],
        },
        {
          partner: "Listen, an announcement! Did they say platform four or five?",
          te: "వినండి, అనౌన్స్‌మెంట్! ప్లాట్‌ఫామ్ నాలుగు అన్నారా, ఐదు అన్నారా?",
          hint: { en: "Tell her it was four, and suggest going there now.", te: "నాలుగు అన్నారని చెప్పి, ఇప్పుడే అక్కడికి వెళ్దామనండి." },
          replies: [
            { say: "They said platform four. Let's go there now.", good: true, skill: "listen" },
            { say: "They told platform four. Let's go there now.", good: false, skill: "listen" },
          ],
        },
        {
          partner: "Oh no, now they say it's twenty minutes late.",
          te: "అయ్యో, ఇప్పుడు ఇరవై నిమిషాలు ఆలస్యం అంటున్నారు.",
          hint: { en: "Stay calm, and offer to get her some tea.", te: "ప్రశాంతంగా ఉండి, ఆవిడకి టీ తెస్తానని చెప్పండి." },
          replies: [
            { say: "That's okay. Would you like some tea while we wait?", good: true, skill: "polite" },
            {
              say: "Late again? These trains are useless. I'm going home.",
              good: false,
              skill: "polite",
              react: { en: "Relax! It's only twenty minutes. Let's have some tea.", te: "కంగారు పడకండి! ఇరవై నిమిషాలే. టీ తాగుదాం." },
            },
          ],
        },
        {
          partner: "Yes, please. Do you know what time we reach Warangal?",
          te: "అలాగే, తాగుదాం. మనం వరంగల్ ఎన్నింటికి చేరుకుంటామో మీకు తెలుసా?",
          hint: { en: "Say the time you think the train gets there.", te: "రైలు అక్కడికి ఎన్నింటికి చేరుతుందనుకుంటున్నారో చెప్పండి." },
          replies: [
            { say: "I think we'll reach Warangal at about nine.", good: true, skill: "travel" },
            { say: "I think we'll reach to Warangal at about nine.", good: false, skill: "travel", fixIt: "preposition" },
          ],
        },
        {
          partner: "Look, the train is coming in! Let's go.",
          te: "చూడండి, రైలు వస్తోంది! పదండి.",
          hint: { en: "Agree, and tell her to watch her bag in the crowd.", te: "సరేనని చెప్పి, రద్దీలో బ్యాగ్ జాగ్రత్తగా చూసుకోమని చెప్పండి." },
          replies: [
            { say: "Yes, let's go. Please keep your bag close to you.", good: true, skill: "travel" },
            { say: "Yes, let's go. Please take care for your bag.", good: false, skill: "travel" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Dinner after the trip", te: "ప్రయాణం తర్వాత భోజనం" },
      scene: {
        en: "After the trip, your friend Gopal comes to your home for Sunday dinner. Welcome him and look after him.",
        te: "ప్రయాణం తర్వాత మీ స్నేహితుడు గోపాల్ గారు ఆదివారం భోజనానికి మీ ఇంటికి వచ్చారు. ఆయన్ని ఆహ్వానించి, మర్యాదలు చేయండి.",
      },
      partner: { en: "Gopal (a friend)", te: "గోపాల్ (స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "host", label: { en: "Looking after a guest", te: "అతిథి మర్యాద" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! Thank you for inviting me. What a lovely house!",
          te: "హలో! నన్ను పిలిచినందుకు థాంక్స్. ఇల్లు ఎంత బాగుందో!",
          hint: { en: "Welcome him, and tell him to be comfortable.", te: "ఆయన్ని ఆహ్వానించి, మొహమాటపడకుండా ఉండమని చెప్పండి." },
          replies: [
            { say: "Welcome! Please come in and make yourself at home.", good: true, skill: "host" },
            { say: "Welcome! Please come in and feel homely.", good: false, skill: "host", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Thank you. I'm still tired after that long trip!",
          te: "థాంక్యూ. ఆ పెద్ద ప్రయాణం తర్వాత ఇంకా అలసటగానే ఉంది!",
          hint: { en: "Offer him something cold to drink.", te: "చల్లగా ఏమైనా తాగుతారా అని అడగండి." },
          replies: [
            { say: "Would you like some cold water or buttermilk?", good: true, skill: "host" },
            { say: "Can I get you some buttermilk?", good: true, skill: "host" },
            { say: "You want cold water or buttermilk?", good: false, skill: "host", fixIt: "question" },
          ],
        },
        {
          partner: "Buttermilk, please. You haven't sent the trip photos yet?",
          te: "మజ్జిగ ఇవ్వండి. ట్రిప్ ఫోటోలు ఇంకా పంపలేదా?",
          hint: { en: "Say you haven't, say sorry, and say when you will send them.", te: "పంపలేదని, సారీ అని చెప్పి, ఎప్పుడు పంపుతారో చెప్పండి." },
          replies: [
            { say: "No, I haven't. Sorry! I'll send them tonight.", good: true, skill: "polite" },
            { say: "Yes, I haven't. Sorry! I'll send them tonight.", good: false, skill: "polite", fixIt: "negative-answer" },
          ],
        },
        {
          partner: "This biryani is delicious. Who made it?",
          te: "ఈ బిర్యానీ చాలా రుచిగా ఉంది. ఎవరు చేశారు?",
          hint: { en: "Say who cooked it, and offer him some more.", te: "ఎవరు వండారో చెప్పి, ఇంకొంచెం వేసుకోమని చెప్పండి." },
          replies: [
            { say: "My cousin Anitha made it. Would you like a little more?", good: true, skill: "host" },
            { say: "I made it myself. Please have some more.", good: true, skill: "host" },
            { say: "My cousin Anitha made it. Would you like a few more biryani?", good: false, skill: "host", fixIt: "plural" },
          ],
        },
        {
          partner: "No more, thank you. I'm full! I should go now.",
          te: "ఇక చాలు, థాంక్యూ. కడుపు నిండిపోయింది! ఇక బయలుదేరతాను.",
          hint: { en: "Thank him for coming, and ask him to visit again.", te: "వచ్చినందుకు థాంక్స్ చెప్పి, మళ్ళీ రమ్మని చెప్పండి." },
          replies: [
            { say: "Thank you for coming. Please visit again soon.", good: true, skill: "polite" },
            {
              say: "Okay, go. Bye.",
              good: false,
              skill: "polite",
              react: { en: "Oh! All right. Thank you for the dinner.", te: "ఓ! సరే అండీ. భోజనానికి థాంక్స్." },
            },
          ],
        },
      ],
    },
  ],
};
