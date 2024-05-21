/**
 * Primitive Data Type/Structure
 * Name: BigInt
 * Description: ...
 **/

let A = 45678765; // Number
let B = 7n; // with `n`
let C = BigInt(2934820394803);
let D = BigInt("2934820394803"); // with String
let E = BigInt("0o377777777777777777"); // Octal
let F = BigInt("0x1fffffffffffff"); // Hex
let G = BigInt("0b1111111111111111111111"); // Binary
let H = new BigInt64Array(new ArrayBuffer(32)); // Int64[]
let I = new BigUint64Array(new ArrayBuffer(64)); // Unsigned Int64[]
let J = [4n, 6, -12n, 10, 4, 0, 0n]; // Mixed Array

console.log("A: ", typeof A, A);
console.log("B: ", typeof B, B);
console.log("C: ", typeof C, C);
console.log("D: ", typeof D, D);
console.log("E: ", typeof E, E);
console.log("F: ", typeof F, F);
console.log("G: ", typeof G, G);
console.log("H: ", typeof H, H);
console.log("I: ", typeof I, I);

console.log("BigIntMax: ", Number.MAX_VALUE);

// Sorting Mixed Array containing Number & BigInt
console.log("J: ", typeof J, J);
J.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
console.log("Mixed Sorted: ", J);

// Int64 Properties
console.log("\nH [Prop]:");
console.log("Length: ", H.length);
console.log("Byte Length: ", H.byteLength);
console.log("Byte Offset: ", H.byteOffset);
console.log("Bytes per Element: ", H.BYTES_PER_ELEMENT);
H.set([100n, 200n], 1);
console.log("H: ", typeof H, H);

// Uint64 Properties
console.log("\nI [Prop]:");
console.log("Length: ", I.length);
console.log("Byte Length: ", I.byteLength);
console.log("Byte Offset: ", I.byteOffset);
console.log("Bytes per Element: ", I.BYTES_PER_ELEMENT);
I.set([100n, 200n], 1);
console.log("H: ", typeof I, I);
