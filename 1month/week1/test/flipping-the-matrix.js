// Flipping the Matrix

// (Question not copied due to user terms)

function flippingMatrix(matrix) {
  let n = matrix.length / 2;
  let ans = 0;

  for (let col = 0; col < n; col++) {
    for (let row = 0; row < n; row++) {
      ans += Math.max(
        matrix[row][col],
        matrix[matrix.length - 1 - row][col],
        matrix[row][matrix.length - 1 - col],
        matrix[matrix.length - 1 - row][matrix.length - 1 - col]
      );
    }
  }

  return ans;
}
