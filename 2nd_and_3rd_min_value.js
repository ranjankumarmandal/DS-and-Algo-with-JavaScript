
function solution(array) {
    let result = [];
    var MAX = 10000;
    let n = array.length;
    let firstmin = MAX, secmin = MAX, thirdmin = MAX;
    for (let i = 0; i < n; i++)
    {
        if (array[i] < firstmin)
        {
            thirdmin = secmin;
            secmin = firstmin;
            firstmin = array[i];
        }
 
        else if (array[i] < secmin)
        {
            thirdmin = secmin;
            secmin = array[i];
        }
 
        else if (array[i] < thirdmin)
            thirdmin = array[i];
    };

    result.push(secmin);
    result.push(thirdmin);
    return result;

}

console.log(solution([11, 3, 12, 544, 35, 30, 34]));

