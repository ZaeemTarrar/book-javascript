/**
 * 📕 Non-Primitive Data-Structure
 * Name: Class
 * Description: They are merely Templates for Creating Object
 * Note:
 *  Access-Modifiers: Public, Private
 *  Protected modifier is used just for the sake of it
 **/

/**
 * **Class:** A
 * @type {object}
 */
class A {
  /**
   * **Property:** name
   * @accessibility PUBLIC
   * @description Name
   * @type {string}
   */
  name = "Anonymous";

  /**
   * **Property:** length
   * @accessibility PRIVATE
   * @description Length
   * @type {number}
   */
  #length = 0;

  /**
   * **Property:** width
   * @accessibility PRIVATE
   * @description Width
   * @type {number}
   */
  #width = 0;

  /**
   * **Property:** title
   * @static
   * @accessibility PUBLIC
   * @description Title
   * @type {string}
   */
  static title = "Template";

  /**
   * **Property:** count
   * @static
   * @accessibility PRIVATE
   * @description Count
   * @type {number}
   */
  static #count = 0;

  /**
   * **Encapsulation:** count
   * @static
   * @accessibility PUBLIC
   * @capsule GETTER
   * @description Count
   * @returns {number}
   * @type {() => number}
   */
  static get count() {
    return A.#count;
  }

  /**
   * **Encapsulation:** count
   * @static
   * @accessibility PUBLIC
   * @capsule SETTER
   * @description Count
   * @param {number} count
   * @returns {void}
   * @type {function}
   */
  static set count(count) {
    A.#count = count;
  }

  /**
   * **Method:** addCount
   * @static
   * @accessibility PRIVATE
   * @description Adds 1 to the value of "count"
   * @returns {void}
   * @type {function}
   */
  static #addCount = function () {
    A.count = A.count + 1;
  };

  /**
   * **Method:** displayCount
   * @static
   * @accessibility PUBLIC
   * @description Count Info in string format
   * @returns {string}
   * @type {function}
   */
  static displayCount = function () {
    return `No. of Object: ${A.count}`;
  };

  /**
   * **Constructor**
   * @accessibility PUBLIC
   * @description name, length, width, count
   * @param {string} name
   * @param {number} length
   * @param {number} width
   * @returns {void}
   * @type {function}
   */
  constructor(name = "Anonymous", length = 0, width = 0) {
    this.name = name;
    this.length = length;
    this.width = width;
    A.#addCount();
  }

  /**
   * **Encapsulation:** length
   * @accessibility PUBLIC
   * @capsule SETTER
   * @description Length
   * @returns {void}
   * @type {function}
   */
  set length(length) {
    this.#length = length;
  }

  /**
   * **Encapsulation:** width
   * @accessibility PUBLIC
   * @capsule SETTER
   * @description Width
   * @returns {void}
   * @type {function}
   */
  set width(width) {
    this.#width = width;
  }

  /**
   * **Encapsulation:** length
   * @accessibility PUBLIC
   * @capsule GETTER
   * @description Length
   * @returns {number}
   * @type {function}
   */
  get length() {
    return this.#length;
  }

  /**
   * **Encapsulation:** width
   * @accessibility PUBLIC
   * @capsule GETTER
   * @description Width
   * @returns {number}
   * @type {function}
   */
  get width() {
    return this.#width;
  }

  /**
   * **Method:** area
   * @accessibility PUBLIC
   * @description Calculates area
   * @returns {number} Area calculated
   * @type {function}
   * @example
   *    let A_Obj = new A(2,3);
   *    let a:number = A_Obj.area();
   */
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
