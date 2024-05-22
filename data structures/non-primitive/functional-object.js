/**
 * Non-Primitive Data Type/Structure
 * Name: Functional Object
 * Description: ...
 * Note:
 *  "this" keyword is only available with function(){} and not with ()=>{}
 *  Direct declarations are private and "this" declarations are public
 **/

function A(l = 0, w = 0) {
  // Private Properties
  let length = l;
  let width = w;

  // Encapsulation -> Public Setters
  this.setLength = function (l) {
    length = l;
  };
  this.setWidth = function (w) {
    width = w;
  };

  // Encapsulation -> Public Getters
  this.getLength = function () {
    return length;
  };
  this.getWidth = function () {
    return width;
  };

  // Public Methods
  this.Area = function () {
    return length * width;
  };

  this.Description = function () {
    return "I am a Parent Object";
  };
}

function B(l = 0, w = 0, h = 0) {
  // Inheritance
  let parent = new A(l, w);

  // Private Properties
  let height = h;

  // Encapsulation -> Public Setters
  parent.setHeight = function (h) {
    height = h;
  };

  // Encapsulation -> Public Getters
  parent.getHeight = function () {
    return height;
  };

  // Public Methods
  parent.Volume = function () {
    return parent.Area() * height;
  };

  // Overriding Parent's Public Method
  parent.Description = function () {
    return "I am a Child Object";
  };

  return parent;
}

function C() {}

function D(n, l = 0, w = 0, h = 0) {
  // Inheritance
  let parent = new B(l, w, h);

  // Public Properties
  this.name = n;
}

const A_Object = new A(3, 5);
const B_Object = new B(3, 5, 2);

console.log("A: ", A);
console.log("A_Object: ", A_Object);
console.log("A_Object [getLength]: ", A_Object.getLength());
console.log("A_Object [getWidth]: ", A_Object.getWidth());
console.log("A_Object [Area]: ", A_Object.Area());

A_Object.setLength(4);
A_Object.setWidth(7);
console.log("A_Object [getLength]: ", A_Object.getLength());
console.log("A_Object [getWidth]: ", A_Object.getWidth());
console.log("A_Object [Area]: ", A_Object.Area());
console.log("A_Object [Description]: ", A_Object.Description());

console.log("\nB: ", B);
console.log("B_Object: ", B_Object);
console.log("B_Object [getLength]: ", B_Object.getLength());
console.log("B_Object [getWidth]: ", B_Object.getWidth());
console.log("B_Object [getHeight]: ", B_Object.getHeight());
console.log("B_Object [Area]: ", B_Object.Area());
console.log("B_Object [Volume]: ", B_Object.Volume());

B_Object.setLength(2);
B_Object.setWidth(1);
B_Object.setWidth(8);
console.log("B_Object [getLength]: ", B_Object.getLength());
console.log("B_Object [getWidth]: ", B_Object.getWidth());
console.log("B_Object [getHeight]: ", B_Object.getHeight());
console.log("B_Object [Area]: ", B_Object.Area());
console.log("B_Object [Volume]: ", B_Object.Volume());
console.log("B_Object [Description]: ", B_Object.Description());

// function B(l = 0, w = 0, h = 0) {
//   let parent = A(l, w);
//   parent.height = h;
//   parent.Area = function () {
//     parent;
//   };
//   return parent;
// }

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
