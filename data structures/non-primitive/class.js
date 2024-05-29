/**
 * 📕 Non-Primitive Data-Structure
 * Name: Class
 * Description: They are merely Templates for Creating Object
 * Note:
 *  Access-Modifiers: Public, Private
 *  Protected modifier is used just for the sake of it
 **/

class X {
  #a = 0;
  get a() {
    return this.#a;
  }
  set a(v) {
    this.#a = v;
  }
  _b = 1;
  get b() {
    return this._b;
  }
  set b(v) {
    this._b = v;
  }
  c = 2;
}
const X_Object = new X();
console.log("\nX_Object: ", X_Object);
X_Object.a = 7;
console.log("X_Object [a]: ", X_Object.a);
X_Object.b = 8;
console.log("X_Object [b]: ", X_Object.b);
X_Object.c = 11;
console.log("X_Object [c]: ", X_Object.c);

class A {
  name = "Anonymous";
  #length = 0;
  #width = 0;

  static title = "Template";
  static _count = 0;
  static get count() {
    return this._count;
  }
  static set count(count) {
    this._count = count;
  }
  static #addCount = function () {
    this.count += 1;
  };

  constructor(name = "Anonymous", length = 0, width = 0) {
    this.name = name;
    this.#length = length;
    this.#width = width;
    A.#addCount();
  }

  set setLength(length) {
    this.#length = length;
  }

  set width(width) {
    this.#width = width;
  }

  get length() {
    return this.#length;
  }

  get width() {
    return this.#width;
  }

  area() {
    return this.length * this.width;
  }

  display() {
    return `Hello World !`;
  }
}

class B extends A {
  #height = 0;

  constructor(length, width, height) {
    super(length, width);
    this.#height = height;
  }
}

class C extends B {}

class D extends A {}

console.log("\nA: ", A);
console.log("A [Title]: ", A.title);
console.log("A [Count]: ", A.count);

const A_Object = new A("Demo", 23, 45);

console.log("A_Object: ", A_Object);
console.log("A_Object [name]:", A_Object.name);
console.log("A_Object [getLength]:", A_Object.length);
console.log("A_Object [getWidth]:", A_Object.width);
console.log("A_Object [Area]:", A_Object.area());
console.log("A_Object [Display]:", A_Object.display());
console.log("A [Count]: ", A.count);

console.log("\nB: ", B);
console.log("B [Title]: ", B.title);
console.log("B [Count]: ", B.count);
