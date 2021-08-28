// Problem Solving Approach
// 1. Understand the problem
// 2. Explore the concrete examples
// 3. Break it down
// 4. Solve / Simplify
// 5. Look Back & Refactor

/*
timeConversion("07:05:45PM") // output : 19:05:45
timeConversion("08:05:45PM") // output : 20:05:45
timeConversion("07:05:45AM") // output : 07:05:45
*/

function timeConversion(s) {
    // Write your code here
    // return time in army time format
    
    // Declare an array and assign the given time string by splitting it with ':'
    // Because for AM, time will need no conversion, so check for PM time, if it is
        // if arr[0] is 12 then keep it 12 only, else add 12 with arr[0]
    // else, check if arr[0] is 12, if it is then make arr[0] to '00' else keep same 
    // return the time
    
    let arr = s.slice(0, 8).split(":");
    arr[0] = (s.indexOf("PM") > -1) ? (arr[0] == 12 ? '12' : Number(arr[0]) + 12) : (arr[0] == 12 ? '00' : arr[0]);
    
    return arr.join(":");
    
}