// Primitive Data-Type
const Launch = () => {
  // Boolean
  let passed = new Boolean(false); // Object
  let passed2 = new Boolean("true"); // Object
  if (passed || passed2) {
    console.log("You Passed!");
  }

  let isMale = true; // Direct
  console.log(`Gender: ${isMale ? "Male" : "Female"}`);

  let Truth = 3 == 5 || 7 > 4; // Conditional
  if (Truth) {
    console.log("The Conditions return True!");
  }

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
};

Launch();
