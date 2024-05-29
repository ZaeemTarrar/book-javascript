/**
 * 📕 Non-Primitive Data-Structure
 * Name: Generator
 * Description: ...
 * Note:
 **/

/**
 * **Generator Function:** B
 * @returns {void}
 * @type {function}
 */
function* A() {
  yield 0;
  yield 1;
  yield 2;
}

/**
 * **Generator Function:** B
 * @param {number} num
 * @param {number} limit
 * @returns {void}
 * @type {function}
 */
function* B(num = 0, limit = 0) {
  for (let i = 0; i <= limit; i++) {
    let equation = num * i;
    let equRow = `${num} x ${i} = ${equation}`;
    yield equRow;
  }
}

/**
 * Display Generator Function and its Methods
 */
console.log("A: ", A);
console.log("A [TypeOf]: ", typeof A);
console.log("A: [Length]: ", A.length);
console.log("A: [...]: ", ...A());

/**
 * **Generator:** GenA
 * @type {object} By Generator
 */
const GenA = A();

/**
 * **Generator:** GenB1
 * @type {object} By Generator
 */
const GenB1 = B(2, 10);

/**
 * **Generator:** GenB2
 * @type {object} By Generator
 */
const GenB2 = B(5, 25);

/**
 * Display Generator "A" and its Methods
 */
console.log("GenA: ", GenA);
console.log("GenA [TypeOf]: ", typeof GenA);
console.log("GenA [1]: ", GenA.next());
console.log("GenA [2]: ", GenA.next());
console.log("GenA [3]: ", GenA.next());
console.log("GenA [4]: ", GenA.next());

/**
 * Looping through Generator "B1"
 */
for (let x of GenB1) {
  console.log(`GenB1: `, x);
}

/**
 * Looping through Generator "B2"
 * Description:
 *  Loop Break
 *  Generator Return/End
 */
let i = 0;
for (let x of GenB2) {
  console.log(`GenB1: `, x);
  if (i >= 15) {
    GenB2.return();
    break;
  }
  i++;
}
