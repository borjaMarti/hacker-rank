// Anagram
// (Question not copied due to user terms)

function anagram(s) {
  if (s.length % 2 !== 0) return -1;
  let a = s.slice(0, s.length / 2);
  let b = s.slice(s.length / 2);
  let differMap = new Map();
  let count = 0;

  for (let c of a) {
    if (differMap.has(c)) {
      differMap.set(c, differMap.get(c) + 1);
    } else {
      differMap.set(c, 1);
    }
  }

  for (let c of b) {
    if (differMap.has(c)) {
      differMap.set(c, differMap.get(c) - 1);
    } else {
      differMap.set(c, -1);
    }
  }

  for (let c of differMap) {
    if (c[1] > 0) count += c[1];
  }

  return count;
}
