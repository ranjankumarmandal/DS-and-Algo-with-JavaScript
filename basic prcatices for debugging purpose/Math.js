// Maths and special numbers

let scale = 0;
let a = 1 / scale; // Infinity
let b = 0 / scale; // NaN
let c = -a; // -Infinity
let d = 1 / c; // -0


typeof 5
"number"
typeof "kapil"
"string"
typeof 5.5
"number"
typeof 5.58789475745745
"number"


// Number
Number.EPSILON
2.220446049250313e-16
Number.MAX_VALUE
1.7976931348623157e+308
Number.MIN_VALUE
5e-324
Number.MIN_SAFE_INTEGER
-9007199254740991
Number.isFinite(5)
true
Number.isFinite(Infinity)
false

// Math
Math.PI
3.141592653589793
Math.round(5.5)
6
Math.round(5.4)
5
Math.ceil(5.4);
6
Math.floor(5.4);
5
Math.abs(-55)
55
Math.sqrt(8);
2.8284271247461903
Math.sqrt(9);
3
Math.max([3,4,5]);
NaN
Math.max(...[3,4,5]);
5
Math.min(...[3,4,5]);
3
Math.random();
0.5101112150958536

Math.sign(1);
1
Math.sign(-11);
-1
Math.sign(-55);
-1
Math.sign(55);
1

0/0
NaN

typeof NaN
"number"
isNaN("criodo")
true
isNaN(5)
false

// convert 

parseInt("5");
5
parseInt("5", 10);
5
parseInt("5", 2);
NaN
parseInt("5", 8);


// converting numbers to strings
let num = 5;
undefined
num.toString();
"5"
num.toString(10);
"5"
num.toString(2);
"101"
num = 8;
8
num.toString(2);
"1000"
num.toString(8);
"10"
num.toString(2);
"1000"
num.toString(16);
"8"
num = 17;
17
num.toString(16);

// random

const arr = [5,6,7,8];
arr[Math.floor(Math.random() * 4)];
7
arr[Math.floor(Math.random() * 4)];
8
arr[Math.floor(Math.random() * 4)];
5
arr[Math.floor(Math.random() * 4)];
8
arr[Math.floor(Math.random() * 4)];
7

// sorting 

arr
(5) [5, 6, 7, 8, 5]
arr.sort();
(5) [5, 5, 6, 7, 8]
const arr1 = ["a", "c", "x"];
undefined
arr1.sort();
(3) ["a", "c", "x"]
const arr2 = ["z", "a", "c", "x"];
undefined
arr2.sort();
(4) ["a", "c", "x", "z"]

// searching

const arr = [5,6,7,8];
undefined
arr.includes(5)
true
arr.includes(55)
false
arr.includes(8)
true
arr.indexOf(5);
0
arr.indexOf(8)
3
arr.push(5);
5
arr
(5) [5, 6, 7, 8, 5]
arr.includes(5)
true
arr.indexOf(5);
0