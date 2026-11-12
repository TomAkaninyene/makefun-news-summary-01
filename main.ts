// make.fun news-summary-01 entry (Node 22, standard library only).
// Reads summary.txt beside this file, checks it against the gate's rules
// (UTF-8, 1 to 2,000 code points, not only white space) and writes the exact
// bytes to /output/entry.txt. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const bytes = readFileSync(new URL('./summary.txt', import.meta.url));
const text = bytes.toString('utf8');
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 2000 || text.trim().length === 0) {
  throw new Error(`summary.txt fails the gate: ${codePoints} code points`);
}
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), bytes);
