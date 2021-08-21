// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem

const squareList = arr => {
    // Only change code below this line
    const positiveIntegers = arr.filter(num => {
      return num >= 0 && Number.isInteger(num);
    });
    const squaredIntegers = positiveIntegers.map(num => {
      return num ** 2;
    });
    return squaredIntegers;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);