//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

function diffArray(arr1, arr2) {
    let result = [];
    for(let i = 0; i < arr1.length; i++) {
        if(!arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    
    for(let i = 0; i < arr2.length; i++) {
        if(!arr1.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }

    return result;
}
  
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));