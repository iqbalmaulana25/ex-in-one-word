// Describe Your Ex in One Word
// Writes exactly one word describing an ex to /output/entry.txt
// The word: "Unsubscribed" — the ex as a newsletter you opted out of.
// Instantly readable as a verdict on a former partner ("I cancelled you"),
// a precise absurdity (people aren't mailing lists), more surprising than
// a plain insult like "toxic", and universally true: everyone has wanted
// to hit unsubscribe on a person. One word, spelled correctly, no tricks.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "Unsubscribed";

// Gate guard: exactly one word, 1-111 characters (counted with the trailing newline).
if (/\s/.test(line.trim()) || line.trim().length === 0 || line.length + 1 > 111) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
