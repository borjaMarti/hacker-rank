// Counting Sort 1

// Comparison Sorting
// Quicksort usually has a running time of n x log(n), but is there an algorithm
// that can sort even faster? In general, this is not possible. Most sorting
// algorithms are comparison sorts, i.e. they sort a list just by comparing the
// elements to one another. A comparison sort algorithm cannot beat n x log(n)
// (worst-case) running time, since n x log (n) represents the minimum number of
// comparisons needed to know where to place each element.

// Alternative Sorting
// Another sorting method, the counting sort, does not require comparison.
// Instead, you create an integer array whose index range covers the entire
// range of values in your array to sort. Each time a value occurs in the
// original array, you increment the counter at that index. At the end, run
// through your counting array, printing the value of each non-zero valued index
// that number of times.

// Given a list of integers, count and return the number of times each value
// appears as an array of integers.

// For this exercise, always return a frequency array with 100 elements. The
// example above shows only the first 4 elements, the remainder being zeros.

function countingSort(arr) {
  let ans = Array(100).fill(0);

  for (let i = 0; i < arr.length; i++) {
    ans[arr[i]]++;
  }

  return ans;
}
