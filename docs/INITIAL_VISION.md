# EnglishEasy
## Enhanced Product Vision & Learning Architecture

## 1. Updated Core Vision

EnglishEasy is a **structured, mobile-first English learning and speaking practice application for Telugu-speaking adults and elders**.

The product should combine:

- A structured daily learning journey
- English foundations
- Practical grammar
- Everyday sentence patterns
- Telugu explanations
- Multiple learning formats
- Multiple practice formats
- Speaking practice
- Listening practice
- Role-play
- Real-life scenarios
- Repetition and revision
- Simple visual progress

The learner should not have to decide:

> "What should I learn today?"

EnglishEasy should answer that for them.

At the same time, users should never feel locked into a rigid course.

---

# 2. Learning Journey

The primary structure should be:

```text
Course
  ↓
Weeks
  ↓
Days / Lessons
  ↓
Learning
  ↓
Practice
  ↓
Speaking
  ↓
Role Play
  ↓
Review
```

### Default recommendation

**One main lesson per day.**

However:

> **Users can continue to the next lesson whenever they want.**

The application should recommend a pace, not enforce one.

For example:

> Today's lesson  
> **Day 3 — Talking About Yesterday**

And below:

> You can continue to Day 4 whenever you're ready.

---

# 3. Weekly Structure

The learning journey should be divided into meaningful weekly themes.

Example:

## Week 1 — English Foundations

```text
Day 1  English sentence basics
Day 2  I / You / We / They
Day 3  Present tense
Day 4  Past tense
Day 5  Future tense
Day 6  Questions
Day 7  Review + Speaking
```

---

## Week 2 — Everyday English

```text
Day 8   Talking about yourself
Day 9   Family and people
Day 10  Daily activities
Day 11  Likes and dislikes
Day 12  Asking for things
Day 13  Giving information
Day 14  Review + Conversation
```

---

## Week 3 — Practical Conversations

```text
Day 15  Shopping
Day 16  Restaurant
Day 17  Phone calls
Day 18  Asking directions
Day 19  Travel
Day 20  Doctor / pharmacy
Day 21  Review + Role Play
```

The exact curriculum should be designed and refined during implementation.

The important architectural principle is:

> **Weeks provide structure; lessons provide focused learning; scenarios provide real-world context.**

---

# 4. Lesson Structure

Every lesson should follow a consistent but flexible learning flow.

A lesson could contain:

```text
1. Learn
2. Understand
3. See Examples
4. Practice
5. Listen
6. Speak
7. Challenge
8. Role Play
9. Review
```

Not every lesson needs every activity, but the learner should experience multiple formats.

---

# 5. Lesson Progress

Every lesson must have a highly visible progress indicator.

Example:

```text
Day 4 — Past Tense

Lesson Progress

████████████░░░░ 75%

12 / 16 activities completed
4 activities remaining
```

Or:

```text
75% Complete

✓ Learn
✓ Examples
✓ Practice
✓ Listening
✓ Speaking
● Role Play
○ Review
```

The learner should always understand:

- How much of the lesson is complete
- What they have already done
- What remains
- How many practice questions remain

---

# 6. Practice Question Progress

For exercises containing multiple questions, show progress.

Example:

```text
Practice

Question 6 of 10

████████████░░░░░░
```

At the end:

```text
Practice Complete 🎉

8 / 10 correct

2 sentences need more practice.

[Practice Again]
[Continue]
```

For larger practice sets:

```text
18 / 25 questions completed
7 remaining
```

---

# 7. Course-Level Progress

The home screen should show the learner's overall journey.

Example:

```text
Your English Journey

Week 3 of 8

██████████████░░░░░░ 68%

You have completed
17 of 28 lessons
```

Also show:

```text
This Week

✓ Day 15
✓ Day 16
● Day 17
○ Day 18
○ Day 19
○ Day 20
○ Day 21
```

The UI should make progress feel encouraging rather than competitive.

---

# 8. Foundations Curriculum

EnglishEasy should teach the **foundations required for everyday English**.

The purpose is not to teach grammar terminology for its own sake.

Instead:

> **Teach what the learner needs to communicate.**

---

## 8.1 Sentence Foundations

Teach:

- Subject
- Verb
- Object
- Basic sentence structure
- Positive sentences
- Negative sentences
- Questions
- Short answers

Example:

> I eat rice.

