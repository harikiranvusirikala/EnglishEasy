# EnglishEasy — Future Features

Features to add **after launch, one at a time**. None is agreed until the owner picks it. The product is described in [VISION.md](VISION.md); how features are built is in [BUILD_PLAN.md](BUILD_PLAN.md).

## How to add one

1. Pick a feature below (the order is a suggestion).
2. In a fresh Sonnet session (medium effort), paste:

   ```text
   Plan feature F<n> from docs/FUTURE_FEATURES.md.
   Read its entry and only the sections it lists under "Read first".
   Draft a new step section at the end of BUILD_PLAN Part C (Goal, Read first, Build, Done when, Try this), with any open questions, and add a Progress row.
   Stop and show me the section before building.
   ```

3. After the owner agrees to the section, build it with the usual step prompt (BUILD_PLAN B4).
4. When it's done, set its status here to ✅ with the date and update VISION §18 if it changed the product.

Several features rely on things already built before launch: lesson tags (`words`, `grammar`, `topics`), the audio hook, the service worker, the database, and the content preview page.

## Overview

| # | Feature | Effort | Needs | Status |
|---|---------|--------|-------|--------|
| F1 | My Words | S | lesson `words` tags | ☐ |
| F2 | Practice by Topic | S | lesson `topics` tags | ☐ |
| F3 | Smart Review | M | progress, `grammar` tags | ☐ |
| F4 | Recorded Audio | M | audio hook | ☐ |
| F5 | Owner Stats Page | M | database | ☐ |
| F6 | Download a Week | S | service worker | ☐ |
| F7 | Word of the Day | S | `words` tags | ☐ |
| F8 | Weekly Goal | S | progress | ☐ |
| F9 | Stage Certificates | M | stage complete screen | ☐ |
| F10 | Placement Check | M | Stage 2 content released | ☐ |
| F11 | Sounds Practice | M | speech match, voices | ☐ |
| F12 | Practice with a Friend | M | role play | ☐ |
| F13 | Voice Speed Choice | S | voices | ☐ |
| F14 | Family Helper Link | M | sign-in, sync | ☐ |
| F15 | Play Store App | M | installable app | ☐ |
| F16 | Other Native Languages | L | content model | ☐ |
| F17 | GitHub CI | S | tests | ☐ |
| F18 | Security Headers | S | — | ☐ |
| F19 | Human Telugu Review | — (process) | content preview page | ☐ |

---

## F1. My Words · నా పదాలు (S)

**What:** a list of every new word from finished lessons (English + Telugu, 🔊), grouped by week, with a tap-to-flip card practice (see English → guess → flip to Telugu, or the reverse; "I knew it" / "Not yet" buttons).
**Why:** vocabulary is half of speaking; learners like seeing their words grow ("You know 240 words").
**Read first:** BUILD_PLAN A3 (tags), A5; VISION §8, §10.8.

## F2. Practice by Topic · విషయం వారీగా సాధన (S)

**What:** topic chips in Practice (Doctor, Bank, Market, Phone, Travel, …); tapping one gathers role plays, situations and key sentences from finished lessons with that topic.
**Why:** "I'm going to the hospital tomorrow" — practise exactly what's needed, without typing a search.
**Read first:** BUILD_PLAN A3 (tags), A4; VISION §10.8.

## F3. Smart Review · తెలివైన పునశ్చరణ (M)

**What:** a short daily "Review (5 min)" on Home that brings back items from finished lessons after 1, 3, 7 and 21 days (simple spaced repetition), favouring grammar points with more mistakes.
**Why:** stops early weeks being forgotten as the course grows long.
**Read first:** BUILD_PLAN A5, A3 (generated ids, tags); VISION §8.
**Note:** keep the schedule in `Progress` (synced) and compact (per day, not per item where possible).

## F4. Recorded Audio · రికార్డ్ చేసిన ఆడియో (M)

**What:** generate audio files once, at build time, for every English sentence and Telugu explanation (e.g. Google Cloud Text-to-Speech's free monthly tier), write `/audio/manifest.json`, and let the existing audio hook play them.
**Why:** the same clear voice on every phone, and Telugu narration on iPhones and computers.
**Read first:** BUILD_PLAN A6 (audio hook), A3 (lesson data files); VISION §6.
**Note:** check the free tier's limits and the total file size (host on Vercel if small enough, else a free storage bucket); only new or changed text is generated on each run; never at runtime.

## F5. Owner Stats Page (M)

**What:** `/admin` for the owner's email only (like Family Tree's site stats): counts only — signed-in learners, active this week, reminder subscribers, completions per lesson (where learners stop), reports and errors per lesson.
**Why:** see which lessons are too hard or broken without reading the database.
**Read first:** BUILD_PLAN A7; Family Tree `src/server/site-admin.ts`, `src/server/site-stats.ts` and the "Site stats" section of its `.claude/CLAUDE.md`.
**Note:** guests' progress never leaves their phone; completion counts come from synced accounts only, unless a separate anonymous "lesson completed" counter is agreed (privacy page changes then).

