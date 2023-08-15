// Sherlock and the Valid String

// Sherlock considers a string to be valid if all characters of the string
// appear the same number of times. It is also valid if he can remove just 1
// character at 1 index in the string, and the remaining characters will occur
// the same number of times. Given a string s, determine if it is valid. If so,
// return YES, otherwise return NO.

function isValid(s) {
  const cMap = new Map();
  let counter = null;
  let check = false;

  for (let c of s) {
    if (cMap.has(c)) {
      cMap.set(c, cMap.get(c) + 1);
    } else cMap.set(c, 1);
  }

  for (let c of cMap) {
    console.log(c);
    if (!counter) counter = c[1];
    if (c[1] !== counter) {
      if (check) return "NO";
      check = true;
      if (c[1] === 1) {
        continue;
      } else if (Math.abs(counter - c[1]) > 1) return "NO";
    }
  }

  return "YES";
}
