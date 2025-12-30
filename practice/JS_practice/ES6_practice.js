let count = 10;
count = 20;
const pi = 3.14;
//pi = 3.15 // error

const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

let name = "Uday";  //template literals
let role = "Developer";
console.log(`I'am ${name}, and i am a ${role}`);

const skills = ["HTML", "CSS", "JS"];
const [a, b, c] = skills;  // array Destructuring
console.log(a, b, c);

const user = { name: "Uday", age: 23 };
const { name, age } = user;    //object destructuring
console.log(name, age);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // spread operator
console.log(arr2);

function sum(...nums) {
  return nums.reduce((a, b) => a + b);   // rest operator
}
console.log(sum(1, 2, 3, 4));

function greet(name = "Developer") {    //default parameter
  console.log(`Welcome ${name}`);
}
greet();
greet("Uday");

class Student {
  constructor(name) {
    this.name = name;
  }
  study() {
    console.log(`${this.name} is studying`);
  }
}
const s1 = new Student("Uday");
s1.study();

const nums = [10, 20, 30];
for (let n of nums) {
  console.log(n);
}

const map = new Map();
map.set("name", "Uday");
map.set("id", 13);
console.log(map.get("name"));

const set = new Set([1, 2, 2, 3, 4]);
set.add(1);
console.log(set);