> I don't eat rice.

> Do you eat rice?

Explain the pattern in simple Telugu.

---

# 9. Tenses

Tenses should be an important part of the foundation.

But don't teach them like a grammar textbook.

Instead teach:

### Present

> I go to the market every Sunday.

**When do we use this?**

Regular / usual actions.

---

### Present Continuous

> I am going to the market.

**When do we use this?**

Something happening around now.

---

### Past

> I went to the market yesterday.

**When do we use this?**

Something that already happened.

---

### Future

> I will go to the market tomorrow.

**When do we use this?**

Something that will happen later.

---

The learner should repeatedly see the same idea across different situations.

---

# 10. "When Do I Use This?" Learning

This should be one of EnglishEasy's defining features.

Instead of simply teaching:

> can / could / would

teach:

### CAN

Used for:

- Ability
- Simple requests

> Can you help me?

### COULD

Used for:

- Polite requests
- Asking someone nicely

> Could you help me?

### WOULD

Used for:

- Polite requests
- Preferences
- Hypothetical situations

> Would you like some tea?

The learner should see:

**What does it mean?**

**When do I use it?**

**How do I say it?**

**What should I not say?**

This is more useful than memorizing grammar definitions.

---

# 11. Core English Concepts

The curriculum should progressively introduce practical concepts such as:

### Pronouns

I / you / he / she / we / they

### Be verbs

am / is / are / was / were

### Do

do / does / did

### Have

have / has / had

### Basic modal verbs

can / could / should / would / will

### Articles

a / an / the

### Prepositions

in / on / at / to / from / for / with

### Connectors

and / but / because / so / if

### Question words

what / where / when / why / who / how

### Quantities

some / any / much / many / more / less

### Common modifiers

very / too / enough / also / only

The curriculum should prioritize practical usage over completeness.

---

# 12. "How Do I Say This?" Learning

EnglishEasy should teach sentence patterns that help users express intentions.

For example:

### Suggesting

> You should try this.

> Why don't we go tomorrow?

> We could go in the evening.

### Asking

> Can you help me?

> Could you please explain this?

> What should I do?

### Offering

> Would you like some tea?

> Can I help you?

### Conveying information

> I want to tell you something.

> Let me explain.

### Clarifying

> Could you say that again?

> Can you speak slowly?

> What does this mean?

### Agreeing

> Yes, I agree.

> That's right.

### Disagreeing politely

> I don't think so.

> I'm not sure about that.

The learner should understand **which expression fits which situation**.

---

# 13. Multiple Learning Formats

Each concept should be taught in multiple ways.

For example, teaching:

> "I went to the market yesterday."

could involve:

### Format 1 — Explanation

Simple Telugu explanation.

### Format 2 — Example

> I went to the office yesterday.

### Format 3 — Listen

🔊 Hear the sentence.

### Format 4 — Match

Match Telugu meaning to English.

### Format 5 — Arrange

```text
yesterday
I
market
went
to
the
```

### Format 6 — Translate

> నేను నిన్న మార్కెట్‌కి వెళ్లాను.

User constructs:

> I went to the market yesterday.

### Format 7 — Fill the blank

> Yesterday I ___ to the market.

### Format 8 — Speaking

🎤 Say the sentence.

### Format 9 — Real situation

> Your friend asks what you did yesterday.

Respond.

This repetition through different formats should help the learner internalize patterns.

---

# 14. Multiple Practice Formats

Practice should not consist only of multiple-choice questions.

Potential exercise types:

### Multiple choice

Choose the correct sentence.

### Sentence ordering

Arrange words into a sentence.

### Fill in the blank

Choose the correct word.

### Telugu → English

Translate a simple sentence.

### English → Telugu

Understand the meaning.

### Listen → choose

Hear a sentence and identify the meaning.

### Listen → repeat

Listen and speak.

### Speak → evaluate

Speak the expected sentence.

### Find the mistake

Identify the incorrect part.

### Choose the appropriate response

Example:

> Someone says: "Would you like some tea?"

Choose:

> Yes, please.

rather than:

> Yes, I am.

### Situation response

> You are at a shop. Ask the price.

User speaks the answer.

---

# 15. Role Play

Role play should be a major part of the learning journey.

The learner should feel like they are actually in a situation.

Example:

## Restaurant

**You are the customer.**

**Waiter:**

> Good evening. What would you like?

