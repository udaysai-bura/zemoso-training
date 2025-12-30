let name="uday"
let num=45;
let score;
let value=null;
let workdone=true;
const pi=3.14;
console.log(name+" "+num+" "+score+" "+value+" "+workdone+" "+pi);
console.log(`${name} ${num} ${score} ${value} ${workdone} ${pi}`);
console.log(5=="5");
console.log(5==="5");
let a=1;
let b=3
console.log(1/3);
console.log(Math.floor(1/3));
console.log(Math.sqrt(90));
if(a<b)
{
    console.log("a is smaller");
}
else{
    console.log("b is smaller");
}
for(let i=0;i<=5;i++)
{
    console.log(i);
}
let skills = ["HTML", "CSS", "JS"];
console.log(skills[0]); 
skills.push("React");
for(let i=0;i<skills.length;i++)
{
    console.log(skills[i]);
}
for (let skill of skills) {
  console.log(skill);
}
console.log(a<b);
console.log(a==b);
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
let user = {
  name: "Uday",
  age: 23,
  role: "Developer"
};

console.log(user.name);
console.log(user["age"]);
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Uday"));

