// Primitive Data-Type
const Launch = () => {
  // String
  let title = new String("Zaeem"); // Object
  console.log("Title: ", title);

  let name = "Zaeem"; // Word
  let grade = "A"; // Letter/Character

  // Sentence -> Direct String
  let description = ` My name is ${name} ! `;
  console.log("Sentence: ", description);
  console.log("Length: ", description.length);
  console.log("CharAt: ", description.charAt(5));
  console.log("IndexValue: ", description[6]);
  console.log("ASCII: ", grade.charCodeAt(0));
  console.log(": ", grade.charCodeAt(0));

  let d1, d2;
  console.log("Slice: ", (d1 = description.slice(3, 10)));
  console.log("D1: ", d1);
  console.log("SubString: ", (d2 = description.substring(4, 12)));
  console.log("D2: ", d2);
};

Launch();
