function isPrime(num) {
    if(num == 0 || num == 1) {
      return false;
    }
  
    let result = true;
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i == 0) {
        result = false;
      }
    }
  
    return result;
  }
  
  function sumPrimes(num) {
    let sum = 0;
    for(let i = 0; i <= num; i++) {
      if(isPrime(i)) {
        sum = sum + i;
      }
    }
  
    return sum;
  }