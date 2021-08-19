// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

function smallestCommons(arr) {
    arr = arr.sort((a, b) => b - a);
    let [high, low] = arr;
    let multiple = high;
  
    for (let i = low; i < high; i++) {
      if (multiple % i !== 0) {
        multiple += high;
        i = low - 1;
      } else if (i == high) {
        return multiple;
      }
    }
    return multiple;
  }
  
  
  smallestCommons([1,5]);