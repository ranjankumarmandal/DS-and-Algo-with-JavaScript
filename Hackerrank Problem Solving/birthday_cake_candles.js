// Problem Solving approach
// 1. Understand the problem
// 2. Explore the concrete examples
// 3. Break it down
// 4. Solve / Simplify
// 5. Look Back & Refactor


/*
birthdayCakeCandles([1, 2, 1, 3]) // output : 1
birthdayCakeCandles([1, 2, 3, 3]) // output : 2
birthdayCakeCandles([1, 2, 1, 3, 3]) // output : 2
birthdayCakeCandles([]) // output : no values provided
*/

function birthdayCakeCandles(candles) {
    // Write your code here
    // return the number of candles that are tallest
    
    // Declare max and assign it to 0 
    // Declare for count of the tallest candle's or max
    // Loop over the candle array...
        // if candle[i] == max
            // count++;
    // Return the count value
    
    let max = Math.max(...candles);
    let count = 0;
    
    for(let value of candles) {
        if(value === max) {
            count++;
        }
    }
    
    return count;
}