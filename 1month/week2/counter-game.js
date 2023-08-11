// Counter game

// Louise and Richard have developed a numbers game. They pick a number and
// check to see if it is a power of 2. If it is, they divide it by 2. If not,
// they reduce it by the next lower number which is a power of 2. Whoever
// reduces the number to 1 wins the game. Louise always starts.

// Given an initial value, determine who wins the game.

function counterGame(n, c = 1) {
  if (n === 1) return c % 2 === 0 ? "Louise" : "Richard";
  if (Math.log2(n) % 1 === 0) return counterGame(n / 2, c + 1);
  let pow = 2;
  while (pow < n) {
    pow *= 2;
  }
  pow /= 2;
  return counterGame(n - pow, c + 1);
}
