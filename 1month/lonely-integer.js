// Lonely Integer

// Given an array of integers, where all elements but one occur twice, find the
// unique element.

function lonelyinteger(a) {
  let intSet = new Set();

  for (let int of a) {
    if (intSet.has(int)) {
      intSet.delete(int);
    } else intSet.add(int);
  }

  for (let value of intSet.values()) {
    return value;
  }
}
