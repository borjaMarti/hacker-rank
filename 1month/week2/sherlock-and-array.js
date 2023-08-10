// Sherlock and Array

// Watson gives Sherlock an array of integers. His challenge is to find an
// element of the array such that the sum of all elements to the left is equal
// to the sum of all elements to the right.

function balancedSums(arr) {
  let left = 0;
  let right = arr.slice(1).reduce((a, b) => a + b, 0);
  for (let i = 0; i <= arr.length - 1; i++) {
    if (left === right) return "YES";
    left += arr[i];
    right -= arr[i + 1];
  }

  return "NO";
}
