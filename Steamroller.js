// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

function steamrollArray(arr) {
    let flattened = [];
  
    arr.map((val) => {
      if (!Array.isArray(val)) {
        flattened.push(val);
      } else {
        flattened.push(...steamrollArray(val));
      }
    });
  
    return flattened;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);