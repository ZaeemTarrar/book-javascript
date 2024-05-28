/**
 * 📕 Primitive Data-Type
 * Name: BigInt
 * Description: ...
 **/

/**
 * @type {number}
 */
let A = 45678765; // Number

/**
 * @type {bigint}
 */
let B = 7n; // with `n`

/**
 * @type {bigint}
 */
let C = BigInt(2934820394803);

/**
 * @type {bigint}
 */
let D = BigInt("2934820394803"); // with String

/**
 * @type {bigint}
 */
let E = BigInt("0o377777777777777777"); // Octal

/**
 * @type {bigint}
 */
let F = BigInt("0x1fffffffffffff"); // Hex

/**
 * @type {bigint}
 */
let G = BigInt("0b1111111111111111111111"); // Binary

/**
 * @type {object}
 */
let H = new BigInt64Array(new ArrayBuffer(32)); // Int64[]

/**
 * @type {object}
 */
let I = new BigUint64Array(new ArrayBuffer(64)); // Unsigned Int64[]

/**
 * @type {array<number|bigint>}
 */
let J = [4n, 6, -12n, 10, 4, 0, 0n]; // Mixed Array

/**
 * Displaying Variables
 */
console.log("A: ", typeof A, A);
console.log("B: ", typeof B, B);
console.log("C: ", typeof C, C);
console.log("D: ", typeof D, D);
console.log("E: ", typeof E, E);
console.log("F: ", typeof F, F);
console.log("G: ", typeof G, G);
console.log("H: ", typeof H, H);
console.log("I: ", typeof I, I);

/**
 * Big Number Limits
 */
console.log("BigIntMax: ", Number.MAX_VALUE);

/**
 * Obtaining Type of Variable
 */
console.log("J: ", typeof J, J);

/**
 * Sorting Mixed Array containing Number & BigInt
 */
J.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

/**
 * Displaying sorted mix array
 */
console.log("Mixed Sorted: ", J);

/**
 * Big Number Int64 Properties
 */
console.log("\nH [Prop]:");
console.log("Length: ", H.length);
console.log("Byte Length: ", H.byteLength);
console.log("Byte Offset: ", H.byteOffset);
console.log("Bytes per Element: ", H.BYTES_PER_ELEMENT);
H.set([100n, 200n], 1);
console.log("H: ", typeof H, H);

/**
 * Big Number Uint64 Properties
 */
console.log("\nI [Prop]:");
console.log("Length: ", I.length);
console.log("Byte Length: ", I.byteLength);
console.log("Byte Offset: ", I.byteOffset);
console.log("Bytes per Element: ", I.BYTES_PER_ELEMENT);
I.set([100n, 200n], 1);
console.log("H: ", typeof I, I);
