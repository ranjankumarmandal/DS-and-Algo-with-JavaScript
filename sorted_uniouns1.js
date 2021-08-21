// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

function uniteUnique(arr) {
    const arrArgs = [...arguments];
    const union = [];
    for (let i = 0; i < arrArgs.length; i++) {
      for (let j = 0; j < arrArgs[i].length; j++) {
        if (union.indexOf(arrArgs[i][j]) == -1) {
          union.push(arrArgs[i][j]);
        }
      }
    }
    return union;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);