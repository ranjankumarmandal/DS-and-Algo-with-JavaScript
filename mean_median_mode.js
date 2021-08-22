/*
In Statistics, the average of a sample can be determined in a few ways out of which mean, median (and mode) are the most important metrics.

Write three pure functions as follows:
mean(values = []) - takes in values array and returns a number which is the mean (average) of the values
median(values = []) - takes in the values and returns the median value of the sample. Median is calculated with the following formula
average(values, method) - Takes in two parameters - values array and method callback. returns single value based on the method.
*/

// pure functions vs impure functions or side effects

// mean : sum/length; 15/5 = 3
const values = [1,2,3,4,5];
const values1 = [1,2,2,2,3,4,5,6];
const sum = values.reduce((total,currVal) => total+currVal);
console.log(sum/values.length);

// median : even - mid item, odd (sum of mid 2 items)/2
function gertMedian (arr){
  let midIndex = Math.floor(arr.length/2);
  console.log("midIndex and midItem", midIndex, arr[midIndex]);
  let median = 0;
  if(arr.length % 2 === 0){ // even
    median = Math.floor((arr[midIndex-1]+arr[midIndex])/2);
    console.log("midItem-1 and midItem", arr[midIndex-1], arr[midIndex]);
  } else { // odd
    median = arr[midIndex];
  }
  return median;
}
console.log(gertMedian(values));
console.log(gertMedian(values1));

// mode : most occured item

function getMode(arr){
  const obj = {}; // hashMap 0(1) lookup // new Map
  let mode = 0;
  arr.forEach((item) => {
      obj[item] = obj[item]+1 || 1;
  });
  console.log(obj);
  Object.entries(obj).forEach((item)=>{
      console.log(item);
      if(item[1] > mode){
        mode = item[0];
      }
  });
  return mode;
}

console.log(getMode(values));
console.log(getMode(values1));