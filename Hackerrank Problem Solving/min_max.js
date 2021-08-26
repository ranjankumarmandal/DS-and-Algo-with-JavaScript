// Problem Solving approach
// 1. Understand the problem
// 2. Explore the concrete examples
// 3. Break it down
// 4. Solve / Simplifiy
// 4. Look back & Refactor


function miniMaxSum(arr) {
    // Write your code here
    //let min = 0, max = 0;
    // declare min, max and assign as 0 and create a temp array
    // Loop over the arr...
        // add all the element except arr[i] and assign those value in temp array
    // print min and max of temp array
    
  let sum = arr.reduce((a, b) => {
    return a + b;
  });
  const min = sum - Math.max(...arr);
  const max = sum - Math.min(...arr);
  console.log(min + " " + max);

}