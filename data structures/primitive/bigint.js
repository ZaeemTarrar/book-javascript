// Primitive Data-Type
const Launch = () => {
  // BigInt
  let num1 = 45678765; // Number
  let num2 = 7n; // BigInt with `n`
  let num3 = BigInt(2934820394803298); // BigInt
  let num4 = BigInt("2934820394803298"); // BigInt String
  let num5 = BigInt("0o377777777777777777"); // BigInt Octal
  let num6 = BigInt("0x1fffffffffffff"); // BigInt Hex
  let num7 = BigInt("0b1111111111111111111111"); // BigInt Binary

  console.log("Number: ", typeof num1, num1);
  console.log("Number2: ", typeof num2, num2);
  console.log("Number3: ", typeof num3, num3);
  console.log("Number4: ", typeof num4, num4);
  console.log("Number5: ", typeof num5, num5);
  console.log("Number6: ", typeof num6, num6);
  console.log("Number7: ", typeof num7, num7);
  console.log("NumberMax: ", Number.MAX_SAFE_INTEGER);
  console.log("BigIntMax: ", Number.MAX_VALUE);
};

Launch();
