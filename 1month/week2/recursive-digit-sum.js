// Recursive Digit Sum

// We define super digit of an integer x using the following rules:

// Given an integer, we need to find the super digit of the integer.

//   - If x has only digit, then its super digit is x.
//   - Otherwise, the super digit of x is equal to the super digit of the sum of
//   the digits of x.

// The number x will be created by concatenating the string n k times.

function superDigit(n, k) {
  if (n - 10 < 0) return n;
  let newN = n
    .toString()
    .split("")
    .reduce((a, b) => a + +b, 0);
  if (k) return superDigit(newN * k);
  return superDigit(newN);
}
