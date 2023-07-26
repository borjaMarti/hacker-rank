// Mini-Max Sum

// Given five positive integers, find the minimum and maximum values that can be
// calculated by summing exactly four of the five integers. Then print the
// respective minimum and maximum values as a single line of two space-separated
// long integers.

function miniMaxSum1(arr) {
  const orderedArr = [...arr].sort((a, b) => a - b);
  const minSum = orderedArr[0] + orderedArr[1] + orderedArr[2] + orderedArr[3];
  const maxSum = orderedArr[1] + orderedArr[2] + orderedArr[3] + orderedArr[4];

  console.log(`${minSum} ${maxSum}`);
}

function miniMaxSum2(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let n of arr) {
    if (n > max) max = n;
    if (n < min) min = n;
    sum += n;
  }

  console.log(`${sum - max} ${sum - min}`);
}
