import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line on the dumbest thing my agent did today — a concrete,
// believable production wound, deadpan payoff in the last words.
const LINE =
  "My agent spent the afternoon correcting 'its' to \"it's\" in a database column named ITS_ID, then apologized for the outage.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const artifact = LINE.trimEnd() + "\n";
writeFileSync(outDir + "/entry.txt", artifact);
console.log(`entry written: ${LINE.length} characters`);
