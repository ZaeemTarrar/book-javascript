/**
 * 📕 Primitive Data-Type
 * Name: Boolean
 * Description:
 *  It's all about true or false.
 *  Boolean Object --> new Boolean();
 *  Direct Boolean --> true, false
 * Note: Default value for Boolean Object is "false"
 **/

/**
 * @type {boolean}
 */
let A = new Boolean();

/**
 * @type {boolean}
 */
let B = new Boolean(false);

/**
 * @type {boolean}
 */
let C = new Boolean("true"); // from String as Object

/**
 * @type {boolean}
 */
let D = true;

/**
 * @type {boolean}
 * @explanation: Declared via Ternary Decision
 */
let _E = D ? "Yes" : "No"; // As Condition

/**
 * @type {boolean}
 * @explanation: Declared via Conditions
 */
let F = 3 == 5 || 7 > 4; // Conditional

/**
 * Displaying Variables
 */
console.log("A: ", A);
console.log("B: ", B);
console.log("C: ", C);
console.log("D: ", D);
console.log("_E:", _E);

/**
 * Obtaining Type of Variables
 */
console.log("[TypeOf] A: ", typeof A);
console.log("[TypeOf] B: ", typeof B);
console.log("[TypeOf] C: ", typeof C);

/**
 * With Conditional Statement
 */
if (B || C) console.log("B & C");
if (F) console.log(`Conditions = ${F}`);

/**
 * Displaying Falsies
 */
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

/**
 * Displaying Truthies
 */
console.log("[]: ", Boolean([]));
console.log("{}: ", Boolean({}));
