// Drawing Book

// A teacher asks the class to open their books to a page number. A student can
// either start turning pages from the front of the book or from the back of the
// book. They always turn pages one at a time. When they open the book, page 1
// is always on the right side.

// When they flip page 1, they see pages 2 and 3. Each page except the last page
// will always be printed on both sides. The last page may only be printed on
// the front, given the length of the book. If the book is pages n long, and a
// student wants to turn to page p, what is the minimum number of pages to turn?
// They can start at the beginning or the end of the book.

// Given n and p, find and print the minimum number of pages that must be turned
//  in order to arrive at page p.

function pageCount(n, p) {
  let middle = n / 2;

  if (p === 1 || p === n || (p % 2 === 0 && n - p === 1)) return 0;

  if (p <= middle) return Math.floor(p / 2);

  if (n % 2 === 0) return Math.floor((n + 1 - p) / 2);

  return Math.floor((n - p) / 2);
}
