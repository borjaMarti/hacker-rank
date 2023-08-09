// Dynamic Array

// Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero
// indexed.

// Declare an integer, lastAnswer, and initialize it to 0.

// There are 2 types of queries, given as an array of strings for you to parse:

// 1. Query: 1 x y
//   1. Let idx = ( (x ^ lastAnswer) % n ).
//   2. Append the integer y to arr[idx].
// 2. Query: 2 x y
//   1. Let idx = ( (x ^ lastAnswer) % n ).
//   2. Assign the value arr[idx][y % size(arr[idx])] to lastAnswer.
//   3. Store the new value of lastAnswer to an answers array.

function dynamicArray(n, queries) {
  let arr = Array.from(Array(n), () => []);
  let lastAnswer = 0;
  let answers = [];

  queries.forEach((q) => {
    if (q[0] === 1) {
      arr[(q[1] ^ lastAnswer) % n].push(q[2]);
    } else {
      lastAnswer =
        arr[(q[1] ^ lastAnswer) % n][
          q[2] % arr[(q[1] ^ lastAnswer) % n].length
        ];
      answers.push(lastAnswer);
    }
  });

  return answers;
}

// Initially, I used new Array(n).fill([]). The problem is, arrays (and objects
// in general) being references, the same array was used to fill the parent
// array, resulting in failure. Creating a new array with Array.from and using
// the map callback to return an array for each element results in new arrays
// being generated for each instance, solving the problem.
