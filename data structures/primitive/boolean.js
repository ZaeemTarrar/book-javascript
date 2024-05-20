// Primitive Data-Type
const Launch = () => {
  // Boolean
  let isMale = true; // Direct
  let Truth = 3 == 5 || 7 > 4; // Conditional
  // Sentence
  console.log(`Gender: ${isMale ? "Male" : "Female"}`);
  if (Truth) {
    console.log("The Conditions return True!");
  }
};

Launch();
