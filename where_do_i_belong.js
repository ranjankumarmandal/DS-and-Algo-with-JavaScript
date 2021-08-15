// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

function getIndexToIns(arr, num) {
    if (arr.length === 0) return 0;
  
    let sortedArr = arr.sort((a, b) => a - b);
  
    for (let i = 0; i < sortedArr.length; i++) {
      if (num >= sortedArr[i] && num <= sortedArr[i + 1]) {
        sortedArr.splice(i + 1, 0, num);
        return sortedArr.indexOf(num);
      }
      else if (num > sortedArr[sortedArr.length - 1]) {
        sortedArr.push(num);
        return sortedArr.indexOf(num);
      }
    }
  }
  
  getIndexToIns([40, 60, 50], 50);