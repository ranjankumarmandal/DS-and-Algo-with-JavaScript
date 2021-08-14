function sumAll(arr) {
    let biggerNumber = Math.max(...arr);
    let smallerNumber = Math.min(...arr)
  
    let total = biggerNumber + smallerNumber
  
    for (let i = smallerNumber + 1; i < biggerNumber; i++) {
      total += i
    }
  
    return total;
  }
  
  sumAll([1, 4]);