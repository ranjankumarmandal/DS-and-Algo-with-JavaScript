// write a function which takes in a string and returns counts of each chracter in the string

/* 

Problem solving approach -
1. Understand the problem
2. Explore concrete examples
3. Break it down
4. solve / simplity
5. Look Back & Refactor

*/

// Explore concrete examples
charCount("aaaa");  // {a : 4}
charCount("hello"); // {h : 1, e : 1, l : 2, o : 1}
charCount("1 hi !!"); // {1 : 1, h : 1, i : 1}

// Break it down
function charCount(str) {
    // do something
    // return object with number of character counts in the given string
}

function charCount(str) {
    // make object to return at end
    // loop over each character...
        // if char is a Number/Letter and is a key in the object, add one to counts
        // if char is a Number/Letter and is not in object, add it to object and set value to 1
        // if char is something else (spaces, symbols, etc), don't do anything        
    // return object
}

// Solve / Simplify
function charCount(str) {
    let result = {};
    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            if(result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }

    return result;
}


// Look Back & Refactor
function charCount(str) {
    let result = {};
    for(let char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1;
        }
    }

    return result;
}
