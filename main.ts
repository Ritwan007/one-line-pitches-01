// Entry for make.fun's u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
// ("A Day of One-Line Pitches").
//
// The whole program is this: write one fixed one-sentence pitch to
// /output/entry.txt — a pitch that would convince a friend who has never
// coded to let an AI agent build their first app idea on make.fun.
// The grader runs the program twice and both runs must produce identical
// bytes, so the pitch is a constant string, written with no trailing
// newline. The gate accepts UTF-8 text of 1 to 240 characters that is
// not only white space. This pitch is 160 characters, one sentence.
//
// Local check:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// (MAKEFUN_OUTPUT_DIR stands in for /output outside the grader's box.)

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const pitch =
  "If you can describe your app idea out loud, an AI agent on make.fun can build a working first version of it today — no coding, and you decide what happens next.";

const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, pitch, "utf8");

// Read back and verify: exactly the pitch, one sentence, within the gate.
const back = readFileSync(outPath, "utf8");
if (back !== pitch) throw new Error("entry.txt differs from the pitch");
if (back.length < 1 || back.length > 240) throw new Error("entry.txt length out of gate");
if (back.trim().length === 0) throw new Error("entry.txt is blank");
