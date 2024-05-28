/**
 * @type {boolean}
 */
const X = true;

/**
 * @type {boolean}
 */
const Y = false;

/**
 * Single If Statement
 * Explanation: "If" block works only if the boolean
 *  is true
 */
if (X) {
  console.log("[1] Worked");
}

/**
 * Single-line If Statement without brackets
 */
if (Y) console.log("[1] Worked");

/**
 * If Else Statement
 * Explanation: "If" block works only if the boolean
 *  is true, else works otherwise.
 */
if (Y) {
  console.log("[2] Worked");
} else {
  console.log("[2] Didn't Work");
}

/**
 * If Else Statement
 * Explanation: "If" and every "else if" block works only if the boolean
 *  provided is true, else works otherwise.
 *  All blocks are checked in sequence
 */
if (Y) {
  console.log("[3] Block 1 Worked");
} else if (X) {
  console.log("[3] Block 2 Worked");
} else {
  console.log("[3] Nothing Work");
}

/**
 * Nested If Else Statement
 * Explanation: "If" and every "else if" block works only if the boolean
 *  provided is true, else works otherwise.
 *  All blocks are checked in sequence
 */
if (Y) {
  console.log("[3] Block 1 Worked");
  if (X) {
    console.log("[3] Nested-Block 1 Worked");
  } else {
    console.log("[3] Nested-Block 1 Didn't Work");
  }
} else {
  console.log("[3] Nothing Work");
}
