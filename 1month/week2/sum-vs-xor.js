// Sum vs XOR

// Given an integer n, find each x such that:
//   - 0 <= x <= n
//   - n + x === n ^ x
// where ^ denotes the bitwise XOR operator. Return the number of x's satisfying
// the criteria.

// Naive first solution:

function sumXor(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (n + i === (n ^ i)) count++;
  }
  return count;
}

// Efficicient solution (needed help):

function sumXor(n) {
  if (n === 1 || n === 0) return 1;

  let count = 0;
  let bitN = n.toString(2);

  for (let d of bitN) {
    if (d === "0") count++;
  }

  return 2 ** count;
}
