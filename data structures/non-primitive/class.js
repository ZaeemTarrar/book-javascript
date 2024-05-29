/**
 * 📕 Non-Primitive Data-Structure
 * Name: Class
 * Description: They are merely Templates for Creating Object
 * Note:
 *  Access-Modifiers: Public, Private
 *  Protected modifier is used just for the sake of it
 **/

class A {
  name = "Anonymous";
  #length = 0;
  #width = 0;

  static title = "Template";
  static #count = 0;
  static get count() {
    return A.#count;
  }
  static set count(count) {
    A.#count = count;
  }
  static #addCount = function () {
    A.count = A.count + 1;
  };
  static displayCount = function () {
    return `No. of Object: ${A.count}`;
  };

  constructor(name = "Anonymous", length = 0, width = 0) {
    this.name = name;
    this.length = length;
    this.width = width;
    A.#addCount();
  }

  set length(length) {
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

  set height(height) {
    this.#height = height;
  }

  get height() {
    return this.#height;
  }

  constructor(name, length = 0, width = 0, height = 0) {
    super(name, length, width);
    this.height = height;
  }

  volume() {
    return this.area() * this.height;
  }
}

class C extends B {
  volume() {
    return super.volume() + ` m^3`;
  }
}

class D {
  about() {
    return "Hello World Brother !";
  }
}

class E {
  constructor() {
    this.instanceOf_C = new C();
    this.instanceOf_D = new D();
  }

  C() {
    return this.instanceOf_C;
  }

  D() {
    return this.instanceOf_D;
  }
}

const F = class {
  content() {
    return "O my God !";
  }
};

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
console.log("A [DisplayCount]: ", A.displayCount());

console.log("\nB: ", B);
console.log("B [Title]: ", B.title);
console.log("B [Count]: ", B.count);

const B_Object = new B("Demo", 23, 45);
console.log("B_Object: ", B_Object);
console.log("B_Object [name]:", B_Object.name);
console.log("B_Object [getLength]:", B_Object.length);
console.log("B_Object [getWidth]:", B_Object.width);
console.log("B_Object [getHeight]:", B_Object.height);
console.log("B_Object [Area]:", B_Object.area());
console.log("B_Object [Volume]:", B_Object.volume());
console.log("B_Object [Display]:", B_Object.display());
console.log("B [Count]: ", B.count);
console.log("B [DisplayCount]: ", B.displayCount());

const C_Object = new C("Demo", 23, 45);
console.log("C_Object: ", C_Object);
console.log("C_Object [name]:", C_Object.name);
console.log("C_Object [getLength]:", C_Object.length);
console.log("C_Object [getWidth]:", C_Object.width);
console.log("C_Object [Area]:", C_Object.area());
console.log("C_Object [Volume]:", C_Object.volume());
console.log("C_Object [Display]:", C_Object.display());
console.log("C [Count]: ", C.count);
console.log("C [DisplayCount]: ", C.displayCount());

const E_Object = new E();
console.log("E_Object: ", E_Object);
console.log("E_Object [C]: ", E_Object.C);
console.log("E_Object [D]: ", E_Object.D);
console.log("E_Object [C][Area]: ", E_Object.C().area());
console.log("E_Object [D][About]: ", E_Object.D().about());

const F_Object = new F();
console.log("F_Object: ", F_Object);
console.log("F_Object [Content]: ", F_Object.content());
