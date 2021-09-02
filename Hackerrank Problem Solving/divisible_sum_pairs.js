// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    result += ar.slice(i + 1, n).filter((item, index) => {
      if ((item + ar[i]) % k === 0) {
        return item;
      }
    }).length;
  }
  return result;
}
