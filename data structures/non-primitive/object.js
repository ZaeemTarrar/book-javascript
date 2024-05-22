/**
 * Non-Primitive Data Type/Structure
 * Name: Object
 * Description: ...
 * Note: "this" keyword is only available with function(){} and not with ()=>{}
 **/

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
