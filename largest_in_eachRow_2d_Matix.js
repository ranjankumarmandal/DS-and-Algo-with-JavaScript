function largest(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let max = arr[i][0]; 
        for(let j = 1; j < arr[i].length; j++) {
            if(max < arr[i][j]) {
                max = arr[i][j];
            }
        }
        result.push(max);
    }

    return result;
}

console.log(largest([[1, 2, 3, 4, 5], [2, 3, 11, 23, 90], [54, 1, 2, 4, 2], [111, 123, 9]]));