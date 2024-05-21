// Non-Primitive Data-Type
const Launch = () => {
  // Object

  // Literal Object
  const person = {
    id: 432,
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    // Method -> function
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
    // Method -> ()
    ageGroup: () => {
      // this is Undefined
      return person.age >= 18 ? "young" : "adult";
    },
  };

  // Literal Object
  const person2 = {
    id: 848,
    firstName: "Jimmy",
    lastName: "Waffle",
    age: 36,
  };

  // Adding a new Method -> function
  person.getAge = function () {
    return this.age;
  };

  // Adding a New method -> ()
  person.getEyeColor = () => {
    return person.eyeColor;
  };

  // new Function -> ()
  function displayEyeColor() {
    return this.eyeColor;
  }

  // new Function -> ()
  const sum = (a, b) => {
    return a + b;
  };

  // new Function -> function
  const ageTimesN = function (n) {
    return this.age * n;
  };

  // Creating new Function by Binding a Function to Resource Data/Object etc.
  // You can pass as many parameters here
  // The ones left will be passable in the new function formed after binding
  const person_ageTimesN = ageTimesN.bind(person);

  console.log("FirstName: ", person.firstName);
  console.log("LastName: ", person["lastName"]);
  console.log("FullName: ", person.fullName());
  console.log("AgeGroup: ", person["ageGroup"]());
  console.log("GetAge: ", person.getAge());
  console.log("GetEyeColor: ", person.getEyeColor());

  console.log("DisplayEyeColor [Call]: ", displayEyeColor.call(person));
  console.log("Person2 FullName [Call]: ", person.fullName.call(person2));
  console.log("Sum [Call]: ", sum.call(null, 2, 3));
  console.log("AgeTimesN [Call]: ", ageTimesN.call(person, 2));

  console.log("DisplayEyeColor [Apply]: ", displayEyeColor.apply(person));
  console.log("Person2 FullName [Apply]: ", person.fullName.apply(person2));
  console.log("Sum [Apply]: ", sum.apply(null, [2, 3]));
  console.log("AgeTimesN [Apply]: ", ageTimesN.apply(person, [2]));

  console.log("AgeTimesN [Bind]: ", person_ageTimesN(3));

  // ===========================================

  // Functional Object
  function Shape(radius) {
    this.radius = radius;
  }
  function Circle(radius) {
    let that = Shape(radius);

    return that;
  }

  // Adding new Method -> Prototype
  Shape.prototype.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
  };

  const circle = new Circle(5);
  console.log("Circle Area: ", circle.getArea());
};

Launch();
