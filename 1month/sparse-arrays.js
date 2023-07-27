// Sparse Arrays

// There is a collection of input strings and a collection of query strings. For
// each query string, determine how many times it occurs in the list of input
// strings. Return an array of the results.

function matchingStrings(strings, queries) {
  const queriesMap = new Map(queries.map((q) => [q, 0]));

  for (let string of strings) {
    if (queriesMap.has(string)) {
      let queryValue = queriesMap.get(string) + 1;
      queriesMap.set(string, queryValue);
    }
  }

  return queries.map((q) => queriesMap.get(q));
}
