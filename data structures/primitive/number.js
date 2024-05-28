/**
 * 📕 Primitive Data-Type
 * Name: Number
 * Description: ...
 * SubTypes:
 *  - Integer
 *  - Float/Double
 *  - Signed/Unsigned
 *  - Hex/Octal/Binary
 *  - Exponential/Decimal
 *  - NaN -> Not A Number
 **/

/**
 * @type {object}
 */
let A = new Number(1.2321); // Object

/**
 * @type {number}
 */
let B = 5; // Integer

/**
 * @type {number}
 */
let C = +"24"; // String to Number (+)

/**
 * @type {object}
 */
let D = Number("35"); // String to Number

/**
 * @type {number}
 */
let E = Number.parseInt("18"); // to Integer

/**
 * @type {number}
 */
let F = Number.parseFloat("76.342"); // to Float

/**
 * @type {number}
 */
let G = -9; // Negative Integer

/**
 * @type {number}
 */
let H = 7.8345; // Decimal

/**
 * @type {number}
 */
let I = -4.867328; // Negative Decimal

/**
 * @type {number}
 */
let J = 0xff; // Hex

/**
 * @type {number}
 */
let K = 0b11111111; // Binary

/**
 * @type {number}
 */
let L = 0o11111111; // Octal

/**
 * @type {number}
 */
let M = 0.255e3; // Exponential

/**
 * @type {number}
 */
let N = Infinity; // Infinity

/**
 * @type {object}
 */
let O = Number("Hello"); // String to Number -> NaN

/**
 * Displaying Variables
 */
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
console.log("L: ", L);
console.log("M: ", M);
console.log("N: ", N);

/**
 * Number Methods
 */
console.log("A [Exp]: ", A.toExponential(3));
console.log("A [Pre]: ", A.toPrecision(2));
console.log("A [Fix]: ", A.toFixed(2));

/**
 * Arithmetic Operations
 */
let s1 = A + B;
let s2 = G + H;
let s3 = I + +J;
let p1 = L * M;
let p2 = (M * H).toFixed(3);

/**
 * Displaying Arithmetic Operation Results
 */
console.log("S1: ", s1);
console.log("S2: ", s2);
console.log("S3: ", s3);
console.log("P1: ", p1);
console.log("P2: ", p2);

/**
 * Number Limits
 */
console.log("Min: ", Number.MIN_VALUE);
console.log("Max: ", Number.MAX_VALUE);
console.log("SafeMax: ", Number.MAX_SAFE_INTEGER);
console.log("PosMax: ", Number.POSITIVE_INFINITY);
console.log("NegMax: ", Number.NEGATIVE_INFINITY);

/**
 * Number Check/Validation Methods
 */
console.log("N Is Infinity: ", !Number.isFinite(N));
console.log("O Is NaN: ", !Number.isNaN(O));
