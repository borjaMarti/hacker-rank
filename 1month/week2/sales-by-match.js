// Sales By Match

// There is a large pile of socks that must be paired by color. Given an array
// of integers representing the color of each sock, determine how many pairs of
// socks with matching colors there are.

function sockMerchant(n, ar) {
  const sockMap = new Map();
  for (let sock of ar) {
    let tally = sockMap.get(sock);
    sockMap.set(sock, tally ? tally + 1 : 1);
  }

  return Array.from(sockMap.values()).reduce((acc, color) => {
    return acc + Math.floor(color / 2);
  }, 0);
}
