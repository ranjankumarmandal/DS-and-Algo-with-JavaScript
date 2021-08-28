// Given two string. Write a function to determine whether the second string is anagram to another.

// Problem Solving Approach
// 1. Understand the problem
// 2. Explore the concrete examples
// 3. Break it down
// 4. Solve / Simplify
// 5. Look Back & Refactor

/*
anagram("anagram", "agaranm") // output : true
anagram("", "") // output : true
anagram("anagram", "ana") // output : false
anagram("hi", "hi hello") // output : false
*/

//Break it down
function anagram(str1, str2) {
    // do something
    // return true if str2 is anagram to str1, else retur false

    // check for length of str1 and str2, if not same return false
    // Make strings to array with same name
    // Loop over str1...
        // define indexTemp for str2 having the value of str1[i]
        // check if indexTemp has -1 value then return false
        // remove str1[i] at str2
    // return true

    if(str1.length != str2.length) {
        return false;
    }

    str1 = str1.split("");
    str2 = str2.split("");

    for(let i = 0; i < str1.length; i++) {
        let indexTemp = str2.indexOf(str1[i]);
        if(indexTemp === -1) {
            return false;
        }
        str2.splice(indexTemp, 1);
    }

    return true;
}

anagram("", "")