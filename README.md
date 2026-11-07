# EnglishEasy

A mobile-first English learning and speaking app for Telugu-speaking adults and elders. An installable web app (Next.js on Vercel); guest first, optional Google sign-in to sync progress. No AI at runtime.

Plan and vision are in `docs/` (start with `docs/BUILD_PLAN.md`).

## Commands

```bash
npm run dev          # http://localhost:3000
npm run lint
npm run typecheck
npm test             # Vitest; one file: npx vitest run <file>
npm run build
npm run test:e2e     # Playwright on port 3100 (projects: phone, desktop)
```

## Environment variables

None yet. Each one added in a later step goes in `.env.example` and here.
