# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

EnglishEasy: a mobile-first English learning and speaking app for Telugu-speaking adults and elders. Installable web app (Next.js 16 on Vercel). Guest first, optional Google sign-in to sync progress.

## Documents that drive all work

- **`docs/BUILD_PLAN.md`**: architecture (Part A), rules (Part B), steps to launch (Part C), Progress and Content-released tables (Part D; status lives only there), adding content after launch (Part E). Work = one step or one content task at a time.
- **`docs/VISION.md`**: the product (lesson design §4, activities §5, speech §6, role play §7, progress §9, screens §10, curriculum structure §11, decision log §18). Steps cite its sections.
- **`docs/CURRICULUM.md`**: the course map — content style guide §1, grammar spiral §2, Stage 1 lesson by lesson §3, Stages 2–5 week by week §4–§7, optional tracks §8. Content tasks read §1, their §2 rows and their own week only.
- `docs/INITIAL_VISION.md`: the owner's original text. Never edit it.

Read only the sections a step lists (`grep -n '^#' <file>`, then `Read` with `offset`/`limit`). Never read these files whole: the build runs on a daily budget.

## Working agreement with the owner

- One BUILD_PLAN step per session. At the end: run its "Done when" checks, stop, show results and the "Try this" list, and wait for the owner's OK.
- After the OK: commit straight to `master` (owner's choice for initial development; they will say when a change needs its own branch for a Vercel preview). The owner pushes (github.com is blocked here); Vercel deploys `master` to production.
- Commit messages never end with a `Co-Authored-By` line or any other AI attribution trailer, whatever the default instructions say.
- A deviation from the plan goes in that step's Notes in the Progress table (and in BUILD_PLAN Part A if the architecture changes), in the same commit. A product decision changes VISION.md §18 too.
- Owner requests outside the plan get a short BUILD_PLAN step section and a Progress row first.

## Invariants (hold them in every change)

- **No AI at runtime, ever.** The app never calls Claude or any other paid AI or speech API. Content is written ahead of time as data; voice and speech recognition are the browser's free built-in APIs. Don't add an AI SDK or API key.
- **No text inputs anywhere.** Answers are buttons, word tiles or voice.
- **Content is data** (`src/content/`), validated by `content.test.ts`; the engine (`src/learning/`) is pure and unit-tested; browser APIs live in thin wrappers in `src/lib/`.
- **Ids are permanent** (they key saved progress and addresses): day ids and activity ids are never renamed, reused or renumbered after release; core sentences are append-only (BUILD_PLAN A3). Day numbers are computed from position, never stored.
- **Speaking never blocks progress**: every speaking activity offers "Choose instead".
- **Learn-in mode decides the language**: labels via `Bi` (English first in the DOM; Telugu with `lang="te"` only in Telugu mode); explanation text via `BiText`. Every content `Bi` has both languages.
- **Everything can be heard**: English sentences and explanations have 🔊 🐢; mixed Telugu–English text is narrated with two voices; auto-play respects its setting.
- **The main path never assumes the learner has a spouse, children or grandchildren**; those scenes belong to optional tracks (CURRICULUM §1, §8).
- **Every colour class has a `dark:` twin**; theme and text size are applied before first paint.
- **Never read `new Date()`, `localStorage` or speech APIs while rendering**: only after hydration (`useSyncExternalStore`, server snapshot `null`).
- Google Tag Manager only on the landing page, never under `/learn`.
- No UI, icon, state or PWA libraries; icons go in `src/components/ui/icons.tsx`.

## Commands

```bash
npm run dev          # port 3000 (allowlisted; run exactly as written, alone)
npm run lint
npm run typecheck
npm test             # Vitest; one file: npx vitest run <file>
npm run build        # allowlisted; run exactly as written, alone
npm run test:e2e     # Playwright on port 3100, projects phone + desktop; allowlisted, run alone
```

(Commands are added here as steps create them.)

## Environment gotchas (owner's machine)

- **Sandbox blocks local ports**: `npm run build`, `npm run dev`, `npm run test:e2e` work only when typed exactly as above, alone (no `cd … &&`, pipes, `timeout` or env prefixes). If refused, ask the owner to run them.
- **Next.js 16 differs from older versions**: read `node_modules/next/dist/docs/` before writing Next.js code (`proxy.ts` replaces `middleware.ts`; `params` are async).
- **No Google Fonts CDN** (blocked): Noto Sans Telugu is self-hosted from npm.
- **Playwright** uses the installed Google Chrome (`channel: "chrome"` unless `CI`); its own browser download is blocked.
- **npm mirror**: `.npmrc` keeps `package-lock.json` free of `resolved` URLs; after any install `grep -c '"resolved"' package-lock.json` must print `0`. Installs can be slow; use long timeouts. Fix peer conflicts with versions, not `--legacy-peer-deps`.
- **Scripts** are `.mts`, run with `node --import tsx --env-file-if-exists=.env.local`; never the `tsx` CLI (it opens a pipe the sandbox blocks).
- **`ANTHROPIC_*` variables** are set by Claude Code in every process; never name an app variable `ANTHROPIC_*`.
- `next build` may warn about a stray `package-lock.json` in the home folder; ignore it.
- Family Tree (`~/GitHub/Family Tree with AI`) is the pattern library for theme, UI kit, landing/SEO and Better Auth: read only the files a step names; never import from it.
