// Write a function that accepts two arrays. The function should return 'true' if every value in the array has its corresponding value squared in the second array. The frequency of values must be same.

// Problem Solving Approach
// 1. Understand the problem 
// 2. Explore the concrete examples
// 3. Break it down
// 4. Solve / Simplify
// 5. Look Back & Refactor

/*
same([1, 2, 5, 3], [1, 25, 4, 9]) // output : true
same([1, 2, 5, 3], [1, 2, 4, 9]) // output : false
same([1, 2, 5, 2], [1, 25, 4, 9]) // output : false
same([1, 2, 5, 3, 4], [1, 25, 4, 9]) // output : false
*/

function same(arr1, arr2) {
    // do something
    // return true, if another array has all its value as squared with other and the frequency should be same


    // Check if the arr1.length != arr2.length, then return false
    // else, Loop over arr1...
        // Declare and get a tempIndexOfArr2 which values the squared of arr1[i]
        // if tempIndexOfArr2 === -1, return false
        // else, delete one element of arr2 at tempIndexOfArr2
    // return true

    if(arr1.length !== arr2.length) {
        return false;
    }

    for(let i = 0; i < arr1.length; i++) {
        let tempIndexOfArr2 = arr2.indexOf(arr1[i] ** 2);
        if(tempIndexOfArr2 === -1) {
            return false;
        }
        arr2.splice(tempIndexOfArr2, 1);
    }

    return true;
}


// Look Back & Refactor
function same(arr1, arr2) {
    // Check if the arr1.length != arr2.length, then return false
    // declare two frequency counters fc1 and fc2 as object
    // Loop over arr1...
        // if fc1[arr1] has values increament it or assign this with 1 
    // Loop over arr2...
        // if fc1[arr2] has values increament it or assign this with 1
    // Loop over fc1...
        // check if squared of key of fc1 present in fc2, return false
        // check if value of that related key of fc1 lies in fc2 in squared (of fc1 key), return false   
    // return true

    if(arr1.length != arr2.length) {
        return false;
    }

    let fc1 = {};
    let fc2 = {};

    for(let val of arr1) {
        fc1[val] = ++fc1[val] || 1;
    }

    for(let val of arr2) {
        fc2[val] = ++fc2[val] || 1;
    }

    for(let key in fc1) {
        if(!(key ** 2 in fc2)) {
            return false;
        }

        if(fc1[key] !== fc2[key ** 2]) {
            return false;
        }
    }

    return true;
}

