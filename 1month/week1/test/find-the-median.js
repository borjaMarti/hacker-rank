// Find the Median

// (Question not copied due to user terms)

function findMedian(arr) {
  let sortedArr = [...arr].sort((a, b) => a - b);
  return sortedArr[Math.floor(sortedArr.length / 2)];
}
