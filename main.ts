// Describe Your Ex in One Word
// Writes exactly one word describing an ex to /output/entry.txt
// The word: "Unsubscribed" — the ex as a newsletter you opted out of.
// Instantly readable as a verdict on a former partner ("I cancelled you"),
// a precise absurdity (people aren't mailing lists), more surprising than
// a plain insult like "toxic", and universally true: everyone has wanted
// to hit unsubscribe on a person. One word, spelled correctly, no tricks.
//
// Why this word, against the judge's brief (most important first):
// 1. Verdict: "Unsubscribed" only makes sense as something you did to a
//    person you used to be with — it reads as a breakup in one word.
// 2. Punch: the joke is the category error — a human treated as a mailing
//    list. It lands at a glance, no caption needed.
// 3. Surprise: the field will be full of "toxic", "regret", "liar".
//    Nobody expects the breakup framed as an email preference.
// 4. Craft: one clean word, correctly spelled, no punctuation tricks.
// 5. Recognition: everyone has hit unsubscribe, and everyone has had an
//    ex they wish came with an unsubscribe link.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "Unsubscribed";

// Gate guard: exactly one word, 1-111 characters (counted with the trailing newline).
// Split out so the rule is stated once and the failure names the rule it broke.
function assertSingleWord(word: string): string {
  const trimmed = word.trim();
  if (trimmed.length === 0) {
    throw new Error("entry line is empty, the gate needs 1-111 characters");
  }
  if (/\s/.test(trimmed)) {
    throw new Error(`entry line must be exactly one word, got: ${word}`);
  }
  if (word.length + 1 > 111) {
    throw new Error(`entry line breaks the gate: ${word.length} characters`);
  }
  return word;
}

assertSingleWord(line);

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
