function B() {
  let color = "red";
}

function A(n = "") {
  let parent = { ...new B(), ...this };
  let name = n;
  parent.setName = function (n) {
    name = n;
  };
  parent.getName = function () {
    return name;
  };
  return parent;
}

A.prototype.About = function () {
  return `Hello ${this.getName()}!`;
};

let A_Object = new A("Zaeem");

console.log("A: ", A);
console.log("A_Object: ", A_Object);
console.log("A_Object [name]: ", A_Object.getName());
console.log("A_Object [About]: ", A_Object.About());
