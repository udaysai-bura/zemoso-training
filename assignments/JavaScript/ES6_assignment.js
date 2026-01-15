const printName=(name)=>"Hi "+name;
console.log(printName("uday"));
const printBill = (name, bill) => {
return `Hi ${name}, please pay:${bill}`;
}
console.log(printBill("uday",750));
const person = {
    name: "Noam Chomsky",
    age: 92
}
const {name,age}=person;
console.log(name);
console.log(age);