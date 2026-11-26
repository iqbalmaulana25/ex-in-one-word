// Describe Your Ex in One Word
// Writes exactly one word describing an ex to /output/entry.txt
// The word: "Expired" — the ex as something past its date.
// Instantly readable as a verdict on a former partner, a precise
// absurdity (people don't expire, milk does), and universally true:
// anyone who has had an ex knows the feeling of something gone off.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "Expired";

// Gate guard: exactly one word, 1-111 characters (counted with the trailing newline).
if (/\s/.test(line.trim()) || line.trim().length === 0 || line.length + 1 > 111) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
