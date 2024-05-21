/**
 * Primitive Data Type/Structure
 * Name: Boolean
 * Description:
 *  It's all about true or false.
 *  Boolean Object --> new Boolean();
 *  Direct Boolean --> true, false
 * Note: Default value for Boolean Object is "false"
 **/

let A = new Boolean();
console.log("A: ", A);

let B = new Boolean(false);
let C = new Boolean("true"); // String
if (B || C) console.log("B & C");

let D = true;
let _E = D ? "Yes" : "No"; // As Condition
console.log(`_E: ${_E}`);

let F = 3 == 5 || 7 > 4; // Conditional
if (F) console.log(`Conditions = ${F}`);

// Falsies
console.log("0", Boolean(0));
console.log("-0", Boolean(-0));
console.log('""', Boolean(""));
console.log("NaN", Boolean(NaN));
console.log("null", Boolean(null));
console.log("undefined", Boolean(undefined));
console.log("[] == true: ", [] == true);
console.log("[] == false: ", [] == false);
console.log("{} == true: ", {} == true);
console.log("{} == false: ", {} == false);

// Truthies
console.log("[]: ", Boolean([]));
console.log("{}: ", Boolean({}));
