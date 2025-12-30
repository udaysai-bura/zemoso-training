function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Uday"));

const add = (a, b) => a + b;
console.log(add(3, 4));

function product(...nums) { 
  return nums.reduce((a, b) => a * b, 1);
}
console.log(product(1, 2, 3, 4));

function sayHi() {  
  console.log("HELLO UDAY");
}
function execute(fn) {
  fn();
}
execute(sayHi);

function counter() { 
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const inc = counter();
console.log("1 st time :"+inc()); 
console.log("2nd :"+inc()); 
