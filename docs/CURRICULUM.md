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

*Revised 2026-11-09 (curriculum review): week positions and the `w<N>-*` ids stay. Days marked **NEW**, **MOVED**, **LIGHTENED** or **CHUNKS ADDED** changed in the map; their written lessons still have to be rewritten to match.*

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
| 3 | `sorry-can-you-repeat` | Sorry? Say It Again · అర్థం కాకపోతే **(MOVED from Week 8, simplified; replaces `who-and-whose`)** | clarifying: Sorry? Please say it again. Please speak slowly. What does … mean? How do you say … in English? | Sorry? Please say it again. Please speak slowly. What does "bill" mean? | A shopkeeper speaks too fast |
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
| 5 | `my-address` | My Address · నా అడ్రస్ **(NEW; `big-numbers-lakh` MOVED to Week 21)** | door number, street, town, pin code (said digit by digit); spelling your name with the alphabet | My house number is 12-4. The pin code is 522001. Kiran: K, I, R, A, N. | A courier calls to ask for your address and how to spell your name |
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
| 5 | `please-help-me` | Please Help Me! · సహాయం చేయండి! **(NEW; `sorry-can-you-repeat` MOVED to Week 2)** | asking for help in an emergency: Help! Please call 108. I am lost. I fell. Giving your address. Never assumes family: "Please call this number", "Please call my neighbour". | Please help me. Please call 108. I am lost. I fell down. | You slip on the road and a stranger asks "Are you okay?" |
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
| 3 | `big-numbers-lakh` | Big Numbers · పెద్ద సంఖ్యలు *(MOVED from Week 3)* | hundred, thousand, lakh = hundred thousand; crore = ten million | One lakh is one hundred thousand. The flat costs fifty lakh rupees. | A friend asks the price of a house |
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

Lesson detail for Weeks 44 and 45 (written for the old Stage 2, kept here). The other Stage 3 weeks are detailed lesson by lesson before they are written (BUILD_PLAN Part E).

## Week 44 — Clothes & the Tailor · బట్టలు, టైలర్

*Was Week 15.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `colours` | Colours · రంగులు | colour words; What colour is …? | What colour is your saree? It's dark green. | Describing a lost bag at a shop |
| 2 | `the-best-and-cheapest` | The Best, The Cheapest · అన్నిటికంటే | superlatives -est / most | This is the cheapest shirt. That's the most beautiful saree here. | Choosing a gift at a cloth shop |
| 3 | `a-nice-red-saree` | A Nice Red Saree · రంగు, సైజు వరుస | adjective order: opinion, size, colour, material | I want a nice red cotton saree. A small blue bag, please. | Telling a shop assistant what you want |
| 4 | `does-it-fit` | Does It Fit? · సరిపోతుందా? | try on, size, too tight / loose | Can I try this on? It's too tight. Do you have a bigger size? | Trying on a kurta |
| 5 | `at-the-tailor` | At the Tailor · టైలర్ దగ్గర | stitching, alterations, by when | Can you make it shorter? When will it be ready? | Giving a blouse for stitching |
| 6 | `w44-conversation` | Conversation Day: Clothes for a Wedding · పెళ్లికి బట్టలు | all of the week | — | Buying clothes for a wedding; exchanging the wrong size |
| 7 | `w44-review` | Review | | | |

## Week 45 — Describing Places · మా ఊరు ఎలా ఉంటుంది

*Was Week 34.*

| Day | Id | Title | Focus | Sample sentences | Role play |
|---|---|---|---|---|---|
| 1 | `there-was-there-were` | There Was, There Were · ఉండేది, ఉండేవి | there was / were | There was a big pond in our village. There were no buses. | Telling a friend about your village |
| 2 | `then-and-now` | Then and Now · అప్పుడు, ఇప్పుడు | comparatives for change | The town is bigger now. The roads are busier. | Your town now and fifty years ago |
| 3 | `famous-for-chillies` | Famous for Chillies · మా ఊరు దేనికి ప్రసిద్ధి | describing a place: quiet, crowded, famous for | Guntur is famous for chillies. It's crowded but friendly. | Describing your town to a visitor |
| 4 | `the-best-place-to-visit` | The Best Place to Visit · చూడదగ్గ ప్రదేశం | superlatives review; recommending places | The best place to visit is Kondapalli Fort. | Recommending places to a guest |
| 5 | `whats-it-like` | What's It Like? · ఎలా ఉంటుంది? | What's … like? | What's Hyderabad like? Is it very expensive? | A friend is moving to a new city |
| 6 | `w45-conversation` | Conversation Day: Showing a Visitor Around · ఊరు చూపించడం | all of the week | — | Showing a guest your town; how it has changed |
| 7 | `w45-review` | Review | | | |

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
| Faith & Community · భక్తి, సమాజం | `faith-` | ~5 weeks | Week 26 | after festivals words and Checkpoint 2 |

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

**Part 2: Living There** · విదేశంలో రోజులు

| Week | Theme | Focus |
|---|---|---|
| A7 | First Days There | home rules, neighbours, getting around (old A5) |
| A8 | Supermarket Abroad | dollars / pounds, units (pounds, ounces), coupons, checkout (old A6) |
| A9 | Doctor & Pharmacy Abroad | appointments, insurance, emergency numbers (old A7) |
| A10 | Small Talk with Neighbours | weather, walks, parks, "How are you doing?" (old A8) |
| A11 | Temple & Community Abroad | meeting other Indians and locals (old A9) |
| A12 | Sightseeing & Review | tickets, tours, asking someone to take a photo (old A11) |

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

## Faith & Community · భక్తి, సమాజం (`faith-`, ~5 weeks, from Week 26)

For learners whose temple, church or mosque is part of daily life. Each week offers scenes from different faiths.

| Week | Theme | Focus |
|---|---|---|
| R1 | At the Temple, Church or Mosque · గుడి, చర్చి, మసీదులో | timings and rules: Can I take photos? Please remove your shoes here. |
| R2 | Pilgrimages · తీర్థయాత్రలు | booking darshan, queues, prasadam; Tirupati, Velankanni, Ajmer |
| R3 | Explaining My Faith · మా పూజలు, పండుగల గురించి చెప్పడం | describing rituals and festivals simply to a visitor |
| R4 | Seva & Service · సేవా కార్యక్రమాలు | annadanam, donations, volunteering: Can I help serve food? |
| R5 | Prayer Groups & Review · ప్రార్థనా సమావేశాలు, పునశ్చరణ | meeting people at services; invitations to events |