The learner speaks.

> I would like a dosa and coffee.

Then:

**Waiter:**

> Would you like anything else?

Learner responds.

The role play should use predefined conversation states and acceptable response patterns rather than requiring an LLM.

---

# 16. Role-Play Feedback

After a role play, show a simple summary.

Example:

```text
Role Play Complete 🎉

You completed the conversation.

Good:
✓ Greetings
✓ Asking for food
✓ Saying what you want

Practice more:
• "Would you like..."
• Asking for the bill

Speaking:
8 / 10

Conversation:
7 / 10
```

Avoid overly technical scoring.

---

# 17. Lesson Completion

A lesson should not be considered complete simply because the user opened it.

Completion should be based on meaningful activity.

For example:

```text
Lesson completion =

Learning completed
+
Practice completed
+
Speaking completed
+
Role play completed
```

Some lessons may not require all four.

Claude Code should design a flexible completion model rather than hard-code one formula.

---

# 18. Lesson End Screen

Example:

```text
🎉 Day 4 Complete!

Past Tense

You completed:

✓ Learning
✓ 10 practice questions
✓ Listening
✓ Speaking
✓ Role play

Lesson Progress
████████████████ 100%

Great job!

Tomorrow:
Talking about the future

[Review Today's Lesson]

[Continue to Day 5]
```

Because users are allowed to advance early:

```text
[Continue to Day 5]
```

should remain available.

---

# 19. Weekly Review

At the end of each week:

## Week 1 Complete 🎉

```text
7 / 7 lessons

████████████████ 100%

You practiced:

✓ Sentence basics
✓ Present tense
✓ Past tense
✓ Future tense
✓ Questions
✓ Speaking
```

Then provide a mixed review.

The weekly review should combine concepts rather than simply repeat the exact previous exercises.

---

# 20. Weekly Progress Dashboard

Example:

```text
Week 2

████████████░░░░ 75%

✓ Monday
✓ Tuesday
✓ Wednesday
✓ Thursday
● Friday
○ Saturday
○ Sunday
```

Selecting a day should show:

```text
Day 12
Talking About Family

75% complete

12 / 16 activities
4 remaining
```

---

# 21. Flexible Pacing

The recommended structure is:

> **One lesson per day.**

But there should be no artificial restriction.

If a user completes Day 3 and wants to learn Day 4 immediately:

Allow it.

If they want to repeat Day 3:

Allow it.

If they want to practice only speaking:

Allow it where appropriate.

The app should encourage consistency without becoming restrictive.

---

# 22. Home Screen Design

The home screen should prioritize today's recommended lesson.

Example:

```text
Good morning 👋

Ready for today's English?

┌─────────────────────────────┐
│ Week 2 • Day 3              │
│                             │
│ Talking About Yesterday     │
│                             │
│ ██████████░░░░ 60%          │
│ 6 of 10 activities         │
│                             │
│ [Continue Lesson]           │
└─────────────────────────────┘

This Week
✓ Day 1
✓ Day 2
● Day 3
○ Day 4
○ Day 5
○ Day 6
○ Day 7

Practice something else

[Speaking]
[Review]
[Scenarios]
```

The user should immediately know:

> **What should I do now?**

---

# 23. Content Difficulty

Difficulty should gradually increase.

### Stage 1

Very simple sentences.

> I am hungry.

> I need water.

### Stage 2

Longer sentences.

> I am hungry. Can we have lunch now?

### Stage 3

Connected ideas.

> I am hungry because I haven't eaten since morning.

### Stage 4

Natural conversations.

> I haven't eaten since morning. Shall we have lunch somewhere nearby?

The user should experience natural progression without seeing intimidating level labels.

---

# 24. Foundation + Scenario Integration

The curriculum should not teach grammar completely separately from real life.

For example:

### Foundation

Past tense

↓

### Everyday example

> I went to the market yesterday.

↓

### Shopping scenario

> What did you buy?

> I bought some vegetables.

↓

### Speaking practice

> What did you do yesterday?

↓

### Role play

Talk to a friend about yesterday.

This creates a connection between:

**Grammar → Sentence → Situation → Conversation**

---

# 25. Learning Content Should Be Reusable

A concept should be reusable across many weeks.

For example:

**Past tense**

could appear in:

- Daily activities
- Shopping
- Travel
- Family
- Restaurant
- Doctor visit
- Weekend conversations

