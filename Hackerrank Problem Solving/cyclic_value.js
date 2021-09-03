// TODO: Implement this method
function cyclicRotation(n, arr, k) {
    // do something
    // return cyclic rotation value

    // Loop over value of k...
        // unshift the value of poped value
    // return arr

    for(let i = 0; i < k; i++) {
        let value = arr.pop();
        arr.unshift(value);
    }

    return arr;
}