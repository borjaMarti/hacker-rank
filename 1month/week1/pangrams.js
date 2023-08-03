// Pangram

// A pangram is a string that contains every letter of the alphabet. Given a
// sentence determine whether it is a pangram in the English alphabet. Ignore
// case. Return either pangram or not pangram as appropriate.

function pangrams(s) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  const sLower = s.toLowerCase();

  for (let l of ALPHABET) {
    if (!sLower.includes(l)) {
      return "not pangram";
    }
  }

  return "pangram";
}
