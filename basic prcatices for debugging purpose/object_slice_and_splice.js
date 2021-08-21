// concepts => dynamic collection of properties and methods
//key : value
//string or symbol : string, number, undefined, null, boolean, array, objects, or function
// keys are always string, because strings are immutable
// everything in JS except function and all, everything is object in JavaScript
//type coersion

//create object
let human = {
    "name": "Naruto Uzumaki",
    "age": 17,
    "village": "Leaf Village", 
    "getAge": function(){
          return this.age;
          },
    "isNinja": true
  }
  
  
  //access object
  console.log(human);
  console.log(human.name);
  console.log(human['name']);
  console.log(human.age);
  console.log(human.getAge());
  
  //Update or change props / methods
  human.age = 19;
  console.log(human.age);
  
  //add props to existing object
  human.city = 'bangalore';
  human.getName = function() {
    return this.name;
  }
  console.log(human.city);
  
  //delete object props 
  delete human.isNinja;
  console.log(human);
  
  // -------------- Array ---------------
  // Array : ordered collection of properties and methods
  console.log(`--------- Array -------------`); // backticks
  let simpleArray = ['one', 2, 'three', true, false, undefined, null];
  
  //access
  console.log(simpleArray); //'one', 2, 'three', true, ..
  console.log(simpleArray[0]); //"one"
  simpleArray[1] = "two"; //mutation in place
  
  //update
  simpleArray[2] = "Three";
  console.log(simpleArray[2]); //"Three"
  
  //delete
  delete simpleArray[1];
  console.log(simpleArray); //"one"
  
  // Array Methods
  
  const fruits = ['mango', 'watermelon', 'papaya', 'kaddu', 'kiwi'];
  console.log(fruits.length);
  
  // --- add elements -last and first 
  fruits.push('banana');
  fruits.unshift('jerry');
  console.log(fruits);
  
  // --- remove elements -last and first
  fruits.pop();
  fruits.shift();
  console.log(fruits);
  
  // -- slice and splice
  fruits.slice(2, 4);
  console.log(fruits.slice(2, 4));
  
  fruits.splice(1, 1, "tomato"); // insert value at index, delete number of values from the inserted value index, value
  console.log(fruits);
  
  //---------- Array vs object
  const arr = [4,7,8,0,6];
  const obj = {"name":"crio.do"};
  let a = 5;
  let b = 'h';
  let c = false;
  
  console.log(Array.isArray(obj));
  console.log(Array.isArray(arr));
  
  console.log(typeof arr);
  console.log(typeof obj);
  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);
  
  
  