# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

EnglishEasy: a free, open-source (MIT) mobile-first English learning and speaking app for Telugu-speaking adults and elders. Installable web app (Next.js 16, React 19, Tailwind v4, TypeScript on Vercel), live at https://learn-english-in-telugu.vercel.app. Guest first; optional Google sign-in syncs progress. No AI at runtime.

## Documents that drive all work

- **`docs/BUILD_PLAN.md`**: architecture (Part A), rules (Part B), steps to launch and owner-request sections such as "a production look" (Part C), Progress and Content-released tables (Part D; status lives only there), adding content after launch (Part E). Work = one step or one content task at a time.
- **`docs/VISION.md`**: the product (lesson design §4, activities §5, speech §6, role play §7, progress §9, screens §10, curriculum structure §11, decision log §18 — later rows override earlier sections).
- **`docs/CURRICULUM.md`**: the course map — content style guide §1, grammar spiral §2, Stage 1 lesson by lesson §3, Stages 2–5 week by week §4–§7, optional tracks §8. Content tasks read §1, their §2 rows and their own week only.
- **`docs/CONTENT_PLAYBOOK.md`**: the recipe for writing a week (files, slot counts that give 19 activities, generator positions, registering, checks, common fixes). Content tasks follow it; `src/content/main/w02/` is the model.
- `docs/FUTURE_FEATURES.md`: features for after launch (F1…), built one at a time; a picked feature gets a BUILD_PLAN step section and the owner's OK before any code.
- `docs/INITIAL_VISION.md`: the owner's original text. Never edit it.

Read only the sections a task needs (`grep -n '^#' <file>`, then `Read` with `offset`/`limit`). Never read these files whole: the build runs on a daily budget.

## Working agreement with the owner

