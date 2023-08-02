// Permuting Two Arrays

// There are two n-element arrays of integers, A and B. Permute them into some
// A' and B' such that the relation A'[i] + B'[i] >= k holds for all i where
// 0 <= i < n.

// There will be q queries consisting of A, B, and k. For each query, return YES
// if some permutation A', B' satisfying the relation exists. Otherwise, return
// NO.

function twoArrays(k, A, B) {
  const A2 = [...A].sort((a, b) => a - b);
  const B2 = [...B].sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    if (A2[i] + B2[i] < k) return "NO";
  }

  return "YES";
}