## F6. Download a Week · వారం డౌన్‌లోడ్ (S)

**What:** "Save Week N for offline" on each week in Journey; shows a ✓ when saved.
**Why:** before a train journey or a trip with poor network.
**Read first:** BUILD_PLAN Step 17 (service worker), A3 (lesson data files).

## F7. Word of the Day · ఈరోజు పదం (S)

**What:** one word on Home each day (English, Telugu, example sentence, 🔊), taken from finished or upcoming lessons.
**Why:** a small reason to open the app daily; works with the daily reminder.
**Read first:** BUILD_PLAN A3 (tags); VISION §10.2.

## F8. Weekly Goal · వారపు లక్ష్యం (S)

**What:** the learner picks 3, 5 or 7 days a week (buttons); Home shows a gentle ring ("3 of 5 days"); no penalty when missed.
**Why:** encourages consistency without streak pressure.
**Read first:** BUILD_PLAN A5 (practiceDays); VISION §2 (point 7), §10.2.

## F9. Stage Certificates · సర్టిఫికెట్ (M)

**What:** on finishing a stage, a certificate picture (name from Google, or "EnglishEasy Learner"), the stage's "can do" list and the date — saved or shared to WhatsApp.
**Why:** pride, and word-of-mouth growth.
**Read first:** VISION §10.7; BUILD_PLAN Step 15 (stage complete).
**Note:** draw it in the browser (canvas or SVG to PNG); no server image service.

## F10. Placement Check · ఎక్కడ మొదలుపెట్టాలి (M)

**What:** "Already know some English?" — a 10–15 question tap-only check that suggests a starting week; earlier weeks stay open.
**Why:** learners who know the basics skip ahead instead of getting bored.
**Read first:** VISION §3 (pacing), §11; BUILD_PLAN A4, A5.
**Note:** worth building once Stage 2 has content.

## F11. Sounds Practice · ఉచ్చారణ సాధన (M)

**What:** short drills for sounds Telugu speakers often mix up (v / w, z / j, th, short / long vowels): listen and choose between pairs, then listen and repeat.
**Why:** clearer speech; supports CURRICULUM weeks 114–115.
**Read first:** BUILD_PLAN A6; CURRICULUM §2 (pronunciation row).

## F12. Practice with a Friend · స్నేహితులతో సాధన (M)

**What:** two people on one phone take the two parts of a role play, passing the phone, with both lines shown and spoken.
**Why:** learning together (friends, couples, neighbours) is more fun and builds confidence.
**Read first:** VISION §7; BUILD_PLAN Step 9.

## F13. Voice Speed Choice (S)

**What:** Settings → Speed: Slow / Normal / Faster (sets the normal rate; 🐢 stays slower than it).
**Why:** beginners want slower; advanced learners want natural speed.
**Read first:** BUILD_PLAN A6; VISION §10.9.

## F14. Family Helper Link (M)

**What:** a signed-in learner can share a read-only progress link with someone who helps them (days practised, lessons finished); they can turn it off any time.
**Why:** a helper can encourage and celebrate progress.
**Read first:** BUILD_PLAN A7; VISION §13.
**Note:** opt-in only; the privacy page changes; no names or details beyond progress.

## F15. Play Store App (M)

**What:** package the installable app for Google Play as a Trusted Web Activity (Bubblewrap), with Digital Asset Links on the site.
**Why:** many learners look for apps in the Play Store, not in the browser.
**Read first:** BUILD_PLAN Step 17.
**Note:** Google Play's one-time developer fee; store listing pictures from `docs/screenshots/`.

## F16. Other Native Languages (L)

**What:** "EnglishEasy for Hindi / Tamil / Kannada speakers": add language fields next to `te` in content, translate explanations and meanings, and pick the language on the first screen.
**Why:** the same course helps millions more learners.
**Read first:** BUILD_PLAN A3, B2 (strings); VISION §4.3.
**Note:** content-heavy (every lesson needs the new language); start with one language and Stage 1.

## F17. GitHub CI (S)

**What:** a GitHub Actions workflow running lint, typecheck, unit and e2e tests on every push.
**Why:** catches breakage before Vercel deploys it.
**Read first:** BUILD_PLAN Step 1 (scripts); Family Tree `.github/workflows/ci.yml`.

## F18. Security Headers (S)

**What:** a content security policy and security headers for every page (with Google Tag Manager allowed on the landing page only).
**Why:** standard production hardening.
**Read first:** Family Tree `src/server/security-headers.ts` and its "Security headers" notes in `.claude/CLAUDE.md`.

## F19. Human Telugu Review (process, not code)

**What:** a Telugu speaker reads each released week on `/dev/lesson/<id>` (both modes) and lists fixes; fixes go through BUILD_PLAN E4.
**Why:** Telugu text ships unreviewed (VISION §18); reports catch problems, a review pass prevents them.
**Read first:** BUILD_PLAN Part E (E4); CURRICULUM §1.
