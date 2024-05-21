/**
 * Non-Primitive Data Type/Structure
 * Name: Object
 * Description:
 *  Object
 *  Literal
 *  Functional
 * Note: "this" keyword is only available with function(){} and not with ()=>{}
 **/

// <===== Object (constructor) =====>

const A = new Object();
A.length = 3;
A.width = 4;
A.set = function (l, w) {
  this.length = l;
  this.width = w;
};
A.Area = function () {
  return this.length * this.width;
};

console.log("A: ", A);
console.log("A [String]: ", A.toString());
console.log("A [ValueOf]: ", A.valueOf());
console.log("A -> length: ", A.length);
console.log("A -> width: ", A.width);
console.log("A has length: ", A.hasOwnProperty("length"));
console.log("A -> Area: ", A.Area());
console.log("A [Entries]: ", Object.entries(A));
console.log("A [Keys]: ", Object.keys(A));
console.log("A [Values]: ", Object.values(A));
console.log("A [Property]: ", Object.getOwnPropertyNames(A));

function Volume() {
  return this.length * this.width * this.height;
}

function Magnify(times) {
  this.length *= times;
  this.width *= times;
  this.height *= times;
  return this;
}

function MagnifyEach(t1, t2, t3) {
  this.length *= t1;
  this.width *= t2;
  this.height *= t3;
  return this;
}

// Add New Property
A.height = 12;

// Call
console.log("\n[CALL]");
console.log("A => [Volume]: ", Volume.call(A));
console.log("A => [Magnify]: ", Magnify.call(A, 3));
console.log("A => [MagnifyEach]: ", MagnifyEach.call(A, 3, 4, 2));

// Apply
console.log("\n[APPLY]");
console.log("A => [Volume]: ", Volume.apply(A));
console.log("A => [Magnify]: ", Magnify.apply(A, [3]));
console.log("A => [MagnifyEach]: ", MagnifyEach.apply(A, [3, 4, 2]));

// Bind
const A_Volume = Volume.bind(A);
const A_Magnify = Magnify.bind(A);
const A_MagnifyEach = Magnify.bind(A, 2, 3);
console.log("\n[BIND]");
console.log("A_Volume: ", A_Volume());
console.log("A_Magnify: ", A_Magnify(2));
console.log("A_MagnifyEach: ", A_MagnifyEach(1));

// Preventing New Property Addons
Object.preventExtensions(A);
console.log("\nA [isExtensible]: ", Object.isExtensible(A));
A.breadth = 23;
console.log("A [InExtensible]: ", A);

// Preventing Property Addons or Removals
Object.seal(A);
console.log("A [isSeal]: ", Object.isSealed(A));
A.breadth = 23;
delete A.height;
console.log("A [Sealed]: ", A);

// Prevent from any Changes
Object.freeze(A);
A.set(32, 43);
console.log("A [Freezed]: ", A);

// <===== Literal Object =====>

const B = {
  length: 3,
  width: 4,
  set: function (l, w) {
    this.length = l;
    this.width = w;
  },
  Area: function () {
    return this.length * this.width;
  },
};

console.log("B: ", B);
console.log("B [String]: ", B.toString());
console.log("B [ValueOf]: ", B.valueOf());
console.log("B -> length: ", B.length);
console.log("B -> width: ", B.width);
console.log("B has length: ", B.hasOwnProperty("length"));
console.log("B -> Area: ", B.Area());
console.log("B [Entries]: ", Object.entries(B));
console.log("B [Keys]: ", Object.keys(B));
console.log("B [Values]: ", Object.values(B));
console.log("B [Property]: ", Object.getOwnPropertyNames(B));

// Add New Property
B.height = 12;

// Call
console.log("\n[CALL]");
console.log("B => [Volume]: ", Volume.call(B));
console.log("B => [Magnify]: ", Magnify.call(B, 3));
console.log("B => [MagnifyEach]: ", MagnifyEach.call(B, 3, 4, 2));

// Apply
console.log("\n[APPLY]");
console.log("B => [Volume]: ", Volume.apply(B));
console.log("B => [Magnify]: ", Magnify.apply(B, [3]));
console.log("B => [MagnifyEach]: ", MagnifyEach.apply(B, [3, 4, 2]));

// Bind
const B_Volume = Volume.bind(B);
const B_Magnify = Magnify.bind(B);
const B_MagnifyEach = Magnify.bind(B, 2, 3);
console.log("\n[BIND]");
console.log("B_Volume: ", B_Volume());
console.log("B_Magnify: ", B_Magnify(2));
console.log("B_MagnifyEach: ", B_MagnifyEach(1));

// Preventing New Property Addons
Object.preventExtensions(B);
console.log("\nB [isExtensible]: ", Object.isExtensible(B));
A.breadth = 23;
console.log("B [InExtensible]: ", B);

// Preventing Property Addons or Removals
Object.seal(B);
console.log("B [isSeal]: ", Object.isSealed(B));
B.breadth = 23;
delete B.height;
console.log("B [Sealed]: ", B);

// Prevent from any Changes
Object.freeze(B);
B.set(32, 43);
console.log("B [Freezed]: ", B);

// ============

// // Literal Object
// const person = {
//   id: 432,
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   // Method -> function
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   // Method -> ()
//   ageGroup: () => {
//     // this is Undefined
//     return person.age >= 18 ? "young" : "adult";
//   },
// };

// // Literal Object
// const person2 = {
//   id: 848,
//   firstName: "Jimmy",
//   lastName: "Waffle",
//   age: 36,
// };

// // Adding a new Method -> function
// person.getAge = function () {
//   return this.age;
// };

// // Adding a New method -> ()
// person.getEyeColor = () => {
//   return person.eyeColor;
// };

// // new Function -> ()
// function displayEyeColor() {
//   return this.eyeColor;
// }

// // new Function -> ()
// const sum = (a, b) => {
//   return a + b;
// };

// // new Function -> function
// const ageTimesN = function (n) {
//   return this.age * n;
// };

// // Creating new Function by Binding a Function to Resource Data/Object etc.
// // You can pass as many parameters here
// // The ones left will be passable in the new function formed after binding
// const person_ageTimesN = ageTimesN.bind(person);

// console.log("FirstName: ", person.firstName);
// console.log("LastName: ", person["lastName"]);
// console.log("FullName: ", person.fullName());
// console.log("AgeGroup: ", person["ageGroup"]());
// console.log("GetAge: ", person.getAge());
// console.log("GetEyeColor: ", person.getEyeColor());

// console.log("DisplayEyeColor [Call]: ", displayEyeColor.call(person));
// console.log("Person2 FullName [Call]: ", person.fullName.call(person2));
// console.log("Sum [Call]: ", sum.call(null, 2, 3));
// console.log("AgeTimesN [Call]: ", ageTimesN.call(person, 2));

// console.log("DisplayEyeColor [Apply]: ", displayEyeColor.apply(person));
// console.log("Person2 FullName [Apply]: ", person.fullName.apply(person2));
// console.log("Sum [Apply]: ", sum.apply(null, [2, 3]));
// console.log("AgeTimesN [Apply]: ", ageTimesN.apply(person, [2]));

// console.log("AgeTimesN [Bind]: ", person_ageTimesN(3));

// // ===========================================

// // Functional Object
// function Shape(radius) {
//   this.radius = radius;
// }
// function Circle(radius) {
//   let that = Shape(radius);

//   return that;
// }

// // Adding new Method -> Prototype
// Shape.prototype.getArea = function () {
//   return Math.PI * Math.pow(this.radius, 2);
// };

// const circle = new Circle(5);
// console.log("Circle Area: ", circle.getArea());
