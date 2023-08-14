// Palindrome Index

// (Question not copied due to user terms)

function palindromeIndex(s) {
  let index = null;
  let modifier = 0;
  let check = false;

  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i + modifier]) {
      if (check) return -1;
      check = true;
      if (
        s[i + 1] === s[s.length - 1 - i] &&
        s[i + 2] === s[s.length - 2 - i]
      ) {
        index = i;
        modifier++;
      } else {
        index = s.length - 1 - i;
        modifier--;
      }
    }
  }

  return index ?? -1;
}
