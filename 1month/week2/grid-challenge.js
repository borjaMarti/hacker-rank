// Grid Challenge

// Given a square grid of characters in the range ascii[a-z], rearrange elements
// of each row alphabetically, ascending. Determine if the columns are also in
// ascending alphabetical order, top to bottom. Return YES if they are or NO if
// they are not.

function gridChallenge(grid) {
  let hashArr = Array(grid[0].length).fill(0);

  for (let s of grid) {
    let check = false;

    s.split("")
      .sort()
      .forEach((c, colI) => {
        if (hashArr[colI] > c) check = true;
        hashArr[colI] = c;
      });

    if (check) return "NO";
  }

  return "YES";
}

// .sort automatically orders strings, but if using a callbackFn, remember
// to use a.localeCompare(b) for strings instead of a - b (ask me why).
