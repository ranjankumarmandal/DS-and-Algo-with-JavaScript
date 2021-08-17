const arr = ["ranjan", 1, 2, 5, 3, true, 7, null, [11, 22, 55], 9];

console.log(arr);

arr.push(8);                                   // O(1)
arr.pop();                                     // O(1)

arr.unshift(12);                               // O(n)
arr.shift();                                   // O(n)

console.log(arr.slice(2, 5));                  // O(n)
arr.splice(3, 2, "hello");                     // O(n)
console.log(arr);                              // O(n)

console.log(arr.concat([88, 98]));            // O(n)
console.log(arr);                             

arr[8].sort();                                // O(n*log(n))
//forEach/map/filter/reduce/etc                 // O(n)


/* 
Access - O(1)
Insertion -O(n)
Deletion - O(n)
Searching - O(n)
*/