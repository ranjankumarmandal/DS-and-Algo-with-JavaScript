// Parameters Types

// Spread

// Example 1: To convert an array into its individual elements
const numbers = [55, 56, 89, 70, 12];
console.log(Math.max(...numbers)); 
//Math.max(55, 56, 89, 70, 12)

// Example 2: To copy elements of one array into another
const numbersCopy = [...numbers];
console.log(numbers);
console.log(numbersCopy);

//Example 3: To copy elements of one object into another
const employeeData = {
  John: 10000,
  Pete: 30000
};
const employeeDataCopy = {...employeeData}
console.log(employeeData);
// console.log(...employeeData); // TypeError: Found non-callable @@iterator
console.log(employeeDataCopy);

// Rest

function myFun(a, b, ...manyMoreArgs) {
 console.log("a", a);
 console.log("b", b);
 console.log("manyMoreArgs", manyMoreArgs);
}
myFun("one", "two", "three", "four", "five", "six");

function xyz(x, y, ...z) {
 console.log(x, " ", y); // hey hello
 console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
 console.log(z[0]); // wassup
 console.log(z.length); // 4
}
xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy");


// Destructuring

//Array Destructuring
const [a, b] = [10, 20]; //const a = 10; const b = 20;
console.log(a, b);

function func() {
  return [1, 2, 3];
}

const [a1, , c1] = func();
const [, b1,] = func();
console.log(a1,b1,c1);

// Object Destructuring
const obj = { a3: 50, b3: 60 };

const { a2, b2 } = obj; //unpacking obj properties
console.log(a2, b2);

const {a3,b3} = obj;
console.log(a3, b3);



// classical function vs arrow functions
//1
function getName(a, b=5){
  console.log(a,b);
}
getName(2);

getName1 = (a, b=5) => {
  console.log(a,b);
}
getName1(2);

getName2 = (a, b=5) => console.log(a,b);
getName2(2);

//2 
function getMessage(){ return "Hey normal functions";}
console.log(getMessage());

getMessage1 = () => {return "Hey I am a cool function";}
console.log(getMessage1());

getMessage2 = () => "Hey I am a cooler function now";
console.log(getMessage2());

getMessage3 = k => "Hey I am a cooler function now-"+k;
console.log(getMessage3(55));

getMessage4 = (k1,k2) => "Hey I am a cooler function now-"+k1+"-"+k2;
console.log(getMessage4(55,45));

getMessage5 = () =>  "Hey I am a cool function"; "Hi buddy";
console.log(getMessage5());


function getName3(a, b=5){
  console.log(arguments);
  console.log(arguments.length);
  console.log(typeof arguments);
  //console.log(this);
}
getName3(2);

// Arrow functions does not have their own this and arguments.
const getName4 = (a, b=5) => {
  //console.log(arguments);
  console.log(arguments.length);
  console.log(this);
}
getName4(2);

const arrowFunc = (...args) => {
  console.log(args);
};

arrowFunc(1, 2, 3, 4); //[ 1, 2, 3, 4 ]

// Arrow functions should not be used as methods and constructor function.

const test = {
 name: "test object",
 createClassicalFunction: function () {
   console.log(this.name);
   console.log(arguments);
 },
 createArrowFunction: () => {
   console.log(this.name);
   console.log(arguments);
 },
};

test.createClassicalFunction(); // works fine
test.createArrowFunction(); // error

// Why Arrow functions ?
const test1 = {
 name: "test1 object",
 createClassicalFunction: function () {
   console.log(this); // window // global object
 },
 createArrowFunction: () => {
   console.log(this); // test object
 },
};

const person = {
 name: "Aseem",
 hobbies: ["Coding", "Cricket", "Movies"],
 getHobbies: function () {
   this.hobbies.forEach(function (hobby) {
     console.log(`${this.name} likes ${hobby}`);
   });
 }
};

person.getHobbies();

// Arrow functions has lexical/parental scope.
const person1 = {
 name: "Aashu",
 hobbies: ["Programming", "badminton", "Travelling"],
 getHobbies: function () {
   this.hobbies.forEach((hobby) => {
     console.log(`${this.name} likes ${hobby}`);
   });
 },
};

person1.getHobbies();


// Advanced Higher Order Functions

const nums22 = [1, 2, 3, 4];
nums22.forEach(function(value) {
    console.log(value)
});
nums22.forEach((value) => console.log(value));
nums22.forEach((value, idx, arr) => console.log(value, idx, arr));

// find
const data = [
  { _id: "1", name: "Vivek" },
  { _id: "2", name: "Neha" },
  { _id: "3", name: "Satya" },
  { _id: "4", name: "Amit" },
];
const res = data.find(item => item._id === "3");
console.log(res);

const res1 = data.find(function(item){
  return item._id === "3";
});
console.log(res1);

//findIndex
const res2 = data.findIndex((item) => item._id === "2");
console.log(res2); //0

// every

data.every(record => console.log(record._id === "1"));
data.every(record => console.log(record._id !== "5"));

if (data.every(record => record._id !== undefined)) {
  console.log("Data is valid");
}

//some
data.some(value => console.log(value._id === "1"));
data.some(value => console.log(value._id !== "5")); 

const nums = [ 1, 2, 3, 4];
if(nums.some(value => value % 2 === 0)){
  console.log("Nums array has even numbers too!")
}