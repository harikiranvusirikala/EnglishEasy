# EnglishEasy — Curriculum Map

The course structure is explained in [VISION.md](VISION.md) §11. This file is the **map**: the style guide for writing content (§1) and the skills that run through the course (§1a), the grammar spiral with the Fix-it strand (§2), the Sound of the week (§2a), checkpoints and honest levels (§2b), Stage 1 lesson by lesson (§3), Stages 2–5 week by week (§4–§7), and the optional tracks (§8). Reordered 2026-11-09 after a curriculum review: still 150 weeks in five stages, with survival and safety topics earlier, a life theme for every week, and a checkpoint about every 13 weeks.

**How content sessions use it:** a "Write Week N" session (BUILD_PLAN Part E) reads §1, §1a, §2's rows for its grammar (and the Fix-it strand), and only its own week. If its stage has no lesson-level detail yet, a "Detail Stage S" session writes that first, in the same format as §3.

The map is a plan, not a contract: weeks can be refined, merged or added. Lesson ids are stable once released (BUILD_PLAN A3).

---

# 1. Content style guide

**English**
- Natural, everyday English as spoken politely in India and understood anywhere. No slang until Stage 5; Indian-English habits ("do the needful", "prepone", "What is your good name?") appear only as "Don't say / Say".
- Sentence length by stage: Stage 1 ≤ 7 words; Stage 2 ≤ 10; Stage 3 ≤ 14; Stages 4–5 natural.
- Every lesson: 6–8 **core sentences** using the pattern, simplest first (the generator turns the first ones into arrange, translate and repeat activities); 3–4 of them are the key sentences.
- Distractors are real mistakes Telugu speakers make (wrong tense, missing "am/is/are", Telugu word order, missing article), never silly options. See "Distractors" below.
- **Level targets** (CEFR, for writers only; learners see can-dos, never CEFR; hours in §2b): Stage 1 A0 → A1 starter, Stage 2 A1 (complete by Week 40), Stage 3 A2 (by Week 80), Stage 4 B1 in listening and reading and A2+ in speaking (by Week 120), Stage 5 B1 (listening towards B1+). Anything above the stage's level appears only as a fixed phrase; B2 grammar (third conditional, could / might have, future perfect) is recognition only.
- **Indian vs international English.** Keep Indian usage that is understood everywhere: rupees, auto, bus stand, function (a celebration), "I was not well", lakh and crore (with million). Teach the international form next to Indian usage that confuses outsiders: "still green / not ripe yet" (not "raw" for fruit, which means the cooking variety), "good for your health", "I have a question" (next to "I have a doubt"). Correct clear errors with "Don't say / Say": "Myself Lakshmi", "do the needful", "revert back", "prepone", "out of station", "today morning", "yesterday night", "What is your good name?", "kindly do", "I am having two brothers", "take rest", "cover" (for a bag).

**Telugu (Telugu mode)**
- Spoken, everyday Telugu (వ్యావహారిక భాష), as a kind relative would explain it. No heavy Sanskrit words.
- Keep English words in English letters where Telugu speakers already use them: verb, tense, past, sentence, bus, phone, doctor, and the English words being taught. Example: "Yesterday, last week లాంటి పదాలు వస్తే verb ని past form లో వాడాలి — go కాదు, went."
- Telugu meanings of core sentences are natural Telugu, not word-for-word. A meaning matches its English exactly: tense, number, politeness.
- **Register: spoken words, not bookish ones** (`checks.ts` TELUGU_AVOID flags the first three):

  | Write | Not |
  |---|---|
  | ఏంటి | ఏమిటి |
  | verb (Telugu mode) / "action word" (English mode) | పని పదం, క్రియ |
  | "no" for an action or a fact: లేదు (చేయను, రాలేదు) | కాదు (only for who or what something is: "అది నాది కాదు") |
  | requests: ఇస్తారా? / ఇవ్వండి / చెప్తారా? / కొంచెం … చేస్తారా? | ఇవ్వగలరా / చెప్పగలరా (-గల- is only for ability: "వంట చేయగలరా?") |
  | please, or కొంచెం … అండీ | దయచేసి (only in formal scenes: bank, hospital desk, office) |
  | మామూలుగా, ఎక్కువగా, పిలవడం, ఎలా ఉంటారో చెప్పండి | సాధారణంగా, తరచుగా, ఆహ్వానించడం, వర్ణించండి |
  | sorry అండీ | క్షమించండి (except formal scenes) |

- **Respect, the same for everyone.** The learner is always మీరు. Every adult in the third person gets respectful forms, whoever they are: ఆయన / ఆవిడ with -ారు verbs ("సురేష్ ధరలు చెప్తున్నారు", "పద్మ కూరగాయలు అమ్ముతున్నారు", never అమ్ముతోంది / చెప్తున్నాడు for an adult). Partners speak to the learner with మీరు too, even friends and relatives.
- **Telugu mode explanations**: at most two short sentences (about 25 words); grammar words limited to verb, past, question.

**Explanations ("why", "useFor", hints)**
- **The why formula**: the rule in plain words + the reason (link it to Telugu when Telugu is the cause) + the right sentence. At least 6 English words (`why-length`). Never only "Don't forget are." or "Like to + come."
  - Good: "Telugu ఎంత? needs no verb, but English needs is or are: How much are these apples?"
  - Good: "One person (he, she): add s to the verb. She watches TV."
- Role-play **hints say what to do, not the sentence** (`roleplay-hint`): "Ask the price politely.", "Say yes, and how many kilos you want.", "Tell him politely the change is wrong. Start with Sorry, I think…". The reply itself is never in the hint.

**Distractors**
- Every wrong option is one real error a Telugu speaker makes, or a real manners slip (too blunt, rude, the wrong kind of reply), and is wrong in every context. Never nonsense, typos, or errors nobody makes ("me sister", "choose the tomatoes me").
- In a set of three: one slip from this lesson's pattern, one transfer from Telugu (word order, missing be/do/article, preposition), one meaning or reply-type mix-up.
- Exactly one right answer: read every wrong option asking "could this be right somewhere?" ("How old is this saree?" is a real question, so it can't be the wrong option to "How ___ is this saree?").
- A template at most once a week ("Thanks you"; "I'll + -ing" at most once a lesson). Options are about the same length. Their order does not matter: the generator shuffles them.

**Role plays**
- Replies are hidden until the learner taps "Show replies", so write them as things to remember, not to read.
- At least one turn per role play has a manners (not grammar) not-good reply, and that reply gets a `react`: the partner's natural answer to it ("Cheating? Please don't say that. Let me count again."). Grammar slips may have one too ("Sorry? One kilo or two?").
- Two good replies are welcome when both are natural (Can I… / Could I…).
- A man partner has `voice: "b"`; women and unnamed partners use the default voice (`voice`).
- The first and last turns sound like a real start and end ("Nice to meet you" gets "Nice to meet you too").

**Dialogues** (Conversation Days)
- The learner hears the whole talk before seeing it. Question 1 is a big-picture question answered by ear (where are they, who is it, what is it about); the detail questions come after.
- Each speaker keeps one voice: men "b", women "a" (`voice`).

**Audio**
- Nothing read aloud has brackets, slashes, "…" or "₹" (`audio-symbols`). Digits and "Dr" are read as words by the voice in English text (`speechText`), so "240 rupees" and "Dr Prasad" are fine; prefer words for small numbers in Stage 1.
- Phone, emergency and code numbers are written as words in anything read aloud ("call one zero eight", "nine one one", "four double five zero"); digits would be read as an amount ("one hundred and eight").

**Persistent errors and recycling**
- Each week's lessons together have at least 3 items on persistent errors outside the week's focus, rotating: articles, he/she + s, missing am/is/are, do-questions, plurals after numbers ("two kilos"), in/on/at, question word order, "Myself…".
- At least 2 of a lesson's core sentences or role-play lines reuse words or patterns from 2 or more weeks earlier.

**English mode explanations**
- Very simple English (short sentences, common words), saying the same thing as the Telugu version.

**People and places**
- Main path: people everyone meets — a friend, neighbour, relative, shopkeeper, doctor, nurse, pharmacist, bank clerk, auto driver, conductor, customer-care agent, priest, postman, delivery person. Never assume the learner has a spouse, children or grandchildren (those scenes belong to tracks, §8).
- Names (`checks.ts` MEN / WOMEN; rotate them, Ravi and Lakshmi are already overused):
  - Women: Lakshmi, Padma, Sita, Kamala, Anitha, Rani, Usha, Jyothi, Swapna, Salma, Fatima, Mary, Grace, Sarala, Radha, Geetha, Kavitha, Ayesha, Ruth.
  - Men: Ramana, Suresh, Ravi, Prasad, Venkat, Srinivas, Mohan, Narayana, Imran, Rahim, John, David, Raju, Krishna, Gopal, Ramesh, Satish, Joseph, Kumar.
  - Children (tracks only): Arjun, Rohan, Daniel (boys, voice "b"); Diya, Meera, Zoya (girls, voice "a").
- **No fixed roles by gender.** In a week, no gender has more than half the cooking, cleaning or serving; doctors, sellers, leaders, drivers and clerks alternate. Men cook and women run shops, teach, lead the colony meeting.
- **The learner's own name** is one that suits anyone: Kiran or Sai (`learner-name`). Partners never call the learner by a gendered name. When the true answer depends on the learner (their town, job, age), the hint says "your own …", and work always allows "retired".
- Places and things: Vijayawada, Guntur, Hyderabad, Visakhapatnam, Tirupati, Warangal, Nellore, Kurnool, Rajahmundry, Karimnagar, Khammam and villages; idli, dosa, pesarattu, biryani, filter coffee, sarees, kirana shop, RTC bus, auto, temple, mosque, church, Sankranti, Ugadi, Diwali, Ramzan, Christmas, Bathukamma, Bonalu; money in rupees.

**Every lesson includes**
- The pattern as colour chips (who / action / what / when) and, where useful, the Telugu → English bridge.
- One "When do I use this?" card when two forms compete; one or two "Don't say / Say" cards.
- A role play of 3–5 turns (Conversation Days: 2 role plays of 4–6 turns and one dialogue).
- A "Try it today" mission the learner can do in real life the same day.
- About 25 new words across the week, reused in later weeks.

## 1a. Skills across the course

Added 2026-11-09 (curriculum review). These threads run through every stage alongside the week's grammar and life theme.

**Read it card** (one a week from Week 3). One lesson in the week shows a short real text the learner meets in daily life and asks one question about it, using the usual one-right-answer question. It is recognition only, never typing. The text is not played before the answer, so the learner reads it; Listen comes after Check. Use texts from the week's topic:
- signs: Push / Pull, Exit, No Entry, Platform 2, Ladies, Out of Order
- SMS and OTP messages: "Your OTP is 4821. Do not share it with anyone."
- medicine labels: EXP 08/27, After food, Keep away from children
- bills: Total, GST, Discount, Change
- form fields: Name, Date of Birth, Address, Signature, Mobile No.
- WhatsApp messages, bus boards, notices on doors
For example: Week 17 a medicine label, Week 20 a WhatsApp message, Week 21 an OTP SMS, Week 27 a form.

**Listening.**
- Conversation Days are heard before they are read (§1, Dialogues).
- From Week 9, each Review Day ends with a short story heard first, then read. It gets one big-picture question by ear, then detail questions. Story length grows by stage: about 30 seconds in Stage 1, 1 minute in Stage 2, 2 minutes in Stage 3, and longer after that.
- Announcements: railway and bus (Week 15), hospital (Week 52), longer talks (Week 101), and airports in the Abroad track.
- Accents: other speakers' accents are heard from Week 78 (Different Accents) and in the Abroad track, not only at the end. This needs extra English voices; that is a BUILD_PLAN decision.

**Speaking missions.** Every checkpoint (§2b) ends with a speaking mission. The learner speaks about one prompt, the app looks for the key words with speech recognition and plays a model answer. It never blocks progress, and "Choose instead" offers the model to listen to and repeat. Lengths:
- **30 seconds** at Week 12
- **1 minute** at Weeks 26 and 40
- **1–2 minutes** in Stage 3 (Weeks 54, 67, 80)
- **2 minutes** in Stages 4 and 5

**Vocabulary targets** (words the learner understands; active use is about half). About 25 new words a week, plus the English words Telugu speakers already use (bus, ticket, doctor, phone, office, bank, TV: about 200 count from day one):

| By the end of | Words understood |
|---|---|
| Stage 1 (Week 12) | about 500 (including about 200 known loanwords) |
| Stage 2 (Week 40) | about 1,200 |
| Stage 3 (Week 80) | about 2,000 |
| Stage 4 (Week 120) | about 2,800 |
| Stage 5 (Week 150) | about 3,500 |

**Pronunciation**: the Sound of the week (§2a) runs to Week 80. After that, Weeks 113 (Clear Speech), 114 (Tone of Voice) and 131 (Fast Natural Speech) take it further.

**Manners and pragmatics**: every role play keeps its manners not-good reply (§1, Role plays). Polite English and Indian-English fixes get their own week (Week 39) and then stay in the Fix-it strand (§2).

---

# 2. Grammar spiral

Revised 2026-11-09 (curriculum review). The table shows where each point is introduced (**bold**) and where it comes back, using the reordered week numbers. Content for a week builds on the earlier weeks listed and does not re-teach them.

**Rules**
1. **Introduce, then revisit.** A point is introduced, comes back within 2–4 weeks, comes back again in a new life scene within 8–12 weeks, is tested at the next checkpoint (§2b), and then stays alive through the Fix-it strand.
2. **No gaps longer than 8 weeks.** No Stage 1–2 point goes more than 8 weeks without being used. Warm-ups, Review Days, the Daily review and Fix-it items all count.
3. **Chunk before rule.** A pattern first appears as a fixed phrase, 4–20 weeks before it is explained. Examples: *How long have you had …?* (Week 16), *There's been an accident* (Week 18), *isn't it?* (Week 34), *Smoking is not allowed* (Week 37), *I should have …* (Week 70).
4. **B2 grammar is recognition only.** The learner understands it and picks it in a choice, but never has to build it: third conditional, could have / might have, future perfect, cleft emphasis.

| Point | Weeks |
|---|---|
| Word order (who + action + what) | **1**, 2, 12, 26 |
| am / is / are | **1**, 2, 4, 12; Fix-it |
| was / were | **9**, 24, 45 |
| Present simple: I / you / we / they | **1**, 2, 6 |
| Present simple: he / she + s, does, doesn't | 1 (recognition), **7**, 15, 34, 81; Fix-it |
| Present continuous (now; arrangements) | **1**, 12, 19, 38, 81; Fix-it (stative and habitual -ing) |
| Past simple (positive, Did …?) | **1**, 9 |
| Past simple: didn't, irregulars, past questions | 1 (recognition), **9**, 18, 24, 32, 41, 43 |
| Past continuous | **24**, 26, 41, 83 |
| will (future, offers, promises, predictions) | **1**, 10, 19, 25, 72 |
| won't | 1 (recognition), **10**, 25 |
| going to | **10**, 25, 38, 72 |
| Present perfect (results, experience, just / already / yet, since / for) | chunk 16, **29**, 30, 31, 40, 43, 71, 81, 99 |
| Present perfect continuous | **53**, 81 |
| Past perfect | **82**, 83, 127 |
| used to / would (past habits) | **42**, 115, 127 |
| Future continuous / future perfect | **109** (future perfect recognition only) |
| Yes/no questions and short answers | **1**, 2, 7, 12, 34 |
| Question words and question word order | **2**, 7, 9, 12, 19, 27; Fix-it |
| Answering negative questions (No, I didn't) | chunk 12, **34**, 145; Fix-it |
| Indirect, tag and negative questions | **58**, 76, 145 (tag chunk 34) |
| can / could (ability, permission, requests) | **8**, 23, 33, 62 |
| would like / would you mind | **6**, 23, 33, 62 |
| should / must / have to | **11**, 17, 21, 37, 68 |
| might / may / must be / can't be | **72**, 73 |
| Modal perfects (should have; could / might have recognition only) | chunk 70, **108** |
| have / has, possessives ('s, my / your), whose | **4**, 9, 16 |
| this / that / these / those | **4**, 13, 22 |
| there is / there are / there was | **5**, 22, 45 |
| Articles a / an / the | **5**, 13, 22, 26, 40; Fix-it; every checkpoint |
| Plurals, countable / uncountable, some / any, a little / a few | **5**, 6, 13, 22, 64, 111; Fix-it |
| Prepositions of place, time and movement | **3**, 5, 14, 27; Fix-it; every checkpoint |
| Imperatives (instructions, requests, warnings) | **5**, 6, 14, 17, 18, 20 |
| Adverbs of frequency | **7**, 16, 35 |
| Comparatives and superlatives | **22**, 44, 45, 47, 99 |
| like / love / enjoy + -ing; gerunds and infinitives | **6**, 35, 68 |
| Conditionals: first, second, third, unless / in case | **48**, 69, 84 (recognition-led), 85, 130 |
| Passive voice | chunk 37, **56**, 61, 63, 74, 75, 87, 142 |
| Reported speech | **57**, 86, 126 |
| Relative clauses (who / that → which / where / whose) | **36**, 59 |
| Causative (get / have something done) | **88** |
| Connectors (and, but, because, so → that's why → although, however, therefore → on one hand) | **12**, 50, 96, 128 |
| wish / hope / regret | **70**, 110 |
| Phrasal verbs, always in context (chunks from Week 5: switch on, get up, call back) | **66**, 91 |
| Idioms and collocations | **89** (idioms), 90 (make / do) |
| Politeness and softening | **8**, 33, 39, 62, 104, 123 |
| Indian-English habits and confusing pairs | **39**, 147; Fix-it |
| Pronunciation: Sound of the week (§2a), then clear speech and intonation | **1–80** (§2a), 113, 114, 131 |
| Numbers: to 100, prices → lakh, crore ↔ hundred thousand, million | **3**, 21, 60 |

**Fix-it strand.** Telugu speakers keep making the same ten errors long after the week that teaches the rule, so these errors come back on a schedule instead of once:
- Every lesson has one Fix-it item, tagged with its error: a Don't say / Say card, a distractor or a question.
- Each week covers at least 3 different errors.
- Each error comes back about every 2 weeks (10 errors over 10 lessons).
- An error joins the rotation in its start week.

| # | Error | Example (Don't say → Say) | From week |
|---|---|---|---|
| 1 | Missing am / is / are | I hungry. → I am hungry. | 1 |
| 2 | He / she without -s | He go to the office. → He goes to the office. | 1 (recognition), 7 |
| 3 | Do-support and question word order | Why you are late? → Why are you late? You like tea? → Do you like tea? | 2 |
| 4 | Missing or extra article | I want pen. → I want a pen. | 5 |
| 5 | Plurals after numbers; uncountables | two kilo → two kilos; furnitures → furniture | 5 |
| 6 | Wrong or extra preposition | on the light → switch on the light; discuss about it → discuss it; return back → return | 3 |
| 7 | -ing for states and habits | I am knowing him. → I know him. I am going daily. → I go every day. | 1 |
| 8 | Present tense for duration | I am here since 2010. → I have lived here since 2010. | 16 (chunk), 31 |
| 9 | Yes / no to negative questions | You didn't eat? Yes. (meaning no) → No, I didn't. | 12 (chunk), 34 |
| 10 | Indian-English habits | Myself Kiran. → I'm Kiran. Do the needful. → Please do it. Out of station → out of town; prepone → bring forward | 1 (Myself), 39 |

The tag goes in the content data (one `fixIt` value per item). A content check enforces it: each week has at least 3 different tags, and each started error appears at least once every 3 weeks. Every checkpoint week (§2b) has a **Fix-it clinic** lesson with all ten errors. Weeks 1–13 already follow §1's rule of 3 persistent-error items a week; tagging them is a content task.

## 2a. Sound of the week

One sound Telugu speakers find hard, per main-path week (`src/content/sounds.ts`): the week's first lesson ends its Learn with the sound card (how to make each side, example words, "hear the difference"), and every lesson of the week asks one "Which word did you hear?" pair (5 pairs per week, word + Telugu meaning). A new week adds its entry when it is written; aim for words the learner already knows or meets that week.

| Week | Sound | Week | Sound |
|---|---|---|---|
| 1 | v / w (vest, west) | 8 | can / can't (stress) |
| 2 | short i / long ee (ship, sheep) | 9 | -ed at the end (walk, walked) |
| 3 | -teen / -ty (thirteen, thirty) | 10 | I go / I'll go |
| 4 | z / s (prize, price) | 11 | th / t (three, tree) |
| 5 | f / p (fan, pan) | 12 | sh / s (she, see) |
| 6 | a / e (bad, bed) | 13 | a / u (cap, cup) |
| 7 | s at the end (walk, walks) | | |

**Weeks 14–80** (planned 2026-11-09). Priorities follow what makes speech easy to understand:
- first: word stress, sentence stress, word endings (-s, -ed), consonant clusters without an added vowel, vowel length, question intonation
- then: linking and weak forms
- last, and mostly for listening: th

The sound fits the week's words where it can.

| Week | Sound | Week | Sound |
|---|---|---|---|
| 14 | word stress: first syllable (STA-tion, MAR-ket, TEM-ple) | 48 | 'll in conditionals (If it rains, I'll stay) |
| 15 | word stress: second syllable (ho-TEL, de-LAY, ar-RIVE) | 49 | reading codes aloud (double five, zero not "o") |
| 16 | word stress: three syllables (HOS-pi-tal, MED-i-cine) | 50 | firm, polite falling tone for problems |
| 17 | -s endings: s / z / iz (tablets, drops, boxes) | 51 | medical word stress (di-a-BE-tes, pre-SCRIP-tion) |
| 18 | sentence stress: the key word (Call an AM-bu-lance) | 52 | -tion endings (operation, injection, admission) |
| 19 | question intonation: wh- falls, yes/no rises | 53 | weak *been* (I've been waiting) |
| 20 | s + consonant with no added vowel (school, station, screen) | 54 | Checkpoint: review of Weeks 41–53 |
| 21 | numbers said fast (fif-TEEN / FIF-ty, lakh, thousand) | 55 | catching platform numbers in announcements |
| 22 | short u / long oo (pull, pool; full, fool) | 56 | weak *is* / *was* in the passive (It's made in …) |
| 23 | j / z (jam, zero, size) | 57 | said /sed/, told |
| 24 | -ed endings in stories (walked, called, waited) | 58 | falling tone in indirect questions |
| 25 | o / aw (hot, warm, saw) | 59 | where / were / wear |
| 26 | Checkpoint: word stress review | 60 | big money numbers (one point five lakh) |
| 27 | letter names that sound alike (B / V / P, M / N, G / J) | 61 | headline rhythm: content words strong |
| 28 | h at the start, not dropped or added (his / is, hair / air) | 62 | polite formal tone on the phone |
| 29 | final clusters (asked, fixed, months) | 63 | reading dates and titles on letters |
| 30 | long ee in participles (been, seen, eaten) | 64 | warm rising offers (Some MORE?) |
| 31 | contractions: I've, she's, hasn't | 65 | soft, slow tone for wishes and condolences |
| 32 | linking: consonant + vowel (an apple, light a lamp) | 66 | stress on the particle (turn OFF, pick UP) |
| 33 | kind, rising-falling tone for requests (Could you …?) | 67 | Checkpoint: review of Weeks 55–66 |
| 34 | falling *isn't it?* when agreeing | 68 | s-clusters (stop, smoke, sleep) |
| 35 | -ing ending (walking, not "walkin" or "walking-g") | 69 | weak *were* (If I were you) |
| 36 | r / l in clusters (friendly, proud, polite) | 70 | should've (to recognise) |
| 37 | w / v review (very, well, vehicle) | 71 | linking verb + particle (gone up, went down) |
| 38 | the weak middle vowel (to-MOR-row, SAT-ur-day) | 72 | PROB-ab-ly, DEF-i-nite-ly, per-HAPS |
| 39 | stress for politeness (I'm SO sorry, THANK you) | 73 | must be (t dropped in fast speech) |
| 40 | Checkpoint: review of Weeks 27–39 | 74 | pausing and stressing steps (FIRST …, THEN …) |
| 41 | linking in stories (and then, went out) | 75 | firm tone without anger |
| 42 | used to /yoos-tə/ | 76 | tag questions: rising (asking) vs falling (agreeing) |
| 43 | saying years (nineteen fifty-eight, two thousand ten) | 77 | IN-ter-est-ed, BOR-ing (stress in -ed / -ing adjectives) |
| 44 | -st endings (biggest, cheapest) | 78 | hearing accents: American t (water), British r |
| 45 | FA-mous, BEAU-ti-ful, CROWD-ed | 79 | stress to persuade (You should REALLY try it) |
| 46 | th / t again, for listening (I think) | 80 | Checkpoint: review of Weeks 68–79 |
| 47 | contrastive stress (THIS one, not THAT one) | | |

## 2b. Checkpoints and levels

**Checkpoints.** A checkpoint week closes each block of about 12–14 weeks. Its five lessons mix the block's topics and include a Fix-it clinic and the speaking mission (§1a). It has a Conversation Day like any week. Its Review Day ends with the **check**: one role play, one listening task and the speaking mission. The check never blocks progress. Afterwards the learner gets a "practice these again" list and a certificate showing the can-do, which they can share on WhatsApp. Learners see can-dos only, never a CEFR level.

| # | Week | Can-do on the certificate | Speaking mission |
|---|---|---|---|
| 1 | 12 (end of Stage 1) | I can introduce myself, give my phone number and address, spell my name, ask someone to say it again slowly, and ask for help. | 30 s: all about me |
| 2 | 26 | I can buy things and check the change, find my way and take a bus or auto, tell a doctor what is wrong and for how long, call 108 and say where I am, and refuse an OTP caller. | 1 min: my week |
| 3 | 40 (end of Stage 2) | I can fill a form and spell names aloud, ask at a government office, report a broken product and get a visit date, make small talk and plans, and say sorry and thank you naturally. | 1 min: my life now |
| 4 | 54 | I can tell a story from my past, give an opinion with a reason, return something I bought, follow the doctor's explanation and manage a hospital stay. | 1 min: a story from my childhood |
| 5 | 67 | I can book a trip and follow announcements, pass on what the doctor said, ask at an enquiry counter, talk about savings and pensions, understand an official letter and look after guests. | 90 s: a trip I took |
| 6 | 80 (end of Stage 3) | I can talk about healthy habits, imagine and regret, guess the reason for something, complain to officials about local problems, follow other accents and persuade gently. | 2 min: my town's problems and what would help |
| 7 | 94 | I can catch up with an old friend, tell a long story in the right order, prepare for problems, get things repaired and use common idioms and phrasal verbs. | 2 min: a time things went wrong |
| 8 | 107 | I can discuss news and traditions, follow a long announcement or talk, speak for a minute at a meeting, choose formal or informal English, say no nicely and bargain. | 2 min: speaking at a meeting |
| 9 | 120 (end of Stage 4) | I can look back on mistakes, describe a photo, speak clearly with a polite tone, share advice from my life and tell a story for two minutes. | 2 min: a folk tale or my own story |
| 10 | 135 | I can reply naturally, soften or stress what matters, tell a vivid story, weigh pros and cons, disagree politely and follow fast speech and the news. | 2 min: pros and cons of a choice |
| 11 | 150 (end of Stage 5) | I can explain and recommend, stand up for my rights as a customer, talk about my town and its history, answer an interviewer and give a short speech at a function. | 2–3 min: a speech at a function |

**Honest levels** (for writers only). One lesson is about 12 minutes, so a week is about 1.4 hours, or about 1.75 hours with the Daily review. Typical guided hours are about 90–100 for A1, 180–200 for A2 and 350–400 for B1. Learners with school English (false beginners) will move faster than this.

| By week | Hours (lessons; with Daily review) | Level the content aims at |
|---|---|---|
| 12 | about 17 (21) | A1 starter: survival phrases and the main sentence patterns |
| 40 | about 56 (70) | A1 complete |
| 80 | about 112 (140) | A2 |
| 120 | about 168 (210) | B1 in listening and reading; A2+ in speaking |
| 150 | about 210 (260) | B1 (listening towards B1+) |

---

# 3. Stage 1 — Foundations · పునాది (Weeks 1–12)

**The learner can:** greet and introduce themselves, make simple sentences in the main tenses, ask and answer questions, ask someone to repeat, give their phone number and address, handle numbers, time, money, people, home, food, routines, plans and simple health talk, and call for help. *(Checkpoint 1 at Week 12, §2b.)*

*Revised 2026-11-09 (curriculum review): week positions and the `w<N>-*` ids stay. Days marked **NEW**, **MOVED**, **LIGHTENED** or **CHUNKS ADDED** changed in the map; their written lessons were rewritten to match on 2026-11-10 (BUILD_PLAN "Curriculum reordered", part B).*

Each row: lesson id (stable, used in the address) · title (English · Telugu) · pattern / focus · sample sentences · role-play scene · Try it today. Lesson ids for Conversation and Review days are `w<N>-conversation` and `w<N>-review`.

## Week 1 — English Foundations · ఇంగ్లీష్ పునాది

Each tense lesson teaches the positive and one question form, anchored on a time word: **every day · right now · yesterday · tomorrow**. *(LIGHTENED 2026-11-09.)* Negatives (don't / doesn't, I am not, didn't, won't) and he / she + s are recognition only this week: the learner hears them, reads them and picks them in a choice, but never builds them. They are taught in full in Week 7 (present simple), Week 9 (past) and Week 10 (future). Greeting and "Sorry? Again, please" chunks start on Days 1–2 and are reused in every role play.

| Day | Id | Title | Pattern | Core sentences (examples) | Don't say → Say | Role play | Try it today |
|---|---|---|---|---|---|---|---|
| 1 | `sentence-basics` | **Who Does What** · వాక్య నిర్మాణం *(sentence basics)* · **CHUNKS ADDED** | Who + Action + What; Telugu verb-last vs English verb-second. Chunks: Hello. Thank you. Sorry? Again, please. | I eat rice. I drink tea. I read the newspaper. We speak Telugu. They play cricket. | I rice eat. → I eat rice. | A friend says hello and asks what you drink in the morning | Say three things you do, in English |
| 2 | `i-am-you-are` | **I Am, You Are** · నేను, మీరు *(am / is / are)* · **CHUNKS ADDED** | Who + am/is/are + what/how. Chunks: Hello, I'm Kiran. Nice to meet you. Sorry? Again, please. | I am Kiran. I am from Guntur. I am hungry. He is my friend. She is a teacher. Are you tired? Yes, I am. | I hungry. → I am hungry. Myself Kiran. → I am Kiran. | Meeting a new neighbour: greet, give your name, ask them to say theirs again | Introduce yourself to someone |
| 3 | `present-simple-every-day` | **Every Day** · రోజూ *(present simple)* · **LIGHTENED** | I / we / they walk; Do you …? Yes, I do. Recognition only: she walks, don't / doesn't (built in Week 7) | I walk every morning. We go to the temple on Fridays. They watch the news. Do you drink coffee? Yes, I do. | I am walking every day. → I walk every day. | Doctor asks about your daily routine | Tell someone your morning routine |
| 4 | `present-continuous-right-now` | **Right Now** · ఇప్పుడు *(present continuous)* · **LIGHTENED** | am/is/are + verb-ing; Are you …? Recognition only: I am not … | I am cooking. She is sleeping. They are watching TV. Are you coming? Yes, I am. | Now I cook. → I am cooking now. I am knowing him. → I know him. | A friend calls: "What are you doing?" | Say what you are doing right now |
| 5 | `past-simple-yesterday` | **Yesterday** · నిన్న *(past simple)* · **LIGHTENED** | went / ate / bought; Did you …? Yes, I did. Recognition only: didn't + verb (built in Week 9) | I went to the market yesterday. I bought vegetables. We watched a film. Did you eat? Yes, I did. | Yesterday I go. → Yesterday I went. | A friend asks what you did yesterday | Tell someone what you did yesterday |
| 6 | `future-will-tomorrow` | **Tomorrow** · రేపు *(future with will)* · **LIGHTENED** | will + verb; Will you …? Recognition only: won't (built in Week 10) | I will call you tomorrow. We will go to the temple. She will come on Sunday. Will you help me? Yes, I will. | I will going. → I will go. | Planning a visit to a relative's house | Tell someone one plan for tomorrow |
| 7 | `w1-review` | **My Day** · నా రోజు *(weekly review)* | One verb across the timeline: I go / I am going / I went / I will go | Mixed from Days 1–6 | Mixed | Video call with a relative: talk about your day — every day, now, yesterday, tomorrow (6 turns) | Talk about your day to someone for one minute |

Day 7 = the automatic review plus two extras: a **timeline** activity (the same action on every day / right now / yesterday / tomorrow) and the long role play. It builds only positive sentences and questions; negatives appear as recognition items.

## Week 2 — Asking Questions · ప్రశ్నలు అడగడం

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `what-and-where` | What, Where & Who · ఏంటి, ఎక్కడ, ఎవరు *(Who folded in from Day 3)* | what / where / who + be and do | What is this? Where do you live? Who is that man? | A new neighbour asks where you live |
| 2 | `when-and-what-time` | When & What Time · ఎప్పుడు, ఎన్ని గంటలకు | when / what time | When is the function? What time does the shop open? | Asking a shopkeeper when the shop opens |
| 3 | `sorry-can-you-repeat` | Sorry? Say It Again · అర్థం కాకపోతే **(MOVED from Week 8, simplified; replaces `who-and-whose`)** | clarifying: Sorry? Please say it again. Please speak slowly. What does … mean? How do you say … in English? | Sorry? Please say it again. Please speak slowly. What does this word mean? | A shopkeeper speaks too fast |
| 4 | `how-questions` | How Questions · ఎలా, ఎంత | how, how old, how much, how far | How are you? How much is this? How far is the bus stand? | Buying fruit from a cart |
| 5 | `why-and-because` | Why & Because · ఎందుకు, ఎందుకంటే | why … ? because … | Why are you late? Because the bus was late. | A friend asks why you missed the meeting |
| 6 | `w2-conversation` | Conversation Day: Meeting Someone at a Wedding · పెళ్లిలో పరిచయం | all question words; asking someone to repeat | — | Getting to know a stranger at a wedding (asking who someone is, and asking them to say a name again); asking the way to the dining hall |
| 7 | `w2-review` | Review | | | |

The Review Day covers the clarifying phrases with the question words. *Whose* is now taught in Week 4 (Day 3).

## Week 3 — Numbers, Time & Money · సంఖ్యలు, సమయం, డబ్బు

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `numbers-and-counting` | Numbers · సంఖ్యలు | 1–100, phone numbers | I have two brothers. My number is 98480 12345. | Giving your number for a home delivery |
| 2 | `telling-the-time` | Telling the Time · సమయం చెప్పడం | o'clock, half past, quarter to | It is half past six. The bus comes at quarter to nine. | Asking the time at a bus stop |
| 3 | `days-and-dates` | Days, Months & Dates · రోజులు, నెలలు, తేదీలు | on / in / at with time | My birthday is on 15 August. The temple is closed on Mondays. | Booking a day for a doctor's appointment |
| 4 | `prices-and-money` | Prices & Money · ధరలు, డబ్బు | How much is/are …? rupees, change | How much is this saree? It is 1,500 rupees. | Paying at a shop and getting change |
| 5 | `my-address` | My Address · నా అడ్రస్ **(NEW; `big-numbers-lakh` MOVED to Week 21)** | door number, street, town, pin code (said digit by digit); spelling your name with the alphabet | My door number is twelve. Five two two, double zero one. Kiran. K, I, R, A, N. | A courier calls to ask for your address and how to spell your name |
| 6 | `w3-conversation` | Conversation Day: At the Vegetable Market · కూరగాయల మార్కెట్‌లో | numbers, prices, time, address | — | Buying vegetables; asking when the market closes; giving your address for a home delivery |
| 7 | `w3-review` | Review | | | |

The Review Day covers phone numbers, prices, times, dates and the address; lakh and crore are no longer part of this week.

## Week 4 — People · మనుషులు

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `have-and-has` | Have & Has | have / has, don't have | I have a sister. He has a small shop. | A neighbour asks about your family |
| 2 | `my-your-his-her` | My, Your, His, Her · నా, మీ, అతని, ఆమె | possessive words | This is my brother. Her name is Padma. | Showing a photo to a friend |
| 3 | `possessive-s` | Whose Is It? Ravi's · ఎవరిది? రవి గారిది *(Whose folded in from Week 2)* | Whose …? + name + 's | Whose bag is this? It's Ravi's. This is my friend's house. | At a function, asking whose bag this is |
| 4 | `describing-people` | Describing People · మనుషులు ఎలా ఉంటారు | be + adjective, has + feature | He is tall. She is very kind. He has grey hair. | Describing a person you are waiting for at the station |
| 5 | `this-that-these-those` | This, That, These, Those | near / far, one / many | This is my bag. Those are my shoes. | Pointing to items in a shop |
| 6 | `w4-conversation` | Conversation Day: A New Friend at the Park · పార్క్‌లో కొత్త స్నేహితులు | people and family words; whose | — | Talking about your family and friends; describing someone |
| 7 | `w4-review` | Review | | | |

## Week 5 — My Home · నా ఇల్లు

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `there-is-there-are` | There Is, There Are | there is / are, is there …? | There is a temple near my house. There are three rooms. | Describing your house to a friend |
| 2 | `a-an-the` | A, An, The | articles | I want a pen. It is an old house. The kitchen is small. | Asking for things at a stationery shop |
| 3 | `in-on-under-next-to` | In, On, Under, Next To · ఎక్కడ ఉంది | prepositions of place | The keys are on the table. My glasses are under the newspaper. | Helping someone find your spectacles |
| 4 | `one-and-many` | One and Many · ఒకటి, చాలా | plurals, irregular plurals | one cup, two cups; one person, two people | Ordering plates and cups for a function |
| 5 | `rooms-and-things` | Around the House · ఇంట్లో | imperatives, switch on/off, open/close | Please switch on the fan. Close the door, please. | Showing a guest around your home |
| 6 | `w5-conversation` | Conversation Day: A Guest at Home · ఇంటికి అతిథి | home words, offers | — | Welcoming a guest; an electrician comes to fix a light |
| 7 | `w5-review` | Review | | | |

## Week 6 — Food & Cooking · ఆహారం, వంట

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `i-like-i-dont-like` | I Like, I Don't Like | like / don't like, Do you like …? | I like idli. I don't like spicy food. | A friend asks your favourite food |
| 2 | `i-would-like` | I Would Like | would like, Would you like …? | I would like some tea. Would you like some water? | Offering snacks to a guest |
| 3 | `some-and-any` | Some & Any | some / any, countable vs uncountable | I need some rice. Is there any milk? | Making a shopping list with a relative |
| 4 | `how-much-how-many` | How Much, How Many | quantity questions | How much rice do you want? How many eggs? | Buying at a kirana shop |
| 5 | `cooking-instructions` | Cooking Steps · వంట సూచనలు | imperatives, first / then | Cut the onions. Add salt. Then boil the water. | Explaining how to make filter coffee |
| 6 | `w6-conversation` | Conversation Day: Lunch at a Friend's House · స్నేహితుల ఇంట్లో భోజనం | food, offers, likes | — | Being a guest at lunch; ordering food by phone |
| 7 | `w6-review` | Review | | | |

## Week 7 — My Daily Routine · నా దినచర్య

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `always-usually-never` | Always, Usually, Never | adverbs of frequency | I always drink tea in the morning. I never eat late. | A doctor asks about your habits |
| 2 | `he-goes-she-watches` | He Goes, She Watches · he/she తో verb | third person -s / -es | My neighbour walks every day. She watches TV at night. | Talking about a neighbour's routine |
| 3 | `routine-questions` | Do You …? Does She …? | present simple questions | Do you get up early? What time does she sleep? | A new friend asks about your day |
| 4 | `morning-to-night` | Morning to Night · ఉదయం నుండి రాత్రి వరకు | time expressions | in the morning, after lunch, at night, before bed | Fixing a time to meet a friend |
| 5 | `weekdays-and-weekends` | Weekdays and Weekends | on Sundays, every weekend | On Sundays I go to the temple. | A friend asks what you do on Sundays |
| 6 | `w7-conversation` | Conversation Day: A Day in Your Life · మీ రోజు | routine talk | — | Morning walk chat at the park; health check-up questions |
| 7 | `w7-review` | Review | | | |

## Week 8 — Can & Asking for Help · సహాయం అడగడం

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `can-and-cant` | Can & Can't · చేయగలను | ability | I can cook. I can't drive. Can you swim? | A neighbour asks if you can help with a function |
| 2 | `can-i` | Can I …? · అనుమతి | permission | Can I sit here? Can I use your phone? | Asking for a seat on a bus |
| 3 | `can-could-would` | Can, Could, Would · మర్యాదగా అడగడం | polite requests (When do I use this?) | Can you help me? Could you help me, please? | Asking a stranger to read a sign |
| 4 | `could-in-the-past` | I Could … (before) | could / couldn't for past ability | When I was young, I could run fast. | Telling a friend about your childhood |
| 5 | `please-help-me` | Please Help Me! · సహాయం చేయండి! **(NEW; `sorry-can-you-repeat` MOVED to Week 2)** | asking for help in an emergency: Help! Please call one zero eight (ambulance) or one one two (any emergency). I am lost. I fell. Giving your address. Never assumes family: "Please call this number", "Please call my neighbour". | Please help me. Please call one zero eight. I am lost. I fell down. | You slip on the road and a stranger asks "Are you okay?" |
| 6 | `w8-conversation` | Conversation Day: Help at the Railway Station · రైల్వే స్టేషన్‌లో సహాయం | requests, clarifying (from Week 2), calling for help | — | Finding the platform; asking a porter for help; a passenger feels faint and you call for help |
| 7 | `w8-review` | Review | | | |

The Review Day covers can, polite requests and calling for help; the clarifying phrases come back from Week 2 as warm-ups.

## Week 9 — Yesterday & Last Week · నిన్న, పోయిన వారం

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `was-and-were` | Was & Were | was / were, wasn't, Were you …? | I was at home yesterday. Were you tired? | A friend asks where you were |
| 2 | `regular-past-verbs` | Walked, Cooked, Called | regular -ed (and its three sounds) | I called my friend. We watched a film. | Telling a neighbour about your evening |
| 3 | `irregular-past-verbs` | Went, Ate, Saw | common irregular verbs | I saw an old friend. She bought a saree. | Telling a friend about a shopping trip |
| 4 | `what-did-you-do` | What Did You Do? | past wh- questions | Where did you go? What did you eat? | A friend asks about your weekend |
| 5 | `last-week-ago` | Last Week, Two Days Ago | past time words | I went to Tirupati last month. It started two days ago. | A doctor asks when the pain started |
| 6 | `w9-conversation` | Conversation Day: Telling About a Trip · ప్రయాణం గురించి | past tense stories | — | Describing a temple trip; a relative asks about a function you attended |
| 7 | `w9-review` | Review | | | |

Listening: from this week, each Review Day ends with a short story heard before it is read (30 seconds in Stage 1; §1a).

## Week 10 — Plans & Future · ప్రణాళికలు

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `going-to-plans` | Going To · ప్రణాళికలు | going to for plans | I am going to visit my cousin. | A friend asks your weekend plans |
| 2 | `will-or-going-to` | Will or Going To? | When do I use this? | I'll help you (decided now). I'm going to paint the house (planned). | Deciding what to do on a holiday |
| 3 | `ill-help-you` | I'll Help You · సహాయం, మాట | will for offers and promises | I'll carry that. I will call you tonight. | Helping a neighbour with heavy bags |
| 4 | `invitations` | Would You Like to Come? · ఆహ్వానాలు | invite, accept, decline | Would you like to come for lunch? I'd love to. Sorry, I can't. | Inviting a friend for Sankranti lunch |
| 5 | `next-week-soon` | Next Week, Soon · త్వరలో | future time words | next month, in two days, soon, later | Making an appointment at a clinic |
| 6 | `w10-conversation` | Conversation Day: Planning a Temple Trip · గుడికి ప్రయాణం | plans, offers, invitations | — | Planning a trip with friends; booking a cab by phone |
| 7 | `w10-review` | Review | | | |

## Week 11 — Feelings & Health · భావాలు, ఆరోగ్యం

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `i-feel` | I Feel … · నాకు … గా ఉంది | feel + adjective | I feel tired. Are you okay? | A friend says you look tired |
| 2 | `my-head-hurts` | My Head Hurts · శరీరం, నొప్పి | body parts, I have a …, … hurts | I have a headache. My knee hurts. | Telling a pharmacist what is wrong |
| 3 | `should-and-shouldnt` | Should & Shouldn't · సలహా | advice | You should rest. You shouldn't eat oily food. | Advising a friend with a cold |
| 4 | `at-the-clinic` | At the Clinic · క్లినిక్‌లో | describing symptoms simply; the chunk "twice a day after food" | I had a fever yesterday. It started two days ago. | Talking to the receptionist and the doctor |
| 5 | `get-well-soon` | Get Well Soon · సానుభూతి | sympathy phrases | I'm sorry to hear that. Take care. Get well soon. | Calling a relative who is unwell |
| 6 | `w11-conversation` | Conversation Day: A Visit to the Doctor · డాక్టర్ దగ్గరికి | health language | — | A full clinic visit; buying the medicines |
| 7 | `w11-review` | Review | | | |

## Week 12 — Putting It Together · అన్నీ కలిపి

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `and-but` | And, But | joining ideas | I like tea and coffee. I like tea, but I don't like coffee. | Talking about likes with a friend |
| 2 | `because-and-so` | Because, So | reasons and results | I stayed home because it was raining. It was raining, so I stayed home. | Explaining why you were absent from a meeting |
| 3 | `all-about-me` | All About Me · నా గురించి | speaking for one minute | My name is …, I live in …, Every day I …, I like … | Introducing yourself at a community meeting |
| 4 | `four-times-together` | Every Day, Now, Yesterday, Tomorrow · అన్ని కాలాలు | mixing the four tenses | I usually walk. Today I am resting. Yesterday I went out. Tomorrow I will visit Ravi. | A friend asks about your week |
| 5 | `all-question-types` | All Kinds of Questions · అన్ని ప్రశ్నలు | yes/no + wh across tenses | Did you eat? Where are you going? When will he come? | Answering a volunteer's survey |
| 6 | `w12-conversation` | Conversation Day: A Long Chat at a Function · ఫంక్షన్‌లో మాటలు | everything from Stage 1 | — | A long chat with someone new; helping a guest find their way |
| 7 | `w12-review` | Stage 1 Review · పునాది పునశ్చరణ | Checkpoint 1 (§2b), with a Fix-it round and the 30-second speaking mission | | The checkpoint check, certificate and stage celebration |

---

# 4. Stage 2 — Everyday Life · రోజువారీ జీవితం (Weeks 13–40)

Reordered 2026-11-09 (curriculum review).

**The learner can:** shop, get around, use buses, trains and autos, see a doctor and pharmacist, handle an emergency, make phone and video calls, pay by UPI and stay safe from scams, deal with the bank, offices, government services and customer care, make small talk, talk to neighbours, describe people and experiences, make plans, and say sorry and thank you in natural English. *(Checkpoints at Weeks 26 and 40, §2b. Tracks are offered at their own weeks, §8.)*

| Week | Title | Grammar focus | Life topic / function |
|---|---|---|---|
| 13 | Shopping at the Market · మార్కెట్‌లో షాపింగ్ | Can I have …?; a kilo of; How much are …? | buy things and ask prices politely |
| 14 | Getting Around Town · ఊరిలో తిరగడం | directions; prepositions of movement (along, across, past) | ask for and follow directions; guide someone to your house |
| 15 | Buses, Trains & Autos · బస్సులు, రైళ్లు, ఆటోలు | present simple for timetables; How long does it take? | travel locally, ask fares and times, catch a platform announcement |
| 16 | At the Doctor · డాక్టర్ దగ్గర | How long have you had …? (a fixed phrase); for + time | explain symptoms, BP and sugar, tests and reports |
| 17 | Pharmacy & Medicines · మందుల షాపు, మందులు | once / twice a day; have to / don't have to; don't for warnings | understand dosage, warnings and medicine labels |
| 18 | Emergencies & Safety · అత్యవసరాలు, భద్రత | imperatives; past simple for what happened; There's been … (a fixed phrase) | call 108, 112, 100 or 101, say what happened and where, get someone admitted |
| 19 | Phone Calls · ఫోన్ కాల్స్ | This is …; May I speak to …?; I'll call you back | make and answer calls, take messages, handle a wrong number or a bad line |
| 20 | WhatsApp, Video Calls & UPI · వాట్సాప్, వీడియో కాల్స్, UPI | How do I …?; first / then / after that | send photos, make video calls, scan and pay, sort out small phone problems |
| 21 | The Bank & Money Safety · బ్యాంక్, డబ్బు జాగ్రత్త | must / have to; never + action; lakh and crore | deposit and withdraw, use the ATM, say big amounts, refuse OTP, KYC and "digital arrest" scams |
| 22 | Shops & Supermarket · షాపులు, సూపర్ మార్కెట్ | comparatives (cheaper, bigger, more expensive); Do you have …? | compare and ask for items, pay and ask about offers |
| 23 | Restaurant & Food Delivery · హోటల్, ఫుడ్ డెలివరీ | would like; I'll have …; Could I have the bill? | order, ask for changes, complain politely, pay, guide a delivery person |
| 24 | What Were You Doing? · అప్పుడు మీరు ఏం చేస్తున్నారు? | past continuous + when / while | tell what happened when something interrupted you |
| 25 | Weather & Seasons · వాతావరణం, కాలాలు | will for predictions; going to with evidence | talk about the weather, understand a cyclone or heat warning |
| 26 | Checkpoint: Out and About · చెక్‌పాయింట్: బయట పనులు | mixed; Fix-it clinic | Checkpoint 2 (§2b) |
| 27 | Offices & Forms · ఆఫీసులు, ఫారాలు | dates in full; spelling aloud; Where do I …? | give your date of birth, spell names and an email, fill a form, bring the right documents |
| 28 | Government Services · ప్రభుత్వ సేవలు | want to / need to / have to; past simple to follow up | update Aadhaar, sort out a ration card, give a pension life certificate, use Mee Seva or the village / ward secretariat |
| 29 | Customer Care & Repairs · కస్టమర్ కేర్, రిపేర్లు | present perfect for results (It has stopped working) | explain a fault to customer care or a plumber, follow up firmly |
| 30 | Have You Ever …? · మీరు ఎప్పుడైనా …? | present perfect for experience; been vs gone | talk about experiences |
| 31 | Just, Already, Yet · ఇప్పుడే, ఇప్పటికే, ఇంకా | just / already / yet; since / for | give news, say what is done and not done yet |
| 32 | Festivals & Celebrations · పండుగలు, వేడుకలు | past simple for "what we did"; wishes and greetings | greet, wish, accept and decline, explain a festival |
| 33 | Neighbours & Community · ఇరుగు పొరుగు, సమాజం | could / would requests; Shall I …?; Would you mind …? | ask for and offer help, raise a problem politely |
| 34 | Small Talk · చిన్న చిన్న కబుర్లు | short answers; answering negative questions; isn't it? (a fixed phrase) | start, keep up and end a friendly chat |
| 35 | Free Time & Hobbies · ఖాళీ సమయం, అభిరుచులు | like / love / enjoy / don't mind + -ing; good at | talk about hobbies, films and shows |
| 36 | Describing People & Character · మనుషులు, స్వభావం | personality words; who / that (relative clause intro) | describe what people are like |
| 37 | Rules & Advice · నియమాలు, సలహాలు | must / mustn't / should / have to compared; allowed; Not allowed (a fixed phrase) | understand signs and rules, give advice |
| 38 | Making Plans with Friends · స్నేహితులతో ప్లాన్లు | Let's, Shall we, How about; present continuous for arrangements | suggest, agree, change and cancel plans |
| 39 | Polite English · మర్యాదగా ఇంగ్లీష్ | sorry for + -ing; thanks for; Indian-English fixes | apologise and thank naturally; say "I'm Kiran", not "Myself Kiran" |
| 40 | Checkpoint: Stage 2 Review · చెక్‌పాయింట్: రోజువారీ జీవితం పునశ్చరణ | mixed; Fix-it clinic | Checkpoint 3 (§2b) |

*Changes from the old map:*
- **Moved:** Getting Around Town 17 → 14, Buses, Trains & Autos 18 → 15, At the Doctor 21 → 16, Pharmacy 22 → 17, Phone & Apps 39 → 20, Shops 14 → 22, Restaurant 16 → 23, What Were You Doing? 20 → 24, Weather 23 → 25, Have You Ever 29 → 30, Just, Already, Yet 30 → 31, Festivals 24 → 32, Neighbours 25 → 33, Hobbies 33 → 35, Describing People 35 → 36, Rules 36 → 37, Plans 37 → 38.
- **New:** Emergencies (18), Government Services (28), Small Talk (34, from old 117), checkpoint (26).
- **Merged:** Bank + Scams (old 26 + 72 → 21), Customer Care + Repairs (old 28 + 31 → 29), Sorry & Thank You + Indian English Habits (old 38 + 149 → 39).
- **Moved out:** Clothes & Colours → Stage 3 Week 44, Describing Places → Week 45, Recipes & Kitchen → merged into Week 64 (Hosting Guests).

Each week below: five lessons, a Conversation Day (`w<N>-conversation`) and a review (`w<N>-review`), in the format of §3. English sentences stay at **10 words or fewer** (§1). Points the spiral (§2) introduces later appear only as fixed phrases (Week 16's *How long have you had …?*). Lesson ids of Weeks 14–40 are not released yet, so they follow the new week numbers.

## Week 13 — Shopping at the Market · మార్కెట్‌లో షాపింగ్

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `can-i-have-please` | Can I Have …, Please? · … ఇస్తారా? | Can I have …? asking politely | Can I have a kilo of onions, please? Can I have a bag? | Buying onions and tomatoes at a stall |
| 2 | `a-kilo-of` | A Kilo Of, A Bunch Of · కిలో, కట్ట, డజను | a kilo / half a kilo / a bunch / a packet of | I need half a kilo of beans. Give me a bunch of coriander. | Buying greens and fruit by weight |
| 3 | `how-much-are-they` | How Much Are They? · ఎంత అవుతుంది? | How much is / are …? That comes to … | How much are these apples? That comes to 240 rupees. | Asking prices at the fruit market |
| 4 | `bargaining-politely` | Can You Reduce It? · ధర కొంచెం తగ్గిస్తారా? | polite bargaining | That's a bit expensive. Can you give it for fifty? | Bargaining for a bedsheet at the weekly santha |
| 5 | `fresh-and-ripe` | Fresh and Ripe · తాజాగా, పండినవి | describing produce: fresh, ripe, soft, too big | Are these mangoes ripe? These tomatoes are too soft. | Choosing good fruit with the seller |
| 6 | `w13-conversation` | Conversation Day: The Sunday Market · ఆదివారం సంత | all of the week | — | Shopping for a week's vegetables; the stall-keeper gives the wrong change |
| 7 | `w13-review` | Review | | | |

## Week 14 — Getting Around Town · ఊరిలో తిరగడం

*Was Week 17.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `excuse-me-where-is` | Excuse Me, Where Is …? · … ఎక్కడ ఉంది? | asking the way politely | Excuse me, where is the post office? Is it far? | Asking for the post office |
| 2 | `turn-left-go-straight` | Turn Left, Go Straight · ఎడమకు తిరగండి | direction instructions | Go straight and turn left at the signal. | Following directions to a temple |
| 3 | `along-across-past` | Along, Across, Past · వెంబడి, అవతలకు, దాటి | prepositions of movement | Walk along this road. Cross the bridge and go past the bank. | Directions to a friend's house |
| 4 | `opposite-the-bus-stand` | Opposite the Bus Stand · ఎదురుగా, మూలన | landmarks: opposite, behind, at the corner | It's opposite the bus stand, next to the medical shop. | Guiding a delivery person to your house |
| 5 | `i-think-im-lost` | I Think I'm Lost · దారి తప్పాను | asking for help when lost | I think I'm lost. Can you show me on the map? | Lost in a new area; asking a shopkeeper |
| 6 | `w14-conversation` | Conversation Day: Finding the New Hospital · కొత్త ఆసుపత్రి | all of the week | — | Asking several people the way; guiding a visitor from the bus stand |
| 7 | `w14-review` | Review | | | |

## Week 15 — Buses, Trains & Autos · బస్సులు, రైళ్లు, ఆటోలు

*Was Week 18.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `which-bus-goes` | Which Bus Goes There? · ఏ బస్ వెళ్తుంది? | Which bus goes to …? Does this bus stop at …? | Which bus goes to Benz Circle? Does it stop at the hospital? | At an RTC bus stop |
| 2 | `the-train-leaves-at` | The Train Leaves at Six · రైలు ఆరింటికి | present simple for timetables | The train leaves at 6:15. It reaches Hyderabad at noon. | At the railway enquiry counter |
| 3 | `how-long-does-it-take` | How Long Does It Take? · ఎంతసేపు పడుతుంది? | How long does it take? It takes … | How long does it take to Guntur? About an hour. | Planning a trip with a friend |
| 4 | `how-much-to-the-station` | How Much to the Station? · ఆటో ఛార్జీ | auto fares, meter, waiting | How much to the railway station? Please go by meter. | Taking an auto |
| 5 | `one-ticket-please` | One Ticket, Please · టికెట్ | tickets, return, seats | One ticket to Tirupati, please. Is this seat free? | Buying a ticket from the conductor |
| 6 | `w15-conversation` | Conversation Day: A Day Trip by Train · రైలులో ఒక రోజు | all of the week | — | Booking and boarding a train, with a platform announcement heard first; an auto from the station |
| 7 | `w15-review` | Review | | | |

## Week 16 — At the Doctor · డాక్టర్ దగ్గర

*Was Week 21.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `more-symptoms` | Symptoms · లక్షణాలు | breathless, swollen, itchy, rash | I feel breathless on the stairs. My feet are swollen. | Telling a nurse your symptoms |
| 2 | `how-long-have-you-had` | How Long Have You Had It? · ఎన్ని రోజులుగా? | How long have you had …? (a phrase); For … | How long have you had this cough? For about a week. | The doctor asks about your cough |
| 3 | `bp-and-sugar` | BP and Sugar · BP, షుగర్ | long-term conditions, regular check-ups | I have diabetes. My BP is high in the morning. | A routine check-up |
| 4 | `tests-and-reports` | Tests and Reports · పరీక్షలు, రిపోర్టులు | blood test, X-ray, empty stomach | Please come with an empty stomach. When will the report come? | Getting a blood test |
| 5 | `what-should-i-avoid` | What Should I Avoid? · ఏమి మానాలి? | asking about food, walking and rest | What should I eat? Can I walk every day? | Asking the doctor about food and exercise |
| 6 | `w16-conversation` | Conversation Day: A Hospital Check-Up · ఆసుపత్రిలో చెకప్ | all of the week | — | Registering at a hospital; a full talk with the doctor |
| 7 | `w16-review` | Review | | | |

## Week 17 — Pharmacy & Medicines · మందుల షాపు, మందులు

*Was Week 22.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `twice-a-day` | Twice a Day · రోజుకు రెండుసార్లు | once / twice / three times a day; before / after food | Take one tablet twice a day after food. | Understanding a prescription |
| 2 | `you-have-to-finish` | You Have to Finish It · పూర్తిగా వేసుకోవాలి | have to / don't have to | You have to finish all the tablets. You don't have to take it at night. | The pharmacist explains a course of medicine |
| 3 | `dont-take-it-with` | Don't Take It With Milk · పాలతో వద్దు | warnings with don't, keep; reading the label (EXP, after food) | Don't take this on an empty stomach. Keep it in the fridge. | Warnings about a new medicine |
| 4 | `at-the-medical-shop` | At the Medical Shop · మెడికల్ షాపులో | asking for medicines; strips; a cheaper brand | Do you have this medicine? Is there a cheaper one? | Buying a month's medicines |
| 5 | `side-effects` | It Makes Me Sleepy · సైడ్ ఎఫెక్ట్స్ | describing side effects | This tablet makes me sleepy. Is that normal? | Calling the doctor about a side effect |
| 6 | `w17-conversation` | Conversation Day: Medicines for a Neighbour · పొరుగువారికి మందులు | all of the week | — | Buying medicines for an elderly neighbour; explaining the timings to them |
| 7 | `w17-review` | Review | | | |

## Week 18 — Emergencies & Safety · అత్యవసరాలు, భద్రత

*NEW: brought forward from old Week 52 (Hospital & Emergencies), with the gas-safety day from old Week 31. Builds on Week 8's `please-help-me`.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `call-an-ambulance` | Call an Ambulance! · అంబులెన్స్‌కి ఫోన్ చేయండి! | calling 108 or 112: what happened, where, how many | There's been an accident. Please send an ambulance. The address is 4-12, Ring Road. | Calling 108 for a man who fell on the road |
| 2 | `he-fell-down` | He Fell Down · కింద పడిపోయారు | past simple for what happened; injuries | He fell down the stairs. His leg is bleeding. He can't stand up. | Telling the ambulance staff what happened |
| 3 | `i-can-smell-gas` | I Can Smell Gas · గ్యాస్ వాసన వస్తోంది | gas leaks, short circuits, fire; don't + action; call 101 | I can smell gas. Don't switch on the light. Turn off the main switch. | A gas leak in the kitchen; calling the gas agency |
| 4 | `at-the-emergency-ward` | At the Emergency Ward · ఎమర్జెన్సీ వార్డులో | admission: giving the patient's details and medicines | Where is the emergency ward? He has diabetes. He takes BP tablets. | Helping a neighbour get admitted at night |
| 5 | `call-the-police` | Call the Police · పోలీసులకు ఫోన్ | theft and chain snatching; 100 or 112; describing a person | Someone stole my bag. A man on a bike took her chain. | Reporting a theft at the police station |
| 6 | `w18-conversation` | Conversation Day: An Emergency on the Street · రోడ్డు మీద అత్యవసరం | all of the week | — | Calling 108 for a neighbour who fainted; giving details at the emergency ward desk |
| 7 | `w18-review` | Review | | | |

## Week 19 — Phone Calls · ఫోన్ కాల్స్

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `hello-who-is-this` | Hello, Who's Speaking? · ఎవరు మాట్లాడుతున్నారు? | opening a call; This is …; May I speak to …? | Hello, this is Lakshmi. May I speak to Ravi? | Calling a friend's house |
| 2 | `can-i-take-a-message` | Can I Take a Message? · ఏమైనా చెప్పాలా? | messages: He's not here; I'll tell him | He's not at home. Can I take a message? | Taking a message for a neighbour |
| 3 | `ill-call-you-back` | I'll Call You Back · మళ్ళీ ఫోన్ చేస్తాను | will for offers on the phone | I'm busy now. I'll call you back in ten minutes. | A call at a busy moment |
| 4 | `sorry-wrong-number` | Sorry, Wrong Number · రాంగ్ నంబర్ | wrong numbers, a bad line, speak up | Sorry, I think you have the wrong number. | A wrong number and a bad line |
| 5 | `booking-by-phone` | Booking by Phone · ఫోన్‌లో బుకింగ్ | making a booking or appointment | I'd like to book a gas cylinder, please. | Booking a gas cylinder |
| 6 | `w19-conversation` | Conversation Day: A Day of Phone Calls · రోజంతా ఫోన్లు | all of the week | — | Calling a relative; calling a shop to check it is open |
| 7 | `w19-review` | Review | | | |

## Week 20 — WhatsApp, Video Calls & UPI · వాట్సాప్, వీడియో కాల్స్, UPI

*Was Week 39.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `how-do-i-send-a-photo` | How Do I Send a Photo? · ఫోటో ఎలా పంపాలి? | How do I …? | How do I send a photo on WhatsApp? | Asking a young neighbour for help |
| 2 | `tap-here-then-send` | Tap Here, Then Send · ఇక్కడ నొక్కండి | app steps: tap, scroll, press, then | Tap the camera icon, then press send. | Following the steps to send a photo |
| 3 | `can-you-hear-me` | Can You Hear Me? · వీడియో కాల్ | video call phrases: Can you hear me? You're on mute. (from old Week 116) | Can you hear me? Your video is frozen. | A video call with a relative abroad |
| 4 | `scan-and-pay` | Scan and Pay · స్కాన్ చేసి కట్టండి | UPI payments step by step | Scan the QR code and enter the amount. | Paying at a shop with UPI |
| 5 | `my-phone-is-slow` | My Phone Is Slow · ఫోన్ సమస్యలు | storage, battery, charger problems | My phone is very slow. The battery finishes quickly. | At a mobile repair shop |
| 6 | `w20-conversation` | Conversation Day: Learning a New App · కొత్త యాప్ నేర్చుకోవడం | all of the week | — | Booking a cab on an app with help; helping a friend with a video call |
| 7 | `w20-review` | Review | | | |

## Week 21 — The Bank & Money Safety · బ్యాంక్, డబ్బు జాగ్రత్త

*Old Week 26 (At the Bank) merged with old Week 72 (Staying Safe from Scams). Day 3 is MOVED from Week 3 (already written).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `deposit-and-withdraw` | Deposit and Withdraw · డబ్బు వేయడం, తీయడం | deposit, withdraw, passbook, slip; You must bring … | I'd like to deposit ten thousand rupees. You must bring your Aadhaar card. | At the cash counter |
| 2 | `at-the-atm` | At the ATM · ATM దగ్గర | ATM steps; PIN; a stuck card | Enter your PIN. My card is stuck in the machine. | Asking the guard for help at an ATM |
| 3 | `big-numbers-lakh` | Big Numbers · పెద్ద సంఖ్యలు *(MOVED from Week 3; the file is parked in `src/content/main/w21/`, unregistered until Week 21 is written)* | hundred, thousand, lakh = hundred thousand; crore = ten million | One lakh is one hundred thousand. The flat costs fifty lakh rupees. | A friend asks the price of a house |
| 4 | `never-share-your-otp` | Never Share Your OTP · OTP ఎవరికీ చెప్పకండి | never + action; UPI words; fake KYC calls | Never share your OTP. The bank never asks for your PIN. | A "KYC update" caller asks for your OTP |
| 5 | `its-a-scam` | It's a Scam! · ఇది మోసం! | "digital arrest" and prize calls; hang up and call 1930 | The police never arrest anyone on a video call. I will call 1930. | A fake "police officer" on a video call demands money |
| 6 | `w21-conversation` | Conversation Day: A Morning at the Bank · బ్యాంకులో ఒక ఉదయం | all of the week | — | Updating KYC at the branch; reporting a failed UPI payment and a fraud call |
| 7 | `w21-review` | Review | | | |

## Week 22 — Shops & Supermarket · షాపులు, సూపర్ మార్కెట్

*Was Week 14.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `do-you-have` | Do You Have …? · … ఉన్నాయా? | Do you have …? Yes, we do / Sorry, we don't | Do you have brown rice? Sorry, we don't have it today. | Asking for an item at a kirana shop |
| 2 | `cheaper-and-bigger` | Cheaper, Bigger · చవకైనది, పెద్దది | comparatives -er / -ier, than | This bag is cheaper. That packet is bigger than this one. | Choosing between two brands of tea |
| 3 | `more-expensive-better` | More Expensive, Better · ఎక్కువ ఖరీదు, మెరుగు | more + long words; good → better, bad → worse | This phone is more expensive. This oil is better for health. | Comparing two pressure cookers |
| 4 | `where-can-i-find` | Where Can I Find …? · … ఎక్కడ దొరుకుతుంది? | aisles and shelves: at the back, on the top shelf | Where can I find the soap? It's in aisle three. | Finding things in a supermarket |
| 5 | `at-the-billing-counter` | At the Billing Counter · బిల్లింగ్ కౌంటర్ దగ్గర | paying, carry bags, receipts, offers | Do you have a carry bag? Is there any offer on this? | Paying at the supermarket counter |
| 6 | `w22-conversation` | Conversation Day: Monthly Shopping · నెలవారీ సరుకులు | all of the week | — | The month's groceries; asking for a cheaper option |
| 7 | `w22-review` | Review | | | |

## Week 23 — Restaurant & Food Delivery · హోటల్, ఫుడ్ డెలివరీ

*Was Week 16.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `a-table-for-two` | A Table for Two · ఇద్దరికి టేబుల్ | arriving, asking for a table | A table for two, please. Can we sit near the window? | Arriving at a hotel for lunch |
| 2 | `ill-have-the-dosa` | I'll Have the Dosa · ఆర్డర్ చేయడం | I'll have …; What do you recommend? | I'll have two plates of idli. What do you recommend? | Ordering breakfast |
| 3 | `less-spicy-please` | Less Spicy, Please · కారం తక్కువ | changes: without, less, extra | Less spicy, please. Can I have it without onions? | Asking for changes to a dish |
| 4 | `theres-a-problem` | There's a Problem · ఏదో తేడా | complaining politely | Excuse me, this coffee is cold. I ordered dosa, not uttapam. | A wrong order arrives |
| 5 | `could-i-have-the-bill` | Could I Have the Bill? · బిల్ ఇస్తారా? | the bill, paying, splitting | Could I have the bill, please? Can I pay by UPI? | Paying and leaving |
| 6 | `w23-conversation` | Conversation Day: Dinner with Friends · స్నేహితులతో భోజనం | all of the week | — | Ordering for a group and sharing the bill; a delivery person calls because they can't find your house |
| 7 | `w23-review` | Review | | | |

## Week 24 — What Were You Doing? · అప్పుడు మీరు ఏం చేస్తున్నారు?

*Was Week 20.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `i-was-cooking` | I Was Cooking · వండుతూ ఉన్నాను | was / were + -ing | I was cooking at seven. They were watching TV. | A friend asks why you didn't answer |
| 2 | `when-the-phone-rang` | When the Phone Rang · ఫోన్ మోగినప్పుడు | past continuous + when (interrupted) | I was sleeping when the phone rang. | Telling what happened in a power cut |
| 3 | `while-i-was-walking` | While I Was Walking · నడుస్తూ ఉండగా | while + past continuous | While I was walking, I saw an old friend. | A surprise meeting |
| 4 | `what-were-you-doing` | What Were You Doing? · అప్పుడు ఏం చేస్తున్నారు? | past continuous questions | What were you doing at eight? Were you sleeping? | A neighbour asks about a noise last night |
| 5 | `telling-what-happened` | Telling What Happened · ఏం జరిగిందో చెప్పడం | past simple + past continuous in a short story | I was crossing the road when a bike hit me. | Telling a doctor how you fell |
| 6 | `w24-conversation` | Conversation Day: An Accident on the Road · రోడ్డు మీద ప్రమాదం | all of the week | — | Telling a police constable what you saw (revisits Week 18); telling a friend about it |
| 7 | `w24-review` | Review | | | |

## Week 25 — Weather & Seasons · వాతావరణం, కాలాలు

*Was Week 23.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `whats-the-weather-like` | What's the Weather Like? · వాతావరణం ఎలా ఉంది? | sunny, cloudy, humid, windy | It's very hot and humid today. | Small talk at the bus stop |
| 2 | `it-will-rain-tomorrow` | It Will Rain Tomorrow · రేపు వర్షం పడుతుంది | will for predictions | I think it will rain tomorrow. It won't be hot. | Planning a trip around the weather |
| 3 | `its-going-to-rain` | It's Going to Rain · వర్షం రాబోతోంది | going to with evidence | Look at those clouds! It's going to rain. | Bringing the clothes in before the rain |
| 4 | `summer-rains-winter` | Summer, Rains, Winter · వేసవి, వానలు, చలి | seasons and months | Summer is very hot in Vijayawada. The rains start in June. | Telling a visitor about the seasons |
| 5 | `a-cyclone-warning` | A Cyclone Warning · తుఫాను హెచ్చరిక | warnings and staying safe | There is a cyclone warning. Stay inside tonight. | A neighbour shares a weather warning |
| 6 | `w25-conversation` | Conversation Day: Rain on the Wedding Day · పెళ్లి రోజు వర్షం | all of the week | — | Weather talk with guests; changing plans because of rain |
| 7 | `w25-review` | Review | | | |

## Week 26 — Checkpoint: Out and About · చెక్‌పాయింట్: బయట పనులు

*NEW checkpoint week (§2b): mixed review of Weeks 13–25, a Fix-it clinic and the 1-minute speaking mission.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `around-town-again` | Around Town Again · మళ్ళీ ఊర్లో | mixed: market, directions, transport, shops | Which bus goes to the market? This one is cheaper. | Helping a visitor buy fruit and find the bus |
| 2 | `health-and-help` | Health and Help · ఆరోగ్యం, సహాయం | mixed: doctor, pharmacy, emergencies | I've had this cough for a week. Please call 108. | Taking a neighbour to the doctor, then the pharmacy |
| 3 | `phone-and-money` | Phone, Apps and Money · ఫోన్, యాప్‌లు, డబ్బు | mixed: calls, video calls, UPI, OTP | Can you hear me now? I never share my OTP. | A relative's video call, with a fraud call in the middle |
| 4 | `fix-it-clinic-1` | Fix-It Clinic · తప్పులు సరిచేసుకుందాం | the ten Fix-it errors (§2) in Weeks 13–25 sentences | He goes by bus. Why are you late? Two kilos, please. | Helping a friend say it right before a phone call |
| 5 | `my-week-in-one-minute` | My Week in One Minute · నా వారం, ఒక్క నిమిషంలో | speaking mission: past simple + past continuous | On Monday I went to the bank. I was waiting when it rained. | Telling a friend about your week for one minute |
| 6 | `w26-conversation` | Conversation Day: A Busy Day in Town · ఊర్లో హడావిడి రోజు | Weeks 13–25 | — | Errands in town; an emergency call on the way home |
| 7 | `w26-review` | Checkpoint · చెక్‌పాయింట్ | | | The checkpoint check (§2b) and certificate |

## Week 27 — Offices & Forms · ఆఫీసులు, ఫారాలు

*Old Day 1 (`my-address-is`) became Stage 1's `my-address` (Week 3); a documents day is added.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `my-date-of-birth` | My Date of Birth · పుట్టిన తేదీ | dates in full; first, second, fifth | My date of birth is the fifth of June, 1958. | A pension form with a clerk |
| 2 | `can-you-spell-it` | Can You Spell It? · స్పెల్లింగ్ చెప్పండి | spelling street names and an email (at, dot) | My email is kiran at gmail dot com. | Giving your email at a counter ("at", never "at the rate") |
| 3 | `filling-a-form` | Filling a Form · ఫారం నింపడం | signature, photo, ID proof | Where do I sign? Do I need a photo? | Asking a clerk for help with a form |
| 4 | `two-photocopies-please` | Two Photocopies, Please · రెండు జిరాక్స్ కాపీలు | documents: original, photocopy, address proof | Do I need the original? Here are two photocopies. | Checking your documents at the office |
| 5 | `which-counter` | Which Counter? · ఏ కౌంటర్? | queues, tokens, counters at offices | Which counter is for pensions? Where do I get a token? | At the municipal office |
| 6 | `w27-conversation` | Conversation Day: At the Post Office · పోస్టాఫీసులో | all of the week | — | Sending a parcel; opening a savings scheme |
| 7 | `w27-review` | Review | | | |

## Week 28 — Government Services · ప్రభుత్వ సేవలు

*NEW. Scenes work for the learner or for helping a neighbour; work always allows "retired", and a pension is never assumed.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `update-my-aadhaar` | Updating My Aadhaar · ఆధార్ అప్‌డేట్ | I want to / I need to + update, change | I want to update my address. I have a new mobile number. | At the Aadhaar centre |
| 2 | `my-ration-card` | My Ration Card · నా రేషన్ కార్డు | Is my name on …?; When does … come? | My name is not on the card. When does the rice come? | At the ration shop |
| 3 | `my-life-certificate` | My Life Certificate · లైఫ్ సర్టిఫికెట్ | pension words; Can I do it online? | I came to give my life certificate. Can I do it online? | Giving a life certificate at the bank |
| 4 | `at-mee-seva` | At Mee Seva · మీ సేవలో | applications: fee, receipt, how many days | How many days will it take? Here is my receipt. | Applying for a certificate at Mee Seva or the ward secretariat |
| 5 | `is-it-ready` | Is It Ready? · వచ్చిందా? | following up with the past simple: I applied on … | I applied on the tenth. Is my certificate ready? | Following up an application by phone |
| 6 | `w28-conversation` | Conversation Day: A Morning at the Secretariat · సచివాలయంలో ఒక ఉదయం | all of the week | — | Helping a neighbour with a pension problem; updating a ration card |
| 7 | `w28-review` | Review | | | |

## Week 29 — Customer Care & Repairs · కస్టమర్ కేర్, రిపేర్లు

*Old Weeks 28 (Customer Care Calls) and 31 (Repairs at Home) merged; the gas-safety day moved to Week 18.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `it-has-stopped-working` | It Has Stopped Working · పని చేయడం ఆగిపోయింది | present perfect for results: has stopped, has broken | My fridge has stopped working. The screen has cracked. | Calling about a broken fridge |
| 2 | `i-have-paid-the-bill` | I Have Paid the Bill · బిల్ కట్టేశాను | have + past participle: paid, sent, called | I have paid the bill, but the line is cut. | A connection cut after paying |
| 3 | `press-one-for-english` | Press One for English · IVR మెనూ | following phone menus; noting a complaint number | Press one for English. Your complaint number is 4521. | Getting through an automated menu |
| 4 | `the-tap-is-leaking` | The Tap Is Leaking · నీళ్ళు కారుతున్నాయి | faults: leaking, not working, making a noise; I need someone to fix … | The tap is leaking. I need someone to fix it. | Calling a plumber |
| 5 | `when-will-someone-come` | When Will Someone Come? · ఎప్పుడు వస్తారు? | asking for a time, firmly and politely; checking the work | When will the technician come? Is it working now? | Asking firmly for a visit, then checking the repair |
| 6 | `w29-conversation` | Conversation Day: A Broken Washing Machine · వాషింగ్ మెషీన్ రిపేర్ | all of the week | — | Calling customer care; the technician's visit and the bill |
| 7 | `w29-review` | Review | | | |

## Week 30 — Have You Ever …? · మీరు ఎప్పుడైనా …?

*Was Week 29.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `have-you-ever` | Have You Ever …? · ఎప్పుడైనా …? | Have you ever + past participle? | Have you ever been to Delhi? Yes, I have. | Chatting with a new friend about places |
| 2 | `i-have-never` | I Have Never … · ఎప్పుడూ … లేదు | never; once, twice | I have never flown in a plane. I've been to Tirupati twice. | Talking about travel |
| 3 | `been-or-gone` | Been or Gone? · been ఆ, gone ఆ? | been (and back) vs gone (still there) | Ravi has gone to Chennai. I have been to Chennai. | Asking where a neighbour is |
| 4 | `seen-eaten-done` | Seen, Eaten, Done · మూడో రూపం | common past participles | I have seen that film. Have you eaten Hyderabadi biryani? | Talking about films and food |
| 5 | `have-you-or-did-you` | Have You …? Did You …? · ఎప్పుడైనా / ఎప్పుడు | present perfect vs past simple with a time | Have you been to Goa? Yes, I went in 2010. | A longer chat about experiences |
| 6 | `w30-conversation` | Conversation Day: Old Friends Meet · పాత స్నేహితులు | all of the week | — | Catching up with an old friend; a quiz about experiences |
| 7 | `w30-review` | Review | | | |

## Week 31 — Just, Already, Yet · ఇప్పుడే, ఇప్పటికే, ఇంకా

*Was Week 30.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `i-have-just` | I Have Just … · ఇప్పుడే | just | I have just finished lunch. She has just left. | A visitor arrives just after someone left |
| 2 | `already` | Already · ఇప్పటికే | already | I have already paid the electricity bill. | Checking household jobs with a relative |
| 3 | `not-yet` | Not Yet · ఇంకా లేదు | yet in questions and negatives | Have you had breakfast yet? Not yet. | A friend checks if you're ready to leave |
| 4 | `since-and-for` | Since and For · నుండి, గా | since / for with the present perfect | I have lived here for twenty years. | Telling how long you've lived somewhere |
| 5 | `whats-new` | What's New? · కొత్త విశేషాలు | news with the present perfect | My neighbour has bought a new car. The shop has closed. | Sharing colony news |
| 6 | `w31-conversation` | Conversation Day: Getting Ready for Guests · అతిథుల కోసం సిద్ధం | all of the week | — | Checking what is done before guests arrive; a call from guests on the way |
| 7 | `w31-review` | Review | | | |

## Week 32 — Festivals & Celebrations · పండుగలు, వేడుకలు

*Was Week 24.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `happy-sankranti` | Happy Sankranti! · పండుగ శుభాకాంక్షలు | festival greetings and replies | Happy Sankranti! Wish you the same. | Greeting neighbours on a festival |
| 2 | `what-we-did-on-diwali` | What We Did on Diwali · దీపావళికి ఏం చేశాం | past simple for "what we did" | We lit lamps and made sweets. | Telling a friend about your Diwali |
| 3 | `congratulations` | Congratulations! · అభినందనలు | wishes: birthdays, new homes, retirement | Congratulations on your new house! Many happy returns of the day! | Wishing a friend on their retirement |
| 4 | `id-love-to-come` | I'd Love to Come · వస్తాను / రాలేను | accepting and declining invitations | Thank you, I'd love to come. Sorry, I can't make it. | Replying to a housewarming invitation |
| 5 | `what-is-ugadi` | What Is Ugadi? · పండుగ గురించి చెప్పడం | explaining customs simply | Ugadi is the Telugu New Year. We eat pachadi. | Explaining Ugadi to a visitor from abroad |
| 6 | `w32-conversation` | Conversation Day: A Festival Visit · పండుగ పలకరింపు | all of the week | — | Visiting a friend on Diwali; inviting neighbours for Sankranti |
| 7 | `w32-review` | Review | | | |

## Week 33 — Neighbours & Community · ఇరుగు పొరుగు, సమాజం

*Was Week 25.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `could-you-please` | Could You Please …? · కొంచెం … చేస్తారా? | could / would requests | Could you please water my plants this week? | Asking a neighbour for help before a trip |
| 2 | `shall-i-carry-that` | Shall I Carry That? · మోయనా? | offers: Shall I …? Can I help …? | Shall I carry that for you? Can I help with the bags? | Offering help to an elderly neighbour |
| 3 | `would-you-mind` | Would You Mind …? · అభ్యంతరం లేకపోతే | would you mind + -ing; Not at all | Would you mind keeping my parcel? Not at all. | Asking a neighbour to keep a parcel |
| 4 | `sorry-to-bother-you` | Sorry to Bother You · ఒక చిన్న సమస్య | complaining politely: noise, parking | Sorry to bother you. Your car is blocking my gate. | Asking a neighbour to move their car |
| 5 | `at-the-colony-meeting` | At the Colony Meeting · కాలనీ మీటింగ్ | suggesting, agreeing, disagreeing politely | I agree with Ravi. I'm not sure about that. | Talking about water problems in the colony |
| 6 | `w33-conversation` | Conversation Day: Helping Each Other · ఒకరికొకరు సహాయం | all of the week | — | A neighbour is unwell; planning a cleaning drive |
| 7 | `w33-review` | Review | | | |

## Week 34 — Small Talk · చిన్న చిన్న కబుర్లు

*NEW: brought forward from old Week 117 (Small Talk & Humour).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `lovely-morning` | Lovely Morning, Isn't It? · బాగుంది కదా? | openers: weather, the walk; isn't it? as a fixed phrase | Lovely morning, isn't it? It's cooler today. | Starting a chat on the morning walk |
| 2 | `how-are-you-keeping` | How Are You Keeping? · ఆరోగ్యం ఎలా ఉంది? | health and news replies: much better, not bad | How are you keeping? Much better, thank you. | Meeting someone you know at the temple |
| 3 | `did-you-watch-the-match` | Did You Watch the Match? · మ్యాచ్ చూశారా? | cricket, news, serials; short answers | Did you watch the match? Yes, what a finish! | Chatting at the tea stall |
| 4 | `no-i-didnt` | No, I Didn't · లేదు అంటే No | answering negative questions the English way (Fix-it 9) | You didn't go? No, I didn't. You didn't eat? Yes, I did. | A friend checks whether you went to the function |
| 5 | `nice-talking-to-you` | Nice Talking to You · మాట్లాడినందుకు సంతోషం | ending a chat politely | I must go now. Nice talking to you. | Ending a long chat politely at the bus stop |
| 6 | `w34-conversation` | Conversation Day: At the Morning Walk · మార్నింగ్ వాక్‌లో | all of the week | — | A chat with another walker; small talk in the clinic waiting room |
| 7 | `w34-review` | Review | | | |

## Week 35 — Free Time & Hobbies · ఖాళీ సమయం, అభిరుచులు

*Was Week 33.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `i-enjoy-gardening` | I Enjoy Gardening · నాకు తోటపని ఇష్టం | like / love / enjoy + -ing | I enjoy gardening. She loves singing old songs. | Talking about hobbies at the park |
| 2 | `i-dont-mind-cooking` | I Don't Mind Cooking · పర్వాలేదు, ఇష్టం లేదు | don't mind / hate + -ing | I don't mind cooking. I hate waiting in queues. | Planning an outing with a friend |
| 3 | `twice-a-week` | Twice a Week · వారానికి రెండుసార్లు | how often, with hobbies | I go to the library twice a week. | Joining a laughter club |
| 4 | `good-at-drawing` | I'm Good at Drawing · నాకు బాగా వచ్చు | good at / interested in + -ing | I'm good at drawing rangoli. I'm interested in music. | Signing up for a class |
| 5 | `whats-it-about` | What's It About? · సినిమాలు, TV | talking about films and shows | It's about a family in a village. It was very funny. | Recommending a film |
| 6 | `w35-conversation` | Conversation Day: The Senior Citizens' Club · సీనియర్ సిటిజన్స్ క్లబ్ | all of the week | — | Joining a club; talking about weekend plans |
| 7 | `w35-review` | Review | | | |

## Week 36 — Describing People & Character · మనుషులు, స్వభావం

*Was Week 35.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `what-is-she-like` | What Is She Like? · ఆమె ఎలాంటి మనిషి? | personality words: patient, friendly, strict | She's very patient and friendly. He's a bit strict. | Talking about a new neighbour |
| 2 | `the-man-who` | The Man Who Lives Next Door · పక్కింట్లో ఉండే ఆయన | relative clauses with who | The man who lives next door is a retired teacher. | Pointing someone out at a function |
| 3 | `the-shop-that-sells` | The Shop That Sells Silk · సిల్క్ అమ్మే షాపు | that / which for things | I want the shop that sells silk sarees. | Asking for a particular shop |
| 4 | `looks-like-and-is-like` | Looks Like, Is Like · రూపం, స్వభావం | look like vs be like | He looks like his brother, but he's quieter. | Describing two friends |
| 5 | `a-person-i-admire` | A Person I Admire · నేను గౌరవించే వ్యక్తి | describing someone, with reasons | I admire my old teacher because she was always kind. | Talking about a favourite teacher |
| 6 | `w36-conversation` | Conversation Day: Meeting the New Neighbours · కొత్త పొరుగువారు | all of the week | — | Introducing neighbours to each other; describing a helpful shopkeeper |
| 7 | `w36-review` | Review | | | |

## Week 37 — Rules & Advice · నియమాలు, సలహాలు

*Was Week 36.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `you-must-wear-a-helmet` | You Must Wear a Helmet · తప్పనిసరి | must for strong rules | You must wear a helmet. You must stop at the red light. | At a traffic police checkpoint |
| 2 | `you-mustnt-smoke-here` | You Mustn't Smoke Here · చేయకూడదు | mustn't vs don't have to | You mustn't smoke here. You don't have to pay for parking. | Reading signs at a hospital |
| 3 | `should-or-must` | Should or Must? · సలహా ఆ, నియమమా? | advice vs rule | You should rest. You must take these tablets. | The doctor's rules and advice |
| 4 | `not-allowed-inside` | Not Allowed Inside · అనుమతి లేదు | allowed / not allowed in places | Phones are not allowed inside. Please remove your footwear. | Explaining temple rules to a visitor |
| 5 | `why-dont-you` | Why Don't You …? · … చేయొచ్చు కదా? | advice phrases: Why don't you …? You'd better … | Why don't you see a doctor? You'd better leave early. | Advising a friend with a problem |
| 6 | `w37-conversation` | Conversation Day: A Government Hospital Visit · ప్రభుత్వ ఆసుపత్రికి | all of the week | — | Following hospital rules; advising a neighbour about a scheme |
| 7 | `w37-review` | Review | | | |

## Week 38 — Making Plans with Friends · స్నేహితులతో ప్లాన్లు

*Was Week 37.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `lets-go-shall-we` | Let's Go! Shall We? · వెళ్దాం! వెళ్దామా? | let's / shall we | Let's go to the beach on Sunday. Shall we take a bus? | Suggesting an outing |
| 2 | `how-about-saturday` | How About Saturday? · శనివారం ఎలా ఉంటుంది? | how about …? why don't we …? | How about Saturday? Why don't we meet at the temple? | Fixing a day |
| 3 | `im-meeting-ravi-on-friday` | I'm Meeting Ravi on Friday · శుక్రవారం రవిని కలుస్తున్నాను | present continuous for arrangements | I'm meeting Ravi on Friday. We're going to the cinema. | Checking a friend's week |
| 4 | `sounds-good` | Sounds Good! · బాగుంది! | agreeing and saying no to plans | Sounds good! Sorry, I'm busy on Sunday. | Agreeing a plan in a group |
| 5 | `can-we-change-the-time` | Can We Change the Time? · టైమ్ మారుద్దామా? | changing and cancelling plans | Can we make it six instead of five? | Moving a meeting to another day |
| 6 | `w38-conversation` | Conversation Day: Planning a Picnic · పిక్నిక్ ప్లాన్ | all of the week | — | Planning a picnic with friends; a voice message about a change |
| 7 | `w38-review` | Review | | | |

## Week 39 — Polite English · మర్యాదగా ఇంగ్లీష్

*Old Week 38 (Sorry & Thank You) merged with the Indian-English fixes of old Week 149. From here they stay in the Fix-it strand (error 10).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `sorry-for-being-late` | I'm Sorry for Being Late · ఆలస్యం అయింది, sorry | sorry for + -ing; giving a reason | I'm sorry for being late. I missed the bus. | Arriving late to meet a friend |
| 2 | `thats-okay` | That's Okay · పర్వాలేదు | accepting an apology; answering thanks | That's okay, don't worry. You're welcome. | A neighbour says sorry for the noise |
| 3 | `thank-you-so-much` | Thank You So Much · చాలా థ్యాంక్స్ | thanks for + noun / -ing | Thank you for helping me. Thanks for the sweets. | Thanking a neighbour who helped you |
| 4 | `not-myself-kiran` | I'm Kiran, Not "Myself Kiran" · "Myself" వద్దు | Indian-English fixes I: Myself …, good name, do the needful, revert back, prepone | I'm Kiran. May I know your name? Please reply soon. | Introducing yourself at an office |
| 5 | `out-of-town` | I'm Out of Town · "Out of station" వద్దు | Indian-English fixes II: out of station, cousin brother, today itself, I am having a car | I'm out of town till Monday. He is my cousin. | A caller asks you to come to the office today |
| 6 | `w39-conversation` | Conversation Day: A Misunderstanding · అపార్థం | all of the week | — | Clearing up a misunderstanding with a friend; an office call in clear English |
| 7 | `w39-review` | Review | | | |

## Week 40 — Checkpoint: Stage 2 Review · చెక్‌పాయింట్: రోజువారీ జీవితం పునశ్చరణ

*Checkpoint week (§2b): mixed review of Weeks 27–39 and the whole stage, a Fix-it clinic and the 1-minute speaking mission.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `a-busy-morning` | A Busy Morning · హడావిడి ఉదయం | mixed: shopping, transport, the bank | I took the bus to the bank, then bought vegetables. | Telling a friend about your morning |
| 2 | `three-small-problems` | Three Small Problems · మూడు చిన్న సమస్యలు | mixed: customer care, repairs, offices and forms | My phone has stopped working. Could you check it? | Sorting out three small problems |
| 3 | `my-life-now` | My Life Now · ఇప్పుడు నా జీవితం | mixed tenses about yourself | I have lived here for years. I enjoy walking. | Introducing yourself at a new club |
| 4 | `fix-it-clinic-2` | Fix-It Clinic · తప్పులు సరిచేసుకుందాం | the ten Fix-it errors (§2) in Stage 2 sentences | I have lived here since 2010. No, I didn't go. | Helping a friend check a message before sending it |
| 5 | `stories-from-my-week` | Stories From My Week · ఈ వారం కబుర్లు | past simple, past continuous and present perfect together; 1-minute speaking mission | I was waiting for the bus when it started raining. | Telling a friend the week's stories for one minute |
| 6 | `w40-conversation` | Conversation Day: A Full Day Out · రోజంతా బయట | everything from Stage 2 | — | A day of errands: the bank, the doctor, lunch and shopping |
| 7 | `w40-review` | Stage 2 Review · రోజువారీ జీవితం పునశ్చరణ | | | The checkpoint check (§2b), certificate and stage celebration |

---

# 5. Stage 3 — Confident Conversations · ధైర్యంగా మాట్లాడటం (Weeks 41–80)

Reordered 2026-11-09 (curriculum review).

**The learner can:** tell what happened and describe their life, give opinions and reasons, return things and complain politely, follow a doctor and manage a hospital stay, travel in India, handle offices, letters and pensions, look after guests, imagine and regret, guess reasons, follow other accents, and understand short stories and dialogues. *(Longer stories (1–2 minutes) and read-a-passage activities start here; English-mode suggestion card at Week 41. Checkpoints at Weeks 54, 67 and 80, §2b.)*

| Week | Title | Grammar focus | Life topic / function |
|---|---|---|---|
| 41 | Telling a Story · కథ చెప్పడం | past simple + past continuous + sequence words | tell what happened, in order |
| 42 | When I Was Young · నేను చిన్నప్పుడు | used to | childhood, the village, school days |
| 43 | My Life Story · నా జీవిత కథ | past simple vs present perfect | places, work and changes in your life |
| 44 | Clothes & the Tailor · బట్టలు, టైలర్ | superlatives; adjective order (a nice red saree) | choose clothes for a function, sizes, alterations |
| 45 | Describing Places · మా ఊరు ఎలా ఉంటుంది | there was / were; comparatives review | your town or village, then and now |
| 46 | Giving Opinions · అభిప్రాయాలు చెప్పడం | I think / I don't think / In my opinion; agreeing and disagreeing politely | opinions on local matters |
| 47 | Comparing & Choosing · పోల్చి ఎంచుకోవడం | as … as, not as … as; prefer; would rather | choose a phone, a plan or a hospital |
| 48 | If It Rains … · వర్షం పడితే … | first conditional | plans that depend on the weather, health or trains |
| 49 | Online Shopping & Deliveries · ఆన్‌లైన్ షాపింగ్, డెలివరీలు | will / going to for delivery times; tracking words | order, track, cash on delivery, talk to the delivery person |
| 50 | Problems, Returns & Refunds · సమస్యలు, రిటర్న్, రీఫండ్ | because, so, that's why; I'm afraid …; I'd like to return … | explain what went wrong, return an item, ask for a refund |
| 51 | Understanding the Doctor · డాక్టర్ చెప్పేది అర్థం చేసుకోవడం | checking questions: Do you mean …? So I should …? | medical history, test reports, a doctor's explanation |
| 52 | A Hospital Stay · ఆసుపత్రిలో ఉండటం | have to / be allowed to; before, after, until | admission, the ward, visiting hours, discharge, the bill |
| 53 | Waiting in Line · క్యూలో ఎదురుచూపు | present perfect continuous; since / for | I've been waiting an hour: queues at the hospital, bank and office |
| 54 | Checkpoint: Telling and Explaining · చెక్‌పాయింట్: చెప్పడం, వివరించడం | mixed; Fix-it clinic | Checkpoint 4 (§2b) |
| 55 | Travel in India & Pilgrimage · ప్రయాణాలు, తీర్థయాత్రలు | present continuous and going to for travel plans | train and bus booking, hotels, darshan tickets and queues, announcements |
| 56 | Made in India: Labels & Signs · మేడ్ ఇన్ ఇండియా: లేబుల్స్, బోర్డులు | passive introduction (is made, is sold, is not allowed) | read product labels, notices and signs |
| 57 | The Doctor Said … · డాక్టర్ ఏం చెప్పారంటే … | reported speech introduction (said that, told me to) | pass on messages from doctors, offices and callers |
| 58 | At the Enquiry Counter · ఎంక్వయిరీ కౌంటర్ దగ్గర | indirect questions (Can you tell me where …?) | ask politely at stations, hospitals and offices |
| 59 | The Shop Where … · … దొరికే షాపు | relative clauses: which, where, whose | recommend shops, places and people |
| 60 | Money, Savings & Pensions · డబ్బు, పొదుపు, పెన్షన్ | lakh / crore ↔ hundred thousand / million; per cent | interest, fixed deposits, pensions, saving and spending |
| 61 | News Headlines · వార్తల హెడ్‌లైన్స్ | headline grammar (present simple and passive in headlines) | understand short news |
| 62 | Formal Requests & Calling Offices · ఆఫీసులకు మర్యాదగా అడగడం | Would you mind …? Is it OK if …? Could you possibly …? | formal calls, appointments, follow-ups |
| 63 | Official Letters & Notices · ఆఫీసు ఉత్తరాలు, నోటీసులు | formal phrases; passive in notices | understand bank, electricity, pension and tax letters |
| 64 | Hosting Guests · అతిథులకు మర్యాదలు | offers (Would you like …? Help yourself); a little / a few | welcome guests, cook and serve, explain a recipe |
| 65 | Social Occasions · శుభకార్యాలు, పరామర్శలు | formal wishes and condolences | weddings, housewarmings, condolence visits |
| 66 | Phrasal Verbs at Home · ఇంట్లో phrasal verbs | phrasal verbs in context: turn on / off, pick up, look for, run out of, put away | chores and home talk |
| 67 | Checkpoint: Getting Things Done · చెక్‌పాయింట్: పనులు చక్కబెట్టడం | mixed; Fix-it clinic | Checkpoint 5 (§2b) |
| 68 | Healthy Habits · మంచి అలవాట్లు | gerunds and infinitives (stop smoking, decide to walk); too much / enough; ought to | health goals and daily habits |
| 69 | If I Had More Time … · నాకు ఇంకా టైమ్ ఉంటే … | second conditional | dreams and imagined choices |
| 70 | Wishes & Regrets · అలా జరిగుంటే బాగుండేది | I wish + past; I should have (a fixed phrase) | looking back on choices |
| 71 | Prices Have Gone Up · ధరలు పెరిగిపోయాయి | present perfect for change; get / become | then and now: prices, the town, daily life |
| 72 | Maybe, Probably, Definitely · బహుశా, తప్పకుండా | will / might / may / probably for the future | uncertain plans: train times, results, the weather |
| 73 | It Must Be … · అది … అయ్యుంటుంది | must be / might be / can't be | guess the reason: a power cut, a closed shop, no answer on the phone |
| 74 | How It Works · ఇది ఎలా పనిచేస్తుంది | passive in processes; first / then | explain how a machine or a service works |
| 75 | Neighbourhood Problems · కాలనీ సమస్యలు | passive (The garbage hasn't been collected); complaining to officials | water, power cuts, garbage, roads |
| 76 | Chatting at the Park · పార్క్‌లో కబుర్లు | tag questions; so do I / neither do I | friendly agreement in conversation |
| 77 | Films, TV & Serials · సినిమాలు, టీవీ, సీరియల్స్ | -ed / -ing adjectives (bored, boring); so / such | talk about what you watch |
| 78 | Different Accents · వేర్వేరు యాసలు | recognition: American, British and Indian forms (lift / elevator) | understand callers and videos from other places |
| 79 | Persuading Gently · మెల్లగా ఒప్పించడం | You should really …; It might be better to … | convince a friend or neighbour |
| 80 | Checkpoint: Stage 3 Review · చెక్‌పాయింట్: ధైర్యంగా మాట్లాడటం పునశ్చరణ | mixed; Fix-it clinic | Checkpoint 6 (§2b) |

*Changes from the old map:*
- **In from Stage 2:** Clothes (old 15 → 44), Describing Places (old 34 → 45).
- **Moved:** Opinions 44 → 46, Comparing 45 → 47, If It Rains 46 → 48, Online Shopping 73 → 49, PP continuous 50 → 53, Travel 53 → 55, Passive 54 → 56, Reported speech 55 → 57, Indirect questions 56 → 58, Relative clauses 57 → 59, News 59 → 61, Social Occasions 66 → 65, Phrasal Verbs I 68 → 66, Second conditional 60 → 69, Wishes 61 → 70, Things Have Changed 63 → 71, Maybe 64 → 72, It Must Be 65 → 73, How Things Work 62 → 74, Neighbourhood Problems 71 → 75, Persuading 78 → 79.
- **Merged:** Explaining Problems + Making a Complaint (old 47 + 48 → 50), Health in Depth + Understanding Doctors (old 51 + 141 → 51), Money & Prices + Pensions & Savings (old 58 + 142 → 60), Formal Requests + Calling Offices (old 49 + 79 → 62), Hosting Guests + Recipes & Kitchen (old 67 + 32 → 64), Want to or Enjoy -ing? + Healthy Habits (old 70 + 74 → 68).
- **In from Stage 5:** Official Letters (old 143 → 63), Different Accents (old 135 → 78).
- **Out:** Hospital & Emergencies lost its emergency part to Week 18 and became A Hospital Stay (52); Staying Safe from Scams went into Week 21; Phrasal Verbs II became part of Week 91; Old Memories became part of Week 127.

Lesson detail, week by week (detailed 2026-11-10, BUILD_PLAN E1). Each week is written from its table with CONTENT_PLAYBOOK; check facts and sensitivity notes in the week line before writing.

## Week 41 — Telling a Story · కథ చెప్పడం

*Recycles the past simple and past continuous (Weeks 9, 24, 26). Fix-it: question word order in past questions (3), articles (4), -ing for habits (7). First week of Stage 3: Review Day stories grow to about 2 minutes.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `first-then-story-steps` | First, Then, After That · ముందు, తర్వాత | sequence words in the past: first, then, after that, finally | First I locked the door, then I walked to the bus stand. After that, I bought a ticket and found a seat. | Telling a friend how your trip to Guntur went |
| 2 | `story-while-i-was-waiting` | While I Was Waiting · ఎదురుచూస్తుండగా | past continuous for the background, past simple for what happened | I was waiting at the bank when the lights went off. While we were having tea, it started to pour. | Telling a neighbour about a power cut at the bank |
| 3 | `suddenly-luckily-story-words` | Suddenly, Luckily · ఉన్నట్టుండి, అదృష్టం కొద్దీ | story words: suddenly, luckily, unfortunately, in the end | Suddenly a dog ran across the road. Luckily nobody was hurt, and in the end we laughed. | Telling a friend at the tea stall about a near accident |
| 4 | `what-happened-next-story` | What Happened Next? · తర్వాత ఏమైంది? | listener questions in the past: What happened next? Where were you going? (Fix-it 3) | What happened next? Where were you going at that time? Did anyone help you? | Asking good questions while a friend tells a story |
| 5 | `story-the-purse-on-the-bus` | The Purse on the Bus · బస్సులో పర్సు | a short story told in order, from start to end | Last month I left my purse on an RTC bus. The conductor called me, and I got it back the next day. | Telling a neighbour how you got your purse back |
| 6 | `w41-conversation` | Conversation Day: What a Day! · ఏం రోజు అది! | all of the week | — | Telling a friend about a wedding journey that went wrong; a neighbour tells you about a rainy night out |
| 7 | `w41-review` | Review | | | |

## Week 42 — When I Was Young · నేను చిన్నప్పుడు

*Recycles was / were (Week 9), the past simple and adverbs of frequency (Weeks 7, 35). Fix-it: -ing for habits (7: "I was going daily" → "I used to go every day"), he / she + s (2), plurals (5). Memories are the learner's own childhood; parents and teachers may appear, never the learner's own children.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `used-to-village-life` | We Used to Live in a Village · ఒకప్పుడు ఊర్లో ఉండేవాళ్ళం | used to + verb for past habits and states | I used to live in a small village near Ongole. We used to fetch water from the well every morning. | Telling a new friend at the park where you grew up |
| 2 | `didnt-use-to-have-a-tv` | We Didn't Use to Have a TV · అప్పుడు TV లేదు | didn't use to; Did you use to …? | We didn't use to have a TV at home. Did you use to walk to school? | Comparing childhood homes with another walker on the morning walk |
| 3 | `school-days-teacher-used-to` | My School Days · నా స్కూల్ రోజులు | used to (again and again) vs the past simple (once, one day) | Our teacher used to tell us stories every Friday. One day the headmaster came to our class. | Telling a young neighbour about your school |
| 4 | `games-we-used-to-play` | Games We Used to Play · చిన్నప్పటి ఆటలు | used to + play, make, climb; would for repeated actions (recognition) | We used to play gilli danda after school. In summer we would climb mango trees. | Telling a young neighbour about games before mobile phones |
| 5 | `childhood-festival-memories` | Festivals When I Was Young · చిన్నప్పటి పండుగలు | used to for memories in a short talk; not anymore | We used to make our own kites for Sankranti. People don't send greeting cards anymore. | Sharing festival memories with a neighbour from another state |
| 6 | `w42-conversation` | Conversation Day: Memories of the Village · ఊరి జ్ఞాపకాలు | all of the week | — | Meeting an old teacher in the market; visiting your old village with a friend |
| 7 | `w42-review` | Review | | | |

## Week 43 — My Life Story · నా జీవిత కథ

*Recycles the present perfect for experience and since / for (Weeks 30, 31, 40) and saying years. Fix-it: present tense for duration (8), articles (4), "Myself …" (10). Work always allows "retired" and "I worked at home"; marriage and children are never assumed.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `where-i-was-born-life-story` | Where I Was Born · నేను పుట్టిన ఊరు | was born, grew up, moved to + years | I was born in Eluru in 1960. I grew up there and moved to Vijayawada in 1985. | Telling a new neighbour about yourself |
| 2 | `my-working-years-life-story` | My Working Years · నేను పని చేసిన రోజులు | worked as / at for finished periods; retired, still working | I worked as a clerk in a sugar factory for thirty years. I retired in 2018, but I still help at the library. | Chatting with a new member at the club about work |
| 3 | `lived-here-since-life-story` | I've Lived Here Since 1995 · 1995 నుంచి ఇక్కడే | present perfect with since / for (still true) vs past simple (finished) (Fix-it 8) | I have lived in this colony since 1995. Before that, I lived in Warangal for ten years. | Answering a survey worker's questions at your door |
| 4 | `biggest-changes-in-my-life` | The Biggest Changes · పెద్ద మార్పులు | present perfect (no time said) vs past simple (with a time) | I have learned to use a smartphone. I started a small tailoring shop in 2002. | Talking about changes in your life with an old friend |
| 5 | `my-life-story-in-brief` | My Life in a Few Sentences · నా జీవితం కొన్ని మాటల్లో | a short life story in order, with both tenses and after, since | After school I joined a bank in Nellore. I have made many good friends since I moved here. | Introducing yourself at a new walking group |
| 6 | `w43-conversation` | Conversation Day: An Interview for the Colony Magazine · కాలనీ పత్రిక ఇంటర్వ్యూ | all of the week | — | Answering questions for the colony magazine; meeting an old colleague after twenty years |
| 7 | `w43-review` | Review | | | |

## Week 44 — Clothes & the Tailor · బట్టలు, టైలర్

*Was Week 15; detail kept from the old Stage 2 (same ids), raised to Stage 3 length. Recycles comparatives (Week 22) and Can I …? (Week 13). Fix-it: articles (4), plurals (5: "two pants" → "two pairs of trousers"), "cover" for a bag (10). Shop staff and tailors alternate between men and women.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `colours` | Colours · రంగులు | colour words, shades and patterns: dark, light, plain, checked, printed | What colour is your saree? It's dark green with a gold border. | Describing a lost bag at a shop |
| 2 | `the-best-and-cheapest` | The Best, The Cheapest · అన్నిటికంటే | superlatives -est / most | This is the cheapest shirt in the shop. That's the most beautiful saree here. | Choosing a gift at a cloth shop |
| 3 | `a-nice-red-saree` | A Nice Red Saree · రంగు, సైజు వరుస | adjective order: opinion, size, colour, material | I want a nice red cotton saree. A small blue bag, please. | Telling a shop assistant what you want |
| 4 | `does-it-fit` | Does It Fit? · సరిపోతుందా? | try on, size, too tight / loose | Can I try this on? It's too tight. Do you have a bigger size? | Trying on a kurta |
| 5 | `at-the-tailor` | At the Tailor · టైలర్ దగ్గర | stitching, alterations, by when | Can you make the sleeves a little shorter? When will it be ready? | Giving a blouse for stitching |
| 6 | `w44-conversation` | Conversation Day: Clothes for a Wedding · పెళ్లికి బట్టలు | all of the week | — | Buying clothes for a wedding; exchanging the wrong size |
| 7 | `w44-review` | Review | | | |

## Week 45 — Describing Places · మా ఊరు ఎలా ఉంటుంది

*Was Week 34; detail kept from the old Stage 2 (same ids). Recycles there was / were (Weeks 9, 24), comparatives and superlatives (Weeks 22, 44) and used to (Week 42). Fix-it: articles (4), prepositions (6), present tense for duration (8). Week 71 takes prices and daily life; this week stays with places.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `there-was-there-were` | There Was, There Were · ఉండేది, ఉండేవి | there was / were | There was a big pond in our village. There were no buses in those days. | Telling a friend about your village |
| 2 | `then-and-now` | Then and Now · అప్పుడు, ఇప్పుడు | comparatives for change | The town is much bigger now. The roads are busier than before. | Your town now and fifty years ago |
| 3 | `famous-for-chillies` | Famous for Chillies · మా ఊరు దేనికి ప్రసిద్ధి | describing a place: quiet, crowded, famous for | Guntur is famous for chillies. It's crowded but friendly. | Describing your town to a visitor |
| 4 | `the-best-place-to-visit` | The Best Place to Visit · చూడదగ్గ ప్రదేశం | superlatives review; recommending places | The best place to visit is Kondapalli Fort. Go early, before it gets hot. | Recommending places to a guest |
| 5 | `whats-it-like` | What's It Like? · ఎలా ఉంటుంది? | What's … like? | What's Hyderabad like? Is it very expensive to live there? | A friend is moving to a new city |
| 6 | `w45-conversation` | Conversation Day: Showing a Visitor Around · ఊరు చూపించడం | all of the week | — | Showing a guest your town; how it has changed |
| 7 | `w45-review` | Review | | | |

## Week 46 — Giving Opinions · అభిప్రాయాలు చెప్పడం

*Deepens the colony meeting of Week 33. Recycles because (Week 12), should (Weeks 11, 37) and he / she + s. Fix-it: he / she + s (2), do-questions (3), "discuss about" (6). Topics stay local and friendly: parks, buses, markets, plastic; no party politics or religion.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `i-think-local-opinions` | I Think, I Don't Think · నా ఉద్దేశంలో | I think / I don't think + a reason with because | I think the new bus stand is very useful. I don't think the market should close at eight. | Giving your opinion on the new bus stand at the tea stall |
| 2 | `in-my-opinion-the-park` | In My Opinion · నా అభిప్రాయం ప్రకారం | In my opinion; For me; The main reason is | In my opinion, the park needs more benches. The main reason is that many elders walk there. | Answering a colony survey about the park |
| 3 | `i-agree-but-colony` | I Agree, But · ఒప్పుకుంటాను, కానీ | agreeing and partly agreeing: I completely agree; That's true, but | I completely agree with Salma. That's true, but the roads are still very narrow. | Talking about a new speed breaker with a neighbour |
| 4 | `disagreeing-politely-plastic-ban` | I'm Not So Sure · నాకు అలా అనిపించడం లేదు | disagreeing politely: I see your point, but; I'm not so sure (never "You are wrong") | I see your point, but plastic bags are a big problem. I'm not so sure the shops will lose customers. | A friendly disagreement about a plastic ban at the kirana shop |
| 5 | `what-do-you-think-library` | What Do You Think? · మీకేమనిపిస్తుంది? | asking for opinions: What do you think about …? How do you feel about …? | What do you think about the new library timings? How do you feel about the parking rule? | Asking neighbours' views before a residents' meeting |
| 6 | `w46-conversation` | Conversation Day: The Residents' Meeting · రెసిడెంట్స్ మీటింగ్ | all of the week | — | Opinions on a new water tank at a residents' meeting; a friendly debate at the tea stall about phones and young people |
| 7 | `w46-review` | Review | | | |

## Week 47 — Comparing & Choosing · పోల్చి ఎంచుకోవడం

*Recycles comparatives and superlatives (Weeks 22, 44, 45), would like (Weeks 23, 33) and opinions (Week 46). Fix-it: articles (4), plurals (5), do-questions (3). Clinic choices are for a check-up and never assume an illness.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `as-good-as-comparing-phones` | As Good As · అంతే బాగుంది | as + adjective + as | This phone is as good as the expensive one. The new mall is as crowded as the old market. | Comparing two phones at a mobile shop |
| 2 | `not-as-cheap-as-recharge-plans` | Not as Cheap As · అంత చవక కాదు | not as … as; much / a bit + comparative | This plan is not as cheap as the old one. The second plan is a bit more expensive. | Choosing a recharge plan at the mobile shop |
| 3 | `i-prefer-the-train` | I Prefer the Train · నాకు రైలే ఇష్టం | prefer A to B; prefer + -ing | I prefer the train to the bus for long trips. Padma prefers walking in the evening. | Choosing how to travel to Hyderabad with a friend |
| 4 | `id-rather-choosing-a-clinic` | I'd Rather · దానికంటే ఇదే మేలు | would rather + verb; would rather not | I'd rather see a doctor near home. I'd rather not take an auto in this rain. | Choosing a clinic for a check-up with a neighbour |
| 5 | `which-would-you-choose-fan` | Which Would You Choose? · మీరైతే ఏది తీసుకుంటారు? | comparing options and deciding: Which is better for …? I'll take … | Which is better for daily use, the small one or the big one? I'll take the smaller one. It's lighter and cheaper. | Choosing a ceiling fan at an electrical shop |
| 6 | `w47-conversation` | Conversation Day: Buying a New TV · కొత్త TV కొనడం | all of the week | — | Comparing two TVs with a shop assistant; choosing an eye clinic with a friend |
| 7 | `w47-review` | Review | | | |

## Week 48 — If It Rains … · వర్షం పడితే …

*Introduces the first conditional. Recycles will and going to (Weeks 10, 25) and weather words (Week 25). Fix-it: prepositions (6: "reach to the station" → "reach the station"), missing am / is / are (1), -ing for habits (7). The week's own slip, "If it will rain", is a distractor in every lesson.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `if-it-rains-ill-stay-home` | If It Rains, I'll Stay Home · వర్షం పడితే ఇంట్లోనే | If + present, will + verb (never "If it will rain") | If it rains, I'll stay at home. If it's sunny tomorrow, we'll dry the pickles on the terrace. | Planning a temple visit around the weather with a friend |
| 2 | `if-the-train-is-late` | If the Train Is Late · రైలు ఆలస్యం అయితే | plans that depend on transport: If …, I'll call / wait / take | If the train is late, I'll call you from the station. If I miss the last bus, I'll take an auto. | Arranging a pickup with a friend before a trip |
| 3 | `if-you-feel-dizzy-advice` | If You Feel Dizzy · కళ్ళు తిరిగితే | If + present, imperative: health advice | If you feel dizzy, sit down at once. If the fever doesn't come down, see a doctor. | A nurse gives advice after a check-up |
| 4 | `what-if-the-power-goes-off` | What Will You Do If …? · ఒకవేళ … అయితే? | What will you do if …? questions and answers | What will you do if the power goes off? If the power goes off, I'll use the emergency light. | Getting ready for a festival evening with a neighbour |
| 5 | `if-all-goes-well-trip-plans` | If All Goes Well · అంతా బాగుంటే | if vs when in plans: If all goes well; When I reach | If all goes well, I'll visit Tirupati in March. When I reach Nellore, I'll send you a message. | Telling a friend your trip plans, with a backup plan |
| 6 | `w48-conversation` | Conversation Day: A Trip to Araku · అరకు ప్రయాణం | all of the week | — | Planning a trip to Araku with friends if the weather holds; calling the hotel when the train is late |
| 7 | `w48-review` | Review | | | |

## Week 49 — Online Shopping & Deliveries · ఆన్‌లైన్ షాపింగ్, డెలివరీలు

*Recycles will and going to (Weeks 10, 25), app steps (Week 20) and OTP safety (Week 21). Fix-it: articles (4), plurals (5), question word order (3). Read it card: a delivery SMS. "Your order has been shipped" is a fixed phrase (the passive comes in Week 56).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `placing-an-order-online` | Placing an Order · ఆర్డర్ పెట్టడం | add to cart, place an order, cash on delivery; I'm going to order | I'm going to order a mixer online. Is cash on delivery available for this item? | Ordering by phone from a supermarket's delivery line |
| 2 | `when-will-my-order-arrive` | When Will It Arrive? · ఎప్పుడు వస్తుంది? | will for delivery dates; tracking words: shipped, out for delivery (fixed phrases) | Your order has been shipped. It will arrive by Friday. The parcel is out for delivery today. | Checking a delivery date with customer care |
| 3 | `reading-the-delivery-code` | Reading the Code · కోడ్ చెప్పడం | reading codes aloud: double five, zero (not "o"); the delivery code goes only to the person at your door, once the parcel is in your hand; never a bank or UPI OTP | Your delivery code is four double five zero. I give this code only to the delivery person at my door. | The delivery person at the gate asks for the code |
| 4 | `parcel-says-delivered-but` | It Says Delivered, But · డెలివరీ అయిందంటోంది, కానీ | present perfect for results (Week 29) in a delivery complaint | The app says delivered, but I haven't received it. Could you check with the delivery person, please? | Calling customer care about a missing parcel |
| 5 | `leave-the-parcel-with-the-guard` | Leave It With the Guard · సెక్యూరిటీ దగ్గర ఇవ్వండి | instructions to delivery people: I'm not at home; Please leave it with …; I'll be back by … | I'm not at home. Please leave it with the security guard. I'll be back by six. Can you come after that? | A delivery person calls while you are at the temple |
| 6 | `w49-conversation` | Conversation Day: The Wrong Parcel · తప్పు పార్సెల్ | all of the week | — | A wrong parcel arrives at the door; ordering a housewarming gift with cash on delivery |
| 7 | `w49-review` | Review | | | |

## Week 50 — Problems, Returns & Refunds · సమస్యలు, రిటర్న్, రీఫండ్

*Deepens Weeks 23 (a wrong order) and 29 (faults) with reasons and results. Recycles the present perfect for results (Week 29) and following up (Week 28). Fix-it: Indian-English habits (10: "revert back", "do the needful"), prepositions (6: "return back"), do-questions (3).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `because-so-thats-why-returns` | Because, So, That's Why · అందుకే | because, so, that's why to explain a problem | The zip broke on the first day, so I brought it back. It doesn't fit. That's why I want to change it. | Explaining a broken bag at the shop |
| 2 | `im-afraid-polite-complaints` | I'm Afraid There's a Problem · ఒక చిన్న సమస్య ఉంది అండీ | I'm afraid … to soften a complaint | I'm afraid this mixer is making a strange noise. I'm afraid the bill is wrong. You charged me twice. | Pointing out a double charge at a supermarket |
| 3 | `id-like-to-return-this-kettle` | I'd Like to Return This · ఇది వాపస్ ఇవ్వాలి | I'd like to return / exchange …; bill, within seven days | I'd like to return this kettle. Here is the bill. Can I exchange it for a different model? | Returning a kettle at an electronics shop |
| 4 | `when-will-i-get-my-refund` | When Will I Get My Refund? · రీఫండ్ ఎప్పుడు? | refund words: credited, working days, account | When will the money come back to my account? It will be credited in five to seven working days. | Following up a refund by phone |
| 5 | `firm-and-polite-ask-the-manager` | Could I Speak to the Manager? · మేనేజర్‌తో మాట్లాడతాను | staying firm and polite when the answer is no; firm falling tone | I understand, but the product was faulty from day one. Could I speak to the manager, please? | Asking for the manager when a shop refuses a return |
| 6 | `w50-conversation` | Conversation Day: A Faulty Ceiling Fan · పని చేయని ఫ్యాన్ | all of the week | — | Returning a faulty fan at the shop; asking an online seller for a refund |
| 7 | `w50-review` | Review | | | |

## Week 51 — Understanding the Doctor · డాక్టర్ చెప్పేది అర్థం చేసుకోవడం

*Deepens Week 16 (symptoms and reports). Recycles How long have you had …? (Week 16), should / have to (Weeks 11, 17) and since / for (Week 43). Fix-it: missing am / is / are (1), "take rest" (10), -ing for states (7). Never assumes an illness: hints say "your own" history and always allow "none"; scenes work for a check-up or helping a friend. Read it card: a lab report.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `my-medical-history-new-doctor` | My Medical History · నా ఆరోగ్య వివరాలు | history: I've had … since / for; I had an operation in …; allergies | I've had high BP for about ten years. I had a knee operation in 2019. | Giving your history to a new doctor |
| 2 | `do-you-mean-doctor-checking` | Do You Mean …? · అంటే …? | checking questions: Do you mean …? Sorry, what does … mean? | Do you mean I should stop sugar completely? Sorry, what does fasting sugar mean? | Asking the doctor to explain a new word |
| 3 | `so-i-should-doctor-advice` | So I Should Walk Every Day? · అంటే రోజూ నడవాలా? | repeating advice back to check it: So I should …? Let me repeat that. | So I should take this tablet before breakfast? Let me repeat that: one tablet, morning and night. | Checking the doctor's instructions before leaving |
| 4 | `reading-a-test-report` | My Test Report · టెస్ట్ రిపోర్ట్ | report words: normal, high, low, borderline, slightly; Is it serious? | Your cholesterol is slightly high. Is it serious, or can I control it with diet? | The doctor explains a blood report |
| 5 | `options-and-next-steps-doctor` | What Are the Options? · ఇంకా ఏ దారులు ఉన్నాయి? | asking about options and next steps: What are the options? Do I need another test? | What are the other options, doctor? Do I need to come back for another test? | Asking a specialist about options for knee pain |
| 6 | `w51-conversation` | Conversation Day: A Follow-Up Visit · ఫాలో-అప్ విజిట్ | all of the week | — | A follow-up visit about BP with Dr Fatima; checking the new prescription with the pharmacist |
| 7 | `w51-review` | Review | | | |

## Week 52 — A Hospital Stay · ఆసుపత్రిలో ఉండటం

*Deepens Week 18 (the emergency ward) with a planned stay. Recycles have to (Week 17), not allowed (Week 37) and before / after (Week 17). Fix-it: articles (4), prepositions of time (6), question word order (3). The patient is the learner or a neighbour; a health card or scheme is asked about, never assumed. The Hospital & Caregiving track goes further. Read it card: a visiting-hours notice; listening: a hospital announcement (§1a).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `admission-day-hospital-stay` | Admission Day · ఆసుపత్రిలో చేరే రోజు | have to for procedures: You have to …; Please bring … | You have to come at seven, before breakfast. Please bring your old reports and your ID card. | At the admission desk before a small operation |
| 2 | `visitors-allowed-hospital-stay` | Are Visitors Allowed? · విజిటర్స్‌ని రానిస్తారా? | be allowed to / not allowed to; visiting hours; one attendant | Visitors are allowed from four to six. Only one person is allowed to stay at night. | Visiting a neighbour on the ward; asking the security guard |
| 3 | `on-the-ward-calling-the-nurse` | On the Ward · వార్డులో | asking the nurse: When will the doctor come? Could you check …? the drip, the bell | When will the doctor come for rounds? The drip has stopped. Could you check it, please? | Calling the nurse at night |
| 4 | `before-after-until-operation` | Before, After, Until · ముందు, తర్వాత, అప్పటివరకు | before / after / until + a time or -ing | Don't eat anything until the operation. You can walk a little after two days. | The nurse explains the rules before and after a small operation |
| 5 | `discharge-day-and-the-bill` | Discharge and the Bill · డిశ్చార్జ్, బిల్లు | discharge summary, final bill, follow-up date; Is this covered by …? | When can I go home? Is the discharge summary ready? Is this covered by the health scheme? | At the billing counter on the day of discharge |
| 6 | `w52-conversation` | Conversation Day: Visiting a Neighbour in Hospital · ఆసుపత్రిలో పొరుగువారిని చూడటం | all of the week | — | Visiting Mr Imran after his operation; asking the nurse about his discharge |
| 7 | `w52-review` | Review | | | |

## Week 53 — Waiting in Line · క్యూలో ఎదురుచూపు

*Introduces the present perfect continuous. Recycles since / for and the present perfect (Weeks 31, 43) and polite complaints (Week 50). Fix-it: present tense for duration (8: "I am waiting since ten" → "I have been waiting since ten"), -ing for states (7: never "I have been knowing"), plurals (5).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `ive-been-waiting-for-an-hour` | I've Been Waiting for an Hour · గంట నుంచి ఎదురుచూస్తున్నాను | have been + -ing for something still going on, with for / since | I've been waiting here for an hour. We have been standing in this line since nine. | In the hospital OP queue |
| 2 | `how-long-have-you-been-waiting` | How Long Have You Been Waiting? · ఎంతసేపట్నుంచి ఉన్నారు? | How long have you been + -ing? How long has … been …? | How long have you been waiting? How long has the counter been closed? | Chatting with another customer in the bank queue |
| 3 | `still-going-or-done-queue` | Still Going or Done? · ఇంకా చేస్తున్నారా, అయిపోయిందా? | present perfect continuous (still going on) vs present perfect (finished, how many) | I've been filling forms all morning. I've filled three forms already. | Telling a friend on the phone how your morning at the office is going |
| 4 | `someone-jumped-the-queue` | Someone Jumped the Queue · క్యూలో ముందుకు దూరారు | a polite word in a queue: Excuse me, the line starts there; we've been waiting | Excuse me, the line starts there. We've been waiting too. Sorry, I didn't see the line. | Someone pushes in at the bank counter |
| 5 | `how-much-longer-in-the-queue` | How Much Longer? · ఇంకా ఎంతసేపు? | asking politely about delays: How much longer …? senior citizens' counter | How much longer will it take? We've been waiting since ten. Is there a separate counter for senior citizens? | Asking a clerk at the electricity office about a long delay |
| 6 | `w53-conversation` | Conversation Day: A Long Wait at the Hospital · ఆసుపత్రిలో చాలాసేపు | all of the week | — | Asking the OP staff politely about the wait; a phone call to a friend about your long morning |
| 7 | `w53-review` | Review | | | |

## Week 54 — Checkpoint: Telling and Explaining · చెక్‌పాయింట్: చెప్పడం, వివరించడం

*Checkpoint week (§2b): mixed review of Weeks 41–53, a Fix-it clinic and the 1-minute speaking mission (a story from my childhood).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `stories-and-memories-mix` | Stories and Memories · కథలు, జ్ఞాపకాలు | mixed: story order, used to, past simple vs present perfect | We used to swim in the canal. One day the water rose suddenly. | Telling a friend a story from your school days |
| 2 | `opinions-and-choices-mix` | Opinions and Choices · అభిప్రాయాలు, ఎంపికలు | mixed: opinions, comparing, if + will | I think the smaller one is better. If it breaks, I'll return it. | Helping a neighbour choose a phone |
| 3 | `shop-and-hospital-problems-mix` | Problems Sorted · సమస్యలు తీరాయి | mixed: returns and refunds, the doctor, the ward, queues | I'd like to return this, because it's faulty. So I should rest for a week? | A refund call and a doctor's visit on the same day |
| 4 | `fix-it-clinic-3` | Fix-It Clinic · తప్పులు సరిచేసుకుందాం | the ten Fix-it errors (§2) in Weeks 41–53 sentences | I have been waiting since ten. I used to go every day. Where were you going? | Checking a friend's story before they tell it at the club |
| 5 | `childhood-story-in-one-minute` | A Story From My Childhood · నా చిన్నప్పటి కథ | speaking mission: used to, past simple, past continuous and sequence words; 1-minute speaking mission | When I was ten, we used to live near a river. One evening, while we were playing, it started to rain. | Telling a friend a childhood story for one minute |
| 6 | `w54-conversation` | Conversation Day: Tea With Old Friends · పాత స్నేహితులతో టీ | Weeks 41–53 | — | Old friends swap stories and opinions over tea; returning a gift and visiting the clinic on the way home |
| 7 | `w54-review` | Checkpoint · చెక్‌పాయింట్ | | | The checkpoint check (§2b) and certificate |

## Week 55 — Travel in India & Pilgrimage · ప్రయాణాలు, తీర్థయాత్రలు

*Deepens Week 15 (local transport) with longer trips. Recycles the present continuous for arrangements (Week 38), going to (Week 25), timetables (Week 15) and if + will (Week 48). Fix-it: prepositions (6: "reach to Tirupati" → "reach Tirupati"), articles (4), question word order (3). Holy places rotate (Tirumala, Srisailam, Medak Church, Kadapa Dargah); the Faith track goes deeper. Listening: platform announcements.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `travelling-to-tirupati-plans` | We're Going to Tirupati · తిరుపతి వెళ్తున్నాం | present continuous and going to for travel plans | We're leaving for Tirupati on Friday night. We're going to stay two nights near the temple. | Telling a neighbour your travel plans and asking them to keep an eye on the house |
| 2 | `booking-a-train-berth` | Booking a Train Ticket · రైలు టికెట్ బుకింగ్ | booking words: berth, sleeper, AC, waiting list, Tatkal, PNR | I'd like two lower berths in sleeper class. My ticket is on the waiting list. Will it be confirmed? | At the railway reservation counter |
| 3 | `hotel-check-in-on-a-trip` | Checking In · హోటల్‌లో చెక్-ఇన్ | hotel words: booking, check in, checkout, extra bed, hot water | I have a booking in the name of Sai. What time is checkout? Is there hot water in the morning? | At a hotel reception in Tirupati |
| 4 | `darshan-tickets-and-queues` | Darshan Tickets and Queues · దర్శనం టికెట్లు, క్యూలు | asking about tickets, timings and queues at holy places | What time does darshan start tomorrow? Is there a separate queue for senior citizens? | At the information counter in a pilgrimage town |
| 5 | `catching-the-platform-announcement` | Listen to the Announcement · అనౌన్స్‌మెంట్ వినండి | catching platform numbers and delays; checking with someone: Did they say …? | The Narayanadri Express is arriving on platform number five. Sorry, did they say platform five or nine? | Checking an announcement with another passenger |
| 6 | `w55-conversation` | Conversation Day: A Group Trip to Srisailam · శ్రీశైలం యాత్ర | all of the week | — | Planning a group trip to Srisailam with friends; a train delay and a call to the hotel |
| 7 | `w55-review` | Review | | | |

## Week 56 — Made in India: Labels & Signs · మేడ్ ఇన్ ఇండియా: లేబుల్స్, బోర్డులు

*Introduces the passive, after the Week 37 chunk "Smoking is not allowed". Recycles not allowed (Week 37), medicine labels (Week 17) and dates (Week 27). Fix-it: missing is / are (1: "It made in India" → "It is made in India"), plurals and uncountables (5), articles (4). Read it card: a product label; other lessons show short signs in their questions.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `made-in-india-labels` | Made in India · మేడ్ ఇన్ ఇండియా | is / are + past participle: is made, are grown, is packed | This soap is made in Hyderabad. These mangoes are grown in Nuzvid. | Asking a shopkeeper where things come from |
| 2 | `best-before-reading-labels` | Best Before · ఎప్పటిలోపు వాడాలి | label words: packed on, best before, MRP, net weight; was packed | This oil was packed in May. The MRP is printed on the back. | Checking dates on a packet at the kirana shop |
| 3 | `signs-is-not-permitted` | Parking Is Not Permitted · ఇక్కడ పార్కింగ్ చేయకూడదు | signs in the passive: is not permitted, is prohibited | Parking is not permitted in front of the gate. Photography is not permitted inside the museum. | Explaining signs at a railway station to a visitor |
| 4 | `are-these-handwoven-questions` | Are These Woven by Hand? · ఇవి చేనేతవేనా? | passive questions: Is it made …? Where is it made? Are they sold …? | Are these sarees woven by hand? Where is this pickle made? | Asking questions at a handloom stall |
| 5 | `famous-products-of-our-region` | Famous Products · మన ప్రాంతం ప్రత్యేకతలు | the passive to describe local products: is made from, is known for, are sent to | Kondapalli toys are made from soft wood. Guntur chillies are sent all over the world. | Telling a visitor about Kondapalli toys at a craft shop |
| 6 | `w56-conversation` | Conversation Day: At a Handloom Exhibition · చేనేత ఎగ్జిబిషన్ | all of the week | — | Reading labels and asking questions at an exhibition; explaining the signs at the bus station to a visitor from another state |
| 7 | `w56-review` | Review | | | |

## Week 57 — The Doctor Said … · డాక్టర్ ఏం చెప్పారంటే …

*Introduces reported speech. Recycles the doctor's advice (Week 51), phone messages (Week 19) and should / have to. Fix-it: he / she + s (2), question word order (3), "said me" (6: "said to me", "told me"). Messages come from doctors, offices and callers, passed on to friends and neighbours.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `she-said-that-doctor-news` | She Said That · ఆవిడ చెప్పారు | said that + past (is → was, will → would) | The doctor said that my BP was normal. She said the report would come on Monday. | Telling a friend what the doctor said at your check-up |
| 2 | `told-me-to-walk-doctor` | She Told Me to Walk · నడవమని చెప్పారు | told me to / told me not to | Dr Kavitha told me to walk every evening. She told me not to eat sweets. | Telling the pharmacist what the doctor told you |
| 3 | `said-or-told-messages` | Said or Told? · said ఆ, told ఆ? | say something vs tell someone (never "said me") | Ramesh said he was busy. Ramesh told me he was busy. | Passing on a message from a friend |
| 4 | `passing-on-office-messages` | The Bank Called · బ్యాంక్ నుంచి ఫోన్ | reported messages: They asked me to …; He said he would … | The bank called. They asked me to bring my passbook. The electrician said he would come tomorrow. | Taking a message for a neighbour and passing it on |
| 5 | `what-did-they-say-meeting` | What Did She Say? · ఆవిడ ఏం చెప్పారు? | asking about and passing on news: What did … say? She said that … | What did the nurse say about the timings? She said visiting time was from four to six. | Telling a friend what was said at the colony meeting |
| 6 | `w57-conversation` | Conversation Day: A Message From the Clinic · క్లినిక్ నుంచి మెసేజ్ | all of the week | — | Passing on the clinic's message to a neighbour; telling a friend what the bank manager said |
| 7 | `w57-review` | Review | | | |

## Week 58 — At the Enquiry Counter · ఎంక్వయిరీ కౌంటర్ దగ్గర

*Introduces indirect questions; deepens Week 15's enquiry counter. Recycles question word order (Weeks 2, 27) and reported speech (Week 57). Fix-it: question word order (3: "Can you tell me where is the lift?" → "where the lift is"), articles (4), prepositions (6).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `can-you-tell-me-where-enquiry` | Can You Tell Me Where? · ఎక్కడో చెప్తారా? | Can you tell me where + who + verb? | Can you tell me where the lab is? Could you tell me where I can get a wheelchair? | At the hospital enquiry desk |
| 2 | `do-you-know-when-the-train` | Do You Know When? · ఎప్పుడో తెలుసా? | Do you know when / what time / if + statement order | Do you know when the next train to Guntur leaves? Do you know if it stops at Tenali? | At the railway enquiry counter |
| 3 | `id-like-to-know-help-desk` | I'd Like to Know · తెలుసుకోవాలి అండీ | I'd like to know …; I was wondering if … | I'd like to know how long the certificate will take. I was wondering if I could pay online. | At the municipal office help desk |
| 4 | `polite-or-direct-questions` | Polite or Direct? · సూటిగా ఆ, మర్యాదగా ఆ? | choosing direct or indirect questions; falling tone | Where's the ATM? Excuse me, do you know where the ATM is? | Asking a stranger at the bus stand, then a friend |
| 5 | `enquiring-for-a-neighbour` | Asking for Someone Else · ఇంకొకరి కోసం అడగడం | indirect questions for someone else: which ward, if visitors are allowed | Could you tell me which ward Mr Narayana is in? Can you tell me if visitors are allowed now? | Asking at the hospital desk for a neighbour who was admitted |
| 6 | `w58-conversation` | Conversation Day: At the Bus Station Enquiry · బస్ స్టేషన్ ఎంక్వయిరీ | all of the week | — | Asking about buses to Bhadrachalam at the bus station; asking at a bank help desk about a locker |
| 7 | `w58-review` | Review | | | |

## Week 59 — The Shop Where … · … దొరికే షాపు

*Extends relative clauses from Week 36 (who, that). Recycles superlatives (Weeks 44, 45), recommending (Week 45) and the passive (Week 56). Fix-it: articles (4), missing am / is / are (1), he / she + s (2).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `the-shop-which-repairs-radios` | The Shop Which Repairs Radios · రేడియోలు రిపేర్ చేసే షాపు | which / that for things | I know a shop which repairs old radios. Is this the bus that goes to the hospital? | Recommending a repair shop to a neighbour |
| 2 | `the-place-where-we-had-lunch` | The Place Where We Had Lunch · మనం భోజనం చేసిన చోటు | where for places | That's the hotel where we had lunch last year. Is there a shop where I can print photos? | Showing a visitor around your area |
| 3 | `the-man-whose-shop` | The Man Whose Shop Is Near the Temple · గుడి దగ్గర షాపున్న ఆయన | whose for people and their things | Mohan is the man whose shop is near the temple. I met a lady whose tailoring class is very popular. | Pointing people out at a colony function |
| 4 | `recommend-a-dentist-who` | Do You Know a Good Dentist? · మంచి డెంటిస్ట్ తెలుసా? | recommending people and places with who / which / where | Do you know a dentist who works on Sundays? There's a clinic near the bus stand which is very clean. | A new neighbour asks for a good dentist |
| 5 | `best-places-in-our-area` | The Best Places in Our Area · మా ఏరియాలో మంచి చోట్లు | relative clauses with superlatives: the one that …; the place where … | The best saree shop is the one that opened last year. Venkat's is the place where everyone buys sweets. | Giving a new tenant a tour of the shops |
| 6 | `w59-conversation` | Conversation Day: A Visitor From Chennai · చెన్నై నుంచి అతిథి | all of the week | — | Recommending places to a visitor; finding a tailor who can finish a blouse quickly |
| 7 | `w59-review` | Review | | | |

## Week 60 — Money, Savings & Pensions · డబ్బు, పొదుపు, పెన్షన్

*Extends big numbers from Week 21. Recycles comparatives (Week 47), will (Week 10), the life certificate (Week 28) and OTP safety (Week 21). Fix-it: plurals after numbers (5: "five thousands" → "five thousand"), prepositions (6), present tense for duration (8). A pension is never assumed: scenes cover savings, a bank visit and helping a retired neighbour; amounts are examples, never the learner's own.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `lakh-and-million-money` | Lakh and Million · లక్ష, మిలియన్ | lakh = hundred thousand; ten lakh = one million; crore = ten million | One and a half lakh is one hundred and fifty thousand. Ten lakh is the same as one million. | Explaining a price to a friend abroad on a video call |
| 2 | `interest-rate-per-cent` | Seven Per Cent Interest · ఏడు శాతం వడ్డీ | per cent, interest rate, point (seven point five per cent) | The interest rate is seven point five per cent. Senior citizens get half a per cent more. | Asking about deposit rates at the bank |
| 3 | `opening-a-fixed-deposit` | Opening a Fixed Deposit · FD తెరవడం | FD words: deposit, term, mature, nominee, renew | I'd like to open a fixed deposit for one year. Who is the nominee? Can I renew it online? | At the bank, opening an FD |
| 4 | `asking-about-a-pension` | Asking About a Pension · పెన్షన్ గురించి అడగడం | pension words: credited, arrears, life certificate; Has it been credited? (a fixed phrase) | This month's pension hasn't been credited yet. When will the arrears be paid? | Helping a retired neighbour ask the bank about a late pension |
| 5 | `saving-and-spending-habits` | Saving and Spending · పొదుపు, ఖర్చు | money habits: save, spend, budget; I try to …; too much (a fixed phrase) | I try to save a little every month. I spend too much on auto fares. | Talking about saving with a friend; turning down a "double your money" offer |
| 6 | `w60-conversation` | Conversation Day: At the Bank Manager's Desk · బ్యాంక్ మేనేజర్ దగ్గర | all of the week | — | Comparing an FD and a post office scheme with the manager; a friend asks about a scheme that promises double money |
| 7 | `w60-review` | Review | | | |

## Week 61 — News Headlines · వార్తల హెడ్‌లైన్స్

*Recycles the passive (Week 56), the present simple and reported speech (Week 57). Fix-it: articles (4: headlines drop them, sentences keep them), he / she + s (2), plurals (5). News stays local and practical (weather, prices, roads, festivals, scams); no party politics.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `headlines-in-the-present` | Rains Hit the City · హెడ్‌లైన్స్ చదవడం | headlines use the present simple for past events | The headline says Heavy Rains Hit Vijayawada. It means it rained heavily yesterday. | Reading the morning paper with a friend at the tea stall |
| 2 | `headlines-without-is-or-was` | Flyover Opened · ఫ్లైఓవర్ ప్రారంభం | headlines drop is / was: New Flyover Opened = a new flyover was opened | New Flyover Opened in Guntur means a new flyover was opened. Two Men Arrested for Chain Snatching. | Talking about the local news with a neighbour |
| 3 | `headlines-with-to-for-future` | Metro to Start in May · మే నుంచి మెట్రో | to + verb for the future in headlines | Metro to Start in May means the metro will start in May. Bus Fares to Go Up From Monday. | Reading the day's headlines with a friend on the bus |
| 4 | `did-you-hear-the-local-news` | Did You Hear? · విన్నారా? | sharing news: Did you hear that …? Apparently; According to the paper | Did you hear that the market is moving? According to the paper, onion prices will fall. | Sharing news on the morning walk |
| 5 | `is-this-news-forward-true` | Is It True? · ఇది నిజమేనా? | checking news: Is it true that …? Where did you read it? Let's check | Is it true that banks are closed for a week? I don't think so. Let's check the bank's website. | A neighbour forwards a rumour about bank closures |
| 6 | `w61-conversation` | Conversation Day: The Morning Paper · పొద్దున పేపర్ | all of the week | — | Talking about the day's news at the tea stall; hearing a cyclone warning on the TV news with a neighbour |
| 7 | `w61-review` | Review | | | |

## Week 62 — Formal Requests & Calling Offices · ఆఫీసులకు మర్యాదగా అడగడం

*Deepens Weeks 19 (phone calls) and 33 (Would you mind …?) with formal English. Recycles indirect questions (Week 58) and following up with the past simple (Week 28). Fix-it: Indian-English habits (10: "do the needful", "kindly revert", "prepone"), question word order (3), -ing for states (7: "I am wanting").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `would-you-mind-office-call` | Would You Mind Checking? · కొంచెం చూస్తారా? | Would you mind + -ing? in formal calls | Would you mind checking the status of my application? Would you mind spelling that, please? | Calling the electricity office about a new connection |
| 2 | `is-it-ok-if-appointments` | Is It OK If I Come on Thursday? · గురువారం రావొచ్చా? | Is it OK if + present? Would it be possible to …? | Is it OK if I come on Thursday instead? Would it be possible to meet the manager? | Booking an appointment with a bank manager |
| 3 | `could-you-possibly-formal` | Could You Possibly …? · వీలైతే … చేస్తారా? | Could you possibly …? I'd be grateful if you could … | Could you possibly send it by email? I'd be grateful if you could call me back. | Asking an office for a copy of a document |
| 4 | `im-calling-about-formal-call` | I'm Calling About · … గురించి ఫోన్ చేశాను | opening a formal call: My name is …; I'm calling about …; on behalf of | Good morning. I'm calling about complaint number 2471. I'm calling on behalf of my neighbour, Mrs Grace. | Calling an office on a neighbour's behalf |
| 5 | `following-up-a-formal-request` | Following Up · మళ్ళీ గుర్తు చేయడం | follow-ups: I called last week; I haven't heard back; Could you give me an update? | I called last Monday, but I haven't heard back. Could you give me an update, please? | Following up with the municipal office about a certificate |
| 6 | `w62-conversation` | Conversation Day: A Call to the Electricity Office · కరెంట్ ఆఫీసుకి ఫోన్ | all of the week | — | A formal call about a wrong bill; moving an appointment at the passport office |
| 7 | `w62-review` | Review | | | |

## Week 63 — Official Letters & Notices · ఆఫీసు ఉత్తరాలు, నోటీసులు

*Recycles the passive (Weeks 56, 61), dates in full (Week 27), formal requests (Week 62) and scam safety (Week 21). Fix-it: Indian-English habits (10: "revert", "kindly"), articles (4), prepositions (6: "on or before"). Mostly reading: the Read it card is a letter, and the learner never writes one. Letters are ones the learner or a neighbour might get; none assumes a pension or tax.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `parts-of-an-official-letter` | Dear Sir or Madam · ఉత్తరం మొదలు, ముగింపు | letter parts: Dear Sir or Madam, Subject, Ref. No., Yours faithfully | The subject line tells you what the letter is about. This letter is dated the fifth of March. | Reading a bank letter with a neighbour |
| 2 | `you-are-requested-to-letters` | You Are Requested To · దయచేసి … చేయండి | formal passive phrases: You are requested to …; must be submitted; on or before | You are requested to visit the branch with your ID. The form must be submitted on or before the thirty-first of March. | A bank clerk explains a KYC letter |
| 3 | `power-shutdown-notice` | Supply Will Be Interrupted · కరెంట్ ఉండదు | notices with will be + past participle: will be closed, will be interrupted | Power supply will be interrupted from ten to two on Sunday. The office will remain closed on Monday. | Explaining a notice on the colony board to a neighbour |
| 4 | `a-final-reminder-letter` | A Final Reminder · చివరి రిమైండర్ | due date, overdue, penalty, disconnection; Does this mean …? | The bill is overdue. Please pay to avoid a penalty. Does this mean they will cut the connection? | Asking the water board clerk about a reminder letter |
| 5 | `is-this-letter-real` | Is This Letter Real? · ఇది నిజమైన ఉత్తరమేనా? | checking a letter: reference number, official address, never pay through a link | A real tax office never asks you to pay through a link. Let me call the office and check this reference number. | A neighbour gets a fake "income tax" message |
| 6 | `w63-conversation` | Conversation Day: A Letter From the Bank · బ్యాంక్ నుంచి ఉత్తరం | all of the week | — | Understanding a bank letter at the help desk; reading a water-supply notice with a neighbour |
| 7 | `w63-review` | Review | | | |

## Week 64 — Hosting Guests · అతిథులకు మర్యాదలు

*Merges hosting with recipes (old Week 32). Recycles would like (Weeks 6, 23), cooking instructions (Week 6) and first / then (Week 20). Fix-it: plurals and uncountables (5: a little rice, a few chapatis), articles (4), missing am / is / are (1). Hosts and cooks alternate between men and women.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `would-you-like-guest-offers` | Would You Like Some Coffee? · కాఫీ తాగుతారా? | offers: Would you like …? Can I get you …? replies: Yes, please; No, thank you, I'm fine | Would you like some filter coffee? Can I get you some water first? | Welcoming a guest from another state |
| 2 | `help-yourself-make-yourself-at-home` | Help Yourself · మొహమాటపడకండి | Help yourself; Please have some more; Make yourself at home | Please help yourself to the sweets. Make yourself at home. The fan switch is here. | Serving lunch to a neighbour |
| 3 | `a-little-a-few-serving-food` | A Little, A Few · కొంచెం, కొన్ని | a little + uncountable, a few + plural (Fix-it 5) | Just a little rice, please. I'm full. Have a few more pootharekulu. They're from Atreyapuram. | Serving more food and politely saying no |
| 4 | `how-to-make-pesarattu-recipe` | How Do You Make It? · ఎలా చేస్తారు? | explaining a recipe: soak, grind, add, spread; first, then | First, soak the green gram for four hours. Then grind it with ginger and green chillies. | A guest asks how Krishna made the pesarattu |
| 5 | `thank-you-for-coming-guests` | Thank You for Coming · వచ్చినందుకు థ్యాంక్స్ | seeing guests off: Thanks for coming; Do visit again; Have a safe journey | Thank you for coming. Please visit again soon. Send me a message when you reach home. | Seeing off guests at the gate |
| 6 | `w64-conversation` | Conversation Day: Guests for Lunch · భోజనానికి అతిథులు | all of the week | — | A visitor from abroad comes for lunch; offering food at a small housewarming |
| 7 | `w64-review` | Review | | | |

## Week 65 — Social Occasions · శుభకార్యాలు, పరామర్శలు

*Deepens Week 32 (greetings and invitations) with formal wishes and condolences. Recycles the present perfect and reported speech (Week 57). Fix-it: prepositions (6: "congratulations for" → "congratulations on"), articles (4), Indian-English habits (10). Condolence lessons are gentle and short; the person who died is a neighbour's or friend's relative or a colleague, never the learner's family.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `best-wishes-at-a-wedding` | Best Wishes for the Wedding · పెళ్లికి శుభాకాంక్షలు | formal wishes: Wishing you both …; Many congratulations on … | Wishing you both a very happy married life. Many congratulations on your daughter's wedding. | Greeting the couple and their parents at a wedding reception |
| 2 | `congratulations-on-the-new-home` | Congratulations on the New Home · గృహప్రవేశం | housewarming phrases; praising a home politely | Congratulations on your new home. It's beautiful. The rooms are so bright and airy. | At a neighbour's housewarming |
| 3 | `sorry-for-your-loss-condolence` | I'm Sorry for Your Loss · పరామర్శ | condolences: I'm so sorry to hear about …; He was a kind man; soft, slow tone | I'm so sorry to hear about your father. He was a very kind man. We will miss him. | Visiting a neighbour after a death in their family |
| 4 | `offering-help-after-bad-news` | Is There Anything I Can Do? · నా వల్ల ఏమైనా సహాయం కావాలా? | offering help after bad news: Please let me know if …; I can … | Please let me know if you need anything. I can bring food over this evening. | Offering help to a friend who lost a relative |
| 5 | `a-few-words-at-a-function` | A Few Words at a Function · ఫంక్షన్‌లో రెండు మాటలు | a short formal wish in front of people: On behalf of …; I wish … | On behalf of the colony, I wish Mr Joseph a happy retirement. He has helped all of us for many years. | Saying a few words at a neighbour's retirement function |
| 6 | `w65-conversation` | Conversation Day: A Week of Functions · ఫంక్షన్ల వారం | all of the week | — | Greeting the hosts at a wedding reception; a condolence phone call to a friend |
| 7 | `w65-review` | Review | | | |

## Week 66 — Phrasal Verbs at Home · ఇంట్లో phrasal verbs

*Phrasal verbs in context, built on chunks from Week 5 (switch on, get up). Recycles requests (Week 33), the present perfect (we've run out of) and offers (Week 64). Fix-it: prepositions (6: "on the light" → "turn on the light", "return back" → "return"), articles (4), he / she + s (2). Chores are shared: men and women both cook and clean.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `turn-on-turn-off-at-home` | Turn On, Turn Off · ఆన్ చేయడం, ఆఫ్ చేయడం | turn on / off, turn up / down; "it" goes in the middle (turn it off) | Please turn off the geyser after your bath. Could you turn the TV down a little? | A house guest asks how to use the geyser |
| 2 | `pick-up-put-away-tidying` | Pick Up, Put Away · తీయడం, సర్దడం | pick up, put away, put back, throw away | Could you put the plates away, please? Don't throw away that box. I need it. | Tidying up with a friend after a get-together |
| 3 | `look-for-find-out-at-home` | Look For, Find Out · వెతకడం, తెలుసుకోవడం | look for, look after, find out | I'm looking for my reading glasses. Can you find out when the plumber is coming? | Looking for your glasses with a visiting friend |
| 4 | `weve-run-out-of-sugar` | We've Run Out of Sugar · చక్కెర అయిపోయింది | run out of, use up, top up | We've run out of sugar. I'll get some from the shop. Please don't use up all the hot water. | Calling the kirana shop for a home delivery |
| 5 | `clearing-out-the-storeroom` | Clearing Out the Storeroom · స్టోర్‌రూమ్ ఖాళీ చేయడం | phrasal verbs together: clear out, give away, take out, set up | Let's clear out the storeroom before Ugadi. We can give away the old clothes. | Planning the festival cleaning with a friend who has come to help |
| 6 | `w66-conversation` | Conversation Day: Cleaning Before Ugadi · ఉగాది ముందు శుభ్రం | all of the week | — | Cleaning the house before Ugadi with a friend; showing an electrician which switches don't work |
| 7 | `w66-review` | Review | | | |

## Week 67 — Checkpoint: Getting Things Done · చెక్‌పాయింట్: పనులు చక్కబెట్టడం

*Checkpoint week (§2b): mixed review of Weeks 55–66, a Fix-it clinic and the 90-second speaking mission (a trip I took).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `trips-and-enquiries-mix` | Trips and Enquiries · ప్రయాణాలు, ఎంక్వయిరీలు | mixed: travel bookings, announcements, indirect questions | Could you tell me which platform the Godavari Express leaves from? We're leaving on Friday night. | Booking a trip and asking at the station |
| 2 | `messages-and-letters-mix` | Messages and Letters · మెసేజ్‌లు, ఉత్తరాలు | mixed: reported speech, passive notices, formal calls | The bank said the card would come by post. You are requested to bring two photographs. | Passing on a letter's message to a neighbour, then calling the office |
| 3 | `money-and-guests-mix` | Money and Guests · డబ్బు, అతిథులు | mixed: savings words, offers, relative clauses | The FD which I opened last year matures in May. Would you like a little more payasam? | A friend visits and asks about savings schemes |
| 4 | `fix-it-clinic-4` | Fix-It Clinic · తప్పులు సరిచేసుకుందాం | the ten Fix-it errors (§2) in Weeks 55–66 sentences | Can you tell me where the lift is? Please turn on the light. It is made in India. | Helping a friend get ready for a call to an office |
| 5 | `a-trip-i-took-ninety-seconds` | A Trip I Took · నేను చేసిన ప్రయాణం | speaking mission: past simple, sequence words, the passive and reported speech in a trip story; 90 seconds | Last year we went to Srisailam by bus with friends. The guide told us the temple was very old. | Telling a friend about a trip for ninety seconds |
| 6 | `w67-conversation` | Conversation Day: A Weekend Trip · వీకెండ్ ట్రిప్ | Weeks 55–66 | — | Planning a weekend trip and following the station announcements; hosting the friends who came with you |
| 7 | `w67-review` | Checkpoint · చెక్‌పాయింట్ | | | The checkpoint check (§2b) and certificate |

## Week 68 — Healthy Habits · మంచి అలవాట్లు

*Merges old Weeks 70 (want to or enjoy -ing?) and 74. Recycles like / enjoy + -ing (Week 35), should / must (Weeks 11, 37), the doctor's advice (Week 51) and used to (Week 42). Fix-it: -ing for habits (7: "I am walking daily" → "I walk every day"), "take rest" (10), plurals and uncountables (5: too much sugar, too many sweets). Habits are the learner's own choices; no comments on anyone's body.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `stopped-smoking-healthy-habits` | Stop Smoking, Keep Walking · మానేయడం, కొనసాగించడం | verb + -ing: stop, give up, keep, avoid | My friend Rahim stopped smoking last year. I'm trying to avoid eating late at night. | Encouraging a friend who wants to give up smoking |
| 2 | `decided-to-walk-healthy-habits` | I've Decided to Walk · నడవాలని నిర్ణయించుకున్నాను | verb + to: decide, plan, try, forget to | I've decided to walk for thirty minutes every morning. Don't forget to drink enough water. | Planning a walking routine with a neighbour |
| 3 | `too-much-not-enough-food-sleep` | Too Much, Not Enough · మరీ ఎక్కువ, సరిపోదు | too much / too many / enough + noun | I eat too much rice and not enough vegetables. Do you get enough sleep at night? | A dietitian at the clinic asks about your meals |
| 4 | `you-ought-to-health-advice` | You Ought To · చేయడం మంచిది | ought to vs should vs must (how strong the advice is) | You ought to get your eyes checked every year. You must take your tablets on time. | A friend gives advice about regular check-ups |
| 5 | `my-healthy-routine-now` | My Healthy Routine · నా మంచి అలవాట్లు | habits with -ing and to together; used to vs now | I used to skip breakfast, but now I eat on time. I enjoy doing yoga with my neighbours. | Talking about routines at the yoga class |
| 6 | `w68-conversation` | Conversation Day: The Yoga Class · యోగా క్లాస్ | all of the week | — | Joining a yoga class and talking with the teacher; a free health camp in the colony |
| 7 | `w68-review` | Review | | | |

## Week 69 — If I Had More Time … · నాకు ఇంకా టైమ్ ఉంటే …

*Introduces the second conditional, after the first (Week 48). Recycles would rather (Week 47) and will (Week 10). Fix-it: -ing for states (7), articles (4), question word order (3). The week's own slip, "If I would have", is a distractor in every lesson. Dreams stay modest and personal; money is never assumed.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `if-i-had-more-time-dreams` | If I Had More Time · టైమ్ ఎక్కువ ఉంటే | If + past, would + verb for imagined situations | If I had more time, I would learn the veena. If I lived near the sea, I would walk on the beach every morning. | Chatting about dreams with a friend at the park |
| 2 | `what-would-you-do-if-quiz` | What Would You Do? · మీరైతే ఏం చేస్తారు? | What would you do if …? questions and answers | What would you do if you found a lost wallet? I would take it to the police station. | A quiz game at the senior citizens' club |
| 3 | `if-i-were-you-advice` | If I Were You · నేను మీ స్థానంలో ఉంటే | If I were you, I'd … for advice (weak were) | If I were you, I'd take the morning train. If I were you, I'd ask the doctor again. | Advising a friend about a long journey |
| 4 | `real-or-imagined-if` | Real or Imagined? · జరిగేదా, ఊహించేదా? | first conditional (likely) vs second conditional (imagined) | If it rains, I'll stay home. If I had a car, I'd drive to Araku. | Talking about weekend plans and dream trips with a neighbour |
| 5 | `if-i-could-change-one-thing` | If I Could Change One Thing · ఒక్కటి మార్చగలిగితే | If I could + verb, I'd …; a short talk about your town or life | If I could change one thing, I'd plant more trees here. If I could travel anywhere, I'd go to Kashi. | Talking about your town's future at a colony meeting |
| 6 | `w69-conversation` | Conversation Day: Dreams Over Tea · టీ తాగుతూ కలలు | all of the week | — | Friends talk about what they would do with a free year; giving advice with If I were you |
| 7 | `w69-review` | Review | | | |

## Week 70 — Wishes & Regrets · అలా జరిగుంటే బాగుండేది

*I wish + past for now; "I should have" as a fixed phrase (taught in Week 108). Recycles the second conditional (Week 69) and used to (Week 42). Fix-it: -ing for states (7), articles (4), answering negative questions (9). Regrets stay small and everyday; no heavy losses.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `i-wish-i-could-swim` | I Wish I Could Swim · ఈత వస్తే బాగుండేది | I wish + past / could for things you would like to be different now | I wish I could swim. I wish my house was nearer the temple. | Talking with a friend at Rushikonda beach |
| 2 | `i-wish-it-wasnt-so-hot` | I Wish It Wasn't So Hot · ఇంత ఎండ లేకపోతే బాగుండు | I wish + a negative past; complaining gently | I wish it wasn't so hot today. I wish the bus didn't take so long. | Waiting at a bus stop in May with another passenger |
| 3 | `i-should-have-brought-an-umbrella` | I Should Have Brought an Umbrella · గొడుగు తెచ్చుకోవాల్సింది | I should have + past participle, a fixed phrase for small regrets | I should have brought an umbrella. I should have left home earlier. | Caught in the rain, talking with a shopkeeper |
| 4 | `never-mind-replying-to-regrets` | Never Mind · పర్వాలేదు | replying to regrets: Never mind; It happens; Next time | Never mind. It happens to everyone. Don't worry, you can go next time. | A friend is sorry they missed a music concert |
| 5 | `looking-back-on-choices` | Looking Back · వెనక్కి తిరిగి చూస్తే | wishes and regrets in a short talk; I'm glad I … | I'm glad I learned to use a smartphone. I should have started learning English sooner. | Talking about life choices with an old friend |
| 6 | `w70-conversation` | Conversation Day: A Rainy Day Out · వర్షంలో బయట | all of the week | — | Friends caught in the rain on a day trip; regrets after a shopping trip that went wrong |
| 7 | `w70-review` | Review | | | |

## Week 71 — Prices Have Gone Up · ధరలు పెరిగిపోయాయి

*Recycles the present perfect for change (Weeks 29, 31), comparatives (Weeks 22, 45), used to (Week 42) and per cent (Week 60). Fix-it: present tense for duration (8), plurals after numbers (5), missing am / is / are (1). Week 45 covered places; this week is prices and daily life. Money talk stays general, never anyone's own hardship.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `prices-have-gone-up-market` | Prices Have Gone Up · ధరలు పెరిగాయి | present perfect for change: has gone up, has come down, has doubled | The price of tomatoes has gone up again. Onions have come down a little this week. | Talking about prices at the vegetable market |
| 2 | `getting-more-expensive-every-year` | It's Getting Hotter · రోజురోజుకీ పెరుగుతోంది | get / become + comparative for change still happening | It's getting hotter every summer. Life is becoming more expensive in the city. | Small talk about summers with a neighbour |
| 3 | `a-dosa-used-to-cost` | A Dosa Used to Cost Two Rupees · అప్పట్లో దోస రెండు రూపాయలు | used to + now for prices then and now | A dosa used to cost two rupees. Now it's forty. A bus ticket used to cost fifty paise. | Telling a young shop assistant about old prices |
| 4 | `the-way-we-shop-has-changed` | The Way We Shop Has Changed · మనం కొనే తీరు మారింది | present perfect for changes in daily life: have started, have stopped | Most people have started paying by UPI. We have stopped writing letters. | Talking with a kirana shop owner about how business has changed |
| 5 | `managing-rising-prices` | Managing the Budget · ఖర్చులు సర్దుకోవడం | ways to cope: I've started …; I've cut down on … | I've started buying vegetables at the Rythu Bazaar. I've cut down on eating out. | Sharing money-saving tips with a neighbour |
| 6 | `w71-conversation` | Conversation Day: Old Prices, New Prices · పాత ధరలు, కొత్త ధరలు | all of the week | — | Chatting about prices with a shopkeeper; telling a visitor how daily life has changed in thirty years |
| 7 | `w71-review` | Review | | | |

## Week 72 — Maybe, Probably, Definitely · బహుశా, తప్పకుండా

*Recycles will and going to (Weeks 10, 25), the first conditional (Week 48) and weather words (Week 25). Fix-it: question word order (3), he / she + s (2), articles (4).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `ill-definitely-come-invitation` | I'll Definitely Come · తప్పకుండా వస్తాను | will + definitely / probably, and their place (I'll probably …, I probably won't …) | I'll definitely come to the function. I'll probably reach by seven. | Replying to an invitation to a colony function |
| 2 | `it-might-rain-later-plans` | It Might Rain Later · వర్షం పడొచ్చు | might / may for things that are possible | It might rain later, so take an umbrella. The train may be late because of the fog. | Planning a temple visit with a neighbour |
| 3 | `i-might-not-make-it` | I Might Not Make It · రాలేకపోవచ్చు | might not / may not; I'm not sure yet | I might not make it on Sunday. I'm not sure yet. I'll let you know tonight. | Telling a friend you may miss a meeting |
| 4 | `how-sure-are-you-results` | How Sure Are You? · ఎంత ఖచ్చితంగా? | degrees of certainty: definitely, probably, might, probably won't, definitely won't | The lab results will probably come tomorrow. The shop definitely won't open on Sunday. | Asking at the lab when the results will come |
| 5 | `maybe-next-month-plans` | Maybe Next Month · వచ్చే నెల కావచ్చు | maybe, perhaps; flexible plans | Maybe we can go to Bhadrachalam next month. Perhaps the bank will extend the date. | Making flexible plans with a friend |
| 6 | `w72-conversation` | Conversation Day: Will the Function Go Ahead? · ఫంక్షన్ జరుగుతుందా? | all of the week | — | Planning an outdoor function with a cyclone forecast; a friend who is not sure about the train |
| 7 | `w72-review` | Review | | | |

## Week 73 — It Must Be … · అది … అయ్యుంటుంది

*Recycles might (Week 72), the present continuous and the passive (Week 56). Fix-it: missing be (1: "He must busy" → "He must be busy"), he / she + s (2), articles (4). Guesses about people stay kind.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `there-must-be-a-power-cut` | There Must Be a Power Cut · కరెంట్ పోయి ఉంటుంది | must be for a sure guess | All the lights are off. There must be a power cut. He's not answering. He must be busy. | A dark street at night with a neighbour |
| 2 | `the-shop-might-be-closed` | It Might Be Closed · మూసేసి ఉండొచ్చు | might be / could be for less sure guesses | The shop might be closed for lunch. It could be a holiday today. | Finding a shop shut with a friend |
| 3 | `that-cant-be-my-bill` | That Can't Be Right · అలా అయ్యుండదు | can't be for something you are sure is not true | That can't be my bill. It's far too high. She can't be at home. Her scooter isn't here. | Questioning a high water bill at the office |
| 4 | `he-must-be-sleeping-guesses` | He Must Be Sleeping · నిద్రపోతూ ఉంటారు | must be + -ing; might be + -ing | He must be sleeping. Let's call later. They might be having lunch now. | A neighbour doesn't open the door |
| 5 | `why-is-the-road-blocked` | Why Is the Road Blocked? · రోడ్డు ఎందుకు మూసేశారు? | guessing reasons in a scene with must / might / can't | There must be a procession today. It can't be an accident. There's no ambulance. | Guessing why the traffic is stuck, with an auto driver |
| 6 | `w73-conversation` | Conversation Day: Where Is Everyone? · అందరూ ఎక్కడ? | all of the week | — | Arriving at a locked function hall and guessing why; a friend's phone keeps ringing with no answer |
| 7 | `w73-review` | Review | | | |

## Week 74 — How It Works · ఇది ఎలా పనిచేస్తుంది

*Recycles the passive (Weeks 56, 61, 63), first / then (Week 20) and imperatives. Fix-it: articles (4), prepositions (6), he / she + s (2: "The machine take" → "The machine takes").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `first-then-how-it-works` | How Does It Work? · ఇది ఎలా పనిచేస్తుంది? | steps: first, then, after that, finally, with a pause and stress on each | First, put the clothes in. Then add the powder. After that, press start and wait for an hour. | Explaining the washing machine to a guest |
| 2 | `the-milk-is-collected-dairy` | The Milk Is Collected · పాలు సేకరిస్తారు | present passive in processes: is collected, is checked, is sent | The milk is collected from farmers every morning. Then it is cooled and sent to the city. | A visit to a dairy near your town |
| 3 | `how-your-application-is-processed` | How Your Application Is Processed · మీ అప్లికేషన్ ఎలా ముందుకు వెళ్తుంది | passive for services: is checked, is approved, is sent by post | Your form is checked first, then sent to the officer. The card is sent by post in two weeks. | A Mee Seva clerk explains the steps |
| 4 | `using-a-cash-deposit-machine` | Using a Cash Deposit Machine · క్యాష్ డిపాజిట్ మెషీన్ | instructions and the passive together: Insert …; the notes are counted | Insert your card and put the notes in the slot. The notes are counted, and you get a slip. | A bank guard shows you the cash deposit machine |
| 5 | `how-mango-pickle-is-made` | How Avakaya Is Made · ఆవకాయ ఎలా పెడతారు | the passive and steps to explain a process from home | The mangoes are cut into pieces and dried. Then chilli powder, mustard and oil are added. | Explaining avakaya to a visitor from the north |
| 6 | `w74-conversation` | Conversation Day: A New Water Purifier · కొత్త వాటర్ ప్యూరిఫైయర్ | all of the week | — | A technician explains how a water purifier works; explaining the gas booking steps to a neighbour |
| 7 | `w74-review` | Review | | | |

## Week 75 — Neighbourhood Problems · కాలనీ సమస్యలు

*Deepens Week 33 (the colony meeting) with complaints to officials. Recycles the passive (Week 74), the present perfect continuous (Week 53), formal calls (Week 62) and opinions (Week 46). Fix-it: present tense for duration (8: "The road is broken since May"), "do the needful" (10), articles (4).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `garbage-hasnt-been-collected` | The Garbage Hasn't Been Collected · చెత్త తీసుకెళ్లలేదు | present perfect passive: hasn't been collected, hasn't been repaired | The garbage hasn't been collected for four days. The street light hasn't been repaired yet. | Calling the municipal helpline |
| 2 | `no-water-since-monday-complaint` | We Haven't Had Water Since Monday · సోమవారం నుంచి నీళ్ళు లేవు | since / for in complaints; has been + -ing | We haven't had water since Monday. The tap has been dry for three days. | At the water board office |
| 3 | `the-road-is-full-of-potholes` | The Road Is Full of Potholes · రోడ్డంతా గుంతలే | describing a problem clearly: where, since when, who is affected | The road near the school is full of potholes. Two people have fallen off their bikes this week. | A ward member visits the colony |
| 4 | `registering-a-civic-complaint` | Registering a Complaint · ఫిర్యాదు చేయడం | formal complaint phrases: I'd like to register a complaint; reference number; by when | I'd like to register a complaint about the drainage. By when will it be fixed? | Calling a complaint line and noting the number |
| 5 | `speaking-at-the-ward-meeting` | Speaking at the Ward Meeting · వార్డ్ మీటింగ్‌లో మాట్లాడటం | stating a problem and a request to an official, in a firm tone without anger | Sir, this problem has been going on for months. We request you to send someone this week. | Raising the water problem with the corporator at a meeting |
| 6 | `w75-conversation` | Conversation Day: Power Cuts in Summer · వేసవిలో కరెంట్ కోతలు | all of the week | — | Complaining to the electricity office about power cuts; neighbours plan a visit to the ward office together |
| 7 | `w75-review` | Review | | | |

## Week 76 — Chatting at the Park · పార్క్‌లో కబుర్లు

*Explains tag questions after the Week 34 chunk "isn't it?". Recycles small talk (Week 34), short answers and the present perfect. Fix-it: answering negative questions (9), "isn't it?" after every sentence (10), he / she + s (2).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `youre-new-here-arent-you` | You're New Here, Aren't You? · మీరు ఇక్కడికి కొత్త కదా? | tag questions with be: aren't you, isn't it, wasn't it (not "isn't it" every time) | You're new here, aren't you? It was very hot yesterday, wasn't it? | Meeting a new walker at the park |
| 2 | `you-live-nearby-dont-you` | You Live Nearby, Don't You? · మీరు దగ్గర్లోనే ఉంటారు కదా? | tags with do, did and have: don't you, didn't he, haven't they | You live near the temple, don't you? Suresh went to Shirdi last week, didn't he? | Chatting with a regular on the park bench |
| 3 | `asking-or-agreeing-tags` | Asking or Agreeing? · అడుగుతున్నారా, ఒప్పుకుంటున్నారా? | rising tag (really asking) vs falling tag (expecting yes) | The park closes at eight, doesn't it? The new benches are nice, aren't they? | Checking the park timings with the park staff |
| 4 | `so-do-i-neither-do-i` | So Do I, Neither Do I · నేను కూడా | so do I / so am I / neither do I / neither can I | I love the morning breeze. So do I. I can't walk fast anymore. Neither can I. | Finding things in common with another walker |
| 5 | `keeping-the-park-chat-going` | Keeping the Chat Going · కబుర్లు కొనసాగించడం | answering tags and negative questions the English way; Really? Me too. I didn't know that. | You didn't come yesterday, did you? No, I had a cold. Oh, really? I didn't know that. | A long chat on the park bench |
| 6 | `w76-conversation` | Conversation Day: Evening at the Park · పార్క్‌లో సాయంత్రం | all of the week | — | Chatting with walkers at the park; meeting an old colleague on a bench |
| 7 | `w76-review` | Review | | | |

## Week 77 — Films, TV & Serials · సినిమాలు, టీవీ, సీరియల్స్

*Deepens Week 35 ("What's it about?"). Recycles opinions (Week 46), relative clauses (Week 59) and the present perfect for experience (Week 30). Fix-it: -ing for states (7), articles (4), missing am / is / are (1: "I bored" → "I am bored").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `bored-or-boring-films` | Bored or Boring? · బోర్ కొట్టిందా, బోరింగా ఉందా? | -ed (how you feel) vs -ing (what makes you feel it) | The film was boring. I was bored after an hour. The ending was surprising. Everyone was surprised. | Talking about a film with a friend after the show |
| 2 | `interested-or-interesting-shows` | Interested or Interesting? · ఆసక్తి | interested / interesting, excited / exciting, tired / tiring | I'm very interested in old Telugu songs. The cricket match was really exciting. | A neighbour recommends a quiz show |
| 3 | `so-good-such-a-good-serial` | So Good, Such a Good Story · అంత బాగుంది | so + adjective; such a + adjective + noun | The songs were so beautiful. It's such a good story. You should watch it. | Recommending a serial to a friend |
| 4 | `what-are-you-watching-these-days` | What Are You Watching These Days? · ఈ మధ్య ఏం చూస్తున్నారు? | serial and OTT words: episode, season, on YouTube; present continuous for these days | I'm watching an old Telugu serial on YouTube these days. A new episode comes out every Friday. | Chatting at the tea stall about serials |
| 5 | `my-favourite-old-telugu-film` | My Favourite Old Film · నాకు ఇష్టమైన పాత సినిమా | telling about a film: It's about …; I liked it because …; I've seen it … times | Mayabazar is a classic full of magic and humour. I've seen it more than ten times. | Telling a young neighbour about a classic film |
| 6 | `w77-conversation` | Conversation Day: A Film at the Theatre · థియేటర్‌లో సినిమా | all of the week | — | Buying tickets and talking about the film afterwards; recommending a show to a neighbour |
| 7 | `w77-review` | Review | | | |

## Week 78 — Different Accents · వేర్వేరు యాసలు

*A recognition week: the learner hears other accents (extra English voices are a BUILD_PLAN decision, §1a; until then the scripts carry the word differences). Recycles indirect questions (Week 58), checking questions (Week 51) and phone calls (Week 19). Fix-it: question word order (3), articles (4), he / she + s (2).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `lift-or-elevator-accents` | Lift or Elevator? · లిఫ్ట్ ఆ, ఎలివేటర్ ఆ? | British, American and Indian words: lift / elevator, flat / apartment, petrol / gas | In America, a lift is called an elevator. Americans say gas for petrol. | A visitor from America asks for the elevator at a hotel |
| 2 | `say-that-again-other-accents` | Could You Say That Again? · మళ్ళీ చెప్తారా? | asking for repetition and slower speech politely | Sorry, could you say that again more slowly? Did you say thirteen or thirty? | A customer-care agent with a different accent calls you |
| 3 | `hearing-the-american-t` | The American T, the British R · అమెరికన్, బ్రిటిష్ ఉచ్చారణ | hearing American t (water, better) and British r (car, park) | Could I get some water, please? How far is the car park from here? | Giving directions to an American tourist in Hyderabad |
| 4 | `same-thing-different-words` | Same Thing, Different Words · ఒకే అర్థం, వేరే పదాలు | more pairs: mobile / cell phone, bill / check, holiday / vacation, queue / line | In the US they say vacation, not holiday. Can I have the check means the bill. | A video call with a friend who has lived in London |
| 5 | `following-a-video-from-abroad` | Following a Video · వీడియో అర్థం చేసుకోవడం | listening for key words in a short talk; checking with someone | She said to stir it for five minutes, didn't she? I didn't catch the last part. Can we play it again? | Watching a cooking video with a friend |
| 6 | `w78-conversation` | Conversation Day: Visitors From Abroad · విదేశీ అతిథులు | all of the week | — | Helping a British couple at the railway station; a call from a customer-care agent abroad |
| 7 | `w78-review` | Review | | | |

## Week 79 — Persuading Gently · మెల్లగా ఒప్పించడం

*Recycles should / ought to (Weeks 37, 68), the second conditional (Week 69), opinions (Week 46) and if + will (Week 48). Fix-it: do-questions (3: "Why you don't try?" → "Why don't you try?"), Indian-English habits (10), -ing for habits (7). Persuading is kind, never pushy.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `you-should-really-try-it` | You Should Really Try It · ఒక్కసారి try చేయండి | You should really …; stress to persuade | You should really try the yoga class. You should really see a doctor about that cough. | Persuading a friend to join the yoga class |
| 2 | `it-might-be-better-to` | It Might Be Better To · అలా చేస్తే మంచిదేమో | softer suggestions: It might be better to …; Have you thought about + -ing? | It might be better to take the train. Have you thought about getting your eyes checked? | Suggesting a neighbour takes the train instead of driving at night |
| 3 | `giving-reasons-to-persuade` | The Good Thing Is · ఇందులో మంచి ఏంటంటే | reasons that persuade: The good thing is …; Not only that | The good thing is, it's free for senior citizens. Not only that, it's very close to your house. | Persuading a friend to go to a free health camp |
| 4 | `answering-doubts-gently` | I Understand, But · మీరు చెప్పేది అర్థమైంది, కానీ | answering doubts: I understand, but …; What if …? Why not try it once? | I understand, but why not try it once? What if I come with you the first time? | A friend is nervous about paying by UPI |
| 5 | `persuading-the-colony-together` | Let's Do It Together · కలిసి చేద్దాం | persuading a group: If we all …; It would help everyone if … | If we all give a little, we can fix the gate. It would help everyone if we planted trees here. | Persuading neighbours to join a tree-planting drive |
| 6 | `w79-conversation` | Conversation Day: Joining the Walking Group · వాకింగ్ గ్రూప్‌లో చేరడం | all of the week | — | Persuading a neighbour to join the walking group; convincing a friend to see a doctor about a long cough |
| 7 | `w79-review` | Review | | | |

## Week 80 — Checkpoint: Stage 3 Review · చెక్‌పాయింట్: ధైర్యంగా మాట్లాడటం పునశ్చరణ

*Checkpoint week (§2b): mixed review of Weeks 68–79 and the whole stage, a Fix-it clinic and the 2-minute speaking mission (my town's problems and what would help).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `habits-and-dreams-mix` | Habits and Dreams · అలవాట్లు, కలలు | mixed: healthy habits, if I had …, I wish …, I should have … | I've decided to walk every morning. If I had more time, I'd learn to swim. | Talking about health goals with a friend |
| 2 | `guesses-and-plans-mix` | Guesses and Plans · ఊహలు, ప్లాన్లు | mixed: must be, might, probably, tag questions | The shop must be closed today. We'll probably go tomorrow, won't we? | A day out that doesn't go to plan |
| 3 | `town-problems-and-persuading-mix` | Town Problems · ఊరి సమస్యలు | mixed: passive complaints, other accents, persuading | The drain hasn't been cleaned for weeks. It might be better to go to the office together. | Persuading neighbours to complain together |
| 4 | `fix-it-clinic-5` | Fix-It Clinic · తప్పులు సరిచేసుకుందాం | the ten Fix-it errors (§2) in Stage 3 sentences | The road has been broken since May. Why don't you try? He must be busy. | Helping a friend check what they will say at the ward meeting |
| 5 | `my-town-in-two-minutes` | My Town in Two Minutes · రెండు నిమిషాల్లో మా ఊరు | speaking mission: present perfect, passive, if + would and should; 2-minute speaking mission | Our town has grown a lot, but the roads haven't been repaired. If we had more buses, fewer people would drive. | Speaking for two minutes about your town's problems and what would help |
| 6 | `w80-conversation` | Conversation Day: A Visit From the Corporator · కార్పొరేటర్ సందర్శన | everything from Stage 3 | — | The corporator visits the colony; tea with friends after the meeting |
| 7 | `w80-review` | Stage 3 Review · ధైర్యంగా మాట్లాడటం పునశ్చరణ | | | The checkpoint check (§2b), certificate and stage celebration |

---

# 6. Stage 4 — Fluent Everyday English · సులభంగా ఇంగ్లీష్ (Weeks 81–120)

Reordered 2026-11-09 (curriculum review).

**The learner can:** hold longer conversations, tell detailed stories, prepare for problems, get things done through others, follow announcements, news and talks, speak for a minute at a meeting, choose formal or informal English, say no nicely and bargain, and share advice from their own life. *(Checkpoints at Weeks 94, 107 and 120, §2b. Every week has a life theme; there are no grammar-only weeks.)*

| Week | Title | Grammar focus | Life topic / function |
|---|---|---|---|
| 81 | Catching Up with an Old Friend · పాత స్నేహితులతో కబుర్లు | present simple, continuous and perfect together | news about your life |
| 82 | The Train Had Left · రైలు వెళ్లిపోయింది | past perfect | travel mishaps: missed trains, late arrivals |
| 83 | Telling Longer Stories · పెద్ద కథలు చెప్పడం | narrative tenses together | stories from your town and your life |
| 84 | If I Had Known … · ముందే తెలిసుంటే … | third conditional (recognition-led) | lessons from mistakes: a scam, a missed check-up |
| 85 | Just in Case · ముందు జాగ్రత్తగా | unless, in case, as long as | being prepared: travel, power cuts, medicines |
| 86 | What Did They Ask? · వాళ్ళు ఏం అడిగారు? | reported questions and requests | pass on questions from an interview, the doctor or an office |
| 87 | Has It Been Sent? · పంపించారా? | passive in all tenses (has been sent, will be delivered) | follow up parcels, certificates and repairs |
| 88 | I Got It Repaired · రిపేర్ చేయించాను | causative have / get something done | the tailor, the mechanic, the electrician |
| 89 | Everyday Idioms · రోజువారీ idioms | common idioms (a piece of cake, under the weather) | the course's one idiom week |
| 90 | Make or Do? · Make ఆ, Do ఆ? | collocations: make / do, take / have | chores and errands |
| 91 | Phrasal Verbs with People · మనుషులతో phrasal verbs | phrasal verbs in context: get along, look after, bring up, give up, put off | friendships, plans and helping others |
| 92 | Health Insurance & Schemes · హెల్త్ ఇన్సూరెన్స్, పథకాలు | conditions and requirements (if, only if, as long as) | Aarogyasri, Ayushman Bharat, insurance claims |
| 93 | Making Decisions Together · కలిసి నిర్ణయం తీసుకోవడం | Should we …? Let's …; giving reasons | group decisions in the colony or a club |
| 94 | Checkpoint: Longer Talk · చెక్‌పాయింట్: పెద్ద సంభాషణలు | mixed; Fix-it clinic | Checkpoint 7 (§2b) |
| 95 | News & Society · వార్తలు, సమాజం | opinions with reasons; contrast | discuss local and national news |
| 96 | Village or City? · పల్లెటూరా, సిటీనా? | although, even though, despite, however, therefore | weigh two sides of a choice |
| 97 | Explaining Traditions · మన సంప్రదాయాలు | present simple passive; so that | describe customs to visitors |
| 98 | Indian Food & Culture · మన భోజనం, సంస్కృతి | describing in detail; sequence | dishes, festivals and arts in detail |
| 99 | Travel Experiences · ప్రయాణ అనుభవాలు | present perfect vs past simple; superlatives | the best trip of your life |
| 100 | Week 100: My English Journey · 100వ వారం: నా ఇంగ్లీష్ ప్రయాణం | mixed tenses | milestone: talk about how you learned English (a celebration week) |
| 101 | Announcements & Longer Talks · అనౌన్స్‌మెంట్లు, పెద్ద ప్రసంగాలు | following long listening; picking out key facts | stations, airports, hospital talks |
| 102 | Speaking for One Minute · ఒక నిమిషం మాట్లాడటం | structuring: first, also, finally | speak at a meeting or a club |
| 103 | Formal or Informal? · ఫార్మల్‌గానా, మామూలుగానా? | choosing tone | messages, calls and greetings for different people |
| 104 | Saying No Nicely · మర్యాదగా వద్దనడం | polite refusals | refuse requests, sales calls and invitations |
| 105 | Bargaining & Negotiating · బేరం, మాట్లాడి ఒప్పించడం | offers and counter-offers | rent, repairs, a big purchase |
| 106 | Solving Problems Together · కలిసి సమస్య తీర్చడం | What if we …? Why don't we …? | colony, club and community problems |
| 107 | Checkpoint: Speaking Up · చెక్‌పాయింట్: ధైర్యంగా చెప్పడం | mixed; Fix-it clinic | Checkpoint 8 (§2b) |
| 108 | Should Have, Could Have · అలా చేసుంటే … | modal perfects (should have to use; could / might have to recognise) | look back on mistakes |
| 109 | I'll Be Waiting · నేను ఎదురుచూస్తుంటాను | future continuous; future perfect recognition only | meeting at the station, travel days |
| 110 | Hope or Wish? · Hope ఆ, Wish ఆ? | hope vs wish | blessings and hopes for others |
| 111 | Both, Either, Neither · రెండూ, ఏదో ఒకటి, ఏదీ కాదు | quantifiers: few / little / both / either / neither | choosing between options |
| 112 | Describing Photos · ఫోటోలు చూసి చెప్పడం | there is; present continuous; might be | describe photos from a function or a trip |
| 113 | Clear Speech · స్పష్టంగా మాట్లాడటం | pronunciation: v / w, z, clusters, word stress | being understood on the phone and by people from elsewhere |
| 114 | Tone of Voice · మాట తీరు | intonation for questions, politeness and emphasis | sounding polite, never rude |
| 115 | Technology & Change · టెక్నాలజీ, మార్పులు | used to vs now; present perfect | how life has changed |
| 116 | Sharing Experience · అనుభవం పంచుకోవడం | If I were you …; What worked for me … | advise younger people from your own life |
| 117 | Folk Tales & Proverbs · జానపద కథలు, సామెతలు | narrative past; reported speech in stories | tell a folk tale or explain a proverb in English |
| 118 | Teaching Others · ఇతరులకు నేర్పించడం | imperatives and sequence; checking understanding | explain a recipe, a skill or a ritual |
| 119 | Stories from My Life · నా జీవితంలో సంఘటనలు | narrative tenses; linking words | a two-minute talk about something that happened to you |
| 120 | Checkpoint: Stage 4 Review · చెక్‌పాయింట్: సులభంగా ఇంగ్లీష్ పునశ్చరణ | mixed; Fix-it clinic | Checkpoint 9 (§2b) |

*Changes from the old map:*
- **Themed:** every old grammar-only week now has a life theme (81, 82, 84, 85, 86, 87, 90, 91, 96, 108, 109, 111).
- **Merged:** Everyday Idioms I + II + Idioms About Feelings (old 89 + 90 + 126 → 89); Phrasal Verbs II + III + IV (old 69 + 92 + 125 → 91).
- **Moved:** Make or Do 91 → 90, Health Systems 93 → 92, Making Decisions 94 → 93, Describing Pictures 107 → 112, Clear Sounds 114 → 113, Tone of Voice 115 → 114, Technology & Change 118 → 115, Sharing Experience 119 → 116; Teaching Others came in from old 145 (→ 118).
- **New:** Folk Tales & Proverbs (117), Stories from My Life (119), checkpoints (94, 107).
- **Dropped as weeks:** Articles Again and In, On, At Again (old 112, 113) became the Fix-it strand and the clinics in every checkpoint. Better Phone & Video Calls (old 116) went into Weeks 19 and 20. Small Talk (old 117) moved to Week 34.

Lesson detail, week by week (detailed 2026-11-10, BUILD_PLAN E1). Each week is written from its table with CONTENT_PLAYBOOK; check facts and sensitivity notes in the week line before writing.

## Week 81 — Catching Up with an Old Friend · పాత స్నేహితులతో కబుర్లు

*Recycles present simple (7), present perfect (31, 43) and present perfect continuous (53), now together. Fix-it: 7 (I am knowing), 8 (I am here since), 2 (he / she + s). Read it: a WhatsApp message from an old classmate.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `old-friend-these-days` | What Are You Doing These Days? · ఈ మధ్య ఏం చేస్తున్నారు? | present continuous for these days vs present simple for routines; these days, nowadays | What are you doing these days? I usually walk in the morning, but these days I walk in the evening. | Meeting a school friend, Gopal, by chance at the Vijayawada bus stand |
| 2 | `old-friend-ive-moved` | I've Moved to Guntur · గుంటూరుకి మారిపోయాను | present perfect for life news: I've moved, I've retired, I've started | I've moved to Guntur and I've started a small tiffin centre. Have you retired yet? | A phone call with an old colleague, Salma, after ten years |
| 3 | `old-friend-how-long` | How Long Have You Been There? · ఎన్నాళ్ళుగా అక్కడ ఉంటున్నారు? | present perfect simple and continuous with since / for (Fix-it 8) | How long have you been living in Hyderabad? I've known Mary since our college days. | Catching up with a former neighbour at a wedding reception |
| 4 | `old-friend-i-know-him-well` | I Know Him Well · ఆయన నాకు బాగా తెలుసు | contrast: state verbs never take -ing (know, remember, own, need) vs action verbs (Fix-it 7) | I still remember your old house near the temple. I know him well, and I'm meeting him tomorrow. | Looking at an old class photo with Kumar at his shop |
| 5 | `old-friend-whats-new-with-you` | So, What's New with You? · మీ విశేషాలేంటి? | all three together in a long catch-up; keeping it going: Really? What about you? | I've been keeping busy, and I go to yoga three days a week now. What about you? Are you still with the bank? | Catching up with Anitha over filter coffee in Visakhapatnam |
| 6 | `w81-conversation` | Conversation Day: The School Reunion · స్కూల్ రీయూనియన్ | all of the week | — | Meeting old classmates at the school's golden jubilee; calling a friend you lost touch with |
| 7 | `w81-review` | Review | | | |

## Week 82 — The Train Had Left · రైలు వెళ్లిపోయింది

*Introduces the past perfect through travel mishaps; recycles past simple and past continuous (24, 41) and station words (15, 55). Fix-it: 6 (reach the station, not reach to), 3, 4. Read it: a PNR status message that changes from Waitlisted to Confirmed.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `train-had-already-left` | The Train Had Already Left · రైలు అప్పటికే వెళ్లిపోయింది | past perfect: when I got there, it had already left | When I reached the station, the train had already left. By the time we got there, the last bus had gone. | Telling the station master at Rajahmundry that you missed your train |
| 2 | `train-had-forgotten-ticket` | I Had Forgotten My Ticket · టికెట్ ఇంట్లోనే మర్చిపోయాను | past perfect for the earlier cause: I realised I had … | I realised I had left my ticket at home. Halfway there, I remembered I hadn't locked the door. | Explaining to the TTE that you had booked online but your phone battery had died |
| 3 | `train-before-after-by-the-time` | Before, After, By the Time · ముందు, తర్వాత, అప్పటికి | ordering two past events; past simple is enough with before and after | The bus had left before I arrived. After I bought the ticket, I found a seat near the window. | A friend asks how the night bus to Hyderabad went |
| 4 | `train-had-you-booked` | Had You Booked a Seat? · సీటు ముందే బుక్ చేశారా? | contrast: past perfect questions and negatives vs past simple | Had you booked a lower berth? We hadn't checked the platform, so we went to the wrong one. | A hotel clerk in Tirupati checks a booking that had not gone through |
| 5 | `train-what-a-journey` | What a Journey! · అబ్బ, ఏం ప్రయాణం! | telling a travel mishap in order with past simple, continuous and perfect | We were waiting on platform four when they announced a change. By the time we reached Warangal, the function had finished. | Telling a friend, Prasad, about a long journey to Kurnool |
| 6 | `w82-conversation` | Conversation Day: Stuck at the Station · స్టేషన్‌లో ఇరుక్కుపోయాం | all of the week | — | Asking for a refund at the reservation counter after missing a train; calling the friend who is waiting to say you'll be late |
| 7 | `w82-review` | Review | | | |

## Week 83 — Telling Longer Stories · పెద్ద కథలు చెప్పడం

*Recycles past continuous (24, 41) and the past perfect (82); stories run longer and reuse Week 41's sequence words. Fix-it: 9, 10, 5. Read it: a short local news item about a flood rescue.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `story-it-all-started` | It All Started When … · అసలు ఏం జరిగిందంటే | setting the scene: past continuous for the background | It was raining heavily and the streets were empty. I was walking back from the market when the lights went out. | Starting a story for friends at the library reading room |
| 2 | `story-and-then-suddenly` | And Then, Suddenly · అంతలో, ఉన్నట్టుండి | moving a story on: suddenly, just then, a moment later, in the end | Just then, a cow walked into the shop. A moment later, everyone was laughing. | Telling a neighbour about a funny morning at the vegetable market |
| 3 | `story-id-never-seen-anything` | I'd Never Seen Anything Like It · అలాంటిది ఎప్పుడూ చూడలేదు | past perfect for the back story inside a story | I had never seen so much water on our street. Nobody had warned us about the flood. | Telling a friend about the 2020 Hyderabad floods |
| 4 | `story-you-wont-believe` | You Won't Believe What Happened · ఏం జరిగిందో తెలుసా? | contrast teller and listener: reacting and asking (Really? Then what happened?) | You won't believe what happened at the bank today. Oh no! So what did you do? | Listening to a friend's story and keeping it going |
| 5 | `story-from-my-town` | A Story from My Town · మా ఊరి కథ | a full story from your town: beginning, middle and end | Years ago, a huge banyan tree fell across the main road in our village. The whole village worked together and cleared it by evening. | Telling a visitor a true story about your town |
| 6 | `w83-conversation` | Conversation Day: Stories on the Night Bus · రాత్రి బస్సులో కథలు | all of the week | — | Swapping stories with a fellow passenger; the story of a lost purse that came back |
| 7 | `w83-review` | Review | | | |

## Week 84 — If I Had Known … · ముందే తెలిసుంటే …

*The third conditional is recognition-led (§2 rule 4): learners choose it and use two chunks, If I had known … and I wouldn't have … Recycles the second conditional (69), I should have (70) and scams (21). Losses are told kindly, with no blame. Fix-it: 8, 4, 6. Read it: a bank SMS warning about fake KYC links.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `if-known-i-would-have-come` | If I Had Known · ముందే తెలిసుంటే | recognising the third conditional: If I had known, I would have … | If I had known you were in town, I would have come to see you. If we had left earlier, we would have caught the bus. | A friend was in hospital last week and you heard only today |
| 2 | `if-known-it-was-a-scam` | If I Had Known It Was a Scam · మోసం అని తెలిసుంటే | I wouldn't have + past participle, about a scam | If I had known it was a scam, I wouldn't have clicked the link. Mohan wouldn't have lost the money if he hadn't shared the OTP. | Helping a neighbour, Mohan, report a UPI fraud at the bank |
| 3 | `if-known-the-missed-checkup` | The Check-Up I Missed · చేయించుకోని చెకప్ | third conditional next to I should have, about health | If I had gone for the check-up, the doctor would have found it earlier. I should have checked my sugar every month. | The doctor explains what a regular check-up would have caught |
| 4 | `if-known-three-kinds-of-if` | If It Rains, If It Had Rained · మూడు రకాల If | contrast first, second and third conditionals: real future, imagined now, imagined past | If it rains tomorrow, I'll stay home. If it hadn't rained yesterday, we would have gone to the fair. | Planning a trip with a friend, Fatima, after last year's trip went wrong |
| 5 | `if-known-lessons-learned` | What I Learned · నేర్చుకున్న పాఠం | from a mistake to a habit: Now I always …, Next time I'll … | Now I always read the bill before I pay. Next time, I'll ask the doctor for a written plan. | Sharing a lesson with a young neighbour at the bus stop |
| 6 | `w84-conversation` | Conversation Day: Lessons from Mistakes · తప్పుల నుండి పాఠాలు | all of the week | — | Telling the bank manager what happened after a fake KYC call; talking a friend through a lost-phone scare |
| 7 | `w84-review` | Review | | | |

## Week 85 — Just in Case · ముందు జాగ్రత్తగా

*Recycles the first conditional (48), should and must (37, 68) and weather warnings (25). Fix-it: 1, 3, 5. Read it: a power shutdown notice from the electricity department.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `just-in-case-take-an-umbrella` | Take It Just in Case · ఎందుకైనా మంచిది, తీసుకెళ్ళండి | in case + present for being prepared | Take an umbrella in case it rains. I always carry a copy of my Aadhaar in case I need it. | Packing for a trip to Araku with a friend, Ramesh |
| 2 | `just-in-case-unless` | Unless … · … అయితే తప్ప | unless = if not | Don't open the link unless you know the sender. The pharmacy won't give it unless you show the prescription. | Asking a pharmacist for an antibiotic without a prescription |
| 3 | `just-in-case-as-long-as` | As Long As … · … అయితే చాలు | as long as for conditions | You can borrow my scooter as long as you bring it back by six. The milk stays fresh as long as it's in the fridge. | Lending a neighbour your scooter, with conditions |
| 4 | `just-in-case-or-if` | In Case or If? · In case ఆ, If ఆ? | contrast: in case (prepare before) vs if (act when it happens) | Keep a torch ready in case the power goes. If the power goes, call this number. | The colony secretary, Geetha, explains the plan for a cyclone warning |
| 5 | `just-in-case-emergency-kit` | My Emergency Kit · నా ఎమర్జెన్సీ కిట్ | planning ahead with all three: medicines, numbers, documents | I keep a week's tablets extra, in case the shop is closed. Unless it's an emergency, call the clinic before you go. | Getting a pharmacist's advice before a long train trip |
| 6 | `w85-conversation` | Conversation Day: The Cyclone Is Coming · తుఫాను వస్తోంది | all of the week | — | Getting the house and an elderly neighbour ready for a cyclone; stocking up at the kirana shop |
| 7 | `w85-review` | Review | | | |

## Week 86 — What Did They Ask? · వాళ్ళు ఏం అడిగారు?

*Recycles reported statements (57) and indirect questions (58); reported questions keep statement order, so Fix-it 3 leads. Fix-it: 3, 2, 10. Read it: a courier's "Sorry we missed you" note.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `they-asked-if-i-had-eaten` | She Asked If I Had Eaten · తిన్నారా అని అడిగారు | reported yes / no questions with if and whether | The nurse asked if I had eaten anything. He asked whether I had my Aadhaar card. | Telling a friend what the hospital desk asked |
| 2 | `they-asked-where-i-lived` | He Asked Where I Lived · ఎక్కడ ఉంటారని అడిగారు | reported wh- questions in statement order (Fix-it 3) | The officer asked where I lived and how long I had lived there. She asked me what time the shop opened. | Passing a survey worker's questions on to a neighbour |
| 3 | `they-told-me-to-bring-photos` | They Told Me to Bring Photos · ఫోటోలు తీసుకురమ్మన్నారు | reported requests and orders: told me to, asked me not to | The clerk told me to bring two photos. The doctor asked me not to eat after ten at night. | Passing the office's instructions on to a neighbour, Radha |
| 4 | `they-asked-told-or-said` | Asked, Told or Said? · asked, told, said తేడా | contrast said, told someone and asked | He said he was busy, and he told me to call later. She asked me to wait and said the manager was coming. | Clearing up a message mix-up with a friend |
| 5 | `they-asked-at-the-interview` | At the Interview · ఇంటర్వ్యూలో ఏం అడిగారంటే | retelling an interview: questions and requests together | They asked why I wanted the job and when I could start. In the end, they asked me to send my certificates by email. | Telling a friend about an interview for a part-time or volunteer post at the library |
| 6 | `w86-conversation` | Conversation Day: The Doctor's Questions · డాక్టర్ అడిగిన ప్రశ్నలు | all of the week | — | Telling a pharmacist what the doctor asked and told you; passing a bank officer's questions to a neighbour who couldn't come |
| 7 | `w86-review` | Review | | | |

## Week 87 — Has It Been Sent? · పంపించారా?

*Recycles the passive (56, 63, 74, 75), Week 28's follow-ups and Week 49's tracking words. Fix-it: 4, 6, 8. Read it: a tracking page that says "Out for delivery".*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `has-been-sent-the-parcel` | It Has Been Sent · పంపించేశారు | present perfect passive: has been sent, hasn't been delivered | Your parcel has been sent, but it hasn't been delivered yet. Has my complaint been registered? | Calling the courier about a late parcel |
| 2 | `has-been-sent-will-be-ready` | It Will Be Ready on Friday · శుక్రవారానికి రెడీ అవుతుంది | future passive: will be delivered, will be issued | Your income certificate will be issued on Friday. The new meter will be installed next week. | Asking at Mee Seva when a certificate will be issued |
| 3 | `has-been-sent-being-repaired` | It's Being Repaired · రిపేర్ జరుగుతోంది | present continuous passive: is being repaired, is being checked | Your phone is being repaired right now. The road outside is being dug up for new pipes. | Asking at a mobile service centre about your phone |
| 4 | `has-been-sent-was-or-has-been` | Was Sent or Has Been Sent? · ఎప్పుడు పంపారు, పంపారా? | contrast past simple passive (with a time) vs present perfect passive (news, no time) | The cheque was deposited on Monday. Has the amount been credited yet? | Checking a refund that hasn't been credited at the bank |
| 5 | `has-been-sent-following-up` | Following Up Firmly · గట్టిగా, మర్యాదగా ఫాలో అప్ | mixed passive in a firm, polite follow-up | I was told it would be done in a week, but nothing has been done. Could you tell me when it will be fixed? | Following up a streetlight complaint with the municipal office |
| 6 | `w87-conversation` | Conversation Day: Where Is My Certificate? · నా సర్టిఫికెట్ ఎక్కడ? | all of the week | — | Following up a name correction at the ward secretariat; a courier call about a parcel sent to the wrong address |
| 7 | `w87-review` | Review | | | |

## Week 88 — I Got It Repaired · రిపేర్ చేయించాను

*Introduces the causative; recycles the passive (87), repairs (29) and the tailor (44). Fix-it: 6, 7, 2. Read it: a service bill with labour and parts.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `got-it-done-scooter-serviced` | I Got My Scooter Serviced · స్కూటర్ సర్వీస్ చేయించాను | get + thing + past participle, in the past | I got my scooter serviced last week. Where did you get your watch repaired? | At Imran's two-wheeler workshop |
| 2 | `got-it-done-having-it-painted` | I'm Having It Painted · పెయింట్ వేయిస్తున్నాను | have something done for plans: I'm having, I'll have | I'm having my kitchen painted next week. We're having the colony water tank cleaned on Sunday. | Arranging with an electrician, Kavitha, to have the wiring checked |
| 3 | `got-it-done-myself-or-someone` | Myself or Someone Else? · నేనే చేశానా, చేయించానా? | contrast: I fixed it (myself) vs I got it fixed (by someone) | I repaired the tap myself, but I got the fan fixed by an electrician. I had my eyes tested yesterday. | Chatting with a friend about jobs around the house |
| 4 | `got-it-done-at-the-tailor` | Getting It Altered · ఆల్టర్ చేయించడం | causative with the tailor: by when, how much | I need to get this kurta shortened. Can I get these trousers altered by Saturday? | At a tailor's shop in Nellore with a shirt that is too loose |
| 5 | `got-it-done-how-much` | How Much to Get It Fixed? · రిపేర్ చేయించడానికి ఎంత? | asking cost and time; comparing two quotes | How much will it cost to get the fridge repaired? It's cheaper to get it fixed than to buy a new one. | Comparing two quotes for a fridge repair |
| 6 | `w88-conversation` | Conversation Day: Getting Ready for Ugadi · ఉగాదికి ఇల్లు సిద్ధం | all of the week | — | Having the house painted and the fans cleaned; collecting clothes from the tailor and glasses from the optician |
| 7 | `w88-review` | Review | | | |

## Week 89 — Everyday Idioms · రోజువారీ idioms

*The course's one idiom week (about 20 idioms, including feelings from old Week 126), always taught in a scene and checked by meaning, never word by word. Recycles phrasal verbs (66) and small talk (34). Fix-it: 10, 3, 1. Read it: a friend's WhatsApp message with an idiom in it.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `idioms-a-piece-of-cake` | A Piece of Cake · చాలా ఈజీ | easy and hard: a piece of cake, easier said than done, get the hang of it | The online form was a piece of cake. Giving up sugar is easier said than done. | A friend asks how your passport renewal went |
| 2 | `idioms-under-the-weather` | Under the Weather · ఒంట్లో కొంచెం బాలేదు | health and feelings: under the weather, on cloud nine, fed up, back on my feet | I'm a bit under the weather today. Kavitha was on cloud nine after her exam results. | Calling a friend who missed the walking group |
| 3 | `idioms-once-in-a-blue-moon` | Once in a Blue Moon · ఎప్పుడో ఒకసారి | time and money: once in a blue moon, in no time, cost an arm and a leg | I eat sweets once in a blue moon. Hospital bills can cost an arm and a leg. | Chatting with a shopkeeper, Joseph, about prices |
| 4 | `idioms-in-the-same-boat` | In the Same Boat · మనందరిదీ ఒకటే పరిస్థితి | people: in the same boat, break the ice, see eye to eye, keep in touch | We're all in the same boat with these power cuts. Let's keep in touch after the course. | Meeting new people on the first day of a yoga class |
| 5 | `idioms-or-literal-meaning` | Idiom or Not? · మాట అర్థమా, భావమా? | contrast idioms and literal meaning; idioms for friendly talk, not formal letters | Don't worry, it's not the end of the world. I'll keep an eye on your house while you're away. | Explaining an idiom from an English film to a friend |
| 6 | `w89-conversation` | Conversation Day: Friends at the Library · లైబ్రరీలో స్నేహితులు | all of the week | — | Friends talk about a tough week using idioms; a neighbour asks what an idiom on the news meant |
| 7 | `w89-review` | Review | | | |

## Week 90 — Make or Do? · Make ఆ, Do ఆ?

*Collocations in errands, never as lists; recycles have / has (4), chores and phrasal verbs at home (66). "Take rest" and "do the needful" come back as Don't say / Say. Fix-it: 10, 6, 4. Read it: a to-do list on a fridge door.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `make-do-the-shopping` | Do the Shopping, Make a List · do, make | do for jobs (do the shopping, do the dishes); make for creating (make tea, make a list) | I do the shopping on Saturdays and make a list the night before. Who's making the tea today? | Sharing jobs with a friend before a small get-together |
| 2 | `make-do-a-mistake-a-favour` | Make a Mistake, Do a Favour · తప్పు చేయడం, సహాయం చేయడం | make a mistake, a complaint, a decision, an appointment; do a favour, do your best | I made a mistake in the form. Could you do me a favour and post this letter? | Asking a neighbour, Srinivas, for a favour |
| 3 | `make-do-take-a-bus` | Take a Bus, Take Your Time · take తో మాటలు | take a bus, take medicine, take a photo, take time, take a break | Take your medicine after food. It takes about two hours to get to Khammam. | Asking the way to a new clinic |
| 4 | `make-do-have-lunch-get-rest` | Have Lunch, Get Some Rest · have, get | contrast take and have: have lunch, have a bath, get some rest (not "take breakfast", "take rest") | Have you had lunch? You should get some rest this afternoon. | The doctor's advice about meals and rest |
| 5 | `make-do-a-busy-saturday` | A Busy Saturday · పనుల శనివారం | all the week's collocations in a day of errands | I made an appointment, did some banking and had lunch with Rani. I took a lot of photos at the book fair. | Telling a friend about a busy Saturday |
| 6 | `w90-conversation` | Conversation Day: Errands Before a Trip · ప్రయాణానికి ముందు పనులు | all of the week | — | Making a list and sharing errands with a friend before a trip; making a complaint at the bank about a wrong charge |
| 7 | `w90-review` | Review | | | |

## Week 91 — Phrasal Verbs with People · మనుషులతో phrasal verbs

*Old Phrasal Verbs II–IV merged; recycles phrasal verbs at home (66) and the present perfect (31). "Bring up" is taught as raising a topic and "I was brought up in", never about children. Fix-it: 7, 5, 9. Read it: a club notice, "The meeting has been put off to Sunday."*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `phrasal-people-get-along` | We Get Along Well · బాగా కలిసిపోతాం | get along with, fall out, make up | I get along well with my new neighbours. They fell out last year, but they've made up now. | Talking about the people in your walking group |
| 2 | `phrasal-people-look-after` | Look After, Look Up To · చూసుకోవడం, గౌరవించడం | look after, take care of, look up to, look out for | Could you look after my plants while I'm away? Everyone in our colony looks up to Dr Prasad. | Asking a neighbour to look after your house for a week |
| 3 | `phrasal-people-put-it-off` | Let's Not Put It Off · వాయిదా వేయొద్దు | put off, call off, carry on, go ahead with | Let's not put off the meeting again. The match was called off because of the rain. | Rescheduling a club meeting with the secretary, Ruth |
| 4 | `phrasal-people-gave-up-sugar` | I Gave Up Sugar · షుగర్ మానేశాను | give up, take up, cut down on, keep up; contrast where the object goes (give it up, look after him) | I gave up sugar in my tea last year. I've taken up yoga, and I'm trying to keep it up. | Encouraging a friend, Narayana, who wants to give up smoking |
| 5 | `phrasal-people-count-on-me` | You Can Count on Me · నా మీద ఆధారపడొచ్చు | helping others: count on, bring up a topic, turn down, let down | You can count on me for Sunday. Can I bring something up at the meeting? | Asking friends to help at a book drive for the government school library |
| 6 | `w91-conversation` | Conversation Day: Helping Satish Move House · సతీష్ ఇల్లు మారుతున్నారు | all of the week | — | Helping a friend, Satish, pack and move; asking a neighbour to look after your dog while you travel |
| 7 | `w91-review` | Review | | | |

## Week 92 — Health Insurance & Schemes · హెల్త్ ఇన్సూరెన్స్, పథకాలు

*Recycles conditions (85), have to (52), official letters (63) and the hospital stay (52). Scheme rules change, so lessons teach how to ask and avoid fixed amounts except well-known ones; scenes are for the learner or a neighbour. Fix-it: 4, 8, 6. Read it: a health card with a policy number and a valid-till date.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `insurance-am-i-covered` | Am I Covered? · నాకు వర్తిస్తుందా? | asking about cover: Is it covered? What does it cover? | Is cataract surgery covered under my policy? The policy covers hospital stays, but not regular check-ups. | Calling an insurance helpline |
| 2 | `insurance-only-if-admitted` | Only If You Are Admitted · అడ్మిట్ అయితేనే | if, only if, as long as for scheme conditions | You can claim only if you are admitted for at least a day. The card works as long as the hospital is on the list. | Asking the Aarogyamitra at the hospital about the Aarogyasri scheme |
| 3 | `insurance-which-documents` | Which Documents Do I Need? · ఏ పేపర్లు కావాలి? | requirements: You'll need …, Make sure you … | You'll need your Aadhaar, the ration card and the doctor's letter. Make sure you keep all the original bills. | Applying for an Ayushman Bharat card at a common service centre |
| 4 | `insurance-cashless-or-claim` | Cashless or Claim Later? · క్యాష్‌లెస్ ఆ, తర్వాత క్లెయిమా? | contrast cashless (the insurer pays the hospital) and reimbursement (you pay, then claim) | With cashless, the bill is paid directly by the insurance company. If it's not a network hospital, you pay first and claim later. | A friend, Usha, explains which hospital to choose |
| 5 | `insurance-claim-was-rejected` | My Claim Was Rejected · క్లెయిమ్ రిజెక్ట్ అయింది | following up a claim: passive and reported speech | My claim was rejected because one bill was missing. Could you tell me exactly what I need to send again? | Following up a rejected claim on the phone |
| 6 | `w92-conversation` | Conversation Day: At the Hospital Insurance Desk · ఆసుపత్రిలో ఇన్సూరెన్స్ డెస్క్ | all of the week | — | Helping a neighbour, Rahim, use his Aarogyasri card for an operation; renewing a health policy with an agent |
| 7 | `w92-review` | Review | | | |

## Week 93 — Making Decisions Together · కలిసి నిర్ణయం తీసుకోవడం

*Deepens Week 33's colony meeting into a full decision; recycles suggestions (38), opinions (46), comparing (47) and persuading (79). Fix-it: 3, 6 (discuss about), 2. Read it: a poll in the colony WhatsApp group.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `decide-together-should-we` | Should We or Shouldn't We? · చేద్దామా, వద్దా? | putting a choice to a group: Should we …? Shall we …? | Should we collect money for a new water filter? Shall we vote on it at the next meeting? | Raising an idea at the walkers' club |
| 2 | `decide-together-main-reason` | The Main Reason Is … · ముఖ్య కారణం ఏంటంటే | giving reasons: The main reason is, For one thing, Besides | The main reason is safety, especially at night. Besides, it will save money in the long run. | Giving reasons for CCTV cameras at a colony meeting |
| 3 | `decide-together-what-do-you-think` | What Do You All Think? · మీరందరూ ఏమంటారు? | asking others: How do you feel about …? Does anyone have a better idea? | How do you feel about moving the meeting to Sunday? Does anyone have a better idea? | Chairing a short meeting of the library committee |
| 4 | `decide-together-fair-point-but` | Fair Point, But … · నిజమే, కానీ … | contrast agreeing fully, partly and not; finding a middle way | That's a fair point, but the cost is too high. Why don't we try it for one month and then decide? | Finding a middle way on the Ganesh festival budget |
| 5 | `decide-together-weve-decided` | So, We've Decided · మొత్తానికి ఇదీ నిర్ణయం | summing up and next steps: So we've agreed …, Who will …? | So we've agreed to hire a security guard from next month. Who will talk to the agency, and by when? | Summing up the decisions at the end of a meeting |
| 6 | `w93-conversation` | Conversation Day: Planning the New Year Get-Together · న్యూ ఇయర్ గెట్-టుగెదర్ ప్లాన్ | all of the week | — | Deciding the date, food and budget with the committee; choosing between two places for a club trip |
| 7 | `w93-review` | Review | | | |

## Week 94 — Checkpoint: Longer Talk · చెక్‌పాయింట్: పెద్ద సంభాషణలు

*Checkpoint week (§2b): mixed review of Weeks 81–93, a Fix-it clinic and the 2-minute speaking mission (a time things went wrong).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `longer-talk-catching-up-again` | Catching Up Again · మళ్ళీ కలిసినప్పుడు | mixed: present tenses together, past perfect, reported questions | I've been meaning to call you. When I called last time, you had just left for Chennai. | Meeting a former colleague, Venkat, in a bank queue |
| 2 | `longer-talk-ready-for-anything` | Ready for Anything · దేనికైనా సిద్ధం | mixed: in case, unless, as long as; insurance and schemes | Keep the health card in your bag in case you need it. They won't refund it unless the bill is in your name. | Helping a friend, Sita, prepare medicines and documents for a pilgrimage |
| 3 | `longer-talk-getting-it-done` | Getting It Done · పని చేయించడం | mixed: passive, causative, make and do, phrasal verbs | I had the meter checked, but the bill still hasn't been corrected. Could you do me a favour and follow it up? | Sorting out a high electricity bill with the lineman and the office |
| 4 | `fix-it-clinic-6` | Fix-It Clinic · తప్పులు సరిచేసుకుందాం | the ten Fix-it errors (§2) in Weeks 81–93 sentences | I have known him since 1990. She asked where I lived. We discussed the budget. | Checking a friend's voice message to the association before it goes out |
| 5 | `longer-talk-things-went-wrong` | A Time Things Went Wrong · అనుకున్నది జరగనప్పుడు | speaking mission: narrative tenses, past perfect, If I had known; 2 minutes | We had planned everything, but on the day of the trip it started pouring. If I had checked the forecast, I would have changed the date. | Telling a friend, Grace, about a day that went wrong, for two minutes |
| 6 | `w94-conversation` | Conversation Day: A Long Afternoon Chat · సాయంత్రం దాకా కబుర్లు | Weeks 81–93 | — | An old friend visits and you swap news and stories; planning a trip and a repair together |
| 7 | `w94-review` | Checkpoint · చెక్‌పాయింట్ | | | The checkpoint check (§2b) and certificate |

## Week 95 — News & Society · వార్తలు, సమాజం

*Recycles opinions (46), headlines (61) and reported speech (57, 86). News talk stays respectful and general: no party politics, religion or caste debates. Fix-it: 6 (discuss about), 3, 4. Read it: a newspaper item, "Water supply to be stopped for two days in Ward 12".*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `news-society-did-you-read` | Did You Read About …? · … గురించి చదివారా? | starting a news chat: Did you see …? According to the paper … | Did you read about the new flyover in Kurnool? According to the news, vegetable prices will fall next month. | Talking about the morning paper with a neighbour, Imran |
| 2 | `news-society-in-my-view` | In My View · నా ఉద్దేశంలో | opinions with reasons: In my view, The way I see it, That's why | In my view, the new bus route is a good idea, because many people need it. The way I see it, the town needs more parks, not more malls. | Discussing a new rule at the library reading room |
| 3 | `news-society-on-the-other-hand` | But On the Other Hand · కానీ మరోవైపు | contrast: but, while, whereas, on the other hand (as a chunk) | Online services save time, but on the other hand, many people find them hard. Prices have gone up, while pensions have stayed the same. | Talking about the new parking fee with a shopkeeper, Padma |
| 4 | `news-society-fact-or-rumour` | Is That True? · నిజమేనా? | contrast fact and opinion; checking a forward: Where did you hear that? | Where did you read that? It might be a fake forward. The message says the bank is closing, but the bank says it isn't true. | Checking a WhatsApp forward with a friend before sharing it |
| 5 | `news-society-what-people-say` | What People Are Saying · జనం ఏమంటున్నారంటే | reporting different views: Some people say …, Others feel …, Most people agree … | Some people say the new market is too far, but others like the parking. Most people agree the roads have improved. | Telling a visiting relative what people in town think of the new bus stand |
| 6 | `w95-conversation` | Conversation Day: The Morning Paper at the Library · లైబ్రరీలో పొద్దున పేపర్ | all of the week | — | Discussing a news story about the water shortage with other readers; a calm chat about rising prices at the bus stop |
| 7 | `w95-review` | Review | | | |

## Week 96 — Village or City? · పల్లెటూరా, సిటీనా?

*Introduces the higher connectors (spiral: 12, 50, 96, 128); recycles comparatives (45, 47), the second conditional (69) and then-and-now (71). Fix-it: 5, 7, 6. Read it: a flat advertisement, "2BHK, 1,100 sq ft, near bus stand".*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `village-city-although` | Although It's Quiet · ప్రశాంతంగా ఉన్నా కూడా | although and even though + a sentence | Although the village is quiet, there's no good hospital nearby. Even though the city is crowded, everything is close by. | A friend, Usha, is thinking of moving back to her village |
| 2 | `village-city-despite-the-traffic` | Despite the Traffic · ట్రాఫిక్ ఉన్నా సరే | despite and in spite of + a noun or -ing | Despite the traffic, I like living in Hyderabad. In spite of the heat, the mornings in the village are fresh. | Talking to a cab driver about city life |
| 3 | `village-city-however-therefore` | However, Therefore · అయినా, అందుకే | however and therefore to link two sentences | The rent is lower in the village. However, there are fewer buses. The house is close to the hospital; therefore, it suits me. | Explaining your choice of house to a property agent |
| 4 | `village-city-but-or-despite` | But, Although or Despite? · ఏది ఎక్కడ వాడాలి? | contrast the connectors and what follows each; never "although … but" | Although it was raining, we went to the fair. Despite the rain, the fair was crowded. | Telling a neighbour about a weekend at the village fair |
| 5 | `village-city-where-would-i-live` | Where Would I Live? · ఎక్కడ ఉంటే బాగుంటుంది? | weighing both sides and deciding, with the second conditional | If I had the choice, I'd live in a small town near a big city. The city has better hospitals; therefore, many retired people move there. | A friendly debate at the senior citizens' club: village or city? |
| 6 | `w96-conversation` | Conversation Day: Moving or Staying? · మారాలా, ఉండాలా? | all of the week | — | A friend weighs selling a village house; a property agent shows a flat in Vijayawada |
| 7 | `w96-review` | Review | | | |

## Week 97 — Explaining Traditions · మన సంప్రదాయాలు

*Deepens Week 32 from what we do to why; recycles the passive (56, 87). Hindu, Muslim and Christian customs get equal, respectful space. Fix-it: 4, 2, 1. Read it: a notice board with festival timings at a temple or church.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `traditions-is-celebrated` | It Is Celebrated in January · జనవరిలో జరుపుకుంటారు | present simple passive for customs: is celebrated, are drawn, is made | Sankranti is celebrated over three days in January. Muggulu are drawn in front of every house. | Explaining Sankranti to a visitor from Delhi staying next door |
| 2 | `traditions-so-that` | So That They Can Fast · ఉపవాసం ఉండటానికి | purpose: so that, to, in order to | During Ramzan, people eat sehri before dawn so that they can fast all day. Mango leaves are tied at the door to welcome good luck. | A neighbour, Ayesha, explains the Ramzan fast and iftar |
| 3 | `traditions-why-do-people` | Why Do People Do That? · అలా ఎందుకు చేస్తారు? | asking about customs respectfully; It's believed that …, It's a way of … | Why do people break a coconut before starting something new? It's believed to bring good luck. | A foreign tourist asks about customs at Srikalahasti |
| 4 | `traditions-is-it-still-done` | Is It Still Done? · ఇప్పుడు కూడా చేస్తున్నారా? | contrast present passive (is still done) and the past (used to be, was) | Bommala koluvu is still kept in many homes for Dasara. Weddings used to last five days, but now they're over in one. | Talking with a young neighbour about how weddings have changed |
| 5 | `traditions-our-festivals-explained` | Our Festivals, Explained · మన పండుగల గురించి | explaining one festival fully: when, what is done, why | Bathukamma is celebrated by women in Telangana with flowers and songs. At Christmas, stars are hung outside homes and cakes are shared with neighbours. | Explaining Christmas in your colony to a visitor, with a neighbour, David |
| 6 | `w97-conversation` | Conversation Day: A Visitor at Festival Time · పండుగ రోజు అతిథి | all of the week | — | Showing a foreign visitor around during Dasara; explaining Bonalu to a new neighbour from Chennai |
| 7 | `w97-review` | Review | | | |

## Week 98 — Indian Food & Culture · మన భోజనం, సంస్కృతి

*Describing, not hosting (Week 64) or teaching (Week 118); recycles sequence words (41, 74), the passive (97) and comparatives. Fix-it: 5 (uncountables: rice, curd), 4, 7. Read it: a restaurant menu with regional dishes.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `food-culture-sour-and-spicy` | It's Sour and Spicy · పుల్లగా, కారంగా | describing taste and texture: tangy, spicy, crisp, mild, rich | Gongura pachadi is sour and spicy, and it goes well with hot rice. Pootharekulu are thin, sweet and melt in your mouth. | Explaining Andhra dishes to a tourist at a restaurant |
| 2 | `food-culture-made-from` | It's Made from Green Gram · పెసలతో చేస్తారు | made from, made with, served with | Pesarattu is made from green gram and served with ginger chutney. Haleem is made with meat, wheat and lentils and cooked for hours. | At a haleem stall in Hyderabad during Ramzan |
| 3 | `food-culture-fried-then-dipped` | First Fried, Then Dipped · ముందు వేయించి, తర్వాత పాకంలో | sequence in describing how a famous sweet is made (passive) | First, the dough is rolled into layers and fried until golden. Then the kaja is dipped in sugar syrup and left to soak. | Telling a visitor from Bengaluru how Kakinada kaja is made |
| 4 | `food-culture-kuchipudi-kalamkari` | Kuchipudi and Kalamkari · కూచిపూడి, కలంకారి | describing arts and crafts: famous for, known for, handmade, traditional | Kuchipudi is a classical dance named after a village in Krishna district. Kalamkari cloth is painted by hand with natural colours. | At a handicrafts fair at Shilparamam with a stall owner, Raju |
| 5 | `food-culture-andhra-or-hyderabadi` | Andhra Food or Hyderabadi? · ఆంధ్రా భోజనమా, హైదరాబాదీనా? | contrast and compare in detail: whereas, while, compared to | Andhra meals are very spicy, whereas Hyderabadi food is richer and less hot. Compared to the north, we eat much more rice. | Comparing regional food with a traveller from Punjab on a train |
| 6 | `w98-conversation` | Conversation Day: A Food Walk in Old Hyderabad · పాత హైదరాబాద్‌లో ఫుడ్ వాక్ | all of the week | — | Guiding visitors through food stalls near Charminar; describing a Kuchipudi performance to a friend who missed it |
| 7 | `w98-review` | Review | | | |

## Week 99 — Travel Experiences · ప్రయాణ అనుభవాలు

*Telling and comparing trips, not booking them (Week 55); recycles experiences (30), present perfect vs past simple (43) and superlatives (44, 45). Fix-it: 8, 4, 6. Read it: a guest house review, "Clean rooms, friendly staff, 4.5 stars".*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `travel-best-trip-ive-ever-had` | The Best Trip I've Ever Had · ఇప్పటివరకు బెస్ట్ ట్రిప్ | superlative + present perfect: the most beautiful place I've ever seen | Araku is the most beautiful place I've ever been to. That was the longest train journey I've ever taken. | Chatting with a fellow passenger about trips |
| 2 | `travel-have-you-been-to-hampi` | Have You Been to Hampi? · హంపి వెళ్ళారా? | a present perfect question, then past simple details | Have you been to Hampi? Yes, I went there with friends in 2019, and I loved the stone chariot. | A neighbour, Kamala, asks about your trip to Hampi |
| 3 | `travel-the-worst-part` | The Worst Part · అసలు ఇబ్బంది అక్కడే | the worst moment of a trip, with the past perfect | The worst part was the hotel; it was nothing like the photos. We had booked a room with a view, but we got one next to the kitchen. | Telling a friend about a trip to Ooty that didn't go to plan |
| 4 | `travel-been-or-went` | I've Been or I Went? · been ఆ, went ఆ? | contrast: no time (I've been) vs a finished time (I went) | I've been to Kashi twice. The last time I went was in March. | A travel agent asks about your past trips to suggest a new one |
| 5 | `travel-worth-a-visit` | It's Worth a Visit · తప్పకుండా చూడాల్సిందే | recommending from experience: It's worth …, Don't miss …, You have to try … | If you go to Visakhapatnam, don't miss the submarine museum. It's worth spending a night in Araku. | Advising a friend, Kavitha, who is planning a trip to Vizag |
| 6 | `w99-conversation` | Conversation Day: Travellers at a Guest House · గెస్ట్‌హౌస్‌లో ప్రయాణికులు | all of the week | — | Swapping travel stories with other guests at breakfast; recommending places to a young traveller |
| 7 | `w99-review` | Review | | | |

## Week 100 — Week 100: My English Journey · 100వ వారం: నా ఇంగ్లీష్ ప్రయాణం

*A celebration week with no new grammar: the learner talks about their own learning with every tense so far. Warm and encouraging; hints say "your own" story. Fix-it: 1, 3, 8. Read it: the app's message, "100 weeks of English. Well done!"*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `english-journey-when-i-started` | When I Started · మొదలుపెట్టినప్పుడు | past simple and past perfect about beginnings | When I started, I couldn't introduce myself in English. I had never spoken English on the phone before. | Telling a friend how you started learning |
| 2 | `english-journey-what-ive-learned` | What I've Learned · ఇప్పటివరకు నేర్చుకున్నది | present perfect for achievements; can now | I've learned to talk to the doctor in English. Now I can follow the news and call customer care myself. | A neighbour, Suresh, asks what you've learned |
| 3 | `english-journey-still-hard` | What's Still Hard · ఇంకా కష్టంగా ఉన్నవి | honest difficulties: I still find it hard to …, I keep forgetting … | I still find fast speakers hard to follow. I keep mixing up said and told. | Talking to a volunteer English teacher at the library |
| 4 | `english-journey-used-to-now` | I Used to Feel Shy · ముందు మొహమాటంగా ఉండేది | contrast used to (then) and present simple or perfect (now) | I used to feel shy, but now I enjoy speaking. I used to translate everything in my head; now I sometimes think in English. | Encouraging a friend who is just starting |
| 5 | `english-journey-whats-next` | What's Next? · తర్వాత ఏంటి? | going to, hope to, plan to for the next twenty weeks | Next, I'm going to practice telling stories for two minutes. I hope to give a short speech at our colony function one day. | Making a learning plan with a study partner, Swapna |
| 6 | `w100-conversation` | Conversation Day: Celebrating 100 Weeks · 100 వారాల వేడుక | all of the week | — | A small celebration at the library English club; calling an old teacher to tell them about your progress |
| 7 | `w100-review` | Review | | | |

## Week 101 — Announcements & Longer Talks · అనౌన్స్‌మెంట్లు, పెద్ద ప్రసంగాలు

*A listening week (§1a): each lesson has a longer announcement or talk heard first, with a big-picture question, then key facts. Recycles station words (15, 55), the passive (87) and the future (72). Fix-it: 6, 2, 4. Read it: a departures board with "Delayed" and "Gate changed".*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `announcements-platform-change` | Platform Change · ప్లాట్‌ఫాం మార్పు | long railway announcements: catching the train name, platform and delay | The Godavari Express will arrive on platform five instead of platform two. It is running about forty minutes late. | Checking with a fellow passenger what the announcement said |
| 2 | `announcements-now-boarding` | Now Boarding · బోర్డింగ్ మొదలైంది | airport announcements: boarding, gate change, final call | Passengers on the IndiGo flight to Delhi, please proceed to gate twelve. This is the final call for passengers to Bengaluru. | Asking airport staff after missing an announcement |
| 3 | `announcements-a-health-talk` | A Health Talk · ఆరోగ్యం మీద ప్రసంగం | following a talk by its signposts: First, The main point is, To sum up | Today I'll talk about three ways to keep your sugar under control. The most important point is to walk for thirty minutes every day. | Asking the speaker, Dr Joseph, a question after the talk |
| 4 | `announcements-the-key-facts` | What Were the Key Facts? · ముఖ్యమైన విషయాలేంటి? | contrast key facts and extra details; checking what you missed | The key facts are the time, the place and what to bring. Sorry, did they say gate twelve or gate twenty? | Passing on an eye camp announcement to a neighbour, Jyothi |
| 5 | `announcements-public-meeting` | At a Public Meeting · పబ్లిక్ మీటింగ్‌లో | a long official talk: dates, changes and what citizens must do | From next month, wet and dry garbage will be collected separately. Property tax can be paid online before the thirty-first. | Telling a friend who missed the meeting what was announced |
| 6 | `w101-conversation` | Conversation Day: A Day of Announcements · అనౌన్స్‌మెంట్ల రోజు | all of the week | — | A delayed train and a platform change with a fellow traveller; following a volunteer's instructions at a health camp |
| 7 | `w101-review` | Review | | | |

## Week 102 — Speaking for One Minute · ఒక నిమిషం మాట్లాడటం

*Builds towards the Week 107 mission; recycles reasons (93), connectors (96) and opinions (46). "Respected sir" and reading from paper come up as Don't say / Say. Fix-it: 10, 3, 1. Read it: a meeting agenda.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `one-minute-good-evening` | Good Evening, Everyone · అందరికీ నమస్కారం | opening a short talk: greeting, who you are, your topic | Good evening, everyone. I'd like to say a few words about our park. My name is Kiran, and I've lived in this colony for twenty years. | Opening a talk at the residents' association |
| 2 | `one-minute-first-also-finally` | First, Also, Finally · మొదట, అలాగే, చివరగా | three points with signposts | First, the lights in the park don't work. Also, the gate is broken. Finally, we need a bench near the entrance. | Giving three points to the park committee |
| 3 | `one-minute-for-example` | For Example · ఉదాహరణకి | supporting a point: for example, such as, this means | For example, last week an elderly man fell near the gate. This means we need lights before the rainy season. | Speaking for one minute at a club about a road problem |
| 4 | `one-minute-talk-not-chat` | A Talk, Not a Chat · కబుర్లు కాదు, ప్రసంగం | contrast a chat and a short talk: full sentences, pauses, looking at people | Let me give you an example. To put it simply, we need more volunteers. | A friend, Ramana, tries out his talk on you and you give tips |
| 5 | `one-minute-to-sum-up` | To Sum Up · మొత్తం మీద | closing: to sum up, thank you for listening, any questions? | To sum up, a few small changes will make our park much safer. Thank you for listening. Are there any questions? | Ending your talk and answering a question from the secretary |
| 6 | `w102-conversation` | Conversation Day: The Residents' Meeting · రెసిడెంట్స్ మీటింగ్ | all of the week | — | Speaking for a minute about the water supply; saying a few words of thanks to a retiring watchman |
| 7 | `w102-review` | Review | | | |

## Week 103 — Formal or Informal? · ఫార్మల్‌గానా, మామూలుగానా?

*Recycles formal requests (62), official letters (63) and polite English (39); messages are listened to and chosen, never typed. Fix-it: 10 (kindly do the needful, revert back), 4, 3. Read it: two messages, one formal and one casual, side by side.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `formal-informal-hi-or-dear-sir` | Hi or Dear Sir? · హాయ్ ఆ, డియర్ సర్ ఆ? | openings and endings: Hi, Dear Sir or Madam, Regards, Take care | Dear Sir or Madam, I am writing about the electricity bill for March. Hi Padma, thanks for the photos. Take care! | A friend helps you choose how to start messages to a bank and to a cousin |
| 2 | `formal-informal-could-you-possibly` | Could You Possibly …? · ఎంత మర్యాదగా అడగాలి? | a scale of requests: Can you, Could you, Would you be able to, I would be grateful if | Could you send me the form? I would be grateful if you could send me the form by Friday. | Asking a college office for an old certificate by phone |
| 3 | `formal-informal-calling-regarding` | I'm Calling Regarding … · ఆఫీసుకి ఫార్మల్ కాల్ | formal phone English: I'm calling regarding, Thank you for your time | Good morning. I'm calling regarding my application number 4471. Thank you for your time. Have a good day. | Calling the tahsildar's office about a land record |
| 4 | `formal-informal-two-ways` | Saying It Two Ways · ఒకే మాట, రెండు తీర్లు | contrast the same message said formally and informally | Sorry, I can't come tomorrow. I regret that I will not be able to attend tomorrow's meeting. | Telling a friend, then the association secretary, that you'll miss a meeting |
| 5 | `formal-informal-right-tone` | The Right Tone for the Person · మనిషిని బట్టి మాట | choosing a tone for a doctor, an official, an elder, a friend, a young shop assistant | Good afternoon, Doctor. Thank you for seeing me at short notice. Hi Ramesh, long time! How are things? | A morning of calls: a doctor, an official and a friend |
| 6 | `w103-conversation` | Conversation Day: Messages for Every Occasion · సందర్భానికి తగ్గ మెసేజ్‌లు | all of the week | — | Inviting a friend and then the local MRO to a library event; answering a formal call from the bank and a casual voice message from a friend |
| 7 | `w103-review` | Review | | | |

## Week 104 — Saying No Nicely · మర్యాదగా వద్దనడం

*Recycles softening (33, 62), declining invitations (32) and scam refusals (21). With people, the reason is kind and short; with sales and scam callers, firm is fine. Fix-it: 9, 3, 7. Read it: a sales SMS, "Pre-approved loan of 5 lakh! Click here".*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `saying-no-id-love-to-but` | I'd Love To, But … · రావాలనే ఉంది, కానీ … | refusing an invitation with thanks and a reason | I'd love to come, but I've already promised to be in Guntur that day. Thanks so much for asking. Maybe next time? | Turning down a friend's invitation to a ten-day trip |
| 2 | `saying-no-im-afraid-i-cant` | I'm Afraid I Can't · కుదరదండీ | refusing a request: I'm afraid I can't, I wish I could, but … | I'm afraid I can't lend money right now. I wish I could help, but I'm not free this weekend. | A neighbour, Mohan, asks to borrow your car for a week |
| 3 | `saying-no-not-interested` | No, Thank You, Not Interested · అవసరం లేదండీ, థ్యాంక్స్ | firm, polite refusals to sales calls: say it once more, then end the call | No, thank you. I'm not interested. Please remove my number from your list. Goodbye. | A credit card sales call that won't stop |
| 4 | `saying-no-soft-or-firm` | Soft No or Firm No? · మెత్తగానా, గట్టిగానా? | contrast soft refusals for friends and firm ones for pressure and scams | Let me think about it and get back to you. No. I don't share bank details on the phone. | An acquaintance pushes you to join a money-doubling scheme |
| 5 | `saying-no-but-i-can` | Not That, But This · అది కుదరదు, ఇది చేస్తాను | refusing but offering something else | I can't come on Saturday, but I can help on Sunday morning. I can't be treasurer, but I can help with the accounts once a month. | The club secretary, Salma, asks you to be treasurer |
| 6 | `w104-conversation` | Conversation Day: Too Many Requests · ఒకేసారి చాలా రిక్వెస్ట్‌లు | all of the week | — | Saying no to a pushy water purifier salesman at the door; refusing a big job at the club and offering a smaller one |
| 7 | `w104-review` | Review | | | |

## Week 105 — Bargaining & Negotiating · బేరం, మాట్లాడి ఒప్పించడం

*Deepens Week 13's market bargaining into longer negotiation; recycles conditionals (48, 85), comparatives and big numbers (60). Fix-it: 5, 4, 8. Read it: a rental agreement line, "Rent 12,000 per month, advance three months".*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `bargain-whats-your-best-price` | What's Your Best Price? · చివరి ధర ఎంత? | opening a negotiation: best price, quote, That's more than I expected | What's your best price for the full set? That's more than I expected. Can we talk about it? | Buying a sofa set at a furniture shop |
| 2 | `bargain-if-you-include-it` | If You Include It, I'll Take It · ఇది కలిపితే తీసుకుంటాను | conditional offers: If you …, I'll …; I can pay … if you … | If you include the installation, I'll take it today. I can pay 45,000 if you deliver it free. | Buying an air conditioner at an electronics shop |
| 3 | `bargain-about-the-rent` | About the Rent · అద్దె గురించి | negotiating rent: advance, maintenance, an increase | Ten per cent is a big increase. Could we agree on five? I've always paid on time, so I hope you'll consider it. | Talking to the house owner, Mr Srinivas, about a rent increase |
| 4 | `bargain-meet-in-the-middle` | Let's Meet in the Middle · మధ్యలో కుదుర్చుకుందాం | contrast accepting, countering and walking away politely | Let's meet in the middle at 1,500. Thanks, but that's still too much. I'll think about it. | Agreeing a price with a carpenter, Anitha, for new cupboards |
| 5 | `bargain-a-fair-quote` | Getting a Fair Quote · న్యాయమైన ధర | negotiating repairs: break down the cost, what's included, warranty | Could you break down the cost for parts and labour? Does the price include a six-month warranty? | Negotiating a borewell motor repair with a mechanic, Raju |
| 6 | `w105-conversation` | Conversation Day: Buying a Second-Hand Scooter · సెకండ్ హ్యాండ్ స్కూటర్ కొనడం | all of the week | — | Negotiating the price of a used scooter with its owner; settling a painting quote with a contractor |
| 7 | `w105-review` | Review | | | |

## Week 106 — Solving Problems Together · కలిసి సమస్య తీర్చడం

*Deepens Week 93 from deciding to solving; recycles neighbourhood problems and the passive (75) and suggestions (38). Fix-it: 3, 6, 2. Read it: a colony notice about tanker timings.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `solve-together-whats-the-problem` | What Exactly Is the Problem? · అసలు సమస్య ఏంటి? | defining a problem: The problem is that …, It's been happening since … | The problem is that the tanker comes at a different time every day. It's been happening since the pipeline work started. | Talking to neighbours about water timings |
| 2 | `solve-together-what-if-we` | What If We …? · … చేస్తే ఎలా ఉంటుంది? | suggesting solutions: What if we, Why don't we, We could always | What if we put up a notice with the tanker timings? Why don't we start a WhatsApp group for the street? | Brainstorming with the colony committee |
| 3 | `solve-together-might-not-work` | That Might Not Work · అది పని చేయకపోవచ్చు | weighing ideas politely: That might not work because …, The good thing about … is … | That might not work because not everyone uses WhatsApp. The good thing about a notice board is that everyone can see it. | Weighing two ideas about stray dogs with the ward volunteer |
| 4 | `solve-together-who-does-what` | Who Will Do What? · ఎవరు ఏం చేస్తారు? | contrast offering, asking and assigning: I'll take care of …, Could you handle …? | I'll take care of calling the municipal office. Could you handle collecting the money, Jyothi? | Dividing the jobs for a free health camp |
| 5 | `solve-together-did-it-work` | Did It Work? · పరిష్కారం పని చేసిందా? | reporting results with the present perfect and the passive | Since we put up the notice, the complaints have stopped. The streetlights have been fixed, but the drain is still blocked. | Reporting progress at the next meeting |
| 6 | `w106-conversation` | Conversation Day: The Flooded Lane · నీళ్ళు నిలిచిన సందు | all of the week | — | Neighbours plan what to do about a lane that floods after rain; meeting the ward corporator, Ms Sarala, with a joint request |
| 7 | `w106-review` | Review | | | |

## Week 107 — Checkpoint: Speaking Up · చెక్‌పాయింట్: ధైర్యంగా చెప్పడం

*Checkpoint week (§2b): mixed review of Weeks 95–106, a Fix-it clinic and the 2-minute speaking mission (speaking at a meeting).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `speaking-up-news-and-customs` | News and Customs · వార్తలు, ఆచారాలు | mixed: opinions, contrast connectors, present passive | Although the festival is changing, the main customs are still followed. In my view, the new rule is fair, but it needs time. | Discussing a news story about festival noise with a neighbour, Krishna |
| 2 | `speaking-up-listen-and-pass-on` | Listen and Pass It On · విని, ఇంకొకరికి చెప్పడం | mixed: long announcements, key facts, reported speech | They announced that the train would leave from platform six. The doctor said we should bring our old reports. | Passing on a hospital health talk to a friend who missed it |
| 3 | `speaking-up-tone-no-and-price` | Tone, Refusals and Prices · మాట తీరు, వద్దనడం, బేరం | mixed: formal and informal, polite refusals, negotiating | I'm afraid I can't accept that price, but I could pay 8,000. Thank you for the offer. I'll get back to you by Monday. | A shopkeeper, a sales caller and a friend, one after another |
| 4 | `fix-it-clinic-7` | Fix-It Clinic · తప్పులు సరిచేసుకుందాం | the ten Fix-it errors (§2) in Weeks 95–106 sentences | Although it rained, we went to the meeting. We discussed the budget. She asked what time it started. | Helping a friend check a short talk before the meeting |
| 5 | `speaking-up-at-the-meeting` | Speaking at the Meeting · మీటింగ్‌లో మాట్లాడటం | speaking mission: opening, three points, an example, a close; 2 minutes | Good evening, everyone. I'd like to talk about safety on our street. To sum up, if we act together, we can fix this before summer. | Giving a two-minute talk at the residents' association |
| 6 | `w107-conversation` | Conversation Day: The Annual General Meeting · వార్షిక సమావేశం | Weeks 95–106 | — | Speaking up about the budget at the colony AGM; bargaining with a caterer for the colony's annual day |
| 7 | `w107-review` | Checkpoint · చెక్‌పాయింట్ | | | The checkpoint check (§2b) and certificate |

## Week 108 — Should Have, Could Have · అలా చేసుంటే …

*Should have is used (chunk from Week 70); could have, might have and must have are recognition only (§2 rule 4). Everyday choices rather than Week 84's scams; recycles must be / might be (73) and the third conditional (84). Fix-it: 8, 9, 3. Read it: a lab note, "Patient should have fasted for 12 hours."*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `should-have-checked-the-bill` | I Should Have Checked · చెక్ చేసుండాల్సింది | should have + past participle for your own regrets | I should have checked the bill before I paid. We should have left an hour earlier. | Talking to a friend after being overcharged at a restaurant |
| 2 | `should-have-you-shouldnt-have` | You Shouldn't Have! · ఇంత అవసరం లేదు కదా! | shouldn't have for regrets, and the polite "You shouldn't have!" for a gift | I shouldn't have eaten so many sweets at the wedding. Flowers for me? Oh, you shouldn't have! | A neighbour, Rani, brings fruit while you are unwell |
| 3 | `should-have-might-have-missed` | He Might Have Missed the Bus · బస్సు మిస్ అయ్యుండొచ్చు | recognising might have and could have for guesses about the past | Satish isn't here yet; he might have missed the bus. She could have left her phone at home. | Waiting for a friend who is late for a meeting |
| 4 | `should-have-could-have-asked` | You Could Have Asked Me · నన్ను అడిగుండొచ్చు కదా | contrast should have (the right thing), could have (it was possible), must have (a sure guess) | You could have asked me; I was free that day. You must have been very tired after the night shift. | A friend, Gopal, tells you he managed a hospital admission alone |
| 5 | `should-have-next-time` | Next Time, I'll … · ఈసారి ఇలా చేస్తాను | from regret to a plan; kind words for someone else's mistake | I should have asked more questions, so next time I'll make a list. Don't worry, anyone could have made that mistake. | Comforting a neighbour who lost a bag on the train |
| 6 | `w108-conversation` | Conversation Day: The Late Caterer · ఆలస్యంగా వచ్చిన క్యాటరర్ | all of the week | — | Friends look back on a function where the caterer came late; guessing why a delivery never arrived |
| 7 | `w108-review` | Review | | | |

## Week 109 — I'll Be Waiting · నేను ఎదురుచూస్తుంటాను

*Introduces the future continuous; the future perfect (will have reached) is recognition only. Recycles will and going to (72), arrangements (38) and station words (101). Fix-it: 7, 6, 1. Read it: a cab booking SMS, "Your driver Imran will arrive in 5 minutes."*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `ill-be-waiting-at-the-gate` | I'll Be Waiting at the Gate · గేట్ దగ్గర ఎదురుచూస్తుంటాను | will be + -ing for being in the middle of something at a time | I'll be waiting near the main gate at seven. Look for me; I'll be wearing a blue shirt. | Arranging to pick up a friend, Joseph, at Secunderabad station |
| 2 | `ill-be-waiting-this-time-tomorrow` | This Time Tomorrow · రేపు ఈ టైమ్‌కి | future continuous with this time tomorrow, at ten tonight | This time tomorrow, I'll be travelling to Tirupati. At ten, we'll be crossing the Godavari bridge. | Telling a neighbour your travel plans so they can keep an eye on the house |
| 3 | `ill-be-waiting-will-you-be` | Will You Be Serving Breakfast? · బ్రేక్‌ఫాస్ట్ ఉంటుందా? | future continuous for polite questions about plans | Will you be serving breakfast at seven? Will you be coming back the same day? | Asking the guest house owner about breakfast and checkout |
| 4 | `ill-be-waiting-or-ill-wait` | I'll Wait or I'll Be Waiting? · ఎదురుచూస్తాను, ఎదురుచూస్తుంటాను | contrast will + verb (a decision or promise) and will be + -ing; recognise will have + past participle | Don't worry, I'll wait for you. By the time you land, I'll have reached the airport. | A friend's flight is delayed and you change the pickup plan |
| 5 | `ill-be-waiting-travel-day-plan` | A Travel Day Plan · ప్రయాణ రోజు ప్లాన్ | all the forms in planning a day of travel with times | We'll be leaving at five, so we'll have breakfast on the way. By noon, we'll probably be driving through the forest. | Planning a day trip to Srisailam with friends |
| 6 | `w109-conversation` | Conversation Day: Meeting at the Station · స్టేషన్‌లో కలవడం | all of the week | — | Guiding a visiting friend by phone to the exit where you'll be waiting; planning a long road trip with a driver, Kumar |
| 7 | `w109-review` | Review | | | |

## Week 110 — Hope or Wish? · Hope ఆ, Wish ఆ?

*Recycles I wish + past (70) and wishes and condolences (32, 65); one-to-one hopes and blessings, leaving speeches and toasts to Week 149. Fix-it: 10, 3, 1. Read it: a greeting card message.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `hope-wish-feel-better-soon` | I Hope You Feel Better · త్వరగా కోలుకోవాలి | hope + present or will for real possibilities | I hope you feel better soon. I hope the operation goes well tomorrow. | Visiting a neighbour, Kamala, the day before her surgery |
| 2 | `hope-wish-i-wish-i-could` | I Wish I Could Come · రాగలిగితే బాగుండు | wish + could or a past form for things that can't happen | I wish I could come to the wedding, but I'll be in Delhi. I wish we lived closer. | Calling a friend who is moving to another city |
| 3 | `hope-wish-all-the-best` | Wishing You All the Best · అంతా మంచి జరగాలి | wish + noun for blessings: Wishing you …, Best wishes for … | Wishing you all the best in your new job. Best wishes for a happy married life. | Blessing a young neighbour, Kumar, who got a job in Pune |
| 4 | `hope-wish-which-one` | Hope or Wish? · ఏది ఎప్పుడు? | contrast hope (possible) and wish (not real, or a blessing); never "I wish you will" | I hope it doesn't rain on Sunday. I wish it wasn't so hot today. | Chatting with a friend before an outdoor function |
| 5 | `hope-wish-hopes-for-others` | May You Do Well · బాగుండాలని ఆశీస్సులు | longer hopes and blessings for young people and friends | I hope the young people in our town find good jobs close to home. May you live long and stay healthy. | Saying a few kind words to a young volunteer who is leaving the library |
| 6 | `w110-conversation` | Conversation Day: A Farewell for a Neighbour · పొరుగువారికి వీడ్కోలు | all of the week | — | Neighbours wish a family that is moving to Bengaluru; a get-well visit at the hospital |
| 7 | `w110-review` | Review | | | |

## Week 111 — Both, Either, Neither · రెండూ, ఏదో ఒకటి, ఏదీ కాదు

*Recycles countable and uncountable, a little and a few (5, 64) and comparing and choosing (47). Fix-it: 5, 4, 9. Read it: two mobile plan cards side by side.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `both-either-both-are-good` | Both Are Good · రెండూ బాగున్నాయి | both, both of, both … and | Both hospitals are close to my house. The plan includes both calls and data. | Choosing between two hospitals with a friend, Venkat |
| 2 | `both-either-either-day-is-fine` | Either Day Is Fine · ఏ రోజైనా పర్వాలేదు | either, either … or, not … either | Either day is fine for me. You can pay either by UPI or in cash. | Fixing an appointment with a clinic receptionist |
| 3 | `both-either-neither-of-them` | Neither of Them · రెండిట్లో ఏదీ కాదు | neither, neither … nor, neither of | Neither of the flats has a lift. The shop had neither the size nor the colour I wanted. | Looking at two flats to rent with an agent, Rani |
| 4 | `both-either-a-few-or-few` | A Few or Few? · కొన్ని ఉన్నాయా, దాదాపు లేవా? | contrast a few and few, a little and little (positive vs negative) | A few people came early, so we started on time. There's little water in the tank, so let's use it carefully. | Organising chairs and snacks for a club meeting |
| 5 | `both-either-final-choice` | Making the Final Choice · చివరి నిర్ణయం | choosing between options with all the quantifiers | Neither plan is perfect, but the second one has fewer charges. Both shops give a warranty, so I'll choose the closer one. | Choosing a mobile plan at a phone shop |
| 6 | `w111-conversation` | Conversation Day: Choosing a Gift · బహుమతి ఎంచుకోవడం | all of the week | — | Choosing a retirement gift for a former colleague with a friend; picking a bus or a train for a group trip |
| 7 | `w111-review` | Review | | | |

## Week 112 — Describing Photos · ఫోటోలు చూసి చెప్పడం

*Recycles there is and there are (5, 45), the present continuous, must be and might be (73) and Week 99's trips; prepares for the Week 120 check. Fix-it: 1, 7, 6. Read it: a photo caption in a local newspaper.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `photos-in-this-photo` | In This Photo · ఈ ఫోటోలో | there is and there are; in the front, at the back, on the left | In this photo, there are about twenty people in front of the temple. On the left, you can see the old water tank. | Showing a friend photos from the school reunion |
| 2 | `photos-everyone-is-dancing` | Everyone Is Dancing · అందరూ ఆడుతున్నారు | present continuous for what is happening in a photo | Here, everyone is dancing around the Bathukamma. That man is lighting the lamp, and the others are watching. | Describing Bathukamma photos to a visitor |
| 3 | `photos-it-must-be-morning` | It Must Be Early Morning · పొద్దున్నే అయ్యుంటుంది | guessing: must be, might be, looks like, seems to be | It must be early morning, because the light is soft. This looks like a wedding; they might be waiting for the bride. | Guessing the story behind an old photo at a friend's house |
| 4 | `photos-taken-in-1985` | This Was Taken in 1985 · ఇది 1985లో తీసింది | contrast describing a photo (present) and telling its story (past, was taken) | This photo was taken at the Sankranti fair in 1985. We were all standing near the giant wheel. | Showing an old photo to a young neighbour, Ayesha |
| 5 | `photos-my-favourite-photo` | My Favourite Photo · నాకు బాగా నచ్చిన ఫోటో | describing one photo fully: what, who, where and how you feel | This is my favourite photo because it reminds me of my first trip to the sea. Everyone looks so happy, even though it was raining. | Describing a favourite photo to a friend, Mary |
| 6 | `w112-conversation` | Conversation Day: Photos from the Function · ఫంక్షన్ ఫోటోలు | all of the week | — | Choosing prints with the photographer after a function; describing trip photos on a video call |
| 7 | `w112-review` | Review | | | |

## Week 113 — Clear Speech · స్పష్టంగా మాట్లాడటం

*Takes the Sound of the week (§2a) further: sounds from Weeks 1–80 in longer phrases, for being understood on the phone and by people from elsewhere. Recycles spelling aloud (27) and phone calls (19). Fix-it: 3, 4, 10. Read it: a booking ID to read aloud.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `clear-speech-very-well` | Very Well, Not Wery Vell · v, w తేడా | v and w in phrases (Weeks 1, 37) | We visit the village every winter. I live very near the west gate of the park. | Giving your address to a delivery agent from another state |
| 2 | `clear-speech-zero-and-size` | Zero, Size, Prize · z సౌండ్ | z against s and j (Weeks 4, 23) | Please write zero, not the letter O, in the account number. These shoes are a size too big; do you have size nine? | Ordering shoes on a helpline and giving your size |
| 3 | `clear-speech-no-extra-vowel` | School, Not Iskool · ముందు అచ్చు చేర్చకుండా | consonant clusters with no added vowel (Weeks 20, 29, 68) | I asked the staff at the station for a sleeper ticket. My street is next to the school. | Asking for a ticket at a busy station counter |
| 4 | `clear-speech-word-stress` | PHOtograph, phoTOgraphy · ఒత్తి పలికే చోటు | contrast word stress that changes with the word: photograph and photography, a record and to record | Can you take a photograph? I love photography. Please record the meeting so we have a record. | Calling a helpline where the agent misheard a word |
| 5 | `clear-speech-slow-and-clear` | Slow and Clear · మెల్లగా, స్పష్టంగా | clear phone speech: slower pace, pauses, stressing the key word, spelling with words | My name is Sai, S for sugar, A for apple, I for India. The appointment is on the thirteenth, not the thirtieth. | Giving a booking reference on a bad phone line |
| 6 | `w113-conversation` | Conversation Day: A Call from Far Away · దూరం నుండి ఫోన్ | all of the week | — | Explaining a problem to a call-centre agent in another state; guiding a visitor from abroad to your house by phone |
| 7 | `w113-review` | Review | | | |

## Week 114 — Tone of Voice · మాట తీరు

*Recycles question intonation (19, 76), polite tone (33, 39, 62) and a firm tone without anger (75). Many Telugu speakers sound flat or abrupt in English without meaning to; this week shows the difference. Fix-it: 3, 9, 10. Read it: a feedback card from a clinic.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `tone-of-voice-up-or-down` | Up or Down? · గొంతు పైకా, కిందికా? | yes / no questions rise, wh- questions fall | Is this the bus to Guntur? Where does it stop in Tenali? | Asking questions at a bus stand in a new town |
| 2 | `tone-of-voice-sounding-polite` | Sounding Polite · మర్యాదగా వినిపించడం | a warm rise and fall on requests; softeners just and possibly | Could you just move a little, please? Excuse me, could I possibly have some water? | Asking a fellow passenger to switch seats on a train |
| 3 | `tone-of-voice-stress-for-meaning` | I Said Tuesday · ముఖ్యమైన పదం మీద ఒత్తి | stress to correct or contrast | I ordered the veg biryani, not the chicken. The meeting is on Tuesday, not Thursday. | Correcting a wrong food order calmly with a waiter, David |
| 4 | `tone-of-voice-same-words` | Same Words, Different Tone · అవే మాటలు, వేరే తీరు | contrast a flat or sharp tone and a warm one; "What?" vs "Sorry?" | Sorry, could you say that again? Yes, of course. How can I help? | Answering an unknown caller warmly but carefully |
| 5 | `tone-of-voice-feelings` | Happy, Sorry, Surprised · గొంతులో భావం | feelings in the voice: congratulations, sympathy, surprise | Oh, that's wonderful news! Congratulations! Oh no, I'm so sorry to hear that. | Reacting to a friend's good and bad news on the phone |
| 6 | `w114-conversation` | Conversation Day: A Difficult Customer Call · కష్టమైన కస్టమర్ కాల్ | all of the week | — | Staying polite while complaining to an airline about delayed luggage; calming a neighbour who is upset about parking |
| 7 | `w114-review` | Review | | | |

## Week 115 — Technology & Change · టెక్నాలజీ, మార్పులు

*Recycles used to (42), the present perfect for change (71), UPI and video calls (20) and the passive. Fix-it: 8, 7, 5. Read it: a phone message, "This app has been updated. Tap to see what's new."*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `tech-change-used-to-write-letters` | We Used to Write Letters · ఉత్తరాలు రాసేవాళ్ళం | used to for old ways; present simple for now | We used to write letters and wait weeks for a reply. Now we send a voice message and get an answer in minutes. | Telling a young shop assistant about life before mobile phones |
| 2 | `tech-change-everything-has-changed` | Everything Has Changed · అంతా మారిపోయింది | present perfect for change: has become, has made, has replaced | UPI has made small payments very easy. Video calls have replaced the old STD booths. | Chatting with a friend, Narayana, about how shopping has changed |
| 3 | `tech-change-didnt-use-to` | We Didn't Use to Lock Our Doors · తాళాలు వేసేవాళ్ళం కాదు | didn't use to and Did you use to …? | We didn't use to lock our doors in the village. Did you use to listen to the radio every night? | A college student asks you about life in the past for a project |
| 4 | `tech-change-better-or-worse` | Better or Worse? · మంచికా, చెడుకా? | contrast benefits and problems with although and however | Online booking is faster; however, it's hard for people who don't read English. Although phones keep us connected, people talk less face to face. | A friendly debate about phones at the park |
| 5 | `tech-change-ive-learned-to` | I've Learned to Book Tickets Online · ఆన్‌లైన్‌లో టికెట్లు బుక్ చేయడం నేర్చుకున్నాను | present perfect about your own learning; getting used to | I've learned to book train tickets on the app. I'm slowly getting used to paying by phone. | Asking a young neighbour to show you a new app feature |
| 6 | `w115-conversation` | Conversation Day: Then and Now at the Bank · అప్పటి బ్యాంక్, ఇప్పటి బ్యాంక్ | all of the week | — | A retired bank clerk, Ramana, tells how banking has changed; helping a friend switch to e-tickets |
| 7 | `w115-review` | Review | | | |

## Week 116 — Sharing Experience · అనుభవం పంచుకోవడం

*Recycles If I were you and the second conditional (69), should (37) and persuading gently (79). Advice goes to young neighbours, trainees and students, never to assumed children. Fix-it: 7, 2, 4. Read it: a question sent to a newspaper advice column.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `sharing-experience-if-i-were-you` | If I Were You · నేనైతే | If I were you, I'd …; I wouldn't … | If I were you, I'd save a little every month. If I were you, I wouldn't take a big loan for a function. | A young neighbour, Krishna, asks about a job offer in another city |
| 2 | `sharing-experience-what-worked` | What Worked for Me · నాకు పనికొచ్చింది | What worked for me was …; In my experience … | What worked for me was walking every morning, rain or shine. In my experience, it's better to ask than to guess. | Sharing your experience with a new member of the walking group |
| 3 | `sharing-experience-at-your-age` | When I Was Your Age · మీ వయసులో ఉన్నప్పుడు | a short personal story as advice: I learned the hard way that … | When I was your age, I spent a lot of money on things I didn't need. I learned the hard way that health comes first. | Talking to a young bank trainee, Fatima, about money |
| 4 | `sharing-experience-advice-not-orders` | Advice, Not Orders · సలహా, ఆజ్ఞ కాదు | contrast bossy (You must, Do this) and gentle advice (You might want to, It might help to) | You might want to talk to a doctor before you start. It's your decision, of course, but think about it. | Advising a young colleague at the club without sounding bossy |
| 5 | `sharing-experience-three-things` | Three Things I've Learned · నేను నేర్చుకున్న మూడు విషయాలు | a one-minute talk of life lessons with reasons and examples | The first thing I've learned is to keep my promises. Another lesson is that friends matter more than money. | Speaking to students at a school career day |
| 6 | `w116-conversation` | Conversation Day: Advice Over Tea · టీ తాగుతూ సలహాలు | all of the week | — | A young neighbour asks for advice about buying a first flat; guiding a new volunteer at the library |
| 7 | `w116-review` | Review | | | |

## Week 117 — Folk Tales & Proverbs · జానపద కథలు, సామెతలు

*Recycles narrative tenses (83) and reported speech (57, 86). Tales the learner already knows (Tenali Ramakrishna, Panchatantra, Paramanandayya's disciples); proverbs are explained by meaning, not word by word. Fix-it: 9, 3, 5. Read it: a proverb printed on a calendar page.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `folk-tales-long-ago-a-king` | Long Ago, There Was a King · అనగనగా ఒక రాజు | opening a tale: Long ago, Once upon a time; past simple and continuous | Long ago, there was a king called Krishnadevaraya. One day, while the king was sitting in his court, a stranger arrived. | Starting a story at the library's storytelling hour |
| 2 | `folk-tales-tenali-ramakrishna` | The King Asked Tenali Ramakrishna · రాజు తెనాలి రామకృష్ణను అడిగారు | reported speech in stories: asked him to, replied that, told them not to | The king asked Tenali Ramakrishna to find the cleverest man in the city. Tenali replied that the cleverest man was already in the court. | Retelling a Tenali story to a friend from Chennai who knows him as Tenali Raman |
| 3 | `folk-tales-from-that-day-on` | From That Day On · ఆ రోజు నుండి | ending a tale: In the end, From that day on, The moral is … | From that day on, the monkey never trusted the crocodile again. The moral of the story is: think before you trust. | Telling the monkey and the crocodile at a community library |
| 4 | `folk-tales-what-proverb-means` | What Does This Proverb Mean? · ఈ సామెత అర్థం ఏంటి? | contrast a word-for-word translation and the meaning; matching English proverbs | We have a saying that distant hills look smooth. In English, people say the grass is always greener on the other side. | Explaining a Telugu proverb to a visitor from abroad |
| 5 | `folk-tales-your-way` | Telling a Tale Your Way · మీ పద్ధతిలో కథ | a full tale with pauses, voices and a moral; narrative tenses and reported speech | The disciples crossed the river, counted themselves and found only nine. Each of them had forgotten to count himself. | Telling Paramanandayya's disciples to the senior citizens' club |
| 6 | `w117-conversation` | Conversation Day: A Storytelling Evening · కథల సాయంత్రం | all of the week | — | Friends take turns telling folk tales at a library event; explaining a proverb that came up in a film |
| 7 | `w117-review` | Review | | | |

## Week 118 — Teaching Others · ఇతరులకు నేర్పించడం

*Came in from old Week 145; recycles imperatives (5, 14, 20), sequence (74) and checking questions (51), now from the teacher's side. Fix-it: 6, 4, 1. Read it: an instruction leaflet for a BP machine.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `teaching-others-first-soak` | First, Soak the Green Gram · ముందు పెసలు నానబెట్టండి | imperatives and sequence for a recipe | First, soak the green gram for four hours. Then grind it with a little ginger and green chilli. | Teaching a neighbour from Bihar, Mr Kumar, to make pesarattu |
| 2 | `teaching-others-make-sense` | Does That Make Sense? · అర్థమైందా? | checking understanding: Is that clear? Any questions so far? Show me | Does that make sense so far? Show me how you'd do it, and I'll watch. | Teaching a friend to use a BP machine |
| 3 | `teaching-others-make-sure-you` | Make Sure You … · … జాగ్రత్తగా చూసుకోండి | tips and warnings: Make sure you …, Be careful not to …, The trick is to … | Make sure the oil is hot before you add the mustard seeds. The trick is to keep stirring so it doesn't stick. | Teaching a young neighbour, Swapna, to draw a muggu for Sankranti |
| 4 | `teaching-others-not-quite` | Not Quite, Try Again · ఇంకొంచెం, మళ్ళీ ప్రయత్నించండి | contrast giving orders and guiding: Try it like this, Not quite, That's it! | Not quite; hold it a little higher. That's it! You've got it. | Teaching a friend to play carrom |
| 5 | `teaching-others-a-ritual` | Explaining a Ritual Step by Step · పూజ ఎలా చేస్తారో చెప్పడం | explaining a ceremony in order, with the passive and so that | First, the house is cleaned and a lamp is lit. Then the milk is boiled over so that the new home is full of plenty. | Explaining a housewarming ceremony to a friend from abroad |
| 6 | `w118-conversation` | Conversation Day: Cooking Class at the Club · క్లబ్‌లో వంట క్లాస్ | all of the week | — | Teaching club friends to make a festival sweet; helping a neighbour learn the phone camera |
| 7 | `w118-review` | Review | | | |

## Week 119 — Stories from My Life · నా జీవితంలో సంఘటనలు

*Recycles narrative tenses (82, 83), connectors (96), -ed adjectives (77) and Week 43's life story, building to a two-minute talk. Stories are the learner's own; hints say "your own". Fix-it: 8, 2, 3. Read it: a short memoir paragraph in a magazine.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `life-stories-never-forget` | A Day I'll Never Forget · మర్చిపోలేని రోజు | opening a life story: I'll never forget the day …, It was back in … | I'll never forget the day I got my first job. It was back in 1985, and I was living in Warangal. | Telling a friend about a day you'll never forget |
| 2 | `life-stories-as-soon-as` | As Soon As, By Then · వెంటనే, అప్పటికే | linking: as soon as, by then, meanwhile, eventually | As soon as I got the letter, I ran to the post office. By then, the office had closed, so I went back the next morning. | Telling a young neighbour about your first interview |
| 3 | `life-stories-so-nervous` | I Was So Nervous · చాలా టెన్షన్‌గా అనిపించింది | feelings in a story: so … that, such a … that | I was so nervous that my hands were shaking. It was such a relief when the train finally arrived. | A friend, Ruth, asks how you felt on your first flight |
| 4 | `life-stories-short-version` | The Short Version · క్లుప్తంగా చెప్పాలంటే | contrast a short summary and the full story; choosing details | To cut a long story short, we reached just in time. Let me tell you the whole story; it's quite funny. | Telling the same story briefly to a busy shopkeeper and fully to a friend |
| 5 | `life-stories-two-minute-talk` | My Story in Two Minutes · రెండు నిమిషాల్లో నా కథ | a two-minute talk: beginning, problem, turning point, end, lesson | Looking back, that difficult year taught me patience. That's how I ended up living in Vijayawada. | Telling your story at the senior citizens' club's story evening |
| 6 | `w119-conversation` | Conversation Day: Old Friends, New Stories · పాత స్నేహితులు, కొత్త కథలు | all of the week | — | Two old colleagues swap stories at a retirement function; telling a young writer, Geetha, how the town changed in your lifetime |
| 7 | `w119-review` | Review | | | |

## Week 120 — Checkpoint: Stage 4 Review · చెక్‌పాయింట్: సులభంగా ఇంగ్లీష్ పునశ్చరణ

*Checkpoint week (§2b): mixed review of Weeks 108–119 and the whole stage, a Fix-it clinic and the 2-minute speaking mission (a folk tale or my own story).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `stage4-review-looking-back` | Looking Back · వెనక్కి తిరిగి చూస్తే | mixed: should have, might have, hope and wish, future continuous | I should have started learning English much earlier. I hope I'll still be practicing every day next year. | Looking back on the year with a friend from the English club |
| 2 | `stage4-review-photo-clearly-told` | A Photo, Clearly Told · ఫోటో, స్పష్టంగా | mixed: describing photos, clear speech, tone of voice | In this photo, we're all standing outside the new library. It must be evening, because the lights are on. | Describing a photo clearly to a friend on a bad phone line |
| 3 | `stage4-review-advice-from-life` | Advice from My Life · నా అనుభవంతో సలహా | mixed: If I were you, quantifiers, teaching and checking understanding | If I were you, I'd practice with a friend for ten minutes a day. Neither of us knew much English when we started. | Advising a new learner who has just joined the English club |
| 4 | `fix-it-clinic-8` | Fix-It Clinic · తప్పులు సరిచేసుకుందాం | the ten Fix-it errors (§2) in Stage 4 sentences | I have been learning English for two years. No, I didn't give up. He goes to the club every evening. | Helping a friend check a story before the club's storytelling evening |
| 5 | `stage4-review-tale-or-my-story` | A Tale or My Own Story · కథ గానీ, నా కథ గానీ | speaking mission: a folk tale or a personal story, with narrative tenses, reported speech and linking; 2 minutes | Long ago, in a village near the Krishna river, there lived a clever farmer. In the end, he said he had learned more from his mistake than from his success. | Telling a story for two minutes at the library's storytelling evening |
| 6 | `w120-conversation` | Conversation Day: The English Club's Annual Day · ఇంగ్లీష్ క్లబ్ వార్షికోత్సవం | everything from Stage 4 | — | Welcoming guests and chatting at the annual day; telling a visitor about your English journey and giving advice |
| 7 | `w120-review` | Stage 4 Review · సులభంగా ఇంగ్లీష్ పునశ్చరణ | | | The checkpoint check (§2b), certificate and stage celebration |

---

# 7. Stage 5 — Natural English · సహజమైన ఇంగ్లీష్ (Weeks 121–150)

Reordered 2026-11-09 (curriculum review).

**The learner can:** reply naturally, soften or stress what matters, tell vivid stories, weigh pros and cons and disagree politely, follow fast natural speech and the news, use online services, stand up for their rights as a customer, talk about their town, sports and public life, answer an interviewer, and give a short speech or blessing at a function. *(Checkpoints at Weeks 135 and 150, §2b.)*

| Week | Title | Grammar focus | Life topic / function |
|---|---|---|---|
| 121 | Natural Replies · సహజమైన జవాబులు | Sounds good, Fair enough, I see | reply naturally in a chat |
| 122 | Thinking Time · ఆలోచించే టైమ్ | Well …, Let me think, You know | keep talking while you think |
| 123 | Softening · మెత్తగా చెప్పడం | a bit, kind of, I was wondering if … | soften requests and criticism |
| 124 | Making Your Point · గట్టిగా చెప్పడం | emphasis: I do like it; What I need is … (to recognise and use simply) | stress what matters in requests and complaints |
| 125 | Vivid Descriptions · కళ్ళకు కట్టినట్టు చెప్పడం | strong adjectives (huge, freezing), adverbs | describe places, food and events vividly |
| 126 | Storytelling · కథ చెప్పే పద్ధతి | building suspense; reported speech in stories | tell an engaging story |
| 127 | Memories · జ్ఞాపకాలు | would / used to / past perfect | old memories in detail |
| 128 | Pros & Cons · లాభాలు, నష్టాలు | on one hand, on the other hand | weigh a choice |
| 129 | Disagreeing Politely · ఒప్పుకోకపోయినా మర్యాదగా | polite disagreement in depth | disagree without hurting anyone |
| 130 | What Would You Do? · మీరైతే ఏం చేస్తారు? | hypotheticals: suppose, what if | talk through hard choices |
| 131 | Fast Natural Speech · వేగంగా మాట్లాడే ఇంగ్లీష్ | contractions and linking (gonna, wanna: to understand) | follow films, videos and fast callers |
| 132 | Following the News · వార్తలు అర్థం చేసుకోవడం | summarising what you heard | retell a news story |
| 133 | Water, Power & the Environment · నీళ్ళు, కరెంట్, పర్యావరణం | passive and conditionals in context | saving water and power, plastic, heat waves |
| 134 | Elections & Public Life · ఎన్నికలు, ప్రజా జీవితం | opinions; reported speech | voting, ward meetings, public services |
| 135 | Checkpoint: Natural Talk · చెక్‌పాయింట్: సహజంగా మాట్లాడటం | mixed; Fix-it clinic | Checkpoint 10 (§2b) |
| 136 | What I Mean Is … · నేను చెప్పేది ఏంటంటే … | explaining and rephrasing | clarify complicated things |
| 137 | Recommending · సిఫార్సు చేయడం | persuasion and recommendation | recommend doctors, places and products |
| 138 | Values & Life Lessons · విలువలు, జీవిత పాఠాలు | talking about beliefs; because / so that | talk about what matters |
| 139 | Online Services · ఆన్‌లైన్ సేవలు | instructions; conditions | online forms, DigiLocker, video consultations, online bookings |
| 140 | Your Rights as a Customer · కస్టమర్‌గా మీ హక్కులు | formal complaints; I'd like a refund or a replacement | warranties, refunds, the consumer helpline |
| 141 | Cricket, Sports & Games · క్రికెట్, ఆటలు | past simple and present perfect in commentary; superlatives | talk about matches and players |
| 142 | Our Town's History · మా ఊరి చరిత్ర | passive in the past (was built); used to | tell the story of your town |
| 143 | Interviews · ఇంటర్వ్యూలు | answering questions about yourself at length | a survey, a reporter, an officer's questions |
| 144 | Community & Volunteering · సమాజ సేవ | organising: Could you …? Let's …; who / which | organise and help in the community |
| 145 | Don't You Think …? · మీకు అలా అనిపించట్లేదా? | negative questions | gentle suggestions and checking |
| 146 | Building Words · పదాలు ఎలా తయారవుతాయి | prefixes and suffixes (un-, re-, -ful, -less) | understand new words on labels and notices |
| 147 | Confusing Pairs · తికమక పెట్టే జంటలు | lend / borrow, say / tell, bring / take | words people mix up |
| 148 | A Short Speech · చిన్న ప్రసంగం | structure: thanks, a memory, good wishes | speak at a function |
| 149 | Blessings & Toasts · ఆశీస్సులు, శుభాకాంక్షలు | blessing and wishing phrases | speak at weddings and events |
| 150 | Grand Review & Celebration · చివరి పునశ్చరణ, వేడుక | mixed; Fix-it clinic | Checkpoint 11 (§2b) and course celebration |

*Changes from the old map:*
- **Moved:** Vivid Descriptions 128 → 125, Storytelling 127 → 126, Memories 139 → 127 (absorbs old 75, Old Memories), Pros & Cons 129 → 128, Disagreeing 130 → 129, What Would You Do 131 → 130, Fast Natural Speech 134 → 131, Following the News 140 → 132, Negative questions 146 → 145, Building Words 147 → 146, Confusing Pairs 148 → 147, A Short Speech 132 → 148, Blessings & Toasts 133 → 149.
- **New:** Water, Power & the Environment (133), Elections & Public Life (134), checkpoint (135), Online Services (139), Your Rights as a Customer (140), Cricket, Sports & Games (141), Our Town's History (142), Interviews (143).
- **Moved earlier:** Different Accents (→ 78), Understanding Doctors (→ 51), Pensions & Savings (→ 60), Official Letters (→ 63), Teaching Others (→ 118), Indian English Habits (→ 39).
- **Merged away:** Phrasal Verbs IV (→ 91), Idioms About Feelings (→ 89).

Lesson detail, week by week (detailed 2026-11-10, BUILD_PLAN E1). Each week is written from its table with CONTENT_PLAYBOOK; check facts and sensitivity notes in the week line before writing.

## Week 121 — Natural Replies · సహజమైన జవాబులు

*Recycles Week 34 (small talk), Week 38 (Sounds good) and Week 76 (so do I). Fix-it: missing am / is / are (1), answering negative questions (9: "You didn't know? No, I didn't."), Indian-English habits (10: "Same to you" for a statement).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `natural-replies-i-see-really` | I See. Really? · అలాగా? నిజమా? | showing you are listening: I see, Really?, Oh dear, That's great | Oh, I see. So the bank is closed on Saturday? Really? I didn't know that. | A neighbour, Imran, tells you about the new bus route |
| 2 | `natural-replies-fair-enough` | Fair Enough · సరే, అదీ నిజమే | accepting a reason: Fair enough, That makes sense, No problem at all | Fair enough. Let's meet next week then. That makes sense. The roads are bad after the rain. | The tailor, Gopal, says your kurta will be two days late |
| 3 | `natural-replies-same-here` | Same Here, Me Neither · నాకూ అంతే | agreeing in a word: Same here, Me too, Me neither, So do I | Same here. I can't sleep in this heat. Me neither. I've never tried online shopping. | Chatting with Kamala in the clinic waiting room |
| 4 | `natural-replies-short-not-rude` | Short but Not Rude · చిన్న జవాబు, మర్యాదగా | blunt one-word replies vs natural short replies: Not really, thanks; Of course, go ahead | Not really, but thanks for asking. Of course. Please go ahead. | A chatty fellow passenger, David, asks many questions on the bus |
| 5 | `natural-replies-keep-chat-going` | Keeping the Chat Going · కబుర్లు ఆగకుండా | reply plus a follow-up question: Really? How was it? | That's lovely. Where did you stay? Really? How did the operation go? | A chat with Sarala, a retired teacher, at the library |
| 6 | `w121-conversation` | Conversation Day: On the Train to Tirupati · తిరుపతి రైల్లో | all of the week | — | Chatting with a fellow passenger on a long journey; replying naturally to a stranger's good and bad news |
| 7 | `w121-review` | Review | | | |

## Week 122 — Thinking Time · ఆలోచించే టైమ్

*Recycles Week 19 (phone calls), Week 14 (directions) and Week 58 (indirect questions). Fix-it: question word order (3: "What it is called?" → "What is it called?"), extra preposition (6: "discuss about"), -ing for states (7: "I am knowing the shop").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `thinking-time-well-let-me-think` | Well, Let Me Think · ఊ, ఆలోచించనివ్వండి | gaining time: Well, Let me think, Let me see | Well, let me think. I think it was last Tuesday. Let me see, I paid around two thousand rupees. | The bank clerk, Rahim, asks when you last updated your KYC |
| 2 | `thinking-time-you-know-i-mean` | You Know, I Mean · అంటే, తెలుసు కదా | natural fillers, used lightly: you know, I mean, sort of | It's a small shop, you know, near the temple. I mean, it's not far, but the road is bad. | Guiding a delivery person, Satish, to a hard-to-find house |
| 3 | `thinking-time-whats-it-called` | What's It Called? · దాన్ని ఏమంటారు? | when you forget a word: What's it called?, the thing you use for, It's a kind of | What's it called? The thing you use to check BP. It's a kind of sweet, made with jaggery and rice. | Asking Fatima at a hardware shop for something you can't name |
| 4 | `thinking-time-good-question` | That's a Good Question · మంచి ప్రశ్న | hard questions: That's a good question; I'm not sure, but; Can I get back to you? | That's a good question. I'm not sure, but I think so. Can I get back to you tomorrow? | The colony secretary, Venkat, asks your view on a new gate |
| 5 | `thinking-time-where-was-i` | Where Was I? · ఎక్కడ ఆపాను? | losing and finding the thread: Where was I?, Anyway, As I was saying | Sorry, where was I? Oh yes, the train was late. Anyway, as I was saying, the meeting starts at six. | Telling Joseph about a trip when the phone rings in the middle |
| 6 | `w122-conversation` | Conversation Day: A Call from the Gas Agency · గ్యాస్ ఏజెన్సీ నుండి కాల్ | all of the week | — | Answering the gas agency's questions about your booking; giving a caller directions while you think |
| 7 | `w122-review` | Review | | | |

## Week 123 — Softening · మెత్తగా చెప్పడం

*Recycles Week 33 (could / would requests), Week 39 (polite English) and Week 62 (formal requests). Fix-it: articles (4), present tense for duration (8: "I am waiting since morning" → "I've been waiting since morning"), Indian-English habits (10: "Kindly do the needful").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `softening-a-bit-a-little` | A Bit, A Little · కొంచెం | a bit, a little, slightly to soften a complaint | This saree is a bit too bright for me. The tea is a little too sweet today. | Telling the tailor, Raju, the kurta is a bit tight |
| 2 | `softening-i-was-wondering-if` | I Was Wondering If … · ఒకటి అడుగుదామని | I was wondering if you could / if I could | I was wondering if you could help me with this form. I was wondering if I could pay next week. | Asking the house owner, Prasad, to wait a week for the rent |
| 3 | `softening-not-very-good` | Not Very Good · అంత బాగోలేదు | softening criticism: not very, not really, not exactly, to be honest | The food wasn't very hot, to be honest. The service wasn't exactly quick. | Giving honest feedback to the caterer, Usha, after a colony event |
| 4 | `softening-would-it-be-possible` | Would It Be Possible? · కుదురుతుందా? | blunt vs soft: I want … vs Would it be possible …?; It might be better to … | Would it be possible to see the doctor today? It might be better to call before you come. | Asking Grace at the hospital desk for an earlier appointment |
| 5 | `softening-a-gentle-word` | A Gentle Word · పొరుగువారికి నెమ్మదిగా | raising a problem softly: I hope you don't mind me mentioning it; Maybe we could … | I hope you don't mind me mentioning it, but your tank overflows every morning. Maybe we could switch off the motor a little earlier? | A neighbour, Ayesha, whose water tank overflows onto your steps |
| 6 | `w123-conversation` | Conversation Day: The Apartment Association · అపార్ట్‌మెంట్ అసోసియేషన్ | all of the week | — | Asking the secretary softly about high maintenance charges; gentle feedback to the watchman, Narayana |
| 7 | `w123-review` | Review | | | |

## Week 124 — Making Your Point · గట్టిగా చెప్పడం

*Recycles Week 29 (customer care), Week 50 (complaints) and Week 47 (contrastive stress). "What I need is …" is taught as a fixed frame; other cleft forms stay recognition only. Fix-it: he / she + s (2: "The meter show" → "The meter shows"), plurals after numbers (5: "two hour" → "two hours"), present tense for duration (8: "broken since a month" → "has been broken for a month").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `making-your-point-i-do-like-it` | I Do Like It · నిజంగా నచ్చింది | do / did for emphasis | I do like the colour, but it's too expensive. I did pay the bill. Here is the receipt. | Insisting you paid the electricity bill, with the clerk Ramesh |
| 2 | `making-your-point-what-i-need-is` | What I Need Is … · నాకు కావాల్సింది … | What I need is / What I want is, as a fixed frame | What I need is a simple phone with big buttons. What I want is a refund, not another repair. | A phone shop assistant, Kavitha, keeps showing expensive models |
| 3 | `making-your-point-really-so-such` | Really, So, Such · నిజంగా, ఎంతో | emphasis words: really, so, such a, absolutely, at all | It was such a long wait. Two whole hours! I'm not happy at all with the repair. | Complaining to the service centre, Srinivas, about the same fault again |
| 4 | `making-your-point-stress-the-word` | Stress the Word · ముఖ్యమైన పదం గట్టిగా | stressing the word that corrects: I said Tuesday, not Thursday | I said Tuesday, not Thursday. I asked for two strips, not twelve. | Correcting a medicine order on the phone with the pharmacist, Swapna |
| 5 | `making-your-point-the-main-thing` | The Main Thing Is … · ముఖ్యమైన విషయం ఏంటంటే … | The main thing is, The point is, Most importantly | The main thing is the water supply, not the paint. The point is, the lift has been broken for a month. | Making your point at a colony meeting chaired by Mary |
| 6 | `w124-conversation` | Conversation Day: At the Electricity Office · కరెంట్ ఆఫీసులో | all of the week | — | A wrong bill: making your point firmly at the counter; asking the lineman, Mohan, to fix a loose wire |
| 7 | `w124-review` | Review | | | |

## Week 125 — Vivid Descriptions · కళ్ళకు కట్టినట్టు చెప్పడం

*Recycles Week 45 (describing places), Week 98 (food and culture) and Week 25 (weather). Fix-it: missing am / is / are (1: "The view very nice"), articles (4: "a amazing view" → "an amazing view"), prepositions (6: "in the night" → "at night").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `vivid-huge-tiny-freezing` | Huge, Tiny, Freezing · మామూలు కంటే గట్టి పదాలు | strong adjectives: huge, tiny, freezing, boiling, exhausted, with absolutely | It was absolutely freezing in Araku at night. After the long climb, I was exhausted. | Telling Rani about your trip to Araku |
| 2 | `vivid-crispy-spicy-delicious` | Crispy, Spicy, Delicious · రుచి చెప్పడం | taste and texture words: crispy, soft, tangy, mouth-watering | The dosa was thin and crispy, and the chutney was tangy. Guntur chicken is very spicy, but absolutely delicious. | Telling the caterer, Kumar, exactly how you want the pulihora |
| 3 | `vivid-slowly-suddenly-quietly` | Slowly, Suddenly, Quietly · ఎలా జరిగిందో చెప్పడం | adverbs of manner in a description | Suddenly, the lights went out and everyone shouted. The old man walked slowly across the busy road. | Telling Salma about the power cut at the wedding hall |
| 4 | `vivid-crowded-or-packed` | Crowded or Packed? · రద్దీగా ఉందా, కిక్కిరిసి ఉందా? | ordinary vs strong words (crowded / packed, good / wonderful); very with ordinary words, absolutely with strong ones | The bus wasn't just crowded, it was packed. The view from the hill was absolutely beautiful. | Describing the Sankranti rush at the bus stand to Venkat |
| 5 | `vivid-paint-a-picture` | Paint a Picture · కళ్ళముందు కనిపించేలా | describing an event with the senses: sounds, smells, colours | The whole ground was full of flowers and songs. The street smelled of jasmine and incense. | Describing Bathukamma to a visitor from Kerala, Geetha |
| 6 | `w125-conversation` | Conversation Day: Back from Srisailam · శ్రీశైలం యాత్ర కబుర్లు | all of the week | — | Describing the trip to a neighbour; recommending a guest house to a friend by describing it |
| 7 | `w125-review` | Review | | | |

## Week 126 — Storytelling · కథ చెప్పే పద్ధతి

*Recycles Week 41 (telling a story), Week 57 and Week 86 (reported speech) and Week 117 (folk tales). Fix-it: question word order in reported questions (3: "She asked where was I going" → "where I was going"), -ing for states (7), answering negative questions (9).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `storytelling-you-wont-believe` | You Won't Believe This · మీరు నమ్మరు! | story openers: You won't believe what happened; Guess what; The funny thing is | You won't believe what happened at the bank today. Guess what? I met my old classmate on the bus. | Starting a story with Padma at the park |
| 2 | `storytelling-just-then` | Just Then · అంతలో | suspense words: just then, all of a sudden, at first, it turned out that | Just then, someone knocked on the door. At first I was scared, but it turned out to be the postman. | Telling a neighbour, John, about a strange sound at night |
| 3 | `storytelling-so-he-told-me` | So He Told Me … · అప్పుడు ఆయన చెప్పారు … | reported speech in stories: told me to, asked me where, said that | The conductor told me to get down at the next stop. She asked me where I was going. | Telling Rahim about an argument you saw at the ration shop |
| 4 | `storytelling-in-the-end` | In the End · చివరికి | endings: in the end, luckily, unfortunately; in the end vs at the end | In the end, the auto driver returned my bag. Luckily, nobody was hurt. | Finishing a story for the group at the senior citizens' club, with Jyothi |
| 5 | `storytelling-telling-it-well` | Telling It Well · చక్కగా చెప్పడం | a whole story: setting, suspense, ending, pausing for the listener | So there I was, alone at the station at midnight. And that's how I got home at three in the morning. | Telling a funny travel story to new friends at a function, with Mohan |
| 6 | `w126-conversation` | Conversation Day: Stories at the Bhogi Fire · భోగి మంటల దగ్గర కథలు | all of the week | — | Taking turns telling stories at the Bhogi fire; reacting to a neighbour's ghost story |
| 7 | `w126-review` | Review | | | |

## Week 127 — Memories · జ్ఞాపకాలు

*Absorbs old Week 75 (Old Memories). Recycles Week 42 (used to), Week 82 (past perfect) and Week 45 (then and now). Memories are the learner's own childhood and friends; no spouse or children assumed. Fix-it: he / she + s (2), plurals and uncountables (5: "furnitures"), -ing for states with duration (7 and 8: "I am knowing him since school" → "I have known him since school").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `memories-we-would-sit` | We Would Sleep on the Terrace · మేడ మీద పడుకునేవాళ్ళం | would for repeated past actions | Every summer, we would sleep on the terrace. My grandmother would tell us stories every night. | Sharing childhood summers with Kamala on a walk |
| 2 | `memories-used-to-or-would` | Used To or Would? · used to ఆ, would ఆ? | used to for states and places, would for actions | I used to live in Khammam. We would walk to school together. There used to be a cinema hall here. | Showing an old friend, Suresh, the street where you grew up |
| 3 | `memories-by-the-time` | By the Time I Got There · నేను వెళ్ళేసరికి | past perfect: had already, by the time, had never … until | By the time I reached the station, the train had left. I had never seen the sea until I was twenty. | Telling Imran about your first trip to Visakhapatnam |
| 4 | `memories-it-reminds-me-of` | It Reminds Me Of … · అది గుర్తుచేస్తుంది | I remember + -ing; I'll never forget; It reminds me of | I remember walking to the fair with my friends. This song reminds me of my college days. | Looking through an old album with a visiting cousin, Radha |
| 5 | `memories-those-were-the-days` | Those Were the Days · ఆ రోజులే వేరు | a detailed memory mixing all three, fair to then and now | Life was slower then, but there were fewer hospitals. Those were the days. We didn't have much, but we were happy. | A young neighbour, Swapna, asks what the town was like in the 1970s |
| 6 | `w127-conversation` | Conversation Day: A School Reunion · పాత స్కూల్ మిత్రుల కలయిక | all of the week | — | Meeting a classmate after forty years; remembering a favourite teacher with the headmistress |
| 7 | `w127-review` | Review | | | |

## Week 128 — Pros & Cons · లాభాలు, నష్టాలు

*Recycles Week 96 (although, however), Week 47 (comparing) and Week 60 (savings). Fix-it: question forms (3: "Is it worth?" → "Is it worth it?"), articles (4), extra preposition (6: "near to the hospital" → "near the hospital").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `pros-cons-the-good-thing-is` | The Good Thing Is … · మంచి విషయం ఏంటంటే … | The good thing is, The problem is, The only thing is | The good thing is, it's close to the hospital. The only thing is, there's no lift. | Looking at a flat for rent with a broker, Satish |
| 2 | `pros-cons-on-the-other-hand` | On the Other Hand · ఇంకో వైపు చూస్తే | on one hand, on the other hand; whereas | On one hand, the train is cheaper. On the other hand, the bus is faster. The government hospital is free, whereas the private one is quicker. | Choosing between the train and the bus to Hyderabad with Grace |
| 3 | `pros-cons-is-it-worth-it` | Is It Worth It? · అంత విలువ ఉందా? | worth + -ing; worth it; not worth the trouble | Is it worth buying an extended warranty? It's expensive, but it's worth it. | Asking a salesman, Joseph, about a costly AC |
| 4 | `pros-cons-plus-and-minus` | The Plus Side, the Downside · ప్లస్సు, మైనస్సు | everyday words (plus side, downside, besides) vs formal ones (advantage, disadvantage) | The main downside is the long queue every month. Besides, paying online saves a trip to the bank. | A friend, Ramana, asks whether to renew his fixed deposit online |
| 5 | `pros-cons-weighing-it-up` | Weighing It Up · అన్నీ ఆలోచించి | weighing a big choice and deciding: All things considered | If I move, I'll be near the hospital, but I'll miss my friends. All things considered, I think staying in Nellore is better. | Talking through a move to a smaller house or a senior living home with Kavitha |
| 6 | `w128-conversation` | Conversation Day: A Trip for the Walking Group · వాకింగ్ గ్రూప్ ట్రిప్ | all of the week | — | Weighing two tour packages with a travel agent; agreeing on a plan with the walking group |
| 7 | `w128-review` | Review | | | |

## Week 129 — Disagreeing Politely · ఒప్పుకోకపోయినా మర్యాదగా

*Recycles Week 46 (opinions), Week 33 (colony meeting) and Week 104 (saying no nicely). Fix-it: -ing for states (7: "I am not agreeing" → "I don't agree"), answering negative questions (9: "You don't agree? No, I don't."), Indian-English habits (10).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `disagree-i-see-your-point-but` | I See Your Point, But … · మీరు చెప్పేది అర్థమైంది, కానీ … | I see your point, but; That's true, but | I see your point, but the road is more important. That's true, but we also have to think about the cost. | A friend, Kumar, says online banking is too dangerous to use |
| 2 | `disagree-im-not-so-sure` | I'm Not So Sure · నాకు అంత నమ్మకం లేదు | gentler disagreement: I'm not so sure; I see it a little differently; Do you really think so? | I'm not so sure. Prices have gone up a lot. To be honest, I see it a little differently. | A neighbour, Lakshmi, says the new market is a waste of money |
| 3 | `disagree-agree-to-disagree` | Let's Agree to Disagree · ఎవరి అభిప్రాయం వాళ్ళది | partial agreement and closing a disagreement: You may be right, up to a point | You may be right, up to a point. Let's agree to disagree and have some tea. | An old friend, Narayana, insists the town was better in the old days |
| 4 | `disagree-without-blaming` | Without Blaming · నిందించకుండా | "You are wrong" vs "I think there may be a mistake"; I feel … | I think there may be a mistake in the accounts. I feel we didn't discuss this properly. | Questioning the colony treasurer, Ruth, about the accounts |
| 5 | `disagree-at-the-committee` | At the Committee Meeting · కమిటీ మీటింగ్‌లో | disagreeing respectfully with an elder or a chairperson | With respect, I don't think that's the best plan. Could we hear what the others think first? | The festival committee chair, Srinivas, wants to spend most of the money on lights |
| 6 | `w129-conversation` | Conversation Day: Two Friends, Two Opinions · ఇద్దరు స్నేహితులు, రెండు అభిప్రాయాలు | all of the week | — | A friend wants to lend money to someone he met online; a relative insists on the most expensive hospital |
| 7 | `w129-review` | Review | | | |

## Week 130 — What Would You Do? · మీరైతే ఏం చేస్తారు?

*Recycles Week 69 (second conditional), Week 85 (unless, in case) and Week 116 (If I were you). Third conditional stays recognition only. Fix-it: question word order (3: "What you would do?" → "What would you do?"), plurals (5), prepositions (6).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `what-would-you-do-if-you-found` | If You Found a Wallet … · పర్సు దొరికితే … | second conditional for real-life dilemmas | If I found a wallet on the bus, I would give it to the conductor. What would you do if a stranger asked for money? | A "what would you do" quiz at the club with Rani |
| 2 | `what-would-you-do-suppose` | Suppose … · అనుకోండి … | Suppose, Imagine + past for imagined situations | Suppose the bank called and asked for your PIN. What would you do? Imagine you won a lakh. How would you spend it? | An awareness session with a bank officer, Venkat |
| 3 | `what-would-you-do-what-if` | What If …? · ఒకవేళ …? | What if + present (a real worry) vs What if + past (imagined) | What if the train is late? We'll miss the function. What if you lived in a big city? Would you be happier? | Planning for problems with a travel companion, Fatima |
| 4 | `what-would-you-do-in-your-place` | If I Were in Your Place · మీ స్థానంలో నేనుంటే | If I were in your place, I'd probably …; unless | If I were in your place, I'd talk to the doctor again. I'd probably wait, unless the pain gets worse. | A neighbour, Raju, asks whether to stand guarantee for a friend's loan |
| 5 | `what-would-you-do-hard-choice` | A Hard Choice · కష్టమైన నిర్ణయం | talking a dilemma through: It depends on, I'd rather, Either way | It depends on how much the operation costs. Either way, I would tell them the truth. | A close friend, Mary, can't decide whether to sell old land or keep it |
| 6 | `w130-conversation` | Conversation Day: The Dilemma Game · ఏం చేస్తారు? ఆట | all of the week | — | Answering what-if questions at the senior citizens' club; advising a young neighbour about a job offer far away |
| 7 | `w130-review` | Review | | | |

## Week 131 — Fast Natural Speech · వేగంగా మాట్లాడే ఇంగ్లీష్

*Listening week; gonna, wanna and gotta are for understanding only, and the learner always says the full form. Takes the pronunciation thread on from Weeks 113–114; the fast clips need the extra English voices of §1a (a BUILD_PLAN decision). Recycles Week 19 (Sorry, can you repeat?), Week 78 (accents) and Week 101 (long listening). Fix-it: question word order (3), articles (4), Indian-English habits (10: "Come again?" at an office → "Sorry, could you say that again?").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `fast-speech-contractions` | I'd, We'll, Couldn't · కుదించిన రూపాలు | hearing contractions: I'd, we'll, it'll, couldn't, should've | I'd have come, but I couldn't get a ticket. It'll be ready by five, I think. | A courier, Kumar, talks fast on the phone about your parcel |
| 2 | `fast-speech-gonna-wanna` | Gonna, Wanna, Gotta · సినిమాల్లో వినిపించేవి | recognising gonna, wanna, gotta, kinda, lemme; saying the full form | I'm going to be a little late, sorry. Do you want to come with us? | A young cab driver, David, who speaks very fast |
| 3 | `fast-speech-words-run-together` | Words That Run Together · కలిసిపోయే పదాలు | linking in fast questions: did you, what do you, are you, an hour | What are you doing this evening? Did you get it, or shall I send it again? | A cashier, Ayesha, asks a quick question at a busy counter |
| 4 | `fast-speech-didnt-catch-that` | Sorry, I Didn't Catch That · సరిగ్గా వినపడలేదు | asking for a repeat at Stage 5 level, and checking numbers | Sorry, I didn't quite catch that. Could you say it again? Did you say fifteen or fifty? | A fast customer-care agent, Swapna, reads out a reference number |
| 5 | `fast-speech-films-and-videos` | Films and Videos · సినిమాలు, వీడియోలు | catching the main idea of a fast clip: key words, ignore the rest | I didn't get every word, but I got the main idea. They were talking about a wedding in Chennai. | Telling Prasad what a fast cooking video said |
| 6 | `w131-conversation` | Conversation Day: A Fast Phone Call · వేగమైన ఫోన్ కాల్ | all of the week | — | A delivery agent calling at speed from outside the gate; a visitor from Bengaluru who talks fast |
| 7 | `w131-review` | Review | | | |

## Week 132 — Following the News · వార్తలు అర్థం చేసుకోవడం

*Recycles Week 61 (headlines), Week 95 (news and society) and Week 21 (money safety). Fix-it: he / she + s (2: "The collector say" → "says"), plurals (5), present tense for duration (8). News items are local and practical; no party politics.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `news-did-you-hear-about` | Did You Hear About …? · … గురించి విన్నారా? | bringing up news: Did you hear about …? Apparently, According to | Did you hear about the new metro line? Apparently, bus fares are going up next month. | Sharing news with a neighbour, Jyothi, at the milk booth |
| 2 | `news-in-short` | In Short … · క్లుప్తంగా … | summarising: Basically, In short, It's about | Basically, the river is rising, so people near the bank must move. In short, schools will be closed for two days. | Summarising a TV news item for Gopal, who missed it |
| 3 | `news-the-collector-said` | The Collector Said … · కలెక్టర్ చెప్పారంటే … | reporting verbs in news: said that, announced, warned, promised | The weather department has warned of heavy rain. The collector said that schools would stay closed. | Passing on a cyclone warning to an elderly neighbour, Sarala |
| 4 | `news-fact-or-rumour` | Fact or Rumour? · నిజమా, పుకారా? | confirmed news vs a forwarded rumour: Where did you read that?; It's been denied | Where did you read that? Is it from a reliable source? That message is fake. The bank has denied it. | A friend, Imran, forwards a WhatsApp rumour about banks closing |
| 5 | `news-retelling-a-story` | Telling the News · వార్త చెప్పడం | retelling a news story in order: what, where, when, who, what next | A bus overturned near Kurnool last night. Luckily, no one was badly hurt. Officials say the road will be repaired by Monday. | Retelling the local news to the morning walk group, with Usha |
| 6 | `w132-conversation` | Conversation Day: The Morning Paper · ఉదయం పేపర్ | all of the week | — | Discussing the headlines over coffee with a neighbour; checking a forwarded message with a friend who works at a bank |
| 7 | `w132-review` | Review | | | |

## Week 133 — Water, Power & the Environment · నీళ్ళు, కరెంట్, పర్యావరణం

*Recycles Week 25 (weather warnings), Week 56 (passive in notices) and Week 75 (neighbourhood problems). Fix-it: articles (4), uncountables (5: "less units" → "fewer units", "waters" → "water"), Indian-English habits (10: "a plastic cover" → "a plastic bag").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `environment-every-drop-counts` | Every Drop Counts · ప్రతి చుక్కా ముఖ్యమే | passive for waste and supply: is wasted, is supplied, is stored | A lot of water is wasted when taps are left open. Water will be supplied only in the mornings this summer. | A municipal water inspector, Rahim, explains the new supply times |
| 2 | `environment-if-we-dont-act` | If We Don't Act … · మనం ఏమీ చేయకపోతే … | first conditional and unless for consequences | If we don't save water now, the borewell will dry up. Unless we plant more trees, the summers will get hotter. | Persuading the colony committee head, Lakshmi, to start rainwater harvesting |
| 3 | `environment-no-plastic-please` | No Plastic, Please · ప్లాస్టిక్ వద్దు | refusing politely; has been banned | No plastic bag, please. I've brought my own. Single-use plastic has been banned in our town. | A vegetable seller, Kumar, keeps offering plastic bags |
| 4 | `environment-heat-wave-warning` | A Heat Wave Warning · వడగాలుల హెచ్చరిక | warnings and alerts: is expected to, Avoid …, Stay indoors | Temperatures are expected to cross forty-five degrees. Avoid going out between twelve and four. | Checking on an elderly neighbour, Ruth, during a heat wave |
| 5 | `environment-saving-power` | Saving Power · కరెంట్ ఆదా | second conditional for choices: If we installed solar panels, the bill would come down | If we installed solar panels, the bill would come down. This fan uses fewer units than the old one. | Asking a solar installer, Gopal, about the subsidy and the cost |
| 6 | `w133-conversation` | Conversation Day: A Green Colony Meeting · పచ్చని కాలనీ మీటింగ్ | all of the week | — | Planning a tree-planting drive with neighbours; reporting a burst pipe to the municipal helpline |
| 7 | `w133-review` | Review | | | |

## Week 134 — Elections & Public Life · ఎన్నికలు, ప్రజా జీవితం

*Strictly non-partisan: no party or leader names, and keeping your vote private is always a good reply. Recycles Week 28 (government services), Week 57 (reported speech) and Week 102 (speaking at a meeting). Fix-it: missing am / is / are (1), question word order (3: "When the work will finish?" → "When will the work finish?"), prepositions (6).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `elections-voters-list` | Is My Name on the List? · ఓటర్ల లిస్ట్‌లో నా పేరుందా? | the voter ID, the voters' list and the booth; passive: has been added, is given | Is my name on the voters' list? Which polling booth has been given to our street? | At the desk of the booth level officer, Salma |
| 2 | `elections-at-the-polling-booth` | At the Polling Booth · పోలింగ్ బూత్‌లో | understanding and asking on voting day: queues, help, home voting | Is there a separate queue for senior citizens? Can someone help me? My eyesight is weak. | Voting day with a polling officer, John |
| 3 | `elections-they-promised-to` | They Promised To … · వాళ్ళు మాటిచ్చారు | reporting promises: promised to, said that they would, claimed that | The candidate promised to repair the main road. They said that they would build a new school. | Telling a neighbour, Kavitha, what was said at a candidates' meeting |
| 4 | `elections-my-vote-is-private` | My Vote Is Private · నా ఓటు నా ఇష్టం | sharing an opinion vs keeping your vote private; refusing a gift firmly | Sorry, I'd rather keep my vote to myself. Thank you, but I can't accept any gifts. | A party worker, Satish, comes to the door with a gift |
| 5 | `elections-at-the-ward-sabha` | At the Ward Sabha · వార్డు సభలో | asking officials about public services: I'd like to know when; We were told that | I'd like to know when the drainage work will finish. Last year, we were told the streetlights would be fixed. | Asking the ward councillor, Padma, about public services |
| 6 | `w134-conversation` | Conversation Day: Before Polling Day · పోలింగ్ ముందు రోజు | all of the week | — | Helping a neighbour find their booth; telling a friend what the candidates said at a public meeting |
| 7 | `w134-review` | Review | | | |

## Week 135 — Checkpoint: Natural Talk · చెక్‌పాయింట్: సహజంగా మాట్లాడటం

*Checkpoint week (§2b): mixed review of Weeks 121–134, a Fix-it clinic and the 2-minute speaking mission (pros and cons of a choice).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `natural-talk-a-chat-that-flows` | A Chat That Flows · హాయిగా సాగే కబుర్లు | mixed: natural replies, thinking time, softening, emphasis (Weeks 121–124) | Fair enough. I was wondering if Sunday might be better. Well, I do like the idea, but it's a bit expensive. | Planning an outing with Ramana, who keeps changing the plan |
| 2 | `natural-talk-tell-it-vividly` | Tell It Vividly · కళ్ళకు కట్టినట్టు మళ్ళీ | mixed: vivid descriptions, storytelling, memories (Weeks 125–127) | You won't believe it. The hall was absolutely packed. We would swim in the canal every summer. | Telling a new friend, Fatima, a vivid memory |
| 3 | `natural-talk-news-and-views` | News and Views · వార్తలు, అభిప్రాయాలు | mixed: pros and cons, disagreeing, what if, news, environment, public life (Weeks 128–134) | I see your point, but what if the borewell dries up? Apparently, plastic bags have been banned from next month. | Discussing a local news item with a neighbour, Joseph, who disagrees |
| 4 | `fix-it-clinic-natural-talk` | Fix-It Clinic · తప్పులు సరిచేసుకుందాం | the ten Fix-it errors (§2) in Weeks 121–134 sentences | I've been waiting since ten. She doesn't agree. No, I didn't vote there. | Helping a friend check a WhatsApp message to the ward councillor |
| 5 | `natural-talk-pros-and-cons` | Two Minutes: Pros and Cons · రెండు నిమిషాలు: లాభనష్టాలు | speaking mission: 2 minutes on the pros and cons of a choice | On one hand, a smaller house is easier to look after. All things considered, I'd choose the smaller house. | Talking a friend through a big choice for two minutes |
| 6 | `w135-conversation` | Conversation Day: An Evening at the Community Hall · కమ్యూనిటీ హాల్‌లో సాయంత్రం | Weeks 121–134 | — | Chatting and disagreeing gently at a community dinner; passing on the news and a heat-wave warning |
| 7 | `w135-review` | Checkpoint · చెక్‌పాయింట్ | | | The checkpoint check (§2b) and certificate |

## Week 136 — What I Mean Is … · నేను చెప్పేది ఏంటంటే …

*Recycles Week 51 (Do you mean …?), Week 63 (official letters) and Week 92 (insurance). Fix-it: question word order (3), prepositions (6: "explain me" → "explain to me"), Indian-English habits (10: "I have a doubt" → "I have a question").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `what-i-mean-in-other-words` | In Other Words · అంటే | rephrasing yourself: What I mean is, In other words, Let me put it another way | What I mean is, I can come, but only after five. Let me put it another way. The price includes delivery. | A shop assistant, Anitha, misunderstands what you asked for |
| 2 | `what-i-mean-so-youre-saying` | So You're Saying …? · అంటే మీ ఉద్దేశం …? | checking someone else's meaning: So you're saying …? Are you saying that …? | So you're saying the form must be signed by a gazetted officer? Are you saying I have to come back next week? | A clerk at the tahsildar's office, Krishna, explains a land record process |
| 3 | `what-i-mean-for-example` | For Example · ఉదాహరణకి | explaining with examples and comparisons: for example, such as, It's like | It's like a bank locker, but on your phone. Some foods, such as rice and sweets, raise your sugar quickly. | Explaining what a pension nominee is to a neighbour, Kamala |
| 4 | `what-i-mean-thats-not-what-i-meant` | That's Not What I Meant · నా ఉద్దేశం అది కాదు | correcting a misunderstanding: That's not what I meant; I didn't mean to | Sorry, that's not what I meant. I meant the other branch. I didn't mean to upset you. I was only joking. | Clearing up a hurt feeling with a friend, Salma, after a joke |
| 5 | `what-i-mean-to-put-it-simply` | To Put It Simply · సులభంగా చెప్పాలంటే | explaining something complicated step by step: To put it simply, The idea is, Basically | To put it simply, the insurance pays the hospital directly. The idea is that you keep the bill and claim the money later. | Explaining cashless insurance to a neighbour, Ramesh, before his operation |
| 6 | `w136-conversation` | Conversation Day: Helping a Neighbour Understand · పొరుగువారికి అర్థమయ్యేలా | all of the week | — | Explaining a bank letter to a neighbour; clearing up a mix-up about a meeting time |
| 7 | `w136-review` | Review | | | |

## Week 137 — Recommending · సిఫార్సు చేయడం

*Recycles Week 59 (the shop where …), Week 79 (persuading gently) and Week 45 (places to visit). Fix-it: he / she + s (2: "She listen carefully" → "listens"), articles (4), verb patterns with prepositions (6: "suggest me" → "suggest to me", "advise to me" → "advise me").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `recommending-you-should-try` | You Should Try … · ఒకసారి ట్రై చేయండి | I'd recommend, You should try, You can't go wrong with | I'd really recommend Dr Fatima. She listens carefully. You can't go wrong with the meals at that hotel. | Recommending a good doctor to a new neighbour, David |
| 2 | `recommending-well-worth-a-visit` | It's Well Worth a Visit · తప్పకుండా చూడాల్సిందే | recommending places with reasons and timing: well worth a visit, Don't miss, The best time to go | Bhadrachalam is well worth a visit, especially at Sri Rama Navami. Don't miss the light show at Golconda Fort. | A visitor from Pune, Rani, asks what to see in Telangana |
| 3 | `recommending-who-would-you-suggest` | Who Would You Suggest? · మీరైతే ఎవరిని చెప్తారు? | asking for recommendations: Can you recommend …? Which one would you go for? | Can you recommend a reliable electrician? Which one would you go for, if you were me? | Asking a friend, Venkat, about an electrician and a hearing-aid shop |
| 4 | `recommending-suggest-or-advise` | Suggest, Recommend, Advise · ఏ పదం ఎలా వాడాలి | verb patterns: suggest + -ing, recommend + noun, advise someone to | I suggest going early to avoid the queue. The doctor advised me to walk every day. | The pharmacist, Grace, passes on the doctor's advice |
| 5 | `recommending-would-you-recommend-it` | Would You Recommend It? · ఇతరులకు చెప్తారా? | an honest recommendation with good and bad points | I'd give it four stars. The doctors were great, but the waiting was long. I wouldn't recommend that shop. They don't honour the warranty. | A friend, Gopal, asks about the eye hospital where you had cataract surgery |
| 6 | `w137-conversation` | Conversation Day: Word of Mouth · నోటి మాటతో | all of the week | — | Recommending a guest house for a friend's trip; persuading a hesitant neighbour to go to a free health check-up |
| 7 | `w137-review` | Review | | | |

## Week 138 — Values & Life Lessons · విలువలు, జీవిత పాఠాలు

*Recycles Week 116 (sharing experience), Week 117 (proverbs) and Week 68 (healthy habits). Respectful of every faith and of no faith. Fix-it: missing am / is / are (1), -ing for states (7: "I am believing" → "I believe"), present tense for duration (8).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `values-what-matters-most` | What Matters Most · ఏది ముఖ్యం | I believe, For me, … comes first, What matters most to me is | For me, health comes first, then money. I believe honesty matters more than anything. | A chat about life with Jyothi on a long train journey |
| 2 | `values-so-that-i-can` | So That I Can … · … కోసమే | purpose with so that and in order to | I save a little every month so that I don't depend on anyone. I walk every morning so that I can stay active. | A young neighbour, Kumar, asks how you manage your money |
| 3 | `values-life-has-taught-me` | Life Has Taught Me · జీవితం నేర్పింది | present perfect for life lessons: I've learned that, Experience has taught me to | I've learned that patience solves most problems. Experience has taught me to read before I sign. | Sharing lessons with Ayesha, who is starting a small business |
| 4 | `values-i-respect-that` | I Respect That · మీ నమ్మకాన్ని గౌరవిస్తాను | a firm belief vs a light opinion; respecting other beliefs | I respect your view, even if mine is different. Everyone has their own way of praying. | A visitor from abroad, Ruth, asks about fasting in different faiths |
| 5 | `values-words-i-live-by` | Words I Live By · నేను పాటించే మాట | explaining a saying and why it matters; English sayings close to Telugu ones | My teacher always told us to finish what we start. There's a Telugu saying that means little drops make an ocean. | A radio phone-in about life lessons, with the host Srinivas |
| 6 | `w138-conversation` | Conversation Day: A Retirement Function · పదవీ విరమణ వేడుక | all of the week | — | Talking about life lessons with a retiring colleague; answering a young person's questions about what matters |
| 7 | `w138-review` | Review | | | |

## Week 139 — Online Services · ఆన్‌లైన్ సేవలు

*Recycles Week 20 (first / then), Week 21 (OTP safety) and Week 28 (government services). Fix-it: question word order (3), articles (4), prepositions (6: "upload in the site" → "upload to the website").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `online-documents-on-digilocker` | Documents on DigiLocker · డిజీలాకర్‌లో పత్రాలు | steps with once and then; What happens if …? | Once you log in, your Aadhaar and PAN appear by themselves. You can show your driving licence from DigiLocker. | A Mee Seva operator, Radha, helps you set up DigiLocker |
| 2 | `online-video-consultation` | Seeing the Doctor Online · ఆన్‌లైన్‌లో డాక్టర్ | a video consultation: showing, describing, asking for the prescription | Can you see the swelling? I'll hold the phone closer. Could you send the prescription by message? | A video consultation with a doctor, Imran |
| 3 | `online-booking-tickets` | Booking Online · ఆన్‌లైన్ బుకింగ్ | conditions in booking rules: if, as long as; waitlist, RAC, senior citizen quota | If the ticket is still waitlisted, the money comes back automatically. Is there a lower berth quota for senior citizens? | Booking a train ticket with an agent, Mohan, on the phone |
| 4 | `online-is-this-website-safe` | Is This Website Safe? · ఈ వెబ్‌సైట్ నమ్మొచ్చా? | official site vs fake site; never pay or share an OTP to "update" anything | Use only the official website that ends in gov dot in. Government offices never ask for money on WhatsApp. | A friend, Swapna, is about to pay a fake pension update site |
| 5 | `online-helping-someone-apply` | Helping Someone Apply · అప్లై చేయడంలో సహాయం | guiding step by step and checking: First, then; Did the OTP come? | First upload your photo, then check the details carefully. Did the OTP come? Don't read it out to me. | Helping a neighbour, Rahim, renew his senior citizen bus pass online |
| 6 | `w139-conversation` | Conversation Day: At the Digital Help Desk · డిజిటల్ హెల్ప్ డెస్క్ | all of the week | — | Booking a gas cylinder online with a volunteer's help; a video consultation that keeps freezing |
| 7 | `w139-review` | Review | | | |

## Week 140 — Your Rights as a Customer · కస్టమర్‌గా మీ హక్కులు

*Recycles Week 29 (customer care), Week 50 (returns and refunds) and Week 124 (making your point). The consumer helpline number is 1915. Fix-it: plurals (5: "two week" → "two weeks"), present tense for duration (8: "I'm waiting since a month" → "I've been waiting for a month"), Indian-English habits (10: "revert back", "kindly do the needful").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `customer-rights-under-warranty` | It's Under Warranty · వారంటీలో ఉంది | warranty words: It's still under warranty; The warranty covers | This mixer is still under warranty. Here is the bill. The warranty covers parts and labour for two years. | A service centre, Kavitha, wants to charge for a repair |
| 2 | `customer-rights-refund-or-replacement` | Refund or Replacement · డబ్బు వెనక్కి, లేదా కొత్తది | I'd like a replacement or a refund; I'm not prepared to pay for | I'd like a replacement, or a full refund. I'm not prepared to pay for a fault I didn't cause. | Returning a faulty pressure cooker to the store manager, Krishna |
| 3 | `customer-rights-in-writing` | Can I Have That in Writing? · రాసి ఇస్తారా? | firm formal requests: in writing, the complaint number, the manager | Could you give me that in writing, please? If this isn't solved today, I'd like to speak to the manager. | A gas agency, Suresh, charges extra for delivering the cylinder |
| 4 | `customer-rights-firm-not-rude` | Firm, Not Rude · గట్టిగా, కానీ మర్యాదగా | "You are cheating" vs "I don't think this is right"; the MRP | The MRP is forty rupees, but you charged forty-five. I know it's not your fault, but it needs to be fixed. | Charged above the MRP at a bus stand shop, with the shopkeeper Raju |
| 5 | `customer-rights-consumer-helpline` | The Consumer Helpline · కన్స్యూమర్ హెల్ప్‌లైన్ | telling the complaint with dates and what you have done | I bought it on the third of May, and it stopped working within a week. I've complained twice, but nobody has replied. | Calling the consumer helpline, agent Geetha |
| 6 | `w140-conversation` | Conversation Day: An Online Order Gone Wrong · ఆన్‌లైన్ ఆర్డర్ తిరకాసు | all of the week | — | Asking a seller for a refund for a damaged parcel; taking it to the manager when the refund doesn't come |
| 7 | `w140-review` | Review | | | |

## Week 141 — Cricket, Sports & Games · క్రికెట్, ఆటలు

*Recycles Week 34 (Did you watch the match?), Week 99 (superlatives with present perfect) and Week 42 (used to). Women's and men's sport side by side. Fix-it: he / she + s (2: "She bat very well" → "She bats"), articles (4), answering negative questions (9).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `sports-what-a-catch` | What a Catch! · ఎంత మంచి క్యాచ్! | match talk in the past simple; What a …! | What a catch! He dived and caught it with one hand. She hit four sixes in the last over. | Watching a match on the TV at a friend's shop, with Rahim |
| 2 | `sports-india-have-won` | India Have Won! · ఇండియా గెలిచింది! | present perfect for match news: have won, has broken the record | India have won the series three one. She has broken the national record again. | Giving the match news to Grace, who missed it |
| 3 | `sports-one-of-the-best` | One of the Best Ever · ఎప్పటికీ గొప్పవాళ్ళలో ఒకరు | superlatives with opinions: one of the greatest, the most exciting I've ever seen | In my opinion, he's one of the greatest captains ever. That was the most exciting final I've ever watched. | A friendly argument about the greatest player with a club member, John |
| 4 | `sports-games-we-used-to-play` | Games We Used to Play · మనం ఆడిన ఆటలు | then and now: used to play vs play these days; kabaddi, kho-kho, carrom, chess | We used to play kabaddi in the evenings. These days, I play carrom with friends on Sundays. | Teaching a visitor, Sita, how carrom is played |
| 5 | `sports-join-our-chess-club` | Join Our Chess Club · మా చెస్ క్లబ్‌లో చేరండి | inviting, explaining simple rules, staying active: yoga, walking, shuttle | Would you like to join our chess club? We meet on Saturdays. Each player gets ten minutes for the whole game. | Joining a chess club run by Usha |
| 6 | `w141-conversation` | Conversation Day: The Big Final · పెద్ద ఫైనల్ | all of the week | — | Watching a final with friends at the community hall; telling a neighbour the result the next morning |
| 7 | `w141-review` | Review | | | |

## Week 142 — Our Town's History · మా ఊరి చరిత్ర

*Recycles Week 45 (describing places), Week 56 (passive) and Week 127 (used to). Fix-it: missing am / is / are (1), articles (4), prepositions of time (6: "on 1890" → "in 1890").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `town-history-it-was-built-in` | It Was Built in 1890 · 1890లో కట్టారు | past passive: was built, was opened, was named after | The clock tower was built in 1890. The road was named after a freedom fighter. | Showing a visitor, Anitha, the old clock tower |
| 2 | `town-history-it-used-to-be` | It Used to Be a Garden · ఇక్కడ తోట ఉండేది | there used to be, used to be; now it's | This bus stand used to be a big mango garden. There used to be a ferry before the bridge was built. | Walking around the town with a newcomer, Satish |
| 3 | `town-history-famous-people` | Famous People from Our Town · మా ఊరి ప్రముఖులు | relative clauses with the past: the poet who was born here; known for | The poet who wrote that song was born in our village. She was the first woman doctor from this district. | Telling a college student, Kavitha, about famous people from your town |
| 4 | `town-history-legend-or-history` | Legend or History? · కథా, చరిత్రా? | It is said that, People believe, According to records | It is said that the king built this tank in one night. According to records, the temple is about eight hundred years old. | Explaining a local legend to a tourist, Mary |
| 5 | `town-history-the-story-of-our-town` | The Story of Our Town · మా ఊరి కథ | a short history in order, from the start to today | Two hundred years ago, our town was just a small market. Later, the railway came, and everything changed. | Speaking on a heritage walk organised by Ramana |
| 6 | `w142-conversation` | Conversation Day: A Heritage Walk · వారసత్వ నడక | all of the week | — | Guiding visitors around the old buildings; an old shopkeeper shares memories of the market |
| 7 | `w142-review` | Review | | | |

## Week 143 — Interviews · ఇంటర్వ్యూలు

*Recycles Week 43 (my life story), Week 86 (reported questions) and Week 119 (talking for two minutes). Work always allows "retired"; living alone is a normal answer. Fix-it: -ing for states (7: "I am staying here" for a long time → "I live here"), present tense for duration (8: "I am here since 2005" → "I have lived here since 2005"), Indian-English habits (10: "Myself Kiran").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `interviews-tell-me-about-yourself` | Tell Me About Yourself · మీ గురించి చెప్పండి | answering at length: where from, what you did, what you do now | I'm from Warangal. I worked in the railways for thirty years. These days, I spend most of my time volunteering. | A college researcher, Salma, interviews senior citizens |
| 2 | `interviews-a-survey-at-the-door` | A Survey at the Door · ఇంటి దగ్గర సర్వే | short factual answers, and politely declining one | I live alone, and I own this house. Sorry, I'd prefer not to answer that question. | A government survey worker, Ramesh, asks household questions |
| 3 | `interviews-a-reporter-asks` | A Reporter Asks · రిపోర్టర్ అడిగితే | a short opinion on camera: In my view, The biggest problem is | In my view, the biggest problem is the traffic near the school. We've been asking for a bus stop for years. | A local TV reporter, Padma, asks about the flooded road |
| 4 | `interviews-an-officers-questions` | An Officer's Questions · అధికారి ప్రశ్నలు | chatty answers vs short exact ones for official interviews | I have lived at this address since 2005. Yes, these are my original documents. | Passport police verification with an officer, Kumar |
| 5 | `interviews-hard-questions` | Hard Questions · కష్టమైన ప్రశ్నలు | handling hard questions: Let me answer that in two parts; I'm afraid I don't know, but | Let me answer that in two parts. I'm afraid I don't know, but I can find out. | An interview for a part-time library job, with the librarian Radha |
| 6 | `w143-conversation` | Conversation Day: On the Local News · లోకల్ న్యూస్‌లో | all of the week | — | A TV reporter interviews you at a festival; a survey worker at your door |
| 7 | `w143-review` | Review | | | |

## Week 144 — Community & Volunteering · సమాజ సేవ

*Recycles Week 33 (neighbours), Week 93 (decisions together) and Week 106 (solving problems together). Men and women share the cooking, serving and the leading. Fix-it: articles (4), plurals and uncountables (5: "luggages" → "luggage", "two hundred food packet" → "packets"), prepositions (6).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `volunteering-could-you-help-with` | Could You Help With …? · … లో సహాయం చేస్తారా? | asking for volunteers: Could you help with …? Would anyone like to …? | Could you help with the registration desk on Sunday? Would anyone like to join the blood donation camp? | Asking a neighbour, Fatima, to volunteer at a health camp |
| 2 | `volunteering-lets-split-the-work` | Let's Split the Work · పని పంచుకుందాం | Let's, Who's going to …?, I'll take care of | Let's split the work. I'll take care of the chairs. Who's going to bring the drinking water? | Planning a free eye camp with a committee member, Prasad |
| 3 | `volunteering-the-person-who` | The Person Who Handles … · … చూసుకునే వ్యక్తి | who and which to explain roles and things | Mohan is the person who handles the donations. The hall which we booked is not free that day. | Explaining the roles to a new volunteer, Geetha |
| 4 | `volunteering-thanking-volunteers` | We Couldn't Have Done It Without You · మీరు లేకుండా జరిగేది కాదు | everyday thanks vs public thanks to a group | Thank you all for giving up your Sunday. We couldn't have done it without you. | Thanking donors and volunteers at the end of the camp, with Sita |
| 5 | `volunteering-flood-relief-drive` | A Flood Relief Drive · వరద సహాయం | organising: collecting, sorting, sending; present perfect for progress | We've collected two hundred food packets so far. Please keep the rice and the dal in separate bags. | Running flood relief at the community hall with a volunteer, Raju |
| 6 | `w144-conversation` | Conversation Day: The Health Camp · హెల్త్ క్యాంప్ | all of the week | — | Guiding elderly visitors at the registration desk; sorting out a problem when the doctor is late |
| 7 | `w144-review` | Review | | | |

## Week 145 — Don't You Think …? · మీకు అలా అనిపించట్లేదా?

*Spiral: negative questions (introduced as answers in Week 34). Recycles Week 76 (tag questions) and Week 58 (indirect questions). Fix-it: missing am / is / are (1), question word order (3), answering negative questions (9) in depth.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `dont-you-think-we-should` | Don't You Think We Should …? · … చేస్తే మంచిది కదా? | negative questions to suggest gently: Don't you think …? Wouldn't it be better to …? | Don't you think you should see a doctor about that cough? Wouldn't it be better to go by train? | Gently suggesting a check-up to a friend, Venkat, who has been coughing for weeks |
| 2 | `dont-you-think-isnt-it-on-tuesday` | Isn't It on Tuesday? · మంగళవారం కదా? | negative questions to check what you believe: Isn't …? Didn't you say …? | Isn't the bank closed on the second Saturday? Didn't you say the meeting was at six? | Checking the details of an event with the colony secretary, Sita |
| 3 | `dont-you-think-yes-i-have` | Yes, I Have. No, I Haven't · అవును, లేదు సరిగ్గా | answering negative questions the English way, with any tense | Didn't you get my message? No, I didn't. My phone was off. Haven't you had breakfast? Yes, I have. I ate at seven. | The doctor, Salma, checks your routine before a test |
| 4 | `dont-you-think-surprise-or-annoyance` | Surprised or Annoyed? · ఆశ్చర్యమా, చిరాకా? | the same question can sound surprised, or rude: Aren't you coming? Can't you see? | Oh, aren't you coming with us? That's a pity. Could you wait a minute, please? | A friend, Gopal, cancels at the last minute; answering kindly |
| 5 | `dont-you-think-wouldnt-you-agree` | Wouldn't You Agree? · మీరూ ఒప్పుకుంటారు కదా? | negative questions and tags to win agreement in a discussion | We've waited long enough, haven't we? It's a fair price, wouldn't you agree? | Persuading the apartment meeting, chaired by Usha, to hire a second watchman |
| 6 | `w145-conversation` | Conversation Day: Before the Trip · ప్రయాణానికి ముందు | all of the week | — | Checking travel plans with a friend; gently suggesting a change of plan to the tour organiser |
| 7 | `w145-review` | Review | | | |

## Week 146 — Building Words · పదాలు ఎలా తయారవుతాయి

*A reading week: the Read it card comes in every lesson (notices, labels, tickets, forms). Recycles Week 17 (medicine labels), Week 56 (signs) and Week 63 (notices). Fix-it: he / she + s (2), articles (4), uncountables (5: "informations" → "information").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `building-words-un-dis-in` | Un-, Dis-, In- · వ్యతిరేక అర్థం | prefixes that mean not: unsafe, unpaid, dishonest, incorrect, impossible | This bridge is unsafe. Please use the other road. The bill is still unpaid, so the line was cut. | Reading the notice board at the panchayat office with a clerk, Narayana |
| 2 | `building-words-re-pre-over` | Re-, Pre-, Over- · మళ్ళీ, ముందు, ఎక్కువ | renew, refund, prepaid, overcharge, overdue | I need to renew my driving licence. The library book is overdue by a week. | At the library desk with Ayesha: an overdue book and a renewal |
| 3 | `building-words-ful-less` | Careful, Careless · -ful, -less | useful, useless, painless, harmful, helpful | Too much salt is harmful for people with BP. The test is painless and takes ten minutes. | The dentist, Suresh, explains a treatment |
| 4 | `building-words-word-families` | Pay, Payment, Payable · పదాల కుటుంబాలు | word families: the action vs the thing (pay, payment; register, registration; wash, washable) | Is this cloth washable, or dry clean only? Registration is free for senior citizens. | Reading labels at a cloth shop with Mary |
| 5 | `building-words-guess-the-meaning` | Guess the Meaning · అర్థం ఊహించడం | guessing a new word from its parts: non-refundable, unauthorised, reusable | Non-refundable means you won't get the money back. Unauthorised parking will be fined. | Checking a tour ticket's rules with a travel agent, Imran |
| 6 | `w146-conversation` | Conversation Day: Reading the Small Print · చిన్న అక్షరాల్లో ఏముంది | all of the week | — | Going through an insurance form's terms with an agent; reading medicine labels with a friend at the pharmacy |
| 7 | `w146-review` | Review | | | |

## Week 147 — Confusing Pairs · తికమక పెట్టే జంటలు

*Spiral: confusing pairs and Indian-English habits (Week 39). Recycles Week 33 (requests to neighbours) and Week 57 (said / told). Fix-it: prepositions (6: "return back" → "return"), Indian-English habits (10: "open the light" → "switch on the light"), he / she + s (2).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `confusing-pairs-lend-or-borrow` | Lend or Borrow? · ఇవ్వడమా, తీసుకోవడమా? | lend (give for a time) vs borrow (take for a time) | Could you lend me your umbrella? Can I borrow your newspaper for a minute? | Borrowing a ladder from a neighbour, Kumar |
| 2 | `confusing-pairs-say-or-tell` | Say or Tell? · say ఆ, tell ఆ? | say something, tell someone; say sorry, tell the truth | He told me the shop was closed. Could you say that again slowly? | Passing on a message from the doctor's receptionist, Jyothi |
| 3 | `confusing-pairs-bring-or-take` | Bring or Take? · తీసుకురావడమా, తీసుకెళ్ళడమా? | bring (to here) vs take (to there); come vs go | Please bring your old prescription when you come. I'll take these books back to the library. | Telling the electrician, John, what to bring for the job |
| 4 | `confusing-pairs-we-mix-up` | Pairs We Mix Up · మనం తికమకపడే జంటలు | Indian-English pairs: switch on / off (not open / close the light), lose / loose, advice / advise, since / from | Please switch off the fan before you leave. Can you give me some advice? What would you advise me to do? | A friend, Prasad, asks you to check a message he wrote to an office |
| 5 | `confusing-pairs-getting-it-right` | Getting It Right · సరిగ్గా వాడటం | all the week's pairs in one scene | Can I borrow your chairs? I'll bring them back by six. She said she'd lend me the book, but she didn't tell me when. | Getting ready for a colony get-together with a neighbour, Kamala |
| 6 | `w147-conversation` | Conversation Day: A Borrowed Book · అరువు తెచ్చుకున్న పుస్తకం | all of the week | — | Returning something you borrowed, late; passing on a message correctly |
| 7 | `w147-review` | Review | | | |

## Week 148 — A Short Speech · చిన్న ప్రసంగం

*Recycles Week 102 (speaking for one minute), Week 65 (formal wishes) and Week 127 (memories). The person honoured is a friend, neighbour, teacher or colleague. Fix-it: missing am / is / are (1), articles (4), Indian-English habits (10: "Respected one and all, myself Kiran" → "Good evening, everyone. I'm Kiran.").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `short-speech-good-evening-everyone` | Good Evening, Everyone · అందరికీ నమస్కారం | openings: Good evening, everyone; It's an honour to; I'd like to start by thanking | Good evening, everyone. It's an honour to be here. I'd like to start by thanking the organisers. | Opening a speech at a friend's retirement party, with the host Suresh |
| 2 | `short-speech-a-memory-to-share` | A Memory to Share · ఒక జ్ఞాపకం | a short story about the person: I first met …; I'll never forget the day | I first met Prasad thirty years ago, at the bank. I'll never forget the day she helped me without being asked. | Sharing a memory of a teacher at her felicitation, organised by Kavitha |
| 3 | `short-speech-good-wishes` | Good Wishes · శుభాకాంక్షలు | closing wishes: I wish you, May …, Here's to | I wish you good health and many happy years ahead. May this new home bring you peace. | Closing a speech at a neighbour's housewarming, with David |
| 4 | `short-speech-short-and-sweet` | Short and Sweet · చిన్నగా, బాగా | a long, formal speech vs a short three-part one: thanks, a memory, wishes | I'll keep it short, so we can all enjoy the dinner. Thank you all once again for coming. | A friend, Rani, asks you to help cut her long speech |
| 5 | `short-speech-at-a-function` | Speaking at a Function · వేడుకలో మాట్లాడటం | a full one-minute speech with pauses: On behalf of, Let's give them a big hand | On behalf of the colony, I'd like to welcome our new members. Let's give them a big round of applause. | Speaking at the colony's Independence Day function, with the chief guest Krishna |
| 6 | `w148-conversation` | Conversation Day: A Farewell Party · వీడ్కోలు పార్టీ | all of the week | — | A farewell speech for a neighbour who is moving away; introducing the chief guest at a school function |
| 7 | `w148-review` | Review | | | |

## Week 149 — Blessings & Toasts · ఆశీస్సులు, శుభాకాంక్షలు

*Recycles Week 32 (festival wishes), Week 65 (weddings and condolences) and Week 110 (hope and wish). Toasts are made with tea or juice; wishes come from every faith. The couple and the people celebrated are friends, neighbours and colleagues. Fix-it: he / she + s (2), articles (4), plurals (5: "many more happy year" → "many more happy years").*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `blessings-for-the-couple` | Blessings for the Couple · కొత్త జంటకు ఆశీస్సులు | wedding blessings: Wishing you both; May you always | Wishing you both a lifetime of love and happiness. May you always stand by each other. | Blessing the couple at a neighbour's wedding reception, with the bride Swapna |
| 2 | `blessings-birthdays-and-milestones` | Birthdays and Milestones · పుట్టినరోజులు, ప్రత్యేక రోజులు | Congratulations on turning; You inspire us; many more years | Congratulations on turning eighty! You inspire us all. Wishing you many more healthy years. | A friend's eightieth birthday celebration, with the host Ramana |
| 3 | `blessings-raise-a-toast` | Let's Raise a Toast · అందరం కలిసి శుభాకాంక్షలు | toasts: Please join me in wishing; Here's to | Please join me in wishing them all the very best. Here's to many more years of friendship! | A toast with juice at a friends' reunion dinner, with Imran |
| 4 | `blessings-formal-or-warm` | Formal or Warm? · ఫార్మల్‌గానా, ఆప్యాయంగానా? | formal wishes (On behalf of everyone, I extend) vs warm ones (We're so happy for you); Eid Mubarak, Merry Christmas, Happy Ugadi | On behalf of everyone here, I extend our warmest wishes. We're so happy for you, Anitha. You really deserve it. | Wishing a colleague at an office function, then again at her home |
| 5 | `blessings-for-new-beginnings` | For New Beginnings · కొత్త ప్రారంభాలకు | blessings for a new shop, a new job, a recovery | May your new shop bring you success and many happy customers. Wishing you a speedy recovery. We're all praying for you. | Speaking at the opening of a friend's shop, owner Rahim |
| 6 | `w149-conversation` | Conversation Day: A Wedding Reception · పెళ్లి రిసెప్షన్ | all of the week | — | Blessing a couple on the stage; making a short toast at the dinner |
| 7 | `w149-review` | Review | | | |

## Week 150 — Grand Review & Celebration · చివరి పునశ్చరణ, వేడుక

*Checkpoint week (§2b) and the end of the course: mixed review of Weeks 136–149 and the whole of Stage 5, the last Fix-it clinic with all ten errors, and the 2–3 minute speaking mission (a speech at a function). A celebration week: every lesson looks back on how far the learner has come.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `grand-review-explain-and-recommend` | Explain and Recommend · వివరించి, సూచించడం | mixed: rephrasing, recommending, values, online services (Weeks 136–139) | What I mean is, you can do it online in five minutes. I'd really recommend the eye hospital in Guntur. | Helping a new neighbour, Sita, settle in: explaining and recommending |
| 2 | `grand-review-speak-up-for-yourself` | Speak Up for Yourself · మీ హక్కులు, మీ మాట | mixed: customer rights, interviews, negative questions (Weeks 140, 143, 145) | It's still under warranty, isn't it? I've lived in this town for forty years, and I've seen it grow. | A refund problem with Satish, then a reporter's quick questions from Padma |
| 3 | `grand-review-our-town-our-people` | Our Town, Our People · మా ఊరు, మా మనుషులు | mixed: town history, sports, volunteering, building words, confusing pairs (Weeks 141–147) | The library was built in 1952 by the people of the town. Our volunteers have planted over a thousand trees. | Showing visitors your town at festival time, with Grace |
| 4 | `fix-it-clinic-grand-finale` | The Last Fix-It Clinic · చివరి తప్పుల క్లినిక్ | the ten Fix-it errors (§2) across the whole course | I'm Kiran. I've lived here since 1990. He doesn't know yet. No, I didn't tell him. | Helping a friend check their speech before the function |
| 5 | `grand-review-my-speech-at-a-function` | My Speech at a Function · వేడుకలో నా ప్రసంగం | speaking mission: 2–3 minutes with thanks, a memory, good wishes, and what learning English has meant | When I started learning English, I couldn't say a full sentence. Thank you all. I hope to keep learning every day. | Giving the speech at the senior citizens' club annual day, with the host Mohan |
| 6 | `w150-conversation` | Conversation Day: A Celebration with Friends · స్నేహితులతో వేడుక | everything from Stage 5 | — | Telling friends what learning English has changed in your life; thanking the person who encouraged you to start |
| 7 | `w150-review` | Grand Review · చివరి పునశ్చరణ | | | The checkpoint check (§2b), the final certificate and the course celebration |

---

# 8. Optional tracks

Revised 2026-11-09 (curriculum review). Tracks are short courses for learners whose life they fit; the main path never depends on them (VISION §11.4). They use the same lesson format and weekly rhythm as the main path. A track's weeks assume the main-path weeks up to its offer week. Lesson ids start with the track's prefix. Digital life (WhatsApp, video calls, UPI, scams, online services) stays in the main path (Weeks 20, 21, 139).

**The goal question** (first visit, taps only; can be changed any time in Settings → My tracks):

> **What do you want English for?** (tap all that fit)
> [ Daily life ] [ Talking with my family ] [ Talking with my grandchildren ] [ Visiting family abroad ] [ My work ] [ Hospital and caring for someone ] [ Temple, church, mosque and community ] [ None of these ]

"Daily life" is the main path, which everyone follows. Visiting family abroad asks one more question: **[ My trip is soon ]**. That opens the fast lane: Abroad 1 from Week 4, with chunk-based lessons. A chosen track appears on Journey before its offer week, marked "Opens at Week N". When it opens, Home suggests its lessons after the day's main lesson. Only tracks with released content are offered.

| Track | Prefix | Length | Offered at | Why then |
|---|---|---|---|---|
| My Family · నా కుటుంబం | `fam-` | ~6 weeks | Week 4 | after People (have, my / your, 's) |
| Talking with Grandchildren · మనవళ్లతో మాట్లాడటం | `gc-` | ~8 weeks | Week 8 (G5–G8 after Week 12) | after can and asking for help; storytelling needs the past (Week 9) |
| Visiting Family Abroad 1: The Journey · విదేశ ప్రయాణం | `abroad-` | ~6 weeks | Week 8 (fast lane: Week 4) | after asking for help and clarifying |
| English for Work · పనిలో ఇంగ్లీష్ | `work-` | ~8 weeks | Week 12 | after Stage 1 |
| Visiting Family Abroad 2: Living There · విదేశంలో రోజులు | `abroad-` | ~6 weeks | Week 16 | after directions, transport and the doctor |
| Hospital & Caregiving · ఆసుపత్రి, సేవ | `care-` | ~6 weeks | Week 18 | after the doctor, pharmacy and emergencies |
| Faith & Community · భక్తి, సమాజం | `faith-` | ~5 weeks | Week 33 | after Festivals & Celebrations (Week 32) |

**Detailed weeks** (added 2026-11-10, BUILD_PLAN E1). Each track week below has the main-path rhythm: five lessons, a Conversation Day (`<prefix><code>-conversation`) and a Review (`<prefix><code>-review`), in the format of §3 and §4. Sample sentences stay at the level of the track's offer week (§2): Stage 1 tracks (My Family, Grandchildren, Abroad 1, Work) keep to **7 words or fewer**; Stage 2 tracks (Abroad 2, Hospital, Faith) to **10 words or fewer**. A point the main path teaches later appears only as a fixed phrase, and the week's italic line names it. Tracks may talk about a spouse, children and grandchildren, but every week leaves room for other family shapes: living alone, widowed, single, no children, adopted children, a family member who looks after the learner. The learner is Kiran or Sai; partners come from §1's cast lists.

## My Family · నా కుటుంబం (`fam-`, ~6 weeks, from Week 4)

For learners who want to talk about their spouse, children and in-laws, which the main path never assumes.

| Week | Theme | Focus |
|---|---|---|
| F1 | My Family · నా కుటుంబం | husband, wife, son, daughter, in-laws: This is my son. My daughter lives in Pune. |
| F2 | What They Do · ఎవరు ఏం చేస్తారు | jobs and places: My son works in Bengaluru. She is a nurse. |
| F3 | At Home Together · ఇంట్లో అందరం | daily life together: Shall I make tea? Did you take your tablets? |
| F4 | Family Functions · ఇంట్లో శుభకార్యాలు | weddings and naming ceremonies; introducing relatives: This is my son-in-law. |
| F5 | Speaking for the Family · కుటుంబం తరఫున మాట్లాడటం | at the doctor or a school for a spouse or child: My wife is not well. She has a fever. |
| F6 | Family News & Review · కుటుంబ విశేషాలు | telling friends family news: My son got a new job. My daughter is coming next month. |

*Level for F1–F6: the main path to Week 4: be, have / has, my / your / his / her, 's and whose, this / that, present simple with I / you / we / they, am / is / are + -ing, past simple positive and Did you …?, will, numbers, dates and question words. He / she + s (works, lives) and negatives other than "don't have" are fixed phrases here; they are built in Weeks 7 and 9.*

### F1 — My Family · నా కుటుంబం

*Every lesson allows other family shapes: the role plays always accept "I live alone", "I don't have children" or "my husband passed away" as good replies, and the partner answers kindly.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `fam-this-is-my-son` | This Is My Son · మా అబ్బాయి | family words: son, daughter, husband, wife; This is my … | This is my son, Satish. This is my wife, Kavitha. | Showing a family photo on your phone to a neighbour (Padma) |
| 2 | `fam-i-have-two-daughters` | I Have Two Daughters · నాకు ఇద్దరు అమ్మాయిలు | have / has with family; How many children do you have?; I don't have children. | I have two daughters and one son. Do you have children? Yes, two. | A new friend at the park (Gopal) asks about your family |
| 3 | `fam-my-in-laws` | My In-Laws · అత్తమామలు | mother-in-law, father-in-law, daughter-in-law; my son's wife | This is my father-in-law, Narayana. Sita is my son's wife. | Introducing your in-laws to a friend (Rani) at the temple |
| 4 | `fam-brothers-and-sisters` | Brothers, Sisters, Cousins · అన్నదమ్ములు, అక్కచెల్లెళ్ళు | elder / younger brother (English has no అన్న / తమ్ముడు word), niece, nephew, cousin | Prasad is my elder brother. Her son is my nephew. | A visitor (Jyothi) asks who is who in an old wedding photo |
| 5 | `fam-every-family-is-different` | Every Family Is Different · ఒక్కో కుటుంబం ఒక్కోలా | living alone, widowed, single, adopted children: I live with …; passed away (a fixed phrase) | I live with my daughter's family. My husband passed away in 2015. | A new neighbour (Usha) asks about your family; you say you live alone, and she answers kindly (manners slip: asking "Why no children?") |
| 6 | `fam-f1-conversation` | Conversation Day: Family Photos · ఫ్యామిలీ ఫోటోలు | all of the week | — | Showing wedding photos to a new friend (Swapna); meeting a neighbour's family at the gate (Imran) |
| 7 | `fam-f1-review` | Who's Who · ఎవరు ఎవరు | review: family words, have, 's | | |

### F2 — What They Do · ఎవరు ఏం చేస్తారు

*"Works in" and "lives in" are fixed phrases (he / she + s is built in Week 7); most lines use be. Not working is always a good answer: retired, a homemaker, studying, looking for a job.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `fam-she-is-a-nurse` | She Is a Nurse · ఆవిడ నర్సు | jobs with be + a / an: a nurse, an engineer, a driver, a farmer | My daughter is a nurse. My son is an engineer. | A neighbour (Ramesh) asks what your children do |
| 2 | `fam-my-son-works-in` | My Son Works in Bengaluru · మా అబ్బాయి బెంగళూరులో ఉద్యోగం | works in / lives in (fixed phrases); towns and countries | My son works in Bengaluru. My daughter lives in Pune. | An old school friend (Kumar) at the bus stand asks about your family |
| 3 | `fam-retired-or-studying` | Retired, Studying, at Home · రిటైర్ అయ్యారు, చదువుకుంటున్నారు | retired, a homemaker, studying, looking for a job (am / is / are + -ing) | My husband is retired. My son is looking for a job. | A relative (Sarala) at a function asks about everyone; you answer without embarrassment (manners slip: "Still no job?") |
| 4 | `fam-where-do-they-live` | Where Do They Live? · వాళ్ళు ఎక్కడ ఉంటారు? | Where do your children live? near us, in another town, abroad | Where do your children live? They live in Hyderabad, near us. | A new neighbour (Fatima) asks if your family lives nearby |
| 5 | `fam-busy-days` | Busy Days · బిజీ రోజులు | their week with times and days (Week 3): at nine, on Sundays; They are … now | They are at the office now. We talk on Sundays. | A friend (Venkat) asks when your daughter is free for a call |
| 6 | `fam-f2-conversation` | Conversation Day: News at the Park · పార్క్‌లో కబుర్లు | all of the week | — | Telling a walking friend (Radha) what your family does; a neighbour (David) asks about your son in another city |
| 7 | `fam-f2-review` | Jobs and Places · ఉద్యోగాలు, ఊళ్ళు | review: jobs, places, be + a / an | | |

### F3 — At Home Together · ఇంట్లో అందరం

*"Shall I …?" is a fixed phrase (built in Week 33). Chores and care are shared: men cook and serve tea in these scenes as often as women.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `fam-shall-i-make-tea` | Shall I Make Tea? · టీ పెట్టనా? | offers: Shall I …? (a fixed phrase); Tea or coffee? | Shall I make tea? Do you want sugar? | Your daughter-in-law (Swapna) comes home tired from work; you offer tea |
| 2 | `fam-did-you-take-your-tablets` | Did You Take Your Tablets? · మాత్రలు వేసుకున్నారా? | caring questions with Did you …? Yes, I did. | Did you take your tablets? Did you eat? Yes, I did. | Checking on a family member after lunch (Mohan) |
| 3 | `fam-whose-charger-is-this` | Whose Charger Is This? · ఈ ఛార్జర్ ఎవరిది? | whose and 's at home; Where is / are my …? | Whose charger is this? It's Raju's. Where are my glasses? | Everyone looks for the TV remote and a lost charger (Raju) |
| 4 | `fam-what-are-you-doing` | What Are You Doing? · ఏం చేస్తున్నారు? | am / is / are + -ing at home: cooking, sleeping, on the phone | Krishna is sleeping. Please call later. Are you cooking? Yes, I am. | Your son-in-law (Joseph) calls; you tell him what everyone is doing |
| 5 | `fam-dinner-is-ready` | Dinner Is Ready · భోజనం రెడీ | calling everyone to eat; saying the food is good; How was your day? (a fixed phrase) | Dinner is ready. Please come. This curry is very tasty. | Calling everyone for dinner and asking about their day (Anitha) |
| 6 | `fam-f3-conversation` | Conversation Day: A Sunday at Home · ఆదివారం ఇంట్లో | all of the week | — | Morning tea and tablets with a family member (Srinivas); a relative calls while lunch is cooking (Geetha) |
| 7 | `fam-f3-review` | Home Together · ఇంట్లో అందరం | review: offers, Did you …?, whose, -ing at home | | |

### F4 — Family Functions · ఇంట్లో శుభకార్యాలు

*Weddings, naming ceremonies and birthdays; the dates and times come from Week 3. "Thank you for coming" is a fixed phrase.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `fam-my-daughters-wedding` | My Daughter's Wedding · మా అమ్మాయి పెళ్లి | wedding words; The wedding is on … at …; Please come. | My daughter's wedding is on 12 May. Please come to the wedding. | Inviting a neighbour (Salma) to the wedding |
| 2 | `fam-this-is-my-son-in-law` | This Is My Son-in-Law · మా అల్లుడు | introducing relatives; Nice to meet you. | This is my son-in-law, Srinivas. Nice to meet you, sir. | Introducing new relatives to a friend (Kamala) at the reception |
| 3 | `fam-the-naming-ceremony` | The Naming Ceremony · బారసాల | naming ceremonies and birthdays: Her name is …; What does it mean? (Week 2) | Her name is Ananya. What does the name mean? | A guest (Rahim) asks the baby's name and what it means |
| 4 | `fam-who-is-that-lady` | Who Is That Lady? · ఆవిడ ఎవరు? | who questions about relatives; describing people (Week 4) | Who is that tall man? She is my cousin's wife. | A guest (Ruth) asks who people are at the function |
| 5 | `fam-welcome-please-eat` | Welcome, Please Eat · రండి, భోజనం చేయండి | hosting guests: Welcome! Thank you for coming. Lunch is upstairs. | Welcome! Thank you for coming. Lunch is ready upstairs. | Greeting guests at the door and sending them to lunch (Ramana) |
| 6 | `fam-f4-conversation` | Conversation Day: A Wedding in the Family · ఇంట్లో పెళ్లి | all of the week | — | Welcoming guests and introducing the bride's family (Mary); helping an older guest find a seat and lunch (Narayana) |
| 7 | `fam-f4-review` | Function Day · శుభకార్యం రోజు | review: inviting, introducing, hosting | | |

### F5 — Speaking for the Family · కుటుంబం తరఫున మాట్లాడటం

*"Not well" and "has a fever" are fixed phrases (health is Week 11). The learner speaks for a spouse, a parent, a child or a grandchild; the scenes never assume which.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `fam-my-wife-is-not-well` | My Wife Is Not Well · మా ఆవిడకి ఒంట్లో బాలేదు | is not well, has a fever, has a cough (fixed phrases) | My wife is not well. She has a fever. | At the clinic desk, telling the receptionist (Grace) why you came |
| 2 | `fam-his-name-and-age` | His Name, His Age · పేరు, వయసు | a family member's details: name, age, phone number (Week 3) | His name is Gopal. He is seventy-two. | Registering a family member at the clinic counter (Sita) |
| 3 | `fam-at-the-school-office` | At the School Office · స్కూల్ ఆఫీసులో | speaking for a child or grandchild: class, teacher, at home today | My son is in class five. He has a fever today. | Calling the school office (Usha) to say a child is at home today |
| 4 | `fam-her-appointment` | Her Appointment · అపాయింట్‌మెంట్ | When is …? on Monday at ten, for someone else | When is my father's test? Her appointment is on Monday at ten. | Booking a doctor's visit for a family member by phone (Jyothi) |
| 5 | `fam-please-say-it-again` | Please Say It Again · మళ్ళీ చెప్పండి | clarifying for someone else (Week 2): say it again, speak slowly, What does … mean? | Sorry? Please say it again slowly. What does fasting mean? | A nurse (Kavitha) explains a blood test; you check it for your mother-in-law |
| 6 | `fam-f5-conversation` | Conversation Day: A Clinic Visit for the Family · కుటుంబం కోసం క్లినిక్ | all of the week | — | Taking a family member to the doctor (Dr Suresh); calling a school office about a child (Anitha) |
| 7 | `fam-f5-review` | For My Family · నా కుటుంబం కోసం | review: details, appointments, clarifying | | |

### F6 — Family News & Review · కుటుంబ విశేషాలు

*Good and hard news, told simply with the past simple and -ing for the future (Week 1). The last lesson is a 30-second talk about the learner's own family, in whatever shape it has.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `fam-my-son-got-a-new-job` | My Son Got a New Job · మా అబ్బాయికి కొత్త ఉద్యోగం | past simple positive for news: got, passed, bought, moved | My son got a new job. My granddaughter passed her exams. | Telling a neighbour (Ayesha) the good news |
| 2 | `fam-my-daughter-is-coming` | My Daughter Is Coming · మా అమ్మాయి వస్తున్నారు | -ing and will for visits: next month, on Sunday, for two weeks | My daughter is coming next month. They will stay for two weeks. | A friend (Satish) asks about your plans for the holidays |
| 3 | `fam-thats-wonderful-news` | That's Wonderful! · చాలా సంతోషం! | reacting to news: Congratulations! That's wonderful. Is the baby well? | Congratulations! That is wonderful news. Are the mother and baby well? | A friend (Grace) tells you about a new grandchild |
| 4 | `fam-sad-news` | Sad News · బాధాకరమైన వార్త | sharing hard news gently: in hospital, passed away; I am sorry. | My uncle is in hospital. My aunt passed away last week. | A friend (Fatima) asks why you were away; she answers kindly (manners slip: changing the subject) |
| 5 | `fam-all-about-my-family` | All About My Family · మా కుటుంబం గురించి | speaking for 30 seconds about your family, in any shape | My family is small but happy. I have one son and two grandchildren. | Introducing your family at a community gathering (Kumar) |
| 6 | `fam-f6-conversation` | Conversation Day: Catching Up with an Old Friend · పాత స్నేహితులతో కబుర్లు | all of the week | — | Sharing family news with an old friend (Swapna); a relative phones with news of a wedding (Venkat) |
| 7 | `fam-f6-review` | My Family Story · మా కుటుంబ కథ | review of F1–F6: family words, jobs, home, functions, news | | |

## Talking with Grandchildren · మనవళ్లతో మాట్లాడటం (`gc-`, ~8 weeks, from Week 8)

G1–G4 open at Week 8; G5–G8 (storytelling and the past) open after Week 12.

| Week | Theme | Focus |
|---|---|---|
| G1 | Hello & Video Calls | greetings, How was school?, I miss you |
| G2 | Playing Together | Let's play, your turn, well done |
| G3 | School Talk | What did you learn today? homework, teachers |
| G4 | Mealtime | Eat your food, What would you like?, Is it tasty? |
| G5 | Telling Stories | Once upon a time …, past simple storytelling |
| G6 | Praise & Care | Be careful, Don't run, I'm proud of you |
| G7 | Festivals & Traditions for Kids | explaining our festivals simply |
| G8 | Their World & Review | cartoons, games, phones, sports |

*Level: G1–G4 use the main path to Week 8 (present simple with he / she + s, can / can't, Can I …?, could / would requests, imperatives, like and would like); G5–G8 use all of Stage 1 (past simple and was / were, going to, should, because / so). Every line is 7 words or fewer. Lines work for any child the learner loves (a grandchild, a niece's or nephew's child, a step-grandchild), and the learner may be Grandma or Grandpa. Grandchildren abroad may speak fast or with a foreign accent, so "Sorry? Say it again, please" (Week 2) comes back every week. Grandchildren's names (Arjun, Diya, Meera, Rohan, Zoya, Daniel) are not in §1's cast lists yet: boys take voice "b", girls voice "a".*

### G1 — Hello & Video Calls · హలో, వీడియో కాల్స్

*"How was school?", "Can you hear me?" and "You're on mute" are fixed phrases here; Week 9 teaches was and Week 20 video calls in full.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `gc-hello-my-dear` | Hello, My Dear! · హలో, బంగారం! | greetings for a child: Hello, dear. Good morning. Good night. Bye, take care. | Hello, Arjun! How are you? Good night, dear. Sleep well. | A morning phone call from a grandson (Arjun) |
| 2 | `gc-how-was-school` | How Was School? · స్కూల్ ఎలా ఉంది? | How was school? (a fixed phrase); Did you …? with short answers | How was school today? Did you play with your friends? | A granddaughter (Diya) phones after school |
| 3 | `gc-can-you-hear-me` | Can You Hear Me? · వినిపిస్తోందా? | video-call phrases: Can you hear me? I can't see you. You're on mute. | Can you hear me now? I can't see you. Please turn on the camera. | A video call that keeps freezing (Meera) |
| 4 | `gc-i-miss-you` | I Miss You · నువ్వు గుర్తొస్తున్నావు | feelings and visits: I miss you. I love you. When will you come? | I miss you very much. When will you come to India? | Saying goodbye at the end of a call (Rohan) |
| 5 | `gc-show-me-your-room` | Show Me Your Room · నీ గది చూపించు | imperatives and Can you …? (Weeks 5, 8): show me, What is that? | Show me your new bicycle. Can you show me your drawing? | A granddaughter shows you her room on video (Zoya) |
| 6 | `gc-g1-conversation` | Conversation Day: The Sunday Video Call · ఆదివారం వీడియో కాల్ | all of the week | — | A Sunday video call with a grandson and his mother (Arjun, Swapna); the line is bad and you ask them to say it again (Meera) |
| 7 | `gc-g1-review` | Calling My Grandchildren · మనవళ్లకు ఫోన్ | review: greetings, call phrases, Did you …? | | |

### G2 — Playing Together · కలిసి ఆడుకుందాం

*"Let's …" is a fixed phrase (built in Week 38).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `gc-lets-play` | Let's Play! · ఆడుకుందాం! | Let's + action (a fixed phrase): play, draw, sing, go to the park | Let's play carrom. Let's go to the park. | A grandson asks what to do on a holiday afternoon (Rohan) |
| 2 | `gc-your-turn` | Your Turn, My Turn · నీ వంతు, నా వంతు | game words: your turn, my turn, roll the dice, wait | It's your turn now. Roll the dice. | Playing snakes and ladders (Diya) |
| 3 | `gc-well-done` | Well Done! · భలే! | praise and encouragement: Well done! Good try! You can do it! | Well done! You won! Good try. You can do it. | A grandchild loses a game and is upset (Arjun) |
| 4 | `gc-can-you-catch-it` | Can You Catch It? · పట్టుకోగలవా? | can / can't for ability in play | Can you catch the ball? I can't run fast now. | Playing ball in the park; you say you need a rest (Zoya) |
| 5 | `gc-tell-me-the-rules` | Tell Me the Rules · ఆట ఎలా ఆడాలో చెప్పు | asking a child to explain: How do you play? Please say it slowly. (Week 2) | How do you play this game? Please say it slowly. | A grandchild teaches you a new game on the phone (Meera) |
| 6 | `gc-g2-conversation` | Conversation Day: A Rainy Afternoon · వర్షం పడే మధ్యాహ్నం | all of the week | — | Choosing an indoor game and taking turns (Rohan); two grandchildren fight over a toy and you make peace (Diya, Arjun) |
| 7 | `gc-g2-review` | Game Time · ఆట సమయం | review: Let's, turns, praise, can | | |

### G3 — School Talk · స్కూల్ కబుర్లు

*"What did you learn today?" is a fixed phrase until Week 9 teaches past questions with what and where.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `gc-what-did-you-learn` | What Did You Learn Today? · ఈ రోజు ఏం నేర్చుకున్నావు? | What did you learn? (a fixed phrase); school subjects; Do you like …? | What did you learn today? Do you like maths? | A granddaughter tells you about her school day (Zoya) |
| 2 | `gc-your-homework` | Your Homework · నీ హోమ్‌వర్క్ | Do you have …?; Can I help you?; first / then | Do you have homework today? First homework, then TV. | Getting a grandson to sit down for homework, kindly (Rohan; manners slip: shouting at him) |
| 3 | `gc-your-teacher` | Your Teacher · మీ టీచర్ | he / she + s about teachers and friends (Week 7): Does she …? | What is your teacher's name? Does she give homework every day? | Asking about a new class and a new friend (Arjun) |
| 4 | `gc-tests-and-marks` | Tests and Marks · పరీక్షలు, మార్కులు | test, marks, results; Don't worry (a fixed phrase) | When is your maths test? Don't worry. Just do your best. | A nervous grandchild the night before an exam (Diya) |
| 5 | `gc-the-school-bus` | The School Bus · స్కూల్ బస్ | times and routines (Weeks 3, 7); packing the bag; Did you take …? | The bus comes at half past seven. Did you take your water bottle? | Getting a grandchild ready in the morning (Meera) |
| 6 | `gc-g3-conversation` | Conversation Day: After School · స్కూల్ అయ్యాక | all of the week | — | Picking up a grandchild at the school gate and talking to the teacher (Grace); helping with homework at home (Rohan) |
| 7 | `gc-g3-review` | School Days · స్కూల్ రోజులు | review: school words, Does she …?, times | | |

### G4 — Mealtime · భోజనం సమయం

*Food words and Would you like …? come from Week 6.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `gc-eat-your-food` | Eat Your Food · అన్నం తిను | gentle imperatives: Eat your food. Wash your hands. One more bite. | Please wash your hands first. Eat your food, dear. | A grandchild won't eat the vegetables (Arjun) |
| 2 | `gc-what-would-you-like` | What Would You Like? · ఏం కావాలి? | Would you like …?; choices: dosa or idli? | What would you like for breakfast? Dosa or idli? | Asking a grandchild what to cook tomorrow (Zoya) |
| 3 | `gc-is-it-tasty` | Is It Tasty? · బాగుందా? | tasty, spicy, sweet, too hot; Do you like it? | Is it tasty? Do you like it? It's too spicy for me, Grandma. | A grandchild tries your pesarattu for the first time (Meera) |
| 4 | `gc-cook-with-me` | Cook with Me · నాతో వంట చెయ్యి | cooking steps for children (Week 6): first, then; Be careful, it's hot. | First, wash the rice. Then add water. Be careful, the pan is hot. | Grandpa and a grandson make laddus together (Rohan) |
| 5 | `gc-im-full` | I'm Full · కడుపు నిండింది | enough, full, a little more, no more, thank you | Are you full? A little more? No more, thank you, Grandpa. | Teaching table manners kindly at dinner (Diya) |
| 6 | `gc-g4-conversation` | Conversation Day: Sunday Lunch · ఆదివారం భోజనం | all of the week | — | Cooking lunch with two grandchildren (Arjun, Zoya); a picky eater and a spilled glass of milk (Diya) |
| 7 | `gc-g4-review` | Mealtime Review · భోజనం పునశ్చరణ | review: food, offers, gentle imperatives | | |

### G5 — Telling Stories · కథలు చెప్పడం

*Opens after Week 12: past simple and was / were (Week 9), and / but / so (Week 12). "Once upon a time" is taught as a story opening. Each Review ends with a short story heard first (§1a).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `gc-once-upon-a-time` | Once Upon a Time · అనగనగా | story openings with was / were: Once upon a time …, Long ago, there was … | Long ago, there was a poor farmer. He lived in a small village. | A grandchild asks for a bedtime story (Meera) |
| 2 | `gc-and-then` | And Then … · ఆ తర్వాత | story order: first, then, after that, in the end | Then the crow saw a pot. In the end, it drank the water. | Telling "The Thirsty Crow" together (Rohan) |
| 3 | `gc-when-i-was-young` | When I Was Young · నా చిన్నప్పుడు | was and could (Weeks 8, 9) for your own childhood | When I was young, life was simple. I walked to school every day. | A grandchild asks what life was like before phones (Arjun) |
| 4 | `gc-what-happened-next` | What Happened Next? · తర్వాత ఏమైంది? | asking a child to guess and tell: What happened next? Why did he …? | What happened next? Can you guess? Why did the monkey run away? | A grandchild tells you a story from school (Zoya) |
| 5 | `gc-what-did-we-learn` | What Did We Learn? · కథలో నీతి | the moral of a story with but / so | The tortoise was slow, but he won. Never tell lies. | Talking about a Panchatantra story (Diya) |
| 6 | `gc-g5-conversation` | Conversation Day: Bedtime Stories · పడుకునే ముందు కథలు | all of the week | — | Telling a story on a video call (Rohan); a grandchild asks about your childhood village (Meera) |
| 7 | `gc-g5-review` | Story Time · కథల సమయం | review: was / were, story order, past questions | | |

### G6 — Praise & Care · మెచ్చుకోలు, జాగ్రత్త

*Should (Week 11) and imperatives; "I'm proud of you" is a fixed phrase.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `gc-be-careful` | Be Careful! · జాగ్రత్త! | warnings: Be careful. Don't run. Hold my hand. | Be careful! The road is busy. Don't run near the pool. | Crossing a busy road with a grandchild (Arjun) |
| 2 | `gc-im-proud-of-you` | I'm Proud of You · నిన్ను చూసి గర్వంగా ఉంది | praise for effort: I'm proud of you. You worked hard. | I'm proud of you, Diya. You worked very hard. | A grandchild shows you a certificate (Diya) |
| 3 | `gc-are-you-hurt` | Are You Hurt? · దెబ్బ తగిలిందా? | small injuries and comfort (Week 11): Does it hurt? Show me. | Are you hurt? Show me your knee. Don't cry. It will be okay. | A grandchild falls off a bicycle (Rohan) |
| 4 | `gc-time-for-bed` | Time for Bed · పడుకునే టైమ్ | should / shouldn't and gentle rules | It's nine o'clock. Time for bed. You shouldn't watch TV so late. | A bedtime argument, kindly settled (Zoya) |
| 5 | `gc-why-are-you-sad` | Why Are You Sad? · ఎందుకు బాధగా ఉన్నావు? | feelings and because (Weeks 11, 12); listening kindly | Why are you sad today? Tell me. I'm here for you. | A grandchild had a fight with a friend (Meera) |
| 6 | `gc-g6-conversation` | Conversation Day: A Day at the Park · పార్క్‌లో ఒక రోజు | all of the week | — | Keeping two grandchildren safe at the park (Arjun, Diya); a lost toy and tears (Zoya) |
| 7 | `gc-g6-review` | Care and Kind Words · జాగ్రత్త, మంచి మాటలు | review: warnings, praise, comfort | | |

### G7 — Festivals & Traditions for Kids · పిల్లలకు మన పండుగలు

*Explaining customs simply, for a child who may be growing up abroad; scenes from Hindu, Muslim and Christian homes in turn.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `gc-why-do-we-light-lamps` | Why Do We Light Lamps? · దీపాలు ఎందుకు వెలిగిస్తాం? | why … ? because … (Weeks 2, 12) for customs: Diwali | Why do we light lamps on Diwali? Because good wins over bad. | Explaining Diwali to a grandson abroad on a video call (Rohan) |
| 2 | `gc-kites-and-rangoli` | Kites and Rangoli · గాలిపటాలు, ముగ్గులు | Sankranti: kites, rangoli, the village; going to (Week 10) | We are going to fly kites. Let's draw a rangoli together. | Planning Sankranti with a granddaughter (Diya) |
| 3 | `gc-eid-mubarak` | Eid Mubarak! · ఈద్ ముబారక్! | Ramzan and Eid: fasting, sheer khurma, new clothes, Eidi | In Ramzan, we fast until sunset. Eid Mubarak! Here is your Eidi. | A granddaughter asks why Grandpa fasts (Zoya) |
| 4 | `gc-merry-christmas` | Merry Christmas! · హ్యాపీ క్రిస్మస్! | Christmas: the star, carols, cake, the midnight service | We put a star on the house. We go to church at midnight. | Decorating for Christmas with a grandson (Daniel) |
| 5 | `gc-our-village-our-family` | Our Village, Our Family · మన ఊరు, మన కుటుంబం | family history and language: your great-grandfather, our village | Your great-grandfather was a farmer. We speak Telugu at home. | A grandchild asks why they should learn Telugu (Meera) |
| 6 | `gc-g7-conversation` | Conversation Day: A Festival Video Call · పండుగ వీడియో కాల్ | all of the week | — | Showing your festival preparations on video (Arjun); answering a grandchild's "why" questions (Zoya) |
| 7 | `gc-g7-review` | Festivals Review · పండుగల పునశ్చరణ | review: why / because, festival words, going to | | |

### G8 — Their World & Review · వాళ్ళ ప్రపంచం

*The child's world: cartoons, games, phones and sports. The child is often the teacher here, and the learner asks for help without embarrassment.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `gc-your-favourite-cartoon` | Your Favourite Cartoon · నీకు ఇష్టమైన కార్టూన్ | likes (Week 6) about cartoons, games and videos | What's your favourite cartoon? Can you show me that game? | A grandchild talks about a favourite show (Rohan) |
| 2 | `gc-teach-me-please` | Teach Me, Please · నాకు నేర్పించు | the child as teacher: How do I …? Show me again. Go slowly. | Can you teach me this game? Please show me again, slowly. | A grandchild helps you send a sticker on WhatsApp (Diya) |
| 3 | `gc-who-won-the-match` | Who Won the Match? · మ్యాచ్ ఎవరు గెలిచారు? | sports words; past questions (Week 9) | Who won the match yesterday? Did you score a goal? | Talking about a grandson's football match (Arjun) |
| 4 | `gc-too-much-phone` | Too Much Phone · ఫోన్ ఎక్కువైంది | screen time, kindly: should, Let's … instead | You should rest your eyes now. Let's go for a walk instead. | Persuading a grandchild to put the phone down (Meera; manners slip: grabbing the phone) |
| 5 | `gc-what-will-you-be` | What Will You Be? · పెద్దయ్యాక ఏమవుతావు? | dreams and plans: want to be, going to (Week 10) | What do you want to be? I'm going to be a doctor. | A grandchild shares a big dream (Zoya) |
| 6 | `gc-g8-conversation` | Conversation Day: The Grandchildren Are Here · మనవళ్ళు వచ్చారు | all of the week | — | Grandchildren arrive for the summer holidays (Rohan, Diya); a full day of play, food and stories (Arjun) |
| 7 | `gc-g8-review` | My Grandchildren and Me · నేనూ, నా మనవళ్ళు | review of G1–G8 | | |

## Visiting Family Abroad · విదేశాల్లో కుటుంబాన్ని కలవడం (`abroad-`, ~12 weeks in two parts)

Part 1 opens at Week 8, or at Week 4 for "My trip is soon". Part 2 opens at Week 16. Its listening uses foreign accents where the voices allow (§1a). Emergency numbers abroad: 911 in the US and Canada, 999 in the UK, 000 in Australia, 112 in Europe.

**Part 1: The Journey** · విదేశ ప్రయాణం

| Week | Theme | Focus |
|---|---|---|
| A1 | Getting Ready | passport, visa interview questions (purpose of visit, how long, who you will visit) |
| A2 | Airport Check-in & Security | luggage, boarding pass, wheelchair assistance |
| A3 | On the Flight | asking the crew for help, food, blankets, landing forms |
| A4 | Immigration & Customs | answering officers' questions, declaring items |
| A5 | Phone, Money & Safety | calling home, cards, if you are lost (old A10) |
| A6 | Flying Home | packing, the airport again, thanking hosts (old A12) |

*Level for Part 1: the main path to Week 8, every line 7 words or fewer. For the fast lane (from Week 4), Part 1 is chunk-based: can, Can I …? and Could I …? are learned as whole phrases, and answers are short and true ("Two months.", "My son's house."). Officers, crew and locals may speak with an American, British or Australian accent where the voices allow (§1a); "Sorry? Please say it again slowly" is always a good reply. Airport signs (Departures, Gate, Boarding, Baggage Claim) are the weeks' Read it cards.*

### A1 — Getting Ready · ప్రయాణానికి సిద్ధం

*Days 2–4 are the visa interview: short, honest answers about the purpose, the length of the stay and the learner's life in India.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `abroad-passport-and-visa` | Passport and Visa · పాస్‌పోర్ట్, వీసా | documents: passport, visa, ticket, invitation letter; Here is my … | Here is my passport. This is my appointment letter. | At the visa application centre: documents, photo and fingerprints (Ayesha) |
| 2 | `abroad-the-visa-interview` | The Visa Interview · వీసా ఇంటర్వ్యూ | the officer's questions: What is the purpose of your visit? Who will you visit? | I am visiting my son in Dallas. My daughter lives in London. | The visa officer asks why you are going (John; manners slip: "Why are you asking me?") |
| 3 | `abroad-how-long-will-you-stay` | How Long Will You Stay? · ఎన్ని రోజులు ఉంటారు? | will (Week 1): for three months, I will come back in …; Who pays? | I will stay for three months. My son pays for my ticket. | The officer asks how long you will stay and when you will return (David) |
| 4 | `abroad-my-life-in-india` | My Life in India · ఇండియాలో నా జీవితం | showing your ties at home: retired, my own house, my work here | I am a retired teacher. I have my own house in Guntur. | The officer asks about your work and home in India (Mary) |
| 5 | `abroad-packing-my-bag` | Packing My Bag · బ్యాగ్ సర్దడం | luggage: suitcase, cabin bag, 23 kilos, medicines; Can I carry …? | Can I carry pickles in my bag? My suitcase is 23 kilos. | Asking a travel agent what you can pack (Kumar) |
| 6 | `abroad-a1-conversation` | Conversation Day: Visa Day · వీసా రోజు | all of the week | — | The full visa interview (John); phoning your daughter afterwards with the news (Radha) |
| 7 | `abroad-a1-review` | Ready to Go · వెళ్ళడానికి రెడీ | review: documents, visa answers, packing | | |

### A2 — Airport Check-in & Security · చెక్-ఇన్, సెక్యూరిటీ

*Asking for a wheelchair is a normal, dignified request; the role plays never treat it as a bother.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `abroad-where-is-check-in` | Where Is Check-in? · చెక్-ఇన్ ఎక్కడ? | airport places and signs: Departures, the counter, the gate | Where is the Emirates counter, please? Excuse me, where is Gate 12? | Finding the airline counter with a porter's help (Raju) |
| 2 | `abroad-one-bag-to-check-in` | One Bag to Check In · ఒక బ్యాగ్ చెక్-ఇన్ | check-in: bags, window or aisle seat, boarding pass | I have one bag to check in. Can I have an aisle seat? | At the check-in counter (Anitha) |
| 3 | `abroad-i-need-a-wheelchair` | I Need a Wheelchair · వీల్‌చెయిర్ కావాలి | asking for assistance: I need …; I can't walk far (Week 8) | I need a wheelchair, please. I can't walk far. | Asking the airline staff for help to the gate (Joseph) |
| 4 | `abroad-at-security` | At Security · సెక్యూరిటీ చెకింగ్ | security instructions: tray, liquids, take out your phone | Please put your phone in the tray. Is there any liquid in this bag? | A security officer finds a bottle of oil in your cabin bag (Kavitha) |
| 5 | `abroad-at-the-gate` | At the Gate · గేట్ దగ్గర | boarding announcements, heard first; Is this the flight to …? | Is this the flight to Chicago? When does boarding start? | Checking your gate with another passenger after an announcement (Imran) |
| 6 | `abroad-a2-conversation` | Conversation Day: At Hyderabad Airport · హైదరాబాద్ ఎయిర్‌పోర్ట్‌లో | all of the week | — | Check-in with wheelchair help (Anitha); a gate change announcement and asking another passenger (Satish) |
| 7 | `abroad-a2-review` | Airport Day · ఎయిర్‌పోర్ట్ రోజు | review: check-in, assistance, security, boarding | | |

### A3 — On the Flight · విమానంలో

*Could I have …? (Week 8) for polite requests to the crew; food choices allow vegetarian, Hindu, halal and Jain meals.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `abroad-excuse-me-my-seat` | Excuse Me, My Seat · నా సీటు | finding your seat; help with the cabin bag | Excuse me, this is my seat. Can you put my bag up? | Someone is in your seat (Ramesh), and the crew helps (Grace) |
| 2 | `abroad-a-vegetarian-meal` | A Vegetarian Meal · శాకాహార భోజనం | meals on the plane: vegetarian, halal, chicken or pasta; hot water | Is this meal vegetarian? Can I have some hot water? | The crew offers chicken or pasta (Ruth) |
| 3 | `abroad-a-blanket-please` | A Blanket, Please · దుప్పటి ఇస్తారా? | comfort: blanket, pillow, headphones; Could I have …? | Could I have a blanket, please? It's very cold here. | Asking the crew for help at night (Mary) |
| 4 | `abroad-where-is-the-toilet` | Where Is the Toilet? · బాత్రూమ్ ఎక్కడ? | toilet, vacant, occupied; feeling unwell: dizzy, my ears hurt | Where is the toilet, please? I feel dizzy. Can I have water? | Feeling unwell during the flight; the crew helps (David) |
| 5 | `abroad-landing-forms` | Landing Forms · ల్యాండింగ్ ఫారం | the arrival card: name, flight number, address there | Can you help me with this form? My flight number is EK 521. | Asking the passenger next to you to help with the form (Salma) |
| 6 | `abroad-a3-conversation` | Conversation Day: A Long Flight · సుదీర్ఘ ప్రయాణం | all of the week | — | Meals and a blanket from the crew (Grace); changing planes in Dubai and finding the transfer desk (Imran) |
| 7 | `abroad-a3-review` | In the Air · విమానంలో | review: seats, meals, requests, forms | | |

### A4 — Immigration & Customs · ఇమ్మిగ్రేషన్, కస్టమ్స్

*Officers speak fast and briefly; the learner answers short and true, and asks them to repeat without fear. "My bag didn't come" is a fixed phrase for the fast lane.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `abroad-purpose-of-your-visit` | Why Are You Here? · ఎందుకు వచ్చారు? | the officer's questions: purpose, length of stay | I am here to visit my son. I'm staying with my daughter. | At the immigration desk (Joseph) |
| 2 | `abroad-where-will-you-stay` | Where Will You Stay? · ఎక్కడ ఉంటారు? | the address and a contact number | Here is my son's address. This is his phone number. | The officer asks for the address and a contact (Ruth) |
| 3 | `abroad-anything-to-declare` | Anything to Declare? · ఏమైనా డిక్లేర్ చేయాలా? | customs: food, seeds, pickles, gold; Is this allowed? | I have some sweets and pickles. Is this allowed? | A customs officer asks about the food in your bag (David; manners slip: an angry reply) |
| 4 | `abroad-fingerprints-and-photo` | Fingerprints and Photo · వేలిముద్రలు, ఫోటో | following instructions: look at the camera, fingers here, glasses off | Please look at the camera. Put your four fingers here. | Following instructions at the immigration machine (Mary) |
| 5 | `abroad-baggage-claim` | Baggage Claim · బ్యాగులు తీసుకోవడం | belts, trolleys, a missing bag | Where do I get a trolley? My bag is missing. | Reporting a missing bag at the airline desk (Kumar) |
| 6 | `abroad-a4-conversation` | Conversation Day: We Have Arrived · చేరుకున్నాం | all of the week | — | Through immigration and customs (Joseph, Grace); meeting family at Arrivals and phoning a friend in India (Venkat) |
| 7 | `abroad-a4-review` | Through the Airport · ఎయిర్‌పోర్ట్ దాటాం | review: officers' questions, customs, bags | | |

### A5 — Phone, Money & Safety · ఫోన్, డబ్బు, భద్రత

*Emergency numbers: 911 in the US and Canada, 999 in the UK, 000 in Australia, 112 in Europe. Spoken lines say them as words ("nine one one", "triple nine", "triple zero", "one one two") so the voice reads them right.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `abroad-calling-home` | Calling Home · ఇంటికి ఫోన్ | Wi-Fi, SIM card, calling India; Can I use …? | What is the Wi-Fi password? Can I call India from here? | Asking your daughter-in-law to set up your phone (Ayesha) |
| 2 | `abroad-dollars-and-pounds` | Dollars and Pounds · డాలర్లు, పౌండ్లు | money: dollars, cents, pounds, pence; card or cash | Can I pay by card? How much is this in rupees? | Buying coffee at an airport café (Mary) |
| 3 | `abroad-i-am-lost` | I Am Lost · దారి తప్పాను | if you are lost (Week 8): the address card, Please call this number | I am lost. Please help me. Can you call this number, please? | Lost after a walk; asking a shop worker for help (David) |
| 4 | `abroad-call-911` | Call 911! · 911 కి ఫోన్ చేయండి! | the emergency number for each country; I need an ambulance; the address | Please call 911. He fell down. I need an ambulance at this address. | A man falls in the park in the US; you call 911 (Ruth) |
| 5 | `abroad-keep-your-passport-safe` | Keep Your Passport Safe · పాస్‌పోర్ట్ జాగ్రత్త | safety rules with keep and don't; fake "immigration" calls | Keep your passport in a safe place. Don't open the door to strangers. | A caller says he is from immigration and asks for money; you refuse and hang up (Satish) |
| 6 | `abroad-a5-conversation` | Conversation Day: Out Alone for the First Time · మొదటిసారి ఒంటరిగా | all of the week | — | Paying at a shop by card (Grace); lost on the way back, asking a police officer for help (John) |
| 7 | `abroad-a5-review` | Safe and Connected · భద్రంగా, అందుబాటులో | review: phone, money, lost, emergency numbers | | |

### A6 — Flying Home · తిరుగు ప్రయాణం

*Last in Part 1 so the whole journey sits together; it reuses A2–A4 in reverse, plus delays and missed connections.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `abroad-packing-to-go-home` | Packing to Go Home · తిరిగి వెళ్ళడానికి సర్దుకోవడం | weight and gifts: too heavy, 23 kilos, gifts for … | Is my suitcase too heavy? These are gifts for my friends. | Weighing the bags with your son (Krishna) |
| 2 | `abroad-thank-you-for-everything` | Thank You for Everything · అన్నిటికీ థాంక్స్ | thanking hosts and neighbours; Please visit us in India. | Thank you for everything. Please come to India next year. | Saying goodbye to a neighbour abroad (Mary) |
| 3 | `abroad-my-flight-is-delayed` | My Flight Is Delayed · ఫ్లైట్ ఆలస్యం | delayed, cancelled, the next flight; What time will it leave? | My flight is delayed. What happens now? What time will it leave? | At the airline desk after a delay (Joseph) |
| 4 | `abroad-i-missed-my-connection` | I Missed My Connection · కనెక్టింగ్ ఫ్లైట్ మిస్ అయ్యాను | transit: missed flight, transfer desk, a new boarding pass | I missed my flight to Hyderabad. Where is the transfer desk? | At the transfer desk in Dubai or Doha (Fatima) |
| 5 | `abroad-home-again` | Home Again · మళ్ళీ ఇంటికి | telling friends about the trip with the past simple | I saw snow for the first time! The people were very friendly. | A neighbour back home asks about your trip (Narayana) |
| 6 | `abroad-a6-conversation` | Conversation Day: The Journey Home · ఇంటికి ప్రయాణం | all of the week | — | Goodbyes and a delayed flight (Joseph); back in India, telling a friend about the trip (Padma) |
| 7 | `abroad-a6-review` | The Journey: Review · ప్రయాణం పునశ్చరణ | review of A1–A6 | | |

**Part 2: Living There** · విదేశంలో రోజులు

| Week | Theme | Focus |
|---|---|---|
| A7 | First Days There | home rules, neighbours, getting around (old A5) |
| A8 | Supermarket Abroad | dollars / pounds, units (pounds, ounces), coupons, checkout (old A6) |
| A9 | Doctor & Pharmacy Abroad | appointments, insurance, emergency numbers (old A7) |
| A10 | Small Talk with Neighbours | weather, walks, parks, "How are you doing?" (old A8) |
| A11 | Temple & Community Abroad | meeting other Indians and locals (old A9) |
| A12 | Sightseeing & Review | tickets, tours, asking someone to take a photo (old A11) |

*Level for Part 2: the main path to Week 16 (Can I have …?, directions, timetables and How long does it take?, the doctor's "How long have you had …?" as a phrase), every line 10 words or fewer. Scenes rotate between the US, the UK, Canada and Australia; names abroad come from §1's lists (John, David, Joseph, Mary, Grace, Ruth).*

### A7 — First Days There · అక్కడ మొదటి రోజులు

*How does … work? and Do I …? for a new house; traffic on the right in the US and Canada, on the left in the UK and Australia.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `abroad-house-rules` | House Rules · ఇంటి నియమాలు | appliances and home rules: heater, dishwasher, shoes off; How does … work? | How does the heater work? Do I press this button first? | Your son-in-law shows you round the house (Joseph) |
| 2 | `abroad-meeting-the-neighbours` | Meeting the Neighbours · పొరుగువాళ్ళతో పరిచయం | introductions abroad: first names, I'm visiting my …, Nice to meet you | Hi, I'm Kiran. I'm visiting my daughter for three months. | Meeting the next-door neighbour on the driveway (Ruth) |
| 3 | `abroad-getting-around` | Getting Around · ఊర్లో తిరగడం | buses abroad (Week 15): bus card, the stop button, Which bus goes to …? | Which bus goes to the city library? Does this bus stop at Main Street? | Taking a local bus alone (David) |
| 4 | `abroad-crossing-the-road` | Crossing the Road · రోడ్డు దాటడం | crossings, the walk signal, sidewalk and pavement, the other side of the road | Wait for the green man, then cross. In the US, cars drive on the right. | A neighbour explains the crossing rules on a walk (Grace) |
| 5 | `abroad-at-the-library` | At the Library · లైబ్రరీలో | free places: library, park, community centre; Is it free? Can I join? | Is it free for visitors? Can I borrow books with my son's card? | Asking about a library card and a seniors' club (Mary) |
| 6 | `abroad-a7-conversation` | Conversation Day: The First Week · మొదటి వారం | all of the week | — | A neighbour invites you in for coffee (Ruth); finding the bus to the shops (John) |
| 7 | `abroad-a7-review` | Settling In · అలవాటు పడటం | review: home rules, neighbours, transport | | |

### A8 — Supermarket Abroad · విదేశీ సూపర్ మార్కెట్

*Units: pounds and ounces, gallons in the US; kilos, but pints of milk, in the UK. "Cheaper" is a fixed phrase (comparatives are Week 22).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `abroad-where-can-i-find-rice` | Where Can I Find Rice? · బియ్యం ఎక్కడ దొరుకుతాయి? | aisles: Excuse me, where can I find …? aisle seven, next to … | Excuse me, where can I find rice? Aisle seven, next to the pasta. | Asking a store worker for help (Grace) |
| 2 | `abroad-pounds-and-ounces` | Pounds and Ounces · పౌండ్లు, ఔన్సులు | US units: a pound is about half a kilo; a gallon of milk | A pound is about half a kilo. I need a gallon of milk. | Buying fruit and milk; the worker explains the units (David) |
| 3 | `abroad-coupons-and-offers` | Coupons and Offers · కూపన్లు, ఆఫర్లు | on sale, buy one get one free, coupons, store card | Is this on sale? Buy one, get one free. | Asking the cashier about an offer (Ruth) |
| 4 | `abroad-at-the-checkout` | At the Checkout · బిల్లింగ్ దగ్గర | self-checkout, bags, card machine, receipt; Can you help me? | Can you help me with this machine? Do you need a bag? | Using the self-checkout with a worker's help (John) |
| 5 | `abroad-the-indian-store` | At the Indian Store · ఇండియన్ స్టోర్‌లో | Indian groceries abroad; dollars and rupees; meeting Telugu shopkeepers | Do you have Sona Masoori rice? In India it's much cheaper! | Shopping at an Indian store whose owner is from Guntur (Srinivas) |
| 6 | `abroad-a8-conversation` | Conversation Day: The Weekly Shop · వారానికి సరుకులు | all of the week | — | A big supermarket with a list (Grace); the card machine fails and the cashier helps (Joseph) |
| 7 | `abroad-a8-review` | Shopping Abroad · విదేశాల్లో షాపింగ్ | review: aisles, units, offers, paying | | |

### A9 — Doctor & Pharmacy Abroad · విదేశాల్లో డాక్టర్, మందులు

*Emergency numbers by country: 911 in the US and Canada, 999 in the UK, 000 in Australia, 112 in Europe (said as words in spoken lines). A GP in the UK and Australia; a clinic or urgent care in the US. "I've had it for …" is the Week 16 phrase.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `abroad-making-an-appointment` | Making an Appointment · అపాయింట్‌మెంట్ | booking: I'd like to see a doctor; walk-in clinic, urgent care, GP | I'd like to see a doctor today, please. Is there a walk-in clinic near here? | Calling a clinic for an appointment (Mary) |
| 2 | `abroad-my-travel-insurance` | My Travel Insurance · ట్రావెల్ ఇన్సూరెన్స్ | insurance card, policy number; Do you accept this insurance? | Here is my travel insurance card. Do you accept this insurance? | At the clinic front desk (Ruth) |
| 3 | `abroad-my-medicines-from-india` | My Medicines from India · ఇండియా నుంచి తెచ్చిన మందులు | your conditions and medicines (Week 16): I take … for …; I've had it for … | I take this tablet for BP every morning. I have diabetes. I've had it for ten years. | The doctor asks about your medicines (David) |
| 4 | `abroad-at-the-pharmacy` | At the Pharmacy · ఫార్మసీలో | prescription, over the counter, pick up (Week 17) | Do I need a prescription for this? When can I pick up the medicine? | At the pharmacy counter (Grace) |
| 5 | `abroad-emergency-numbers` | Emergency Numbers · అత్యవసర నంబర్లు | the number for each country; what to say: address, what happened (Week 18) | In the UK, call 999 for an ambulance. He has chest pain. Please come quickly. | Calling 911 for someone at home who has chest pain (John) |
| 6 | `abroad-a9-conversation` | Conversation Day: A Visit to Urgent Care · అర్జెంట్ కేర్‌కి | all of the week | — | Registering with insurance and seeing the doctor (Ruth, David); picking up the medicine at the pharmacy (Grace) |
| 7 | `abroad-a9-review` | Health Abroad · విదేశాల్లో ఆరోగ్యం | review: appointments, insurance, medicines, emergencies | | |

### A10 — Small Talk with Neighbours · పొరుగువాళ్ళతో కబుర్లు

*"How are you doing?" and "isn't it?" are fixed phrases (small talk is Week 34). Temperatures in Fahrenheit (US) and Celsius.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `abroad-how-are-you-doing` | How Are You Doing? · ఎలా ఉన్నారు? | greetings abroad: How are you doing? You all right? Good, thanks. And you? | Hi! How are you doing? Good, thanks. And you? | A neighbour waves from her garden (Ruth) |
| 2 | `abroad-its-cold-today` | It's Cold Today · ఈ రోజు చలిగా ఉంది | weather talk: snow, freezing, sunny; Fahrenheit and Celsius | It's very cold today, isn't it? In India it's forty degrees now! | Chatting by the mailboxes (John) |
| 3 | `abroad-a-walk-in-the-park` | A Walk in the Park · పార్కులో నడక | the park: dog, trail, bench; Do you walk here every day? | Do you walk here every day? Is your dog friendly? | Meeting a walker with a dog (Mary) |
| 4 | `abroad-where-are-you-from` | Where Are You From? · మీది ఏ ఊరు? | India simply: Andhra Pradesh, Telangana, Telugu, our food | I'm from Guntur, in South India. We speak Telugu there. | A neighbour asks about India (David; manners slip: a rude correction when he says "Hindi") |
| 5 | `abroad-come-for-tea` | Come for Tea · టీకి రండి | inviting a neighbour (Week 10) and thanking them | Would you like to come for tea on Saturday? Thank you for the lovely cake. | Inviting a neighbour home and sharing Indian snacks (Grace) |
| 6 | `abroad-a10-conversation` | Conversation Day: Over the Fence · పొరుగింటి కబుర్లు | all of the week | — | A long chat about weather and India (John); a neighbour comes for tea (Ruth) |
| 7 | `abroad-a10-review` | Friendly Talk · స్నేహంగా మాటలు | review: greetings, weather, invitations | | |

### A11 — Temple & Community Abroad · విదేశాల్లో గుడి, సమాజం

*Temple, mosque and church in turn; meeting other visiting parents and local people.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `abroad-is-there-a-temple` | Is There a Temple Near Here? · దగ్గర్లో గుడి ఉందా? | places of worship abroad: temple, mosque, church; How far is it? | Is there a Telugu temple near here? What time is Friday prayer? | Asking at the Indian store about the temple and the mosque (Srinivas) |
| 2 | `abroad-meeting-telugu-people` | Meeting Telugu People · తెలుగు వాళ్ళను కలవడం | Which town are you from? Are you visiting your children too? | Which town are you from? Are you visiting your children too? | Meeting another visiting parent at the temple (Kamala) |
| 3 | `abroad-the-seniors-group` | The Seniors' Group · సీనియర్ల గ్రూప్ | the community centre: yoga class, seniors' lunch, sign up | Can I join the yoga class? Do I need to sign up? | At the community centre desk (Mary) |
| 4 | `abroad-explaining-our-festival` | Explaining Our Festival · మన పండుగ గురించి | telling locals about Diwali, Eid or Christmas in a Telugu home | Diwali is our festival of lights. We make sweets and visit friends. | A neighbour asks about the lamps on your balcony (Ruth) |
| 5 | `abroad-helping-out` | Helping Out · సహాయం చేయడం | volunteering: Can I help? the temple kitchen, the church food bank, Eid charity | Can I help in the kitchen? I can cook for fifty people. | Volunteering at a church community dinner (Joseph) |
| 6 | `abroad-a11-conversation` | Conversation Day: A Festival Abroad · విదేశంలో పండుగ | all of the week | — | Diwali or Eid at the community hall with other Telugu families (Salma); explaining the festival to a local guest (David) |
| 7 | `abroad-a11-review` | Community Abroad · విదేశాల్లో సమాజం | review: places, meeting people, volunteering | | |

### A12 — Sightseeing & Review · చూడదగ్గ ప్రదేశాలు, పునశ్చరణ

*Was / were and adjectives (Week 9) to describe a day out; the last lesson is a one-minute talk about the stay.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `abroad-two-tickets-please` | Two Tickets, Please · రెండు టికెట్లు | tickets: adult, senior, discount; opening times | Two tickets, please. Is there a senior discount? What time does the museum close? | At a museum ticket desk (Grace) |
| 2 | `abroad-on-a-tour` | On a Tour · టూర్‌లో | following a guide: the meeting point, back on the bus by … | What time should we be back? Where is the meeting point? | A bus tour of the city (John) |
| 3 | `abroad-can-you-take-our-photo` | Can You Take Our Photo? · మా ఫోటో తీస్తారా? | asking a stranger politely (Week 8): Could you …? One more, please. | Excuse me, could you take our photo? One more, please. Thank you so much! | Asking a tourist to take your photo at a famous place (Mary) |
| 4 | `abroad-it-was-amazing` | It Was Amazing! · అద్భుతంగా ఉంది! | was / were + adjectives: huge, beautiful, crowded | The falls were huge and very beautiful. It was crowded, but we enjoyed it. | Telling a neighbour about your day out (Ruth) |
| 5 | `abroad-my-trip-in-one-minute` | My Trip in One Minute · ఒక నిమిషంలో నా ప్రయాణం | speaking for one minute about your stay, in the past simple | I stayed with my daughter for four months. The best part was the snow. | Telling friends at home about it on a video call (Padma) |
| 6 | `abroad-a12-conversation` | Conversation Day: A Day Out · ఒక రోజు విహారం | all of the week | — | Tickets, a tour and a photo at a famous place (Grace, John); lunch at a café and paying by card (David) |
| 7 | `abroad-a12-review` | Living There: Review · విదేశంలో రోజులు పునశ్చరణ | review of A7–A12 | | |

## English for Work · పనిలో ఇంగ్లీష్ (`work-`, ~8 weeks, from Week 12)

For working adults. W1, W2 and W8 are for everyone; the learner picks the middle modules that fit their work.

| Week | Theme | Focus |
|---|---|---|
| W1 | Introducing Yourself at Work · పనిలో పరిచయం | name, job, experience: I work as a driver. I have ten years' experience. |
| W2 | Job Interviews · ఉద్యోగ ఇంటర్వ్యూ | common questions: Tell me about yourself. Why do you want this job? |
| W3 | Customers in a Shop · షాపులో కస్టమర్లు | How can I help you? We have it in blue. It's on offer. |
| W4 | Drivers & Delivery · డ్రైవర్లు, డెలివరీ | addresses, calls, delivery OTPs: I'm outside your gate. |
| W5 | Working in a Home · ఇళ్ళలో పని | cooking, cleaning and care work: What time should I come? Shall I clean the kitchen? |
| W6 | Office & Phone Manners · ఆఫీసు, ఫోన్ మర్యాదలు | Please hold. I'll put you through. Can I take a message? |
| W7 | Leave, Pay & Safety · సెలవు, జీతం, భద్రత | Can I take leave on Friday? My salary hasn't come. This machine isn't safe. |
| W8 | My Work Story & Review · నా పని కథ | a one-minute talk about your work |

*Level: all of Stage 1 (to Week 12), every line 7 words or fewer. Points from Stage 2 (Shall I …?, I'll put you through, have to) are fixed phrases. Scenes are adult and dignified: the worker is skilled, asks clearly, agrees terms and can say no politely, and employers and customers answer with respect. Any job answer is good, including "retired" and "looking for work". Modules: shop and customers (W3), drivers and delivery (W4), home and care workers (W5), security and office helpers (W6); everyone takes W1, W2, W7 and W8.*

### W1 — Introducing Yourself at Work · పనిలో పరిచయం

*Present simple for your job, have for experience, can for skills (Week 8).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `work-i-work-as-a-driver` | I Work as a Driver · నేను డ్రైవర్‌గా పని చేస్తాను | I work as a …; I am a … at …; jobs, retired, looking for work | I work as a driver. I am a cook at a hotel. | A new colleague asks about your job (Ramesh) |
| 2 | `work-ten-years-experience` | Ten Years' Experience · పదేళ్ళ అనుభవం | have … experience; before, I worked in … | I have ten years' experience. Before, I worked in a hotel. | A supervisor asks about your experience (Padma) |
| 3 | `work-my-working-hours` | My Working Hours · పని వేళలు | times, days and shifts (Weeks 3, 7) | I start work at eight. I work the night shift. | A friend asks about your shift (Gopal) |
| 4 | `work-i-can-drive` | I Can Drive, I Can Cook · నాకు డ్రైవింగ్ వచ్చు | skills with can: drive, cook, use a computer, speak Hindi | I can drive cars and vans. I can speak Telugu and Hindi. | Telling a new manager what you can do (Kumar) |
| 5 | `work-meeting-the-team` | Meeting the Team · టీమ్‌తో పరిచయం | the first day: I'm new here; Where is …?; Who is the manager? | Hello, I'm Sai. I'm new here. Who is the manager here? | The first morning at a new job (Fatima) |
| 6 | `work-w1-conversation` | Conversation Day: My First Day · నా మొదటి రోజు | all of the week | — | Meeting the supervisor and the team (Padma, Imran); asking a colleague where things are (Usha) |
| 7 | `work-w1-review` | About My Work · నా పని గురించి | review: job, experience, hours, skills | | |

### W2 — Job Interviews · ఉద్యోగ ఇంటర్వ్యూ

*Builds on Week 12's "All About Me" and because / so; the learner also asks the employer questions.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `work-tell-me-about-yourself` | Tell Me About Yourself · మీ గురించి చెప్పండి | a short answer: name, town, work, experience | My name is Kiran. I'm from Nellore. I was a cook for five years. | An interview at a hotel (Anitha) |
| 2 | `work-why-do-you-want-this-job` | Why Do You Want This Job? · ఈ ఉద్యోగం ఎందుకు? | reasons with because and so | I like working with people. This job is close to my home. | An interview at a supermarket (Suresh) |
| 3 | `work-i-am-always-on-time` | I Am Always on Time · నేను ఎప్పుడూ టైమ్‌కి వస్తాను | describing yourself as a worker: honest, careful, hard-working; always (Week 7) | I am always on time. I am honest and hard-working. | An interview at a security agency (Venkat) |
| 4 | `work-do-you-have-any-questions` | Do You Have Any Questions? · మీకు ఏమైనా ప్రశ్నలు ఉన్నాయా? | asking about hours, pay, holidays and the start date, politely | What are the working hours? When can I start? | Asking the employer about hours and pay (Rani; manners slip: a blunt "How much salary?") |
| 5 | `work-thank-you-for-your-time` | Thank You for Your Time · మీ సమయానికి థాంక్స్ | ending an interview; following up by phone | Thank you for your time, sir. When will I hear from you? | Ending an interview, then a follow-up call (Mohan) |
| 6 | `work-w2-conversation` | Conversation Day: The Interview · ఇంటర్వ్యూ | all of the week | — | A full interview for a delivery job (Satish); a phone call with the job offer (Kavitha) |
| 7 | `work-w2-review` | Interview Ready · ఇంటర్వ్యూకి రెడీ | review: answers, reasons, questions | | |

### W3 — Customers in a Shop · షాపులో కస్టమర్లు

*Module for shop, showroom and counter staff. Percentages are written as words ("twenty percent off") so the voice reads them.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `work-how-can-i-help-you` | How Can I Help You? · ఏం కావాలండీ? | greeting customers: How can I help you? Are you looking for …? | Good morning! How can I help you? Are you looking for a saree? | A customer walks into the saree shop (Geetha) |
| 2 | `work-we-have-it-in-blue` | We Have It in Blue · బ్లూలో కూడా ఉంది | colours and sizes: We have it in …; Sorry, we don't have … | We have it in blue and green. Sorry, we don't have size ten. | A customer asks for another colour and size (Mary) |
| 3 | `work-its-on-offer` | It's on Offer · ఆఫర్ ఉంది | prices and offers: on offer, twenty percent off, buy one get one | This shirt is on offer today. It's twenty percent off. | Explaining an offer to a customer (Rahim) |
| 4 | `work-cash-or-upi` | Cash or UPI? · క్యాష్ ఆ, UPI ఆ? | billing: the bill, change, bags, UPI | Cash or UPI, sir? Here is your bill and change. | At the billing counter (Sarala) |
| 5 | `work-an-unhappy-customer` | An Unhappy Customer · కోపంగా ఉన్న కస్టమర్ | complaints and returns, calmly: I'm sorry. Let me check. | I'm sorry about that. Let me check. Please wait one minute, madam. | A customer wants to return a shirt (David; manners slip: arguing back) |
| 6 | `work-w3-conversation` | Conversation Day: A Busy Saturday · బిజీ శనివారం | all of the week | — | Serving two customers at once (Jyothi, Krishna); a return at the counter (Ramana) |
| 7 | `work-w3-review` | Serving Customers · కస్టమర్ సేవ | review: greeting, offers, billing, complaints | | |

### W4 — Drivers & Delivery · డ్రైవర్లు, డెలివరీ

*Module for cab, auto and delivery drivers. A delivery OTP is the only OTP a worker ever asks for; bank OTPs are never shared (Week 21).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `work-im-outside-your-gate` | I'm Outside Your Gate · గేట్ బయట ఉన్నాను | calling customers: I'm outside; Which floor? I'm coming up. | Hello, I'm outside your gate. Which floor is your flat? | Calling a customer at an apartment block (Salma) |
| 2 | `work-please-tell-me-the-otp` | Please Tell Me the OTP · OTP చెప్తారా? | the delivery OTP; handing over; Thank you | Please tell me the delivery OTP. Your parcel is delivered. Thank you. | Delivering a parcel (Grace) |
| 3 | `work-where-do-you-want-to-go` | Where Do You Want to Go? · ఎక్కడికి వెళ్ళాలి? | cab and auto: Where to? the route, how long it takes | Where do you want to go, sir? There is traffic. I'll take another road. | A passenger in your cab (Joseph) |
| 4 | `work-stuck-in-traffic` | Stuck in Traffic · ట్రాఫిక్‌లో ఉన్నాను | delays: I'm stuck in traffic; I'll be there in ten minutes | Sorry, I'm stuck in traffic. I will be there in ten minutes. | A customer calls because the food is late (Kamala; manners slip: "Not my problem.") |
| 5 | `work-sign-here-please` | Sign Here, Please · ఇక్కడ సంతకం చేయండి | goods delivery: count, sign, receipt, cash on delivery | Please sign here. That's 450 rupees, cash on delivery. | Delivering goods to a kirana shop (Prasad) |
| 6 | `work-w4-conversation` | Conversation Day: A Day on the Road · రోడ్డు మీద ఒక రోజు | all of the week | — | A customer gives confusing directions (Swapna); a passenger asks for a change of route (Imran) |
| 7 | `work-w4-review` | On the Road · రోడ్డు మీద | review: calls, OTPs, routes, delays | | |

### W5 — Working in a Home · ఇళ్ళలో పని

*Module for cooks, cleaners, home drivers and care workers. Respect on both sides: the worker agrees times and tasks clearly and can say no politely. "Shall I …?" is a fixed phrase.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `work-what-time-should-i-come` | What Time Should I Come? · ఎన్నింటికి రావాలి? | agreeing days and times; should (Week 11) | What time should I come tomorrow? I come on weekdays, eight to twelve. | Fixing timings with a new employer (Usha) |
| 2 | `work-shall-i-clean-the-kitchen` | Shall I Clean the Kitchen? · వంటగది శుభ్రం చేయనా? | offers and the day's tasks: Shall I …? What should I do first? | Shall I clean the kitchen first? What should I cook today? | Checking the day's tasks with the employer (Mohan) |
| 3 | `work-how-much-salt` | How Much Salt? · ఉప్పు ఎంత? | preferences and instructions: less oil, no onion; Is this okay? | How much salt do you like? Is this okay for you? | A cook asks the family what they like (Satish cooks; the employer is Radha) |
| 4 | `work-caring-for-an-elder` | Caring for an Elder · పెద్దవాళ్ళను చూసుకోవడం | care work: walking, tablets, meals; slowly, gently | Please hold my arm. Walk slowly. Did you take your evening tablets? | A home-care worker helps an elderly man walk (Narayana) |
| 5 | `work-saying-no-politely` | Saying No Politely · మర్యాదగా వద్దనడం | limits and requests: Sorry, I can't today; I need Sunday off | Sorry, I can't stay late today. I need Sunday off, please. | An employer asks for extra work at short notice (Sita) |
| 6 | `work-w5-conversation` | Conversation Day: A New Job in a Home · కొత్త ఇంట్లో పని | all of the week | — | Agreeing tasks, times and pay on the first day (Kavitha); caring for an elder while the family is out (Gopal) |
| 7 | `work-w5-review` | Work in a Home · ఇంట్లో పని | review: times, tasks, care, saying no | | |

### W6 — Office & Phone Manners · ఆఫీసు, ఫోన్ మర్యాదలు

*Module for security guards, office helpers and front-desk staff: the gate, the visitor register and the phone. "I'll put you through" is a fixed phrase.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `work-who-do-you-want-to-meet` | Who Do You Want to Meet? · ఎవరిని కలవాలి? | security at the gate: visitors, the register, ID | Who do you want to meet, sir? Please write your name here. | A visitor at the apartment gate (Rahim) |
| 2 | `work-please-hold` | Please Hold · కొంచెం లైన్‌లో ఉండండి | answering the office phone: Good morning, …; Please hold. | Good morning, Sri Sai Traders. Please hold for one minute. | Answering the office phone (Mary) |
| 3 | `work-ill-put-you-through` | I'll Put You Through · కనెక్ట్ చేస్తాను | transferring a call; He is in a meeting; She is out. | I'll put you through now. Sorry, he is in a meeting. | A caller asks for the manager (Venkat) |
| 4 | `work-can-i-take-a-message` | Can I Take a Message? · మెసేజ్ చెప్పాలా? | taking a message: name, number, spelling (Week 3) | Can I take a message? Please spell your name for me. | Writing down a message for the manager (Ayesha) |
| 5 | `work-office-errands` | Office Errands · ఆఫీసు పనులు | understanding tasks: bring, photocopy, keep, send | Please make two photocopies of this. Where should I keep these files? | The manager gives you the morning's tasks (Suresh) |
| 6 | `work-w6-conversation` | Conversation Day: At the Front Desk · రిసెప్షన్‌లో | all of the week | — | Visitors at the gate and a delivery for the office (Ramana, Grace); a busy phone with two callers (Kumar) |
| 7 | `work-w6-review` | Front Desk Manners · ఆఫీసు మర్యాదలు | review: visitors, calls, messages, tasks | | |

### W7 — Leave, Pay & Safety · సెలవు, జీతం, భద్రత

*Firm but polite. "My salary hasn't come" is taught as "My salary didn't come" (Week 9); the present perfect comes in Week 29.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `work-can-i-take-leave` | Can I Take Leave on Friday? · శుక్రవారం సెలవు ఇస్తారా? | asking for leave with a reason: Can I …? because … | Can I take leave on Friday? I have a hospital appointment. | Asking the supervisor for a day's leave (Padma) |
| 2 | `work-sorry-i-couldnt-come` | Sorry, I Couldn't Come · రాలేకపోయాను, sorry | explaining an absence: was, couldn't (Weeks 8, 9) | Sorry, I couldn't come yesterday. I was sick. Here is the doctor's note. | Explaining an absence to the manager (Krishna) |
| 3 | `work-my-salary-didnt-come` | My Salary Didn't Come · జీతం రాలేదు | pay, calmly and firmly: salary, advance, overtime; When will …? | My salary didn't come this month. When will I get my overtime? | Asking the accounts clerk about late pay (Sarala; manners slip: shouting) |
| 4 | `work-this-isnt-safe` | This Isn't Safe · ఇది ప్రమాదం | safety: helmet, gloves, wet floor, broken ladder | This ladder isn't safe. Please check it. Wear your helmet and gloves. | Telling the supervisor about a broken ladder (Imran) |
| 5 | `work-i-hurt-my-hand` | I Hurt My Hand · చేతికి దెబ్బ తగిలింది | accidents at work (Weeks 8, 11): I hurt …; first aid; Please call 108 | I hurt my hand on the machine. Where is the first-aid box? | A co-worker cuts her hand; you help and tell the supervisor (Rani) |
| 6 | `work-w7-conversation` | Conversation Day: A Talk with the Supervisor · సూపర్‌వైజర్‌తో మాట | all of the week | — | Asking for leave and about late pay (Padma); reporting a wet floor after a fall (David) |
| 7 | `work-w7-review` | Rights and Safety · హక్కులు, భద్రత | review: leave, absence, pay, safety | | |

### W8 — My Work Story & Review · నా పని కథ

*Past, present and future of the learner's work, for anyone working or retired; Day 5 is a one-minute speaking mission with "Choose instead".*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `work-my-first-job` | My First Job · నా మొదటి ఉద్యోగం | past simple for your work history: started, worked, moved | I started work at eighteen. I worked in a rice mill. | A young colleague asks how you started (Satish) |
| 2 | `work-what-i-do-every-day` | What I Do Every Day · రోజూ నేను చేసే పని | present simple for your work routine; first, then | First, I open the shop at nine. Then I clean the counter. | Explaining your job to a trainee (Anitha) |
| 3 | `work-what-i-like-about-it` | What I Like About It · నా పనిలో నచ్చేది | likes and reasons with because and but | I like meeting new people every day. It is hard, but I like it. | A neighbour asks if you like your work (Usha) |
| 4 | `work-my-plans` | My Plans · నా ప్లాన్లు | going to and will (Week 10): learn, open, retire | I am going to learn computers. One day, I will open a shop. | Talking with a friend about the future (Raju) |
| 5 | `work-my-work-in-one-minute` | My Work in One Minute · ఒక నిమిషంలో నా పని | speaking mission: one minute about your work, now or before you retired | I am a driver. I have twelve years' experience. I was a teacher for thirty years. | Introducing yourself at a workers' meeting (Kumar) |
| 6 | `work-w8-conversation` | Conversation Day: A Job Fair · జాబ్ మేళా | all of the week | — | Talking to two employers at a job fair (Kavitha, Joseph); telling a friend how it went (Mohan) |
| 7 | `work-w8-review` | My Working Life · నా పని జీవితం | review of W1–W8 | | |

## Hospital & Caregiving · ఆసుపత్రి, సేవ (`care-`, ~6 weeks, from Week 18)

For anyone looking after a patient: a parent, a spouse, a neighbour or themselves. Lines say "the patient" or use a name, never assuming who it is.

| Week | Theme | Focus |
|---|---|---|
| H1 | Admission Day · ఆసుపత్రిలో చేరే రోజు | forms, the attender pass, the insurance card |
| H2 | On the Ward · వార్డులో | nurses, drips, rounds: When will the doctor come? |
| H3 | Speaking for the Patient · పేషెంట్ తరఫున మాట్లాడటం | the patient's history and medicines: He has had diabetes for ten years. |
| H4 | Medicines & Care at Home · ఇంట్లో మందులు, జాగ్రత్త | dosage, dressings, physiotherapy exercises |
| H5 | Caring for an Elder · పెద్దవాళ్ళ సేవ | helping someone walk, eat and bathe; patient, kind phrases |
| H6 | Discharge, Bills & Review · డిశ్చార్జ్, బిల్లులు | the discharge summary, follow-up dates, bills, insurance claims |

*Level: the main path to Week 18 (the doctor and How long have you had …? as a phrase, once / twice a day and have to, the emergency ward), every line 10 words or fewer. Hospital desks are formal scenes, so staff may use దయచేసి and sorry అండీ in Telugu. The tone is calm and kind; bad news is never the topic of a lesson. Doctors and nurses are men and women in turn.*

### H1 — Admission Day · ఆసుపత్రిలో చేరే రోజు

*Builds on Week 18's emergency ward: now a planned admission, with forms, passes and insurance.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `care-at-the-admission-desk` | At the Admission Desk · అడ్మిషన్ డెస్క్ దగ్గర | the patient's details: name, age, address; who the attender is | The patient's name is Kamala Devi. She is sixty-eight. I am her neighbour. I will stay with her. | Admitting a patient at the desk (Anitha) |
| 2 | `care-the-admission-form` | The Admission Form · అడ్మిషన్ ఫారం | consent form, signature, relationship to the patient, emergency contact | Where do I sign? Do I need to sign this consent form? | The desk clerk explains the forms (Joseph) |
| 3 | `care-the-attender-pass` | The Attender Pass · అటెండర్ పాస్ | attender pass, visiting hours, one attender at a time | Can I get an attender pass, please? What are the visiting hours? | Asking the security guard about passes and visiting hours (Raju) |
| 4 | `care-the-insurance-card` | The Insurance Card · ఇన్సూరెన్స్ కార్డు | insurance, Aarogyasri or health card, cashless, advance payment | Here is the insurance card. Is it cashless? How much advance do I have to pay? | At the insurance desk (Kavitha) |
| 5 | `care-which-room-is-he-in` | Which Room Is He In? · ఆయన ఏ రూమ్‌లో ఉన్నారు? | ward, room and bed numbers; floor, lift | Which ward is Mr Gopal in? He is in room 304, on the third floor. | Finding a patient's room at the enquiry counter (Grace) |
| 6 | `care-h1-conversation` | Conversation Day: Admission Day · ఆసుపత్రిలో చేరిన రోజు | all of the week | — | Admitting a patient for an operation (Anitha); explaining the attender pass and visiting hours to a relative (Venkat) |
| 7 | `care-h1-review` | Getting Admitted · ఆసుపత్రిలో చేరడం | review: details, forms, passes, insurance | | |

### H2 — On the Ward · వార్డులో

*Will (Week 10) for "When will …?"; calling a nurse politely ("Excuse me, nurse", or her name; "Sister" appears as Indian usage that visitors may not know).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `care-when-will-the-doctor-come` | When Will the Doctor Come? · డాక్టర్ ఎప్పుడు వస్తారు? | rounds, the duty doctor; What time are the rounds? | When will the doctor come today? The rounds are at ten in the morning. | Asking the nurse about the rounds (Mary) |
| 2 | `care-the-drip-is-finished` | The Drip Is Finished · సెలైన్ అయిపోయింది | calling the nurse: drip, call bell, swelling, pain | Excuse me, nurse, the drip is finished. His hand is swollen. Please check. | Calling the nurse at night (Ruth) |
| 3 | `care-can-she-eat-now` | Can She Eat Now? · ఇప్పుడు తినొచ్చా? | food and fasting: nothing by mouth, liquid diet; Can she have …? | Can she have some coffee now? No food after ten tonight. | Asking about food before a test (Geetha) |
| 4 | `care-what-did-the-doctor-say` | What Did the Doctor Say? · డాక్టర్ ఏం చెప్పారు? | understanding the rounds: better, the next step; Please explain slowly. | Is she better today, doctor? Please explain it to me slowly. | The doctor on the morning rounds (Dr Prasad) |
| 5 | `care-tests-on-the-ward` | Tests on the Ward · వార్డులో పరీక్షలు | scan, ECG, blood test; the wheelchair to the scan room; the report (Week 16) | When is the scan? Who will take him there? When will the report come? | A ward assistant takes the patient for a scan (Srinivas) |
| 6 | `care-h2-conversation` | Conversation Day: A Night on the Ward · వార్డులో ఒక రాత్రి | all of the week | — | Calling the nurse about pain at night (Ruth); questions on the morning rounds (Dr Prasad) |
| 7 | `care-h2-review` | Ward Days · వార్డులో రోజులు | review: rounds, calling the nurse, food, tests | | |

### H3 — Speaking for the Patient · పేషెంట్ తరఫున మాట్లాడటం

*"He has had diabetes for ten years" is a fixed phrase, like Week 16's "How long have you had …?" (the present perfect is Week 29). Lines say "the patient", he or she, or a name, never who the patient is to the learner.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `care-the-patients-history` | The Patient's History · పాత ఆరోగ్య వివరాలు | long-term conditions: diabetes, BP, thyroid, asthma; for … years | He has had diabetes for ten years. She has BP and thyroid problems. | A junior doctor takes the patient's history (Dr Ayesha) |
| 2 | `care-the-medicines-she-takes` | The Medicines She Takes · ఆవిడ వేసుకునే మందులు | listing medicines with once / twice a day (Week 17) | She takes two BP tablets every day. Here is the list of her medicines. | Showing the medicine list to the nurse (Swapna) |
| 3 | `care-allergies` | Allergies · అలర్జీలు | allergic to …; operations before (past simple) | He is allergic to penicillin. She had an operation in 2019. | The anaesthetist's questions before an operation (Dr Mohan) |
| 4 | `care-he-cant-hear-well` | He Can't Hear Well · ఆయనకి సరిగ్గా వినిపించదు | the patient's needs: hearing, glasses, only Telugu; I will translate. | He can't hear well. Please speak loudly. She speaks only Telugu. I will translate. | Helping the nurse talk to an elderly patient (Grace) |
| 5 | `care-she-is-in-pain` | She Is in Pain · ఆవిడకి నొప్పిగా ఉంది | reporting a change calmly: in pain, breathless, confused, this morning | She is in a lot of pain. He became confused this morning. | Telling the nurse that something has changed (Kavitha) |
| 6 | `care-h3-conversation` | Conversation Day: The Doctor's Questions · డాక్టర్ ప్రశ్నలు | all of the week | — | Giving a full history to the doctor (Dr Ayesha); checking the medicine list with the hospital pharmacist (Ramana) |
| 7 | `care-h3-review` | For the Patient · పేషెంట్ కోసం | review: history, medicines, allergies, needs | | |

### H4 — Medicines & Care at Home · ఇంట్లో మందులు, జాగ్రత్త

*Medicine schedules, dressings and exercises; "if it hurts" and "if the fever comes back" are fixed phrases (conditionals are Week 48).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `care-the-medicine-schedule` | The Medicine Schedule · మందుల టైమ్ టేబుల్ | a schedule: morning, afternoon, night; before / after food; a pill box | One tablet at eight in the morning and at night. This one is before breakfast. | Making a medicine chart with the nurse before going home (Mary) |
| 2 | `care-did-you-take-it` | Did You Take It? · వేసుకున్నారా? | reminders and missed doses; don't for warnings (Week 17) | Did you take your eight o'clock tablet? Don't take two tablets together. | Reminding a patient at home, kindly (Narayana) |
| 3 | `care-changing-the-dressing` | Changing the Dressing · డ్రెస్సింగ్ మార్చడం | wound care: clean, dry, change; signs of infection | Keep the wound clean and dry. Change the dressing every two days. | A nurse teaches you to change a dressing (Sarala) |
| 4 | `care-physiotherapy-exercises` | Physiotherapy Exercises · ఫిజియోథెరపీ వ్యాయామాలు | instructions: lift, bend, slowly, ten times; stop if it hurts | Lift your leg slowly, ten times. Stop if it hurts. | The physiotherapist shows the exercises (David) |
| 5 | `care-when-should-we-call` | When Should We Call? · ఎప్పుడు ఫోన్ చేయాలి? | warning signs and calling for help (Week 18): fever, bleeding, low sugar, 108 | Call us if the fever comes back. His sugar is very low. What should I do? | Calling the hospital helpline about a fever at home (Fatima) |
| 6 | `care-h4-conversation` | Conversation Day: The First Week at Home · ఇంట్లో మొదటి వారం | all of the week | — | A nurse's home visit to check the dressing (Sarala); a physiotherapy session (David) |
| 7 | `care-h4-review` | Care at Home · ఇంట్లో జాగ్రత్త | review: schedules, reminders, dressings, warning signs | | |

### H5 — Caring for an Elder · పెద్దవాళ్ళ సేవ

*Patient, kind phrases with permission and dignity ("May I help you?"); the elder is always addressed with respect. Day 5 is about the carer's own rest.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `care-may-i-help-you-stand` | May I Help You Stand? · లేవడానికి సహాయం చేయనా? | asking permission: May I help you? Hold my arm. Take your time. | May I help you stand up? Hold my arm. Take your time. | Helping an elder get up from a chair (Gopal) |
| 2 | `care-time-to-eat` | Time to Eat · భోజనం టైమ్ | meals: soft food, small bites; Would you like …? A little more? | Would you like some soft idli? Just a little more, please. | Helping an elder with lunch (Kamala) |
| 3 | `care-bath-time` | Bath Time · స్నానం టైమ్ | bathing safely and with privacy: the rail, the water, I'll wait outside | Is the water too hot? Hold the rail. I will wait outside. | Helping an elder bathe safely (Rahim) |
| 4 | `care-you-are-doing-well` | You Are Doing Well · బాగా చేస్తున్నారు | encouragement and patience: Don't worry; We have time; You are doing well. | You are doing very well today. Don't worry. We have lots of time. | An elder is upset about forgetting things (Radha) |
| 5 | `care-looking-after-myself` | Looking After Myself · నన్ను నేను చూసుకోవడం | the carer's own health: I'm tired; asking someone to help for a day | I am very tired these days. Can you stay with her on Sunday? | Asking a neighbour for a break (Kumar) |
| 6 | `care-h5-conversation` | Conversation Day: A Day of Care · సేవలో ఒక రోజు | all of the week | — | A walk, breakfast and tablets with an elder (Narayana); a home nurse visits and gives advice (Jyothi) |
| 7 | `care-h5-review` | Kind Care · ప్రేమతో సేవ | review: helping, meals, bathing, encouragement | | |

### H6 — Discharge, Bills & Review · డిశ్చార్జ్, బిల్లులు

*The discharge summary is the week's Read it card (diagnosis, medicines, follow-up, advice). "Approved" is a fixed phrase (the passive is Week 56).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `care-when-is-the-discharge` | When Is the Discharge? · డిశ్చార్జ్ ఎప్పుడు? | the time of discharge; Can he go home today? | Can he go home today? What time is the discharge? | Asking the nurse about the discharge (Mary) |
| 2 | `care-the-discharge-summary` | The Discharge Summary · డిశ్చార్జ్ సమ్మరీ | reading the summary; What does … mean? (Week 2) | Please explain the discharge summary to me. What does diagnosis mean? | The doctor goes through the summary (Dr Suresh) |
| 3 | `care-the-follow-up-date` | The Follow-up Date · మళ్ళీ చూపించుకునే తేదీ | follow-up: after two weeks, the next visit, bring the reports | Come back after two weeks for a check-up. Should I bring all the reports? | Booking the follow-up visit at the counter (Usha) |
| 4 | `care-the-final-bill` | The Final Bill · ఫైనల్ బిల్లు | the bill, the advance, a refund; Can I see the details? | Can I see the details of this bill? We paid twenty thousand as advance. | Checking the final bill at the billing counter (Imran; manners slip: "You are cheating us.") |
| 5 | `care-the-insurance-claim` | The Insurance Claim · ఇన్సూరెన్స్ క్లెయిమ్ | the claim: approved, documents, how many days | Is the insurance claim approved? Which documents do you need? | At the insurance desk before discharge (Ruth) |
| 6 | `care-h6-conversation` | Conversation Day: Going Home · ఇంటికి వెళ్తున్నాం | all of the week | — | The discharge summary and the follow-up date (Dr Suresh); settling the bill and the claim (Imran) |
| 7 | `care-h6-review` | Hospital & Caregiving: Review · ఆసుపత్రి, సేవ పునశ్చరణ | review of H1–H6 | | |

## Faith & Community · భక్తి, సమాజం (`faith-`, ~5 weeks, from Week 33)

For learners whose temple, church or mosque is part of daily life. Each week offers scenes from different faiths.

| Week | Theme | Focus |
|---|---|---|
| R1 | At the Temple, Church or Mosque · గుడి, చర్చి, మసీదులో | timings and rules: Can I take photos? Please remove your shoes here. |
| R2 | Pilgrimages · తీర్థయాత్రలు | booking darshan, queues, prasadam; Tirupati, Velankanni, Ajmer |
| R3 | Explaining My Faith · మా పూజలు, పండుగల గురించి చెప్పడం | describing rituals and festivals simply to a visitor |
| R4 | Seva & Service · సేవా కార్యక్రమాలు | annadanam, donations, volunteering: Can I help serve food? |
| R5 | Prayer Groups & Review · ప్రార్థనా సమావేశాలు, పునశ్చరణ | meeting people at services; invitations to events |

*Level: the main path to Week 26 (Stage 2 to Checkpoint 2: would like, comparatives, past continuous, will and going to), every line 10 words or fewer. Week 32 (Festivals) now comes after this offer week, so festival greetings and "Not allowed" are fixed phrases here. Every week gives Hindu, Muslim and Christian scenes in turn; the learner describes their own practice and asks about others' with curiosity and respect, never comparing or preaching.*

### R1 — At the Temple, Church or Mosque · గుడి, చర్చి, మసీదులో

*Timings use the present simple of timetables (Week 15); rules use please and don't.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `faith-what-time-does-it-open` | What Time Does It Open? · ఎన్నింటికి తెరుస్తారు? | timings: darshan, Mass, namaz; open, close, every Sunday | What time does the temple open? Is there an English Mass on Sunday? | Asking about timings at a church office (Mary) |
| 2 | `faith-please-remove-your-shoes` | Please Remove Your Shoes · చెప్పులు ఇక్కడ విడవండి | rules with please and don't: shoes, covering the head, silence | Please remove your shoes here. Please cover your head inside the mosque. | Guiding a visitor at the mosque entrance (Imran) |
| 3 | `faith-can-i-take-photos` | Can I Take Photos? · ఫోటోలు తీయొచ్చా? | permission (Week 8): Can I …?; Not allowed (a fixed phrase, Week 37) | Can I take photos inside? Sorry, photos are not allowed here. | A tourist asks you at the temple (David) |
| 4 | `faith-where-is-the-shoe-stand` | Where Is the Shoe Stand? · చెప్పుల స్టాండ్ ఎక్కడ? | places inside: shoe stand, prasadam counter, wudu area, prayer hall | Where is the shoe stand, please? The prayer hall is upstairs, on the left. | Showing a newcomer around the temple (Geetha) |
| 5 | `faith-what-should-i-wear` | What Should I Wear? · ఏం వేసుకోవాలి? | dress and manners with should (Week 11); switching off phones | What should I wear for the visit? Please switch off your phone inside. | A foreign colleague asks how to dress for a temple visit (Ruth) |
| 6 | `faith-r1-conversation` | Conversation Day: A Visitor at Our Place of Worship · మా గుడికి, చర్చికి, మసీదుకి అతిథి | all of the week | — | Showing a foreign visitor round a temple (Grace); a church guide explains the rules to a school group (Joseph) |
| 7 | `faith-r1-review` | Timings and Rules · సమయాలు, నియమాలు | review: timings, rules, permission, places | | |

### R2 — Pilgrimages · తీర్థయాత్రలు

*Tirupati, Srisailam, Velankanni, Medak and Ajmer Sharif; going to (Week 10) for plans, past simple for the trip.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `faith-booking-darshan` | Booking Darshan · దర్శనం బుకింగ్ | booking online or at the counter: special entry, time slot, ID proof | I'd like to book a darshan ticket for Friday. Do I need my Aadhaar card? | Booking darshan at a TTD counter (Venkat) |
| 2 | `faith-the-queue-is-long` | The Queue Is Long · క్యూ చాలా పెద్దగా ఉంది | queues: How long is the wait? the senior citizens' queue, a wheelchair | How long is the wait now? Is there a separate queue for seniors? | Asking a volunteer at Tirumala (Rani) |
| 3 | `faith-a-trip-to-velankanni` | A Trip to Velankanni · వేళాంకణ్ణి యాత్ర | planning travel: going to; bus, train, a room near the church | We are going to Velankanni next month. Is there a room near the church? | Booking a room by phone (John) |
| 4 | `faith-at-ajmer-sharif` | At Ajmer Sharif · అజ్మీర్ షరీఫ్ దర్గాలో | at a dargah: chadar, flowers, crowds; asking the khadim | Where can I buy a chadar? Is it crowded on Thursdays? | A khadim guides you at the dargah (Rahim) |
| 5 | `faith-gifts-from-the-trip` | Gifts from the Trip · యాత్ర నుంచి కానుకలు | telling about the trip with the past simple: we went, we stood, we brought | We went to Srisailam last week. We brought laddus for everyone. | Sharing prasadam and stories with a neighbour (Sita) |
| 6 | `faith-r2-conversation` | Conversation Day: Planning a Pilgrimage · యాత్ర ప్లాన్ | all of the week | — | Planning a trip and booking tickets with friends (Kumar, Kavitha); separated in the crowd and asking for help (Ramesh) |
| 7 | `faith-r2-review` | On Pilgrimage · యాత్రలో | review: booking, queues, travel, telling the trip | | |

### R3 — Explaining My Faith · మా పూజలు, పండుగల గురించి చెప్పడం

*Simple explanations for a visitor: what we do, when and why (present simple, because). Ugadi is explained in Week 32, so this week uses other days.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `faith-every-morning-i-pray` | Every Morning I Pray · రోజూ ప్రార్థన | daily practice: light a lamp, pray five times a day, read the Bible | Every morning I light a lamp at home. Muslims pray five times a day. | A foreign guest asks about your morning (Ruth) |
| 2 | `faith-what-is-ramzan` | What Is Ramzan? · రంజాన్ అంటే ఏంటి? | fasting and Eid simply: sunrise to sunset, iftar, Eid prayers | In Ramzan, we fast from sunrise to sunset. We break the fast with dates. | Inviting a neighbour to iftar and explaining it (David) |
| 3 | `faith-christmas-at-our-church` | Christmas at Our Church · మా చర్చిలో క్రిస్మస్ | Christmas and Easter: carols, the midnight service, Good Friday | We sing carols on Christmas Eve. Good Friday is a quiet, sad day. | Telling a neighbour about the Christmas service (Padma) |
| 4 | `faith-bathukamma-and-bonalu` | Bathukamma and Bonalu · బతుకమ్మ, బోనాలు | Telangana festivals: flowers, songs, offerings to the goddess | We arrange flowers in layers for Bathukamma. Bonalu is a festival for the goddess. | Explaining Bathukamma to a visitor from another state (Joseph) |
| 5 | `faith-why-do-you-do-that` | Why Do You Do That? · ఎందుకలా చేస్తారు? | answering visitors' questions: because, It means …, a sign of respect | We touch elders' feet as a sign of respect. The red thread is for protection. | A visitor asks about customs at a wedding (Mary; manners slip: "You won't understand.") |
| 6 | `faith-r3-conversation` | Conversation Day: A Guest from Abroad · విదేశీ అతిథి | all of the week | — | A foreign guest asks about festivals in your home (Ruth); visiting a friend's home on Eid and asking about their customs (Ayesha) |
| 7 | `faith-r3-review` | Our Ways · మా ఆచారాలు | review: daily practice, festivals, explaining why | | |

### R4 — Seva & Service · సేవా కార్యక్రమాలు

*Can I …? and Where do you need me?; some / any (Week 6) for collections. Seva, zakat and church charity side by side.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `faith-can-i-help-serve-food` | Can I Help Serve Food? · వడ్డించడానికి సహాయం చేయనా? | annadanam and community meals: Can I help? Where do you need me? | Can I help serve food today? Where do you need me? | Volunteering at the temple annadanam (Srinivas) |
| 2 | `faith-donations` | Donations · విరాళాలు | giving: donation, hundi, zakat, offering; a receipt | I'd like to give a donation for the school. Can I get a receipt, please? | At the mosque committee office (Rahim) |
| 3 | `faith-a-blood-donation-camp` | A Blood Donation Camp · రక్తదాన శిబిరం | community events: register, the camp, Who can …? | Where do I register for the camp? Who can give blood? | Registering at a camp in the church hall (Grace) |
| 4 | `faith-helping-after-the-floods` | Helping After the Floods · వరదల తర్వాత సహాయం | collections: rice, blankets, medicines; We need …; Please bring … | We need rice, blankets and medicines. Please bring old clothes on Sunday. | Organising a collection with the mosque committee (Salma) |
| 5 | `faith-teaching-the-children` | Teaching the Children · పిల్లలకు నేర్పించడం | Sunday school, madrasa, bhajan class: I teach …; every Saturday | I teach bhajans to children on Saturdays. The Sunday school starts at nine. | Signing up as a volunteer teacher at the church (Joseph) |
| 6 | `faith-r4-conversation` | Conversation Day: A Day of Seva · సేవా దినం | all of the week | — | Serving food at a festival annadanam (Satish); a Christmas collection for an old-age home (Mary) |
| 7 | `faith-r4-review` | Serving Together · కలిసి సేవ | review: volunteering, donations, collections | | |

### R5 — Prayer Groups & Review · ప్రార్థనా సమావేశాలు, పునశ్చరణ

*Meeting people, invitations across faiths and a short thank-you speech (a one-minute speaking mission with "Choose instead"). "Let's" is a fixed phrase (Week 38).*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `faith-after-the-service` | After the Service · ప్రార్థన తర్వాత | meeting people: Are you new here? Which area do you live in? | Are you new here? Welcome! Which area do you live in? | Welcoming a new family after Sunday Mass (Ruth) |
| 2 | `faith-you-are-invited` | You Are Invited · మీకు ఆహ్వానం | invitations (Week 10): satsang, Bible study, Milad; Would you like to come? | Would you like to come to our satsang? There is a Bible study on Wednesday. | Inviting a neighbour to a satsang (Kamala) |
| 3 | `faith-thank-you-id-love-to-come` | Thank You, I'd Love To · తప్పకుండా వస్తాను | accepting and declining respectfully, across faiths | Thank you, I'd love to come. Sorry, I can't come on Friday. | A friend of another faith invites you to iftar (Imran) |
| 4 | `faith-the-committee-meeting` | The Committee Meeting · కమిటీ మీటింగ్ | planning an event: I think …; We need …; Let's … | I think we need more chairs. Let's start the meeting at six. | Planning a festival at the temple committee (Narayana) |
| 5 | `faith-a-few-words-at-the-function` | A Few Words at the Function · ఫంక్షన్‌లో కొన్ని మాటలు | a short thank-you speech: Thank you all for coming; Special thanks to … | Thank you all for coming today. Special thanks to our volunteers. | Saying thank you at the end of a community event (Kumar) |
| 6 | `faith-r5-conversation` | Conversation Day: A Festival at the Community Hall · కమ్యూనిటీ హాల్‌లో పండుగ | all of the week | — | Welcoming guests of all faiths (Fatima, John); thanking the volunteers at the end (Prasad) |
| 7 | `faith-r5-review` | Faith & Community: Review · భక్తి, సమాజం పునశ్చరణ | review of R1–R5 | | |
