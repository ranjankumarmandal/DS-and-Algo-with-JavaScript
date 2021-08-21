// Functions can be treated as values also in JS.
// First Class Citizens in Javascript

// Basic functions

// Function Statement: gets hoisted
function getName1(param){
    console.log(param);
 }
 getName1("CrioDo");
 
 // Function Expression / Function Decalration
 // does not het hoisted
 const name = function getName(param){
    console.log(param);
    console.log(getName);
 }
 // getName("CrioDo"); // ReferenceError: getName is not defined
 name("Robin");
 
 ////////////////////////////////////
 
 // High order Functions
 function x(param){
   console.log("inside x");
   console.log(param);
   param();
 }
 
 // 1
 function y(){
   console.log("inside y");
 }
 
 x(y); // function statement as an argument
 
 //2
 //Callback functions as an argument
 x(function y1(){
   console.log("callback - y");
 });
 // a callback is a function passed into another function as an argument to be executed later
 
 //3
 const k = function y2(){
   console.log("function expression - y");
 }
 x(k); // function expression as an argument
 
 
 
 // lexical scope(Parental)
 // if child has access to parent's scope
 
 function parent() {
   const message = "👨 I am from parent";
   function child1() {
     console.log(message, "👧 Called from child 1️⃣");
   }
   // Shadowing
   function child2() {
     const message = "\nChild Message";
     console.log(message, "Called from child 2️⃣\n");
   }
   console.log(message, "Called from outside both children\n");
   child1();
   child2();
 }
 parent();
 
 
 // Closures
 // functions along with reference to it's lexical environment 
 // 1
 function parentFunction() {
   //Lexical Scope of childFunction() START
   let message = "Hi! I'm a message from parent 👋";
   function childFunction() { // closure function
     console.log(message);
   }
   return childFunction;
   //Lexical Scope of childFunction() END
 }
 
 const ans = parentFunction();
 ans();
 
 // 2
 function parentFunction1() {
   //Lexical Scope of childFunction() START
   let message = "Hi! I'm a message from parent 👋";
   return function childFunction() { // closure function
     console.log(message);
   }
   //Lexical Scope of childFunction() END
 }
 
 const ans1 = parentFunction1();
 ans1();
 
 
 // Anonymous function 
 //function () {
 //}
 // SyntaxError: Function statements require a function name;
 const k1 = function() {
  console.log("inside k");
 }
 k1();
 // inside k
 
 // do not have own identity
 // 3
 function parentFunction2() {
   //Lexical Scope of childFunction() START
   let message = "Hi! I'm a message from parent 👋";
   return function () { // closure function
     console.log(message);
   }
   //Lexical Scope of childFunction() END
 }
 
 parentFunction2()();
 (parentFunction2())();
 
 // IIFE 
 // immediatley invoked functions
 
 (function() {
  console.log("inside k");
 })();
 // inside k
 
 
 // Callbacks
 
 // a callback is a function passed into another function as an argument to be executed later
 
 /*
 Since functions in JS are accessed by reference, we technically just pass a reference to a function which acts as a placeholder for the function.
 */
 
 
 function withCurrencyPrefix(value, formatter){
   return formatter(value); // formatter is callback
 }
 
 //Formatter functions
 function rupee(value){ return "₹" + value};
 function dollar(value){ return "$" + value};
 function euro(value){ return "€"+ value};
 
 console.log(withCurrencyPrefix(10, rupee)); //₹10
 console.log(withCurrencyPrefix(15, dollar)); //$10
 
 // obj
 
 const obj = {1: 55};
 // obj
 // {1: 55}
 
 // Map
 // 1
 const myMap = new Map([
   ["a", 1],
   [4, 5],
   [true, 1],
 ]);
 console.log(myMap);
 console.log(typeof myMap);
 //Map(3) { 'a' => 1, 4 => 5, true => 1 }
 
 //2 
 const myMap1 = new Map();
 myMap1.set("a", "1");
 myMap1.set(true, 55);
 console.log(myMap1);
 
 myMap1.get(true); // 55
 myMap1.has(true); // true
 
 myMap.keys();
 // MapIterator {"a", 4, true}
 myMap.values();
 // MapIterator {1, 5, 1}
 myMap.entries();
 // MapIterator {"a" => 1, 4 => 5, true => 1}
 
 // Set
 // unique collection of elements
 // not a key value collecton
 const mySet = new Set([1, "b", "b"]);
 mySet.add("address");
 console.log(mySet);
 console.log(typeof mySet);
 // Set(3) { 1, 'b', 'address' } // Omits the 'b' character which is passed twice.
 
 mySet.keys();
 // SetIterator {1, "b", "address"}
 mySet.values();
 // SetIterator {1, "b", "address"}
 mySet.entries();
 // SetIterator {1 => 1, "b" => "b", "address" => "address"}