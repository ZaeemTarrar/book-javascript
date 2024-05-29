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

  /**
   * **Method:** display
   * @accessibility PUBLIC
   * @description Displays random sentence
   * @returns {string}
   * @type {function}
   */
  display() {
    return `Hello World !`;
  }
}

/**
 * **Class:** B
 * **Parent:** A
 */
class B extends A {
  /**
   * **Property:** height
   * @accessibility PRIVATE
   * @description Height
   * @type {number}
   */
  #height = 0;

  /**
   * **Encapsulation:** height
   * @accessibility PUBLIC
   * @capsule SETTER
   * @description Height
   * @returns {void}
   * @type {function}
   */
  set height(height) {
    this.#height = height;
  }

  /**
   * **Encapsulation:** height
   * @accessibility PUBLIC
   * @capsule GETTER
   * @description Height
   * @returns {number}
   * @type {function}
   */
  get height() {
    return this.#height;
  }

  /**
   * **Constructor**
   * @accessibility PUBLIC
   * @description name, length, width, height, count
   * @param {string} name
   * @param {number} length
   * @param {number} width
   * @param {number} height
   * @returns {void}
   */
  constructor(name, length = 0, width = 0, height = 0) {
    super(name, length, width);
    this.height = height;
  }

  /**
   * **Method:** volume
   * @accessibility PUBLIC
   * @description Calculates Volume
   * @returns {number} Volume calculated
   */
  volume() {
    return this.area() * this.height;
  }
}

/**
 * **Class:** C
 * **Parent:** B
 */
class C extends B {
  /**
   * **Method:** volume
   * @override
   * @accessibility PUBLIC
   * @description Calculates Volume
   * @returns {number} Volume calculated
   */
  volume() {
    return super.volume() + ` m^3`;
  }
}

/**
 * **Class:** D
 */
class D {
  /**
   * **Method:** about
   * @accessibility PUBLIC
   * @description Displays a sentence
   * @returns {string}
   */
  about() {
    return "Hello World Brother !";
  }
}

/**
 * **Class:** E
 */
class E {
  /**
   * **Constructor**
   * @accessibility PUBLIC
   * @description ...
   * @returns {void}
   */
  constructor() {
    this.instanceOf_C = new C();
    this.instanceOf_D = new D();
  }

  /**
   * **Method:** C
   * @accessibility PUBLIC
   * @description A Bridge to Object of Class C
   * @returns {C} Object of Class/Type C
   */
  C() {
    return this.instanceOf_C;
  }

  /**
   * **Method:** D
   * @accessibility PUBLIC
   * @description A Bridge to Object of Class D
   * @returns {D} Object of Class/Type D
   */
  D() {
    return this.instanceOf_D;
  }
}

/**
 * **Class:** F
 */
const F = class {
  /**
   * **Method:** content
   * @accessibility PUBLIC
   * @description Returns a Sentence
   * @returns {string}
   */
  content() {
    return "O my God !";
  }
};

/**
 * Display Class "A" and its Methods
 */
console.log("\nA: ", A);
console.log("A [Title]: ", A.title);
console.log("A [Count]: ", A.count);

/**
 * Displaying Class "A" Object and its Methods
 */
const A_Object = new A("Demo", 23, 45);
console.log("A_Object: ", A_Object);
console.log("A_Object [name]:", A_Object.name);
console.log("A_Object [getLength]:", A_Object.length);
console.log("A_Object [getWidth]:", A_Object.width);
console.log("A_Object [Area]:", A_Object.area());
console.log("A_Object [Display]:", A_Object.display());
console.log("A [Count]: ", A.count);
console.log("A [DisplayCount]: ", A.displayCount());

/**
 * Display Class "B" and its Methods
 */
console.log("\nB: ", B);
console.log("B [Title]: ", B.title);
console.log("B [Count]: ", B.count);

/**
 * Displaying Class "B" Object and its Methods
 */
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

/**
 * Displaying Class "C" Object and its Methods
 */
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

/**
 * Displaying Class "E" Object and its Methods
 */
const E_Object = new E();
console.log("E_Object: ", E_Object);
console.log("E_Object [C]: ", E_Object.C);
console.log("E_Object [D]: ", E_Object.D);
console.log("E_Object [C][Area]: ", E_Object.C().area());
console.log("E_Object [D][About]: ", E_Object.D().about());

/**
 * Displaying Class "F" Object and its Methods
 */
const F_Object = new F();
console.log("F_Object: ", F_Object);
console.log("F_Object [Content]: ", F_Object.content());
