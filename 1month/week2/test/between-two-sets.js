// Between Two Sets
// (Question not copied due to user terms)

function getTotalX(a, b) {
  let firstPass = [];
  let secondPass = [];
  let finalCount = 0;

  for (let i = a[0]; i <= b[0]; i++) {
    if (b[0] % i === 0) firstPass.push(i);
  }

  for (let n of firstPass) {
    let check = true;

    for (let d of b.slice(1)) {
      if (d % n !== 0) {
        check = false;
        break;
      }
    }

    if (check) secondPass.push(n);
  }

  for (let n of secondPass) {
    let check = true;

    for (let d of a) {
      if (n % d !== 0) {
        check = false;
        break;
      }
    }

    if (check) finalCount++;
  }

  return finalCount;
}