The learner should encounter the same foundation repeatedly in different contexts.

---

# 26. Progress Model

Track progress at several levels.

```text
Course
 └── Week
      └── Lesson
           └── Section
                └── Activity
                     └── Question
```

Potential states:

```text
NOT_STARTED
IN_PROGRESS
COMPLETED
NEEDS_REVIEW
```

Track:

- Lesson completion
- Activity completion
- Question completion
- Correct answers
- Attempts
- Speaking attempts
- Role-play completion
- Review history

Do not expose all of this complexity to the user.

The backend can maintain detailed information while the UI presents a simple view.

---

# 27. Visual Progress Philosophy

Progress should answer three questions immediately:

### Where am I?

> Week 2, Day 4

### How much have I completed?

> 70%

### What remains?

> 5 activities remaining

Never make the user guess whether they finished a lesson.

---

# 28. Continue Experience

If the user leaves halfway through:

When they return:

> **Welcome back 👋**

> You were practicing **Past Tense**.

> **6 of 10 activities completed**

> **4 activities remaining**

**[Continue]**

This should be one of the most important home-screen actions.

---

# 29. Learning Should Feel Like a Journey

The application should communicate progression without pressure.

Example:

```text
Week 1
English Foundations          ✓

Week 2
Everyday Sentences            ●

Week 3
Daily Conversations           ○

Week 4
Shopping & Restaurants        ○

Week 5
Travel & Directions           ○

Week 6
Health & Phone Conversations  ○

Week 7
Longer Conversations          ○

Week 8
Everyday English Review       ○
```

The exact number of weeks is not fixed.

Claude Code can start with a smaller curriculum and make the content model extensible.

---

# 30. V1 Recommendation

Do not attempt to build a full 8-week course before validating the product.

Build:

## Week 1

### Day 1
Sentence basics

### Day 2
I / You / He / She / We / They

### Day 3
Present tense

### Day 4
Past tense

### Day 5
Future / will

### Day 6
Questions

### Day 7
Weekly review + role play

Then build the complete learning loop around these seven lessons.

Once the experience works well, expand the curriculum.

---

# 31. The Complete EnglishEasy Learning Loop

The final product should feel like:

```text
                ENGLISHEASY
                     │
             Recommended Lesson
                     │
                     ▼
                  LEARN
                     │
                     ▼
                UNDERSTAND
                Telugu support
                     │
                     ▼
              MULTIPLE EXAMPLES
                     │
                     ▼
                 PRACTICE
          ┌──────────┼──────────┐
          │          │          │
       Choose     Arrange     Translate
          │          │          │
          └──────────┼──────────┘
                     ▼
                  LISTEN
                     │
                     ▼
                  SPEAK
                     │
                     ▼
                 FEEDBACK
                     │
                     ▼
                TRY AGAIN
                     │
                     ▼
                 ROLE PLAY
                     │
                     ▼
                  REVIEW
                     │
                     ▼
             LESSON COMPLETE
                     │
                     ▼
               WEEK PROGRESS
                     │
                     ▼
              NEXT LESSON
```

This is the core experience that should guide all implementation decisions.

---

# 32. Product North Star

The ultimate measure of EnglishEasy is not:

> How many grammar topics did the user complete?

It is:

> **Can the user understand and confidently use English in more everyday situations than they could before using EnglishEasy?**

Every feature should support that goal.

---

# 33. Instruction to Claude Code

Use this document as the **product vision and learning architecture**, not as a rigid implementation specification.

Claude Code should:

- Review the vision
- Identify ambiguities
- Propose the simplest suitable architecture
- Improve the UX where appropriate
- Keep the application mobile-first
- Prefer free-tier infrastructure
- Avoid unnecessary complexity
- Avoid runtime AI dependencies for the core learning experience
- Build content independently from application logic
- Make progress granular enough to resume lessons
- Make the learning engine reusable
- Make the curriculum extensible
- Test the experience from the perspective of an older Telugu-speaking user
- Prioritize accessibility and simplicity

Before implementing large portions of the application, Claude Code should validate the architecture against the **first complete 7-day learning journey**.

The goal is not to build a large English-learning platform immediately.

The goal is to build an exceptionally simple and useful first learning journey that makes a Telugu-speaking parent think:

> **"I understand this. I can say this. I want to practice again tomorrow."**