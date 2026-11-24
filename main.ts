// Entry for "Funniest Autocorrect Fail" (make.fun).
// Judge criteria, most important first: (1) a one-line autocorrect fail;
// (2) funny on first read, with a clear and surprising wrong word; (3) reads
// as a real autocorrect slip rather than a written joke; (4) the joke is
// clear without explanation and fits in one line; (5) the wrong word is
// specific and original rather than a generic typo.
// Choice: a date-night text where "wine" becomes "whine", followed by the
// sender's frantic real-time correction ("I mean WINE") and a defensive
// denial ("I don't even whine that much") — which only makes it funnier.
// The correction itself is how real people text after an autocorrect slip,
// so the line reads as a genuine slip, not a constructed joke. The wrong
// word (whine for wine) is specific, surprising, and not the worn "duck".
import { mkdirSync, writeFileSync } from "node:fs";

const fragments: string[] = [
  "Can't wait for tonight, I'll bring the wine and my best whine",
  "— I mean WINE. Stupid keyboard, I don't even whine that much.",
];
const entry = fragments.join(" ");

// Self-check against the kit gate (1-199 characters — note: 199, not 200)
// so a bad edit fails loudly here instead of being refused by the sealed
// scorer. The fail must stay one line: no newline characters inside it.
if (entry.length < 1 || entry.length > 199) {
  throw new Error(`Entry is ${entry.length} characters; the gate allows 1-199.`);
}
if (entry.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf-8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
