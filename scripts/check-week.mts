// Checks one week's day files before they are registered (CONTENT_PLAYBOOK §6): every content rule for each day,
// plus the course rules (a new word introduced once, no core sentence twice in the week) against the written course.
//   node --import tsx scripts/check-week.mts <week number> <day id> … (the seven ids in course order)
// Files are read from src/content/main/wNN/<id>.ts. Exits 1 when anything is wrong.
import { existsSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { buildAll } from "../src/content/build";
import { checkCourse, checkDay } from "../src/content/checks";
import { course as courseMap } from "../src/content/course";
import { activityCount, expandDay } from "../src/content/generate";
import type { ConversationDay, Day, Lesson } from "../src/content/types";

const [weekArg, ...ids] = process.argv.slice(2);
const week = Number(weekArg);
if (!Number.isInteger(week) || ids.length === 0) {
  console.error("usage: node --import tsx scripts/check-week.mts <week number> <day id> …");
  process.exit(2);
}
const folder = join(process.cwd(), "src", "content", "main", `w${String(week).padStart(2, "0")}`);

const days: Day[] = [];
for (const id of ids) {
  const file = join(folder, `${id}.ts`);
  if (!existsSync(file)) {
    console.error(`missing file: ${file}`);
    process.exit(1);
  }
  const { day } = (await import(pathToFileURL(file).href)) as { day: Day };
  if (day.id !== id) console.error(`${id}: the file's day id is "${day.id}"`);
  days.push(day);
}

const written = await buildAll();
const stage = courseMap.stages.find((s) => week >= s.firstWeek && week <= s.lastWeek)?.n ?? null; // for the sentence length limit
const earlier: Lesson[] = written.filter((b) => b.lane === "main" && b.week < week && b.day.kind === "lesson").map((b) => b.day as Lesson);
const weekLessons = days.filter((d): d is Lesson => d.kind === "lesson");
const conversation = days.find((d): d is ConversationDay => d.kind === "conversation");

let problems = 0;
const before: Lesson[] = [...earlier];
for (const day of days) {
  const playable = expandDay(day, before, weekLessons, conversation);
  const found = checkDay(day, playable, { stage, mainPath: true });
  console.log(`${found.length === 0 ? "ok  " : "FAIL"} ${day.id} (${day.kind}, ${activityCount(playable)} activities)`);
  for (const p of found) console.log(`     ${p}`);
  problems += found.length;
  if (day.kind === "lesson") before.push(day);
}

const course = checkCourse([
  ...written.filter((b) => !(b.lane === "main" && b.week === week)).map((b) => ({ day: b.day, weekKey: `${b.lane}:${b.week}` })),
  ...days.map((day) => ({ day, weekKey: `main:${week}` })),
]);
for (const p of course) console.log(`FAIL course: ${p}`);
problems += course.length;

console.log(problems === 0 ? `check-week: Week ${week} passes every content rule` : `check-week: ${problems} problem(s)`);
process.exitCode = problems === 0 ? 0 : 1;
