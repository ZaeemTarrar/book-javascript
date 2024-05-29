/**
 * 📕 Non-Primitive Data-Structure
 * Name: Function
 * Description: Divides particular tasks or work
 * Note:
 **/

/**
 * **Function:** A
 * @returns {void}
 * @type {function}
 */
function A() {
  console.log("Hello World");
}

/**
 * **Function:** A
 * @param {string} name
 * @returns {string}
 * @type {function}
 */
function B(name = "") {
  return `My name is ${name}`;
}

/**
 * **Function:** sum
 * @param {number} x - Number 1
 * @param {number} y - Number 2
 * @returns {number} Sum of 2 numbers
 * @type {function}
 */
const sum = (x = 0, y = 0) => {
  return x + y;
};

/**
 * **Function:** diff
 * @param {number} x - Number 1
 * @param {number} y - Number 2
 * @returns {number} Difference to 2 numbers in order
 * @type {function}
 */
const diff = (x = 0, y = 0) => x - y;

/**
 * **Function:** percentage
 * @param {number} score - Your Score
 * @param {number} total - Total Score
 * @returns {number} Converts your score into Percentage format
 * @type {function}
 */
function percentage(score = 0, total = 0) {
  let result = ((score / total) * 100.0).toFixed(2);
  return result;
}

/**
 * **Function:** completeTaskAndNotify
 * @param {function} callback - A Function to be Called
 * @returns {void}
 * @type {function}
 */
function completeTaskAndNotify(callback = null) {
  console.log("Task Completed");
  callback();
}

/**
 * Calling the Functions Above
 */
A();
console.log("B: ", B("Zaeem"));
console.log("Sum: ", sum(3, 4));
console.log("Percentage: ", percentage(4, 10));

/**
 * Calling Functions with Callbacks
 */
completeTaskAndNotify(() => {
  console.log("Callback Called");
});
completeTaskAndNotify(function () {
  console.log("Callback Called");
});