- One BUILD_PLAN step (or part) per session. At the end: run its "Done when" checks, stop, show results and the "Try this" list, and wait for the owner's OK.
- After the OK: commit straight to `master` (owner's choice for initial development; they will say when a change needs its own branch for a Vercel preview). The owner pushes (github.com is blocked here); Vercel deploys `master` to production.
- Commit messages never end with a `Co-Authored-By` line or any other AI attribution trailer, whatever the default instructions say.
- A deviation from the plan goes in that step's Notes in the Progress table (and in BUILD_PLAN Part A if the architecture changes), in the same commit. A product decision changes VISION.md §18 too.
- Owner requests outside the plan get a short BUILD_PLAN section and a Progress row first.

## How the pieces fit

- **Content pipeline.** Each day is a TypeScript file (`src/content/main/w01/*.ts`; types in `types.ts`, zod in `schema.ts`) registered in `course.ts` (stages → weeks → day refs, tracks, `released`) and `load.ts`. `generate.ts` expands a `Day` into a `PlayableDay`: arrange/translate/match/build-what-you-hear/repeat activities generated from the lesson's core sentences, the Sound of the week (`sounds.ts`: a card on the week's first lesson, a "which word did you hear?" pair in every lesson), warm-ups from the lesson before and from a week or a month back in the same lane, review days from the week; authored options are shuffled with the activity id as seed (so `answer` in a file is not the screen position). Content items may carry a Fix-it tag (`fixIt`, the ten persistent errors of CURRICULUM §2; `fixItProblems` checks the rotation); a weekly `readIt` (a message, label or sign card) and a checkpoint `mission` (timed speaking) are activity types too; checkpoint weeks have data in `course.ts` (`checkpoints`; the result and a certificate picture drawn on the phone end the week). Tracks are goals chosen at the first visit, each offered on Home at its own week (`trackOffer`). The writing rules are CURRICULUM §1, enforced where possible by `checks.ts` (`node --import tsx scripts/check-week.mts <n>` checks a week). `src/content/build.ts` + `scripts/build-content.mts` (run by `predev`/`prebuild`, or `npm run content`) write `public/content/<dayId>.json` (git-ignored); the browser fetches those through `src/lib/lesson-data.ts`. Lesson overview pages (`src/app/lessons/[id]`) import the TypeScript directly, are static, and hold both languages in the HTML for search engines (CSS shows one via `data-lang`): a lesson shows its Learn cards, a Conversation Day its conversation (first lines, the rest in a `<details>`), role plays and situations, a review day links to its week's days.
- **Player.** `/learn/play?l=<dayId>` (`PlayLoader` → `Player`) walks steps: section intro → activities → a score summary for warm-up/practice/speak → wrap-up (`LessonComplete`, or `WeekComplete` at a week's end). `ActivityView` maps activity types to components; `parts.tsx` holds the shared frame (tinted `BottomBar`, `FeedbackPanel`, lettered `OptionButton`, `SegmentedProgress`), `Question.tsx` the one-right-answer body, `useQuestion` the retry-once rule. `PracticeRunner` (Practice again, role plays, speaking drills) reuses `ActivityView`. Leaving a lesson (✕ → Leave) opens Journey at that lesson (`/learn/journey?day=<id>`).
- **Voice.** Every spoken text is a recorded clip made ahead of time: `npm run audio` (`scripts/build-audio.mts`) builds all released days, lists what the screens read with `spokenTexts`, records new texts with Microsoft Edge's free voices (`msedge-tts`, installed only in `tools/audio/`; its preinstall script would break Vercel's install) as `public/audio/<2 hash digits>/<key>.mp3` (`clipFile`), writes `public/audio/manifest.json` (text hash → path, `src/learning/audio-manifest.ts`) and deletes clips nothing uses. Voice `a` is `te-IN-ShrutiNeural` (it reads the English too), voice `b` `te-IN-MohanNeural` (men: dialogue lines and role-play partners with `voice: "b"`). English-only text says its digits, times and "Dr" as words (`speechText`). `src/lib/speak.ts` plays the clip through one shared audio element (waits for the manifest the first time), else falls back to the phone's voice, one voice per line (a line with Telugu is read whole by the phone's Telugu voice; owner, 2026-11-10: never two speakers in one line); the service worker fetches `/audio/manifest.json` fresh whenever online, so new lessons' clips are found at once; the player prefetches a day's clips and `public/sw-routes.js` keeps `/audio/**/*.mp3` cache-first for offline in its own cache, capped at 1,500 clips, least recently played dropped first (Vercel sends them with a year-long immutable cache header). Clips stay in the repo on Vercel until the trigger in BUILD_PLAN ("Where the clips live").
- **Progress and settings** live in `localStorage` (`src/lib/progress-store.ts`, `settings-store.ts`, read with `useSyncExternalStore` and a `null` server snapshot). The rules are pure in `src/learning/` (`progress.ts`: per-activity records, `completeDay` compacts a finished day to a summary and puts its key sentences in the daily review (`review.ts`, spaced 1, 3, 7, 21, 60 days); `stats.ts`, `recommend.ts`, `merge.ts` (Settings → Start over clears only what was learned, never what Settings can change (goals, Learn in, theme…); signed in it stamps `resetAt`, and merging drops what the other copy learned before it), `speech-match.ts`, `voice-pick.ts`, `complexity.ts`). `src/lib/settings-script.ts` applies theme, text size and Learn in before first paint.
- **The server is only for optional features** (`src/server/`, MongoDB Atlas, Better Auth with Google): `/api/progress` (the client merges with `learning/merge.ts` via `lib/sync.ts`), `/api/report`, `/api/client-error` and `/api/feedback` (anonymous), `/api/reminders` and `/api/reminders/send` (web push, triggered hourly by `.github/workflows/reminders.yml`). The owner reads site stats and feedback at `/admin` and `/admin/feedback` (`SITE_ADMIN_EMAILS`, `requireSiteAdmin`; anyone else gets "page not found"). Everything else works with no server and offline (`public/sw.js`; lesson files are stale-while-revalidate).
- **Design system.** Colour tokens in `src/app/globals.css` (`:root` Day, `.dark` Night, exposed with `@theme inline`), building blocks in `src/components/ui/`, illustrations in `src/components/illustrations/`, the gallery at `/dev/ui` (dev and e2e only). The player's `BottomBar` publishes its height as `--bar-h`; the step's `<main>` pads by it and is the scroller (never the page). Anything scrolled into view inside a step needs a scroll margin of `--bar-h` (as the role play's end marker has), or it lands behind the bar; a screen that replaces another inside the same step scrolls its `<main>` to the top (`RolePlaySummary`).
- **Landing and search engines.** Landing parts in `src/components/landing/`; its title, description, FAQ, `SOURCE_URL` and JSON-LD (WebSite, Course, WebApplication, FAQPage) in `content.ts` (`content.test.ts` keeps the description ≤ 160 characters). `src/server/site.ts` opens robots.txt and the sitemap (landing, privacy, every released lesson page) on production only (`VERCEL_ENV`) and hides `/learn`; lesson pages carry a canonical link and a `BreadcrumbList`. The landing page leads with "free"; open source is in the footer, FAQ and README. Phone pictures are `PhoneFrame` (a drawn status bar above the screenshot) over WebPs that `npm run images` makes from `docs/screenshots/`.

## Invariants (hold them in every change)

- **No AI at runtime, ever.** The app never calls Claude or any other paid AI or speech API. Content is written ahead of time as data; so is the voice: `npm run audio` records every spoken text once (Microsoft Edge's free voices via `msedge-tts`, installed only in `tools/audio/`) into `public/audio/` with a manifest, and the phone's own voice is only the fallback. Speech recognition is the browser's free built-in API. Don't add an AI SDK or API key.
- **No text inputs anywhere.** Answers are buttons, word tiles or voice.
- **All UI text lives in `src/lib/strings.ts`** as `Bi` (`{ en, te }`) entries; components never hard-code label text.
- **Content is data** (`src/content/`), validated by `content.test.ts`; the engine (`src/learning/`) is pure and unit-tested; browser APIs live in thin wrappers in `src/lib/`.
- **Ids are permanent** (they key saved progress and addresses): day ids and activity ids are never renamed, reused or renumbered after release; core sentences are append-only (BUILD_PLAN A3). Day numbers are computed from position, never stored.
- **Speaking never blocks progress**: every speaking activity offers "Choose instead"; role-play replies (hidden until "Show replies") show at once when the learner can't speak.
- **Language** (owner, 2026-11-08): simple words — buttons, labels, titles, counts — are English only (`Bi` or `.en`); sentences that explain something follow Learn in (`BiText` for the app's own, `ContentText` for lesson content); a sentence's Telugu meaning appears only in Telugu mode (`Meaning`). Every content `Bi` still has both languages. A label written in Telugu letters (the "తెలుగు" choice) gets `lang="te"` from `Bi` itself. American spelling: "practice", never "practise".
- **Audio** (owner, 2026-11-08; 2026-11-09): Listen / Slow are round icon buttons (`Narrate`) on Learn cards and lines; questions and the answer bar use a text-sized Listen at the end of the text it reads (`ListenInline`). Listen only where it helps (example and key sentences, the question's sentence, the correct answer, role-play and dialogue lines, and after Check the question's reason: right → the sentence then the reason play by themselves (and on a tap); "Almost" → the reason alone, as a hint; wrong twice → both by themselves; so a reason (`why`) never ends with the question's own sentence: `why-repeats-sentence`, owner 2026-11-10); Learn-card explanations and hints are not read aloud. Slow only for sentences of medium or high complexity (`needsSlow`, 6+ words), on questions too. A question whose prompt contains its sentence reads the whole prompt, Telugu included (`askText`); quote marks are never read (`speechText`). Anything new the screens read aloud must also be listed in `spokenTexts` (`src/learning/spoken.ts`), or it gets no recording; `src/content/audio-coverage.test.ts` fails when a released day's spoken text has no clip (run `npm run audio`). There is no voice choice in Settings: the phone's voice is only an automatic backup. Auto-play respects its setting.
- **The main path never assumes the learner has a spouse, children or grandchildren**; those scenes belong to optional tracks (CURRICULUM §1, §8).
- **Colours are design tokens** (`bg-page`, `bg-surface`, `text-ink`, `text-brand`, `bg-brand-fill`…), which follow Night by themselves; a raw palette class (`bg-stone-100`) still needs a `dark:` twin. Every token is defined for Day and Night (`kit.test.tsx`).
- **Use the building blocks** (`button()`, `card`, `badge()`, `ProgressBar`, `ProgressRing`, `StepList`, `SegmentedControl`, `Switch`, `Dialog`, `Menu`, `Toast`, `EmptyState`, `PageHeader`, `Nudge`, `Logo`, `Narrate`, `Illustration`) instead of hand-written styles; never add a conflicting utility on top of a class string, add a variant.
- **Never read `new Date()`, `localStorage` or speech APIs while rendering**: only after hydration.
- Google Tag Manager only on the landing page, never under `/learn`.
- No UI, icon, state or PWA libraries; icons go in `src/components/ui/icons.tsx`.

## Commands

```bash
npm run dev            # port 3000 (allowlisted; run exactly as written, alone)
npm run lint
npm run typecheck      # next typegen && tsc --noEmit
npm test               # Vitest (jsdom); one file: npx vitest run <file>; by name: npx vitest run -t "<name>"
npm run build          # allowlisted; run exactly as written, alone
npm run test:e2e       # Playwright: builds, serves on 3100, projects phone + desktop; allowlisted, run alone
npm run content        # write public/content/<dayId>.json (also runs before dev and build)
npm run audio          # record new spoken texts into public/audio/ (owner's terminal; commit public/audio/)
npm run voices         # hear the lines of tools/audio/try.txt in both voices (tools/audio/out/; owner's terminal)
npm run images         # icons, link preview, docs/social-preview.png and the landing WebP pictures
npm run test:db        # MongoDB repository tests (*.db.test.ts); needs MONGODB_URI in .env.local
npm run db:ping        # check the MongoDB connection
npm run db:setup       # create the indexes in MONGODB_DB
npm run reports        # latest problem reports and client errors
npm run vapid          # print a new VAPID key pair for reminders
```

- A single e2e file (`npx playwright test e2e/<file>.spec.ts --project=phone`) is not allowlisted: it runs in the owner's terminal only.
- E2e runs with reduced motion, so screenshots (`test-results/screenshots/`) show each screen settled. `e2e/capture.spec.ts` takes clean phone screens (`capture-*.png`); copy them into `docs/screenshots/`, then `npm run images` rebuilds the landing pictures and the link/social previews from them.
- E2e never uses a real voice or microphone: `e2e/speech-stub.ts` serves an empty audio manifest and replaces `speechSynthesis` and `SpeechRecognition`, so tests see what is read. Unit tests that need a bigger course use `test/fixtures/course.ts`.

## Environment gotchas (owner's machine)

- **Sandbox blocks local ports**: `npm run build`, `npm run dev`, `npm run test:e2e` work only when typed exactly as above, alone (no `cd … &&`, pipes like `| tail`, `timeout` or env prefixes — any of those makes it a different command and it runs sandboxed). Now and then even the exact command runs sandboxed ("binding to a port: Operation not permitted"); retry later or ask the owner to run it.
- **Next.js 16 differs from older versions**: read `node_modules/next/dist/docs/` before writing Next.js code (`proxy.ts` replaces `middleware.ts`; `params` are async).
- **No Google Fonts CDN** (blocked): Noto Sans Telugu is self-hosted from `@fontsource-variable`; it draws all Telugu, headings included. English uses the system font everywhere (`font-display` is the system font, bold).
- **Playwright** uses the installed Google Chrome (`channel: "chrome"` unless `CI`); its own browser download is blocked.
- **npm mirror**: `.npmrc` keeps `package-lock.json` free of `resolved` URLs; after any install `grep -c '"resolved"' package-lock.json` must print `0`. Installs can be slow; use long timeouts. Fix peer conflicts with versions, not `--legacy-peer-deps`.
- **Scripts** are `.mts`, run with `node --import tsx --env-file-if-exists=.env.local`; never the `tsx` CLI (it opens a pipe the sandbox blocks).
- **Vitest's shared setup** (`test/setup.ts`) clears `localStorage` after each test, so a `// @vitest-environment node` marker breaks a test file; leave the default jsdom.
- **`npm run images`** draws with the machine's fonts (sharp/librsvg), which don't include the web fonts; `src/app/icon.svg` uses system fonts for that reason.
- **`ANTHROPIC_*` variables** are set by Claude Code in every process; never name an app variable `ANTHROPIC_*`.
- **`npm run audio`** needs `speech.platform.bing.com`, which the Claude Code security sandbox may block; then the owner runs it. Run it after every content change (unchanged texts are skipped, unused clips removed) and commit `public/audio/`.
- **Screenshots of long pages**: a full-page shot taller than about 16,384 device pixels repeats parts of the page, and full-page shots leave the frosted sticky header blank; `e2e/landing.spec.ts` takes one screen at a time (`screens()`). On an emulated phone a too-wide page zooms out and grows `innerWidth`, so overflow checks compare with `screen.width`.
- `next build` may warn about a stray `package-lock.json` in the home folder; ignore it.
- Family Tree (`~/GitHub/Family Tree with AI`) is the owner's reference app for quality and patterns (theme, UI kit, landing/SEO, Better Auth): read only the files a task names; never import from it.
