// Plus Minus

// Given an array of integers, calculate the ratios of its elements that are
// positive, negative, and zero. Print the decimal value of each fraction on a
// new line with 6 places after the decimal.

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach((n) => {
    if (n > 0) positive++;
    if (n < 0) negative++;
    if (n === 0) zero++;
  });

  let positiveRatio = positive / arr.length;
  let negativeRatio = negative / arr.length;
  let zeroRatio = zero / arr.length;

  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}
