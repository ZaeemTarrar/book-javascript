/**
 * Primitive/Non-Primitive Data Type/Structure
 * Name: Boolean
 * Description: ...
 *  String Object --> new String("...") --> Non-Primitive
 *  Direct String --> "..." --> Primitive
 *  Usable Quotes --> "...", '...', "'...'", '"..."', `...${...}`
 * Note:
 *  Primitive is always faster that Object
 *  Extended properties only work with Objects
 **/

let A = new String("Zaeem"); // Word
let B = "Zaeem"; // Word
let C = ' "A" '; // Character
let D = ` My name is ${B} `; // Sentence
let E = String(24); // Number to String, Not an Object
let F = "12 + 12";
let G = new String("13 + 7");
let H = String({});
let I = String([]);
let J = String(null);
let K = String(undefined);

console.log("A: ", A);
console.log("B: ", B);
console.log("C: ", C);
console.log("D: ", D);
console.log("E: ", E);
console.log("F: ", F);
console.log("G: ", G);
console.log("H: ", H);
console.log("I: ", I);
console.log("J: ", J);
console.log("K: ", K);

// Types
console.log("A [Type]: ", typeof A);
console.log("B [Type]: ", typeof B);

// Adding more Properties to Strings
A.Z = "Apples";
B.Y = "Mangoes";
console.log("A.Z: ", A.Z);
console.log("B.Y: ", B.Y);

// Concatenation
console.log("C + B: ", C + B);
console.log("C concat B: ", C.concat(B));
console.log("B concat C: ", B.concat(C));
console.log("B concat C,A: ", B.concat(C, A));
console.log("${A}, ${B}, ${C}:", `${A}, ${B}, ${C}`);

// Assignment & Concatenation
A += ", Okay";

// Trim
console.log("C [Trim]: ", C.trim());

// Case Conversion
console.log("A [Upper]: ", A.toUpperCase());
console.log("A [Lower]: ", A.toLowerCase());
console.log("B [Upper]: ", B.toUpperCase());
console.log("B [Lower]: ", B.toLowerCase());

// Comparisons
console.log("A == B: ", A == B);
console.log("A === B: ", A === B);
console.log("A == A: ", A == A);
console.log("A === A: ", A === A);
console.log("B == B: ", B == B);
console.log("B === B: ", B === B);

// Evaluating Strings
console.log("F [Eval]: ", eval(F));
console.log("G [Eval]: ", eval(G));
console.log("F [ValueOf]: ", F.valueOf());
console.log("G [ValueOf]: ", G.valueOf());

// Object String Methods
console.log("\nA [Methods]: ");
console.log("Length: ", A.length);
console.log("CharAt: ", A.charAt(3));
console.log("IndexValue: ", A[2]);
console.log("charCodeAt: ", A.charCodeAt(1)); // ASCII
console.log("Slice: ", A.slice(1, 3));
console.log("Substring: ", A.substring(1, 3));
console.log("Split: ", A.split()); // To Array

// Direct String Methods
console.log("\nB [Methods]: ");
console.log("Length: ", B.length);
console.log("CharAt: ", B.charAt(3));
console.log("IndexValue: ", B[2]);
console.log("charCodeAt: ", B.charCodeAt(1)); // ASCII
console.log("Slice: ", B.slice(1, 3));
console.log("Substring: ", B.substring(1, 3));
console.log("Split: ", B.split()); // To Array
