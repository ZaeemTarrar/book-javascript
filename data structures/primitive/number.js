/**
 * Primitive/Non-Primitive Data Type/Structure
 * Name: Number
 * Description: ...
 * SubTypes:
 *  Integer
 *  Float/Double
 *  Signed/Unsigned
 *  Hex/Octal/Binary
 *  Exponential/Decimal
 *  NaN -> Not A Number
 **/

let A = new Number(1.2321); // Object
let B = 5; // Integer
let C = +"24"; // String to Number (+)
let D = Number("35"); // String to Number
let E = Number.parseInt("18"); // to Integer
let F = Number.parseFloat("76.342"); // to Float
let G = -9; // Negative Integer
let H = 7.8345; // Decimal
let I = -4.867328; // Negative Decimal
let J = 0xff; // Hex
let K = 0b11111111; // Binary
let L = 0o11111111; // Octal
let M = 0.255e3; // Exponential
let N = Infinity; // Infinity
let O = Number("Hello"); // String to Number -> NaN

console.log("A: ", A);
console.log("A [Exp]: ", A.toExponential(3));
console.log("A [Pre]: ", A.toPrecision(2));
console.log("A [Fix]: ", A.toFixed(2));
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
console.log("L: ", L);
console.log("M: ", M);
console.log("N: ", N);

// Arithmetics
let s1 = A + B;
let s2 = G + H;
let s3 = I + +J;

let p1 = L * M;
let p2 = (M * H).toFixed(3);

console.log("S1: ", s1);
console.log("S2: ", s2);
console.log("S3: ", s3);
console.log("P1: ", p1);
console.log("P2: ", p2);

// Min Max Limits
console.log("Min: ", Number.MIN_VALUE);
console.log("Max: ", Number.MAX_VALUE);
console.log("SafeMax: ", Number.MAX_SAFE_INTEGER);
console.log("PosMax: ", Number.POSITIVE_INFINITY);
console.log("NegMax: ", Number.NEGATIVE_INFINITY);

// Checks
console.log("N Is Infinity: ", !Number.isFinite(N));
console.log("O Is NaN: ", !Number.isNaN(O));
