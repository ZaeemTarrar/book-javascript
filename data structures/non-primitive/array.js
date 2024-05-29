/**
 * 📕 Non-Primitive Data-Structure
 * Name: Array
 * Description: ...
 * Note:
 **/

/**
 * @type {array<number>}
 */
const A = [1, 2, 3, 4];

/**
 * @type {array<string>}
 */
const B = ["Apples", "Mangoes", "Grapes", "Bananas"];

/**
 * @type {array<boolean>}
 */
const C = [false, true, true];

/**
 * @type {array<object>}
 */
const D = [
  { name: "Zaeem", isMale: true },
  { name: "Shahab", isMale: false },
];

/**
 * **Functional Object:** Ball
 * @param {number} x
 * @param {number} y
 * @returns {object} Object / Object Constructor
 */
function Ball(x, y) {
  this.X = x;
  this.Y = y;
}

/**
 * @type {array<Ball>}
 */
const E = [new Ball(2, 4), new Ball(5, 3), new Ball(7, 4)];

/**
 * @type {array<array<number>>}
 */
const F = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

/**
 * Looping through Object Array
 */
for (let a of E) {
  console.log(`X: ${a.X}, Y: ${a.Y}`);
}

/**
 * Looping through Literal-Object Array
 */
for (let person of E) {
  console.log(`Name: ${person.name}, Male: ${person.isMale}`);
}

/**
 * Looping through Nested Arrays
 */
for (let i = 0; i < F.length; i++) {
  for (let j = 0; j < F[i].length; j++) {
    console.log(`F [${i}][${j}]: `, F[i][j]);
  }
  console.log();
}
