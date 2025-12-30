let username: string = "uday";
let age: number = 23;
let isLoggedIn: boolean = true;
console.log(username, age, isLoggedIn);

let skills: string[] = ["HTML", "CSS", "TypeScript"];
let scores: Array<number> = [90, 85, 88];
skills.push("JavaScript");
console.log(skills);
console.log(scores);

let user: [number, string] = [1, "uday"];
console.log(user[0]);
console.log(user[1]);

let data: any = "hello";
data = 10;
let x: unknown = "world";
if (typeof x === "string") {
  console.log(x.toUpperCase());
}


function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 10));
function logMessage(message: string): void {
  console.log(message);
}
logMessage("Hello TypeScript");


function greet(name: string, age?: number) {
  return age ? `${name} is ${age}` : name;
}
function power(a: number, b: number = 2) {
  return a ** b;
}
console.log(greet("uday"));
console.log(greet("uday", 23));
console.log(power(5));


let person: { name: string; age: number } = {
  name: "uday",
  age: 23
};
console.log(person);


interface User {
  id: number;
  name: string;
  isAdmin?: boolean;
}
const u1: User = {
  id: 1,
  name: "uday"
};
console.log(u1);

type ID = number | string;
let userId: ID;
userId = 101;
userId = "abc123";
console.log(userId);


function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
printValue("hello");
printValue(12.3456);

enum Role {
  ADMIN,
  USER,
  GUEST
}
let myRole: Role = Role.ADMIN;
console.log(myRole);

//classes and access modi
class Person {
  constructor(
    public name: string,
    private age: number
  ) {}

  getAge() {
    return this.age;
  }
}
const p = new Person("uday", 23);
console.log(p.name);
console.log(p.getAge());

//generics
function identity<T>(value: T): T {
  return value;
}
console.log(identity<string>("uday"));
console.log(identity<number>(100));


//generics arrays
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
console.log(getFirst([1, 2, 3]));
console.log(getFirst(["a", "b", "c"]));


interface User {
  id: number;
  name: string;
  age: number;
}


//utility types
// Partial
type UpdateUser = Partial<User>;
//Pick
type UserName = Pick<User, "name">;
// Omit
type UserWithoutAge = Omit<User, "age">;
const u2: UpdateUser = { name: "new name" };
const u3: UserName = { name: "uday" };
const u4: UserWithoutAge = { id: 1, name: "uday" };




