var username = "uday";
var age = 23;
var isLoggedIn = true;
console.log(username, age, isLoggedIn);
var skills = ["HTML", "CSS", "TypeScript"];
var scores = [90, 85, 88];
skills.push("JavaScript");
console.log(skills);
console.log(scores);
var user = [1, "uday"];
console.log(user[0]);
console.log(user[1]);
var data = "hello";
data = 10;
var x = "world";
if (typeof x === "string") {
    console.log(x.toUpperCase());
}
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
function logMessage(message) {
    console.log(message);
}
logMessage("Hello TypeScript");
function greet(name, age) {
    return age ? "".concat(name, " is ").concat(age) : name;
}
function power(a, b) {
    if (b === void 0) { b = 2; }
    return Math.pow(a, b);
}
console.log(greet("uday"));
console.log(greet("uday", 23));
console.log(power(5));
var person = {
    name: "uday",
    age: 23
};
console.log(person);
var u1 = {
    id: 1,
    name: "uday"
};
console.log(u1);
var userId;
userId = 101;
userId = "abc123";
console.log(userId);
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
printValue("hello");
printValue(12.3456);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var myRole = Role.ADMIN;
console.log(myRole);
//classes and access modi
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var p = new Person("uday", 23);
console.log(p.name);
console.log(p.getAge());
//generics
function identity(value) {
    return value;
}
console.log(identity("uday"));
console.log(identity(100));
//generics arrays
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst([1, 2, 3]));
console.log(getFirst(["a", "b", "c"]));
var u2 = { name: "new name" };
var u3 = { name: "uday" };
var u4 = { id: 1, name: "uday" };
