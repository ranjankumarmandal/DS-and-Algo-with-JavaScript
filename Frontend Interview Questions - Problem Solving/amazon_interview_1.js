// Problem - reverse words in a given string

// Problem Solving approach -
// 1. Understand the problem
// 2. Explore the concrete examples
// 3. Break it down
// 4. Solve / simplify
// 5. Look back & refactor

/*
rev('thank you very much') // output: much very you thank
rev('hello there hope all is well') // well is all hope there hello
*/

/*
function rev(str) {
  // convert string to array
  // replace the first place with last place and so on in a result string
  // return the result string
}
*/

// solution 1
// function rev(str) {
//   let arr = str.split(' ');
//   let result = '';
//   for (let i = arr.length-1; i >= 0; i--) result += arr[i] + ' ';
//   return result;
// }

// solution 2 - ES 6 + optimized code
let rev = (str) => {
  let result = '';
  for (let i = str.split(' ').length - 1; i >= 0; i--)
    result += str.split(' ')[i] + ' ';
  return result;
};
rev('hello world google');
