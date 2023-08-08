// Caesar Cipher

// Julius Caesar protected his confidential information by encrypting it using a
// cipher. Caesar's cipher shifts each letter by a number of letters. If the
// shift takes you past the end of the alphabet, just rotate back to the front
// of the alphabet. In the case of a rotation by 3, w, x, y and z would map to
// z, a, b and c.

function caesarCipher(s, k) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  const UPPERALPHABET = ALPHABET.toUpperCase();

  return s
    .split("")
    .map((c) => {
      let cLower = ALPHABET.indexOf(c);
      let cUpper = UPPERALPHABET.indexOf(c);

      if (cLower !== -1) {
        return ALPHABET[(cLower + k) % 26];
      } else if (cUpper !== -1) {
        return UPPERALPHABET[(cUpper + k) % 26];
      } else return c;
    })
    .join("");
}
