/**
 * 📕 Non-Primitive Data-Structure
 * Name: Functional Object
 * Description: ...
 * Note:
 *  "this" keyword is only available with function(){} & not with ()=>{}
 *  Direct declarations are private and "this" declarations are public
 *  Diamond Problem:
 *    InCase of two parents of a class, Latest Parent has precedence
 **/

/**
 * Functional Object: A
 * @param {number} l - Length
 * @param {number} w - Width
 * @return {object} Object / Object Constructor
 */
function A(l = 0, w = 0) {
  /**
   * Private Variable Property
   * @type {number}
   */
  let length = l;

  /**
   * Private Variable Property
   * @type {number}
   */
  let width = w;

  /**
   * Encapsulation - Public Setters
   * @description Sets the Length
   * @param {number} l - Length
   */
  this.setLength = function (l) {
    length = l;
  };

  /**
   * Encapsulation - Public Setter
   * @description Sets the Length
   * @param {number} l - Length
   */
  this.setWidth = function (w) {
    width = w;
  };

  /**
   * Encapsulation - Public Getter
   * @description Gets the Length
   * @returns {number} Returns Length
   */
  this.getLength = function () {
    return length;
  };

  /**
   * Encapsulation -  Public Getter
   * @description Gets the Width
   * @returns {number} Returns Width
   */
  this.getWidth = function () {
    return width;
  };

  /**
   * Public Method - Calculates Area
   * @returns {number} Returns Area calculated
   */
  this.Area = function () {
    return length * width;
  };

  /**
   * Public Method
   * @returns {string} Returns the description
   */
  this.Description = function () {
    return "I am a Parent Object";
  };
}

/**
 * Adding Prototype of a New Method
 * @description Returns random sentence
 * @returns {string}
 */
A.prototype.Info = function () {
  return "Some Random Info ... ";
};

/**
 * Functional Object: B
 * @param {number} l
 * @param {number} w
 * @param {number} h
 * @returns {object} Object / Object Constructor
 */
function B(l = 0, w = 0, h = 0) {
  /**
   * Inheritance - Multi-Level (First-Level)
   * @type {A} - Custom object type
   */
  let parent = new A(l, w);

  /**
   * Private Variable Property
   * @type {number} - Height
   */
  let height = h;

  /**
   * Encapsulation -  Public Setter
   * @description Sets the Height
   * @param {number} h - Height
   * @returns {void}
   */
  parent.setHeight = function (h) {
    height = h;
  };

  /**
   * Encapsulation -  Public Getter
   * @description Gets the Height
   * @returns {number} - Returns Height
   */
  parent.getHeight = function () {
    return height;
  };

  /**
   * Public Method: Volume
   * @returns {number} Volume calculated
   */
  parent.Volume = function () {
    return parent.Area() * height;
  };

  /**
   * Public Method: Volume
   * @description Returns a Sentence
   * @override
   * @returns {string} Returns Sentence
   */
  parent.Description = function () {
    return "I am a Child Object";
  };

  /**
   * Returns Parent object that was Inherited and Expanded
   */
  return parent;
}

/**
 * Functional Object: C
 * @param {string} c - Color
 * @returns {object} Object / Object Constructor
 */
function C(c) {
  /**
   * Private Variable Property
   * @type {string} Color
   */
  let color = c;

  /**
   * Encapsulation -  Public Setter
   * @description Sets the Color
   * @param {string} c - Color
   * @returns {void}
   */
  this.setColor = function (c) {
    color = c;
  };

  /**
   * Encapsulation -  Public Getter
   * @description Gets the Color
   * @returns {string} - Color
   */
  this.getColor = function () {
    return color;
  };

  /**
   * Public Method
   * @returns {string} - About Information
   */
  this.About = function () {
    return `The Color of the Shape is ${color}.`;
  };
}

/**
 * Adding Prototype of a New Method
 * @description Returns some content data.
 * @returns {string} - Some content data
 */
C.prototype.Content = function () {
  return "Some Content";
};

/**
 * Functional Object: E
 * @param {number} c - No. of Corners
 * @returns {object} - Object / Object Constructor
 */
