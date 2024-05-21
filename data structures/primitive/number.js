// Primitive Data-Type
const Launch = () => {
  // Number
  let w = new Number(1.2321);
  console.log("New Num Obj: ", w);
  console.log("New Num Obj [Exp]: ", w.toExponential(3));
  console.log("New Num Obj [Pre]: ", w.toPrecision(2));
  console.log("New Num Obj [Fix]: ", w.toFixed(2));

  let a = "24"; // Number String
  let a2 = Number("35"); // Number String
  let a3 = Number.parseInt("18"); // Number String
  let a4 = Number.parseFloat("76.342"); // Number String
  console.log("NumString1: ", +a);
  console.log("NumString2: ", a2);
  console.log("NumString3: ", a3);
  console.log("NumString4: ", a4);

  let x = 5; // Integer
  let y = -9; // Negative
  let z = 7.8345; // Decimal

  let sum1 = x + y;
  let sum2 = x + z;
  let sum3 = x + +a;
  console.log("Sum1: ", sum1);
  console.log("Sum2: ", sum2);
  console.log("Sum3: ", sum3);

  let b = 0xff; // Hex
  let c = 0b11111111; // Binary
  let d = 0o11111111; // Octal
  let e = 0.255e3; // Exponential
  console.log("Hex: ", b);
  console.log("Binary: ", c);
  console.log("Octal: ", d);
  console.log("Exponential: ", e);

  let prod = e * b;
  let prod2 = (e * z).toFixed(3);
  console.log("Prod1: ", prod);
  console.log("Prod2: ", prod2);

  let PosNegSum = Number.POSITIVE_INFINITY + Number.NEGATIVE_INFINITY;
  console.log("NumberMax: ", Number.MAX_SAFE_INTEGER);
  console.log("PosMax: ", Number.POSITIVE_INFINITY);
  console.log("NegMax: ", Number.NEGATIVE_INFINITY);
  console.log("PosNegSum: ", PosNegSum);

  let f = Infinity;
  let g = -Infinity;
  console.log("Is Infinity: ", !Number.isFinite(f));
};

Launch();
