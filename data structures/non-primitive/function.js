/**
 * 📕 Non-Primitive Data-Structure
 * Name: Function
 * Description: Divides particular tasks or work
 * Note:
 **/

function A() {
  console.log("Hello World");
}

function B(name = "") {
  return `My name is ${name}`;
}

const sum = (x = 0, y = 0) => {
  return x + y;
};

const diff = (x = 0, y = 0) => x - y;

function percentage(score = 0, total = 0) {
  let result = ((score / total) * 100.0).toFixed(2);
  return result;
}

function completeTaskAndNotify(callback = null) {
  console.log("Task Completed");
  callback();
}

A();
console.log(B("Zaeem"));
console.log(sum(3, 4));
console.log(percentage(4, 10));
completeTaskAndNotify(() => {
  console.log("Callback Called");
});
completeTaskAndNotify(function () {
  console.log("Callback Called");
});