function E(c = 0) {
  /**
   * Private Variable Property
   * @type {number} Corner
   */
  let corners = c;

  /**
   * Encapsulation -  Public Setter
   * @description Sets the Corner
   * @param {number} c - Corner
   * @returns {void}
   */
  this.setCorners = function (c) {
    corners = c;
  };

  /**
   * Encapsulation -  Public Getter
   * @description Gets the Corner
   * @returns {number} - Corner
   */
  this.getCorners = function () {
    return corners;
  };

  /**
   * Public Method
   * @description Gives the type of shape using no. of corners
   * @returns {string} Shape Name
   */
  this.Type = function () {
    /**
     * Shape selection based on no. of corners
     */
    switch (corners) {
      case 0:
        return "Circle";
      case 3:
        return "Triangle";
      case 4:
        return "Square";
      case 8:
        return "Cube";
      default:
        return "Unknown";
    }
  };
}

/**
 * Functional Object: D
 * @param {number} s - Size
 * @param {string} col - Color
 * @param {number} cor - Corner
 * @returns {object} Object / Object Constructor
 */
function D(s = 0, col = "Black", cor = 0) {
  /**
   * Inheritance: Multi-Level (Second-Level)
   * @access-modifier PROTECTED
   * @description Not supposed to be Inherited further
   * @type {B}
   */
  let protectedParent = new B(s, s, s); // Cube Concept

  /**
   * Inheritance: Multiple (2 Implementations)
   * @access-modifier PUBLIC
   * @description Not supposed to be Inherited further
   * @type {B}
   */
  let publicParents = { ...new E(cor), ...new C(col) };

  /**
   * Encapsulation - Setter
   * @accessibility - PUBLIC
   * @description Sets the Size
   * @returns {void}
   */
  publicParents.setSize = function (s) {
    protectedParent.setLength(s);
    protectedParent.setWidth(s);
    protectedParent.setHeight(s);
  };

  /**
   * Encapsulation - Getter
   * @accessibility - PUBLIC
   * @description Gets the Size
   * @returns {number} Size
   */
  publicParents.getSize = function () {
    return protectedParent.getLength();
  };

  /**
   * Variable Property: name
   * @accessibility - PUBLIC
   * @type {string} Name
   */
  publicParents.name = "Cube";

  /**
   * **Method:** "Parameter"
   * @accessibility PUBLIC
   * @description Calculates the Parameter
   * @returns {number} Parameter
   * @type {function}
   */
  publicParents.Parameter = function () {
    return protectedParent.getLength() * 4;
  };

  /**
   * Returning extended parent object / merged objects
   */
  return publicParents;
}

/**
 * @type {A}
 */
const A_Object = new A(3, 5);

/**
 * @type {B}
 */
const B_Object = new B(3, 5, 2);

/**
 * @type {D}
 */
const D_Object = new D(6, "Red", 8);

/**
 * Displaying Functional Object "A" along with its methods
 */
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
console.log("A_Object [Info]: ", A_Object.Info());

/**
 * Displaying Functional Object "B" along with its methods
 */
console.log("\nB: ", B);
console.log("B_Object: ", B_Object);
console.log("B_Object [getLength]: ", B_Object.getLength());
console.log("B_Object [getWidth]: ", B_Object.getWidth());
console.log("B_Object [getHeight]: ", B_Object.getHeight());
console.log("B_Object [Area]: ", B_Object.Area());
console.log("B_Object [Volume]: ", B_Object.Volume());
console.log("B_Object [Info]: ", B_Object.Info());
B_Object.setLength(2);
B_Object.setWidth(1);
B_Object.setWidth(8);
console.log("B_Object [getLength]: ", B_Object.getLength());
console.log("B_Object [getWidth]: ", B_Object.getWidth());
console.log("B_Object [getHeight]: ", B_Object.getHeight());
console.log("B_Object [Area]: ", B_Object.Area());
console.log("B_Object [Volume]: ", B_Object.Volume());
console.log("B_Object [Description]: ", B_Object.Description());

/**
 * Displaying Functional Object "D" along with its methods
 */
console.log("\nD: ", D);
console.log("D_Object: ", D_Object);
console.log("D_Object: ", D_Object.name);
console.log("D_Object [Parameter]: ", D_Object.Parameter());
console.log("D_Object [About]: ", D_Object.About());
console.log("D_Object [Type]: ", D_Object.Type());
D_Object.setSize(8);
D_Object.setColor("Purple");
D_Object.setCorners(4);
console.log("D_Object [Parameter]: ", D_Object.Parameter());
console.log("D_Object [About]: ", D_Object.About());
console.log("D_Object [Type]: ", D_Object.Type());
console.log("D_Object [Content]: ", D_Object.Content());
