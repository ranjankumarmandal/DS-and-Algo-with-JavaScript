// https://www.hackerrank.com/challenges/the-birthday-bar/problem?h_r=next-challenge&h_v=zen

function birthday(s, d, m) {
  // Write your code here
  let count = 0;
  for (let a = 0; a < s.length; a++) {
    let sum = 0;
    let slice = s.slice(a, a + m);
    sum = slice.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    if (sum === d && slice.length === m) {
      count += 1;
    }
  }
  return count;
}
