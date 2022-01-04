// find solution for -    sum(1)(2)(3)(4)();

// Problem Solving approach
// 1. Understand the problem
// 2. Explore the concrete examples
// 3. Break it down
// 4. Solve / simplify
// 5. Look back & refactor

/*
sum(1)(2)(3)(4)();  // output: 10
sum(1)(2)(3)(5)();  // output: 11
sum(1)(2)(3)(6)();  // output: 12
*/

// We can achieve this problem by usig 'function currying' concept in JavaScript.

// solution 1
let sum = function (a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function () {
          return a + b + c + d;
        };
      };
    };
  };
};

sum(1)(2)(3)(4)();
