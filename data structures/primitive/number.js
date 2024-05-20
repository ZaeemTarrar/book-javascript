// Primitive Data-Type
const Launch = () => {
  // Number
  let x = 5; // Integer
  let y = -9; // Negative
  let z = 7.8345; // Decimal
  let a = "24"; // Number String
  let b = 0xff; // Hex
  let c = 0b11111111; // Binary
  let d = 0o11111111; // Octal
  let e = 0.255e3; // Exponential
  let sum1 = x + y;
  let sum2 = x + z;
  let sum3 = x + +a;
  let prod = e * b;
  console.log("Sum1: ", sum1);
  console.log("Sum2: ", sum2);
  console.log("Sum3: ", sum3);
  console.log("Hex: ", b);
  console.log("Binary: ", c);
  console.log("Octal: ", d);
  console.log("Exponential: ", e);
  console.log("Prod1: ", prod);
  console.log("NumberMax: ", Number.MAX_SAFE_INTEGER);
};

Launch();
