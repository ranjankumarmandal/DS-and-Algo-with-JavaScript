// High Order Functions - Map, Filter, Reduce


// Map: To modify existing collection of data
// not modifying the actual array

const arr = [1,2,3,4,5];
console.log(arr);
const arr1 = arr.map(function(item){return item*5});
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(arr1); // [ 5, 10, 15, 20, 25 ]
arr.map(item => item*5);
arr.map(function(item, index, arry){return index*5});

console.log(`Filter time`); 

// Filter: To filter out based on given condition from collection of data
// not modifying the actual array

const arr2 = [1,2,3,4,5];
const arr3 = arr2.filter(function(item){
   if(item > 3){
     return item;
   }
  });
console.log(arr2);
console.log(arr3);
console.log(arr2.filter(item => item>3));
console.log(arr2.filter(item => {return item>3}));
console.log(arr2.filter((item) => {return item>=3}));

//Ex:

const arr5 = [1,0,2,3,4,5,1,5,0];
// unique elements
// console.log(arr5.filter((item, idx, arr) => {return arr[item] !== item}));
console.log(arr5.filter((item, idx, arr) => {return arr.indexOf(item) === idx}));
//console.log(arr5.filter((item, idx, arr) => { if(arr.includes(item)){return item;
//}}));

console.log(`Reduce time`); 
// Reduce: reduces an array of values down to just one value.
// not modifying the actual array

// const newArray = array.reduce((accumulator, currentValue, index, currentArray) => {
//    //Reducer logic
//  },initialValue);

const array = [1,2,3,4,5];
const newArray1 = array.reduce((accumulator, currentValue, index, currentArray)=>{
    // console.log(accumulator, currentValue, index, currentArray);
    // console.log(accumulator + currentValue);
    return accumulator + currentValue;
  },0);
  console.log(array);
  console.log(newArray1);

const newArray3 = array.reduce((accumulator, currentValue, index, currentArray)=>{
    // console.log(accumulator, currentValue, index, currentArray);
    // console.log(accumulator + currentValue);
    return accumulator + currentValue;
  });

console.log(array);
console.log(newArray3);

const newArray2 = array.reduce((accumulator, currentValue, index, currentArray)=>{
    // console.log(accumulator, currentValue, index, currentArray);
    // console.log(accumulator + currentValue);
    return accumulator + currentValue;
  },100);

console.log(array);
console.log(newArray2);



// sort comparator

// Actual sort in js
const nums = [3, 55, 63, 1, 46, 21];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i], " ", nums[i].toString().charCodeAt(0));
}
console.log(nums.sort()); //[ 1, 21, 3, 46, 55, 63 ]

// string arrays
const stringArr = ["Joe", "Kapil", "Steve", "Musk"]
stringArr.sort();
// Output  ["Joe", "Kapil", "Musk", "Steve"]
stringArr.reverse();
// Output ["Steve", "Musk", "Kapil", "Joe"]

// numbered array
const array5  = [40, 100, 1, 5, 25, 10];

array5.sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
});

array5.sort((a,b) => a-b);
array5.sort(function(a,b){
  // console.log(a,b,a-b);
  return a-b;
});
// Output [1, 5, 10, 25, 40, 100]
array5.sort((a,b) => b-a);
array5.sort(function(a,b){
  // console.log(a,b,b-1);
  return b-a;
});
// Output [100, 40, 25, 10, 5, 1]

const myArr = [
  {
    name: "Arnold",
    age: 25,
  },
  {
    name: "Tim",
    age: 6,
  },
  {
    name: "Sheila",
    age: 56,
  },
  {
    name: "Zack",
    age: 32,
  },
  {
    name: "Tom",
    age: 82,
  },
];

// Desc based on age
myArr.sort((a,b)=>{
    if(a.age > b.age){
        return -1;
    } else if(a.age < b.age){
        return 1;
    } else {
      return 0;
    }
});
// 0: {name: "Tom", age: 82}
// 1: {name: "Sheila", age: 56}
// 2: {name: "Zack", age: 32}
// 3: {name: "Arnold", age: 25}


// Asc based on age
const comparator = (a,b) => {
    if(a.age < b.age){
        return -1;
    } else if(a.age > b.age){
        return 1;
    } else {
      return 0;
    }
}
myArr.sort(comparator);


// Exception Handling

// obj;

try {
  obj;
} catch (err) {
  console.log(err.name); //Type of Error, here reference err
  console.log(err.message); //Error Message
  // console.log(err.stack); //where the error occurred?
} finally {
  console.log("Hurray we learned it!");
}

// throw

try {
  let arr = [];
  throw new Error("Just for learning");
} catch (err) {
  console.log(err.name); //Type of Error, here reference err
  console.log(err.message); //Error Message
  console.log(err.stack); //where the error occurred?
}