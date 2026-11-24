// One Word From Your Ex — entry program (make.fun, program/v1).
//
// Writes a single word to /output/entry.txt: the word an ex would use
// to describe you.
//
// The word is "placeholder": you were never the destination, only the
// seat kept warm until someone better came along. It is funny because
// it makes you a role, not a person — a temp, an interim, a stand-in —
// and painfully honest because it says the whole relationship was
// provisional: you were the one before the one.
//
// Deterministic: no clock, no randomness, no network, no input.
// Output is exactly 11 bytes, inside the 1-24 character gate.
// No trailing newline: the gate counts the word alone, so the file
// holds the word and nothing else — a single token, no whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "placeholder";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
